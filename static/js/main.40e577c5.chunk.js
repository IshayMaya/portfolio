(this["webpackJsonpnew-protfolio"]=this["webpackJsonpnew-protfolio"]||[]).push([[0],[,,,function(e,t,a){e.exports={works:"styles_works__1ncBA",work:"styles_work__33Z11",open:"styles_open__24QHU",details:"styles_details__2yVYa",closed:"styles_closed__3g7vQ",img:"styles_img__3jfcR",top:"styles_top__EAYp8"}},function(e,t,a){e.exports=a.p+"static/media/abstract2.b6a92585.png"},function(e,t,a){e.exports={about:"styles_about__2GTp2",person:"styles_person__bG0eK",content:"styles_content__2rC0m"}},function(e,t,a){e.exports={layout:"styles_layout__HjUhF",bodyContainer:"styles_bodyContainer__FvBNF"}},function(e,t,a){e.exports={nav:"styles_nav__nBk0m",active:"styles_active__2u-CI"}},,,,function(e,t,a){e.exports={home:"styles_home__2Tpm7"}},function(e,t,a){e.exports=a.p+"static/media/profile3.eb873111.jpg"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(10),o=a.n(l),r=(a(18),a(8)),i=a(2),s=a(6),u=a.n(s),m=a(7),p=a.n(m),d=a(1),h=[{name:"linkdein",icon:d.c,color:"#0077b5",link:"https://www.linkedin.com/in/ishay-maya-395a45184/"},{name:"github",icon:d.a,color:"#eeeeee",link:"https://github.com/IshayMaya"},{name:"gmail",icon:d.b,color:"#dc4d41",link:"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ssaymama@gmail.com"}],f=function(e){var t=e.onTabClick,a=e.currentTab,n=e.tabs.map((function(e,n){var l=a===n;return c.a.createElement("a",{className:l?p.a.active:"",href:"#",key:e.name+"-"+n,onClick:function(){return t(n)}},e.name)})),l=h.map((function(e,t){e.name;var a=e.icon,n=e.link,l=e.color;return c.a.createElement("a",{key:"cWay-"+t,href:n},c.a.createElement(a,{style:{fill:l}}))}));return c.a.createElement("nav",{className:p.a.nav},c.a.createElement("section",null,n),c.a.createElement("section",null,l))},g=(a(19),function(e){var t=e.children,a=e.className,n=e.changed,l=e.style,o=e.onClick;return c.a.createElement("section",{style:l,onClick:o,className:"page ".concat(a," ").concat(n?"fadeout":"")},t)}),b=a(11),y=a.n(b),E=a(4),v=a.n(E),_=function(e){var t=e.changed;return c.a.createElement(g,{className:y.a.home,changed:t},c.a.createElement("h1",{style:{backgroundImage:"url(".concat(v.a,")")}},"Ishay Maya ",c.a.createElement("span",null," Web Developer")))},k=a(5),w=a.n(k),j=a(12),S=a.n(j),O=function(e){var t=e.changed;return c.a.createElement(g,{className:w.a.about,changed:t},c.a.createElement("section",{className:w.a.person},c.a.createElement("img",{src:S.a,alt:"Ishay"}),c.a.createElement("div",{className:w.a.content},c.a.createElement("h2",null,"Full Stack Developer"),c.a.createElement("h3",null,"B.A - economics & Data Analist"))),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(d.d,null),"Javascript. "),c.a.createElement("li",null,c.a.createElement(d.d,null),"Single Page Application (SPA) using Advanced Frameworks: React.js, Vue.js. "),c.a.createElement("li",null,c.a.createElement(d.d,null),"State Management using Redux, Vuex. "),c.a.createElement("li",null,c.a.createElement(d.d,null),"HTML5, CSS3, SASS, ElementUI. "),c.a.createElement("li",null,c.a.createElement(d.d,null),"Server side with Node.js, Express.js, MongoDB, SQL."),c.a.createElement("li",null,c.a.createElement(d.d,null),"Using REST API, AJAX, Asynchronous programming. ")))},N=[{id:1,title:"MyWeather",description:"Pick a photo from gallery and create your own funny meme",tags:["React.js","Redux","Firebase"],link:"https://ishaymaya.github.io/my-weather/",imgUrl:"http://www.wallpapermania.eu/images/lthumbs/2016-01/8610_Cold-mountain-lake-HD-winter-wallpaper.jpg"},{id:2,title:"MakeAppoint",description:"Appoints system for SMB",tags:["Vue.js","Node.js","MongoDB"],link:"https://makeappoint.herokuapp.com/",imgUrl:"https://previews.123rf.com/images/farhad73/farhad731908/farhad73190800059/128902376-barber-shop-poster-banner-template-with-hipster-face-vector-illustration.jpg"},{id:3,title:"MyMusic",description:"Search & Play soundcloud music",tags:["React.js","Redux"],link:"https://ishaymaya.github.io/my-music/",imgUrl:"https://f4.bcbits.com/img/a3869114877_16.jpg"},{id:4,title:"SportWiz",description:"Using crowd wisdom for sport predictions",tags:["Vue.js","Node.js","MongoDB"],link:"http://sportwiz.co",imgUrl:"https://i.kinja-img.com/gawker-media/image/upload/s--VLubrAqw--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/ipuaitblqhz1bbjxebld.jpg"}],A=function(){return N},C=a(3),x=a.n(C),M=function(e){var t=e.changed,a=Object(n.useState)([]),l=Object(i.a)(a,2),o=l[0],r=l[1],s=Object(n.useState)(null),u=Object(i.a)(s,2),m=u[0],p=u[1];Object(n.useEffect)((function(){var e=A();r(e)}),[]);var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;"object"===typeof e&&(e.preventDefault(),e.stopPropagation());var a=m===t||null===t?null:t;p(a)};return c.a.createElement(g,{className:x.a.works,changed:t,onClick:h},o.map((function(e,t){var a=e.id,n=e.title,l=e.description,o=e.tags,r=e.link,i=e.imgUrl,s=m===t?x.a.open:x.a.closed,u=null===m?{}:m===t?{width:"100%"}:{width:0};return c.a.createElement("div",{key:a,style:u,className:"".concat(x.a.work," ").concat(s),onClick:function(e){return h(e,t)}},c.a.createElement("div",{style:{backgroundImage:"url('".concat(i,"')")},className:x.a.img}),c.a.createElement("div",{className:x.a.details},c.a.createElement("div",{className:x.a.top},c.a.createElement("h3",null,n),c.a.createElement("h4",null,l),c.a.createElement("ul",null,o.map((function(e,t){return c.a.createElement("li",{key:"tag-"+t},c.a.createElement(d.d,null),e)})))),c.a.createElement("footer",null,c.a.createElement("button",{onClick:function(){return e=r,void(window.location=e);var e}},"Open App"),c.a.createElement("button",{onClick:function(e){return h(e,t)}},"Close"))))})))},T=(a(20),function(e){var t=e.children,a=e.changed;return c.a.createElement("h1",{key:t,className:"char".concat(a?" exit":""),style:{backgroundImage:"url(".concat(v.a,")")}},t)}),B=[{name:"Home",cmp:_},{name:"Works",cmp:M},{name:"About",cmp:O}],I=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),m=s[0],p=s[1],d=Object(n.useState)(""),h=Object(i.a)(d,2),g=h[0],b=h[1],y=Object(n.useState)(!1),E=Object(i.a)(y,2),v=E[0],_=E[1],k=Object(n.useState)({}),w=Object(i.a)(k,2),j=w[0],S=w[1];Object(n.useEffect)((function(){var e=B[a].name.charAt(0);e!==g&&b(e)}),[b,a]),Object(n.useEffect)((function(){var e=j.start,t=j.end;if(e&&t){if(Math.abs(e-t)>30){var n=t>e;n&&a>0&&l((function(e){return e-1})),!n&&a<B.length-1&&l((function(e){return e+1}))}S({})}}),[j,S]);var O=function(e){p(e)},N=B[a].cmp;return c.a.createElement("section",{className:u.a.layout,style:{pointerEvents:m?"none":"auto"},onTouchStart:function(e){var t=Object(i.a)(e.touches,1)[0].pageX;S((function(e){return Object(r.a)({},e,{start:t})}))},onTouchEnd:function(e){var t=Object(i.a)(e.changedTouches,1)[0].pageX;S((function(e){return Object(r.a)({},e,{end:t})}))}},c.a.createElement(f,{tabs:B,onTabClick:function(e){a===e||m||(O(!0),_(!0),setTimeout((function(){_(!1),O(!1),l(e)}),1e3))},currentTab:a}),c.a.createElement("section",{className:u.a.bodyContainer},c.a.createElement(N,{tabs:B,currentTab:a,changed:v,disableClick:O}),c.a.createElement(T,{changed:v},g)))};a(21);var U=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.40e577c5.chunk.js.map