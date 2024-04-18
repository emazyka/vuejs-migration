import{d as _,a0 as d,a1 as p,h as m,g as u,W as h,o as a,b as n,e as t,Z as s,a as l,F as v,S as f,A as g,E as x,a2 as y,j as b,k,f as N,_ as w}from"./index-CAegZazB.js";import{N as P}from"./NoteDisplay-D8gPE_zt.js";const S={class:"m-4"},V={class:"mb-10"},j={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},A=_({__name:"PresenterPrint",setup(C){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(a(),n("div",{id:"page-root",style:g(l(x))},[t("div",S,[t("div",V,[t("h1",j,s(l(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(a(!0),n(v,null,f(i.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",D,s(e==null?void 0:e.no)+"/"+s(l(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),H])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),M=w(A,[["__file","/home/runner/work/vuejs-migration/vuejs-migration/node_modules/.pnpm/@slidev+client@0.48.0-beta.5_postcss@8.4.35_typescript@5.3.3_vite@5.1.4/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{M as default};
