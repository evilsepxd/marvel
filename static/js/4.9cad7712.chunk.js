(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4],{53:function(e,t,c){"use strict";var a=c.p+"static/media/error.30cecdf7.gif",n=c(2);t.a=function(){return Object(n.jsx)("img",{alt:"Error",src:a})}},54:function(e,t,c){"use strict";var a=c(4),n=c.n(a),r=c(7),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,error:u,request:Object(i.useCallback)(function(){var e=Object(r.a)(n.a.mark((function e(t){var c,r,s,i,o,l=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Couldn't fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,a(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.error,a=e.request,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=51611d0224175ec40de8f6fdd861731f",j=function(){var e=Object(r.a)(n.a.mark((function e(){var t,c,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,a("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return c=e.sent,e.abrupt("return",f(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(l,"characters?limit=10&nameStartsWith=").concat(t,"&").concat(u));case 2:if(!((c=e.sent).data.results.length>0)){e.next=5;break}return e.abrupt("return",c.data.results.map((function(e){return f(e)})));case 5:return e.abrupt("return",[{name:null}]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(n.a.mark((function e(){var t,c,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:8,e.next=3,a("".concat(l,"/comics?limit=8&offset=").concat(t,"&").concat(u));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(l,"/comics/").concat(t,"?").concat(u));case 2:return c=e.sent,e.abrupt("return",O(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return{name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,id:e.id,comics:e.comics.items}},O=function(e){return{title:e.title,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price,id:e.id,url:e.urls[0].url,description:e.description?e.description:"No description for this comic",pageCount:e.pageCount?"".concat(e.pageCount," pages"):"No info about the number of pages",language:e.textObjects.language||"en-us"}};return{loading:t,error:c,clearError:o,getAllCharacters:j,getCharacter:m,getAllComics:d,getComic:b,getCharactersByNameStart:h}}},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},68:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c(0),r=c(29),s=c(53),i=c(54),o=(c(61),c.p+"static/media/mjolnir.61f31e18.png"),l=c(2),u=function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki;return Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:n,style:(null===n||void 0===n?void 0:n.match("image_not_available.jpg"))?{objectFit:"contain"}:null,alt:"Random character",className:"randomchar__img"}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a||"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(n.useState)({}),t=Object(a.a)(e,2),c=t[0],j=t[1],m=Object(i.a)(),h=m.loading,d=m.error,b=m.getCharacter,f=m.clearError;Object(n.useEffect)((function(){p()}),[]);var O=function(e){j(e)},p=function(){f();var e=Math.floor(400*Math.random()+1011e3);b(e).then(O)},v=d?Object(l.jsx)(s.a,{}):null,_=h?Object(l.jsx)(r.a,{}):null,x=h||d?null:Object(l.jsx)(u,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[v,_,x,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",children:Object(l.jsx)("div",{className:"inner",onClick:p,children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},m=c(9),h=c(51),d=c(84),b=(c(62),function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),o=c[0],u=c[1],j=Object(n.useState)(!1),b=Object(a.a)(j,2),f=b[0],O=b[1],p=Object(n.useState)(210),v=Object(a.a)(p,2),_=v[0],x=v[1],g=Object(n.useState)(!1),N=Object(a.a)(g,2),k=N[0],y=N[1],w=Object(i.a)(),C=w.loading,S=w.error,E=w.getAllCharacters;Object(n.useEffect)((function(){F(_,!0)}),[]);var F=function(e,t){O(!t),E(e).then(I)},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=!1;e.length<9&&(t=!0),u((function(t){return[].concat(Object(m.a)(t),Object(m.a)(e))})),O(!1),x((function(e){return e+9})),y(t)},M=Object(n.useRef)([]),T=function(e){M.current.forEach((function(e){return e.classList.remove("char__item_selected")})),M.current[e].classList.add("char__item_selected"),M.current[e].focus()};var q=function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(l.jsx)(h.a,{in:!0,timeout:1e3,classNames:"char__item",children:Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return M.current[c]=e},onClick:function(){e.onCharSelected(t.id),T(c)},onKeyDown:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(t.id),T(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(l.jsx)("div",{className:"char__name",children:t.name})]})},c)}));return Object(l.jsx)(d.a,{component:"ul",className:"char__grid",children:c})}(o),A=S?Object(l.jsx)(s.a,{}):null,D=C&&!f?Object(l.jsx)(r.a,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[A,D,q,Object(l.jsx)("button",{className:"button button__main button__long",disabled:f,style:{display:k?"none":"block"},onClick:function(){return F(_)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),f=c(12),O=(c(63),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),p=(c(64),function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:n,alt:c,style:(null===n||void 0===n?void 0:n.match("image_not_available.jpg"))?{objectFit:"contain"}:null}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"Homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[(null===i||void 0===i?void 0:i.length)>0?null:"There is no comics with this character",null===i||void 0===i?void 0:i.slice(0,10).map((function(e,t){return Object(l.jsx)(f.b,{className:"char__comics-item",to:"/comics/".concat(e.resourceURI.match(/\d*$/)),children:e.name},t)}))]})]})}),v=function(e){var t=Object(n.useState)(null),c=Object(a.a)(t,2),o=c[0],u=c[1],j=Object(i.a)(),m=j.loading,h=j.error,d=j.getCharacter,b=j.clearError;Object(n.useEffect)((function(){return f()}),[]),Object(n.useEffect)((function(){f()}),[e.charId]);var f=function(){e.charId&&(b(),d(e.charId).then(v))},v=function(e){u(e)},_=o||m||h?null:Object(l.jsx)(O,{}),x=h?Object(l.jsx)(s.a,{}):null,g=m?Object(l.jsx)(r.a,{}):null,N=m||h||!o?null:Object(l.jsx)(p,{char:o});return Object(l.jsxs)("div",{className:"char__info",children:[_,x,g,N]})},_=c(78),x=c(79),g=(c(68),function(e){var t=e.text,c=e.typeOfMessage;return Object(l.jsx)("div",{className:"search-form__message search-form__message_".concat(c),children:t})}),N=function(e){var t=e.charList;return Object(l.jsx)("div",{className:"search-form__list",children:t.map((function(e,t){return Object(l.jsx)(f.b,{to:"/characters/".concat(e.id),children:Object(l.jsxs)("div",{className:"search-form__list-item",children:[Object(l.jsx)("img",{src:e.thumbnail,alt:e.name,className:"search-form__list-item-img"}),Object(l.jsx)("div",{className:"search-form__list-item-name",children:e.name})]})},t)}))})},k=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(i.a)(),o=s.loading,u=s.error,j=s.clearError,m=s.getCharactersByNameStart,h=function(e){r(e)},d=!(u||o)&&(null===c||void 0===c?void 0:c[0].name)&&Object(l.jsx)(N,{charList:c}),b=u&&Object(l.jsx)(g,{text:"Fetch error",typeOfMessage:"error"}),f=null===(null===c||void 0===c?void 0:c[0].name)&&Object(l.jsx)(g,{text:"The character was not found. Check the name and try again",typeOfMessage:"error"});return Object(l.jsx)(_.d,{initialValues:{name:""},validationSchema:x.a({name:x.b().required("This field is required")}),onSubmit:function(e,t){var c=e.name,a=t.setSubmitting;!function(e){j(),m(e).then(h)}(c),a(!1)},children:function(e){var t=e.isSubmitting;return Object(l.jsxs)(_.c,{className:"search-form",children:[Object(l.jsx)("label",{className:"search-form__title",htmlFor:"name",children:"Or find a character by name:"}),Object(l.jsx)(_.b,{className:"search-form__input",placeholder:"Enter name",id:"name",name:"name",type:"text"}),Object(l.jsx)("button",{className:"search-form__btn button button__main",type:"submit",disabled:t,children:Object(l.jsx)("div",{className:"inner",children:"FIND"})}),d,b,f,Object(l.jsx)(_.a,{className:"search-form__message search-form__message_error",name:"name",component:"div"})]})}})},y=c(13),w=c(17),C=c(18),S=c(20),E=function(e){Object(C.a)(c,e);var t=Object(S.a)(c);function c(){var e;Object(y.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(w.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(s.a,{}):this.props.children}}]),c}(c(36).Component),F=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(E,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(E,{children:Object(l.jsx)(b,{onCharSelected:function(e){r(e)}})}),Object(l.jsx)(E,{children:Object(l.jsx)(v,{charId:c})}),Object(l.jsx)(E,{children:Object(l.jsx)(k,{})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:F,alt:"vision"})]})}}}]);
//# sourceMappingURL=4.9cad7712.chunk.js.map