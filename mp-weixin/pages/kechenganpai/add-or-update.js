(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kechenganpai/add-or-update"],{2744:function(e,n,a){"use strict";a.r(n);var t=a("f376"),r=a("99ea");for(var i in r)"default"!==i&&function(e){a.d(n,e,(function(){return r[e]}))}(i);a("52bb");var o,u=a("f0c5"),c=Object(u["a"])(r["default"],t["b"],t["c"],!1,null,"1bfd6440",null,!1,t["a"],o);n["default"]=c.exports},"3fc2":function(e,n,a){},"52bb":function(e,n,a){"use strict";var t=a("3fc2"),r=a.n(t);r.a},"99ea":function(e,n,a){"use strict";a.r(n);var t=a("ca96"),r=a.n(t);for(var i in t)"default"!==i&&function(e){a.d(n,e,(function(){return t[e]}))}(i);n["default"]=r.a},ac30:function(e,n,a){"use strict";(function(e){a("82b6");t(a("66fd"));var n=t(a("2744"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},ca96:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,a,t,r,i,o){try{var u=e[i](o),c=u.value}catch(s){return void a(s)}u.done?n(c):Promise.resolve(c).then(t,r)}function o(e){return function(){var n=this,a=arguments;return new Promise((function(t,r){var o=e.apply(n,a);function u(e){i(o,t,r,u,c,"next",e)}function c(e){i(o,t,r,u,c,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("5f99"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{cross:"",ruleForm:{yonghuzhanghao:"",yonghuxingming:"",gengxinshijian:"",jiaolianzhanghao:"",jiaolianxingming:"",kechenganpai:""},user:{},ro:{yonghuzhanghao:!1,yonghuxingming:!1,gengxinshijian:!1,jiaolianzhanghao:!1,jiaolianxingming:!1,kechenganpai:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return o(t.default.mark((function r(){var i,o,u,c;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.ruleForm.gengxinshijian=a.$utils.getCurDateTime(),i=e.getStorageSync("nowTable"),r.next=4,a.$api.session(i);case 4:if(o=r.sent,a.user=o.data,a.ruleForm.jiaolianzhanghao=a.user.jiaolianzhanghao,a.ro.jiaolianzhanghao=!0,a.ruleForm.jiaolianxingming=a.user.jiaolianxingming,a.ro.jiaolianxingming=!0,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=18;break}return a.ruleForm.id=n.id,r.next=16,a.$api.info("kechenganpai",a.ruleForm.id);case 16:o=r.sent,a.ruleForm=o.data;case 18:if(a.cross=n.cross,!n.cross){r.next=50;break}u=e.getStorageSync("crossObj"),r.t0=t.default.keys(u);case 22:if((r.t1=r.t0()).done){r.next=50;break}if(c=r.t1.value,"yonghuzhanghao"!=c){r.next=28;break}return a.ruleForm.yonghuzhanghao=u[c],a.ro.yonghuzhanghao=!0,r.abrupt("continue",22);case 28:if("yonghuxingming"!=c){r.next=32;break}return a.ruleForm.yonghuxingming=u[c],a.ro.yonghuxingming=!0,r.abrupt("continue",22);case 32:if("gengxinshijian"!=c){r.next=36;break}return a.ruleForm.gengxinshijian=u[c],a.ro.gengxinshijian=!0,r.abrupt("continue",22);case 36:if("jiaolianzhanghao"!=c){r.next=40;break}return a.ruleForm.jiaolianzhanghao=u[c],a.ro.jiaolianzhanghao=!0,r.abrupt("continue",22);case 40:if("jiaolianxingming"!=c){r.next=44;break}return a.ruleForm.jiaolianxingming=u[c],a.ro.jiaolianxingming=!0,r.abrupt("continue",22);case 44:if("kechenganpai"!=c){r.next=48;break}return a.ruleForm.kechenganpai=u[c],a.ro.kechenganpai=!0,r.abrupt("continue",22);case 48:r.next=22;break;case 50:a.styleChange();case 51:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},gengxinshijianConfirm:function(e){console.log(e),this.ruleForm.gengxinshijian=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(t.default.mark((function a(){var r,i,o,u,c,s,g,l,f,h;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.cross){a.next=16;break}if(u=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==u){a.next=16;break}if(s=e.getStorageSync("crossObj"),u.startsWith("[")){a.next=12;break}for(g in s)g==u&&(s[g]=c);return l=e.getStorageSync("crossTable"),a.next=10,n.$api.update("".concat(l),s);case 10:a.next=16;break;case 12:r=Number(e.getStorageSync("userid")),i=s["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!r){a.next=38;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=i,f={page:1,limit:10,crossuserid:r,crossrefid:i},a.next=22,n.$api.list("kechenganpai",f);case 22:if(h=a.sent,!(h.data.total>=o)){a.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 28:if(!n.ruleForm.id){a.next=33;break}return a.next=31,n.$api.update("kechenganpai",n.ruleForm);case 31:a.next=35;break;case 33:return a.next=35,n.$api.add("kechenganpai",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:a.next=46;break;case 38:if(!n.ruleForm.id){a.next=43;break}return a.next=41,n.$api.update("kechenganpai",n.ruleForm);case 41:a.next=45;break;case 43:return a.next=45,n.$api.add("kechenganpai",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(a,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,a("543d")["default"])},f376:function(e,n,a){"use strict";a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"5f99"))}},r=function(){var e=this,n=e.$createElement;e._self._c},i=[]}},[["ac30","common/runtime","common/vendor"]]]);