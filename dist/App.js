!function(e){function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){e.exports=t(3)},function(e,n,t){var a,r,c;(function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(o,u){"object"==t(n)&&"object"==t(e)?e.exports=u():(r=[],a=u,c="function"==typeof a?a.apply(n,r):a,!(void 0!==c&&(e.exports=c)))}(void 0,function(){return function(e){function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){e.exports=t(1)},function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var t={$p:null},a=document.createComment(""),r=n.DEADPOOL={push:function(){},pop:function(){}},c=n.Pool=function(){var e=new Map;return{push:function(n){var t=n.key;n.$x=e.get(t),e.set(t,n)},pop:function(n){var t=e.get(n);return t?(e.set(n,t.$x),t):void 0}}},o=function(e){e.$s.r.push(e)},u=function(){return a.cloneNode(!1)},i=function(e,n){var t=e.parentNode;t&&t.replaceChild(n,e)},d=function(e,n,t){return t?e.insertBefore(n,t):e.appendChild(n)},l=function(e,n){o(e),n.removeChild(e.$n)},f=function(e,n){for(var t=e.length,a=0;t>a;)l(e[a++],n)},s=function(e,n){for(var t=e.length,a=0;t>a;)o(e[a++]);n.textContent=""},m=function(e,n){return n.$s===e.$s&&(e.$s.u(e,n),!0)},p=function(e,n,t,a,r){if(!m(n,t)){var c=M(n),u=a.$n;n.$c=t.$c,n.$t=t.$t,n.$p=t.$p,n.$a=e,a.$n=c,a[r]=n,e.$$instance=n,c.xvdom=a,i(u,c),o(n)}},v=function(e,n,t,a,r){var c=e.$$instance,o=c.$p,u=c.$t,i=e.$$doRerender;e.$$doRerender=!1;var d=n.apply(void 0,[o,u,e].concat(r));return e.$$doRerender=i,c.$t=d,u!==d&&i&&p(e,c.$c(o,d,e),c,t,a),d},b=function(e,n,t,a){return function(){for(var r=arguments.length,c=Array(r),o=0;r>o;o++)c[o]=arguments[o];return v(e,n,t,a,c)}},h=function(e,n,a){var r={$$doRerender:!1,$$instance:t};for(var c in e)r[c]=b(r,e[c],n,a);return r},g=function(e,n,t,a){for(var r=0;t>r;)d(e,(n[r]=L(n[r])).$n,a),++r},$=function(e,n,t){for(var a=0;t>a;)e.appendChild((n[a]=L(n[a])).$n),++a},y=function(e,n,t,a,r,c,o,u,i){for(var f=new Map,s=u.$n,m=void 0,p=void 0,v=void 0;i>=o;)m=t[o++],f.set(m.key,m);for(;r>=a;)v=n[a],p=v.key,m=f.get(p),m?(m===u&&(s=s.nextSibling),f["delete"](p),v=S(m,v)):v=L(v),n[a]=v,d(e,v.$n,s),++a;f.forEach(function(n){l(n,e)})},C=function(e,n,t,a,r,c,o,u,i,f,s,m){if(u>f)for(;c>=a;)r=n[a],d(e,(n[a]=L(r)).$n,m),++a;else if(a>c)for(;f>=u;)l(t[u++],e);else y(e,n,t,a,c,i,u,s,f)},D=function(e,n,t,a,r,c){var o=0,u=0,i=!0,l=t-1,f=r-1,s=0!==t&&n[0],m=0!==r&&a[0],p=c,v=void 0,b=void 0,h=void 0;e:for(;i&&f>=o&&l>=u;){for(i=!1;m.key===s.key;){if(n[u]=S(m,s),o++,u++,o>f||u>l)break e;m=a[o],s=n[u],i=!0}for(v=a[f],b=n[l];v.key===b.key;){if(p=(n[l]=S(v,b)).$n,f--,l--,o>f||u>l)break e;v=a[f],b=n[l],i=!0}for(;m.key===b.key;){if(h=(n[l]=S(m,b)).$n,v.key!==b.key&&(p=d(e,h,p)),o++,l--,o>f||u>l)break e;m=a[o],b=n[l],i=!0}for(;v.key===s.key;){if(d(e,(n[u]=S(v,s)).$n,m.$n),f--,u++,o>f||u>l)break e;v=a[f],s=n[u],i=!0}}(l>=u||f>=o)&&C(e,n,a,u,s,l,b,o,m,f,v,p)},A=function(e,n,t){var a=e.parentNode,r=n.length,c=t.length;r?c?D(a,n,r,t,c,e):g(a,n,r,e):f(t,a)},O=function(e,n,t){var a=n.length,r=t.length;a?r?D(e,n,a,t,r,null):$(e,n,a):s(t,e)},N=function(e,n,t,a,r,c,o){return null==n?a.nodeValue="":n.constructor===String||n.constructor===Number?a.nodeValue=n:_(e,n,null,a,r,c,o),n},_=function(e,n,t,a,r,c,o){return i(a,j(e,a.parentNode,n,r,c,o)),n},E=function(e,n,t,a,r,c,o){return n&&m(n,t)?t:_(e,n,null,a,r,c,o)},x=function(e,n,t,a,r,c,o,u){var i=a.$a,d=i.onProps;a.$p=n,d?d():p(i,a.$c(n,a.$t,i),a,c,u)},k=function(e,n,t,a,r,c,o,u){var d=e(n||{});m(d,a)||i(r,c[o]=(c[u]=L(d)).$n)},w=function(e,n,t,a,r,c,o){return n instanceof Array?e?O(a,n,t):A(a,n,t):e?(s(t,a),a.appendChild(j(!0,a,n,r,c,o))):(f(t,a.parentNode),_(!1,n,null,a,r,c,o)),n},P=function(e,n,a,r,c,o){t.$p=n;var u=e.state,i=h(u,a,o),d=u.onInit(n||{},void 0,i);i.$$doRerender=!0;var l=e(n,d,i),f=M(l);return i.$$instance=l,l.$c=e,l.$t=d,l.$a=i,l.$p=n,a[r]=x,a[o]=l,a[c]=f,f},j=n.createDynamic=function(e,n,t,a,r,c){var o=void 0,i=void 0,d=void 0,l=void 0;return null==t||(l=t.constructor)===Boolean?(d=_,i=o=u()):l===Object?(d=E,i=o=M(t)):l===String||l===Number?(d=N,i=o=document.createTextNode(t)):l===Array&&(o=document.createDocumentFragment(),$(o,t,t.length),d=w,i=e?n:o.appendChild(u())),a[r]=d,a[c]=i,o},I=n.createComponent=function(e,n,t,a,r,c){if(e.state)return P(e,n,t,a,r,c);var o=e(n||{}),u=M(o);return t[a]=k,t[c]=o,t[r]=u,u},L=function(e){var n=e.$s,t=n.r.pop(e.key);return t?(n.u(e,t),t):((e.$n=n.c(e)).xvdom=e,e)},M=n.render=function(e){return L(e).$n},S=function(e,n){return m(n,e)?e:(n=L(n),i(e.$n,n.$n),o(e),n)},T=n.rerender=function(e,n){return S(e.xvdom,n).$n},z=n.unmount=function(e){l(e.xvdom,e.parentNode)};n["default"]={createDynamic:j,createComponent:I,render:M,rerender:T,unmount:z,Pool:c,DEADPOOL:r},n._={rerenderText:N,rerenderInstance:E,rerenderDynamic:_,rerenderArray:w}}])})}).call(n,t(8)(e))},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0,t(22);var r=t(1),c=a(r),o={c:function(e){var n=document.createElement("i");return e.b=n,n.className=e.a,n.onclick=e.c,n},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.className=t,n.a=t),t=e.c,t!==n.c&&(n.b.onclick=t,n.c=t)},r:c["default"].DEADPOOL};n["default"]=function(e){var n=e.className,t=e.name,a=e.onClick,r=e.size,c=void 0===r?"med":r;return{$s:o,a:"Icon Icon--"+c+" octicon octicon-"+t+" "+n+" t-center",c:a}}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}t(25),t(17),t(18),t(21),t(14);var r=t(1),c=a(r),o=t(12),u=a(o),i=t(11),d=a(i),l={c:function(e){var n=c["default"].createComponent(v,null,e,"a","b","c");return n},u:function(){},r:c["default"].DEADPOOL},f={c:function(e){var n=c["default"].createComponent(d["default"],null,e,"a","b","c");return n},u:function(){},r:c["default"].DEADPOOL},s={c:function(e){var n=c["default"].createComponent(u["default"],{id:e.a,tab:e.b},e,"c","d","e");return n},u:function(e,n){e.a===n.a&&e.b===n.b||(n.c(u["default"],{id:e.a,tab:e.b},null,n.e,n.d,n,"d","e"),n.a=e.a,n.b=e.b)},r:c["default"].DEADPOOL},m={c:function(e){var n=document.createElement("body");return e.b=n,n.className=e.a,n.appendChild(c["default"].createDynamic(!0,n,e.c,e,"d","e")),n},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.className=t,n.a=t),e.c!==n.c&&(n.c=n.d(!0,e.c,n.c,n.e,n,"d","e"))},r:c["default"].DEADPOOL},p="App fit fullbleed "+(window.navigator.standalone?"is-apple-standalone":""),v=function(e,n){var t=n.view;return{$s:m,a:p,c:t}};v.state={onInit:function(e,n,t){var a=t.onHashChange;return window.onhashchange=a,a()},onHashChange:function(e,n){var t=window.location.hash.slice(1).split("?"),a=t[0],r=t[1],c=decodeURIComponent(a);return n&&c!==n.recipeName&&(document.body.scrollTop=0),c?{recipeName:c,view:{$s:s,a:c,b:r}}:{view:{$s:f}}}},document.body=c["default"].render({$s:l})},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0,t(19);var r=t(1),c=a(r),o=t(3),u=a(o),i=t(2),d=a(i),l={c:function(e){var n,t,a,r=document.createElement("div");return e.b=r,r.className=e.a,n=document.createElement("div"),e.d=n,n.className=e.c,t=document.createElement("div"),t.className="layout horizontal center-center l-height14 l-padding-h4",t.appendChild(c["default"].createDynamic(!1,t,e.e,e,"f","g")),a=document.createElement("div"),a.className="l-padding-r0 t-truncate t-font-size-20 flex",e.i=a,a.textContent=e.h,t.appendChild(a),a=c["default"].createComponent(d["default"],{className:"t-bold c-white l-padding-h4",name:"search",onClick:e.j,size:"small"},e,"k","l","m"),t.appendChild(a),t.appendChild(c["default"].createDynamic(!1,t,e.n,e,"o","p")),n.appendChild(t),n.appendChild(c["default"].createDynamic(!1,n,e.q,e,"r","s")),r.appendChild(n),r},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.className=t,n.a=t),t=e.c,t!==n.c&&(n.d.className=t,n.c=t),e.e!==n.e&&(n.e=n.f(!1,e.e,n.e,n.g,n,"f","g")),t=e.h,t!==n.h&&(n.i.textContent=t,n.h=t),e.j!==n.j&&(n.k(d["default"],{className:"t-bold c-white l-padding-h4",name:"search",onClick:e.j,size:"small"},null,n.m,n.l,n,"l","m"),n.j=e.j),e.n!==n.n&&(n.n=n.o(!1,e.n,n.n,n.p,n,"o","p")),e.q!==n.q&&(n.q=n.r(!1,e.q,n.q,n.s,n,"r","s"))},r:c["default"].DEADPOOL},f=function(){u["default"].showSearch()},s=function(e,n){var t=e.title,a=e.secondary,r=e.left,c=e.right,o=n.scrollClass;return{$s:l,a:"AppToolbar "+(a?"AppToolbar--withSecondary":""),c:"AppToolbar-bar fixed fixed--top c-white bg-purple "+o,e:r,h:t,j:f,n:c,q:a}};s.state={onInit:function(e,n,t){var a=t.onScroll;return requestAnimationFrame(function(){return document.body.onscroll=a}),a()},onScroll:function(e,n){var t=document.body?document.body.scrollTop:0;return{scrollTop:t,scrollClass:t>60&&t-n.scrollTop>0?" is-scrolling-down":""}}},n["default"]=s},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0,t(23);var r=t(1),c=a(r),o=t(9),u=(a(o),t(2)),i=a(u),d={c:function(e){var n=document.createElement("div");return e.b=n,n.className=e.a,n.hidden=e.c,n.appendChild(c["default"].createDynamic(!0,n,e.d,e,"e","f")),n},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.className=t,n.a=t),t=e.c,t!==n.c&&(n.b.hidden=t,n.c=t),e.d!==n.d&&(n.d=n.e(!0,e.d,n.d,n.f,n,"e","f"))},r:c["default"].DEADPOOL},l={c:function(e){var n,t,a=document.createElement("a");return e.b=a,a.className=e.a,a.href=e.c,a.appendChild(c["default"].createDynamic(!1,a,e.d,e,"e","f")),n=document.createElement("div"),n.className="l-margin-l1",n.appendChild(c["default"].createDynamic(!1,n,e.g,e,"h","i")),t=document.createElement("div"),t.className="t-light t-font-size-14 c-gray-dark",e.k=t,t.textContent=e.j,n.appendChild(t),a.appendChild(n),a},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.className=t,n.a=t),t=e.c,t!==n.c&&(n.b.href=t,n.c=t),e.d!==n.d&&(n.d=n.e(!1,e.d,n.d,n.f,n,"e","f")),e.g!==n.g&&(n.g=n.h(!1,e.g,n.g,n.i,n,"h","i")),t=e.j,t!==n.j&&(n.k.textContent=t,n.j=t)},r:c["default"].DEADPOOL},f={c:function(e){var n=c["default"].createComponent(i["default"],{className:"l-margin-r2",name:e.a},e,"b","c","d");return n},u:function(e,n){e.a!==n.a&&(n.b(i["default"],{className:"l-margin-r2",name:e.a},null,n.d,n.c,n,"c","d"),n.a=e.a)},r:c["default"].DEADPOOL};n["default"]=function(e){var n=e.className,t=e.context,a=e.list,r=e.item,c=e.noDivider,o=e.transform,u="List-item layout horizontal center t-normal "+(c?"List-item--noDivider":"");return a=a||[],o&&(a=o(a)),{$s:d,a:n,c:!a||!a.length,d:a.map(function(e,n){var a=r(e,t),c=a.href,o=a.key,i=void 0===o?n:o,d=a.icon,s=a.text,m=a.secondaryText;return{$s:l,a:u,c:c,d:d&&{$s:f,a:d},g:s,j:m||"",key:i}})}}},function(e,n){"use strict";n.__esModule=!0,n["default"]=function(e,n,t){var a=function(t,a,r){var c=r.onLoadModel;return e[n](t).then(c),e["get"===n?"localGet":"localQuery"](t)};return t.state={onInit:a,onProps:a,onLoadModel:function(e,n,t,a){return a}},t}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0;var r=t(16),c=a(r),o=t(15),u=a(o),i="menu:Recipes",d={apiKey:"AIzaSyBjXi3l8wUS7g8BYGuFyLRSjIusUrvTcTk",authDomain:"menu-dev.firebaseapp.com",databaseURL:"https://menu-dev.firebaseio.com"},l=function(){return c["default"].getItemObj(i)||[]},f=function(e){var n=e.id;return l().find(function(e){var t=e.name;return t===n})},s=void 0,m=function(){return s||(s=new Promise(function(e){setTimeout(function(){e((0,u["default"])("https://www.gstatic.com/firebasejs/3.0.0/firebase.js").then(function(){return firebase.initializeApp(d).database().ref("recipes")}))},500)}))};n["default"]={localGet:f,get:function(e){return Promise.resolve(f(e))},localQuery:l,query:function(){return m().then(function(e){return e.once("value").then(function(e){return c["default"].setItemObj(i,e.val()||[])})})},save:function(e){return m().then(function(n){return n.set(e).then(function(){return c["default"].setItemObj(i,e)})})}}},function(e,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0,t(20);var r=t(1),c=a(r),o={c:function(e){var n=document.createElement("img");return n.className="Avatar",e.b=n,n.onerror=e.a,n.src=e.c,n},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.onerror=t,n.a=t),t=e.c,t!==n.c&&(n.b.src=t,n.c=t)},r:c["default"].DEADPOOL},u="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i=function(e){var n=e.target;n.src=u};n["default"]=function(e){var n=e.avatarUrl;return{$s:o,a:i,c:n+"v=3&s=32"}}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0,t(24);var r=t(1),c=a(r),o={c:function(e){var n=document.createElement("div");return n.className="Tabs layout horizontal end center-justified c-white l-height10 t-font-size-14 t-uppercase t-normal",n.appendChild(c["default"].createDynamic(!0,n,e.a,e,"b","c")),n},u:function(e,n){e.a!==n.a&&(n.a=n.b(!0,e.a,n.a,n.c,n,"b","c"))},r:c["default"].DEADPOOL},u={c:function(e){var n=document.createElement("a");return e.b=n,n.className=e.a,n.href=e.c,n.appendChild(c["default"].createDynamic(!0,n,e.d,e,"e","f")),n},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.className=t,n.a=t),t=e.c,t!==n.c&&(n.b.href=t,n.c=t),e.d!==n.d&&(n.d=n.e(!0,e.d,n.d,n.f,n,"e","f"))},r:c["default"].DEADPOOL};n["default"]=function(e){var n=e.tabs,t=e.selected,a=e.hrefPrefix,r=void 0===a?"":a;return{$s:o,a:Object.keys(n).map(function(e){var a=n[e];return{$s:u,a:"Tabs-tab u-cursor-pointer l-padding-h4 l-padding-b2 "+(t===e?"is-selected":""),c:""+r+(a.href||e),d:a.title||e,key:e}})}}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0;var r=t(1),c=a(r),o=t(4),u=a(o),i=t(6),d=a(i),l=t(5),f=a(l),s=t(13),m=a(s),p=t(7),v=a(p),b={c:function(e){var n,t=document.createElement("div");return t.className="l-padding-b2",n=c["default"].createComponent(u["default"],{title:"Recipes"},e,"a","b","c"),t.appendChild(n),n=c["default"].createComponent(f["default"],{className:"Card",item:e.d,list:e.e,transform:e.f},e,"g","h","i"),t.appendChild(n),t},u:function(e,n){e.e===n.e&&e.d===n.d&&e.f===n.f||(n.g(f["default"],{className:"Card",item:e.d,list:e.e,transform:e.f},null,n.i,n.h,n,"h","i"),n.d=e.d,n.e=e.e,n.f=e.f)},r:c["default"].DEADPOOL},h=function(e,n){return(0,m["default"])(e.name,n.name)},g=function(e){return e.sort(h)},$=function(e){var n=e.name;return{href:"#"+encodeURIComponent(n),icon:"bookmark",text:n}};n["default"]=(0,d["default"])(v["default"],"query",function(e,n){return{$s:b,d:$,e:n,f:g}})},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0;var r=t(1),c=a(r),o=t(4),u=a(o),i=t(2),d=a(i),l=t(5),f=a(l),s=t(6),m=a(s),p=t(7),v=a(p),b=t(10),h=a(b),g={c:function(e){var n=c["default"].createComponent(h["default"],{hrefPrefix:e.a,selected:e.b,tabs:e.c},e,"d","e","f");return n},u:function(e,n){e.b===n.b&&e.a===n.a&&e.c===n.c||(n.d(h["default"],{hrefPrefix:e.a,selected:e.b,tabs:e.c},null,n.f,n.e,n,"e","f"),n.a=e.a,n.b=e.b,n.c=e.c)},r:c["default"].DEADPOOL},$={c:function(e){var n,t=document.createElement("a");return t.href="#",n=c["default"].createComponent(d["default"],{className:"c-white l-padding-r4",name:"chevron-left",size:"small"},e,"a","b","c"),t.appendChild(n),t},u:function(){},r:c["default"].DEADPOOL},y={c:function(e){var n,t=document.createElement("div");return t.className="l-padding-b2",n=c["default"].createComponent(u["default"],{left:e.a,secondary:e.b,title:e.c},e,"d","e","f"),t.appendChild(n),t.appendChild(c["default"].createDynamic(!1,t,e.g,e,"h","i")),t},u:function(e,n){e.b===n.b&&e.a===n.a&&e.c===n.c||(n.d(u["default"],{left:e.a,secondary:e.b,title:e.c},null,n.f,n.e,n,"e","f"),n.a=e.a,n.b=e.b,n.c=e.c),e.g!==n.g&&(n.g=n.h(!1,e.g,n.g,n.i,n,"h","i"))},r:c["default"].DEADPOOL},C={c:function(e){var n=c["default"].createComponent(f["default"],{className:"Card",item:e.a,list:e.b},e,"c","d","e");return n},u:function(e,n){e.a===n.a&&e.b===n.b||(n.c(f["default"],{className:"Card",item:e.a,list:e.b},null,n.e,n.d,n,"d","e"),n.a=e.a,n.b=e.b)},r:c["default"].DEADPOOL},D={c:function(e){var n=c["default"].createComponent(f["default"],{className:"Card",item:e.a,list:e.b},e,"c","d","e");return n},u:function(e,n){e.a===n.a&&e.b===n.b||(n.c(f["default"],{className:"Card",item:e.a,list:e.b},null,n.e,n.d,n,"d","e"),n.a=e.a,n.b=e.b)},r:c["default"].DEADPOOL},A=function(e){return{text:e}},O={ingredients:{title:"Ingredients",view:function(e){return{$s:D,a:A,b:e.ingredients}}},directions:{title:"Directions",view:function(e){return{$s:C,a:A,b:e.directions}}}};n["default"]=(0,m["default"])(v["default"],"get",function(e,n){var t=(e.id,e.tab),a=void 0===t?"ingredients":t;return{$s:y,a:{$s:$},b:{$s:g,a:"#"+(n&&n.name)+"?",b:a,c:O},c:n&&n.name||"",g:n&&O[a].view(n)}})},function(e,n){"use strict";n.__esModule=!0,n["default"]=function(e,n){return n>e?-1:e>n?1:0}},function(e,n){"use strict"},function(e,n){"use strict";n.__esModule=!0,n["default"]=function(e,n){return new Promise(function(t){var a=document.createElement("script");a.src=e,a.onload=function(){t(n&&window[n])},document.head.appendChild(a)})}},function(e,n){"use strict";n.__esModule=!0;var t="ticker:storage",a=void 0;try{a=JSON.parse(localStorage.getItem(t))}catch(r){}a||localStorage.setItem(t,JSON.stringify(a=[]));var c=function(){var e=a.pop();e&&(localStorage.removeItem(e),u(e,!1))},o=function(e,n){for(var t=a.length;t--;)try{return void localStorage.setItem(e,n)}catch(r){c()}},u=function(e,n){var r=a.indexOf(e);r>=0&&a.splice(r,1),n&&a.unshift(e),o(t,JSON.stringify(a))},i=function(e){u(e,!0)};n["default"]={getItem:function(e){var n=localStorage.getItem(e);return n&&i(e),n},setItem:function(e,n){return o(e,n),i(e),n},getItemObj:function(e){return JSON.parse(this.getItem(e)||null)},setItemObj:function(e,n){return this.setItem(e,JSON.stringify(n)),n}}},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){}]);