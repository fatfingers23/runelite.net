import{u as f}from"./index-d1184385.js";function o(n,u,a,t,m,s){var r=Math.round(Math.abs(n)/u);return s?r<=1?m:"in "+r+" "+a+"s":r<=1?t:r+" "+a+"s ago"}var e=[{max:276e4,value:6e4,name:"minute",past:"a minute ago",future:"in a minute"},{max:72e6,value:36e5,name:"hour",past:"an hour ago",future:"in an hour"},{max:5184e5,value:864e5,name:"day",past:"yesterday",future:"tomorrow"},{max:24192e5,value:6048e5,name:"week",past:"last week",future:"in a week"},{max:28512e6,value:2592e6,name:"month",past:"last month",future:"in a month"}],l=function(u){var a=Date.now()-u.getTime();if(Math.abs(a)<6e4)return"just now";for(var t=0;t<e.length;t++)if(Math.abs(a)<e[t].max)return o(a,e[t].value,e[t].name,e[t].past,e[t].future,a<0);return o(a,31536e6,"year","last year","in a year",a<0)};const h=f(l);export{h as a};