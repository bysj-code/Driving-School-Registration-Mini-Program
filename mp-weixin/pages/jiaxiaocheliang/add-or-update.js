(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiaxiaocheliang/add-or-update"],{"50ac":function(e,n,t){},8002:function(e,n,t){"use strict";(function(e){t("82b6");a(t("66fd"));var n=a(t("80cc"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"80cc":function(e,n,t){"use strict";t.r(n);var a=t("d54b"),i=t("cc95");for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t("b0a7");var c,u=t("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"073f0548",null,!1,a["a"],c);n["default"]=o.exports},b0a7:function(e,n,t){"use strict";var a=t("50ac"),i=t.n(a);i.a},c60a:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t,a,i,r,c){try{var u=e[r](c),o=u.value}catch(l){return void t(l)}u.done?n(o):Promise.resolve(o).then(a,i)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(a,i){var c=e.apply(n,t);function u(e){r(c,a,i,u,o,"next",e)}function o(e){r(c,a,i,u,o,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("5f99"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{cross:"",ruleForm:{cheliangbianhao:this.getUUID(),cheliangmingcheng:"",cheliangleixing:"",cheliangtupian:"",cheliangweizhi:"",cheliangxiangqing:""},cheliangleixingOptions:[],cheliangleixingIndex:0,user:{},ro:{cheliangbianhao:!1,cheliangmingcheng:!1,cheliangleixing:!1,cheliangtupian:!1,cheliangweizhi:!1,cheliangxiangqing:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return c(a.default.mark((function i(){var r,c,u,o;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=e.getStorageSync("nowTable"),i.next=3,t.$api.session(r);case 3:if(c=i.sent,t.user=c.data,t.cheliangleixingOptions="训练车,考试车".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=14;break}return t.ruleForm.id=n.id,i.next=12,t.$api.info("jiaxiaocheliang",t.ruleForm.id);case 12:c=i.sent,t.ruleForm=c.data;case 14:if(t.cross=n.cross,!n.cross){i.next=46;break}u=e.getStorageSync("crossObj"),i.t0=a.default.keys(u);case 18:if((i.t1=i.t0()).done){i.next=46;break}if(o=i.t1.value,"cheliangbianhao"!=o){i.next=24;break}return t.ruleForm.cheliangbianhao=u[o],t.ro.cheliangbianhao=!0,i.abrupt("continue",18);case 24:if("cheliangmingcheng"!=o){i.next=28;break}return t.ruleForm.cheliangmingcheng=u[o],t.ro.cheliangmingcheng=!0,i.abrupt("continue",18);case 28:if("cheliangleixing"!=o){i.next=32;break}return t.ruleForm.cheliangleixing=u[o],t.ro.cheliangleixing=!0,i.abrupt("continue",18);case 32:if("cheliangtupian"!=o){i.next=36;break}return t.ruleForm.cheliangtupian=u[o],t.ro.cheliangtupian=!0,i.abrupt("continue",18);case 36:if("cheliangweizhi"!=o){i.next=40;break}return t.ruleForm.cheliangweizhi=u[o],t.ro.cheliangweizhi=!0,i.abrupt("continue",18);case 40:if("cheliangxiangqing"!=o){i.next=44;break}return t.ruleForm.cheliangxiangqing=u[o],t.ro.cheliangxiangqing=!0,i.abrupt("continue",18);case 44:i.next=18;break;case 46:t.styleChange();case 47:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},cheliangleixingChange:function(e){this.cheliangleixingIndex=e.target.value,this.ruleForm.cheliangleixing=this.cheliangleixingOptions[this.cheliangleixingIndex]},cheliangtupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.cheliangtupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return c(a.default.mark((function t(){var i,r,c,u,o,l,s,g,h,f;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.cheliangmingcheng){t.next=3;break}return n.$utils.msg("车辆名称不能为空"),t.abrupt("return");case 3:if(n.ruleForm.cheliangleixing){t.next=6;break}return n.$utils.msg("车辆类型不能为空"),t.abrupt("return");case 6:if(!n.cross){t.next=22;break}if(u=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==u){t.next=22;break}if(l=e.getStorageSync("crossObj"),u.startsWith("[")){t.next=18;break}for(s in l)s==u&&(l[s]=o);return g=e.getStorageSync("crossTable"),t.next=16,n.$api.update("".concat(g),l);case 16:t.next=22;break;case 18:i=Number(e.getStorageSync("userid")),r=l["id"],c=e.getStorageSync("statusColumnName"),c=c.replace(/\[/,"").replace(/\]/,"");case 22:if(!r||!i){t.next=44;break}return n.ruleForm.crossuserid=i,n.ruleForm.crossrefid=r,h={page:1,limit:10,crossuserid:i,crossrefid:r},t.next=28,n.$api.list("jiaxiaocheliang",h);case 28:if(f=t.sent,!(f.data.total>=c)){t.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 34:if(!n.ruleForm.id){t.next=39;break}return t.next=37,n.$api.update("jiaxiaocheliang",n.ruleForm);case 37:t.next=41;break;case 39:return t.next=41,n.$api.add("jiaxiaocheliang",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:t.next=52;break;case 44:if(!n.ruleForm.id){t.next=49;break}return t.next=47,n.$api.update("jiaxiaocheliang",n.ruleForm);case 47:t.next=51;break;case 49:return t.next=51,n.$api.add("jiaxiaocheliang",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),a=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),a=a>9?a:"0"+a,i=i>9?i:"0"+i,"".concat(t,"-").concat(a,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("543d")["default"])},cc95:function(e,n,t){"use strict";t.r(n);var a=t("c60a"),i=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=i.a},d54b:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a}));var i=function(){var e=this,n=e.$createElement;e._self._c},r=[]}},[["8002","common/runtime","common/vendor"]]]);