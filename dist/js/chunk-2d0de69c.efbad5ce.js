(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de69c"],{8619:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrap"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("loadingStyle")],1),s("h2",{staticClass:"mt-12 mb-6"},[t._v("我的最愛")]),s("div",{staticClass:"container mt-md-5 mt-3 mb-7"},[s("div",{staticClass:"row"},t._l(t.favorProduts,(function(a){return s("div",{key:a.id,staticClass:"productList col-lg-3 col-md-6",attrs:{disabled:-1===t.myFavor.indexOf(a.id)}},[s("div",{staticClass:"card border-4 mb-4 z-index10"},[s("div",{staticClass:"img rounded-0 position-relative",style:"background-image: url("+a.imageUrl[0]+");"},[s("div",{staticClass:"favor position-absolute",on:{click:function(s){return t.delFavor(a.id)}}},[t.myFavor.indexOf(a.id)>-1?s("i",{staticClass:"fas fa-heart text-danger"}):t._e()])]),s("div",{staticClass:"card-body p-0"},[s("h4",{staticClass:"mb-0 mt-3"},[s("a",{attrs:{href:"./detail.html"}},[t._v(t._s(a.title))])]),s("div",{staticClass:"price"},[s("p",{staticClass:"card-text mb-0",staticStyle:{"font-size":"20px"}},[t._v(" 特價:"+t._s(a.price)+" ")])]),s("div",{staticClass:"text-muted mb-4"},[s("del",[t._v("原價:"+t._s(a.origin_price))])])]),s("div",{staticClass:"card-footer d-flex"},[s("router-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:"/product/"+a.id}},[t._v(" 詳細資訊 ")]),s("button",{staticClass:"btn btn-outline-primary btn-sm ml-auto d-flex align-items-center",attrs:{disabled:t.status.loadingItem===a.id},on:{click:function(s){return s.preventDefault(),t.addToCart(a.id)}}},[t._v(" 加入購物車 "),t.status.loadingItem===a.id?s("i",{staticClass:"ml-2 spinner-grow spinner-grow-sm d-md-none d-lg-block",staticStyle:{width:"12px",height:"12px"}}):t._e()])],1)])])})),0)])],1)},e=[],o=(s("99af"),s("4de4"),s("c975"),s("a434"),s("3a5e")),n={components:{loadingStyle:o["a"]},data:function(){return{myFavor:JSON.parse(localStorage.getItem("favorItem"))||[],favorProduts:[],products:[],isLoading:!1,status:{loadingItem:""}}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this;this.isloading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("07efa40d-8941-4249-aabc-164add9a7575","/ec/products?paged=99");this.$http.get(a).then((function(a){t.products=a.data.data,t.getFavor()})),this.isloading=!1},getFavor:function(){var t=this;this.favorProduts=this.products.filter((function(a){return t.myFavor.indexOf(a.id)>-1})),this.isloading=!1},delFavor:function(t){var a=this.myFavor.indexOf(t);-1!==a&&(this.myFavor.splice(a,1),console.log(this.myFavor),this.isloading=!1,this.getFavor()),localStorage.setItem("favorItem",JSON.stringify(this.myFavor))},addToCart:function(t){var a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.status.loadingItem=t;var i="".concat("https://course-ec-api.hexschool.io/api/").concat("07efa40d-8941-4249-aabc-164add9a7575","/ec/shopping");this.isLoading=!0,this.axios.post(i,{product:t,quantity:s}).then((function(t){a.status.loadingItem="",a.$bus.$emit("get-cart"),a.$bus.$emit("message-push","商品成功加入購物車!","success"),a.isLoading=!1})).catch((function(t){a.status.loadingItem="",a.$bus.$emit("message-push","加入失敗!".concat(t.response.data.errors),"danger")})),this.isLoading=!1}}},d=n,r=s("2877"),c=Object(r["a"])(d,i,e,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0de69c.efbad5ce.js.map