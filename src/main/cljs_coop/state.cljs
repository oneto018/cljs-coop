(ns cljs-coop.state
  (:require [cljs.pprint :refer [pprint]]
            ["react" :rename {useReducer use-reducer}]
            [goog.object :as gobj]
            [goog.string :as st]))

(def default-code
"
(-> js/document
    (.-body)
    (.-innerHTML)
    (set! \" <h1>Hello  world</h1> \"))")

(defn get-hash-value! []
  (let [hash (gobj/getValueByKeys js/window #js["location" "hash"])]
    (when hash 
      (.replace hash "#" ""))))

(defn get-code-from-url []
  (let [hash-value (get-hash-value!)]
    (when (not= "" hash-value) (js/decodeURIComponent hash-value))))

(defn get-starting-code []
  (or (get-code-from-url) default-code))

(def initial-state {:code (get-starting-code) :code-to-compile (get-starting-code)})

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