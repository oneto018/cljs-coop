// Compiled by ClojureScript 1.10.516 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__3553 = s;
var map__3553__$1 = (((((!((map__3553 == null))))?(((((map__3553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3553):map__3553);
var name = cljs.core.get.call(null,map__3553__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__3553__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__3556 = info;
var map__3557 = G__3556;
var map__3557__$1 = (((((!((map__3557 == null))))?(((((map__3557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3557):map__3557);
var shadow = cljs.core.get.call(null,map__3557__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__3556__$1 = G__3556;
while(true){
var d__$2 = d__$1;
var map__3561 = G__3556__$1;
var map__3561__$1 = (((((!((map__3561 == null))))?(((((map__3561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3561):map__3561);
var shadow__$1 = cljs.core.get.call(null,map__3561__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__3563 = (d__$2 + (1));
var G__3564 = shadow__$1;
d__$1 = G__3563;
G__3556__$1 = G__3564;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__3565){
var map__3566 = p__3565;
var map__3566__$1 = (((((!((map__3566 == null))))?(((((map__3566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3566):map__3566);
var name_var = map__3566__$1;
var name = cljs.core.get.call(null,map__3566__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__3566__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__3568 = info;
var map__3568__$1 = (((((!((map__3568 == null))))?(((((map__3568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3568):map__3568);
var ns = cljs.core.get.call(null,map__3568__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__3568__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__3571 = arguments.length;
switch (G__3571) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(17),(1),(11478),(11478),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__3573 = cp;
switch (G__3573) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__3575_3579 = cljs.core.seq.call(null,s);
var chunk__3576_3580 = null;
var count__3577_3581 = (0);
var i__3578_3582 = (0);
while(true){
if((i__3578_3582 < count__3577_3581)){
var c_3583 = cljs.core._nth.call(null,chunk__3576_3580,i__3578_3582);
sb.append(cljs.compiler.escape_char.call(null,c_3583));


var G__3584 = seq__3575_3579;
var G__3585 = chunk__3576_3580;
var G__3586 = count__3577_3581;
var G__3587 = (i__3578_3582 + (1));
seq__3575_3579 = G__3584;
chunk__3576_3580 = G__3585;
count__3577_3581 = G__3586;
i__3578_3582 = G__3587;
continue;
} else {
var temp__5720__auto___3588 = cljs.core.seq.call(null,seq__3575_3579);
if(temp__5720__auto___3588){
var seq__3575_3589__$1 = temp__5720__auto___3588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3575_3589__$1)){
var c__4550__auto___3590 = cljs.core.chunk_first.call(null,seq__3575_3589__$1);
var G__3591 = cljs.core.chunk_rest.call(null,seq__3575_3589__$1);
var G__3592 = c__4550__auto___3590;
var G__3593 = cljs.core.count.call(null,c__4550__auto___3590);
var G__3594 = (0);
seq__3575_3579 = G__3591;
chunk__3576_3580 = G__3592;
count__3577_3581 = G__3593;
i__3578_3582 = G__3594;
continue;
} else {
var c_3595 = cljs.core.first.call(null,seq__3575_3589__$1);
sb.append(cljs.compiler.escape_char.call(null,c_3595));


var G__3596 = cljs.core.next.call(null,seq__3575_3589__$1);
var G__3597 = null;
var G__3598 = (0);
var G__3599 = (0);
seq__3575_3579 = G__3596;
chunk__3576_3580 = G__3597;
count__3577_3581 = G__3598;
i__3578_3582 = G__3599;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__3600_3605 = ast;
var map__3600_3606__$1 = (((((!((map__3600_3605 == null))))?(((((map__3600_3605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3600_3605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3600_3605):map__3600_3605);
var env_3607 = cljs.core.get.call(null,map__3600_3606__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_3607))){
var map__3602_3608 = env_3607;
var map__3602_3609__$1 = (((((!((map__3602_3608 == null))))?(((((map__3602_3608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3602_3608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3602_3608):map__3602_3608);
var line_3610 = cljs.core.get.call(null,map__3602_3609__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_3611 = cljs.core.get.call(null,map__3602_3609__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__3602_3608,map__3602_3609__$1,line_3610,column_3611,map__3600_3605,map__3600_3606__$1,env_3607){
return (function (m){
var minfo = (function (){var G__3604 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__3604,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__3604;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_3610 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__3602_3608,map__3602_3609__$1,line_3610,column_3611,map__3600_3605,map__3600_3606__$1,env_3607){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_3611)?(column_3611 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__3602_3608,map__3602_3609__$1,line_3610,column_3611,map__3600_3605,map__3600_3606__$1,env_3607){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__3602_3608,map__3602_3609__$1,line_3610,column_3611,map__3600_3605,map__3600_3606__$1,env_3607))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__3602_3608,map__3602_3609__$1,line_3610,column_3611,map__3600_3605,map__3600_3606__$1,env_3607))
,cljs.core.sorted_map.call(null)));
});})(map__3602_3608,map__3602_3609__$1,line_3610,column_3611,map__3600_3605,map__3600_3606__$1,env_3607))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__3620 = arguments.length;
switch (G__3620) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___3627 = arguments.length;
var i__4731__auto___3628 = (0);
while(true){
if((i__4731__auto___3628 < len__4730__auto___3627)){
args_arr__4751__auto__.push((arguments[i__4731__auto___3628]));

var G__3629 = (i__4731__auto___3628 + (1));
i__4731__auto___3628 = G__3629;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
a.call(null);
} else {
var s_3630 = (function (){var G__3621 = a;
if((!(typeof a === 'string'))){
return G__3621.toString();
} else {
return G__3621;
}
})();
var temp__5724__auto___3631 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___3631 == null)){
} else {
var sm_data_3632 = temp__5724__auto___3631;
cljs.core.swap_BANG_.call(null,sm_data_3632,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_3632,temp__5724__auto___3631,s_3630){
return (function (p1__3612_SHARP_){
return (p1__3612_SHARP_ + s_3630.length);
});})(sm_data_3632,temp__5724__auto___3631,s_3630))
);
}

cljs.core.print.call(null,s_3630);

}
}
}
}

return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__3622 = cljs.core.seq.call(null,xs);
var chunk__3623 = null;
var count__3624 = (0);
var i__3625 = (0);
while(true){
if((i__3625 < count__3624)){
var x = cljs.core._nth.call(null,chunk__3623,i__3625);
cljs.compiler.emits.call(null,x);


var G__3633 = seq__3622;
var G__3634 = chunk__3623;
var G__3635 = count__3624;
var G__3636 = (i__3625 + (1));
seq__3622 = G__3633;
chunk__3623 = G__3634;
count__3624 = G__3635;
i__3625 = G__3636;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__3622);
if(temp__5720__auto__){
var seq__3622__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3622__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__3622__$1);
var G__3637 = cljs.core.chunk_rest.call(null,seq__3622__$1);
var G__3638 = c__4550__auto__;
var G__3639 = cljs.core.count.call(null,c__4550__auto__);
var G__3640 = (0);
seq__3622 = G__3637;
chunk__3623 = G__3638;
count__3624 = G__3639;
i__3625 = G__3640;
continue;
} else {
var x = cljs.core.first.call(null,seq__3622__$1);
cljs.compiler.emits.call(null,x);


var G__3641 = cljs.core.next.call(null,seq__3622__$1);
var G__3642 = null;
var G__3643 = (0);
var G__3644 = (0);
seq__3622 = G__3641;
chunk__3623 = G__3642;
count__3624 = G__3643;
i__3625 = G__3644;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq3614){
var G__3615 = cljs.core.first.call(null,seq3614);
var seq3614__$1 = cljs.core.next.call(null,seq3614);
var G__3616 = cljs.core.first.call(null,seq3614__$1);
var seq3614__$2 = cljs.core.next.call(null,seq3614__$1);
var G__3617 = cljs.core.first.call(null,seq3614__$2);
var seq3614__$3 = cljs.core.next.call(null,seq3614__$2);
var G__3618 = cljs.core.first.call(null,seq3614__$3);
var seq3614__$4 = cljs.core.next.call(null,seq3614__$3);
var G__3619 = cljs.core.first.call(null,seq3614__$4);
var seq3614__$5 = cljs.core.next.call(null,seq3614__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3615,G__3616,G__3617,G__3618,G__3619,seq3614__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__3645){
var map__3646 = p__3645;
var map__3646__$1 = (((((!((map__3646 == null))))?(((((map__3646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3646):map__3646);
var m = map__3646__$1;
var gen_line = cljs.core.get.call(null,map__3646__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__3655 = arguments.length;
switch (G__3655) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___3661 = arguments.length;
var i__4731__auto___3662 = (0);
while(true){
if((i__4731__auto___3662 < len__4730__auto___3661)){
args_arr__4751__auto__.push((arguments[i__4731__auto___3662]));

var G__3663 = (i__4731__auto___3662 + (1));
i__4731__auto___3662 = G__3663;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__3656_3664 = cljs.core.seq.call(null,xs);
var chunk__3657_3665 = null;
var count__3658_3666 = (0);
var i__3659_3667 = (0);
while(true){
if((i__3659_3667 < count__3658_3666)){
var x_3668 = cljs.core._nth.call(null,chunk__3657_3665,i__3659_3667);
cljs.compiler.emits.call(null,x_3668);


var G__3669 = seq__3656_3664;
var G__3670 = chunk__3657_3665;
var G__3671 = count__3658_3666;
var G__3672 = (i__3659_3667 + (1));
seq__3656_3664 = G__3669;
chunk__3657_3665 = G__3670;
count__3658_3666 = G__3671;
i__3659_3667 = G__3672;
continue;
} else {
var temp__5720__auto___3673 = cljs.core.seq.call(null,seq__3656_3664);
if(temp__5720__auto___3673){
var seq__3656_3674__$1 = temp__5720__auto___3673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3656_3674__$1)){
var c__4550__auto___3675 = cljs.core.chunk_first.call(null,seq__3656_3674__$1);
var G__3676 = cljs.core.chunk_rest.call(null,seq__3656_3674__$1);
var G__3677 = c__4550__auto___3675;
var G__3678 = cljs.core.count.call(null,c__4550__auto___3675);
var G__3679 = (0);
seq__3656_3664 = G__3676;
chunk__3657_3665 = G__3677;
count__3658_3666 = G__3678;
i__3659_3667 = G__3679;
continue;
} else {
var x_3680 = cljs.core.first.call(null,seq__3656_3674__$1);
cljs.compiler.emits.call(null,x_3680);


var G__3681 = cljs.core.next.call(null,seq__3656_3674__$1);
var G__3682 = null;
var G__3683 = (0);
var G__3684 = (0);
seq__3656_3664 = G__3681;
chunk__3657_3665 = G__3682;
count__3658_3666 = G__3683;
i__3659_3667 = G__3684;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
});

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq3649){
var G__3650 = cljs.core.first.call(null,seq3649);
var seq3649__$1 = cljs.core.next.call(null,seq3649);
var G__3651 = cljs.core.first.call(null,seq3649__$1);
var seq3649__$2 = cljs.core.next.call(null,seq3649__$1);
var G__3652 = cljs.core.first.call(null,seq3649__$2);
var seq3649__$3 = cljs.core.next.call(null,seq3649__$2);
var G__3653 = cljs.core.first.call(null,seq3649__$3);
var seq3649__$4 = cljs.core.next.call(null,seq3649__$3);
var G__3654 = cljs.core.first.call(null,seq3649__$4);
var seq3649__$5 = cljs.core.next.call(null,seq3649__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3650,G__3651,G__3652,G__3653,G__3654,seq3649__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__3685_3689 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__3686_3690 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__3687_3691 = true;
var _STAR_print_fn_STAR__temp_val__3688_3692 = ((function (_STAR_print_newline_STAR__orig_val__3685_3689,_STAR_print_fn_STAR__orig_val__3686_3690,_STAR_print_newline_STAR__temp_val__3687_3691,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__3685_3689,_STAR_print_fn_STAR__orig_val__3686_3690,_STAR_print_newline_STAR__temp_val__3687_3691,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__3687_3691;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__3688_3692;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__3686_3690;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__3685_3689;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__3693 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__3693,(0),null);
var name = cljs.core.nth.call(null,vec__3693,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__3693,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__3693,ns,name))
);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
});})(m))
,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
});})(m))
);
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__3696 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__3696,(0),null);
var flags = cljs.core.nth.call(null,vec__3696,(1),null);
var pattern = cljs.core.nth.call(null,vec__3696,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5718__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5718__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,((function (items){
return (function (p1__3699_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__3699_SHARP_);
});
;})(items))
});})(items))
);
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__3701){
var map__3702 = p__3701;
var map__3702__$1 = (((((!((map__3702 == null))))?(((((map__3702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3702):map__3702);
var ast = map__3702__$1;
var info = cljs.core.get.call(null,map__3702__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__3702__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__3702__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__3704 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__3704__$1 = (((((!((map__3704 == null))))?(((((map__3704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3704):map__3704);
var cenv = map__3704__$1;
var options = cljs.core.get.call(null,map__3704__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4131__auto__ = js_module_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__3706 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__3706,cljs.analyzer.es5_allowed);
} else {
return G__3706;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__3707 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__3707,reserved);
} else {
return G__3707;
}
})();
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__3708_3709 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__3708_3710__$1 = (((G__3708_3709 instanceof cljs.core.Keyword))?G__3708_3709.fqn:null);
switch (G__3708_3710__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4120__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__3712){
var map__3713 = p__3712;
var map__3713__$1 = (((((!((map__3713 == null))))?(((((map__3713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3713):map__3713);
var arg = map__3713__$1;
var env = cljs.core.get.call(null,map__3713__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__3713__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__3713__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__3713__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__3715 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__3715__$1 = (((((!((map__3715 == null))))?(((((map__3715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3715):map__3715);
var name = cljs.core.get.call(null,map__3715__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__3717){
var map__3718 = p__3717;
var map__3718__$1 = (((((!((map__3718 == null))))?(((((map__3718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3718):map__3718);
var expr = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__3720_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__3720_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__3721){
var map__3722 = p__3721;
var map__3722__$1 = (((((!((map__3722 == null))))?(((((map__3722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3722):map__3722);
var env = cljs.core.get.call(null,map__3722__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__3722__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__3722__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__3724){
var map__3725 = p__3724;
var map__3725__$1 = (((((!((map__3725 == null))))?(((((map__3725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3725):map__3725);
var items = cljs.core.get.call(null,map__3725__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3725__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__3727_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__3727_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__3728){
var map__3729 = p__3728;
var map__3729__$1 = (((((!((map__3729 == null))))?(((((map__3729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3729):map__3729);
var items = cljs.core.get.call(null,map__3729__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3729__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___3753 = cljs.core.seq.call(null,items);
if(temp__5720__auto___3753){
var items_3754__$1 = temp__5720__auto___3753;
var vec__3731_3755 = items_3754__$1;
var seq__3732_3756 = cljs.core.seq.call(null,vec__3731_3755);
var first__3733_3757 = cljs.core.first.call(null,seq__3732_3756);
var seq__3732_3758__$1 = cljs.core.next.call(null,seq__3732_3756);
var vec__3734_3759 = first__3733_3757;
var k_3760 = cljs.core.nth.call(null,vec__3734_3759,(0),null);
var v_3761 = cljs.core.nth.call(null,vec__3734_3759,(1),null);
var r_3762 = seq__3732_3758__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_3760),"\": ",emit_js_object_val.call(null,v_3761));

var seq__3737_3763 = cljs.core.seq.call(null,r_3762);
var chunk__3738_3764 = null;
var count__3739_3765 = (0);
var i__3740_3766 = (0);
while(true){
if((i__3740_3766 < count__3739_3765)){
var vec__3747_3767 = cljs.core._nth.call(null,chunk__3738_3764,i__3740_3766);
var k_3768__$1 = cljs.core.nth.call(null,vec__3747_3767,(0),null);
var v_3769__$1 = cljs.core.nth.call(null,vec__3747_3767,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_3768__$1),"\": ",emit_js_object_val.call(null,v_3769__$1));


var G__3770 = seq__3737_3763;
var G__3771 = chunk__3738_3764;
var G__3772 = count__3739_3765;
var G__3773 = (i__3740_3766 + (1));
seq__3737_3763 = G__3770;
chunk__3738_3764 = G__3771;
count__3739_3765 = G__3772;
i__3740_3766 = G__3773;
continue;
} else {
var temp__5720__auto___3774__$1 = cljs.core.seq.call(null,seq__3737_3763);
if(temp__5720__auto___3774__$1){
var seq__3737_3775__$1 = temp__5720__auto___3774__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3737_3775__$1)){
var c__4550__auto___3776 = cljs.core.chunk_first.call(null,seq__3737_3775__$1);
var G__3777 = cljs.core.chunk_rest.call(null,seq__3737_3775__$1);
var G__3778 = c__4550__auto___3776;
var G__3779 = cljs.core.count.call(null,c__4550__auto___3776);
var G__3780 = (0);
seq__3737_3763 = G__3777;
chunk__3738_3764 = G__3778;
count__3739_3765 = G__3779;
i__3740_3766 = G__3780;
continue;
} else {
var vec__3750_3781 = cljs.core.first.call(null,seq__3737_3775__$1);
var k_3782__$1 = cljs.core.nth.call(null,vec__3750_3781,(0),null);
var v_3783__$1 = cljs.core.nth.call(null,vec__3750_3781,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_3782__$1),"\": ",emit_js_object_val.call(null,v_3783__$1));


var G__3784 = cljs.core.next.call(null,seq__3737_3775__$1);
var G__3785 = null;
var G__3786 = (0);
var G__3787 = (0);
seq__3737_3763 = G__3784;
chunk__3738_3764 = G__3785;
count__3739_3765 = G__3786;
i__3740_3766 = G__3787;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__3788){
var map__3789 = p__3788;
var map__3789__$1 = (((((!((map__3789 == null))))?(((((map__3789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3789):map__3789);
var keys = cljs.core.get.call(null,map__3789__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__3789__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__3789__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__3791){
var map__3792 = p__3791;
var map__3792__$1 = (((((!((map__3792 == null))))?(((((map__3792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3792):map__3792);
var items = cljs.core.get.call(null,map__3792__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3792__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__3794){
var map__3795 = p__3794;
var map__3795__$1 = (((((!((map__3795 == null))))?(((((map__3795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3795):map__3795);
var expr = cljs.core.get.call(null,map__3795__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__3797){
var map__3798 = p__3797;
var map__3798__$1 = (((((!((map__3798 == null))))?(((((map__3798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3798):map__3798);
var form = cljs.core.get.call(null,map__3798__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__3798__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__3800 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__3800__$1 = (((((!((map__3800 == null))))?(((((map__3800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3800):map__3800);
var op = cljs.core.get.call(null,map__3800__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__3800__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__3800__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4120__auto__){
var and__4120__auto____$1 = form;
if(cljs.core.truth_(and__4120__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__3802 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__3802__$1 = (((((!((map__3802 == null))))?(((((map__3802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3802):map__3802);
var op = cljs.core.get.call(null,map__3802__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__3802__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__3802__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__3804){
var map__3805 = p__3804;
var map__3805__$1 = (((((!((map__3805 == null))))?(((((map__3805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3805):map__3805);
var test = cljs.core.get.call(null,map__3805__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__3805__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__3805__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__3805__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__3805__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4131__auto__ = unchecked;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__3807){
var map__3808 = p__3807;
var map__3808__$1 = (((((!((map__3808 == null))))?(((((map__3808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3808):map__3808);
var v = cljs.core.get.call(null,map__3808__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__3808__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__3808__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__3808__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__3810_3846 = cljs.core.seq.call(null,nodes);
var chunk__3811_3847 = null;
var count__3812_3848 = (0);
var i__3813_3849 = (0);
while(true){
if((i__3813_3849 < count__3812_3848)){
var map__3830_3850 = cljs.core._nth.call(null,chunk__3811_3847,i__3813_3849);
var map__3830_3851__$1 = (((((!((map__3830_3850 == null))))?(((((map__3830_3850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3830_3850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3830_3850):map__3830_3850);
var ts_3852 = cljs.core.get.call(null,map__3830_3851__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__3831_3853 = cljs.core.get.call(null,map__3830_3851__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__3831_3854__$1 = (((((!((map__3831_3853 == null))))?(((((map__3831_3853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3831_3853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3831_3853):map__3831_3853);
var then_3855 = cljs.core.get.call(null,map__3831_3854__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__3834_3856 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_3852));
var chunk__3835_3857 = null;
var count__3836_3858 = (0);
var i__3837_3859 = (0);
while(true){
if((i__3837_3859 < count__3836_3858)){
var test_3860 = cljs.core._nth.call(null,chunk__3835_3857,i__3837_3859);
cljs.compiler.emitln.call(null,"case ",test_3860,":");


var G__3861 = seq__3834_3856;
var G__3862 = chunk__3835_3857;
var G__3863 = count__3836_3858;
var G__3864 = (i__3837_3859 + (1));
seq__3834_3856 = G__3861;
chunk__3835_3857 = G__3862;
count__3836_3858 = G__3863;
i__3837_3859 = G__3864;
continue;
} else {
var temp__5720__auto___3865 = cljs.core.seq.call(null,seq__3834_3856);
if(temp__5720__auto___3865){
var seq__3834_3866__$1 = temp__5720__auto___3865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3834_3866__$1)){
var c__4550__auto___3867 = cljs.core.chunk_first.call(null,seq__3834_3866__$1);
var G__3868 = cljs.core.chunk_rest.call(null,seq__3834_3866__$1);
var G__3869 = c__4550__auto___3867;
var G__3870 = cljs.core.count.call(null,c__4550__auto___3867);
var G__3871 = (0);
seq__3834_3856 = G__3868;
chunk__3835_3857 = G__3869;
count__3836_3858 = G__3870;
i__3837_3859 = G__3871;
continue;
} else {
var test_3872 = cljs.core.first.call(null,seq__3834_3866__$1);
cljs.compiler.emitln.call(null,"case ",test_3872,":");


var G__3873 = cljs.core.next.call(null,seq__3834_3866__$1);
var G__3874 = null;
var G__3875 = (0);
var G__3876 = (0);
seq__3834_3856 = G__3873;
chunk__3835_3857 = G__3874;
count__3836_3858 = G__3875;
i__3837_3859 = G__3876;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_3855);
} else {
cljs.compiler.emitln.call(null,then_3855);
}

cljs.compiler.emitln.call(null,"break;");


var G__3877 = seq__3810_3846;
var G__3878 = chunk__3811_3847;
var G__3879 = count__3812_3848;
var G__3880 = (i__3813_3849 + (1));
seq__3810_3846 = G__3877;
chunk__3811_3847 = G__3878;
count__3812_3848 = G__3879;
i__3813_3849 = G__3880;
continue;
} else {
var temp__5720__auto___3881 = cljs.core.seq.call(null,seq__3810_3846);
if(temp__5720__auto___3881){
var seq__3810_3882__$1 = temp__5720__auto___3881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3810_3882__$1)){
var c__4550__auto___3883 = cljs.core.chunk_first.call(null,seq__3810_3882__$1);
var G__3884 = cljs.core.chunk_rest.call(null,seq__3810_3882__$1);
var G__3885 = c__4550__auto___3883;
var G__3886 = cljs.core.count.call(null,c__4550__auto___3883);
var G__3887 = (0);
seq__3810_3846 = G__3884;
chunk__3811_3847 = G__3885;
count__3812_3848 = G__3886;
i__3813_3849 = G__3887;
continue;
} else {
var map__3838_3888 = cljs.core.first.call(null,seq__3810_3882__$1);
var map__3838_3889__$1 = (((((!((map__3838_3888 == null))))?(((((map__3838_3888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3838_3888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3838_3888):map__3838_3888);
var ts_3890 = cljs.core.get.call(null,map__3838_3889__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__3839_3891 = cljs.core.get.call(null,map__3838_3889__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__3839_3892__$1 = (((((!((map__3839_3891 == null))))?(((((map__3839_3891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3839_3891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3839_3891):map__3839_3891);
var then_3893 = cljs.core.get.call(null,map__3839_3892__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__3842_3894 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_3890));
var chunk__3843_3895 = null;
var count__3844_3896 = (0);
var i__3845_3897 = (0);
while(true){
if((i__3845_3897 < count__3844_3896)){
var test_3898 = cljs.core._nth.call(null,chunk__3843_3895,i__3845_3897);
cljs.compiler.emitln.call(null,"case ",test_3898,":");


var G__3899 = seq__3842_3894;
var G__3900 = chunk__3843_3895;
var G__3901 = count__3844_3896;
var G__3902 = (i__3845_3897 + (1));
seq__3842_3894 = G__3899;
chunk__3843_3895 = G__3900;
count__3844_3896 = G__3901;
i__3845_3897 = G__3902;
continue;
} else {
var temp__5720__auto___3903__$1 = cljs.core.seq.call(null,seq__3842_3894);
if(temp__5720__auto___3903__$1){
var seq__3842_3904__$1 = temp__5720__auto___3903__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3842_3904__$1)){
var c__4550__auto___3905 = cljs.core.chunk_first.call(null,seq__3842_3904__$1);
var G__3906 = cljs.core.chunk_rest.call(null,seq__3842_3904__$1);
var G__3907 = c__4550__auto___3905;
var G__3908 = cljs.core.count.call(null,c__4550__auto___3905);
var G__3909 = (0);
seq__3842_3894 = G__3906;
chunk__3843_3895 = G__3907;
count__3844_3896 = G__3908;
i__3845_3897 = G__3909;
continue;
} else {
var test_3910 = cljs.core.first.call(null,seq__3842_3904__$1);
cljs.compiler.emitln.call(null,"case ",test_3910,":");


var G__3911 = cljs.core.next.call(null,seq__3842_3904__$1);
var G__3912 = null;
var G__3913 = (0);
var G__3914 = (0);
seq__3842_3894 = G__3911;
chunk__3843_3895 = G__3912;
count__3844_3896 = G__3913;
i__3845_3897 = G__3914;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_3893);
} else {
cljs.compiler.emitln.call(null,then_3893);
}

cljs.compiler.emitln.call(null,"break;");


var G__3915 = cljs.core.next.call(null,seq__3810_3882__$1);
var G__3916 = null;
var G__3917 = (0);
var G__3918 = (0);
seq__3810_3846 = G__3915;
chunk__3811_3847 = G__3916;
count__3812_3848 = G__3917;
i__3813_3849 = G__3918;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__3919){
var map__3920 = p__3919;
var map__3920__$1 = (((((!((map__3920 == null))))?(((((map__3920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3920):map__3920);
var throw$ = cljs.core.get.call(null,map__3920__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__3920__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__3923 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__3923,(0),null);
var rstr = cljs.core.nth.call(null,vec__3923,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__3923,fstr,rstr,ret_t,axstr){
return (function (p1__3922_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__3922_SHARP_);
});})(idx,vec__3923,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__3926 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__3926,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__3926;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__3927_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__3927_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__3928 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__3929 = cljs.core.seq.call(null,vec__3928);
var first__3930 = cljs.core.first.call(null,seq__3929);
var seq__3929__$1 = cljs.core.next.call(null,seq__3929);
var p = first__3930;
var first__3930__$1 = cljs.core.first.call(null,seq__3929__$1);
var seq__3929__$2 = cljs.core.next.call(null,seq__3929__$1);
var ts = first__3930__$1;
var first__3930__$2 = cljs.core.first.call(null,seq__3929__$2);
var seq__3929__$3 = cljs.core.next.call(null,seq__3929__$2);
var n = first__3930__$2;
var xs = seq__3929__$3;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__3931 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__3932 = cljs.core.seq.call(null,vec__3931);
var first__3933 = cljs.core.first.call(null,seq__3932);
var seq__3932__$1 = cljs.core.next.call(null,seq__3932);
var p = first__3933;
var first__3933__$1 = cljs.core.first.call(null,seq__3932__$1);
var seq__3932__$2 = cljs.core.next.call(null,seq__3932__$1);
var ts = first__3933__$1;
var xs = seq__3932__$2;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__3936 = arguments.length;
switch (G__3936) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__3944 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__3934_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__3934_SHARP_);
} else {
return p1__3934_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__3945 = cljs.core.seq.call(null,vec__3944);
var first__3946 = cljs.core.first.call(null,seq__3945);
var seq__3945__$1 = cljs.core.next.call(null,seq__3945);
var x = first__3946;
var ys = seq__3945__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__3947 = cljs.core.seq.call(null,ys);
var chunk__3948 = null;
var count__3949 = (0);
var i__3950 = (0);
while(true){
if((i__3950 < count__3949)){
var next_line = cljs.core._nth.call(null,chunk__3948,i__3950);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__3956 = seq__3947;
var G__3957 = chunk__3948;
var G__3958 = count__3949;
var G__3959 = (i__3950 + (1));
seq__3947 = G__3956;
chunk__3948 = G__3957;
count__3949 = G__3958;
i__3950 = G__3959;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__3947);
if(temp__5720__auto__){
var seq__3947__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3947__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__3947__$1);
var G__3960 = cljs.core.chunk_rest.call(null,seq__3947__$1);
var G__3961 = c__4550__auto__;
var G__3962 = cljs.core.count.call(null,c__4550__auto__);
var G__3963 = (0);
seq__3947 = G__3960;
chunk__3948 = G__3961;
count__3949 = G__3962;
i__3950 = G__3963;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__3947__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__3964 = cljs.core.next.call(null,seq__3947__$1);
var G__3965 = null;
var G__3966 = (0);
var G__3967 = (0);
seq__3947 = G__3964;
chunk__3948 = G__3965;
count__3949 = G__3966;
i__3950 = G__3967;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__3951_3968 = cljs.core.seq.call(null,docs__$2);
var chunk__3952_3969 = null;
var count__3953_3970 = (0);
var i__3954_3971 = (0);
while(true){
if((i__3954_3971 < count__3953_3970)){
var e_3972 = cljs.core._nth.call(null,chunk__3952_3969,i__3954_3971);
if(cljs.core.truth_(e_3972)){
print_comment_lines.call(null,e_3972);
} else {
}


var G__3973 = seq__3951_3968;
var G__3974 = chunk__3952_3969;
var G__3975 = count__3953_3970;
var G__3976 = (i__3954_3971 + (1));
seq__3951_3968 = G__3973;
chunk__3952_3969 = G__3974;
count__3953_3970 = G__3975;
i__3954_3971 = G__3976;
continue;
} else {
var temp__5720__auto___3977 = cljs.core.seq.call(null,seq__3951_3968);
if(temp__5720__auto___3977){
var seq__3951_3978__$1 = temp__5720__auto___3977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3951_3978__$1)){
var c__4550__auto___3979 = cljs.core.chunk_first.call(null,seq__3951_3978__$1);
var G__3980 = cljs.core.chunk_rest.call(null,seq__3951_3978__$1);
var G__3981 = c__4550__auto___3979;
var G__3982 = cljs.core.count.call(null,c__4550__auto___3979);
var G__3983 = (0);
seq__3951_3968 = G__3980;
chunk__3952_3969 = G__3981;
count__3953_3970 = G__3982;
i__3954_3971 = G__3983;
continue;
} else {
var e_3984 = cljs.core.first.call(null,seq__3951_3978__$1);
if(cljs.core.truth_(e_3984)){
print_comment_lines.call(null,e_3984);
} else {
}


var G__3985 = cljs.core.next.call(null,seq__3951_3978__$1);
var G__3986 = null;
var G__3987 = (0);
var G__3988 = (0);
seq__3951_3968 = G__3985;
chunk__3952_3969 = G__3986;
count__3953_3970 = G__3987;
i__3954_3971 = G__3988;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4120__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__3990_SHARP_){
return goog.string.startsWith(p1__3990_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = opts;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4120__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__3991){
var map__3992 = p__3991;
var map__3992__$1 = (((((!((map__3992 == null))))?(((((map__3992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3992):map__3992);
var doc = cljs.core.get.call(null,map__3992__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__3992__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__3992__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__3992__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__3992__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__3992__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__3992__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__3992__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__3992__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4131__auto__ = init;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5718__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5718__auto__)){
var define = temp__5718__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4120__auto__){
return test;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__3994){
var map__3995 = p__3994;
var map__3995__$1 = (((((!((map__3995 == null))))?(((((map__3995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3995):map__3995);
var name = cljs.core.get.call(null,map__3995__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__3995__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__3995__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__3997_4021 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__3998_4022 = null;
var count__3999_4023 = (0);
var i__4000_4024 = (0);
while(true){
if((i__4000_4024 < count__3999_4023)){
var vec__4007_4025 = cljs.core._nth.call(null,chunk__3998_4022,i__4000_4024);
var i_4026 = cljs.core.nth.call(null,vec__4007_4025,(0),null);
var param_4027 = cljs.core.nth.call(null,vec__4007_4025,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_4027);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__4028 = seq__3997_4021;
var G__4029 = chunk__3998_4022;
var G__4030 = count__3999_4023;
var G__4031 = (i__4000_4024 + (1));
seq__3997_4021 = G__4028;
chunk__3998_4022 = G__4029;
count__3999_4023 = G__4030;
i__4000_4024 = G__4031;
continue;
} else {
var temp__5720__auto___4032 = cljs.core.seq.call(null,seq__3997_4021);
if(temp__5720__auto___4032){
var seq__3997_4033__$1 = temp__5720__auto___4032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3997_4033__$1)){
var c__4550__auto___4034 = cljs.core.chunk_first.call(null,seq__3997_4033__$1);
var G__4035 = cljs.core.chunk_rest.call(null,seq__3997_4033__$1);
var G__4036 = c__4550__auto___4034;
var G__4037 = cljs.core.count.call(null,c__4550__auto___4034);
var G__4038 = (0);
seq__3997_4021 = G__4035;
chunk__3998_4022 = G__4036;
count__3999_4023 = G__4037;
i__4000_4024 = G__4038;
continue;
} else {
var vec__4010_4039 = cljs.core.first.call(null,seq__3997_4033__$1);
var i_4040 = cljs.core.nth.call(null,vec__4010_4039,(0),null);
var param_4041 = cljs.core.nth.call(null,vec__4010_4039,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_4041);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__4042 = cljs.core.next.call(null,seq__3997_4033__$1);
var G__4043 = null;
var G__4044 = (0);
var G__4045 = (0);
seq__3997_4021 = G__4042;
chunk__3998_4022 = G__4043;
count__3999_4023 = G__4044;
i__4000_4024 = G__4045;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__4013_4046 = cljs.core.seq.call(null,params);
var chunk__4014_4047 = null;
var count__4015_4048 = (0);
var i__4016_4049 = (0);
while(true){
if((i__4016_4049 < count__4015_4048)){
var param_4050 = cljs.core._nth.call(null,chunk__4014_4047,i__4016_4049);
cljs.compiler.emit.call(null,param_4050);

if(cljs.core._EQ_.call(null,param_4050,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__4051 = seq__4013_4046;
var G__4052 = chunk__4014_4047;
var G__4053 = count__4015_4048;
var G__4054 = (i__4016_4049 + (1));
seq__4013_4046 = G__4051;
chunk__4014_4047 = G__4052;
count__4015_4048 = G__4053;
i__4016_4049 = G__4054;
continue;
} else {
var temp__5720__auto___4055 = cljs.core.seq.call(null,seq__4013_4046);
if(temp__5720__auto___4055){
var seq__4013_4056__$1 = temp__5720__auto___4055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4013_4056__$1)){
var c__4550__auto___4057 = cljs.core.chunk_first.call(null,seq__4013_4056__$1);
var G__4058 = cljs.core.chunk_rest.call(null,seq__4013_4056__$1);
var G__4059 = c__4550__auto___4057;
var G__4060 = cljs.core.count.call(null,c__4550__auto___4057);
var G__4061 = (0);
seq__4013_4046 = G__4058;
chunk__4014_4047 = G__4059;
count__4015_4048 = G__4060;
i__4016_4049 = G__4061;
continue;
} else {
var param_4062 = cljs.core.first.call(null,seq__4013_4056__$1);
cljs.compiler.emit.call(null,param_4062);

if(cljs.core._EQ_.call(null,param_4062,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__4063 = cljs.core.next.call(null,seq__4013_4056__$1);
var G__4064 = null;
var G__4065 = (0);
var G__4066 = (0);
seq__4013_4046 = G__4063;
chunk__4014_4047 = G__4064;
count__4015_4048 = G__4065;
i__4016_4049 = G__4066;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__4017_4067 = cljs.core.seq.call(null,params);
var chunk__4018_4068 = null;
var count__4019_4069 = (0);
var i__4020_4070 = (0);
while(true){
if((i__4020_4070 < count__4019_4069)){
var param_4071 = cljs.core._nth.call(null,chunk__4018_4068,i__4020_4070);
cljs.compiler.emit.call(null,param_4071);

if(cljs.core._EQ_.call(null,param_4071,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__4072 = seq__4017_4067;
var G__4073 = chunk__4018_4068;
var G__4074 = count__4019_4069;
var G__4075 = (i__4020_4070 + (1));
seq__4017_4067 = G__4072;
chunk__4018_4068 = G__4073;
count__4019_4069 = G__4074;
i__4020_4070 = G__4075;
continue;
} else {
var temp__5720__auto___4076 = cljs.core.seq.call(null,seq__4017_4067);
if(temp__5720__auto___4076){
var seq__4017_4077__$1 = temp__5720__auto___4076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4017_4077__$1)){
var c__4550__auto___4078 = cljs.core.chunk_first.call(null,seq__4017_4077__$1);
var G__4079 = cljs.core.chunk_rest.call(null,seq__4017_4077__$1);
var G__4080 = c__4550__auto___4078;
var G__4081 = cljs.core.count.call(null,c__4550__auto___4078);
var G__4082 = (0);
seq__4017_4067 = G__4079;
chunk__4018_4068 = G__4080;
count__4019_4069 = G__4081;
i__4020_4070 = G__4082;
continue;
} else {
var param_4083 = cljs.core.first.call(null,seq__4017_4077__$1);
cljs.compiler.emit.call(null,param_4083);

if(cljs.core._EQ_.call(null,param_4083,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__4084 = cljs.core.next.call(null,seq__4017_4077__$1);
var G__4085 = null;
var G__4086 = (0);
var G__4087 = (0);
seq__4017_4067 = G__4084;
chunk__4018_4068 = G__4085;
count__4019_4069 = G__4086;
i__4020_4070 = G__4087;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__4088 = cljs.core.seq.call(null,params);
var chunk__4089 = null;
var count__4090 = (0);
var i__4091 = (0);
while(true){
if((i__4091 < count__4090)){
var param = cljs.core._nth.call(null,chunk__4089,i__4091);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__4092 = seq__4088;
var G__4093 = chunk__4089;
var G__4094 = count__4090;
var G__4095 = (i__4091 + (1));
seq__4088 = G__4092;
chunk__4089 = G__4093;
count__4090 = G__4094;
i__4091 = G__4095;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__4088);
if(temp__5720__auto__){
var seq__4088__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4088__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4088__$1);
var G__4096 = cljs.core.chunk_rest.call(null,seq__4088__$1);
var G__4097 = c__4550__auto__;
var G__4098 = cljs.core.count.call(null,c__4550__auto__);
var G__4099 = (0);
seq__4088 = G__4096;
chunk__4089 = G__4097;
count__4090 = G__4098;
i__4091 = G__4099;
continue;
} else {
var param = cljs.core.first.call(null,seq__4088__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__4100 = cljs.core.next.call(null,seq__4088__$1);
var G__4101 = null;
var G__4102 = (0);
var G__4103 = (0);
seq__4088 = G__4100;
chunk__4089 = G__4101;
count__4090 = G__4102;
i__4091 = G__4103;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__4104){
var map__4105 = p__4104;
var map__4105__$1 = (((((!((map__4105 == null))))?(((((map__4105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4105):map__4105);
var expr = cljs.core.get.call(null,map__4105__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__4105__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__4105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__4105__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__4105__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__4105__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__4107){
var map__4108 = p__4107;
var map__4108__$1 = (((((!((map__4108 == null))))?(((((map__4108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4108):map__4108);
var f = map__4108__$1;
var expr = cljs.core.get.call(null,map__4108__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__4108__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__4108__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__4108__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__4108__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__4108__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__4108__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__4108__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_4118__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_4119 = cljs.compiler.munge.call(null,name_4118__$1);
var delegate_name_4120 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_4119),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_4120," = function (");

var seq__4110_4121 = cljs.core.seq.call(null,params);
var chunk__4111_4122 = null;
var count__4112_4123 = (0);
var i__4113_4124 = (0);
while(true){
if((i__4113_4124 < count__4112_4123)){
var param_4125 = cljs.core._nth.call(null,chunk__4111_4122,i__4113_4124);
cljs.compiler.emit.call(null,param_4125);

if(cljs.core._EQ_.call(null,param_4125,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__4126 = seq__4110_4121;
var G__4127 = chunk__4111_4122;
var G__4128 = count__4112_4123;
var G__4129 = (i__4113_4124 + (1));
seq__4110_4121 = G__4126;
chunk__4111_4122 = G__4127;
count__4112_4123 = G__4128;
i__4113_4124 = G__4129;
continue;
} else {
var temp__5720__auto___4130 = cljs.core.seq.call(null,seq__4110_4121);
if(temp__5720__auto___4130){
var seq__4110_4131__$1 = temp__5720__auto___4130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4110_4131__$1)){
var c__4550__auto___4132 = cljs.core.chunk_first.call(null,seq__4110_4131__$1);
var G__4133 = cljs.core.chunk_rest.call(null,seq__4110_4131__$1);
var G__4134 = c__4550__auto___4132;
var G__4135 = cljs.core.count.call(null,c__4550__auto___4132);
var G__4136 = (0);
seq__4110_4121 = G__4133;
chunk__4111_4122 = G__4134;
count__4112_4123 = G__4135;
i__4113_4124 = G__4136;
continue;
} else {
var param_4137 = cljs.core.first.call(null,seq__4110_4131__$1);
cljs.compiler.emit.call(null,param_4137);

if(cljs.core._EQ_.call(null,param_4137,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__4138 = cljs.core.next.call(null,seq__4110_4131__$1);
var G__4139 = null;
var G__4140 = (0);
var G__4141 = (0);
seq__4110_4121 = G__4138;
chunk__4111_4122 = G__4139;
count__4112_4123 = G__4140;
i__4113_4124 = G__4141;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_4119," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_4142 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_4142,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_4120,".call(this,");

var seq__4114_4143 = cljs.core.seq.call(null,params);
var chunk__4115_4144 = null;
var count__4116_4145 = (0);
var i__4117_4146 = (0);
while(true){
if((i__4117_4146 < count__4116_4145)){
var param_4147 = cljs.core._nth.call(null,chunk__4115_4144,i__4117_4146);
cljs.compiler.emit.call(null,param_4147);

if(cljs.core._EQ_.call(null,param_4147,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__4148 = seq__4114_4143;
var G__4149 = chunk__4115_4144;
var G__4150 = count__4116_4145;
var G__4151 = (i__4117_4146 + (1));
seq__4114_4143 = G__4148;
chunk__4115_4144 = G__4149;
count__4116_4145 = G__4150;
i__4117_4146 = G__4151;
continue;
} else {
var temp__5720__auto___4152 = cljs.core.seq.call(null,seq__4114_4143);
if(temp__5720__auto___4152){
var seq__4114_4153__$1 = temp__5720__auto___4152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4114_4153__$1)){
var c__4550__auto___4154 = cljs.core.chunk_first.call(null,seq__4114_4153__$1);
var G__4155 = cljs.core.chunk_rest.call(null,seq__4114_4153__$1);
var G__4156 = c__4550__auto___4154;
var G__4157 = cljs.core.count.call(null,c__4550__auto___4154);
var G__4158 = (0);
seq__4114_4143 = G__4155;
chunk__4115_4144 = G__4156;
count__4116_4145 = G__4157;
i__4117_4146 = G__4158;
continue;
} else {
var param_4159 = cljs.core.first.call(null,seq__4114_4153__$1);
cljs.compiler.emit.call(null,param_4159);

if(cljs.core._EQ_.call(null,param_4159,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__4160 = cljs.core.next.call(null,seq__4114_4153__$1);
var G__4161 = null;
var G__4162 = (0);
var G__4163 = (0);
seq__4114_4143 = G__4160;
chunk__4115_4144 = G__4161;
count__4116_4145 = G__4162;
i__4117_4146 = G__4163;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_4119,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_4119,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_4118__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_4119,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_4120,";");

cljs.compiler.emitln.call(null,"return ",mname_4119,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__4167){
var map__4168 = p__4167;
var map__4168__$1 = (((((!((map__4168 == null))))?(((((map__4168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4168):map__4168);
var variadic = cljs.core.get.call(null,map__4168__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__4168__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__4168__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__4168__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__4168__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__4168__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__4168__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__4168,map__4168__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__4164_SHARP_){
var and__4120__auto__ = p1__4164_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__4164_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__4168,map__4168__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_4221__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_4222 = cljs.compiler.munge.call(null,name_4221__$1);
var maxparams_4223 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_4224 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_4221__$1,mname_4222,maxparams_4223,loop_locals,map__4168,map__4168__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_4222),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_4221__$1,mname_4222,maxparams_4223,loop_locals,map__4168,map__4168__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_4225 = cljs.core.sort_by.call(null,((function (name_4221__$1,mname_4222,maxparams_4223,mmap_4224,loop_locals,map__4168,map__4168__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__4165_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__4165_SHARP_)));
});})(name_4221__$1,mname_4222,maxparams_4223,mmap_4224,loop_locals,map__4168,map__4168__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_4224));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_4222," = null;");

var seq__4170_4226 = cljs.core.seq.call(null,ms_4225);
var chunk__4171_4227 = null;
var count__4172_4228 = (0);
var i__4173_4229 = (0);
while(true){
if((i__4173_4229 < count__4172_4228)){
var vec__4180_4230 = cljs.core._nth.call(null,chunk__4171_4227,i__4173_4229);
var n_4231 = cljs.core.nth.call(null,vec__4180_4230,(0),null);
var meth_4232 = cljs.core.nth.call(null,vec__4180_4230,(1),null);
cljs.compiler.emits.call(null,"var ",n_4231," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_4232))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_4232);
} else {
cljs.compiler.emit_fn_method.call(null,meth_4232);
}

cljs.compiler.emitln.call(null,";");


var G__4233 = seq__4170_4226;
var G__4234 = chunk__4171_4227;
var G__4235 = count__4172_4228;
var G__4236 = (i__4173_4229 + (1));
seq__4170_4226 = G__4233;
chunk__4171_4227 = G__4234;
count__4172_4228 = G__4235;
i__4173_4229 = G__4236;
continue;
} else {
var temp__5720__auto___4237 = cljs.core.seq.call(null,seq__4170_4226);
if(temp__5720__auto___4237){
var seq__4170_4238__$1 = temp__5720__auto___4237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4170_4238__$1)){
var c__4550__auto___4239 = cljs.core.chunk_first.call(null,seq__4170_4238__$1);
var G__4240 = cljs.core.chunk_rest.call(null,seq__4170_4238__$1);
var G__4241 = c__4550__auto___4239;
var G__4242 = cljs.core.count.call(null,c__4550__auto___4239);
var G__4243 = (0);
seq__4170_4226 = G__4240;
chunk__4171_4227 = G__4241;
count__4172_4228 = G__4242;
i__4173_4229 = G__4243;
continue;
} else {
var vec__4183_4244 = cljs.core.first.call(null,seq__4170_4238__$1);
var n_4245 = cljs.core.nth.call(null,vec__4183_4244,(0),null);
var meth_4246 = cljs.core.nth.call(null,vec__4183_4244,(1),null);
cljs.compiler.emits.call(null,"var ",n_4245," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_4246))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_4246);
} else {
cljs.compiler.emit_fn_method.call(null,meth_4246);
}

cljs.compiler.emitln.call(null,";");


var G__4247 = cljs.core.next.call(null,seq__4170_4238__$1);
var G__4248 = null;
var G__4249 = (0);
var G__4250 = (0);
seq__4170_4226 = G__4247;
chunk__4171_4227 = G__4248;
count__4172_4228 = G__4249;
i__4173_4229 = G__4250;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_4222," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_4223),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_4223)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_4223));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__4186_4251 = cljs.core.seq.call(null,ms_4225);
var chunk__4187_4252 = null;
var count__4188_4253 = (0);
var i__4189_4254 = (0);
while(true){
if((i__4189_4254 < count__4188_4253)){
var vec__4196_4255 = cljs.core._nth.call(null,chunk__4187_4252,i__4189_4254);
var n_4256 = cljs.core.nth.call(null,vec__4196_4255,(0),null);
var meth_4257 = cljs.core.nth.call(null,vec__4196_4255,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_4257))){
cljs.compiler.emitln.call(null,"default:");

var restarg_4258 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_4258," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_4259 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_4258," = new cljs.core.IndexedSeq(",a_4259,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_4256,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_4223)),(((cljs.core.count.call(null,maxparams_4223) > (1)))?", ":null),restarg_4258,");");
} else {
var pcnt_4260 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_4257));
cljs.compiler.emitln.call(null,"case ",pcnt_4260,":");

cljs.compiler.emitln.call(null,"return ",n_4256,".call(this",(((pcnt_4260 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_4260,maxparams_4223)),null,(1),null)),(2),null))),");");
}


var G__4261 = seq__4186_4251;
var G__4262 = chunk__4187_4252;
var G__4263 = count__4188_4253;
var G__4264 = (i__4189_4254 + (1));
seq__4186_4251 = G__4261;
chunk__4187_4252 = G__4262;
count__4188_4253 = G__4263;
i__4189_4254 = G__4264;
continue;
} else {
var temp__5720__auto___4265 = cljs.core.seq.call(null,seq__4186_4251);
if(temp__5720__auto___4265){
var seq__4186_4266__$1 = temp__5720__auto___4265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4186_4266__$1)){
var c__4550__auto___4267 = cljs.core.chunk_first.call(null,seq__4186_4266__$1);
var G__4268 = cljs.core.chunk_rest.call(null,seq__4186_4266__$1);
var G__4269 = c__4550__auto___4267;
var G__4270 = cljs.core.count.call(null,c__4550__auto___4267);
var G__4271 = (0);
seq__4186_4251 = G__4268;
chunk__4187_4252 = G__4269;
count__4188_4253 = G__4270;
i__4189_4254 = G__4271;
continue;
} else {
var vec__4199_4272 = cljs.core.first.call(null,seq__4186_4266__$1);
var n_4273 = cljs.core.nth.call(null,vec__4199_4272,(0),null);
var meth_4274 = cljs.core.nth.call(null,vec__4199_4272,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_4274))){
cljs.compiler.emitln.call(null,"default:");

var restarg_4275 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_4275," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_4276 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_4275," = new cljs.core.IndexedSeq(",a_4276,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_4273,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_4223)),(((cljs.core.count.call(null,maxparams_4223) > (1)))?", ":null),restarg_4275,");");
} else {
var pcnt_4277 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_4274));
cljs.compiler.emitln.call(null,"case ",pcnt_4277,":");

cljs.compiler.emitln.call(null,"return ",n_4273,".call(this",(((pcnt_4277 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_4277,maxparams_4223)),null,(1),null)),(2),null))),");");
}


var G__4278 = cljs.core.next.call(null,seq__4186_4266__$1);
var G__4279 = null;
var G__4280 = (0);
var G__4281 = (0);
seq__4186_4251 = G__4278;
chunk__4187_4252 = G__4279;
count__4188_4253 = G__4280;
i__4189_4254 = G__4281;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_4282 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_4225)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_4282,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_4222,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_4222,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_4221__$1,mname_4222,maxparams_4223,mmap_4224,ms_4225,loop_locals,map__4168,map__4168__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__4166_SHARP_){
var vec__4202 = p1__4166_SHARP_;
var n = cljs.core.nth.call(null,vec__4202,(0),null);
var m = cljs.core.nth.call(null,vec__4202,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_4221__$1,mname_4222,maxparams_4223,mmap_4224,ms_4225,loop_locals,map__4168,map__4168__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_4225),".cljs$lang$applyTo;");
} else {
}

var seq__4205_4283 = cljs.core.seq.call(null,ms_4225);
var chunk__4206_4284 = null;
var count__4207_4285 = (0);
var i__4208_4286 = (0);
while(true){
if((i__4208_4286 < count__4207_4285)){
var vec__4215_4287 = cljs.core._nth.call(null,chunk__4206_4284,i__4208_4286);
var n_4288 = cljs.core.nth.call(null,vec__4215_4287,(0),null);
var meth_4289 = cljs.core.nth.call(null,vec__4215_4287,(1),null);
var c_4290 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_4289));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_4289))){
cljs.compiler.emitln.call(null,mname_4222,".cljs$core$IFn$_invoke$arity$variadic = ",n_4288,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_4222,".cljs$core$IFn$_invoke$arity$",c_4290," = ",n_4288,";");
}


var G__4291 = seq__4205_4283;
var G__4292 = chunk__4206_4284;
var G__4293 = count__4207_4285;
var G__4294 = (i__4208_4286 + (1));
seq__4205_4283 = G__4291;
chunk__4206_4284 = G__4292;
count__4207_4285 = G__4293;
i__4208_4286 = G__4294;
continue;
} else {
var temp__5720__auto___4295 = cljs.core.seq.call(null,seq__4205_4283);
if(temp__5720__auto___4295){
var seq__4205_4296__$1 = temp__5720__auto___4295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4205_4296__$1)){
var c__4550__auto___4297 = cljs.core.chunk_first.call(null,seq__4205_4296__$1);
var G__4298 = cljs.core.chunk_rest.call(null,seq__4205_4296__$1);
var G__4299 = c__4550__auto___4297;
var G__4300 = cljs.core.count.call(null,c__4550__auto___4297);
var G__4301 = (0);
seq__4205_4283 = G__4298;
chunk__4206_4284 = G__4299;
count__4207_4285 = G__4300;
i__4208_4286 = G__4301;
continue;
} else {
var vec__4218_4302 = cljs.core.first.call(null,seq__4205_4296__$1);
var n_4303 = cljs.core.nth.call(null,vec__4218_4302,(0),null);
var meth_4304 = cljs.core.nth.call(null,vec__4218_4302,(1),null);
var c_4305 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_4304));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_4304))){
cljs.compiler.emitln.call(null,mname_4222,".cljs$core$IFn$_invoke$arity$variadic = ",n_4303,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_4222,".cljs$core$IFn$_invoke$arity$",c_4305," = ",n_4303,";");
}


var G__4306 = cljs.core.next.call(null,seq__4205_4296__$1);
var G__4307 = null;
var G__4308 = (0);
var G__4309 = (0);
seq__4205_4283 = G__4306;
chunk__4206_4284 = G__4307;
count__4207_4285 = G__4308;
i__4208_4286 = G__4309;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_4222,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__4310){
var map__4311 = p__4310;
var map__4311__$1 = (((((!((map__4311 == null))))?(((((map__4311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4311):map__4311);
var statements = cljs.core.get.call(null,map__4311__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__4311__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__4311__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__4313_4317 = cljs.core.seq.call(null,statements);
var chunk__4314_4318 = null;
var count__4315_4319 = (0);
var i__4316_4320 = (0);
while(true){
if((i__4316_4320 < count__4315_4319)){
var s_4321 = cljs.core._nth.call(null,chunk__4314_4318,i__4316_4320);
cljs.compiler.emitln.call(null,s_4321);


var G__4322 = seq__4313_4317;
var G__4323 = chunk__4314_4318;
var G__4324 = count__4315_4319;
var G__4325 = (i__4316_4320 + (1));
seq__4313_4317 = G__4322;
chunk__4314_4318 = G__4323;
count__4315_4319 = G__4324;
i__4316_4320 = G__4325;
continue;
} else {
var temp__5720__auto___4326 = cljs.core.seq.call(null,seq__4313_4317);
if(temp__5720__auto___4326){
var seq__4313_4327__$1 = temp__5720__auto___4326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4313_4327__$1)){
var c__4550__auto___4328 = cljs.core.chunk_first.call(null,seq__4313_4327__$1);
var G__4329 = cljs.core.chunk_rest.call(null,seq__4313_4327__$1);
var G__4330 = c__4550__auto___4328;
var G__4331 = cljs.core.count.call(null,c__4550__auto___4328);
var G__4332 = (0);
seq__4313_4317 = G__4329;
chunk__4314_4318 = G__4330;
count__4315_4319 = G__4331;
i__4316_4320 = G__4332;
continue;
} else {
var s_4333 = cljs.core.first.call(null,seq__4313_4327__$1);
cljs.compiler.emitln.call(null,s_4333);


var G__4334 = cljs.core.next.call(null,seq__4313_4327__$1);
var G__4335 = null;
var G__4336 = (0);
var G__4337 = (0);
seq__4313_4317 = G__4334;
chunk__4314_4318 = G__4335;
count__4315_4319 = G__4336;
i__4316_4320 = G__4337;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__4338){
var map__4339 = p__4338;
var map__4339__$1 = (((((!((map__4339 == null))))?(((((map__4339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4339):map__4339);
var try$ = cljs.core.get.call(null,map__4339__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__4339__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__4339__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__4339__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__4339__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__4341,is_loop){
var map__4342 = p__4341;
var map__4342__$1 = (((((!((map__4342 == null))))?(((((map__4342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4342):map__4342);
var expr = cljs.core.get.call(null,map__4342__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__4342__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__4342__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__4344_4358 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__4345_4359 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__4344_4358,context,map__4342,map__4342__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__4344_4358,context,map__4342,map__4342__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__4345_4359;

try{var seq__4346_4360 = cljs.core.seq.call(null,bindings);
var chunk__4347_4361 = null;
var count__4348_4362 = (0);
var i__4349_4363 = (0);
while(true){
if((i__4349_4363 < count__4348_4362)){
var map__4354_4364 = cljs.core._nth.call(null,chunk__4347_4361,i__4349_4363);
var map__4354_4365__$1 = (((((!((map__4354_4364 == null))))?(((((map__4354_4364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4354_4364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4354_4364):map__4354_4364);
var binding_4366 = map__4354_4365__$1;
var init_4367 = cljs.core.get.call(null,map__4354_4365__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_4366);

cljs.compiler.emitln.call(null," = ",init_4367,";");


var G__4368 = seq__4346_4360;
var G__4369 = chunk__4347_4361;
var G__4370 = count__4348_4362;
var G__4371 = (i__4349_4363 + (1));
seq__4346_4360 = G__4368;
chunk__4347_4361 = G__4369;
count__4348_4362 = G__4370;
i__4349_4363 = G__4371;
continue;
} else {
var temp__5720__auto___4372 = cljs.core.seq.call(null,seq__4346_4360);
if(temp__5720__auto___4372){
var seq__4346_4373__$1 = temp__5720__auto___4372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4346_4373__$1)){
var c__4550__auto___4374 = cljs.core.chunk_first.call(null,seq__4346_4373__$1);
var G__4375 = cljs.core.chunk_rest.call(null,seq__4346_4373__$1);
var G__4376 = c__4550__auto___4374;
var G__4377 = cljs.core.count.call(null,c__4550__auto___4374);
var G__4378 = (0);
seq__4346_4360 = G__4375;
chunk__4347_4361 = G__4376;
count__4348_4362 = G__4377;
i__4349_4363 = G__4378;
continue;
} else {
var map__4356_4379 = cljs.core.first.call(null,seq__4346_4373__$1);
var map__4356_4380__$1 = (((((!((map__4356_4379 == null))))?(((((map__4356_4379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4356_4379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4356_4379):map__4356_4379);
var binding_4381 = map__4356_4380__$1;
var init_4382 = cljs.core.get.call(null,map__4356_4380__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_4381);

cljs.compiler.emitln.call(null," = ",init_4382,";");


var G__4383 = cljs.core.next.call(null,seq__4346_4373__$1);
var G__4384 = null;
var G__4385 = (0);
var G__4386 = (0);
seq__4346_4360 = G__4383;
chunk__4347_4361 = G__4384;
count__4348_4362 = G__4385;
i__4349_4363 = G__4386;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__4344_4358;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__4387){
var map__4388 = p__4387;
var map__4388__$1 = (((((!((map__4388 == null))))?(((((map__4388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4388):map__4388);
var frame = cljs.core.get.call(null,map__4388__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__4388__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__4388__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___4390 = cljs.core.count.call(null,exprs);
var i_4391 = (0);
while(true){
if((i_4391 < n__4607__auto___4390)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_4391)," = ",exprs.call(null,i_4391),";");

var G__4392 = (i_4391 + (1));
i_4391 = G__4392;
continue;
} else {
}
break;
}

var n__4607__auto___4393 = cljs.core.count.call(null,exprs);
var i_4394 = (0);
while(true){
if((i_4394 < n__4607__auto___4393)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_4394))," = ",temps.call(null,i_4394),";");

var G__4395 = (i_4394 + (1));
i_4394 = G__4395;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__4396){
var map__4397 = p__4396;
var map__4397__$1 = (((((!((map__4397 == null))))?(((((map__4397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4397):map__4397);
var expr = cljs.core.get.call(null,map__4397__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__4397__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__4397__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__4399_4411 = cljs.core.seq.call(null,bindings);
var chunk__4400_4412 = null;
var count__4401_4413 = (0);
var i__4402_4414 = (0);
while(true){
if((i__4402_4414 < count__4401_4413)){
var map__4407_4415 = cljs.core._nth.call(null,chunk__4400_4412,i__4402_4414);
var map__4407_4416__$1 = (((((!((map__4407_4415 == null))))?(((((map__4407_4415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4407_4415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4407_4415):map__4407_4415);
var binding_4417 = map__4407_4416__$1;
var init_4418 = cljs.core.get.call(null,map__4407_4416__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_4417)," = ",init_4418,";");


var G__4419 = seq__4399_4411;
var G__4420 = chunk__4400_4412;
var G__4421 = count__4401_4413;
var G__4422 = (i__4402_4414 + (1));
seq__4399_4411 = G__4419;
chunk__4400_4412 = G__4420;
count__4401_4413 = G__4421;
i__4402_4414 = G__4422;
continue;
} else {
var temp__5720__auto___4423 = cljs.core.seq.call(null,seq__4399_4411);
if(temp__5720__auto___4423){
var seq__4399_4424__$1 = temp__5720__auto___4423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4399_4424__$1)){
var c__4550__auto___4425 = cljs.core.chunk_first.call(null,seq__4399_4424__$1);
var G__4426 = cljs.core.chunk_rest.call(null,seq__4399_4424__$1);
var G__4427 = c__4550__auto___4425;
var G__4428 = cljs.core.count.call(null,c__4550__auto___4425);
var G__4429 = (0);
seq__4399_4411 = G__4426;
chunk__4400_4412 = G__4427;
count__4401_4413 = G__4428;
i__4402_4414 = G__4429;
continue;
} else {
var map__4409_4430 = cljs.core.first.call(null,seq__4399_4424__$1);
var map__4409_4431__$1 = (((((!((map__4409_4430 == null))))?(((((map__4409_4430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4409_4430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4409_4430):map__4409_4430);
var binding_4432 = map__4409_4431__$1;
var init_4433 = cljs.core.get.call(null,map__4409_4431__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_4432)," = ",init_4433,";");


var G__4434 = cljs.core.next.call(null,seq__4399_4424__$1);
var G__4435 = null;
var G__4436 = (0);
var G__4437 = (0);
seq__4399_4411 = G__4434;
chunk__4400_4412 = G__4435;
count__4401_4413 = G__4436;
i__4402_4414 = G__4437;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__4440){
var map__4441 = p__4440;
var map__4441__$1 = (((((!((map__4441 == null))))?(((((map__4441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4441):map__4441);
var expr = map__4441__$1;
var f = cljs.core.get.call(null,map__4441__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__4441__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4441__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4120__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4120__auto__ = protocol;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = tag;
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = (function (){var and__4120__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto____$2){
var and__4120__auto____$3 = protocol;
if(cljs.core.truth_(and__4120__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto____$2 = (function (){var or__4131__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4120__auto____$2)){
var or__4131__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var and__4120__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__4120__auto____$3){
var and__4120__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__4120__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
}
} else {
return and__4120__auto____$2;
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4131__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4131__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__4443 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (arity > mfa);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4441,map__4441__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4441,map__4441__$1,expr,f,args,env){
return (function (p1__4438_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__4438_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4441,map__4441__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4441,map__4441__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4441,map__4441__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4441,map__4441__$1,expr,f,args,env){
return (function (p1__4439_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__4439_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4441,map__4441__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4441,map__4441__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__4443,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__4443,(1),null);
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_4446 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_4446,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_4447 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_4447,args)),(((mfa_4447 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_4447,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = js_QMARK_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4120__auto__;
}
})())){
var fprop_4448 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_4448," ? ",f__$1,fprop_4448,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_4448," ? ",f__$1,fprop_4448,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__4449){
var map__4450 = p__4449;
var map__4450__$1 = (((((!((map__4450 == null))))?(((((map__4450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4450):map__4450);
var ctor = cljs.core.get.call(null,map__4450__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__4450__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4450__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__4452){
var map__4453 = p__4452;
var map__4453__$1 = (((((!((map__4453 == null))))?(((((map__4453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4453):map__4453);
var target = cljs.core.get.call(null,map__4453__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__4453__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__4453__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4131__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__4455 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__4455__$1 = (((((!((map__4455 == null))))?(((((map__4455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4455):map__4455);
var options = cljs.core.get.call(null,map__4455__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__4455__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__4456 = options;
var map__4456__$1 = (((((!((map__4456 == null))))?(((((map__4456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4456):map__4456);
var target = cljs.core.get.call(null,map__4456__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__4456__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__4457 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__4462 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__4462__$1 = (((((!((map__4462 == null))))?(((((map__4462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4462):map__4462);
var node_libs = cljs.core.get.call(null,map__4462__$1,true);
var libs_to_load = cljs.core.get.call(null,map__4462__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__4457,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__4457,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__4464_4484 = cljs.core.seq.call(null,libs_to_load);
var chunk__4465_4485 = null;
var count__4466_4486 = (0);
var i__4467_4487 = (0);
while(true){
if((i__4467_4487 < count__4466_4486)){
var lib_4488 = cljs.core._nth.call(null,chunk__4465_4485,i__4467_4487);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_4488)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4488),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4488),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4488),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4488),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_4488,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4488),"');");
}

}
}
}


var G__4489 = seq__4464_4484;
var G__4490 = chunk__4465_4485;
var G__4491 = count__4466_4486;
var G__4492 = (i__4467_4487 + (1));
seq__4464_4484 = G__4489;
chunk__4465_4485 = G__4490;
count__4466_4486 = G__4491;
i__4467_4487 = G__4492;
continue;
} else {
var temp__5720__auto___4493 = cljs.core.seq.call(null,seq__4464_4484);
if(temp__5720__auto___4493){
var seq__4464_4494__$1 = temp__5720__auto___4493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4464_4494__$1)){
var c__4550__auto___4495 = cljs.core.chunk_first.call(null,seq__4464_4494__$1);
var G__4496 = cljs.core.chunk_rest.call(null,seq__4464_4494__$1);
var G__4497 = c__4550__auto___4495;
var G__4498 = cljs.core.count.call(null,c__4550__auto___4495);
var G__4499 = (0);
seq__4464_4484 = G__4496;
chunk__4465_4485 = G__4497;
count__4466_4486 = G__4498;
i__4467_4487 = G__4499;
continue;
} else {
var lib_4500 = cljs.core.first.call(null,seq__4464_4494__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_4500)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4500),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4500),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4500),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4500),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_4500,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4500),"');");
}

}
}
}


var G__4501 = cljs.core.next.call(null,seq__4464_4494__$1);
var G__4502 = null;
var G__4503 = (0);
var G__4504 = (0);
seq__4464_4484 = G__4501;
chunk__4465_4485 = G__4502;
count__4466_4486 = G__4503;
i__4467_4487 = G__4504;
continue;
}
} else {
}
}
break;
}

var seq__4468_4505 = cljs.core.seq.call(null,node_libs);
var chunk__4469_4506 = null;
var count__4470_4507 = (0);
var i__4471_4508 = (0);
while(true){
if((i__4471_4508 < count__4470_4507)){
var lib_4509 = cljs.core._nth.call(null,chunk__4469_4506,i__4471_4508);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_4509)," = require('",lib_4509,"');");


var G__4510 = seq__4468_4505;
var G__4511 = chunk__4469_4506;
var G__4512 = count__4470_4507;
var G__4513 = (i__4471_4508 + (1));
seq__4468_4505 = G__4510;
chunk__4469_4506 = G__4511;
count__4470_4507 = G__4512;
i__4471_4508 = G__4513;
continue;
} else {
var temp__5720__auto___4514 = cljs.core.seq.call(null,seq__4468_4505);
if(temp__5720__auto___4514){
var seq__4468_4515__$1 = temp__5720__auto___4514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4468_4515__$1)){
var c__4550__auto___4516 = cljs.core.chunk_first.call(null,seq__4468_4515__$1);
var G__4517 = cljs.core.chunk_rest.call(null,seq__4468_4515__$1);
var G__4518 = c__4550__auto___4516;
var G__4519 = cljs.core.count.call(null,c__4550__auto___4516);
var G__4520 = (0);
seq__4468_4505 = G__4517;
chunk__4469_4506 = G__4518;
count__4470_4507 = G__4519;
i__4471_4508 = G__4520;
continue;
} else {
var lib_4521 = cljs.core.first.call(null,seq__4468_4515__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_4521)," = require('",lib_4521,"');");


var G__4522 = cljs.core.next.call(null,seq__4468_4515__$1);
var G__4523 = null;
var G__4524 = (0);
var G__4525 = (0);
seq__4468_4505 = G__4522;
chunk__4469_4506 = G__4523;
count__4470_4507 = G__4524;
i__4471_4508 = G__4525;
continue;
}
} else {
}
}
break;
}

var seq__4472_4526 = cljs.core.seq.call(null,global_exports_libs);
var chunk__4473_4527 = null;
var count__4474_4528 = (0);
var i__4475_4529 = (0);
while(true){
if((i__4475_4529 < count__4474_4528)){
var lib_4530 = cljs.core._nth.call(null,chunk__4473_4527,i__4475_4529);
var map__4480_4531 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_4530));
var map__4480_4532__$1 = (((((!((map__4480_4531 == null))))?(((((map__4480_4531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4480_4531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4480_4531):map__4480_4531);
var global_exports_4533 = cljs.core.get.call(null,map__4480_4532__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_4533,lib_4530);


var G__4534 = seq__4472_4526;
var G__4535 = chunk__4473_4527;
var G__4536 = count__4474_4528;
var G__4537 = (i__4475_4529 + (1));
seq__4472_4526 = G__4534;
chunk__4473_4527 = G__4535;
count__4474_4528 = G__4536;
i__4475_4529 = G__4537;
continue;
} else {
var temp__5720__auto___4538 = cljs.core.seq.call(null,seq__4472_4526);
if(temp__5720__auto___4538){
var seq__4472_4539__$1 = temp__5720__auto___4538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4472_4539__$1)){
var c__4550__auto___4540 = cljs.core.chunk_first.call(null,seq__4472_4539__$1);
var G__4541 = cljs.core.chunk_rest.call(null,seq__4472_4539__$1);
var G__4542 = c__4550__auto___4540;
var G__4543 = cljs.core.count.call(null,c__4550__auto___4540);
var G__4544 = (0);
seq__4472_4526 = G__4541;
chunk__4473_4527 = G__4542;
count__4474_4528 = G__4543;
i__4475_4529 = G__4544;
continue;
} else {
var lib_4545 = cljs.core.first.call(null,seq__4472_4539__$1);
var map__4482_4546 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_4545));
var map__4482_4547__$1 = (((((!((map__4482_4546 == null))))?(((((map__4482_4546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4482_4546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4482_4546):map__4482_4546);
var global_exports_4548 = cljs.core.get.call(null,map__4482_4547__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_4548,lib_4545);


var G__4549 = cljs.core.next.call(null,seq__4472_4539__$1);
var G__4550 = null;
var G__4551 = (0);
var G__4552 = (0);
seq__4472_4526 = G__4549;
chunk__4473_4527 = G__4550;
count__4474_4528 = G__4551;
i__4475_4529 = G__4552;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__4553){
var map__4554 = p__4553;
var map__4554__$1 = (((((!((map__4554 == null))))?(((((map__4554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4554):map__4554);
var name = cljs.core.get.call(null,map__4554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__4554__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__4554__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__4554__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__4554__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__4554__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__4554__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__4556){
var map__4557 = p__4556;
var map__4557__$1 = (((((!((map__4557 == null))))?(((((map__4557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4557):map__4557);
var name = cljs.core.get.call(null,map__4557__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__4557__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__4557__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__4557__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__4557__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__4557__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__4557__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__4559){
var map__4560 = p__4559;
var map__4560__$1 = (((((!((map__4560 == null))))?(((((map__4560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4560):map__4560);
var t = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__4562_4586 = cljs.core.seq.call(null,protocols);
var chunk__4563_4587 = null;
var count__4564_4588 = (0);
var i__4565_4589 = (0);
while(true){
if((i__4565_4589 < count__4564_4588)){
var protocol_4590 = cljs.core._nth.call(null,chunk__4563_4587,i__4565_4589);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4590)),"}");


var G__4591 = seq__4562_4586;
var G__4592 = chunk__4563_4587;
var G__4593 = count__4564_4588;
var G__4594 = (i__4565_4589 + (1));
seq__4562_4586 = G__4591;
chunk__4563_4587 = G__4592;
count__4564_4588 = G__4593;
i__4565_4589 = G__4594;
continue;
} else {
var temp__5720__auto___4595 = cljs.core.seq.call(null,seq__4562_4586);
if(temp__5720__auto___4595){
var seq__4562_4596__$1 = temp__5720__auto___4595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4562_4596__$1)){
var c__4550__auto___4597 = cljs.core.chunk_first.call(null,seq__4562_4596__$1);
var G__4598 = cljs.core.chunk_rest.call(null,seq__4562_4596__$1);
var G__4599 = c__4550__auto___4597;
var G__4600 = cljs.core.count.call(null,c__4550__auto___4597);
var G__4601 = (0);
seq__4562_4586 = G__4598;
chunk__4563_4587 = G__4599;
count__4564_4588 = G__4600;
i__4565_4589 = G__4601;
continue;
} else {
var protocol_4602 = cljs.core.first.call(null,seq__4562_4596__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4602)),"}");


var G__4603 = cljs.core.next.call(null,seq__4562_4596__$1);
var G__4604 = null;
var G__4605 = (0);
var G__4606 = (0);
seq__4562_4586 = G__4603;
chunk__4563_4587 = G__4604;
count__4564_4588 = G__4605;
i__4565_4589 = G__4606;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__4566_4607 = cljs.core.seq.call(null,fields__$1);
var chunk__4567_4608 = null;
var count__4568_4609 = (0);
var i__4569_4610 = (0);
while(true){
if((i__4569_4610 < count__4568_4609)){
var fld_4611 = cljs.core._nth.call(null,chunk__4567_4608,i__4569_4610);
cljs.compiler.emitln.call(null,"this.",fld_4611," = ",fld_4611,";");


var G__4612 = seq__4566_4607;
var G__4613 = chunk__4567_4608;
var G__4614 = count__4568_4609;
var G__4615 = (i__4569_4610 + (1));
seq__4566_4607 = G__4612;
chunk__4567_4608 = G__4613;
count__4568_4609 = G__4614;
i__4569_4610 = G__4615;
continue;
} else {
var temp__5720__auto___4616 = cljs.core.seq.call(null,seq__4566_4607);
if(temp__5720__auto___4616){
var seq__4566_4617__$1 = temp__5720__auto___4616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4566_4617__$1)){
var c__4550__auto___4618 = cljs.core.chunk_first.call(null,seq__4566_4617__$1);
var G__4619 = cljs.core.chunk_rest.call(null,seq__4566_4617__$1);
var G__4620 = c__4550__auto___4618;
var G__4621 = cljs.core.count.call(null,c__4550__auto___4618);
var G__4622 = (0);
seq__4566_4607 = G__4619;
chunk__4567_4608 = G__4620;
count__4568_4609 = G__4621;
i__4569_4610 = G__4622;
continue;
} else {
var fld_4623 = cljs.core.first.call(null,seq__4566_4617__$1);
cljs.compiler.emitln.call(null,"this.",fld_4623," = ",fld_4623,";");


var G__4624 = cljs.core.next.call(null,seq__4566_4617__$1);
var G__4625 = null;
var G__4626 = (0);
var G__4627 = (0);
seq__4566_4607 = G__4624;
chunk__4567_4608 = G__4625;
count__4568_4609 = G__4626;
i__4569_4610 = G__4627;
continue;
}
} else {
}
}
break;
}

var seq__4570_4628 = cljs.core.seq.call(null,pmasks);
var chunk__4571_4629 = null;
var count__4572_4630 = (0);
var i__4573_4631 = (0);
while(true){
if((i__4573_4631 < count__4572_4630)){
var vec__4580_4632 = cljs.core._nth.call(null,chunk__4571_4629,i__4573_4631);
var pno_4633 = cljs.core.nth.call(null,vec__4580_4632,(0),null);
var pmask_4634 = cljs.core.nth.call(null,vec__4580_4632,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4633,"$ = ",pmask_4634,";");


var G__4635 = seq__4570_4628;
var G__4636 = chunk__4571_4629;
var G__4637 = count__4572_4630;
var G__4638 = (i__4573_4631 + (1));
seq__4570_4628 = G__4635;
chunk__4571_4629 = G__4636;
count__4572_4630 = G__4637;
i__4573_4631 = G__4638;
continue;
} else {
var temp__5720__auto___4639 = cljs.core.seq.call(null,seq__4570_4628);
if(temp__5720__auto___4639){
var seq__4570_4640__$1 = temp__5720__auto___4639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4570_4640__$1)){
var c__4550__auto___4641 = cljs.core.chunk_first.call(null,seq__4570_4640__$1);
var G__4642 = cljs.core.chunk_rest.call(null,seq__4570_4640__$1);
var G__4643 = c__4550__auto___4641;
var G__4644 = cljs.core.count.call(null,c__4550__auto___4641);
var G__4645 = (0);
seq__4570_4628 = G__4642;
chunk__4571_4629 = G__4643;
count__4572_4630 = G__4644;
i__4573_4631 = G__4645;
continue;
} else {
var vec__4583_4646 = cljs.core.first.call(null,seq__4570_4640__$1);
var pno_4647 = cljs.core.nth.call(null,vec__4583_4646,(0),null);
var pmask_4648 = cljs.core.nth.call(null,vec__4583_4646,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4647,"$ = ",pmask_4648,";");


var G__4649 = cljs.core.next.call(null,seq__4570_4640__$1);
var G__4650 = null;
var G__4651 = (0);
var G__4652 = (0);
seq__4570_4628 = G__4649;
chunk__4571_4629 = G__4650;
count__4572_4630 = G__4651;
i__4573_4631 = G__4652;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__4653){
var map__4654 = p__4653;
var map__4654__$1 = (((((!((map__4654 == null))))?(((((map__4654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4654):map__4654);
var t = cljs.core.get.call(null,map__4654__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__4654__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__4654__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__4654__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__4654__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__4656_4680 = cljs.core.seq.call(null,protocols);
var chunk__4657_4681 = null;
var count__4658_4682 = (0);
var i__4659_4683 = (0);
while(true){
if((i__4659_4683 < count__4658_4682)){
var protocol_4684 = cljs.core._nth.call(null,chunk__4657_4681,i__4659_4683);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4684)),"}");


var G__4685 = seq__4656_4680;
var G__4686 = chunk__4657_4681;
var G__4687 = count__4658_4682;
var G__4688 = (i__4659_4683 + (1));
seq__4656_4680 = G__4685;
chunk__4657_4681 = G__4686;
count__4658_4682 = G__4687;
i__4659_4683 = G__4688;
continue;
} else {
var temp__5720__auto___4689 = cljs.core.seq.call(null,seq__4656_4680);
if(temp__5720__auto___4689){
var seq__4656_4690__$1 = temp__5720__auto___4689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4656_4690__$1)){
var c__4550__auto___4691 = cljs.core.chunk_first.call(null,seq__4656_4690__$1);
var G__4692 = cljs.core.chunk_rest.call(null,seq__4656_4690__$1);
var G__4693 = c__4550__auto___4691;
var G__4694 = cljs.core.count.call(null,c__4550__auto___4691);
var G__4695 = (0);
seq__4656_4680 = G__4692;
chunk__4657_4681 = G__4693;
count__4658_4682 = G__4694;
i__4659_4683 = G__4695;
continue;
} else {
var protocol_4696 = cljs.core.first.call(null,seq__4656_4690__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4696)),"}");


var G__4697 = cljs.core.next.call(null,seq__4656_4690__$1);
var G__4698 = null;
var G__4699 = (0);
var G__4700 = (0);
seq__4656_4680 = G__4697;
chunk__4657_4681 = G__4698;
count__4658_4682 = G__4699;
i__4659_4683 = G__4700;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__4660_4701 = cljs.core.seq.call(null,fields__$1);
var chunk__4661_4702 = null;
var count__4662_4703 = (0);
var i__4663_4704 = (0);
while(true){
if((i__4663_4704 < count__4662_4703)){
var fld_4705 = cljs.core._nth.call(null,chunk__4661_4702,i__4663_4704);
cljs.compiler.emitln.call(null,"this.",fld_4705," = ",fld_4705,";");


var G__4706 = seq__4660_4701;
var G__4707 = chunk__4661_4702;
var G__4708 = count__4662_4703;
var G__4709 = (i__4663_4704 + (1));
seq__4660_4701 = G__4706;
chunk__4661_4702 = G__4707;
count__4662_4703 = G__4708;
i__4663_4704 = G__4709;
continue;
} else {
var temp__5720__auto___4710 = cljs.core.seq.call(null,seq__4660_4701);
if(temp__5720__auto___4710){
var seq__4660_4711__$1 = temp__5720__auto___4710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4660_4711__$1)){
var c__4550__auto___4712 = cljs.core.chunk_first.call(null,seq__4660_4711__$1);
var G__4713 = cljs.core.chunk_rest.call(null,seq__4660_4711__$1);
var G__4714 = c__4550__auto___4712;
var G__4715 = cljs.core.count.call(null,c__4550__auto___4712);
var G__4716 = (0);
seq__4660_4701 = G__4713;
chunk__4661_4702 = G__4714;
count__4662_4703 = G__4715;
i__4663_4704 = G__4716;
continue;
} else {
var fld_4717 = cljs.core.first.call(null,seq__4660_4711__$1);
cljs.compiler.emitln.call(null,"this.",fld_4717," = ",fld_4717,";");


var G__4718 = cljs.core.next.call(null,seq__4660_4711__$1);
var G__4719 = null;
var G__4720 = (0);
var G__4721 = (0);
seq__4660_4701 = G__4718;
chunk__4661_4702 = G__4719;
count__4662_4703 = G__4720;
i__4663_4704 = G__4721;
continue;
}
} else {
}
}
break;
}

var seq__4664_4722 = cljs.core.seq.call(null,pmasks);
var chunk__4665_4723 = null;
var count__4666_4724 = (0);
var i__4667_4725 = (0);
while(true){
if((i__4667_4725 < count__4666_4724)){
var vec__4674_4726 = cljs.core._nth.call(null,chunk__4665_4723,i__4667_4725);
var pno_4727 = cljs.core.nth.call(null,vec__4674_4726,(0),null);
var pmask_4728 = cljs.core.nth.call(null,vec__4674_4726,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4727,"$ = ",pmask_4728,";");


var G__4729 = seq__4664_4722;
var G__4730 = chunk__4665_4723;
var G__4731 = count__4666_4724;
var G__4732 = (i__4667_4725 + (1));
seq__4664_4722 = G__4729;
chunk__4665_4723 = G__4730;
count__4666_4724 = G__4731;
i__4667_4725 = G__4732;
continue;
} else {
var temp__5720__auto___4733 = cljs.core.seq.call(null,seq__4664_4722);
if(temp__5720__auto___4733){
var seq__4664_4734__$1 = temp__5720__auto___4733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4664_4734__$1)){
var c__4550__auto___4735 = cljs.core.chunk_first.call(null,seq__4664_4734__$1);
var G__4736 = cljs.core.chunk_rest.call(null,seq__4664_4734__$1);
var G__4737 = c__4550__auto___4735;
var G__4738 = cljs.core.count.call(null,c__4550__auto___4735);
var G__4739 = (0);
seq__4664_4722 = G__4736;
chunk__4665_4723 = G__4737;
count__4666_4724 = G__4738;
i__4667_4725 = G__4739;
continue;
} else {
var vec__4677_4740 = cljs.core.first.call(null,seq__4664_4734__$1);
var pno_4741 = cljs.core.nth.call(null,vec__4677_4740,(0),null);
var pmask_4742 = cljs.core.nth.call(null,vec__4677_4740,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4741,"$ = ",pmask_4742,";");


var G__4743 = cljs.core.next.call(null,seq__4664_4734__$1);
var G__4744 = null;
var G__4745 = (0);
var G__4746 = (0);
seq__4664_4722 = G__4743;
chunk__4665_4723 = G__4744;
count__4666_4724 = G__4745;
i__4667_4725 = G__4746;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__4747){
var map__4748 = p__4747;
var map__4748__$1 = (((((!((map__4748 == null))))?(((((map__4748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4748):map__4748);
var target = cljs.core.get.call(null,map__4748__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__4748__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__4748__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__4748__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4748__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__4750){
var map__4751 = p__4750;
var map__4751__$1 = (((((!((map__4751 == null))))?(((((map__4751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4751):map__4751);
var op = cljs.core.get.call(null,map__4751__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__4751__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__4751__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__4751__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__4751__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__3545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__4757 = cljs.core.seq.call(null,table);
var chunk__4758 = null;
var count__4759 = (0);
var i__4760 = (0);
while(true){
if((i__4760 < count__4759)){
var vec__4767 = cljs.core._nth.call(null,chunk__4758,i__4760);
var sym = cljs.core.nth.call(null,vec__4767,(0),null);
var value = cljs.core.nth.call(null,vec__4767,(1),null);
var ns_4773 = cljs.core.namespace.call(null,sym);
var name_4774 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__4775 = seq__4757;
var G__4776 = chunk__4758;
var G__4777 = count__4759;
var G__4778 = (i__4760 + (1));
seq__4757 = G__4775;
chunk__4758 = G__4776;
count__4759 = G__4777;
i__4760 = G__4778;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__4757);
if(temp__5720__auto__){
var seq__4757__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4757__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4757__$1);
var G__4779 = cljs.core.chunk_rest.call(null,seq__4757__$1);
var G__4780 = c__4550__auto__;
var G__4781 = cljs.core.count.call(null,c__4550__auto__);
var G__4782 = (0);
seq__4757 = G__4779;
chunk__4758 = G__4780;
count__4759 = G__4781;
i__4760 = G__4782;
continue;
} else {
var vec__4770 = cljs.core.first.call(null,seq__4757__$1);
var sym = cljs.core.nth.call(null,vec__4770,(0),null);
var value = cljs.core.nth.call(null,vec__4770,(1),null);
var ns_4783 = cljs.core.namespace.call(null,sym);
var name_4784 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__4785 = cljs.core.next.call(null,seq__4757__$1);
var G__4786 = null;
var G__4787 = (0);
var G__4788 = (0);
seq__4757 = G__4785;
chunk__4758 = G__4786;
count__4759 = G__4787;
i__4760 = G__4788;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__4790 = arguments.length;
switch (G__4790) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_4795 = cljs.core.first.call(null,ks);
var vec__4791_4796 = cljs.core.conj.call(null,prefix,k_4795);
var top_4797 = cljs.core.nth.call(null,vec__4791_4796,(0),null);
var prefix_SINGLEQUOTE__4798 = vec__4791_4796;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_4795)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__4798) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_4797)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_4797)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__4798)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_4797);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__4798)),";");
}
} else {
}

var m_4799 = cljs.core.get.call(null,externs,k_4795);
if(cljs.core.empty_QMARK_.call(null,m_4799)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__4798,m_4799,top_level,known_externs);
}

var G__4800 = cljs.core.next.call(null,ks);
ks = G__4800;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

