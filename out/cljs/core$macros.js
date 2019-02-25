// Compiled by ClojureScript 1.10.516 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__4776__auto___5285 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5286 = arguments.length;
var i__4731__auto___5287 = (0);
while(true){
if((i__4731__auto___5287 < len__4730__auto___5286)){
args__4736__auto__.push((arguments[i__4731__auto___5287]));

var G__5288 = (i__4731__auto___5287 + (1));
i__4731__auto___5287 = G__5288;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,form),null,(1),null)),(new cljs.core.List(null,x__$1,null,(1),null)),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__5289 = threaded;
var G__5290 = cljs.core.next.call(null,forms__$1);
x__$1 = G__5289;
forms__$1 = G__5290;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq5281){
var G__5282 = cljs.core.first.call(null,seq5281);
var seq5281__$1 = cljs.core.next.call(null,seq5281);
var G__5283 = cljs.core.first.call(null,seq5281__$1);
var seq5281__$2 = cljs.core.next.call(null,seq5281__$1);
var G__5284 = cljs.core.first.call(null,seq5281__$2);
var seq5281__$3 = cljs.core.next.call(null,seq5281__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5282,G__5283,G__5284,seq5281__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__4776__auto___5295 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5296 = arguments.length;
var i__4731__auto___5297 = (0);
while(true){
if((i__4731__auto___5297 < len__4730__auto___5296)){
args__4736__auto__.push((arguments[i__4731__auto___5297]));

var G__5298 = (i__4731__auto___5297 + (1));
i__4731__auto___5297 = G__5298;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,form),null,(1),null)),cljs.core.next.call(null,form),(new cljs.core.List(null,x__$1,null,(1),null))))),cljs.core.meta.call(null,form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__5299 = threaded;
var G__5300 = cljs.core.next.call(null,forms__$1);
x__$1 = G__5299;
forms__$1 = G__5300;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq5291){
var G__5292 = cljs.core.first.call(null,seq5291);
var seq5291__$1 = cljs.core.next.call(null,seq5291);
var G__5293 = cljs.core.first.call(null,seq5291__$1);
var seq5291__$2 = cljs.core.next.call(null,seq5291__$1);
var G__5294 = cljs.core.first.call(null,seq5291__$2);
var seq5291__$3 = cljs.core.next.call(null,seq5291__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5292,G__5293,G__5294,seq5291__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__4776__auto___5308 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__5307 = arguments.length;
switch (G__5307) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5310 = arguments.length;
var i__4731__auto___5311 = (0);
while(true){
if((i__4731__auto___5311 < len__4730__auto___5310)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5311]));

var G__5312 = (i__4731__auto___5311 + (1));
i__4731__auto___5311 = G__5312;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq5302){
var G__5303 = cljs.core.first.call(null,seq5302);
var seq5302__$1 = cljs.core.next.call(null,seq5302);
var G__5304 = cljs.core.first.call(null,seq5302__$1);
var seq5302__$2 = cljs.core.next.call(null,seq5302__$1);
var G__5305 = cljs.core.first.call(null,seq5302__$2);
var seq5302__$3 = cljs.core.next.call(null,seq5302__$2);
var G__5306 = cljs.core.first.call(null,seq5302__$3);
var seq5302__$4 = cljs.core.next.call(null,seq5302__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5303,G__5304,G__5305,G__5306,seq5302__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__4776__auto___5316 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5317 = arguments.length;
var i__4731__auto___5318 = (0);
while(true){
if((i__4731__auto___5318 < len__4730__auto___5317)){
args__4736__auto__.push((arguments[i__4731__auto___5318]));

var G__5319 = (i__4731__auto___5318 + (1));
i__4731__auto___5318 = G__5319;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.comment.cljs$lang$applyTo = (function (seq5313){
var G__5314 = cljs.core.first.call(null,seq5313);
var seq5313__$1 = cljs.core.next.call(null,seq5313);
var G__5315 = cljs.core.first.call(null,seq5313__$1);
var seq5313__$2 = cljs.core.next.call(null,seq5313__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5314,G__5315,seq5313__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__4776__auto___5323 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5324 = arguments.length;
var i__4731__auto___5325 = (0);
while(true){
if((i__4731__auto___5325 < len__4730__auto___5324)){
args__4736__auto__.push((arguments[i__4731__auto___5325]));

var G__5326 = (i__4731__auto___5325 + (1));
i__4731__auto___5325 = G__5326;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,cljs.core.first.call(null,clauses),(new cljs.core.List(null,((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})()),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses))),null,(1),null)),(2),null)),(3),null)),(4),null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.cond.cljs$lang$applyTo = (function (seq5320){
var G__5321 = cljs.core.first.call(null,seq5320);
var seq5320__$1 = cljs.core.next.call(null,seq5320);
var G__5322 = cljs.core.first.call(null,seq5320__$1);
var seq5320__$2 = cljs.core.next.call(null,seq5320__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5321,G__5322,seq5320__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__4776__auto___5331 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5332 = arguments.length;
var i__4731__auto___5333 = (0);
while(true){
if((i__4731__auto___5333 < len__4730__auto___5332)){
args__4736__auto__.push((arguments[i__4731__auto___5333]));

var G__5334 = (i__4731__auto___5333 + (1));
i__4731__auto___5333 = G__5334;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,(function (p1__5327_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.vary_meta.call(null,p1__5327_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true),null,(1),null)),(2),null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.declare.cljs$lang$applyTo = (function (seq5328){
var G__5329 = cljs.core.first.call(null,seq5328);
var seq5328__$1 = cljs.core.next.call(null,seq5328);
var G__5330 = cljs.core.first.call(null,seq5328__$1);
var seq5328__$2 = cljs.core.next.call(null,seq5328__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5329,G__5330,seq5328__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__4776__auto___5339 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new js/Map) (.set "a" 1) (.set "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5340 = arguments.length;
var i__4731__auto___5341 = (0);
while(true){
if((i__4731__auto___5341 < len__4730__auto___5340)){
args__4736__auto__.push((arguments[i__4731__auto___5341]));

var G__5342 = (i__4731__auto___5341 + (1));
i__4731__auto___5341 = G__5342;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gx,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,f),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))));
}
});})(gx))
,forms),(new cljs.core.List(null,gx,null,(1),null)))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.doto.cljs$lang$applyTo = (function (seq5335){
var G__5336 = cljs.core.first.call(null,seq5335);
var seq5335__$1 = cljs.core.next.call(null,seq5335);
var G__5337 = cljs.core.first.call(null,seq5335__$1);
var seq5335__$2 = cljs.core.next.call(null,seq5335__$1);
var G__5338 = cljs.core.first.call(null,seq5335__$2);
var seq5335__$3 = cljs.core.next.call(null,seq5335__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5336,G__5337,G__5338,seq5335__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__5343 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__5344 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__5343;
s = G__5344;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,((function (impls){
return (function (p__5345){
var vec__5346 = p__5345;
var t = cljs.core.nth.call(null,vec__5346,(0),null);
var fs = cljs.core.nth.call(null,vec__5346,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),(new cljs.core.List(null,p,null,(1),null)),fs)));
});})(impls))
,impls))));
});
var ret__4776__auto___5353 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5354 = arguments.length;
var i__4731__auto___5355 = (0);
while(true){
if((i__4731__auto___5355 < len__4730__auto___5354)){
args__4736__auto__.push((arguments[i__4731__auto___5355]));

var G__5356 = (i__4731__auto___5355 + (1));
i__4731__auto___5355 = G__5356;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq5349){
var G__5350 = cljs.core.first.call(null,seq5349);
var seq5349__$1 = cljs.core.next.call(null,seq5349);
var G__5351 = cljs.core.first.call(null,seq5349__$1);
var seq5349__$2 = cljs.core.next.call(null,seq5349__$1);
var G__5352 = cljs.core.first.call(null,seq5349__$2);
var seq5349__$3 = cljs.core.next.call(null,seq5349__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5350,G__5351,G__5352,seq5349__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__5357 = cljs.core.next.call(null,params__$1);
var G__5358 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__5359 = lets;
params__$1 = G__5357;
new_params = G__5358;
lets = G__5359;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__5360 = cljs.core.next.call(null,params__$1);
var G__5361 = cljs.core.conj.call(null,new_params,gparam);
var G__5362 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__5360;
new_params = G__5361;
lets = G__5362;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),body))),null,(1),null)))));
}
break;
}
}
});
var ret__4776__auto___5369 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5370 = arguments.length;
var i__4731__auto___5371 = (0);
while(true){
if((i__4731__auto___5371 < len__4730__auto___5370)){
args__4736__auto__.push((arguments[i__4731__auto___5371]));

var G__5372 = (i__4731__auto___5371 + (1));
i__4731__auto___5371 = G__5372;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1))," should be a vector"].join(''):"Parameter declaration missing")))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if((!(cljs.core.seq_QMARK_.call(null,sig)))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__5366 = sig;
var seq__5367 = cljs.core.seq.call(null,vec__5366);
var first__5368 = cljs.core.first.call(null,seq__5367);
var seq__5367__$1 = cljs.core.next.call(null,seq__5367);
var params = first__5368;
var body = seq__5367__$1;
var _ = (((!(cljs.core.vector_QMARK_.call(null,params))))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = ((((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__4131__auto__ = conds;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first.call(null,body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,((function (vec__5366,seq__5367,first__5368,seq__5367__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
});})(vec__5366,seq__5367,first__5368,seq__5367__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__5366,seq__5367,first__5368,seq__5367__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
});})(vec__5366,seq__5367,first__5368,seq__5367__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.fn.cljs$lang$applyTo = (function (seq5363){
var G__5364 = cljs.core.first.call(null,seq5363);
var seq5363__$1 = cljs.core.next.call(null,seq5363);
var G__5365 = cljs.core.first.call(null,seq5363__$1);
var seq5363__$2 = cljs.core.next.call(null,seq5363__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5364,G__5365,seq5363__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__4776__auto___5377 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5378 = arguments.length;
var i__4731__auto___5379 = (0);
while(true){
if((i__4731__auto___5379 < len__4730__auto___5378)){
args__4736__auto__.push((arguments[i__4731__auto___5379]));

var G__5380 = (i__4731__auto___5379 + (1));
i__4731__auto___5379 = G__5380;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq5373){
var G__5374 = cljs.core.first.call(null,seq5373);
var seq5373__$1 = cljs.core.next.call(null,seq5373);
var G__5375 = cljs.core.first.call(null,seq5373__$1);
var seq5373__$2 = cljs.core.next.call(null,seq5373__$1);
var G__5376 = cljs.core.first.call(null,seq5373__$2);
var seq5373__$3 = cljs.core.next.call(null,seq5373__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5374,G__5375,G__5376,seq5373__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__4776__auto___5390 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__5389 = arguments.length;
switch (G__5389) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5392 = arguments.length;
var i__4731__auto___5393 = (0);
while(true){
if((i__4731__auto___5393 < len__4730__auto___5392)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5393]));

var G__5394 = (i__4731__auto___5393 + (1));
i__4731__auto___5393 = G__5394;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5381__auto__","temp__5381__auto__",-681444942,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5381__auto__","temp__5381__auto__",-681444942,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5381__auto__","temp__5381__auto__",-681444942,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq5383){
var G__5384 = cljs.core.first.call(null,seq5383);
var seq5383__$1 = cljs.core.next.call(null,seq5383);
var G__5385 = cljs.core.first.call(null,seq5383__$1);
var seq5383__$2 = cljs.core.next.call(null,seq5383__$1);
var G__5386 = cljs.core.first.call(null,seq5383__$2);
var seq5383__$3 = cljs.core.next.call(null,seq5383__$2);
var G__5387 = cljs.core.first.call(null,seq5383__$3);
var seq5383__$4 = cljs.core.next.call(null,seq5383__$3);
var G__5388 = cljs.core.first.call(null,seq5383__$4);
var seq5383__$5 = cljs.core.next.call(null,seq5383__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5384,G__5385,G__5386,G__5387,G__5388,seq5383__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__4776__auto___5397 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__5396 = arguments.length;
switch (G__5396) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null)))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__4776__auto___5404 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5405 = arguments.length;
var i__4731__auto___5406 = (0);
while(true){
if((i__4731__auto___5406 < len__4730__auto___5405)){
args__4736__auto__.push((arguments[i__4731__auto___5406]));

var G__5407 = (i__4731__auto___5406 + (1));
i__4731__auto___5406 = G__5407;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__5399_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__5399_SHARP_);
}),fnspecs))),null,(1),null)),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq5400){
var G__5401 = cljs.core.first.call(null,seq5400);
var seq5400__$1 = cljs.core.next.call(null,seq5400);
var G__5402 = cljs.core.first.call(null,seq5400__$1);
var seq5400__$2 = cljs.core.next.call(null,seq5400__$1);
var G__5403 = cljs.core.first.call(null,seq5400__$2);
var seq5400__$3 = cljs.core.next.call(null,seq5400__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5401,G__5402,G__5403,seq5400__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__4776__auto___5412 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5413 = arguments.length;
var i__4731__auto___5414 = (0);
while(true){
if((i__4731__auto___5414 < len__4730__auto___5413)){
args__4736__auto__.push((arguments[i__4731__auto___5414]));

var G__5415 = (i__4731__auto___5414 + (1));
i__4731__auto___5414 = G__5415;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,t,null,(1),null)),args)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),args))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq5408){
var G__5409 = cljs.core.first.call(null,seq5408);
var seq5408__$1 = cljs.core.next.call(null,seq5408);
var G__5410 = cljs.core.first.call(null,seq5408__$1);
var seq5408__$2 = cljs.core.next.call(null,seq5408__$1);
var G__5411 = cljs.core.first.call(null,seq5408__$2);
var seq5408__$3 = cljs.core.next.call(null,seq5408__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5409,G__5410,G__5411,seq5408__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__4776__auto___5420 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5421 = arguments.length;
var i__4731__auto___5422 = (0);
while(true){
if((i__4731__auto___5422 < len__4730__auto___5421)){
args__4736__auto__.push((arguments[i__4731__auto___5422]));

var G__5423 = (i__4731__auto___5422 + (1));
i__4731__auto___5422 = G__5423;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.when.cljs$lang$applyTo = (function (seq5416){
var G__5417 = cljs.core.first.call(null,seq5416);
var seq5416__$1 = cljs.core.next.call(null,seq5416);
var G__5418 = cljs.core.first.call(null,seq5416__$1);
var seq5416__$2 = cljs.core.next.call(null,seq5416__$1);
var G__5419 = cljs.core.first.call(null,seq5416__$2);
var seq5416__$3 = cljs.core.next.call(null,seq5416__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5417,G__5418,G__5419,seq5416__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__4776__auto___5432 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5433 = arguments.length;
var i__4731__auto___5434 = (0);
while(true){
if((i__4731__auto___5434 < len__4730__auto___5433)){
args__4736__auto__.push((arguments[i__4731__auto___5434]));

var G__5435 = (i__4731__auto___5434 + (1));
i__4731__auto___5434 = G__5435;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var vec__5429 = bindings;
var x = cljs.core.nth.call(null,vec__5429,(0),null);
var xs = cljs.core.nth.call(null,vec__5429,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"xs__5424__auto__","xs__5424__auto__",648295653,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,xs,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"xs__5424__auto__","xs__5424__auto__",648295653,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq5425){
var G__5426 = cljs.core.first.call(null,seq5425);
var seq5425__$1 = cljs.core.next.call(null,seq5425);
var G__5427 = cljs.core.first.call(null,seq5425__$1);
var seq5425__$2 = cljs.core.next.call(null,seq5425__$1);
var G__5428 = cljs.core.first.call(null,seq5425__$2);
var seq5425__$3 = cljs.core.next.call(null,seq5425__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5426,G__5427,G__5428,seq5425__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__4776__auto___5441 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5442 = arguments.length;
var i__4731__auto___5443 = (0);
while(true){
if((i__4731__auto___5443 < len__4730__auto___5442)){
args__4736__auto__.push((arguments[i__4731__auto___5443]));

var G__5444 = (i__4731__auto___5443 + (1));
i__4731__auto___5443 = G__5444;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5436__auto__","temp__5436__auto__",-668961726,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5436__auto__","temp__5436__auto__",-668961726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5436__auto__","temp__5436__auto__",-668961726,null),null,(1),null)))))),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq5437){
var G__5438 = cljs.core.first.call(null,seq5437);
var seq5437__$1 = cljs.core.next.call(null,seq5437);
var G__5439 = cljs.core.first.call(null,seq5437__$1);
var seq5437__$2 = cljs.core.next.call(null,seq5437__$1);
var G__5440 = cljs.core.first.call(null,seq5437__$2);
var seq5437__$3 = cljs.core.next.call(null,seq5437__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5438,G__5439,G__5440,seq5437__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__4776__auto___5449 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5450 = arguments.length;
var i__4731__auto___5451 = (0);
while(true){
if((i__4731__auto___5451 < len__4730__auto___5450)){
args__4736__auto__.push((arguments[i__4731__auto___5451]));

var G__5452 = (i__4731__auto___5451 + (1));
i__4731__auto___5451 = G__5452;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,null,(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq5445){
var G__5446 = cljs.core.first.call(null,seq5445);
var seq5445__$1 = cljs.core.next.call(null,seq5445);
var G__5447 = cljs.core.first.call(null,seq5445__$1);
var seq5445__$2 = cljs.core.next.call(null,seq5445__$1);
var G__5448 = cljs.core.first.call(null,seq5445__$2);
var seq5445__$3 = cljs.core.next.call(null,seq5445__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5446,G__5447,G__5448,seq5445__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__4776__auto___5457 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5458 = arguments.length;
var i__4731__auto___5459 = (0);
while(true){
if((i__4731__auto___5459 < len__4730__auto___5458)){
args__4736__auto__.push((arguments[i__4731__auto___5459]));

var G__5460 = (i__4731__auto___5459 + (1));
i__4731__auto___5459 = G__5460;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.while$.cljs$lang$applyTo = (function (seq5453){
var G__5454 = cljs.core.first.call(null,seq5453);
var seq5453__$1 = cljs.core.next.call(null,seq5453);
var G__5455 = cljs.core.first.call(null,seq5453__$1);
var seq5453__$2 = cljs.core.next.call(null,seq5453__$1);
var G__5456 = cljs.core.first.call(null,seq5453__$2);
var seq5453__$3 = cljs.core.next.call(null,seq5453__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5454,G__5455,G__5456,seq5453__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__4776__auto___5469 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5470 = arguments.length;
var i__4731__auto___5471 = (0);
while(true){
if((i__4731__auto___5471 < len__4730__auto___5470)){
args__4736__auto__.push((arguments[i__4731__auto___5471]));

var G__5472 = (i__4731__auto___5471 + (1));
i__4731__auto___5471 = G__5472;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__5465){
var vec__5466 = p__5465;
var test = cljs.core.nth.call(null,vec__5466,(0),null);
var step = cljs.core.nth.call(null,vec__5466,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)))));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps)),null,(1),null)))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq5461){
var G__5462 = cljs.core.first.call(null,seq5461);
var seq5461__$1 = cljs.core.next.call(null,seq5461);
var G__5463 = cljs.core.first.call(null,seq5461__$1);
var seq5461__$2 = cljs.core.next.call(null,seq5461__$1);
var G__5464 = cljs.core.first.call(null,seq5461__$2);
var seq5461__$3 = cljs.core.next.call(null,seq5461__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5462,G__5463,G__5464,seq5461__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__4776__auto___5481 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5482 = arguments.length;
var i__4731__auto___5483 = (0);
while(true){
if((i__4731__auto___5483 < len__4730__auto___5482)){
args__4736__auto__.push((arguments[i__4731__auto___5483]));

var G__5484 = (i__4731__auto___5483 + (1));
i__4731__auto___5483 = G__5484;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__5477){
var vec__5478 = p__5477;
var test = cljs.core.nth.call(null,vec__5478,(0),null);
var step = cljs.core.nth.call(null,vec__5478,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)))));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps)),null,(1),null)))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq5473){
var G__5474 = cljs.core.first.call(null,seq5473);
var seq5473__$1 = cljs.core.next.call(null,seq5473);
var G__5475 = cljs.core.first.call(null,seq5473__$1);
var seq5473__$2 = cljs.core.next.call(null,seq5473__$1);
var G__5476 = cljs.core.first.call(null,seq5473__$2);
var seq5473__$3 = cljs.core.next.call(null,seq5473__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5474,G__5475,G__5476,seq5473__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__4776__auto___5490 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5491 = arguments.length;
var i__4731__auto___5492 = (0);
while(true){
if((i__4731__auto___5492 < len__4730__auto___5491)){
args__4736__auto__.push((arguments[i__4731__auto___5492]));

var G__5493 = (i__4731__auto___5492 + (1));
i__4731__auto___5492 = G__5493;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms)),null,(1),null)))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq5485){
var G__5486 = cljs.core.first.call(null,seq5485);
var seq5485__$1 = cljs.core.next.call(null,seq5485);
var G__5487 = cljs.core.first.call(null,seq5485__$1);
var seq5485__$2 = cljs.core.next.call(null,seq5485__$1);
var G__5488 = cljs.core.first.call(null,seq5485__$2);
var seq5485__$3 = cljs.core.next.call(null,seq5485__$2);
var G__5489 = cljs.core.first.call(null,seq5485__$3);
var seq5485__$4 = cljs.core.next.call(null,seq5485__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5486,G__5487,G__5488,G__5489,seq5485__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__4776__auto___5498 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5499 = arguments.length;
var i__4731__auto___5500 = (0);
while(true){
if((i__4731__auto___5500 < len__4730__auto___5499)){
args__4736__auto__.push((arguments[i__4731__auto___5500]));

var G__5501 = (i__4731__auto___5500 + (1));
i__4731__auto___5500 = G__5501;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null))))),null,(1),null)))));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps)),null,(1),null)))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq5494){
var G__5495 = cljs.core.first.call(null,seq5494);
var seq5494__$1 = cljs.core.next.call(null,seq5494);
var G__5496 = cljs.core.first.call(null,seq5494__$1);
var seq5494__$2 = cljs.core.next.call(null,seq5494__$1);
var G__5497 = cljs.core.first.call(null,seq5494__$2);
var seq5494__$3 = cljs.core.next.call(null,seq5494__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5495,G__5496,G__5497,seq5494__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__4776__auto___5506 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5507 = arguments.length;
var i__4731__auto___5508 = (0);
while(true){
if((i__4731__auto___5508 < len__4730__auto___5507)){
args__4736__auto__.push((arguments[i__4731__auto___5508]));

var G__5509 = (i__4731__auto___5508 + (1));
i__4731__auto___5508 = G__5509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null))))),null,(1),null)))));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps)),null,(1),null)))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq5502){
var G__5503 = cljs.core.first.call(null,seq5502);
var seq5502__$1 = cljs.core.next.call(null,seq5502);
var G__5504 = cljs.core.first.call(null,seq5502__$1);
var seq5502__$2 = cljs.core.next.call(null,seq5502__$1);
var G__5505 = cljs.core.first.call(null,seq5502__$2);
var seq5502__$3 = cljs.core.next.call(null,seq5502__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5503,G__5504,G__5505,seq5502__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__4776__auto___5519 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__5518 = arguments.length;
switch (G__5518) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5521 = arguments.length;
var i__4731__auto___5522 = (0);
while(true){
if((i__4731__auto___5522 < len__4730__auto___5521)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5522]));

var G__5523 = (i__4731__auto___5522 + (1));
i__4731__auto___5522 = G__5523;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5510__auto__","temp__5510__auto__",-1152701540,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5510__auto__","temp__5510__auto__",-1152701540,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5510__auto__","temp__5510__auto__",-1152701540,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq5512){
var G__5513 = cljs.core.first.call(null,seq5512);
var seq5512__$1 = cljs.core.next.call(null,seq5512);
var G__5514 = cljs.core.first.call(null,seq5512__$1);
var seq5512__$2 = cljs.core.next.call(null,seq5512__$1);
var G__5515 = cljs.core.first.call(null,seq5512__$2);
var seq5512__$3 = cljs.core.next.call(null,seq5512__$2);
var G__5516 = cljs.core.first.call(null,seq5512__$3);
var seq5512__$4 = cljs.core.next.call(null,seq5512__$3);
var G__5517 = cljs.core.first.call(null,seq5512__$4);
var seq5512__$5 = cljs.core.next.call(null,seq5512__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5513,G__5514,G__5515,G__5516,G__5517,seq5512__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__4776__auto___5529 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5530 = arguments.length;
var i__4731__auto___5531 = (0);
while(true){
if((i__4731__auto___5531 < len__4730__auto___5530)){
args__4736__auto__.push((arguments[i__4731__auto___5531]));

var G__5532 = (i__4731__auto___5531 + (1));
i__4731__auto___5531 = G__5532;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5524__auto__","temp__5524__auto__",-420702199,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5524__auto__","temp__5524__auto__",-420702199,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__5524__auto__","temp__5524__auto__",-420702199,null),null,(1),null)))))),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq5525){
var G__5526 = cljs.core.first.call(null,seq5525);
var seq5525__$1 = cljs.core.next.call(null,seq5525);
var G__5527 = cljs.core.first.call(null,seq5525__$1);
var seq5525__$2 = cljs.core.next.call(null,seq5525__$1);
var G__5528 = cljs.core.first.call(null,seq5525__$2);
var seq5525__$3 = cljs.core.next.call(null,seq5525__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5526,G__5527,G__5528,seq5525__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__5533_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__5533_SHARP_)){
return cljs.core.first.call(null,p1__5533_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5533_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5533_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__5534_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__5534_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__5535 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__5536 = cljs.core.next.call(null,fdecls);
ret = G__5535;
fdecls = G__5536;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
return (new cljs.core.List(null,asig.call(null,fdecl),null,(1),null));
}
});
var ret__4776__auto___5537 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,init,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),(new cljs.core.List(null,gvec,null,(1),null)),(2),null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__5545 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__5546 = n;
var G__5547 = cljs.core.nnext.call(null,bs);
var G__5548 = true;
ret = G__5545;
n = G__5546;
bs = G__5547;
seen_rest_QMARK_ = G__5548;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__5549 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null))))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null)))))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),(new cljs.core.List(null,gvec,(new cljs.core.List(null,n,(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null)),(4),null))));
var G__5550 = (n + (1));
var G__5551 = cljs.core.next.call(null,bs);
var G__5552 = seen_rest_QMARK_;
ret = G__5549;
n = G__5550;
bs = G__5551;
seen_rest_QMARK_ = G__5552;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null)))))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__5538_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__4131__auto__ = mkns;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.namespace.call(null,p1__5538_SHARP_);
}
})(),cljs.core.name.call(null,p1__5538_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__5539_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.symbol.call(null,(function (){var or__4131__auto__ = mkns;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.namespace.call(null,p1__5539_SHARP_);
}
})(),cljs.core.name.call(null,p1__5539_SHARP_)),null,(1),null)),(2),null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__5540_SHARP_,p2__5541_SHARP_){
return cljs.core.assoc.call(null,p1__5540_SHARP_,p2__5541_SHARP_,cljs.core.val.call(null,entry).call(null,p2__5541_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = (((((!((bb == null))))?(((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$))))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk,(new cljs.core.List(null,defaults.call(null,local),null,(1),null)),(2),null)),(3),null)),(4),null)):(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk,null,(1),null)),(2),null)),(3),null)));
var G__5553 = (((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol))))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__5554 = cljs.core.next.call(null,bes);
ret = G__5553;
bes = G__5554;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__5718__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__5542_SHARP_){
return (cljs.core.first.call(null,p1__5542_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__5718__auto__){
var kwbs = temp__5718__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__4776__auto___5559 = (function (){
cljs.core$macros.return_first = (function cljs$core$macros$return_first(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5560 = arguments.length;
var i__4731__auto___5561 = (0);
while(true){
if((i__4731__auto___5561 < len__4730__auto___5560)){
args__4736__auto__.push((arguments[i__4731__auto___5561]));

var G__5562 = (i__4731__auto___5561 + (1));
i__4731__auto___5561 = G__5562;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.return_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.return_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__5555__auto__","ret__5555__auto__",-839866284,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,body),null,(1),null)))))),null,(1),null)),cljs.core.rest.call(null,body),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__5555__auto__","ret__5555__auto__",-839866284,null),null,(1),null)))));
});

cljs.core$macros.return_first.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.return_first.cljs$lang$applyTo = (function (seq5556){
var G__5557 = cljs.core.first.call(null,seq5556);
var seq5556__$1 = cljs.core.next.call(null,seq5556);
var G__5558 = cljs.core.first.call(null,seq5556__$1);
var seq5556__$2 = cljs.core.next.call(null,seq5556__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5557,G__5558,seq5556__$2);
});

return null;
})()
;
cljs.core$macros.return_first.cljs$lang$macro = true;

