"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2477],{32477:(E,a,e)=>{e.r(a),e.d(a,{SearchPage:()=>P});var r=e(14041),g=e(5877),v=e(45810),n=e.n(v),l=e(18690),o=e(87437);const C=()=>{const s=(0,l.zy)(),{term:u,setTerm:c,types:i,setTypes:f,pageCursor:y,setPageCursor:m,filters:h,setFilters:p}=(0,o.SQ)(),d=(0,g.A)(s.search);return(0,r.useEffect)(()=>{if(s.search===d)return;const t=n().parse(s.search.substring(1),{arrayLimit:0})||{};t.filters&&p(t.filters),t.query&&c(t.query),t.pageCursor&&m(t.pageCursor),t.types&&f(t.types)},[d,s,c,f,m,p]),(0,r.useEffect)(()=>{const t=n().stringify({query:u,types:i,pageCursor:y,filters:h},{arrayFormat:"brackets"}),S=`${window.location.pathname}?${t}`;window.history.replaceState(null,document.title,S)},[u,i,y,h]),null},P=()=>{const s=(0,l.P1)();return r.createElement(o.Lt,null,r.createElement(C,null),s)}}}]);})();

//# sourceMappingURL=2477.37939dfd.chunk.js.map