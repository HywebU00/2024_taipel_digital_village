import{p as y,at as m}from"./index.b0e7a6e4.js";const f=y({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function p(t,r){let e=()=>{};function a(n){e==null||e();const l=Number(n?t.openDelay:t.closeDelay);return new Promise(s=>{e=m(l,()=>{r==null||r(n),s(n)})})}function o(){return a(!0)}function u(){return a(!1)}return{clearDelay:e,runOpenDelay:o,runCloseDelay:u}}export{f as m,p as u};