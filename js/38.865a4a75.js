(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"0e46":function(t,e,n){"use strict";var i=n("c220"),o=n.n(i);o.a},2504:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"page-labs-tiptap row col-12"},[n("section",{staticClass:"tiptop tiptap-editor"},[n("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.commands,o=e.isActive,r=e.focused;return[n("section",{staticClass:"row col-12 justify-between items-center toolbar"},[n("div",{staticClass:"row q-px-md menubar is-hidden",class:{"is-focused":r}},[n("o-menubar-btn",{class:{"is-active":o.bold()},attrs:{icon:"mdi-format-bold",tooltip:t.$t("action.bold")},nativeOn:{click:function(t){return i.bold(t)}}}),n("o-menubar-btn",{class:{"is-active":o.italic()},attrs:{icon:"format_italic"},nativeOn:{click:function(t){return i.italic(t)}}}),n("o-menubar-btn",{class:{"is-active":o.strike()},attrs:{icon:"format_strikethrough"},nativeOn:{click:function(t){return i.strike(t)}}}),n("o-menubar-btn",{class:{"is-active":o.underline()},attrs:{icon:"format_underline"},nativeOn:{click:function(t){return i.underline(t)}}}),n("o-menubar-btn",{class:{"is-active":o.code()},attrs:{icon:"code"},nativeOn:{click:function(t){return i.code(t)}}}),n("o-menubar-btn",{class:{"is-active":o.paragraph()},attrs:{icon:"mdi-format-pilcrow"},nativeOn:{click:function(t){return i.paragraph(t)}}}),n("o-menubar-btn",{class:{"is-active":o.heading({level:1})},attrs:{label:"H1"},nativeOn:{click:function(t){return i.heading({level:1})}}}),n("o-menubar-btn",{class:{"is-active":o.heading({level:2})},attrs:{label:"H2"},nativeOn:{click:function(t){return i.heading({level:2})}}}),n("o-menubar-btn",{class:{"is-active":o.heading({level:3})},attrs:{label:"H3"},nativeOn:{click:function(t){return i.heading({level:3})}}}),n("o-menubar-btn",{class:{"is-active":o.bullet_list()},attrs:{icon:"format_list_bulleted"},nativeOn:{click:function(t){return i.bullet_list(t)}}}),n("o-menubar-btn",{class:{"is-active":o.ordered_list()},attrs:{icon:"format_list_numbered"},nativeOn:{click:function(t){return i.ordered_list(t)}}}),n("o-menubar-btn",{class:{"is-active":o.blockquote()},attrs:{icon:"format_quote"},nativeOn:{click:function(t){return i.blockquote(t)}}}),n("o-menubar-btn",{class:{"is-active":o.blockquote()},attrs:{icon:"add_photo_alternate"},nativeOn:{click:function(e){return t.showImagePrompt(i.image)}}}),n("o-menubar-btn",{class:{"is-active":o.code_block()},attrs:{icon:"code"},nativeOn:{click:function(t){return i.code_block(t)}}}),n("o-menubar-btn",{class:{"is-active":o.todo_list()},attrs:{icon:"mdi-format-list-checks"},nativeOn:{click:function(t){return i.todo_list(t)}}}),n("o-menubar-btn",{attrs:{icon:"remove"},nativeOn:{click:function(t){return i.horizontal_rule(t)}}}),n("o-menubar-btn",{attrs:{icon:"undo"},nativeOn:{click:function(t){return i.undo(t)}}}),n("o-menubar-btn",{attrs:{icon:"redo"},nativeOn:{click:function(t){return i.redo(t)}}}),n("q-separator",{attrs:{vertical:"",inset:""}}),n("o-menubar-btn",{attrs:{icon:"mdi-table-plus"},nativeOn:{click:function(t){return i.createTable({rowsCount:3,colsCount:3,withHeaderRow:!1})}}}),(o.table(),t._e())],1),n("div",{staticClass:"q-px-md"},[n("q-btn",{attrs:{icon:"menu",flat:"",round:""}})],1)])]}}])}),n("editor-menu-bubble",{staticClass:"menububble",attrs:{editor:t.editor,keepInBounds:!0},on:{hide:t.hideLinkMenu},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.commands,o=e.isActive,r=e.getMarkAttrs,c=e.menu;return[n("div",{staticClass:"menububble",class:{"is-active":c.isActive&&0==t.selectedCellCount},style:"left: "+c.left+"px; bottom: "+c.bottom+"px;"},[t.linkMenuIsActive?n("form",{staticClass:"menububble__form",on:{submit:function(e){return e.preventDefault(),t.setLinkUrl(i.link,t.linkUrl)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:t.linkUrl},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.hideLinkMenu(e)},input:function(e){e.target.composing||(t.linkUrl=e.target.value)}}}),n("q-btn",{staticClass:"menububble__button",attrs:{flat:"",dense:""},on:{click:function(e){return t.setLinkUrl(i.link,null)}}},[n("q-icon",{attrs:{name:"close"}})],1)],1):[n("q-btn",{staticClass:"menububble__button",class:{"is-active":o.link()},attrs:{flat:"",dense:""},on:{click:function(e){t.showLinkMenu(r("link"))}}},[n("span",[t._v(t._s(o.link()?"Update Link":"Add Link"))]),n("q-icon",{attrs:{name:"link"}})],1)]],2)]}}])}),n("editor-menu-bubble",{staticClass:"menububble",attrs:{editor:t.editor},on:{hide:t.hideLinkMenu},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.commands,o=e.isActive,r=(e.getMarkAttrs,e.menu);return[n("div",{staticClass:"menububble",class:{"is-active":o.table()&&!r.isActive||t.selectedCellCount>0},style:"right: -118px; top: "+(t.focusHeight+8)+"px;"},[n("o-menubar-btn",{attrs:{icon:"mdi-table-remove",tooltip:"Romve Table"},nativeOn:{click:function(t){return i.deleteTable(t)}}}),n("o-menubar-btn",{attrs:{icon:"mdi-table-column-plus-before"},nativeOn:{click:function(t){return i.addColumnBefore(t)}}}),n("o-menubar-btn",{attrs:{icon:"mdi-table-column-plus-after"},nativeOn:{click:function(t){return i.addColumnAfter(t)}}}),n("o-menubar-btn",{attrs:{icon:"mdi-table-column-remove"},nativeOn:{click:function(t){return i.deleteColumn(t)}}}),n("o-menubar-btn",{attrs:{icon:"mdi-table-row-plus-before"},nativeOn:{click:function(t){return i.addRowBefore(t)}}}),n("o-menubar-btn",{attrs:{icon:"mdi-table-row-plus-after"},nativeOn:{click:function(t){return i.addRowAfter(t)}}}),n("o-menubar-btn",{attrs:{icon:"mdi-table-row-remove"},nativeOn:{click:function(t){return i.deleteRow(t)}}}),n("o-menubar-btn",{attrs:{icon:"mdi-table-merge-cells"},nativeOn:{click:function(t){return i.toggleCellMerge(t)}}})],1)]}}])}),n("q-scroll-area",{staticClass:"editor-scroll-area"},[n("q-scroll-observer",{on:{scroll:t.onScroll}}),n("editor-content",{staticClass:"editor__content",attrs:{editor:t.editor}})],1)],1)])},o=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("7f7f"),n("c47a")),c=n.n(r),a=n("cd42"),s=n("f23d"),l=n("332f"),u=n.n(l),b=n("4dd1"),d=n.n(b),f=n("ee8c"),m=n.n(f),v=n("cfb4"),p=n("4d48"),k=n("93e1"),h=n("2f62");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g={name:"page-labs-tiptap",data:function(){return{json:"",html:"",editor:null,linkUrl:null,linkMenuIsActive:!1,scrollHeight:0,focusOffsetTop:0,selectedCellSize:0}},components:{EditorContent:a["c"],EditorMenuBar:a["d"],EditorMenuBubble:a["e"],OMenubarBtn:k["a"]},methods:O({},Object(h["b"])({}),{initEditor:function(){var t=this;this.editor=new a["b"]({extensions:[new v["a"],new p["a"],new s["a"],new s["c"],new s["e"],new s["f"]({languages:{java:u.a,javascript:d.a,css:m.a}}),new s["h"],new s["i"]({levels:[1,2,3]}),new s["o"],new s["p"],new s["n"],new s["b"],new s["d"],new s["m"],new s["r"],new s["z"],new s["j"],new s["w"]({nested:!0}),new s["x"],new s["s"]({resizable:!0}),new s["u"],new s["t"],new s["v"],new s["q"]({showOnlyCurrent:!1,emptyNodeText:function(e){return"title"===e.type.name?t.$t("label.title"):"Note Content"}}),new s["g"]({className:"has-focus",nested:!0}),new s["k"],new s["y"]({node:"paragraph",notAfter:["paragraph"]}),new s["l"]],autoFocus:!0,content:"",onUpdate:function(e){var n=e.getJSON,i=e.getHTML;t.json=n(),t.html=i(),console.log("onUpdate",t.getTitle())},onTransaction:function(e){e.state;var n=document.querySelectorAll(".has-focus"),i=n.length;if(i>0){var o=n[0].offsetTop;t.focusOffsetTop=o}var r=document.querySelectorAll(".selectedCell");t.selectedCellSize=r.length}})},setContent:function(){this.editor.setContent(this.json,!0),this.editor.focus()},cleanContent:function(){this.editor.clearContent(!0),this.editor.focus()},showLinkMenu:function(t){var e=this;this.linkUrl=t.href,this.linkMenuIsActive=!0,this.$nextTick((function(){e.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},setLinkUrl:function(t,e){t({href:e}),this.hideLinkMenu()},showImagePrompt:function(t){var e=prompt("Enter the url of your image here");null!==e&&t({src:e})},onScroll:function(t){this.scrollHeight=t.position},getTitle:function(){var t="",e=this.json.content;if(e&&e.length>0){var n=e[0].content;n&&n.length>0&&(t=n[0].text)}return t||""},onRoute:function(t){t.name}}),computed:O({},Object(h["c"])({}),{focusHeight:function(){return this.focusOffsetTop-this.scrollHeight},selectedCellCount:function(){return this.selectedCellSize}}),watch:{$route:function(t,e){this.onRoute(t)}},created:function(){},mounted:function(){this.initEditor(),this.onRoute(this.$route)},beforeDestroy:function(){this.editor.destroy()}},C=g,_=(n("0e46"),n("2877")),y=Object(_["a"])(C,i,o,!1,null,null,null);e["default"]=y.exports},c220:function(t,e,n){}}]);