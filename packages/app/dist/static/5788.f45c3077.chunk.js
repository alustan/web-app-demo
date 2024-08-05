"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5788],{45788:(K,A,O)=>{O.r(A),O.d(A,{l:()=>z});var x=O(94403),R=Object.defineProperty,s=(d,h)=>R(d,"name",{value:h,configurable:!0});function P(d,h){for(var l=0;l<h.length;l++){const c=h[l];if(typeof c!="string"&&!Array.isArray(c)){for(const m in c)if(m!=="default"&&!(m in d)){const g=Object.getOwnPropertyDescriptor(c,m);g&&Object.defineProperty(d,m,g.get?g:{enumerable:!0,get:()=>c[m]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}s(P,"_mergeNamespaces");var V={exports:{}};(function(d,h){(function(l){l((0,x.r)())})(function(l){var c="CodeMirror-lint-markers",m="CodeMirror-lint-line-";function g(e,t,o){var n=document.createElement("div");n.className="CodeMirror-lint-tooltip cm-s-"+e.options.theme,n.appendChild(o.cloneNode(!0)),e.state.lint.options.selfContain?e.getWrapperElement().appendChild(n):document.body.appendChild(n);function r(i){if(!n.parentNode)return l.off(document,"mousemove",r);n.style.top=Math.max(0,i.clientY-n.offsetHeight-5)+"px",n.style.left=i.clientX+5+"px"}return s(r,"position"),l.on(document,"mousemove",r),r(t),n.style.opacity!=null&&(n.style.opacity=1),n}s(g,"showTooltip");function k(e){e.parentNode&&e.parentNode.removeChild(e)}s(k,"rm");function F(e){e.parentNode&&(e.style.opacity==null&&k(e),e.style.opacity=0,setTimeout(function(){k(e)},600))}s(F,"hideTooltip");function L(e,t,o,n){var r=g(e,t,o);function i(){l.off(n,"mouseout",i),r&&(F(r),r=null)}s(i,"hide");var a=setInterval(function(){if(r)for(var u=n;;u=u.parentNode){if(u&&u.nodeType==11&&(u=u.host),u==document.body)return;if(!u){i();break}}if(!r)return clearInterval(a)},400);l.on(n,"mouseout",i)}s(L,"showTooltipFor");function G(e,t,o){this.marked=[],t instanceof Function&&(t={getAnnotations:t}),(!t||t===!0)&&(t={}),this.options={},this.linterOptions=t.options||{};for(var n in b)this.options[n]=b[n];for(var n in t)b.hasOwnProperty(n)?t[n]!=null&&(this.options[n]=t[n]):t.options||(this.linterOptions[n]=t[n]);this.timeout=null,this.hasGutter=o,this.onMouseOver=function(r){W(e,r)},this.waitingFor=0}s(G,"LintState");var b={highlightLines:!1,tooltips:!0,delay:500,lintOnChange:!0,getAnnotations:null,async:!1,selfContain:null,formatAnnotation:null,onUpdateLinting:null};function E(e){var t=e.state.lint;t.hasGutter&&e.clearGutter(c),t.options.highlightLines&&j(e);for(var o=0;o<t.marked.length;++o)t.marked[o].clear();t.marked.length=0}s(E,"clearMarks");function j(e){e.eachLine(function(t){var o=t.wrapClass&&/\bCodeMirror-lint-line-\w+\b/.exec(t.wrapClass);o&&e.removeLineClass(t,"wrap",o[0])})}s(j,"clearErrorLines");function D(e,t,o,n,r){var i=document.createElement("div"),a=i;return i.className="CodeMirror-lint-marker CodeMirror-lint-marker-"+o,n&&(a=i.appendChild(document.createElement("div")),a.className="CodeMirror-lint-marker CodeMirror-lint-marker-multiple"),r!=!1&&l.on(a,"mouseover",function(u){L(e,u,t,a)}),i}s(D,"makeMarker");function H(e,t){return e=="error"?e:t}s(H,"getMaxSeverity");function I(e){for(var t=[],o=0;o<e.length;++o){var n=e[o],r=n.from.line;(t[r]||(t[r]=[])).push(n)}return t}s(I,"groupByLine");function N(e){var t=e.severity;t||(t="error");var o=document.createElement("div");return o.className="CodeMirror-lint-message CodeMirror-lint-message-"+t,typeof e.messageHTML<"u"?o.innerHTML=e.messageHTML:o.appendChild(document.createTextNode(e.message)),o}s(N,"annotationTooltip");function U(e,t){var o=e.state.lint,n=++o.waitingFor;function r(){n=-1,e.off("change",r)}s(r,"abort"),e.on("change",r),t(e.getValue(),function(i,a){e.off("change",r),o.waitingFor==n&&(a&&i instanceof l&&(i=a),e.operation(function(){y(e,i)}))},o.linterOptions,e)}s(U,"lintAsync");function C(e){var t=e.state.lint;if(t){var o=t.options,n=o.getAnnotations||e.getHelper(l.Pos(0,0),"lint");if(n)if(o.async||n.async)U(e,n);else{var r=n(e.getValue(),t.linterOptions,e);if(!r)return;r.then?r.then(function(i){e.operation(function(){y(e,i)})}):e.operation(function(){y(e,r)})}}}s(C,"startLinting");function y(e,t){var o=e.state.lint;if(o){var n=o.options;E(e);for(var r=I(t),i=0;i<r.length;++i){var a=r[i];if(a){var u=[];a=a.filter(function(B){return u.indexOf(B.message)>-1?!1:u.push(B.message)});for(var p=null,v=o.hasGutter&&document.createDocumentFragment(),w=0;w<a.length;++w){var f=a[w],M=f.severity;M||(M="error"),p=H(p,M),n.formatAnnotation&&(f=n.formatAnnotation(f)),o.hasGutter&&v.appendChild(N(f)),f.to&&o.marked.push(e.markText(f.from,f.to,{className:"CodeMirror-lint-mark CodeMirror-lint-mark-"+M,__annotation:f}))}o.hasGutter&&e.setGutterMarker(i,c,D(e,v,p,r[i].length>1,n.tooltips)),n.highlightLines&&e.addLineClass(i,"wrap",m+p)}}n.onUpdateLinting&&n.onUpdateLinting(t,r,e)}}s(y,"updateLinting");function T(e){var t=e.state.lint;t&&(clearTimeout(t.timeout),t.timeout=setTimeout(function(){C(e)},t.options.delay))}s(T,"onChange");function S(e,t,o){for(var n=o.target||o.srcElement,r=document.createDocumentFragment(),i=0;i<t.length;i++){var a=t[i];r.appendChild(N(a))}L(e,o,r,n)}s(S,"popupTooltips");function W(e,t){var o=t.target||t.srcElement;if(/\bCodeMirror-lint-mark-/.test(o.className)){for(var n=o.getBoundingClientRect(),r=(n.left+n.right)/2,i=(n.top+n.bottom)/2,a=e.findMarksAt(e.coordsChar({left:r,top:i},"client")),u=[],p=0;p<a.length;++p){var v=a[p].__annotation;v&&u.push(v)}u.length&&S(e,u,t)}}s(W,"onMouseOver"),l.defineOption("lint",!1,function(e,t,o){if(o&&o!=l.Init&&(E(e),e.state.lint.options.lintOnChange!==!1&&e.off("change",T),l.off(e.getWrapperElement(),"mouseover",e.state.lint.onMouseOver),clearTimeout(e.state.lint.timeout),delete e.state.lint),t){for(var n=e.getOption("gutters"),r=!1,i=0;i<n.length;++i)n[i]==c&&(r=!0);var a=e.state.lint=new G(e,t,r);a.options.lintOnChange&&e.on("change",T),a.options.tooltips!=!1&&a.options.tooltips!="gutter"&&l.on(e.getWrapperElement(),"mouseover",a.onMouseOver),C(e)}}),l.defineExtension("performLint",function(){C(this)})})})();var _=V.exports;const X=(0,x.g)(_),z=P({__proto__:null,default:X},[_])}}]);})();

//# sourceMappingURL=5788.f45c3077.chunk.js.map