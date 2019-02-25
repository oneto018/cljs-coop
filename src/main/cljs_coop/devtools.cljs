(ns cljs-coop.devtools
  (:require [devtools.core :as devtools]))

(defn init []
  (devtools/install!))