var ret__4776__auto___5564 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if(((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false))){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var defname = cljs.compiler.munge.call(null,[cljs.core._STAR_ns_STAR_,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":((((default$ === true) || (default$ === false)))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))?new cljs.core.Symbol("cljs.core$macros","return-first","cljs.core$macros/return-first",190051731,null):new cljs.core.Symbol(null,"do","do",1686842252,null)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,sym,((function (defname,type){
return (function (m){
var G__5563 = m;
if((!(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223))))){
return cljs.core.assoc.call(null,G__5563,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.symbol.call(null,type));
} else {
return G__5563;
}
});})(defname,type))
),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["/** @define {",type,"} */"].join(''),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","define","goog/define",-352722538,null),null,(1),null)),(new cljs.core.List(null,defname,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__4776__auto___5569 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5570 = arguments.length;
var i__4731__auto___5571 = (0);
while(true){
if((i__4731__auto___5571 < len__4730__auto___5570)){
args__4736__auto__.push((arguments[i__4731__auto___5571]));

var G__5572 = (i__4731__auto___5571 + (1));
i__4731__auto___5571 = G__5572;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.destructure.call(null,bindings),null,(1),null)),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.let$.cljs$lang$applyTo = (function (seq5565){
var G__5566 = cljs.core.first.call(null,seq5565);
var seq5565__$1 = cljs.core.next.call(null,seq5565);
var G__5567 = cljs.core.first.call(null,seq5565__$1);
var seq5565__$2 = cljs.core.next.call(null,seq5565__$1);
var G__5568 = cljs.core.first.call(null,seq5565__$2);
var seq5565__$3 = cljs.core.next.call(null,seq5565__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5566,G__5567,G__5568,seq5565__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__4776__auto___5581 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5582 = arguments.length;
var i__4731__auto___5583 = (0);
while(true){
if((i__4731__auto___5583 < len__4730__auto___5582)){
args__4736__auto__.push((arguments[i__4731__auto___5583]));

var G__5584 = (i__4731__auto___5583 + (1));
i__4731__auto___5583 = G__5584;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__5577){
var vec__5578 = p__5577;
var b = cljs.core.nth.call(null,vec__5578,(0),null);
var v = cljs.core.nth.call(null,vec__5578,(1),null);
var g = cljs.core.nth.call(null,vec__5578,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,bfs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs)),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.loop.cljs$lang$applyTo = (function (seq5573){
var G__5574 = cljs.core.first.call(null,seq5573);
var seq5573__$1 = cljs.core.next.call(null,seq5573);
var G__5575 = cljs.core.first.call(null,seq5573__$1);
var seq5573__$2 = cljs.core.next.call(null,seq5573__$1);
var G__5576 = cljs.core.first.call(null,seq5573__$2);
var seq5573__$3 = cljs.core.next.call(null,seq5573__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5574,G__5575,G__5576,seq5573__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__5585_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5585_SHARP_));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__5586){
var vec__5587 = p__5586;
var p = cljs.core.nth.call(null,vec__5587,(0),null);
var b = cljs.core.nth.call(null,vec__5587,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
cljs.core$macros.compatible_QMARK_ = (function cljs$core$macros$compatible_QMARK_(inferred_tag,allowed_tags){
if(cljs.core.set_QMARK_.call(null,inferred_tag)){
return clojure.set.subset_QMARK_.call(null,inferred_tag,allowed_tags);
} else {
return cljs.core.contains_QMARK_.call(null,allowed_tags,inferred_tag);
}
});
cljs.core$macros.typed_expr_QMARK_ = (function cljs$core$macros$typed_expr_QMARK_(env,form,allowed_tags){
return cljs.core$macros.compatible_QMARK_.call(null,cljs.analyzer.infer_tag.call(null,env,(function (){var _STAR_cljs_warnings_STAR__orig_val__5590 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__5591 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__5591;

try{return cljs.analyzer.analyze.call(null,env,form);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__5590;
}})()),allowed_tags);
});
cljs.core$macros.string_expr = (function cljs$core$macros$string_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"string","string",-349010059,null));
});
var ret__4776__auto___5598 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var G__5597 = arguments.length;
switch (G__5597) {
case 2:
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5600 = arguments.length;
var i__4731__auto___5601 = (0);
while(true){
if((i__4731__auto___5601 < len__4730__auto___5600)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5601]));

var G__5602 = (i__4731__auto___5601 + (1));
i__4731__auto___5601 = G__5602;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return "";
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core$macros.typed_expr_QMARK_.call(null,_AMPERSAND_env,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null))){
return x;
} else {
return cljs.core$macros.string_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
}
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,ys){
var interpolate = (function (x__$1){
if(cljs.core$macros.typed_expr_QMARK_.call(null,_AMPERSAND_env,x__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null))){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,interpolate,cljs.core.list_STAR_.call(null,x,ys))));
return cljs.core$macros.string_expr.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),x,ys));
});

/** @this {Function} */
cljs.core$macros.str.cljs$lang$applyTo = (function (seq5593){
var G__5594 = cljs.core.first.call(null,seq5593);
var seq5593__$1 = cljs.core.next.call(null,seq5593);
var G__5595 = cljs.core.first.call(null,seq5593__$1);
var seq5593__$2 = cljs.core.next.call(null,seq5593__$1);
var G__5596 = cljs.core.first.call(null,seq5593__$2);
var seq5593__$3 = cljs.core.next.call(null,seq5593__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5594,G__5595,G__5596,seq5593__$3);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__4120__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),null,new cljs.core.Keyword(null,"const","const",1709929842),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null"], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__4120__auto__;
}
});
var ret__4776__auto___5615 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__5612 = arguments.length;
switch (G__5612) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5617 = arguments.length;
var i__4731__auto___5618 = (0);
while(true){
if((i__4731__auto___5618 < len__4730__auto___5617)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5618]));

var G__5619 = (i__4731__auto___5618 + (1));
i__4731__auto___5618 = G__5619;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__5603_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__5603_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__5604_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__5613 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__5614 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__5614;

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__5604_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__5613;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,((function (forms){
return (function (p1__5605_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["("], null),p1__5605_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [")"], null));
});})(forms))
.call(null,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})"))));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,and_str,null,(1),null)),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"and__5606__auto__","and__5606__auto__",-1503725826,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__5606__auto__","and__5606__auto__",-1503725826,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),next))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__5606__auto__","and__5606__auto__",-1503725826,null),null,(1),null))))),null,(1),null)))));
}
});

/** @this {Function} */
cljs.core$macros.and.cljs$lang$applyTo = (function (seq5608){
var G__5609 = cljs.core.first.call(null,seq5608);
var seq5608__$1 = cljs.core.next.call(null,seq5608);
var G__5610 = cljs.core.first.call(null,seq5608__$1);
var seq5608__$2 = cljs.core.next.call(null,seq5608__$1);
var G__5611 = cljs.core.first.call(null,seq5608__$2);
var seq5608__$3 = cljs.core.next.call(null,seq5608__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5609,G__5610,G__5611,seq5608__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__4776__auto___5632 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__5629 = arguments.length;
switch (G__5629) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5634 = arguments.length;
var i__4731__auto___5635 = (0);
while(true){
if((i__4731__auto___5635 < len__4730__auto___5634)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5635]));

var G__5636 = (i__4731__auto___5635 + (1));
i__4731__auto___5635 = G__5636;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__5620_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__5620_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__5621_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__5630 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__5631 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__5631;

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__5621_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__5630;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,((function (forms){
return (function (p1__5622_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["("], null),p1__5622_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [")"], null));
});})(forms))
.call(null,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})"))));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,or_str,null,(1),null)),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"or__5623__auto__","or__5623__auto__",1488969851,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"or__5623__auto__","or__5623__auto__",1488969851,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"or__5623__auto__","or__5623__auto__",1488969851,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),next))),null,(1),null))))),null,(1),null)))));
}
});

