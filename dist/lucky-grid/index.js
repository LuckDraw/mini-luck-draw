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
/***/ (function(module, exports) {

module.exports = require("../../../lucky-canvas");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _luckyCanvas = __webpack_require__(0);

Component({
  properties: {
    width: {
      type: String,
      value: '600rpx'
    },
    height: {
      type: String,
      value: '600rpx'
    },
    rows: {
      type: String,
      optionalTypes: [Number],
      value: '3'
    },
    cols: {
      type: String,
      optionalTypes: [Number],
      value: '3'
    },
    blocks: {
      type: Array,
      value: []
    },
    prizes: {
      type: Array,
      value: []
    },
    button: {
      type: Object,
      value: {}
    },
    defaultConfig: {
      type: Object,
      value: {}
    },
    defaultStyle: {
      type: Object,
      value: {}
    },
    activeStyle: {
      type: Object,
      value: {}
    },
    start: {
      type: Function,
      value: function value() {}
    },
    end: {
      type: Function,
      value: function value() {}
    }
  },
  ready: function ready() {
    var _this = this;

    var query = wx.createSelectorQuery().in(this);
    query.select('#lucky-grid').fields({
      node: true, size: true
    }).exec(function (res) {
      if (!res[0] || !res[0].node) {
        console.error('lucky-canvas 获取不到 canvas 标签');
        return;
      }
      var canvas = _this.canvas = res[0].node;
      var dpr = _this.dpr = wx.getSystemInfoSync().pixelRatio;
      var ctx = _this.ctx = canvas.getContext('2d');
      var data = _this.data;
      canvas.width = res[0].width * dpr;
      canvas.height = res[0].height * dpr;
      ctx.scale(dpr, dpr);
      _this.$lucky = new _luckyCanvas.LuckyGrid({
        flag: 'MINI-WX',
        ctx: ctx,
        width: res[0].width,
        height: res[0].height,
        rAF: res[0].node.requestAnimationFrame,
        setInterval: setInterval,
        clearInterval: clearInterval
      }, {
        rows: data.rows,
        cols: data.cols,
        blocks: data.blocks,
        prizes: data.prizes,
        button: data.button,
        defaultConfig: data.defaultConfig,
        defaultStyle: data.defaultStyle,
        activeStyle: data.activeStyle,
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
    });
  },

  methods: {
    toPlay: function toPlay(e) {
      var ctx = this.ctx;
      var button = this.data.button;
      if (!button) return;
      ctx.beginPath();
      ctx.rect.apply(ctx, this.$lucky.getGeometricProperty([button.x, button.y, button.col || 1, button.row || 1]));
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