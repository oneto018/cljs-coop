(ns cljs-coop.load
  (:require ["react" :rename {useState use-state useEffect use-effect}]
            ["load-js" :as load-js]
            ["loaderjs"   :as loader]
            [hx.react :as hx]))


(defn use-resources [resources]
  (let [[loaded set-loaded!] (use-state false)]
    (use-effect
     (fn [] (.then (loader/load (clj->js resources)) #(set-loaded! true)) #(println "done"))
     [])
    loaded))


(hx/defnc with-resources [{:keys [resources children]}]
  (let [js-loaded (use-resources resources)]
    (if js-loaded
      [children]
      [:h2 "loading..."])))