webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n=a("j5iW"),s=a("8OAG"),l=(a("wj+B"),a("VC+z"),a("VXnA"),a("woOf")),o=a.n(l),r={props:["data"],name:"Form",watch:{},mounted:function(){},methods:{onSubmit:function(){this.data.title?(this.closeEdit(),this.$emit("query",this.data)):alert("請輸入訊息")},closeEdit:function(){this.$emit("closeEditTodo")},previewFiles:function(t){t.file=this.$refs.myFiles.files},handleFileChange:function(t){this.data.file=t.target.files[0]}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"item-content item-input"},[a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title item-label"},[t._v("Title")]),t._v(" "),a("div",{staticClass:"item-input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.title,expression:"data.title"}],attrs:{type:"text",name:"name",placeholder:"Title"},domProps:{value:t.data.title},on:{input:function(e){e.target.composing||t.$set(t.data,"title",e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"card-content card-content-padding"},[a("li",[a("div",{staticClass:"item-content item-input"},[a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title item-label"},[t._v("Deadline")]),t._v(" "),a("div",{staticClass:"item-input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.date,expression:"data.date"}],attrs:{type:"date",placeholder:"Select date"},domProps:{value:t.data.date},on:{input:function(e){e.target.composing||t.$set(t.data,"date",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.time,expression:"data.time"}],attrs:{type:"time",placeholder:"Date Time"},domProps:{value:t.data.time},on:{input:function(e){e.target.composing||t.$set(t.data,"time",e.target.value)}}})])])])]),t._v(" "),a("li",[a("div",{staticClass:"item-content item-input"},[a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title item-label"},[t._v("File")]),t._v(" "),a("label",{staticClass:"file-select"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-10"},[a("div",{staticClass:"select-button"},[a("span",[a("f7-icon",{attrs:{slot:"media",f7:"add"},slot:"media"})],1)])])]),t._v(" "),t.data.file?a("div",[t._v(t._s(t.data.file.name))]):t._e(),t._v(" "),a("input",{staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.handleFileChange}})])])])]),t._v(" "),a("li",[a("div",{staticClass:"item-content item-input"},[a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title item-label"},[t._v("Comment")]),t._v(" "),a("div",{staticClass:"item-input-wrap"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.comment,expression:"data.comment"}],attrs:{placeholder:"text",rows:"4",cols:"50"},domProps:{value:t.data.comment},on:{input:function(e){e.target.composing||t.$set(t.data,"comment",e.target.value)}}})])])])])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("a",{staticClass:"button",on:{click:t.closeEdit}},[t._v("Cancel")]),t._v(" "),t.data.new?a("a",{staticClass:"button button-active",on:{click:t.onSubmit}},[t._v("Add Task")]):a("a",{staticClass:"button button-active",on:{click:t.onSubmit}},[t._v("Update")])])])},staticRenderFns:[]};var d=a("VU/8")(r,c,!1,function(t){a("ZR2p")},null,null).exports,u={components:{Forms:d},name:"AddTask",data:function(){return{newData:{id:null,title:null,date:null,time:null,file:null,comment:null,checkbox:!1,star:!1,new:!0,show:!0},transferData:null,isShow:!1}},methods:{onClick:function(){this.isShow=!this.isShow,this.transferData=o()({},this.newData)},onQuery:function(t){this.$emit("query",t)},closeEdit:function(){this.isShow=!this.isShow}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"link popup-open showForm",attrs:{href:"#","data-popup":".popup"},on:{click:t.onClick}},[a("button",{staticClass:"col button button-fill color-gray "},[a("f7-icon",{attrs:{slot:"media",f7:"add_round"},slot:"media"}),t._v("     Add Tsak\n        ")],1)]),t._v(" "),a("Forms",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{data:t.transferData},on:{query:t.onQuery,closeEditTodo:t.closeEdit}})],1)},staticRenderFns:[]};var v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"item-title"},[t._v("\r\n        "+t._s(t.item.title)+"\r\n    ")]),t._v(" "),a("div",{staticClass:"item-after"},[t.item.date?a("div",[a("f7-icon",{attrs:{size:"18",f7:"alarm_fill"}}),t._v("   "+t._s(t.item.date)+"   ")],1):t._e(),t._v(" "),t.item.file?a("div",[a("f7-icon",{attrs:{size:"18",f7:"document_fill"}}),t._v("   ")],1):t._e(),t._v(" "),t.item.comment?a("div",[a("f7-icon",{attrs:{size:"18",f7:"chat_fill"}})],1):t._e()])])},staticRenderFns:[]};var f={components:{Forms:d,AddTask:a("VU/8")(u,m,!1,function(t){a("YLCh")},null,null).exports,ShowTitle:a("VU/8")({name:"ShowTitle",props:["item"]},v,!1,function(t){a("k1Fj")},null,null).exports},name:"TabData",props:["items","action"],data:function(){return{sorting:!0,openObject:null,newData:{id:null,title:null,date:null,time:null,file:null,comment:null,checkbox:!1,star:!1,new:!0,show:!1},transferData:null,completedCount:0,progressCount:0,AllCount:0}},watch:{items:{handler:function(t,e){this.completedCount=t.filter(function(t){return t.checkbox}).length,this.progressCount=t.filter(function(t){return!t.checkbox}).length,this.AllCount=t.length},deep:!0}},methods:{onClick:function(t){t.checkbox=!t.checkbox},onStarClick:function(t){t.star=!t.star},onOpen:function(t){this.items.map(function(t){return t.show=!1}),t.show=!t.show,this.transferData=o()({},t)},onQuery:function(t){this.items.map(function(t){return t.show=!1}),t.show=!t.show,this.$emit("query",{data:t})},closeEdit:function(t){t.show=!t.show,document.getElementById(this.openObject).classList.toggle("accordion-item-opened")}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("add-task",{on:{query:t.onQuery}}),t._v(" "),a("div",{staticClass:"list sortable accordion-list sortable-enabled"},[a("ul",t._l(t.items,function(e){return"all"===t.action||t.action===e.checkbox?a("li",{staticClass:"accordion-item",class:{li_yellow:e.star}},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-media"},[a("a",{on:{click:function(a){t.onClick(e)}}},[e.checkbox?a("f7-icon",{attrs:{f7:"check_round"}}):a("f7-icon",{attrs:{f7:"circle"}})],1)]),t._v(" "),a("div",{staticClass:"item-inner"},[e.checkbox?a("del",[a("ShowTitle",{attrs:{item:e}})],1):a("div",[a("ShowTitle",{attrs:{item:e}})],1),t._v(" "),a("div",{staticClass:"item-after"},[a("a",{on:{click:function(a){t.onOpen(e)}}},[a("f7-icon",{attrs:{f7:"compose"}})],1),t._v(" \n              "),a("a",{on:{click:function(a){t.onStarClick(e)}}},[e.star?a("f7-icon",{staticClass:"starColor",attrs:{f7:"star_fill",color:"#F5A623"}}):a("f7-icon",{staticClass:"starColor",attrs:{f7:"star",color:"#F5A623"}})],1)])])]),t._v(" "),e.show?a("forms",{attrs:{data:t.transferData},on:{query:t.onQuery,closeEditTodo:function(a){t.closeEdit(e)}}}):t._e(),t._v(" "),a("div",{staticClass:"sortable-handler"})],1):t._e()}))]),t._v(" "),!0===t.action?a("div",{attrs:{id:"taskCount"}},[a("i",[t._v(t._s(t.completedCount)+" task completed")])]):t._e(),t._v(" "),"all"===t.action?a("div",{attrs:{id:"taskCount"}},[a("i",[t._v(t._s(t.AllCount)+" task left")])]):t._e(),t._v(" "),!1===t.action?a("div",{attrs:{id:"taskCount"}},[a("i",[t._v(t._s(t.progressCount)+" task left")])]):t._e()],1)},staticRenderFns:[]};var h={name:"Home",components:{TabData:a("VU/8")(f,p,!1,function(t){a("sMeW")},null,null).exports},data:function(){return{id:0,items:[],currentTab:"all",tabStyle:"translate3d(0%, 0px, 0px)"}},methods:{onQuery:function(t){if(t.data.new)return this.items.push({id:this.id,title:t.data.title,date:t.data.date,time:t.data.time,file:t.data.file,comment:t.data.comment,checkbox:!1,new:!1,star:!1,show:!1}),void this.id++;var e=this.items.find(function(e){return e.id===t.data.id}),a=this.items.indexOf(e);-1!==a&&this.items.splice(a,1),this.items.push(t.data)},setAction:function(t,e){for(var a=document.getElementsByClassName("tab-link"),i=0;i<=a.length-1;i++)a[i].classList.remove("tab-link-active");t.target.classList.toggle("tab-link-active"),this.currentTab=e,1==this.currentTab?this.tabStyle="translate3d(200%, 0px, 0px)":0==this.currentTab?this.tabStyle="translate3d(100%, 0px, 0px)":this.tabStyle="translate3d(0%, 0px, 0px)"}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("div",{staticClass:"page"},[a("div",{staticClass:"navbar"},[a("div",{staticClass:"navbar-inner sliding"},[a("div",{staticClass:"title"},[t._v("Todolist")])])]),t._v(" "),a("div",{staticClass:"toolbar tabbar"},[a("div",{staticClass:"toolbar-inner"},[a("a",{staticClass:"tab-link tab-link-active",attrs:{href:"#tab-1"},on:{click:function(e){t.setAction(e,"all")}}},[t._v("My Tasks")]),t._v(" "),a("a",{staticClass:"tab-link",attrs:{href:"#tab-1"},on:{click:function(e){t.setAction(e,!1)}}},[t._v("In Progress")]),t._v(" "),a("a",{staticClass:"tab-link",attrs:{href:"#tab-1"},on:{click:function(e){t.setAction(e,!0)}}},[t._v("Completed")]),t._v(" "),a("span",{staticClass:"tab-link-highlight",style:{transform:t.tabStyle}})])]),t._v(" "),a("div",{staticClass:"block"},[a("div",{staticClass:"tabs-animated-wrap"},[a("div",{staticClass:"tabs"},[a("div",{staticClass:"page-content tab tab-active",attrs:{id:"tab-1"}},[a("tab-data",{attrs:{action:t.currentTab,items:t.items},on:{query:t.onQuery}})],1)])])])])])},staticRenderFns:[]};var b=a("VU/8")(h,_,!1,function(t){a("lUK9")},null,null).exports,C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("f7-page",[e("f7-navbar",{attrs:{title:"Not found","back-link":"Back"}}),this._v(" "),e("f7-block",{attrs:{strong:""}},[e("p",[this._v("Sorry")]),this._v(" "),e("p",[this._v("Requested content not found.")])])],1)},staticRenderFns:[]},w=a("VU/8")({},C,!1,null,null,null).exports,k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"Left Panel"}}),t._v(" "),a("f7-block",{attrs:{strong:""}},[a("p",[t._v("Left panel content goes here")])]),t._v(" "),a("f7-block-title",[t._v("Load page in panel")]),t._v(" "),a("f7-list",[a("f7-list-item",{attrs:{link:"/about/",title:"About"}}),t._v(" "),a("f7-list-item",{attrs:{link:"/form/",title:"Form"}})],1),t._v(" "),a("f7-block-title",[t._v("Load page in main view")]),t._v(" "),a("f7-list",[a("f7-list-item",{attrs:{link:"/about/",title:"About",view:"#main-view","panel-close":""}}),t._v(" "),a("f7-list-item",{attrs:{link:"/form/",title:"Form",view:"#main-view","panel-close":""}})],1)],1)},staticRenderFns:[]},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"Right Panel",sliding:""}}),t._v(" "),a("f7-block",[a("p",[t._v("Right panel content goes here")])]),t._v(" "),a("f7-block-title",[t._v("Load page in panel")]),t._v(" "),a("f7-list",[a("f7-list-item",{attrs:{link:"/about/",title:"About"}}),t._v(" "),a("f7-list-item",{attrs:{link:"/form/",title:"Form"}})],1),t._v(" "),a("f7-block-title",[t._v("Load page in main view")]),t._v(" "),a("f7-list",[a("f7-list-item",{attrs:{link:"/about/",title:"About",view:"#main-view","panel-close":""}}),t._v(" "),a("f7-list-item",{attrs:{link:"/form/",title:"Form",view:"#main-view","panel-close":""}})],1)],1)},staticRenderFns:[]},x=[{path:"/",component:b},{path:"/panel-left/",component:a("VU/8")({},k,!1,null,null,null).exports},{path:"/panel-right/",component:a("VU/8")({},g,!1,null,null,null).exports},{path:"(.*)",component:w}],y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("f7-statusbar"),this._v(" "),e("f7-view",{attrs:{id:"main-view",url:"/",main:""}})],1)},staticRenderFns:[]},F=a("VU/8")({name:"App"},y,!1,null,null,null).exports;i.a.use(s.a,n.a),new i.a({el:"#app",template:"<app/>",framework7:{id:"io.framework7.testapp",name:"Framework7",theme:"auto",routes:x},components:{app:F}})},"VC+z":function(t,e){},VXnA:function(t,e){},YLCh:function(t,e){},ZR2p:function(t,e){},k1Fj:function(t,e){},lUK9:function(t,e){},sMeW:function(t,e){},"wj+B":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6756cc3905c09cf04c09.js.map