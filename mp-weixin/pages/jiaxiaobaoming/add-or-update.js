(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiaxiaobaoming/add-or-update"],{2141:function(e,n,a){},"3f7f":function(e,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return t})),a.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"5f99"))}},i=function(){var e=this,n=e.$createElement;e._self._c},t=[]},6271:function(e,n,a){"use strict";var r=a("2141"),i=a.n(r);i.a},"6b2b":function(e,n,a){"use strict";a.r(n);var r=a("b4e3"),i=a.n(r);for(var t in r)"default"!==t&&function(e){a.d(n,e,(function(){return r[e]}))}(t);n["default"]=i.a},a220:function(e,n,a){"use strict";(function(e){a("82b6");r(a("66fd"));var n=r(a("f536"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},b4e3:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(a("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function t(e,n,a,r,i,t,o){try{var u=e[t](o),c=u.value}catch(s){return void a(s)}u.done?n(c):Promise.resolve(c).then(r,i)}function o(e){return function(){var n=this,a=arguments;return new Promise((function(r,i){var o=e.apply(n,a);function u(e){t(o,r,i,u,c,"next",e)}function c(e){t(o,r,i,u,c,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("5f99"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{cross:"",ruleForm:{jiaxiaomingcheng:"",lianxifangshi:"",xuefei:"",fengmian:"",jiaxiaodizhi:"",yonghuzhanghao:"",yonghuxingming:"",dianhua:"",baomingshijian:"",ispay:""},user:{},ro:{jiaxiaomingcheng:!1,lianxifangshi:!1,xuefei:!1,fengmian:!1,jiaxiaodizhi:!1,yonghuzhanghao:!1,yonghuxingming:!1,dianhua:!1,baomingshijian:!1,ispay:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return o(r.default.mark((function i(){var t,o,u,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a.ruleForm.baomingshijian=a.$utils.getCurDateTime(),t=e.getStorageSync("nowTable"),i.next=4,a.$api.session(t);case 4:if(o=i.sent,a.user=o.data,a.ruleForm.yonghuzhanghao=a.user.yonghuzhanghao,a.ro.yonghuzhanghao=!0,a.ruleForm.yonghuxingming=a.user.yonghuxingming,a.ro.yonghuxingming=!0,a.ruleForm.dianhua=a.user.dianhua,a.ro.dianhua=!0,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=20;break}return a.ruleForm.id=n.id,i.next=18,a.$api.info("jiaxiaobaoming",a.ruleForm.id);case 18:o=i.sent,a.ruleForm=o.data;case 20:if(a.cross=n.cross,!n.cross){i.next=64;break}u=e.getStorageSync("crossObj"),i.t0=r.default.keys(u);case 24:if((i.t1=i.t0()).done){i.next=64;break}if(c=i.t1.value,"jiaxiaomingcheng"!=c){i.next=30;break}return a.ruleForm.jiaxiaomingcheng=u[c],a.ro.jiaxiaomingcheng=!0,i.abrupt("continue",24);case 30:if("lianxifangshi"!=c){i.next=34;break}return a.ruleForm.lianxifangshi=u[c],a.ro.lianxifangshi=!0,i.abrupt("continue",24);case 34:if("xuefei"!=c){i.next=38;break}return a.ruleForm.xuefei=u[c],a.ro.xuefei=!0,i.abrupt("continue",24);case 38:if("fengmian"!=c){i.next=42;break}return a.ruleForm.fengmian=u[c],a.ro.fengmian=!0,i.abrupt("continue",24);case 42:if("jiaxiaodizhi"!=c){i.next=46;break}return a.ruleForm.jiaxiaodizhi=u[c],a.ro.jiaxiaodizhi=!0,i.abrupt("continue",24);case 46:if("yonghuzhanghao"!=c){i.next=50;break}return a.ruleForm.yonghuzhanghao=u[c],a.ro.yonghuzhanghao=!0,i.abrupt("continue",24);case 50:if("yonghuxingming"!=c){i.next=54;break}return a.ruleForm.yonghuxingming=u[c],a.ro.yonghuxingming=!0,i.abrupt("continue",24);case 54:if("dianhua"!=c){i.next=58;break}return a.ruleForm.dianhua=u[c],a.ro.dianhua=!0,i.abrupt("continue",24);case 58:if("baomingshijian"!=c){i.next=62;break}return a.ruleForm.baomingshijian=u[c],a.ro.baomingshijian=!0,i.abrupt("continue",24);case 62:i.next=24;break;case 64:a.styleChange();case 65:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},baomingshijianConfirm:function(e){console.log(e),this.ruleForm.baomingshijian=e.result,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(r.default.mark((function a(){var i,t,o,u,c,s,f,g,l,m;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.cross){a.next=16;break}if(u=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==u){a.next=16;break}if(s=e.getStorageSync("crossObj"),u.startsWith("[")){a.next=12;break}for(f in s)f==u&&(s[f]=c);return g=e.getStorageSync("crossTable"),a.next=10,n.$api.update("".concat(g),s);case 10:a.next=16;break;case 12:i=Number(e.getStorageSync("userid")),t=s["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 16:if(!t||!i){a.next=38;break}return n.ruleForm.crossuserid=i,n.ruleForm.crossrefid=t,l={page:1,limit:10,crossuserid:i,crossrefid:t},a.next=22,n.$api.list("jiaxiaobaoming",l);case 22:if(m=a.sent,!(m.data.total>=o)){a.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 28:if(!n.ruleForm.id){a.next=33;break}return a.next=31,n.$api.update("jiaxiaobaoming",n.ruleForm);case 31:a.next=35;break;case 33:return a.next=35,n.$api.add("jiaxiaobaoming",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:a.next=46;break;case 38:if(!n.ruleForm.id){a.next=43;break}return a.next=41,n.$api.update("jiaxiaobaoming",n.ruleForm);case 41:a.next=45;break;case 43:return a.next=45,n.$api.add("jiaxiaobaoming",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(a,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,a("543d")["default"])},f536:function(e,n,a){"use strict";a.r(n);var r=a("3f7f"),i=a("6b2b");for(var t in i)"default"!==t&&function(e){a.d(n,e,(function(){return i[e]}))}(t);a("6271");var o,u=a("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"33c24e8f",null,!1,r["a"],o);n["default"]=c.exports}},[["a220","common/runtime","common/vendor"]]]);