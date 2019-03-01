// Compiled by ClojureScript 1.10.516 {:elide-asserts true}
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
return cljs.core.reduce.call(null,(function (m,p__4084){
var vec__4085 = p__4084;
var i = cljs.core.nth.call(null,vec__4085,(0),null);
var v = cljs.core.nth.call(null,vec__4085,(1),null);
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
var vec__4089 = seg;
var gcol = cljs.core.nth.call(null,vec__4089,(0),null);
var source = cljs.core.nth.call(null,vec__4089,(1),null);
var line = cljs.core.nth.call(null,vec__4089,(2),null);
var col = cljs.core.nth.call(null,vec__4089,(3),null);
var name = cljs.core.nth.call(null,vec__4089,(4),null);
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
var vec__4097 = seg;
var gcol = cljs.core.nth.call(null,vec__4097,(0),null);
var source = cljs.core.nth.call(null,vec__4097,(1),null);
var line = cljs.core.nth.call(null,vec__4097,(2),null);
var col = cljs.core.nth.call(null,vec__4097,(3),null);
var name = cljs.core.nth.call(null,vec__4097,(4),null);
var vec__4100 = relseg;
var rgcol = cljs.core.nth.call(null,vec__4100,(0),null);
var rsource = cljs.core.nth.call(null,vec__4100,(1),null);
var rline = cljs.core.nth.call(null,vec__4100,(2),null);
var rcol = cljs.core.nth.call(null,vec__4100,(3),null);
var rname = cljs.core.nth.call(null,vec__4100,(4),null);
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
var map__4114 = segmap;
var map__4114__$1 = (((((!((map__4114 == null))))?(((((map__4114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4114):map__4114);
var gcol = cljs.core.get.call(null,map__4114__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4114__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4114__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4114__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4114__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__4114,map__4114__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__4114,map__4114__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__4114,map__4114__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__4114,map__4114__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4114,map__4114__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__4114,map__4114__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__4117 = arguments.length;
switch (G__4117) {
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
var vec__4121 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4128 = cljs.core.next.call(null,segs__$1);
var G__4129 = nrelseg;
var G__4130 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4128;
relseg__$1 = G__4129;
result__$1 = G__4130;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4121,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4121,(1),null);
var G__4131 = (gline + (1));
var G__4132 = cljs.core.next.call(null,lines__$1);
var G__4133 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4134 = result__$1;
gline = G__4131;
lines__$1 = G__4132;
relseg = G__4133;
result = G__4134;
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
var map__4137 = segmap;
var map__4137__$1 = (((((!((map__4137 == null))))?(((((map__4137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4137):map__4137);
var gcol = cljs.core.get.call(null,map__4137__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4137__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4137__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4137__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4137__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__4137,map__4137__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__4137,map__4137__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__4135_SHARP_){
return cljs.core.conj.call(null,p1__4135_SHARP_,d__$1);
});})(map__4137,map__4137__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4137,map__4137__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__4142 = arguments.length;
switch (G__4142) {
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
var vec__4149 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4157 = cljs.core.next.call(null,segs__$1);
var G__4158 = nrelseg;
var G__4159 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4157;
relseg__$1 = G__4158;
result__$1 = G__4159;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4149,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4149,(1),null);
var G__4160 = (gline + (1));
var G__4161 = cljs.core.next.call(null,lines__$1);
var G__4162 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4163 = result__$1;
gline = G__4160;
lines__$1 = G__4161;
relseg = G__4162;
result = G__4163;
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
return (function (p__4164){
var vec__4165 = p__4164;
var _ = cljs.core.nth.call(null,vec__4165,(0),null);
var source = cljs.core.nth.call(null,vec__4165,(1),null);
var line = cljs.core.nth.call(null,vec__4165,(2),null);
var col = cljs.core.nth.call(null,vec__4165,(3),null);
var name = cljs.core.nth.call(null,vec__4165,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__4168){
var vec__4169 = p__4168;
var gcol = cljs.core.nth.call(null,vec__4169,(0),null);
var sidx = cljs.core.nth.call(null,vec__4169,(1),null);
var line = cljs.core.nth.call(null,vec__4169,(2),null);
var col = cljs.core.nth.call(null,vec__4169,(3),null);
var name = cljs.core.nth.call(null,vec__4169,(4),null);
var seg = vec__4169;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__4169,gcol,sidx,line,col,name,seg,relseg){
return (function (p__4172){
var vec__4173 = p__4172;
var _ = cljs.core.nth.call(null,vec__4173,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__4173,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__4173,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__4173,(3),null);
var lname = cljs.core.nth.call(null,vec__4173,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__4169,gcol,sidx,line,col,name,seg,relseg))
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
var seq__4191 = cljs.core.seq.call(null,infos);
var chunk__4192 = null;
var count__4193 = (0);
var i__4194 = (0);
while(true){
if((i__4194 < count__4193)){
var info = cljs.core._nth.call(null,chunk__4192,i__4194);
var segv_4612 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_4613 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_4614 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_4613 > (lc_4614 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4191,chunk__4192,count__4193,i__4194,segv_4612,gline_4613,lc_4614,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_4613 - (lc_4614 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_4612], null));
});})(seq__4191,chunk__4192,count__4193,i__4194,segv_4612,gline_4613,lc_4614,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4191,chunk__4192,count__4193,i__4194,segv_4612,gline_4613,lc_4614,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4613], null),cljs.core.conj,segv_4612);
});})(seq__4191,chunk__4192,count__4193,i__4194,segv_4612,gline_4613,lc_4614,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__4615 = seq__4191;
var G__4616 = chunk__4192;
var G__4617 = count__4193;
var G__4618 = (i__4194 + (1));
seq__4191 = G__4615;
chunk__4192 = G__4616;
count__4193 = G__4617;
i__4194 = G__4618;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__4191);
if(temp__5720__auto__){
var seq__4191__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4191__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4191__$1);
var G__4619 = cljs.core.chunk_rest.call(null,seq__4191__$1);
var G__4620 = c__4550__auto__;
var G__4621 = cljs.core.count.call(null,c__4550__auto__);
var G__4622 = (0);
seq__4191 = G__4619;
chunk__4192 = G__4620;
count__4193 = G__4621;
i__4194 = G__4622;
continue;
} else {
var info = cljs.core.first.call(null,seq__4191__$1);
var segv_4623 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_4624 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_4625 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_4624 > (lc_4625 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4191,chunk__4192,count__4193,i__4194,segv_4623,gline_4624,lc_4625,info,seq__4191__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_4624 - (lc_4625 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_4623], null));
});})(seq__4191,chunk__4192,count__4193,i__4194,segv_4623,gline_4624,lc_4625,info,seq__4191__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4191,chunk__4192,count__4193,i__4194,segv_4623,gline_4624,lc_4625,info,seq__4191__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4624], null),cljs.core.conj,segv_4623);
});})(seq__4191,chunk__4192,count__4193,i__4194,segv_4623,gline_4624,lc_4625,info,seq__4191__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__4630 = cljs.core.next.call(null,seq__4191__$1);
var G__4631 = null;
var G__4632 = (0);
var G__4633 = (0);
seq__4191 = G__4630;
chunk__4192 = G__4631;
count__4193 = G__4632;
i__4194 = G__4633;
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
var seq__4247_4634 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__4248_4635 = null;
var count__4249_4636 = (0);
var i__4250_4637 = (0);
while(true){
if((i__4250_4637 < count__4249_4636)){
var vec__4432_4638 = cljs.core._nth.call(null,chunk__4248_4635,i__4250_4637);
var source_idx_4639 = cljs.core.nth.call(null,vec__4432_4638,(0),null);
var vec__4435_4640 = cljs.core.nth.call(null,vec__4432_4638,(1),null);
var __4641 = cljs.core.nth.call(null,vec__4435_4640,(0),null);
var lines_4642__$1 = cljs.core.nth.call(null,vec__4435_4640,(1),null);
var seq__4438_4644 = cljs.core.seq.call(null,lines_4642__$1);
var chunk__4439_4645 = null;
var count__4440_4646 = (0);
var i__4441_4647 = (0);
while(true){
if((i__4441_4647 < count__4440_4646)){
var vec__4483_4651 = cljs.core._nth.call(null,chunk__4439_4645,i__4441_4647);
var line_4652 = cljs.core.nth.call(null,vec__4483_4651,(0),null);
var cols_4653 = cljs.core.nth.call(null,vec__4483_4651,(1),null);
var seq__4486_4654 = cljs.core.seq.call(null,cols_4653);
var chunk__4487_4655 = null;
var count__4488_4656 = (0);
var i__4489_4657 = (0);
while(true){
if((i__4489_4657 < count__4488_4656)){
var vec__4497_4658 = cljs.core._nth.call(null,chunk__4487_4655,i__4489_4657);
var col_4659 = cljs.core.nth.call(null,vec__4497_4658,(0),null);
var infos_4660 = cljs.core.nth.call(null,vec__4497_4658,(1),null);
encode_cols.call(null,infos_4660,source_idx_4639,line_4652,col_4659);


var G__4661 = seq__4486_4654;
var G__4662 = chunk__4487_4655;
var G__4663 = count__4488_4656;
var G__4664 = (i__4489_4657 + (1));
seq__4486_4654 = G__4661;
chunk__4487_4655 = G__4662;
count__4488_4656 = G__4663;
i__4489_4657 = G__4664;
continue;
} else {
var temp__5720__auto___4665 = cljs.core.seq.call(null,seq__4486_4654);
if(temp__5720__auto___4665){
var seq__4486_4666__$1 = temp__5720__auto___4665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4486_4666__$1)){
var c__4550__auto___4667 = cljs.core.chunk_first.call(null,seq__4486_4666__$1);
var G__4668 = cljs.core.chunk_rest.call(null,seq__4486_4666__$1);
var G__4669 = c__4550__auto___4667;
var G__4670 = cljs.core.count.call(null,c__4550__auto___4667);
var G__4671 = (0);
seq__4486_4654 = G__4668;
chunk__4487_4655 = G__4669;
count__4488_4656 = G__4670;
i__4489_4657 = G__4671;
continue;
} else {
var vec__4500_4672 = cljs.core.first.call(null,seq__4486_4666__$1);
var col_4673 = cljs.core.nth.call(null,vec__4500_4672,(0),null);
var infos_4674 = cljs.core.nth.call(null,vec__4500_4672,(1),null);
encode_cols.call(null,infos_4674,source_idx_4639,line_4652,col_4673);


var G__4675 = cljs.core.next.call(null,seq__4486_4666__$1);
var G__4676 = null;
var G__4677 = (0);
var G__4678 = (0);
seq__4486_4654 = G__4675;
chunk__4487_4655 = G__4676;
count__4488_4656 = G__4677;
i__4489_4657 = G__4678;
continue;
}
} else {
}
}
break;
}


var G__4679 = seq__4438_4644;
var G__4680 = chunk__4439_4645;
var G__4681 = count__4440_4646;
var G__4682 = (i__4441_4647 + (1));
seq__4438_4644 = G__4679;
chunk__4439_4645 = G__4680;
count__4440_4646 = G__4681;
i__4441_4647 = G__4682;
continue;
} else {
var temp__5720__auto___4683 = cljs.core.seq.call(null,seq__4438_4644);
if(temp__5720__auto___4683){
var seq__4438_4697__$1 = temp__5720__auto___4683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4438_4697__$1)){
var c__4550__auto___4698 = cljs.core.chunk_first.call(null,seq__4438_4697__$1);
var G__4699 = cljs.core.chunk_rest.call(null,seq__4438_4697__$1);
var G__4700 = c__4550__auto___4698;
var G__4701 = cljs.core.count.call(null,c__4550__auto___4698);
var G__4702 = (0);
seq__4438_4644 = G__4699;
chunk__4439_4645 = G__4700;
count__4440_4646 = G__4701;
i__4441_4647 = G__4702;
continue;
} else {
var vec__4503_4703 = cljs.core.first.call(null,seq__4438_4697__$1);
var line_4704 = cljs.core.nth.call(null,vec__4503_4703,(0),null);
var cols_4705 = cljs.core.nth.call(null,vec__4503_4703,(1),null);
var seq__4506_4706 = cljs.core.seq.call(null,cols_4705);
var chunk__4507_4707 = null;
var count__4508_4708 = (0);
var i__4509_4709 = (0);
while(true){
if((i__4509_4709 < count__4508_4708)){
var vec__4516_4710 = cljs.core._nth.call(null,chunk__4507_4707,i__4509_4709);
var col_4711 = cljs.core.nth.call(null,vec__4516_4710,(0),null);
var infos_4712 = cljs.core.nth.call(null,vec__4516_4710,(1),null);
encode_cols.call(null,infos_4712,source_idx_4639,line_4704,col_4711);


var G__4713 = seq__4506_4706;
var G__4714 = chunk__4507_4707;
var G__4715 = count__4508_4708;
var G__4716 = (i__4509_4709 + (1));
seq__4506_4706 = G__4713;
chunk__4507_4707 = G__4714;
count__4508_4708 = G__4715;
i__4509_4709 = G__4716;
continue;
} else {
var temp__5720__auto___4717__$1 = cljs.core.seq.call(null,seq__4506_4706);
if(temp__5720__auto___4717__$1){
var seq__4506_4718__$1 = temp__5720__auto___4717__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4506_4718__$1)){
var c__4550__auto___4719 = cljs.core.chunk_first.call(null,seq__4506_4718__$1);
var G__4720 = cljs.core.chunk_rest.call(null,seq__4506_4718__$1);
var G__4721 = c__4550__auto___4719;
var G__4722 = cljs.core.count.call(null,c__4550__auto___4719);
var G__4723 = (0);
seq__4506_4706 = G__4720;
chunk__4507_4707 = G__4721;
count__4508_4708 = G__4722;
i__4509_4709 = G__4723;
continue;
} else {
var vec__4519_4724 = cljs.core.first.call(null,seq__4506_4718__$1);
var col_4725 = cljs.core.nth.call(null,vec__4519_4724,(0),null);
var infos_4726 = cljs.core.nth.call(null,vec__4519_4724,(1),null);
encode_cols.call(null,infos_4726,source_idx_4639,line_4704,col_4725);


var G__4727 = cljs.core.next.call(null,seq__4506_4718__$1);
var G__4728 = null;
var G__4729 = (0);
var G__4730 = (0);
seq__4506_4706 = G__4727;
chunk__4507_4707 = G__4728;
count__4508_4708 = G__4729;
i__4509_4709 = G__4730;
continue;
}
} else {
}
}
break;
}


var G__4731 = cljs.core.next.call(null,seq__4438_4697__$1);
var G__4732 = null;
var G__4733 = (0);
var G__4734 = (0);
seq__4438_4644 = G__4731;
chunk__4439_4645 = G__4732;
count__4440_4646 = G__4733;
i__4441_4647 = G__4734;
continue;
}
} else {
}
}
break;
}


