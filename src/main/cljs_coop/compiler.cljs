(ns cljs-coop.compiler
  (:require [promesa.core :as p]
            [cljs.pprint :refer [pprint]]
            [goog.object :as gobj]))

(def log (.-log js/console))

(defn load-fn [data cb]
  (log "loading ns" data)
  (cb nil))

(defn  compile-simple [code cb]
  (let [ns-core (.-core js/hello)
        js-eval (.-j_js_eval ns-core)
        eval-str (.-j_eval_str ns-core)
        empty-state (.-j_empty_state ns-core)
        state (empty-state)]
    (eval-str state code "code1" {:eval js-eval :source-map true :verbose true :load load-fn} cb)))

(defn get-ns-var [ns-str]
  (-> (clojure.string/split ns-str ".")
      (first)))

(defn clear-namespaces! [result]
  (let [namespace (get result :ns)]
    (when namespace
      (gobj/remove js/window (get-ns-var namespace)))))

(defn compile-and-put-state [code dispatcher prev-result]
  (clear-namespaces! prev-result)
  (log "compilig code" code)
  (compile-simple code  #(dispatcher {:type :update-result :payload %})))


(defn compile-simple-promise [code]
  (p/promise 
   (fn [resolve reject]
     (compile-simple code #(do (pprint %) (resolve %))))))