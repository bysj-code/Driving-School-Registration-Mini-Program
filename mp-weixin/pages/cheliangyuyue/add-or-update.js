(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cheliangyuyue/add-or-update"],{"1b4d":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function i(e,n,a,r,t,i,u){try{var o=e[i](u),c=o.value}catch(s){return void a(s)}o.done?n(c):Promise.resolve(c).then(r,t)}function u(e){return function(){var n=this,a=arguments;return new Promise((function(r,t){var u=e.apply(n,a);function o(e){i(u,r,t,o,c,"next",e)}function c(e){i(u,r,t,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("5f99"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{cross:"",ruleForm:{cheliangbianhao:this.getUUID(),cheliangmingcheng:"",cheliangleixing:"",cheliangtupian:"",cheliangweizhi:"",yonghuzhanghao:"",yonghuxingming:"",dianhua:"",yuyueshijian:""},user:{},ro:{cheliangbianhao:!1,cheliangmingcheng:!1,cheliangleixing:!1,cheliangtupian:!1,cheliangweizhi:!1,yonghuzhanghao:!1,yonghuxingming:!1,dianhua:!1,yuyueshijian:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return u(r.default.mark((function t(){var i,u,o,c;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.ruleForm.yuyueshijian=a.$utils.getCurDateTime(),i=e.getStorageSync("nowTable"),t.next=4,a.$api.session(i);case 4:if(u=t.sent,a.user=u.data,a.ruleForm.yonghuzhanghao=a.user.yonghuzhanghao,a.ro.yonghuzhanghao=!0,a.ruleForm.yonghuxingming=a.user.yonghuxingming,a.ro.yonghuxingming=!0,a.ruleForm.dianhua=a.user.dianhua,a.ro.dianhua=!0,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=20;break}return a.ruleForm.id=n.id,t.next=18,a.$api.info("cheliangyuyue",a.ruleForm.id);case 18:u=t.sent,a.ruleForm=u.data;case 20:if(a.cross=n.cross,!n.cross){t.next=64;break}o=e.getStorageSync("crossObj"),t.t0=r.default.keys(o);case 24:if((t.t1=t.t0()).done){t.next=64;break}if(c=t.t1.value,"cheliangbianhao"!=c){t.next=30;break}return a.ruleForm.cheliangbianhao=o[c],a.ro.cheliangbianhao=!0,t.abrupt("continue",24);case 30:if("cheliangmingcheng"!=c){t.next=34;break}return a.ruleForm.cheliangmingcheng=o[c],a.ro.cheliangmingcheng=!0,t.abrupt("continue",24);case 34:if("cheliangleixing"!=c){t.next=38;break}return a.ruleForm.cheliangleixing=o[c],a.ro.cheliangleixing=!0,t.abrupt("continue",24);case 38:if("cheliangtupian"!=c){t.next=42;break}return a.ruleForm.cheliangtupian=o[c],a.ro.cheliangtupian=!0,t.abrupt("continue",24);case 42:if("cheliangweizhi"!=c){t.next=46;break}return a.ruleForm.cheliangweizhi=o[c],a.ro.cheliangweizhi=!0,t.abrupt("continue",24);case 46:if("yonghuzhanghao"!=c){t.next=50;break}return a.ruleForm.yonghuzhanghao=o[c],a.ro.yonghuzhanghao=!0,t.abrupt("continue",24);case 50:if("yonghuxingming"!=c){t.next=54;break}return a.ruleForm.yonghuxingming=o[c],a.ro.yonghuxingming=!0,t.abrupt("continue",24);case 54:if("dianhua"!=c){t.next=58;break}return a.ruleForm.dianhua=o[c],a.ro.dianhua=!0,t.abrupt("continue",24);case 58:if("yuyueshijian"!=c){t.next=62;break}return a.ruleForm.yuyueshijian=o[c],a.ro.yuyueshijian=!0,t.abrupt("continue",24);case 62:t.next=24;break;case 64:a.styleChange();case 65:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},yuyueshijianConfirm:function(e){console.log(e),this.ruleForm.yuyueshijian=e.result,this.$forceUpdate()},cheliangtupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.cheliangtupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function a(){var t,i,u,o,c,s,l,g,h,f;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.ruleForm.cheliangmingcheng){a.next=3;break}return n.$utils.msg("车辆名称不能为空"),a.abrupt("return");case 3:if(n.ruleForm.cheliangleixing){a.next=6;break}return n.$utils.msg("车辆类型不能为空"),a.abrupt("return");case 6:if(!n.cross){a.next=22;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){a.next=22;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){a.next=18;break}for(l in s)l==o&&(s[l]=c);return g=e.getStorageSync("crossTable"),a.next=16,n.$api.update("".concat(g),s);case 16:a.next=22;break;case 18:t=Number(e.getStorageSync("userid")),i=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 22:if(!i||!t){a.next=44;break}return n.ruleForm.crossuserid=t,n.ruleForm.crossrefid=i,h={page:1,limit:10,crossuserid:t,crossrefid:i},a.next=28,n.$api.list("cheliangyuyue",h);case 28:if(f=a.sent,!(f.data.total>=u)){a.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 34:if(!n.ruleForm.id){a.next=39;break}return a.next=37,n.$api.update("cheliangyuyue",n.ruleForm);case 37:a.next=41;break;case 39:return a.next=41,n.$api.add("cheliangyuyue",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:a.next=52;break;case 44:if(!n.ruleForm.id){a.next=49;break}return a.next=47,n.$api.update("cheliangyuyue",n.ruleForm);case 47:a.next=51;break;case 49:return a.next=51,n.$api.add("cheliangyuyue",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),r=n.getMonth()+1,t=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(a,"-").concat(r,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,a("543d")["default"])},"3a6f":function(e,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"5f99"))}},t=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"65e6":function(e,n,a){"use strict";(function(e){a("82b6");r(a("66fd"));var n=r(a("fc4b"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},"7a0f":function(e,n,a){"use strict";var r=a("cbb0"),t=a.n(r);t.a},a9bb:function(e,n,a){"use strict";a.r(n);var r=a("1b4d"),t=a.n(r);for(var i in r)"default"!==i&&function(e){a.d(n,e,(function(){return r[e]}))}(i);n["default"]=t.a},cbb0:function(e,n,a){},fc4b:function(e,n,a){"use strict";a.r(n);var r=a("3a6f"),t=a("a9bb");for(var i in t)"default"!==i&&function(e){a.d(n,e,(function(){return t[e]}))}(i);a("7a0f");var u,o=a("f0c5"),c=Object(o["a"])(t["default"],r["b"],r["c"],!1,null,"27e358e4",null,!1,r["a"],u);n["default"]=c.exports}},[["65e6","common/runtime","common/vendor"]]]);