import{g as O,h as f,b as S,u as w,c as b}from"./VInput.72c5f274.js";import{p as h,a6 as M,t as x,B as i,c as m,ao as I,w as V,D as v,d as N,aR as j}from"./index.e8704dd8.js";import{u as C}from"./index.bd28c6fd.js";const P=h({indeterminate:Boolean,indeterminateIcon:{type:M,default:"$checkboxIndeterminate"},...O({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),k=x()({name:"VCheckboxBtn",props:P(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,n){let{slots:l}=n;const t=i(e,"indeterminate"),o=i(e,"modelValue");function s(a){t.value&&(t.value=!1)}const u=m(()=>t.value?e.indeterminateIcon:e.falseIcon),c=m(()=>t.value?e.indeterminateIcon:e.trueIcon);return C(()=>{const a=I(f.filterProps(e),["modelValue"]);return V(f,v(a,{modelValue:o.value,"onUpdate:modelValue":[r=>o.value=r,s],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:u.value,trueIcon:c.value,"aria-checked":t.value?"mixed":void 0}),l)}),{}}}),q=h({...S(),...I(P(),["inline"])},"VCheckbox"),H=x()({name:"VCheckbox",inheritAttrs:!1,props:q(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,n){let{attrs:l,slots:t}=n;const o=i(e,"modelValue"),{isFocused:s,focus:u,blur:c}=w(e),a=N(),r=m(()=>e.id||`checkbox-${a}`);return C(()=>{const[p,y]=j(l),B=b.filterProps(e),g=k.filterProps(e);return V(b,v({class:["v-checkbox",e.class]},p,B,{modelValue:o.value,"onUpdate:modelValue":d=>o.value=d,id:r.value,focused:s.value,style:e.style}),{...t,default:d=>{let{id:$,messagesId:A,isDisabled:F,isReadonly:U,isValid:R}=d;return V(k,v(g,{id:$.value,"aria-describedby":A.value,disabled:F.value,readonly:U.value},y,{error:R.value===!1,modelValue:o.value,"onUpdate:modelValue":D=>o.value=D,onFocus:u,onBlur:c}),t)}})}),{}}});export{H as V,k as a};
