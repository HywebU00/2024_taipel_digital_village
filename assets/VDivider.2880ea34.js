import{m as c,F as u,u as m}from"./index.d0406665.js";import{p as h,y as g,z as y,A as f,C,e as _,a as r,v as s}from"./index.6afed4e9.js";const V=h({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...c(),...g()},"VDivider"),S=y()({name:"VDivider",props:V(),setup(e,o){let{attrs:i,slots:a}=o;const{themeClasses:n}=f(e),{textColorClasses:l,textColorStyles:v}=u(C(e,"color")),d=_(()=>{const t={};return e.length&&(t[e.vertical?"height":"width"]=s(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=s(e.thickness)),t});return m(()=>{const t=r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,l.value,e.class],style:[d.value,v.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!i.role||i.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${i.role||"separator"}`},null);return a.default?r("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[t,r("div",{class:"v-divider__content"},[a.default()]),t]):t}),{}}});export{S as V};