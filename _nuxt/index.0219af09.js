import{u as f}from"./recipes.81a8b779.js";import{_ as m}from"./nuxt-link.df30fe4c.js";import{a as u,o as t,b as i,e,f as _,w as d,h as r,t as o,i as y,p as v,j as g,k as x,u as n,c as k,F as $,r as b}from"./entry.b7dddf21.js";const R={class:"card_recipe"},N={class:"card_recipe-img"},S=["src","alt"],B={class:"card_recipe-info"},C={class:"flex items-center"},I={class:"info-ingredients"},w=e("i",{class:"info-ingredients-icon"},null,-1),E={class:"info-ingredients-text"},L={class:"info-time"},V=e("i",{class:"info-time-icon"},null,-1),F={class:"info-time-text"},j={class:"card_recipe-description break_text"},z=u({__name:"CardRecipe",props:{recipe:{}},setup(c){return(s,a)=>{const p=m;return t(),i("div",R,[e("div",N,[_(p,{to:"/recipe/"+s.recipe.id},{default:d(()=>[e("img",{src:s.recipe.image,alt:s.recipe.name,loading:"lazy"},null,8,S)]),_:1},8,["to"])]),_(p,{to:"/recipe/"+s.recipe.id,class:"card_recipe-name font-bold"},{default:d(()=>[r(o(s.recipe.name),1)]),_:1},8,["to"]),e("div",B,[e("div",C,[e("span",I,[w,e("span",E,o(s.recipe.ingredients.length),1)]),e("span",L,[V,e("span",F,o(s.recipe.time),1)])])]),e("p",j,o(s.recipe.description),1)])}}});const D={},h=c=>(v("data-v-5c8c4c17"),c=c(),g(),c),M={class:"recipes_empty text-center"},T=h(()=>e("h5",{class:"font-bold recipes_empty-title"}," Пока нет рецептов ",-1)),q=h(()=>e("p",{class:"recipes_empty-description"},[r(" Создайте свою первую категорию"),e("br"),r(" и добавьте в неё статьи. ")],-1));function A(c,s){const a=m;return t(),i("div",M,[T,q,_(a,{class:"btn primary recipes_empty-add",to:"/recipe"},{default:d(()=>[r(" Добавить ")]),_:1})])}const G=y(D,[["render",A],["__scopeId","data-v-5c8c4c17"]]),H={class:"recipes"},J={key:1},K=e("h1",{class:"recipes-title font-bold title title-section"}," Рецепты ",-1),O={class:"recipes-list flex items-center"},W=u({__name:"index",setup(c){const s=f();return x(()=>{s.loadRecipes(),console.log("hello")}),(a,p)=>(t(),i("div",H,[e("div",null,[n(s).recipes[0]?(t(),i("div",J,[K,e("ul",O,[(t(!0),i($,null,b(n(s).recipes,l=>(t(),i("li",{class:"recipes-list-item",key:l.id},[_(n(z),{recipe:l},null,8,["recipe"])]))),128))])])):(t(),k(n(G),{key:0}))])]))}});export{W as default};
