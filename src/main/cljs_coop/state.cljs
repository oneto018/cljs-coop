(ns cljs-coop.state
  (:require [cljs.pprint :refer [pprint]]
            ["react" :rename {useReducer use-reducer}]
            [goog.object :as gobj]))

(def initial-state {:code "(+ 1 1)" :code-to-compile nil})

(def log (.-log js/console))


(defn pprint-raw [x]
  (with-out-str (pprint x)))


(defn update-code [state _ code]
  (assoc state :code code))

(defn code-compile [state _ code]
  (assoc state :code-to-compile code))

(defn update-result [state _ result]
  (assoc state :result  result))

(defn default-handler [state action-type payload]
  (do (log {:warning "no such action" :type action-type :payload (clj->js payload)})
      state))

(def mappings {:update-code update-code
               :update-result update-result
               :code-compile code-compile})

(defn reducer [state {:keys [type payload]}]
  (let [handler (get mappings type)]
    (if handler 
      (handler state type payload)
      (default-handler state type payload))))

(defn dispatcher [dispatch]
  (fn [{:keys [type payload]}]
    (do (log {:dispatching true :type type :payload (clj->js payload)})
        (dispatch {:type type :payload payload}))))

(defn use-state-reducer []
  (let [[state dispatch] (use-reducer reducer initial-state)]
    (gobj/set js/window "globalState" state)
    [state (dispatcher dispatch)]))