var G__4735 = seq__4247_4634;
var G__4736 = chunk__4248_4635;
var G__4737 = count__4249_4636;
var G__4738 = (i__4250_4637 + (1));
seq__4247_4634 = G__4735;
chunk__4248_4635 = G__4736;
count__4249_4636 = G__4737;
i__4250_4637 = G__4738;
continue;
} else {
var temp__5720__auto___4739 = cljs.core.seq.call(null,seq__4247_4634);
if(temp__5720__auto___4739){
var seq__4247_4740__$1 = temp__5720__auto___4739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4247_4740__$1)){
var c__4550__auto___4741 = cljs.core.chunk_first.call(null,seq__4247_4740__$1);
var G__4742 = cljs.core.chunk_rest.call(null,seq__4247_4740__$1);
var G__4743 = c__4550__auto___4741;
var G__4744 = cljs.core.count.call(null,c__4550__auto___4741);
var G__4745 = (0);
seq__4247_4634 = G__4742;
chunk__4248_4635 = G__4743;
count__4249_4636 = G__4744;
i__4250_4637 = G__4745;
continue;
} else {
var vec__4522_4746 = cljs.core.first.call(null,seq__4247_4740__$1);
var source_idx_4747 = cljs.core.nth.call(null,vec__4522_4746,(0),null);
var vec__4525_4748 = cljs.core.nth.call(null,vec__4522_4746,(1),null);
var __4749 = cljs.core.nth.call(null,vec__4525_4748,(0),null);
var lines_4750__$1 = cljs.core.nth.call(null,vec__4525_4748,(1),null);
var seq__4528_4751 = cljs.core.seq.call(null,lines_4750__$1);
var chunk__4529_4752 = null;
var count__4530_4753 = (0);
var i__4531_4754 = (0);
while(true){
if((i__4531_4754 < count__4530_4753)){
var vec__4570_4755 = cljs.core._nth.call(null,chunk__4529_4752,i__4531_4754);
var line_4756 = cljs.core.nth.call(null,vec__4570_4755,(0),null);
var cols_4757 = cljs.core.nth.call(null,vec__4570_4755,(1),null);
var seq__4573_4758 = cljs.core.seq.call(null,cols_4757);
var chunk__4574_4759 = null;
var count__4575_4760 = (0);
var i__4576_4761 = (0);
while(true){
if((i__4576_4761 < count__4575_4760)){
var vec__4583_4762 = cljs.core._nth.call(null,chunk__4574_4759,i__4576_4761);
var col_4763 = cljs.core.nth.call(null,vec__4583_4762,(0),null);
var infos_4764 = cljs.core.nth.call(null,vec__4583_4762,(1),null);
encode_cols.call(null,infos_4764,source_idx_4747,line_4756,col_4763);


var G__4765 = seq__4573_4758;
var G__4766 = chunk__4574_4759;
var G__4767 = count__4575_4760;
var G__4768 = (i__4576_4761 + (1));
seq__4573_4758 = G__4765;
chunk__4574_4759 = G__4766;
count__4575_4760 = G__4767;
i__4576_4761 = G__4768;
continue;
} else {
var temp__5720__auto___4769__$1 = cljs.core.seq.call(null,seq__4573_4758);
if(temp__5720__auto___4769__$1){
var seq__4573_4770__$1 = temp__5720__auto___4769__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4573_4770__$1)){
var c__4550__auto___4787 = cljs.core.chunk_first.call(null,seq__4573_4770__$1);
var G__4788 = cljs.core.chunk_rest.call(null,seq__4573_4770__$1);
var G__4789 = c__4550__auto___4787;
var G__4790 = cljs.core.count.call(null,c__4550__auto___4787);
var G__4791 = (0);
seq__4573_4758 = G__4788;
chunk__4574_4759 = G__4789;
count__4575_4760 = G__4790;
i__4576_4761 = G__4791;
continue;
} else {
var vec__4586_4794 = cljs.core.first.call(null,seq__4573_4770__$1);
var col_4795 = cljs.core.nth.call(null,vec__4586_4794,(0),null);
var infos_4796 = cljs.core.nth.call(null,vec__4586_4794,(1),null);
encode_cols.call(null,infos_4796,source_idx_4747,line_4756,col_4795);


var G__4797 = cljs.core.next.call(null,seq__4573_4770__$1);
var G__4798 = null;
var G__4799 = (0);
var G__4800 = (0);
seq__4573_4758 = G__4797;
chunk__4574_4759 = G__4798;
count__4575_4760 = G__4799;
i__4576_4761 = G__4800;
continue;
}
} else {
}
}
break;
}


var G__4802 = seq__4528_4751;
var G__4803 = chunk__4529_4752;
var G__4804 = count__4530_4753;
var G__4805 = (i__4531_4754 + (1));
seq__4528_4751 = G__4802;
chunk__4529_4752 = G__4803;
count__4530_4753 = G__4804;
i__4531_4754 = G__4805;
continue;
} else {
var temp__5720__auto___4806__$1 = cljs.core.seq.call(null,seq__4528_4751);
if(temp__5720__auto___4806__$1){
var seq__4528_4807__$1 = temp__5720__auto___4806__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4528_4807__$1)){
var c__4550__auto___4808 = cljs.core.chunk_first.call(null,seq__4528_4807__$1);
var G__4810 = cljs.core.chunk_rest.call(null,seq__4528_4807__$1);
var G__4811 = c__4550__auto___4808;
var G__4812 = cljs.core.count.call(null,c__4550__auto___4808);
var G__4813 = (0);
seq__4528_4751 = G__4810;
chunk__4529_4752 = G__4811;
count__4530_4753 = G__4812;
i__4531_4754 = G__4813;
continue;
} else {
var vec__4591_4814 = cljs.core.first.call(null,seq__4528_4807__$1);
var line_4815 = cljs.core.nth.call(null,vec__4591_4814,(0),null);
var cols_4816 = cljs.core.nth.call(null,vec__4591_4814,(1),null);
var seq__4594_4817 = cljs.core.seq.call(null,cols_4816);
var chunk__4595_4818 = null;
var count__4596_4819 = (0);
var i__4597_4820 = (0);
while(true){
if((i__4597_4820 < count__4596_4819)){
var vec__4604_4821 = cljs.core._nth.call(null,chunk__4595_4818,i__4597_4820);
var col_4822 = cljs.core.nth.call(null,vec__4604_4821,(0),null);
var infos_4823 = cljs.core.nth.call(null,vec__4604_4821,(1),null);
encode_cols.call(null,infos_4823,source_idx_4747,line_4815,col_4822);


var G__4824 = seq__4594_4817;
var G__4825 = chunk__4595_4818;
var G__4826 = count__4596_4819;
var G__4827 = (i__4597_4820 + (1));
seq__4594_4817 = G__4824;
chunk__4595_4818 = G__4825;
count__4596_4819 = G__4826;
i__4597_4820 = G__4827;
continue;
} else {
var temp__5720__auto___4828__$2 = cljs.core.seq.call(null,seq__4594_4817);
if(temp__5720__auto___4828__$2){
var seq__4594_4829__$1 = temp__5720__auto___4828__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4594_4829__$1)){
var c__4550__auto___4830 = cljs.core.chunk_first.call(null,seq__4594_4829__$1);
var G__4831 = cljs.core.chunk_rest.call(null,seq__4594_4829__$1);
var G__4832 = c__4550__auto___4830;
var G__4833 = cljs.core.count.call(null,c__4550__auto___4830);
var G__4834 = (0);
seq__4594_4817 = G__4831;
chunk__4595_4818 = G__4832;
count__4596_4819 = G__4833;
i__4597_4820 = G__4834;
continue;
} else {
var vec__4607_4835 = cljs.core.first.call(null,seq__4594_4829__$1);
var col_4836 = cljs.core.nth.call(null,vec__4607_4835,(0),null);
var infos_4837 = cljs.core.nth.call(null,vec__4607_4835,(1),null);
encode_cols.call(null,infos_4837,source_idx_4747,line_4815,col_4836);


var G__4838 = cljs.core.next.call(null,seq__4594_4829__$1);
var G__4839 = null;
var G__4840 = (0);
var G__4841 = (0);
seq__4594_4817 = G__4838;
chunk__4595_4818 = G__4839;
count__4596_4819 = G__4840;
i__4597_4820 = G__4841;
continue;
}
} else {
}
}
break;
}


