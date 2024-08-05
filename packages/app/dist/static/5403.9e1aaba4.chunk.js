(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5403,1472],{67296:(Ie,_,a)=>{"use strict";a.d(_,{r:()=>S});var t=a(14041),U=a(95208);const W=(0,t.lazy)(()=>a.e(7434).then(a.bind(a,97434)).then(L=>({default:L.RealLogViewer})));function S(L){const{Progress:ee}=(0,U.n)().getComponents();return t.createElement(t.Suspense,{fallback:t.createElement(ee,null)},t.createElement(W,{...L}))}},95403:(Ie,_,a)=>{"use strict";a.d(_,{b:()=>mt,W:()=>ut});var t=a(14041),U=a(18690),W=a(82326),S=a(11618),L=a(66839),ee=a(48043),X=a(93285),J=a(42899),G=a(89575),Te=a(39850),O=a(9546),y=a(268),te=a(7031),ne=function(R){return{root:{display:"block",backgroundColor:(0,y.X4)(R.palette.text.primary,R.palette.type==="light"?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:R.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(R.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}},pe=t.forwardRef(function(R,ie){var me=R.animation,M=me===void 0?"pulse":me,m=R.classes,d=R.className,E=R.component,v=E===void 0?"span":E,b=R.height,D=R.variant,w=D===void 0?"text":D,Z=R.width,Se=(0,Te.A)(R,["animation","classes","className","component","height","variant","width"]),Le=!!Se.children;return t.createElement(v,(0,G.A)({ref:ie,className:(0,O.default)(m.root,m[w],d,Le&&[m.withChildren,!Z&&m.fitContent,!b&&m.heightAuto],M!==!1&&m[M])},Se,{style:(0,G.A)({width:Z,height:b},Se.style)}))});const he=(0,te.A)(ne,{name:"MuiSkeleton"})(pe);var ce=a(13660),j=a(15246),B=a(699),Ae=a(37281),V=a(14158),se=a(97214),h=a(64398),ge=a(16654),de=a(18139),Ne=a(54195),it=a(72814),Ze=a(45250),ke=a(17749);const xe=t.createElement(he,{animation:"wave",variant:"text",height:40}),Qe=Y=>{const{children:R}=Y,ie=(0,S.YR)(),me=(0,de.gf)(Ne.U),{title:M,setTitle:m,subtitle:d,setSubtitle:E,entityRef:v,metadata:{value:b,loading:D},entityMetadata:{value:w,loading:Z}}=(0,L.V)();(0,t.useEffect)(()=>{b&&(m(b.site_name),E(()=>{let{site_description:We}=b;return(!We||We==="None")&&(We=""),We}))},[b,m,E]);const Se=me.getOptional("app.title")||"Backstage",Le=[M,d,Se].filter(Boolean).join(" | "),{locationMetadata:$e,spec:nt}=w||{},ft=nt==null?void 0:nt.lifecycle,Ue=w?(0,B.t)(w,se.vv):[],Be=(0,it.S)(ke.rQ)(),Lt=t.createElement(t.Fragment,null,t.createElement(h.S,{label:(0,Ze.capitalize)((w==null?void 0:w.kind)||"entity"),value:t.createElement(Ae.z,{color:"inherit",entityRef:v,title:w==null?void 0:w.metadata.title,defaultKind:"Component"})}),Ue.length>0&&t.createElement(h.S,{label:"Owner",value:t.createElement(V.i,{color:"inherit",entityRefs:Ue,defaultKind:"group"})}),ft?t.createElement(h.S,{label:"Lifecycle",value:String(ft)}):null,$e&&$e.type!=="dir"&&$e.type!=="file"?t.createElement(h.S,{label:"",value:t.createElement(J.A,{container:!0,direction:"column",alignItems:"center"},t.createElement(J.A,{style:{padding:0},item:!0},t.createElement(ce.A,{style:{marginTop:"-25px"}})),t.createElement(J.A,{style:{padding:0},item:!0},"Source")),url:$e.target}):null);return!Z&&w===void 0||!D&&b===void 0?null:t.createElement(ge.Y,{type:"Documentation",typeLink:Be,title:M||xe,subtitle:d===""?void 0:d||xe},t.createElement(X.A,{titleTemplate:"%s"},t.createElement("title",null,Le)),Lt,R,ie.renderComponentsByLocation(j.e.Header))};var At=a(84893),Je=a(76888),qe=a(85408),et=a(12554),lt=a(95208),Pe=a(64947),bt=a(95159),_e=a(61617),Re=a(91042),tt=a(76842),ct=a(3399);const dt="/.backstage/auth/v1/cookie",St=365*24*36e5;function wt(Y){const{pluginId:R}=Y!=null?Y:{},ie=(0,de.gf)(bt.a),me=(0,de.gf)(_e.I),M=(0,t.useMemo)(()=>"BroadcastChannel"in window?new BroadcastChannel(`${R}-auth-cookie-expires-at`):null,[R]),[m,d]=(0,Re.Y)(async()=>{const D=`${await me.getBaseUrl(R)}${dt}`,w=await ie.fetch(`${D}`,{credentials:"include"});if(!w.ok){if(w.status===404)return{expiresAt:new Date(Date.now()+St)};throw await ct.o3.fromResponse(w)}const Z=await w.json();if(!Z.expiresAt)throw new Error("No expiration date found in response");return Z});(0,tt.u)(d.execute);const E=(0,t.useCallback)(()=>{d.execute()},[d]),v=(0,t.useCallback)(b=>{const D=(1+3*Math.random())*6e4,w=Date.parse(b.expiresAt)-Date.now()-D,Z=setTimeout(E,w);return()=>clearTimeout(Z)},[E]);return(0,t.useEffect)(()=>{if(m.status!=="success"||!m.result)return()=>{};M==null||M.postMessage({action:"COOKIE_REFRESH_SUCCESS",payload:m.result});let b=v(m.result);const D=w=>{const{action:Z,payload:Se}=w.data;Z==="COOKIE_REFRESH_SUCCESS"&&(b(),b=v(Se))};return M==null||M.addEventListener("message",D),()=>{b(),M==null||M.removeEventListener("message",D)}},[m,v,M]),m.status==="not-executed"?{status:"loading"}:m.status==="loading"&&!m.result?{status:"loading"}:m.status==="loading"&&m.error?{status:"loading"}:m.status==="error"&&m.error?{status:"error",error:m.error,retry:E}:{status:"success",data:m.result}}function Fe(Y){const{children:R,...ie}=Y,me=(0,lt.n)(),{Progress:M}=me.getComponents(),m=wt(ie);return m.status==="loading"?t.createElement(M,null):m.status==="error"?t.createElement(et.b,{error:m.error},t.createElement(Pe.A,{variant:"outlined",onClick:m.retry},"Retry")):t.createElement(t.Fragment,null,R)}const mt=Y=>{const{withSearch:R,withHeader:ie=!0}=Y;return t.createElement(W.Y,{themeId:"documentation"},ie&&t.createElement(Qe,null),t.createElement(At.Z,null),t.createElement(ee.p,{withSearch:R}))},ut=Y=>{const{kind:R,name:ie,namespace:me}=(0,Je.K)(ke.Oc),{children:M,entityRef:m={kind:R,name:ie,namespace:me}}=Y,d=(0,U.P1)();if(!M){const b=(d?t.Children.toArray(d.props.children):[]).flatMap(D=>{var w,Z;return(Z=(w=D==null?void 0:D.props)==null?void 0:w.children)!=null?Z:[]}).find(D=>!(0,qe.E)(D,S.AF)&&!(0,qe.E)(D,S.Wm));return t.createElement(Fe,{pluginId:"techdocs"},t.createElement(L.R,{entityRef:m},b||t.createElement(mt,null)))}return t.createElement(Fe,{pluginId:"techdocs"},t.createElement(L.R,{entityRef:m},({metadata:E,entityMetadata:v,onReady:b})=>t.createElement("div",{className:"techdocs-reader-page"},t.createElement(W.Y,{themeId:"documentation"},M instanceof Function?M({entityRef:m,techdocsMetadataValue:E.value,entityMetadataValue:v.value,onReady:b}):M))))}},48043:(Ie,_,a)=>{"use strict";a.d(_,{p:()=>yt});var t=a(14041),U=a(42899),W=a(58837),S=a(66839),L=a(9394),ee=a(91360),X=a(22856),J=a(96872);const G="TECH_DOCS_SHADOW_DOM_STYLE_LOAD",Te=e=>{(0,t.useEffect)(()=>{var c;if(!e)return()=>{};const o=e.querySelectorAll('head > link[rel="stylesheet"]');let r=(c=o==null?void 0:o.length)!=null?c:0;const s=new CustomEvent(G);if(!r)return e.dispatchEvent(s),()=>{};const i=()=>{--r===0&&e.dispatchEvent(s)};return o==null||o.forEach(p=>{p.addEventListener("load",i)}),()=>{o==null||o.forEach(p=>{p.removeEventListener("load",i)})}},[e])},O=e=>{const[o,r]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if(!e)return()=>{};r(!0);const s=e.style;s.setProperty("opacity","0");const i=()=>{r(!1),s.setProperty("opacity","1")};return e.addEventListener(G,i),()=>{e.removeEventListener(G,i)}},[e]),o},y=e=>{const{element:o,onAppend:r,children:s}=e,[i,c]=(0,t.useState)((0,L.vt)({...(0,X.A)(),insertionPoint:void 0}));Te(o);const p=O(o),g=(0,t.useCallback)(A=>{if(!o||!A)return;c((0,L.vt)({...(0,X.A)(),insertionPoint:o.querySelector("head")||void 0}));let k=A.shadowRoot;k||(k=A.attachShadow({mode:"open"})),k.replaceChildren(o),typeof r=="function"&&r(k)},[o,r]);return t.createElement(t.Fragment,null,p&&t.createElement(J.k,null),t.createElement(ee.Ay,{jss:i,sheetsManager:new Map},t.createElement("div",{ref:g,"data-testid":"techdocs-native-shadowroot"}),s))};var te=a(85639),ne=a(41544),pe=a(16454),he=a(87437),ce=a(78467),j=a(61783),B=a(33986);const Ae=(0,W.A)(e=>({loading:{right:e.spacing(1),position:"absolute"}})),V=e=>o=>t.createElement(he.Lt,{inheritParentContextIfAvailable:!0},t.createElement(e,{...o})),se=()=>{const e=Ae();return t.createElement(ce.A,{className:e.loading,"data-testid":"search-autocomplete-progressbar",color:"inherit",size:20})},h=V(function(o){const{loading:r,value:s,onChange:i=()=>{},options:c=[],getOptionLabel:p=C=>String(C),inputPlaceholder:g,inputDebounceTime:A,freeSolo:k=!0,fullWidth:I=!0,clearOnBlur:x=!1,"data-testid":T="search-autocomplete",...ve}=o,{setTerm:ue}=(0,he.SQ)(),H=(0,t.useCallback)(C=>C?typeof C=="string"?C:p(C):"",[p]),be=(0,t.useMemo)(()=>H(s),[s,H]),ae=(0,t.useCallback)((C,N,K,Ce)=>{ue(H(N)),i(C,N,K,Ce)},[H,ue,i]),$=(0,t.useCallback)(({InputProps:{ref:C,className:N,endAdornment:K},InputLabelProps:Ce,...Oe})=>t.createElement(B.I,{...Oe,ref:C,clearButton:!1,value:be,placeholder:g,debounceTime:A,endAdornment:r?t.createElement(se,null):K,InputProps:{className:N}}),[r,be,g,A]);return t.createElement(j.Ay,{...ve,"data-testid":T,value:s,onChange:ae,options:c,getOptionLabel:p,renderInput:$,freeSolo:k,fullWidth:I,clearOnBlur:x})});var ge=a(18690),de=a(41472);const Ne=e=>e==null?void 0:e.document,it=e=>{const{entityId:o,entityTitle:r,debounceTime:s=150}=e,[i,c]=(0,t.useState)(!1),p=(0,ge.Zp)(),{setFilters:g,term:A,result:{loading:k,value:I}}=(0,he.SQ)(),[x,T]=(0,t.useState)([]);(0,t.useEffect)(()=>{let ae=!0;if(ae&&I){const $=I.results.slice(0,10);T($)}return()=>{ae=!1}},[k,I]);const{kind:ve,name:ue,namespace:H}=o;(0,t.useEffect)(()=>{g(ae=>({...ae,kind:ve,namespace:H,name:ue}))},[ve,H,ue,g]);const be=(ae,$)=>{if(Ne($)){const{location:C}=$.document;p(C)}};return t.createElement(h,{"data-testid":"techdocs-search-bar",size:"small",open:i&&!!A,getOptionLabel:()=>"",filterOptions:ae=>ae,onClose:()=>{c(!1)},onOpen:()=>{c(!0)},onChange:be,blurOnSelect:!0,noOptionsText:"No results found",value:null,options:x,renderOption:({document:ae,highlight:$})=>t.createElement(de.TechDocsSearchResultListItem,{result:ae,lineClamp:3,asListItem:!1,asLink:!1,title:ae.title,highlight:$}),loading:k,inputDebounceTime:s,inputPlaceholder:`Search ${r||o.name} docs`,freeSolo:!1})},Ze=e=>{const o={term:"",types:["techdocs"],pageCursor:"",filters:e.entityId};return t.createElement(he.Lt,{initialState:o},t.createElement(it,{...e}))};var ke=a(64947),xe=a(74219),Qe=a(67296),At=a(73845),Je=a(29365),qe=a(72501),et=a(99703),lt=a(32881);const Pe=(0,W.A)(e=>(0,et.A)({paper:{width:"100%",[e.breakpoints.up("sm")]:{width:"75%"},[e.breakpoints.up("md")]:{width:"50%"},padding:e.spacing(2.5)},root:{height:"100%",overflow:"hidden"},logs:{background:e.palette.background.default}})),bt=({buildLog:e,onClose:o})=>{const r=Pe(),s=e.length===0?"Waiting for logs...":e.join(`
`);return t.createElement(U.A,{container:!0,direction:"column",className:r.root,spacing:0,wrap:"nowrap"},t.createElement(U.A,{item:!0,container:!0,justifyContent:"space-between",alignItems:"center",spacing:0,wrap:"nowrap"},t.createElement(qe.A,{variant:"h5"},"Build Details"),t.createElement(Je.A,{key:"dismiss",title:"Close the drawer",onClick:o,color:"inherit"},t.createElement(lt.A,null))),t.createElement(U.A,{item:!0,xs:!0},t.createElement(Qe.r,{text:s,classes:{root:r.logs}})))},_e=({buildLog:e})=>{const o=Pe(),[r,s]=(0,t.useState)(!1);return t.createElement(t.Fragment,null,t.createElement(ke.A,{color:"inherit",onClick:()=>s(!0)},"Show Build Logs"),t.createElement(At.Ay,{classes:{paper:o.paper},anchor:"right",open:r,onClose:()=>s(!1)},t.createElement(bt,{buildLog:e,onClose:()=>s(!1)})))};var Re=a(18139),tt=a(54195),ct=a(52262);const dt=({errorMessage:e})=>{const o=(0,Re.gf)(tt.U).getOptionalString("techdocs.builder"),r=(0,ct.s)(),{entityRef:s}=(0,S.V)(),i=(0,ge.zy)();(0,t.useEffect)(()=>{const{pathname:p,search:g,hash:A}=i;r.captureEvent("not-found",`${p}${g}${A}`,{attributes:s})},[r,s,i]);let c="";return[void 0,"local"].includes(o)||(c="Note that techdocs.builder is not set to 'local' in your config, which means this Backstage app will not generate docs if they are not found. Make sure the project's docs are generated and published by some external process (e.g. CI/CD pipeline). Or change techdocs.builder to 'local' to generate docs from this Backstage instance."),t.createElement(ne.M,{status:"404",statusMessage:e||"Documentation not found",additionalInfo:c})};var St=a(73466),wt=a(28966),Fe=a(49707);function mt({contentLoading:e,content:o,activeSyncState:r}){return e||r==="BUILD_READY_RELOAD"||!o&&r==="CHECKING"?"CHECKING":!o&&r==="BUILDING"?"INITIAL_BUILD":o?r==="BUILDING"?"CONTENT_STALE_REFRESHING":r==="BUILD_READY"?"CONTENT_STALE_READY":r==="ERROR"?"CONTENT_STALE_ERROR":"CONTENT_FRESH":"CONTENT_NOT_FOUND"}function ut(e,o){const r={...e};switch(o.type){case"sync":o.state==="CHECKING"&&(r.buildLog=[]),r.activeSyncState=o.state,r.syncError=o.syncError;break;case"contentLoading":r.contentLoading=!0,r.contentError=void 0;break;case"content":typeof o.path=="string"&&(r.path=o.path),r.contentLoading=!1,r.content=o.content,r.contentError=o.contentError;break;case"buildLog":r.buildLog=r.buildLog.concat(o.log);break;default:throw new Error}return["BUILD_READY","BUILD_READY_RELOAD"].includes(r.activeSyncState)&&["contentLoading","content"].includes(o.type)&&(r.activeSyncState="UP_TO_DATE",r.buildLog=[]),r}function Y(e,o,r,s){var I,x;const[i,c]=(0,t.useReducer)(ut,{activeSyncState:"CHECKING",path:s,contentLoading:!0,buildLog:[]}),p=(0,Re.gf)(Fe.s),{retry:g}=(0,wt.A)(async()=>{c({type:"contentLoading"});try{const T=await p.getEntityDocs({kind:e,namespace:o,name:r},s);return c({type:"content",content:T,path:s}),T}catch(T){c({type:"content",contentError:T,path:s})}},[p,e,o,r,s]),A=(0,t.useRef)({content:void 0,reload:()=>{}});return A.current={content:i.content,reload:g},(0,St.A)(async()=>{c({type:"sync",state:"CHECKING"});const T=setTimeout(()=>{c({type:"sync",state:"BUILDING"})},1e3);try{switch(await p.syncEntityDocs({kind:e,namespace:o,name:r},ue=>{c({type:"buildLog",log:ue})})){case"updated":A.current.content?c({type:"sync",state:"BUILD_READY"}):(A.current.reload(),c({type:"sync",state:"BUILD_READY_RELOAD"}));break;case"cached":c({type:"sync",state:"UP_TO_DATE"});break;default:c({type:"sync",state:"ERROR",syncError:new Error("Unexpected return state")});break}}catch(ve){c({type:"sync",state:"ERROR",syncError:ve})}finally{clearTimeout(T)}},[e,r,o,p,c,A]),{state:(0,t.useMemo)(()=>mt({activeSyncState:i.activeSyncState,contentLoading:i.contentLoading,content:i.content}),[i.activeSyncState,i.content,i.contentLoading]),contentReload:g,path:i.path,content:i.content,contentErrorMessage:(I=i.contentError)==null?void 0:I.toString(),syncErrorMessage:(x=i.syncError)==null?void 0:x.toString(),buildLog:i.buildLog}}const R=(0,t.createContext)({}),ie=()=>(0,t.useContext)(R),me=e=>{const{children:o}=e,{"*":r=""}=(0,ge.g)(),{entityRef:s}=(0,S.V)(),{kind:i,namespace:c,name:p}=s,g=Y(i,c,p,r);return t.createElement(R.Provider,{value:g},o instanceof Function?o(g):o)},M=e=>o=>t.createElement(me,null,t.createElement(e,{...o})),m=(0,W.A)(e=>({root:{marginBottom:e.spacing(2)},message:{wordBreak:"break-word",overflowWrap:"anywhere"}})),d=()=>{let e=null;const o=m(),{state:r,contentReload:s,contentErrorMessage:i,syncErrorMessage:c,buildLog:p}=ie();return r==="INITIAL_BUILD"&&(e=t.createElement(xe.A,{classes:{root:o.root},variant:"outlined",severity:"info",icon:t.createElement(ce.A,{size:"24px"}),action:t.createElement(_e,{buildLog:p})},"Documentation is accessed for the first time and is being prepared. The subsequent loads are much faster.")),r==="CONTENT_STALE_REFRESHING"&&(e=t.createElement(xe.A,{variant:"outlined",severity:"info",icon:t.createElement(ce.A,{size:"24px"}),action:t.createElement(_e,{buildLog:p}),classes:{root:o.root}},"A newer version of this documentation is being prepared and will be available shortly.")),r==="CONTENT_STALE_READY"&&(e=t.createElement(xe.A,{variant:"outlined",severity:"success",action:t.createElement(ke.A,{color:"inherit",onClick:()=>s()},"Refresh"),classes:{root:o.root}},"A newer version of this documentation is now available, please refresh to view.")),r==="CONTENT_STALE_ERROR"&&(e=t.createElement(xe.A,{variant:"outlined",severity:"error",action:t.createElement(_e,{buildLog:p}),classes:{root:o.root,message:o.message}},"Building a newer version of this documentation failed."," ",c)),r==="CONTENT_NOT_FOUND"&&(e=t.createElement(t.Fragment,null,c&&t.createElement(xe.A,{variant:"outlined",severity:"error",action:t.createElement(_e,{buildLog:p}),classes:{root:o.root,message:o.message}},"Building a newer version of this documentation failed."," ",c),t.createElement(dt,{errorMessage:i}))),e};var E=a(5893),v=a(54917),b=a(54934),D=a(71651),w=a.n(D);const Z=/main\.[A-Fa-f0-9]{8}\.min\.css$/,Se=/^https:\/\/fonts\.googleapis\.com/,Le=/^https:\/\/fonts\.gstatic\.com/,$e=e=>e.nodeName==="LINK",nt=e=>{const o=(e==null?void 0:e.getAttribute("href"))||"",r=o.match(Z),s=o.match(Se),i=o.match(Le);return r||s||i},ft=e=>($e(e)&&!nt(e)&&e.remove(),e),Ue=e=>e.nodeName==="IFRAME",Be=(e,o)=>{const r=e.getAttribute("src")||"";try{const{host:s}=new URL(r);return o.includes(s)}catch{return!1}},Lt=e=>o=>(Ue(o)&&!Be(o,e)&&o.remove(),o),zt=()=>{const e=(0,Re.gf)(tt.U);return(0,t.useMemo)(()=>e.getOptionalConfig("techdocs.sanitizer"),[e])},Ht=()=>{const e=zt();return(0,t.useCallback)(async o=>{const r=e==null?void 0:e.getOptionalStringArray("allowedIframeHosts");w().addHook("beforeSanitizeElements",ft);const s=["link"];return r&&(s.push("iframe"),w().addHook("beforeSanitizeElements",Lt(r))),w().sanitize(o.outerHTML,{ADD_TAGS:s,FORBID_TAGS:["style"],WHOLE_DOCUMENT:!0,RETURN_DOM:!0})},[e])};var We=a(65901),q=a(268),oe=({theme:e})=>`
/*==================  Variables  ==================*/
/*
  As the MkDocs output is rendered in shadow DOM, the CSS variable definitions on the root selector are not applied. Instead, they have to be applied on :host.
  As there is no way to transform the served main*.css yet (for example in the backend), we have to copy from main*.css and modify them.
*/

:host {
  /* FONT */
  --md-default-fg-color: ${e.palette.text.primary};
  --md-default-fg-color--light: ${e.palette.text.secondary};
  --md-default-fg-color--lighter: ${(0,q.a)(e.palette.text.secondary,.7)};
  --md-default-fg-color--lightest: ${(0,q.a)(e.palette.text.secondary,.3)};

  /* BACKGROUND */
  --md-default-bg-color:${e.palette.background.default};
  --md-default-bg-color--light: ${e.palette.background.paper};
  --md-default-bg-color--lighter: ${(0,q.a)(e.palette.background.paper,.7)};
  --md-default-bg-color--lightest: ${(0,q.a)(e.palette.background.paper,.3)};

  /* PRIMARY */
  --md-primary-fg-color: ${e.palette.primary.main};
  --md-primary-fg-color--light: ${e.palette.primary.light};
  --md-primary-fg-color--dark: ${e.palette.primary.dark};
  --md-primary-bg-color: ${e.palette.primary.contrastText};
  --md-primary-bg-color--light: ${(0,q.a)(e.palette.primary.contrastText,.7)};

  /* ACCENT */
  --md-accent-fg-color: var(--md-primary-fg-color);
  --md-accent-fg-color--transparent: ${(0,q.X4)(e.palette.primary.main,.1)};
  --md-accent-bg-color: var(--md-primary-bg-color);
  --md-accent-bg-color--light: var(--md-primary-bg-color--light);

  /* SHADOW */
  --md-shadow-z1: ${e.shadows[1]};
  --md-shadow-z2: ${e.shadows[2]};
  --md-shadow-z3: ${e.shadows[3]};

  /* EXTENSIONS */
  --md-admonition-fg-color: var(--md-default-fg-color);
  --md-admonition-bg-color: var(--md-default-bg-color);
  /* Admonitions and others are using SVG masks to define icons. These masks are defined as CSS variables. */
  --md-admonition-icon--note: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/></svg>');
  --md-admonition-icon--abstract: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5h16v2H4V5m0 4h16v2H4V9m0 4h16v2H4v-2m0 4h10v2H4v-2z"/></svg>');
  --md-admonition-icon--info: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>');
  --md-admonition-icon--tip: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.55 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66C13.3 7.26 13 4.85 13.91 3c-.91.23-1.75.75-2.45 1.32-2.54 2.08-3.54 5.75-2.34 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12a.83.83 0 01-.15-.17c-1.1-1.43-1.28-3.48-.53-5.12C5.89 10 5 12.3 5.14 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.32 1.5-6.6l-.13-.26c-.2-.46-.47-.87-.8-1.25l.05-.01m-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.4-2.2-.16-2.87-.82 1.19-.28 1.89-1.16 2.09-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.18-2.06.17.38.37.76.6 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.27h.01z"/></svg>');
  --md-admonition-icon--success: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-admonition-icon--question: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 00-2-2 2 2 0 00-2 2H8a4 4 0 014-4 4 4 0 014 4 3.2 3.2 0 01-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10c0-5.53-4.5-10-10-10z"/></svg>');
  --md-admonition-icon--warning: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"/></svg>');
  --md-admonition-icon--failure: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"/></svg>');
  --md-admonition-icon--danger: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z"/></svg>');
  --md-admonition-icon--bug: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6.002 6.002 0 00-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/></svg>');
  --md-admonition-icon--example: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 01.75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>');
  --md-admonition-icon--quote: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/></svg>');
  --md-footnotes-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.42L5.83 13H21V7h-2z"/></svg>');
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-tasklist-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
  --md-tasklist-icon--checked: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-nav-icon--prev: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z"/></svg>');
  --md-nav-icon--next: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-toc-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9h14V7H3v2m0 4h14v-2H3v2m0 4h14v-2H3v2m16 0h2v-2h-2v2m0-10v2h2V7h-2m0 6h2v-2h-2v2z"/></svg>');
  --md-clipboard-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg>');
  --md-search-result-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8l-6-6m6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>');
  --md-source-forks-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>');
  --md-source-repositories-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>');
  --md-source-stars-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>');
  --md-source-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>');
  --md-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m310.6 246.6-127.1 128c-7.1 6.3-15.3 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128C.224 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75s3.12 25.75-6.08 34.85z"/></svg>');
}

:host > * {
  /* CODE */
  --md-code-fg-color: ${e.palette.text.primary};
  --md-code-bg-color: ${e.palette.background.paper};
  --md-code-hl-color: ${(0,q.X4)(e.palette.warning.main,.5)};
  --md-code-hl-color--light: var(--md-code-hl-color);
  --md-code-hl-keyword-color: ${e.palette.type==="dark"?e.palette.primary.light:e.palette.primary.dark};
  --md-code-hl-function-color: ${e.palette.type==="dark"?e.palette.secondary.light:e.palette.secondary.dark};
  --md-code-hl-string-color: ${e.palette.type==="dark"?e.palette.success.light:e.palette.success.dark};
  --md-code-hl-number-color: ${e.palette.type==="dark"?e.palette.error.light:e.palette.error.dark};
  --md-code-hl-constant-color: var(--md-code-hl-function-color);
  --md-code-hl-special-color: var(--md-code-hl-function-color);
  --md-code-hl-name-color: var(--md-code-fg-color);
  --md-code-hl-comment-color: var(--md-default-fg-color--light);
  --md-code-hl-generic-color: var(--md-default-fg-color--light);
  --md-code-hl-variable-color: var(--md-default-fg-color--light);
  --md-code-hl-operator-color: var(--md-default-fg-color--light);
  --md-code-hl-punctuation-color: var(--md-default-fg-color--light);

  /* TYPESET */
  --md-typeset-font-size: 1rem;
  --md-typeset-color: var(--md-default-fg-color);
  --md-typeset-a-color: ${e.palette.link};
  --md-typeset-table-color: ${e.palette.text.primary};
  --md-typeset-table-color--light: ${(0,q.X4)(e.palette.text.primary,.5)};
  --md-typeset-del-color: ${e.palette.type==="dark"?(0,q.X4)(e.palette.error.dark,.5):(0,q.X4)(e.palette.error.light,.5)};
  --md-typeset-ins-color: ${e.palette.type==="dark"?(0,q.X4)(e.palette.success.dark,.5):(0,q.X4)(e.palette.success.light,.5)};
  --md-typeset-mark-color: ${e.palette.type==="dark"?(0,q.X4)(e.palette.warning.dark,.5):(0,q.X4)(e.palette.warning.light,.5)};
  --md-typeset-kbd-color: var(--md-code-bg-color);
  --md-typeset-kbd-accent-color var(--md-code-bg-color);
  --md-typeset-kbd-border-color: var(--md-default-fg-color--light);
}

@media screen and (max-width: 76.1875em) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .9rem;
  }
}

@media screen and (max-width: 600px) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .7rem;
  }
}

  --md-footer-bg-color: var(--md-default-bg-color);
  --md-footer-bg-color--dark: var(--md-default-bg-color);
`,ot=({theme:e})=>`
/*==================  Reset  ==================*/

body {
  --md-text-color: var(--md-default-fg-color);
  --md-text-link-color: var(--md-accent-fg-color);
  --md-text-font-family: ${e.typography.fontFamily};
  font-family: var(--md-text-font-family);
  background-color: unset;
}
`;const Ct="224px";var Zt=({theme:e,sidebar:o})=>`
/*==================  Layout  ==================*/

/* mkdocs material v9 compat */
.md-nav__title {
  color: var(--md-default-fg-color);
}

.md-grid {
  max-width: 100%;
  margin: 0;
}

.md-nav {
  font-size: calc(var(--md-typeset-font-size) * 0.9);
}
.md-nav__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.md-nav__icon {
  height: 20px !important;
  width: 20px !important;
  margin-left:${e.spacing(1)}px;
}
.md-nav__icon svg {
  margin: 0;
  width: 20px !important;
  height: 20px !important;
}
.md-nav__icon:after {
  width: 20px !important;
  height: 20px !important;
}

.md-nav__item--active > .md-nav__link, a.md-nav__link--active {
  text-decoration: underline;
  color: var(--md-typeset-a-color);
}

.md-main__inner {
  margin-top: 0;
}

.md-sidebar {
  bottom: 75px;
  position: fixed;
  width: 16rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: rgb(193, 193, 193) #eee;
  scrollbar-width: thin;
}
.md-sidebar .md-sidebar__scrollwrap {
  width: calc(12.1rem);
  overflow-y: hidden;
}
.md-sidebar--secondary {
  right: ${e.spacing(3)}px;
}
.md-sidebar::-webkit-scrollbar {
  width: 5px;
}
.md-sidebar::-webkit-scrollbar-button {
  width: 5px;
  height: 5px;
}
.md-sidebar::-webkit-scrollbar-track {
  background: #eee;
  border: 1 px solid rgb(250, 250, 250);
  box-shadow: 0px 0px 3px #dfdfdf inset;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb {
  width: 5px;
  background: rgb(193, 193, 193);
  border: transparent;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgb(125, 125, 125);
}

.md-content {
  max-width: calc(100% - 16rem * 2);
  margin-left: 16rem;
  margin-bottom: 50px;
}

.md-footer {
  position: fixed;
  bottom: 0px;
  pointer-events: none;
}

.md-footer-nav__link, .md-footer__link {
  pointer-events: all;
}

.md-footer__title {
  background-color: unset;
}
.md-footer-nav__link, .md-footer__link {
  width: 16rem;
}

.md-dialog {
  background-color: unset;
}

@media screen and (min-width: 76.25em) {
  .md-sidebar {
    height: auto;
  }
}

@media screen and (max-width: 76.1875em) {
  .md-nav {
    transition: none !important;
    background-color: var(--md-default-bg-color)
  }
  .md-nav--primary .md-nav__title {
    cursor: auto;
    color: var(--md-default-fg-color);
    font-weight: 700;
    white-space: normal;
    line-height: 1rem;
    height: auto;
    display: flex;
    flex-flow: column;
    row-gap: 1.6rem;
    padding: 1.2rem .8rem .8rem;
    background-color: var(--md-default-bg-color);
  }
  .md-nav--primary .md-nav__title~.md-nav__list {
    box-shadow: none;
  }
  .md-nav--primary .md-nav__title ~ .md-nav__list > :first-child {
    border-top: none;
  }
  .md-nav--primary .md-nav__title .md-nav__button {
    display: none;
  }
  .md-nav--primary .md-nav__title .md-nav__icon {
    color: var(--md-default-fg-color);
    position: static;
    height: auto;
    margin: 0 0 0 -0.2rem;
  }
  .md-nav--primary > .md-nav__title [for="none"] {
    padding-top: 0;
  }
  .md-nav--primary .md-nav__item {
    border-top: none;
  }
  .md-nav--primary :is(.md-nav__title,.md-nav__item) {
    font-size : var(--md-typeset-font-size);
  }
  .md-nav .md-source {
    display: none;
  }

  .md-sidebar {
    height: 100%;
  }
  .md-sidebar--primary {
    width: 12.1rem !important;
    z-index: 200;
    left: ${o.isPinned?`calc(-12.1rem + ${Ct})`:"calc(-12.1rem + 72px)"} !important;
  }
  .md-sidebar--secondary:not([hidden]) {
    display: none;
  }

  .md-content {
    max-width: 100%;
    margin-left: 0;
  }

  .md-header__button {
    margin: 0.4rem 0;
    margin-left: 0.4rem;
    padding: 0;
  }

  .md-overlay {
    left: 0;
  }

  .md-footer {
    position: static;
    padding-left: 0;
  }
  .md-footer-nav__link {
    /* footer links begin to overlap at small sizes without setting width */
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .md-sidebar--primary {
    left: -12.1rem !important;
    width: 12.1rem;
  }
}


@media print {
  .md-sidebar,
  #toggle-sidebar {
    display: none;
  }

  .md-content {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
}
`;const Qt=["h1","h2","h3","h4","h5","h6"];var Jt=({theme:e})=>`
/*==================  Typeset  ==================*/

.md-typeset {
  font-size: var(--md-typeset-font-size);
}

${Qt.reduce((o,r)=>{var I;const s=(I=e.typography.htmlFontSize)!=null?I:16,i=e.typography[r],{lineHeight:c,fontFamily:p,fontWeight:g,fontSize:A}=i,k=x=>{let T=1;return typeof x=="number"&&(T=x/s*.6),typeof x=="string"&&(T=x.replace("rem","")),`calc(${T} * var(--md-typeset-font-size))`};return o.concat(`
    .md-typeset ${r} {
      color: var(--md-default-fg-color);
      line-height: ${c};
      font-family: ${p};
      font-weight: ${g};
      font-size: ${k(A)};
    }
  `)},"")}

.md-typeset .md-content__button {
  color: var(--md-default-fg-color);
}

.md-typeset hr {
  border-bottom: 0.05rem dotted ${e.palette.divider};
}

.md-typeset details {
  font-size: var(--md-typeset-font-size) !important;
}
.md-typeset details summary {
  padding-left: 2.5rem !important;
}
.md-typeset details summary:before,
.md-typeset details summary:after {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: rotate(0deg) translateY(-50%) !important;
}
.md-typeset details[open] > summary:after {
  transform: rotate(90deg) translateX(-50%) !important;
}

.md-typeset blockquote {
  color: var(--md-default-fg-color--light);
  border-left: 0.2rem solid var(--md-default-fg-color--light);
}

.md-typeset table:not([class]) {
  font-size: var(--md-typeset-font-size);
  border: 1px solid var(--md-default-fg-color);
  border-bottom: none;
  border-collapse: collapse;
}
.md-typeset table:not([class]) th {
  font-weight: bold;
}
.md-typeset table:not([class]) td, .md-typeset table:not([class]) th {
  border-bottom: 1px solid var(--md-default-fg-color);
}

.md-typeset pre > code::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 0%, 0.32);
}
.md-typeset pre > code::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0, 0%, 0%, 0.87);
}

.md-typeset code {
  word-break: keep-all;
}
`,qt=()=>`
/*==================  Animations  ==================*/
/*
  Disable CSS animations on link colors as they lead to issues in dark mode.
  The dark mode color theme is applied later and theirfore there is always an animation from light to dark mode when navigation between pages.
*/
.md-dialog, .md-nav__link, .md-footer__link, .md-typeset a, .md-typeset a::before, .md-typeset .headerlink {
  transition: none;
}
`,we=({theme:e})=>`
/*==================  Extensions  ==================*/

/* HIGHLIGHT */
.highlight .md-clipboard:after {
  content: unset;
}

.highlight .nx {
  color: ${e.palette.type==="dark"?"#ff53a3":"#ec407a"};
}

/* CODE HILITE */
.codehilite .gd {
  background-color: ${e.palette.type==="dark"?"rgba(248,81,73,0.65)":"#fdd"};
}

.codehilite .gi {
  background-color: ${e.palette.type==="dark"?"rgba(46,160,67,0.65)":"#dfd"};
}

/* TABBED */
.tabbed-set>input:nth-child(1):checked~.tabbed-labels>:nth-child(1),
.tabbed-set>input:nth-child(2):checked~.tabbed-labels>:nth-child(2),
.tabbed-set>input:nth-child(3):checked~.tabbed-labels>:nth-child(3),
.tabbed-set>input:nth-child(4):checked~.tabbed-labels>:nth-child(4),
.tabbed-set>input:nth-child(5):checked~.tabbed-labels>:nth-child(5),
.tabbed-set>input:nth-child(6):checked~.tabbed-labels>:nth-child(6),
.tabbed-set>input:nth-child(7):checked~.tabbed-labels>:nth-child(7),
.tabbed-set>input:nth-child(8):checked~.tabbed-labels>:nth-child(8),
.tabbed-set>input:nth-child(9):checked~.tabbed-labels>:nth-child(9),
.tabbed-set>input:nth-child(10):checked~.tabbed-labels>:nth-child(10),
.tabbed-set>input:nth-child(11):checked~.tabbed-labels>:nth-child(11),
.tabbed-set>input:nth-child(12):checked~.tabbed-labels>:nth-child(12),
.tabbed-set>input:nth-child(13):checked~.tabbed-labels>:nth-child(13),
.tabbed-set>input:nth-child(14):checked~.tabbed-labels>:nth-child(14),
.tabbed-set>input:nth-child(15):checked~.tabbed-labels>:nth-child(15),
.tabbed-set>input:nth-child(16):checked~.tabbed-labels>:nth-child(16),
.tabbed-set>input:nth-child(17):checked~.tabbed-labels>:nth-child(17),
.tabbed-set>input:nth-child(18):checked~.tabbed-labels>:nth-child(18),
.tabbed-set>input:nth-child(19):checked~.tabbed-labels>:nth-child(19),
.tabbed-set>input:nth-child(20):checked~.tabbed-labels>:nth-child(20) {
  color: var(--md-accent-fg-color);
  border-color: var(--md-accent-fg-color);
}

/* TASK-LIST */
.task-list-control .task-list-indicator::before {
  background-color: ${e.palette.action.disabledBackground};
}
.task-list-control [type="checkbox"]:checked + .task-list-indicator:before {
 background-color: ${e.palette.success.main};
}

/* ADMONITION */
.admonition {
  font-size: var(--md-typeset-font-size) !important;
}
.admonition .admonition-title {
  padding-left: 2.5rem !important;
}

.admonition .admonition-title:before {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: translateY(-50%) !important;
}
`;const xt=[oe,ot,Zt,Jt,qt,we],Rt=()=>(0,We.Ut)(),Dt=()=>{const e=Rt(),o=(0,v.A)();return(0,t.useMemo)(()=>{const r={theme:o,sidebar:e};return xt.reduce((s,i)=>s+i(r),"")},[o,e])},en=()=>{const e=Dt();return(0,t.useCallback)(o=>(o.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",`<style>${e}</style>`),o),[e])},tn=(e,o,r)=>{const s=e==="src"&&o.endsWith(".svg"),i=!o.match(/^([a-z]*:)?\/\//i),c=o.startsWith(r);return s&&(i||c)},nn=({techdocsStorageApi:e,entityId:o,path:r})=>async s=>{const i=await e.getApiOrigin(),c=async(p,g)=>{for(const A of p)if(A.hasAttribute(g)){const k=A.getAttribute(g);if(!k)return;const I=await e.getBaseUrl(k,o,r);if(tn(g,k,i))try{const T=await(await fetch(I,{credentials:"include"})).text();A.setAttribute(g,`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(T)))}`)}catch{A.setAttribute("alt",`Error: ${k}`)}else A.setAttribute(g,I)}};return await Promise.all([c(s.querySelectorAll("img"),"src"),c(s.querySelectorAll("script"),"src"),c(s.querySelectorAll("source"),"src"),c(s.querySelectorAll("link"),"href"),c(s.querySelectorAll("a[download]"),"href")]),s};var _t=a(78264),on=a(90292),Ft=a(52536),Q=a.n(Ft);let Ot;Ot=Promise.resolve().then(a.t.bind(a,25873,19));function F(e,o){Ot.then(r=>{"createRoot"in r?r.createRoot(o).render(e):r.render(e,o)})}const $t=e=>o=>{var T;const r=o.querySelector('[title="Edit this page"]');if(!r||!r.href)return o;const s=new URL(r.href),i=e.byUrl(s);if((i==null?void 0:i.type)!=="github"&&(i==null?void 0:i.type)!=="gitlab")return o;const c=((T=o.querySelector("article>h1"))==null?void 0:T.childNodes[0].textContent)||"",p=encodeURIComponent(`Documentation Feedback: ${c}`),g=encodeURIComponent(`Page source:
${r.href}

Feedback:`),A=(i==null?void 0:i.type)==="github"?(0,_t.F)(s.href,"blob"):s.href,k=Q()(A),I=`/${k.organization}/${k.name}`,x=r.cloneNode();switch(i==null?void 0:i.type){case"gitlab":x.href=`${s.origin}${I}/issues/new?issue[title]=${p}&issue[description]=${g}`;break;case"github":x.href=`${s.origin}${I}/issues/new?title=${p}&body=${g}`;break;default:return o}return F(t.createElement(on.A),x),x.style.paddingLeft="5px",x.title="Leave feedback for this page",x.id="git-feedback-link",r==null||r.insertAdjacentElement("beforebegin",x),o};var z=a(27326);const at=()=>e=>{const o=e.querySelector('.md-header label[for="__drawer"]'),r=e.querySelector("article");if(!o||!r)return e;const s=o.cloneNode();return F(t.createElement(z.A),s),s.id="toggle-sidebar",s.title="Toggle Sidebar",s.classList.add("md-content__button"),s.style.setProperty("padding","0 0 0 5px"),s.style.setProperty("margin","0.4rem 0 0.4rem 0.4rem"),r==null||r.prepend(s),e},Mt=()=>e=>(((r,s)=>{Array.from(r).filter(i=>i.hasAttribute(s)).forEach(i=>{const c=i.getAttribute(s);if(c){c.match(/^https?:\/\//i)&&i.setAttribute("target","_blank");try{const p=Wt(window.location.href);i.setAttribute(s,new URL(c,p).toString())}catch{i.replaceWith(i.textContent||c)}}})})(Array.from(e.getElementsByTagName("a")),"href"),e);function Wt(e){const o=new URL(e);return!o.pathname.endsWith("/")&&!o.pathname.endsWith(".html")&&(o.pathname+="/"),o.toString()}const It=({baseUrl:e,onClick:o})=>r=>(Array.from(r.getElementsByTagName("a")).forEach(s=>{s.addEventListener("click",i=>{const p=s.getAttribute("href");p&&p.startsWith(e)&&!s.hasAttribute("download")&&(i.preventDefault(),o(i,p))})}),r);var Gt=a(7031),Vt=a(50868),Ge=a(10437),Nt=a(71677),ze=a(36338);const kt=(0,Gt.A)(e=>({tooltip:{fontSize:"inherit",color:e.palette.text.primary,margin:0,padding:e.spacing(.5),backgroundColor:"transparent",boxShadow:"none"}}))(Nt.Ay),Pt=()=>t.createElement(Ge.A,null,t.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),Ve=({text:e})=>{const[o,r]=(0,t.useState)(!1),[,s]=(0,ze.A)(),i=(0,t.useCallback)(()=>{s(e),r(!0)},[e,s]),c=(0,t.useCallback)(()=>{r(!1)},[r]);return t.createElement(kt,{title:"Copied to clipboard",placement:"left",open:o,onClose:c,leaveDelay:1e3},t.createElement(Je.A,{style:{color:"inherit",position:"absolute"},className:"md-clipboard md-icon",onClick:i},t.createElement(Pt,null)))},pt=e=>o=>{var s;const r=o.querySelectorAll("pre > code");for(const i of r){const c=i.textContent||"",p=document.createElement("div");(s=i==null?void 0:i.parentElement)==null||s.prepend(p),F(t.createElement(Vt.A,{theme:e},t.createElement(Ve,{text:c})),p)}return o},ht=()=>e=>{var o;return(o=e.querySelector(".md-header"))==null||o.remove(),e},Yt=()=>e=>{var o,r;return(o=e.querySelector(".md-footer .md-copyright"))==null||o.remove(),(r=e.querySelector(".md-footer-copyright"))==null||r.remove(),e},Ut=({onLoading:e,onLoaded:o})=>r=>(e(),r.addEventListener(G,function s(){o(),r.removeEventListener(G,s)}),r),an=()=>e=>(setTimeout(()=>{const o=e==null?void 0:e.querySelectorAll("li.md-nav__item--active");o.length!==0&&(o.forEach(s=>{const i=s==null?void 0:s.querySelector("input");i!=null&&i.checked||i==null||i.click()}),o[o.length-1].scrollIntoView())},200),e),gt=async(e,o)=>{let r;if(typeof e=="string")r=new DOMParser().parseFromString(e,"text/html").documentElement;else if(e instanceof Element)r=e;else throw new Error("dom is not a recognized type");for(const s of o)r=await s(r);return r};function rt(e,o){const r=new URL(o),s=`${r.origin}${r.pathname.replace(/\/$/,"")}`,i=e.replace(s,"").replace(/^\/+/,""),c=new URL(`http://localhost/${i}`);return`${c.pathname}${c.search}${c.hash}`}function Ye(){const e=(0,t.useRef)((0,ge.Zp)()),r=(0,Re.gf)(tt.U).getOptionalString("app.baseUrl");return(0,t.useCallback)(i=>{let c=i;if(r)try{c=rt(i,r)}catch{}e.current(c)},[r])}const Ke="screen and (max-width: 76.1875em)",Kt=e=>{const o=Ye(),r=(0,v.A)(),s=(0,E.A)(Ke),i=Ht(),c=en(),p=(0,ct.s)(),g=(0,Re.gf)(Fe.s),A=(0,Re.gf)(b.Y),{state:k,path:I,content:x}=ie(),[T,ve]=(0,t.useState)(null),ue=O(T),H=(0,t.useCallback)(()=>{if(!T)return;T.querySelectorAll(".md-sidebar").forEach(N=>{var K,Ce,Oe,Ee;if(s)N.style.top="0px";else{const Xe=document==null?void 0:document.querySelector(".techdocs-reader-page"),je=(K=Xe==null?void 0:Xe.getBoundingClientRect().top)!=null?K:0;let He=(Ce=T.getBoundingClientRect().top)!=null?Ce:0;const Tt=T.querySelector(".md-container > .md-tabs"),rn=(Oe=Tt==null?void 0:Tt.getBoundingClientRect().height)!=null?Oe:0;He<je&&(He=je);const f=Math.max(He,0)+rn;N.style.top=`${f}px`;const n=T.querySelector(".md-container > .md-footer"),l=(Ee=n==null?void 0:n.getBoundingClientRect().top)!=null?Ee:window.innerHeight;N.style.height=`${l-f}px`}N.style.setProperty("opacity","1")})},[T,s]);(0,t.useEffect)(()=>(window.addEventListener("resize",H),window.addEventListener("scroll",H,!0),()=>{window.removeEventListener("resize",H),window.removeEventListener("scroll",H,!0)}),[T,H]);const be=(0,t.useCallback)(()=>{if(!T)return;const C=T.querySelector(".md-footer");C&&(C.style.width=`${T.getBoundingClientRect().width}px`)},[T]);(0,t.useEffect)(()=>(window.addEventListener("resize",be),()=>{window.removeEventListener("resize",be)}),[T,be]),(0,t.useEffect)(()=>{ue||(be(),H())},[k,ue,be,H]);const ae=(0,t.useCallback)((C,N)=>gt(C,[i,nn({techdocsStorageApi:g,entityId:e,path:N}),Mt(),at(),ht(),Yt(),$t(A),c]),[e,A,g,i,c]),$=(0,t.useCallback)(async C=>gt(C,[an(),pt(r),It({baseUrl:window.location.origin,onClick:(N,K)=>{var je,He;const Ce=N.ctrlKey||N.metaKey,Oe=new URL(K),Ee=((je=N.target)==null?void 0:je.innerText)||K,Xe=K.replace(window.location.origin,"");p.captureEvent("click",Ee,{attributes:{to:Xe}}),Oe.hash?Ce?window.open(K,"_blank"):(o(K),(He=C==null?void 0:C.querySelector(`[id="${Oe.hash.slice(1)}"]`))==null||He.scrollIntoView()):Ce?window.open(K,"_blank"):o(K)}}),Ut({onLoading:()=>{},onLoaded:()=>{var N;(N=C.querySelector(".md-nav__title"))==null||N.removeAttribute("for")}}),Ut({onLoading:()=>{Array.from(C.querySelectorAll(".md-sidebar")).forEach(K=>{K.style.setProperty("opacity","0")})},onLoaded:()=>{}})]),[r,o,p]);return(0,t.useEffect)(()=>{if(!x)return()=>{};let C=!0;return ae(x,I).then(async N=>{if(!(N!=null&&N.innerHTML)||!C)return;window.scroll({top:0});const K=await $(N);ve(K)}),()=>{C=!1}},[x,I,ae,$]),T};var vt=a(41883),Xt=a(11618),st=a(15246);const jt=()=>{const e=(0,Xt.YR)(),{shadowRoot:o}=(0,S.V)(),r=o==null?void 0:o.querySelector('[data-md-component="content"]'),s=o==null?void 0:o.querySelector('div[data-md-component="sidebar"][data-md-type="navigation"], div[data-md-component="navigation"]');let i=s==null?void 0:s.querySelector('[data-techdocs-addons-location="primary sidebar"]');i||(i=document.createElement("div"),i.setAttribute("data-techdocs-addons-location","primary sidebar"),s==null||s.prepend(i));const c=o==null?void 0:o.querySelector('div[data-md-component="sidebar"][data-md-type="toc"], div[data-md-component="toc"]');let p=c==null?void 0:c.querySelector('[data-techdocs-addons-location="secondary sidebar"]');return p||(p=document.createElement("div"),p.setAttribute("data-techdocs-addons-location","secondary sidebar"),c==null||c.prepend(p)),t.createElement(t.Fragment,null,t.createElement(vt.A,{container:i},e.renderComponentsByLocation(st.e.PrimarySidebar)),t.createElement(vt.A,{container:r},e.renderComponentsByLocation(st.e.Content)),t.createElement(vt.A,{container:p},e.renderComponentsByLocation(st.e.SecondarySidebar)))},Et=(0,W.A)({search:{width:"100%","@media (min-width: 76.1875em)":{width:"calc(100% - 34.4rem)",margin:"0 auto"},"@media print":{display:"none"}}}),yt=M(e=>{var ue;const{withSearch:o=!0,onReady:r}=e,s=Et(),{entityMetadata:{value:i,loading:c},entityRef:p,setShadowRoot:g}=(0,S.V)(),A=Kt(p),k=window.location.pathname,I=window.location.hash,x=O(A),[T]=(0,te.$r)([`[id="${I.slice(1)}"]`]);(0,t.useEffect)(()=>{var H;x||(I?T&&T.scrollIntoView():(H=document==null?void 0:document.querySelector("header"))==null||H.scrollIntoView())},[k,I,T,x]);const ve=(0,t.useCallback)(H=>{g(H),r instanceof Function&&r()},[g,r]);return c===!1&&!i?t.createElement(ne.M,{status:"404",statusMessage:"PAGE NOT FOUND"}):A?t.createElement(pe.U,null,t.createElement(U.A,{container:!0},t.createElement(U.A,{xs:12,item:!0},t.createElement(d,null)),o&&t.createElement(U.A,{className:s.search,xs:"auto",item:!0},t.createElement(Ze,{entityId:p,entityTitle:(ue=i==null?void 0:i.metadata)==null?void 0:ue.title})),t.createElement(U.A,{xs:12,item:!0},t.createElement(y,{element:A,onAppend:ve},t.createElement(jt,null))))):t.createElement(pe.U,null,t.createElement(U.A,{container:!0},t.createElement(U.A,{xs:12,item:!0},t.createElement(d,null))))}),De=null},84893:(Ie,_,a)=>{"use strict";a.d(_,{Z:()=>te});var t=a(14041),U=a(58837),W=a(29365),S=a(75173),L=a(71677),ee=a(37757),X=a(77125),J=a(9684),G=a(66839),Te=a(11618),O=a(15246);const y=(0,U.A)(ne=>({root:{gridArea:"pageSubheader",flexDirection:"column",minHeight:"auto",padding:ne.spacing(3,3,0),"@media print":{display:"none"}}})),te=ne=>{const pe=y(),[he,ce]=(0,t.useState)(null),j=(0,t.useCallback)(de=>{ce(de.currentTarget)},[]),B=(0,t.useCallback)(()=>{ce(null)},[]),{entityMetadata:{value:Ae,loading:V}}=(0,G.V)(),se=(0,Te.YR)(),h=se.renderComponentsByLocation(O.e.Subheader),ge=se.renderComponentsByLocation(O.e.Settings);return!h&&!ge||V===!1&&!Ae?null:t.createElement(S.A,{classes:pe,...ne.toolbarProps},t.createElement(X.A,{display:"flex",justifyContent:"flex-end",width:"100%",flexWrap:"wrap"},h,ge?t.createElement(t.Fragment,null,t.createElement(L.Ay,{title:"Settings"},t.createElement(W.A,{"aria-controls":"tech-docs-reader-page-settings","aria-haspopup":"true",onClick:j},t.createElement(J.A,null))),t.createElement(ee.A,{id:"tech-docs-reader-page-settings",getContentAnchorEl:null,anchorEl:he,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!he,onClose:B,keepMounted:!0},t.createElement("div",null,ge))):null))}},41472:(Ie,_,a)=>{"use strict";a.r(_),a.d(_,{TechDocsSearchResultListItem:()=>G});var t=a(14041),U=a(46423),W=a(5951),S=a(58837),L=a(72501),ee=a(75202),X=a(51470);const J=(0,S.A)({flexContainer:{flexWrap:"wrap"},itemText:{width:"100%",marginBottom:"1rem"}}),G=Te=>{const{result:O,highlight:y,lineClamp:te=5,asListItem:ne=!0,asLink:pe=!0,title:he,icon:ce}=Te,j=J(),B=({children:se})=>pe?t.createElement(ee.N_,{noTrack:!0,to:O.location},se):t.createElement(t.Fragment,null,se),Ae=()=>{const se=y!=null&&y.fields.title?t.createElement(X.e,{text:y.fields.title,preTag:y.preTag,postTag:y.postTag}):O.title,h=y!=null&&y.fields.entityTitle?t.createElement(X.e,{text:y.fields.entityTitle,preTag:y.preTag,postTag:y.postTag}):O.entityTitle,ge=y!=null&&y.fields.name?t.createElement(X.e,{text:y.fields.name,preTag:y.preTag,postTag:y.postTag}):O.name;return O?t.createElement(W.A,{className:j.itemText,primaryTypographyProps:{variant:"h6"},primary:t.createElement(B,null,he||t.createElement(t.Fragment,null,se," | ",h!=null?h:ge," docs")),secondary:t.createElement(L.A,{component:"span",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:te,overflow:"hidden"},color:"textSecondary",variant:"body2"},y!=null&&y.fields.text?t.createElement(X.e,{text:y.fields.text,preTag:y.preTag,postTag:y.postTag}):O.text)}):null},V=({children:se})=>ne?t.createElement(t.Fragment,null,ce&&t.createElement(U.A,null,typeof ce=="function"?ce(O):ce),t.createElement("div",{className:j.flexContainer},se)):t.createElement(t.Fragment,null,se);return t.createElement(V,null,t.createElement(Ae,null))}},13660:(Ie,_,a)=>{"use strict";var t,U=a(4293),W=a(78920);t={value:!0},_.A=void 0;var S=W(a(14041)),L=U(a(74044)),ee=(0,L.default)(S.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");_.A=ee},90292:(Ie,_,a)=>{"use strict";var t,U=a(4293),W=a(78920);t={value:!0},_.A=void 0;var S=W(a(14041)),L=U(a(74044)),ee=(0,L.default)(S.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"}),"FeedbackOutlined");_.A=ee},71651:function(Ie){/*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */(function(_,a){Ie.exports=a()})(this,function(){"use strict";const{entries:_,setPrototypeOf:a,isFrozen:t,getPrototypeOf:U,getOwnPropertyDescriptor:W}=Object;let{freeze:S,seal:L,create:ee}=Object,{apply:X,construct:J}=typeof Reflect!="undefined"&&Reflect;S||(S=function(d){return d}),L||(L=function(d){return d}),X||(X=function(d,E,v){return d.apply(E,v)}),J||(J=function(d,E){return new d(...E)});const G=V(Array.prototype.forEach),Te=V(Array.prototype.pop),O=V(Array.prototype.push),y=V(String.prototype.toLowerCase),te=V(String.prototype.toString),ne=V(String.prototype.match),pe=V(String.prototype.replace),he=V(String.prototype.indexOf),ce=V(String.prototype.trim),j=V(Object.prototype.hasOwnProperty),B=V(RegExp.prototype.test),Ae=se(TypeError);function V(m){return function(d){for(var E=arguments.length,v=new Array(E>1?E-1:0),b=1;b<E;b++)v[b-1]=arguments[b];return X(m,d,v)}}function se(m){return function(){for(var d=arguments.length,E=new Array(d),v=0;v<d;v++)E[v]=arguments[v];return J(m,E)}}function h(m,d){let E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:y;a&&a(m,null);let v=d.length;for(;v--;){let b=d[v];if(typeof b=="string"){const D=E(b);D!==b&&(t(d)||(d[v]=D),b=D)}m[b]=!0}return m}function ge(m){for(let d=0;d<m.length;d++)j(m,d)||(m[d]=null);return m}function de(m){const d=ee(null);for(const[E,v]of _(m))j(m,E)&&(Array.isArray(v)?d[E]=ge(v):v&&typeof v=="object"&&v.constructor===Object?d[E]=de(v):d[E]=v);return d}function Ne(m,d){for(;m!==null;){const v=W(m,d);if(v){if(v.get)return V(v.get);if(typeof v.value=="function")return V(v.value)}m=U(m)}function E(){return null}return E}const it=S(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ze=S(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ke=S(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),xe=S(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Qe=S(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),At=S(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Je=S(["#text"]),qe=S(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),et=S(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),lt=S(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Pe=S(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),bt=L(/\{\{[\w\W]*|[\w\W]*\}\}/gm),_e=L(/<%[\w\W]*|[\w\W]*%>/gm),Re=L(/\${[\w\W]*}/gm),tt=L(/^data-[\-\w.\u00B7-\uFFFF]/),ct=L(/^aria-[\-\w]+$/),dt=L(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),St=L(/^(?:\w+script|data):/i),wt=L(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Fe=L(/^html$/i),mt=L(/^[a-z][.\w]*(-[.\w]+)+$/i);var ut=Object.freeze({__proto__:null,MUSTACHE_EXPR:bt,ERB_EXPR:_e,TMPLIT_EXPR:Re,DATA_ATTR:tt,ARIA_ATTR:ct,IS_ALLOWED_URI:dt,IS_SCRIPT_OR_DATA:St,ATTR_WHITESPACE:wt,DOCTYPE_NAME:Fe,CUSTOM_ELEMENT:mt});const Y={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},R=function(){return typeof window=="undefined"?null:window},ie=function(d,E){if(typeof d!="object"||typeof d.createPolicy!="function")return null;let v=null;const b="data-tt-policy-suffix";E&&E.hasAttribute(b)&&(v=E.getAttribute(b));const D="dompurify"+(v?"#"+v:"");try{return d.createPolicy(D,{createHTML(w){return w},createScriptURL(w){return w}})}catch{return console.warn("TrustedTypes policy "+D+" could not be created."),null}};function me(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:R();const d=f=>me(f);if(d.version="3.1.6",d.removed=[],!m||!m.document||m.document.nodeType!==Y.document)return d.isSupported=!1,d;let{document:E}=m;const v=E,b=v.currentScript,{DocumentFragment:D,HTMLTemplateElement:w,Node:Z,Element:Se,NodeFilter:Le,NamedNodeMap:$e=m.NamedNodeMap||m.MozNamedAttrMap,HTMLFormElement:nt,DOMParser:ft,trustedTypes:Ue}=m,Be=Se.prototype,Lt=Ne(Be,"cloneNode"),zt=Ne(Be,"remove"),Ht=Ne(Be,"nextSibling"),We=Ne(Be,"childNodes"),q=Ne(Be,"parentNode");if(typeof w=="function"){const f=E.createElement("template");f.content&&f.content.ownerDocument&&(E=f.content.ownerDocument)}let oe,ot="";const{implementation:Ct,createNodeIterator:Zt,createDocumentFragment:Qt,getElementsByTagName:Jt}=E,{importNode:qt}=v;let we={};d.isSupported=typeof _=="function"&&typeof q=="function"&&Ct&&Ct.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:xt,ERB_EXPR:Rt,TMPLIT_EXPR:Dt,DATA_ATTR:en,ARIA_ATTR:tn,IS_SCRIPT_OR_DATA:nn,ATTR_WHITESPACE:_t,CUSTOM_ELEMENT:on}=ut;let{IS_ALLOWED_URI:Ft}=ut,Q=null;const Ot=h({},[...it,...Ze,...ke,...Qe,...Je]);let F=null;const $t=h({},[...qe,...et,...lt,...Pe]);let z=Object.seal(ee(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),at=null,Mt=null,Wt=!0,It=!0,Gt=!1,Vt=!0,Ge=!1,Nt=!0,ze=!1,kt=!1,Pt=!1,Ve=!1,pt=!1,ht=!1,Yt=!0,Ut=!1;const an="user-content-";let gt=!0,rt=!1,Ye={},Ke=null;const Kt=h({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let vt=null;const Xt=h({},["audio","video","img","source","image","track"]);let st=null;const jt=h({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Et="http://www.w3.org/1998/Math/MathML",yt="http://www.w3.org/2000/svg",De="http://www.w3.org/1999/xhtml";let e=De,o=!1,r=null;const s=h({},[Et,yt,De],te);let i=null;const c=["application/xhtml+xml","text/html"],p="text/html";let g=null,A=null;const k=E.createElement("form"),I=function(n){return n instanceof RegExp||n instanceof Function},x=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(A&&A===n)){if((!n||typeof n!="object")&&(n={}),n=de(n),i=c.indexOf(n.PARSER_MEDIA_TYPE)===-1?p:n.PARSER_MEDIA_TYPE,g=i==="application/xhtml+xml"?te:y,Q=j(n,"ALLOWED_TAGS")?h({},n.ALLOWED_TAGS,g):Ot,F=j(n,"ALLOWED_ATTR")?h({},n.ALLOWED_ATTR,g):$t,r=j(n,"ALLOWED_NAMESPACES")?h({},n.ALLOWED_NAMESPACES,te):s,st=j(n,"ADD_URI_SAFE_ATTR")?h(de(jt),n.ADD_URI_SAFE_ATTR,g):jt,vt=j(n,"ADD_DATA_URI_TAGS")?h(de(Xt),n.ADD_DATA_URI_TAGS,g):Xt,Ke=j(n,"FORBID_CONTENTS")?h({},n.FORBID_CONTENTS,g):Kt,at=j(n,"FORBID_TAGS")?h({},n.FORBID_TAGS,g):{},Mt=j(n,"FORBID_ATTR")?h({},n.FORBID_ATTR,g):{},Ye=j(n,"USE_PROFILES")?n.USE_PROFILES:!1,Wt=n.ALLOW_ARIA_ATTR!==!1,It=n.ALLOW_DATA_ATTR!==!1,Gt=n.ALLOW_UNKNOWN_PROTOCOLS||!1,Vt=n.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ge=n.SAFE_FOR_TEMPLATES||!1,Nt=n.SAFE_FOR_XML!==!1,ze=n.WHOLE_DOCUMENT||!1,Ve=n.RETURN_DOM||!1,pt=n.RETURN_DOM_FRAGMENT||!1,ht=n.RETURN_TRUSTED_TYPE||!1,Pt=n.FORCE_BODY||!1,Yt=n.SANITIZE_DOM!==!1,Ut=n.SANITIZE_NAMED_PROPS||!1,gt=n.KEEP_CONTENT!==!1,rt=n.IN_PLACE||!1,Ft=n.ALLOWED_URI_REGEXP||dt,e=n.NAMESPACE||De,z=n.CUSTOM_ELEMENT_HANDLING||{},n.CUSTOM_ELEMENT_HANDLING&&I(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(z.tagNameCheck=n.CUSTOM_ELEMENT_HANDLING.tagNameCheck),n.CUSTOM_ELEMENT_HANDLING&&I(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(z.attributeNameCheck=n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),n.CUSTOM_ELEMENT_HANDLING&&typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(z.allowCustomizedBuiltInElements=n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ge&&(It=!1),pt&&(Ve=!0),Ye&&(Q=h({},Je),F=[],Ye.html===!0&&(h(Q,it),h(F,qe)),Ye.svg===!0&&(h(Q,Ze),h(F,et),h(F,Pe)),Ye.svgFilters===!0&&(h(Q,ke),h(F,et),h(F,Pe)),Ye.mathMl===!0&&(h(Q,Qe),h(F,lt),h(F,Pe))),n.ADD_TAGS&&(Q===Ot&&(Q=de(Q)),h(Q,n.ADD_TAGS,g)),n.ADD_ATTR&&(F===$t&&(F=de(F)),h(F,n.ADD_ATTR,g)),n.ADD_URI_SAFE_ATTR&&h(st,n.ADD_URI_SAFE_ATTR,g),n.FORBID_CONTENTS&&(Ke===Kt&&(Ke=de(Ke)),h(Ke,n.FORBID_CONTENTS,g)),gt&&(Q["#text"]=!0),ze&&h(Q,["html","head","body"]),Q.table&&(h(Q,["tbody"]),delete at.tbody),n.TRUSTED_TYPES_POLICY){if(typeof n.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ae('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof n.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ae('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');oe=n.TRUSTED_TYPES_POLICY,ot=oe.createHTML("")}else oe===void 0&&(oe=ie(Ue,b)),oe!==null&&typeof ot=="string"&&(ot=oe.createHTML(""));S&&S(n),A=n}},T=h({},["mi","mo","mn","ms","mtext"]),ve=h({},["foreignobject","annotation-xml"]),ue=h({},["title","style","font","a","script"]),H=h({},[...Ze,...ke,...xe]),be=h({},[...Qe,...At]),ae=function(n){let l=q(n);(!l||!l.tagName)&&(l={namespaceURI:e,tagName:"template"});const u=y(n.tagName),P=y(l.tagName);return r[n.namespaceURI]?n.namespaceURI===yt?l.namespaceURI===De?u==="svg":l.namespaceURI===Et?u==="svg"&&(P==="annotation-xml"||T[P]):!!H[u]:n.namespaceURI===Et?l.namespaceURI===De?u==="math":l.namespaceURI===yt?u==="math"&&ve[P]:!!be[u]:n.namespaceURI===De?l.namespaceURI===yt&&!ve[P]||l.namespaceURI===Et&&!T[P]?!1:!be[u]&&(ue[u]||!H[u]):!!(i==="application/xhtml+xml"&&r[n.namespaceURI]):!1},$=function(n){O(d.removed,{element:n});try{q(n).removeChild(n)}catch{zt(n)}},C=function(n,l){try{O(d.removed,{attribute:l.getAttributeNode(n),from:l})}catch{O(d.removed,{attribute:null,from:l})}if(l.removeAttribute(n),n==="is"&&!F[n])if(Ve||pt)try{$(l)}catch{}else try{l.setAttribute(n,"")}catch{}},N=function(n){let l=null,u=null;if(Pt)n="<remove></remove>"+n;else{const re=ne(n,/^[\r\n\t ]+/);u=re&&re[0]}i==="application/xhtml+xml"&&e===De&&(n='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+n+"</body></html>");const P=oe?oe.createHTML(n):n;if(e===De)try{l=new ft().parseFromString(P,i)}catch{}if(!l||!l.documentElement){l=Ct.createDocument(e,"template",null);try{l.documentElement.innerHTML=o?ot:P}catch{}}const le=l.body||l.documentElement;return n&&u&&le.insertBefore(E.createTextNode(u),le.childNodes[0]||null),e===De?Jt.call(l,ze?"html":"body")[0]:ze?l.documentElement:le},K=function(n){return Zt.call(n.ownerDocument||n,n,Le.SHOW_ELEMENT|Le.SHOW_COMMENT|Le.SHOW_TEXT|Le.SHOW_PROCESSING_INSTRUCTION|Le.SHOW_CDATA_SECTION,null)},Ce=function(n){return n instanceof nt&&(typeof n.nodeName!="string"||typeof n.textContent!="string"||typeof n.removeChild!="function"||!(n.attributes instanceof $e)||typeof n.removeAttribute!="function"||typeof n.setAttribute!="function"||typeof n.namespaceURI!="string"||typeof n.insertBefore!="function"||typeof n.hasChildNodes!="function")},Oe=function(n){return typeof Z=="function"&&n instanceof Z},Ee=function(n,l,u){we[n]&&G(we[n],P=>{P.call(d,l,u,A)})},Xe=function(n){let l=null;if(Ee("beforeSanitizeElements",n,null),Ce(n))return $(n),!0;const u=g(n.nodeName);if(Ee("uponSanitizeElement",n,{tagName:u,allowedTags:Q}),n.hasChildNodes()&&!Oe(n.firstElementChild)&&B(/<[/\w]/g,n.innerHTML)&&B(/<[/\w]/g,n.textContent)||n.nodeType===Y.progressingInstruction||Nt&&n.nodeType===Y.comment&&B(/<[/\w]/g,n.data))return $(n),!0;if(!Q[u]||at[u]){if(!at[u]&&He(u)&&(z.tagNameCheck instanceof RegExp&&B(z.tagNameCheck,u)||z.tagNameCheck instanceof Function&&z.tagNameCheck(u)))return!1;if(gt&&!Ke[u]){const P=q(n)||n.parentNode,le=We(n)||n.childNodes;if(le&&P){const re=le.length;for(let ye=re-1;ye>=0;--ye){const Me=Lt(le[ye],!0);Me.__removalCount=(n.__removalCount||0)+1,P.insertBefore(Me,Ht(n))}}}return $(n),!0}return n instanceof Se&&!ae(n)||(u==="noscript"||u==="noembed"||u==="noframes")&&B(/<\/no(script|embed|frames)/i,n.innerHTML)?($(n),!0):(Ge&&n.nodeType===Y.text&&(l=n.textContent,G([xt,Rt,Dt],P=>{l=pe(l,P," ")}),n.textContent!==l&&(O(d.removed,{element:n.cloneNode()}),n.textContent=l)),Ee("afterSanitizeElements",n,null),!1)},je=function(n,l,u){if(Yt&&(l==="id"||l==="name")&&(u in E||u in k))return!1;if(!(It&&!Mt[l]&&B(en,l))){if(!(Wt&&B(tn,l))){if(!F[l]||Mt[l]){if(!(He(n)&&(z.tagNameCheck instanceof RegExp&&B(z.tagNameCheck,n)||z.tagNameCheck instanceof Function&&z.tagNameCheck(n))&&(z.attributeNameCheck instanceof RegExp&&B(z.attributeNameCheck,l)||z.attributeNameCheck instanceof Function&&z.attributeNameCheck(l))||l==="is"&&z.allowCustomizedBuiltInElements&&(z.tagNameCheck instanceof RegExp&&B(z.tagNameCheck,u)||z.tagNameCheck instanceof Function&&z.tagNameCheck(u))))return!1}else if(!st[l]){if(!B(Ft,pe(u,_t,""))){if(!((l==="src"||l==="xlink:href"||l==="href")&&n!=="script"&&he(u,"data:")===0&&vt[n])){if(!(Gt&&!B(nn,pe(u,_t,"")))){if(u)return!1}}}}}}return!0},He=function(n){return n!=="annotation-xml"&&ne(n,on)},Tt=function(n){Ee("beforeSanitizeAttributes",n,null);const{attributes:l}=n;if(!l)return;const u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:F};let P=l.length;for(;P--;){const le=l[P],{name:re,namespaceURI:ye,value:Me}=le,Bt=g(re);let fe=re==="value"?Me:ce(Me);if(u.attrName=Bt,u.attrValue=fe,u.keepAttr=!0,u.forceKeepAttr=void 0,Ee("uponSanitizeAttribute",n,u),fe=u.attrValue,Nt&&B(/((--!?|])>)|<\/(style|title)/i,fe)){C(re,n);continue}if(u.forceKeepAttr||(C(re,n),!u.keepAttr))continue;if(!Vt&&B(/\/>/i,fe)){C(re,n);continue}Ge&&G([xt,Rt,Dt],ln=>{fe=pe(fe,ln," ")});const sn=g(n.nodeName);if(je(sn,Bt,fe)){if(Ut&&(Bt==="id"||Bt==="name")&&(C(re,n),fe=an+fe),oe&&typeof Ue=="object"&&typeof Ue.getAttributeType=="function"&&!ye)switch(Ue.getAttributeType(sn,Bt)){case"TrustedHTML":{fe=oe.createHTML(fe);break}case"TrustedScriptURL":{fe=oe.createScriptURL(fe);break}}try{ye?n.setAttributeNS(ye,re,fe):n.setAttribute(re,fe),Ce(n)?$(n):Te(d.removed)}catch{}}}Ee("afterSanitizeAttributes",n,null)},rn=function f(n){let l=null;const u=K(n);for(Ee("beforeSanitizeShadowDOM",n,null);l=u.nextNode();)Ee("uponSanitizeShadowNode",l,null),!Xe(l)&&(l.content instanceof D&&f(l.content),Tt(l));Ee("afterSanitizeShadowDOM",n,null)};return d.sanitize=function(f){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,u=null,P=null,le=null;if(o=!f,o&&(f="<!-->"),typeof f!="string"&&!Oe(f))if(typeof f.toString=="function"){if(f=f.toString(),typeof f!="string")throw Ae("dirty is not a string, aborting")}else throw Ae("toString is not a function");if(!d.isSupported)return f;if(kt||x(n),d.removed=[],typeof f=="string"&&(rt=!1),rt){if(f.nodeName){const Me=g(f.nodeName);if(!Q[Me]||at[Me])throw Ae("root node is forbidden and cannot be sanitized in-place")}}else if(f instanceof Z)l=N("<!---->"),u=l.ownerDocument.importNode(f,!0),u.nodeType===Y.element&&u.nodeName==="BODY"||u.nodeName==="HTML"?l=u:l.appendChild(u);else{if(!Ve&&!Ge&&!ze&&f.indexOf("<")===-1)return oe&&ht?oe.createHTML(f):f;if(l=N(f),!l)return Ve?null:ht?ot:""}l&&Pt&&$(l.firstChild);const re=K(rt?f:l);for(;P=re.nextNode();)Xe(P)||(P.content instanceof D&&rn(P.content),Tt(P));if(rt)return f;if(Ve){if(pt)for(le=Qt.call(l.ownerDocument);l.firstChild;)le.appendChild(l.firstChild);else le=l;return(F.shadowroot||F.shadowrootmode)&&(le=qt.call(v,le,!0)),le}let ye=ze?l.outerHTML:l.innerHTML;return ze&&Q["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&B(Fe,l.ownerDocument.doctype.name)&&(ye="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+ye),Ge&&G([xt,Rt,Dt],Me=>{ye=pe(ye,Me," ")}),oe&&ht?oe.createHTML(ye):ye},d.setConfig=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};x(f),kt=!0},d.clearConfig=function(){A=null,kt=!1},d.isValidAttribute=function(f,n,l){A||x({});const u=g(f),P=g(n);return je(u,P,l)},d.addHook=function(f,n){typeof n=="function"&&(we[f]=we[f]||[],O(we[f],n))},d.removeHook=function(f){if(we[f])return Te(we[f])},d.removeHooks=function(f){we[f]&&(we[f]=[])},d.removeAllHooks=function(){we={}},d}var M=me();return M})},91042:(Ie,_,a)=>{"use strict";a.d(_,{Y:()=>W});var t=a(14041),U=a(16261);function W(S,L){const[ee,X]=(0,t.useState)({status:"not-executed",error:void 0,result:L}),J=(0,t.useRef)(),G=(0,t.useRef)(),Te=(0,U.J)({execute(...O){G.current=O;const y=S(...O);return J.current=y,X(te=>({...te,status:"loading"})),y.then(te=>{y===J.current&&X(ne=>({...ne,status:"success",error:void 0,result:te}))},te=>{y===J.current&&X(ne=>({...ne,status:"error",error:te}))}),y},reset(){X({status:"not-executed",error:void 0,result:L}),J.current=void 0,G.current=void 0}});return[ee,(0,t.useMemo)(()=>({reset(){Te.current.reset()},execute:(...O)=>Te.current.execute(...O)}),[]),{promise:J.current,lastArgs:G.current}]}}}]);})();

//# sourceMappingURL=5403.9e1aaba4.chunk.js.map