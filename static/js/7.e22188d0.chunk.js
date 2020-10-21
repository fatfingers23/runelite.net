(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[7],{460:function(t,e,n){"use strict";function c(t,e){if(null==t)return{};var n,c,a=function(t,e){if(null==t)return{};var n,c,a={},r=Object.keys(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}n.d(e,"a",(function(){return c}))},461:function(t,e,n){"use strict";var c=n(2),a=n(460),r=n(0),i=n(56),s=function(){return Object(r.h)("section",{id:"footer"},Object(r.h)("div",{class:"content-section"},Object(r.h)("footer",null,Object(r.h)("hr",null),"Developed with ",Object(r.h)("i",{class:"fas fa-heart"})," and"," ",Object(r.h)("i",{class:"fas fa-coffee"})," using"," ",Object(r.h)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(r.h)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(r.h)("a",{href:"https://fontawesome.com/"},"Font Awesome"),Object(r.h)("a",{href:"".concat(Object(i.c)(),"/atom.xml"),class:"float-right"},Object(r.h)("i",{class:"fas fa-rss"})," Subscribe via RSS"))))};e.a=function(t){var e=t.children,n=t.fullWidth,i=Object(a.a)(t,["children","fullWidth"]);return i.class=i.class?"container "+i.class:"container",i.style=Object(c.a)(Object(c.a)({},i.style||{}),{},{maxWidth:n?"100%":""}),Object(r.h)("div",Object.assign({},i,{id:"layout"}),e,Object(r.h)(s,null))}},462:function(t,e,n){"use strict";var c=n(95),a=n(96),r=n(100),i=n(99),s=n(0);e.a=function(t){return function(e){return function(n){Object(r.a)(u,n);var l=Object(i.a)(u);function u(){return Object(c.a)(this,u),l.apply(this,arguments)}return Object(a.a)(u,[{key:"componentDidMount",value:function(){t(this.props)}},{key:"render",value:function(t){return Object(s.h)(e,t)}}]),u}(s.a)}}},467:function(t,e,n){},587:function(t,e,n){"use strict";var c=n(0);n(591);e.a=function(t){var e=t.value,n=t.onInput;return Object(c.h)("div",{class:"search input-group mb-3"},Object(c.h)("div",{class:"input-group-prepend"},Object(c.h)("span",{class:"input-group-text"},Object(c.h)("i",{class:"fas fa-search"}))),Object(c.h)("input",{type:"text",class:"form-control",placeholder:"Search...",value:e,onInput:n,ref:function(t){return t&&t.focus()}}))}},591:function(t,e,n){},726:function(t,e,n){"use strict";n.r(e);var c=n(4),a=n.n(c),r=n(9),i=n(2),s=n(0),l=n(98),u=n(33),o=n(462),b=n(461),h=(n(467),n(56)),d=function(t){var e=t.displayName,n=t.author,c=t.description,a=t.support,r=t.imageUrl,i=t.installed,l=t.count;return Object(s.h)("div",{class:"col-md-4 col-sm-6 col-xs-12 mb-2"},Object(s.h)("div",{class:"card"},Object(s.h)("div",{class:"card-body d-flex align-self-stretch"},Object(s.h)("div",{class:"m-2"},Object(s.h)("img",{width:"36",alt:"",src:r||"/img/plugin-hub/missingicon.png"})),Object(s.h)("div",null,Object(s.h)("h5",{class:"card-title"},a?Object(s.h)("a",{href:a,alt:"Support link",rel:"noopener noreferrer",target:"_blank"},e):e),Object(s.h)("h6",{class:"card-subtitle mb-2 text-muted"},Object(s.h)("a",{href:"/plugin-hub/".concat(n)},n)),l>0&&Object(s.h)("p",{class:"card-text"},Object(s.h)("span",{class:"badge badge-primary"},Object(h.d)(l)," ",l>1?"active installs":"active install")," ",i&&Object(s.h)("span",{class:"badge badge-success"},"installed")),Object(s.h)("p",{class:"card-text"},c.replace(/<br\/?>/g,"\n").replace(/<[^>]+>/g,""))))))},f=n(97),O=n.n(f),j=n(157),p=n(19),g=n(228),v=n(587),m=n(101),y=function(t){var e=t.prefix,n=t.choices,c=t.value,a=t.onClick;return Object(s.h)("div",{class:"dropdown"},Object(s.h)("button",{class:"dropdown-toggle btn btn-block btn-dark",id:"choice"+e},e," ",c),Object(s.h)("div",{class:"dropdown-menu"},n.map((function(t){return Object(s.h)("button",{class:"dropdown-item",onClick:function(){return a(t)}},e," ",t)}))))},w="The Plugin Hub is a repository of plugins that are created and maintained by members of the community who are not officially affiliated with RuneLite. These plugins are verified by RuneLite Developers to ensure they comply with Jagex's 3rd party client rules and are not malicious in some other way.",x=function(){var t=Object(r.a)(a.a.mark((function t(e){var n,c,r,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.fetchBootstrap,c=e.fetchConfig,r=e.fetchExternalPlugins,i=e.fetchPluginHubStats,t.next=3,n();case 3:return t.next=5,c();case 5:return t.next=7,r();case 7:return t.next=9,i();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.default=Object(l.b)((function(t,e){return Object(i.a)(Object(i.a)({},e),{},{externalPlugins:Object(g.f)(t),pluginFilter:Object(g.d)(t),pluginSorting:Object(g.e)(t)})}),(function(t){return Object(u.b)({fetchBootstrap:p.b,fetchConfig:m.c,fetchExternalPlugins:g.b,fetchPluginHubStats:g.c,setPluginFilter:g.g,setPluginSorting:g.h},t)}))(Object(o.a)(x)((function(t){var e=t.author,n=t.externalPlugins,c=t.pluginFilter,a=t.pluginSorting,r=t.setPluginFilter,i=t.setPluginSorting,l=(n=n.filter((function(t){return!e||t.author===e}))).length,u=n.filter((function(t){return t.installed})).length,o=n.reduce((function(t,e){return t+e.count}),0);return Object(s.h)(b.a,null,Object(s.h)(j.a,{title:"".concat(e?e+" ":"","Plugin Hub - ").concat(O.a.title),description:w}),Object(s.h)("section",{id:"externalPlugins"},Object(s.h)("div",{class:"content-section"},Object(s.h)("h1",{class:"page-header"},e?e+" ":"","Plugin Hub"),Object(s.h)("div",{class:"row"},Object(s.h)("div",{class:"col-sm-8"},Object(s.h)("p",null,w),Object(s.h)("p",null,"For more information about the Plugin Hub and how to install these plugins, read the"," ",Object(s.h)("a",{href:"https://github.com/runelite/runelite/wiki/Information-about-the-Plugin-Hub"},"guide on our wiki"),".")),Object(s.h)("div",{class:"col-sm-4"},o>0&&Object(s.h)("div",{class:"btn btn-block btn-dark disabled"},Object(s.h)("b",null,Object(h.d)(o))," ",o>1?"active installs":"active install"),l>0&&Object(s.h)("div",{class:"btn btn-block btn-dark disabled"},Object(s.h)("b",null,Object(h.d)(l))," ",l>1?"plugins":"plugin"),u>0&&Object(s.h)("div",{class:"btn btn-block btn-dark disabled"},Object(s.h)("b",null,Object(h.d)(u))," ",u>1?"installed plugins":"installed plugin"))),Object(s.h)("div",{class:"row"},Object(s.h)("div",{class:"col-sm-8"},Object(s.h)(v.a,{value:c.name,onInput:function(t){return function(t,e){return e({name:t.target.value})}(t,r)}})),Object(s.h)("div",{class:"col-sm-4"},Object(s.h)(y,{prefix:"Sort by",value:a,choices:["active installs","name"],onClick:i}))),Object(s.h)("div",{class:"row"},n.map((function(t){return Object(s.h)(d,Object.assign({key:t.internalName},t))}))))))})))}}]);
//# sourceMappingURL=7.e22188d0.chunk.js.map