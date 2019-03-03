(ns cljs-coop.jar-load
  (:require [goog.object :as gobj]
            [promesa.core :as p]
            ["dexie" :as Dexie]
            ["bluebird" :rename {each promise-each}]
            [promesa.async-cljs :refer-macros [async]]))

(def db (new Dexie "jars_db"))

(-> db
    (.version 1)
    (.stores 
     #js{:packages "++id,url"
         :files "++id,[path+package+version]"}))

(js/console.log "db" db);

(defn package-cached? [url]
  (-> (.where db.packages #js{:url url})
      (.count)))

(defn mark-package! [url]
  (.put db.packages #js{:url url :created-on (js/Date.now)}))

(defn add-file! [version path content]
  (.put db.files #js{:version version :path path  :content content}))

(defn get-file! [version path]
  (-> (.where db.files #{:path path :version version})
      (.toArray)))

(defn cache-package [url package version]
  (p/alet 
   [entries  (js/getZipData url js/zip)]
   (js/console.log "entries" entries)
   (promise-each entries #(add-file! version (get % :name) (get % :content)))))

(defn ^:export install-package [url package version]
  (p/alet 
   [cached-n (package-cached? url)
    cached? (> cached-n 0)]
   (if cached?
     (println "cache being used for " package " v " version)
     (async 
      (p/await (cache-package url package version))
      (p/await (mark-package! url))))))