import{e,M as r,h as c,A as m,L as d}from"./index-d1184385.js";import{a as h}from"./index-42972cf9.js";import{L as g}from"./layout-28bd1606.js";import{b as l}from"./blog-daec9d9c.js";const y=()=>e(g,{children:[e(r,{title:`Blog - ${c.title}`,description:"Latest RuneLite news and updates"}),e("section",{id:"blog-list",children:e("div",{class:"content-section",children:[e("h1",{class:"page-header",children:"Blog"}),e("ul",{class:"list-group",children:Array.from(l.keys()).map(s=>e(m,{getComponent:()=>l.get(s)().then(({id:t,date:a,title:i,description:o,author:n})=>e(d,{class:"list-group-item list-group-item-action flex-column align-items-start",activeClassName:"active",href:`/blog/show/${t}`,children:[e("div",{class:"d-flex w-100 justify-content-between",children:[e("h5",{class:"mb-1",children:i||t}),e("small",{class:"text-muted",children:[h(a)," by ",n]})]}),e("p",{class:"mb-1 text-muted",children:o})]},t))},s))})]})})]});export{y as default};
