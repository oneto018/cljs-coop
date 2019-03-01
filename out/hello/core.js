// Compiled by ClojureScript 1.10.516 {:elide-asserts true}
goog.provide('hello.core');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('clojure.data');
hello.core.eval_t = (function hello$core$eval_t(src,ns_name){
var state = cljs.js.empty_state.call(null);
return cljs.js.eval_str.call(null,state,src,ns_name,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),true,new cljs.core.Keyword(null,"ns","ns",441598760),"cljs.core"], null),((function (state){
return (function (p1__914_SHARP_){
return console.log(cljs.core.clj__GT_js.call(null,p1__914_SHARP_));
});})(state))
);
});
goog.exportSymbol('hello.core.eval_t', hello.core.eval_t);
hello.core.compile_simple = (function hello$core$compile_simple(src,name,load_fn,cb){
var state = cljs.js.empty_state.call(null);
return cljs.js.eval_str.call(null,state,src,name,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),true,new cljs.core.Keyword(null,"load","load",-1318641184),load_fn], null),cb);
});
goog.exportSymbol('hello.core.compile_simple', hello.core.compile_simple);
hello.core.j_eval_str = cljs.js.eval_str;
goog.exportSymbol('hello.core.j_eval_str', hello.core.j_eval_str);
hello.core.j_compile_str = cljs.js.compile_str;
goog.exportSymbol('hello.core.j_compile_str', hello.core.j_compile_str);
hello.core.j_analyze_str = cljs.js.analyze_str;
goog.exportSymbol('hello.core.j_analyze_str', hello.core.j_analyze_str);
hello.core.j_dump_core = cljs.js.dump_core;
goog.exportSymbol('hello.core.j_dump_core', hello.core.j_dump_core);
hello.core.j_empty_state = cljs.js.empty_state;
goog.exportSymbol('hello.core.j_empty_state', hello.core.j_empty_state);
hello.core.j_js_eval = cljs.js.js_eval;
goog.exportSymbol('hello.core.j_js_eval', hello.core.j_js_eval);
hello.core.j_require_j = cljs.js.require;
goog.exportSymbol('hello.core.j_require_j', hello.core.j_require_j);
cljs.core.println.call(null,"Hello world compiler6!");
