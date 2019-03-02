(ns cljs-coop.iframe
  (:require ["react" :rename {useState use-state useEffect use-effect useRef use-ref}]
            [goog.object :as gobj]
            [hx.react :as hx]
            [promesa.core :as p]
            [promesa.async-cljs :refer-macros [async]]))

(defn write-html-to-iframe! [iframe-ref html]
  (let [iframe (gobj/get iframe-ref "current")
        src (gobj/get iframe "src")
        document (gobj/getValueByKeys iframe #js["contentWindow" "document"])
        body #(gobj/get document "body")]
    (gobj/set iframe "src" src)
    (p/promise
     (fn [resolve reject]
       (gobj/set iframe
                 "onload"
                 (fn []
                   (if (body) (gobj/set (body) "innerHTML" html)
                       (js/console.warn "body null" iframe iframe-ref))
                   (resolve 1)))))))

(defn get-compile-fn [iframe-ref]
  (let [iframe (gobj/get iframe-ref "current")]
    (js/console.log "iframe-ref" iframe-ref)
    (gobj/getValueByKeys iframe #js["contentWindow" "hello" "core" "compile_simple"])))

(hx/defnc iframe-component [{:keys [code html load-fn dispatcher]}]
  ;(js/console.log "iframe-component updating1 " code)
  (let [iframe-ref (use-ref)]
    (use-effect 
     (fn []
       ;(js/console.log "iframe-component updating")
       (async 
        (p/await (write-html-to-iframe! iframe-ref html))
        (js/console.log "iframe loaded" (get-compile-fn iframe-ref))
        ((get-compile-fn iframe-ref) code "code" load-fn  #(dispatcher {:type :update-result :payload %})))
       #(js/console.log "iframe unmounting"))
     #js [code html])
    [:div {:class-name "iframe-container"}
     [:iframe {:ref iframe-ref :src "iframe.html"}]]))