/** @this {Function} */
cljs.core$macros.or.cljs$lang$applyTo = (function (seq5625){
var G__5626 = cljs.core.first.call(null,seq5625);
var seq5625__$1 = cljs.core.next.call(null,seq5625);
var G__5627 = cljs.core.first.call(null,seq5625__$1);
var seq5625__$2 = cljs.core.next.call(null,seq5625__$1);
var G__5628 = cljs.core.first.call(null,seq5625__$2);
var seq5625__$3 = cljs.core.next.call(null,seq5625__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5626,G__5627,G__5628,seq5625__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__4776__auto___5637 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5638 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5639 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(!~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__4776__auto___5640 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} != ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__4776__auto___5641 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} == ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__4776__auto___5642 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{}",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__4776__auto___5643 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} != null && ~{} !== false)",(new cljs.core.List(null,x,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__4776__auto___5644 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"arguments",null,(1),null)),(2),null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__4776__auto___5645 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"delete ~{}[~{}]",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__4776__auto___5646 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} in ~{}",(new cljs.core.List(null,key,(new cljs.core.List(null,obj,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__4776__auto___5647 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"debugger",null,(1),null)),(2),null)),(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__4776__auto___5652 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__5649 = clojure.string.split.call(null,comment,/\n/);
var seq__5650 = cljs.core.seq.call(null,vec__5649);
var first__5651 = cljs.core.first.call(null,seq__5650);
var seq__5650__$1 = cljs.core.next.call(null,seq__5650);
var x = first__5651;
var ys = seq__5650__$1;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,["\n/**\n",[" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__5649,seq__5650,first__5651,seq__5650__$1,x,ys){
return (function (p1__5648_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__5648_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__5649,seq__5650,first__5651,seq__5650__$1,x,ys))
,ys)))," */\n"].join(''),null,(1),null)),(2),null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__4776__auto___5653 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,cast_expr,(new cljs.core.List(null,x,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__4776__auto___5654 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join(''),null,(1),null)),(2),null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__4776__auto___5655 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} === true",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5656 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} === false",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5657 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"typeof ~{} === 'string'",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5660 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
var x__$1 = (function (){var G__5659 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,_AMPERSAND_env,x));
if(cljs.core._EQ_.call(null,"js",cljs.core.namespace.call(null,x))){
return cljs.core.name.call(null,G__5659);
} else {
return G__5659;
}
})();
var segs = clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1),"/",".")),/\./);
var n = cljs.core.count.call(null,segs);
var syms = cljs.core.map.call(null,((function (x__$1,segs,n){
return (function (p1__5658_SHARP_){
return cljs.core.vary_meta.call(null,cljs.core.symbol.call(null,"js",clojure.string.join.call(null,".",p1__5658_SHARP_)),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
});})(x__$1,segs,n))
,cljs.core.reverse.call(null,cljs.core.take.call(null,n,cljs.core.iterate.call(null,cljs.core.butlast,segs))));
var js = clojure.string.join.call(null," && ",cljs.core.repeat.call(null,n,"(typeof ~{} !== 'undefined')"));
return cljs.core$macros.bool_expr.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,js,null,(1),null)),(2),null)),syms));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
}
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5661 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(void 0 === ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5662 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} === ~{})",(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5665 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} instanceof ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,c,null,(1),null)),(2),null)),(3),null)),(4),null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"c__5663__auto__","c__5663__auto__",1567779962,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__5664__auto__","x__5664__auto__",-353361859,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"(~{} instanceof ~{})",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__5664__auto__","x__5664__auto__",-353361859,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__5663__auto__","c__5663__auto__",1567779962,null),null,(1),null))))),null,(1),null)))))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5666 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"typeof ~{} === 'number'",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5667 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5668 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5678 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__5675 = arguments.length;
switch (G__5675) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5680 = arguments.length;
var i__4731__auto___5681 = (0);
while(true){
if((i__4731__auto___5681 < len__4730__auto___5680)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5681]));

var G__5682 = (i__4731__auto___5681 + (1));
i__4731__auto___5681 = G__5682;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__5676 = cljs.analyzer.checked_arrays.call(null);
var G__5676__$1 = (((G__5676 instanceof cljs.core.Keyword))?G__5676.fqn:null);
switch (G__5676__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)))));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)))));

break;
default:
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}])",(new cljs.core.List(null,array,(new cljs.core.List(null,idx,null,(1),null)),(2),null)),(3),null)),(4),null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__5677 = cljs.analyzer.checked_arrays.call(null);
var G__5677__$1 = (((G__5677 instanceof cljs.core.Keyword))?G__5677.fqn:null);
switch (G__5677__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),idxs)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),idxs)));

break;
default:
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join(''),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),idxs)));

}
});

/** @this {Function} */
cljs.core$macros.aget.cljs$lang$applyTo = (function (seq5670){
var G__5671 = cljs.core.first.call(null,seq5670);
var seq5670__$1 = cljs.core.next.call(null,seq5670);
var G__5672 = cljs.core.first.call(null,seq5670__$1);
var seq5670__$2 = cljs.core.next.call(null,seq5670__$1);
var G__5673 = cljs.core.first.call(null,seq5670__$2);
var seq5670__$3 = cljs.core.next.call(null,seq5670__$2);
var G__5674 = cljs.core.first.call(null,seq5670__$3);
var seq5670__$4 = cljs.core.next.call(null,seq5670__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5671,G__5672,G__5673,G__5674,seq5670__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__4776__auto___5695 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__5692 = arguments.length;
switch (G__5692) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5697 = arguments.length;
var i__4731__auto___5698 = (0);
while(true){
if((i__4731__auto___5698 < len__4730__auto___5697)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5698]));

var G__5699 = (i__4731__auto___5698 + (1));
i__4731__auto___5698 = G__5699;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__5693 = cljs.analyzer.checked_arrays.call(null);
var G__5693__$1 = (((G__5693 instanceof cljs.core.Keyword))?G__5693.fqn:null);
switch (G__5693__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,val,null,(1),null)))));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,val,null,(1),null)))));

break;
default:
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}] = ~{})",(new cljs.core.List(null,array,(new cljs.core.List(null,idx,(new cljs.core.List(null,val,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__5694 = cljs.analyzer.checked_arrays.call(null);
var G__5694__$1 = (((G__5694 instanceof cljs.core.Keyword))?G__5694.fqn:null);
switch (G__5694__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv)));

break;
default:
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join(''),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv)));

}
});

