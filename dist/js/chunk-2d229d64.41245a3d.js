(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229d64"],{dec0:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"confirm container"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),1===t.page?a("h2",{staticClass:"title font-weight-bold mt-12 mb-6 pb-lg-6 pb-md-4"},[t._v(" 確認帳單 ")]):t._e(),a("div",{staticClass:"row flex-row-reverse justify-content-center pb-5",class:{show1:1===t.page,none:2===t.page},on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[a("div",{staticClass:"checklist col-lg-4 offset-lg-1 col-md-5 mb-6 mb-md-0 ml-md-5"},[a("div",{staticClass:"border p-4 mb-4"},[a("h3",{staticClass:"title border-bottom pb-3 mb-5"},[t._v("確認明細")]),t._l(t.order.products,(function(s){return a("div",{key:s.id,staticClass:"d-flex mb-4"},[a("img",{staticClass:"mr-2",attrs:{src:""+s.product.imageUrl[0]}}),a("div",{staticClass:"w-100"},[a("div",{staticClass:"d-flex justify-content-between"},[a("p",{staticClass:"mb-0 font-weight-bold"},[t._v(t._s(s.product.title))]),a("p",{staticClass:"mb-0"},[t._v(t._s(t._f("thousands")(s.product.price)))])]),a("p",{staticClass:"mb-0 font-weight-bold"},[t._v("X"+t._s(s.quantity))])])])})),a("div",{staticClass:"d-flex justify-content-between mt-4 border-top"},[a("p",{staticClass:"mb-0 mt-4 h4 font-weight-bold"},[t._v("Total")]),a("p",{staticClass:"mb-0 mt-4 h4 font-weight-bold"},[t._v(" NT$"+t._s(t._f("thousands")(parseInt(t.order.amount)))+" ")])])],2)]),a("div",{staticClass:"form-group col-md-7 row"},[a("h3",{staticClass:"checkFormTitle mb-lg-6 mb-5 pb-lg-4 pb-3 col-12"},[t._v("訂購人資料")]),a("div",{staticClass:"checkForm col-12 mb-5"},[a("div",{staticClass:"name row justify-content-center mb-md-9 mb-6"},[a("div",{staticClass:"col-6 font-xxl"},[t._v("姓名:")]),a("div",{staticClass:"col-6 font-xxl"},[t._v(t._s(t.order.user.name))])]),a("div",{staticClass:"Email row justify-content-center mb-md-9 mb-6"},[a("div",{staticClass:"col-6 font-xxl"},[t._v("郵件:")]),a("div",{staticClass:"col-6 font-xxl"},[t._v(t._s(t.order.user.email))])]),a("div",{staticClass:"tel row justify-content-center mb-md-9 mb-6"},[a("div",{staticClass:"col-6 font-xxl"},[t._v("電話:")]),a("div",{staticClass:"col-6 font-xxl"},[t._v(t._s(t.order.user.tel))])]),a("div",{staticClass:"address row justify-content-center mb-md-9 mb-6"},[a("div",{staticClass:"col-6 font-xxl"},[t._v("地址:")]),a("div",{staticClass:"col-6 font-xxl"},[t._v(t._s(t.order.user.address))])]),a("div",{staticClass:"payment row justify-content-center mb-md-9 mb-6"},[a("div",{staticClass:"col-6 font-xxl"},[t._v("付款方式:")]),a("div",{staticClass:"col-6 font-xxl"},[t._v(t._s(t.order.payment))])])]),!1===t.order.paid?a("button",{staticClass:"btn btn-primary col-5 offset-7",on:{click:function(s){t.page=2}}},[t._v("確認訂單")]):t._e()])]),a("div",{staticClass:"success",class:{show2:2===t.page}},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-12 button"},[a("button",{staticClass:"home btn btn-primary",on:{click:t.backToProducts}},[t._v(" 繼續選購 ")])])])])],1)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-7 img d-flex flex-column justify-content-center mb-5"},[a("div",{staticClass:"currect"},[a("i",{staticClass:"fas fa-check-circle text-success"})]),a("h2",{staticClass:"text-light"},[t._v("感謝您,")]),a("p",{staticClass:"text-light font-xl"},[t._v("付款成功,商品將會在3天後寄到指定地址。")])])}],e=(a("445a"),{data:function(){return{order:{user:{}},orderId:"",page:1,isLoading:!1}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()},methods:{getOrder:function(){var t=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api/").concat("07efa40d-8941-4249-aabc-164add9a7575","/ec/orders/").concat(this.orderId);this.isLoading=!0,this.$http.get(s).then((function(s){t.order=s.data.data,t.origin_total=s.data.data.amount,t.isLoading=!1}))},payOrder:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io/api/").concat("07efa40d-8941-4249-aabc-164add9a7575","/ec/orders/").concat(this.orderId,"/paying");this.isLoading=!0,this.$http.post(s).then((function(s){s.data.data.paid&&(t.getOrder(),t.isLoading=!1)}))},backToProducts:function(){this.$router.push("/products/all-Products")}}}),o=e,n=a("5d22"),r=Object(n["a"])(o,i,c,!1,null,null,null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d229d64.41245a3d.js.map