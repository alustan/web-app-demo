"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5019],{87400:(E,C,x)=>{x.r(C),x.d(C,{b:()=>w});var I=x(94403),D=Object.defineProperty,y=(P,T)=>D(P,"name",{value:T,configurable:!0});function L(P,T){for(var r=0;r<T.length;r++){const s=T[r];if(typeof s!="string"&&!Array.isArray(s)){for(const e in s)if(e!=="default"&&!(e in P)){const i=Object.getOwnPropertyDescriptor(s,e);i&&Object.defineProperty(P,e,i.get?i:{enumerable:!0,get:()=>s[e]})}}}return Object.freeze(Object.defineProperty(P,Symbol.toStringTag,{value:"Module"}))}y(L,"_mergeNamespaces");var H={exports:{}};(function(P,T){(function(r){r((0,I.r)())})(function(r){function s(e){return function(i,o){var t=o.line,u=i.getLine(t);function c(l){for(var a,d=o.ch,v=0;;){var h=d<=0?-1:u.lastIndexOf(l[0],d-1);if(h==-1){if(v==1)break;v=1,d=u.length;continue}if(v==1&&h<o.ch)break;if(a=i.getTokenTypeAt(r.Pos(t,h+1)),!/^(comment|string)/.test(a))return{ch:h+1,tokenType:a,pair:l};d=h-1}}y(c,"findOpening");function p(l){var a=1,d=i.lastLine(),v,h=l.ch,_;r:for(var b=t;b<=d;++b)for(var O=i.getLine(b),m=b==t?h:0;;){var j=O.indexOf(l.pair[0],m),A=O.indexOf(l.pair[1],m);if(j<0&&(j=O.length),A<0&&(A=O.length),m=Math.min(j,A),m==O.length)break;if(i.getTokenTypeAt(r.Pos(b,m+1))==l.tokenType){if(m==j)++a;else if(!--a){v=b,_=m;break r}}++m}return v==null||t==v?null:{from:r.Pos(t,h),to:r.Pos(v,_)}}y(p,"findRange");for(var f=[],n=0;n<e.length;n++){var g=c(e[n]);g&&f.push(g)}f.sort(function(l,a){return l.ch-a.ch});for(var n=0;n<f.length;n++){var k=p(f[n]);if(k)return k}return null}}y(s,"bracketFolding"),r.registerHelper("fold","brace",s([["{","}"],["[","]"]])),r.registerHelper("fold","brace-paren",s([["{","}"],["[","]"],["(",")"]])),r.registerHelper("fold","import",function(e,i){function o(n){if(n<e.firstLine()||n>e.lastLine())return null;var g=e.getTokenAt(r.Pos(n,1));if(/\S/.test(g.string)||(g=e.getTokenAt(r.Pos(n,g.end+1))),g.type!="keyword"||g.string!="import")return null;for(var k=n,l=Math.min(e.lastLine(),n+10);k<=l;++k){var a=e.getLine(k),d=a.indexOf(";");if(d!=-1)return{startCh:g.end,end:r.Pos(k,d)}}}y(o,"hasImport");var t=i.line,u=o(t),c;if(!u||o(t-1)||(c=o(t-2))&&c.end.line==t-1)return null;for(var p=u.end;;){var f=o(p.line+1);if(f==null)break;p=f.end}return{from:e.clipPos(r.Pos(t,u.startCh+1)),to:p}}),r.registerHelper("fold","include",function(e,i){function o(f){if(f<e.firstLine()||f>e.lastLine())return null;var n=e.getTokenAt(r.Pos(f,1));if(/\S/.test(n.string)||(n=e.getTokenAt(r.Pos(f,n.end+1))),n.type=="meta"&&n.string.slice(0,8)=="#include")return n.start+8}y(o,"hasInclude");var t=i.line,u=o(t);if(u==null||o(t-1)!=null)return null;for(var c=t;;){var p=o(c+1);if(p==null)break;++c}return{from:r.Pos(t,u+1),to:e.clipPos(r.Pos(c))}})})})();var M=H.exports;const S=(0,I.g)(M),w=L({__proto__:null,default:S},[M])}}]);})();

//# sourceMappingURL=5019.d6cb9da2.chunk.js.map