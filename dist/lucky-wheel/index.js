module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};function e(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function n(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{h(n.next(t))}catch(t){o(t)}}function a(t){try{h(n.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}h((n=n.apply(t,e||[])).next())}))}function r(t,e){var i,n,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}String.prototype.includes||(String.prototype.includes=function(t,e){return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),i=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var n=arguments[1],r=0;r<i;){var o=e[r];if(t.call(n,o,r,e))return o;r++}}});var o=function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.some((function(e){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()===e}))},s=function(t){return[].filter.call(t,(function(t){return"\n"!==t})).join("")},a=function(t){if("string"!=typeof t)return!1;if("transparent"===(t=t.toLocaleLowerCase().trim()))return!1;if(/^rgba/.test(t)){var e=/([^\s,]+)\)$/.exec(t);if(0===(null===(i=e)?0:"object"==typeof i?NaN:"number"==typeof i?i:"string"==typeof i?"%"===i[i.length-1]?Number(i.slice(0,-1))/100:Number(i):NaN))return!1}var i;return!0},h=function(){function t(){this.subs=[]}return t.prototype.addSub=function(t){this.subs.includes(t)||this.subs.push(t)},t.prototype.notify=function(){this.subs.forEach((function(t){t.update()}))},t}(),u="__proto__"in{};function c(t,e,i,n){Object.defineProperty(t,e,{value:i,enumerable:!!n,writable:!0,configurable:!0})}var l=Array.prototype,f=Object.create(l);["push","pop","shift","unshift","sort","splice","reverse"].forEach((function(t){f[t]=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var n=l[t].apply(this,e),r=this.__luckyOb__;return["push","unshift","splice"].includes(t)&&r.walk(this),r.dep.notify(),n}}));var d=function(){function t(t){this.dep=new h,c(t,"__luckyOb__",this),Array.isArray(t)&&(u?t.__proto__=f:Object.getOwnPropertyNames(f).forEach((function(e){c(t,e,f[e])}))),this.walk(t)}return t.prototype.walk=function(t){Object.keys(t).forEach((function(e){p(t,e,t[e])}))},t}();function g(t){if(t&&"object"==typeof t)return"__luckyOb__"in t?t.__luckyOb__:new d(t)}function p(t,e,i){var n=new h,r=Object.getOwnPropertyDescriptor(t,e);if(!r||!1!==r.configurable){var o=r&&r.get,s=r&&r.set;o&&!s||2!==arguments.length||(i=t[e]);var a=g(i);Object.defineProperty(t,e,{get:function(){var e=o?o.call(t):i;return h.target&&(n.addSub(h.target),a&&a.dep.addSub(h.target)),e},set:function(e){e!==i&&(i=e,o&&!s||(s?s.call(t,e):i=e,a=g(e),n.notify()))}})}}var m=0,v=function(){function t(t,e,i,n){void 0===n&&(n={}),this.id=m++,this.$lucky=t,this.expr=e,this.deep=!!n.deep,this.getter="function"==typeof e?e:function(t){t+=".";for(var e=[],i="",n=0;n<t.length;n++){var r=t[n];if(/\[|\./.test(r))e.push(i),i="";else{if(/\W/.test(r))continue;i+=r}}return function(t){return e.reduce((function(t,e){return t[e]}),t)}}(e),this.cb=i,this.value=this.get()}return t.prototype.get=function(){h.target=this;var t=this.getter.call(this.$lucky,this.$lucky);return this.deep&&function(t){var e=function(t){o(t,"array","object")&&Object.keys(t).forEach((function(i){var n=t[i];e(n)}))};e(t)}(t),h.target=null,t},t.prototype.update=function(){var t=this.get(),e=this.value;this.value=t,this.cb.call(this.$lucky,t,e)},t}(),b=function(){function t(t){this.htmlFontSize=16,this.rAF=function(){},this.setTimeout=function(){},this.setInterval=function(){},this.clearInterval=function(){},this.setHTMLFontSize(),"string"==typeof t?t={el:t}:1===t.nodeType&&(t={el:"",divElement:t}),t=t,this.config=t,t.flag||(t.flag="WEB"),t.el&&(t.divElement=document.querySelector(t.el));var e=0,i=0;t.divElement&&(e=t.divElement.offsetWidth,i=t.divElement.offsetHeight,t.canvasElement=document.createElement("canvas"),t.divElement.appendChild(t.canvasElement)),t.width=this.getLength(t.width)||e,t.height=this.getLength(t.height)||i,t.divElement&&(t.divElement.style.overflow="hidden",t.divElement.style.width=t.width+"px",t.divElement.style.height=t.height+"px"),t.canvasElement&&(t.canvasElement.setAttribute("package","lucky-canvas@1.4.1"),t.ctx=t.canvasElement.getContext("2d")),this.ctx=t.ctx,t.ctx&&t.width&&t.height?(this.setDpr(),this.initWindowFunction()):console.error("无法获取到 CanvasContext2D 或宽高")}return t.prototype.setDpr=function(){var t=this.config;t.dpr||(window?window.dpr=t.dpr=window.devicePixelRatio||1:t.dpr||console.error(t,"未传入 dpr 可能会导致绘制异常"))},t.prototype.setHTMLFontSize=function(){window&&(this.htmlFontSize=+window.getComputedStyle(document.documentElement).fontSize.slice(0,-2))},t.prototype.initWindowFunction=function(){if(window)return this.rAF=window.requestAnimationFrame,this.setInterval=window.setInterval,void(this.clearInterval=window.clearInterval);if(this.config.rAF)this.rAF=this.config.rAF;else if(this.config.setTimeout){var t=this.config.setTimeout;this.rAF=function(e){return t(e,16)}}else this.rAF=function(t){return setTimeout(t,16)}},t.prototype.zoomCanvas=function(){var t=this.config,e=this.ctx,i=t.canvasElement,n=t.dpr,r=function(t){return(t*n-t)/(t*n)*(n/2)*100};i&&(i.width=t.width*n,i.height=t.height*n,i.style.width=i.width+"px",i.style.height=i.height+"px",i.style.transform="scale("+1/n+") translate(\n      "+-r(i.width)+"%, "+-r(i.height)+"%\n    )",e.scale(n,n))},t.prototype.loadImg=function(t,e,i){var n=this;return void 0===i&&(i="$resolve"),new Promise((function(r){if("WEB"===n.config.flag){var o=new Image;o.src=t,o.onload=function(){return r(o)}}else e[i]=r}))},t.prototype.drawImage=function(t,e,i,n,r){var o,s=this.config,a=this.ctx;return["WEB","MINI-WX"].includes(s.flag)?o=t:["UNI-H5","UNI-MINI-WX"].includes(s.flag)&&(o=t.path),a.drawImage(o,e,i,n,r)},t.prototype.getLength=function(t){return o(t,"number")?t:o(t,"string")?this.changeUnits(t):0},t.prototype.changeUnits=function(t,e){var i=this;return void 0===e&&(e=1),Number(t.replace(/^(\-*[0-9.]*)([a-z%]*)$/,(function(t,n,r){var o={"%":function(t){return t*(e/100)},px:function(t){return 1*t},rem:function(t){return t*i.htmlFontSize}}[r];if(o)return o(n);var s=i.config.unitFunc;return s?s(n,r):n})))},t.prototype.$set=function(t,e,i){t&&"object"==typeof t&&p(t,e,i)},t.prototype.$computed=function(t,e,i){var n=this;Object.defineProperty(t,e,{get:function(){return i.call(n)}})},t.prototype.$watch=function(t,e,i){void 0===i&&(i={}),"object"==typeof e&&(e=(i=e).handler);var n=new v(this,t,e,i);return i.immediate&&e.call(this,n.value),function(){}},t}(),w=function(t){return Math.PI/180*t},y=function(t,e){return[+(Math.cos(t)*e).toFixed(8),+(Math.sin(t)*e).toFixed(8)]},I=function(t,e){var i=-t/e;return[i,-i*t+e]},z=function(t,e,i,n,r,o){var s;if(void 0===o&&(o=!0),Math.abs(r-n).toFixed(8)>=w(180).toFixed(8)){var a=(r+n)/2;return o?(z(t,e,i,n,a,o),z(t,e,i,a,r,o)):(z(t,e,i,a,r,o),z(t,e,i,n,a,o)),!1}o||(n=(s=[r,n])[0],r=s[1]);var h=y(n,i),u=h[0],c=h[1],l=y(r,i),f=l[0],d=l[1],g=I(u,c),p=g[0],m=g[1],v=I(f,d),b=v[0],S=v[1],k=(S-m)/(p-b),x=(b*m-p*S)/(b-p);isNaN(k)&&(Math.abs(u)===+i.toFixed(8)&&(k=u),Math.abs(f)===+i.toFixed(8)&&(k=f)),p===1/0||p===-1/0?x=b*k+S:b!==1/0&&b!==-1/0||(x=p*k+m),e.lineTo(u,c),["WEB","UNI-H5"].includes(t)?e.arcTo(k,x,f,d,i):e.quadraticCurveTo(k,x,f,d)},S=function(t,e,i,n,r,o,s,a){i||(i=s);var h=w(90/Math.PI/n*s),u=w(90/Math.PI/i*s),c=r+h,l=o-h,f=r+u,d=o-u;e.beginPath(),e.fillStyle=a,e.moveTo.apply(e,y(c,n)),z(t,e,n,c,l,!0),d>f?z(t,e,i,f,d,!1):e.lineTo.apply(e,y((r+o)/2,s/2/Math.abs(Math.sin((r-o)/2)))),e.closePath(),e.fill()},k=function(t,e,i,n,r,o,s){var a=Math.min(n,r);o>a/2&&(o=a/2),t.beginPath(),t.fillStyle=s,t.moveTo(e+o,i),t.lineTo(e+o,i),t.lineTo(e+n-o,i),t.quadraticCurveTo(e+n,i,e+n,i+o),t.lineTo(e+n,i+r-o),t.quadraticCurveTo(e+n,i+r,e+n-o,i+r),t.lineTo(e+o,i+r),t.quadraticCurveTo(e,i+r,e,i+r-o),t.lineTo(e,i+o),t.quadraticCurveTo(e,i,e+o,i),t.closePath(),t.fill()},x=function(t,e,i,n){return t>=n&&(t=n),i*(t/=n)*t+e},C=function(t,e,i,n){return t>=n&&(t=n),-i*(t/=n)*(t-2)+e},T=function(t){function h(e,i){void 0===i&&(i={});var n=t.call(this,e)||this;return n.blocks=[],n.prizes=[],n.buttons=[],n.defaultConfig={},n._defaultConfig={gutter:"0px",offsetDegree:0,speed:20,accelerationTime:2500,decelerationTime:2500},n.defaultStyle={},n._defaultStyle={fontSize:"18px",fontColor:"#000",fontStyle:"sans-serif",fontWeight:"400",lineHeight:"",background:"transparent",wordWrap:!0,lengthLimit:"90%"},n.Radius=0,n.prizeRadius=0,n.prizeDeg=0,n.prizeRadian=0,n.rotateDeg=0,n.maxBtnRadius=0,n.startTime=0,n.endTime=0,n.stopDeg=0,n.endDeg=0,n.FPS=16.6,n.blockImgs=[[]],n.prizeImgs=[[]],n.btnImgs=[[]],n.initData(i),n.initComputed(),n.initWatch(),n.init({blockImgs:n.blocks.map((function(t){return t.imgs})),prizeImgs:n.prizes.map((function(t){return t.imgs})),btnImgs:n.buttons.map((function(t){return t.imgs}))}),n}return e(h,t),h.prototype.initData=function(t){this.$set(this,"blocks",t.blocks||[]),this.$set(this,"prizes",t.prizes||[]),this.$set(this,"buttons",t.buttons||[]),this.$set(this,"defaultConfig",t.defaultConfig||{}),this.$set(this,"defaultStyle",t.defaultStyle||{}),this.$set(this,"startCallback",t.start),this.$set(this,"endCallback",t.end)},h.prototype.initComputed=function(){var t=this;this.$computed(this,"_defaultConfig",(function(){return i({gutter:"0px",offsetDegree:0,speed:20,accelerationTime:2500,decelerationTime:2500},t.defaultConfig)})),this.$computed(this,"_defaultStyle",(function(){return i({fontSize:"18px",fontColor:"#000",fontStyle:"sans-serif",fontWeight:"400",background:"transparent",wordWrap:!0,lengthLimit:"90%"},t.defaultStyle)}))},h.prototype.initWatch=function(){var t=this;this.$watch("blocks",(function(e){return t.init({blockImgs:e.map((function(t){return t.imgs}))})}),{deep:!0}),this.$watch("prizes",(function(e){return t.init({prizeImgs:e.map((function(t){return t.imgs}))})}),{deep:!0}),this.$watch("buttons",(function(e){return t.init({btnImgs:e.map((function(t){return t.imgs}))})}),{deep:!0}),this.$watch("defaultConfig",(function(){return t.draw()}),{deep:!0}),this.$watch("defaultStyle",(function(){return t.draw()}),{deep:!0}),this.$watch("startCallback",(function(){return t.init({})})),this.$watch("endCallback",(function(){return t.init({})}))},h.prototype.init=function(t){var e,i,n=this,r=this.config,o=this.ctx;this.setDpr(),this.setHTMLFontSize(),this.zoomCanvas(),null===(e=r.beforeInit)||void 0===e||e.call(this),this.Radius=Math.min(r.width,r.height)/2,o.translate(this.Radius,this.Radius);var s=function(){n.draw(),r.canvasElement&&(r.canvasElement.onclick=function(t){var e;o.beginPath(),o.arc(0,0,n.maxBtnRadius,0,2*Math.PI,!1),o.isPointInPath(t.offsetX,t.offsetY)&&(n.startTime||null===(e=n.startCallback)||void 0===e||e.call(n,t))})},a=0,h=0;this.draw(),Object.keys(t).forEach((function(e){var i=e,r={blockImgs:"blocks",prizeImgs:"prizes",btnImgs:"buttons"}[i],o=t[i];o&&o.forEach((function(t,e){t&&t.forEach((function(t,o){h++,n.loadAndCacheImg(r,e,i,o,(function(){a++,h===a&&s.call(n)}))}))}))})),h||s.call(this),null===(i=r.afterInit)||void 0===i||i.call(this)},h.prototype.loadAndCacheImg=function(t,e,i,o,s){return n(this,void 0,void 0,(function(){var n,a,h,u;return r(this,(function(r){switch(r.label){case 0:return(n=this[t][e])&&n.imgs&&(a=n.imgs[o])?(this[i][e]||(this[i][e]=[]),h=this[i][e],u=o,[4,this.loadImg(a.src,a)]):[2];case 1:return h[u]=r.sent(),s.call(this),[2]}}))}))},h.prototype.computedWidthAndHeight=function(t,e,i,n){if(!e.width&&!e.height)return[t.width,t.height];if(e.width&&!e.height){var r=this.getWidth(e.width,i);return[r,t.height*(r/t.width)]}if(!e.width&&e.height){var o=this.getHeight(e.height,n);return[t.width*(o/t.height),o]}return[this.getWidth(e.width,i),this.getHeight(e.height,n)]},h.prototype.draw=function(){var t,e,i=this,n=this,r=n.config,o=n.ctx,h=n._defaultConfig,u=n._defaultStyle;null===(t=r.beforeDraw)||void 0===t||t.call(this,o),o.clearRect(-this.Radius,-this.Radius,2*this.Radius,2*this.Radius),this.prizeRadius=this.blocks.reduce((function(t,e,n){return a(e.background)&&(o.beginPath(),o.fillStyle=e.background,o.arc(0,0,t,0,2*Math.PI,!1),o.fill()),e.imgs&&e.imgs.forEach((function(e,r){if(i.blockImgs[n]){var s=i.blockImgs[n][r];if(s){var a=i.computedWidthAndHeight(s,e,2*t,2*t),h=a[0],u=a[1],c=[i.getOffsetX(h),i.getHeight(e.top,2*t)-t],l=c[0],f=c[1];o.save(),e.rotate&&o.rotate(w(i.rotateDeg)),i.drawImage(s,l,f,h,u),o.restore()}}})),t-i.getLength(e.padding&&e.padding.split(" ")[0])}),this.Radius),this.prizeDeg=360/this.prizes.length,this.prizeRadian=w(this.prizeDeg);var c=w(-90+this.rotateDeg+h.offsetDegree),l=function(t){return i.getOffsetX(o.measureText(t).width)},f=function(t,e,n){var r=t.lineHeight||u.lineHeight||t.fontSize||u.fontSize;return i.getHeight(t.top,e)+(n+1)*i.getLength(r)};o.save(),this.prizes.forEach((function(t,e){var n=c+e*i.prizeRadian,d=i.prizeRadius-i.maxBtnRadius,g=t.background||u.background;a(g)&&function(t,e,i,n,r,o,s,a){s?S(t,e,i,n,r,o,s,a):(e.beginPath(),e.fillStyle=a,e.moveTo(0,0),e.arc(0,0,n,r,o,!1),e.closePath(),e.fill())}(r.flag,o,i.maxBtnRadius,i.prizeRadius,n-i.prizeRadian/2,n+i.prizeRadian/2,i.getLength(h.gutter),g);var p=Math.cos(n)*i.prizeRadius,m=Math.sin(n)*i.prizeRadius;o.translate(p,m),o.rotate(n+w(90)),t.imgs&&t.imgs.forEach((function(t,n){if(i.prizeImgs[e]){var r=i.prizeImgs[e][n];if(r){var o=i.computedWidthAndHeight(r,t,i.prizeRadian*i.prizeRadius,d),s=o[0],a=o[1],h=[i.getOffsetX(s),i.getHeight(t.top,d)],u=h[0],c=h[1];i.drawImage(r,u,c,s,a)}}})),t.fonts&&t.fonts.forEach((function(t){var e=t.fontColor||u.fontColor,n=t.fontWeight||u.fontWeight,r=i.getLength(t.fontSize||u.fontSize),a=t.fontStyle||u.fontStyle;o.fillStyle=e,o.font=n+" "+(r>>0)+"px "+a;var c=[],g=String(t.text);if(t.hasOwnProperty("wordWrap")?t.wordWrap:u.wordWrap){g=s(g);for(var p="",m=0;m<g.length;m++){p+=g[m];var v=o.measureText(p).width,b=(i.prizeRadius-f(t,d,c.length))*Math.tan(i.prizeRadian/2)*2-i.getLength(h.gutter);v>i.getWidth(t.lengthLimit||u.lengthLimit,b)&&(c.push(p.slice(0,-1)),p=g[m])}p&&c.push(p),c.length||c.push(g)}else c=g.split("\n");c.filter((function(t){return!!t})).forEach((function(e,i){o.fillText(e,l(e),f(t,d,i))}))})),o.rotate(w(360)-n-w(90)),o.translate(-p,-m)})),o.restore(),this.buttons.forEach((function(t,e){var n=i.getHeight(t.radius);i.maxBtnRadius=Math.max(i.maxBtnRadius,n),a(t.background)&&(o.beginPath(),o.fillStyle=t.background,o.arc(0,0,n,0,2*Math.PI,!1),o.fill()),t.pointer&&a(t.background)&&(o.beginPath(),o.fillStyle=t.background,o.moveTo(-n,0),o.lineTo(n,0),o.lineTo(0,2*-n),o.closePath(),o.fill()),t.imgs&&t.imgs.forEach((function(t,r){if(i.btnImgs[e]){var o=i.btnImgs[e][r];if(o){var s=i.computedWidthAndHeight(o,t,2*n,2*n),a=s[0],h=s[1],u=[i.getOffsetX(a),i.getHeight(t.top,n)],c=u[0],l=u[1];i.drawImage(o,c,l,a,h)}}})),t.fonts&&t.fonts.forEach((function(t){var e=t.fontColor||u.fontColor,r=t.fontWeight||u.fontWeight,s=i.getLength(t.fontSize||u.fontSize),a=t.fontStyle||u.fontStyle;o.fillStyle=e,o.font=r+" "+(s>>0)+"px "+a,String(t.text).split("\n").forEach((function(e,i){o.fillText(e,l(e),f(t,n,i))}))}))})),null===(e=r.afterDraw)||void 0===e||e.call(this,o)},h.prototype.play=function(){this.startTime||(this.startTime=Date.now(),this.prizeFlag=void 0,this.run())},h.prototype.stop=function(t){this.prizeFlag=Number(t)%this.prizes.length},h.prototype.run=function(t){void 0===t&&(t=0);var e=this,i=e.rAF,n=e.prizeFlag,r=e.prizeDeg,o=e.rotateDeg,s=e._defaultConfig,a=Date.now()-this.startTime;if(a>=s.accelerationTime&&void 0!==n){this.FPS=a/t,this.endTime=Date.now(),this.stopDeg=o;for(var h=0;++h;){var u=360*h-n*r-o-s.offsetDegree;if(C(this.FPS,this.stopDeg,u,s.decelerationTime)-this.stopDeg>s.speed){this.endDeg=u;break}}return this.slowDown()}this.rotateDeg=(o+x(a,0,s.speed,s.accelerationTime))%360,this.draw(),i(this.run.bind(this,t+1))},h.prototype.slowDown=function(){var t,e=this,n=e.rAF,r=e.prizes,o=e.prizeFlag,s=e.stopDeg,a=e.endDeg,h=e._defaultConfig,u=Date.now()-this.endTime;if(u>=h.decelerationTime)return this.startTime=0,void(null===(t=this.endCallback)||void 0===t||t.call(this,i({},r.find((function(t,e){return e===o})))));this.rotateDeg=C(u,s,a,h.decelerationTime)%360,this.draw(),n(this.slowDown.bind(this))},h.prototype.getWidth=function(t,e){return void 0===e&&(e=this.prizeRadian*this.prizeRadius),o(t,"number")?t:o(t,"string")?this.changeUnits(t,e):0},h.prototype.getHeight=function(t,e){return void 0===e&&(e=this.prizeRadius),o(t,"number")?t:o(t,"string")?this.changeUnits(t,e):0},h.prototype.getOffsetX=function(t){return-t/2},h}(b),E=function(t){function h(e,i){void 0===i&&(i={});var n=t.call(this,e)||this;n.rows=3,n.cols=3,n.blocks=[],n.prizes=[],n.buttons=[],n.defaultConfig={},n._defaultConfig={gutter:5,speed:20,accelerationTime:2500,decelerationTime:2500},n.defaultStyle={},n._defaultStyle={borderRadius:20,fontColor:"#000",fontSize:"18px",fontStyle:"sans-serif",fontWeight:"400",lineHeight:"",background:"transparent",shadow:"",wordWrap:!0,lengthLimit:"90%"},n.activeStyle={},n._activeStyle={background:"#ffce98",shadow:"",fontStyle:"",fontWeight:"",fontSize:"",lineHeight:"",fontColor:""},n.cellWidth=0,n.cellHeight=0,n.startTime=0,n.endTime=0,n.currIndex=0,n.stopIndex=0,n.endIndex=0,n.demo=!1,n.timer=0,n.FPS=16.6,n.cells=[],n.blockImgs=[[]],n.prizeImgs=[],n.btnImgs=[[]],n.initData(i),n.initComputed(),n.initWatch();var r=n.buttons.map((function(t){return t.imgs}));return n.button&&r.push(n.button.imgs),n.init({blockImgs:n.blocks.map((function(t){return t.imgs})),prizeImgs:n.prizes.map((function(t){return t.imgs})),btnImgs:r}),n}return e(h,t),h.prototype.initData=function(t){this.$set(this,"rows",Number(t.rows)||3),this.$set(this,"cols",Number(t.cols)||3),this.$set(this,"blocks",t.blocks||[]),this.$set(this,"prizes",t.prizes||[]),this.$set(this,"buttons",t.buttons||[]),this.$set(this,"button",t.button),this.$set(this,"defaultConfig",t.defaultConfig||{}),this.$set(this,"defaultStyle",t.defaultStyle||{}),this.$set(this,"activeStyle",t.activeStyle||{}),this.$set(this,"startCallback",t.start),this.$set(this,"endCallback",t.end)},h.prototype.initComputed=function(){var t=this;this.$computed(this,"_defaultConfig",(function(){var e=i({gutter:5,speed:20,accelerationTime:2500,decelerationTime:2500},t.defaultConfig);return e.gutter=t.getLength(e.gutter),e.speed=e.speed/40,e})),this.$computed(this,"_defaultStyle",(function(){return i({borderRadius:20,fontColor:"#000",fontSize:"18px",fontStyle:"sans-serif",fontWeight:"400",background:"transparent",shadow:"",wordWrap:!0,lengthLimit:"90%"},t.defaultStyle)})),this.$computed(this,"_activeStyle",(function(){return i({background:"#ffce98",shadow:""},t.activeStyle)}))},h.prototype.initWatch=function(){var t=this;this.$watch("blocks",(function(e){return t.init({blockImgs:e.map((function(t){return t.imgs}))})}),{deep:!0}),this.$watch("prizes",(function(e){return t.init({prizeImgs:e.map((function(t){return t.imgs}))})}),{deep:!0}),this.$watch("buttons",(function(e){var i=t.buttons.map((function(t){return t.imgs}));return t.button&&i.push(t.button.imgs),t.init({btnImgs:i})}),{deep:!0}),this.$watch("button",(function(){var e=t.buttons.map((function(t){return t.imgs}));return t.button&&e.push(t.button.imgs),t.init({btnImgs:e})}),{deep:!0}),this.$watch("rows",(function(){return t.init({})})),this.$watch("cols",(function(){return t.init({})})),this.$watch("defaultConfig",(function(){return t.draw()}),{deep:!0}),this.$watch("defaultStyle",(function(){return t.draw()}),{deep:!0}),this.$watch("activeStyle",(function(){return t.draw()}),{deep:!0}),this.$watch("startCallback",(function(){return t.init({})})),this.$watch("endCallback",(function(){return t.init({})}))},h.prototype.init=function(t){var e,i,n=this,r=this,o=r.config,s=r.ctx,a=r.button;this.setHTMLFontSize(),this.setDpr(),this.zoomCanvas(),null===(e=o.beforeInit)||void 0===e||e.call(this);var h=function(){n.draw(),n.demo&&n.walk(),n.buttons.length&&o.canvasElement&&(o.canvasElement.onclick=function(t){n.buttons.forEach((function(e){var i,r=n.getGeometricProperty([e.x,e.y,e.col||1,e.row||1]),o=r[0],a=r[1],h=r[2],u=r[3];s.beginPath(),s.rect(o,a,h,u),s.isPointInPath(t.offsetX,t.offsetY)&&(n.startTime||null===(i=n.startCallback)||void 0===i||i.call(n,t))}))}),a&&o.canvasElement&&(o.canvasElement.onclick=function(t){var e,i=n.getGeometricProperty([a.x,a.y,a.col||1,a.row||1]),r=i[0],o=i[1],h=i[2],u=i[3];s.beginPath(),s.rect(r,o,h,u),s.isPointInPath(t.offsetX,t.offsetY)&&(n.startTime||null===(e=n.startCallback)||void 0===e||e.call(n,t))})},u=0,c=0;this.draw(),Object.keys(t).forEach((function(e){var i=e,r=t[i],o={blockImgs:"blocks",prizeImgs:"prizes",btnImgs:"buttons"}[i];r&&r.forEach((function(t,e){t&&t.forEach((function(t,r){c++,n.loadAndCacheImg(o,e,i,r,(function(){u++,c===u&&h.call(n)}))}))}))})),c||h.call(this),null===(i=o.afterInit)||void 0===i||i.call(this)},h.prototype.loadAndCacheImg=function(t,e,i,o,s){return n(this,void 0,void 0,(function(){var n,a,h,u,c,l,f,d=this;return r(this,(function(r){switch(r.label){case 0:return n=this[t][e],"buttons"===t&&!this.buttons.length&&this.button&&(n=this.button),n&&n.imgs?(a=n.imgs[o])?(this[i][e]||(this[i][e]=[]),"blockImgs"!==i&&"btnImgs"!==i?[3,2]:(h=this[i][e],u=o,f={},[4,this.loadImg(a.src,a)])):[2]:[2];case 1:return h[u]=(f.defaultImg=r.sent(),f),[2,s.call(this)];case 2:return this.prizeImgs[e][o]||(this.prizeImgs[e][o]={}),c=1,l=0,this.loadImg(a.src,a).then((function(t){d.prizeImgs[e][o].defaultImg=t,c===++l&&s.call(d)})),a.hasOwnProperty("activeSrc")&&(c++,this.loadImg(a.activeSrc,a,"$activeResolve").then((function(t){d.prizeImgs[e][o].activeImg=t,c===++l&&s.call(d)}))),[2]}}))}))},h.prototype.computedWidthAndHeight=function(t,e,i){if(!e.width&&!e.height)return[t.width,t.height];if(e.width&&!e.height){var n=this.getWidth(e.width,i.col);return[n,t.height*(n/t.width)]}if(!e.width&&e.height){var r=this.getHeight(e.height,i.row);return[t.width*(r/t.height),r]}return[this.getWidth(e.width,i.col),this.getHeight(e.height,i.row)]},h.prototype.draw=function(){var t,e,i=this,n=this,r=n.config,h=n.ctx,u=n._defaultConfig,c=n._defaultStyle,l=n._activeStyle;null===(t=r.beforeDraw)||void 0===t||t.call(this,h),h.clearRect(0,0,r.width,r.height),this.cells=function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var n=Array(t),r=0;for(e=0;e<i;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n}(this.prizes,this.buttons),this.button&&this.cells.push(this.button),this.cells.forEach((function(t){t.col=t.col||1,t.row=t.row||1})),this.prizeArea=this.blocks.reduce((function(t,e){var n=t.x,r=t.y,s=t.w,u=t.h,l=function(t){var e=t.padding.replace(/px/g,"").split(" ").map((function(t){return~~t}))||[0],i=0,n=0,r=0,s=0;switch(e.length){case 1:i=n=r=s=e[0];break;case 2:i=n=e[0],r=s=e[1];break;case 3:i=e[0],r=s=e[1],n=e[2];break;default:i=e[0],n=e[1],r=e[2],s=e[3]}var a={paddingTop:i,paddingBottom:n,paddingLeft:r,paddingRight:s};for(var h in a)a[h]=t.hasOwnProperty(h)&&o(t[h],"string","number")?~~String(t[h]).replace(/px/g,""):a[h];return[i,n,r,s]}(e).map((function(t){return~~t})),f=l[0],d=l[1],g=l[2],p=l[3],m=e.borderRadius?i.getLength(e.borderRadius):0,v=e.background||c.background;return a(v)&&k(h,n,r,s,u,m,i.handleBackground(n,r,s,u,v)),{x:n+g,y:r+f,w:s-g-p,h:u-f-d}}),{x:0,y:0,w:r.width,h:r.height}),this.cellWidth=(this.prizeArea.w-u.gutter*(this.cols-1))/this.cols,this.cellHeight=(this.prizeArea.h-u.gutter*(this.rows-1))/this.rows,this.cells.forEach((function(t,e){var n=i.getGeometricProperty([t.x,t.y,t.col,t.row]),o=n[0],u=n[1],f=n[2],d=n[3],g=e===i.currIndex%i.prizes.length>>0,p=g?l.background:t.background||c.background;if(a(p)){var m=(g?l.shadow:t.shadow||c.shadow).replace(/px/g,"").split(",")[0].split(" ").map((function(t,e){return e<3?Number(t):t}));4===m.length&&(h.shadowColor=m[3],h.shadowOffsetX=m[0]*r.dpr,h.shadowOffsetY=m[1]*r.dpr,h.shadowBlur=m[2],m[0]>0?f-=m[0]:(f+=m[0],o-=m[0]),m[1]>0?d-=m[1]:(d+=m[1],u-=m[1])),k(h,o,u,f,d,i.getLength(t.borderRadius?t.borderRadius:c.borderRadius),i.handleBackground(o,u,f,d,p)),h.shadowColor="rgba(0, 0, 0, 0)",h.shadowOffsetX=0,h.shadowOffsetY=0,h.shadowBlur=0}var v="prizeImgs";e>=i.prizes.length&&(v="btnImgs",e-=i.prizes.length),t.imgs&&t.imgs.forEach((function(n,r){if(i[v][e]){var s=i[v][e][r];if(s){var a=g&&s.activeImg||s.defaultImg;if(a){var h=i.computedWidthAndHeight(a,n,t),c=h[0],l=h[1],f=[o+i.getOffsetX(c,t.col),u+i.getHeight(n.top,t.row)],d=f[0],p=f[1];i.drawImage(a,d,p,c,l)}}}})),t.fonts&&t.fonts.forEach((function(e){var n=g&&l.fontStyle?l.fontStyle:e.fontStyle||c.fontStyle,r=g&&l.fontWeight?l.fontWeight:e.fontWeight||c.fontWeight,a=g&&l.fontSize?i.getLength(l.fontSize):i.getLength(e.fontSize||c.fontSize),f=g&&l.lineHeight?l.lineHeight:e.lineHeight||c.lineHeight||e.fontSize||c.fontSize;h.font=r+" "+(a>>0)+"px "+n,h.fillStyle=g&&l.fontColor?l.fontColor:e.fontColor||c.fontColor;var d=[],p=String(e.text);if(e.hasOwnProperty("wordWrap")?e.wordWrap:c.wordWrap){p=s(p);for(var m="",v=0;v<p.length;v++){m+=p[v],h.measureText(m).width>i.getWidth(e.lengthLimit||c.lengthLimit,t.col)&&(d.push(m.slice(0,-1)),m=p[v])}m&&d.push(m),d.length||d.push(p)}else d=p.split("\n");d.forEach((function(n,r){h.fillText(n,o+i.getOffsetX(h.measureText(n).width,t.col),u+i.getHeight(e.top,t.row)+(r+1)*i.getLength(f))}))}))})),null===(e=r.afterDraw)||void 0===e||e.call(this,h)},h.prototype.handleBackground=function(t,e,i,n,r){var o=this.ctx;return r.includes("linear-gradient")&&(r=function(t,e,i,n,r,o){var s=/linear-gradient\((.+)\)/.exec(o)[1].split(",").map((function(t){return t.trim()})),a=s.shift(),h=[0,0,0,0];if(a.includes("deg")){var u=function(t){return Math.tan(t/180*Math.PI)};(a=a.slice(0,-3)%360)>=0&&a<45?h=[e,i+r,e+n,i+r-n*u(a-0)]:a>=45&&a<90?h=[e,i+r,e+n-r*u(a-45),i]:a>=90&&a<135?h=[e+n,i+r,e+n-r*u(a-90),i]:a>=135&&a<180?h=[e+n,i+r,e,i+n*u(a-135)]:a>=180&&a<225?h=[e+n,i,e,i+n*u(a-180)]:a>=225&&a<270?h=[e+n,i,e+r*u(a-225),i+r]:a>=270&&a<315?h=[e,i,e+r*u(a-270),i+r]:a>=315&&a<360&&(h=[e,i,e+n,i+r-n*u(a-315)])}else a.includes("top")?h=[e,i+r,e,i]:a.includes("bottom")?h=[e,i,e,i+r]:a.includes("left")?h=[e+n,i,e,i]:a.includes("right")&&(h=[e,i,e+n,i]);var c=t.createLinearGradient.apply(t,h.map((function(t){return t>>0})));return s.reduce((function(t,e,i){var n=e.split(" ");return 1===n.length?t.addColorStop(i,n[0]):2===n.length&&t.addColorStop.apply(t,n),t}),c)}(o,t,e,i,n,r)),r},h.prototype.play=function(){var t=this.clearInterval;this.startTime||(t(this.timer),this.startTime=Date.now(),this.prizeFlag=void 0,this.run())},h.prototype.stop=function(t){this.prizeFlag=t%this.prizes.length},h.prototype.run=function(t){void 0===t&&(t=0);var e=this,i=e.rAF,n=e.currIndex,r=e.prizes,o=e.prizeFlag,s=e.startTime,a=e._defaultConfig,h=Date.now()-s;if(h>=a.accelerationTime&&void 0!==o){this.FPS=h/t,this.endTime=Date.now(),this.stopIndex=n;for(var u=0;++u;){var c=r.length*u+o-(n>>0);if(C(this.FPS,this.stopIndex,c,a.decelerationTime)-this.stopIndex>a.speed){this.endIndex=c;break}}return this.slowDown()}this.currIndex=(n+x(h,.1,a.speed,a.accelerationTime))%r.length,this.draw(),i(this.run.bind(this,t+1))},h.prototype.slowDown=function(){var t,e=this,n=e.rAF,r=e.prizes,o=e.prizeFlag,s=e.stopIndex,a=e.endIndex,h=e._defaultConfig,u=Date.now()-this.endTime;if(u>h.decelerationTime)return this.startTime=0,void(null===(t=this.endCallback)||void 0===t||t.call(this,i({},r.find((function(t,e){return e===o})))));this.currIndex=C(u,s,a,h.decelerationTime)%r.length,this.draw(),n(this.slowDown.bind(this))},h.prototype.walk=function(){var t=this,e=this.setInterval;(0,this.clearInterval)(this.timer),this.timer=e((function(){t.currIndex+=1,t.draw()}),1300)},h.prototype.getGeometricProperty=function(t){var e=t[0],i=t[1],n=t[2],r=t[3],o=this.cellWidth,s=this.cellHeight,a=this._defaultConfig.gutter,h=[this.prizeArea.x+(o+a)*e,this.prizeArea.y+(s+a)*i];return n&&r&&h.push(o*n+a*(n-1),s*r+a*(r-1)),h},h.prototype.getWidth=function(t,e){return void 0===e&&(e=1),o(t,"number")?t:o(t,"string")?this.changeUnits(t,this.cellWidth*e+this._defaultConfig.gutter*(e-1)):0},h.prototype.getHeight=function(t,e){return void 0===e&&(e=1),o(t,"number")?t:o(t,"string")?this.changeUnits(t,this.cellHeight*e+this._defaultConfig.gutter*(e-1)):0},h.prototype.getOffsetX=function(t,e){return void 0===e&&(e=1),(this.cellWidth*e+this._defaultConfig.gutter*(e-1)-t)/2},h}(b);exports.LuckyGrid=E,exports.LuckyWheel=T;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var rpx2px = exports.rpx2px = function rpx2px(value) {
  if (typeof value === 'string') value = Number(value.replace(/[a-z]*/g, ''));
  return wx.getSystemInfoSync().windowWidth / 750 * value;
};

var changeUnits = exports.changeUnits = function changeUnits(value) {
  return Number(value.replace(/^(\-*[0-9.]*)([a-z%]*)$/, function (value, num, unit) {
    switch (unit) {
      case 'px':
        num *= 1;
        break;
      case 'rpx':
        num = rpx2px(num);
        break;
      default:
        num *= 1;
        break;
    }
    return num;
  }));
};

var resolveImage = exports.resolveImage = function resolveImage(e, img, canvas) {
  var imgObj = canvas.createImage();
  imgObj.onload = function () {
    img.$resolve(imgObj);
  };
  imgObj.src = img.src;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _luckyCanvasCjs = __webpack_require__(0);

var _utils = __webpack_require__(1);

Component({
  properties: {
    width: { type: String, value: '600rpx' },
    height: { type: String, value: '600rpx' },
    blocks: { type: Array, value: [] },
    prizes: { type: Array, value: [] },
    buttons: { type: Array, value: [] },
    defaultConfig: { type: Object, value: {} },
    defaultStyle: { type: Object, value: {} },
    start: { type: Function, value: function value() {} },
    end: { type: Function, value: function value() {} }
  },
  data: {
    isShow: false
  },
  observers: {
    'blocks.**': function blocks(newData, oldData) {
      this.$lucky && (this.$lucky.blocks = newData);
    },
    'prizes.**': function prizes(newData, oldData) {
      this.$lucky && (this.$lucky.prizes = newData);
    },
    'buttons.**': function buttons(newData, oldData) {
      this.$lucky && (this.$lucky.buttons = newData);
    }
  },
  ready: function ready() {
    var _this = this;

    wx.createSelectorQuery().in(this).select('#lucky-wheel').fields({
      node: true, size: true
    }).exec(function (res) {
      if (!res[0] || !res[0].node) {
        return console.error('lucky-canvas 获取不到 canvas 标签');
      }
      var canvas = _this.canvas = res[0].node;
      var dpr = _this.dpr = wx.getSystemInfoSync().pixelRatio;
      var ctx = _this.ctx = canvas.getContext('2d');
      var data = _this.data;
      canvas.width = res[0].width * dpr;
      canvas.height = res[0].height * dpr;
      ctx.scale(dpr, dpr);
      _this.$lucky = new _luckyCanvasCjs.LuckyWheel({
        flag: 'MINI-WX',
        ctx: ctx,
        dpr: dpr,
        width: res[0].width,
        height: res[0].height,
        // rAF: canvas.requestAnimationFrame, // 帧动画真机调试会报错!
        setTimeout: setTimeout,
        clearTimeout: clearTimeout,
        setInterval: setInterval,
        clearInterval: clearInterval,
        beforeInit: function beforeInit() {
          ctx.translate(-this.Radius, -this.Radius);
        },
        unitFunc: function unitFunc(num, unit) {
          return (0, _utils.changeUnits)(num + unit);
        }
      }, {
        blocks: data.blocks,
        prizes: data.prizes,
        buttons: data.buttons,
        defaultConfig: data.defaultConfig,
        defaultStyle: data.defaultStyle,
        start: function start() {
          for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
          }

          _this.triggerEvent.apply(_this, ['start'].concat(rest));
        },
        end: function end() {
          for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            rest[_key2] = arguments[_key2];
          }

          _this.triggerEvent.apply(_this, ['end'].concat(rest));
        }
      });
      // 为了保证 onload 回调准确
      _this.setData({ isShow: true });
    });
  },

  methods: {
    imgBindload: function imgBindload(e) {
      var _e$currentTarget$data = e.currentTarget.dataset,
          name = _e$currentTarget$data.name,
          index = _e$currentTarget$data.index,
          i = _e$currentTarget$data.i;

      var img = this.data[name][index].imgs[i];
      (0, _utils.resolveImage)(e, img, this.canvas);
    },
    toPlay: function toPlay(e) {
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(0, 0, this.$lucky.maxBtnRadius, 0, Math.PI * 2, false);
      if (!ctx.isPointInPath(e.changedTouches[0].x * this.dpr, e.changedTouches[0].y * this.dpr)) {
        return;
      }
      // 触发 lucky-canvas 的抽奖逻辑
      this.$lucky.startCallback();
    },
    play: function play() {
      var _$lucky;

      (_$lucky = this.$lucky).play.apply(_$lucky, arguments);
    },
    stop: function stop() {
      var _$lucky2;

      (_$lucky2 = this.$lucky).stop.apply(_$lucky2, arguments);
    }
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map