/** @this {Function} */
cljs.core$macros.aset.cljs$lang$applyTo = (function (seq5686){
var G__5687 = cljs.core.first.call(null,seq5686);
var seq5686__$1 = cljs.core.next.call(null,seq5686);
var G__5688 = cljs.core.first.call(null,seq5686__$1);
var seq5686__$2 = cljs.core.next.call(null,seq5686__$1);
var G__5689 = cljs.core.first.call(null,seq5686__$2);
var seq5686__$3 = cljs.core.next.call(null,seq5686__$2);
var G__5690 = cljs.core.first.call(null,seq5686__$3);
var seq5686__$4 = cljs.core.next.call(null,seq5686__$3);
var G__5691 = cljs.core.first.call(null,seq5686__$4);
var seq5686__$5 = cljs.core.next.call(null,seq5686__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5687,G__5688,G__5689,G__5690,G__5691,seq5686__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__4776__auto___5702 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}])",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__4776__auto___5703 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}] = ~{})",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,(new cljs.core.List(null,val,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__4776__auto___5711 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__5710 = arguments.length;
switch (G__5710) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5713 = arguments.length;
var i__4731__auto___5714 = (0);
while(true){
if((i__4731__auto___5714 < len__4730__auto___5713)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5714]));

var G__5715 = (i__4731__auto___5714 + (1));
i__4731__auto___5714 = G__5715;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} + ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq5705){
var G__5706 = cljs.core.first.call(null,seq5705);
var seq5705__$1 = cljs.core.next.call(null,seq5705);
var G__5707 = cljs.core.first.call(null,seq5705__$1);
var seq5705__$2 = cljs.core.next.call(null,seq5705__$1);
var G__5708 = cljs.core.first.call(null,seq5705__$2);
var seq5705__$3 = cljs.core.next.call(null,seq5705__$2);
var G__5709 = cljs.core.first.call(null,seq5705__$3);
var seq5705__$4 = cljs.core.next.call(null,seq5705__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5706,G__5707,G__5708,G__5709,seq5705__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__4776__auto___5716 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__4776__auto___5717 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__4776__auto___5718 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__4776__auto___5719 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__4776__auto___5720 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__4776__auto___5721 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__4776__auto___5722 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__4776__auto___5723 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__4776__auto___5724 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__4776__auto___5728 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5729 = arguments.length;
var i__4731__auto___5730 = (0);
while(true){
if((i__4731__auto___5730 < len__4730__auto___5729)){
args__4736__auto__.push((arguments[i__4731__auto___5730]));

var G__5731 = (i__4731__auto___5730 + (1));
i__4731__auto___5730 = G__5731;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq5725){
var G__5726 = cljs.core.first.call(null,seq5725);
var seq5725__$1 = cljs.core.next.call(null,seq5725);
var G__5727 = cljs.core.first.call(null,seq5725__$1);
var seq5725__$2 = cljs.core.next.call(null,seq5725__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5726,G__5727,seq5725__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__4776__auto___5735 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5736 = arguments.length;
var i__4731__auto___5737 = (0);
while(true){
if((i__4731__auto___5737 < len__4730__auto___5736)){
args__4736__auto__.push((arguments[i__4731__auto___5737]));

var G__5738 = (i__4731__auto___5737 + (1));
i__4731__auto___5737 = G__5738;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq5732){
var G__5733 = cljs.core.first.call(null,seq5732);
var seq5732__$1 = cljs.core.next.call(null,seq5732);
var G__5734 = cljs.core.first.call(null,seq5732__$1);
var seq5732__$2 = cljs.core.next.call(null,seq5732__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5733,G__5734,seq5732__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__4776__auto___5739 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__4776__auto___5740 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__4776__auto___5744 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5745 = arguments.length;
var i__4731__auto___5746 = (0);
while(true){
if((i__4731__auto___5746 < len__4730__auto___5745)){
args__4736__auto__.push((arguments[i__4731__auto___5746]));

var G__5747 = (i__4731__auto___5746 + (1));
i__4731__auto___5746 = G__5747;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq5741){
var G__5742 = cljs.core.first.call(null,seq5741);
var seq5741__$1 = cljs.core.next.call(null,seq5741);
var G__5743 = cljs.core.first.call(null,seq5741__$1);
var seq5741__$2 = cljs.core.next.call(null,seq5741__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5742,G__5743,seq5741__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__4776__auto___5748 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__4776__auto___5749 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__4776__auto___5753 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5754 = arguments.length;
var i__4731__auto___5755 = (0);
while(true){
if((i__4731__auto___5755 < len__4730__auto___5754)){
args__4736__auto__.push((arguments[i__4731__auto___5755]));

var G__5756 = (i__4731__auto___5755 + (1));
i__4731__auto___5755 = G__5756;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq5750){
var G__5751 = cljs.core.first.call(null,seq5750);
var seq5750__$1 = cljs.core.next.call(null,seq5750);
var G__5752 = cljs.core.first.call(null,seq5750__$1);
var seq5750__$2 = cljs.core.next.call(null,seq5750__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5751,G__5752,seq5750__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__4776__auto___5760 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5761 = arguments.length;
var i__4731__auto___5762 = (0);
while(true){
if((i__4731__auto___5762 < len__4730__auto___5761)){
args__4736__auto__.push((arguments[i__4731__auto___5762]));

var G__5763 = (i__4731__auto___5762 + (1));
i__4731__auto___5762 = G__5763;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq5757){
var G__5758 = cljs.core.first.call(null,seq5757);
var seq5757__$1 = cljs.core.next.call(null,seq5757);
var G__5759 = cljs.core.first.call(null,seq5757__$1);
var seq5757__$2 = cljs.core.next.call(null,seq5757__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5758,G__5759,seq5757__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__4776__auto___5764 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__4776__auto___5765 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__4776__auto___5766 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__4776__auto___5770 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5771 = arguments.length;
var i__4731__auto___5772 = (0);
while(true){
if((i__4731__auto___5772 < len__4730__auto___5771)){
args__4736__auto__.push((arguments[i__4731__auto___5772]));

var G__5773 = (i__4731__auto___5772 + (1));
i__4731__auto___5772 = G__5773;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq5767){
var G__5768 = cljs.core.first.call(null,seq5767);
var seq5767__$1 = cljs.core.next.call(null,seq5767);
var G__5769 = cljs.core.first.call(null,seq5767__$1);
var seq5767__$2 = cljs.core.next.call(null,seq5767__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5768,G__5769,seq5767__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__4776__auto___5777 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5778 = arguments.length;
var i__4731__auto___5779 = (0);
while(true){
if((i__4731__auto___5779 < len__4730__auto___5778)){
args__4736__auto__.push((arguments[i__4731__auto___5779]));

var G__5780 = (i__4731__auto___5779 + (1));
i__4731__auto___5779 = G__5780;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq5774){
var G__5775 = cljs.core.first.call(null,seq5774);
var seq5774__$1 = cljs.core.next.call(null,seq5774);
var G__5776 = cljs.core.first.call(null,seq5774__$1);
var seq5774__$2 = cljs.core.next.call(null,seq5774__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5775,G__5776,seq5774__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__4776__auto___5788 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__5787 = arguments.length;
switch (G__5787) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5790 = arguments.length;
var i__4731__auto___5791 = (0);
while(true){
if((i__4731__auto___5791 < len__4730__auto___5790)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5791]));

var G__5792 = (i__4731__auto___5791 + (1));
i__4731__auto___5791 = G__5792;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(- ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} - ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros._.cljs$lang$applyTo = (function (seq5782){
var G__5783 = cljs.core.first.call(null,seq5782);
var seq5782__$1 = cljs.core.next.call(null,seq5782);
var G__5784 = cljs.core.first.call(null,seq5782__$1);
var seq5782__$2 = cljs.core.next.call(null,seq5782__$1);
var G__5785 = cljs.core.first.call(null,seq5782__$2);
var seq5782__$3 = cljs.core.next.call(null,seq5782__$2);
var G__5786 = cljs.core.first.call(null,seq5782__$3);
var seq5782__$4 = cljs.core.next.call(null,seq5782__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5783,G__5784,G__5785,G__5786,seq5782__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__4776__auto___5800 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__5799 = arguments.length;
switch (G__5799) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5802 = arguments.length;
var i__4731__auto___5803 = (0);
while(true){
if((i__4731__auto___5803 < len__4730__auto___5802)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5803]));

var G__5804 = (i__4731__auto___5803 + (1));
i__4731__auto___5803 = G__5804;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} * ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq5794){
var G__5795 = cljs.core.first.call(null,seq5794);
var seq5794__$1 = cljs.core.next.call(null,seq5794);
var G__5796 = cljs.core.first.call(null,seq5794__$1);
var seq5794__$2 = cljs.core.next.call(null,seq5794__$1);
var G__5797 = cljs.core.first.call(null,seq5794__$2);
var seq5794__$3 = cljs.core.next.call(null,seq5794__$2);
var G__5798 = cljs.core.first.call(null,seq5794__$3);
var seq5794__$4 = cljs.core.next.call(null,seq5794__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5795,G__5796,G__5797,G__5798,seq5794__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__4776__auto___5812 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__5811 = arguments.length;
switch (G__5811) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5814 = arguments.length;
var i__4731__auto___5815 = (0);
while(true){
if((i__4731__auto___5815 < len__4730__auto___5814)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5815]));

var G__5816 = (i__4731__auto___5815 + (1));
i__4731__auto___5815 = G__5816;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} / ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq5806){
var G__5807 = cljs.core.first.call(null,seq5806);
var seq5806__$1 = cljs.core.next.call(null,seq5806);
var G__5808 = cljs.core.first.call(null,seq5806__$1);
var seq5806__$2 = cljs.core.next.call(null,seq5806__$1);
var G__5809 = cljs.core.first.call(null,seq5806__$2);
var seq5806__$3 = cljs.core.next.call(null,seq5806__$2);
var G__5810 = cljs.core.first.call(null,seq5806__$3);
var seq5806__$4 = cljs.core.next.call(null,seq5806__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5807,G__5808,G__5809,G__5810,seq5806__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__4776__auto___5824 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__5823 = arguments.length;
switch (G__5823) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5826 = arguments.length;
var i__4731__auto___5827 = (0);
while(true){
if((i__4731__auto___5827 < len__4730__auto___5826)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5827]));

var G__5828 = (i__4731__auto___5827 + (1));
i__4731__auto___5827 = G__5828;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} / ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.divide.cljs$lang$applyTo = (function (seq5818){
var G__5819 = cljs.core.first.call(null,seq5818);
var seq5818__$1 = cljs.core.next.call(null,seq5818);
var G__5820 = cljs.core.first.call(null,seq5818__$1);
var seq5818__$2 = cljs.core.next.call(null,seq5818__$1);
var G__5821 = cljs.core.first.call(null,seq5818__$2);
var seq5818__$3 = cljs.core.next.call(null,seq5818__$2);
var G__5822 = cljs.core.first.call(null,seq5818__$3);
var seq5818__$4 = cljs.core.next.call(null,seq5818__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5819,G__5820,G__5821,G__5822,seq5818__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__4776__auto___5836 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__5835 = arguments.length;
switch (G__5835) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5838 = arguments.length;
var i__4731__auto___5839 = (0);
while(true){
if((i__4731__auto___5839 < len__4730__auto___5838)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5839]));

var G__5840 = (i__4731__auto___5839 + (1));
i__4731__auto___5839 = G__5840;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} < ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq5830){
var G__5831 = cljs.core.first.call(null,seq5830);
var seq5830__$1 = cljs.core.next.call(null,seq5830);
var G__5832 = cljs.core.first.call(null,seq5830__$1);
var seq5830__$2 = cljs.core.next.call(null,seq5830__$1);
var G__5833 = cljs.core.first.call(null,seq5830__$2);
var seq5830__$3 = cljs.core.next.call(null,seq5830__$2);
var G__5834 = cljs.core.first.call(null,seq5830__$3);
var seq5830__$4 = cljs.core.next.call(null,seq5830__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5831,G__5832,G__5833,G__5834,seq5830__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__4776__auto___5848 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__5847 = arguments.length;
switch (G__5847) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5850 = arguments.length;
var i__4731__auto___5851 = (0);
while(true){
if((i__4731__auto___5851 < len__4730__auto___5850)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5851]));

var G__5852 = (i__4731__auto___5851 + (1));
i__4731__auto___5851 = G__5852;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} <= ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq5842){
var G__5843 = cljs.core.first.call(null,seq5842);
var seq5842__$1 = cljs.core.next.call(null,seq5842);
var G__5844 = cljs.core.first.call(null,seq5842__$1);
var seq5842__$2 = cljs.core.next.call(null,seq5842__$1);
var G__5845 = cljs.core.first.call(null,seq5842__$2);
var seq5842__$3 = cljs.core.next.call(null,seq5842__$2);
var G__5846 = cljs.core.first.call(null,seq5842__$3);
var seq5842__$4 = cljs.core.next.call(null,seq5842__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5843,G__5844,G__5845,G__5846,seq5842__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__4776__auto___5860 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__5859 = arguments.length;
switch (G__5859) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5862 = arguments.length;
var i__4731__auto___5863 = (0);
while(true){
if((i__4731__auto___5863 < len__4730__auto___5862)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5863]));

var G__5864 = (i__4731__auto___5863 + (1));
i__4731__auto___5863 = G__5864;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} > ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq5854){
var G__5855 = cljs.core.first.call(null,seq5854);
var seq5854__$1 = cljs.core.next.call(null,seq5854);
var G__5856 = cljs.core.first.call(null,seq5854__$1);
var seq5854__$2 = cljs.core.next.call(null,seq5854__$1);
var G__5857 = cljs.core.first.call(null,seq5854__$2);
var seq5854__$3 = cljs.core.next.call(null,seq5854__$2);
var G__5858 = cljs.core.first.call(null,seq5854__$3);
var seq5854__$4 = cljs.core.next.call(null,seq5854__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5855,G__5856,G__5857,G__5858,seq5854__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__4776__auto___5872 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__5871 = arguments.length;
switch (G__5871) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5874 = arguments.length;
var i__4731__auto___5875 = (0);
while(true){
if((i__4731__auto___5875 < len__4730__auto___5874)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5875]));

var G__5876 = (i__4731__auto___5875 + (1));
i__4731__auto___5875 = G__5876;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >= ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq5866){
var G__5867 = cljs.core.first.call(null,seq5866);
var seq5866__$1 = cljs.core.next.call(null,seq5866);
var G__5868 = cljs.core.first.call(null,seq5866__$1);
var seq5866__$2 = cljs.core.next.call(null,seq5866__$1);
var G__5869 = cljs.core.first.call(null,seq5866__$2);
var seq5866__$3 = cljs.core.next.call(null,seq5866__$2);
var G__5870 = cljs.core.first.call(null,seq5866__$3);
var seq5866__$4 = cljs.core.next.call(null,seq5866__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5867,G__5868,G__5869,G__5870,seq5866__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__4776__auto___5884 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__5883 = arguments.length;
switch (G__5883) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5886 = arguments.length;
var i__4731__auto___5887 = (0);
while(true){
if((i__4731__auto___5887 < len__4730__auto___5886)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5887]));

var G__5888 = (i__4731__auto___5887 + (1));
i__4731__auto___5887 = G__5888;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} === ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq5878){
var G__5879 = cljs.core.first.call(null,seq5878);
var seq5878__$1 = cljs.core.next.call(null,seq5878);
var G__5880 = cljs.core.first.call(null,seq5878__$1);
var seq5878__$2 = cljs.core.next.call(null,seq5878__$1);
var G__5881 = cljs.core.first.call(null,seq5878__$2);
var seq5878__$3 = cljs.core.next.call(null,seq5878__$2);
var G__5882 = cljs.core.first.call(null,seq5878__$3);
var seq5878__$4 = cljs.core.next.call(null,seq5878__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5879,G__5880,G__5881,G__5882,seq5878__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__4776__auto___5889 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__4776__auto___5890 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__4776__auto___5891 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5892 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5893 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___5903 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__5902 = arguments.length;
switch (G__5902) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5905 = arguments.length;
var i__4731__auto___5906 = (0);
while(true){
if((i__4731__auto___5906 < len__4730__auto___5905)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5906]));

var G__5907 = (i__4731__auto___5906 + (1));
i__4731__auto___5906 = G__5907;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__5894__auto__","x__5894__auto__",-1140879479,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__5895__auto__","y__5895__auto__",-1338664509,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"((~{} > ~{}) ? ~{} : ~{})",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__5894__auto__","x__5894__auto__",-1140879479,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__5895__auto__","y__5895__auto__",-1338664509,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__5894__auto__","x__5894__auto__",-1140879479,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__5895__auto__","y__5895__auto__",-1338664509,null),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.max.cljs$lang$applyTo = (function (seq5897){
var G__5898 = cljs.core.first.call(null,seq5897);
var seq5897__$1 = cljs.core.next.call(null,seq5897);
var G__5899 = cljs.core.first.call(null,seq5897__$1);
var seq5897__$2 = cljs.core.next.call(null,seq5897__$1);
var G__5900 = cljs.core.first.call(null,seq5897__$2);
var seq5897__$3 = cljs.core.next.call(null,seq5897__$2);
var G__5901 = cljs.core.first.call(null,seq5897__$3);
var seq5897__$4 = cljs.core.next.call(null,seq5897__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5898,G__5899,G__5900,G__5901,seq5897__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__4776__auto___5917 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__5916 = arguments.length;
switch (G__5916) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5919 = arguments.length;
var i__4731__auto___5920 = (0);
while(true){
if((i__4731__auto___5920 < len__4730__auto___5919)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5920]));

var G__5921 = (i__4731__auto___5920 + (1));
i__4731__auto___5920 = G__5921;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__5908__auto__","x__5908__auto__",-2144278849,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__5909__auto__","y__5909__auto__",656580269,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"((~{} < ~{}) ? ~{} : ~{})",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__5908__auto__","x__5908__auto__",-2144278849,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__5909__auto__","y__5909__auto__",656580269,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__5908__auto__","x__5908__auto__",-2144278849,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__5909__auto__","y__5909__auto__",656580269,null),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.min.cljs$lang$applyTo = (function (seq5911){
var G__5912 = cljs.core.first.call(null,seq5911);
var seq5911__$1 = cljs.core.next.call(null,seq5911);
var G__5913 = cljs.core.first.call(null,seq5911__$1);
var seq5911__$2 = cljs.core.next.call(null,seq5911__$1);
var G__5914 = cljs.core.first.call(null,seq5911__$2);
var seq5911__$3 = cljs.core.next.call(null,seq5911__$2);
var G__5915 = cljs.core.first.call(null,seq5911__$3);
var seq5911__$4 = cljs.core.next.call(null,seq5911__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5912,G__5913,G__5914,G__5915,seq5911__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__4776__auto___5922 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} % ~{})",(new cljs.core.List(null,num,(new cljs.core.List(null,div,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__4776__auto___5923 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~ ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__4776__auto___5931 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__5930 = arguments.length;
switch (G__5930) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5933 = arguments.length;
var i__4731__auto___5934 = (0);
while(true){
if((i__4731__auto___5934 < len__4730__auto___5933)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5934]));

var G__5935 = (i__4731__auto___5934 + (1));
i__4731__auto___5934 = G__5935;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq5925){
var G__5926 = cljs.core.first.call(null,seq5925);
var seq5925__$1 = cljs.core.next.call(null,seq5925);
var G__5927 = cljs.core.first.call(null,seq5925__$1);
var seq5925__$2 = cljs.core.next.call(null,seq5925__$1);
var G__5928 = cljs.core.first.call(null,seq5925__$2);
var seq5925__$3 = cljs.core.next.call(null,seq5925__$2);
var G__5929 = cljs.core.first.call(null,seq5925__$3);
var seq5925__$4 = cljs.core.next.call(null,seq5925__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5926,G__5927,G__5928,G__5929,seq5925__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__4776__auto___5943 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__5942 = arguments.length;
switch (G__5942) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5945 = arguments.length;
var i__4731__auto___5946 = (0);
while(true){
if((i__4731__auto___5946 < len__4730__auto___5945)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5946]));

var G__5947 = (i__4731__auto___5946 + (1));
i__4731__auto___5946 = G__5947;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq5937){
var G__5938 = cljs.core.first.call(null,seq5937);
var seq5937__$1 = cljs.core.next.call(null,seq5937);
var G__5939 = cljs.core.first.call(null,seq5937__$1);
var seq5937__$2 = cljs.core.next.call(null,seq5937__$1);
var G__5940 = cljs.core.first.call(null,seq5937__$2);
var seq5937__$3 = cljs.core.next.call(null,seq5937__$2);
var G__5941 = cljs.core.first.call(null,seq5937__$3);
var seq5937__$4 = cljs.core.next.call(null,seq5937__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5938,G__5939,G__5940,G__5941,seq5937__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__4776__auto___5955 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__5954 = arguments.length;
switch (G__5954) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5957 = arguments.length;
var i__4731__auto___5958 = (0);
while(true){
if((i__4731__auto___5958 < len__4730__auto___5957)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5958]));

var G__5959 = (i__4731__auto___5958 + (1));
i__4731__auto___5958 = G__5959;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} | ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq5949){
var G__5950 = cljs.core.first.call(null,seq5949);
var seq5949__$1 = cljs.core.next.call(null,seq5949);
var G__5951 = cljs.core.first.call(null,seq5949__$1);
var seq5949__$2 = cljs.core.next.call(null,seq5949__$1);
var G__5952 = cljs.core.first.call(null,seq5949__$2);
var seq5949__$3 = cljs.core.next.call(null,seq5949__$2);
var G__5953 = cljs.core.first.call(null,seq5949__$3);
var seq5949__$4 = cljs.core.next.call(null,seq5949__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5950,G__5951,G__5952,G__5953,seq5949__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__4776__auto___5960 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__4776__auto___5968 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__5967 = arguments.length;
switch (G__5967) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5970 = arguments.length;
var i__4731__auto___5971 = (0);
while(true){
if((i__4731__auto___5971 < len__4730__auto___5970)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5971]));

var G__5972 = (i__4731__auto___5971 + (1));
i__4731__auto___5971 = G__5972;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} ^ ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq5962){
var G__5963 = cljs.core.first.call(null,seq5962);
var seq5962__$1 = cljs.core.next.call(null,seq5962);
var G__5964 = cljs.core.first.call(null,seq5962__$1);
var seq5962__$2 = cljs.core.next.call(null,seq5962__$1);
var G__5965 = cljs.core.first.call(null,seq5962__$2);
var seq5962__$3 = cljs.core.next.call(null,seq5962__$2);
var G__5966 = cljs.core.first.call(null,seq5962__$3);
var seq5962__$4 = cljs.core.next.call(null,seq5962__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5963,G__5964,G__5965,G__5966,seq5962__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__4776__auto___5980 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__5979 = arguments.length;
switch (G__5979) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5982 = arguments.length;
var i__4731__auto___5983 = (0);
while(true){
if((i__4731__auto___5983 < len__4730__auto___5982)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5983]));

var G__5984 = (i__4731__auto___5983 + (1));
i__4731__auto___5983 = G__5984;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq5974){
var G__5975 = cljs.core.first.call(null,seq5974);
var seq5974__$1 = cljs.core.next.call(null,seq5974);
var G__5976 = cljs.core.first.call(null,seq5974__$1);
var seq5974__$2 = cljs.core.next.call(null,seq5974__$1);
var G__5977 = cljs.core.first.call(null,seq5974__$2);
var seq5974__$3 = cljs.core.next.call(null,seq5974__$2);
var G__5978 = cljs.core.first.call(null,seq5974__$3);
var seq5974__$4 = cljs.core.next.call(null,seq5974__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5975,G__5976,G__5977,G__5978,seq5974__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__4776__auto___5985 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~(1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__4776__auto___5986 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} ^ (1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__4776__auto___5987 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"((~{} & (1 << ~{})) != 0)",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__4776__auto___5988 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} << ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__4776__auto___5989 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__4776__auto___5990 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >>> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__4776__auto___5991 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >>> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__4776__auto___5992 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} | (1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__4776__auto___5993 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"((~{} >>> ~{}) & 0x01f)",(new cljs.core.List(null,hash,(new cljs.core.List(null,shift,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__4776__auto___5994 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(1 << ~{})",(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null),null,(1),null)),(new cljs.core.List(null,hash,null,(1),null)),(new cljs.core.List(null,shift,null,(1),null))))),null,(1),null)),(2),null)),(3),null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__4776__auto___5996 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"h__5995__auto__","h__5995__auto__",-1304070224,null),null,(1),null)),(new cljs.core.List(null,hash_key,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__5995__auto__","h__5995__auto__",-1304070224,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__5995__auto__","h__5995__auto__",-1304070224,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"h__5995__auto__","h__5995__auto__",-1304070224,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,hash_fn,null,(1),null)),(new cljs.core.List(null,coll,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,hash_key,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__5995__auto__","h__5995__auto__",-1304070224,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__5995__auto__","h__5995__auto__",-1304070224,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,doc,null,(1),null)),(new cljs.core.List(null,meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cargs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__5997__auto__","x__5997__auto__",-295889000,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),cargs,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__5997__auto__","x__5997__auto__",-295889000,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,args,null,(1),null)),body))),null,(1),null)))));
});
var ret__4776__auto___6005 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6006 = arguments.length;
var i__4731__auto___6007 = (0);
while(true){
if((i__4731__auto___6007 < len__4730__auto___6006)){
args__4736__auto__.push((arguments[i__4731__auto___6007]));

var G__6008 = (i__4731__auto___6007 + (1));
i__4731__auto___6007 = G__6008;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((6) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4737__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

/** @this {Function} */
cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq5998){
var G__5999 = cljs.core.first.call(null,seq5998);
var seq5998__$1 = cljs.core.next.call(null,seq5998);
var G__6000 = cljs.core.first.call(null,seq5998__$1);
var seq5998__$2 = cljs.core.next.call(null,seq5998__$1);
var G__6001 = cljs.core.first.call(null,seq5998__$2);
var seq5998__$3 = cljs.core.next.call(null,seq5998__$2);
var G__6002 = cljs.core.first.call(null,seq5998__$3);
var seq5998__$4 = cljs.core.next.call(null,seq5998__$3);
var G__6003 = cljs.core.first.call(null,seq5998__$4);
var seq5998__$5 = cljs.core.next.call(null,seq5998__$4);
var G__6004 = cljs.core.first.call(null,seq5998__$5);
var seq5998__$6 = cljs.core.next.call(null,seq5998__$5);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5999,G__6000,G__6001,G__6002,G__6003,G__6004,seq5998__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f1,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,clojure.walk.postwalk.call(null,(function (p1__6009_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__6009_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__6009_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__6009_SHARP_));
} else {
return p1__6009_SHARP_;
}
}),fkv),null,(1),null)),(new cljs.core.List(null,fkv,null,(1),null)))));
});
var ret__4776__auto___6014 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__6010,fkv){
var vec__6011 = p__6010;
var f1 = cljs.core.nth.call(null,vec__6011,(0),null);
var k = cljs.core.nth.call(null,vec__6011,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__4776__auto___6018 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6019 = arguments.length;
var i__4731__auto___6020 = (0);
while(true){
if((i__4731__auto___6020 < len__4730__auto___6019)){
args__4736__auto__.push((arguments[i__4731__auto___6020]));

var G__6021 = (i__4731__auto___6020 + (1));
i__4731__auto___6020 = G__6021;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_)),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(new cljs.core.List(null,meta_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,meta_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),locals,(new cljs.core.List(null,meta_sym,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-meta","-meta",494863156,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,this_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,meta_sym,null,(1),null))))),null,(1),null)),impls))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),locals,(new cljs.core.List(null,cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form)),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.reify.cljs$lang$applyTo = (function (seq6015){
var G__6016 = cljs.core.first.call(null,seq6015);
var seq6015__$1 = cljs.core.next.call(null,seq6015);
var G__6017 = cljs.core.first.call(null,seq6015__$1);
var seq6015__$2 = cljs.core.next.call(null,seq6015__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6016,G__6017,seq6015__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__4776__auto___6026 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6027 = arguments.length;
var i__4731__auto___6028 = (0);
while(true){
if((i__4731__auto___6028 < len__4730__auto___6027)){
args__4736__auto__.push((arguments[i__4731__auto___6028]));

var G__6029 = (i__4731__auto___6028 + (1));
i__4731__auto___6028 = G__6029;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),impls))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq6022){
var G__6023 = cljs.core.first.call(null,seq6022);
var seq6022__$1 = cljs.core.next.call(null,seq6022);
var G__6024 = cljs.core.first.call(null,seq6022__$1);
var seq6022__$2 = cljs.core.next.call(null,seq6022__$1);
var G__6025 = cljs.core.first.call(null,seq6022__$2);
var seq6022__$3 = cljs.core.next.call(null,seq6022__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6023,G__6024,G__6025,seq6022__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__4776__auto___6034 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6035 = arguments.length;
var i__4731__auto___6036 = (0);
while(true){
if((i__4731__auto___6036 < len__4730__auto___6035)){
args__4736__auto__.push((arguments[i__4731__auto___6036]));

var G__6037 = (i__4731__auto___6036 + (1));
i__4731__auto___6036 = G__6037;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.specify.cljs$lang$applyTo = (function (seq6030){
var G__6031 = cljs.core.first.call(null,seq6030);
var seq6030__$1 = cljs.core.next.call(null,seq6030);
var G__6032 = cljs.core.first.call(null,seq6030__$1);
var seq6030__$2 = cljs.core.next.call(null,seq6030__$1);
var G__6033 = cljs.core.first.call(null,seq6030__$2);
var seq6030__$3 = cljs.core.next.call(null,seq6030__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6031,G__6032,G__6033,seq6030__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__4776__auto___6038 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"this",null,(1),null)),(2),null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__4776__auto___6043 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6044 = arguments.length;
var i__4731__auto___6045 = (0);
while(true){
if((i__4731__auto___6045 < len__4730__auto___6044)){
args__4736__auto__.push((arguments[i__4731__auto___6045]));

var G__6046 = (i__4731__auto___6045 + (1));
i__4731__auto___6045 = G__6046;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq6039){
var G__6040 = cljs.core.first.call(null,seq6039);
var seq6039__$1 = cljs.core.next.call(null,seq6039);
var G__6041 = cljs.core.first.call(null,seq6039__$1);
var seq6039__$2 = cljs.core.next.call(null,seq6039__$1);
var G__6042 = cljs.core.first.call(null,seq6039__$2);
var seq6039__$3 = cljs.core.next.call(null,seq6039__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6040,G__6041,G__6042,seq6039__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__5718__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__5718__auto__)){
var var$ = temp__5718__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__5718__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__5718__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__6047 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__6048 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__6047;
s = G__6048;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__6049){
var vec__6050 = p__6049;
var p = cljs.core.nth.call(null,vec__6050,(0),null);
var sigs = cljs.core.nth.call(null,vec__6050,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym),(0),(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__6050,p,sigs){
return (function (p__6053){
var vec__6054 = p__6053;
var seq__6055 = cljs.core.seq.call(null,vec__6054);
var first__6056 = cljs.core.first.call(null,seq__6055);
var seq__6055__$1 = cljs.core.next.call(null,seq__6055);
var f = first__6056;
var meths = seq__6055__$1;
var form = vec__6054;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),meths))),cljs.core.meta.call(null,form)),null,(1),null)))));
});})(psym,pfn_prefix,vec__6050,p,sigs))
,sigs));
});
if((typeof cljs !== 'undefined') && (typeof cljs.core$macros !== 'undefined') && (typeof cljs.core$macros.extend_prefix !== 'undefined')){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property.call(null,sym),null,(1),null)))));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property.call(null,sym),null,(1),null)))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__6057){
var vec__6058 = p__6057;
var seq__6059 = cljs.core.seq.call(null,vec__6058);
var first__6060 = cljs.core.first.call(null,seq__6059);
var seq__6059__$1 = cljs.core.next.call(null,seq__6059);
var vec__6061 = first__6060;
var seq__6062 = cljs.core.seq.call(null,vec__6061);
var first__6063 = cljs.core.first.call(null,seq__6062);
var seq__6062__$1 = cljs.core.next.call(null,seq__6062);
var this$ = first__6063;
var args = seq__6062__$1;
var sig = vec__6061;
var body = seq__6059__$1;
return (new cljs.core.List(null,cljs.core.vec.call(null,args),(new cljs.core.List(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body),null,(1),null)),(2),null));
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__6064){
var vec__6065 = p__6064;
var seq__6066 = cljs.core.seq.call(null,vec__6065);
var first__6067 = cljs.core.first.call(null,seq__6066);
var seq__6066__$1 = cljs.core.next.call(null,seq__6066);
var vec__6068 = first__6067;
var seq__6069 = cljs.core.seq.call(null,vec__6068);
var first__6070 = cljs.core.first.call(null,seq__6069);
var seq__6069__$1 = cljs.core.next.call(null,seq__6069);
var this$ = first__6070;
var args = seq__6069__$1;
var sig = vec__6068;
var body = seq__6066__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,self_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,self_sym,null,(1),null)))))),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__6071){
var vec__6072 = p__6071;
var seq__6073 = cljs.core.seq.call(null,vec__6072);
var first__6074 = cljs.core.first.call(null,seq__6073);
var seq__6073__$1 = cljs.core.next.call(null,seq__6073);
var vec__6075 = first__6074;
var seq__6076 = cljs.core.seq.call(null,vec__6075);
var first__6077 = cljs.core.first.call(null,seq__6076);
var seq__6076__$1 = cljs.core.next.call(null,seq__6076);
var this$ = first__6077;
var args = seq__6076__$1;
var sig = vec__6075;
var body = seq__6073__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,args),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),null,(1),null)),body))),null,(1),null)))));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__6078){
var vec__6079 = p__6078;
var seq__6080 = cljs.core.seq.call(null,vec__6079);
var first__6081 = cljs.core.first.call(null,seq__6080);
var seq__6080__$1 = cljs.core.next.call(null,seq__6080);
var vec__6082 = first__6081;
var seq__6083 = cljs.core.seq.call(null,vec__6082);
var first__6084 = cljs.core.first.call(null,seq__6083);
var seq__6083__$1 = cljs.core.next.call(null,seq__6083);
var this$ = first__6084;
var args = seq__6083__$1;
var sig = vec__6082;
var body = seq__6080__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,this_SINGLEQUOTE_,null,(1),null)),body))),null,(1),null)))));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__6086){
var vec__6087 = p__6086;
var seq__6088 = cljs.core.seq.call(null,vec__6087);
var first__6089 = cljs.core.first.call(null,seq__6088);
var seq__6088__$1 = cljs.core.next.call(null,seq__6088);
var f = first__6089;
var meths = seq__6088__$1;
var form = vec__6087;
var vec__6090 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__6090,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__6090,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,f__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),cljs.core.map.call(null,((function (vec__6090,f__$1,meths__$1,vec__6087,seq__6088,first__6089,seq__6088__$1,f,meths,form){
return (function (p1__6085_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__6085_SHARP_);
});})(vec__6090,f__$1,meths__$1,vec__6087,seq__6088,first__6089,seq__6088__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form)),null,(1),null)))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__6094){
var vec__6095 = p__6094;
var seq__6096 = cljs.core.seq.call(null,vec__6095);
var first__6097 = cljs.core.first.call(null,seq__6096);
var seq__6096__$1 = cljs.core.next.call(null,seq__6096);
var f = first__6097;
var meths = seq__6096__$1;
var form = vec__6095;
return cljs.core.map.call(null,((function (vec__6095,seq__6096,first__6097,seq__6096__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,meth,null,(1),null))))),cljs.core.meta.call(null,form)),null,(1),null)))));
});})(vec__6095,seq__6096,first__6097,seq__6096__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__6095,seq__6096,first__6097,seq__6096__$1,f,meths,form){
return (function (p1__6093_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__6093_SHARP_);
});})(vec__6095,seq__6096,first__6097,seq__6096__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__6099){
var vec__6100 = p__6099;
var seq__6101 = cljs.core.seq.call(null,vec__6100);
var first__6102 = cljs.core.first.call(null,seq__6101);
var seq__6101__$1 = cljs.core.next.call(null,seq__6101);
var f = first__6102;
var meths = seq__6101__$1;
var form = vec__6100;
var meths__$1 = cljs.core.map.call(null,((function (vec__6100,seq__6101,first__6102,seq__6101__$1,f,meths,form){
return (function (p1__6098_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__6098_SHARP_);
});})(vec__6100,seq__6101,first__6102,seq__6101__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null)),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),meths__$1))),cljs.core.meta.call(null,form)),null,(1),null))))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null)),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-call",".-call",1760541695,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".concat",".concat",1180408684,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null),null,(1),null)),(new cljs.core.List(null,argsym,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),cljs.core.meta.call(null,form)),null,(1),null)))))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__6103){
var vec__6104 = p__6103;
var seq__6105 = cljs.core.seq.call(null,vec__6104);
var first__6106 = cljs.core.first.call(null,seq__6105);
var seq__6105__$1 = cljs.core.next.call(null,seq__6105);
var f = first__6106;
var meths = seq__6105__$1;
var form = vec__6104;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.core.name.call(null,f)))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,[pf,"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join('')),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form)),null,(1),null)))))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__6104,seq__6105,first__6106,seq__6105__$1,f,meths,form){
return (function (p__6107){
var vec__6108 = p__6107;
var seq__6109 = cljs.core.seq.call(null,vec__6108);
var first__6110 = cljs.core.first.call(null,seq__6109);
var seq__6109__$1 = cljs.core.next.call(null,seq__6109);
var sig = first__6110;
var body = seq__6109__$1;
var meth = vec__6108;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,[pf,"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.adapt_proto_params.call(null,type,meth),null,(1),null))))),cljs.core.meta.call(null,form)),null,(1),null)))));
});})(pf,vec__6104,seq__6105,first__6106,seq__6105__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__6111){
var vec__6112 = p__6111;
var p = cljs.core.nth.call(null,vec__6112,(0),null);
var sigs = cljs.core.nth.call(null,vec__6112,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,pprefix),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__6112,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__6112,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__6115 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__6115,(0),null);
var sigs = cljs.core.nth.call(null,vec__6115,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_6118 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_6118))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),sig))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"name","name",1843675177),fname], null));
} else {
}

