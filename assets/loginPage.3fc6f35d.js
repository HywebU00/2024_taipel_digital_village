import{_ as p}from"./logo.4d6bcc35.js";import{_ as u}from"./logo_text.c7927472.js";import{_ as f,m as l,av as r,N as i,w as e,L as a,ax as n}from"./index.b0e7a6e4.js";import{V as v}from"./VSheet.5e7dfb6d.js";import{V as d,v as h}from"./index.09c841da.js";import{c as _,b as c}from"./VForm.51e113e7.js";import{V}from"./VCheckbox.5ec8d29b.js";import{V as m}from"./VBtn.14e300c5.js";import"./index.3f3984ba.js";import"./VInput.4a4a903f.js";import"./forwardRefs.890e72a9.js";import"./VCheckboxBtn.279d2f5b.js";const b={data:()=>({visible:!1,checkbox:!1}),methods:{},mounted(){}},k={class:"h-screen w-100 d-flex justify-center loginPage"},y={class:"loginCard"},g={class:"logo"},w={class:"text-end"},x={key:0},C={key:1},$={class:"d-flex align-center list"};function B(o,s,N,I,P,F){return l(),r("div",k,[i("div",y,[e(v,{class:""},{default:a(()=>[i("div",g,[e(d,{width:130,"aspect-ratio":"1/1",class:"mr-auto ml-auto mt-5",cover:"",src:p}),e(d,{width:250,"aspect-ratio":"1/1",class:"mr-auto ml-auto mt-5",cover:"",src:u})]),e(_,null,{default:a(()=>[e(c,{density:"compact","hide-details":"auto","prepend-inner-icon":"mdi-account",placeholder:"\u8ACB\u8F38\u5165\u5E33\u865F"}),e(c,{class:"elevation-0",placeholder:"\u8ACB\u8F38\u5165\u5BC6\u78BC","hide-details":"auto","prepend-inner-icon":"mdi-lock",type:o.visible?"text":"password",density:"compact","onClick:appendInner":s[0]||(s[0]=t=>o.visible=!o.visible)},null,8,["type"]),i("div",w,[i("div",{class:"showPassword",onClick:s[1]||(s[1]=t=>o.visible=!o.visible)},[e(h,{class:"mr-2",icon:o.visible?"mdi-eye-outline":"mdi-eye-off-outline"},null,8,["icon"]),o.visible?(l(),r("span",C,"\u986F\u793A\u5BC6\u78BC")):(l(),r("span",x,"\u96B1\u85CF\u5BC6\u78BC"))])]),i("div",$,[e(V,{modelValue:o.checkbox,"onUpdate:modelValue":s[2]||(s[2]=t=>o.checkbox=t),rules:[t=>!!t||""],label:"\u8A18\u4F4F\u6211\uFF1F",required:"",color:"primary","hide-details":""},null,8,["modelValue","rules"]),e(m,{class:"forget",color:"textColor",variant:"text"},{default:a(()=>[n("\u5FD8\u8A18\u5BC6\u78BC")]),_:1})]),e(m,{type:"submit",block:"",color:"primary",class:"mt-2 elevation-0 loginBtn"},{default:a(()=>[n("\u767B\u5165")]),_:1})]),_:1})]),_:1})])])}const J=f(b,[["render",B]]);export{J as default};