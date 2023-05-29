import{a as I,m as d,o as n,b as c,F as L,r as R,e as o,v as b,x as F,s as x,i as V,t as C,q as f,k as $,c as h,u as k,f as N,h as w,y as U,p as q,j as S}from"./entry.b7dddf21.js";import{u as D}from"./recipes.81a8b779.js";import{L as B}from"./LoaderFullHeight.6fd1937c.js";import{_ as A}from"./CrumbsGeneral.vue.513bca09.js";import"./nuxt-link.df30fe4c.js";const M={class:"list_items"},T={class:"flex justify-between items-center gap-6"},j=["onUpdate:modelValue"],z=["onClick"],E=I({__name:"ListItems",setup(v,{expose:m}){const e=d([""]),u=d([]),_=()=>e.value.push(""),r=s=>e.value.splice(s,1),p=()=>{u.value=[];for(let s=0;s<e.value.length;s++){const a=e.value[s];(!a||!a.trim())&&u.value.push(s)}return u.value.length===0};return m({getValue:()=>p()?e.value:null}),(s,a)=>(n(),c("ul",M,[(n(!0),c(L,null,R(e.value,(l,i)=>(n(),c("li",{class:"list_items-item",key:"item-"+i},[o("div",T,[b(o("input",{placeholder:"Введите значение",class:x(["recipe_input",{invalid:u.value.includes(i)}]),"onUpdate:modelValue":t=>e.value[i]=t},null,10,j),[[F,e.value[i]]]),o("button",{class:"btn btn-icon list_items-item-icon",type:"button",onClick:t=>r(i)},null,8,z)])]))),128)),o("li",{class:"list_items-item"},[o("button",{class:"btn primary",onClick:_},"Добавить")])]))}});const H=V(E,[["__scopeId","data-v-257e954f"]]),O={class:"load_file"},G={key:0,class:"load_file-name"},J=I({__name:"LoadFile",setup(v,{expose:m}){const e=d(null),u=d(null),_=d(null),r=()=>_.value,p=s=>{const a=s.target;a&&a.files?(e.value=a.files[0],u.value=e.value.name,y()):(u.value=null,_.value=null)},y=()=>{const s=new FileReader;s.onload=a=>{const l=a.target.result;_.value=l},e.value&&s.readAsDataURL(e.value)};return m({getValue:r}),(s,a)=>(n(),c("div",O,[o("input",{type:"file",id:"File",ref_key:"file",ref:e,class:"load_file-input",onChange:a[0]||(a[0]=l=>p(l))},null,544),u.value?(n(),c("span",G,C(u.value),1)):f("",!0)]))}});const K=V(J,[["__scopeId","data-v-53521919"]]),P=v=>(q("data-v-5c91d4af"),v=v(),S(),v),Q={class:"recipe"},W={key:1},X={class:"grid grid-cols-1 gap-6"},Y=["for"],Z={key:0,class:"required-item"},ee=["placeholder","type","id","onUpdate:modelValue"],te=["id","placeholder","onUpdate:modelValue"],le=P(()=>o("button",{class:"btn btn-link"},"Очистить",-1)),se=I({__name:"[id]",setup(v){const m=[{key:"name",label:"Имя",type:"input",subtype:"text",isRequired:!0},{key:"image",label:"Картинка",type:"image",isRequired:!0},{key:"ingredients",label:"Ингредиенты",type:"listItems",isRequired:!0},{key:"time",label:"Время готовка(мин)",type:"input",subtype:"number"},{key:"description",label:"Описание",type:"textarea"}],e=d({}),u=d(null),_=d([]),r=d([]),p=d(!1),y=D(),s=()=>{if(r.value=[],!e.value)return!1;for(let l of m){const i=e.value[l.key];if(l.isRequired){if(!i){r.value.push(l.key),console.log("here");continue}console.log("value",i),l.subtype==="text"&&!i.trim()&&r.value.push(l.key),l.subtype==="number"&&(Number(i)||Number.isNaN(i))&&r.value.push(l.key),l.type==="listItems"&&(!Array.isArray(i)||i.length===0)&&r.value.push(l.key)}}return r.value.length===0},a=async()=>{try{if(p.value=!0,e.value.image=u.value[0].getValue(),e.value.ingredients=_.value[0].getValue(),console.log("onSave",e.value),!s())return;e.value.id||(e.value.id=new Date().getTime()),await y.create(e.value)}catch(l){console.error(l)}finally{p.value=!1}};return $(()=>{e.value=y.recipe}),(l,i)=>(n(),c("div",Q,[p.value?(n(),h(k(B),{key:0})):(n(),c("div",W,[N(k(A)),o("div",X,[(n(),c(L,null,R(m,t=>o("div",{class:x(["form-group",{invalid:r.value.includes(t.key)}]),key:t.key},[o("label",{class:"form-group-label font-bold",for:t.key},[w(C(t.label)+" ",1),t.isRequired?(n(),c("span",Z," * ")):f("",!0)],8,Y),t.type==="input"?b((n(),c("input",{key:0,placeholder:"Введите "+t.label.toLowerCase(),type:t.subtype,id:t.key,class:x(["recipe_input",{invalid:r.value.includes(t.key)}]),"onUpdate:modelValue":g=>e.value[t.key]=g},null,10,ee)),[[U,e.value[t.key],void 0,{trim:!0}]]):f("",!0),t.type==="textarea"?b((n(),c("textarea",{key:1,id:t.key,placeholder:"Введите "+t.label.toLowerCase(),"onUpdate:modelValue":g=>e.value[t.key]=g,class:"recipe_textarea"},null,8,te)),[[F,e.value[t.key],void 0,{trim:!0}]]):f("",!0),t.type==="listItems"?(n(),h(k(H),{key:2,ref_for:!0,ref_key:"RefIngredients",ref:_},null,512)):f("",!0),t.type==="image"?(n(),h(k(K),{key:3,ref_for:!0,ref_key:"RefLoadFile",ref:u},null,512)):f("",!0)],2)),64))]),o("div",{class:"recipe-control flex"},[le,o("button",{class:"btn primary",onClick:a},"Сохранить")])]))]))}});const oe=V(se,[["__scopeId","data-v-5c91d4af"]]);export{oe as default};