if(((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.call(null,cljs.core.count,decmeths)))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__6119 = cljs.core.next.call(null,sigs__$1);
var G__6120 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__6119;
seen = G__6120;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_6133 = cljs.core.PersistentHashSet.EMPTY;
var methods_6134__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_6134__$1)){
var vec__6130_6135 = cljs.core.first.call(null,methods_6134__$1);
var fname_6136 = cljs.core.nth.call(null,vec__6130_6135,(0),null);
var method_6137 = vec__6130_6135;
if(cljs.core.contains_QMARK_.call(null,seen_6133,fname_6136)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_6136], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_6137);

var G__6138 = cljs.core.conj.call(null,seen_6133,fname_6136);
var G__6139 = cljs.core.next.call(null,methods_6134__$1);
seen_6133 = G__6138;
methods_6134__$1 = G__6139;
continue;
} else {
}
break;
}

var G__6140 = cljs.core.conj.call(null,protos,proto);
var G__6141 = impls__$2;
protos = G__6140;
impls__$1 = G__6141;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__4776__auto___6150 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6151 = arguments.length;
var i__4731__auto___6152 = (0);
while(true){
if((i__4731__auto___6152 < len__4730__auto___6151)){
args__4736__auto__.push((arguments[i__4731__auto___6152]));

var G__6153 = (i__4731__auto___6152 + (1));
i__4731__auto___6152 = G__6153;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null"], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__6147 = (function (){var temp__5718__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__5718__auto__)){
var type = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__6147,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__6147,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__4120__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__6147,type,assign_impls){
return (function (p1__6142_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__6142_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__6147,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq6143){
var G__6144 = cljs.core.first.call(null,seq6143);
var seq6143__$1 = cljs.core.next.call(null,seq6143);
var G__6145 = cljs.core.first.call(null,seq6143__$1);
var seq6143__$2 = cljs.core.next.call(null,seq6143__$1);
var G__6146 = cljs.core.first.call(null,seq6143__$2);
var seq6143__$3 = cljs.core.next.call(null,seq6143__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6144,G__6145,G__6146,seq6143__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__6155){
var vec__6156 = p__6155;
var f = cljs.core.nth.call(null,vec__6156,(0),null);
var sigs = cljs.core.nth.call(null,vec__6156,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__6156,f,sigs){
return (function (p1__6154_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__6154_SHARP_),cljs.core.nnext.call(null,p1__6154_SHARP_));
});})(vec__6156,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__6160 = arguments.length;
switch (G__6160) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__6162 = ret__$1;
var G__6163 = specs__$2;
ret = G__6162;
specs__$1 = G__6163;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__6164_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__6164_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var docstring = ["Positional factory function for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname),"."].join('');
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,fn_name,null,(1),null)),(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),field_values))),null,(1),null)))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__4776__auto___6176 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6177 = arguments.length;
var i__4731__auto___6178 = (0);
while(true){
if((i__4731__auto___6178 < len__4730__auto___6177)){
args__4736__auto__.push((arguments[i__4731__auto___6178]));

var G__6179 = (i__4731__auto___6178 + (1));
i__4731__auto___6178 = G__6179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__6173 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__6173,(0),null);
var pmasks = cljs.core.nth.call(null,vec__6173,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)),(new cljs.core.List(null,fields,null,(1),null)),(new cljs.core.List(null,pmasks,null,(1),null)),(new cljs.core.List(null,((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields)))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6165__auto__","this__6165__auto__",-652327965,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__6166__auto__","writer__6166__auto__",1299344260,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opt__6167__auto__","opt__6167__auto__",-1868248112,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__6166__auto__","writer__6166__auto__",1299344260,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq6168){
var G__6169 = cljs.core.first.call(null,seq6168);
var seq6168__$1 = cljs.core.next.call(null,seq6168);
var G__6170 = cljs.core.first.call(null,seq6168__$1);
var seq6168__$2 = cljs.core.next.call(null,seq6168__$1);
var G__6171 = cljs.core.first.call(null,seq6168__$2);
var seq6168__$3 = cljs.core.next.call(null,seq6168__$2);
var G__6172 = cljs.core.first.call(null,seq6168__$3);
var seq6168__$4 = cljs.core.next.call(null,seq6168__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6169,G__6170,G__6171,G__6172,seq6168__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__6180_SHARP_){
return cljs.core.with_meta.call(null,p1__6180_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.namespace.call(null,rname),".",cljs.core.name.call(null,rname),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-clone","-clone",227130084,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6181__auto__","this__6181__auto__",1836091481,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),fields__$2))),null,(1),null))))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6182__auto__","this__6182__auto__",1937124920,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6182__auto__","this__6182__auto__",1937124920,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__6183__auto__","coll__6183__auto__",1661405175,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.hash.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__6183__auto__","coll__6183__auto__",1661405175,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,other,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null),null,(1),null)),(new cljs.core.List(null,other,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null),null,(1),null)),(new cljs.core.List(null,other,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.map.call(null,((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property.call(null,field),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,other,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tagname], null)),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property.call(null,field),null,(1),null))))),null,(1),null)))));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,other,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tagname], null)),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-meta","-meta",494863156,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6184__auto__","this__6184__auto__",-117592382,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),null,(1),null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6185__auto__","this__6185__auto__",1606751767,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2)))),null,(1),null))))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6186__auto__","this__6186__auto__",-663728845,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__6187__auto__","k__6187__auto__",1973051445,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6186__auto__","this__6186__auto__",-663728845,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__6187__auto__","k__6187__auto__",1973051445,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6188__auto__","this__6188__auto__",-1677361575,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"else__6189__auto__","else__6189__auto__",822124350,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"else__6189__auto__","else__6189__auto__",822124350,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-count","-count",416049189,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6190__auto__","this__6190__auto__",-1833915726,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,base_fields),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6191__auto__","this__6191__auto__",-1406753105,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__6192__auto__","entry__6192__auto__",-1238275989,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__6192__auto__","entry__6192__auto__",-1238275989,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6191__auto__","this__6191__auto__",-1406753105,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__6192__auto__","entry__6192__auto__",-1238275989,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__6192__auto__","entry__6192__auto__",-1238275989,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6191__auto__","this__6191__auto__",-1406753105,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__6192__auto__","entry__6192__auto__",-1238275989,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6193__auto__","this__6193__auto__",1151038223,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__6194__auto__","k__6194__auto__",152546972,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__6194__auto__","k__6194__auto__",152546972,null),null,(1),null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__6194__auto__","k__6194__auto__",152546972,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6195__auto__","this__6195__auto__",2143294375,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__6196__auto__","k__6196__auto__",2029693627,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__6196__auto__","k__6196__auto__",2029693627,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6195__auto__","this__6195__auto__",2143294375,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__6196__auto__","k__6196__auto__",2029693627,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__6196__auto__","k__6196__auto__",2029693627,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6198__auto__","this__6198__auto__",-1179986759,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__6197_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","MapEntry.","cljs.core/MapEntry.",1317224033,null),(new cljs.core.List(null,cljs.core.keyword.call(null,p1__6197_SHARP_),(new cljs.core.List(null,p1__6197_SHARP_,(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null)),(4),null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,base_fields),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6200__auto__","this__6200__auto__",1801876549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__6201__auto__","writer__6201__auto__",693742872,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__6202__auto__","opts__6202__auto__",798736702,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"pr-pair__6203__auto__","pr-pair__6203__auto__",984857860,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"keyval__6204__auto__","keyval__6204__auto__",-1282786745,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__6201__auto__","writer__6201__auto__",693742872,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"cljs.core.pr_writer",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__6202__auto__","opts__6202__auto__",798736702,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keyval__6204__auto__","keyval__6204__auto__",-1282786745,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__6201__auto__","writer__6201__auto__",693742872,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"pr-pair__6203__auto__","pr-pair__6203__auto__",984857860,null),null,(1),null)),(new cljs.core.List(null,pr_open,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,"}",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__6202__auto__","opts__6202__auto__",798736702,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__6199_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null),(new cljs.core.List(null,cljs.core.keyword.call(null,p1__6199_SHARP_),(new cljs.core.List(null,p1__6199_SHARP_,null,(1),null)),(2),null)),(3),null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-kv-reduce","-kv-reduce",456218795,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6205__auto__","this__6205__auto__",-1566064337,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__6206__auto__","f__6206__auto__",170606896,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"init__6207__auto__","init__6207__auto__",1538432402,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__6208__auto__","ret__6208__auto__",1087185158,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"k__6209__auto__","k__6209__auto__",-808570751,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__6210__auto__","v__6210__auto__",463887635,null),null,(1),null)))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__6206__auto__","f__6206__auto__",170606896,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__6208__auto__","ret__6208__auto__",1087185158,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__6209__auto__","k__6209__auto__",-808570751,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__6210__auto__","v__6210__auto__",463887635,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"init__6207__auto__","init__6207__auto__",1538432402,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6205__auto__","this__6205__auto__",-1566064337,null),null,(1),null))))),null,(1),null)))))], null));
var vec__6211 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__6211,(0),null);
var pmasks = cljs.core.nth.call(null,vec__6211,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,(1),null)),(new cljs.core.List(null,tagname__$1,null,(1),null)),(new cljs.core.List(null,hinted_fields,null,(1),null)),(new cljs.core.List(null,pmasks,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null),null,(1),null)),(new cljs.core.List(null,tagname__$1,null,(1),null)),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true)))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var docstring = ["Factory function for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname),", taking a map of keywords to field values."].join('');
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,docstring,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,ms,null,(1),null)))));
});})(fn_name,docstring,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,fn_name,null,(1),null)),(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,ms,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"extmap__6214__auto__","extmap__6214__auto__",-1762035475,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","cond->>","cljs.core$macros/cond->>",967881072,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,ms,null,(1),null)),ks))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","record?","cljs.core/record?",1307655860,null),null,(1),null)),(new cljs.core.List(null,ms,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),getters,(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extmap__6214__auto__","extmap__6214__auto__",-1762035475,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
var ret__4776__auto___6222 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6223 = arguments.length;
var i__4731__auto___6224 = (0);
while(true){
if((i__4731__auto___6224 < len__4730__auto___6223)){
args__4736__auto__.push((arguments[i__4731__auto___6224]));

var G__6225 = (i__4731__auto___6224 + (1));
i__4731__auto___6224 = G__6225;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields)))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6215__auto__","this__6215__auto__",-1762338895,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6215__auto__","this__6215__auto__",-1762338895,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__6216__auto__","writer__6216__auto__",-959341385,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__6216__auto__","writer__6216__auto__",-959341385,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq6217){
var G__6218 = cljs.core.first.call(null,seq6217);
var seq6217__$1 = cljs.core.next.call(null,seq6217);
var G__6219 = cljs.core.first.call(null,seq6217__$1);
var seq6217__$2 = cljs.core.next.call(null,seq6217__$1);
var G__6220 = cljs.core.first.call(null,seq6217__$2);
var seq6217__$3 = cljs.core.next.call(null,seq6217__$2);
var G__6221 = cljs.core.first.call(null,seq6217__$3);
var seq6217__$4 = cljs.core.next.call(null,seq6217__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6218,G__6219,G__6220,G__6221,seq6217__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__4776__auto___6267 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6268 = arguments.length;
var i__4731__auto___6269 = (0);
while(true){
if((i__4731__auto___6269 < len__4730__auto___6268)){
args__4736__auto__.push((arguments[i__4731__auto___6269]));

var G__6270 = (i__4731__auto___6269 + (1));
i__4731__auto___6269 = G__6270;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__6234 = (function (){var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true], null);
var methods$ = cljs.core.PersistentVector.EMPTY;
var sigs = doc_PLUS_methods;
while(true){
if(cljs.core.not.call(null,cljs.core.seq.call(null,sigs))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,methods$], null);
} else {
var vec__6240 = sigs;
var seq__6241 = cljs.core.seq.call(null,vec__6240);
var first__6242 = cljs.core.first.call(null,seq__6241);
var seq__6241__$1 = cljs.core.next.call(null,seq__6241);
var head = first__6242;
var tail = seq__6241__$1;
if(typeof head === 'string'){
var G__6271 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"doc","doc",1913296891),head);
var G__6272 = methods$;
var G__6273 = tail;
opts = G__6271;
methods$ = G__6272;
sigs = G__6273;
continue;
} else {
if((head instanceof cljs.core.Keyword)){
var G__6274 = cljs.core.assoc.call(null,opts,head,cljs.core.first.call(null,tail));
var G__6275 = methods$;
var G__6276 = cljs.core.rest.call(null,tail);
opts = G__6274;
methods$ = G__6275;
sigs = G__6276;
continue;
} else {
if(cljs.core.list_QMARK_.call(null,head)){
var G__6277 = opts;
var G__6278 = cljs.core.conj.call(null,methods$,head);
var G__6279 = tail;
opts = G__6277;
methods$ = G__6278;
sigs = G__6279;
continue;
} else {
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)," received unexpected argument"].join('')));

}
}
}
}
break;
}
})();
var opts = cljs.core.nth.call(null,vec__6234,(0),null);
var methods$ = cljs.core.nth.call(null,vec__6234,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.merge,opts);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__6234,opts,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
});})(p,vec__6234,opts,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__6243 = cljs.core.seq.call(null,methods$);
var chunk__6244 = null;
var count__6245 = (0);
var i__6246 = (0);
while(true){
if((i__6246 < count__6245)){
var vec__6253 = cljs.core._nth.call(null,chunk__6244,i__6246);
var seq__6254 = cljs.core.seq.call(null,vec__6253);
var first__6255 = cljs.core.first.call(null,seq__6254);
var seq__6254__$1 = cljs.core.next.call(null,seq__6254);
var mname = first__6255;
var arities = seq__6254__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}


var G__6280 = seq__6243;
var G__6281 = chunk__6244;
var G__6282 = count__6245;
var G__6283 = (i__6246 + (1));
seq__6243 = G__6280;
chunk__6244 = G__6281;
count__6245 = G__6282;
i__6246 = G__6283;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__6243);
if(temp__5720__auto__){
var seq__6243__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6243__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__6243__$1);
var G__6284 = cljs.core.chunk_rest.call(null,seq__6243__$1);
var G__6285 = c__4550__auto__;
var G__6286 = cljs.core.count.call(null,c__4550__auto__);
var G__6287 = (0);
seq__6243 = G__6284;
chunk__6244 = G__6285;
count__6245 = G__6286;
i__6246 = G__6287;
continue;
} else {
var vec__6256 = cljs.core.first.call(null,seq__6243__$1);
var seq__6257 = cljs.core.seq.call(null,vec__6256);
var first__6258 = cljs.core.first.call(null,seq__6257);
var seq__6257__$1 = cljs.core.next.call(null,seq__6257);
var mname = first__6258;
var arities = seq__6257__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}


