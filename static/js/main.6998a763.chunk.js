/*! For license information please see main.6998a763.chunk.js.LICENSE.txt */
(this["webpackJsonppa-react-boilerplate"]=this["webpackJsonppa-react-boilerplate"]||[]).push([[0],{14:function(t,e,r){t.exports={contCart:"CartProducts_contCart__67Bjb",active:"CartProducts_active__2F5LW",activeCart:"CartProducts_activeCart__1FAg4",CartProducts_contCart__67Bjb:"CartProducts_CartProducts_contCart__67Bjb__2vrNd"}},17:function(t,e,r){t.exports={p__grid:"ProductsGrid_p__grid__y0eGP"}},18:function(t,e,r){t.exports={navbar:"header_navbar__29XLa",actions:"header_actions__1xPQ8"}},26:function(t,e,r){t.exports={footer:"footer_footer__15JWM"}},29:function(t,e,r){t.exports=r(40)},39:function(t,e,r){},40:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(24),c=r.n(o),i=r(8),u=r(3),l=r(10),s=r(2),m=r(12),f=function(t){return function(t){localStorage.setItem("cart",JSON.stringify(t.length>0?t:[]))}(t),{itemCount:t.reduce((function(t,e){return t+e.quantity}),0),total:t.reduce((function(t,e){return t+e.price*e.quantity}),0).toFixed(2)}},d=function(t,e){switch(e.type){case"ADD_ITEM":return t.cartItems.find((function(t){return t.id===e.payload.id}))||t.cartItems.push(Object(s.a)(Object(s.a)({},e.payload),{},{quantity:1})),Object(s.a)(Object(s.a)(Object(s.a)({},t),f(t.cartItems)),{},{cartItems:Object(m.a)(t.cartItems)});case"REMOVE_ITEM":return Object(s.a)(Object(s.a)(Object(s.a)({},t),f(t.cartItems.filter((function(t){return t.id!==e.payload.id})))),{},{cartItems:Object(m.a)(t.cartItems.filter((function(t){return t.id!==e.payload.id})))});case"INCREASE":return t.cartItems[t.cartItems.findIndex((function(t){return t.id===e.payload.id}))].quantity++,Object(s.a)(Object(s.a)(Object(s.a)({},t),f(t.cartItems)),{},{cartItems:Object(m.a)(t.cartItems)});case"DECREASE":return t.cartItems[t.cartItems.findIndex((function(t){return t.id===e.payload.id}))].quantity--,Object(s.a)(Object(s.a)(Object(s.a)({},t),f(t.cartItems)),{},{cartItems:Object(m.a)(t.cartItems)});case"OPEN_CART":return Object(s.a)(Object(s.a)({},t),{},{open:!0});case"HIDE_CART":return Object(s.a)(Object(s.a)({},t),{},{open:!1});default:return t}},h=Object(n.createContext)(),p=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],v=Object(s.a)(Object(s.a)({cartItems:p},f(p)),{},{open:!1}),y=function(t){var e=t.children,r=Object(n.useReducer)(d,v),o=Object(l.a)(r,2),c=o[0],i=o[1],u=Object(s.a)({removeProduct:function(t){i({type:"REMOVE_ITEM",payload:t})},addProduct:function(t){i({type:"ADD_ITEM",payload:t})},increase:function(t){i({type:"INCREASE",payload:t})},decrease:function(t){i({type:"DECREASE",payload:t})},showCart:function(){i({type:"OPEN_CART"})},hideCart:function(){i({type:"HIDE_CART"})}},c);return a.a.createElement(h.Provider,{value:u},e)},g=r(18),b=r.n(g),E=function(){var t=Object(n.useContext)(h),e=t.itemCount,r=t.showCart,o=t.hideCart,c=t.open;return a.a.createElement("nav",{className:"".concat(b.a.navbar," navbar navbar-expand-lg navbar-dark bg-dark")},a.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Store"),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},a.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{to:"/"},"Productos"))),a.a.createElement("div",{className:"".concat(b.a.actions," my-lg-0")},a.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){c?o():r()}},a.a.createElement("i",{className:"bi bi-cart pr-2"}),a.a.createElement("span",{className:"badge badge-light"},e)))))},w=r(26),x=r.n(w),N=function(){return a.a.createElement("footer",{className:"".concat(x.a.footer,"  mt-5 p-3")},"2021 \xa9 cbregante")},_=function(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)},O=function(t){var e=t.product,r=Object(n.useContext)(h),o=r.increase,c=r.decrease,i=r.removeProduct;return a.a.createElement("div",{className:"row no-gutters py-2"},a.a.createElement("div",{className:"col-8 p-2"},a.a.createElement("p",{className:"mb-1"},e.title," ",a.a.createElement("span",{className:"badge badge-secondary"},"x ",e.quantity)),a.a.createElement("p",{className:"mb-1"},"Precio: ",_(e.price)," ")),a.a.createElement("div",{className:"col-4 p-2 text-right"},a.a.createElement("button",{onClick:function(){return o(e)},className:"btn btn-primary btn-sm mr-2 mb-1"},a.a.createElement("i",{className:"bi bi-plus-circle"})),e.quantity>1&&a.a.createElement("button",{onClick:function(){return c(e)},className:"btn btn-danger btn-sm mb-1"},a.a.createElement("i",{className:"bi bi-arrow-down-circle"})),1===e.quantity&&a.a.createElement("button",{onClick:function(){return i(e)},className:"btn btn-danger btn-sm mb-1"},a.a.createElement("i",{className:"bi bi-trash"}))))},j=r(14),L=r.n(j),C=function(){var t=Object(n.useContext)(h).cartItems;return a.a.createElement("div",{className:L.a.p__container},a.a.createElement("div",{className:"card card-body border-0"},t.map((function(t){return a.a.createElement(O,{key:t.id,product:t})}))))},I=function(){var t=Object(n.useContext)(h),e=t.total,r=t.cartItems,o=t.itemCount,c=t.open;return a.a.createElement("div",{className:"".concat(L.a.contCart," ").concat(c?"activeCart":""),id:"contCart"},a.a.createElement("div",{className:"text-center mt-3"},a.a.createElement("h3",null,"Carrito")),a.a.createElement("div",{className:"row no-gutters justify-content-center"},a.a.createElement("div",{className:"col-12"},r.length>0?a.a.createElement(C,null):a.a.createElement("div",{className:"p-3 text-center text-muted"},"no se agregaron productos")),r.length>0&&a.a.createElement("div",{className:"col-12 p-3"},a.a.createElement("div",{className:"card card-body"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-6"},a.a.createElement("p",{className:"mb-1"},"Total Items"),a.a.createElement("h5",{className:" mb-3 txt-right"},o)),a.a.createElement("div",{className:"col-6"},a.a.createElement("p",{className:"mb-1"},"Total"),a.a.createElement("h5",{className:"m-0 txt-right"},_(e))))))))},k=r(15),P=function(t){var e=t.title,r=t.description,n=t.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(k.a,null,a.a.createElement("title",null,e?e+" - Shoppin Cart":"Shoppin Cart"),a.a.createElement("meta",{name:"description",content:r||"Shoppin Cart"})),a.a.createElement(E,null),a.a.createElement(I,null),a.a.createElement("main",{className:"container"},n),a.a.createElement(N,null))},S=function(t){var e=t.product,r=Object(n.useContext)(h),o=r.addProduct,c=r.cartItems,u=r.increase,l=function(t){return!!c.find((function(e){return e.id===t.id}))};return a.a.createElement("div",{className:"card card-body"},a.a.createElement("img",{style:{display:"block",margin:"0 auto 10px",maxHeight:"200px"},className:"img-fluid",src:e.image+"?v="+e.id,alt:""}),a.a.createElement("p",null,e.title),a.a.createElement("h3",{className:"text-left"},_(e.price)),a.a.createElement("div",{className:"text-right"},a.a.createElement(i.b,{to:"./product/".concat(e.id),className:"btn btn-link btn-sm mr-2"},"Ver"),l(e)&&a.a.createElement("button",{onClick:function(){return u(e)},className:"btn btn-outline-primary btn-sm"},"Aumentar"),!l(e)&&a.a.createElement("button",{onClick:function(){return o(e)},className:"btn btn-primary btn-sm"},"Agregar")))},T=r(16);function A(){A=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var o=e&&e.prototype instanceof f?e:f,c=Object.create(o.prototype),i=new O(a||[]);return n(c,"_invoke",{value:w(t,r,i)}),c}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var m={};function f(){}function d(){}function h(){}var p={};u(p,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&r.call(y,o)&&(p=y);var g=h.prototype=f.prototype=Object.create(p);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var a;n(this,"_invoke",{value:function(n,o){function c(){return new e((function(a,c){!function n(a,o,c,i){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,m=l.value;return m&&"object"==typeof m&&r.call(m,"__await")?e.resolve(m.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(m).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,i)}))}i(u.arg)}(n,o,a,c)}))}return a=a?a.then(c,c):c()}})}function w(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=x(c,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=u(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(E.prototype),u(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new E(l(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},b(g),u(g,i,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}var G=function(){var t=Object(T.a)(A().mark((function t(){var e,r;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://fakestoreapi.com/products",t.next=3,fetch("https://fakestoreapi.com/products");case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=Object(n.createContext)(),R=function(t){var e=t.children,r=function(){var t=Object(n.useState)({data:[],loading:!0}),e=Object(l.a)(t,2),r=e[0],a=e[1];return Object(n.useEffect)((function(){G().then((function(t){a({data:t,loading:!1})}))}),[]),r}().data;return a.a.createElement(F.Provider,{value:{products:r}},e)},D=r(17),q=r.n(D),M=function(){var t=Object(n.useContext)(F).products;return a.a.createElement("div",{className:q.a.p__container},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm-8"},a.a.createElement("div",{className:"py-3"},t.length," Productos"))),a.a.createElement("div",{className:q.a.p__grid},t.map((function(t){return a.a.createElement(S,{key:t.id,product:t})}))),a.a.createElement("div",{className:q.a.p__footer}))},B=function(){return a.a.createElement(P,{title:"Productos",description:"This is the Store page"},a.a.createElement("div",null,a.a.createElement("div",{className:"text-center mt-5"},a.a.createElement("h1",null,"Productos")),a.a.createElement(M,null)))},J=function(){return a.a.createElement(P,null,a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("h1",null,"404"),a.a.createElement("p",null,"This is the 404 Page.")))};function W(){W=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var o=e&&e.prototype instanceof f?e:f,c=Object.create(o.prototype),i=new O(a||[]);return n(c,"_invoke",{value:w(t,r,i)}),c}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var m={};function f(){}function d(){}function h(){}var p={};u(p,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&r.call(y,o)&&(p=y);var g=h.prototype=f.prototype=Object.create(p);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var a;n(this,"_invoke",{value:function(n,o){function c(){return new e((function(a,c){!function n(a,o,c,i){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,m=l.value;return m&&"object"==typeof m&&r.call(m,"__await")?e.resolve(m.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(m).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,i)}))}i(u.arg)}(n,o,a,c)}))}return a=a?a.then(c,c):c()}})}function w(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=x(c,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=u(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(E.prototype),u(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new E(l(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},b(g),u(g,i,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}var Y=function(){var t=Object(T.a)(W().mark((function t(e){var r,n,a;return W().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://fakestoreapi.com/products/".concat(e),t.next=3,fetch(r);case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=function(t){var e=Object(n.useState)({data:{},loading:!0}),r=Object(l.a)(e,2),a=r[0],o=r[1];return Object(n.useEffect)((function(){Y(t).then((function(t){o({data:t,loading:!1})}))}),[t]),a}(Object(u.g)().id),e=t.data,r=t.loading,o=Object(n.useContext)(h),c=o.addProduct,i=o.cartItems,s=o.increase;if(!e)return a.a.createElement(u.a,{to:"/"});var m=function(t){return!!i.find((function(e){return e.id===t.id}))};return a.a.createElement(P,{title:"Productos",description:"This is the Store page"},!r&&a.a.createElement("div",{className:"row mt-5"},a.a.createElement("div",{className:"col-md-6 col-12"},a.a.createElement("img",{className:"img-fluid img-product",src:e.image+"?v="+e.id,alt:""})),a.a.createElement("div",{className:"col-md-6 col-12 mt-5"},a.a.createElement("h2",{className:"mt-5"},e.title),a.a.createElement("h3",{className:"text-left"},_(e.price)),a.a.createElement("p",null,e.description),a.a.createElement("h4",null,a.a.createElement("span",{className:"badge badge-secondary"},e.category)),m(e)&&a.a.createElement("button",{onClick:function(){return s(e)},className:"btn btn-outline-primary btn-sm"},"Aumentar"),!m(e)&&a.a.createElement("button",{onClick:function(){return c(e)},className:"btn btn-primary btn-sm"},"Agregar"))))},V=function(){return a.a.createElement(i.a,null,a.a.createElement(u.d,null,a.a.createElement(u.b,{exact:!0,path:"/",component:B}),a.a.createElement(u.b,{exact:!0,path:"/product/:id",component:H}),a.a.createElement(u.b,{path:"*",component:J})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(39);c.a.render(a.a.createElement(k.b,null,a.a.createElement(R,null,a.a.createElement(y,null,a.a.createElement(V,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.6998a763.chunk.js.map