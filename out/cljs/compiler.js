// Compiled by ClojureScript 1.10.516 {:elide-asserts true}
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
var map__7305 = s;
var map__7305__$1 = (((((!((map__7305 == null))))?(((((map__7305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7305):map__7305);
var name = cljs.core.get.call(null,map__7305__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__7305__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__7308 = info;
var map__7309 = G__7308;
var map__7309__$1 = (((((!((map__7309 == null))))?(((((map__7309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7309):map__7309);
var shadow = cljs.core.get.call(null,map__7309__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__7308__$1 = G__7308;
while(true){
var d__$2 = d__$1;
var map__7313 = G__7308__$1;
var map__7313__$1 = (((((!((map__7313 == null))))?(((((map__7313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7313):map__7313);
var shadow__$1 = cljs.core.get.call(null,map__7313__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__7328 = (d__$2 + (1));
var G__7329 = shadow__$1;
d__$1 = G__7328;
G__7308__$1 = G__7329;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__7317){
var map__7318 = p__7317;
var map__7318__$1 = (((((!((map__7318 == null))))?(((((map__7318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7318):map__7318);
var name_var = map__7318__$1;
var name = cljs.core.get.call(null,map__7318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__7318__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__7322 = info;
var map__7322__$1 = (((((!((map__7322 == null))))?(((((map__7322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7322):map__7322);
var ns = cljs.core.get.call(null,map__7322__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__7322__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__7334 = arguments.length;
switch (G__7334) {
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
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",17,1,11478,11478,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
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
var G__7338 = cp;
switch (G__7338) {
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
var seq__7340_7345 = cljs.core.seq.call(null,s);
var chunk__7341_7346 = null;
var count__7342_7347 = (0);
var i__7343_7348 = (0);
while(true){
if((i__7343_7348 < count__7342_7347)){
var c_7349 = cljs.core._nth.call(null,chunk__7341_7346,i__7343_7348);
sb.append(cljs.compiler.escape_char.call(null,c_7349));


var G__7350 = seq__7340_7345;
var G__7351 = chunk__7341_7346;
var G__7352 = count__7342_7347;
var G__7353 = (i__7343_7348 + (1));
seq__7340_7345 = G__7350;
chunk__7341_7346 = G__7351;
count__7342_7347 = G__7352;
i__7343_7348 = G__7353;
continue;
} else {
var temp__5720__auto___7354 = cljs.core.seq.call(null,seq__7340_7345);
if(temp__5720__auto___7354){
var seq__7340_7355__$1 = temp__5720__auto___7354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7340_7355__$1)){
var c__4550__auto___7356 = cljs.core.chunk_first.call(null,seq__7340_7355__$1);
var G__7357 = cljs.core.chunk_rest.call(null,seq__7340_7355__$1);
var G__7358 = c__4550__auto___7356;
var G__7359 = cljs.core.count.call(null,c__4550__auto___7356);
var G__7360 = (0);
seq__7340_7345 = G__7357;
chunk__7341_7346 = G__7358;
count__7342_7347 = G__7359;
i__7343_7348 = G__7360;
continue;
} else {
var c_7361 = cljs.core.first.call(null,seq__7340_7355__$1);
sb.append(cljs.compiler.escape_char.call(null,c_7361));


var G__7362 = cljs.core.next.call(null,seq__7340_7355__$1);
var G__7363 = null;
var G__7364 = (0);
var G__7365 = (0);
seq__7340_7345 = G__7362;
chunk__7341_7346 = G__7363;
count__7342_7347 = G__7364;
i__7343_7348 = G__7365;
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
var map__7366_7371 = ast;
var map__7366_7372__$1 = (((((!((map__7366_7371 == null))))?(((((map__7366_7371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7366_7371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7366_7371):map__7366_7371);
var env_7373 = cljs.core.get.call(null,map__7366_7372__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_7373))){
var map__7368_7375 = env_7373;
var map__7368_7376__$1 = (((((!((map__7368_7375 == null))))?(((((map__7368_7375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7368_7375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7368_7375):map__7368_7375);
var line_7377 = cljs.core.get.call(null,map__7368_7376__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_7378 = cljs.core.get.call(null,map__7368_7376__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__7368_7375,map__7368_7376__$1,line_7377,column_7378,map__7366_7371,map__7366_7372__$1,env_7373){
return (function (m){
var minfo = (function (){var G__7370 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__7370,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__7370;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_7377 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__7368_7375,map__7368_7376__$1,line_7377,column_7378,map__7366_7371,map__7366_7372__$1,env_7373){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_7378)?(column_7378 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__7368_7375,map__7368_7376__$1,line_7377,column_7378,map__7366_7371,map__7366_7372__$1,env_7373){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__7368_7375,map__7368_7376__$1,line_7377,column_7378,map__7366_7371,map__7366_7372__$1,env_7373))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__7368_7375,map__7368_7376__$1,line_7377,column_7378,map__7366_7371,map__7366_7372__$1,env_7373))
,cljs.core.sorted_map.call(null)));
});})(map__7368_7375,map__7368_7376__$1,line_7377,column_7378,map__7366_7371,map__7366_7372__$1,env_7373))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__7386 = arguments.length;
switch (G__7386) {
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
var len__4730__auto___7398 = arguments.length;
var i__4731__auto___7399 = (0);
while(true){
if((i__4731__auto___7399 < len__4730__auto___7398)){
args_arr__4751__auto__.push((arguments[i__4731__auto___7399]));

var G__7402 = (i__4731__auto___7399 + (1));
i__4731__auto___7399 = G__7402;
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
var s_7404 = (function (){var G__7387 = a;
if((!(typeof a === 'string'))){
return G__7387.toString();
} else {
return G__7387;
}
})();
var temp__5724__auto___7405 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___7405 == null)){
} else {
var sm_data_7406 = temp__5724__auto___7405;
cljs.core.swap_BANG_.call(null,sm_data_7406,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_7406,temp__5724__auto___7405,s_7404){
return (function (p1__7374_SHARP_){
return (p1__7374_SHARP_ + s_7404.length);
});})(sm_data_7406,temp__5724__auto___7405,s_7404))
);
}

cljs.core.print.call(null,s_7404);

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

var seq__7389 = cljs.core.seq.call(null,xs);
var chunk__7390 = null;
var count__7391 = (0);
var i__7392 = (0);
while(true){
if((i__7392 < count__7391)){
var x = cljs.core._nth.call(null,chunk__7390,i__7392);
cljs.compiler.emits.call(null,x);


var G__7415 = seq__7389;
var G__7416 = chunk__7390;
var G__7417 = count__7391;
var G__7418 = (i__7392 + (1));
seq__7389 = G__7415;
chunk__7390 = G__7416;
count__7391 = G__7417;
i__7392 = G__7418;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__7389);
if(temp__5720__auto__){
var seq__7389__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7389__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__7389__$1);
var G__7419 = cljs.core.chunk_rest.call(null,seq__7389__$1);
var G__7420 = c__4550__auto__;
var G__7421 = cljs.core.count.call(null,c__4550__auto__);
var G__7422 = (0);
seq__7389 = G__7419;
chunk__7390 = G__7420;
count__7391 = G__7421;
i__7392 = G__7422;
continue;
} else {
var x = cljs.core.first.call(null,seq__7389__$1);
cljs.compiler.emits.call(null,x);


var G__7423 = cljs.core.next.call(null,seq__7389__$1);
var G__7424 = null;
var G__7425 = (0);
var G__7426 = (0);
seq__7389 = G__7423;
chunk__7390 = G__7424;
count__7391 = G__7425;
i__7392 = G__7426;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq7380){
var G__7381 = cljs.core.first.call(null,seq7380);
var seq7380__$1 = cljs.core.next.call(null,seq7380);
var G__7382 = cljs.core.first.call(null,seq7380__$1);
var seq7380__$2 = cljs.core.next.call(null,seq7380__$1);
var G__7383 = cljs.core.first.call(null,seq7380__$2);
var seq7380__$3 = cljs.core.next.call(null,seq7380__$2);
var G__7384 = cljs.core.first.call(null,seq7380__$3);
var seq7380__$4 = cljs.core.next.call(null,seq7380__$3);
var G__7385 = cljs.core.first.call(null,seq7380__$4);
var seq7380__$5 = cljs.core.next.call(null,seq7380__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7381,G__7382,G__7383,G__7384,G__7385,seq7380__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__7400){
var map__7401 = p__7400;
var map__7401__$1 = (((((!((map__7401 == null))))?(((((map__7401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7401):map__7401);
var m = map__7401__$1;
var gen_line = cljs.core.get.call(null,map__7401__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__7414 = arguments.length;
switch (G__7414) {
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
var len__4730__auto___7436 = arguments.length;
var i__4731__auto___7437 = (0);
while(true){
if((i__4731__auto___7437 < len__4730__auto___7436)){
args_arr__4751__auto__.push((arguments[i__4731__auto___7437]));

var G__7438 = (i__4731__auto___7437 + (1));
i__4731__auto___7437 = G__7438;
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

var seq__7427_7439 = cljs.core.seq.call(null,xs);
var chunk__7428_7440 = null;
var count__7429_7441 = (0);
var i__7430_7442 = (0);
while(true){
if((i__7430_7442 < count__7429_7441)){
var x_7443 = cljs.core._nth.call(null,chunk__7428_7440,i__7430_7442);
cljs.compiler.emits.call(null,x_7443);


var G__7444 = seq__7427_7439;
var G__7445 = chunk__7428_7440;
var G__7446 = count__7429_7441;
var G__7447 = (i__7430_7442 + (1));
seq__7427_7439 = G__7444;
chunk__7428_7440 = G__7445;
count__7429_7441 = G__7446;
i__7430_7442 = G__7447;
continue;
} else {
var temp__5720__auto___7448 = cljs.core.seq.call(null,seq__7427_7439);
if(temp__5720__auto___7448){
var seq__7427_7449__$1 = temp__5720__auto___7448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7427_7449__$1)){
var c__4550__auto___7450 = cljs.core.chunk_first.call(null,seq__7427_7449__$1);
var G__7451 = cljs.core.chunk_rest.call(null,seq__7427_7449__$1);
var G__7452 = c__4550__auto___7450;
var G__7453 = cljs.core.count.call(null,c__4550__auto___7450);
var G__7454 = (0);
seq__7427_7439 = G__7451;
chunk__7428_7440 = G__7452;
count__7429_7441 = G__7453;
i__7430_7442 = G__7454;
continue;
} else {
var x_7455 = cljs.core.first.call(null,seq__7427_7449__$1);
cljs.compiler.emits.call(null,x_7455);


var G__7456 = cljs.core.next.call(null,seq__7427_7449__$1);
var G__7457 = null;
var G__7458 = (0);
var G__7459 = (0);
seq__7427_7439 = G__7456;
chunk__7428_7440 = G__7457;
count__7429_7441 = G__7458;
i__7430_7442 = G__7459;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq7408){
var G__7409 = cljs.core.first.call(null,seq7408);
var seq7408__$1 = cljs.core.next.call(null,seq7408);
var G__7410 = cljs.core.first.call(null,seq7408__$1);
var seq7408__$2 = cljs.core.next.call(null,seq7408__$1);
var G__7411 = cljs.core.first.call(null,seq7408__$2);
var seq7408__$3 = cljs.core.next.call(null,seq7408__$2);
var G__7412 = cljs.core.first.call(null,seq7408__$3);
var seq7408__$4 = cljs.core.next.call(null,seq7408__$3);
var G__7413 = cljs.core.first.call(null,seq7408__$4);
var seq7408__$5 = cljs.core.next.call(null,seq7408__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7409,G__7410,G__7411,G__7412,G__7413,seq7408__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7432_7460 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7433_7461 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7434_7462 = true;
var _STAR_print_fn_STAR__temp_val__7435_7463 = ((function (_STAR_print_newline_STAR__orig_val__7432_7460,_STAR_print_fn_STAR__orig_val__7433_7461,_STAR_print_newline_STAR__temp_val__7434_7462,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__7432_7460,_STAR_print_fn_STAR__orig_val__7433_7461,_STAR_print_newline_STAR__temp_val__7434_7462,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7434_7462;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7435_7463;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7433_7461;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7432_7460;
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
var vec__7464 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__7464,(0),null);
var name = cljs.core.nth.call(null,vec__7464,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__7464,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__7464,ns,name))
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
var vec__7467 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__7467,(0),null);
var flags = cljs.core.nth.call(null,vec__7467,(1),null);
var pattern = cljs.core.nth.call(null,vec__7467,(2),null);
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
return (function (p1__7470_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__7470_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__7472){
var map__7473 = p__7472;
var map__7473__$1 = (((((!((map__7473 == null))))?(((((map__7473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7473):map__7473);
var ast = map__7473__$1;
var info = cljs.core.get.call(null,map__7473__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__7473__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__7473__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__7475 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__7475__$1 = (((((!((map__7475 == null))))?(((((map__7475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7475):map__7475);
var cenv = map__7475__$1;
var options = cljs.core.get.call(null,map__7475__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__7477 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__7477,cljs.analyzer.es5_allowed);
} else {
return G__7477;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__7478 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__7478,reserved);
} else {
return G__7478;
}
})();
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__7479_7480 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__7479_7481__$1 = (((G__7479_7480 instanceof cljs.core.Keyword))?G__7479_7480.fqn:null);
switch (G__7479_7481__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__7483){
var map__7484 = p__7483;
var map__7484__$1 = (((((!((map__7484 == null))))?(((((map__7484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7484):map__7484);
var arg = map__7484__$1;
var env = cljs.core.get.call(null,map__7484__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__7484__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__7484__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__7484__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__7486 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__7486__$1 = (((((!((map__7486 == null))))?(((((map__7486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7486):map__7486);
var name = cljs.core.get.call(null,map__7486__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__7488){
var map__7489 = p__7488;
var map__7489__$1 = (((((!((map__7489 == null))))?(((((map__7489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7489):map__7489);
var expr = cljs.core.get.call(null,map__7489__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__7489__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__7489__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__7491_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__7491_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__7492){
var map__7493 = p__7492;
var map__7493__$1 = (((((!((map__7493 == null))))?(((((map__7493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7493):map__7493);
var env = cljs.core.get.call(null,map__7493__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__7493__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__7493__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__7495){
var map__7496 = p__7495;
var map__7496__$1 = (((((!((map__7496 == null))))?(((((map__7496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7496):map__7496);
var items = cljs.core.get.call(null,map__7496__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7496__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__7498_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__7498_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__7499){
var map__7500 = p__7499;
var map__7500__$1 = (((((!((map__7500 == null))))?(((((map__7500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7500):map__7500);
var items = cljs.core.get.call(null,map__7500__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7500__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___7524 = cljs.core.seq.call(null,items);
if(temp__5720__auto___7524){
var items_7525__$1 = temp__5720__auto___7524;
var vec__7502_7526 = items_7525__$1;
var seq__7503_7527 = cljs.core.seq.call(null,vec__7502_7526);
var first__7504_7528 = cljs.core.first.call(null,seq__7503_7527);
var seq__7503_7529__$1 = cljs.core.next.call(null,seq__7503_7527);
var vec__7505_7530 = first__7504_7528;
var k_7531 = cljs.core.nth.call(null,vec__7505_7530,(0),null);
var v_7532 = cljs.core.nth.call(null,vec__7505_7530,(1),null);
var r_7533 = seq__7503_7529__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_7531),"\": ",emit_js_object_val.call(null,v_7532));

var seq__7508_7535 = cljs.core.seq.call(null,r_7533);
var chunk__7509_7536 = null;
var count__7510_7537 = (0);
var i__7511_7538 = (0);
while(true){
if((i__7511_7538 < count__7510_7537)){
var vec__7518_7541 = cljs.core._nth.call(null,chunk__7509_7536,i__7511_7538);
var k_7542__$1 = cljs.core.nth.call(null,vec__7518_7541,(0),null);
var v_7543__$1 = cljs.core.nth.call(null,vec__7518_7541,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_7542__$1),"\": ",emit_js_object_val.call(null,v_7543__$1));


var G__7544 = seq__7508_7535;
var G__7545 = chunk__7509_7536;
var G__7546 = count__7510_7537;
var G__7547 = (i__7511_7538 + (1));
seq__7508_7535 = G__7544;
chunk__7509_7536 = G__7545;
count__7510_7537 = G__7546;
i__7511_7538 = G__7547;
continue;
} else {
var temp__5720__auto___7548__$1 = cljs.core.seq.call(null,seq__7508_7535);
if(temp__5720__auto___7548__$1){
var seq__7508_7549__$1 = temp__5720__auto___7548__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7508_7549__$1)){
var c__4550__auto___7550 = cljs.core.chunk_first.call(null,seq__7508_7549__$1);
var G__7551 = cljs.core.chunk_rest.call(null,seq__7508_7549__$1);
var G__7552 = c__4550__auto___7550;
var G__7553 = cljs.core.count.call(null,c__4550__auto___7550);
var G__7554 = (0);
seq__7508_7535 = G__7551;
chunk__7509_7536 = G__7552;
count__7510_7537 = G__7553;
i__7511_7538 = G__7554;
continue;
} else {
var vec__7521_7555 = cljs.core.first.call(null,seq__7508_7549__$1);
var k_7556__$1 = cljs.core.nth.call(null,vec__7521_7555,(0),null);
var v_7557__$1 = cljs.core.nth.call(null,vec__7521_7555,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_7556__$1),"\": ",emit_js_object_val.call(null,v_7557__$1));


var G__7558 = cljs.core.next.call(null,seq__7508_7549__$1);
var G__7559 = null;
var G__7560 = (0);
var G__7561 = (0);
seq__7508_7535 = G__7558;
chunk__7509_7536 = G__7559;
count__7510_7537 = G__7560;
i__7511_7538 = G__7561;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__7534){
var map__7539 = p__7534;
var map__7539__$1 = (((((!((map__7539 == null))))?(((((map__7539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7539):map__7539);
var keys = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__7539__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__7562){
var map__7563 = p__7562;
var map__7563__$1 = (((((!((map__7563 == null))))?(((((map__7563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7563):map__7563);
var items = cljs.core.get.call(null,map__7563__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7563__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__7565){
var map__7566 = p__7565;
var map__7566__$1 = (((((!((map__7566 == null))))?(((((map__7566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7566):map__7566);
var expr = cljs.core.get.call(null,map__7566__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__7568){
var map__7569 = p__7568;
var map__7569__$1 = (((((!((map__7569 == null))))?(((((map__7569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7569):map__7569);
var form = cljs.core.get.call(null,map__7569__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__7569__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__7571 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__7571__$1 = (((((!((map__7571 == null))))?(((((map__7571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7571):map__7571);
var op = cljs.core.get.call(null,map__7571__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__7571__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__7571__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__7573 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__7573__$1 = (((((!((map__7573 == null))))?(((((map__7573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7573):map__7573);
var op = cljs.core.get.call(null,map__7573__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__7573__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__7573__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__7575){
var map__7576 = p__7575;
var map__7576__$1 = (((((!((map__7576 == null))))?(((((map__7576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7576):map__7576);
var test = cljs.core.get.call(null,map__7576__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__7576__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__7576__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__7576__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__7576__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__7578){
var map__7579 = p__7578;
var map__7579__$1 = (((((!((map__7579 == null))))?(((((map__7579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7579):map__7579);
var v = cljs.core.get.call(null,map__7579__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__7579__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__7579__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__7579__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__7581_7620 = cljs.core.seq.call(null,nodes);
var chunk__7582_7621 = null;
var count__7583_7622 = (0);
var i__7584_7623 = (0);
while(true){
if((i__7584_7623 < count__7583_7622)){
var map__7601_7624 = cljs.core._nth.call(null,chunk__7582_7621,i__7584_7623);
var map__7601_7625__$1 = (((((!((map__7601_7624 == null))))?(((((map__7601_7624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7601_7624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7601_7624):map__7601_7624);
var ts_7626 = cljs.core.get.call(null,map__7601_7625__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__7602_7627 = cljs.core.get.call(null,map__7601_7625__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__7602_7628__$1 = (((((!((map__7602_7627 == null))))?(((((map__7602_7627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7602_7627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7602_7627):map__7602_7627);
var then_7629 = cljs.core.get.call(null,map__7602_7628__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__7605_7630 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_7626));
var chunk__7606_7631 = null;
var count__7607_7632 = (0);
var i__7608_7633 = (0);
while(true){
if((i__7608_7633 < count__7607_7632)){
var test_7634 = cljs.core._nth.call(null,chunk__7606_7631,i__7608_7633);
cljs.compiler.emitln.call(null,"case ",test_7634,":");


var G__7635 = seq__7605_7630;
var G__7636 = chunk__7606_7631;
var G__7637 = count__7607_7632;
var G__7638 = (i__7608_7633 + (1));
seq__7605_7630 = G__7635;
chunk__7606_7631 = G__7636;
count__7607_7632 = G__7637;
i__7608_7633 = G__7638;
continue;
} else {
var temp__5720__auto___7639 = cljs.core.seq.call(null,seq__7605_7630);
if(temp__5720__auto___7639){
var seq__7605_7640__$1 = temp__5720__auto___7639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7605_7640__$1)){
var c__4550__auto___7641 = cljs.core.chunk_first.call(null,seq__7605_7640__$1);
var G__7642 = cljs.core.chunk_rest.call(null,seq__7605_7640__$1);
var G__7643 = c__4550__auto___7641;
var G__7644 = cljs.core.count.call(null,c__4550__auto___7641);
var G__7645 = (0);
seq__7605_7630 = G__7642;
chunk__7606_7631 = G__7643;
count__7607_7632 = G__7644;
i__7608_7633 = G__7645;
continue;
} else {
var test_7646 = cljs.core.first.call(null,seq__7605_7640__$1);
cljs.compiler.emitln.call(null,"case ",test_7646,":");


var G__7647 = cljs.core.next.call(null,seq__7605_7640__$1);
var G__7648 = null;
var G__7649 = (0);
var G__7650 = (0);
seq__7605_7630 = G__7647;
chunk__7606_7631 = G__7648;
count__7607_7632 = G__7649;
i__7608_7633 = G__7650;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_7629);
} else {
cljs.compiler.emitln.call(null,then_7629);
}

cljs.compiler.emitln.call(null,"break;");


var G__7652 = seq__7581_7620;
var G__7653 = chunk__7582_7621;
var G__7654 = count__7583_7622;
var G__7655 = (i__7584_7623 + (1));
seq__7581_7620 = G__7652;
chunk__7582_7621 = G__7653;
count__7583_7622 = G__7654;
i__7584_7623 = G__7655;
continue;
} else {
var temp__5720__auto___7656 = cljs.core.seq.call(null,seq__7581_7620);
if(temp__5720__auto___7656){
var seq__7581_7657__$1 = temp__5720__auto___7656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7581_7657__$1)){
var c__4550__auto___7658 = cljs.core.chunk_first.call(null,seq__7581_7657__$1);
var G__7659 = cljs.core.chunk_rest.call(null,seq__7581_7657__$1);
var G__7660 = c__4550__auto___7658;
var G__7661 = cljs.core.count.call(null,c__4550__auto___7658);
var G__7662 = (0);
seq__7581_7620 = G__7659;
chunk__7582_7621 = G__7660;
count__7583_7622 = G__7661;
i__7584_7623 = G__7662;
continue;
} else {
var map__7609_7663 = cljs.core.first.call(null,seq__7581_7657__$1);
var map__7609_7664__$1 = (((((!((map__7609_7663 == null))))?(((((map__7609_7663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7609_7663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7609_7663):map__7609_7663);
var ts_7665 = cljs.core.get.call(null,map__7609_7664__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__7610_7666 = cljs.core.get.call(null,map__7609_7664__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__7610_7667__$1 = (((((!((map__7610_7666 == null))))?(((((map__7610_7666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7610_7666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7610_7666):map__7610_7666);
var then_7668 = cljs.core.get.call(null,map__7610_7667__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__7613_7669 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_7665));
var chunk__7614_7670 = null;
var count__7615_7671 = (0);
var i__7616_7672 = (0);
while(true){
if((i__7616_7672 < count__7615_7671)){
var test_7676 = cljs.core._nth.call(null,chunk__7614_7670,i__7616_7672);
cljs.compiler.emitln.call(null,"case ",test_7676,":");


var G__7677 = seq__7613_7669;
var G__7678 = chunk__7614_7670;
var G__7679 = count__7615_7671;
var G__7680 = (i__7616_7672 + (1));
seq__7613_7669 = G__7677;
chunk__7614_7670 = G__7678;
count__7615_7671 = G__7679;
i__7616_7672 = G__7680;
continue;
} else {
var temp__5720__auto___7681__$1 = cljs.core.seq.call(null,seq__7613_7669);
if(temp__5720__auto___7681__$1){
var seq__7613_7682__$1 = temp__5720__auto___7681__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7613_7682__$1)){
var c__4550__auto___7683 = cljs.core.chunk_first.call(null,seq__7613_7682__$1);
var G__7684 = cljs.core.chunk_rest.call(null,seq__7613_7682__$1);
var G__7685 = c__4550__auto___7683;
var G__7686 = cljs.core.count.call(null,c__4550__auto___7683);
var G__7687 = (0);
seq__7613_7669 = G__7684;
chunk__7614_7670 = G__7685;
count__7615_7671 = G__7686;
i__7616_7672 = G__7687;
continue;
} else {
var test_7688 = cljs.core.first.call(null,seq__7613_7682__$1);
cljs.compiler.emitln.call(null,"case ",test_7688,":");


var G__7689 = cljs.core.next.call(null,seq__7613_7682__$1);
var G__7690 = null;
var G__7691 = (0);
var G__7692 = (0);
seq__7613_7669 = G__7689;
chunk__7614_7670 = G__7690;
count__7615_7671 = G__7691;
i__7616_7672 = G__7692;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_7668);
} else {
cljs.compiler.emitln.call(null,then_7668);
}

cljs.compiler.emitln.call(null,"break;");


var G__7693 = cljs.core.next.call(null,seq__7581_7657__$1);
var G__7694 = null;
var G__7695 = (0);
var G__7696 = (0);
seq__7581_7620 = G__7693;
chunk__7582_7621 = G__7694;
count__7583_7622 = G__7695;
i__7584_7623 = G__7696;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__7617){
var map__7618 = p__7617;
var map__7618__$1 = (((((!((map__7618 == null))))?(((((map__7618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7618):map__7618);
var throw$ = cljs.core.get.call(null,map__7618__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__7618__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__7673 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__7673,(0),null);
var rstr = cljs.core.nth.call(null,vec__7673,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__7673,fstr,rstr,ret_t,axstr){
return (function (p1__7651_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7651_SHARP_);
});})(idx,vec__7673,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__7697 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__7697,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__7697;
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
return (function (p1__7698_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7698_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__7699 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__7700 = cljs.core.seq.call(null,vec__7699);
var first__7701 = cljs.core.first.call(null,seq__7700);
var seq__7700__$1 = cljs.core.next.call(null,seq__7700);
var p = first__7701;
var first__7701__$1 = cljs.core.first.call(null,seq__7700__$1);
var seq__7700__$2 = cljs.core.next.call(null,seq__7700__$1);
var ts = first__7701__$1;
var first__7701__$2 = cljs.core.first.call(null,seq__7700__$2);
var seq__7700__$3 = cljs.core.next.call(null,seq__7700__$2);
var n = first__7701__$2;
var xs = seq__7700__$3;
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
var vec__7702 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__7703 = cljs.core.seq.call(null,vec__7702);
var first__7704 = cljs.core.first.call(null,seq__7703);
var seq__7703__$1 = cljs.core.next.call(null,seq__7703);
var p = first__7704;
var first__7704__$1 = cljs.core.first.call(null,seq__7703__$1);
var seq__7703__$2 = cljs.core.next.call(null,seq__7703__$1);
var ts = first__7704__$1;
var xs = seq__7703__$2;
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
var G__7707 = arguments.length;
switch (G__7707) {
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
var vec__7715 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__7705_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__7705_SHARP_);
} else {
return p1__7705_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__7716 = cljs.core.seq.call(null,vec__7715);
var first__7717 = cljs.core.first.call(null,seq__7716);
var seq__7716__$1 = cljs.core.next.call(null,seq__7716);
var x = first__7717;
var ys = seq__7716__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__7718 = cljs.core.seq.call(null,ys);
var chunk__7719 = null;
var count__7720 = (0);
var i__7721 = (0);
while(true){
if((i__7721 < count__7720)){
var next_line = cljs.core._nth.call(null,chunk__7719,i__7721);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7729 = seq__7718;
var G__7730 = chunk__7719;
var G__7731 = count__7720;
var G__7732 = (i__7721 + (1));
seq__7718 = G__7729;
chunk__7719 = G__7730;
count__7720 = G__7731;
i__7721 = G__7732;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__7718);
if(temp__5720__auto__){
var seq__7718__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7718__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__7718__$1);
var G__7733 = cljs.core.chunk_rest.call(null,seq__7718__$1);
var G__7734 = c__4550__auto__;
var G__7735 = cljs.core.count.call(null,c__4550__auto__);
var G__7736 = (0);
seq__7718 = G__7733;
chunk__7719 = G__7734;
count__7720 = G__7735;
i__7721 = G__7736;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__7718__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7737 = cljs.core.next.call(null,seq__7718__$1);
var G__7738 = null;
var G__7739 = (0);
var G__7740 = (0);
seq__7718 = G__7737;
chunk__7719 = G__7738;
count__7720 = G__7739;
i__7721 = G__7740;
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

var seq__7722_7741 = cljs.core.seq.call(null,docs__$2);
var chunk__7723_7742 = null;
var count__7724_7743 = (0);
var i__7725_7744 = (0);
while(true){
if((i__7725_7744 < count__7724_7743)){
var e_7745 = cljs.core._nth.call(null,chunk__7723_7742,i__7725_7744);
if(cljs.core.truth_(e_7745)){
print_comment_lines.call(null,e_7745);
} else {
}


var G__7746 = seq__7722_7741;
var G__7747 = chunk__7723_7742;
var G__7748 = count__7724_7743;
var G__7749 = (i__7725_7744 + (1));
seq__7722_7741 = G__7746;
chunk__7723_7742 = G__7747;
count__7724_7743 = G__7748;
i__7725_7744 = G__7749;
continue;
} else {
var temp__5720__auto___7750 = cljs.core.seq.call(null,seq__7722_7741);
if(temp__5720__auto___7750){
var seq__7722_7751__$1 = temp__5720__auto___7750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7722_7751__$1)){
var c__4550__auto___7752 = cljs.core.chunk_first.call(null,seq__7722_7751__$1);
var G__7753 = cljs.core.chunk_rest.call(null,seq__7722_7751__$1);
var G__7754 = c__4550__auto___7752;
var G__7755 = cljs.core.count.call(null,c__4550__auto___7752);
var G__7756 = (0);
seq__7722_7741 = G__7753;
chunk__7723_7742 = G__7754;
count__7724_7743 = G__7755;
i__7725_7744 = G__7756;
continue;
} else {
var e_7757 = cljs.core.first.call(null,seq__7722_7751__$1);
if(cljs.core.truth_(e_7757)){
print_comment_lines.call(null,e_7757);
} else {
}


var G__7758 = cljs.core.next.call(null,seq__7722_7751__$1);
var G__7759 = null;
var G__7760 = (0);
var G__7761 = (0);
seq__7722_7741 = G__7758;
chunk__7723_7742 = G__7759;
count__7724_7743 = G__7760;
i__7725_7744 = G__7761;
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
return (function (p1__7728_SHARP_){
return goog.string.startsWith(p1__7728_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__7762){
var map__7763 = p__7762;
var map__7763__$1 = (((((!((map__7763 == null))))?(((((map__7763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7763):map__7763);
var doc = cljs.core.get.call(null,map__7763__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__7763__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__7763__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__7763__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__7763__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7763__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__7763__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__7763__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__7763__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__7765){
var map__7766 = p__7765;
var map__7766__$1 = (((((!((map__7766 == null))))?(((((map__7766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7766):map__7766);
var name = cljs.core.get.call(null,map__7766__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7766__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7766__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__7768_7796 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__7769_7797 = null;
var count__7770_7798 = (0);
var i__7771_7799 = (0);
while(true){
if((i__7771_7799 < count__7770_7798)){
var vec__7778_7800 = cljs.core._nth.call(null,chunk__7769_7797,i__7771_7799);
var i_7801 = cljs.core.nth.call(null,vec__7778_7800,(0),null);
var param_7802 = cljs.core.nth.call(null,vec__7778_7800,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7802);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7803 = seq__7768_7796;
var G__7804 = chunk__7769_7797;
var G__7805 = count__7770_7798;
var G__7806 = (i__7771_7799 + (1));
seq__7768_7796 = G__7803;
chunk__7769_7797 = G__7804;
count__7770_7798 = G__7805;
i__7771_7799 = G__7806;
continue;
} else {
var temp__5720__auto___7807 = cljs.core.seq.call(null,seq__7768_7796);
if(temp__5720__auto___7807){
var seq__7768_7808__$1 = temp__5720__auto___7807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7768_7808__$1)){
var c__4550__auto___7809 = cljs.core.chunk_first.call(null,seq__7768_7808__$1);
var G__7810 = cljs.core.chunk_rest.call(null,seq__7768_7808__$1);
var G__7811 = c__4550__auto___7809;
var G__7812 = cljs.core.count.call(null,c__4550__auto___7809);
var G__7813 = (0);
seq__7768_7796 = G__7810;
chunk__7769_7797 = G__7811;
count__7770_7798 = G__7812;
i__7771_7799 = G__7813;
continue;
} else {
var vec__7781_7814 = cljs.core.first.call(null,seq__7768_7808__$1);
var i_7815 = cljs.core.nth.call(null,vec__7781_7814,(0),null);
var param_7816 = cljs.core.nth.call(null,vec__7781_7814,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7816);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7817 = cljs.core.next.call(null,seq__7768_7808__$1);
var G__7818 = null;
var G__7819 = (0);
var G__7820 = (0);
seq__7768_7796 = G__7817;
chunk__7769_7797 = G__7818;
count__7770_7798 = G__7819;
i__7771_7799 = G__7820;
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

var seq__7784_7821 = cljs.core.seq.call(null,params);
var chunk__7785_7822 = null;
var count__7786_7823 = (0);
var i__7787_7824 = (0);
while(true){
if((i__7787_7824 < count__7786_7823)){
var param_7825 = cljs.core._nth.call(null,chunk__7785_7822,i__7787_7824);
cljs.compiler.emit.call(null,param_7825);

if(cljs.core._EQ_.call(null,param_7825,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7826 = seq__7784_7821;
var G__7827 = chunk__7785_7822;
var G__7828 = count__7786_7823;
var G__7829 = (i__7787_7824 + (1));
seq__7784_7821 = G__7826;
chunk__7785_7822 = G__7827;
count__7786_7823 = G__7828;
i__7787_7824 = G__7829;
continue;
} else {
var temp__5720__auto___7830 = cljs.core.seq.call(null,seq__7784_7821);
if(temp__5720__auto___7830){
var seq__7784_7831__$1 = temp__5720__auto___7830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7784_7831__$1)){
var c__4550__auto___7832 = cljs.core.chunk_first.call(null,seq__7784_7831__$1);
var G__7833 = cljs.core.chunk_rest.call(null,seq__7784_7831__$1);
var G__7834 = c__4550__auto___7832;
var G__7835 = cljs.core.count.call(null,c__4550__auto___7832);
var G__7836 = (0);
seq__7784_7821 = G__7833;
chunk__7785_7822 = G__7834;
count__7786_7823 = G__7835;
i__7787_7824 = G__7836;
continue;
} else {
var param_7837 = cljs.core.first.call(null,seq__7784_7831__$1);
cljs.compiler.emit.call(null,param_7837);

if(cljs.core._EQ_.call(null,param_7837,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7838 = cljs.core.next.call(null,seq__7784_7831__$1);
var G__7839 = null;
var G__7840 = (0);
var G__7841 = (0);
seq__7784_7821 = G__7838;
chunk__7785_7822 = G__7839;
count__7786_7823 = G__7840;
i__7787_7824 = G__7841;
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

var seq__7788_7842 = cljs.core.seq.call(null,params);
var chunk__7789_7843 = null;
var count__7790_7844 = (0);
var i__7791_7845 = (0);
while(true){
if((i__7791_7845 < count__7790_7844)){
var param_7846 = cljs.core._nth.call(null,chunk__7789_7843,i__7791_7845);
cljs.compiler.emit.call(null,param_7846);

if(cljs.core._EQ_.call(null,param_7846,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7848 = seq__7788_7842;
var G__7849 = chunk__7789_7843;
var G__7850 = count__7790_7844;
var G__7851 = (i__7791_7845 + (1));
seq__7788_7842 = G__7848;
chunk__7789_7843 = G__7849;
count__7790_7844 = G__7850;
i__7791_7845 = G__7851;
continue;
} else {
var temp__5720__auto___7853 = cljs.core.seq.call(null,seq__7788_7842);
if(temp__5720__auto___7853){
var seq__7788_7854__$1 = temp__5720__auto___7853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7788_7854__$1)){
var c__4550__auto___7856 = cljs.core.chunk_first.call(null,seq__7788_7854__$1);
var G__7857 = cljs.core.chunk_rest.call(null,seq__7788_7854__$1);
var G__7858 = c__4550__auto___7856;
var G__7859 = cljs.core.count.call(null,c__4550__auto___7856);
var G__7860 = (0);
seq__7788_7842 = G__7857;
chunk__7789_7843 = G__7858;
count__7790_7844 = G__7859;
i__7791_7845 = G__7860;
continue;
} else {
var param_7861 = cljs.core.first.call(null,seq__7788_7854__$1);
cljs.compiler.emit.call(null,param_7861);

if(cljs.core._EQ_.call(null,param_7861,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7862 = cljs.core.next.call(null,seq__7788_7854__$1);
var G__7863 = null;
var G__7864 = (0);
var G__7865 = (0);
seq__7788_7842 = G__7862;
chunk__7789_7843 = G__7863;
count__7790_7844 = G__7864;
i__7791_7845 = G__7865;
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
var seq__7792 = cljs.core.seq.call(null,params);
var chunk__7793 = null;
var count__7794 = (0);
var i__7795 = (0);
while(true){
if((i__7795 < count__7794)){
var param = cljs.core._nth.call(null,chunk__7793,i__7795);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7866 = seq__7792;
var G__7867 = chunk__7793;
var G__7868 = count__7794;
var G__7869 = (i__7795 + (1));
seq__7792 = G__7866;
chunk__7793 = G__7867;
count__7794 = G__7868;
i__7795 = G__7869;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__7792);
if(temp__5720__auto__){
var seq__7792__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7792__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__7792__$1);
var G__7870 = cljs.core.chunk_rest.call(null,seq__7792__$1);
var G__7871 = c__4550__auto__;
var G__7872 = cljs.core.count.call(null,c__4550__auto__);
var G__7873 = (0);
seq__7792 = G__7870;
chunk__7793 = G__7871;
count__7794 = G__7872;
i__7795 = G__7873;
continue;
} else {
var param = cljs.core.first.call(null,seq__7792__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7881 = cljs.core.next.call(null,seq__7792__$1);
var G__7882 = null;
var G__7883 = (0);
var G__7884 = (0);
seq__7792 = G__7881;
chunk__7793 = G__7882;
count__7794 = G__7883;
i__7795 = G__7884;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__7847){
var map__7852 = p__7847;
var map__7852__$1 = (((((!((map__7852 == null))))?(((((map__7852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7852):map__7852);
var expr = cljs.core.get.call(null,map__7852__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__7852__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7852__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7852__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7852__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7852__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
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

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__7874){
var map__7875 = p__7874;
var map__7875__$1 = (((((!((map__7875 == null))))?(((((map__7875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7875):map__7875);
var f = map__7875__$1;
var expr = cljs.core.get.call(null,map__7875__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__7875__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__7875__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__7875__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7875__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7875__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7875__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_7921__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7922 = cljs.compiler.munge.call(null,name_7921__$1);
var delegate_name_7923 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7922),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_7923," = function (");

var seq__7877_7924 = cljs.core.seq.call(null,params);
var chunk__7878_7925 = null;
var count__7879_7926 = (0);
var i__7880_7927 = (0);
while(true){
if((i__7880_7927 < count__7879_7926)){
var param_7928 = cljs.core._nth.call(null,chunk__7878_7925,i__7880_7927);
cljs.compiler.emit.call(null,param_7928);

if(cljs.core._EQ_.call(null,param_7928,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7929 = seq__7877_7924;
var G__7930 = chunk__7878_7925;
var G__7931 = count__7879_7926;
var G__7932 = (i__7880_7927 + (1));
seq__7877_7924 = G__7929;
chunk__7878_7925 = G__7930;
count__7879_7926 = G__7931;
i__7880_7927 = G__7932;
continue;
} else {
var temp__5720__auto___7933 = cljs.core.seq.call(null,seq__7877_7924);
if(temp__5720__auto___7933){
var seq__7877_7934__$1 = temp__5720__auto___7933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7877_7934__$1)){
var c__4550__auto___7935 = cljs.core.chunk_first.call(null,seq__7877_7934__$1);
var G__7936 = cljs.core.chunk_rest.call(null,seq__7877_7934__$1);
var G__7937 = c__4550__auto___7935;
var G__7938 = cljs.core.count.call(null,c__4550__auto___7935);
var G__7939 = (0);
seq__7877_7924 = G__7936;
chunk__7878_7925 = G__7937;
count__7879_7926 = G__7938;
i__7880_7927 = G__7939;
continue;
} else {
var param_7940 = cljs.core.first.call(null,seq__7877_7934__$1);
cljs.compiler.emit.call(null,param_7940);

if(cljs.core._EQ_.call(null,param_7940,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7941 = cljs.core.next.call(null,seq__7877_7934__$1);
var G__7942 = null;
var G__7943 = (0);
var G__7944 = (0);
seq__7877_7924 = G__7941;
chunk__7878_7925 = G__7942;
count__7879_7926 = G__7943;
i__7880_7927 = G__7944;
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

cljs.compiler.emitln.call(null,"var ",mname_7922," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_7961 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_7961,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_7923,".call(this,");

var seq__7885_7965 = cljs.core.seq.call(null,params);
var chunk__7886_7966 = null;
var count__7887_7967 = (0);
var i__7888_7968 = (0);
while(true){
if((i__7888_7968 < count__7887_7967)){
var param_7969 = cljs.core._nth.call(null,chunk__7886_7966,i__7888_7968);
cljs.compiler.emit.call(null,param_7969);

if(cljs.core._EQ_.call(null,param_7969,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7970 = seq__7885_7965;
var G__7971 = chunk__7886_7966;
var G__7972 = count__7887_7967;
var G__7973 = (i__7888_7968 + (1));
seq__7885_7965 = G__7970;
chunk__7886_7966 = G__7971;
count__7887_7967 = G__7972;
i__7888_7968 = G__7973;
continue;
} else {
var temp__5720__auto___7974 = cljs.core.seq.call(null,seq__7885_7965);
if(temp__5720__auto___7974){
var seq__7885_7975__$1 = temp__5720__auto___7974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7885_7975__$1)){
var c__4550__auto___7976 = cljs.core.chunk_first.call(null,seq__7885_7975__$1);
var G__7977 = cljs.core.chunk_rest.call(null,seq__7885_7975__$1);
var G__7978 = c__4550__auto___7976;
var G__7979 = cljs.core.count.call(null,c__4550__auto___7976);
var G__7980 = (0);
seq__7885_7965 = G__7977;
chunk__7886_7966 = G__7978;
count__7887_7967 = G__7979;
i__7888_7968 = G__7980;
continue;
} else {
var param_7981 = cljs.core.first.call(null,seq__7885_7975__$1);
cljs.compiler.emit.call(null,param_7981);

if(cljs.core._EQ_.call(null,param_7981,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7985 = cljs.core.next.call(null,seq__7885_7975__$1);
var G__7986 = null;
var G__7987 = (0);
var G__7988 = (0);
seq__7885_7965 = G__7985;
chunk__7886_7966 = G__7986;
count__7887_7967 = G__7987;
i__7888_7968 = G__7988;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_7922,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_7922,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_7921__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_7922,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_7923,";");

cljs.compiler.emitln.call(null,"return ",mname_7922,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__7892){
var map__7893 = p__7892;
var map__7893__$1 = (((((!((map__7893 == null))))?(((((map__7893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7893):map__7893);
var variadic = cljs.core.get.call(null,map__7893__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__7893__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7893__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__7893__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__7893__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__7893__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__7893__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__7893,map__7893__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7889_SHARP_){
var and__4120__auto__ = p1__7889_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__7889_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__7893,map__7893__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_7999__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_8000 = cljs.compiler.munge.call(null,name_7999__$1);
var maxparams_8001 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_8002 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_7999__$1,mname_8000,maxparams_8001,loop_locals,map__7893,map__7893__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_8000),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_7999__$1,mname_8000,maxparams_8001,loop_locals,map__7893,map__7893__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_8003 = cljs.core.sort_by.call(null,((function (name_7999__$1,mname_8000,maxparams_8001,mmap_8002,loop_locals,map__7893,map__7893__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7890_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7890_SHARP_)));
});})(name_7999__$1,mname_8000,maxparams_8001,mmap_8002,loop_locals,map__7893,map__7893__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_8002));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_8000," = null;");

var seq__7895_8007 = cljs.core.seq.call(null,ms_8003);
var chunk__7896_8008 = null;
var count__7897_8009 = (0);
var i__7898_8010 = (0);
while(true){
if((i__7898_8010 < count__7897_8009)){
var vec__7905_8011 = cljs.core._nth.call(null,chunk__7896_8008,i__7898_8010);
var n_8012 = cljs.core.nth.call(null,vec__7905_8011,(0),null);
var meth_8013 = cljs.core.nth.call(null,vec__7905_8011,(1),null);
cljs.compiler.emits.call(null,"var ",n_8012," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8013))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_8013);
} else {
cljs.compiler.emit_fn_method.call(null,meth_8013);
}

cljs.compiler.emitln.call(null,";");


var G__8014 = seq__7895_8007;
var G__8015 = chunk__7896_8008;
var G__8016 = count__7897_8009;
var G__8017 = (i__7898_8010 + (1));
seq__7895_8007 = G__8014;
chunk__7896_8008 = G__8015;
count__7897_8009 = G__8016;
i__7898_8010 = G__8017;
continue;
} else {
var temp__5720__auto___8018 = cljs.core.seq.call(null,seq__7895_8007);
if(temp__5720__auto___8018){
var seq__7895_8019__$1 = temp__5720__auto___8018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7895_8019__$1)){
var c__4550__auto___8020 = cljs.core.chunk_first.call(null,seq__7895_8019__$1);
var G__8021 = cljs.core.chunk_rest.call(null,seq__7895_8019__$1);
var G__8022 = c__4550__auto___8020;
var G__8023 = cljs.core.count.call(null,c__4550__auto___8020);
var G__8024 = (0);
seq__7895_8007 = G__8021;
chunk__7896_8008 = G__8022;
count__7897_8009 = G__8023;
i__7898_8010 = G__8024;
continue;
} else {
var vec__7908_8025 = cljs.core.first.call(null,seq__7895_8019__$1);
var n_8026 = cljs.core.nth.call(null,vec__7908_8025,(0),null);
var meth_8027 = cljs.core.nth.call(null,vec__7908_8025,(1),null);
cljs.compiler.emits.call(null,"var ",n_8026," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8027))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_8027);
} else {
cljs.compiler.emit_fn_method.call(null,meth_8027);
}

cljs.compiler.emitln.call(null,";");


var G__8028 = cljs.core.next.call(null,seq__7895_8019__$1);
var G__8029 = null;
var G__8030 = (0);
var G__8031 = (0);
seq__7895_8007 = G__8028;
chunk__7896_8008 = G__8029;
count__7897_8009 = G__8030;
i__7898_8010 = G__8031;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_8000," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_8001),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_8001)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_8001));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__7911_8032 = cljs.core.seq.call(null,ms_8003);
var chunk__7912_8033 = null;
var count__7913_8034 = (0);
var i__7914_8035 = (0);
while(true){
if((i__7914_8035 < count__7913_8034)){
var vec__7945_8036 = cljs.core._nth.call(null,chunk__7912_8033,i__7914_8035);
var n_8037 = cljs.core.nth.call(null,vec__7945_8036,(0),null);
var meth_8038 = cljs.core.nth.call(null,vec__7945_8036,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8038))){
cljs.compiler.emitln.call(null,"default:");

var restarg_8039 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_8039," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_8040 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_8039," = new cljs.core.IndexedSeq(",a_8040,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_8037,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_8001)),(((cljs.core.count.call(null,maxparams_8001) > (1)))?", ":null),restarg_8039,");");
} else {
var pcnt_8041 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_8038));
cljs.compiler.emitln.call(null,"case ",pcnt_8041,":");

cljs.compiler.emitln.call(null,"return ",n_8037,".call(this",(((pcnt_8041 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_8041,maxparams_8001)),null,(1),null)),(2),null))),");");
}


var G__8042 = seq__7911_8032;
var G__8043 = chunk__7912_8033;
var G__8044 = count__7913_8034;
var G__8045 = (i__7914_8035 + (1));
seq__7911_8032 = G__8042;
chunk__7912_8033 = G__8043;
count__7913_8034 = G__8044;
i__7914_8035 = G__8045;
continue;
} else {
var temp__5720__auto___8046 = cljs.core.seq.call(null,seq__7911_8032);
if(temp__5720__auto___8046){
var seq__7911_8047__$1 = temp__5720__auto___8046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7911_8047__$1)){
var c__4550__auto___8048 = cljs.core.chunk_first.call(null,seq__7911_8047__$1);
var G__8049 = cljs.core.chunk_rest.call(null,seq__7911_8047__$1);
var G__8050 = c__4550__auto___8048;
var G__8051 = cljs.core.count.call(null,c__4550__auto___8048);
var G__8052 = (0);
seq__7911_8032 = G__8049;
chunk__7912_8033 = G__8050;
count__7913_8034 = G__8051;
i__7914_8035 = G__8052;
continue;
} else {
var vec__7948_8053 = cljs.core.first.call(null,seq__7911_8047__$1);
var n_8054 = cljs.core.nth.call(null,vec__7948_8053,(0),null);
var meth_8055 = cljs.core.nth.call(null,vec__7948_8053,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8055))){
cljs.compiler.emitln.call(null,"default:");

var restarg_8058 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_8058," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_8060 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_8058," = new cljs.core.IndexedSeq(",a_8060,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_8054,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_8001)),(((cljs.core.count.call(null,maxparams_8001) > (1)))?", ":null),restarg_8058,");");
} else {
var pcnt_8061 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_8055));
cljs.compiler.emitln.call(null,"case ",pcnt_8061,":");

cljs.compiler.emitln.call(null,"return ",n_8054,".call(this",(((pcnt_8061 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_8061,maxparams_8001)),null,(1),null)),(2),null))),");");
}


var G__8062 = cljs.core.next.call(null,seq__7911_8047__$1);
var G__8063 = null;
var G__8064 = (0);
var G__8065 = (0);
seq__7911_8032 = G__8062;
chunk__7912_8033 = G__8063;
count__7913_8034 = G__8064;
i__7914_8035 = G__8065;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_8066 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_8003)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_8066,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_8000,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_8000,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_7999__$1,mname_8000,maxparams_8001,mmap_8002,ms_8003,loop_locals,map__7893,map__7893__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7891_SHARP_){
var vec__7951 = p1__7891_SHARP_;
var n = cljs.core.nth.call(null,vec__7951,(0),null);
var m = cljs.core.nth.call(null,vec__7951,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_7999__$1,mname_8000,maxparams_8001,mmap_8002,ms_8003,loop_locals,map__7893,map__7893__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_8003),".cljs$lang$applyTo;");
} else {
}

var seq__7954_8069 = cljs.core.seq.call(null,ms_8003);
var chunk__7955_8070 = null;
var count__7956_8071 = (0);
var i__7957_8072 = (0);
while(true){
if((i__7957_8072 < count__7956_8071)){
var vec__7982_8073 = cljs.core._nth.call(null,chunk__7955_8070,i__7957_8072);
var n_8074 = cljs.core.nth.call(null,vec__7982_8073,(0),null);
var meth_8075 = cljs.core.nth.call(null,vec__7982_8073,(1),null);
var c_8076 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_8075));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8075))){
cljs.compiler.emitln.call(null,mname_8000,".cljs$core$IFn$_invoke$arity$variadic = ",n_8074,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_8000,".cljs$core$IFn$_invoke$arity$",c_8076," = ",n_8074,";");
}


var G__8077 = seq__7954_8069;
var G__8078 = chunk__7955_8070;
var G__8079 = count__7956_8071;
var G__8080 = (i__7957_8072 + (1));
seq__7954_8069 = G__8077;
chunk__7955_8070 = G__8078;
count__7956_8071 = G__8079;
i__7957_8072 = G__8080;
continue;
} else {
var temp__5720__auto___8085 = cljs.core.seq.call(null,seq__7954_8069);
if(temp__5720__auto___8085){
var seq__7954_8086__$1 = temp__5720__auto___8085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7954_8086__$1)){
var c__4550__auto___8087 = cljs.core.chunk_first.call(null,seq__7954_8086__$1);
var G__8088 = cljs.core.chunk_rest.call(null,seq__7954_8086__$1);
var G__8089 = c__4550__auto___8087;
var G__8090 = cljs.core.count.call(null,c__4550__auto___8087);
var G__8091 = (0);
seq__7954_8069 = G__8088;
chunk__7955_8070 = G__8089;
count__7956_8071 = G__8090;
i__7957_8072 = G__8091;
continue;
} else {
var vec__7989_8092 = cljs.core.first.call(null,seq__7954_8086__$1);
var n_8093 = cljs.core.nth.call(null,vec__7989_8092,(0),null);
var meth_8094 = cljs.core.nth.call(null,vec__7989_8092,(1),null);
var c_8096 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_8094));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8094))){
cljs.compiler.emitln.call(null,mname_8000,".cljs$core$IFn$_invoke$arity$variadic = ",n_8093,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_8000,".cljs$core$IFn$_invoke$arity$",c_8096," = ",n_8093,";");
}


var G__8098 = cljs.core.next.call(null,seq__7954_8086__$1);
var G__8099 = null;
var G__8100 = (0);
var G__8101 = (0);
seq__7954_8069 = G__8098;
chunk__7955_8070 = G__8099;
count__7956_8071 = G__8100;
i__7957_8072 = G__8101;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_8000,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__7992){
var map__7993 = p__7992;
var map__7993__$1 = (((((!((map__7993 == null))))?(((((map__7993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7993):map__7993);
var statements = cljs.core.get.call(null,map__7993__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__7993__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__7993__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__7995_8102 = cljs.core.seq.call(null,statements);
var chunk__7996_8103 = null;
var count__7997_8104 = (0);
var i__7998_8105 = (0);
while(true){
if((i__7998_8105 < count__7997_8104)){
var s_8106 = cljs.core._nth.call(null,chunk__7996_8103,i__7998_8105);
cljs.compiler.emitln.call(null,s_8106);


var G__8107 = seq__7995_8102;
var G__8108 = chunk__7996_8103;
var G__8109 = count__7997_8104;
var G__8110 = (i__7998_8105 + (1));
seq__7995_8102 = G__8107;
chunk__7996_8103 = G__8108;
count__7997_8104 = G__8109;
i__7998_8105 = G__8110;
continue;
} else {
var temp__5720__auto___8111 = cljs.core.seq.call(null,seq__7995_8102);
if(temp__5720__auto___8111){
var seq__7995_8112__$1 = temp__5720__auto___8111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7995_8112__$1)){
var c__4550__auto___8113 = cljs.core.chunk_first.call(null,seq__7995_8112__$1);
var G__8115 = cljs.core.chunk_rest.call(null,seq__7995_8112__$1);
var G__8116 = c__4550__auto___8113;
var G__8117 = cljs.core.count.call(null,c__4550__auto___8113);
var G__8118 = (0);
seq__7995_8102 = G__8115;
chunk__7996_8103 = G__8116;
count__7997_8104 = G__8117;
i__7998_8105 = G__8118;
continue;
} else {
var s_8119 = cljs.core.first.call(null,seq__7995_8112__$1);
cljs.compiler.emitln.call(null,s_8119);


var G__8121 = cljs.core.next.call(null,seq__7995_8112__$1);
var G__8122 = null;
var G__8123 = (0);
var G__8124 = (0);
seq__7995_8102 = G__8121;
chunk__7996_8103 = G__8122;
count__7997_8104 = G__8123;
i__7998_8105 = G__8124;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__8004){
var map__8005 = p__8004;
var map__8005__$1 = (((((!((map__8005 == null))))?(((((map__8005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8005):map__8005);
var try$ = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__8005__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__8056,is_loop){
var map__8057 = p__8056;
var map__8057__$1 = (((((!((map__8057 == null))))?(((((map__8057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8057):map__8057);
var expr = cljs.core.get.call(null,map__8057__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__8057__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__8057__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__8067_8129 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__8068_8130 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__8067_8129,context,map__8057,map__8057__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__8067_8129,context,map__8057,map__8057__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__8068_8130;

try{var seq__8081_8133 = cljs.core.seq.call(null,bindings);
var chunk__8082_8134 = null;
var count__8083_8135 = (0);
var i__8084_8136 = (0);
while(true){
if((i__8084_8136 < count__8083_8135)){
var map__8125_8138 = cljs.core._nth.call(null,chunk__8082_8134,i__8084_8136);
var map__8125_8139__$1 = (((((!((map__8125_8138 == null))))?(((((map__8125_8138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8125_8138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8125_8138):map__8125_8138);
var binding_8140 = map__8125_8139__$1;
var init_8141 = cljs.core.get.call(null,map__8125_8139__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_8140);

cljs.compiler.emitln.call(null," = ",init_8141,";");


var G__8142 = seq__8081_8133;
var G__8143 = chunk__8082_8134;
var G__8144 = count__8083_8135;
var G__8145 = (i__8084_8136 + (1));
seq__8081_8133 = G__8142;
chunk__8082_8134 = G__8143;
count__8083_8135 = G__8144;
i__8084_8136 = G__8145;
continue;
} else {
var temp__5720__auto___8146 = cljs.core.seq.call(null,seq__8081_8133);
if(temp__5720__auto___8146){
var seq__8081_8147__$1 = temp__5720__auto___8146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8081_8147__$1)){
var c__4550__auto___8148 = cljs.core.chunk_first.call(null,seq__8081_8147__$1);
var G__8149 = cljs.core.chunk_rest.call(null,seq__8081_8147__$1);
var G__8150 = c__4550__auto___8148;
var G__8151 = cljs.core.count.call(null,c__4550__auto___8148);
var G__8152 = (0);
seq__8081_8133 = G__8149;
chunk__8082_8134 = G__8150;
count__8083_8135 = G__8151;
i__8084_8136 = G__8152;
continue;
} else {
var map__8127_8153 = cljs.core.first.call(null,seq__8081_8147__$1);
var map__8127_8154__$1 = (((((!((map__8127_8153 == null))))?(((((map__8127_8153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8127_8153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8127_8153):map__8127_8153);
var binding_8155 = map__8127_8154__$1;
var init_8156 = cljs.core.get.call(null,map__8127_8154__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_8155);

cljs.compiler.emitln.call(null," = ",init_8156,";");


var G__8157 = cljs.core.next.call(null,seq__8081_8147__$1);
var G__8158 = null;
var G__8159 = (0);
var G__8160 = (0);
seq__8081_8133 = G__8157;
chunk__8082_8134 = G__8158;
count__8083_8135 = G__8159;
i__8084_8136 = G__8160;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__8067_8129;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__8131){
var map__8132 = p__8131;
var map__8132__$1 = (((((!((map__8132 == null))))?(((((map__8132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8132):map__8132);
var frame = cljs.core.get.call(null,map__8132__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__8132__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__8132__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___8164 = cljs.core.count.call(null,exprs);
var i_8165 = (0);
while(true){
if((i_8165 < n__4607__auto___8164)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_8165)," = ",exprs.call(null,i_8165),";");

var G__8166 = (i_8165 + (1));
i_8165 = G__8166;
continue;
} else {
}
break;
}

var n__4607__auto___8167 = cljs.core.count.call(null,exprs);
var i_8168 = (0);
while(true){
if((i_8168 < n__4607__auto___8167)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_8168))," = ",temps.call(null,i_8168),";");

var G__8169 = (i_8168 + (1));
i_8168 = G__8169;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__8161){
var map__8162 = p__8161;
var map__8162__$1 = (((((!((map__8162 == null))))?(((((map__8162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8162):map__8162);
var expr = cljs.core.get.call(null,map__8162__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__8162__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__8162__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__8170_8182 = cljs.core.seq.call(null,bindings);
var chunk__8171_8183 = null;
var count__8172_8184 = (0);
var i__8173_8185 = (0);
while(true){
if((i__8173_8185 < count__8172_8184)){
var map__8178_8186 = cljs.core._nth.call(null,chunk__8171_8183,i__8173_8185);
var map__8178_8187__$1 = (((((!((map__8178_8186 == null))))?(((((map__8178_8186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8178_8186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8178_8186):map__8178_8186);
var binding_8188 = map__8178_8187__$1;
var init_8189 = cljs.core.get.call(null,map__8178_8187__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_8188)," = ",init_8189,";");


var G__8190 = seq__8170_8182;
var G__8191 = chunk__8171_8183;
var G__8192 = count__8172_8184;
var G__8193 = (i__8173_8185 + (1));
seq__8170_8182 = G__8190;
chunk__8171_8183 = G__8191;
count__8172_8184 = G__8192;
i__8173_8185 = G__8193;
continue;
} else {
var temp__5720__auto___8194 = cljs.core.seq.call(null,seq__8170_8182);
if(temp__5720__auto___8194){
var seq__8170_8195__$1 = temp__5720__auto___8194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8170_8195__$1)){
var c__4550__auto___8196 = cljs.core.chunk_first.call(null,seq__8170_8195__$1);
var G__8197 = cljs.core.chunk_rest.call(null,seq__8170_8195__$1);
var G__8198 = c__4550__auto___8196;
var G__8199 = cljs.core.count.call(null,c__4550__auto___8196);
var G__8200 = (0);
seq__8170_8182 = G__8197;
chunk__8171_8183 = G__8198;
count__8172_8184 = G__8199;
i__8173_8185 = G__8200;
continue;
} else {
var map__8180_8201 = cljs.core.first.call(null,seq__8170_8195__$1);
var map__8180_8202__$1 = (((((!((map__8180_8201 == null))))?(((((map__8180_8201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8180_8201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8180_8201):map__8180_8201);
var binding_8203 = map__8180_8202__$1;
var init_8204 = cljs.core.get.call(null,map__8180_8202__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_8203)," = ",init_8204,";");


var G__8207 = cljs.core.next.call(null,seq__8170_8195__$1);
var G__8208 = null;
var G__8209 = (0);
var G__8210 = (0);
seq__8170_8182 = G__8207;
chunk__8171_8183 = G__8208;
count__8172_8184 = G__8209;
i__8173_8185 = G__8210;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__8211){
var map__8212 = p__8211;
var map__8212__$1 = (((((!((map__8212 == null))))?(((((map__8212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8212):map__8212);
var expr = map__8212__$1;
var f = cljs.core.get.call(null,map__8212__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__8212__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__8212__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__8214 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8212,map__8212__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8212,map__8212__$1,expr,f,args,env){
return (function (p1__8205_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__8205_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8212,map__8212__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8212,map__8212__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8212,map__8212__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8212,map__8212__$1,expr,f,args,env){
return (function (p1__8206_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__8206_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8212,map__8212__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8212,map__8212__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__8214,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__8214,(1),null);
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_8229 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_8229,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_8231 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_8231,args)),(((mfa_8231 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_8231,args)),"], 0))");
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
var fprop_8234 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_8234," ? ",f__$1,fprop_8234,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_8234," ? ",f__$1,fprop_8234,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__8217){
var map__8218 = p__8217;
var map__8218__$1 = (((((!((map__8218 == null))))?(((((map__8218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8218):map__8218);
var ctor = cljs.core.get.call(null,map__8218__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__8218__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__8218__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__8220){
var map__8221 = p__8220;
var map__8221__$1 = (((((!((map__8221 == null))))?(((((map__8221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8221):map__8221);
var target = cljs.core.get.call(null,map__8221__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__8221__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__8221__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
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
var map__8223 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__8223__$1 = (((((!((map__8223 == null))))?(((((map__8223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8223):map__8223);
var options = cljs.core.get.call(null,map__8223__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__8223__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__8224 = options;
var map__8224__$1 = (((((!((map__8224 == null))))?(((((map__8224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8224):map__8224);
var target = cljs.core.get.call(null,map__8224__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__8224__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__8225 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__8232 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__8232__$1 = (((((!((map__8232 == null))))?(((((map__8232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8232):map__8232);
var node_libs = cljs.core.get.call(null,map__8232__$1,true);
var libs_to_load = cljs.core.get.call(null,map__8232__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__8225,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__8225,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__8235_8258 = cljs.core.seq.call(null,libs_to_load);
var chunk__8236_8259 = null;
var count__8237_8260 = (0);
var i__8238_8261 = (0);
while(true){
if((i__8238_8261 < count__8237_8260)){
var lib_8262 = cljs.core._nth.call(null,chunk__8236_8259,i__8238_8261);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_8262)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8262),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8262),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8262),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8262),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_8262,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8262),"');");
}

}
}
}


var G__8266 = seq__8235_8258;
var G__8267 = chunk__8236_8259;
var G__8268 = count__8237_8260;
var G__8269 = (i__8238_8261 + (1));
seq__8235_8258 = G__8266;
chunk__8236_8259 = G__8267;
count__8237_8260 = G__8268;
i__8238_8261 = G__8269;
continue;
} else {
var temp__5720__auto___8270 = cljs.core.seq.call(null,seq__8235_8258);
if(temp__5720__auto___8270){
var seq__8235_8271__$1 = temp__5720__auto___8270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8235_8271__$1)){
var c__4550__auto___8272 = cljs.core.chunk_first.call(null,seq__8235_8271__$1);
var G__8273 = cljs.core.chunk_rest.call(null,seq__8235_8271__$1);
var G__8274 = c__4550__auto___8272;
var G__8275 = cljs.core.count.call(null,c__4550__auto___8272);
var G__8276 = (0);
seq__8235_8258 = G__8273;
chunk__8236_8259 = G__8274;
count__8237_8260 = G__8275;
i__8238_8261 = G__8276;
continue;
} else {
var lib_8277 = cljs.core.first.call(null,seq__8235_8271__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_8277)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8277),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8277),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8277),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8277),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_8277,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8277),"');");
}

}
}
}


var G__8278 = cljs.core.next.call(null,seq__8235_8271__$1);
var G__8279 = null;
var G__8280 = (0);
var G__8281 = (0);
seq__8235_8258 = G__8278;
chunk__8236_8259 = G__8279;
count__8237_8260 = G__8280;
i__8238_8261 = G__8281;
continue;
}
} else {
}
}
break;
}

var seq__8239_8282 = cljs.core.seq.call(null,node_libs);
var chunk__8240_8283 = null;
var count__8241_8284 = (0);
var i__8242_8285 = (0);
while(true){
if((i__8242_8285 < count__8241_8284)){
var lib_8286 = cljs.core._nth.call(null,chunk__8240_8283,i__8242_8285);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_8286)," = require('",lib_8286,"');");


var G__8287 = seq__8239_8282;
var G__8288 = chunk__8240_8283;
var G__8289 = count__8241_8284;
var G__8290 = (i__8242_8285 + (1));
seq__8239_8282 = G__8287;
chunk__8240_8283 = G__8288;
count__8241_8284 = G__8289;
i__8242_8285 = G__8290;
continue;
} else {
var temp__5720__auto___8291 = cljs.core.seq.call(null,seq__8239_8282);
if(temp__5720__auto___8291){
var seq__8239_8293__$1 = temp__5720__auto___8291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8239_8293__$1)){
var c__4550__auto___8295 = cljs.core.chunk_first.call(null,seq__8239_8293__$1);
var G__8296 = cljs.core.chunk_rest.call(null,seq__8239_8293__$1);
var G__8297 = c__4550__auto___8295;
var G__8298 = cljs.core.count.call(null,c__4550__auto___8295);
var G__8299 = (0);
seq__8239_8282 = G__8296;
chunk__8240_8283 = G__8297;
count__8241_8284 = G__8298;
i__8242_8285 = G__8299;
continue;
} else {
var lib_8300 = cljs.core.first.call(null,seq__8239_8293__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_8300)," = require('",lib_8300,"');");


var G__8302 = cljs.core.next.call(null,seq__8239_8293__$1);
var G__8303 = null;
var G__8304 = (0);
var G__8305 = (0);
seq__8239_8282 = G__8302;
chunk__8240_8283 = G__8303;
count__8241_8284 = G__8304;
i__8242_8285 = G__8305;
continue;
}
} else {
}
}
break;
}

var seq__8243_8306 = cljs.core.seq.call(null,global_exports_libs);
var chunk__8244_8307 = null;
var count__8245_8308 = (0);
var i__8246_8309 = (0);
while(true){
if((i__8246_8309 < count__8245_8308)){
var lib_8310 = cljs.core._nth.call(null,chunk__8244_8307,i__8246_8309);
var map__8251_8311 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_8310));
var map__8251_8312__$1 = (((((!((map__8251_8311 == null))))?(((((map__8251_8311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8251_8311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8251_8311):map__8251_8311);
var global_exports_8313 = cljs.core.get.call(null,map__8251_8312__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_8313,lib_8310);


var G__8314 = seq__8243_8306;
var G__8315 = chunk__8244_8307;
var G__8316 = count__8245_8308;
var G__8317 = (i__8246_8309 + (1));
seq__8243_8306 = G__8314;
chunk__8244_8307 = G__8315;
count__8245_8308 = G__8316;
i__8246_8309 = G__8317;
continue;
} else {
var temp__5720__auto___8318 = cljs.core.seq.call(null,seq__8243_8306);
if(temp__5720__auto___8318){
var seq__8243_8319__$1 = temp__5720__auto___8318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8243_8319__$1)){
var c__4550__auto___8320 = cljs.core.chunk_first.call(null,seq__8243_8319__$1);
var G__8321 = cljs.core.chunk_rest.call(null,seq__8243_8319__$1);
var G__8322 = c__4550__auto___8320;
var G__8323 = cljs.core.count.call(null,c__4550__auto___8320);
var G__8324 = (0);
seq__8243_8306 = G__8321;
chunk__8244_8307 = G__8322;
count__8245_8308 = G__8323;
i__8246_8309 = G__8324;
continue;
} else {
var lib_8325 = cljs.core.first.call(null,seq__8243_8319__$1);
var map__8253_8326 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_8325));
var map__8253_8327__$1 = (((((!((map__8253_8326 == null))))?(((((map__8253_8326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8253_8326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8253_8326):map__8253_8326);
var global_exports_8328 = cljs.core.get.call(null,map__8253_8327__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_8328,lib_8325);


var G__8329 = cljs.core.next.call(null,seq__8243_8319__$1);
var G__8330 = null;
var G__8331 = (0);
var G__8332 = (0);
seq__8243_8306 = G__8329;
chunk__8244_8307 = G__8330;
count__8245_8308 = G__8331;
i__8246_8309 = G__8332;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__8255){
var map__8256 = p__8255;
var map__8256__$1 = (((((!((map__8256 == null))))?(((((map__8256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8256):map__8256);
var name = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__8263){
var map__8264 = p__8263;
var map__8264__$1 = (((((!((map__8264 == null))))?(((((map__8264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8264):map__8264);
var name = cljs.core.get.call(null,map__8264__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__8264__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__8264__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__8264__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__8264__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__8264__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__8264__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__8292){
var map__8294 = p__8292;
var map__8294__$1 = (((((!((map__8294 == null))))?(((((map__8294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8294):map__8294);
var t = cljs.core.get.call(null,map__8294__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__8294__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__8294__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__8294__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__8294__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__8333_8359 = cljs.core.seq.call(null,protocols);
var chunk__8334_8360 = null;
var count__8335_8361 = (0);
var i__8336_8362 = (0);
while(true){
if((i__8336_8362 < count__8335_8361)){
var protocol_8364 = cljs.core._nth.call(null,chunk__8334_8360,i__8336_8362);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8364)),"}");


var G__8365 = seq__8333_8359;
var G__8366 = chunk__8334_8360;
var G__8367 = count__8335_8361;
var G__8368 = (i__8336_8362 + (1));
seq__8333_8359 = G__8365;
chunk__8334_8360 = G__8366;
count__8335_8361 = G__8367;
i__8336_8362 = G__8368;
continue;
} else {
var temp__5720__auto___8369 = cljs.core.seq.call(null,seq__8333_8359);
if(temp__5720__auto___8369){
var seq__8333_8370__$1 = temp__5720__auto___8369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8333_8370__$1)){
var c__4550__auto___8371 = cljs.core.chunk_first.call(null,seq__8333_8370__$1);
var G__8372 = cljs.core.chunk_rest.call(null,seq__8333_8370__$1);
var G__8373 = c__4550__auto___8371;
var G__8374 = cljs.core.count.call(null,c__4550__auto___8371);
var G__8375 = (0);
seq__8333_8359 = G__8372;
chunk__8334_8360 = G__8373;
count__8335_8361 = G__8374;
i__8336_8362 = G__8375;
continue;
} else {
var protocol_8376 = cljs.core.first.call(null,seq__8333_8370__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8376)),"}");


var G__8377 = cljs.core.next.call(null,seq__8333_8370__$1);
var G__8378 = null;
var G__8379 = (0);
var G__8380 = (0);
seq__8333_8359 = G__8377;
chunk__8334_8360 = G__8378;
count__8335_8361 = G__8379;
i__8336_8362 = G__8380;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__8337_8381 = cljs.core.seq.call(null,fields__$1);
var chunk__8338_8382 = null;
var count__8339_8383 = (0);
var i__8340_8384 = (0);
while(true){
if((i__8340_8384 < count__8339_8383)){
var fld_8385 = cljs.core._nth.call(null,chunk__8338_8382,i__8340_8384);
cljs.compiler.emitln.call(null,"this.",fld_8385," = ",fld_8385,";");


var G__8386 = seq__8337_8381;
var G__8387 = chunk__8338_8382;
var G__8388 = count__8339_8383;
var G__8389 = (i__8340_8384 + (1));
seq__8337_8381 = G__8386;
chunk__8338_8382 = G__8387;
count__8339_8383 = G__8388;
i__8340_8384 = G__8389;
continue;
} else {
var temp__5720__auto___8390 = cljs.core.seq.call(null,seq__8337_8381);
if(temp__5720__auto___8390){
var seq__8337_8391__$1 = temp__5720__auto___8390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8337_8391__$1)){
var c__4550__auto___8392 = cljs.core.chunk_first.call(null,seq__8337_8391__$1);
var G__8393 = cljs.core.chunk_rest.call(null,seq__8337_8391__$1);
var G__8394 = c__4550__auto___8392;
var G__8395 = cljs.core.count.call(null,c__4550__auto___8392);
var G__8396 = (0);
seq__8337_8381 = G__8393;
chunk__8338_8382 = G__8394;
count__8339_8383 = G__8395;
i__8340_8384 = G__8396;
continue;
} else {
var fld_8397 = cljs.core.first.call(null,seq__8337_8391__$1);
cljs.compiler.emitln.call(null,"this.",fld_8397," = ",fld_8397,";");


var G__8398 = cljs.core.next.call(null,seq__8337_8391__$1);
var G__8399 = null;
var G__8400 = (0);
var G__8401 = (0);
seq__8337_8381 = G__8398;
chunk__8338_8382 = G__8399;
count__8339_8383 = G__8400;
i__8340_8384 = G__8401;
continue;
}
} else {
}
}
break;
}

var seq__8341_8402 = cljs.core.seq.call(null,pmasks);
var chunk__8342_8403 = null;
var count__8343_8404 = (0);
var i__8344_8405 = (0);
while(true){
if((i__8344_8405 < count__8343_8404)){
var vec__8351_8406 = cljs.core._nth.call(null,chunk__8342_8403,i__8344_8405);
var pno_8407 = cljs.core.nth.call(null,vec__8351_8406,(0),null);
var pmask_8408 = cljs.core.nth.call(null,vec__8351_8406,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8407,"$ = ",pmask_8408,";");


var G__8409 = seq__8341_8402;
var G__8410 = chunk__8342_8403;
var G__8411 = count__8343_8404;
var G__8412 = (i__8344_8405 + (1));
seq__8341_8402 = G__8409;
chunk__8342_8403 = G__8410;
count__8343_8404 = G__8411;
i__8344_8405 = G__8412;
continue;
} else {
var temp__5720__auto___8413 = cljs.core.seq.call(null,seq__8341_8402);
if(temp__5720__auto___8413){
var seq__8341_8414__$1 = temp__5720__auto___8413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8341_8414__$1)){
var c__4550__auto___8419 = cljs.core.chunk_first.call(null,seq__8341_8414__$1);
var G__8420 = cljs.core.chunk_rest.call(null,seq__8341_8414__$1);
var G__8421 = c__4550__auto___8419;
var G__8422 = cljs.core.count.call(null,c__4550__auto___8419);
var G__8423 = (0);
seq__8341_8402 = G__8420;
chunk__8342_8403 = G__8421;
count__8343_8404 = G__8422;
i__8344_8405 = G__8423;
continue;
} else {
var vec__8354_8424 = cljs.core.first.call(null,seq__8341_8414__$1);
var pno_8425 = cljs.core.nth.call(null,vec__8354_8424,(0),null);
var pmask_8426 = cljs.core.nth.call(null,vec__8354_8424,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8425,"$ = ",pmask_8426,";");


var G__8427 = cljs.core.next.call(null,seq__8341_8414__$1);
var G__8428 = null;
var G__8429 = (0);
var G__8430 = (0);
seq__8341_8402 = G__8427;
chunk__8342_8403 = G__8428;
count__8343_8404 = G__8429;
i__8344_8405 = G__8430;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__8357){
var map__8358 = p__8357;
var map__8358__$1 = (((((!((map__8358 == null))))?(((((map__8358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8358):map__8358);
var t = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__8415_8454 = cljs.core.seq.call(null,protocols);
var chunk__8416_8455 = null;
var count__8417_8456 = (0);
var i__8418_8457 = (0);
while(true){
if((i__8418_8457 < count__8417_8456)){
var protocol_8458 = cljs.core._nth.call(null,chunk__8416_8455,i__8418_8457);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8458)),"}");


var G__8459 = seq__8415_8454;
var G__8460 = chunk__8416_8455;
var G__8461 = count__8417_8456;
var G__8462 = (i__8418_8457 + (1));
seq__8415_8454 = G__8459;
chunk__8416_8455 = G__8460;
count__8417_8456 = G__8461;
i__8418_8457 = G__8462;
continue;
} else {
var temp__5720__auto___8463 = cljs.core.seq.call(null,seq__8415_8454);
if(temp__5720__auto___8463){
var seq__8415_8464__$1 = temp__5720__auto___8463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8415_8464__$1)){
var c__4550__auto___8465 = cljs.core.chunk_first.call(null,seq__8415_8464__$1);
var G__8466 = cljs.core.chunk_rest.call(null,seq__8415_8464__$1);
var G__8467 = c__4550__auto___8465;
var G__8468 = cljs.core.count.call(null,c__4550__auto___8465);
var G__8469 = (0);
seq__8415_8454 = G__8466;
chunk__8416_8455 = G__8467;
count__8417_8456 = G__8468;
i__8418_8457 = G__8469;
continue;
} else {
var protocol_8470 = cljs.core.first.call(null,seq__8415_8464__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8470)),"}");


var G__8471 = cljs.core.next.call(null,seq__8415_8464__$1);
var G__8472 = null;
var G__8473 = (0);
var G__8474 = (0);
seq__8415_8454 = G__8471;
chunk__8416_8455 = G__8472;
count__8417_8456 = G__8473;
i__8418_8457 = G__8474;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__8431_8475 = cljs.core.seq.call(null,fields__$1);
var chunk__8432_8476 = null;
var count__8433_8477 = (0);
var i__8434_8478 = (0);
while(true){
if((i__8434_8478 < count__8433_8477)){
var fld_8479 = cljs.core._nth.call(null,chunk__8432_8476,i__8434_8478);
cljs.compiler.emitln.call(null,"this.",fld_8479," = ",fld_8479,";");


var G__8480 = seq__8431_8475;
var G__8481 = chunk__8432_8476;
var G__8482 = count__8433_8477;
var G__8483 = (i__8434_8478 + (1));
seq__8431_8475 = G__8480;
chunk__8432_8476 = G__8481;
count__8433_8477 = G__8482;
i__8434_8478 = G__8483;
continue;
} else {
var temp__5720__auto___8484 = cljs.core.seq.call(null,seq__8431_8475);
if(temp__5720__auto___8484){
var seq__8431_8485__$1 = temp__5720__auto___8484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8431_8485__$1)){
var c__4550__auto___8486 = cljs.core.chunk_first.call(null,seq__8431_8485__$1);
var G__8487 = cljs.core.chunk_rest.call(null,seq__8431_8485__$1);
var G__8488 = c__4550__auto___8486;
var G__8489 = cljs.core.count.call(null,c__4550__auto___8486);
var G__8490 = (0);
seq__8431_8475 = G__8487;
chunk__8432_8476 = G__8488;
count__8433_8477 = G__8489;
i__8434_8478 = G__8490;
continue;
} else {
var fld_8491 = cljs.core.first.call(null,seq__8431_8485__$1);
cljs.compiler.emitln.call(null,"this.",fld_8491," = ",fld_8491,";");


var G__8492 = cljs.core.next.call(null,seq__8431_8485__$1);
var G__8493 = null;
var G__8494 = (0);
var G__8495 = (0);
seq__8431_8475 = G__8492;
chunk__8432_8476 = G__8493;
count__8433_8477 = G__8494;
i__8434_8478 = G__8495;
continue;
}
} else {
}
}
break;
}

var seq__8435_8496 = cljs.core.seq.call(null,pmasks);
var chunk__8436_8497 = null;
var count__8437_8498 = (0);
var i__8438_8499 = (0);
while(true){
if((i__8438_8499 < count__8437_8498)){
var vec__8445_8500 = cljs.core._nth.call(null,chunk__8436_8497,i__8438_8499);
var pno_8501 = cljs.core.nth.call(null,vec__8445_8500,(0),null);
var pmask_8502 = cljs.core.nth.call(null,vec__8445_8500,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8501,"$ = ",pmask_8502,";");


var G__8504 = seq__8435_8496;
var G__8505 = chunk__8436_8497;
var G__8506 = count__8437_8498;
var G__8507 = (i__8438_8499 + (1));
seq__8435_8496 = G__8504;
chunk__8436_8497 = G__8505;
count__8437_8498 = G__8506;
i__8438_8499 = G__8507;
continue;
} else {
var temp__5720__auto___8509 = cljs.core.seq.call(null,seq__8435_8496);
if(temp__5720__auto___8509){
var seq__8435_8511__$1 = temp__5720__auto___8509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8435_8511__$1)){
var c__4550__auto___8512 = cljs.core.chunk_first.call(null,seq__8435_8511__$1);
var G__8513 = cljs.core.chunk_rest.call(null,seq__8435_8511__$1);
var G__8514 = c__4550__auto___8512;
var G__8515 = cljs.core.count.call(null,c__4550__auto___8512);
var G__8516 = (0);
seq__8435_8496 = G__8513;
chunk__8436_8497 = G__8514;
count__8437_8498 = G__8515;
i__8438_8499 = G__8516;
continue;
} else {
var vec__8448_8517 = cljs.core.first.call(null,seq__8435_8511__$1);
var pno_8518 = cljs.core.nth.call(null,vec__8448_8517,(0),null);
var pmask_8519 = cljs.core.nth.call(null,vec__8448_8517,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8518,"$ = ",pmask_8519,";");


var G__8520 = cljs.core.next.call(null,seq__8435_8511__$1);
var G__8521 = null;
var G__8522 = (0);
var G__8523 = (0);
seq__8435_8496 = G__8520;
chunk__8436_8497 = G__8521;
count__8437_8498 = G__8522;
i__8438_8499 = G__8523;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__8451){
var map__8452 = p__8451;
var map__8452__$1 = (((((!((map__8452 == null))))?(((((map__8452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8452):map__8452);
var target = cljs.core.get.call(null,map__8452__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__8452__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__8452__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__8452__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__8452__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__8503){
var map__8508 = p__8503;
var map__8508__$1 = (((((!((map__8508 == null))))?(((((map__8508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8508):map__8508);
var op = cljs.core.get.call(null,map__8508__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__8508__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__8508__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__8508__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__8508__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__7299__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7299__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__8528 = cljs.core.seq.call(null,table);
var chunk__8529 = null;
var count__8530 = (0);
var i__8531 = (0);
while(true){
if((i__8531 < count__8530)){
var vec__8538 = cljs.core._nth.call(null,chunk__8529,i__8531);
var sym = cljs.core.nth.call(null,vec__8538,(0),null);
var value = cljs.core.nth.call(null,vec__8538,(1),null);
var ns_8545 = cljs.core.namespace.call(null,sym);
var name_8546 = cljs.core.name.call(null,sym);
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


var G__8548 = seq__8528;
var G__8549 = chunk__8529;
var G__8550 = count__8530;
var G__8551 = (i__8531 + (1));
seq__8528 = G__8548;
chunk__8529 = G__8549;
count__8530 = G__8550;
i__8531 = G__8551;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__8528);
if(temp__5720__auto__){
var seq__8528__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8528__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__8528__$1);
var G__8552 = cljs.core.chunk_rest.call(null,seq__8528__$1);
var G__8553 = c__4550__auto__;
var G__8554 = cljs.core.count.call(null,c__4550__auto__);
var G__8555 = (0);
seq__8528 = G__8552;
chunk__8529 = G__8553;
count__8530 = G__8554;
i__8531 = G__8555;
continue;
} else {
var vec__8541 = cljs.core.first.call(null,seq__8528__$1);
var sym = cljs.core.nth.call(null,vec__8541,(0),null);
var value = cljs.core.nth.call(null,vec__8541,(1),null);
var ns_8556 = cljs.core.namespace.call(null,sym);
var name_8557 = cljs.core.name.call(null,sym);
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


var G__8558 = cljs.core.next.call(null,seq__8528__$1);
var G__8559 = null;
var G__8560 = (0);
var G__8561 = (0);
seq__8528 = G__8558;
chunk__8529 = G__8559;
count__8530 = G__8560;
i__8531 = G__8561;
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
var G__8547 = arguments.length;
switch (G__8547) {
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
var k_8566 = cljs.core.first.call(null,ks);
var vec__8562_8567 = cljs.core.conj.call(null,prefix,k_8566);
var top_8568 = cljs.core.nth.call(null,vec__8562_8567,(0),null);
var prefix_SINGLEQUOTE__8569 = vec__8562_8567;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_8566)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__8569) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_8568)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_8568)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__8569)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_8568);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__8569)),";");
}
} else {
}

var m_8570 = cljs.core.get.call(null,externs,k_8566);
if(cljs.core.empty_QMARK_.call(null,m_8570)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__8569,m_8570,top_level,known_externs);
}

var G__8571 = cljs.core.next.call(null,ks);
ks = G__8571;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

