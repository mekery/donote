(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"1bd3":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("auth-page",{attrs:{title:t.$t("label.signout")}},[e("template",{slot:"content"},[e("div",{staticClass:"row col-12 justify-center"},[e("q-banner",{staticClass:"col-12 bg-purple text-white q-my-xl",attrs:{rounded:""},scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"clear_all",color:"yellow"}})]},proxy:!0}])},[e("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("msg.tips"))+"：")]),e("div",[t._v(t._s(t.$t("msg.cleanCache")))])])],1),e("div",{staticClass:"actions row justify-center"},[e("q-btn",{staticClass:"action color-button",attrs:{label:t.$t("label.signout"),loading:t.spinner},on:{click:t.onSignout}},[e("q-spinner-ios",{attrs:{slot:"loading"},slot:"loading"})],1)],1)])],2)},s=[],a=e("d727"),c=e("5f87"),i=e("5d2d"),r=e("0382"),l=e("f095"),u={name:"auth-signout",data:function(){return{spinner:!1}},components:{AuthPage:l["a"]},methods:{onSignout:function(){var t=this,o={uid:Object(c["e"])()};Object(a["i"])(o).then((function(o){t.postSignout()}))},postSignout:function(){var t=this;localStorage.removeItem("LAST_NOTE"),localStorage.removeItem("LAST_SYNC_TIME"),localStorage.removeItem("UPDATE_SEQ"),Object(c["j"])(),Object(c["i"])(),Object(i["d"])(),Object(r["a"])().then((function(o){console.log("Clear: ",o),t.$store.commit("SET_MY_UID",""),t.$store.commit("SET_USER_INFO",{}),t.$store.commit("SET_QTAGS",[]),t.$store.commit("SET_QNOTES",[]),t.$store.commit("M_SET_OPENED_NOTES",[]),t.$store.commit("M_SET_RECENT_NOTES",[]),t.$store.dispatch("A_LOAD_SETTINGS"),t.$store.dispatch("GetNoteBooks"),t.$store.dispatch("A_QUERY_NOTE"),t.$router.push("/")}))}},computed:{},watch:{$route:function(t,o){}},created:function(){},mounted:function(){}},m=u,d=(e("e52a"),e("2877")),_=Object(d["a"])(m,n,s,!1,null,null,null);o["default"]=_.exports},3783:function(t,o,e){},e52a:function(t,o,e){"use strict";var n=e("3783"),s=e.n(n);s.a}}]);