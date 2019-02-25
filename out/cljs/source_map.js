// Compiled by ClojureScript 1.10.516 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__2443){
var vec__2444 = p__2443;
var i = cljs.core.nth.call(null,vec__2444,(0),null);
var v = cljs.core.nth.call(null,vec__2444,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__2447 = seg;
var gcol = cljs.core.nth.call(null,vec__2447,(0),null);
var source = cljs.core.nth.call(null,vec__2447,(1),null);
var line = cljs.core.nth.call(null,vec__2447,(2),null);
var col = cljs.core.nth.call(null,vec__2447,(3),null);
var name = cljs.core.nth.call(null,vec__2447,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5720__auto__)){
var name__$1 = temp__5720__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__2450 = seg;
var gcol = cljs.core.nth.call(null,vec__2450,(0),null);
var source = cljs.core.nth.call(null,vec__2450,(1),null);
var line = cljs.core.nth.call(null,vec__2450,(2),null);
var col = cljs.core.nth.call(null,vec__2450,(3),null);
var name = cljs.core.nth.call(null,vec__2450,(4),null);
var vec__2453 = relseg;
var rgcol = cljs.core.nth.call(null,vec__2453,(0),null);
var rsource = cljs.core.nth.call(null,vec__2453,(1),null);
var rline = cljs.core.nth.call(null,vec__2453,(2),null);
var rcol = cljs.core.nth.call(null,vec__2453,(3),null);
var rname = cljs.core.nth.call(null,vec__2453,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4131__auto__ = col;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__2456 = segmap;
var map__2456__$1 = (((((!((map__2456 == null))))?(((((map__2456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2456):map__2456);
var gcol = cljs.core.get.call(null,map__2456__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__2456__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__2456__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__2456__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__2456__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__2456,map__2456__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__2456,map__2456__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__2456,map__2456__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__2456,map__2456__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__2456,map__2456__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__2456,map__2456__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__2459 = arguments.length;
switch (G__2459) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__2463 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__2467 = cljs.core.next.call(null,segs__$1);
var G__2468 = nrelseg;
var G__2469 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__2467;
relseg__$1 = G__2468;
result__$1 = G__2469;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__2463,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__2463,(1),null);
var G__2470 = (gline + (1));
var G__2471 = cljs.core.next.call(null,lines__$1);
var G__2472 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__2473 = result__$1;
gline = G__2470;
lines__$1 = G__2471;
relseg = G__2472;
result = G__2473;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__2475 = segmap;
var map__2475__$1 = (((((!((map__2475 == null))))?(((((map__2475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2475):map__2475);
var gcol = cljs.core.get.call(null,map__2475__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__2475__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__2475__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__2475__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__2475__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__2475,map__2475__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__2475,map__2475__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__2474_SHARP_){
return cljs.core.conj.call(null,p1__2474_SHARP_,d__$1);
});})(map__2475,map__2475__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__2475,map__2475__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__2478 = arguments.length;
switch (G__2478) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__2482 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__2486 = cljs.core.next.call(null,segs__$1);
var G__2487 = nrelseg;
var G__2488 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__2486;
relseg__$1 = G__2487;
result__$1 = G__2488;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__2482,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__2482,(1),null);
var G__2489 = (gline + (1));
var G__2490 = cljs.core.next.call(null,lines__$1);
var G__2491 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__2492 = result__$1;
gline = G__2489;
lines__$1 = G__2490;
relseg = G__2491;
result = G__2492;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__2493){
var vec__2494 = p__2493;
var _ = cljs.core.nth.call(null,vec__2494,(0),null);
var source = cljs.core.nth.call(null,vec__2494,(1),null);
var line = cljs.core.nth.call(null,vec__2494,(2),null);
var col = cljs.core.nth.call(null,vec__2494,(3),null);
var name = cljs.core.nth.call(null,vec__2494,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__2497){
var vec__2498 = p__2497;
var gcol = cljs.core.nth.call(null,vec__2498,(0),null);
var sidx = cljs.core.nth.call(null,vec__2498,(1),null);
var line = cljs.core.nth.call(null,vec__2498,(2),null);
var col = cljs.core.nth.call(null,vec__2498,(3),null);
var name = cljs.core.nth.call(null,vec__2498,(4),null);
var seg = vec__2498;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__2498,gcol,sidx,line,col,name,seg,relseg){
return (function (p__2501){
var vec__2502 = p__2501;
var _ = cljs.core.nth.call(null,vec__2502,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__2502,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__2502,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__2502,(3),null);
var lname = cljs.core.nth.call(null,vec__2502,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__2498,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
var idx = (function (){var temp__5718__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__2508 = cljs.core.seq.call(null,infos);
var chunk__2509 = null;
var count__2510 = (0);
var i__2511 = (0);
while(true){
if((i__2511 < count__2510)){
var info = cljs.core._nth.call(null,chunk__2509,i__2511);
var segv_2862 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_2863 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_2864 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_2863 > (lc_2864 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__2508,chunk__2509,count__2510,i__2511,segv_2862,gline_2863,lc_2864,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_2863 - (lc_2864 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_2862], null));
});})(seq__2508,chunk__2509,count__2510,i__2511,segv_2862,gline_2863,lc_2864,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__2508,chunk__2509,count__2510,i__2511,segv_2862,gline_2863,lc_2864,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2863], null),cljs.core.conj,segv_2862);
});})(seq__2508,chunk__2509,count__2510,i__2511,segv_2862,gline_2863,lc_2864,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__2865 = seq__2508;
var G__2866 = chunk__2509;
var G__2867 = count__2510;
var G__2868 = (i__2511 + (1));
seq__2508 = G__2865;
chunk__2509 = G__2866;
count__2510 = G__2867;
i__2511 = G__2868;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__2508);
if(temp__5720__auto__){
var seq__2508__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2508__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__2508__$1);
var G__2869 = cljs.core.chunk_rest.call(null,seq__2508__$1);
var G__2870 = c__4550__auto__;
var G__2871 = cljs.core.count.call(null,c__4550__auto__);
var G__2872 = (0);
seq__2508 = G__2869;
chunk__2509 = G__2870;
count__2510 = G__2871;
i__2511 = G__2872;
continue;
} else {
var info = cljs.core.first.call(null,seq__2508__$1);
var segv_2873 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_2874 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_2875 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_2874 > (lc_2875 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__2508,chunk__2509,count__2510,i__2511,segv_2873,gline_2874,lc_2875,info,seq__2508__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_2874 - (lc_2875 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_2873], null));
});})(seq__2508,chunk__2509,count__2510,i__2511,segv_2873,gline_2874,lc_2875,info,seq__2508__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__2508,chunk__2509,count__2510,i__2511,segv_2873,gline_2874,lc_2875,info,seq__2508__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2874], null),cljs.core.conj,segv_2873);
});})(seq__2508,chunk__2509,count__2510,i__2511,segv_2873,gline_2874,lc_2875,info,seq__2508__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__2876 = cljs.core.next.call(null,seq__2508__$1);
var G__2877 = null;
var G__2878 = (0);
var G__2879 = (0);
seq__2508 = G__2876;
chunk__2509 = G__2877;
count__2510 = G__2878;
i__2511 = G__2879;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__2512_2880 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__2513_2881 = null;
var count__2514_2882 = (0);
var i__2515_2883 = (0);
while(true){
if((i__2515_2883 < count__2514_2882)){
var vec__2688_2884 = cljs.core._nth.call(null,chunk__2513_2881,i__2515_2883);
var source_idx_2885 = cljs.core.nth.call(null,vec__2688_2884,(0),null);
var vec__2691_2886 = cljs.core.nth.call(null,vec__2688_2884,(1),null);
var __2887 = cljs.core.nth.call(null,vec__2691_2886,(0),null);
var lines_2888__$1 = cljs.core.nth.call(null,vec__2691_2886,(1),null);
var seq__2694_2889 = cljs.core.seq.call(null,lines_2888__$1);
var chunk__2695_2890 = null;
var count__2696_2891 = (0);
var i__2697_2892 = (0);
while(true){
if((i__2697_2892 < count__2696_2891)){
var vec__2736_2893 = cljs.core._nth.call(null,chunk__2695_2890,i__2697_2892);
var line_2894 = cljs.core.nth.call(null,vec__2736_2893,(0),null);
var cols_2895 = cljs.core.nth.call(null,vec__2736_2893,(1),null);
var seq__2739_2896 = cljs.core.seq.call(null,cols_2895);
var chunk__2740_2897 = null;
var count__2741_2898 = (0);
var i__2742_2899 = (0);
while(true){
if((i__2742_2899 < count__2741_2898)){
var vec__2749_2900 = cljs.core._nth.call(null,chunk__2740_2897,i__2742_2899);
var col_2901 = cljs.core.nth.call(null,vec__2749_2900,(0),null);
var infos_2902 = cljs.core.nth.call(null,vec__2749_2900,(1),null);
encode_cols.call(null,infos_2902,source_idx_2885,line_2894,col_2901);


var G__2903 = seq__2739_2896;
var G__2904 = chunk__2740_2897;
var G__2905 = count__2741_2898;
var G__2906 = (i__2742_2899 + (1));
seq__2739_2896 = G__2903;
chunk__2740_2897 = G__2904;
count__2741_2898 = G__2905;
i__2742_2899 = G__2906;
continue;
} else {
var temp__5720__auto___2907 = cljs.core.seq.call(null,seq__2739_2896);
if(temp__5720__auto___2907){
var seq__2739_2908__$1 = temp__5720__auto___2907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2739_2908__$1)){
var c__4550__auto___2909 = cljs.core.chunk_first.call(null,seq__2739_2908__$1);
var G__2910 = cljs.core.chunk_rest.call(null,seq__2739_2908__$1);
var G__2911 = c__4550__auto___2909;
var G__2912 = cljs.core.count.call(null,c__4550__auto___2909);
var G__2913 = (0);
seq__2739_2896 = G__2910;
chunk__2740_2897 = G__2911;
count__2741_2898 = G__2912;
i__2742_2899 = G__2913;
continue;
} else {
var vec__2752_2914 = cljs.core.first.call(null,seq__2739_2908__$1);
var col_2915 = cljs.core.nth.call(null,vec__2752_2914,(0),null);
var infos_2916 = cljs.core.nth.call(null,vec__2752_2914,(1),null);
encode_cols.call(null,infos_2916,source_idx_2885,line_2894,col_2915);


var G__2917 = cljs.core.next.call(null,seq__2739_2908__$1);
var G__2918 = null;
var G__2919 = (0);
var G__2920 = (0);
seq__2739_2896 = G__2917;
chunk__2740_2897 = G__2918;
count__2741_2898 = G__2919;
i__2742_2899 = G__2920;
continue;
}
} else {
}
}
break;
}


var G__2921 = seq__2694_2889;
var G__2922 = chunk__2695_2890;
var G__2923 = count__2696_2891;
var G__2924 = (i__2697_2892 + (1));
seq__2694_2889 = G__2921;
chunk__2695_2890 = G__2922;
count__2696_2891 = G__2923;
i__2697_2892 = G__2924;
continue;
} else {
var temp__5720__auto___2925 = cljs.core.seq.call(null,seq__2694_2889);
if(temp__5720__auto___2925){
var seq__2694_2926__$1 = temp__5720__auto___2925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2694_2926__$1)){
var c__4550__auto___2927 = cljs.core.chunk_first.call(null,seq__2694_2926__$1);
var G__2928 = cljs.core.chunk_rest.call(null,seq__2694_2926__$1);
var G__2929 = c__4550__auto___2927;
var G__2930 = cljs.core.count.call(null,c__4550__auto___2927);
var G__2931 = (0);
seq__2694_2889 = G__2928;
chunk__2695_2890 = G__2929;
count__2696_2891 = G__2930;
i__2697_2892 = G__2931;
continue;
} else {
var vec__2755_2932 = cljs.core.first.call(null,seq__2694_2926__$1);
var line_2933 = cljs.core.nth.call(null,vec__2755_2932,(0),null);
var cols_2934 = cljs.core.nth.call(null,vec__2755_2932,(1),null);
var seq__2758_2935 = cljs.core.seq.call(null,cols_2934);
var chunk__2759_2936 = null;
var count__2760_2937 = (0);
var i__2761_2938 = (0);
while(true){
if((i__2761_2938 < count__2760_2937)){
var vec__2768_2939 = cljs.core._nth.call(null,chunk__2759_2936,i__2761_2938);
var col_2940 = cljs.core.nth.call(null,vec__2768_2939,(0),null);
var infos_2941 = cljs.core.nth.call(null,vec__2768_2939,(1),null);
encode_cols.call(null,infos_2941,source_idx_2885,line_2933,col_2940);


var G__2942 = seq__2758_2935;
var G__2943 = chunk__2759_2936;
var G__2944 = count__2760_2937;
var G__2945 = (i__2761_2938 + (1));
seq__2758_2935 = G__2942;
chunk__2759_2936 = G__2943;
count__2760_2937 = G__2944;
i__2761_2938 = G__2945;
continue;
} else {
var temp__5720__auto___2946__$1 = cljs.core.seq.call(null,seq__2758_2935);
if(temp__5720__auto___2946__$1){
var seq__2758_2947__$1 = temp__5720__auto___2946__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2758_2947__$1)){
var c__4550__auto___2948 = cljs.core.chunk_first.call(null,seq__2758_2947__$1);
var G__2949 = cljs.core.chunk_rest.call(null,seq__2758_2947__$1);
var G__2950 = c__4550__auto___2948;
var G__2951 = cljs.core.count.call(null,c__4550__auto___2948);
var G__2952 = (0);
seq__2758_2935 = G__2949;
chunk__2759_2936 = G__2950;
count__2760_2937 = G__2951;
i__2761_2938 = G__2952;
continue;
} else {
var vec__2771_2953 = cljs.core.first.call(null,seq__2758_2947__$1);
var col_2954 = cljs.core.nth.call(null,vec__2771_2953,(0),null);
var infos_2955 = cljs.core.nth.call(null,vec__2771_2953,(1),null);
encode_cols.call(null,infos_2955,source_idx_2885,line_2933,col_2954);


var G__2956 = cljs.core.next.call(null,seq__2758_2947__$1);
var G__2957 = null;
var G__2958 = (0);
var G__2959 = (0);
seq__2758_2935 = G__2956;
chunk__2759_2936 = G__2957;
count__2760_2937 = G__2958;
i__2761_2938 = G__2959;
continue;
}
} else {
}
}
break;
}


var G__2960 = cljs.core.next.call(null,seq__2694_2926__$1);
var G__2961 = null;
var G__2962 = (0);
var G__2963 = (0);
seq__2694_2889 = G__2960;
chunk__2695_2890 = G__2961;
count__2696_2891 = G__2962;
i__2697_2892 = G__2963;
continue;
}
} else {
}
}
break;
}


