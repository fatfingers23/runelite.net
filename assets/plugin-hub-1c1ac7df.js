import{e as i,d as o,f as h,c as b,M as f,h as v,J as P,K as w,O as y,b as C,p as x,P as S,Q as k,R as H,S as T,T as F}from"./index-d1184385.js";import{p as L}from"./prepare-be1076f7.js";import{L as N}from"./layout-28bd1606.js";/* empty css                *//* empty css                */import{S as E,C as $}from"./choice-0fde140b.js";const B=({displayName:e,author:t,description:c,internalName:r,imageUrl:d,installed:u,count:n,working:a,unavailableReason:s})=>i("div",{class:"col-md-4 col-sm-6 col-xs-12 mb-2",children:i("div",{class:"card",children:i("div",{class:"card-body d-flex align-self-stretch",children:[i("div",{className:"mr-2 d-flex align-items-start",children:i("img",{width:"36",alt:"",src:d||"/img/plugin-hub/missingicon.png"})}),i("div",{children:[i("h5",{class:"card-title",children:i("a",{href:`/plugin-hub/show/${r}`,children:e})}),i("h6",{class:"card-subtitle mb-2 text-muted",children:i("a",{href:`/plugin-hub/${t}`,children:t})}),i("p",{class:"card-text",children:[n>0&&i(o,{children:[i("span",{class:"badge badge-primary",children:[h(n)," ",n>1?"active installs":"active install"]})," "]}),u&&i(o,{children:[i("span",{class:"badge badge-success",children:"installed"})," "]}),!a&&i("div",{className:"tooltip-tag",children:[i("div",{className:"tooltip-tag-text tooltip-tag-text-simple",children:s?i(o,{children:s}):i(o,{children:"The plugin is incompatible with the latest RuneLite version, and requires its author to update it."})}),i("div",{children:i("span",{className:"badge badge-danger",children:"unavailable"})})]})]}),i("p",{class:"card-text",children:c})]})]})})}),g="The Plugin Hub is a repository of plugins that are created and maintained by members of the community who are not officially affiliated with RuneLite. These plugins are verified by RuneLite Developers to ensure they comply with Jagex's 3rd party client rules and are not malicious in some other way.",D=(e,t)=>t({name:e.target.value}),R=({author:e,externalPlugins:t,pluginFilter:c,pluginSorting:r,setPluginFilter:d,setPluginSorting:u})=>{t=t.filter(l=>e?l.author===e:!0);const n=t.length,a=t.filter(l=>l.installed).length,s=t.reduce((l,m)=>l+m.count,0),p=["active installs","name","time updated","time added"];return a>0&&p.push("installed"),i(N,{children:[i(f,{title:`${e?e+" ":""}Plugin Hub - ${v.title}`,description:g}),i("section",{id:"externalPlugins",children:i("div",{class:"content-section pb-0",children:[i("h1",{class:"page-header",children:[e?e+" ":"","Plugin Hub"]}),i("div",{class:"row",children:[i("div",{class:"col-sm-8",children:[i("p",{children:g}),i("p",{children:["For more information about the Plugin Hub and how to install these plugins, read the"," ",i("a",{href:"https://github.com/runelite/runelite/wiki/Information-about-the-Plugin-Hub",children:"guide on our wiki"}),"."]})]}),i("div",{class:"col-sm-4",children:[s>0&&i("div",{class:"btn btn-block btn-dark disabled",children:[i("b",{children:h(s)})," ",s>1?"active installs":"active install"]}),n>0&&i("div",{class:"btn btn-block btn-dark disabled",children:[i("b",{children:h(n)})," ",n>1?"plugins":"plugin"]}),a>0&&i("div",{class:"btn btn-block btn-dark disabled",children:[i("b",{children:h(a)})," ",a>1?"installed plugins":"installed plugin"]})]})]}),i("div",{class:"row",children:[i("div",{class:"col-sm-8",children:i(E,{value:c.name,onInput:l=>D(l,d)})}),i("div",{class:"col-sm-4",children:i($,{prefix:"Sort by",value:r,choices:p,onClick:u})})]}),i("div",{class:"row",children:t.map(l=>i(B,{...l},l.internalName))})]})})]})},I=(e,t)=>({...t,externalPlugins:P(e),pluginFilter:w(e),pluginSorting:y(e)}),J=e=>C({fetchBootstrap:x,fetchConfig:S,fetchExternalPlugins:k,fetchPluginHubStats:H,setPluginFilter:T,setPluginSorting:F},e),M=async({fetchBootstrap:e,fetchConfig:t,fetchExternalPlugins:c,fetchPluginHubStats:r})=>{await e(),await t(),await c(),await r()},j=b(I,J)(L(M)(R));export{j as default};
