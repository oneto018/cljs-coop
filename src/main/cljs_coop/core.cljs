(ns cljs-coop.core
  (:require ["react" :as react]
            ["react-dom" :as react-dom]
            [hx.react :as hx]
            [cljs-coop.load :as ld]
            [cljs-coop.editor :as editor]
            [goog.object :as gobj]
            [cljs-coop.devtools :as dev]
            [cljs-coop.state :as state]
            [cljs-coop.compiler :as compiler]))

(dev/init)


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
   [:pre (state/pprint-raw children)]])

(hx/defnc test-component []
  [:div
   [:h1 "loaded component"]])

(hx/defnc my-component []
  (let [[state dispatcher] (state/use-state-reducer)
        result (get state :result)
        code (get state :code)]
    [:div
     [preview {:title "code"} code]
     [preview {:title "result"} (state/pprint-raw result)]
    
     [:button {:on-click #(compiler/compile-and-put-state code dispatcher result)} "compile2"]
     [editor/editor {:content "(+ 1 1)" :on-change #(dispatcher {:type :update-code :payload %})}]]))



(defn ^:dev/after-load init []
  (react-dom/render (hx/f [my-component]) (get-element "#app-main")))