var G__2964 = seq__2512_2880;
var G__2965 = chunk__2513_2881;
var G__2966 = count__2514_2882;
var G__2967 = (i__2515_2883 + (1));
seq__2512_2880 = G__2964;
chunk__2513_2881 = G__2965;
count__2514_2882 = G__2966;
i__2515_2883 = G__2967;
continue;
} else {
var temp__5720__auto___2968 = cljs.core.seq.call(null,seq__2512_2880);
if(temp__5720__auto___2968){
var seq__2512_2969__$1 = temp__5720__auto___2968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2512_2969__$1)){
var c__4550__auto___2970 = cljs.core.chunk_first.call(null,seq__2512_2969__$1);
var G__2971 = cljs.core.chunk_rest.call(null,seq__2512_2969__$1);
var G__2972 = c__4550__auto___2970;
var G__2973 = cljs.core.count.call(null,c__4550__auto___2970);
var G__2974 = (0);
seq__2512_2880 = G__2971;
chunk__2513_2881 = G__2972;
count__2514_2882 = G__2973;
i__2515_2883 = G__2974;
continue;
} else {
var vec__2774_2975 = cljs.core.first.call(null,seq__2512_2969__$1);
var source_idx_2976 = cljs.core.nth.call(null,vec__2774_2975,(0),null);
var vec__2777_2977 = cljs.core.nth.call(null,vec__2774_2975,(1),null);
var __2978 = cljs.core.nth.call(null,vec__2777_2977,(0),null);
var lines_2979__$1 = cljs.core.nth.call(null,vec__2777_2977,(1),null);
var seq__2780_2980 = cljs.core.seq.call(null,lines_2979__$1);
var chunk__2781_2981 = null;
var count__2782_2982 = (0);
var i__2783_2983 = (0);
while(true){
if((i__2783_2983 < count__2782_2982)){
var vec__2822_2984 = cljs.core._nth.call(null,chunk__2781_2981,i__2783_2983);
var line_2985 = cljs.core.nth.call(null,vec__2822_2984,(0),null);
var cols_2986 = cljs.core.nth.call(null,vec__2822_2984,(1),null);
var seq__2825_2987 = cljs.core.seq.call(null,cols_2986);
var chunk__2826_2988 = null;
var count__2827_2989 = (0);
var i__2828_2990 = (0);
while(true){
if((i__2828_2990 < count__2827_2989)){
var vec__2835_2991 = cljs.core._nth.call(null,chunk__2826_2988,i__2828_2990);
var col_2992 = cljs.core.nth.call(null,vec__2835_2991,(0),null);
var infos_2993 = cljs.core.nth.call(null,vec__2835_2991,(1),null);
encode_cols.call(null,infos_2993,source_idx_2976,line_2985,col_2992);


var G__2994 = seq__2825_2987;
var G__2995 = chunk__2826_2988;
var G__2996 = count__2827_2989;
var G__2997 = (i__2828_2990 + (1));
seq__2825_2987 = G__2994;
chunk__2826_2988 = G__2995;
count__2827_2989 = G__2996;
i__2828_2990 = G__2997;
continue;
} else {
var temp__5720__auto___2998__$1 = cljs.core.seq.call(null,seq__2825_2987);
if(temp__5720__auto___2998__$1){
var seq__2825_2999__$1 = temp__5720__auto___2998__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2825_2999__$1)){
var c__4550__auto___3000 = cljs.core.chunk_first.call(null,seq__2825_2999__$1);
var G__3001 = cljs.core.chunk_rest.call(null,seq__2825_2999__$1);
var G__3002 = c__4550__auto___3000;
var G__3003 = cljs.core.count.call(null,c__4550__auto___3000);
var G__3004 = (0);
seq__2825_2987 = G__3001;
chunk__2826_2988 = G__3002;
count__2827_2989 = G__3003;
i__2828_2990 = G__3004;
continue;
} else {
var vec__2838_3005 = cljs.core.first.call(null,seq__2825_2999__$1);
var col_3006 = cljs.core.nth.call(null,vec__2838_3005,(0),null);
var infos_3007 = cljs.core.nth.call(null,vec__2838_3005,(1),null);
encode_cols.call(null,infos_3007,source_idx_2976,line_2985,col_3006);


var G__3008 = cljs.core.next.call(null,seq__2825_2999__$1);
var G__3009 = null;
var G__3010 = (0);
var G__3011 = (0);
seq__2825_2987 = G__3008;
chunk__2826_2988 = G__3009;
count__2827_2989 = G__3010;
i__2828_2990 = G__3011;
continue;
}
} else {
}
}
break;
}


var G__3012 = seq__2780_2980;
var G__3013 = chunk__2781_2981;
var G__3014 = count__2782_2982;
var G__3015 = (i__2783_2983 + (1));
seq__2780_2980 = G__3012;
chunk__2781_2981 = G__3013;
count__2782_2982 = G__3014;
i__2783_2983 = G__3015;
continue;
} else {
var temp__5720__auto___3016__$1 = cljs.core.seq.call(null,seq__2780_2980);
if(temp__5720__auto___3016__$1){
var seq__2780_3017__$1 = temp__5720__auto___3016__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2780_3017__$1)){
var c__4550__auto___3018 = cljs.core.chunk_first.call(null,seq__2780_3017__$1);
var G__3019 = cljs.core.chunk_rest.call(null,seq__2780_3017__$1);
var G__3020 = c__4550__auto___3018;
var G__3021 = cljs.core.count.call(null,c__4550__auto___3018);
var G__3022 = (0);
seq__2780_2980 = G__3019;
chunk__2781_2981 = G__3020;
count__2782_2982 = G__3021;
i__2783_2983 = G__3022;
continue;
} else {
var vec__2841_3023 = cljs.core.first.call(null,seq__2780_3017__$1);
var line_3024 = cljs.core.nth.call(null,vec__2841_3023,(0),null);
var cols_3025 = cljs.core.nth.call(null,vec__2841_3023,(1),null);
var seq__2844_3026 = cljs.core.seq.call(null,cols_3025);
var chunk__2845_3027 = null;
var count__2846_3028 = (0);
var i__2847_3029 = (0);
while(true){
if((i__2847_3029 < count__2846_3028)){
var vec__2854_3030 = cljs.core._nth.call(null,chunk__2845_3027,i__2847_3029);
var col_3031 = cljs.core.nth.call(null,vec__2854_3030,(0),null);
var infos_3032 = cljs.core.nth.call(null,vec__2854_3030,(1),null);
encode_cols.call(null,infos_3032,source_idx_2976,line_3024,col_3031);


var G__3033 = seq__2844_3026;
var G__3034 = chunk__2845_3027;
var G__3035 = count__2846_3028;
var G__3036 = (i__2847_3029 + (1));
seq__2844_3026 = G__3033;
chunk__2845_3027 = G__3034;
count__2846_3028 = G__3035;
i__2847_3029 = G__3036;
continue;
} else {
var temp__5720__auto___3037__$2 = cljs.core.seq.call(null,seq__2844_3026);
if(temp__5720__auto___3037__$2){
var seq__2844_3038__$1 = temp__5720__auto___3037__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2844_3038__$1)){
var c__4550__auto___3039 = cljs.core.chunk_first.call(null,seq__2844_3038__$1);
var G__3040 = cljs.core.chunk_rest.call(null,seq__2844_3038__$1);
var G__3041 = c__4550__auto___3039;
var G__3042 = cljs.core.count.call(null,c__4550__auto___3039);
var G__3043 = (0);
seq__2844_3026 = G__3040;
chunk__2845_3027 = G__3041;
count__2846_3028 = G__3042;
i__2847_3029 = G__3043;
continue;
} else {
var vec__2857_3044 = cljs.core.first.call(null,seq__2844_3038__$1);
var col_3045 = cljs.core.nth.call(null,vec__2857_3044,(0),null);
var infos_3046 = cljs.core.nth.call(null,vec__2857_3044,(1),null);
encode_cols.call(null,infos_3046,source_idx_2976,line_3024,col_3045);


var G__3047 = cljs.core.next.call(null,seq__2844_3038__$1);
var G__3048 = null;
var G__3049 = (0);
var G__3050 = (0);
seq__2844_3026 = G__3047;
chunk__2845_3027 = G__3048;
count__2846_3028 = G__3049;
i__2847_3029 = G__3050;
continue;
}
} else {
}
}
break;
}


