import{d as xe,a as de}from"./VForm.a9fb59ee.js";import{p as j,t as oe,A as H,w as c,J as $,D as M,I as Te,s as O,E as fe,r as z,c as R,z as le,aV as Ie,G as ye,K as Ve,aa as ae,g as Ce,x as Ae,C as Re,j as Q,o as De,a6 as Be,ao as Fe,aB as Oe,B as ve,aW as _e,ax as Ee,aX as me,aF as pe,aj as Le}from"./index.e8704dd8.js";import{f as Me}from"./VInput.72c5f274.js";import{f as He}from"./forwardRefs.890e72a9.js";import{m as Ue,u as qe,V as ze,b as he}from"./VList.943cbd67.js";import{m as we,u as ue,j as Ne,k as Ke,O as $e,v as ge,i as je}from"./index.bd28c6fd.js";import{g as We,a as Xe,V as Ge}from"./VMenu.a3e6bf4a.js";import{u as Se}from"./VBtn.04b371b5.js";import{a as Je}from"./VCheckbox.b8e6c7c4.js";import{a as Ye}from"./VCard.2d2b7614.js";import{a as Qe}from"./VChip.a63fe0fa.js";const Ze=j({renderless:Boolean,...we()},"VVirtualScrollItem"),et=oe()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Ze(),emits:{"update:height":t=>!0},setup(t,d){let{attrs:n,emit:f,slots:u}=d;const{resizeRef:v,contentRect:m}=Se(void 0,"border");H(()=>{var o;return(o=m.value)==null?void 0:o.height},o=>{o!=null&&f("update:height",o)}),ue(()=>{var o,a;return t.renderless?c($,null,[(o=u.default)==null?void 0:o.call(u,{itemRef:v})]):c("div",M({ref:v,class:["v-virtual-scroll__item",t.class],style:t.style},n),[(a=u.default)==null?void 0:a.call(u)])})}}),tt=-1,lt=1,ne=100,nt=j({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function at(t,d){const n=Te(),f=O(0);fe(()=>{f.value=parseFloat(t.itemHeight||0)});const u=O(0),v=O(Math.ceil((parseInt(t.height)||n.height.value)/(f.value||16))||1),m=O(0),o=O(0),a=z(),g=z();let C=0;const{resizeRef:F,contentRect:s}=Se();fe(()=>{F.value=a.value});const w=R(()=>{var e;return a.value===document.documentElement?n.height.value:((e=s.value)==null?void 0:e.height)||parseInt(t.height)||0}),A=R(()=>!!(a.value&&g.value&&w.value&&f.value));let x=Array.from({length:d.value.length}),p=Array.from({length:d.value.length});const S=O(0);let k=-1;function _(e){return x[e]||f.value}const T=Ie(()=>{const e=performance.now();p[0]=0;const l=d.value.length;for(let r=1;r<=l-1;r++)p[r]=(p[r-1]||0)+_(r-1);S.value=Math.max(S.value,performance.now()-e)},S),W=H(A,e=>{!e||(W(),C=g.value.offsetTop,T.immediate(),D(),~k&&Ve(()=>{ae&&window.requestAnimationFrame(()=>{Y(k),k=-1})}))});ye(()=>{T.clear()});function Z(e,l){const r=x[e],y=f.value;f.value=y?Math.min(f.value,l):l,(r!==l||y!==f.value)&&(x[e]=l,T())}function P(e){return e=le(e,0,d.value.length-1),p[e]||0}function X(e){return ot(p,e)}let U=0,E=0,N=0;H(w,(e,l)=>{l&&(D(),e<l&&requestAnimationFrame(()=>{E=0,D()}))});function G(){if(!a.value||!g.value)return;const e=a.value.scrollTop,l=performance.now();l-N>500?(E=Math.sign(e-U),C=g.value.offsetTop):E=e-U,U=e,N=l,D()}function q(){!a.value||!g.value||(E=0,N=0,D())}let J=-1;function D(){cancelAnimationFrame(J),J=requestAnimationFrame(ee)}function ee(){if(!a.value||!w.value)return;const e=U-C,l=Math.sign(E),r=Math.max(0,e-ne),y=le(X(r),0,d.value.length),I=e+w.value+ne,i=le(X(I)+1,y+1,d.value.length);if((l!==tt||y<u.value)&&(l!==lt||i>v.value)){const V=P(u.value)-P(y),b=P(i)-P(v.value);Math.max(V,b)>ne?(u.value=y,v.value=i):(y<=0&&(u.value=y),i>=d.value.length&&(v.value=i))}m.value=P(u.value),o.value=P(d.value.length)-P(v.value)}function Y(e){const l=P(e);!a.value||e&&!l?k=e:a.value.scrollTop=l}const te=R(()=>d.value.slice(u.value,v.value).map((e,l)=>({raw:e,index:l+u.value})));return H(d,()=>{x=Array.from({length:d.value.length}),p=Array.from({length:d.value.length}),T.immediate(),D()},{deep:!0}),{calculateVisibleItems:D,containerRef:a,markerRef:g,computedItems:te,paddingTop:m,paddingBottom:o,scrollToIndex:Y,handleScroll:G,handleScrollend:q,handleItemResize:Z}}function ot(t,d){let n=t.length-1,f=0,u=0,v=null,m=-1;if(t[n]<d)return n;for(;f<=n;)if(u=f+n>>1,v=t[u],v>d)n=u-1;else if(v<d)m=u,f=u+1;else return v===d?u:f;return m}const ut=j({items:{type:Array,default:()=>[]},renderless:Boolean,...nt(),...we(),...Ne()},"VVirtualScroll"),st=oe()({name:"VVirtualScroll",props:ut(),setup(t,d){let{slots:n}=d;const f=Ce("VVirtualScroll"),{dimensionStyles:u}=Ke(t),{calculateVisibleItems:v,containerRef:m,markerRef:o,handleScroll:a,handleScrollend:g,handleItemResize:C,scrollToIndex:F,paddingTop:s,paddingBottom:w,computedItems:A}=at(t,Ae(t,"items"));return Re(()=>t.renderless,()=>{function x(){var k,_;const S=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";m.value===document.documentElement?(document[S]("scroll",a,{passive:!0}),document[S]("scrollend",g)):((k=m.value)==null||k[S]("scroll",a,{passive:!0}),(_=m.value)==null||_[S]("scrollend",g))}De(()=>{m.value=We(f.vnode.el,!0),x(!0)}),ye(x)}),ue(()=>{const x=A.value.map(p=>c(et,{key:p.index,renderless:t.renderless,"onUpdate:height":S=>C(p.index,S)},{default:S=>{var k;return(k=n.default)==null?void 0:k.call(n,{item:p.raw,index:p.index,...S})}}));return t.renderless?c($,null,[c("div",{ref:o,class:"v-virtual-scroll__spacer",style:{paddingTop:Q(s.value)}},null),x,c("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:Q(w.value)}},null)]):c("div",{ref:m,class:["v-virtual-scroll",t.class],onScrollPassive:a,onScrollend:g,style:[u.value,t.style]},[c("div",{ref:o,class:"v-virtual-scroll__container",style:{paddingTop:Q(s.value),paddingBottom:Q(w.value)}},[x])])}),{calculateVisibleItems:v,scrollToIndex:F}}});function rt(t,d){const n=O(!1);let f;function u(o){cancelAnimationFrame(f),n.value=!0,f=requestAnimationFrame(()=>{f=requestAnimationFrame(()=>{n.value=!1})})}async function v(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(n.value){const a=H(n,()=>{a(),o()})}else o()})}async function m(o){var C,F;if(o.key==="Tab"&&((C=d.value)==null||C.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const a=(F=t.value)==null?void 0:F.$el;if(!a)return;(o.key==="Home"||o.key==="End")&&a.scrollTo({top:o.key==="Home"?0:a.scrollHeight,behavior:"smooth"}),await v();const g=a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const s=a.getBoundingClientRect().top;for(const w of g)if(w.getBoundingClientRect().top>=s){w.focus();break}}else{const s=a.getBoundingClientRect().bottom;for(const w of[...g].reverse())if(w.getBoundingClientRect().bottom<=s){w.focus();break}}}return{onScrollPassive:u,onKeydown:m}}const it=j({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:Be,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Ue({itemChildren:!1})},"Select"),ct=j({...it(),...Fe(xe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...$e({transition:{component:Xe}})},"VSelect"),bt=oe()({name:"VSelect",props:ct(),emits:{"update:focused":t=>!0,"update:modelValue":t=>!0,"update:menu":t=>!0},setup(t,d){let{slots:n}=d;const{t:f}=Oe(),u=z(),v=z(),m=z(),o=ve(t,"menu"),a=R({get:()=>o.value,set:e=>{var l;o.value&&!e&&((l=v.value)==null?void 0:l.\u03A8openChildren.size)||(o.value=e)}}),{items:g,transformIn:C,transformOut:F}=qe(t),s=ve(t,"modelValue",[],e=>C(e===null?[null]:Le(e)),e=>{var r;const l=F(e);return t.multiple?l:(r=l[0])!=null?r:null}),w=R(()=>typeof t.counterValue=="function"?t.counterValue(s.value):typeof t.counterValue=="number"?t.counterValue:s.value.length),A=Me(),x=R(()=>s.value.map(e=>e.value)),p=O(!1),S=R(()=>a.value?t.closeText:t.openText);let k="",_;const T=R(()=>t.hideSelected?g.value.filter(e=>!s.value.some(l=>t.valueComparator(l,e))):g.value),W=R(()=>t.hideNoData&&!T.value.length||t.readonly||(A==null?void 0:A.isReadonly.value)),Z=R(()=>{var e;return{...t.menuProps,activatorProps:{...((e=t.menuProps)==null?void 0:e.activatorProps)||{},"aria-haspopup":"listbox"}}}),P=z(),X=rt(P,u);function U(e){t.openOnClear&&(a.value=!0)}function E(){W.value||(a.value=!a.value)}function N(e){me(e)&&G(e)}function G(e){var I,i;if(!e.key||t.readonly||(A==null?void 0:A.isReadonly.value))return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(e.key)&&e.preventDefault(),["Enter","ArrowDown"," "].includes(e.key)&&(a.value=!0),["Escape","Tab"].includes(e.key)&&(a.value=!1),e.key==="Home"?(I=P.value)==null||I.focus("first"):e.key==="End"&&((i=P.value)==null||i.focus("last"));const l=1e3;if(t.multiple||!me(e))return;const r=performance.now();r-_>l&&(k=""),k+=e.key.toLowerCase(),_=r;const y=g.value.find(V=>V.title.toLowerCase().startsWith(k));if(y!==void 0){s.value=[y];const V=T.value.indexOf(y);ae&&window.requestAnimationFrame(()=>{var b;V>=0&&((b=m.value)==null||b.scrollToIndex(V))})}}function q(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!e.props.disabled)if(t.multiple){const r=s.value.findIndex(I=>t.valueComparator(I.value,e.value)),y=l==null?!~r:l;if(~r){const I=y?[...s.value,e]:[...s.value];I.splice(r,1),s.value=I}else y&&(s.value=[...s.value,e])}else{const r=l!==!1;s.value=r?[e]:[],Ve(()=>{a.value=!1})}}function J(e){var l;(l=P.value)!=null&&l.$el.contains(e.relatedTarget)||(a.value=!1)}function D(){var e;t.eager&&((e=m.value)==null||e.calculateVisibleItems())}function ee(){var e;p.value&&((e=u.value)==null||e.focus())}function Y(e){p.value=!0}function te(e){if(e==null)s.value=[];else if(pe(u.value,":autofill")||pe(u.value,":-webkit-autofill")){const l=g.value.find(r=>r.title===e);l&&q(l)}else u.value&&(u.value.value="")}return H(a,()=>{if(!t.hideSelected&&a.value&&s.value.length){const e=T.value.findIndex(l=>s.value.some(r=>t.valueComparator(r.value,l.value)));ae&&window.requestAnimationFrame(()=>{var l;e>=0&&((l=m.value)==null||l.scrollToIndex(e))})}}),H(()=>t.items,(e,l)=>{a.value||p.value&&!l.length&&e.length&&(a.value=!0)}),ue(()=>{const e=!!(t.chips||n.chip),l=!!(!t.hideNoData||T.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),r=s.value.length>0,y=de.filterProps(t),I=r||!p.value&&t.label&&!t.persistentPlaceholder?void 0:t.placeholder;return c(de,M({ref:u},y,{modelValue:s.value.map(i=>i.props.value).join(", "),"onUpdate:modelValue":te,focused:p.value,"onUpdate:focused":i=>p.value=i,validationValue:s.externalValue,counterValue:w.value,dirty:r,class:["v-select",{"v-select--active-menu":a.value,"v-select--chips":!!t.chips,[`v-select--${t.multiple?"multiple":"single"}`]:!0,"v-select--selected":s.value.length,"v-select--selection-slot":!!n.selection},t.class],style:t.style,inputmode:"none",placeholder:I,"onClick:clear":U,"onMousedown:control":E,onBlur:J,onKeydown:G,"aria-label":f(S.value),title:f(S.value)}),{...n,default:()=>c($,null,[c(Ge,M({ref:v,modelValue:a.value,"onUpdate:modelValue":i=>a.value=i,activator:"parent",contentClass:"v-select__content",disabled:W.value,eager:t.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:t.transition,onAfterEnter:D,onAfterLeave:ee},Z.value),{default:()=>{var i;return[l&&c(ze,M({ref:P,selected:x.value,selectStrategy:t.multiple?"independent":"single-independent",onMousedown:V=>V.preventDefault(),onKeydown:N,onFocusin:Y,tabindex:"-1","aria-live":"polite",color:(i=t.itemColor)!=null?i:t.color},X,t.listProps),{default:()=>{var V,b,B,K;return[(V=n["prepend-item"])==null?void 0:V.call(n),!T.value.length&&!t.hideNoData&&((B=(b=n["no-data"])==null?void 0:b.call(n))!=null?B:c(he,{title:f(t.noDataText)},null)),c(st,{ref:m,renderless:!0,items:T.value},{default:L=>{var ie,ce;let{item:h,index:se,itemRef:be}=L;const re=M(h.props,{ref:be,key:se,onClick:()=>q(h,null)});return(ce=(ie=n.item)==null?void 0:ie.call(n,{item:h,index:se,props:re}))!=null?ce:c(he,M(re,{role:"option"}),{prepend:ke=>{let{isSelected:Pe}=ke;return c($,null,[t.multiple&&!t.hideSelected?c(Je,{key:h.value,modelValue:Pe,ripple:!1,tabindex:"-1"},null):void 0,h.props.prependAvatar&&c(Ye,{image:h.props.prependAvatar},null),h.props.prependIcon&&c(ge,{icon:h.props.prependIcon},null)])}})}}),(K=n["append-item"])==null?void 0:K.call(n)]}})]}}),s.value.map((i,V)=>{function b(h){h.stopPropagation(),h.preventDefault(),q(i,!1)}const B={"onClick:close":b,onKeydown(h){h.key!=="Enter"&&h.key!==" "||(h.preventDefault(),h.stopPropagation(),b(h))},onMousedown(h){h.preventDefault(),h.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},K=e?!!n.chip:!!n.selection,L=K?_e(e?n.chip({item:i,index:V,props:B}):n.selection({item:i,index:V})):void 0;if(!(K&&!L))return c("div",{key:i.value,class:"v-select__selection"},[e?n.chip?c(je,{key:"chip-defaults",defaults:{VChip:{closable:t.closableChips,size:"small",text:i.title}}},{default:()=>[L]}):c(Qe,M({key:"chip",closable:t.closableChips,size:"small",text:i.title,disabled:i.props.disabled},B),null):L!=null?L:c("span",{class:"v-select__selection-text"},[i.title,t.multiple&&V<s.value.length-1&&c("span",{class:"v-select__selection-comma"},[Ee(",")])])])})]),"append-inner":function(){var B;for(var i=arguments.length,V=new Array(i),b=0;b<i;b++)V[b]=arguments[b];return c($,null,[(B=n["append-inner"])==null?void 0:B.call(n,...V),t.menuIcon?c(ge,{class:"v-select__menu-icon",icon:t.menuIcon},null):void 0])}})}),He({isFocused:p,menu:a,select:q},u)}});export{bt as V};
