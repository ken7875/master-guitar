(function(t){function e(e){for(var n,r,c=e[0],i=e[1],u=e[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s={app:0},o=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-038dc536":"57b016a2","chunk-03ea2c4c":"1bf5d665","chunk-152792e5":"c1f6bcbd","chunk-3eb5feb5":"46459c99","chunk-45050ce1":"0ec9090f","chunk-6d27c24a":"22c99b78","chunk-f12e26fe":"028156d6"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-038dc536":1,"chunk-03ea2c4c":1,"chunk-152792e5":1,"chunk-3eb5feb5":1,"chunk-45050ce1":1,"chunk-6d27c24a":1,"chunk-f12e26fe":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-038dc536":"d3341175","chunk-03ea2c4c":"c3b122ae","chunk-152792e5":"284e5bb8","chunk-3eb5feb5":"bebb53b5","chunk-45050ce1":"3bf9f89e","chunk-6d27c24a":"8229a59c","chunk-f12e26fe":"6ba93eaa"}[t]+".css",s=i.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[t],f.parentNode.removeChild(f),a(o)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/master-guitar/dist/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"16a3":function(t,e,a){"use strict";var n=a("cd8c"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("4160"),a("b64b"),a("159b"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("bc3a"),s=a.n(r),o=a("a7fe"),c=a.n(o),i=a("1157"),u=a.n(i),l=a("7212"),d=a.n(l),f=(a("bbe3"),a("9062")),p=a.n(f),h=(a("e40d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Toasts"),a("router-view")],1)}),v=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"fixed",top:"20px",right:"20px","min-width":"300px","z-index":"11000"}},t._l(t.messages,(function(e,n){return a("div",{key:n,staticClass:"toast fade show",attrs:{id:"toast-"+n,role:"alert","aria-live":"assertive","aria-atomic":"true","data-autohide":"false"}},[a("div",{staticClass:"toast-header"},[a("div",{staticClass:"inline-block rounded mr-2",class:"bg-"+e.status,staticStyle:{width:"20px",height:"20px"}}),a("strong",{staticClass:"mr-auto"},[t._v("Master Guitar")]),a("small",[t._v("現在")]),a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"},on:{click:function(e){return t.closeToast("toast-"+n)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"toast-body"},[t._v(" "+t._s(e.message)+" ")])])})),0)},m=[],g=(a("a434"),{name:"Toasts",data:function(){return{messages:[]}},created:function(){var t=this;t.$bus.$on("message:push",(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,a),console.log($)}))},methods:{updateMessage:function(t,e){var a=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:a}),this.removeMessageWithTiming(a)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout((function(){e.messages.forEach((function(a,n){a.timestamp===t&&e.messages.splice(n,1)}))}),5e3)},closeToast:function(t){$("#".concat(t)).toast("hide")}}}),k=g,y=(a("f515"),a("2877")),C=Object(y["a"])(k,b,m,!1,null,null,null),_=C.exports,w={name:"App",components:{Toasts:_}},x=w,O=(a("5c0b"),Object(y["a"])(x,h,v,!1,null,null,null)),j=O.exports,E=(a("d3b7"),a("8c4f")),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Navbar"),a("router-view")],1)},P=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav"},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"home nav-link mr-4"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a("p",[t._v("首頁")])])],1),a("li",{staticClass:"products nav-link mr-4"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/products/all-Products"}},[a("p",[t._v("產品列表")])])],1),a("li",{staticClass:"favorite"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/favorite"}},[a("i",{staticClass:"fas fa-heart text-light"})])],1),a("li",{staticClass:"nav-item nav-link mr-4"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/carts"}},[a("i",{staticClass:"fas fa-shopping-cart"}),t.carts.length?a("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.carts.length))]):t._e()])],1)])])])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-title"},[a("a",{staticClass:"navbar-brand",attrs:{href:"./index.html"}},[a("p",[a("i",{staticClass:"fas fa-guitar"}),t._v("Master Guitar")]),a("p")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],N=(a("99af"),a("c975"),{data:function(){return{carts:[],products:[],favorProduts:[],myFavor:JSON.parse(localStorage.getItem("favorItem"))||[]}},created:function(){var t=this;this.getCart(),this.$bus.$on("get-cart",(function(){t.getCart()})),this.getProducts()},methods:{getProducts:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("07efa40d-8941-4249-aabc-164add9a7575","/ec/products");this.axios.get(e).then((function(e){t.isLoading=!1,t.products=e.data.data,t.getFavor()}))},getCart:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("07efa40d-8941-4249-aabc-164add9a7575","/ec/shopping");this.axios.get(e).then((function(e){t.carts=e.data.data}))},getFavor:function(){var t=this;this.favorProduts=this.products.filter((function(e){return t.myFavor.indexOf(e.id)>-1})),this.isloading=!1}}}),A=N,L=(a("16a3"),Object(y["a"])(A,M,S,!1,null,null,null)),F=L.exports,B={components:{Navbar:F}},I=B,D=Object(y["a"])(I,T,P,!1,null,null,null),J=D.exports;n["default"].use(E["a"]);var q=[{path:"/",component:J,children:[{path:"/",name:"index",component:function(){return a.e("chunk-f12e26fe").then(a.bind(null,"8a2e"))}},{path:"/products/:category",name:"products",component:function(){return a.e("chunk-03ea2c4c").then(a.bind(null,"81b1"))}},{path:"/product/:id",name:"product",component:function(){return a.e("chunk-152792e5").then(a.bind(null,"0fd0"))}},{path:"/carts",name:"carts",component:function(){return a.e("chunk-038dc536").then(a.bind(null,"009a"))}},{path:"/pay",name:"pay",component:function(){return a.e("chunk-6d27c24a").then(a.bind(null,"9813"))}},{path:"/confirm/:orderId",name:"confirm",component:function(){return a.e("chunk-3eb5feb5").then(a.bind(null,"dec0"))}},{path:"favorite",name:"favorite",component:function(){return a.e("chunk-45050ce1").then(a.bind(null,"8619"))}}]}],G=new E["a"]({routes:q}),V=G,W=(a("a15b"),a("ac1f"),a("25f0"),a("5319"),a("1276"),function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")});a("4989");n["default"].prototype.$bus=new n["default"];var z=a("7bb1"),H=a("4c93"),K=a("60d4");n["default"].config.productionTip=!1,window.$=u.a,n["default"].use(c.a,s.a),n["default"].use(p.a),n["default"].use(d.a),n["default"].component("Loading",p.a),n["default"].filter("thousands",W),n["default"].prototype.$bus=new n["default"],Object.keys(H).forEach((function(t){Object(z["d"])(t,H[t])})),Object(z["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),Object(z["e"])("tw",K),n["default"].component("ValidationObserver",z["a"]),n["default"].component("ValidationProvider",z["b"]),new n["default"]({router:V,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"9c0c":function(t,e,a){},cd8c:function(t,e,a){},ead7:function(t,e,a){},f515:function(t,e,a){"use strict";var n=a("ead7"),r=a.n(n);r.a}});
//# sourceMappingURL=app.6dacb438.js.map