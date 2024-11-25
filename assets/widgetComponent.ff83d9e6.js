import{_ as B,r as C,o as s,av as r,d as t,c as d,ax as u,ay as p,N as _,b8 as b,n as F,a2 as O,a4 as z,aw as k,a as e,w as l,m as N}from"./index.9511b635.js";import{v as V,V as S}from"./index.20cb5e26.js";import{V as c}from"./VBtn.e714274f.js";import{_ as E}from"./06.312e17cd.js";import{V as w,a as I,b as m,c as g}from"./VRow.42b384f1.js";import{V as v}from"./VDivider.5fba821b.js";import{V as x}from"./VCard.050e7609.js";import{V as j,a as G}from"./VChip.dd8c3d4e.js";import{V as L}from"./VTable.9b142992.js";import{V as P}from"./VPagination.310571c2.js";import{V as U}from"./VCheckbox.4f08b9e3.js";import{V as M}from"./VMenu.064de343.js";import"./index.b1a35aa7.js";import"./VCheckboxBtn.8e7b30ad.js";import"./VInput.64cc7c86.js";import"./VOverlay.06e96690.js";import"./forwardRefs.890e72a9.js";import"./delay.ed2c0ebe.js";import"./lazy.a4b349ac.js";import"./scopeId.d4522a0a.js";const R={name:"TreeItem",props:{model:Object},data(){return{isOpen:!0}},computed:{isFolder(){return this.model.children&&this.model.children.length}},methods:{toggle(){this.isFolder&&(this.isOpen=!this.isOpen)},changeType(){this.isFolder||(this.model.children=[],this.addChild(),this.isOpen=!0)}}},q={class:"d-flex treeTitle"},A={key:0,class:"iconList"},H={key:0};function J(i,o,y,T,f,n){const h=C("tree-item",!0);return s(),r("li",null,[t("div",{class:F({bold:n.isFolder}),onClick:o[0]||(o[0]=(...a)=>n.toggle&&n.toggle(...a)),onDblclick:o[1]||(o[1]=(...a)=>n.changeType&&n.changeType(...a))},[t("div",q,[n.isFolder?(s(),r("span",A,[f.isOpen?(s(),d(V,{key:0,class:"mr-2",icon:"mdi-folder-open",color:"primary"})):(s(),d(V,{key:1,class:"mr-2",icon:"mdi-folder",color:"primary"}))])):(s(),d(V,{key:1,class:"mr-2",icon:"mdi-file-document",color:"secondary"})),u(" "+p(y.model.name)+" ",1),n.isFolder?(s(),r(_,{key:2},[f.isOpen?(s(),d(c,{key:0,density:"compact",variant:"text",icon:"mdi-chevron-up"})):(s(),d(c,{key:1,density:"compact",variant:"text",icon:"mdi-chevron-down"}))],64)):b("",!0)])],34),n.isFolder?O((s(),r("ul",H,[(s(!0),r(_,null,k(y.model.children,a=>(s(),r("div",{class:"d-flex",key:a},[e(h,{class:"item",model:a},null,8,["model"])]))),128))],512)),[[z,f.isOpen]]):b("",!0)])}const K=B(R,[["render",J]]),Q={name:"\u5206\u985E\uFF21",children:[{name:"\u5206\u985E\uFF21-1"},{name:"\u5206\u985E\uFF21-2"},{name:"\u5206\u985E\uFF21-3",children:[{name:"\u5206\u985E\uFF21-3.1"},{name:"\u5206\u985E\uFF21-3.2"},{name:"\u5206\u985E\uFF21-3.3"},{name:"\u5206\u985E\uFF21-3.4"}]}]},W={name:"\u5206\u985EB",children:[{name:"\u5206\u985EB-1"},{name:"\u5206\u985EB-2"},{name:"\u5206\u985EB-3",children:[{name:"\u5206\u985EB-3.1"},{name:"\u5206\u985EB-3.2"},{name:"\u5206\u985EB-3.3"},{name:"\u5206\u985EB-3.4"}]}]},X={data:()=>({tab:null,toggle:null,functionGroupToggle:0,page:1,panel:1,selection:1,data:[{id:"1",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"2",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"3",top:!1,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"}],treeData:Q,treeData2:W}),methods:{},components:{TreeItem:K}},Y=t("h2",null,"\u7279\u6B8A\u7BC4\u4F8B\u9801\u9762 - \u7DB2\u7AD9\u7E3D\u89BD",-1),Z={class:""},$=t("thead",null,[t("tr",null,[t("th",{class:"text-left",style:{width:"50px"}}),t("th",{class:"text-center",style:{width:"50px"}},"\u5E8F\u865F"),t("th",{class:"text-left"},"\u5716\u7247"),t("th",{class:"text-center",style:{"min-width":"400px"}}," \u6A19\u984C "),t("th",{class:"text-left"},"\u8CC7\u6599\u5206\u985E"),t("th",{class:"text-left"},"\u72C0\u614B"),t("th",{class:"text-left",style:{width:"100px"}},"\u52D5\u4F5C")])],-1),ee={class:"text-center"},te={class:"text-center pb-5"};function le(i,o,y,T,f,n){const h=C("tree-item");return s(),d(w,{class:"container"},{default:l(()=>[e(I,{items:["\u9996\u9801","\u7BC0\u9EDE","\u7BC0\u9EDE"]}),e(v,{class:"pt-1 mb-3"}),Y,e(v,{class:"mt-3 mb-4"}),e(g,null,{default:l(()=>[e(m,{class:"px-1",md:"2",cols:"12"},{default:l(()=>[e(x,{class:"treeviewBlock pa-2"},{default:l(()=>[t("ul",null,[e(h,{class:"item",model:i.treeData},null,8,["model"]),e(h,{class:"item",model:i.treeData2},null,8,["model"])])]),_:1})]),_:1}),e(m,{class:"px-1",md:"10",cols:"12"},{default:l(()=>[e(x,{class:"mb-5"},{default:l(()=>[t("div",Z,[e(w,{class:"container"},{default:l(()=>[e(g,{class:"mb-1"},{default:l(()=>[e(m,{cols:"12",class:"py-0"},{default:l(()=>[t("div",null,[e(j,{modelValue:i.selection,"onUpdate:modelValue":o[0]||(o[0]=a=>i.selection=a)},{default:l(()=>[(s(),r(_,null,k(6,a=>e(G,{key:a,color:"primary",link:"",label:""},{default:l(()=>[u(" \u6A19\u7C64 ")]),_:2},1024)),64))]),_:1},8,["modelValue"])]),e(v,{class:"my-2"})]),_:1}),e(m,{class:"pb-0 justify-end d-flex",cols:"12"},{default:l(()=>[e(c,{variant:"flat",color:"primary ","prepend-icon":"mdi-plus"},{default:l(()=>[u("\u65B0\u589E")]),_:1})]),_:1})]),_:1}),e(g,{class:"mt-0"},{default:l(()=>[e(m,null,{default:l(()=>[e(L,null,{default:l(()=>[$,t("tbody",null,[(s(!0),r(_,null,k(i.data,a=>(s(),r("tr",{key:a.name},[t("td",null,[e(U,{value:"1",label:"","hide-details":"",type:"checkbox"})]),t("td",ee,p(a.id),1),t("td",null,[e(S,{width:60,"aspect-ratio":"1/1",cover:"",src:E})]),t("td",null,p(a.title),1),t("td",null,p(a.class),1),t("td",null,p(a.status),1),t("td",null,[e(M,{transition:"slide-y-transition"},{activator:l(({props:D})=>[e(c,N({icon:"mdi-chevron-down",class:"ma-2"},D,{size:"x-small"}),null,16)]),default:l(()=>[e(x,{class:"pa-2"},{default:l(()=>[e(c,{size:"small",variant:"outlined",class:"my-1",block:"",color:"primary","prepend-icon":"mdi-delete"},{default:l(()=>[u("\u522A\u9664")]),_:1}),e(c,{size:"small",variant:"outlined",class:"my-1",block:"","prepend-icon":"mdi-pencil",color:"primary"},{default:l(()=>[u("\u7DE8\u8F2F")]),_:1})]),_:1})]),_:1})])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),t("div",te,[e(P,{modelValue:i.page,"onUpdate:modelValue":o[1]||(o[1]=a=>i.page=a),length:5,rounded:"0","active-color":"primary",color:"primary",size:"small"},null,8,["modelValue"])])])]),_:1})]),_:1})]),_:1})]),_:1})}const be=B(X,[["render",le]]);export{be as default};