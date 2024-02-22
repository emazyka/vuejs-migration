import{d,a0 as _,a1 as u,h as m,g as h,W as p,o as s,b as n,e as t,Z as a,a as l,F as v,S as f,A as g,E as x,a2 as y,j as b,k,f as N,_ as w}from"./index-CHf0zZzQ.js";import{N as P}from"./NoteDisplay-CRqE53M-.js";const S={class:"m-4"},V={class:"mb-10"},j={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},A=d({__name:"PresenterPrint",setup(C){_(`
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
`),u({title:`Notes - ${m.title}`});const i=h(()=>p.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(s(),n("div",{id:"page-root",style:g(l(x))},[t("div",S,[t("div",V,[t("h1",j,a(l(m).title),1),t("div",L,a(new Date().toLocaleString()),1)]),(s(!0),n(v,null,f(i.value,(e,c)=>(s(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",D,a(e==null?void 0:e.no)+"/"+a(l(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),H])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(s(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),M=w(A,[["__file","/home/runner/work/vuejs-migration-devoxx/vuejs-migration-devoxx/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{M as default};
