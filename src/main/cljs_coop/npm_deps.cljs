(ns cljs-coop.npm-deps
  (:require ["systemjs" :as sjs]
            [goog.obj as  gobj]))

(gobj/set js/window "sjs" sjs)
