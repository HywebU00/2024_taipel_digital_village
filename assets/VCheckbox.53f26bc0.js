import{m as A,V as t}from"./VCheckboxBtn.792434e7.js";import{c as F,a as I,d as l}from"./VInput.6c06c116.js";import{p as B,ao as U,z as R,G as $,l as z,e as D,aW as G,a as r,m as u}from"./index.868bbe2e.js";import{u as M}from"./index.d3baee00.js";const N=B({...F(),...U(A(),["inline"])},"VCheckbox"),E=R()({name:"VCheckbox",inheritAttrs:!1,props:N(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,c){let{attrs:d,slots:a}=c;const o=$(e,"modelValue"),{isFocused:n,focus:i,blur:m}=I(e),V=z(),p=D(()=>e.id||`checkbox-${V}`);return M(()=>{const[b,f]=G(d),k=l.filterProps(e),v=t.filterProps(e);return r(l,u({class:["v-checkbox",e.class]},b,k,{modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,id:p.value,focused:n.value,style:e.style}),{...a,default:s=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C,isValid:y}=s;return r(t,u(v,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},f,{error:y.value===!1,modelValue:o.value,"onUpdate:modelValue":g=>o.value=g,onFocus:i,onBlur:m}),a)}})}),{}}});export{E as V};