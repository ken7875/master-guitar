(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-259c460d"],{"057f":function(t,e,r){var a=r("fc6a"),o=r("241c").f,s={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return o(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==s.call(t)?i(t):o(a(t))}},3519:function(t,e,r){"use strict";var a=r("b0b2"),o=r.n(a);o.a},"4de4":function(t,e,r){"use strict";var a=r("23e7"),o=r("b727").filter,s=r("1dde"),n=r("ae40"),i=s("filter"),c=n("filter");a({target:"Array",proto:!0,forced:!i||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"746f":function(t,e,r){var a=r("428f"),o=r("5135"),s=r("e538"),n=r("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});o(e,t)||n(e,t,{value:s.f(t)})}},9813:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),r("div",{staticClass:"checklist row flex-row-reverse justify-content-center pb-5"},[r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"border p-4 mb-4"},[t._l(t.carts,(function(e){return r("div",{key:e.product.id,staticClass:"checklist-content d-flex mb-4"},[r("img",{staticClass:"mr-2",staticStyle:{width:"48px",height:"48px","object-fit":"cover"},attrs:{src:""+e.product.imageUrl[0]}}),r("div",{staticClass:"w-100"},[r("div",{staticClass:"d-flex justify-content-between"},[r("p",{staticClass:"mb-0 font-weight-bold"},[t._v(t._s(e.product.title))]),r("p",{staticClass:"mb-0"},[t._v(t._s(e.product.price))])]),r("p",{staticClass:"mb-0 font-weight-bold"},[t._v("X"+t._s(e.quantity))])])])})),r("table",{staticClass:"table mt-4 border-top border-bottom text-muted"},[r("tbody",[r("tr",[r("th",{staticClass:"border-0 px-0 pt-4 font-weight-normal",attrs:{scope:"row"}},[t._v("$總計")]),r("td",{staticClass:"text-right border-0 px-0 pt-4"},[t._v("NT$"+t._s(t.total))])])])]),r("div",{staticClass:"d-flex justify-content-between mt-4"},[r("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("Total")]),r("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("NT$"+t._s(t.total))])])],2)]),r("div",{staticClass:"form-group col-md-7"},[t._m(1),r("validation-observer",{staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[r("form",{on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,o=e.classes,s=e.passed;return[r("label",{attrs:{for:"name"}},[t._v("姓名")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"},{name:"model",rawName:"v-model.trim",value:t.form.name,expression:"form.name",modifiers:{trim:!0}}],staticClass:"form-control",class:o,attrs:{id:"name",type:"name",name:"姓名"},domProps:{value:t.form.name,value:t.form.name},on:{input:[function(e){e.target.composing||t.$set(t.form,"name",e.target.value.trim())},function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}],blur:function(e){return t.$forceUpdate()}}}),a[0]?r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e(),s?r("span",{staticClass:"valid-feedback"},[t._v("名字 輸入正確")]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,o=e.classes,s=e.passed;return[r("label",{attrs:{for:"email"}},[t._v("郵件")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"},{name:"model",rawName:"v-model.trim",value:t.form.email,expression:"form.email",modifiers:{trim:!0}}],staticClass:"form-control",class:o,attrs:{id:"email",type:"email",name:"郵件"},domProps:{value:t.form.email,value:t.form.email},on:{input:[function(e){e.target.composing||t.$set(t.form,"email",e.target.value.trim())},function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}],blur:function(e){return t.$forceUpdate()}}}),a[0]?r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e(),s?r("span",{staticClass:"valid-feedback"},[t._v("郵件 輸入正確")]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,o=e.classes,s=e.passed;return[r("label",{attrs:{for:"tel"}},[t._v("電話")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"},{name:"model",rawName:"v-model.trim",value:t.form.tel,expression:"form.tel",modifiers:{trim:!0}}],staticClass:"form-control",class:o,attrs:{id:"tel",type:"tel",name:"電話"},domProps:{value:t.form.tel,value:t.form.tel},on:{input:[function(e){e.target.composing||t.$set(t.form,"tel",e.target.value.trim())},function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}],blur:function(e){return t.$forceUpdate()}}}),a[0]?r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e(),s?r("span",{staticClass:"valid-feedback"},[t._v("電話 輸入正確")]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,o=e.classes,s=e.passed;return[r("label",{attrs:{for:"address"}},[t._v("地址")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:o,attrs:{id:"address",type:"text"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),a[0]?r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e(),s?r("span",{staticClass:"valid-feedback"},[t._v("地址 輸入正確")]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,o=e.classes,s=e.passed;return[r("label",{attrs:{for:"payment"}},[t._v("付款方式")]),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.payment,expression:"form.payment",modifiers:{trim:!0}}],staticClass:"form-control",class:o,attrs:{required:"",id:"payment",name:"付款方式"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"payment",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",disabled:""}},[t._v("請選擇付款方式")]),r("option",{attrs:{value:"WebATM"}},[t._v("WebATM")]),r("option",{attrs:{value:"ATM"}},[t._v("ATM")]),r("option",{attrs:{value:"CVS"}},[t._v("CVS")]),r("option",{attrs:{value:"Barcode"}},[t._v("Barcode")]),r("option",{attrs:{value:"Credit"}},[t._v("Credit")]),r("option",{attrs:{value:"ApplePay"}},[t._v("ApplePay")]),r("option",{attrs:{value:"GooglePay"}},[t._v("GooglePay")])]),a[0]?r("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))]):t._e(),s?r("span",{staticClass:"valid-feedback"},[t._v("已選擇付款方式")]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"message"}},[t._v("留言")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",cols:"30",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-primary pointer",attrs:{type:"submit",disabled:a},on:{click:function(e){t.page=1}}},[t._v(" 下一步 ")])])])]}}])})],1)])],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-10"},[r("h3",{staticClass:"title font-weight-bold"},[t._v("Checkout")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-title h4"},[r("p",[t._v("訂購人資料")])])}];r("99af"),r("4160"),r("159b"),r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b");function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={data:function(){return{form:{name:"",email:"",tel:"",address:"",payment:"",message:""},isLoading:!1,carts:[],total:0}},created:function(){this.getCart()},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("07efa40d-8941-4249-aabc-164add9a7575","/ec/shopping");this.$http.get(e).then((function(e){t.isLoading=!1,t.carts=e.data.data,t.getTotalPrice()}))},getTotalPrice:function(){var t=this;this.total=0,this.carts.forEach((function(e){t.total+=e.product.price*e.quantity}))},createOrder:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("07efa40d-8941-4249-aabc-164add9a7575","/ec/orders"),r=i({},this.form);this.axios.post(e,r).then((function(e){t.isLoading=!1,t.getCart(),t.$bus.$emit("get-cart"),t.$router.push("/confirm/".concat(e.data.data.id))}))}}},l=c,f=(r("3519"),r("2877")),u=Object(f["a"])(l,a,o,!1,null,"43f56bf1",null);e["default"]=u.exports},a4d3:function(t,e,r){"use strict";var a=r("23e7"),o=r("da84"),s=r("d066"),n=r("c430"),i=r("83ab"),c=r("4930"),l=r("fdbf"),f=r("d039"),u=r("5135"),d=r("e8b5"),m=r("861d"),p=r("825a"),v=r("7b0b"),b=r("fc6a"),g=r("c04e"),h=r("5c6c"),y=r("7c73"),_=r("df75"),w=r("241c"),C=r("057f"),O=r("7418"),x=r("06cf"),j=r("9bf2"),P=r("d1e7"),S=r("9112"),k=r("6eeb"),$=r("5692"),N=r("f772"),T=r("d012"),E=r("90e3"),q=r("b622"),A=r("e538"),D=r("746f"),L=r("d44e"),J=r("69f3"),M=r("b727").forEach,U=N("hidden"),W="Symbol",B="prototype",F=q("toPrimitive"),G=J.set,V=J.getterFor(W),I=Object[B],Q=o.Symbol,X=s("JSON","stringify"),z=x.f,H=j.f,K=C.f,R=P.f,Y=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),rt=$("wks"),at=o.QObject,ot=!at||!at[B]||!at[B].findChild,st=i&&f((function(){return 7!=y(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,r){var a=z(I,e);a&&delete I[e],H(t,e,r),a&&t!==I&&H(I,e,a)}:H,nt=function(t,e){var r=Y[t]=y(Q[B]);return G(r,{type:W,tag:t,description:e}),i||(r.description=e),r},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ct=function(t,e,r){t===I&&ct(Z,e,r),p(t);var a=g(e,!0);return p(r),u(Y,a)?(r.enumerable?(u(t,U)&&t[U][a]&&(t[U][a]=!1),r=y(r,{enumerable:h(0,!1)})):(u(t,U)||H(t,U,h(1,{})),t[U][a]=!0),st(t,a,r)):H(t,a,r)},lt=function(t,e){p(t);var r=b(e),a=_(r).concat(pt(r));return M(a,(function(e){i&&!ut.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):lt(y(t),e)},ut=function(t){var e=g(t,!0),r=R.call(this,e);return!(this===I&&u(Y,e)&&!u(Z,e))&&(!(r||!u(this,e)||!u(Y,e)||u(this,U)&&this[U][e])||r)},dt=function(t,e){var r=b(t),a=g(e,!0);if(r!==I||!u(Y,a)||u(Z,a)){var o=z(r,a);return!o||!u(Y,a)||u(r,U)&&r[U][a]||(o.enumerable=!0),o}},mt=function(t){var e=K(b(t)),r=[];return M(e,(function(t){u(Y,t)||u(T,t)||r.push(t)})),r},pt=function(t){var e=t===I,r=K(e?Z:b(t)),a=[];return M(r,(function(t){!u(Y,t)||e&&!u(I,t)||a.push(Y[t])})),a};if(c||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===I&&r.call(Z,t),u(this,U)&&u(this[U],e)&&(this[U][e]=!1),st(this,e,h(1,t))};return i&&ot&&st(I,e,{configurable:!0,set:r}),nt(e,t)},k(Q[B],"toString",(function(){return V(this).tag})),k(Q,"withoutSetter",(function(t){return nt(E(t),t)})),P.f=ut,j.f=ct,x.f=dt,w.f=C.f=mt,O.f=pt,A.f=function(t){return nt(q(t),t)},i&&(H(Q[B],"description",{configurable:!0,get:function(){return V(this).description}}),n||k(I,"propertyIsEnumerable",ut,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),M(_(rt),(function(t){D(t)})),a({target:W,stat:!0,forced:!c},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),a({target:"Object",stat:!0,forced:!c,sham:!i},{create:ft,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),a({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:mt,getOwnPropertySymbols:pt}),a({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),X){var vt=!c||f((function(){var t=Q();return"[null]"!=X([t])||"{}"!=X({a:t})||"{}"!=X(Object(t))}));a({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var a,o=[t],s=1;while(arguments.length>s)o.push(arguments[s++]);if(a=e,(m(e)||void 0!==t)&&!it(t))return d(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!it(e))return e}),o[1]=e,X.apply(null,o)}})}Q[B][F]||S(Q[B],F,Q[B].valueOf),L(Q,W),T[U]=!0},b0b2:function(t,e,r){},dbb4:function(t,e,r){var a=r("23e7"),o=r("83ab"),s=r("56ef"),n=r("fc6a"),i=r("06cf"),c=r("8418");a({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,a=n(t),o=i.f,l=s(a),f={},u=0;while(l.length>u)r=o(a,e=l[u++]),void 0!==r&&c(f,e,r);return f}})},e439:function(t,e,r){var a=r("23e7"),o=r("d039"),s=r("fc6a"),n=r("06cf").f,i=r("83ab"),c=o((function(){n(1)})),l=!i||c;a({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(t,e){return n(s(t),e)}})},e538:function(t,e,r){var a=r("b622");e.f=a}}]);
//# sourceMappingURL=chunk-259c460d.ce1826df.js.map