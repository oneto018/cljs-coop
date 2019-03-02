(ns cljs-coop.editor
  (:require ["react" :rename {useState use-state useEffect use-effect useRef use-ref}]
            ["load-js" :as load-js]
            [hx.react :as hx]
            [cljs-coop.load :as ld]
            [goog.object :as gobj]))


(defn get-ref [ref] (gobj/get ref "current"))
(defn set-ref [ref v] (gobj/set ref "current" v))
(defn get-editor [ref] (-> (.-current ref)
                           (.-CodeMirror)))

(hx/defnc editor [{:keys [content on-change parinfer]}]
  (let [editor-ref (use-ref)
        inst (atom nil)
        instance-ref (use-ref)]
    (use-effect
     (fn []
       (let [instance (js/CodeMirror.fromTextArea
                       (get-ref editor-ref)
                       #js{:matchBrackets true
                           :mode "text/x-clojure"
                           :theme "ambiance"
                           :styleActiveLine true
                           :lineNumbers true
                           :lineWrapping true})]
         (.on instance "change" (fn [_editor]
                                  (on-change (.getValue _editor))))
         (js/parinferCodeMirror.init instance "smart")
         (reset! inst instance)
         (set-ref instance-ref instance))
       #())
     #js[])
    (use-effect 
     (fn []
       (let [inst (get-ref instance-ref)]
         (if parinfer
           (js/parinferCodeMirror.enable inst)
           (js/parinferCodeMirror.disable inst)))
       #())
     #js[parinfer])
    (use-effect
     (fn [] (let [_editor @inst]
              (when _editor
                (do (.setValue @inst content)))
              #())) [])
    [:div {:class "code-mirror-container"}
     [:textarea {:ref editor-ref :placeholder "write code here"}]]))
