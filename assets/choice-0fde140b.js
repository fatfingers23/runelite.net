import{e as c}from"./index-d1184385.js";const d=({value:s,onInput:r})=>c("div",{class:"search input-group mb-3",children:[c("div",{class:"input-group-prepend",children:c("span",{class:"input-group-text",children:c("i",{class:"fas fa-search"})})}),c("input",{type:"text",class:"form-control",placeholder:"Search...",value:s,onInput:r,ref:o=>o&&o.focus()})]}),t=({prefix:s,choices:r,value:o,onClick:a})=>c("div",{class:"dropdown",children:[c("button",{class:"dropdown-toggle btn btn-block btn-dark",id:"choice"+s,children:[s," ",o]}),c("div",{class:"dropdown-menu",children:r.map(n=>c("button",{class:"dropdown-item",onClick:()=>a(n),children:[s," ",n]}))})]});export{t as C,d as S};