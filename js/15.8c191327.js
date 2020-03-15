(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"91e97":function(e,t,o){},"96e5":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("auth-page",{staticClass:"page-auth-signup",attrs:{title:e.$t("label.signup")}},[o("template",{slot:"content"},[o("section",{staticClass:"row q-mb-md methods o-tabs with-bottom-border",class:e.isMobile?"":"q-pt-md"},[o("q-tabs",{staticClass:"text-white",attrs:{align:"left",shrink:""},on:{input:e.onMethodChanged},model:{value:e.method,callback:function(t){e.method=t},expression:"method"}},[o("q-tab",{attrs:{name:"phone",label:e.$t("label.phone")}}),o("q-tab",{attrs:{name:"email",label:e.$t("label.email")}})],1)],1),"phone"==e.method?o("div",{staticClass:"fields"},[e._e(),o("div",{staticClass:"row justify-between items-start q-col-gutter-x-sm"},[o("q-input",{staticClass:"col-12",attrs:{label:e.$t("label.phone"),"error-message":"Phone is required.","bottom-slots":"",standout:"",clearable:"",error:e.$v.form.phone.$error},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),o("div",{staticClass:"items-center"},[o("div",{staticClass:"row justify-between items-start q-col-gutter-x-sm"},[o("div",{staticClass:"col-8"},[o("q-input",{ref:"phoneVcode",attrs:{label:e.$t("label.vcode"),suffix:e.suffix,"bottom-slots":"",standout:"",clearable:"",error:e.$v.form.vcode.$error},model:{value:e.form.vcode,callback:function(t){e.$set(e.form,"vcode",t)},expression:"form.vcode"}})],1),o("div",{staticClass:"row col-4 items-center request-code"},[o("q-btn",{staticClass:"o-full shadow-0",attrs:{color:"primary",label:e.$t("label.send")},on:{click:e.onRequestCode}})],1)])]),o("q-input",{attrs:{type:"password",label:e.$t("label.password"),"bottom-slots":"",standout:"",clearable:"",error:e.$v.form.password.$error},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSignin(t)}},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n          6-22 characters.\n        ")]},proxy:!0}],null,!1,841674425),model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),"email"==e.method?o("div",{staticClass:"fields"},[o("q-input",{attrs:{label:e.$t("label.email"),"bottom-slots":"",standout:"",clearable:"",error:e.$v.formEmail.email.$error},model:{value:e.formEmail.email,callback:function(t){e.$set(e.formEmail,"email",t)},expression:"formEmail.email"}}),o("div",{staticClass:"items-center",attrs:{icon:"code"}},[o("div",{staticClass:"row justify-between items-start q-col-gutter-x-sm"},[o("div",{staticClass:"col-8"},[o("q-input",{ref:"emailVcode",attrs:{label:e.$t("label.vcode"),suffix:e.suffix,"bottom-slots":"",standout:"",clearable:"",error:e.$v.formEmail.vcode.$error},model:{value:e.formEmail.vcode,callback:function(t){e.$set(e.formEmail,"vcode",t)},expression:"formEmail.vcode"}})],1),o("div",{staticClass:"row col-4 items-center request-code"},[o("q-btn",{staticClass:"o-full",attrs:{color:"primary",label:e.$t("label.send")},on:{click:e.onRequestCode}})],1)])]),o("q-input",{attrs:{type:"password",label:e.$t("label.password"),"bottom-slots":"",standout:"",clearable:"",error:e.$v.formEmail.password.$error},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSignin(t)}},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n          6-22 characters.\n        ")]},proxy:!0}],null,!1,841674425),model:{value:e.formEmail.password,callback:function(t){e.$set(e.formEmail,"password",t)},expression:"formEmail.password"}})],1):e._e(),o("div",{staticClass:"actions row justify-center"},[o("div",{staticClass:"row col-12 items-center"},[o("q-checkbox",{staticClass:"text-white",attrs:{label:e.$t("iagree")},model:{value:e.checkAgreement,callback:function(t){e.checkAgreement=t},expression:"checkAgreement"}}),o("q-btn",{staticClass:"text-blue-3",attrs:{to:"/page/tos",flat:"",dense:""}},[e._v(e._s(e.$t("tos")))]),o("span",{staticClass:"text-white"},[e._v(e._s(e.$t("and")))]),o("q-btn",{staticClass:"text-blue-3",attrs:{to:"/page/privacy",flat:"",dense:""}},[e._v(e._s(e.$t("top")))])],1),o("q-btn",{staticClass:"action color-button",attrs:{label:e.$t("label.signup")},on:{click:e.onSignup}},[o("q-spinner-ios",{attrs:{slot:"loading"},slot:"loading"})],1)],1)]),o("template",{slot:"footer"},[o("section",{staticClass:"row justify-center items-center full-height"},[o("q-btn",{staticClass:"action",attrs:{color:"white",label:"已有账号？立即登录",flat:""},on:{click:function(t){return e.$router.push("/auth/signin")}}})],1)])],2)},r=[],s=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("c47a")),n=o.n(s),i=o("f095"),l=o("b5ae"),c=o("6907"),u=o("ed08"),m=o("b0b9"),d=o("d727"),f=o("2f62"),h=o("b35e");function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function b(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){n()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var v={name:"auth-signup",mixins:[h["a"]],data:function(){return{method:"email",remember:!0,form:{phone:"",vcode:"",password:""},formEmail:{vcode:"",password:"",email:""},countryCode:"86",countryCodes:c["b"],counter:0,checkAgreement:!1}},validations:{form:{phone:{required:l["required"]},vcode:{required:l["required"]},password:{required:l["required"],minLength:Object(l["minLength"])(6),maxLength:Object(l["maxLength"])(22)}},formEmail:{email:{required:l["required"],email:l["email"]},vcode:{required:l["required"]},password:{required:l["required"],minLength:Object(l["minLength"])(6),maxLength:Object(l["maxLength"])(22)}}},components:{AuthPage:i["a"]},methods:b({},Object(f["b"])(["A_FRESH_CLIENT_ID","A_LOG_EVENT"]),{onMethodChanged:function(e){console.log("method",e)},onRequestCode:function(){"phone"===this.method?this.getVcodeByPhone():"email"===this.method&&this.getVcodeByEmail()},onSignup:function(){this.checkAgreement&&("phone"===this.method?this.signupByPhone():"email"===this.method&&this.signupByEmail())},getVcodeByPhone:function(){var e=this;if(this.$v.form.phone.$touch(),this.$v.form.phone.$error)Object(m["f"])("Incorrect Phone.");else{var t={code:this.countryCode,phone:this.form.phone};Object(d["k"])(t).then((function(t){Object(m["e"])("Please receive code in your phone."),e.countDown(60),e.$refs.phoneVcode.focus()})).catch((function(t){var o=t.response.data;e.$q.notify(o.msg)}))}},getVcodeByEmail:function(){var e=this;if(this.$v.formEmail.email.$touch(),this.$v.formEmail.email.$error)Object(m["f"])("Incorrect Email.");else{var t={email:this.formEmail.email};Object(d["j"])(t).then((function(t){Object(m["e"])("Please receive code in your email."),e.countDown(60),e.$refs.emailVcode.focus()})).catch((function(t){var o=t.response.data;e.$q.notify(o.msg)}))}},signupByPhone:function(){var e=this;if(this.$v.form.$touch(),this.$v.form.$error)Object(m["f"])("Please review fields again.");else{var t={dialingcode:this.countryCode,vcode:this.form.vcode,phone:this.form.phone,pwd:Object(u["d"])("SHA-1",this.form.password)};this.A_FRESH_CLIENT_ID(),Object(d["e"])(t).then((function(t){e.A_LOG_EVENT({category:"user",action:"signup",label:e.method,value:1}),Object(m["e"])("Signup completed. "),e.$router.push("/auth/signin")})).catch((function(t){e.A_LOG_EVENT({category:"user",action:"signup",label:e.method,value:0});var o=t.response.data;console.log("err data",o),e.$q.notify(o.msg)}))}},signupByEmail:function(){var e=this;if(this.$v.formEmail.$touch(),this.$v.formEmail.$error)Object(m["f"])("Please review fields again.");else{var t={vcode:this.formEmail.vcode,email:this.formEmail.email,pwd:Object(u["d"])("SHA-1",this.formEmail.password)};this.A_FRESH_CLIENT_ID(),Object(d["d"])(t).then((function(t){e.A_LOG_EVENT({category:"user",action:"signup",label:e.method,value:1}),Object(m["e"])("Signup completed. "),e.$router.push("/auth/signin")})).catch((function(t){e.A_LOG_EVENT({category:"user",action:"signup",label:e.method,value:0});var o=t.response.data;console.log("err data",o),e.$q.notify(o.msg)}))}},countDown:function(e){var t=this;this.counter=e-1,this.counter>0&&setTimeout((function(){t.countDown(t.counter)}),1e3)}}),computed:b({},Object(f["c"])({qnotes:"qnotes",currentQTag:"currentQTag",currentColor:"currentColor",qtags:"qtags"}),{suffix:function(){var e="";return this.counter>0&&(e="".concat(this.counter,"s")),e},methodsGlobal:function(){return[{label:"Phone",value:"phone",icon:"smartphone"},{label:"Email",value:"email",icon:"email"},{label:"Google",value:"google",icon:"mdi-google"},{label:"Twitter",value:"twitter",icon:"mdi-twitter"},{label:"Facebook",value:"facebook",icon:"mdi-facebook"}]},methodsCn:function(){return[{label:this.$t("label.phone"),value:"phone",icon:"smartphone"},{label:this.$t("label.email"),value:"email",icon:"email"}]}}),watch:{$route:function(e,t){}},created:function(){this.$emit("viewChanged","notebooks")},mounted:function(){}},g=v,$=(o("ef85"),o("2877")),w=Object($["a"])(g,a,r,!1,null,null,null);t["default"]=w.exports},ef85:function(e,t,o){"use strict";var a=o("91e97"),r=o.n(a);r.a}}]);