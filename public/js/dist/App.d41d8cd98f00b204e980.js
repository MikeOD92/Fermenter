!function(e){function t(t){for(var a,u,c=t[0],i=t[1],o=t[2],s=0,p=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(l,u)&&l[u]&&p.push(l[u][0]),l[u]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(m&&m(t);p.length;)p.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==l[i]&&(a=!1)}a&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},l={0:0},r=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var m=i;r.push([38,1]),n()}({38:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(23),u=n.n(r),c=n(4);var i=e=>l.a.createElement("nav",{className:"NavBar"},e.routes.filter(e=>!e.path.includes(":")).map(e=>{let{key:t,path:n}=e;return l.a.createElement(c.b,{key:t,to:n},t)})),o=n(1);function m(e,t,n,a,l,r,u){try{var c=e[r](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(a,l)}function s(e,t,n,a,l,r,u){try{var c=e[r](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(a,l)}function p(e,t,n,a,l,r,u){try{var c=e[r](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(a,l)}function d(e,t,n,a,l,r,u){try{var c=e[r](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(a,l)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(a,l){var r=e.apply(t,n);function u(e){d(r,a,l,u,c,"next",e)}function c(e){d(r,a,l,u,c,"throw",e)}u(void 0)}))}}function b(e,t,n,a,l,r,u){try{var c=e[r](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(a,l)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(a,l){var r=e.apply(t,n);function u(e){b(r,a,l,u,c,"next",e)}function c(e){b(r,a,l,u,c,"throw",e)}u(void 0)}))}}function v(e,t,n,a,l,r,u){try{var c=e[r](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(a,l)}function y(e){const t=t=>{t.preventDefault(),e.lactoFerment.ingredients.main.push({name:"",value:0,unit:"unit"}),e.set(e.lactoFerment),a()},n=t=>{e.lactoFerment.ingredients.main.splice(t.target.id,1),e.set(e.lactoFerment),a()},a=()=>{var t;(t=function*(){try{yield fetch("/api/lactoferments/".concat(e.match),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.lactoFerment)})}catch(e){console.error(e)}finally{e.setUpdater(e.updater+1)}},function(){var e=this,n=arguments;return new Promise((function(a,l){var r=t.apply(e,n);function u(e){v(r,a,l,u,c,"next",e)}function c(e){v(r,a,l,u,c,"throw",e)}u(void 0)}))})()};return e.lactoFerment.ingredients.main.length>0?e.lactoFerment.ingredients.main.map((a,r)=>l.a.createElement("div",{index:r},l.a.createElement("input",{type:"string",name:"main[".concat(r,"].name"),defaultValue:e.lactoFerment.ingredients.main[r].name,key:"".concat(e.lactoFerment.ingredients.main[r].name).concat(r)}),l.a.createElement("input",{type:"string",name:"main[".concat(r,"].value"),defaultValue:e.lactoFerment.ingredients.main[r].value,key:"".concat(e.lactoFerment.ingredients.main[r].value).concat(r)}),l.a.createElement("input",{type:"string",name:"main[".concat(r,"].unit"),defaultValue:e.lactoFerment.ingredients.main[r].unit,key:"".concat(e.lactoFerment.ingredients.main[r].unit).concat(r)}),l.a.createElement("button",{onClick:t},"+"),l.a.createElement("button",{onClick:n,id:r},"-"))):l.a.createElement("div",null,l.a.createElement("button",{onClick:t},"+ ingredient"))}function h(e,t,n,a,l,r,u){try{var c=e[r](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(a,l)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(a,l){var r=e.apply(t,n);function u(e){h(r,a,l,u,c,"next",e)}function c(e){h(r,a,l,u,c,"throw",e)}u(void 0)}))}}function j(e,t,n,a,l,r,u){try{var c=e[r](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(a,l)}var O=n(10);function k(e,t,n,a,l,r,u){try{var c=e[r](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(a,l)}var R=[{Component:function(e){const[t,n]=Object(a.useState)([]),r=Object(a.useRef)(null),u=Object(a.useRef)(null),c=Object(a.useRef)(null),i=Object(a.useRef)(null),o=Object(a.useRef)(null),m=Object(a.useRef)(null),s=Object(a.useRef)(null),p=Object(a.useRef)(null),d=Object(a.useRef)(null),f=Object(a.useRef)(null),b=Object(a.useRef)(null),E=Object(a.useRef)(null),v=Object(a.useRef)(null),y=Object(a.useRef)(null),h=Object(a.useRef)(null),g=Object(a.useRef)(null),O=Object(a.useRef)(null),k=Object(a.useRef)(null),R=Object(a.useRef)(null),w=Object(a.useRef)(null),x=Object(a.useRef)(null),C=Object(a.useRef)(null),N=function(){var e,t=(e=function*(e){e.preventDefault();try{const e=yield fetch("/api/beers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:k.current.value,style:R.current.value,description:w.current.value,abv:x.current.value,ibu:C.current.value,volume:{value:r.current.value,unit:u.current.value},boil:{value:c.current.value,unit:i.current.value},method:{mash:{temp:o.current.value,duration:m.current.value},ferment:{temp:s.current.value,time:p.current.value}},ingredients:{malt:[{amount:{value:d.current.value,unit:f.current.value},name:b.current.value}],hops:[{amount:{value:E.current.value,unit:v.current.value},name:y.current.value,add:h.current.value,attribute:g.current.value}],yeast:O.current.value}})}),t=yield e.json();n([t])}catch(e){console.error(e)}finally{window.location.assign("/")}},function(){var t=this,n=arguments;return new Promise((function(a,l){var r=e.apply(t,n);function u(e){j(r,a,l,u,c,"next",e)}function c(e){j(r,a,l,u,c,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",{className:"newbeerForm"},l.a.createElement("h1",null," New Beer Recipe"),l.a.createElement("form",{onSubmit:N},l.a.createElement("label",null,"Brew Name",l.a.createElement("input",{type:"text",ref:k})),l.a.createElement("label",null,"Style",l.a.createElement("input",{type:"text",ref:R})),l.a.createElement("label",null,"Description",l.a.createElement("input",{type:"text",ref:w})),l.a.createElement("label",null,"abv",l.a.createElement("input",{type:"number",ref:x})),l.a.createElement("label",null,"ibu",l.a.createElement("input",{type:"number",ref:C})),l.a.createElement("label",null,"Volume amount",l.a.createElement("input",{type:"number",ref:r})),l.a.createElement("label",null,"Volume unit",l.a.createElement("input",{type:"text",ref:u})),l.a.createElement("label",null,"Boil amount",l.a.createElement("input",{type:"number",ref:c})),l.a.createElement("label",null,"Boil unit",l.a.createElement("input",{type:"text",ref:i})),l.a.createElement("label",null,"Mash tempature",l.a.createElement("input",{type:"number",ref:o})),l.a.createElement("label",null,"Mash duration ","(mins)",l.a.createElement("input",{type:"number",ref:m})),l.a.createElement("label",null,"Fermentaion temp ","(C)",l.a.createElement("input",{type:"text",ref:s})),l.a.createElement("label",null,"Fermentation duration",l.a.createElement("input",{type:"text",ref:p})),l.a.createElement("label",null,"Malt name",l.a.createElement("input",{type:"text",ref:b})),l.a.createElement("label",null,"Malt amount",l.a.createElement("input",{type:"number",ref:d})),l.a.createElement("label",null,"Malt unit",l.a.createElement("input",{type:"text",ref:f})),l.a.createElement("label",null,"Hop Name",l.a.createElement("input",{type:"text",ref:y})),l.a.createElement("label",null,"Hop amount",l.a.createElement("input",{type:"number",ref:E})),l.a.createElement("label",null,"Hop unit",l.a.createElement("input",{type:"text",ref:v})),l.a.createElement("label",null,"Hop add",l.a.createElement("input",{type:"text",ref:h})),l.a.createElement("label",null,"Hop attribute",l.a.createElement("input",{type:"text",ref:g})),l.a.createElement("label",null,"yeast",l.a.createElement("input",{type:"text",ref:O})),l.a.createElement("span",{className:"button"},l.a.createElement("label",null,"Create beer recipe",l.a.createElement("input",{type:"submit"})))))},key:"NewBeer",path:"/beers/new"},{Component:function(e){return l.a.createElement("div",{className:"newLactofermentForm"},l.a.createElement("h1",null,"New Fermentation"),l.a.createElement(O.c,{initialValues:{name:"",description:"",volume:{value:0,unit:"unit"},ferment:{temp:20,duration:"x - weeks"},ingredients:{main:[{name:"name",value:0,unit:"unit"}],salt:{value:0,unit:"unit"},other:[{name:"name",value:0,unit:"unit"}]}},onSubmit:function(){var e,t=(e=function*(e){try{yield fetch("/api/lactoferments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(e){console.error(e)}finally{window.location.assign("/")}},function(){var t=this,n=arguments;return new Promise((function(a,l){var r=e.apply(t,n);function u(e){k(r,a,l,u,c,"next",e)}function c(e){k(r,a,l,u,c,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}()},e=>{let{values:t,errors:n,touched:a,handleChange:r,handleBlur:u,handleSubmit:c}=e;return l.a.createElement("form",{onSubmit:c},l.a.createElement("label",null," Name:"),l.a.createElement("input",{type:"string",name:"name",onChange:r,onBlur:u,value:t.name}),l.a.createElement("label",null," Description:"),l.a.createElement("input",{type:"string",name:"description",onChange:r,onBlur:u,value:t.description}),l.a.createElement("label",null," Volume:"),l.a.createElement("input",{type:"float",name:"volume.value",onChange:r,onBlur:u,value:t.volume.value}),l.a.createElement("input",{type:"string",name:"volume.unit",onChange:r,onBlur:u,value:t.volume.unit}),l.a.createElement("label",null,"Ferment"),l.a.createElement("label",null,"temp"),l.a.createElement("input",{type:"string",name:"ferment.temp",onChange:r,onBlur:u,value:t.ferment.temp}),l.a.createElement("label",null,"duration"),l.a.createElement("input",{type:"string",name:"ferment.duration",onChange:r,onBlur:u,value:t.ferment.duration}),l.a.createElement("label",null," ingredients:"),l.a.createElement("label",null," Main:"),l.a.createElement(O.b,{name:"ingredients.main",render:e=>l.a.createElement("div",null,t.ingredients.main&&t.ingredients.main.length>0?t.ingredients.main.map((t,n)=>l.a.createElement("div",{key:n,className:"field-container"},l.a.createElement("label",null," Name:"),l.a.createElement(O.a,{name:"ingredients.main.".concat(n,".name")}),l.a.createElement("label",null," val:"),l.a.createElement(O.a,{name:"ingredients.main.".concat(n,".value")}),l.a.createElement("label",null," unit:"),l.a.createElement(O.a,{name:"ingredients.main.".concat(n,".unit")}),l.a.createElement("button",{type:"button",onClick:()=>e.remove(n)},"-"),l.a.createElement("button",{type:"button",onClick:()=>e.push({name:"",value:0,unit:"unit"})},"+"))):l.a.createElement("button",{type:"button",onClick:()=>e.push("")},"Add ingredients"))}),l.a.createElement("label",null," salt"),l.a.createElement("input",{type:"float",name:"ingredients.salt.value",onChange:r,onBlur:u,value:t.ingredients.salt.value}),l.a.createElement("input",{type:"string",name:"ingredients.salt.unit",onChange:r,onBlur:u,value:t.ingredients.salt.unit}),l.a.createElement("label",null," ","Spices & aromatics:"," "),l.a.createElement(O.b,{name:"ingredients.other",render:e=>l.a.createElement("div",null,t.ingredients.other&&t.ingredients.other.length>0?t.ingredients.other.map((t,n)=>l.a.createElement("div",{key:n,className:"field-container"},l.a.createElement("label",null," Name:"),l.a.createElement(O.a,{name:"ingredients.other.".concat(n,".name")}),l.a.createElement("label",null," val:"),l.a.createElement(O.a,{name:"ingredients.other.".concat(n,".value")}),l.a.createElement("label",null," unit:"),l.a.createElement(O.a,{name:"ingredients.other.".concat(n,".unit")}),l.a.createElement("button",{type:"button",onClick:()=>e.remove(n)},"-"),l.a.createElement("button",{type:"button",onClick:()=>e.push({name:"",value:0,unit:"unit"})},"+"))):l.a.createElement("button",{type:"button",onClick:()=>e.push("")},"Add Aromatics & Spices"))}),l.a.createElement("button",{type:"submit"},"Submit"))}))},key:"NewLactoFerment",path:"/lactoferments/new"},{Component:function(e){const[t,n]=Object(a.useState)({}),[r,u]=Object(a.useState)(1);Object(a.useEffect)(()=>{g((function*(){try{const t=yield fetch("/api/lactoferments/".concat(e.match.params.id)),a=yield t.json();n(a)}catch(e){console.error(e)}}))()},[r]);const c=function(){var t=g((function*(t){try{const a=yield fetch("/api/lactoferments/".concat(e.match.params.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),l=yield a.json();n(l),console.log("out res was:"),console.log(l)}catch(e){console.error(e)}finally{window.location.assign("/lactoferments")}}));return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",{className:"lactofermentEditForm"},l.a.createElement("form",{onSubmit:e=>{e.preventDefault();const t=new FormData(e.target),n=Object.fromEntries(t.entries());let a=[],l=[],r=[],u=[];Object.keys(n).map(e=>{e.includes("main")&&(a.push(n[e]),delete n[e])});for(let e=0;e<a.length;e+=3)u.push({name:a[e],value:a[e+1],unit:a[e+2]});n.ingredients={main:u,other:[],salt:{value:3,unit:"tbsp"}},Object.keys(n).map(e=>{e.includes("volume")&&(l.push(n[e]),delete n[e])}),n.volume={value:l[0],unit:l[1]},Object.keys(n).map(e=>{e.includes("ferment")&&(r.push(n[e]),delete n[e])}),n.ferment={temp:r[0],duration:r[1]},console.log(n),c(n)}},t.name?l.a.createElement("div",null,l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",defaultValue:t.name})):"",t.description?l.a.createElement("div",null,l.a.createElement("label",null,"description:"),l.a.createElement("input",{type:"text",name:"description",defaultValue:t.description})):"",t.volume?l.a.createElement("div",null,l.a.createElement("label",null,"Volume"),l.a.createElement("input",{type:"float",name:"volume.value",defaultValue:t.volume.value}),l.a.createElement("input",{type:"string",name:"volume.unit",defaultValue:t.volume.unit})):"",t.ferment?l.a.createElement("div",null,l.a.createElement("label",null,"Ferment"),l.a.createElement("input",{type:"string",name:"ferment.temp",defaultValue:t.ferment.temp}),l.a.createElement("input",{type:"string",name:"ferment.duration",defaultValue:t.ferment.duration})):"",t.ingredients?l.a.createElement("div",null," ",l.a.createElement("label",null," ingredients: "),l.a.createElement(y,{lactoFerment:t,set:n,match:e.match.params.id,updater:r,setUpdater:u})):"",l.a.createElement("button",{type:"submit"},"submit")))},key:"LactoRecipeEdit",path:"/lactoferments/:id/edit"},{Component:function(e){const[t,n]=Object(a.useState)({});Object(a.useEffect)(()=>{E((function*(){try{const t=yield fetch("/api/beers/".concat(e.match.params.id),{method:"GET"}),a=yield t.json();n(a)}catch(e){console.error(e)}}))()},[]);const r=Object(a.useRef)(null),u=Object(a.useRef)(null),c=Object(a.useRef)(null),i=Object(a.useRef)(null),o=Object(a.useRef)(null),m=Object(a.useRef)(null),s=Object(a.useRef)(null),p=Object(a.useRef)(null),d=Object(a.useRef)(null),f=Object(a.useRef)(null),b=Object(a.useRef)(null),v=Object(a.useRef)(null),y=Object(a.useRef)(null),h=Object(a.useRef)(null),g=Object(a.useRef)(null),j=Object(a.useRef)(null),O=Object(a.useRef)(null),k=Object(a.useRef)(null),R=Object(a.useRef)(null),w=Object(a.useRef)(null),x=Object(a.useRef)(null),C=Object(a.useRef)(null),N=function(){var t=E((function*(t){t.preventDefault();try{const t=yield fetch("/api/beers/".concat(e.match.params.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:k.current.value,style:R.current.value,description:w.current.value,abv:x.current.value,ibu:C.current.value,volume:{value:r.current.value,unit:u.current.value},boil:{value:c.current.value,unit:i.current.value},method:{mash:{temp:o.current.value,duration:m.current.value},ferment:{temp:s.current.value,time:p.current.value}},ingredients:{malt:[{amount:{value:d.current.value,unit:f.current.value},name:b.current.value}],hops:[{amount:{value:v.current.value,unit:y.current.value},name:h.current.value,add:g.current.value,attribute:j.current.value}],yeast:O.current.value}})}),a=yield t.json();n(a)}catch(e){console.error(e)}finally{window.location.assign("/beers")}}));return function(e){return t.apply(this,arguments)}}(),V=function(){var t=E((function*(t){t.preventDefault();try{const t=yield fetch("/api/beers/".concat(e.match.params.id),{method:"DELETE",header:{"content-Type":"application/json"}});yield t.json()}catch(e){console.error(e)}finally{window.location.assign("/")}}));return function(e){return t.apply(this,arguments)}}();return console.log(t),l.a.createElement("div",{className:"beerEditForm"},l.a.createElement("form",{onSubmit:N},l.a.createElement("label",null,"Brew Name",l.a.createElement("input",{type:"text",ref:k,defaultValue:t.name})),l.a.createElement("label",null,"Style",l.a.createElement("input",{type:"text",ref:R,defaultValue:t.style})),l.a.createElement("label",null,"Description",l.a.createElement("input",{type:"text",ref:w,defaultValue:t.description})),l.a.createElement("label",null,"abv",l.a.createElement("input",{type:"number",ref:x,defaultValue:t.abv})),l.a.createElement("label",null,"ibu",l.a.createElement("input",{type:"number",ref:C,defaultValue:t.ibu})),Object.keys(t).length>1?l.a.createElement("label",null,"Volume amount",l.a.createElement("input",{type:"number",ref:r,defaultValue:t.volume.value})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Volume unit",l.a.createElement("input",{type:"text",ref:u,defaultValue:t.volume.unit})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Boil amount",l.a.createElement("input",{type:"number",ref:c,defaultValue:t.boil.value})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Boil unit",l.a.createElement("input",{type:"text",ref:i,defaultValue:t.boil.unit})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Mash tempature",l.a.createElement("input",{type:"number",ref:o,defaultValue:t.method.mash.temp})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Mash duration ","(mins)",l.a.createElement("input",{type:"number",ref:m,defaultValue:t.method.mash.duration})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Fermentaion temp ","(C)",l.a.createElement("input",{type:"text",ref:s,defaultValue:t.method.ferment.temp})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Fermentation duration",l.a.createElement("input",{type:"text",ref:p,defaultValue:t.method.ferment.time})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Malt name",l.a.createElement("input",{type:"text",ref:b,defaultValue:t.ingredients.malt[0].name})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Malt amount",l.a.createElement("input",{type:"number",ref:d,defaultValue:t.ingredients.malt[0].amount.value})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Malt unit",l.a.createElement("input",{type:"text",ref:f,defaultValue:t.ingredients.malt[0].amount.unit})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Hop Name",l.a.createElement("input",{type:"text",ref:h,defaultValue:t.ingredients.hops[0].name})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Hop amount",l.a.createElement("input",{type:"number",ref:v,defaultValue:t.ingredients.hops[0].amount.value})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Hop unit",l.a.createElement("input",{type:"text",ref:y,defaultValue:t.ingredients.hops[0].amount.unit})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Hop add",l.a.createElement("input",{type:"text",ref:g,defaultValue:t.ingredients.hops[0].add})):"",Object.keys(t).length>1?l.a.createElement("label",null,"Hop attribute",l.a.createElement("input",{type:"text",ref:j,defaultValue:t.ingredients.hops[0].attribute})):"",Object.keys(t).length>1?l.a.createElement("label",null,"yeast",l.a.createElement("input",{type:"text",ref:O,defaultValue:t.ingredients.yeast})):"",l.a.createElement("span",{className:"button"},l.a.createElement("label",null,"Update recipe:",l.a.createElement("input",{type:"submit"})))),l.a.createElement("button",{onClick:V}," Delete Beer Recipe "))},key:"BeerRecipeEdit",path:"/beers/:id/edit"},{Component:function(e){const[t,n]=Object(a.useState)({});return Object(a.useEffect)(()=>{var t;(t=function*(){try{const t=yield fetch("/api/lactoferments/".concat(e.match.params.id)),a=yield t.json();n(a),console.log(a),console.log("looking for the ID",e.match.params.id)}catch(e){console.error(e)}},function(){var e=this,n=arguments;return new Promise((function(a,l){var r=t.apply(e,n);function u(e){p(r,a,l,u,c,"next",e)}function c(e){p(r,a,l,u,c,"throw",e)}u(void 0)}))})()},[]),l.a.createElement("div",{className:"lacto-recipe"},l.a.createElement("div",{className:"recipe-head"},l.a.createElement("h1",null," ",t.name?t.name:""),l.a.createElement("h3",null," ",t.description?t.description:"")),l.a.createElement("div",{className:"recipe-body"},l.a.createElement("h4",null," ingredients "),l.a.createElement("div",null,t.name?t.ingredients.main.map((e,t)=>l.a.createElement("li",{key:"".concat(e.name).concat(t)},e.name," :: ",e.value," ",e.unit)):"",t.name?l.a.createElement("li",{key:"Salt".concat(t._id)},"Salt :: ",t.ingredients.salt.value," ",t.ingredients.salt.unit):"",t.name?l.a.createElement("div",null,l.a.createElement("h4",null,"Other ingredients | Spice | Aromatics:"),l.a.createElement("ul",null,t.ingredients.other.map(e=>l.a.createElement("li",{key:"".concat(e._id).concat(e.name)},e.name," :: ",e.value," ",e.unit)))):""),t.name?l.a.createElement("div",null,t.volume?l.a.createElement("div",null,l.a.createElement("h4",null," Volume "),t.volume.value," - ",t.volume.unit):""):"",l.a.createElement("h4",null," Method"),t.method?l.a.createElement("div",null,l.a.createElement("p",null," ","Ferment at ",t.ferment.temp,"degrees for"," ",t.ferment.duration)):""),l.a.createElement(c.b,{to:"/lactoferments/".concat(e.match.params.id,"/edit"),state:t}," ","Update Recipe"," "))},key:"LactoRecipe",path:"/lactoferments/:id"},{Component:function(e){const[t,n]=Object(a.useState)({}),[r,u]=Object(a.useState)([]);Object(a.useEffect)(()=>{f((function*(){try{const t=yield fetch("/api/beers/".concat(e.match.params.id)),a=yield t.json();n(a),u([...a.notes])}catch(e){console.error(e)}}))()},[][r]);const i=Object(a.useRef)(null),o=Object(a.useRef)(null),m=function(){var e=f((function*(e){e.preventDefault();try{const e=yield fetch("/api/brewlogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:i.current.value,notes:o.current.value,beerID:t._id})}),n=yield e.json();u([n])}catch(e){console.error(e)}finally{i.current.value="",o.current.value=""}}));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=f((function*(e){e.preventDefault();try{const t=yield fetch("/api/brewlogs/".concat(e.target.id),{method:"DELETE",headers:{"Content-Type":"application/json"}}),n=yield t.json();u([n])}catch(e){console.error(e)}}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"beer-recipe"},l.a.createElement("div",{className:"recipe-head"},t.name?l.a.createElement("h1",null,t.name):"",t.style?l.a.createElement("h2",null,t.style):"",t.description?l.a.createElement("p",null,t.description):"",t.abv?l.a.createElement("h4",null," abv: ",t.abv):"",t.ibu?l.a.createElement("h4",null," ibu: ",t.ibu):""),l.a.createElement("div",null," ",l.a.createElement("h2",null," ingredients"),l.a.createElement("h4",null," Grain Bill/ Malts"),t.ingredients?l.a.createElement("div",null,t.ingredients.malt.map((e,t)=>l.a.createElement("p",{key:"".concat(e.name).concat(t)}," ",e.name," :: ",e.amount.value," ",e.amount.unit))):"",l.a.createElement("h4",null,"Hops"),t.ingredients?l.a.createElement("div",null,t.ingredients.hops.map((e,t)=>l.a.createElement("div",{key:"".concat(e.name).concat(t)},l.a.createElement("h5",null,e.name)," ",l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",{key:"".concat(e.amount.unit).concat(t)},e.amount.value," ",e.amount.unit),l.a.createElement("li",{key:e.add},"add: ",e.add),l.a.createElement("li",{key:e.attribute}," attribute: ",e.attribute))))):"",l.a.createElement("h4",null," Yeast"),t.ingredients?l.a.createElement("p",null," ",t.ingredients.yeast):""),l.a.createElement("div",{className:"instructions"},l.a.createElement("h3",null," Yeild"),t.volume?l.a.createElement("div",null,l.a.createElement("p",null," ","Makes : ",t.volume.value," ",t.volume.unit)):"",t.boil?l.a.createElement("div",null,l.a.createElement("p",null," ","Boil : ",t.boil.value," ",t.boil.unit," ")):"",l.a.createElement("h3",null,"Mash"),t.method?l.a.createElement("div",null,l.a.createElement("p",null," ","steep gains at ",t.method.mash.temp,"C for"," ",t.method.mash.duration," mins"," ")):"",l.a.createElement("h3",null,"Ferment"),t.method?l.a.createElement("div",null,l.a.createElement("p",null," ","ferment at ",t.method.ferment.temp,"C for"," ",t.method.ferment.time," ")):""),l.a.createElement(c.b,{to:"/beers/".concat(e.match.params.id,"/edit")}," Update Recipe "),l.a.createElement("div",null,l.a.createElement("h2",null," Notes:"),l.a.createElement("form",{onSubmit:m},l.a.createElement("label",null,"Title:",l.a.createElement("input",{type:"text",ref:i})),l.a.createElement("label",null,"Notes:",l.a.createElement("input",{type:"text-area",ref:o})),l.a.createElement("input",{type:"submit",vale:"add notes"})),l.a.createElement("ul",null,t.notes?t.notes.map((e,t)=>l.a.createElement("li",{key:"".concat(e._id).concat(t)},l.a.createElement("h4",null," ",e.title),l.a.createElement("p",null,e.notes),l.a.createElement("small",null,e.createdAt),l.a.createElement("button",{onClick:s,id:e._id},"Remove note"))):"")))},key:"BeerRecipe",path:"/beers/:id"},{Component:function(e){const[t,n]=Object(a.useState)([]);return Object(a.useEffect)(()=>{var e;(e=function*(){try{const e=yield fetch("/api/lactoferments"),t=yield e.json();n(t)}catch(e){console.error(e)}},function(){var t=this,n=arguments;return new Promise((function(a,l){var r=e.apply(t,n);function u(e){m(r,a,l,u,c,"next",e)}function c(e){m(r,a,l,u,c,"throw",e)}u(void 0)}))})()},[]),l.a.createElement("div",{className:"LactoFerments"},l.a.createElement("h1",null," Lacto Ferments"),l.a.createElement("ul",null,t.map(e=>l.a.createElement(c.b,{to:"/lactoferments/".concat(e._id),key:"".concat(e._id).concat(e.name)},l.a.createElement("li",null," ",e.name," ")," "))))},key:"LactoFerments",path:"/lactoferments"},{Component:function(e){const[t,n]=Object(a.useState)([]);return Object(a.useEffect)(()=>{var e;(e=function*(){try{const e=yield fetch("/api/beers"),t=yield e.json();n(t)}catch(e){console.error(e)}},function(){var t=this,n=arguments;return new Promise((function(a,l){var r=e.apply(t,n);function u(e){s(r,a,l,u,c,"next",e)}function c(e){s(r,a,l,u,c,"throw",e)}u(void 0)}))})()},[]),l.a.createElement("div",{className:"Beer-Recipes"},l.a.createElement("h1",null," Beer Recipes"),l.a.createElement("ul",null,t.map(t=>l.a.createElement(c.b,{to:"/beers/".concat(t._id),key:"".concat(t._id).concat(t.name),props:e},l.a.createElement("li",null," ",t.name," ")," "))))},key:"Beers",path:"/beers"},{Component:function(e){return l.a.createElement("div",{className:"AppPage"},l.a.createElement("h1",null," - Fermenter - "),l.a.createElement("p",null," ","Welcome to Fermenter, a recipe managment application for home brewers & fermenters."))},key:"App",path:"/"}];function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var x=e=>l.a.createElement(c.a,null,l.a.createElement(i,{routes:R}),l.a.createElement(o.c,null,R.map(e=>{let{Component:t,key:n,path:a}=e;return l.a.createElement(o.a,{key:n,path:a,component:e=>l.a.createElement(t,w({page:n},e))})})));n(34);const C=document.getElementById("app");u.a.render(l.a.createElement(x,null),C)}});