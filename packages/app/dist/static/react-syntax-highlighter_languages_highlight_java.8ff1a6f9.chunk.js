(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6354],{74639:c=>{var n="[0-9](_*[0-9])*",r=`\\.(${n})`,i="[0-9a-fA-F](_*[0-9a-fA-F])*",_={className:"number",variants:[{begin:`(\\b(${n})((${r})|\\.)?|(${r}))[eE][+-]?(${n})[fFdD]?\\b`},{begin:`\\b(${n})((${r})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${r})[fFdD]?\\b`},{begin:`\\b(${n})[fFdD]\\b`},{begin:`\\b0[xX]((${i})\\.?|(${i})?\\.(${i}))[pP][+-]?(${n})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${i})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function b(e){var t="[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*",o=t+"(<"+t+"(\\s*,\\s*"+t+")*>)?",a="false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",s={className:"meta",begin:"@"+t,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]};const E=_;return{name:"Java",aliases:["jsp"],keywords:a,illegal:/<\/|#/,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"class",beginKeywords:"class interface enum",end:/[{;=]/,excludeEnd:!0,relevance:1,keywords:"class interface enum",illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"new throw return else",relevance:0},{className:"class",begin:"record\\s+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,excludeEnd:!0,end:/[{;=]/,keywords:a,contains:[{beginKeywords:"record"},{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,keywords:a,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"function",begin:"("+o+"\\s+)+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:a,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,keywords:a,relevance:0,contains:[s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,E,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},E,s]}}c.exports=b}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_java.8ff1a6f9.chunk.js.map