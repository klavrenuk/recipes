import{b as i,o as s,e as l,k as _,m as u,l as p,h as t,F as y,r as m,t as b,q as n,v as k,s as d,x as v,c as f,u as h,p as x,f as g}from"./entry.e5c42f2b.js";const I={},V={class:"list_items"};function L(a,o){return s(),l("div",V," List Itmes ")}const w=i(I,[["render",L]]),B=a=>(x("data-v-cdb2755e"),a=a(),g(),a),C={class:"recipe"},S={class:"grid grid-cols-2 gap-6"},U=["for"],D=["placeholder","type","id","onUpdate:modelValue"],M=["id","placeholder","onUpdate:modelValue"],F=B(()=>t("div",{class:"recipe-control flex"},[t("button",{class:"btn"},"Очистить"),t("button",{class:"btn primary"},"Сохранить")],-1)),N=_({__name:"index",setup(a){const o=[{key:"name",label:"Имя",type:"input",subtype:"text"},{key:"image",label:"Картинка",type:"image"},{key:"ingredients",label:"Ингредиенты",type:"listItems"},{key:"time",label:"Время готовка(мин)",type:"input",subtype:"number"},{key:"description",label:"Описание",type:"textarea"}],c=u({});return p(()=>{}),($,q)=>(s(),l("div",C,[t("form",null,[t("div",S,[(s(),l(y,null,m(o,e=>t("div",{class:"form-group",key:e.key},[t("label",{class:"form-group-label font-bold",for:e.key},b(e.label),9,U),e.type==="input"?n((s(),l("input",{key:0,placeholder:"Введите "+e.label.toLowerCase(),type:e.subtype,id:e.key,class:"recipe_input","onUpdate:modelValue":r=>c.value[e.key]=r},null,8,D)),[[k,c.value[e.key],void 0,{trim:!0}]]):d("",!0),e.type==="textarea"?n((s(),l("textarea",{key:1,id:e.key,placeholder:"Введите "+e.label.toLowerCase(),"onUpdate:modelValue":r=>c.value[e.key]=r,class:"recipe_textarea"},null,8,M)),[[v,c.value[e.key],void 0,{trim:!0}]]):d("",!0),e.type==="listItems"?(s(),f(h(w),{key:2})):d("",!0)])),64))])]),F]))}});const T=i(N,[["__scopeId","data-v-cdb2755e"]]);export{T as default};
