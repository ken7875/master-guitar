(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-496a9d8d"],{"798b":function(t,s,a){"use strict";a("b6fd")},b6fd:function(t,s,a){},e0b9:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("form",{staticClass:"form-signin",on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v(" 請先登入 ")]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"email",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.email},on:{input:function(s){s.target.composing||t.$set(t.user,"email",s.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{id:"inputPassword",type:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-wood btn-block",attrs:{type:"submit"}},[t._v(" 登入 ")]),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v(" © Master Guitar ")])])],1)},i=[],o=(a("445a"),{name:"Login",data:function(){return{user:{email:"",password:""},isLoading:!1}},methods:{signin:function(){var t=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api/","auth/login");this.$http.post(s,this.user).then((function(s){var a=s.data.token,e=s.data.expired;document.cookie="myToken=".concat(a,";expires=").concat(new Date(1e3*e),";"),t.$bus.$emit("message:push","登入成功","success"),t.isLoading=!1,t.$router.push("/admin/backendProducts")})).catch((function(s){t.$bus.$emit("message:push","登入失敗瞜!\n            ".concat(s),"danger"),t.isLoading=!1}))}}}),n=o,r=(a("798b"),a("5d22")),u=Object(r["a"])(n,e,i,!1,null,"05ec230a",null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-496a9d8d.e72db22c.js.map