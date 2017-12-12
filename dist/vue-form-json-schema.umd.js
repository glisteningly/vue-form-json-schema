!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue"),require("ajv")):"function"==typeof define&&define.amd?define("VueFormJsonSchema",["vue","ajv"],t):"object"==typeof exports?exports.VueFormJsonSchema=t(require("vue"),require("ajv")):e.VueFormJsonSchema=t(e.vue,e.ajv)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=24)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VFJS_EVENT_FIELD_STATE_UPDATE="VFJS_EVENT_FIELD_STATE_UPDATE",t.VFJS_EVENT_FIELD_MODEL_VALIDATE="VFJS_EVENT_FIELD_MODEL_VALIDATE",t.VFJS_EVENT_FIELD_MODEL_UPDATE="VFJS_EVENT_FIELD_MODEL_UPDATE",t.VFJS_EVENT_MODEL_UPDATE="VFJS_EVENT_MODEL_UPDATE",t.VFJS_EVENT_MODEL_UPDATED="VFJS_EVENT_MODEL_UPDATED",t.VFJS_EVENT_MODEL_VALIDATE="VFJS_EVENT_MODEL_VALIDATE",t.VFJS_EVENT_STATE_UPDATED="VFJS_EVENT_STATE_UPDATED",t.VFJS_EXTERNAL_EVENT_CHANGE="change",t.VFJS_EXTERNAL_EVENT_STATE_CHANGE="state-change",t.VFJS_EXTERNAL_EVENT_VALIDATED="validated"},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t){var r=Array.isArray;e.exports=r},function(e,t,r){var n=r(5);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},function(e,t,r){var n=r(96);e.exports=function(e,t,r){var i=null==e?void 0:n(e,t);return void 0===i?r:i}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,r){var n=r(33);e.exports=function(e,t,r){"__proto__"==t&&n?n(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,r){var n=r(27),i=r(56)(function(e,t,r){n(e,t,r)});e.exports=i},function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var i=r(28),s=r(29),o=r(30),u=r(31),f=r(32);n.prototype.clear=i,n.prototype.delete=s,n.prototype.get=o,n.prototype.has=u,n.prototype.set=f,e.exports=n},function(e,t,r){var n=r(6),i=r(5);e.exports=function(e,t,r){(void 0===r||i(e[t],r))&&(void 0!==r||t in e)||n(e,t,r)}},function(e,t,r){var n=r(40),i="object"==typeof self&&self&&self.Object===Object&&self,s=n||i||Function("return this")();e.exports=s},function(e,t,r){var n=r(13)(Object.getPrototypeOf,Object);e.exports=n},function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},function(e,t,r){var n=r(15),i=r(1);e.exports=function(e){if(!i(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=r(6),i=r(5),s=Object.prototype.hasOwnProperty;e.exports=function(e,t,r){var o=e[t];s.call(e,t)&&i(o,r)&&(void 0!==r||t in e)||n(e,t,r)}},function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(68)),s=n(r(69)),o=n(r(70)),u=n(r(109)),f=n(r(110)),a={created:function(){this.vfjsInitialize()},beforeDestroy:function(){this.vfjsDestroy()},computed:i.default,data:s.default,props:u.default,methods:o.default,watch:f.default};t.default=a},function(e,t,r){var n=r(72);e.exports=function(e,t,r){return null==e?e:n(e,t,r)}},function(e,t,r){var n=r(2),i=r(73),s=r(75),o=r(77);e.exports=function(e,t){return n(e)?e:i(e,t)?[e]:s(o(e))}},function(e,t){e.exports=function(e){return e}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.vfjsViewer=t.vfjsGlobalMixin=t.vfjsComponentMixin=void 0;var i=n(r(25)),s=n(r(20)),o=n(r(111));t.vfjsComponentMixin=i.default,t.vfjsGlobalMixin=s.default,t.vfjsViewer=o.default,t.default=o.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(26)),s=n(r(63)),o=n(r(67)),u={mounted:function(){this.vfjsFieldHelperAddListener(this.$el,"blur")},beforeDestroy:function(){this.vfjsFieldHelperRemoveListener(this.$el,"blur")},computed:i.default,props:o.default,methods:s.default};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(8)),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s={vfjsAttributes:function(){return i({},this.getVfjsFieldAttributes(this.vfjsFieldOptions,(0,n.default)({},this.vfjsDefaultOptions,{attrs:{id:this.vfjsFieldId,required:this.vfjsFieldRequired},key:this.vfjsFieldId,props:this.$options.propsData})))}};t.default=s},function(e,t,r){function n(e,t,r,l,c){e!==t&&o(t,function(o,a){if(f(o))c||(c=new i),u(e,t,a,r,n,l,c);else{var d=l?l(e[a],o,a+"",e,t,c):void 0;void 0===d&&(d=o),s(e,a,d)}},a)}var i=r(9),s=r(10),o=r(35),u=r(37),f=r(1),a=r(19);e.exports=n},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,r){var n=r(3),i=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0||(r==t.length-1?t.pop():i.call(t,r,1),--this.size,0))}},function(e,t,r){var n=r(3);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},function(e,t,r){var n=r(3);e.exports=function(e){return n(this.__data__,e)>-1}},function(e,t,r){var n=r(3);e.exports=function(e,t){var r=this.__data__,i=n(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}},function(e,t,r){var n=r(34),i=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=i},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,r){var n=r(36)();e.exports=n},function(e,t){e.exports=function(e){return function(t,r,n){for(var i=-1,s=Object(t),o=n(t),u=o.length;u--;){var f=o[e?u:++i];if(!1===r(s[f],f,s))break}return t}}},function(e,t,r){var n=r(10),i=r(38),s=r(42),o=r(45),u=r(46),f=r(49),a=r(2),l=r(50),c=r(16),d=r(14),v=r(1),p=r(53),j=r(17),h=r(54);e.exports=function(e,t,r,_,V,y,E){var F=e[r],g=t[r],b=E.get(g);if(b)n(e,r,b);else{var m=y?y(F,g,r+"",e,t,E):void 0,O=void 0===m;if(O){var S=a(g),M=!S&&c(g),A=!S&&!M&&j(g);m=g,S||M||A?a(F)?m=F:l(F)?m=o(F):M?(O=!1,m=i(g,!0)):A?(O=!1,m=s(g,!0)):m=[]:p(g)||f(g)?(m=F,f(F)?m=h(F):(!v(F)||_&&d(F))&&(m=u(g))):O=!1}O&&(E.set(g,m),V(m,g,_,y,E),E.delete(g)),n(e,r,m)}}},function(e,t,r){(function(e){var n=r(11),i="object"==typeof t&&t&&!t.nodeType&&t,s=i&&"object"==typeof e&&e&&!e.nodeType&&e,o=s&&s.exports===i?n.Buffer:void 0,u=o?o.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var r=e.length,n=u?u(r):new e.constructor(r);return e.copy(n),n}}).call(t,r(39)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(t,r(41))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(43);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}},function(e,t,r){var n=r(44);e.exports=function(e){var t=new e.constructor(e.byteLength);return new n(t).set(new n(e)),t}},function(e,t,r){var n=r(11).Uint8Array;e.exports=n},function(e,t){e.exports=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}},function(e,t,r){var n=r(47),i=r(12),s=r(48);e.exports=function(e){return"function"!=typeof e.constructor||s(e)?{}:n(i(e))}},function(e,t,r){var n=r(1),i=Object.create,s=function(){function e(){}return function(t){if(!n(t))return{};if(i)return i(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();e.exports=s},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=r(51),i=r(7);e.exports=function(e){return i(e)&&n(e)}},function(e,t,r){var n=r(14),i=r(52);e.exports=function(e){return null!=e&&i(e.length)&&!n(e)}},function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t,r){var n=r(15),i=r(12),s=r(7),o=Function.prototype,u=Object.prototype,f=o.toString,a=u.hasOwnProperty,l=f.call(Object);e.exports=function(e){if(!s(e)||"[object Object]"!=n(e))return!1;var t=i(e);if(null===t)return!0;var r=a.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==l}},function(e,t,r){var n=r(55),i=r(19);e.exports=function(e){return n(e,i(e))}},function(e,t,r){var n=r(18),i=r(6);e.exports=function(e,t,r,s){var o=!r;r||(r={});for(var u=-1,f=t.length;++u<f;){var a=t[u],l=s?s(r[a],e[a],a,r,e):void 0;void 0===l&&(l=e[a]),o?i(r,a,l):n(r,a,l)}return r}},function(e,t,r){var n=r(57),i=r(62);e.exports=function(e){return n(function(t,r){var n=-1,s=r.length,o=s>1?r[s-1]:void 0,u=s>2?r[2]:void 0;for(o=e.length>3&&"function"==typeof o?(s--,o):void 0,u&&i(r[0],r[1],u)&&(o=s<3?void 0:o,s=1),t=Object(t);++n<s;){var f=r[n];f&&e(t,f,n,o)}return t})}},function(e,t,r){var n=r(58),i=r(59),s=r(61);e.exports=function(e,t){return s(i(e,t,n),e+"")}},function(e,t){e.exports=function(e){return e}},function(e,t,r){var n=r(60),i=Math.max;e.exports=function(e,t,r){return t=i(void 0===t?e.length-1:t,0),function(){for(var s=arguments,o=-1,u=i(s.length-t,0),f=Array(u);++o<u;)f[o]=s[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=s[o];return a[t]=r(f),n(e,this,a)}}},function(e,t){e.exports=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(){return!1}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=n(r(64)),o=n(r(65)),u=n(r(66)),f=i({},s.default,o.default,u.default);t.default=f},function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(r(8)),s={getVfjsFieldAttributes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.class,s=t.on,o=t.nativeOn,u=n(t,["class","on","nativeOn"]),f=e.class,a=e.on,l=e.nativeOn,c=n(e,["class","on","nativeOn"]);if(!c)return{};var d={class:(0,i.default)({},this.vfjsFieldHelperFormatClasses(f),this.vfjsFieldHelperFormatClasses(r)),on:(0,i.default)(this.vfjsFieldHelperFormatEvents(a),this.vfjsFieldHelperFormatEvents(s)),nativeOn:(0,i.default)(this.vfjsFieldHelperFormatEvents(l),this.vfjsFieldHelperFormatEvents(o))},v={props:c};return(0,i.default)({},u,v,c,d)}};t.default=s},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s={vfjsFieldHelperAddListener:function(e,t){e.addEventListener(t,this.vfjsFieldHelperStateEventHandler)},vfjsFieldHelperRemoveListener:function(e,t){e.removeEventListener(t,this.vfjsFieldHelperStateEventHandler)},vfjsFieldHelperStateEventHandler:function(e){e&&"blur"===e.type&&this.setVfjsFieldState({$touched:!0})},vfjsFieldHelperFormatEvents:function(e){return e?Array.isArray(e)?this.vfjsFieldHelperFormatEventsReducer(e):this.vfjsFieldHelperFormatEventsReducer(Object.keys(e)):{}},vfjsFieldHelperFormatClasses:function(e){return e?"string"==typeof e?n({},e,!0):Array.isArray(e)?e.reduce(function(e,t){return i({},e,n({},t,!0))},{}):e:{}},vfjsFieldHelperEventHandler:function(e,t){var r=this;return function(e){return"function"==typeof t?r.setVfjsFieldModel(t(e)):e instanceof Event?e.target&&e.target.value?r.setVfjsFieldModel(e.target.value):r.setVfjsFieldModel(void 0):r.setVfjsFieldModel(e)}},vfjsFieldHelperFormatEventsReducer:function(e){var t=this;return e.reduce(function(r,s){return i({},r,n({},s,t.vfjsFieldHelperEventHandler(s,e[s])))},{})}};t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i={setState:function(e){this.setVfjsFieldState(e)},setModel:function(e){this.setVfjsFieldModel(e)},setVfjsFieldState:function(e,t){this.vfjsBus.$emit(n.VFJS_EVENT_FIELD_STATE_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsFieldModel:function(e,t){this.vfjsBus.$emit(n.VFJS_EVENT_FIELD_MODEL_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={children:{type:Array,default:function(){return[]}},id:{type:String,required:!0},model:{type:null},modelKey:{type:String,required:!0},required:{type:Boolean,required:!0},schema:{type:Object,required:!0},state:{type:Object,required:!0},tag:{type:String,default:"div"},uuid:{type:String,required:!0},value:{type:null},uiSchema:{type:Object,required:!0},vfjsBus:{type:Object,required:!0},vfjsFieldErrors:{type:Array},vfjsFieldId:{type:String,required:!0},vfjsFieldModel:{type:null},vfjsFieldModelKey:{type:String,required:!0},vfjsFieldOptions:{type:Object,required:!0},vfjsFieldRequired:{type:Boolean,required:!0},vfjsFieldSchema:{type:Object,required:!0},vfjsFieldState:{type:Object,required:!0},vfjsFieldTag:{type:String,default:"div"},vfjsFieldUiSchema:{type:Object,required:!0},vfjsFieldUuid:{type:String,required:!0},vfjsModel:{type:Object,required:!0},vfjsState:{type:Object,required:!0}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={vfjsSchemaValid:function(){return this.vfjsSchema.every(this.isVfjsFieldSchemaValid)},vfjsModelValid:function(){return this.vfjsSchema.every(this.isVfjsFieldModelValid)},vfjsFields:function(){return this.vfjsFieldsActive.filter(function(e){return e}).map(this.vfjsHelperCreateField)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(){return{vfjsBus:{},vfjsComponents:{},vfjsEvents:[n.VFJS_EVENT_FIELD_MODEL_UPDATE,n.VFJS_EVENT_FIELD_MODEL_VALIDATE,n.VFJS_EVENT_FIELD_STATE_UPDATE,n.VFJS_EVENT_MODEL_UPDATE,n.VFJS_EVENT_MODEL_UPDATED,n.VFJS_EVENT_MODEL_VALIDATE,n.VFJS_EVENT_STATE_UPDATED],vfjsFieldsActive:[],vfjsListeners:[],vfjsModel:{},vfjsSchema:{},vfjsUiSchema:[],vfjsState:{},vfjsValidator:null}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=n(r(71)),o=n(r(92)),u=n(r(93)),f=n(r(94)),a=n(r(98)),l=n(r(101)),c=n(r(103)),d=n(r(106)),v=i({},s.default,u.default,o.default,f.default,l.default,a.default,c.default,d.default);t.default=v},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var s=n(r(21)),o=n(r(79)),u=n(r(91)),f=r(0),a={addVfjsListener:function(e,t){var r=this.vfjsBus.$on(e,function(r){return t(e,r)});this.vfjsListeners.push(r)},addVfjsListeners:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments[1];t.forEach(function(t){return e.addVfjsListener(t,r)})},removeVfjsListener:function(e){this.vfjsBus.$off(e)},removeVfjsListeners:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(this.removeVfjsListener)},removeVfjsListenersAll:function(){this.vfjsBus.$off(),this.vfjsListeners=[]},vfjsBusEventHandler:function(e,t){var r,n=this,u=(r={},i(r,f.VFJS_EVENT_FIELD_MODEL_VALIDATE,function(e){var t=e.key,r=e.value,i=e.cb,s=n.getVfjsFieldModel(t),u=n.vfjsHelperApplyFieldModel(t,r);n.vfjsBus.$emit(f.VFJS_EVENT_MODEL_VALIDATE,{vfjsModel:u,cb:function(e){var u=n.getVfjsFieldModelValidationErrors(t,r),f=Object.assign({},n.getVfjsFieldState(t),{$dirty:!(0,o.default)(s,r),vfjsFieldErrors:u});n.setVfjsFieldState(f,t),i&&"function"==typeof i&&i(u)}})}),i(r,f.VFJS_EVENT_FIELD_MODEL_UPDATE,function(e){var t=e.key,r=e.value,i=e.cb;n.vfjsBus.$emit(f.VFJS_EVENT_FIELD_MODEL_VALIDATE,{key:t,value:r,cb:function(e){if(!e||e&&0===e.length||n.vfjsOptions.allowInvalidModel){var s=n.vfjsHelperApplyFieldModel(t,r);n.setVfjsModel(s)}i&&"function"==typeof i&&i(e)}})}),i(r,f.VFJS_EVENT_FIELD_STATE_UPDATE,function(e){var t=e.key,r=e.value,i=Object.assign({},n.getVfjsState());(0,s.default)(i,t,r),n.setVfjsState(i),n.setVfjsUiFieldsActive()}),i(r,f.VFJS_EVENT_MODEL_VALIDATE,function(e){var t=e.vfjsModel,r=e.cb,i=n.getVfjsValidationErrors(t),s=Object.assign({},n.getVfjsState(),{vfjsErrors:i});n.setVfjsState(s);var o=n.getVfjsState();n.$emit(f.VFJS_EXTERNAL_EVENT_VALIDATED,0===o.vfjsErrors.length),r&&"function"==typeof r&&r(i)}),i(r,f.VFJS_EVENT_MODEL_UPDATED,function(){n.setVfjsUiFieldsActive(),n.$emit(f.VFJS_EXTERNAL_EVENT_CHANGE,n.getVfjsModel())}),i(r,f.VFJS_EVENT_STATE_UPDATED,function(){n.$emit(f.VFJS_EXTERNAL_EVENT_STATE_CHANGE,n.getVfjsState())}),r);e&&e in u&&u[e](t)},vfjsBusInitialize:function(){this.vfjsBus=new u.default}};t.default=a},function(e,t,r){var n=r(18),i=r(22),s=r(78),o=r(1),u=r(23);e.exports=function(e,t,r,f){if(!o(e))return e;for(var a=-1,l=(t=i(t,e)).length,c=l-1,d=e;null!=d&&++a<l;){var v=u(t[a]),p=r;if(a!=c){var j=d[v];void 0===(p=f?f(j,v,d):void 0)&&(p=o(j)?j:s(t[a+1])?[]:{})}n(d,v,p),d=d[v]}return e}},function(e,t,r){var n=r(2),i=r(74),s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;e.exports=function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!i(e))||o.test(e)||!s.test(e)||null!=t&&e in Object(t)}},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/\\(\\)?/g,o=r(76)(function(e){var t=[];return n.test(e)&&t.push(""),e.replace(i,function(e,r,n,i){t.push(n?i.replace(s,"$1"):r||e)}),t});e.exports=o},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){return e}},function(e,t){var r=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t,r){var n=r(80);e.exports=function(e,t){return n(e,t)}},function(e,t,r){function n(e,t,r,o,u){return e===t||(null==e||null==t||!s(e)&&!s(t)?e!=e&&t!=t:i(e,t,r,o,n,u))}var i=r(81),s=r(7);e.exports=n},function(e,t,r){var n=r(9),i=r(82),s=r(87),o=r(88),u=r(90),f=r(2),a=r(16),l=r(17),c="[object Arguments]",d="[object Array]",v="[object Object]",p=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,j,h,_){var V=f(e),y=f(t),E=V?d:u(e),F=y?d:u(t),g=(E=E==c?v:E)==v,b=(F=F==c?v:F)==v,m=E==F;if(m&&a(e)){if(!a(t))return!1;V=!0,g=!1}if(m&&!g)return _||(_=new n),V||l(e)?i(e,t,r,j,h,_):s(e,t,E,r,j,h,_);if(!(1&r)){var O=g&&p.call(e,"__wrapped__"),S=b&&p.call(t,"__wrapped__");if(O||S){var M=O?e.value():e,A=S?t.value():t;return _||(_=new n),h(M,A,r,j,_)}}return!!m&&(_||(_=new n),o(e,t,r,j,h,_))}},function(e,t,r){var n=r(83),i=r(84),s=r(85);e.exports=function(e,t,r,o,u,f){var a=1&r,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var d=f.get(e);if(d&&f.get(t))return d==t;var v=-1,p=!0,j=2&r?new n:void 0;for(f.set(e,t),f.set(t,e);++v<l;){var h=e[v],_=t[v];if(o)var V=a?o(_,h,v,t,e,f):o(h,_,v,e,t,f);if(void 0!==V){if(V)continue;p=!1;break}if(j){if(!i(t,function(e,t){if(!s(j,t)&&(h===e||u(h,e,r,o,f)))return j.push(t)})){p=!1;break}}else if(h!==_&&!u(h,_,r,o,f)){p=!1;break}}return f.delete(e),f.delete(t),p}},function(e,t,r){var n=r(2);e.exports=function(){if(!arguments.length)return[];var e=arguments[0];return n(e)?e:[e]}},function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},function(e,t,r){var n=r(86);e.exports=function(e,t){return!(null==e||!e.length)&&n(e,t,0)>-1}},function(e,t){e.exports=function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,r){var n=r(89),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,s,o,u){var f=1&r,a=n(e),l=a.length;if(l!=n(t).length&&!f)return!1;for(var c=l;c--;){var d=a[c];if(!(f?d in t:i.call(t,d)))return!1}var v=u.get(e);if(v&&u.get(t))return v==t;var p=!0;u.set(e,t),u.set(t,e);for(var j=f;++c<l;){var h=e[d=a[c]],_=t[d];if(s)var V=f?s(_,h,d,t,e,u):s(h,_,d,e,t,u);if(!(void 0===V?h===_||o(h,_,r,s,u):V)){p=!1;break}j||(j="constructor"==d)}if(p&&!j){var y=e.constructor,E=t.constructor;y!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof y&&y instanceof y&&"function"==typeof E&&E instanceof E)&&(p=!1)}return u.delete(e),u.delete(t),p}},function(e,t,r){var n=r(13)(Object.keys,Object);e.exports=n},function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(r(21)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u={vfjsHelperCreateField:function(e){var t=this,r=e.id,n=e.uuid,s=e.required,u=e.children,f=void 0===u?[]:u,a=e.component,l=e.model,c=void 0===l?"":l,d=e.fieldOptions,v=void 0===d?{}:d,p=this.vfjsHelperFieldIsArray(c)?f.reduce(function(e,r){return[].concat(i(e),i(r.map(t.vfjsHelperCreateField)))},[]):f.map(this.vfjsHelperCreateField),j=this.getVfjsFieldSchema(c)||{},h=this.getVfjsFieldState(c)||{},_=this.getVfjsFieldModel(c),V=this.getVfjsState(),y=this.getVfjsModel();return{component:a,children:p,props:o({},v,{children:f,id:r,uuid:n,model:_,modelKey:c,required:s,schema:j,state:h,uiSchema:e,value:_,vfjsBus:this.vfjsBus,vfjsFieldId:r,vfjsFieldModel:_,vfjsFieldModelKey:c,vfjsFieldOptions:v,vfjsFieldRequired:s,vfjsFieldSchema:j,vfjsFieldState:h,vfjsFieldUiSchema:e,vfjsFieldUuid:n,vfjsModel:y,vfjsState:V})}},vfjsHelperCreateComponent:function(e){var t=e.component,r=e.children,n=e.props;if("string"==typeof t&&t in this.vfjsComponents)return this.vfjsHelperCreateComponent({component:this.vfjsComponents[t],children:r,props:n});if(n.id&&n.id in this.vfjsComponentsCreated)return this.vfjsComponentsCreated[n.id];var i=this.$createElement(t,o({props:n}),this.createFields(r));return!n.id||n.id in this.vfjsComponentsCreated||(this.vfjsComponentsCreated[n.id]=i),i},vfjsHelperGenerateUuid:function(){var e=Date.now();return void 0!==window.performance&&"function"==typeof window.performance.now&&(e+=window.performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=16*(e+Math.random())%16|0;return e=Math.floor(e/16),("x"===t?r:11&r).toString(16)})},vfjsHelperApplyFieldModel:function(e,t){var r=Object.assign({},this.getVfjsModel());return(0,s.default)(r,e,t),r},vfjsHelpersGenerateFieldUuid:function(e){var t=e.children,r=void 0===t?[]:t,i=n(e,["children"]),s=this.vfjsHelperGenerateUuid(),u=String(s).substr(0,8);return o({},i,{id:u,uuid:s,children:r.map(this.vfjsHelpersGenerateFieldUuid)})},vfjsHelperChildArrayMapper:function(e,t,r){var i=e.model,s=e.children,u=void 0===s?[]:s,f=n(e,["model","children"]);return o({},f,{model:this.vfjsHelperGetChildArrayModelAtIndex(i,t,r),children:this.vfjsHelperChildArrayReducerMapper(t,u,r)})},vfjsHelperChildArrayReducerMapper:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments[2];return r.reduce(function(r,s){return[].concat(i(r),[t.vfjsHelperChildArrayMapper(s,e,n)])},[])},vfjsHelperGetChildArrayModelAtIndex:function(e,t,r){var n=this.vfjsHelperGetRelativeModel(e,t);return n?t+"."+r+"."+n:e},vfjsHelperGetRelativeModel:function(e,t){return e?String(e).substr(t.length+1):e},vfjsHelperGetParentModel:function(e){var t=String(e).lastIndexOf(".");return String(e).substr(0,t)},vfjsHelperSchemaHasRequiredField:function(e,t){return!!(e&&e.required&&Array.isArray(e.required))&&-1!==e.required.indexOf(t)},vfjsHelperFieldIsRequired:function(e){if(e){var t=this.vfjsHelperGetParentModel(e);if(t){var r=this.vfjsHelperGetRelativeModel(e,t),n=this.getVfjsFieldSchema(e);return this.vfjsHelperSchemaHasRequiredField(n,r)}var i=this.getVfjsSchema();return this.vfjsHelperSchemaHasRequiredField(i,e)}return!1},vfjsHelperFieldIsArray:function(e){if(!e)return!1;var t=this.getVfjsFieldSchema(e);return!!t&&"array"===t.type},vfjsHelperIsNumber:function(e){return!Number.isNaN(parseFloat(e))&&Number.isFinite(parseFloat(e))}};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={vfjsDestroy:function(){var e=this;this.vfjsEvents.forEach(function(t){return e.removeVfjsListener(t)})},vfjsInitialize:function(){this.vfjsBusInitialize(),this.setVfjsModel(this.model),this.vfjsComponents=Object.assign({},this.components),this.vfjsComponentsCreated={},this.vfjsSchema=Object.assign({},this.schema),this.setVfjsUiSchema(this.uiSchema),this.vfjsOptions=Object.assign({},{allowInvalidModel:!0,validate:!0,validateOnLoad:!0,validateOnChange:!0},this.options),this.addVfjsListeners(this.vfjsEvents,this.vfjsBusEventHandler),this.vfjsValidationInitialize(),this.setVfjsUiFieldsActive()}};t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=n(r(95)),o=n(r(97)),u=i({},s.default,o.default);t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(4)),i={getVfjsFieldModel:function(e){return e?this.getVfjsModel(e):this.vfjsFieldModelKey?this.getVfjsModel(this.vfjsFieldModelKey):null},getVfjsModel:function(e){return e?(0,n.default)(this.vfjsModel,e):this.vfjsModel}};t.default=i},function(e,t,r){var n=r(22),i=r(23);e.exports=function(e,t){for(var r=0,s=(t=n(t,e)).length;null!=e&&r<s;)e=e[i(t[r++])];return r&&r==s?e:void 0}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i={setVfjsFieldModel:function(e,t){this.vfjsBus.$emit(n.VFJS_EVENT_FIELD_MODEL_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsModel:function(e){this.vfjsModel=Object.assign({},this.getVfjsModel(),e),this.vfjsBus.$emit(n.VFJS_EVENT_MODEL_UPDATED,this.getVfjsModel())}};t.default=i},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=n(r(99)),o=n(r(100)),u=i({},s.default,o.default);t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(4)),i={getVfjsState:function(e){return e?(0,n.default)(this.vfjsState,e):this.vfjsState},getVfjsFieldState:function(e){return e?this.getVfjsState(e):this.vfjsFieldModelKey?this.getVfjsState(this.vfjsFieldModelKey):null}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i={setVfjsFieldState:function(e,t){this.vfjsBus.$emit(n.VFJS_EVENT_FIELD_STATE_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsState:function(e){this.vfjsState=Object.assign({},this.getVfjsState(),e),this.vfjsBus.$emit(n.VFJS_EVENT_STATE_UPDATED)}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e})({},function(e){return e&&e.__esModule?e:{default:e}}(r(102)).default);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(4)),i={getVfjsFieldSchema:function(e){return e?this.getVfjsSchema(e):this.vfjsFieldModelKey?this.getVfjsSchema(this.vfjsFieldModelKey):null},getVfjsSchema:function(e){return e?(0,n.default)(this.getVfjsSchema.properties,e)||this.getVfjsSchemaFallback(e):this.vfjsSchema},getVfjsSchemaPath:function(e,t){var r=this.getVfjsSchema();if(!e)return r.items?this.getVfjsSchemaPath("items"):"properties."+t;var i=(0,n.default)(r,e);if(i){if("array"===i.type||i.items instanceof Array){var s=this.getVfjsSchemaPath(e+".items");return this.getVfjsSchemaPath(s+".0")}if("object"===i.type||i.properties instanceof Object)return this.getVfjsSchemaPath(e+".properties")}return t?e+"."+t:e},getVfjsSchemaFallback:function(e){var t=String(e).split(".").reduce(this.getVfjsSchemaPath,"");return(0,n.default)(this.getVfjsSchema(),t)}};t.default=i},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=n(r(104)),o=n(r(105)),u=i({},s.default,o.default);t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(4)),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s={getVfjsUiFieldDeep:function(e,t){var r=this;return!(!e||!e.properties)&&(!(!e[t]&&!e.properties[t])||Object.keys(e.properties).some(function(n){return!!r.getVfjsFieldModelValid(n)&&r.getVfjsUiFieldDeep(e.properties[n].properties,t)}))},getVfjsUiFieldActive:function(e){var t=this;if(!e||this.getVfjsFieldSchema(e))return!0;var r=this.getVfjsSchema().dependencies,n=void 0===r?{}:r;return Object.keys(n).some(function(r){var i=t.getVfjsFieldState(r);return!(!i||!i.$dirty)&&void 0!==t.getVfjsFieldModel(r)&&t.getVfjsFieldModelValid(r)&&t.getVfjsUiFieldDeep(n[r],e)})},getVfjsUiFieldArrayChildrenActive:function(e,t){var r=this;return(this.getVfjsFieldModel(e)||[]).map(function(n,i){return r.vfjsHelperChildArrayReducerMapper(e,t,i)}).map(this.getVfjsUiFieldsActive)},getVfjsUiField:function(e){var t=e.children,r=void 0===t?[]:t,n=e.model,s=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","model"]);if(this.getVfjsUiFieldActive(n)){var o=this.vfjsHelperFieldIsArray(n),u=this.vfjsHelperFieldIsRequired(n);return o?i({},s,{model:n,required:u,children:this.getVfjsUiFieldArrayChildrenActive(n,r)}):i({},s,{model:n,required:u,children:this.getVfjsUiFieldsActive(r)})}return!1},getVfjsUiFieldsActive:function(e){var t=this;return e.reduce(function(e,r){if(r){var n=t.getVfjsUiField(r);n&&e.push(n)}return e},[])},getVfjsFieldUiSchema:function(e){return this.getVfjsUiSchema(e)},getVfjsUiSchema:function(e){return e?(0,n.default)(this.vfjsUiSchema,e):this.vfjsUiSchema}};t.default=s},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var i={setVfjsUiSchema:function(e){var t=this;this.vfjsUiSchema=[].concat(n(e)).reduce(function(e,r){return[].concat(n(e),[t.vfjsHelpersGenerateFieldUuid(r)])},[])},setVfjsUiFieldsActive:function(){var e=this;this.vfjsFieldsActive=this.vfjsUiSchema.reduce(function(t,r){return[].concat(n(t),[e.getVfjsUiField(r)])},[])}};t.default=i},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=n(r(107)),o=n(r(108)),u=r(0),f=i({vfjsValidationInitialize:function(){this.ajv=new s.default,this.vfjsOptions.validate&&this.vfjsOptions.validateOnLoad&&this.vfjsBus.$emit(u.VFJS_EVENT_MODEL_VALIDATE,{vfjsModel:this.getVfjsModel()})}},o.default);t.default=f},function(e,r){e.exports=t},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={getVfjsFieldUiSchemaValidationErrors:function(e){var t=e.component,r=e.model,n=e.type,i=[];return t||this.getVfjsFieldComponent(n)||i.push("Unregistered component type: "+n),r&&String(r)!==r&&i.push('The field\'s "model" property must be a string!'),i},getVfjsFieldUiSchemaValid:function(e){return 0===this.getVfjsFieldUiSchemaValidationErrors(e).length&&e.children.every(this.getVfjsFieldUiSchemaValid)},getVfjsFieldModelValid:function(e,t){return 0===this.getVfjsFieldModelValidationErrors(e,t).length},getVfjsFieldModelValidationErrors:function(e,t){return this.getVfjsModelValidationErrors(e,t)},getVfjsModelValidationErrors:function(e,t){var r=e?this.getVfjsFieldSchema(e):this.getVfjsSchema();if(!r)return[];var n=void 0!==t?t:this.getVfjsFieldModel(e),i=this.ajv.validate(r,n);return n&&!i?this.ajv.errors:[]},getVfjsValid:function(){return 0===this.getVfjsValidationErrors().length},getVfjsValidationErrors:function(e){return this.ajv.validate(this.getVfjsSchema(),e||this.getVfjsModel())?[]:this.ajv.errors}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={components:{type:Object,default:function(){return{}}},model:{type:Object,default:function(){return{}}},schema:{type:Object,required:!0,default:function(){return[]}},options:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},uiSchema:{type:Array,required:!0,default:function(){return{}}}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={model:function(e){this.vfjsModel=Object.assign({},e),this.setVfjsUiFieldsActive()},schema:function(e){this.vfjsSchema=Object.assign({},e),this.setVfjsUiFieldsActive()},uiSchema:function(e){this.setVfjsUiSchema(e),this.setVfjsUiFieldsActive()},state:function(e){this.setVfjsUiFieldsActive()}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i={name:"vue-form-json-schema-viewer",mixins:[function(e){return e&&e.__esModule?e:{default:e}}(r(20)).default],computed:{fields:function(){return this.createFields(this.vfjsFields)},validated:function(){return this.getVfjsValid()},vfjsAttributes:function(){return{class:this.vfjsAttributesClass}},vfjsAttributesClass:function(){return this.options.validationClass&&this.validated?this.options.validationClass:""}},methods:{createFields:function(e){return e.map(this.vfjsHelperCreateComponent).filter(function(e){return e})}},render:function(){return this.$createElement(this.tag,n({},this.vfjsAttributes),this.fields)}};t.default=i}])});
//# sourceMappingURL=vue-form-json-schema.umd.js.map