(this.webpackJsonpwyland=this.webpackJsonpwyland||[]).push([[0],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),c=a.n(i),l=(a(83),a(172)),u=a(173),o=a(174),s=a(175),d=a(62),m=a.n(d),p=a(18),g=a(13),b=a(63),v=a.n(b),A=a(64),y=a.n(A),w=a(65),h=a.n(w),E=a(66),f=a.n(E),j=a(67),k=a.n(j),O=a(68),S=a.n(O),x=a(69),Z=a.n(x),I=[{id:1,artist:"Pepe",title:"Coconut Girl",image:y.a},{id:2,artist:"Pepe",title:"Misto Right",image:h.a},{id:3,artist:"Pepe",title:"Dream Wave",image:f.a},{id:4,artist:"Pepe",title:"Napali Style",image:k.a},{id:5,artist:"Pepe",title:"Exscursion",image:S.a},{id:6,artist:"Pepe",title:"Jagged Clifs",image:Z.a}],G=Object(n.createContext)();function U(e){var t=JSON.parse(window.localStorage.getItem("paintings"))||I,a=Object(n.useState)(0),i=Object(g.a)(a,2),c=i[0],l=i[1],u=Object(n.useState)(!1),o=Object(g.a)(u,2),s=o[0],d=o[1],m=Object(n.useState)(t),b=Object(g.a)(m,2),A=b[0],y=b[1],w=Object(n.useState)(!1),h=Object(g.a)(w,2),E=h[0],f=h[1],j=function(){d(!s)};return r.a.createElement(G.Provider,{value:{currentTab:c,changeTab:function(e,t){l(t)},addFormOn:s,toggleAddForm:j,paintings:A,addPainting:function(e,t,a){y([].concat(Object(p.a)(A),[{artist:e,title:t,image:a,id:v()()}])),j()},removePainting:function(e){y(A.filter((function(t){return t.id!==e})))},adminOn:E,toggleAdmin:function(){f(!E)}}},e.children)}var P=Object(l.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1,textAlign:"center"},logo:{width:"60%"}}}));function D(){var e=P(),t=Object(n.useContext)(G).currentTab;return r.a.createElement("div",{className:e.root},console.log(t),r.a.createElement(u.a,{position:"static"},r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("img",{src:m.a,alt:"wyland logo",className:e.logo})),r.a.createElement(s.a,{variant:"h6",className:e.title},"Wyland Gallery Kauai"))))}var W=a(150),C=a(180),J=a(176),L=Object(l.a)({root:{flexGrow:1,top:"auto",bottom:0,position:"fixed",width:"100%"}});function M(){var e=L(),t=Object(n.useContext)(G),a=t.changeTab,i=t.currentTab;return r.a.createElement(W.a,{className:e.root},r.a.createElement(C.a,{value:i,onChange:a,indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(J.a,{label:"Gallery"}),r.a.createElement(J.a,{label:"Artists"}),r.a.createElement(J.a,{label:"Originals"})))}var N=a(6),T=a.n(N),Y=a(12),R=a(179),z=a(14),X=a.n(z);function Q(){var e=r.a.useState(null),t=Object(g.a)(e,2),a=t[0],n=t[1];r.a.useEffect((function(){(function(){var e=Object(Y.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://gallery-website.cdn.prismic.io/api/v2",t=X.a.client("https://gallery-website.cdn.prismic.io/api/v2"),e.next=4,t.query(X.a.Predicates.at("document.type","carouselimage"));case 4:(a=e.sent)&&n(a.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=r.a.useState(0),c=Object(g.a)(i,2),l=c[0],u=c[1];return r.a.useEffect((function(){var e=setInterval((function(){u(3===l?0:l+1)}),5e3);return function(){return clearInterval(e)}}),[l]),r.a.createElement("div",{style:{height:"350px",position:"relative"}},a&&r.a.createElement(R.a,{index:l,onRequestChange:function(e){u(e)}},a.map((function(e){return r.a.createElement(R.b,{src:e.data.image.url,key:e.data.banner[0].text})}))),r.a.createElement("div",{style:{position:"absolute",top:0,width:"100%",textAlign:"center",backgroundColor:"rgba(365, 365, 365, 0.3)"}},a&&r.a.createElement(s.a,{variant:"h5",style:{color:"rgba(0, 0, 0, 0.7)"}},a[l].data.banner[0].text)))}function B(){var e=r.a.useState(null),t=Object(g.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){(function(){var e=Object(Y.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://gallery-website.cdn.prismic.io/api/v2",t=X.a.client("https://gallery-website.cdn.prismic.io/api/v2"),e.next=4,t.query(X.a.Predicates.at("document.type","gallery"));case 4:(a=e.sent)&&n(a.results[0].data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,console.log(a),r.a.createElement(Q,null),r.a.createElement(W.a,{style:{textAlign:"center",height:"40vh"}},r.a.createElement(s.a,{variant:"h4",style:{margin:"4vw"}},a&&a.maintitle[0].text),r.a.createElement(s.a,{variant:"body1",style:{display:"block",margin:"0 8vw"}},a&&a.info[0].text),r.a.createElement(s.a,{variant:"body1",style:{display:"block",margin:"0 8vw"}},"ADDRESS"),r.a.createElement(s.a,{variant:"body1",style:{display:"block",margin:"0 8vw"}},a&&a.address[0].text)))}var H=a(177),F=a(73),q=a.n(F),V=a(178);function K(){var e=r.a.useState(null),t=Object(g.a)(e,2),a=t[0],n=t[1],i=r.a.useState(null),c=Object(g.a)(i,2),l=c[0],u=c[1];r.a.useEffect((function(){(function(){var e=Object(Y.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://gallery-website.cdn.prismic.io/api/v2",t=X.a.client("https://gallery-website.cdn.prismic.io/api/v2"),e.next=4,t.query(X.a.Predicates.at("document.type","artistpage"));case 4:(a=e.sent)&&n(a.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement(H.a,{container:!0},l?r.a.createElement(H.a,{item:!0,xs:12},r.a.createElement("div",{style:{margin:"auto",padding:"0 10%",maxWidth:"800px"}},r.a.createElement(s.a,{variant:"h4",style:{textAlign:"center",padding:"1vw"}},l.data.name[0].text),r.a.createElement("img",{src:l.data.photo.url,alt:"",style:{objectFit:"contain",height:"150px",float:"left",margin:"0 1vw"}}),r.a.createElement(s.a,{variant:"body2"},l.data.bio.map((function(e){return e.text}))),r.a.createElement("div",null),r.a.createElement(V.a,{variant:"contained",color:"secondary",startIcon:r.a.createElement(q.a,null)},"All Artists"))):a&&a.map((function(e){return r.a.createElement(H.a,{item:!0,xs:12,sm:6,lg:4,key:e.data.name[0].text},r.a.createElement("div",{style:{margin:"10%",border:"thin solid black",textAlign:"center",borderRadius:"1vw",overflow:"hidden",color:"white",backgroundColor:"black"},onClick:function(){return function(e){u(e)}(e)}},r.a.createElement("img",{src:e.data.painting.url,alt:"",style:{objectFit:"contain",width:"100%"}}),r.a.createElement(s.a,{variant:"body1"},e.data.name[0].text)))})))}var $=a(74),_=a.n($);function ee(){var e=r.a.useState(null),t=Object(g.a)(e,2),a=t[0],n=t[1];r.a.useEffect((function(){(function(){var e=Object(Y.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://gallery-website.cdn.prismic.io/api/v2",t=X.a.client("https://gallery-website.cdn.prismic.io/api/v2"),e.next=4,t.query(X.a.Predicates.at("document.type","paintings"));case 4:(a=e.sent)&&n(a.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=a&&a.map((function(e){return{src:e.data.image.url,thumbnail:e.data.image.url,thumbnailWidth:200,thumbnailHeight:"auto",isSelected:!1,caption:"By:".concat(e.data.artist[0].text," (").concat(e.data.details[0].text,") ")}}));return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(_.a,{images:i,enableImageSelection:!1}))}var te=function(){var e=Object(n.useContext)(G).currentTab;return r.a.createElement("div",null,r.a.createElement(D,null),0===e?r.a.createElement(B,null):1===e?r.a.createElement(K,null):r.a.createElement(ee,null),r.a.createElement("div",{style:{height:"45px"}}),r.a.createElement(M,null))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(U,null,r.a.createElement(te,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},62:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAA5CAYAAAB3T3ZaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTFUMTA6NDI6MDErMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTExVDEwOjQ3OjQ2KzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTAxLTExVDEwOjQ3OjQ2KzA1OjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg1N2U0Njg2LTQz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"},64:function(e,t,a){e.exports=a.p+"static/media/Pepe1.d1b723e2.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/pepe2.785de837.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/pepe3.74405703.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/pepe4.dbdf0914.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/pepe5.4c6f2928.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/pepe6.67249e0d.jpg"},78:function(e,t,a){e.exports=a(149)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.c91e08c2.chunk.js.map