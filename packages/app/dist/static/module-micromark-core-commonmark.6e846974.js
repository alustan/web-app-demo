"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2143],{76485:(f,T,x)=>{x.d(T,{f:()=>O});var g=x(43890),c=x(66990),B=x(23796);const O={name:"attention",tokenize:s,resolveAll:m};function m(_,a){let l=-1,r,k,o,E,h,u,i,M;for(;++l<_.length;)if(_[l][0]==="enter"&&_[l][1].type==="attentionSequence"&&_[l][1]._close){for(r=l;r--;)if(_[r][0]==="exit"&&_[r][1].type==="attentionSequence"&&_[r][1]._open&&a.sliceSerialize(_[r][1]).charCodeAt(0)===a.sliceSerialize(_[l][1]).charCodeAt(0)){if((_[r][1]._close||_[l][1]._open)&&(_[l][1].end.offset-_[l][1].start.offset)%3&&!((_[r][1].end.offset-_[r][1].start.offset+_[l][1].end.offset-_[l][1].start.offset)%3))continue;u=_[r][1].end.offset-_[r][1].start.offset>1&&_[l][1].end.offset-_[l][1].start.offset>1?2:1;const p=Object.assign({},_[r][1].end),S=Object.assign({},_[l][1].start);e(p,-u),e(S,u),E={type:u>1?"strongSequence":"emphasisSequence",start:p,end:Object.assign({},_[r][1].end)},h={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},_[l][1].start),end:S},o={type:u>1?"strongText":"emphasisText",start:Object.assign({},_[r][1].end),end:Object.assign({},_[l][1].start)},k={type:u>1?"strong":"emphasis",start:Object.assign({},E.start),end:Object.assign({},h.end)},_[r][1].end=Object.assign({},E.start),_[l][1].start=Object.assign({},h.end),i=[],_[r][1].end.offset-_[r][1].start.offset&&(i=(0,g.V)(i,[["enter",_[r][1],a],["exit",_[r][1],a]])),i=(0,g.V)(i,[["enter",k,a],["enter",E,a],["exit",E,a],["enter",o,a]]),i=(0,g.V)(i,(0,B.W)(a.parser.constructs.insideSpan.null,_.slice(r+1,l),a)),i=(0,g.V)(i,[["exit",o,a],["enter",h,a],["exit",h,a],["exit",k,a]]),_[l][1].end.offset-_[l][1].start.offset?(M=2,i=(0,g.V)(i,[["enter",_[l][1],a],["exit",_[l][1],a]])):M=0,(0,g.m)(_,r-1,l-r+3,i),l=r+i.length-M-2;break}}for(l=-1;++l<_.length;)_[l][1].type==="attentionSequence"&&(_[l][1].type="data");return _}function s(_,a){const l=this.parser.constructs.attentionMarkers.null,r=this.previous,k=(0,c.S)(r);let o;return E;function E(u){return o=u,_.enter("attentionSequence"),h(u)}function h(u){if(u===o)return _.consume(u),h;const i=_.exit("attentionSequence"),M=(0,c.S)(u),p=!M||M===2&&k||l.includes(u),S=!k||k===2&&M||l.includes(r);return i._open=!!(o===42?p:p&&(k||!S)),i._close=!!(o===42?S:S&&(M||!p)),a(u)}}function e(_,a){_.column+=a,_.offset+=a,_._bufferIndex+=a}},53604:(f,T,x)=>{x.d(T,{m:()=>c});var g=x(84106);const c={name:"autolink",tokenize:B};function B(O,m,s){let e=0;return _;function _(i){return O.enter("autolink"),O.enter("autolinkMarker"),O.consume(i),O.exit("autolinkMarker"),O.enter("autolinkProtocol"),a}function a(i){return(0,g.CW)(i)?(O.consume(i),l):o(i)}function l(i){return i===43||i===45||i===46||(0,g.lV)(i)?(e=1,r(i)):o(i)}function r(i){return i===58?(O.consume(i),e=0,k):(i===43||i===45||i===46||(0,g.lV)(i))&&e++<32?(O.consume(i),r):(e=0,o(i))}function k(i){return i===62?(O.exit("autolinkProtocol"),O.enter("autolinkMarker"),O.consume(i),O.exit("autolinkMarker"),O.exit("autolink"),m):i===null||i===32||i===60||(0,g.JQ)(i)?s(i):(O.consume(i),k)}function o(i){return i===64?(O.consume(i),E):(0,g.cx)(i)?(O.consume(i),o):s(i)}function E(i){return(0,g.lV)(i)?h(i):s(i)}function h(i){return i===46?(O.consume(i),e=0,E):i===62?(O.exit("autolinkProtocol").type="autolinkEmail",O.enter("autolinkMarker"),O.consume(i),O.exit("autolinkMarker"),O.exit("autolink"),m):u(i)}function u(i){if((i===45||(0,g.lV)(i))&&e++<63){const M=i===45?u:h;return O.consume(i),M}return s(i)}}},35460:(f,T,x)=>{x.d(T,{B:()=>B});var g=x(77508),c=x(84106);const B={tokenize:O,partial:!0};function O(m,s,e){return _;function _(l){return(0,c.On)(l)?(0,g.N)(m,a,"linePrefix")(l):a(l)}function a(l){return l===null||(0,c.HP)(l)?s(l):e(l)}}},94371:(f,T,x)=>{x.d(T,{i:()=>B});var g=x(77508),c=x(84106);const B={name:"blockQuote",tokenize:O,continuation:{tokenize:m},exit:s};function O(e,_,a){const l=this;return r;function r(o){if(o===62){const E=l.containerState;return E.open||(e.enter("blockQuote",{_container:!0}),E.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),k}return a(o)}function k(o){return(0,c.On)(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),_):(e.exit("blockQuotePrefix"),_(o))}}function m(e,_,a){const l=this;return r;function r(o){return(0,c.On)(o)?(0,g.N)(e,k,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):k(o)}function k(o){return e.attempt(B,_,a)(o)}}function s(e){e.exit("blockQuote")}},30854:(f,T,x)=>{x.d(T,{L:()=>c});var g=x(84106);const c={name:"characterEscape",tokenize:B};function B(O,m,s){return e;function e(a){return O.enter("characterEscape"),O.enter("escapeMarker"),O.consume(a),O.exit("escapeMarker"),_}function _(a){return(0,g.ol)(a)?(O.enter("characterEscapeValue"),O.consume(a),O.exit("characterEscapeValue"),O.exit("characterEscape"),m):s(a)}}},66716:(f,T,x)=>{x.d(T,{L:()=>B});var g=x(51157),c=x(84106);const B={name:"characterReference",tokenize:O};function O(m,s,e){const _=this;let a=0,l,r;return k;function k(u){return m.enter("characterReference"),m.enter("characterReferenceMarker"),m.consume(u),m.exit("characterReferenceMarker"),o}function o(u){return u===35?(m.enter("characterReferenceMarkerNumeric"),m.consume(u),m.exit("characterReferenceMarkerNumeric"),E):(m.enter("characterReferenceValue"),l=31,r=c.lV,h(u))}function E(u){return u===88||u===120?(m.enter("characterReferenceMarkerHexadecimal"),m.consume(u),m.exit("characterReferenceMarkerHexadecimal"),m.enter("characterReferenceValue"),l=6,r=c.ok,h):(m.enter("characterReferenceValue"),l=7,r=c.BM,h(u))}function h(u){if(u===59&&a){const i=m.exit("characterReferenceValue");return r===c.lV&&!(0,g.s)(_.sliceSerialize(i))?e(u):(m.enter("characterReferenceMarker"),m.consume(u),m.exit("characterReferenceMarker"),m.exit("characterReference"),s)}return r(u)&&a++<l?(m.consume(u),h):e(u)}}},44544:(f,T,x)=>{x.d(T,{b:()=>O});var g=x(77508),c=x(84106);const B={tokenize:s,partial:!0},O={name:"codeFenced",tokenize:m,concrete:!0};function m(e,_,a){const l=this,r={tokenize:H,partial:!0};let k=0,o=0,E;return h;function h(P){return u(P)}function u(P){const b=l.events[l.events.length-1];return k=b&&b[1].type==="linePrefix"?b[2].sliceSerialize(b[1],!0).length:0,E=P,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),i(P)}function i(P){return P===E?(o++,e.consume(P),i):o<3?a(P):(e.exit("codeFencedFenceSequence"),(0,c.On)(P)?(0,g.N)(e,M,"whitespace")(P):M(P))}function M(P){return P===null||(0,c.HP)(P)?(e.exit("codeFencedFence"),l.interrupt?_(P):e.check(B,A,W)(P)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(P))}function p(P){return P===null||(0,c.HP)(P)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),M(P)):(0,c.On)(P)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),(0,g.N)(e,S,"whitespace")(P)):P===96&&P===E?a(P):(e.consume(P),p)}function S(P){return P===null||(0,c.HP)(P)?M(P):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),I(P))}function I(P){return P===null||(0,c.HP)(P)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),M(P)):P===96&&P===E?a(P):(e.consume(P),I)}function A(P){return e.attempt(r,W,L)(P)}function L(P){return e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),z}function z(P){return k>0&&(0,c.On)(P)?(0,g.N)(e,C,"linePrefix",k+1)(P):C(P)}function C(P){return P===null||(0,c.HP)(P)?e.check(B,A,W)(P):(e.enter("codeFlowValue"),D(P))}function D(P){return P===null||(0,c.HP)(P)?(e.exit("codeFlowValue"),C(P)):(e.consume(P),D)}function W(P){return e.exit("codeFenced"),_(P)}function H(P,b,R){let K=0;return w;function w(y){return P.enter("lineEnding"),P.consume(y),P.exit("lineEnding"),V}function V(y){return P.enter("codeFencedFence"),(0,c.On)(y)?(0,g.N)(P,N,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):N(y)}function N(y){return y===E?(P.enter("codeFencedFenceSequence"),Y(y)):R(y)}function Y(y){return y===E?(K++,P.consume(y),Y):K>=o?(P.exit("codeFencedFenceSequence"),(0,c.On)(y)?(0,g.N)(P,F,"whitespace")(y):F(y)):R(y)}function F(y){return y===null||(0,c.HP)(y)?(P.exit("codeFencedFence"),b(y)):R(y)}}}function s(e,_,a){const l=this;return r;function r(o){return o===null?a(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),k)}function k(o){return l.parser.lazy[l.now().line]?a(o):_(o)}}},25040:(f,T,x)=>{x.d(T,{j:()=>B});var g=x(77508),c=x(84106);const B={name:"codeIndented",tokenize:m},O={tokenize:s,partial:!0};function m(e,_,a){const l=this;return r;function r(u){return e.enter("codeIndented"),(0,g.N)(e,k,"linePrefix",5)(u)}function k(u){const i=l.events[l.events.length-1];return i&&i[1].type==="linePrefix"&&i[2].sliceSerialize(i[1],!0).length>=4?o(u):a(u)}function o(u){return u===null?h(u):(0,c.HP)(u)?e.attempt(O,o,h)(u):(e.enter("codeFlowValue"),E(u))}function E(u){return u===null||(0,c.HP)(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),E)}function h(u){return e.exit("codeIndented"),_(u)}}function s(e,_,a){const l=this;return r;function r(o){return l.parser.lazy[l.now().line]?a(o):(0,c.HP)(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),r):(0,g.N)(e,k,"linePrefix",5)(o)}function k(o){const E=l.events[l.events.length-1];return E&&E[1].type==="linePrefix"&&E[2].sliceSerialize(E[1],!0).length>=4?_(o):(0,c.HP)(o)?r(o):a(o)}}},75408:(f,T,x)=>{x.d(T,{p:()=>c});var g=x(84106);const c={name:"codeText",tokenize:m,resolve:B,previous:O};function B(s){let e=s.length-4,_=3,a,l;if((s[_][1].type==="lineEnding"||s[_][1].type==="space")&&(s[e][1].type==="lineEnding"||s[e][1].type==="space")){for(a=_;++a<e;)if(s[a][1].type==="codeTextData"){s[_][1].type="codeTextPadding",s[e][1].type="codeTextPadding",_+=2,e-=2;break}}for(a=_-1,e++;++a<=e;)l===void 0?a!==e&&s[a][1].type!=="lineEnding"&&(l=a):(a===e||s[a][1].type==="lineEnding")&&(s[l][1].type="codeTextData",a!==l+2&&(s[l][1].end=s[a-1][1].end,s.splice(l+2,a-l-2),e-=a-l-2,a=l+2),l=void 0);return s}function O(s){return s!==96||this.events[this.events.length-1][1].type==="characterEscape"}function m(s,e,_){const a=this;let l=0,r,k;return o;function o(M){return s.enter("codeText"),s.enter("codeTextSequence"),E(M)}function E(M){return M===96?(s.consume(M),l++,E):(s.exit("codeTextSequence"),h(M))}function h(M){return M===null?_(M):M===32?(s.enter("space"),s.consume(M),s.exit("space"),h):M===96?(k=s.enter("codeTextSequence"),r=0,i(M)):(0,g.HP)(M)?(s.enter("lineEnding"),s.consume(M),s.exit("lineEnding"),h):(s.enter("codeTextData"),u(M))}function u(M){return M===null||M===32||M===96||(0,g.HP)(M)?(s.exit("codeTextData"),h(M)):(s.consume(M),u)}function i(M){return M===96?(s.consume(M),r++,i):r===l?(s.exit("codeTextSequence"),s.exit("codeText"),e(M)):(k.type="codeTextData",u(M))}}},11626:(f,T,x)=>{x.d(T,{Q:()=>O});var g=x(77508),c=x(84106),B=x(94469);const O={tokenize:e,resolve:s},m={tokenize:_,partial:!0};function s(a){return(0,B.w)(a),a}function e(a,l){let r;return k;function k(u){return a.enter("content"),r=a.enter("chunkContent",{contentType:"content"}),o(u)}function o(u){return u===null?E(u):(0,c.HP)(u)?a.check(m,h,E)(u):(a.consume(u),o)}function E(u){return a.exit("chunkContent"),a.exit("content"),l(u)}function h(u){return a.consume(u),a.exit("chunkContent"),r.next=a.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,o}}function _(a,l,r){const k=this;return o;function o(h){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),(0,g.N)(a,E,"linePrefix")}function E(h){if(h===null||(0,c.HP)(h))return r(h);const u=k.events[k.events.length-1];return!k.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?l(h):a.interrupt(k.parser.constructs.flow,r,l)(h)}}},79326:(f,T,x)=>{x.d(T,{m:()=>_});var g=x(2514),c=x(32568),B=x(77508),O=x(13108),m=x(13967),s=x(84106),e=x(26243);const _={name:"definition",tokenize:l},a={tokenize:r,partial:!0};function l(k,o,E){const h=this;let u;return i;function i(C){return k.enter("definition"),M(C)}function M(C){return c.r.call(h,k,p,E,"definitionLabel","definitionLabelMarker","definitionLabelString")(C)}function p(C){return u=(0,e.B)(h.sliceSerialize(h.events[h.events.length-1][1]).slice(1,-1)),C===58?(k.enter("definitionMarker"),k.consume(C),k.exit("definitionMarker"),S):E(C)}function S(C){return(0,s.Ee)(C)?(0,m.Y)(k,I)(C):I(C)}function I(C){return(0,g.v)(k,A,E,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(C)}function A(C){return k.attempt(a,L,L)(C)}function L(C){return(0,s.On)(C)?(0,B.N)(k,z,"whitespace")(C):z(C)}function z(C){return C===null||(0,s.HP)(C)?(k.exit("definition"),h.parser.defined.push(u),o(C)):E(C)}}function r(k,o,E){return h;function h(p){return(0,s.Ee)(p)?(0,m.Y)(k,u)(p):E(p)}function u(p){return(0,O.f)(k,i,E,"definitionTitle","definitionTitleMarker","definitionTitleString")(p)}function i(p){return(0,s.On)(p)?(0,B.N)(k,M,"whitespace")(p):M(p)}function M(p){return p===null||(0,s.HP)(p)?o(p):E(p)}}},39750:(f,T,x)=>{x.d(T,{G:()=>c});var g=x(84106);const c={name:"hardBreakEscape",tokenize:B};function B(O,m,s){return e;function e(a){return O.enter("hardBreakEscape"),O.consume(a),_}function _(a){return(0,g.HP)(a)?(O.exit("hardBreakEscape"),m(a)):s(a)}}},19135:(f,T,x)=>{x.d(T,{O:()=>O});var g=x(77508),c=x(84106),B=x(43890);const O={name:"headingAtx",tokenize:s,resolve:m};function m(e,_){let a=e.length-2,l=3,r,k;return e[l][1].type==="whitespace"&&(l+=2),a-2>l&&e[a][1].type==="whitespace"&&(a-=2),e[a][1].type==="atxHeadingSequence"&&(l===a-1||a-4>l&&e[a-2][1].type==="whitespace")&&(a-=l+1===a?2:4),a>l&&(r={type:"atxHeadingText",start:e[l][1].start,end:e[a][1].end},k={type:"chunkText",start:e[l][1].start,end:e[a][1].end,contentType:"text"},(0,B.m)(e,l,a-l+1,[["enter",r,_],["enter",k,_],["exit",k,_],["exit",r,_]])),e}function s(e,_,a){let l=0;return r;function r(i){return e.enter("atxHeading"),k(i)}function k(i){return e.enter("atxHeadingSequence"),o(i)}function o(i){return i===35&&l++<6?(e.consume(i),o):i===null||(0,c.Ee)(i)?(e.exit("atxHeadingSequence"),E(i)):a(i)}function E(i){return i===35?(e.enter("atxHeadingSequence"),h(i)):i===null||(0,c.HP)(i)?(e.exit("atxHeading"),_(i)):(0,c.On)(i)?(0,g.N)(e,E,"whitespace")(i):(e.enter("atxHeadingText"),u(i))}function h(i){return i===35?(e.consume(i),h):(e.exit("atxHeadingSequence"),E(i))}function u(i){return i===null||i===35||(0,c.Ee)(i)?(e.exit("atxHeadingText"),E(i)):(e.consume(i),u)}}},20963:(f,T,x)=>{x.d(T,{G:()=>O});var g=x(84106),c=x(61486),B=x(35460);const O={name:"htmlFlow",tokenize:_,resolveTo:e,concrete:!0},m={tokenize:l,partial:!0},s={tokenize:a,partial:!0};function e(r){let k=r.length;for(;k--&&!(r[k][0]==="enter"&&r[k][1].type==="htmlFlow"););return k>1&&r[k-2][1].type==="linePrefix"&&(r[k][1].start=r[k-2][1].start,r[k+1][1].start=r[k-2][1].start,r.splice(k-2,2)),r}function _(r,k,o){const E=this;let h,u,i,M,p;return S;function S(n){return I(n)}function I(n){return r.enter("htmlFlow"),r.enter("htmlFlowData"),r.consume(n),A}function A(n){return n===33?(r.consume(n),L):n===47?(r.consume(n),u=!0,D):n===63?(r.consume(n),h=3,E.interrupt?k:j):(0,g.CW)(n)?(r.consume(n),i=String.fromCharCode(n),W):o(n)}function L(n){return n===45?(r.consume(n),h=2,z):n===91?(r.consume(n),h=5,M=0,C):(0,g.CW)(n)?(r.consume(n),h=4,E.interrupt?k:j):o(n)}function z(n){return n===45?(r.consume(n),E.interrupt?k:j):o(n)}function C(n){const Q="CDATA[";return n===Q.charCodeAt(M++)?(r.consume(n),M===Q.length?E.interrupt?k:U:C):o(n)}function D(n){return(0,g.CW)(n)?(r.consume(n),i=String.fromCharCode(n),W):o(n)}function W(n){if(n===null||n===47||n===62||(0,g.Ee)(n)){const Q=n===47,nn=i.toLowerCase();return!Q&&!u&&c.y.includes(nn)?(h=1,E.interrupt?k(n):U(n)):c.T.includes(i.toLowerCase())?(h=6,Q?(r.consume(n),H):E.interrupt?k(n):U(n)):(h=7,E.interrupt&&!E.parser.lazy[E.now().line]?o(n):u?P(n):b(n))}return n===45||(0,g.lV)(n)?(r.consume(n),i+=String.fromCharCode(n),W):o(n)}function H(n){return n===62?(r.consume(n),E.interrupt?k:U):o(n)}function P(n){return(0,g.On)(n)?(r.consume(n),P):F(n)}function b(n){return n===47?(r.consume(n),F):n===58||n===95||(0,g.CW)(n)?(r.consume(n),R):(0,g.On)(n)?(r.consume(n),b):F(n)}function R(n){return n===45||n===46||n===58||n===95||(0,g.lV)(n)?(r.consume(n),R):K(n)}function K(n){return n===61?(r.consume(n),w):(0,g.On)(n)?(r.consume(n),K):b(n)}function w(n){return n===null||n===60||n===61||n===62||n===96?o(n):n===34||n===39?(r.consume(n),p=n,V):(0,g.On)(n)?(r.consume(n),w):N(n)}function V(n){return n===p?(r.consume(n),p=null,Y):n===null||(0,g.HP)(n)?o(n):(r.consume(n),V)}function N(n){return n===null||n===34||n===39||n===47||n===60||n===61||n===62||n===96||(0,g.Ee)(n)?K(n):(r.consume(n),N)}function Y(n){return n===47||n===62||(0,g.On)(n)?b(n):o(n)}function F(n){return n===62?(r.consume(n),y):o(n)}function y(n){return n===null||(0,g.HP)(n)?U(n):(0,g.On)(n)?(r.consume(n),y):o(n)}function U(n){return n===45&&h===2?(r.consume(n),$):n===60&&h===1?(r.consume(n),q):n===62&&h===4?(r.consume(n),J):n===63&&h===3?(r.consume(n),j):n===93&&h===5?(r.consume(n),d):(0,g.HP)(n)&&(h===6||h===7)?(r.exit("htmlFlowData"),r.check(m,X,v)(n)):n===null||(0,g.HP)(n)?(r.exit("htmlFlowData"),v(n)):(r.consume(n),U)}function v(n){return r.check(s,t,X)(n)}function t(n){return r.enter("lineEnding"),r.consume(n),r.exit("lineEnding"),G}function G(n){return n===null||(0,g.HP)(n)?v(n):(r.enter("htmlFlowData"),U(n))}function $(n){return n===45?(r.consume(n),j):U(n)}function q(n){return n===47?(r.consume(n),i="",Z):U(n)}function Z(n){if(n===62){const Q=i.toLowerCase();return c.y.includes(Q)?(r.consume(n),J):U(n)}return(0,g.CW)(n)&&i.length<8?(r.consume(n),i+=String.fromCharCode(n),Z):U(n)}function d(n){return n===93?(r.consume(n),j):U(n)}function j(n){return n===62?(r.consume(n),J):n===45&&h===2?(r.consume(n),j):U(n)}function J(n){return n===null||(0,g.HP)(n)?(r.exit("htmlFlowData"),X(n)):(r.consume(n),J)}function X(n){return r.exit("htmlFlow"),k(n)}}function a(r,k,o){const E=this;return h;function h(i){return(0,g.HP)(i)?(r.enter("lineEnding"),r.consume(i),r.exit("lineEnding"),u):o(i)}function u(i){return E.parser.lazy[E.now().line]?o(i):k(i)}}function l(r,k,o){return E;function E(h){return r.enter("lineEnding"),r.consume(h),r.exit("lineEnding"),r.attempt(B.B,k,o)}}},92352:(f,T,x)=>{x.d(T,{j:()=>B});var g=x(77508),c=x(84106);const B={name:"htmlText",tokenize:O};function O(m,s,e){const _=this;let a,l,r;return k;function k(t){return m.enter("htmlText"),m.enter("htmlTextData"),m.consume(t),o}function o(t){return t===33?(m.consume(t),E):t===47?(m.consume(t),D):t===63?(m.consume(t),z):(0,c.CW)(t)?(m.consume(t),P):e(t)}function E(t){return t===45?(m.consume(t),h):t===91?(m.consume(t),l=0,p):(0,c.CW)(t)?(m.consume(t),L):e(t)}function h(t){return t===45?(m.consume(t),M):e(t)}function u(t){return t===null?e(t):t===45?(m.consume(t),i):(0,c.HP)(t)?(r=u,y(t)):(m.consume(t),u)}function i(t){return t===45?(m.consume(t),M):u(t)}function M(t){return t===62?F(t):t===45?i(t):u(t)}function p(t){const G="CDATA[";return t===G.charCodeAt(l++)?(m.consume(t),l===G.length?S:p):e(t)}function S(t){return t===null?e(t):t===93?(m.consume(t),I):(0,c.HP)(t)?(r=S,y(t)):(m.consume(t),S)}function I(t){return t===93?(m.consume(t),A):S(t)}function A(t){return t===62?F(t):t===93?(m.consume(t),A):S(t)}function L(t){return t===null||t===62?F(t):(0,c.HP)(t)?(r=L,y(t)):(m.consume(t),L)}function z(t){return t===null?e(t):t===63?(m.consume(t),C):(0,c.HP)(t)?(r=z,y(t)):(m.consume(t),z)}function C(t){return t===62?F(t):z(t)}function D(t){return(0,c.CW)(t)?(m.consume(t),W):e(t)}function W(t){return t===45||(0,c.lV)(t)?(m.consume(t),W):H(t)}function H(t){return(0,c.HP)(t)?(r=H,y(t)):(0,c.On)(t)?(m.consume(t),H):F(t)}function P(t){return t===45||(0,c.lV)(t)?(m.consume(t),P):t===47||t===62||(0,c.Ee)(t)?b(t):e(t)}function b(t){return t===47?(m.consume(t),F):t===58||t===95||(0,c.CW)(t)?(m.consume(t),R):(0,c.HP)(t)?(r=b,y(t)):(0,c.On)(t)?(m.consume(t),b):F(t)}function R(t){return t===45||t===46||t===58||t===95||(0,c.lV)(t)?(m.consume(t),R):K(t)}function K(t){return t===61?(m.consume(t),w):(0,c.HP)(t)?(r=K,y(t)):(0,c.On)(t)?(m.consume(t),K):b(t)}function w(t){return t===null||t===60||t===61||t===62||t===96?e(t):t===34||t===39?(m.consume(t),a=t,V):(0,c.HP)(t)?(r=w,y(t)):(0,c.On)(t)?(m.consume(t),w):(m.consume(t),N)}function V(t){return t===a?(m.consume(t),a=void 0,Y):t===null?e(t):(0,c.HP)(t)?(r=V,y(t)):(m.consume(t),V)}function N(t){return t===null||t===34||t===39||t===60||t===61||t===96?e(t):t===47||t===62||(0,c.Ee)(t)?b(t):(m.consume(t),N)}function Y(t){return t===47||t===62||(0,c.Ee)(t)?b(t):e(t)}function F(t){return t===62?(m.consume(t),m.exit("htmlTextData"),m.exit("htmlText"),s):e(t)}function y(t){return m.exit("htmlTextData"),m.enter("lineEnding"),m.consume(t),m.exit("lineEnding"),U}function U(t){return(0,c.On)(t)?(0,g.N)(m,v,"linePrefix",_.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):v(t)}function v(t){return m.enter("htmlTextData"),r(t)}}},35725:(f,T,x)=>{x.d(T,{o:()=>a});var g=x(2514),c=x(32568),B=x(13108),O=x(13967),m=x(84106),s=x(43890),e=x(26243),_=x(23796);const a={name:"labelEnd",tokenize:h,resolveTo:E,resolveAll:o},l={tokenize:u},r={tokenize:i},k={tokenize:M};function o(p){let S=-1;for(;++S<p.length;){const I=p[S][1];(I.type==="labelImage"||I.type==="labelLink"||I.type==="labelEnd")&&(p.splice(S+1,I.type==="labelImage"?4:2),I.type="data",S++)}return p}function E(p,S){let I=p.length,A=0,L,z,C,D;for(;I--;)if(L=p[I][1],z){if(L.type==="link"||L.type==="labelLink"&&L._inactive)break;p[I][0]==="enter"&&L.type==="labelLink"&&(L._inactive=!0)}else if(C){if(p[I][0]==="enter"&&(L.type==="labelImage"||L.type==="labelLink")&&!L._balanced&&(z=I,L.type!=="labelLink")){A=2;break}}else L.type==="labelEnd"&&(C=I);const W={type:p[z][1].type==="labelLink"?"link":"image",start:Object.assign({},p[z][1].start),end:Object.assign({},p[p.length-1][1].end)},H={type:"label",start:Object.assign({},p[z][1].start),end:Object.assign({},p[C][1].end)},P={type:"labelText",start:Object.assign({},p[z+A+2][1].end),end:Object.assign({},p[C-2][1].start)};return D=[["enter",W,S],["enter",H,S]],D=(0,s.V)(D,p.slice(z+1,z+A+3)),D=(0,s.V)(D,[["enter",P,S]]),D=(0,s.V)(D,(0,_.W)(S.parser.constructs.insideSpan.null,p.slice(z+A+4,C-3),S)),D=(0,s.V)(D,[["exit",P,S],p[C-2],p[C-1],["exit",H,S]]),D=(0,s.V)(D,p.slice(C+1)),D=(0,s.V)(D,[["exit",W,S]]),(0,s.m)(p,z,p.length,D),p}function h(p,S,I){const A=this;let L=A.events.length,z,C;for(;L--;)if((A.events[L][1].type==="labelImage"||A.events[L][1].type==="labelLink")&&!A.events[L][1]._balanced){z=A.events[L][1];break}return D;function D(R){return z?z._inactive?b(R):(C=A.parser.defined.includes((0,e.B)(A.sliceSerialize({start:z.end,end:A.now()}))),p.enter("labelEnd"),p.enter("labelMarker"),p.consume(R),p.exit("labelMarker"),p.exit("labelEnd"),W):I(R)}function W(R){return R===40?p.attempt(l,P,C?P:b)(R):R===91?p.attempt(r,P,C?H:b)(R):C?P(R):b(R)}function H(R){return p.attempt(k,P,b)(R)}function P(R){return S(R)}function b(R){return z._balanced=!0,I(R)}}function u(p,S,I){return A;function A(b){return p.enter("resource"),p.enter("resourceMarker"),p.consume(b),p.exit("resourceMarker"),L}function L(b){return(0,m.Ee)(b)?(0,O.Y)(p,z)(b):z(b)}function z(b){return b===41?P(b):(0,g.v)(p,C,D,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(b)}function C(b){return(0,m.Ee)(b)?(0,O.Y)(p,W)(b):P(b)}function D(b){return I(b)}function W(b){return b===34||b===39||b===40?(0,B.f)(p,H,I,"resourceTitle","resourceTitleMarker","resourceTitleString")(b):P(b)}function H(b){return(0,m.Ee)(b)?(0,O.Y)(p,P)(b):P(b)}function P(b){return b===41?(p.enter("resourceMarker"),p.consume(b),p.exit("resourceMarker"),p.exit("resource"),S):I(b)}}function i(p,S,I){const A=this;return L;function L(D){return c.r.call(A,p,z,C,"reference","referenceMarker","referenceString")(D)}function z(D){return A.parser.defined.includes((0,e.B)(A.sliceSerialize(A.events[A.events.length-1][1]).slice(1,-1)))?S(D):I(D)}function C(D){return I(D)}}function M(p,S,I){return A;function A(z){return p.enter("reference"),p.enter("referenceMarker"),p.consume(z),p.exit("referenceMarker"),L}function L(z){return z===93?(p.enter("referenceMarker"),p.consume(z),p.exit("referenceMarker"),p.exit("reference"),S):I(z)}}},76136:(f,T,x)=>{x.d(T,{u:()=>c});var g=x(35725);const c={name:"labelStartImage",tokenize:B,resolveAll:g.o.resolveAll};function B(O,m,s){const e=this;return _;function _(r){return O.enter("labelImage"),O.enter("labelImageMarker"),O.consume(r),O.exit("labelImageMarker"),a}function a(r){return r===91?(O.enter("labelMarker"),O.consume(r),O.exit("labelMarker"),O.exit("labelImage"),l):s(r)}function l(r){return r===94&&"_hiddenFootnoteSupport"in e.parser.constructs?s(r):m(r)}}},30385:(f,T,x)=>{x.d(T,{J:()=>c});var g=x(35725);const c={name:"labelStartLink",tokenize:B,resolveAll:g.o.resolveAll};function B(O,m,s){const e=this;return _;function _(l){return O.enter("labelLink"),O.enter("labelMarker"),O.consume(l),O.exit("labelMarker"),O.exit("labelLink"),a}function a(l){return l===94&&"_hiddenFootnoteSupport"in e.parser.constructs?s(l):m(l)}}},14229:(f,T,x)=>{x.d(T,{E:()=>c});var g=x(77508);const c={name:"lineEnding",tokenize:B};function B(O,m){return s;function s(e){return O.enter("lineEnding"),O.consume(e),O.exit("lineEnding"),(0,g.N)(O,m,"linePrefix")}}},16027:(f,T,x)=>{x.d(T,{p:()=>m});var g=x(77508),c=x(84106),B=x(35460),O=x(41590);const m={name:"list",tokenize:_,continuation:{tokenize:a},exit:r},s={tokenize:k,partial:!0},e={tokenize:l,partial:!0};function _(o,E,h){const u=this,i=u.events[u.events.length-1];let M=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,p=0;return S;function S(D){const W=u.containerState.type||(D===42||D===43||D===45?"listUnordered":"listOrdered");if(W==="listUnordered"?!u.containerState.marker||D===u.containerState.marker:(0,c.BM)(D)){if(u.containerState.type||(u.containerState.type=W,o.enter(W,{_container:!0})),W==="listUnordered")return o.enter("listItemPrefix"),D===42||D===45?o.check(O.V,h,A)(D):A(D);if(!u.interrupt||D===49)return o.enter("listItemPrefix"),o.enter("listItemValue"),I(D)}return h(D)}function I(D){return(0,c.BM)(D)&&++p<10?(o.consume(D),I):(!u.interrupt||p<2)&&(u.containerState.marker?D===u.containerState.marker:D===41||D===46)?(o.exit("listItemValue"),A(D)):h(D)}function A(D){return o.enter("listItemMarker"),o.consume(D),o.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||D,o.check(B.B,u.interrupt?h:L,o.attempt(s,C,z))}function L(D){return u.containerState.initialBlankLine=!0,M++,C(D)}function z(D){return(0,c.On)(D)?(o.enter("listItemPrefixWhitespace"),o.consume(D),o.exit("listItemPrefixWhitespace"),C):h(D)}function C(D){return u.containerState.size=M+u.sliceSerialize(o.exit("listItemPrefix"),!0).length,E(D)}}function a(o,E,h){const u=this;return u.containerState._closeFlow=void 0,o.check(B.B,i,M);function i(S){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,(0,g.N)(o,E,"listItemIndent",u.containerState.size+1)(S)}function M(S){return u.containerState.furtherBlankLines||!(0,c.On)(S)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,p(S)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,o.attempt(e,E,p)(S))}function p(S){return u.containerState._closeFlow=!0,u.interrupt=void 0,(0,g.N)(o,o.attempt(m,E,h),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S)}}function l(o,E,h){const u=this;return(0,g.N)(o,i,"listItemIndent",u.containerState.size+1);function i(M){const p=u.events[u.events.length-1];return p&&p[1].type==="listItemIndent"&&p[2].sliceSerialize(p[1],!0).length===u.containerState.size?E(M):h(M)}}function r(o){o.exit(this.containerState.type)}function k(o,E,h){const u=this;return(0,g.N)(o,i,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(M){const p=u.events[u.events.length-1];return!(0,c.On)(M)&&p&&p[1].type==="listItemPrefixWhitespace"?E(M):h(M)}}},25789:(f,T,x)=>{x.d(T,{A:()=>B});var g=x(77508),c=x(84106);const B={name:"setextUnderline",tokenize:m,resolveTo:O};function O(s,e){let _=s.length,a,l,r;for(;_--;)if(s[_][0]==="enter"){if(s[_][1].type==="content"){a=_;break}s[_][1].type==="paragraph"&&(l=_)}else s[_][1].type==="content"&&s.splice(_,1),!r&&s[_][1].type==="definition"&&(r=_);const k={type:"setextHeading",start:Object.assign({},s[l][1].start),end:Object.assign({},s[s.length-1][1].end)};return s[l][1].type="setextHeadingText",r?(s.splice(l,0,["enter",k,e]),s.splice(r+1,0,["exit",s[a][1],e]),s[a][1].end=Object.assign({},s[r][1].end)):s[a][1]=k,s.push(["exit",k,e]),s}function m(s,e,_){const a=this;let l;return r;function r(h){let u=a.events.length,i;for(;u--;)if(a.events[u][1].type!=="lineEnding"&&a.events[u][1].type!=="linePrefix"&&a.events[u][1].type!=="content"){i=a.events[u][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||i)?(s.enter("setextHeadingLine"),l=h,k(h)):_(h)}function k(h){return s.enter("setextHeadingLineSequence"),o(h)}function o(h){return h===l?(s.consume(h),o):(s.exit("setextHeadingLineSequence"),(0,c.On)(h)?(0,g.N)(s,E,"lineSuffix")(h):E(h))}function E(h){return h===null||(0,c.HP)(h)?(s.exit("setextHeadingLine"),e(h)):_(h)}}},41590:(f,T,x)=>{x.d(T,{V:()=>B});var g=x(77508),c=x(84106);const B={name:"thematicBreak",tokenize:O};function O(m,s,e){let _=0,a;return l;function l(E){return m.enter("thematicBreak"),r(E)}function r(E){return a=E,k(E)}function k(E){return E===a?(m.enter("thematicBreakSequence"),o(E)):_>=3&&(E===null||(0,c.HP)(E))?(m.exit("thematicBreak"),s(E)):e(E)}function o(E){return E===a?(m.consume(E),_++,o):(m.exit("thematicBreakSequence"),(0,c.On)(E)?(0,g.N)(m,k,"whitespace")(E):k(E))}}}}]);})();

//# sourceMappingURL=module-micromark-core-commonmark.6e846974.js.map