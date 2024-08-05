"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4315],{92303:(K,d,t)=>{t.d(d,{d:()=>C});var e=t(14041),u=t(16654),g=t(82326);function C(h){const{themeId:v,children:P,...y}=h;return e.createElement(g.Y,{themeId:v},e.createElement(u.Y,{...y}),P)}},40941:(K,d,t)=>{t.d(d,{t:()=>gt});var e=t(78560),u=t(77125),g=t(69076),C=t(86901),h=t(16249),v=t(72501),P=t(71677),y=t(58837),T=t(7031),l=t(44148),R=t(41260),S=t(6924),L=t(61783),n=t(14041),j=t(18453),Y=t(49724),G=t(16261);function k(a){const o=(0,G.J)(a);(0,n.useEffect)(()=>()=>{o.current()},[])}function J(a,o,s,i=0){const r=(0,n.useRef)(),c=(0,n.useRef)(),E=(0,n.useRef)(a),m=(0,n.useRef)(),p=()=>{r.current&&(clearTimeout(r.current),r.current=void 0),c.current&&(clearTimeout(c.current),c.current=void 0)};return k(p),(0,n.useEffect)(()=>{E.current=a},o),(0,n.useMemo)(()=>{const B=()=>{if(p(),!m.current)return;const I=m.current;m.current=void 0,E.current.apply(I.this,I.args)},M=function(...I){r.current&&clearTimeout(r.current),m.current={args:I,this:this},r.current=setTimeout(B,s),i>0&&!c.current&&(c.current=setTimeout(B,i))};return Object.defineProperties(M,{length:{value:a.length},name:{value:`${a.name||"anonymous"}__debounced__${s}`}}),M},[s,i,...o])}function Q(a,o,s,i=0){(0,n.useEffect)(J(a,o,s,i),o)}var F=t(48108),q=t(47966),N=t(53318),$=t(18139),H=t(87290),A=t(30043),U=t(46123),D=t.n(U);function V({enabled:a}){const o=(0,$.gf)(A.v),[s]=(0,n.useState)(async()=>{if(!a)return[];const i="relations.ownedBy",c=(await o.getEntityFacets({facets:[i]})).facets[i].map(E=>E.value);return o.getEntitiesByRefs({entityRefs:c}).then(E=>E.items.filter(m=>m!==void 0).map(m=>m).sort((m,p)=>(m.metadata.namespace||"").localeCompare(p.metadata.namespace||"","en-US")||(D()(m,"spec.profile.displayName")||m.metadata.title||m.metadata.name).localeCompare(D()(p,"spec.profile.displayName")||p.metadata.title||p.metadata.name,"en-US")||m.kind.localeCompare(p.kind,"en-US"))).then(E=>E).catch(()=>[])});return(0,H.A)(async(i,r)=>{var I;const c=await s;if(!c)return{items:[]};const E=(I=r==null?void 0:r.limit)!=null?I:20,{text:m,start:p}=z(i),B=c.filter(W=>Z(m,W)),M=p+E;return{items:B.slice(0,M),...x({entities:B,limit:M,payload:{text:m,start:M}})}},[s],{loading:!0,value:{items:[]}})}function z(a){return X(a)&&a.cursor?JSON.parse(atob(a.cursor)):{text:a.text||"",start:0}}function X(a){return!!a.cursor}function x({entities:a,limit:o,payload:s}){return a.length>o?{cursor:btoa(JSON.stringify(s))}:{}}function Z(a,o){var i,r,c;const s=a.trim();return o.kind.includes(s)||((i=o.metadata.namespace)==null?void 0:i.includes(s))||o.metadata.name.includes(s)||((r=o.metadata.title)==null?void 0:r.includes(s))||((c=D()(o,"spec.profile.displayName"))==null?void 0:c.includes(s))}function b(){const a=(0,$.gf)(A.v);return(0,H.A)(async(o,s)=>{var m;const i=o,r=o,c=(m=s==null?void 0:s.limit)!=null?m:20;if(r.cursor){const p=await a.queryEntities({cursor:r.cursor,limit:c});return{cursor:p.pageInfo.nextCursor,items:[...r.items,...p.items]}}const E=await a.queryEntities({fullTextFilter:{term:i.text||"",fields:["metadata.name","kind","spec.profile.displayname","metadata.title"]},filter:{kind:["User","Group"]},orderFields:[{field:"metadata.name",order:"asc"}],limit:c});return{cursor:E.pageInfo.nextCursor,items:E.items}},[],{loading:!0})}var _=t(76842);function et({mode:a,initialSelectedOwnersRefs:o}){const s=a==="owners-only",i=b(),r=V({enabled:s}),[c,E]=s?r:i;return[c,E,nt({enabled:!s,initialSelectedOwnersRefs:o})]}function nt({enabled:a,initialSelectedOwnersRefs:o}){const s=(0,n.useRef)({}),i=(0,$.gf)(A.v),[,r]=(0,H.A)(async()=>{(await i.getEntitiesByRefs({entityRefs:o})).items.forEach(E=>{E&&(s.current[(0,e.U2)(E)]=E)})},[]);return(0,_.u)(()=>{a&&o.length>0&&r()}),{getEntity:c=>s.current[c],setEntity:c=>{s.current[(0,e.U2)(c)]=c}}}var at=t(46509),ot=t(96403),tt=t(80084),mt=t(10265);const lt=(0,y.A)({root:{},label:{},input:{},fullWidth:{width:"100%"},boxLabel:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"}},{name:"CatalogReactEntityOwnerPicker"}),dt=(0,T.A)(a=>({label:{width:"100%"},root:{width:"90%"}}),{name:"FixedWidthFormControlLabel"})(C.A),Et=n.createElement(R.A,{fontSize:"small"}),ft=n.createElement(l.A,{fontSize:"small"});function vt(a){const o=lt(),s=a.entity.kind.toLocaleLowerCase("en-US")==="group",{primaryTitle:i}=(0,at.f)(a.entity);return n.createElement(u.A,{className:o.fullWidth},n.createElement(dt,{className:o.fullWidth,control:n.createElement(g.A,{icon:Et,checkedIcon:ft,checked:a.isSelected}),onClick:r=>r.preventDefault(),label:n.createElement(P.Ay,{title:i},n.createElement(u.A,{display:"flex",alignItems:"center"},s?n.createElement(q.A,{fontSize:"small"}):n.createElement(F.A,{fontSize:"small"}),"\xA0",n.createElement(u.A,{className:o.boxLabel},n.createElement(v.A,{noWrap:!0},i))))}))}const gt=a=>{var ct,it,ut;const o=lt(),{mode:s="owners-only"}=a||{},{updateFilters:i,filters:r,queryParameters:{owners:c}}=(0,j.nK)(),[E,m]=(0,n.useState)(""),{t:p}=(0,mt.i)(tt.j),B=(0,n.useMemo)(()=>[c].flat().filter(Boolean),[c]),[M,I]=(0,n.useState)(B.length?B:(it=(ct=r.owners)==null?void 0:ct.values)!=null?it:[]),[{value:W,loading:Ct},st,rt]=et({mode:s,initialSelectedOwnersRefs:M});Q(()=>st({text:E}),[E,st],250);const ht=(W==null?void 0:W.items)||[];return(0,n.useEffect)(()=>{if(B.length){const f=new Y.N9(B);I(f.values)}},[B]),(0,n.useEffect)(()=>{i({owners:M.length?new Y.N9(M):void 0})},[M,i]),["user","group"].includes(((ut=r.kind)==null?void 0:ut.value.toLocaleLowerCase("en-US"))||"")?null:n.createElement(u.A,{className:o.root,pb:1,pt:1},n.createElement(v.A,{className:o.label,variant:"button",component:"label"},p("entityOwnerPicker.title"),n.createElement(L.Ay,{PopperComponent:f=>n.createElement("div",{...f},f.children),multiple:!0,disableCloseOnSelect:!0,loading:Ct,options:ht,value:M,getOptionSelected:(f,O)=>typeof O=="string"?(0,e.U2)(f)===O:f===O,getOptionLabel:f=>{const O=typeof f=="string"?rt.getEntity(f)||(0,e.KU)(f,{defaultKind:"group",defaultNamespace:"default"}):f;return(0,N.Z)(O,(0,N.S)(O))},onChange:(f,O)=>{m(""),I(O.map(w=>{const yt=typeof w=="string"?w:(0,e.U2)(w);return typeof w!="string"&&rt.setEntity(w),yt}))},filterOptions:f=>f,renderOption:(f,{selected:O})=>n.createElement(vt,{entity:f,isSelected:O}),size:"small",popupIcon:n.createElement(S.A,{"data-testid":"owner-picker-expand"}),renderInput:f=>n.createElement(h.A,{...f,className:o.input,onChange:O=>{m(O.currentTarget.value)},variant:"outlined"}),ListboxProps:{onScroll:f=>{const O=f.currentTarget;Math.abs(O.scrollHeight-O.clientHeight-O.scrollTop)<1&&(W!=null&&W.cursor)&&st({items:W.items,cursor:W.cursor})},"data-testid":"owner-picker-listbox"}})))}},4348:(K,d,t)=>{t.d(d,{V:()=>e});function e(u,g){return g.getOptionalBoolean("techdocs.legacyUseCaseSensitiveTripletPaths")?u:u.toLocaleLowerCase("en-US")}},67633:(K,d,t)=>{t.d(d,{o:()=>G});var e=t(14041),u=t(36338),g=t(72814),C=t(18139),h=t(54195),v=t(97214),P=t(699),y=t(53318),T=t(17749),l=t(29021),R=t(65995),S=t(87318),L=t(143),n=t(48751),j=t(4348);const Y=[n.B.createTitleColumn({hidden:!0}),n.B.createNameColumn(),n.B.createOwnerColumn(),n.B.createKindColumn(),n.B.createTypeColumn()],G=k=>{const{entities:J,title:Q,loading:F,columns:q,actions:N,options:$}=k,[,H]=(0,u.A)(),A=(0,g.S)(T.Oc),U=(0,C.gf)(h.U);if(!J)return null;const D=J.map(x=>{var b;const Z=(0,P.t)(x,v.vv);return{entity:x,resolved:{docsUrl:A({namespace:(0,j.V)((b=x.metadata.namespace)!=null?b:"default",U),kind:(0,j.V)(x.kind,U),name:(0,j.V)(x.metadata.name,U)}),ownedByRelations:Z,ownedByRelationsTitle:Z.map(_=>(0,y.S)(_,{defaultKind:"group"})).join(", ")}}}),V=[L.f.createCopyDocsUrlAction(H)],z=20,X=D&&D.length>z;return e.createElement(e.Fragment,null,F||D&&D.length>0?e.createElement(l.X,{isLoading:F,options:{paging:X,pageSize:z,search:!0,actionsColumnIndex:-1,...$},data:D,columns:q||Y,actions:N||V,title:Q?`${Q} (${D.length})`:`All (${D.length})`}):e.createElement(R.p,{missing:"data",title:"No documents to show",description:"Create your own document. Check out our Getting Started Information",action:e.createElement(S.z,{color:"primary",to:"https://backstage.io/docs/features/techdocs/getting-started",variant:"contained"},"DOCS")}))};G.columns=n.B,G.actions=L.f},143:(K,d,t)=>{t.d(d,{f:()=>P});var e=t(14041),u=t(55290),g=t(7031),C=t(80109),h=t(15303);const v=(0,g.A)({root:{color:"#f3ba37"}})(C.A),P={createCopyDocsUrlAction(y){return T=>({icon:()=>e.createElement(u.A,{fontSize:"small"}),tooltip:"Click to copy documentation link to clipboard",onClick:()=>y(`${window.location.origin}${T.resolved.docsUrl}`)})},createStarEntityAction(y,T){return l=>{const R=l.entity,S=y(R);return{cellStyle:{paddingLeft:"1em"},icon:()=>S?e.createElement(v,null):e.createElement(h.A,null),tooltip:S?"Remove from favorites":"Add to favorites",onClick:()=>T(R)}}}}},48751:(K,d,t)=>{t.d(d,{B:()=>T});var e=t(14041),u=t(77125),g=t(58837);const C=(0,g.A)(l=>({value:{marginBottom:l.spacing(.75)},subvalue:{color:l.palette.textSubtle,fontWeight:"normal"}}),{name:"BackstageSubvalueCell"});function h(l){const{value:R,subvalue:S}=l,L=C();return e.createElement(e.Fragment,null,e.createElement(u.A,{className:L.value},R),e.createElement(u.A,{className:L.subvalue},S))}var v=t(75202),P=t(14158);function y(l){return l.metadata.title||l.metadata.name}const T={createTitleColumn(l){return{...T.createNameColumn(),field:"entity.metadata.title",hidden:l==null?void 0:l.hidden}},createNameColumn(){return{title:"Document",field:"entity.metadata.name",highlight:!0,searchable:!0,defaultSort:"asc",customSort:(l,R)=>{const S=y(l.entity).toLocaleLowerCase(),L=y(R.entity).toLocaleLowerCase();return S.localeCompare(L)},render:l=>e.createElement(h,{value:e.createElement(v.N_,{to:l.resolved.docsUrl},y(l.entity)),subvalue:l.entity.metadata.description})}},createOwnerColumn(){return{title:"Owner",field:"resolved.ownedByRelationsTitle",render:({resolved:l})=>e.createElement(P.i,{entityRefs:l.ownedByRelations,defaultKind:"group"})}},createKindColumn(){return{title:"Kind",field:"entity.kind"}},createTypeColumn(){return{title:"Type",field:"entity.spec.type"}}}},4315:(K,d,t)=>{t.r(d),t.d(d,{TechDocsIndexPage:()=>H});var e=t(14041),u=t(18690),g=t(16454),C=t(17138),h=t(56420),v=t(18453),P=t(77509),y=t(30117),T=t(40941),l=t(56829),R=t(88461),S=t(24259);class L{getCatalogFilters(){return{"metadata.annotations.backstage.io/techdocs-ref":S.c}}}const n=()=>{const{updateFilters:A}=(0,v.nK)();return(0,e.useEffect)(()=>{A({techdocs:new L})},[A]),null};var j=t(36338),Y=t(45250),G=t(99338),k=t(62112),J=t(44861),Q=t(67633),F=t(143),q=t(48751);const N=A=>{var ot,tt;const{columns:U,actions:D,options:V}=A,{loading:z,error:X,entities:x,filters:Z}=(0,v.nK)(),{isStarredEntity:b,toggleStarredEntity:_}=(0,J.I)(),[,et]=(0,j.A)(),nt=(0,Y.capitalize)((tt=(ot=Z.user)==null?void 0:ot.value)!=null?tt:"all"),at=[F.f.createCopyDocsUrlAction(et),F.f.createStarEntityAction(b,_)];return X?e.createElement(G.B,{severity:"error",title:"Could not load available documentation."},e.createElement(k.z,{language:"text",text:X.toString()})):e.createElement(Q.o,{title:nt,entities:x,loading:z,actions:D||at,columns:U,options:V})};N.columns=q.B,N.actions=F.f;const $=A=>{const{initialFilter:U="owned",columns:D,actions:V,ownerPickerMode:z}=A;return e.createElement(R.S,null,e.createElement(g.U,null,e.createElement(C.d,{title:""},e.createElement(h.Y,null,"Discover documentation in your ecosystem.")),e.createElement(v.B9,null,e.createElement(P.GI,null,e.createElement(P.GI.Filters,null,e.createElement(n,null),e.createElement(y.y,{initialFilter:U}),e.createElement(T.t,{mode:z}),e.createElement(l.m,null)),e.createElement(P.GI.Content,null,e.createElement(N,{actions:V,columns:D}))))))},H=A=>(0,u.P1)()||e.createElement($,{...A})},88461:(K,d,t)=>{t.d(d,{S:()=>h});var e=t(14041),u=t(92303),g=t(18139),C=t(54195);const h=v=>{var l;const{children:P}=v,T=`Documentation available in ${(l=(0,g.gf)(C.U).getOptionalString("organization.name"))!=null?l:"Backstage"}`;return e.createElement(u.d,{title:"Documentation",subtitle:T,themeId:"documentation"},P)}},47966:(K,d,t)=>{var e,u=t(4293),g=t(78920);e={value:!0},d.A=void 0;var C=g(t(14041)),h=u(t(74044)),v=(0,h.default)(C.createElement("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"Group");d.A=v},55290:(K,d,t)=>{var e,u=t(4293),g=t(78920);e={value:!0},d.A=void 0;var C=g(t(14041)),h=u(t(74044)),v=(0,h.default)(C.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");d.A=v}}]);})();

//# sourceMappingURL=4315.c5fad179.chunk.js.map