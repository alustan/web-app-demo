(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3607],{25104:o=>{function s(e){return e?typeof e=="string"?e:e.source:null}function t(...e){return e.map(a=>s(a)).join("")}function c(e){const n={ruleDeclaration:/^[a-zA-Z][a-zA-Z0-9-]*/,unexpectedChars:/[!@#$^&',?+~`|:]/},a=["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"],i=e.COMMENT(/;/,/$/),r={className:"symbol",begin:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/},l={className:"symbol",begin:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/},u={className:"symbol",begin:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/},m={className:"symbol",begin:/%[si]/},d={className:"attribute",begin:t(n.ruleDeclaration,/(?=\s*=)/)};return{name:"Augmented Backus-Naur Form",illegal:n.unexpectedChars,keywords:a,contains:[d,i,r,l,u,m,e.QUOTE_STRING_MODE,e.NUMBER_MODE]}}o.exports=c}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_abnf.637fbbca.chunk.js.map