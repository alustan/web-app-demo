(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7959],{92240:S=>{function o(e){return e?typeof e=="string"?e:e.source:null}function m(e){return t("(",e,")*")}function T(e){return t("(",e,")?")}function t(...e){return e.map(a=>o(a)).join("")}function A(...e){return"("+e.map(a=>o(a)).join("|")+")"}function R(e){const n={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},a={literal:["true","false","undefined","null"]},g=/""|"[^"]+"/,I=/''|'[^']+'/,r=/\[\]|\[[^\]]+\]/,c=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,O=/(\.|\/)/,_=A(g,I,r,c),C=t(T(/\.|\.\/|\//),_,m(t(O,_))),p=t("(",r,"|",c,")(?==)"),s={begin:C,lexemes:/[\w.\/]+/},u=e.inherit(s,{keywords:a}),i={begin:/\(/,end:/\)/},H={className:"attr",begin:p,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,u,i]}}},P={begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},E={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,P,H,u,i],returnEnd:!0},M=e.inherit(s,{className:"name",keywords:n,starts:e.inherit(E,{end:/\)/})});i.contains=[M];const N=e.inherit(s,{keywords:n,className:"name",starts:e.inherit(E,{end:/\}\}/})}),l=e.inherit(s,{keywords:n,className:"name"}),d=e.inherit(s,{className:"name",keywords:n,starts:e.inherit(E,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[N],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[l]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[N]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[l]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[d]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[d]}]}}function b(e){const n=R(e);return n.name="HTMLbars",e.getLanguage("handlebars")&&(n.disableAutodetect=!0),n}S.exports=b}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_htmlbars.e6d96b69.chunk.js.map