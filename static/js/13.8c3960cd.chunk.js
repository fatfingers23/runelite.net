(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[13],{454:function(t,e,n){"use strict";function c(t,e){if(null==t)return{};var n,c,a=function(t,e){if(null==t)return{};var n,c,a={},i=Object.keys(t);for(c=0;c<i.length;c++)n=i[c],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(c=0;c<i.length;c++)n=i[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}n.d(e,"a",(function(){return c}))},455:function(t,e,n){"use strict";var c=n(2),a=n(454),i=n(0),r=n(53),s=function(){return Object(i.g)("section",{id:"footer"},Object(i.g)("div",{class:"content-section"},Object(i.g)("footer",null,Object(i.g)("hr",null),"Developed with ",Object(i.g)("i",{class:"fas fa-heart"})," and"," ",Object(i.g)("i",{class:"fas fa-coffee"})," using"," ",Object(i.g)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(i.g)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(i.g)("a",{href:"https://fontawesome.com/"},"Font Awesome"),Object(i.g)("a",{href:"".concat(Object(r.d)(),"/atom.xml"),class:"float-right"},Object(i.g)("i",{class:"fas fa-rss"})," Subscribe via RSS"))))},l=["children","fullWidth"];e.a=function(t){var e=t.children,n=t.fullWidth,r=Object(a.a)(t,l);return r.class=r.class?"container "+r.class:"container",r.style=Object(c.a)(Object(c.a)({},r.style||{}),{},{maxWidth:n?"100%":""}),Object(i.g)("div",Object.assign({},r,{id:"layout"}),e,Object(i.g)(s,null))}},456:function(t,e,n){"use strict";var c=n(95),a=n(96),i=n(99),r=n(98),s=n(0),l=function(){return Object(s.g)("div",{style:{display:"table",width:"100%",height:"100%"}},Object(s.g)("div",{style:{display:"table-cell",verticalAlign:"middle"}},Object(s.g)("div",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",fontWeight:700,color:"white"}},Object(s.g)("div",{class:"fa-4x"},Object(s.g)("i",{class:"fas fa-spinner fa-spin"})))))};e.a=function(t){return function(e){return function(n){Object(i.a)(o,n);var u=Object(r.a)(o);function o(){var t;return Object(c.a)(this,o),(t=u.call(this)).state={loading:!0},t}return Object(a.a)(o,[{key:"componentDidMount",value:function(){var e=this,n=t(this.props);n instanceof Promise?n.then((function(){return e.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(t){return this.state.loading?Object(s.g)(l,null):Object(s.g)(e,t)}}]),o}(s.a)}}},460:function(t,e,n){},616:function(t,e,n){"use strict";var c=n(0);e.a=function(t){var e=t.tagName,n=t.html;return Object(c.g)(e,{dangerouslySetInnerHTML:{__html:n}})}},774:function(t,e,n){"use strict";n.r(e);var c=n(4),a=n.n(c),i=n(11),r=n(2),s=n(0),l=n(97),u=n(41),o=n(456),b=n(455),g=n(34),f=n.n(g),d=n(158),O=n(21),h=n(163),j=n(100),p=n(53),m=n(616),v=n(159),y=(n(460),function(){var t=Object(i.a)(a.a.mark((function t(e){var n,c,i,r,s,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.fetchBootstrap,c=e.fetchConfig,i=e.fetchExternalPlugins,r=e.fetchExternalPluginInfo,s=e.fetchPluginHubStats,l=e.internalName,t.next=3,n();case 3:return t.next=5,c();case 5:return t.next=7,i();case 7:return t.next=9,s();case 9:return t.next=11,r(l);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());e.default=Object(l.b)((function(t,e){return Object(r.a)(Object(r.a)({},e),{},{externalPlugin:Object(h.e)(t).find((function(t){return t.internalName===e.internalName}))})}),(function(t){return Object(u.b)({fetchBootstrap:O.b,fetchConfig:j.c,fetchExternalPlugins:h.c,fetchExternalPluginInfo:h.b,fetchPluginHubStats:h.d},t)}))(Object(o.a)(y)((function(t){var e=t.externalPlugin;return e?Object(s.g)(b.a,null,Object(s.g)(d.a,{title:"".concat(e.displayName," - Plugin Hub - ").concat(f.a.title),description:e.description}),Object(s.g)("section",{id:"externalPlugins"},Object(s.g)("div",{class:"content-section dark-card"},Object(s.g)("div",{class:"card"},Object(s.g)("div",{class:"card-header card-body d-flex align-self-stretch"},Object(s.g)("div",{class:"mr-4 d-flex align-items-center"},Object(s.g)("img",{width:"36",alt:"",src:e.imageUrl?e.imageUrl:"/img/plugin-hub/missingicon.png"})),Object(s.g)("div",null,Object(s.g)("h5",{class:"card-title"},e.displayName),Object(s.g)("h6",{class:"card-subtitle mb-2 text-muted"},Object(s.g)("a",{href:"/plugin-hub/".concat(e.author)},e.author)),e.count>0&&Object(s.g)("p",{class:"card-text"},Object(s.g)("span",{class:"badge badge-primary"},Object(p.f)(e.count)," ",e.count>1?"active installs":"active install")," ",e.installed&&Object(s.g)("span",{class:"badge badge-success"},"installed"))),Object(s.g)("div",{className:"ml-4 text-muted"},e.description),Object(s.g)("div",{className:"ml-auto"},Object(s.g)("a",{href:"https://github.com/".concat(e.github.user,"/").concat(e.github.repo,"/issues")},Object(s.g)("i",{class:"fab fa-github"}),Object(s.g)("span",null," Report an issue")))),e.github&&Object(s.g)("div",{class:"card-body markdown-body"},Object(s.g)(m.a,{tagName:"div",html:e.github.readme})))))):Object(s.g)(v.a,null)})))}}]);
//# sourceMappingURL=13.8c3960cd.chunk.js.map