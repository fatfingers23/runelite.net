import{e,A as a,N as l,M as c,h as d}from"./index-d1184385.js";import{a as m}from"./index-42972cf9.js";import{L as h}from"./layout-28bd1606.js";import{g as p}from"./blog-daec9d9c.js";import{I as g}from"./inner-html-helper-2b71db43.js";const f=({date:t,title:o,description:i,author:r,body:n,image:s})=>n?e(h,{children:[e(c,{title:`${o} - ${d.title}`,description:i,author:r,image:s,type:"article"}),e("section",{id:"blog",children:e("div",{class:"content-section",children:[e("div",{class:"page-header",children:[e("h1",{children:o}),e("p",{class:"text-muted",children:[e("span",{title:t,children:m(t)})," by ",r]})]}),e("div",{class:"markdown-body news-page",children:e(g,{tagName:"div",html:n})})]})})]}):e(l,{}),L=({id:t})=>e(a,{getComponent:()=>p(t).then(f)});export{L as default};