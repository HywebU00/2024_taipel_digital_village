import{p as c,V as w,a as f,b as h,_ as V,c as v,d as g}from"./VNavigationDrawer.00e74a7f.js";import{_,r as k,o as W,c as C,w as t,a as e,b as L,d as n,m as r,n as z}from"./index.10adb55c.js";import{_ as B}from"./logo.d5c788f9.js";import{_ as $}from"./logo_text.c7927472.js";import{V as l}from"./index.6e332387.js";import{V as b,a as I}from"./VCard.703ef6a6.js";import{V as A,a as d,b as p}from"./VList.3da3aa09.js";import{V as N}from"./VBtn.7c7a08f9.js";import"./index.62354e07.js";import"./ssrBoot.85575dcb.js";import"./delay.e7ad9792.js";import"./scopeId.cdc1018a.js";import"./VDivider.8fac667c.js";const S={data:()=>({tab:null,drawer:!0,rail:!1,value:0,windowWidth:"",railWidth:"1",opened:["Home2"],overlay:!1,isSmallScreen:window.innerWidth<768}),components:{pageView:c},methods:{handleResize(){this.windowWidth=window.innerWidth,this.isSmallScreen=window.innerWidth<991},menuTarget(a){this.opened=a.slice(-1)},pushLink(a){this.$router.push({path:a})}},mounted(){this.windowWidth=window.innerWidth,this.handleResize(),window.addEventListener("resize",this.handleResize)}},y={class:"logoImg d-flex align-center"},H={class:"userInfo"},R=n("ul",{class:""},[n("li",null,"Elle Wang"),n("li",null,"\u4F01\u5283\u8655")],-1);function T(a,i,U,D,E,s){const m=k("pageView");return W(),C(w,{theme:"front"},{default:t(()=>[e(b,{class:"header"},{default:t(()=>[e(f,null,{default:t(()=>[e(h,{icon:"mdi-menu",class:"rounded-0 h-100 ml-0 menuBtn",onClick:i[0]||(i[0]=L(o=>a.rail=!a.rail,["stop"]))}),n("div",y,[e(l,{class:"logo",src:B,alt:""}),e(l,{"aspect-ratio":"1/1",class:"",cover:"",src:$})])]),_:1})]),_:1}),e(v,{modelValue:a.drawer,"onUpdate:modelValue":i[3]||(i[3]=o=>a.drawer=o),class:z(["navDrawer",{hidden:a.rail}]),rail:a.rail,permanent:"","rail-width":a.railWidth,width:240,onClick:i[4]||(i[4]=o=>a.rail=!1)},{default:t(()=>[e(A,{density:"compact",nav:"",class:"text-navText",opened:a.opened,"onUpdate:opened":s.menuTarget},{default:t(()=>[e(d,{value:"Home1"},{activator:t(({props:o})=>[e(p,r({"prepend-icon":"mdi-checkbox-multiple-marked-outline"},o,{"append-icon":"",title:"\u7C3D\u6536\u4F5C\u696D",onClick:i[1]||(i[1]=u=>s.pushLink("/front/card"))}),null,16)]),_:1}),e(d,{value:"Home2"},{activator:t(({props:o})=>[e(p,r({"prepend-icon":"mdi-application-edit-outline"},o,{"append-icon":"",title:"\u6D3B\u52D5\u7BA1\u7406",onClick:i[2]||(i[2]=u=>s.pushLink("/front"))}),null,16)]),_:1})]),_:1},8,["opened","onUpdate:opened"]),n("div",H,[e(I,{image:V,size:"35"}),R,e(N,{variant:"text",size:"small",icon:"mdi-logout"})])]),_:1},8,["modelValue","class","rail","rail-width"]),e(g,null,{default:t(()=>[n("div",null,[e(m)])]),_:1})]),_:1})}const Z=_(S,[["render",T]]);export{Z as default};
