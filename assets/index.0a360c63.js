import{r as e,o as s,c as t,a as o,t as a,u as r,F as n,b as c,d as u}from"./vendor.f03e7bcb.js";!function(e=".",s="__import__"){try{self[s]=new Function("u","return import(u)")}catch(t){const o=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[s]=e=>new Promise(((t,r)=>{const n=new URL(e,o);if(self[s].moduleMap[n])return t(self[s].moduleMap[n]);const c=new Blob([`import * as m from '${n}';`,`${s}.moduleMap['${n}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),a(u)},onload(){t(self[s].moduleMap[n]),a(u)}});document.head.appendChild(u)})),self[s].moduleMap={}}}("/supports-webp-sync/assets/");const p={class:"content"},l=o("h1",null,"Does my browser support WebP?",-1),m=o("a",{href:"https://www.npmjs.com/package/supports-webp-sync"},"supports-webp-sync",-1),i=c(" output: "),d={class:"footer"};u({expose:[],setup(c){const u=function(){const e=document.createElement("canvas");if(e.toDataURL&&0==e.toDataURL("image/webp").indexOf("data:image/webp"))return!0;let s=navigator.userAgent.match(/(Edg|Firefox)\/(\d+)\./);return s?"Firefox"===s[1]&&s[2]>=65||"Edge"===s[1]&&s[2]>=18:(s=navigator.userAgent.match(/OS X\s?(?<os>\d+)?.+ Version\/(?<v>\d+\.\d+)/),!!s&&s.groups.v>=14&&(s.groups.os||99)>=11)}(),f=navigator.userAgent;console.log(f);const g=e(null),w=e=>{g.value=e};return(e,c)=>(s(),t(n,null,[o("div",p,[o("img",{onLoad:c[1]||(c[1]=e=>w(!0)),onError:c[2]||(c[2]=e=>w(!1)),class:"image",alt:"sample webp image",src:"/supports-webp-sync/assets/img.4cf3e271.webp"},null,32),l,o("p",{class:["result",{success:g.value,failure:!g.value}]},a(g.value?"YES":"NO"),3),o("h2",null,[m,i,o("span",{class:{success:r(u),failure:!r(u)}},a(r(u)),3)])]),o("div",d,a(r(f)),1)],64))}}).mount("#app");
