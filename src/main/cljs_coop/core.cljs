(ns cljs-coop.core
  (:require ["react" :as react]
            ["react-dom" :as react-dom]
            [hx.react :as hx]
            [cljs-coop.load :as ld]
            [cljs-coop.editor :as editor]
            [goog.object :as gobj]
            [cljs-coop.devtools :as dev]
            [cljs-coop.state :as state]
            [cljs-coop.compiler :as compiler]
            [cljs-coop.iframe :as ifr]))

(when js/goog.DEBUG
  (dev/init))



;;from Mike Fikes https://stackoverflow.com/a/49848352
(extend-type object
  ILookup
  (-lookup
    ([o k]
     (gobj/get o (name k)))
    ([o k not-found]
     (gobj/get o (name k) not-found))))





(defn get-element [selector]
  (.querySelector js/document selector))

(def log (.-log js/console))

(hx/defnc preview [{:keys [children title]}]
  [react/Fragment
   (when title [:h5 title])
   [:pre (js/JSON.stringify (clj->js children) nil 2)]])

(hx/defnc test-component []
  [:div
   [:h1 "loaded component"]])

(hx/defnc my-component []
  (let [[state dispatcher] (state/use-state-reducer)
        result (get state :result)
        code (get state :code)
        code-to-compile (get state :code-to-compile)]
    [:div
     [preview {:title "code"} code]
     [preview {:title "result"} (state/pprint-raw result)]
     [:button {:on-click #(dispatcher {:type :code-compile :payload code})} "compile2"]
     [editor/editor {:content code :on-change #(dispatcher {:type :update-code :payload %})}]
     [ifr/iframe-component {:code code-to-compile :html "<div id='app'></div>" :load-fn compiler/load-fn :dispatcher dispatcher}]]))



(defn ^:dev/after-load init []
  (react-dom/render (hx/f [my-component]) (get-element "#app-main")))


