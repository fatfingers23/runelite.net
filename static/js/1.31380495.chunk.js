(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[1],{126:function(e,t,a){"use strict";var l=a(0),o=a(18);var n=()=>Object(l.g)("section",{id:"footer"},Object(l.g)("div",{class:"content-section"},Object(l.g)("footer",null,Object(l.g)("hr",null),"Developed with ",Object(l.g)("i",{class:"fas fa-heart"})," and"," ",Object(l.g)("i",{class:"fas fa-coffee"})," using"," ",Object(l.g)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(l.g)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(l.g)("a",{href:"https://fontawesome.com/"},"Font Awesome"),Object(l.g)("a",{href:Object(o.d)()+"/atom.xml",class:"float-right"},Object(l.g)("i",{class:"fas fa-rss"})," Subscribe via RSS"))));t.a=e=>{let{children:t,fullWidth:a,...o}=e;return o.class=o.class?"container "+o.class:"container",o.style={...o.style||{},maxWidth:a?"100%":""},Object(l.g)("div",Object.assign({},o,{id:"layout"}),t,Object(l.g)(n,null))}},128:function(e,t,a){},290:function(e,t,a){"use strict";var l=a(0),o=a(132),n=a(453),i=a(462),s=a(454),r=a(455),c=a(456),p=a(49);a(291);const d=[3225,3219],m=o.TileLayer.extend({initialize:function(e,t){this._url=e,this.originalPlane=t.plane,Object(o.setOptions)(this,t)},getTileUrl:function(e){return o.Util.template(this._url,{source:this.options.source,mapId:-1,zoom:e.z,plane:this.options.plane,x:e.x,y:-(1+e.y)})},resetPlane:function(){this.setPlane(this.originalPlane)},setPlane:function(e){const t=this.getPlane();e=Math.max(e,this.options.minPlane),(e=Math.min(e,this.options.maxPlane))!==t&&(this.options.plane=e,this._map&&this._map.fire("planechange"),this.redraw())},getPlane:function(){return this.options.plane},createTile:function(e,t){let a=o.TileLayer.prototype.createTile.call(this,e,t);return a.onerror=e=>e.preventDefault(),a}}),u=e=>({x:parseInt(e.lng),y:parseInt(e.lat)}),g=(e,t)=>[t,e],f=e=>{const t=e.regionId,a=e.regionX,l=e.regionY;let o="#ffffff";if(e.color){const t=e.color.value;if(t)n=t,o="rgba("+[(16711680&(n>>>=0))>>>16,(65280&n)>>>8,255&n,((4278190080&n)>>>24)/255].join(",")+")";else if(e.color){const t=e.color;o="#"+t.slice(3,9)+t[1]+t[2]}}var n;return{x:(t>>>8<<6)+a,y:((255&t)<<6)+l,z:e.z,label:e.label,color:o}},b=e=>{const t=g(d[0],d[1]);e.setView(t);const a=Object(o.rectangle)([[0,0],[1,1]],{color:"#1e1e1e",fillColor:"#1e1e1e",fillOpacity:.3,weight:1,interactive:!1});a.addTo(e),e.on("mousemove",e=>{const t=u(e.latlng);a.setBounds([g(t.x,t.y),g(t.x+1,t.y+1)])});const l=new o.Control({position:"topright"});l.onAdd=e=>{const t=o.DomUtil.create("div","leaflet-bar leaflet-control"),a=o.DomUtil.create("span","leaflet-custom-control",t),l=()=>{const t=(e=>{const t=e.getCenter(),a=u(t),l=a.x>>6<<8|a.y>>6;for(const o of p.a)if(o.regions.includes(l))return o.name;return""})(e);a.hidden=!t,a.textContent=t};return l(),e.on("move",l),t},l.addTo(e);const n=new o.Control({position:"topleft"});n.onAdd=e=>{const a=o.DomUtil.create("div","leaflet-bar leaflet-control"),l=o.DomUtil.create("a","fas fa-redo",a);return o.DomEvent.disableClickPropagation(l).addListener(l,"click",()=>{e.viewport?e.fitBounds(e.viewport):e.setView(t,0),e.tileLayer.resetPlane()}),a},n.addTo(e);const i=new o.Control({position:"topright"});i.onAdd=e=>{const t=o.DomUtil.create("div","leaflet-bar leaflet-control"),a=o.DomUtil.create("a","fas fa-sort-amount-up-alt",t),l=o.DomUtil.create("span","leaflet-custom-control",t),n=o.DomUtil.create("a","fas fa-sort-amount-down",t),i=()=>{e.tileLayer&&(l.textContent=e.tileLayer.getPlane(),e.tileLayer.getPlane()===e.tileLayer.options.maxPlane?o.DomUtil.addClass(a,"leaflet-disabled"):o.DomUtil.removeClass(a,"leaflet-disabled"),e.tileLayer.getPlane()===e.tileLayer.options.minPlane?o.DomUtil.addClass(n,"leaflet-disabled"):o.DomUtil.removeClass(n,"leaflet-disabled"))};return i(),e.on("planechange",i),o.DomEvent.disableClickPropagation(a).addListener(a,"click",()=>{e.tileLayer.setPlane(e.tileLayer.getPlane()+1)}),o.DomEvent.disableClickPropagation(n).addListener(n,"click",()=>{e.tileLayer.setPlane(e.tileLayer.getPlane()-1)}),t},i.addTo(e),e.viewport&&e.fitBounds(e.viewport)},h=e=>{let{tiles:t,selected:a,plane:o}=e;const c=Object(n.a)();if(c.tileLayer||(c.tileLayer=new m("https://raw.githubusercontent.com/mejrs/layers_osrs/master/{source}/-1/{zoom}/{plane}_{x}_{y}.png",{noWrap:!0,plane:o,minPlane:0,maxPlane:3,source:"mapsquares",minZoom:-4,maxNativeZoom:2,maxZoom:8,errorTileUrl:"https://raw.githubusercontent.com/mejrs/mejrs.github.io/master/layers/alpha_pixel.png"}),c.tileLayer.addTo(c)),c.tileLayer.originalPlane=o,c.tileLayer.setPlane(o),a.length>0){const e=a.map(e=>e.x),t=a.map(e=>e.y),l=Math.min(...e)-4,o=Math.max(...e)+4,n=Math.min(...t)-4,i=Math.max(...t)+4,s=[g(l,n),g(o,i)];c.viewport=s,c.fitBounds(s)}return t.map(e=>{const t=[g(e.x,e.y),g(e.x+1,e.y+1)];return Object(l.g)(l.b,null,e.label&&Object(l.g)(i.a,{bounds:t,url:"/img/tile-text.png"}),Object(l.g)(s.a,{bounds:t,pathOptions:{color:e.color,fillColor:e.color,fillOpacity:.3,weight:1,interactive:!1}},e.label&&Object(l.g)(r.a,null,e.label)))})};t.a=e=>{let{tiles:t,selected:a}=e;t||(t=[]),a||(a=t),t=t.map(f),a=a.map(f);const n=a.length>0&&a[0].z||0;return Object(l.g)(l.b,null,Object(l.g)(c.a,{minZoom:-4,maxZoom:8,maxBounds:[[-1e3,-1e3],[13800,13800]],maxBoundsViscosity:.5,zoom:0,attributionControl:!1,whenCreated:b,crs:o.CRS.Simple},Object(l.g)(h,{tiles:t,selected:a,plane:n})))}},291:function(e,t,a){},452:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a(126),n=a(7),i=a.n(n),s=a(46),r=a(28),c=a(290),p=(a(128),a(47));t.default=Object(r.b)((e,t)=>{let{b64:a}=t,l="",o=[];try{const e=a||window.location.hash.substring(1);l=atob(e),o=JSON.parse(l)}catch(n){}return{data:l,tiles:o}})(e=>{let{data:t,tiles:a}=e;return a&&0!==a.length?Object(l.g)(o.a,null,Object(l.g)(s.a,{title:"Tile markers - "+i.a.title,description:t}),Object(l.g)("section",{id:"tiles"},Object(l.g)("div",{class:"content-section tag-container"},Object(l.g)(c.a,{tiles:a}),Object(l.g)("pre",{class:"pre-select"},t)))):Object(l.g)(p.a,null)})}}]);
//# sourceMappingURL=1.31380495.chunk.js.map