var G__3051 = cljs.core.next.call(null,seq__2780_3017__$1);
var G__3052 = null;
var G__3053 = (0);
var G__3054 = (0);
seq__2780_2980 = G__3051;
chunk__2781_2981 = G__3052;
count__2782_2982 = G__3053;
i__2783_2983 = G__3054;
continue;
}
} else {
}
}
break;
}


var G__3055 = cljs.core.next.call(null,seq__2512_2969__$1);
var G__3056 = null;
var G__3057 = (0);
var G__3058 = (0);
seq__2512_2880 = G__3055;
chunk__2513_2881 = G__3056;
count__2514_2882 = G__3057;
i__2515_2883 = G__3058;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__2860 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2505_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__2505_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2506_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__2506_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2507_SHARP_){
return clojure.string.join.call(null,",",p1__2507_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__2861 = G__2860;
goog.object.set(G__2861,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__2861;
} else {
return G__2860;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__3059 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__3059,(0),null);
var col_map = cljs.core.nth.call(null,vec__3059,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__3062 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__3062,(0),null);
var infos = cljs.core.nth.call(null,vec__3062,(1),null);
var G__3068 = cljs.core.next.call(null,col_map_seq);
var G__3069 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__3062,col,infos,vec__3059,line,col_map){
return (function (v,p__3065){
var map__3066 = p__3065;
var map__3066__$1 = (((((!((map__3066 == null))))?(((((map__3066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3066):map__3066);
var gline = cljs.core.get.call(null,map__3066__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__3066__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__3062,col,infos,vec__3059,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__3068;
new_cols = G__3069;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__3070 = cljs.core.next.call(null,line_map_seq);
var G__3071 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__3070;
new_lines = G__3071;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__3072_3344 = cljs.core.seq.call(null,reverse_map);
var chunk__3073_3345 = null;
var count__3074_3346 = (0);
var i__3075_3347 = (0);
while(true){
if((i__3075_3347 < count__3074_3346)){
var vec__3210_3348 = cljs.core._nth.call(null,chunk__3073_3345,i__3075_3347);
var line_3349 = cljs.core.nth.call(null,vec__3210_3348,(0),null);
var columns_3350 = cljs.core.nth.call(null,vec__3210_3348,(1),null);
var seq__3213_3351 = cljs.core.seq.call(null,columns_3350);
var chunk__3214_3352 = null;
var count__3215_3353 = (0);
var i__3216_3354 = (0);
while(true){
if((i__3216_3354 < count__3215_3353)){
var vec__3247_3355 = cljs.core._nth.call(null,chunk__3214_3352,i__3216_3354);
var column_3356 = cljs.core.nth.call(null,vec__3247_3355,(0),null);
var column_info_3357 = cljs.core.nth.call(null,vec__3247_3355,(1),null);
var seq__3250_3358 = cljs.core.seq.call(null,column_info_3357);
var chunk__3251_3359 = null;
var count__3252_3360 = (0);
var i__3253_3361 = (0);
while(true){
if((i__3253_3361 < count__3252_3360)){
var map__3258_3362 = cljs.core._nth.call(null,chunk__3251_3359,i__3253_3361);
var map__3258_3363__$1 = (((((!((map__3258_3362 == null))))?(((((map__3258_3362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3258_3362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3258_3362):map__3258_3362);
var gline_3364 = cljs.core.get.call(null,map__3258_3363__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3365 = cljs.core.get.call(null,map__3258_3363__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3366 = cljs.core.get.call(null,map__3258_3363__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3364], null),cljs.core.fnil.call(null,((function (seq__3250_3358,chunk__3251_3359,count__3252_3360,i__3253_3361,seq__3213_3351,chunk__3214_3352,count__3215_3353,i__3216_3354,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3258_3362,map__3258_3363__$1,gline_3364,gcol_3365,name_3366,vec__3247_3355,column_3356,column_info_3357,vec__3210_3348,line_3349,columns_3350,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3365], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3349,new cljs.core.Keyword(null,"col","col",-1959363084),column_3356,new cljs.core.Keyword(null,"name","name",1843675177),name_3366], null));
});})(seq__3250_3358,chunk__3251_3359,count__3252_3360,i__3253_3361,seq__3213_3351,chunk__3214_3352,count__3215_3353,i__3216_3354,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3258_3362,map__3258_3363__$1,gline_3364,gcol_3365,name_3366,vec__3247_3355,column_3356,column_info_3357,vec__3210_3348,line_3349,columns_3350,inverted))
,cljs.core.sorted_map.call(null)));


var G__3367 = seq__3250_3358;
var G__3368 = chunk__3251_3359;
var G__3369 = count__3252_3360;
var G__3370 = (i__3253_3361 + (1));
seq__3250_3358 = G__3367;
chunk__3251_3359 = G__3368;
count__3252_3360 = G__3369;
i__3253_3361 = G__3370;
continue;
} else {
var temp__5720__auto___3371 = cljs.core.seq.call(null,seq__3250_3358);
if(temp__5720__auto___3371){
var seq__3250_3372__$1 = temp__5720__auto___3371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3250_3372__$1)){
var c__4550__auto___3373 = cljs.core.chunk_first.call(null,seq__3250_3372__$1);
var G__3374 = cljs.core.chunk_rest.call(null,seq__3250_3372__$1);
var G__3375 = c__4550__auto___3373;
var G__3376 = cljs.core.count.call(null,c__4550__auto___3373);
var G__3377 = (0);
seq__3250_3358 = G__3374;
chunk__3251_3359 = G__3375;
count__3252_3360 = G__3376;
i__3253_3361 = G__3377;
continue;
} else {
var map__3260_3378 = cljs.core.first.call(null,seq__3250_3372__$1);
var map__3260_3379__$1 = (((((!((map__3260_3378 == null))))?(((((map__3260_3378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3260_3378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3260_3378):map__3260_3378);
var gline_3380 = cljs.core.get.call(null,map__3260_3379__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3381 = cljs.core.get.call(null,map__3260_3379__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3382 = cljs.core.get.call(null,map__3260_3379__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3380], null),cljs.core.fnil.call(null,((function (seq__3250_3358,chunk__3251_3359,count__3252_3360,i__3253_3361,seq__3213_3351,chunk__3214_3352,count__3215_3353,i__3216_3354,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3260_3378,map__3260_3379__$1,gline_3380,gcol_3381,name_3382,seq__3250_3372__$1,temp__5720__auto___3371,vec__3247_3355,column_3356,column_info_3357,vec__3210_3348,line_3349,columns_3350,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3381], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3349,new cljs.core.Keyword(null,"col","col",-1959363084),column_3356,new cljs.core.Keyword(null,"name","name",1843675177),name_3382], null));
});})(seq__3250_3358,chunk__3251_3359,count__3252_3360,i__3253_3361,seq__3213_3351,chunk__3214_3352,count__3215_3353,i__3216_3354,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3260_3378,map__3260_3379__$1,gline_3380,gcol_3381,name_3382,seq__3250_3372__$1,temp__5720__auto___3371,vec__3247_3355,column_3356,column_info_3357,vec__3210_3348,line_3349,columns_3350,inverted))
,cljs.core.sorted_map.call(null)));


var G__3383 = cljs.core.next.call(null,seq__3250_3372__$1);
var G__3384 = null;
var G__3385 = (0);
var G__3386 = (0);
seq__3250_3358 = G__3383;
chunk__3251_3359 = G__3384;
count__3252_3360 = G__3385;
i__3253_3361 = G__3386;
continue;
}
} else {
}
}
break;
}


var G__3387 = seq__3213_3351;
var G__3388 = chunk__3214_3352;
var G__3389 = count__3215_3353;
var G__3390 = (i__3216_3354 + (1));
seq__3213_3351 = G__3387;
chunk__3214_3352 = G__3388;
count__3215_3353 = G__3389;
i__3216_3354 = G__3390;
continue;
} else {
var temp__5720__auto___3391 = cljs.core.seq.call(null,seq__3213_3351);
if(temp__5720__auto___3391){
var seq__3213_3392__$1 = temp__5720__auto___3391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3213_3392__$1)){
var c__4550__auto___3393 = cljs.core.chunk_first.call(null,seq__3213_3392__$1);
var G__3394 = cljs.core.chunk_rest.call(null,seq__3213_3392__$1);
var G__3395 = c__4550__auto___3393;
var G__3396 = cljs.core.count.call(null,c__4550__auto___3393);
var G__3397 = (0);
seq__3213_3351 = G__3394;
chunk__3214_3352 = G__3395;
count__3215_3353 = G__3396;
i__3216_3354 = G__3397;
continue;
} else {
var vec__3262_3398 = cljs.core.first.call(null,seq__3213_3392__$1);
var column_3399 = cljs.core.nth.call(null,vec__3262_3398,(0),null);
var column_info_3400 = cljs.core.nth.call(null,vec__3262_3398,(1),null);
var seq__3265_3401 = cljs.core.seq.call(null,column_info_3400);
var chunk__3266_3402 = null;
var count__3267_3403 = (0);
var i__3268_3404 = (0);
while(true){
if((i__3268_3404 < count__3267_3403)){
var map__3273_3405 = cljs.core._nth.call(null,chunk__3266_3402,i__3268_3404);
var map__3273_3406__$1 = (((((!((map__3273_3405 == null))))?(((((map__3273_3405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3273_3405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3273_3405):map__3273_3405);
var gline_3407 = cljs.core.get.call(null,map__3273_3406__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3408 = cljs.core.get.call(null,map__3273_3406__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3409 = cljs.core.get.call(null,map__3273_3406__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3407], null),cljs.core.fnil.call(null,((function (seq__3265_3401,chunk__3266_3402,count__3267_3403,i__3268_3404,seq__3213_3351,chunk__3214_3352,count__3215_3353,i__3216_3354,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3273_3405,map__3273_3406__$1,gline_3407,gcol_3408,name_3409,vec__3262_3398,column_3399,column_info_3400,seq__3213_3392__$1,temp__5720__auto___3391,vec__3210_3348,line_3349,columns_3350,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3408], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3349,new cljs.core.Keyword(null,"col","col",-1959363084),column_3399,new cljs.core.Keyword(null,"name","name",1843675177),name_3409], null));
});})(seq__3265_3401,chunk__3266_3402,count__3267_3403,i__3268_3404,seq__3213_3351,chunk__3214_3352,count__3215_3353,i__3216_3354,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3273_3405,map__3273_3406__$1,gline_3407,gcol_3408,name_3409,vec__3262_3398,column_3399,column_info_3400,seq__3213_3392__$1,temp__5720__auto___3391,vec__3210_3348,line_3349,columns_3350,inverted))
,cljs.core.sorted_map.call(null)));


var G__3410 = seq__3265_3401;
var G__3411 = chunk__3266_3402;
var G__3412 = count__3267_3403;
var G__3413 = (i__3268_3404 + (1));
seq__3265_3401 = G__3410;
chunk__3266_3402 = G__3411;
count__3267_3403 = G__3412;
i__3268_3404 = G__3413;
continue;
} else {
var temp__5720__auto___3414__$1 = cljs.core.seq.call(null,seq__3265_3401);
if(temp__5720__auto___3414__$1){
var seq__3265_3415__$1 = temp__5720__auto___3414__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3265_3415__$1)){
var c__4550__auto___3416 = cljs.core.chunk_first.call(null,seq__3265_3415__$1);
var G__3417 = cljs.core.chunk_rest.call(null,seq__3265_3415__$1);
var G__3418 = c__4550__auto___3416;
var G__3419 = cljs.core.count.call(null,c__4550__auto___3416);
var G__3420 = (0);
seq__3265_3401 = G__3417;
chunk__3266_3402 = G__3418;
count__3267_3403 = G__3419;
i__3268_3404 = G__3420;
continue;
} else {
var map__3275_3421 = cljs.core.first.call(null,seq__3265_3415__$1);
var map__3275_3422__$1 = (((((!((map__3275_3421 == null))))?(((((map__3275_3421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3275_3421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3275_3421):map__3275_3421);
var gline_3423 = cljs.core.get.call(null,map__3275_3422__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3424 = cljs.core.get.call(null,map__3275_3422__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3425 = cljs.core.get.call(null,map__3275_3422__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3423], null),cljs.core.fnil.call(null,((function (seq__3265_3401,chunk__3266_3402,count__3267_3403,i__3268_3404,seq__3213_3351,chunk__3214_3352,count__3215_3353,i__3216_3354,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3275_3421,map__3275_3422__$1,gline_3423,gcol_3424,name_3425,seq__3265_3415__$1,temp__5720__auto___3414__$1,vec__3262_3398,column_3399,column_info_3400,seq__3213_3392__$1,temp__5720__auto___3391,vec__3210_3348,line_3349,columns_3350,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3424], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3349,new cljs.core.Keyword(null,"col","col",-1959363084),column_3399,new cljs.core.Keyword(null,"name","name",1843675177),name_3425], null));
});})(seq__3265_3401,chunk__3266_3402,count__3267_3403,i__3268_3404,seq__3213_3351,chunk__3214_3352,count__3215_3353,i__3216_3354,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3275_3421,map__3275_3422__$1,gline_3423,gcol_3424,name_3425,seq__3265_3415__$1,temp__5720__auto___3414__$1,vec__3262_3398,column_3399,column_info_3400,seq__3213_3392__$1,temp__5720__auto___3391,vec__3210_3348,line_3349,columns_3350,inverted))
,cljs.core.sorted_map.call(null)));


var G__3426 = cljs.core.next.call(null,seq__3265_3415__$1);
var G__3427 = null;
var G__3428 = (0);
var G__3429 = (0);
seq__3265_3401 = G__3426;
chunk__3266_3402 = G__3427;
count__3267_3403 = G__3428;
i__3268_3404 = G__3429;
continue;
}
} else {
}
}
break;
}


var G__3430 = cljs.core.next.call(null,seq__3213_3392__$1);
var G__3431 = null;
var G__3432 = (0);
var G__3433 = (0);
seq__3213_3351 = G__3430;
chunk__3214_3352 = G__3431;
count__3215_3353 = G__3432;
i__3216_3354 = G__3433;
continue;
}
} else {
}
}
break;
}


var G__3434 = seq__3072_3344;
var G__3435 = chunk__3073_3345;
var G__3436 = count__3074_3346;
var G__3437 = (i__3075_3347 + (1));
seq__3072_3344 = G__3434;
chunk__3073_3345 = G__3435;
count__3074_3346 = G__3436;
i__3075_3347 = G__3437;
continue;
} else {
var temp__5720__auto___3438 = cljs.core.seq.call(null,seq__3072_3344);
if(temp__5720__auto___3438){
var seq__3072_3439__$1 = temp__5720__auto___3438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3072_3439__$1)){
var c__4550__auto___3440 = cljs.core.chunk_first.call(null,seq__3072_3439__$1);
var G__3441 = cljs.core.chunk_rest.call(null,seq__3072_3439__$1);
var G__3442 = c__4550__auto___3440;
var G__3443 = cljs.core.count.call(null,c__4550__auto___3440);
var G__3444 = (0);
seq__3072_3344 = G__3441;
chunk__3073_3345 = G__3442;
count__3074_3346 = G__3443;
i__3075_3347 = G__3444;
continue;
} else {
var vec__3277_3445 = cljs.core.first.call(null,seq__3072_3439__$1);
var line_3446 = cljs.core.nth.call(null,vec__3277_3445,(0),null);
var columns_3447 = cljs.core.nth.call(null,vec__3277_3445,(1),null);
var seq__3280_3448 = cljs.core.seq.call(null,columns_3447);
var chunk__3281_3449 = null;
var count__3282_3450 = (0);
var i__3283_3451 = (0);
while(true){
if((i__3283_3451 < count__3282_3450)){
var vec__3314_3452 = cljs.core._nth.call(null,chunk__3281_3449,i__3283_3451);
var column_3453 = cljs.core.nth.call(null,vec__3314_3452,(0),null);
var column_info_3454 = cljs.core.nth.call(null,vec__3314_3452,(1),null);
var seq__3317_3455 = cljs.core.seq.call(null,column_info_3454);
var chunk__3318_3456 = null;
var count__3319_3457 = (0);
var i__3320_3458 = (0);
while(true){
if((i__3320_3458 < count__3319_3457)){
var map__3325_3459 = cljs.core._nth.call(null,chunk__3318_3456,i__3320_3458);
var map__3325_3460__$1 = (((((!((map__3325_3459 == null))))?(((((map__3325_3459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3325_3459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3325_3459):map__3325_3459);
var gline_3461 = cljs.core.get.call(null,map__3325_3460__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3462 = cljs.core.get.call(null,map__3325_3460__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3463 = cljs.core.get.call(null,map__3325_3460__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3461], null),cljs.core.fnil.call(null,((function (seq__3317_3455,chunk__3318_3456,count__3319_3457,i__3320_3458,seq__3280_3448,chunk__3281_3449,count__3282_3450,i__3283_3451,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3325_3459,map__3325_3460__$1,gline_3461,gcol_3462,name_3463,vec__3314_3452,column_3453,column_info_3454,vec__3277_3445,line_3446,columns_3447,seq__3072_3439__$1,temp__5720__auto___3438,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3462], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3446,new cljs.core.Keyword(null,"col","col",-1959363084),column_3453,new cljs.core.Keyword(null,"name","name",1843675177),name_3463], null));
});})(seq__3317_3455,chunk__3318_3456,count__3319_3457,i__3320_3458,seq__3280_3448,chunk__3281_3449,count__3282_3450,i__3283_3451,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3325_3459,map__3325_3460__$1,gline_3461,gcol_3462,name_3463,vec__3314_3452,column_3453,column_info_3454,vec__3277_3445,line_3446,columns_3447,seq__3072_3439__$1,temp__5720__auto___3438,inverted))
,cljs.core.sorted_map.call(null)));


var G__3464 = seq__3317_3455;
var G__3465 = chunk__3318_3456;
var G__3466 = count__3319_3457;
var G__3467 = (i__3320_3458 + (1));
seq__3317_3455 = G__3464;
chunk__3318_3456 = G__3465;
count__3319_3457 = G__3466;
i__3320_3458 = G__3467;
continue;
} else {
var temp__5720__auto___3468__$1 = cljs.core.seq.call(null,seq__3317_3455);
if(temp__5720__auto___3468__$1){
var seq__3317_3469__$1 = temp__5720__auto___3468__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3317_3469__$1)){
var c__4550__auto___3470 = cljs.core.chunk_first.call(null,seq__3317_3469__$1);
var G__3471 = cljs.core.chunk_rest.call(null,seq__3317_3469__$1);
var G__3472 = c__4550__auto___3470;
var G__3473 = cljs.core.count.call(null,c__4550__auto___3470);
var G__3474 = (0);
seq__3317_3455 = G__3471;
chunk__3318_3456 = G__3472;
count__3319_3457 = G__3473;
i__3320_3458 = G__3474;
continue;
} else {
var map__3327_3475 = cljs.core.first.call(null,seq__3317_3469__$1);
var map__3327_3476__$1 = (((((!((map__3327_3475 == null))))?(((((map__3327_3475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3327_3475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3327_3475):map__3327_3475);
var gline_3477 = cljs.core.get.call(null,map__3327_3476__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3478 = cljs.core.get.call(null,map__3327_3476__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3479 = cljs.core.get.call(null,map__3327_3476__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3477], null),cljs.core.fnil.call(null,((function (seq__3317_3455,chunk__3318_3456,count__3319_3457,i__3320_3458,seq__3280_3448,chunk__3281_3449,count__3282_3450,i__3283_3451,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3327_3475,map__3327_3476__$1,gline_3477,gcol_3478,name_3479,seq__3317_3469__$1,temp__5720__auto___3468__$1,vec__3314_3452,column_3453,column_info_3454,vec__3277_3445,line_3446,columns_3447,seq__3072_3439__$1,temp__5720__auto___3438,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3478], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3446,new cljs.core.Keyword(null,"col","col",-1959363084),column_3453,new cljs.core.Keyword(null,"name","name",1843675177),name_3479], null));
});})(seq__3317_3455,chunk__3318_3456,count__3319_3457,i__3320_3458,seq__3280_3448,chunk__3281_3449,count__3282_3450,i__3283_3451,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3327_3475,map__3327_3476__$1,gline_3477,gcol_3478,name_3479,seq__3317_3469__$1,temp__5720__auto___3468__$1,vec__3314_3452,column_3453,column_info_3454,vec__3277_3445,line_3446,columns_3447,seq__3072_3439__$1,temp__5720__auto___3438,inverted))
,cljs.core.sorted_map.call(null)));


var G__3480 = cljs.core.next.call(null,seq__3317_3469__$1);
var G__3481 = null;
var G__3482 = (0);
var G__3483 = (0);
seq__3317_3455 = G__3480;
chunk__3318_3456 = G__3481;
count__3319_3457 = G__3482;
i__3320_3458 = G__3483;
continue;
}
} else {
}
}
break;
}


var G__3484 = seq__3280_3448;
var G__3485 = chunk__3281_3449;
var G__3486 = count__3282_3450;
var G__3487 = (i__3283_3451 + (1));
seq__3280_3448 = G__3484;
chunk__3281_3449 = G__3485;
count__3282_3450 = G__3486;
i__3283_3451 = G__3487;
continue;
} else {
var temp__5720__auto___3488__$1 = cljs.core.seq.call(null,seq__3280_3448);
if(temp__5720__auto___3488__$1){
var seq__3280_3489__$1 = temp__5720__auto___3488__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3280_3489__$1)){
var c__4550__auto___3490 = cljs.core.chunk_first.call(null,seq__3280_3489__$1);
var G__3491 = cljs.core.chunk_rest.call(null,seq__3280_3489__$1);
var G__3492 = c__4550__auto___3490;
var G__3493 = cljs.core.count.call(null,c__4550__auto___3490);
var G__3494 = (0);
seq__3280_3448 = G__3491;
chunk__3281_3449 = G__3492;
count__3282_3450 = G__3493;
i__3283_3451 = G__3494;
continue;
} else {
var vec__3329_3495 = cljs.core.first.call(null,seq__3280_3489__$1);
var column_3496 = cljs.core.nth.call(null,vec__3329_3495,(0),null);
var column_info_3497 = cljs.core.nth.call(null,vec__3329_3495,(1),null);
var seq__3332_3498 = cljs.core.seq.call(null,column_info_3497);
var chunk__3333_3499 = null;
var count__3334_3500 = (0);
var i__3335_3501 = (0);
while(true){
if((i__3335_3501 < count__3334_3500)){
var map__3340_3502 = cljs.core._nth.call(null,chunk__3333_3499,i__3335_3501);
var map__3340_3503__$1 = (((((!((map__3340_3502 == null))))?(((((map__3340_3502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3340_3502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3340_3502):map__3340_3502);
var gline_3504 = cljs.core.get.call(null,map__3340_3503__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3505 = cljs.core.get.call(null,map__3340_3503__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3506 = cljs.core.get.call(null,map__3340_3503__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3504], null),cljs.core.fnil.call(null,((function (seq__3332_3498,chunk__3333_3499,count__3334_3500,i__3335_3501,seq__3280_3448,chunk__3281_3449,count__3282_3450,i__3283_3451,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3340_3502,map__3340_3503__$1,gline_3504,gcol_3505,name_3506,vec__3329_3495,column_3496,column_info_3497,seq__3280_3489__$1,temp__5720__auto___3488__$1,vec__3277_3445,line_3446,columns_3447,seq__3072_3439__$1,temp__5720__auto___3438,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3505], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3446,new cljs.core.Keyword(null,"col","col",-1959363084),column_3496,new cljs.core.Keyword(null,"name","name",1843675177),name_3506], null));
});})(seq__3332_3498,chunk__3333_3499,count__3334_3500,i__3335_3501,seq__3280_3448,chunk__3281_3449,count__3282_3450,i__3283_3451,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3340_3502,map__3340_3503__$1,gline_3504,gcol_3505,name_3506,vec__3329_3495,column_3496,column_info_3497,seq__3280_3489__$1,temp__5720__auto___3488__$1,vec__3277_3445,line_3446,columns_3447,seq__3072_3439__$1,temp__5720__auto___3438,inverted))
,cljs.core.sorted_map.call(null)));


var G__3507 = seq__3332_3498;
var G__3508 = chunk__3333_3499;
var G__3509 = count__3334_3500;
var G__3510 = (i__3335_3501 + (1));
seq__3332_3498 = G__3507;
chunk__3333_3499 = G__3508;
count__3334_3500 = G__3509;
i__3335_3501 = G__3510;
continue;
} else {
var temp__5720__auto___3511__$2 = cljs.core.seq.call(null,seq__3332_3498);
if(temp__5720__auto___3511__$2){
var seq__3332_3512__$1 = temp__5720__auto___3511__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3332_3512__$1)){
var c__4550__auto___3513 = cljs.core.chunk_first.call(null,seq__3332_3512__$1);
var G__3514 = cljs.core.chunk_rest.call(null,seq__3332_3512__$1);
var G__3515 = c__4550__auto___3513;
var G__3516 = cljs.core.count.call(null,c__4550__auto___3513);
var G__3517 = (0);
seq__3332_3498 = G__3514;
chunk__3333_3499 = G__3515;
count__3334_3500 = G__3516;
i__3335_3501 = G__3517;
continue;
} else {
var map__3342_3518 = cljs.core.first.call(null,seq__3332_3512__$1);
var map__3342_3519__$1 = (((((!((map__3342_3518 == null))))?(((((map__3342_3518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3342_3518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3342_3518):map__3342_3518);
var gline_3520 = cljs.core.get.call(null,map__3342_3519__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3521 = cljs.core.get.call(null,map__3342_3519__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3522 = cljs.core.get.call(null,map__3342_3519__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3520], null),cljs.core.fnil.call(null,((function (seq__3332_3498,chunk__3333_3499,count__3334_3500,i__3335_3501,seq__3280_3448,chunk__3281_3449,count__3282_3450,i__3283_3451,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3342_3518,map__3342_3519__$1,gline_3520,gcol_3521,name_3522,seq__3332_3512__$1,temp__5720__auto___3511__$2,vec__3329_3495,column_3496,column_info_3497,seq__3280_3489__$1,temp__5720__auto___3488__$1,vec__3277_3445,line_3446,columns_3447,seq__3072_3439__$1,temp__5720__auto___3438,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3521], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3446,new cljs.core.Keyword(null,"col","col",-1959363084),column_3496,new cljs.core.Keyword(null,"name","name",1843675177),name_3522], null));
});})(seq__3332_3498,chunk__3333_3499,count__3334_3500,i__3335_3501,seq__3280_3448,chunk__3281_3449,count__3282_3450,i__3283_3451,seq__3072_3344,chunk__3073_3345,count__3074_3346,i__3075_3347,map__3342_3518,map__3342_3519__$1,gline_3520,gcol_3521,name_3522,seq__3332_3512__$1,temp__5720__auto___3511__$2,vec__3329_3495,column_3496,column_info_3497,seq__3280_3489__$1,temp__5720__auto___3488__$1,vec__3277_3445,line_3446,columns_3447,seq__3072_3439__$1,temp__5720__auto___3438,inverted))
,cljs.core.sorted_map.call(null)));


var G__3523 = cljs.core.next.call(null,seq__3332_3512__$1);
var G__3524 = null;
var G__3525 = (0);
var G__3526 = (0);
seq__3332_3498 = G__3523;
chunk__3333_3499 = G__3524;
count__3334_3500 = G__3525;
i__3335_3501 = G__3526;
continue;
}
} else {
}
}
break;
}


var G__3527 = cljs.core.next.call(null,seq__3280_3489__$1);
var G__3528 = null;
var G__3529 = (0);
var G__3530 = (0);
seq__3280_3448 = G__3527;
chunk__3281_3449 = G__3528;
count__3282_3450 = G__3529;
i__3283_3451 = G__3530;
continue;
}
} else {
}
}
break;
}


var G__3531 = cljs.core.next.call(null,seq__3072_3439__$1);
var G__3532 = null;
var G__3533 = (0);
var G__3534 = (0);
seq__3072_3344 = G__3531;
chunk__3073_3345 = G__3532;
count__3074_3346 = G__3533;
i__3075_3347 = G__3534;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});
