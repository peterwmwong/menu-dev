!function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){e.exports=t(3)},function(e,n,t){var r,a,o;(function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(c,u){"object"==t(n)&&"object"==t(e)?e.exports=u():(a=[],r=u,o="function"==typeof r?r.apply(n,a):r,!(void 0!==o&&(e.exports=o)))}(void 0,function(){return function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){e.exports=t(1)},function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var t={$p:null},r=document.createComment(""),a=n.DEADPOOL={push:function(){},pop:function(){}},o=n.Pool=function(){var e=new Map;return{push:function(n){var t=n.key;n.$x=e.get(t),e.set(t,n)},pop:function(n){var t=e.get(n);return t?(e.set(n,t.$x),t):void 0}}},c=function(e){e.$s.r.push(e)},u=function(){return r.cloneNode(!1)},i=function(e,n){var t=e.parentNode;t&&t.replaceChild(n,e)},d=function(e,n,t){return t?e.insertBefore(n,t):e.appendChild(n)},l=function(e,n){c(e),n.removeChild(e.$n)},f=function(e,n){for(var t=e.length,r=0;t>r;)l(e[r++],n)},s=function(e,n){for(var t=e.length,r=0;t>r;)c(e[r++]);n.textContent=""},m=function(e,n){return n.$s===e.$s&&(e.$s.u(e,n),!0)},p=function(e,n,t,r,a){if(!m(n,t)){var o=j(n),u=r.$n;n.$c=t.$c,n.$t=t.$t,n.$p=t.$p,n.$a=e,r.$n=o,r[a]=n,e.$$instance=n,o.xvdom=r,i(u,o),c(n)}},v=function(e,n,t,r,a){var o=e.$$instance,c=o.$p,u=o.$t,i=e.$$doRerender;e.$$doRerender=!1;var d=n.apply(void 0,[c,u,e].concat(a));return e.$$doRerender=i,o.$t=d,u!==d&&i&&p(e,o.$c(c,d,e),o,t,r),d},b=function(e,n,t,r){return function(){for(var a=arguments.length,o=Array(a),c=0;a>c;c++)o[c]=arguments[c];return v(e,n,t,r,o)}},h=function(e,n,r){var a={$$doRerender:!1,$$instance:t};for(var o in e)a[o]=b(a,e[o],n,r);return a},g=function(e,n,t,r){for(var a=0;t>a;)d(e,(n[a]=L(n[a])).$n,r),++a},$=function(e,n,t){for(var r=0;t>r;)e.appendChild((n[r]=L(n[r])).$n),++r},y=function(e,n,t,r,a,o,c,u,i){for(var f=new Map,s=u.$n,m=void 0,p=void 0,v=void 0;i>=c;)m=t[c++],f.set(m.key,m);for(;a>=r;)v=n[r],p=v.key,m=f.get(p),m?(m===u&&(s=s.nextSibling),f["delete"](p),v=S(m,v)):v=L(v),n[r]=v,d(e,v.$n,s),++r;f.forEach(function(n){l(n,e)})},C=function(e,n,t,r,a,o,c,u,i,f,s,m){if(u>f)for(;o>=r;)a=n[r],d(e,(n[r]=L(a)).$n,m),++r;else if(r>o)for(;f>=u;)l(t[u++],e);else y(e,n,t,r,o,i,u,s,f)},D=function(e,n,t,r,a,o){var c=0,u=0,i=!0,l=t-1,f=a-1,s=0!==t&&n[0],m=0!==a&&r[0],p=o,v=void 0,b=void 0,h=void 0;e:for(;i&&f>=c&&l>=u;){for(i=!1;m.key===s.key;){if(n[u]=S(m,s),c++,u++,c>f||u>l)break e;m=r[c],s=n[u],i=!0}for(v=r[f],b=n[l];v.key===b.key;){if(p=(n[l]=S(v,b)).$n,f--,l--,c>f||u>l)break e;v=r[f],b=n[l],i=!0}for(;m.key===b.key;){if(h=(n[l]=S(m,b)).$n,v.key!==b.key&&(p=d(e,h,p)),c++,l--,c>f||u>l)break e;m=r[c],b=n[l],i=!0}for(;v.key===s.key;){if(d(e,(n[u]=S(v,s)).$n,m.$n),f--,u++,c>f||u>l)break e;v=r[f],s=n[u],i=!0}}(l>=u||f>=c)&&C(e,n,r,u,s,l,b,c,m,f,v,p)},O=function(e,n,t){var r=e.parentNode,a=n.length,o=t.length;a?o?D(r,n,a,t,o,e):g(r,n,a,e):f(t,r)},A=function(e,n,t){var r=n.length,a=t.length;r?a?D(e,n,r,t,a,null):$(e,n,r):s(t,e)},N=function(e,n,t,r,a,o,c){return null==n?r.nodeValue="":n.constructor===String||n.constructor===Number?r.nodeValue=n:_(e,n,null,r,a,o,c),n},_=function(e,n,t,r,a,o,c){return i(r,M(e,r.parentNode,n,a,o,c)),n},E=function(e,n,t,r,a,o,c){return n&&m(n,t)?t:_(e,n,null,r,a,o,c)},x=function(e,n,t,r,a,o,c,u){var i=r.$a,d=i.onProps;r.$p=n,d?d():p(i,r.$c(n,r.$t,i),r,o,u)},k=function(e,n,t,r,a,o,c,u){var d=e(n||{});m(d,r)||i(a,o[c]=(o[u]=L(d)).$n)},P=function(e,n,t,r,a,o,c){return n instanceof Array?e?A(r,n,t):O(r,n,t):e?(s(t,r),r.appendChild(M(!0,r,n,a,o,c))):(f(t,r.parentNode),_(!1,n,null,r,a,o,c)),n},w=function(e,n,r,a,o,c){t.$p=n;var u=e.state,i=h(u,r,c),d=u.onInit(n||{},void 0,i);i.$$doRerender=!0;var l=e(n,d,i),f=j(l);return i.$$instance=l,l.$c=e,l.$t=d,l.$a=i,l.$p=n,r[a]=x,r[c]=l,r[o]=f,f},M=n.createDynamic=function(e,n,t,r,a,o){var c=void 0,i=void 0,d=void 0,l=void 0;return null==t||(l=t.constructor)===Boolean?(d=_,i=c=u()):l===Object?(d=E,i=c=j(t)):l===String||l===Number?(d=N,i=c=document.createTextNode(t)):l===Array&&(c=document.createDocumentFragment(),$(c,t,t.length),d=P,i=e?n:c.appendChild(u())),r[a]=d,r[o]=i,c},I=n.createComponent=function(e,n,t,r,a,o){if(e.state)return w(e,n,t,r,a,o);var c=e(n||{}),u=j(c);return t[r]=k,t[o]=c,t[a]=u,u},L=function(e){var n=e.$s,t=n.r.pop(e.key);return t?(n.u(e,t),t):((e.$n=n.c(e)).xvdom=e,e)},j=n.render=function(e){return L(e).$n},S=function(e,n){return m(n,e)?e:(n=L(n),i(e.$n,n.$n),c(e),n)},T=n.rerender=function(e,n){return S(e.xvdom,n).$n},q=n.unmount=function(e){l(e.xvdom,e.parentNode)};n["default"]={createDynamic:M,createComponent:I,render:j,rerender:T,unmount:q,Pool:o,DEADPOOL:a},n._={rerenderText:N,rerenderInstance:E,rerenderDynamic:_,rerenderArray:P}}])})}).call(n,t(8)(e))},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0,t(22);var a=t(1),o=r(a),c={c:function(e){var n=document.createElement("i");return e.b=n,n.className=e.a,n.onclick=e.c,n},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.className=t,n.a=t),t=e.c,t!==n.c&&(n.b.onclick=t,n.c=t)},r:o["default"].DEADPOOL};n["default"]=function(e){var n=e.className,t=e.name,r=e.onClick,a=e.size,o=void 0===a?"med":a;return{$s:c,a:"Icon Icon--"+o+" octicon octicon-"+t+" "+n+" t-center",c:r}}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t(25),t(17),t(18),t(21),t(14);var a=t(1),o=r(a),c=t(12),u=r(c),i=t(11),d=r(i),l={c:function(e){var n=o["default"].createComponent(v,null,e,"a","b","c");return n},u:function(){},r:o["default"].DEADPOOL},f={c:function(e){var n=o["default"].createComponent(d["default"],null,e,"a","b","c");return n},u:function(){},r:o["default"].DEADPOOL},s={c:function(e){var n=o["default"].createComponent(u["default"],{id:e.a,tab:e.b},e,"c","d","e");return n},u:function(e,n){e.a===n.a&&e.b===n.b||(n.c(u["default"],{id:e.a,tab:e.b},null,n.e,n.d,n,"d","e"),n.a=e.a,n.b=e.b)},r:o["default"].DEADPOOL},m={c:function(e){var n=document.createElement("body");return e.b=n,n.className=e.a,n.appendChild(o["default"].createDynamic(!0,n,e.c,e,"d","e")),n},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.className=t,n.a=t),e.c!==n.c&&(n.c=n.d(!0,e.c,n.c,n.e,n,"d","e"))},r:o["default"].DEADPOOL},p="App fit fullbleed "+(window.navigator.standalone?"is-apple-standalone":""),v=function(e,n){var t=n.view;return{$s:m,a:p,c:t}};v.state={onInit:function(e,n,t){var r=t.onHashChange;return window.onhashchange=r,r()},onHashChange:function(e,n){var t=window.location.hash.slice(1).split("?"),r=t[0],a=t[1],o=decodeURIComponent(r);return n&&o!==n.recipeName&&(document.body.scrollTop=0),o?{recipeName:o,view:{$s:s,a:o,b:a}}:{view:{$s:f}}}},document.body=o["default"].render({$s:l})},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0,t(19);var a=t(1),o=r(a),c=t(3),u=r(c),i=t(2),d=r(i),l={c:function(e){var n,t,r,a=document.createElement("div");return e.b=a,a.className=e.a,n=document.createElement("div"),e.d=n,n.className=e.c,t=document.createElement("div"),t.className="layout horizontal center-center l-height14 l-padding-h4",t.appendChild(o["default"].createDynamic(!1,t,e.e,e,"f","g")),r=document.createElement("div"),r.className="l-padding-r0 t-truncate t-font-size-20 flex",e.i=r,r.textContent=e.h,t.appendChild(r),r=o["default"].createComponent(d["default"],{className:"t-bold c-white l-padding-h4",name:"search",onClick:e.j,size:"small"},e,"k","l","m"),t.appendChild(r),t.appendChild(o["default"].createDynamic(!1,t,e.n,e,"o","p")),n.appendChild(t),n.appendChild(o["default"].createDynamic(!1,n,e.q,e,"r","s")),a.appendChild(n),a},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.className=t,n.a=t),t=e.c,t!==n.c&&(n.d.className=t,n.c=t),e.e!==n.e&&(n.e=n.f(!1,e.e,n.e,n.g,n,"f","g")),t=e.h,t!==n.h&&(n.i.textContent=t,n.h=t),e.j!==n.j&&(n.k(d["default"],{className:"t-bold c-white l-padding-h4",name:"search",onClick:e.j,size:"small"},null,n.m,n.l,n,"l","m"),n.j=e.j),e.n!==n.n&&(n.n=n.o(!1,e.n,n.n,n.p,n,"o","p")),e.q!==n.q&&(n.q=n.r(!1,e.q,n.q,n.s,n,"r","s"))},r:o["default"].DEADPOOL},f=function(){u["default"].showSearch()},s=function(e,n){var t=e.title,r=e.secondary,a=e.left,o=e.right,c=n.scrollClass;return{$s:l,a:"AppToolbar "+(r?"AppToolbar--withSecondary":""),c:"AppToolbar-bar fixed fixed--top c-white bg-purple "+c,e:a,h:t,j:f,n:o,q:r}};s.state={onInit:function(e,n,t){var r=t.onScroll;return requestAnimationFrame(function(){return document.body.onscroll=r}),r()},onScroll:function(e,n){var t=document.body?document.body.scrollTop:0;return{scrollTop:t,scrollClass:t>60&&t-n.scrollTop>0?" is-scrolling-down":""}}},n["default"]=s},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0,t(23);var a=t(1),o=r(a),c=t(9),u=(r(c),t(2)),i=r(u),d={c:function(e){var n=document.createElement("div");return e.b=n,n.className=e.a,n.hidden=e.c,n.appendChild(o["default"].createDynamic(!0,n,e.d,e,"e","f")),n},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.className=t,n.a=t),t=e.c,t!==n.c&&(n.b.hidden=t,n.c=t),e.d!==n.d&&(n.d=n.e(!0,e.d,n.d,n.f,n,"e","f"))},r:o["default"].DEADPOOL},l={c:function(e){var n,t,r=document.createElement("a");return e.b=r,r.className=e.a,r.href=e.c,r.appendChild(o["default"].createDynamic(!1,r,e.d,e,"e","f")),n=document.createElement("div"),n.className="l-margin-l1",n.appendChild(o["default"].createDynamic(!1,n,e.g,e,"h","i")),t=document.createElement("div"),t.className="t-light t-font-size-14 c-gray-dark",e.k=t,t.textContent=e.j,n.appendChild(t),r.appendChild(n),r},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.className=t,n.a=t),t=e.c,t!==n.c&&(n.b.href=t,n.c=t),e.d!==n.d&&(n.d=n.e(!1,e.d,n.d,n.f,n,"e","f")),e.g!==n.g&&(n.g=n.h(!1,e.g,n.g,n.i,n,"h","i")),t=e.j,t!==n.j&&(n.k.textContent=t,n.j=t)},r:o["default"].DEADPOOL},f={c:function(e){var n=o["default"].createComponent(i["default"],{className:"l-margin-r2",name:e.a},e,"b","c","d");return n},u:function(e,n){e.a!==n.a&&(n.b(i["default"],{className:"l-margin-r2",name:e.a},null,n.d,n.c,n,"c","d"),n.a=e.a)},r:o["default"].DEADPOOL};n["default"]=function(e){var n=e.className,t=e.context,r=e.list,a=e.item,o=e.noDivider,c=e.transform,u="List-item layout horizontal center t-normal "+(o?"List-item--noDivider":"");return r=r||[],c&&(r=c(r)),{$s:d,a:n,c:!r||!r.length,d:r.map(function(e,n){var r=a(e,t),o=r.href,c=r.key,i=void 0===c?n:c,d=r.icon,s=r.text,m=r.secondaryText;return{$s:l,a:u,c:o,d:d&&{$s:f,a:d},g:s,j:m||"",key:i}})}}},function(e,n){"use strict";n.__esModule=!0,n["default"]=function(e,n,t){var r=function(t,r,a){var o=a.onLoadModel;return e[n](t).then(o),e["get"===n?"localGet":"localQuery"](t)};return t.state={onInit:r,onProps:r,onLoadModel:function(e,n,t,r){return r}},t}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0;var a=t(16),o=r(a),c=t(15),u=r(c),i="menu:Recipes",d="https://menu-dev.firebaseio.com/recipes",l=function(){return o["default"].getItemObj(i)||[]},f=function(e){var n=e.id;return l().find(function(e){var t=e.name;return t===n})},s=void 0,m=function(){return s||(s=new Promise(function(e){setTimeout(function(){e((0,u["default"])("../vendor/firebase/firebase.js").then(function(){return new Firebase(d)}))},500)}))};n["default"]={localGet:f,get:function(e){return Promise.resolve(f(e))},localQuery:l,query:function(){return m().then(function(e){return new Promise(function(n,t){e.once("value",function(e){var r=e.val();return r?void n(o["default"].setItemObj(i,r)):t("Couldn't find recipes")})})})},save:function(e){return m().then(function(n){return new Promise(function(t,r){n.set(e,function(n){return n?r(n):void t(o["default"].setItemObj(i,e))})})})}}},function(e,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0,t(20);var a=t(1),o=r(a),c={c:function(e){var n=document.createElement("img");return n.className="Avatar",e.b=n,n.onerror=e.a,n.src=e.c,n},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.onerror=t,n.a=t),t=e.c,t!==n.c&&(n.b.src=t,n.c=t)},r:o["default"].DEADPOOL},u="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i=function(e){var n=e.target;n.src=u};n["default"]=function(e){var n=e.avatarUrl;return{$s:c,a:i,c:n+"v=3&s=32"}}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0,t(24);var a=t(1),o=r(a),c={c:function(e){var n=document.createElement("div");return n.className="Tabs layout horizontal end center-justified c-white l-height10 t-font-size-14 t-uppercase t-normal",n.appendChild(o["default"].createDynamic(!0,n,e.a,e,"b","c")),n},u:function(e,n){e.a!==n.a&&(n.a=n.b(!0,e.a,n.a,n.c,n,"b","c"))},r:o["default"].DEADPOOL},u={c:function(e){var n=document.createElement("a");return e.b=n,n.className=e.a,n.href=e.c,n.appendChild(o["default"].createDynamic(!0,n,e.d,e,"e","f")),n},u:function(e,n){var t;t=e.a,t!==n.a&&(n.b.className=t,n.a=t),t=e.c,t!==n.c&&(n.b.href=t,n.c=t),e.d!==n.d&&(n.d=n.e(!0,e.d,n.d,n.f,n,"e","f"))},r:o["default"].DEADPOOL};n["default"]=function(e){var n=e.tabs,t=e.selected,r=e.hrefPrefix,a=void 0===r?"":r;return{$s:c,a:Object.keys(n).map(function(e){var r=n[e];return{$s:u,a:"Tabs-tab u-cursor-pointer l-padding-h4 l-padding-b2 "+(t===e?"is-selected":""),c:""+a+(r.href||e),d:r.title||e,key:e}})}}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0;var a=t(1),o=r(a),c=t(4),u=r(c),i=t(6),d=r(i),l=t(5),f=r(l),s=t(13),m=r(s),p=t(7),v=r(p),b={c:function(e){var n,t=document.createElement("div");return t.className="l-padding-b2",n=o["default"].createComponent(u["default"],{title:"Recipes"},e,"a","b","c"),t.appendChild(n),n=o["default"].createComponent(f["default"],{className:"Card",item:e.d,list:e.e,transform:e.f},e,"g","h","i"),t.appendChild(n),t},u:function(e,n){e.e===n.e&&e.d===n.d&&e.f===n.f||(n.g(f["default"],{className:"Card",item:e.d,list:e.e,transform:e.f},null,n.i,n.h,n,"h","i"),n.d=e.d,n.e=e.e,n.f=e.f)},r:o["default"].DEADPOOL},h=function(e,n){return(0,m["default"])(e.name,n.name)},g=function(e){return e.sort(h)},$=function(e){var n=e.name;return{href:"#"+encodeURIComponent(n),icon:"bookmark",text:n}};n["default"]=(0,d["default"])(v["default"],"query",function(e,n){return{$s:b,d:$,e:n,f:g}})},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0;var a=t(1),o=r(a),c=t(4),u=r(c),i=t(2),d=r(i),l=t(5),f=r(l),s=t(6),m=r(s),p=t(7),v=r(p),b=t(10),h=r(b),g={c:function(e){var n=o["default"].createComponent(h["default"],{hrefPrefix:e.a,selected:e.b,tabs:e.c},e,"d","e","f");return n},u:function(e,n){e.b===n.b&&e.a===n.a&&e.c===n.c||(n.d(h["default"],{hrefPrefix:e.a,selected:e.b,tabs:e.c},null,n.f,n.e,n,"e","f"),n.a=e.a,n.b=e.b,n.c=e.c)},r:o["default"].DEADPOOL},$={c:function(e){var n,t=document.createElement("a");return t.href="#",n=o["default"].createComponent(d["default"],{className:"c-white l-padding-r4",name:"chevron-left",size:"small"},e,"a","b","c"),t.appendChild(n),t},u:function(){},r:o["default"].DEADPOOL},y={c:function(e){var n,t=document.createElement("div");return t.className="l-padding-b2",n=o["default"].createComponent(u["default"],{left:e.a,secondary:e.b,title:e.c},e,"d","e","f"),t.appendChild(n),t.appendChild(o["default"].createDynamic(!1,t,e.g,e,"h","i")),t},u:function(e,n){e.b===n.b&&e.a===n.a&&e.c===n.c||(n.d(u["default"],{left:e.a,secondary:e.b,title:e.c},null,n.f,n.e,n,"e","f"),n.a=e.a,n.b=e.b,n.c=e.c),e.g!==n.g&&(n.g=n.h(!1,e.g,n.g,n.i,n,"h","i"))},r:o["default"].DEADPOOL},C={c:function(e){var n=o["default"].createComponent(f["default"],{className:"Card",item:e.a,list:e.b},e,"c","d","e");return n},u:function(e,n){e.a===n.a&&e.b===n.b||(n.c(f["default"],{className:"Card",item:e.a,list:e.b},null,n.e,n.d,n,"d","e"),n.a=e.a,n.b=e.b)},r:o["default"].DEADPOOL},D={c:function(e){var n=o["default"].createComponent(f["default"],{className:"Card",item:e.a,list:e.b},e,"c","d","e");return n},u:function(e,n){e.a===n.a&&e.b===n.b||(n.c(f["default"],{className:"Card",item:e.a,list:e.b},null,n.e,n.d,n,"d","e"),n.a=e.a,n.b=e.b)},r:o["default"].DEADPOOL},O=function(e){return{text:e}},A={ingredients:{title:"Ingredients",view:function(e){return{$s:D,a:O,b:e.ingredients}}},directions:{title:"Directions",view:function(e){return{$s:C,a:O,b:e.directions}}}};n["default"]=(0,m["default"])(v["default"],"get",function(e,n){var t=(e.id,e.tab),r=void 0===t?"ingredients":t;return{$s:y,a:{$s:$},b:{$s:g,a:"#"+(n&&n.name)+"?",b:r,c:A},c:n&&n.name||"",g:n&&A[r].view(n)}})},function(e,n){"use strict";n.__esModule=!0,n["default"]=function(e,n){return n>e?-1:e>n?1:0}},function(e,n){"use strict"},function(e,n){"use strict";n.__esModule=!0,n["default"]=function(e,n){return new Promise(function(t){var r=document.createElement("script");r.src=e,r.onload=function(){t(n&&window[n])},document.head.appendChild(r)})}},function(e,n){"use strict";n.__esModule=!0;var t="ticker:storage",r=void 0;try{r=JSON.parse(localStorage.getItem(t))}catch(a){}r||localStorage.setItem(t,JSON.stringify(r=[]));var o=function(){var e=r.pop();e&&(localStorage.removeItem(e),u(e,!1))},c=function(e,n){for(var t=r.length;t--;)try{return void localStorage.setItem(e,n)}catch(a){o()}},u=function(e,n){var a=r.indexOf(e);a>=0&&r.splice(a,1),n&&r.unshift(e),c(t,JSON.stringify(r))},i=function(e){u(e,!0)};n["default"]={getItem:function(e){var n=localStorage.getItem(e);return n&&i(e),n},setItem:function(e,n){return c(e,n),i(e),n},getItemObj:function(e){return JSON.parse(this.getItem(e)||null)},setItemObj:function(e,n){return this.setItem(e,JSON.stringify(n)),n}}},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){}]);