var G__6288 = cljs.core.next.call(null,seq__6243__$1);
var G__6289 = null;
var G__6290 = (0);
var G__6291 = (0);
seq__6243 = G__6288;
chunk__6244 = G__6289;
count__6245 = G__6290;
i__6246 = G__6291;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__6234,opts,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = (((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig))))?cljs.core.mapv.call(null,((function (p,vec__6234,opts,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if(((cljs.core.map_QMARK_.call(null,arg)) && ((!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__6234,opts,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
var fqn_fname = fqn.call(null,fname);
var fsig = cljs.core.first.call(null,sig__$1);
var check = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__6226__auto__","m__6226__auto__",1485801245,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,fqn_fname,null,(1),null)),(new cljs.core.List(null,"_",null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__6226__auto__","m__6226__auto__",1485801245,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__6226__auto__","m__6226__auto__",1485801245,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join(''),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
var check__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts)))?check:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"meta-impl__6227__auto__","meta-impl__6227__auto__",-505102912,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fqn_fname,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"meta-impl__6227__auto__","meta-impl__6227__auto__",-505102912,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,check,null,(1),null))))));
var check__$2 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__6228__auto__","x__6228__auto__",-829178761,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__6229__auto__","m__6229__auto__",-807409501,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,fqn_fname,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__6228__auto__","x__6228__auto__",-829178761,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__6229__auto__","m__6229__auto__",-807409501,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__6229__auto__","m__6229__auto__",-807409501,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,check__$1,null,(1),null))))),null,(1),null)))));
var check__$3 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null)),(new cljs.core.List(null,slot,null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,check__$2,null,(1),null)))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,sig__$1,null,(1),null)),(new cljs.core.List(null,check__$3,null,(1),null)))));
});})(p,vec__6234,opts,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__6234,opts,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__6259){
var vec__6260 = p__6259;
var seq__6261 = cljs.core.seq.call(null,vec__6260);
var first__6262 = cljs.core.first.call(null,seq__6261);
var seq__6261__$1 = cljs.core.next.call(null,seq__6261);
var fname = first__6262;
var sigs = seq__6261__$1;
var doc = (function (){var doc = cljs.core.last.call(null,sigs);
if(typeof doc === 'string'){
return doc;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__6234,opts,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__6234,opts,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__6263){
var vec__6264 = p__6263;
var seq__6265 = cljs.core.seq.call(null,vec__6264);
var first__6266 = cljs.core.first.call(null,seq__6265);
var seq__6265__$1 = cljs.core.next.call(null,seq__6265);
var fname = first__6266;
var sigs = seq__6265__$1;
var doc = (function (){var doc = cljs.core.last.call(null,sigs);
if(typeof doc === 'string'){
return doc;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.core.name.call(null,fname)))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,fname__$1,null,(1),null)),cljs.core.map.call(null,((function (doc,sigs__$1,amp,slot,fname__$1,vec__6264,seq__6265,first__6266,seq__6265__$1,fname,sigs,p,vec__6234,opts,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc,sigs__$1,amp,slot,fname__$1,vec__6264,seq__6265,first__6266,seq__6265__$1,fname,sigs,p,vec__6234,opts,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__6234,opts,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,psym__$2,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"function(){}",null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.map.call(null,method,methods$),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq6230){
var G__6231 = cljs.core.first.call(null,seq6230);
var seq6230__$1 = cljs.core.next.call(null,seq6230);
var G__6232 = cljs.core.first.call(null,seq6230__$1);
var seq6230__$2 = cljs.core.next.call(null,seq6230__$1);
var G__6233 = cljs.core.first.call(null,seq6230__$2);
var seq6230__$3 = cljs.core.next.call(null,seq6230__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6231,G__6232,G__6233,seq6230__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__4776__auto___6295 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__6292 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__6292,(0),null);
var bit = cljs.core.nth.call(null,vec__6292,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if((!((x instanceof cljs.core.Symbol)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bit,null,(1),null))))):false),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",prefix].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bit,null,(1),null))))):false),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",prefix].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___6299 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__6296 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__6296,(0),null);
var bit = cljs.core.nth.call(null,vec__6296,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if((!((x instanceof cljs.core.Symbol)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bit,null,(1),null))))):false),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",prefix].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bit,null,(1),null))))):false),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",prefix].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___6303 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6304 = arguments.length;
var i__4731__auto___6305 = (0);
while(true){
if((i__4731__auto___6305 < len__4730__auto___6304)){
args__4736__auto__.push((arguments[i__4731__auto___6305]));

var G__6306 = (i__4731__auto___6305 + (1));
i__4731__auto___6305 = G__6306;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq6300){
var G__6301 = cljs.core.first.call(null,seq6300);
var seq6300__$1 = cljs.core.next.call(null,seq6300);
var G__6302 = cljs.core.first.call(null,seq6300__$1);
var seq6300__$2 = cljs.core.next.call(null,seq6300__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6301,G__6302,seq6300__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__4776__auto___6310 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6311 = arguments.length;
var i__4731__auto___6312 = (0);
while(true){
if((i__4731__auto___6312 < len__4730__auto___6311)){
args__4736__auto__.push((arguments[i__4731__auto___6312]));

var G__6313 = (i__4731__auto___6312 + (1));
i__4731__auto___6312 = G__6313;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.delay.cljs$lang$applyTo = (function (seq6307){
var G__6308 = cljs.core.first.call(null,seq6307);
var seq6307__$1 = cljs.core.next.call(null,seq6307);
var G__6309 = cljs.core.first.call(null,seq6307__$1);
var seq6307__$2 = cljs.core.next.call(null,seq6307__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6308,G__6309,seq6307__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__4776__auto___6324 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6325 = arguments.length;
var i__4731__auto___6326 = (0);
while(true){
if((i__4731__auto___6326 < len__4730__auto___6325)){
args__4736__auto__.push((arguments[i__4731__auto___6326]));

var G__6327 = (i__4731__auto___6326 + (1));
i__4731__auto___6326 = G__6327;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var orig_val_syms = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,((function (names,vals){
return (function (p1__6314_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6314_SHARP_),"-orig-val__"].join('');
});})(names,vals))
,cljs.core.name),names);
var temp_val_syms = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,((function (names,vals,orig_val_syms){
return (function (p1__6315_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6315_SHARP_),"-temp-val__"].join('');
});})(names,vals,orig_val_syms))
,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,temp_val_syms);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,orig_val_syms));
var bind_value = ((function (names,vals,orig_val_syms,temp_val_syms,binds,resets){
return (function (p__6320){
var vec__6321 = p__6320;
var k = cljs.core.nth.call(null,vec__6321,(0),null);
var v = cljs.core.nth.call(null,vec__6321,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,k,(new cljs.core.List(null,v,null,(1),null)),(2),null)),(3),null));
});})(names,vals,orig_val_syms,temp_val_syms,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,orig_val_syms,names),cljs.core.interleave.call(null,temp_val_syms,vals))))),null,(1),null)),cljs.core.map.call(null,bind_value,binds),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),cljs.core.map.call(null,bind_value,resets)))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq6316){
var G__6317 = cljs.core.first.call(null,seq6316);
var seq6316__$1 = cljs.core.next.call(null,seq6316);
var G__6318 = cljs.core.first.call(null,seq6316__$1);
var seq6316__$2 = cljs.core.next.call(null,seq6316__$1);
var G__6319 = cljs.core.first.call(null,seq6316__$2);
var seq6316__$3 = cljs.core.next.call(null,seq6316__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6317,G__6318,G__6319,seq6316__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__4776__auto___6332 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6333 = arguments.length;
var i__4731__auto___6334 = (0);
while(true){
if((i__4731__auto___6334 < len__4730__auto___6333)){
args__4736__auto__.push((arguments[i__4731__auto___6334]));

var G__6335 = (i__4731__auto___6334 + (1));
i__4731__auto___6334 = G__6335;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.binding.cljs$lang$applyTo = (function (seq6328){
var G__6329 = cljs.core.first.call(null,seq6328);
var seq6328__$1 = cljs.core.next.call(null,seq6328);
var G__6330 = cljs.core.first.call(null,seq6328__$1);
var seq6328__$2 = cljs.core.next.call(null,seq6328__$1);
var G__6331 = cljs.core.first.call(null,seq6328__$2);
var seq6328__$3 = cljs.core.next.call(null,seq6328__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6329,G__6330,G__6331,seq6328__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__4776__auto___6348 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an Error is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6349 = arguments.length;
var i__4731__auto___6350 = (0);
while(true){
if((i__4731__auto___6350 < len__4730__auto___6349)){
args__4736__auto__.push((arguments[i__4731__auto___6350]));

var G__6351 = (i__4731__auto___6350 + (1));
i__4731__auto___6350 = G__6351;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__6342 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__6345 = cljs.core.nth.call(null,vec__6342,(0),null);
var a = cljs.core.nth.call(null,vec__6345,(0),null);
var b = cljs.core.nth.call(null,vec__6345,(1),null);
var c = cljs.core.nth.call(null,vec__6345,(2),null);
var clause = vec__6345;
var more = cljs.core.nth.call(null,vec__6342,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No matching clause: ",null,(1),null)),(new cljs.core.List(null,expr__$1,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,pred__$1,null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,expr__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$emit.call(null,pred__$1,expr__$1,more),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__6336__auto__","p__6336__auto__",1327129408,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,pred__$1,null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,expr__$1,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__6336__auto__","p__6336__auto__",1327129408,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs$core$macros$emit.call(null,pred__$1,expr__$1,more),null,(1),null)))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gpred,null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),(new cljs.core.List(null,gexpr,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,emit.call(null,gpred,gexpr,clauses),null,(1),null)))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.core$macros.condp.cljs$lang$applyTo = (function (seq6337){
var G__6338 = cljs.core.first.call(null,seq6337);
var seq6337__$1 = cljs.core.next.call(null,seq6337);
var G__6339 = cljs.core.first.call(null,seq6337__$1);
var seq6337__$2 = cljs.core.next.call(null,seq6337__$1);
var G__6340 = cljs.core.first.call(null,seq6337__$2);
var seq6337__$3 = cljs.core.next.call(null,seq6337__$2);
var G__6341 = cljs.core.first.call(null,seq6337__$3);
var seq6337__$4 = cljs.core.next.call(null,seq6337__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6338,G__6339,G__6340,G__6341,seq6337__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.analyzer._STAR_cljs_file_STAR_].join(''):null)].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__4120__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__4120__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__4776__auto___6368 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6369 = arguments.length;
var i__4731__auto___6370 = (0);
while(true){
if((i__4731__auto___6370 < len__4730__auto___6369)){
args__4736__auto__.push((arguments[i__4731__auto___6370]));

var G__6371 = (i__4731__auto___6370 + (1));
i__4731__auto___6370 = G__6371;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.call(null);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No matching clause: ",null,(1),null)),(new cljs.core.List(null,esym,null,(1),null))))),null,(1),null))))),null,(1),null))))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (esym,default$,env){
return (function (m,p__6360){
var vec__6361 = p__6360;
var test = cljs.core.nth.call(null,vec__6361,(0),null);
var expr = cljs.core.nth.call(null,vec__6361,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__6361,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,test__$1,null,(1),null)),(2),null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__6361,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,test,null,(1),null)),(2),null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (esym,default$,env,pairs,tests){
return (function (p1__6352_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__6352_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__6353_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__6353_SHARP_)){
return cljs.core.vec.call(null,p1__6353_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6353_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,tests__$1,null,(1),null)),(new cljs.core.List(null,thens,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))),null,(1),null)))));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__6354_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6354_SHARP_).substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__6355_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__6355_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__6355_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__6355_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,esym,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,tests__$1,null,(1),null)),(new cljs.core.List(null,thens,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null),null,(1),null)),cljs.core.mapcat.call(null,((function (esym,default$,env,pairs,tests){
return (function (p__6364){
var vec__6365 = p__6364;
var m = cljs.core.nth.call(null,vec__6365,(0),null);
var c = cljs.core.nth.call(null,vec__6365,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),(new cljs.core.List(null,esym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
});})(esym,default$,env,pairs,tests))
,pairs),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))),null,(1),null)))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.case$.cljs$lang$applyTo = (function (seq6356){
var G__6357 = cljs.core.first.call(null,seq6356);
var seq6356__$1 = cljs.core.next.call(null,seq6356);
var G__6358 = cljs.core.first.call(null,seq6356__$1);
var seq6356__$2 = cljs.core.next.call(null,seq6356__$1);
var G__6359 = cljs.core.first.call(null,seq6356__$2);
var seq6356__$3 = cljs.core.next.call(null,seq6356__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6357,G__6358,G__6359,seq6356__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__4776__auto___6372 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__4776__auto___6375 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__6374 = arguments.length;
switch (G__6374) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,["Assert failed: ",cljs.core.pr_str.call(null,x)].join(''),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Assert failed: ",null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,"\n",null,(1),null)),(new cljs.core.List(null,cljs.core.pr_str.call(null,x),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__4776__auto___6413 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__6382){
var vec__6383 = p__6382;
var k = cljs.core.nth.call(null,vec__6383,(0),null);
var v = cljs.core.nth.call(null,vec__6383,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__6414__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__6414 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__6415__i = 0, G__6415__a = new Array(arguments.length -  0);
while (G__6415__i < G__6415__a.length) {G__6415__a[G__6415__i] = arguments[G__6415__i + 0]; ++G__6415__i;}
  msg = new cljs.core.IndexedSeq(G__6415__a,0,null);
} 
return G__6414__delegate.call(this,msg);};
G__6414.cljs$lang$maxFixedArity = 0;
G__6414.cljs$lang$applyTo = (function (arglist__6416){
var msg = cljs.core.seq(arglist__6416);
return G__6414__delegate(msg);
});
G__6414.cljs$core$IFn$_invoke$arity$variadic = G__6414__delegate;
return G__6414;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__6386){
var vec__6387 = p__6386;
var seq__6388 = cljs.core.seq.call(null,vec__6387);
var first__6389 = cljs.core.first.call(null,seq__6388);
var seq__6388__$1 = cljs.core.next.call(null,seq__6388);
var vec__6390 = first__6389;
var seq__6391 = cljs.core.seq.call(null,vec__6390);
var first__6392 = cljs.core.first.call(null,seq__6391);
var seq__6391__$1 = cljs.core.next.call(null,seq__6391);
var bind = first__6392;
var first__6392__$1 = cljs.core.first.call(null,seq__6391__$1);
var seq__6391__$2 = cljs.core.next.call(null,seq__6391__$1);
var expr = first__6392__$1;
var mod_pairs = seq__6391__$2;
var vec__6393 = seq__6388__$1;
var vec__6396 = cljs.core.nth.call(null,vec__6393,(0),null);
var _ = cljs.core.nth.call(null,vec__6396,(0),null);
var next_expr = cljs.core.nth.call(null,vec__6396,(1),null);
var next_groups = vec__6393;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__6387,seq__6388,first__6389,seq__6388__$1,vec__6390,seq__6391,first__6392,seq__6391__$1,bind,first__6392__$1,seq__6391__$2,expr,mod_pairs,vec__6393,vec__6396,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__6399){
var vec__6400 = p__6399;
var seq__6401 = cljs.core.seq.call(null,vec__6400);
var first__6402 = cljs.core.first.call(null,seq__6401);
var seq__6401__$1 = cljs.core.next.call(null,seq__6401);
var vec__6403 = first__6402;
var k = cljs.core.nth.call(null,vec__6403,(0),null);
var v = cljs.core.nth.call(null,vec__6403,(1),null);
var pair = vec__6403;
var etc = seq__6401__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"iterys__6377__auto__","iterys__6377__auto__",-1629584987,null),null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind.call(null,next_groups),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__6378__auto__","fs__6378__auto__",-1283112200,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"iterys__6377__auto__","iterys__6377__auto__",-1629584987,null),null,(1),null)),(new cljs.core.List(null,next_expr,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__6378__auto__","fs__6378__auto__",-1283112200,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__6378__auto__","fs__6378__auto__",-1283112200,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,body_expr,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null)))));

}
}
}
}
}
});})(giter,gxs,vec__6387,seq__6388,first__6389,seq__6388__$1,vec__6390,seq__6391,first__6392,seq__6391__$1,bind,first__6392__$1,seq__6391__$2,expr,mod_pairs,vec__6393,vec__6396,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,do_mod.call(null,mod_pairs),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__6387,seq__6388,first__6389,seq__6388__$1,vec__6390,seq__6391,first__6392,seq__6391__$1,bind,first__6392__$1,seq__6391__$2,expr,mod_pairs,vec__6393,vec__6396,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__6406){
var vec__6407 = p__6406;
var seq__6408 = cljs.core.seq.call(null,vec__6407);
var first__6409 = cljs.core.first.call(null,seq__6408);
var seq__6408__$1 = cljs.core.next.call(null,seq__6408);
var vec__6410 = first__6409;
var k = cljs.core.nth.call(null,vec__6410,(0),null);
var v = cljs.core.nth.call(null,vec__6410,(1),null);
var pair = vec__6410;
var etc = seq__6408__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null)),(new cljs.core.List(null,body_expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null))))),null,(1),null)))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__6387,seq__6388,first__6389,seq__6388__$1,vec__6390,seq__6391,first__6392,seq__6391__$1,bind,first__6392__$1,seq__6391__$2,expr,mod_pairs,vec__6393,vec__6396,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"c__6379__auto__","c__6379__auto__",592451906,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/nagarajan/.cljs/.aot_cache/1.10.516/4A4FCC9/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,2468,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,52,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,2468,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,82,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null),null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"size__6380__auto__","size__6380__auto__",-1799317133,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__6379__auto__","c__6379__auto__",592451906,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"size__6380__auto__","size__6380__auto__",-1799317133,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gi,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"size__6380__auto__","size__6380__auto__",-1799317133,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__6379__auto__","c__6379__auto__",592451906,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,do_cmod.call(null,mod_pairs),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,do_mod.call(null,mod_pairs),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"iter__6381__auto__","iter__6381__auto__",-570794745,null),null,(1),null)),(new cljs.core.List(null,emit_bind.call(null,to_groups.call(null,seq_exprs)),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"iter__6381__auto__","iter__6381__auto__",-570794745,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second.call(null,seq_exprs),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__4776__auto___6422 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6423 = arguments.length;
var i__4731__auto___6424 = (0);
while(true){
if((i__4731__auto___6424 < len__4730__auto___6423)){
args__4736__auto__.push((arguments[i__4731__auto___6424]));

var G__6425 = (i__4731__auto___6424 + (1));
i__4731__auto___6424 = G__6425;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var err = (function() { 
var G__6426__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__6426 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__6427__i = 0, G__6427__a = new Array(arguments.length -  0);
while (G__6427__i < G__6427__a.length) {G__6427__a[G__6427__i] = arguments[G__6427__i + 0]; ++G__6427__i;}
  msg = new cljs.core.IndexedSeq(G__6427__a,0,null);
} 
return G__6426__delegate.call(this,msg);};
G__6426.cljs$lang$maxFixedArity = 0;
G__6426.cljs$lang$applyTo = (function (arglist__6428){
var msg = cljs.core.seq(arglist__6428);
return G__6426__delegate(msg);
});
G__6426.cljs$core$IFn$_invoke$arity$variadic = G__6426__delegate;
return G__6426;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body,(new cljs.core.List(null,null,null,(1),null)))))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)))),null,(1),null)),(new cljs.core.List(null,recform__$1,null,(1),null)))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null))))),null,(1),null)))));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,isym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,subform_chunk,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"c__6417__auto__","c__6417__auto__",-1978646478,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__6417__auto__","c__6417__auto__",-1978646478,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__6417__auto__","c__6417__auto__",-1978646478,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq6418){
var G__6419 = cljs.core.first.call(null,seq6418);
var seq6418__$1 = cljs.core.next.call(null,seq6418);
var G__6420 = cljs.core.first.call(null,seq6418__$1);
var seq6418__$2 = cljs.core.next.call(null,seq6418__$1);
var G__6421 = cljs.core.first.call(null,seq6418__$2);
var seq6418__$3 = cljs.core.next.call(null,seq6418__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6419,G__6420,G__6421,seq6418__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__4776__auto___6432 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6433 = arguments.length;
var i__4731__auto___6434 = (0);
while(true){
if((i__4731__auto___6434 < len__4730__auto___6433)){
args__4736__auto__.push((arguments[i__4731__auto___6434]));

var G__6435 = (i__4731__auto___6434 + (1));
i__4731__auto___6434 = G__6435;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.array.cljs$lang$applyTo = (function (seq6429){
var G__6430 = cljs.core.first.call(null,seq6429);
var seq6429__$1 = cljs.core.next.call(null,seq6429);
var G__6431 = cljs.core.first.call(null,seq6429__$1);
var seq6429__$2 = cljs.core.next.call(null,seq6429__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6430,G__6431,seq6429__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__4776__auto___6446 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__6445 = arguments.length;
switch (G__6445) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___6448 = arguments.length;
var i__4731__auto___6449 = (0);
while(true){
if((i__4731__auto___6449 < len__4730__auto___6448)){
args_arr__4751__auto__.push((arguments[i__4731__auto___6449]));

var G__6450 = (i__4731__auto___6449 + (1));
i__4731__auto___6449 = G__6450;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"dims__6436__auto__","dims__6436__auto__",152072602,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null),null,(1),null)),more_sizes))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__6437__auto__","dimarray__6437__auto__",-1834720788,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"i__6438__auto__","i__6438__auto__",-1910792474,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__6437__auto__","dimarray__6437__auto__",-1834720788,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__6437__auto__","dimarray__6437__auto__",-1834720788,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__6438__auto__","i__6438__auto__",-1910792474,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dims__6436__auto__","dims__6436__auto__",152072602,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__6437__auto__","dimarray__6437__auto__",-1834720788,null),null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

/** @this {Function} */
cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq6440){
var G__6441 = cljs.core.first.call(null,seq6440);
var seq6440__$1 = cljs.core.next.call(null,seq6440);
var G__6442 = cljs.core.first.call(null,seq6440__$1);
var seq6440__$2 = cljs.core.next.call(null,seq6440__$1);
var G__6443 = cljs.core.first.call(null,seq6440__$2);
var seq6440__$3 = cljs.core.next.call(null,seq6440__$2);
var G__6444 = cljs.core.first.call(null,seq6440__$3);
var seq6440__$4 = cljs.core.next.call(null,seq6440__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6441,G__6442,G__6443,G__6444,seq6440__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__4776__auto___6457 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__6456 = arguments.length;
switch (G__6456) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___6459 = arguments.length;
var i__4731__auto___6460 = (0);
while(true){
if((i__4731__auto___6460 < len__4730__auto___6459)){
args_arr__4751__auto__.push((arguments[i__4731__auto___6460]));

var G__6461 = (i__4731__auto___6460 + (1));
i__4731__auto___6460 = G__6461;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
var cnt = (cljs.core.count.call(null,xs) + (1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,cnt,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros.list.cljs$lang$applyTo = (function (seq6452){
var G__6453 = cljs.core.first.call(null,seq6452);
var seq6452__$1 = cljs.core.next.call(null,seq6452);
var G__6454 = cljs.core.first.call(null,seq6452__$1);
var seq6452__$2 = cljs.core.next.call(null,seq6452__$1);
var G__6455 = cljs.core.first.call(null,seq6452__$2);
var seq6452__$3 = cljs.core.next.call(null,seq6452__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6453,G__6454,G__6455,seq6452__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__4776__auto___6467 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__6466 = arguments.length;
switch (G__6466) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___6469 = arguments.length;
var i__4731__auto___6470 = (0);
while(true){
if((i__4731__auto___6470 < len__4730__auto___6469)){
args_arr__4751__auto__.push((arguments[i__4731__auto___6470]));

var G__6471 = (i__4731__auto___6470 + (1));
i__4731__auto___6470 = G__6471;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cnt,null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

/** @this {Function} */
cljs.core$macros.vector.cljs$lang$applyTo = (function (seq6463){
var G__6464 = cljs.core.first.call(null,seq6463);
var seq6463__$1 = cljs.core.next.call(null,seq6463);
var G__6465 = cljs.core.first.call(null,seq6463__$1);
var seq6463__$2 = cljs.core.next.call(null,seq6463__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6464,G__6465,seq6463__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__4776__auto___6483 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__6478 = arguments.length;
switch (G__6478) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___6485 = arguments.length;
var i__4731__auto___6486 = (0);
while(true){
if((i__4731__auto___6486 < len__4730__auto___6485)){
args_arr__4751__auto__.push((arguments[i__4731__auto___6486]));

var G__6487 = (i__4731__auto___6486 + (1));
i__4731__auto___6486 = G__6487;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if(((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__6472_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,p1__6472_SHARP_)),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__6473_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__6481 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__6482 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__6482;

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__6473_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__6481;
}});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(cljs.core.count.call(null,kvs) / (2)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),kvs))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),kvs))),null,(1),null)))));
}
});

/** @this {Function} */
cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq6475){
var G__6476 = cljs.core.first.call(null,seq6475);
var seq6475__$1 = cljs.core.next.call(null,seq6475);
var G__6477 = cljs.core.first.call(null,seq6475__$1);
var seq6475__$2 = cljs.core.next.call(null,seq6475__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6476,G__6477,seq6475__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__4776__auto___6493 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__6492 = arguments.length;
switch (G__6492) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___6495 = arguments.length;
var i__4731__auto___6496 = (0);
while(true){
if((i__4731__auto___6496 < len__4730__auto___6495)){
args_arr__4751__auto__.push((arguments[i__4731__auto___6496]));

var G__6497 = (i__4731__auto___6496 + (1));
i__4731__auto___6496 = G__6497;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,(1),null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),ks))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),vs))),null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

