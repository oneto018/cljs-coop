(ns cljs-coop.load
  (:require ["react" :rename {useState use-state useEffect use-effect}]
            ;["load-js" :as load-js]
            ["loaderjs"   :as loader]
            [hx.react :as hx]))

(def loaded-items (atom #{}))

(defn already-loaded? [item]
  (contains? @loaded-items item))

(defn get-not-loaded-items [resources]
  (->>
   (map #(filter already-loaded? %) resources)
   (filter #(seq %))))

(defn update-loaded [loaded resources]
  (apply conj (flatten resources) loaded))

(defn use-resources [resources]
  (let [[loaded set-loaded!] (use-state false)]
    (use-effect
     (fn []
       (let [not-loaded (get-not-loaded-items resources)]
         (when (seq not-loaded)
           (.then (loader/load (clj->js resources)) #(set-loaded! true))
           (swap! loaded-items update-loaded resources))
         #(println "done")))
     [])
    loaded))


(hx/defnc with-resources [{:keys [resources children]}]
  (let [js-loaded (use-resources resources)]
    (if js-loaded
      [children]
      [:h2 "loading..."])))