var G__4842 = cljs.core.next.call(null,seq__4528_4807__$1);
var G__4843 = null;
var G__4844 = (0);
var G__4845 = (0);
seq__4528_4751 = G__4842;
chunk__4529_4752 = G__4843;
count__4530_4753 = G__4844;
i__4531_4754 = G__4845;
continue;
}
} else {
}
}
break;
}


var G__4846 = cljs.core.next.call(null,seq__4247_4740__$1);
var G__4847 = null;
var G__4848 = (0);
var G__4849 = (0);
seq__4247_4634 = G__4846;
chunk__4248_4635 = G__4847;
count__4249_4636 = G__4848;
i__4250_4637 = G__4849;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__4610 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4188_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4188_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4189_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__4189_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4190_SHARP_){
return clojure.string.join.call(null,",",p1__4190_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__4611 = G__4610;
goog.object.set(G__4611,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__4611;
} else {
return G__4610;
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
var vec__4684 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__4684,(0),null);
var col_map = cljs.core.nth.call(null,vec__4684,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__4687 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__4687,(0),null);
var infos = cljs.core.nth.call(null,vec__4687,(1),null);
var G__4859 = cljs.core.next.call(null,col_map_seq);
var G__4860 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__4687,col,infos,vec__4684,line,col_map){
return (function (v,p__4690){
var map__4691 = p__4690;
var map__4691__$1 = (((((!((map__4691 == null))))?(((((map__4691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4691):map__4691);
var gline = cljs.core.get.call(null,map__4691__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__4691__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__4687,col,infos,vec__4684,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__4859;
new_cols = G__4860;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__4861 = cljs.core.next.call(null,line_map_seq);
var G__4862 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__4861;
new_lines = G__4862;
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
var seq__4693_5370 = cljs.core.seq.call(null,reverse_map);
var chunk__4694_5371 = null;
var count__4695_5372 = (0);
var i__4696_5373 = (0);
while(true){
if((i__4696_5373 < count__4695_5372)){
var vec__5041_5374 = cljs.core._nth.call(null,chunk__4694_5371,i__4696_5373);
var line_5375 = cljs.core.nth.call(null,vec__5041_5374,(0),null);
var columns_5376 = cljs.core.nth.call(null,vec__5041_5374,(1),null);
var seq__5044_5377 = cljs.core.seq.call(null,columns_5376);
var chunk__5045_5378 = null;
var count__5047_5379 = (0);
var i__5048_5380 = (0);
while(true){
if((i__5048_5380 < count__5047_5379)){
var vec__5167_5381 = cljs.core._nth.call(null,chunk__5045_5378,i__5048_5380);
var column_5382 = cljs.core.nth.call(null,vec__5167_5381,(0),null);
var column_info_5383 = cljs.core.nth.call(null,vec__5167_5381,(1),null);
var seq__5171_5384 = cljs.core.seq.call(null,column_info_5383);
var chunk__5172_5385 = null;
var count__5173_5386 = (0);
var i__5174_5387 = (0);
while(true){
if((i__5174_5387 < count__5173_5386)){
var map__5181_5388 = cljs.core._nth.call(null,chunk__5172_5385,i__5174_5387);
var map__5181_5389__$1 = (((((!((map__5181_5388 == null))))?(((((map__5181_5388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5181_5388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5181_5388):map__5181_5388);
var gline_5390 = cljs.core.get.call(null,map__5181_5389__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5391 = cljs.core.get.call(null,map__5181_5389__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5392 = cljs.core.get.call(null,map__5181_5389__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5390], null),cljs.core.fnil.call(null,((function (seq__5171_5384,chunk__5172_5385,count__5173_5386,i__5174_5387,seq__5044_5377,chunk__5045_5378,count__5047_5379,i__5048_5380,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5181_5388,map__5181_5389__$1,gline_5390,gcol_5391,name_5392,vec__5167_5381,column_5382,column_info_5383,vec__5041_5374,line_5375,columns_5376,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5391], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5375,new cljs.core.Keyword(null,"col","col",-1959363084),column_5382,new cljs.core.Keyword(null,"name","name",1843675177),name_5392], null));
});})(seq__5171_5384,chunk__5172_5385,count__5173_5386,i__5174_5387,seq__5044_5377,chunk__5045_5378,count__5047_5379,i__5048_5380,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5181_5388,map__5181_5389__$1,gline_5390,gcol_5391,name_5392,vec__5167_5381,column_5382,column_info_5383,vec__5041_5374,line_5375,columns_5376,inverted))
,cljs.core.sorted_map.call(null)));


var G__5394 = seq__5171_5384;
var G__5395 = chunk__5172_5385;
var G__5396 = count__5173_5386;
var G__5397 = (i__5174_5387 + (1));
seq__5171_5384 = G__5394;
chunk__5172_5385 = G__5395;
count__5173_5386 = G__5396;
i__5174_5387 = G__5397;
continue;
} else {
var temp__5720__auto___5398 = cljs.core.seq.call(null,seq__5171_5384);
if(temp__5720__auto___5398){
var seq__5171_5399__$1 = temp__5720__auto___5398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5171_5399__$1)){
var c__4550__auto___5400 = cljs.core.chunk_first.call(null,seq__5171_5399__$1);
var G__5401 = cljs.core.chunk_rest.call(null,seq__5171_5399__$1);
var G__5402 = c__4550__auto___5400;
var G__5403 = cljs.core.count.call(null,c__4550__auto___5400);
var G__5404 = (0);
seq__5171_5384 = G__5401;
chunk__5172_5385 = G__5402;
count__5173_5386 = G__5403;
i__5174_5387 = G__5404;
continue;
} else {
var map__5183_5405 = cljs.core.first.call(null,seq__5171_5399__$1);
var map__5183_5406__$1 = (((((!((map__5183_5405 == null))))?(((((map__5183_5405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5183_5405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5183_5405):map__5183_5405);
var gline_5407 = cljs.core.get.call(null,map__5183_5406__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5408 = cljs.core.get.call(null,map__5183_5406__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5409 = cljs.core.get.call(null,map__5183_5406__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5407], null),cljs.core.fnil.call(null,((function (seq__5171_5384,chunk__5172_5385,count__5173_5386,i__5174_5387,seq__5044_5377,chunk__5045_5378,count__5047_5379,i__5048_5380,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5183_5405,map__5183_5406__$1,gline_5407,gcol_5408,name_5409,seq__5171_5399__$1,temp__5720__auto___5398,vec__5167_5381,column_5382,column_info_5383,vec__5041_5374,line_5375,columns_5376,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5408], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5375,new cljs.core.Keyword(null,"col","col",-1959363084),column_5382,new cljs.core.Keyword(null,"name","name",1843675177),name_5409], null));
});})(seq__5171_5384,chunk__5172_5385,count__5173_5386,i__5174_5387,seq__5044_5377,chunk__5045_5378,count__5047_5379,i__5048_5380,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5183_5405,map__5183_5406__$1,gline_5407,gcol_5408,name_5409,seq__5171_5399__$1,temp__5720__auto___5398,vec__5167_5381,column_5382,column_info_5383,vec__5041_5374,line_5375,columns_5376,inverted))
,cljs.core.sorted_map.call(null)));


var G__5412 = cljs.core.next.call(null,seq__5171_5399__$1);
var G__5413 = null;
var G__5414 = (0);
var G__5415 = (0);
seq__5171_5384 = G__5412;
chunk__5172_5385 = G__5413;
count__5173_5386 = G__5414;
i__5174_5387 = G__5415;
continue;
}
} else {
}
}
break;
}


var G__5416 = seq__5044_5377;
var G__5417 = chunk__5045_5378;
var G__5418 = count__5047_5379;
var G__5419 = (i__5048_5380 + (1));
seq__5044_5377 = G__5416;
chunk__5045_5378 = G__5417;
count__5047_5379 = G__5418;
i__5048_5380 = G__5419;
continue;
} else {
var temp__5720__auto___5420 = cljs.core.seq.call(null,seq__5044_5377);
if(temp__5720__auto___5420){
var seq__5044_5421__$1 = temp__5720__auto___5420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5044_5421__$1)){
var c__4550__auto___5422 = cljs.core.chunk_first.call(null,seq__5044_5421__$1);
var G__5423 = cljs.core.chunk_rest.call(null,seq__5044_5421__$1);
var G__5424 = c__4550__auto___5422;
var G__5425 = cljs.core.count.call(null,c__4550__auto___5422);
var G__5426 = (0);
seq__5044_5377 = G__5423;
chunk__5045_5378 = G__5424;
count__5047_5379 = G__5425;
i__5048_5380 = G__5426;
continue;
} else {
var vec__5189_5427 = cljs.core.first.call(null,seq__5044_5421__$1);
var column_5428 = cljs.core.nth.call(null,vec__5189_5427,(0),null);
var column_info_5429 = cljs.core.nth.call(null,vec__5189_5427,(1),null);
var seq__5192_5430 = cljs.core.seq.call(null,column_info_5429);
var chunk__5193_5431 = null;
var count__5194_5432 = (0);
var i__5195_5433 = (0);
while(true){
if((i__5195_5433 < count__5194_5432)){
var map__5200_5434 = cljs.core._nth.call(null,chunk__5193_5431,i__5195_5433);
var map__5200_5435__$1 = (((((!((map__5200_5434 == null))))?(((((map__5200_5434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5200_5434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5200_5434):map__5200_5434);
var gline_5436 = cljs.core.get.call(null,map__5200_5435__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5437 = cljs.core.get.call(null,map__5200_5435__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5438 = cljs.core.get.call(null,map__5200_5435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5436], null),cljs.core.fnil.call(null,((function (seq__5192_5430,chunk__5193_5431,count__5194_5432,i__5195_5433,seq__5044_5377,chunk__5045_5378,count__5047_5379,i__5048_5380,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5200_5434,map__5200_5435__$1,gline_5436,gcol_5437,name_5438,vec__5189_5427,column_5428,column_info_5429,seq__5044_5421__$1,temp__5720__auto___5420,vec__5041_5374,line_5375,columns_5376,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5437], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5375,new cljs.core.Keyword(null,"col","col",-1959363084),column_5428,new cljs.core.Keyword(null,"name","name",1843675177),name_5438], null));
});})(seq__5192_5430,chunk__5193_5431,count__5194_5432,i__5195_5433,seq__5044_5377,chunk__5045_5378,count__5047_5379,i__5048_5380,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5200_5434,map__5200_5435__$1,gline_5436,gcol_5437,name_5438,vec__5189_5427,column_5428,column_info_5429,seq__5044_5421__$1,temp__5720__auto___5420,vec__5041_5374,line_5375,columns_5376,inverted))
,cljs.core.sorted_map.call(null)));


var G__5440 = seq__5192_5430;
var G__5441 = chunk__5193_5431;
var G__5442 = count__5194_5432;
var G__5443 = (i__5195_5433 + (1));
seq__5192_5430 = G__5440;
chunk__5193_5431 = G__5441;
count__5194_5432 = G__5442;
i__5195_5433 = G__5443;
continue;
} else {
var temp__5720__auto___5444__$1 = cljs.core.seq.call(null,seq__5192_5430);
if(temp__5720__auto___5444__$1){
var seq__5192_5445__$1 = temp__5720__auto___5444__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5192_5445__$1)){
var c__4550__auto___5446 = cljs.core.chunk_first.call(null,seq__5192_5445__$1);
var G__5447 = cljs.core.chunk_rest.call(null,seq__5192_5445__$1);
var G__5448 = c__4550__auto___5446;
var G__5449 = cljs.core.count.call(null,c__4550__auto___5446);
var G__5450 = (0);
seq__5192_5430 = G__5447;
chunk__5193_5431 = G__5448;
count__5194_5432 = G__5449;
i__5195_5433 = G__5450;
continue;
} else {
var map__5206_5451 = cljs.core.first.call(null,seq__5192_5445__$1);
var map__5206_5452__$1 = (((((!((map__5206_5451 == null))))?(((((map__5206_5451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5206_5451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5206_5451):map__5206_5451);
var gline_5453 = cljs.core.get.call(null,map__5206_5452__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5454 = cljs.core.get.call(null,map__5206_5452__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5455 = cljs.core.get.call(null,map__5206_5452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5453], null),cljs.core.fnil.call(null,((function (seq__5192_5430,chunk__5193_5431,count__5194_5432,i__5195_5433,seq__5044_5377,chunk__5045_5378,count__5047_5379,i__5048_5380,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5206_5451,map__5206_5452__$1,gline_5453,gcol_5454,name_5455,seq__5192_5445__$1,temp__5720__auto___5444__$1,vec__5189_5427,column_5428,column_info_5429,seq__5044_5421__$1,temp__5720__auto___5420,vec__5041_5374,line_5375,columns_5376,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5454], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5375,new cljs.core.Keyword(null,"col","col",-1959363084),column_5428,new cljs.core.Keyword(null,"name","name",1843675177),name_5455], null));
});})(seq__5192_5430,chunk__5193_5431,count__5194_5432,i__5195_5433,seq__5044_5377,chunk__5045_5378,count__5047_5379,i__5048_5380,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5206_5451,map__5206_5452__$1,gline_5453,gcol_5454,name_5455,seq__5192_5445__$1,temp__5720__auto___5444__$1,vec__5189_5427,column_5428,column_info_5429,seq__5044_5421__$1,temp__5720__auto___5420,vec__5041_5374,line_5375,columns_5376,inverted))
,cljs.core.sorted_map.call(null)));


var G__5456 = cljs.core.next.call(null,seq__5192_5445__$1);
var G__5457 = null;
var G__5458 = (0);
var G__5459 = (0);
seq__5192_5430 = G__5456;
chunk__5193_5431 = G__5457;
count__5194_5432 = G__5458;
i__5195_5433 = G__5459;
continue;
}
} else {
}
}
break;
}


var G__5460 = cljs.core.next.call(null,seq__5044_5421__$1);
var G__5461 = null;
var G__5462 = (0);
var G__5463 = (0);
seq__5044_5377 = G__5460;
chunk__5045_5378 = G__5461;
count__5047_5379 = G__5462;
i__5048_5380 = G__5463;
continue;
}
} else {
}
}
break;
}


var G__5464 = seq__4693_5370;
var G__5465 = chunk__4694_5371;
var G__5466 = count__4695_5372;
var G__5467 = (i__4696_5373 + (1));
seq__4693_5370 = G__5464;
chunk__4694_5371 = G__5465;
count__4695_5372 = G__5466;
i__4696_5373 = G__5467;
continue;
} else {
var temp__5720__auto___5468 = cljs.core.seq.call(null,seq__4693_5370);
if(temp__5720__auto___5468){
var seq__4693_5469__$1 = temp__5720__auto___5468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4693_5469__$1)){
var c__4550__auto___5470 = cljs.core.chunk_first.call(null,seq__4693_5469__$1);
var G__5471 = cljs.core.chunk_rest.call(null,seq__4693_5469__$1);
var G__5472 = c__4550__auto___5470;
var G__5473 = cljs.core.count.call(null,c__4550__auto___5470);
var G__5474 = (0);
seq__4693_5370 = G__5471;
chunk__4694_5371 = G__5472;
count__4695_5372 = G__5473;
i__4696_5373 = G__5474;
continue;
} else {
var vec__5214_5475 = cljs.core.first.call(null,seq__4693_5469__$1);
var line_5476 = cljs.core.nth.call(null,vec__5214_5475,(0),null);
var columns_5477 = cljs.core.nth.call(null,vec__5214_5475,(1),null);
var seq__5217_5478 = cljs.core.seq.call(null,columns_5477);
var chunk__5218_5479 = null;
var count__5219_5480 = (0);
var i__5220_5481 = (0);
while(true){
if((i__5220_5481 < count__5219_5480)){
var vec__5293_5482 = cljs.core._nth.call(null,chunk__5218_5479,i__5220_5481);
var column_5483 = cljs.core.nth.call(null,vec__5293_5482,(0),null);
var column_info_5484 = cljs.core.nth.call(null,vec__5293_5482,(1),null);
var seq__5296_5485 = cljs.core.seq.call(null,column_info_5484);
var chunk__5297_5486 = null;
var count__5298_5487 = (0);
var i__5299_5488 = (0);
while(true){
if((i__5299_5488 < count__5298_5487)){
var map__5321_5489 = cljs.core._nth.call(null,chunk__5297_5486,i__5299_5488);
var map__5321_5490__$1 = (((((!((map__5321_5489 == null))))?(((((map__5321_5489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5321_5489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5321_5489):map__5321_5489);
var gline_5491 = cljs.core.get.call(null,map__5321_5490__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5492 = cljs.core.get.call(null,map__5321_5490__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5493 = cljs.core.get.call(null,map__5321_5490__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5491], null),cljs.core.fnil.call(null,((function (seq__5296_5485,chunk__5297_5486,count__5298_5487,i__5299_5488,seq__5217_5478,chunk__5218_5479,count__5219_5480,i__5220_5481,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5321_5489,map__5321_5490__$1,gline_5491,gcol_5492,name_5493,vec__5293_5482,column_5483,column_info_5484,vec__5214_5475,line_5476,columns_5477,seq__4693_5469__$1,temp__5720__auto___5468,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5492], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5476,new cljs.core.Keyword(null,"col","col",-1959363084),column_5483,new cljs.core.Keyword(null,"name","name",1843675177),name_5493], null));
});})(seq__5296_5485,chunk__5297_5486,count__5298_5487,i__5299_5488,seq__5217_5478,chunk__5218_5479,count__5219_5480,i__5220_5481,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5321_5489,map__5321_5490__$1,gline_5491,gcol_5492,name_5493,vec__5293_5482,column_5483,column_info_5484,vec__5214_5475,line_5476,columns_5477,seq__4693_5469__$1,temp__5720__auto___5468,inverted))
,cljs.core.sorted_map.call(null)));


var G__5494 = seq__5296_5485;
var G__5495 = chunk__5297_5486;
var G__5496 = count__5298_5487;
var G__5497 = (i__5299_5488 + (1));
seq__5296_5485 = G__5494;
chunk__5297_5486 = G__5495;
count__5298_5487 = G__5496;
i__5299_5488 = G__5497;
continue;
} else {
var temp__5720__auto___5498__$1 = cljs.core.seq.call(null,seq__5296_5485);
if(temp__5720__auto___5498__$1){
var seq__5296_5499__$1 = temp__5720__auto___5498__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5296_5499__$1)){
var c__4550__auto___5500 = cljs.core.chunk_first.call(null,seq__5296_5499__$1);
var G__5501 = cljs.core.chunk_rest.call(null,seq__5296_5499__$1);
var G__5502 = c__4550__auto___5500;
var G__5503 = cljs.core.count.call(null,c__4550__auto___5500);
var G__5504 = (0);
seq__5296_5485 = G__5501;
chunk__5297_5486 = G__5502;
count__5298_5487 = G__5503;
i__5299_5488 = G__5504;
continue;
} else {
var map__5338_5505 = cljs.core.first.call(null,seq__5296_5499__$1);
var map__5338_5506__$1 = (((((!((map__5338_5505 == null))))?(((((map__5338_5505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5338_5505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5338_5505):map__5338_5505);
var gline_5507 = cljs.core.get.call(null,map__5338_5506__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5508 = cljs.core.get.call(null,map__5338_5506__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5509 = cljs.core.get.call(null,map__5338_5506__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5507], null),cljs.core.fnil.call(null,((function (seq__5296_5485,chunk__5297_5486,count__5298_5487,i__5299_5488,seq__5217_5478,chunk__5218_5479,count__5219_5480,i__5220_5481,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5338_5505,map__5338_5506__$1,gline_5507,gcol_5508,name_5509,seq__5296_5499__$1,temp__5720__auto___5498__$1,vec__5293_5482,column_5483,column_info_5484,vec__5214_5475,line_5476,columns_5477,seq__4693_5469__$1,temp__5720__auto___5468,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5508], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5476,new cljs.core.Keyword(null,"col","col",-1959363084),column_5483,new cljs.core.Keyword(null,"name","name",1843675177),name_5509], null));
});})(seq__5296_5485,chunk__5297_5486,count__5298_5487,i__5299_5488,seq__5217_5478,chunk__5218_5479,count__5219_5480,i__5220_5481,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5338_5505,map__5338_5506__$1,gline_5507,gcol_5508,name_5509,seq__5296_5499__$1,temp__5720__auto___5498__$1,vec__5293_5482,column_5483,column_info_5484,vec__5214_5475,line_5476,columns_5477,seq__4693_5469__$1,temp__5720__auto___5468,inverted))
,cljs.core.sorted_map.call(null)));


var G__5510 = cljs.core.next.call(null,seq__5296_5499__$1);
var G__5511 = null;
var G__5512 = (0);
var G__5513 = (0);
seq__5296_5485 = G__5510;
chunk__5297_5486 = G__5511;
count__5298_5487 = G__5512;
i__5299_5488 = G__5513;
continue;
}
} else {
}
}
break;
}


var G__5514 = seq__5217_5478;
var G__5515 = chunk__5218_5479;
var G__5516 = count__5219_5480;
var G__5517 = (i__5220_5481 + (1));
seq__5217_5478 = G__5514;
chunk__5218_5479 = G__5515;
count__5219_5480 = G__5516;
i__5220_5481 = G__5517;
continue;
} else {
var temp__5720__auto___5518__$1 = cljs.core.seq.call(null,seq__5217_5478);
if(temp__5720__auto___5518__$1){
var seq__5217_5519__$1 = temp__5720__auto___5518__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5217_5519__$1)){
var c__4550__auto___5520 = cljs.core.chunk_first.call(null,seq__5217_5519__$1);
var G__5521 = cljs.core.chunk_rest.call(null,seq__5217_5519__$1);
var G__5522 = c__4550__auto___5520;
var G__5523 = cljs.core.count.call(null,c__4550__auto___5520);
var G__5524 = (0);
seq__5217_5478 = G__5521;
chunk__5218_5479 = G__5522;
count__5219_5480 = G__5523;
i__5220_5481 = G__5524;
continue;
} else {
var vec__5344_5525 = cljs.core.first.call(null,seq__5217_5519__$1);
var column_5526 = cljs.core.nth.call(null,vec__5344_5525,(0),null);
var column_info_5527 = cljs.core.nth.call(null,vec__5344_5525,(1),null);
var seq__5348_5528 = cljs.core.seq.call(null,column_info_5527);
var chunk__5349_5529 = null;
var count__5350_5530 = (0);
var i__5351_5531 = (0);
while(true){
if((i__5351_5531 < count__5350_5530)){
var map__5361_5532 = cljs.core._nth.call(null,chunk__5349_5529,i__5351_5531);
var map__5361_5533__$1 = (((((!((map__5361_5532 == null))))?(((((map__5361_5532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5361_5532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5361_5532):map__5361_5532);
var gline_5534 = cljs.core.get.call(null,map__5361_5533__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5535 = cljs.core.get.call(null,map__5361_5533__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5536 = cljs.core.get.call(null,map__5361_5533__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5534], null),cljs.core.fnil.call(null,((function (seq__5348_5528,chunk__5349_5529,count__5350_5530,i__5351_5531,seq__5217_5478,chunk__5218_5479,count__5219_5480,i__5220_5481,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5361_5532,map__5361_5533__$1,gline_5534,gcol_5535,name_5536,vec__5344_5525,column_5526,column_info_5527,seq__5217_5519__$1,temp__5720__auto___5518__$1,vec__5214_5475,line_5476,columns_5477,seq__4693_5469__$1,temp__5720__auto___5468,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5535], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5476,new cljs.core.Keyword(null,"col","col",-1959363084),column_5526,new cljs.core.Keyword(null,"name","name",1843675177),name_5536], null));
});})(seq__5348_5528,chunk__5349_5529,count__5350_5530,i__5351_5531,seq__5217_5478,chunk__5218_5479,count__5219_5480,i__5220_5481,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5361_5532,map__5361_5533__$1,gline_5534,gcol_5535,name_5536,vec__5344_5525,column_5526,column_info_5527,seq__5217_5519__$1,temp__5720__auto___5518__$1,vec__5214_5475,line_5476,columns_5477,seq__4693_5469__$1,temp__5720__auto___5468,inverted))
,cljs.core.sorted_map.call(null)));


var G__5537 = seq__5348_5528;
var G__5538 = chunk__5349_5529;
var G__5539 = count__5350_5530;
var G__5540 = (i__5351_5531 + (1));
seq__5348_5528 = G__5537;
chunk__5349_5529 = G__5538;
count__5350_5530 = G__5539;
i__5351_5531 = G__5540;
continue;
} else {
var temp__5720__auto___5541__$2 = cljs.core.seq.call(null,seq__5348_5528);
if(temp__5720__auto___5541__$2){
var seq__5348_5542__$1 = temp__5720__auto___5541__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5348_5542__$1)){
var c__4550__auto___5543 = cljs.core.chunk_first.call(null,seq__5348_5542__$1);
var G__5544 = cljs.core.chunk_rest.call(null,seq__5348_5542__$1);
var G__5545 = c__4550__auto___5543;
var G__5546 = cljs.core.count.call(null,c__4550__auto___5543);
var G__5547 = (0);
seq__5348_5528 = G__5544;
chunk__5349_5529 = G__5545;
count__5350_5530 = G__5546;
i__5351_5531 = G__5547;
continue;
} else {
var map__5365_5548 = cljs.core.first.call(null,seq__5348_5542__$1);
var map__5365_5549__$1 = (((((!((map__5365_5548 == null))))?(((((map__5365_5548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5365_5548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5365_5548):map__5365_5548);
var gline_5550 = cljs.core.get.call(null,map__5365_5549__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5551 = cljs.core.get.call(null,map__5365_5549__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5552 = cljs.core.get.call(null,map__5365_5549__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5550], null),cljs.core.fnil.call(null,((function (seq__5348_5528,chunk__5349_5529,count__5350_5530,i__5351_5531,seq__5217_5478,chunk__5218_5479,count__5219_5480,i__5220_5481,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5365_5548,map__5365_5549__$1,gline_5550,gcol_5551,name_5552,seq__5348_5542__$1,temp__5720__auto___5541__$2,vec__5344_5525,column_5526,column_info_5527,seq__5217_5519__$1,temp__5720__auto___5518__$1,vec__5214_5475,line_5476,columns_5477,seq__4693_5469__$1,temp__5720__auto___5468,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_5551], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5476,new cljs.core.Keyword(null,"col","col",-1959363084),column_5526,new cljs.core.Keyword(null,"name","name",1843675177),name_5552], null));
});})(seq__5348_5528,chunk__5349_5529,count__5350_5530,i__5351_5531,seq__5217_5478,chunk__5218_5479,count__5219_5480,i__5220_5481,seq__4693_5370,chunk__4694_5371,count__4695_5372,i__4696_5373,map__5365_5548,map__5365_5549__$1,gline_5550,gcol_5551,name_5552,seq__5348_5542__$1,temp__5720__auto___5541__$2,vec__5344_5525,column_5526,column_info_5527,seq__5217_5519__$1,temp__5720__auto___5518__$1,vec__5214_5475,line_5476,columns_5477,seq__4693_5469__$1,temp__5720__auto___5468,inverted))
,cljs.core.sorted_map.call(null)));


var G__5553 = cljs.core.next.call(null,seq__5348_5542__$1);
var G__5554 = null;
var G__5555 = (0);
var G__5556 = (0);
seq__5348_5528 = G__5553;
chunk__5349_5529 = G__5554;
count__5350_5530 = G__5555;
i__5351_5531 = G__5556;
continue;
}
} else {
}
}
break;
}


var G__5557 = cljs.core.next.call(null,seq__5217_5519__$1);
var G__5558 = null;
var G__5559 = (0);
var G__5560 = (0);
seq__5217_5478 = G__5557;
chunk__5218_5479 = G__5558;
count__5219_5480 = G__5559;
i__5220_5481 = G__5560;
continue;
}
} else {
}
}
break;
}


var G__5561 = cljs.core.next.call(null,seq__4693_5469__$1);
var G__5562 = null;
var G__5563 = (0);
var G__5564 = (0);
seq__4693_5370 = G__5561;
chunk__4694_5371 = G__5562;
count__4695_5372 = G__5563;
i__4696_5373 = G__5564;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});
