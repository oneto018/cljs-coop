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
            [cljs-coop.iframe :as ifr]
            [cljs-coop.jar-load :as jar-load]))


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

(hx/defnc debug [{:keys [children]}]
  [react/Fragment
   [:h5 "result"]
   [:pre children]])

(defn json-pretty-print [data]
  (js/JSON.stringify data nil 2))

(defn share-code! [code]
  (gobj/set js/location "hash" code)
  (js/prompt "share this url to share this code" js/location))

(hx/defnc my-component []
  (let [[state dispatcher] (state/use-state-reducer)
        result (get state :result)
        code (get state :code)
        parinfer (get state :parinfer)
        code-to-compile (get state :code-to-compile)]
    [:div {:class-name "container"}
     [:div {:class-name "tool-bar"}
      [:button {:on-click #(dispatcher {:type :code-compile :payload code }) :class-name "btn btn-primary"} "compile"]
      [:button {:on-click #(dispatcher {:type :toggle-parinfer}) :class-name "btn"} (if parinfer "disable parinfer" "enable-parinfer")]
      [:button {:class-name "btn btn-success" :on-click #(share-code! code)}
       [:i {:class-name "icon icon-share"}]   " share this code "]
      ]
     [:div {:class-name "columns col-gapless"}
      [:div {:class-name "column col-7"}
       [editor/editor
        {:content code
         :on-change #(dispatcher {:type :update-code :payload %})
         :parinfer parinfer}]]
      [:div {:class-name "column col-5"}
       [ifr/iframe-component {:code code-to-compile :html "<div id='app'></div>" :load-fn compiler/load-fn :dispatcher dispatcher}]]]
     [:div {:class-name "columns col-gapless"}
      [:div {:class-name "column col-8  debugger-container"}
       [debug (json-pretty-print result)]]]
     ]))



(defn ^:dev/after-load init []
  (react-dom/render (hx/f [my-component]) (get-element "#app-main")))


