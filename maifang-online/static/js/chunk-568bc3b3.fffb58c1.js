(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-568bc3b3"],{"24b1":function(t,e,n){},8692:function(t,e,n){"use strict";n("24b1")},a342:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container",attrs:{id:"qList"}},[n("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{staticClass:"tab-0",attrs:{title:"文章"}},[n("br"),t._l(t.allTabData.tab0,(function(e,a){return n("van-cell",{key:a+"-tab-0",staticClass:"page-cell",attrs:{"is-link":""},on:{click:function(n){return t.tap("tab0",e,a)}},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"custom-title"},[t._v(t._s(e.title))]),e.isOtherLink?n("van-tag",{attrs:{type:"danger"}},[t._v("外链")]):t._e()]},proxy:!0}],null,!0)})}))],2),n("van-tab",{attrs:{title:"案例"}},[n("br"),t._l(t.allTabData.tab1,(function(e,a){return n("van-cell",{key:a+"-tab-0",staticClass:"page-cell",attrs:{"is-link":""},on:{click:function(n){return t.tap("tab1",e,a)}},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"custom-title"},[t._v(t._s(e.title))]),e.isOtherLink?n("van-tag",{attrs:{type:"danger"}},[t._v("外链")]):t._e()]},proxy:!0}],null,!0)})}))],2),n("van-tab",{attrs:{title:"无内容"}},[t._v("无内容 3")]),n("van-tab",{attrs:{title:"无内容"}},[t._v("无内容 4")])],1)],1)},i=[],r=n("f9ea"),s=(n("e186"),n("4809")),c=(n("298b"),n("fc1d")),u="qList",o="InfoSpec",l={name:u,mixins:[],data:function(){return{active:0,allTabData:c["a"],pageList:[],pageModel:{},queryModel:{keyName:""},pagePagination:new s["a"],trueStyle:{height:0},itemId:null,pageType:null}},created:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},activated:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},updated:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{tap:function(t,e,n){e.isOtherLink?window.appSysInfo.isDesktop?window.open(e.url):this.appShowToast({message:"该文章只能在电脑端打开"}):this.$router.push({name:"qDetails",query:{title:e.title,tabIndex:this.active}})},pageInit:function(t){this.getList()},getQueryString:function(){return Object.assign({},this.pagePagination,{name:this.queryModel.search0,key1:this.queryModel.search1,key2:this.queryModel.search2,key3:this.queryModel.search3,key4:this.queryModel.search4,key5:this.queryModel.search5,status:this.queryModel.searchMenu})},getItem:function(t){var e=this;this.YhcAjax["get"+o]({},{id:t}).then((function(t){e.pageModel=t}))},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.getQueryString();n.isMissLoading=e,this.YhcAjax["get"+o+"List"]({},n).then((function(e){t.pageList=e.list,t.pagePagination.totalNum=e.count}))},delItem:function(t){var e=this,n=t.id;this.YhcAjax["delete"+o]({},{id:n}).then((function(t){e.getList()}))},editItem:function(t){}}},p=l,h=(n("8692"),n("cba8")),f=Object(h["a"])(p,a,i,!1,null,"691fc044",null);e["default"]=f.exports}}]);