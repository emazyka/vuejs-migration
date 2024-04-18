import{d as g,u as P,o as l,c as r,a as e,b as y,e as o,r as M,n as k,f as n,K as N,_ as w,g as E,h as _,w as x,i as p,j as z,s as f,k as u,l as h,m as b,p as V,F as I,q as B,t as $,v as O,x as S,y as R,z as j,A as D,B as A,C as H,D as T,E as U,G,H as L,I as F,J as K}from"./index-CsvSodbV.js";import{S as W,G as q,r as J,a as X,b as Y,N as Q}from"./SlidesShow-DpmggR4a.js";import{P as Z}from"./PrintStyle-DRgl-1n3.js";import"./bottom-LtgjkHPy.js";import"./DrawingPreview-mvtFUGd6.js";const ee="/vuejs-migration/assets/logo-BYkHSa_O.png",se={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},te=g({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:a}){const i=c,s=P(i,"modelValue",a);function t(){s.value=!1}return(d,v)=>(l(),r(N,null,[e(s)?(l(),y("div",se,[o("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:v[0]||(v[0]=C=>t())}),o("div",{class:k(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[M(d.$slots,"default")],2)])):n("v-if",!0)],1024))}}),oe=w(te,[["__file","/home/runner/work/vuejs-migration/vuejs-migration/node_modules/.pnpm/@slidev+client@0.48.0-beta.5_postcss@8.4.35_typescript@5.3.3_vite@5.1.4/node_modules/@slidev/client/internals/Modal.vue"]]),le={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ae=["innerHTML"],ie=o("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[o("div",{class:"flex gap-1 children:my-auto"},[o("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),o("img",{class:"w-5 h-5",src:ee,alt:"Slidev logo"}),o("div",{style:{color:"#2082A6"}},[o("b",null,"Sli"),z("dev ")])])],-1),ne=g({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:a}){const s=P(c,"modelValue",a),t=E(()=>typeof _.info=="string");return(d,v)=>(l(),r(oe,{modelValue:e(s),"onUpdate:modelValue":v[0]||(v[0]=C=>p(s)?s.value=C:null),class:"px-6 py-4"},{default:x(()=>[o("div",le,[t.value?(l(),y("div",{key:0,class:"mb-4",innerHTML:e(_).info},null,8,ae)):n("v-if",!0),ie])]),_:1},8,["modelValue"]))}}),re=w(ne,[["__file","/home/runner/work/vuejs-migration/vuejs-migration/node_modules/.pnpm/@slidev+client@0.48.0-beta.5_postcss@8.4.35_typescript@5.3.3_vite@5.1.4/node_modules/@slidev/client/internals/InfoDialog.vue"]]),de=g({__name:"Controls",setup(c){const a=f(),i=f();return(m,s)=>(l(),y(I,null,[u(W,{modelValue:e(h),"onUpdate:modelValue":s[0]||(s[0]=t=>p(h)?h.value=t:null)},null,8,["modelValue"]),u(q),a.value?(l(),r(e(a),{key:0})):n("v-if",!0),i.value?(l(),r(e(i),{key:1,modelValue:e(b),"onUpdate:modelValue":s[1]||(s[1]=t=>p(b)?b.value=t:null)},null,8,["modelValue"])):n("v-if",!0),e(_).info?(l(),r(re,{key:2,modelValue:e(V),"onUpdate:modelValue":s[2]||(s[2]=t=>p(V)?V.value=t:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),ue=w(de,[["__file","/home/runner/work/vuejs-migration/vuejs-migration/node_modules/.pnpm/@slidev+client@0.48.0-beta.5_postcss@8.4.35_typescript@5.3.3_vite@5.1.4/node_modules/@slidev/client/internals/Controls.vue"]]),ce=g({__name:"Play",setup(c){J();const a=B();function i(t){var d;S.value||((d=t.target)==null?void 0:d.id)==="slide-container"&&(t.screenX/window.innerWidth>.6?G():L())}$(a);const m=E(()=>O.value||S.value);f();const s=f();return R(()=>import("./DrawingControls-BmdyXixr.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(t=>s.value=t.default),(t,d)=>(l(),y(I,null,[e(j)?(l(),r(Z,{key:0})):n("v-if",!0),o("div",{id:"page-root",ref_key:"root",ref:a,class:k(["grid",e(T)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"]),style:D(e(U))},[u(X,{class:"w-full h-full",style:D({background:"var(--slidev-slide-container-background, black)"}),width:e(j)?e(A).width.value:void 0,scale:e(H),"is-main":!0,onPointerdown:i},{default:x(()=>[u(Y,{"render-context":"slide"})]),controls:x(()=>[o("div",{class:k(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[m.value?"!opacity-100 right-0":"opacity-0 p-2",e(F)?"pointer-events-none":""]])},[u(Q,{class:"m-auto",persist:m.value},null,8,["persist"])],2),!e(_).drawings.presenterOnly&&!e(K)&&s.value?(l(),r(e(s),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],6),u(ue)],64))}}),ge=w(ce,[["__file","/home/runner/work/vuejs-migration/vuejs-migration/node_modules/.pnpm/@slidev+client@0.48.0-beta.5_postcss@8.4.35_typescript@5.3.3_vite@5.1.4/node_modules/@slidev/client/internals/Play.vue"]]);export{ge as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DrawingControls-BmdyXixr.js","assets/index-CsvSodbV.js","assets/index-Bgz3JK1r.css","assets/SlidesShow-DpmggR4a.js","assets/bottom-LtgjkHPy.js","assets/DrawingPreview-mvtFUGd6.js","assets/SlidesShow-CMatHyxg.css","assets/DrawingControls-BO6lw4N5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}