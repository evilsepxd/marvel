(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{53:function(t,e,r){"use strict";var n=r(4),c=r.n(n),a=r(7),s=r(5),i=r(0);e.a=function(){var t=function(){var t=Object(i.useState)("waiting"),e=Object(s.a)(t,2),r=e[0],n=e[1];return{request:Object(i.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var r,a,s,i,o,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},n("loading"),t.prev=4,t.next=7,fetch(e,{method:r,body:a,headers:s});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Couldn't fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,n("confirmed"),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),n("error"),t.t0;case 21:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){n("loading")}),[]),process:r,setProcess:n}}(),e=t.loading,r=t.error,n=t.request,o=t.clearError,u=t.process,l=t.setProcess,p="https://gateway.marvel.com:443/v1/public/",b="apikey=51611d0224175ec40de8f6fdd861731f",f=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,n("".concat(p,"characters?limit=9&offset=").concat(e,"&").concat(b));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(p,"characters/").concat(e,"?").concat(b));case 2:return r=t.sent,t.abrupt("return",g(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(p,"characters?limit=10&nameStartsWith=").concat(e,"&").concat(b));case 2:if(!((r=t.sent).data.results.length>0)){t.next=5;break}return t.abrupt("return",r.data.results.map((function(t){return g(t)})));case 5:return t.abrupt("return",null);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:8,t.next=3,n("".concat(p,"/comics?limit=8&offset=").concat(e,"&").concat(b));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(p,"/comics/").concat(e,"?").concat(b));case 2:return r=t.sent,t.abrupt("return",v(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){return{name:t.name,description:t.description,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,id:t.id,comics:t.comics.items}},v=function(t){return{title:t.title,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,price:t.prices[0].price,id:t.id,url:t.urls[0].url,description:t.description?t.description:"No description for this comic",pageCount:t.pageCount?"".concat(t.pageCount," pages"):"No info about the number of pages",language:t.textObjects.language||"en-us"}};return{loading:e,error:r,clearError:o,process:u,getAllCharacters:f,getCharacter:m,getAllComics:j,getComic:h,getCharactersByNameStart:d,setProcess:l}}},54:function(t,e,r){"use strict";var n=r.p+"static/media/error.30cecdf7.gif",c=r(2);e.a=function(){return Object(c.jsx)("img",{alt:"Error",src:n})}},60:function(t,e,r){},61:function(t,e,r){"use strict";r(60);var n=r.p+"static/media/Avengers.4065c8f9.png",c=r.p+"static/media/Avengers_logo.9eaf2193.png",a=r(2);e.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:n,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:c,alt:"Avengers logo"})]})}},82:function(t,e,r){},93:function(t,e,r){"use strict";r.r(e);var n=r(55),c=r(61),a=r(9),s=r(5),i=r(0),o=r(12),u=r(54),l=r(29),p=r(53),b=(r(82),r(2)),f=function(t,e,r){switch(t){case"waiting":return Object(b.jsx)(l.a,{});case"loading":return r?Object(b.jsx)(e,{}):Object(b.jsx)(l.a,{});case"confirmed":return Object(b.jsx)(e,{});case"error":return Object(b.jsx)(u.a,{});default:throw new Error("Unexpected process state")}},m=function(){var t=Object(p.a)(),e=(t.loading,t.error,t.clearError),r=t.getAllComics,n=t.process,c=t.setProcess,u=Object(i.useState)([]),l=Object(s.a)(u,2),m=l[0],d=l[1],j=Object(i.useState)(8),h=Object(s.a)(j,2),g=h[0],v=h[1],O=Object(i.useState)(!1),x=Object(s.a)(O,2),w=x[0],_=x[1],k=Object(i.useState)(!1),y=Object(s.a)(k,2),C=y[0],N=y[1];Object(i.useEffect)((function(){E(!1)}),[]);var E=function(t){e(),_(t),r(g).then(S)},S=function(t){t.length<8&&N(!0),_(!1),d((function(e){return[].concat(Object(a.a)(e),Object(a.a)(t))})),v((function(t){return t+100})),c("confirmed")};return Object(b.jsxs)("div",{className:"comics__list",children:[f(n,(function(){return function(t){var e=t.map((function(t,e){return Object(b.jsx)("li",{className:"comics__item",children:Object(b.jsxs)(o.b,{to:"/comics/".concat(t.id),children:[Object(b.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:t.title}),Object(b.jsxs)("div",{className:"comics__item-price",children:[t.price,"$"]})]})},e)}));return Object(b.jsx)("ul",{className:"comics__grid",children:e})}(m)}),w),Object(b.jsx)("button",{className:"button button__main button__long",onClick:function(){return E(!0)},disabled:w,style:{display:C?"none":"block"},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})};e.default=function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)(n.a,{children:[Object(b.jsx)("meta",{name:"description",content:"Page with list of comics"}),Object(b.jsx)("title",{children:"Comics page"})]}),Object(b.jsx)(c.a,{}),Object(b.jsx)(m,{})]})}}}]);
//# sourceMappingURL=7.832392d3.chunk.js.map