/** @this {Function} */
cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq6489){
var G__6490 = cljs.core.first.call(null,seq6489);
var seq6489__$1 = cljs.core.next.call(null,seq6489);
var G__6491 = cljs.core.first.call(null,seq6489__$1);
var seq6489__$2 = cljs.core.next.call(null,seq6489__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6490,G__6491,seq6489__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__4776__auto___6509 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__6504 = arguments.length;
switch (G__6504) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___6511 = arguments.length;
var i__4731__auto___6512 = (0);
while(true){
if((i__4731__auto___6512 < len__4730__auto___6511)){
args_arr__4751__auto__.push((arguments[i__4731__auto___6512]));

var G__6513 = (i__4731__auto___6512 + (1));
i__4731__auto___6512 = G__6513;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null),null,(1),null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if((((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__6498_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,p1__6498_SHARP_)),new cljs.core.Keyword(null,"const","const",1709929842));
}),cljs.core.map.call(null,(function (p1__6499_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__6507 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__6508 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__6508;

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__6499_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__6507;
}}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs))))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,xs),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),xs))),null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

/** @this {Function} */
cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq6501){
var G__6502 = cljs.core.first.call(null,seq6501);
var seq6501__$1 = cljs.core.next.call(null,seq6501);
var G__6503 = cljs.core.first.call(null,seq6501__$1);
var seq6501__$2 = cljs.core.next.call(null,seq6501__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6502,G__6503,seq6501__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["({",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"})"].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__4776__auto___6529 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6530 = arguments.length;
var i__4731__auto___6531 = (0);
while(true){
if((i__4731__auto___6531 < len__4730__auto___6530)){
args__4736__auto__.push((arguments[i__4731__auto___6531]));

var G__6532 = (i__4731__auto___6531 + (1));
i__4731__auto___6531 = G__6532;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return (((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__6517){
var vec__6518 = p__6517;
var k = cljs.core.nth.call(null,vec__6518,(0),null);
var _ = cljs.core.nth.call(null,vec__6518,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(new cljs.core.List(null,obj,null,(1),null)),(new cljs.core.List(null,cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs)),null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__6521){
var vec__6522 = p__6521;
var k = cljs.core.nth.call(null,vec__6522,(0),null);
var v = cljs.core.nth.call(null,vec__6522,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,v,null,(1),null)))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__6525){
var vec__6526 = p__6525;
var k = cljs.core.nth.call(null,vec__6526,(0),null);
var v = cljs.core.nth.call(null,vec__6526,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs.core.get.call(null,kvs,k),null,(1),null)))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(new cljs.core.List(null,obj,null,(1),null)))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq6514){
var G__6515 = cljs.core.first.call(null,seq6514);
var seq6514__$1 = cljs.core.next.call(null,seq6514);
var G__6516 = cljs.core.first.call(null,seq6514__$1);
var seq6514__$2 = cljs.core.next.call(null,seq6514__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6515,G__6516,seq6514__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__4776__auto___6533 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{}.length",(new cljs.core.List(null,a,null,(1),null)),(2),null)),(3),null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__4776__auto___6536 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__6534__auto__","a__6534__auto__",-1907568459,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"l__6535__auto__","l__6535__auto__",1014173810,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__6534__auto__","a__6534__auto__",-1907568459,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__6534__auto__","a__6534__auto__",-1907568459,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"l__6535__auto__","l__6535__auto__",1014173810,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__4776__auto___6539 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__6537__auto__","a__6537__auto__",-1504435964,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"l__6538__auto__","l__6538__auto__",185453925,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__6537__auto__","a__6537__auto__",-1504435964,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,init,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"l__6538__auto__","l__6538__auto__",185453925,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__4776__auto___6545 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6546 = arguments.length;
var i__4731__auto___6547 = (0);
while(true){
if((i__4731__auto___6547 < len__4730__auto___6546)){
args__4736__auto__.push((arguments[i__4731__auto___6547]));

var G__6548 = (i__4731__auto___6547 + (1));
i__4731__auto___6547 = G__6548;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"n__6540__auto__","n__6540__auto__",-1223316912,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n__6540__auto__","n__6540__auto__",-1223316912,null),null,(1),null))))),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq6541){
var G__6542 = cljs.core.first.call(null,seq6541);
var seq6541__$1 = cljs.core.next.call(null,seq6541);
var G__6543 = cljs.core.first.call(null,seq6541__$1);
var seq6541__$2 = cljs.core.next.call(null,seq6541__$1);
var G__6544 = cljs.core.first.call(null,seq6541__$2);
var seq6541__$3 = cljs.core.next.call(null,seq6541__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6542,G__6543,G__6544,seq6541__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6552 = arguments.length;
var i__4731__auto___6553 = (0);
while(true){
if((i__4731__auto___6553 < len__4730__auto___6552)){
args__4736__auto__.push((arguments[i__4731__auto___6553]));

var G__6554 = (i__4731__auto___6553 + (1));
i__4731__auto___6553 = G__6554;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__6549_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6549_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq6550){
var G__6551 = cljs.core.first.call(null,seq6550);
var seq6550__$1 = cljs.core.next.call(null,seq6550);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6551,seq6550__$1);
});

var ret__4776__auto___6564 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6565 = arguments.length;
var i__4731__auto___6566 = (0);
while(true){
if((i__4731__auto___6566 < len__4730__auto___6565)){
args__4736__auto__.push((arguments[i__4731__auto___6566]));

var G__6567 = (i__4731__auto___6566 + (1));
i__4731__auto___6566 = G__6567;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,mm_name,m__$2),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__6555__auto__","method-table__6555__auto__",1624604201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__6556__auto__","prefer-table__6556__auto__",737799001,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__6557__auto__","method-cache__6557__auto__",-1675734239,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__6558__auto__","cached-hierarchy__6558__auto__",998462961,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"hierarchy__6559__auto__","hierarchy__6559__auto__",-1620951969,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,options__$4,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"cljs.core.get_global_hierarchy",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,mm_ns,null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,mm_name),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,dispatch_fn,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"hierarchy__6559__auto__","hierarchy__6559__auto__",-1620951969,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__6555__auto__","method-table__6555__auto__",1624604201,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__6556__auto__","prefer-table__6556__auto__",737799001,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__6557__auto__","method-cache__6557__auto__",-1675734239,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__6558__auto__","cached-hierarchy__6558__auto__",998462961,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq6560){
var G__6561 = cljs.core.first.call(null,seq6560);
var seq6560__$1 = cljs.core.next.call(null,seq6560);
var G__6562 = cljs.core.first.call(null,seq6560__$1);
var seq6560__$2 = cljs.core.next.call(null,seq6560__$1);
var G__6563 = cljs.core.first.call(null,seq6560__$2);
var seq6560__$3 = cljs.core.next.call(null,seq6560__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6561,G__6562,G__6563,seq6560__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__4776__auto___6573 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6574 = arguments.length;
var i__4731__auto___6575 = (0);
while(true){
if((i__4731__auto___6575 < len__4730__auto___6574)){
args__4736__auto__.push((arguments[i__4731__auto___6575]));

var G__6576 = (i__4731__auto___6575 + (1));
i__4731__auto___6575 = G__6576;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null)),null,(1),null)),(new cljs.core.List(null,dispatch_val,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),fn_tail))),null,(1),null)))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq6568){
var G__6569 = cljs.core.first.call(null,seq6568);
var seq6568__$1 = cljs.core.next.call(null,seq6568);
var G__6570 = cljs.core.first.call(null,seq6568__$1);
var seq6568__$2 = cljs.core.next.call(null,seq6568__$1);
var G__6571 = cljs.core.first.call(null,seq6568__$2);
var seq6568__$3 = cljs.core.next.call(null,seq6568__$2);
var G__6572 = cljs.core.first.call(null,seq6568__$3);
var seq6568__$4 = cljs.core.next.call(null,seq6568__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6569,G__6570,G__6571,G__6572,seq6568__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__4776__auto___6579 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"start__6577__auto__","start__6577__auto__",868296246,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__6578__auto__","ret__6578__auto__",550056825,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Elapsed time: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"start__6577__auto__","start__6577__auto__",868296246,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(6),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__6578__auto__","ret__6578__auto__",550056825,null),null,(1),null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__4776__auto___6594 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6595 = arguments.length;
var i__4731__auto___6596 = (0);
while(true){
if((i__4731__auto___6596 < len__4730__auto___6595)){
args__4736__auto__.push((arguments[i__4731__auto___6596]));

var G__6597 = (i__4731__auto___6596 + (1));
i__4731__auto___6596 = G__6597;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((5) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4737__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__6591){
var map__6592 = p__6591;
var map__6592__$1 = (((((!((map__6592 == null))))?(((((map__6592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6592):map__6592);
var print_fn = cljs.core.get.call(null,map__6592__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"start__6580__auto__","start__6580__auto__",-1335890900,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__6581__auto__","ret__6581__auto__",-231909125,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___6582__auto__","___6582__auto__",779901854,null),null,(1),null)),(new cljs.core.List(null,iterations,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"end__6583__auto__","end__6583__auto__",-1724682873,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__6584__auto__","elapsed__6584__auto__",-1535403277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"end__6583__auto__","end__6583__auto__",-1724682873,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"start__6580__auto__","start__6580__auto__",-1335890900,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,print_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null),null,(1),null)),(new cljs.core.List(null,bs_str,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,expr_str,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,iterations,null,(1),null)),(new cljs.core.List(null," runs, ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__6584__auto__","elapsed__6584__auto__",-1535403277,null),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq6585){
var G__6586 = cljs.core.first.call(null,seq6585);
var seq6585__$1 = cljs.core.next.call(null,seq6585);
var G__6587 = cljs.core.first.call(null,seq6585__$1);
var seq6585__$2 = cljs.core.next.call(null,seq6585__$1);
var G__6588 = cljs.core.first.call(null,seq6585__$2);
var seq6585__$3 = cljs.core.next.call(null,seq6585__$2);
var G__6589 = cljs.core.first.call(null,seq6585__$3);
var seq6585__$4 = cljs.core.next.call(null,seq6585__$3);
var G__6590 = cljs.core.first.call(null,seq6585__$4);
var seq6585__$5 = cljs.core.next.call(null,seq6585__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6586,G__6587,G__6588,G__6589,G__6590,seq6585__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__6599 = arguments.length;
switch (G__6599) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core$macros.cs.call(null,(n - (1))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null)),cljs.core.take.call(null,n,cljs.core$macros.cs)))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.gen_apply_to_helper.call(null,(n + (1))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,"Only up to 20 arguments supported on functions",null,(1),null))))),null,(1),null)))));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__4776__auto___6601 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.gen_apply_to_helper.call(null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.call(null,[".-",proto_name].join(''));
var proto_inv = cljs.core.symbol.call(null,[".",proto_name].join(''));
var next_sym = cljs.core.symbol.call(null,["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.call(null,((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__6602_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6602_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.call(null,(num_args + (1))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new_arg_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,proto_prop,null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,proto_inv,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),all_args))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),all_args))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__6603__auto__","arr__6603__auto__",1305151487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),all_args))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"s__6604__auto__","s__6604__auto__",1800401700,null),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__6604__auto__","s__6604__auto__",1800401700,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__6603__auto__","arr__6603__auto__",1305151487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__6604__auto__","s__6604__auto__",1800401700,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__6604__auto__","s__6604__auto__",1800401700,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__6603__auto__","arr__6603__auto__",1305151487,null),null,(1),null))))),null,(1),null))))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym)),null,(1),null))))),null,(1),null)))));
});
var ret__4776__auto___6605 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__4776__auto___6611 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6612 = arguments.length;
var i__4731__auto___6613 = (0);
while(true){
if((i__4731__auto___6613 < len__4730__auto___6612)){
args__4736__auto__.push((arguments[i__4731__auto___6613]));

var G__6614 = (i__4731__auto___6613 + (1));
i__4731__auto___6613 = G__6614;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__6606__auto__","sb__6606__auto__",-155240250,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.string","StringBuffer.","goog.string/StringBuffer.",-6870594,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__6607__auto__","x__6607__auto__",1582073474,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".append",".append",1595439852,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__6606__auto__","sb__6606__auto__",-155240250,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__6607__auto__","x__6607__auto__",1582073474,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__6606__auto__","sb__6606__auto__",-155240250,null),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq6608){
var G__6609 = cljs.core.first.call(null,seq6608);
var seq6608__$1 = cljs.core.next.call(null,seq6608);
var G__6610 = cljs.core.first.call(null,seq6608__$1);
var seq6608__$2 = cljs.core.next.call(null,seq6608__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6609,G__6610,seq6608__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__4776__auto___6619 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6620 = arguments.length;
var i__4731__auto___6621 = (0);
while(true){
if((i__4731__auto___6621 < len__4730__auto___6620)){
args__4736__auto__.push((arguments[i__4731__auto___6621]));

var G__6622 = (i__4731__auto___6621 + (1));
i__4731__auto___6621 = G__6622;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),cljs.core.map.call(null,(function (p1__6615_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null),(new cljs.core.List(null,p1__6615_SHARP_,null,(1),null)),(2),null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq6616){
var G__6617 = cljs.core.first.call(null,seq6616);
var seq6616__$1 = cljs.core.next.call(null,seq6616);
var G__6618 = cljs.core.first.call(null,seq6616__$1);
var seq6616__$2 = cljs.core.next.call(null,seq6616__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6617,G__6618,seq6616__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__4776__auto___6623 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"''+~{}",(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__4776__auto___6625 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null),null,(1),null)),(new cljs.core.List(null,ty,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6624__auto__","this__6624__auto__",-564295397,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__6624__auto__","this__6624__auto__",-564295397,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__4776__auto___6634 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__6626){
var vec__6627 = p__6626;
var sym = cljs.core.nth.call(null,vec__6627,(0),null);
var _ = cljs.core.nth.call(null,vec__6627,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,sym),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym)),null,(1),null))))),null,(1),null))))));
});})(ns))
,cljs.core.filter.call(null,((function (ns){
return (function (p__6630){
var vec__6631 = p__6630;
var _ = cljs.core.nth.call(null,vec__6631,(0),null);
var info = cljs.core.nth.call(null,vec__6631,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))))),null,(1),null)))));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__4776__auto___6639 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__6635){
var vec__6636 = p__6635;
var ctor = cljs.core.nth.call(null,vec__6636,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__6636,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,ctor),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,qualified_ctor),null,(1),null))))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null))))))),null,(1),null)))));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__4776__auto___6644 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__6640){
var vec__6641 = p__6640;
var sym = cljs.core.nth.call(null,vec__6641,(0),null);
var _ = cljs.core.nth.call(null,vec__6641,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,sym),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym)),null,(1),null))))),null,(1),null))))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))),null,(1),null)))));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__4776__auto___6645 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if(((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_sym) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
var sym = cljs.core.second.call(null,quoted_sym);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null),null,(1),null)),(new cljs.core.List(null,cljs.compiler.munge.call(null,ns),null,(1),null)),(new cljs.core.List(null,cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),null,(1),null)))));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__4776__auto___6651 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6652 = arguments.length;
var i__4731__auto___6653 = (0);
while(true){
if((i__4731__auto___6653 < len__4730__auto___6652)){
args__4736__auto__.push((arguments[i__4731__auto___6653]));

var G__6654 = (i__4731__auto___6653 + (1));
i__4731__auto___6653 = G__6654;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null),null,(1),null)),(new cljs.core.List(null,vol,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null),null,(1),null)),(new cljs.core.List(null,vol,null,(1),null))))),null,(1),null)),args))),null,(1),null)))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq6646){
var G__6647 = cljs.core.first.call(null,seq6646);
var seq6646__$1 = cljs.core.next.call(null,seq6646);
var G__6648 = cljs.core.first.call(null,seq6646__$1);
var seq6646__$2 = cljs.core.next.call(null,seq6646__$1);
var G__6649 = cljs.core.first.call(null,seq6646__$2);
var seq6646__$3 = cljs.core.next.call(null,seq6646__$2);
var G__6650 = cljs.core.first.call(null,seq6646__$3);
var seq6646__$4 = cljs.core.next.call(null,seq6646__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6647,G__6648,G__6649,G__6650,seq6646__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__4776__auto___6659 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6660 = arguments.length;
var i__4731__auto___6661 = (0);
while(true){
if((i__4731__auto___6661 < len__4730__auto___6660)){
args__4736__auto__.push((arguments[i__4731__auto___6661]));

var G__6662 = (i__4731__auto___6661 + (1));
i__4731__auto___6661 = G__6662;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.locking.cljs$lang$applyTo = (function (seq6655){
var G__6656 = cljs.core.first.call(null,seq6655);
var seq6655__$1 = cljs.core.next.call(null,seq6655);
var G__6657 = cljs.core.first.call(null,seq6655__$1);
var seq6655__$2 = cljs.core.next.call(null,seq6655__$1);
var G__6658 = cljs.core.first.call(null,seq6655__$2);
var seq6655__$3 = cljs.core.next.call(null,seq6655__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6656,G__6657,G__6658,seq6655__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__4776__auto___6663 = cljs.core$macros.ns_special_form = (function cljs$core$macros$ns_special_form(_AMPERSAND_form,_AMPERSAND_env){
return null;
});
cljs.core$macros.ns_special_form.cljs$lang$macro = true;

var ret__4776__auto___6667 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6668 = arguments.length;
var i__4731__auto___6669 = (0);
while(true){
if((i__4731__auto___6669 < len__4730__auto___6668)){
args__4736__auto__.push((arguments[i__4731__auto___6669]));

var G__6670 = (i__4731__auto___6669 + (1));
i__4731__auto___6669 = G__6670;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args),null,(1),null)))));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.require.cljs$lang$applyTo = (function (seq6664){
var G__6665 = cljs.core.first.call(null,seq6664);
var seq6664__$1 = cljs.core.next.call(null,seq6664);
var G__6666 = cljs.core.first.call(null,seq6664__$1);
var seq6664__$2 = cljs.core.next.call(null,seq6664__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6665,G__6666,seq6664__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__4776__auto___6674 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6675 = arguments.length;
var i__4731__auto___6676 = (0);
while(true){
if((i__4731__auto___6676 < len__4730__auto___6675)){
args__4736__auto__.push((arguments[i__4731__auto___6676]));

var G__6677 = (i__4731__auto___6676 + (1));
i__4731__auto___6676 = G__6677;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args),null,(1),null)))));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq6671){
var G__6672 = cljs.core.first.call(null,seq6671);
var seq6671__$1 = cljs.core.next.call(null,seq6671);
var G__6673 = cljs.core.first.call(null,seq6671__$1);
var seq6671__$2 = cljs.core.next.call(null,seq6671__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6672,G__6673,seq6671__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__4776__auto___6681 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6682 = arguments.length;
var i__4731__auto___6683 = (0);
while(true){
if((i__4731__auto___6683 < len__4730__auto___6682)){
args__4736__auto__.push((arguments[i__4731__auto___6683]));

var G__6684 = (i__4731__auto___6683 + (1));
i__4731__auto___6683 = G__6684;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args),null,(1),null)))));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.use.cljs$lang$applyTo = (function (seq6678){
var G__6679 = cljs.core.first.call(null,seq6678);
var seq6678__$1 = cljs.core.next.call(null,seq6678);
var G__6680 = cljs.core.first.call(null,seq6678__$1);
var seq6678__$2 = cljs.core.next.call(null,seq6678__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6679,G__6680,seq6678__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__4776__auto___6688 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6689 = arguments.length;
var i__4731__auto___6690 = (0);
while(true){
if((i__4731__auto___6690 < len__4730__auto___6689)){
args__4736__auto__.push((arguments[i__4731__auto___6690]));

var G__6691 = (i__4731__auto___6690 + (1));
i__4731__auto___6690 = G__6691;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args),null,(1),null)))));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq6685){
var G__6686 = cljs.core.first.call(null,seq6685);
var seq6685__$1 = cljs.core.next.call(null,seq6685);
var G__6687 = cljs.core.first.call(null,seq6685__$1);
var seq6685__$2 = cljs.core.next.call(null,seq6685__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6686,G__6687,seq6685__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__4776__auto___6695 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6696 = arguments.length;
var i__4731__auto___6697 = (0);
while(true){
if((i__4731__auto___6697 < len__4730__auto___6696)){
args__4736__auto__.push((arguments[i__4731__auto___6697]));

var G__6698 = (i__4731__auto___6697 + (1));
i__4731__auto___6697 = G__6698;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists),null,(1),null)))));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.import$.cljs$lang$applyTo = (function (seq6692){
var G__6693 = cljs.core.first.call(null,seq6692);
var seq6692__$1 = cljs.core.next.call(null,seq6692);
var G__6694 = cljs.core.first.call(null,seq6692__$1);
var seq6692__$2 = cljs.core.next.call(null,seq6692__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6693,G__6694,seq6692__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__4776__auto___6702 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6703 = arguments.length;
var i__4731__auto___6704 = (0);
while(true){
if((i__4731__auto___6704 < len__4730__auto___6703)){
args__4736__auto__.push((arguments[i__4731__auto___6704]));

var G__6705 = (i__4731__auto___6704 + (1));
i__4731__auto___6704 = G__6705;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args),null,(1),null)))));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq6699){
var G__6700 = cljs.core.first.call(null,seq6699);
var seq6699__$1 = cljs.core.next.call(null,seq6699);
var G__6701 = cljs.core.first.call(null,seq6699__$1);
var seq6699__$2 = cljs.core.next.call(null,seq6699__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6700,G__6701,seq6699__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__4776__auto___6706 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","nodeGlobalRequire","goog/nodeGlobalRequire",163905703,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__4776__auto___6707 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form),null,(1),null)))));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__4776__auto___6708 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_.call(null,form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if((!((form__$1 === form_SINGLEQUOTE_)))){
var G__6709 = form_SINGLEQUOTE_;
var G__6710 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__6709;
form_SINGLEQUOTE_ = G__6710;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form_SINGLEQUOTE_,null,(1),null)))));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__4120__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__4120__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__4120__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__6714 = arguments.length;
switch (G__6714) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__6715,solo){
var vec__6716 = p__6715;
var seq__6717 = cljs.core.seq.call(null,vec__6716);
var first__6718 = cljs.core.first.call(null,seq__6717);
var seq__6717__$1 = cljs.core.next.call(null,seq__6717);
var arglist = first__6718;
var body = seq__6717__$1;
var method = vec__6716;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__6716,seq__6717,first__6718,seq__6717__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__6716,seq__6717,first__6718,seq__6717__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__6716,seq__6717,first__6718,seq__6717__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__6716,seq__6717,first__6718,seq__6717__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__6716,seq__6717,first__6718,seq__6717__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,param,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/nagarajan/.cljs/.aot_cache/1.10.516/4A4FCC9/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3088,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,49,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3088,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,54,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/nagarajan/.cljs/.aot_cache/1.10.516/4A4FCC9/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3089,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,51,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3089,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,55,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))))));
});})(sig,restarg,vec__6716,seq__6717,first__6718,seq__6717__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__6716,seq__6717,first__6718,seq__6717__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,restarg,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__6711__auto__","self__6711__auto__",1982321792,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__6711__auto__","self__6711__auto__",1982321792,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,get_delegate.call(null),null,(1),null)),params,(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,restarg,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__6712__auto__","self__6712__auto__",768333746,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__6712__auto__","self__6712__auto__",768333746,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,get_delegate.call(null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}
});})(sig,restarg,vec__6716,seq__6717,first__6718,seq__6717__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,get_delegate_prop.call(null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,sig),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null)),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(cljs.core.count.call(null,sig) - (1)),null,(1),null))))),null,(1),null)))))):null),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-inline-comment","cljs.core$macros/js-inline-comment",-1640024593,null),null,(1),null)),(new cljs.core.List(null," @this {Function} ",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,sym,cljs.core.dissoc,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,apply_to.call(null),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__4776__auto___6722 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"len__6720__auto__","len__6720__auto__",-544738835,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"i__6721__auto__","i__6721__auto__",-849522276,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__6721__auto__","i__6721__auto__",-849522276,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"len__6720__auto__","len__6720__auto__",-544738835,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,dest,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__6721__auto__","i__6721__auto__",-849522276,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__6721__auto__","i__6721__auto__",-849522276,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.elide_implicit_macro_args = (function cljs$core$macros$elide_implicit_macro_args(arglists){
return cljs.core.map.call(null,(function (arglist){
if(cljs.core.vector_QMARK_.call(null,arglist)){
return cljs.core.subvec.call(null,arglist,(2));
} else {
return cljs.core.drop.call(null,(2),arglist);
}
}),arglists);
});
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__6725,emit_var_QMARK_){
var vec__6726 = p__6725;
var vec__6729 = cljs.core.nth.call(null,vec__6726,(0),null);
var seq__6730 = cljs.core.seq.call(null,vec__6729);
var first__6731 = cljs.core.first.call(null,seq__6730);
var seq__6730__$1 = cljs.core.next.call(null,seq__6730);
var arglist = first__6731;
var body = seq__6730__$1;
var method = vec__6729;
var fdecl = vec__6726;
var dest_args = ((function (vec__6726,vec__6729,seq__6730,first__6731,seq__6730__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__6726,vec__6729,seq__6730,first__6731,seq__6730__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))));
});})(vec__6726,vec__6729,seq__6730,first__6731,seq__6730__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__6726,vec__6729,seq__6730,first__6731,seq__6730__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta);
var mfa = (function (){var G__6732 = c_1;
if(cljs.core.truth_(macro_QMARK_)){
return (G__6732 - (2));
} else {
return G__6732;
}
})();
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),mfa,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),(function (){var G__6733 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null);
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args.call(null,G__6733);
} else {
return G__6733;
}
})(),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var G__6734 = (new cljs.core.List(null,arglist,null,(1),null));
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args.call(null,G__6734);
} else {
return G__6734;
}
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
var name__$1 = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"args__6723__auto__","args__6723__auto__",-1539627613,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__6723__auto__","args__6723__auto__",-1539627613,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__6724__auto__","argseq__6724__auto__",727070380,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,c_1,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__6723__auto__","args__6723__auto__",-1539627613,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/nagarajan/.cljs/.aot_cache/1.10.516/4A4FCC9/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3151,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,55,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3151,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,75,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".slice",".slice",1874048374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__6723__auto__","args__6723__auto__",-1539627613,null),null,(1),null)),(new cljs.core.List(null,c_1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null),null,(1),null)),dest_args.call(null,c_1),(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__6724__auto__","argseq__6724__auto__",727070380,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.variadic_fn_STAR_.call(null,name__$1,method),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null))))):null),null,(1),null)))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('')),null,(1),null)),dest_args.call(null,c)))),null,(1),null)))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(name__$1,p__6744){
var vec__6745 = p__6744;
var seq__6746 = cljs.core.seq.call(null,vec__6745);
var first__6747 = cljs.core.first.call(null,seq__6746);
var seq__6746__$1 = cljs.core.next.call(null,seq__6746);
var sig = first__6747;
var body = seq__6746__$1;
var method = vec__6745;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name__$1,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,name__$1,cljs.core.update,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),cljs.core.count.call(null,sig)], null)),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,method,null,(1),null))))),null,(1),null)))));
}
});
var rname = cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__6735_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),p1__6735_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta);
var mfa = (function (){var G__6748 = maxfa;
if(cljs.core.truth_(macro_QMARK_)){
return (G__6748 - (2));
} else {
return G__6748;
}
})();
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),variadic,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),mfa,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),(function (){var G__6749 = sigs;
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args.call(null,G__6749);
} else {
return G__6749;
}
})(),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var G__6750 = arglists;
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args.call(null,G__6750);
} else {
return G__6750;
}
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
var param_counts = cljs.core.map.call(null,cljs.core.count,arglists);
var name__$1 = cljs.core.with_meta.call(null,name,meta__$1);
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts),param_counts)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,macro_QMARK_,mfa,meta__$1,args_sym,param_counts,name__$1){
return (function (p1__6736_SHARP_){
return fixed_arity.call(null,rname,p1__6736_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,macro_QMARK_,mfa,meta__$1,args_sym,param_counts,name__$1))
,sigs),(new cljs.core.List(null,((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__6737__auto__","args-arr__6737__auto__",1324102051,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__6737__auto__","args-arr__6737__auto__",1324102051,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__6738__auto__","argseq__6738__auto__",-1447485339,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/nagarajan/.cljs/.aot_cache/1.10.516/4A4FCC9/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3218,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,59,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3218,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,79,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".slice",".slice",1874048374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__6737__auto__","args-arr__6737__auto__",1324102051,null),null,(1),null)),(new cljs.core.List(null,maxfa,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null),null,(1),null)),dest_args.call(null,maxfa),(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__6738__auto__","argseq__6738__auto__",-1447485339,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null),null,(1),null)),(new cljs.core.List(null,"Invalid arity: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null),null,(1),null)),(new cljs.core.List(null,"Invalid arity: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.map.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,macro_QMARK_,mfa,meta__$1,args_sym,param_counts,name__$1){
return (function (p1__6739_SHARP_){
return fn_method.call(null,name__$1,p1__6739_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,macro_QMARK_,mfa,meta__$1,args_sym,param_counts,name__$1))
,fdecl),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,maxfa,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null))))):null),null,(1),null)))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core$macros.sigs.call(null,fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4)){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta.call(null,name,m__$4),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4),null,(1),null)),(2),null)),(3),null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__6751__i = 0, G__6751__a = new Array(arguments.length -  3);
while (G__6751__i < G__6751__a.length) {G__6751__a[G__6751__i] = arguments[G__6751__i + 3]; ++G__6751__i;}
  fdecl = new cljs.core.IndexedSeq(G__6751__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__6752){
var _AMPERSAND_form = cljs.core.first(arglist__6752);
arglist__6752 = cljs.core.next(arglist__6752);
var _AMPERSAND_env = cljs.core.first(arglist__6752);
arglist__6752 = cljs.core.next(arglist__6752);
var name = cljs.core.first(arglist__6752);
var fdecl = cljs.core.rest(arglist__6752);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6758 = arguments.length;
var i__4731__auto___6759 = (0);
while(true){
if((i__4731__auto___6759 < len__4730__auto___6758)){
args__4736__auto__.push((arguments[i__4731__auto___6759]));

var G__6760 = (i__4731__auto___6759 + (1));
i__4731__auto___6759 = G__6760;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (new cljs.core.List(null,cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true),null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__6761 = cljs.core.cons.call(null,f,p);
var G__6762 = cljs.core.next.call(null,args__$1);
p = G__6761;
args__$1 = G__6762;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__6763 = cljs.core.cons.call(null,f,p);
var G__6764 = cljs.core.next.call(null,args__$1);
p = G__6763;
args__$1 = G__6764;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__6765 = cljs.core.next.call(null,fd);
fd = G__6765;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__6766 = cljs.core.next.call(null,fd);
fd = G__6766;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__6767 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__6768 = cljs.core.next.call(null,ds);
acc = G__6767;
ds = G__6768;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__6769 = cljs.core.next.call(null,p);
var G__6770 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__6769;
d = G__6770;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__6753__auto__","ret__6753__auto__",-1376346846,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__6753__auto__","ret__6753__auto__",-1376346846,null),null,(1),null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq6754){
var G__6755 = cljs.core.first.call(null,seq6754);
var seq6754__$1 = cljs.core.next.call(null,seq6754);
var G__6756 = cljs.core.first.call(null,seq6754__$1);
var seq6754__$2 = cljs.core.next.call(null,seq6754__$1);
var G__6757 = cljs.core.first.call(null,seq6754__$2);
var seq6754__$3 = cljs.core.next.call(null,seq6754__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6755,G__6756,G__6757,seq6754__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__4776__auto___6775 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if(((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym))))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__6771 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e6774){var e = e6774;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__6771,(0),null);
var meta = cljs.core.nth.call(null,vec__6771,(1),null);
var resolved = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,meta,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.resolve.cljs$lang$macro = true;

