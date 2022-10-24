/*!
 * ApexCharts v3.16.0
 * (c) 2018-2020 Juned Chhipa
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ApexCharts = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /*
   ** Generic functions which are not dependent on ApexCharts
   */
  var Utils =
  /*#__PURE__*/
  function () {
    function Utils() {
      _classCallCheck(this, Utils);
    }

    _createClass(Utils, [{
      key: "shadeRGBColor",
      value: function shadeRGBColor(percent, color) {
        var f = color.split(','),
            t = percent < 0 ? 0 : 255,
            p = percent < 0 ? percent * -1 : percent,
            R = parseInt(f[0].slice(4), 10),
            G = parseInt(f[1], 10),
            B = parseInt(f[2], 10);
        return 'rgb(' + (Math.round((t - R) * p) + R) + ',' + (Math.round((t - G) * p) + G) + ',' + (Math.round((t - B) * p) + B) + ')';
      }
    }, {
      key: "shadeHexColor",
      value: function shadeHexColor(percent, color) {
        if (percent < 0) percent = 0;
        var f = parseInt(color.slice(1), 16),
            t = percent < 0 ? 0 : 255,
            p = percent < 0 ? percent * -1 : percent,
            R = f >> 16,
            G = f >> 8 & 0x00ff,
            B = f & 0x0000ff;
        return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
      } // beautiful color shading blending code
      // http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors

    }, {
      key: "shadeColor",
      value: function shadeColor(p, color) {
        if (color.length > 7) return this.shadeRGBColor(p, color);else return this.shadeHexColor(p, color);
      }
    }], [{
      key: "bind",
      value: function bind(fn, me) {
        return function () {
          return fn.apply(me, arguments);
        };
      }
    }, {
      key: "isObject",
      value: function isObject(item) {
        return item && _typeof(item) === 'object' && !Array.isArray(item) && item != null;
      }
    }, {
      key: "listToArray",
      value: function listToArray(list) {
        var i,
            array = [];

        for (i = 0; i < list.length; i++) {
          array[i] = list[i];
        }

        return array;
      } // to extend defaults with user options
      // credit: http://stackoverflow.com/questions/27936772/deep-object-merging-in-es6-es7#answer-34749873

    }, {
      key: "extend",
      value: function extend(target, source) {
        var _this = this;

        if (typeof Object.assign !== 'function') {

          (function () {
            Object.assign = function (target) {

              if (target === undefined || target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
              }

              var output = Object(target);

              for (var index = 1; index < arguments.length; index++) {
                var _source = arguments[index];

                if (_source !== undefined && _source !== null) {
                  for (var nextKey in _source) {
                    if (_source.hasOwnProperty(nextKey)) {
                      output[nextKey] = _source[nextKey];
                    }
                  }
                }
              }

              return output;
            };
          })();
        }

        var output = Object.assign({}, target);

        if (this.isObject(target) && this.isObject(source)) {
          Object.keys(source).forEach(function (key) {
            if (_this.isObject(source[key])) {
              if (!(key in target)) {
                Object.assign(output, _defineProperty({}, key, source[key]));
              } else {
                output[key] = _this.extend(target[key], source[key]);
              }
            } else {
              Object.assign(output, _defineProperty({}, key, source[key]));
            }
          });
        }

        return output;
      }
    }, {
      key: "extendArray",
      value: function extendArray(arrToExtend, resultArr) {
        var extendedArr = [];
        arrToExtend.map(function (item) {
          extendedArr.push(Utils.extend(resultArr, item));
        });
        arrToExtend = extendedArr;
        return arrToExtend;
      } // If month counter exceeds 12, it starts again from 1

    }, {
      key: "monthMod",
      value: function monthMod(month) {
        return month % 12;
      }
    }, {
      key: "clone",
      value: function clone(source) {
        if (Object.prototype.toString.call(source) === '[object Array]') {
          var cloneResult = [];

          for (var i = 0; i < source.length; i++) {
            cloneResult[i] = this.clone(source[i]);
          }

          return cloneResult;
        } else if (_typeof(source) === 'object') {
          var _cloneResult = {};

          for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
              _cloneResult[prop] = this.clone(source[prop]);
            }
          }

          return _cloneResult;
        } else {
          return source;
        }
      }
    }, {
      key: "log10",
      value: function log10(x) {
        return Math.log(x) / Math.LN10;
      }
    }, {
      key: "roundToBase10",
      value: function roundToBase10(x) {
        return Math.pow(10, Math.floor(Math.log10(x)));
      }
    }, {
      key: "roundToBase",
      value: function roundToBase(x, base) {
        return Math.pow(base, Math.floor(Math.log(x) / Math.log(base)));
      }
    }, {
      key: "parseNumber",
      value: function parseNumber(val) {
        if (val === null) return val;
        return parseFloat(val);
      }
    }, {
      key: "randomId",
      value: function randomId() {
        return (new Date() % 9e6).toString(16);
      }
    }, {
      key: "noExponents",
      value: function noExponents(val) {
        var data = String(val).split(/[eE]/);
        if (data.length === 1) return data[0];
        var z = '',
            sign = val < 0 ? '-' : '',
            str = data[0].replace('.', ''),
            mag = Number(data[1]) + 1;

        if (mag < 0) {
          z = sign + '0.';

          while (mag++) {
            z += '0';
          }

          return z + str.replace(/^-/, '');
        }

        mag -= str.length;

        while (mag--) {
          z += '0';
        }

        return str + z;
      }
    }, {
      key: "getDimensions",
      value: function getDimensions(el) {
        var computedStyle = getComputedStyle(el);
        var ret = [];
        var elementHeight = el.clientHeight;
        var elementWidth = el.clientWidth;
        elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
        elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
        ret.push(elementWidth);
        ret.push(elementHeight);
        return ret;
      }
    }, {
      key: "getBoundingClientRect",
      value: function getBoundingClientRect(element) {
        var rect = element.getBoundingClientRect();
        return {
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          x: rect.x,
          y: rect.y
        };
      }
    }, {
      key: "getLargestStringFromArr",
      value: function getLargestStringFromArr(arr) {
        return arr.reduce(function (a, b) {
          if (Array.isArray(b)) {
            b = b.reduce(function (aa, bb) {
              return aa.length > bb.length ? aa : bb;
            });
          }

          return a.length > b.length ? a : b;
        }, 0);
      } // http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#answer-12342275

    }, {
      key: "hexToRgba",
      value: function hexToRgba() {
        var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#999999';
        var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.6;

        if (hex.substring(0, 1) !== '#') {
          hex = '#999999';
        }

        var h = hex.replace('#', '');
        h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));

        for (var i = 0; i < h.length; i++) {
          h[i] = parseInt(h[i].length === 1 ? h[i] + h[i] : h[i], 16);
        }

        if (typeof opacity !== 'undefined') h.push(opacity);
        return 'rgba(' + h.join(',') + ')';
      }
    }, {
      key: "getOpacityFromRGBA",
      value: function getOpacityFromRGBA(rgba) {
        rgba = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return rgba[3];
      }
    }, {
      key: "rgb2hex",
      value: function rgb2hex(rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return rgb && rgb.length === 4 ? '#' + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
      }
    }, {
      key: "isColorHex",
      value: function isColorHex(color) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
      }
    }, {
      key: "polarToCartesian",
      value: function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
          x: centerX + radius * Math.cos(angleInRadians),
          y: centerY + radius * Math.sin(angleInRadians)
        };
      }
    }, {
      key: "escapeString",
      value: function escapeString(str) {
        var escapeWith = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
        var newStr = str.toString().slice();
        newStr = newStr.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, escapeWith);
        return newStr;
      }
    }, {
      key: "negToZero",
      value: function negToZero(val) {
        return val < 0 ? 0 : val;
      }
    }, {
      key: "moveIndexInArray",
      value: function moveIndexInArray(arr, old_index, new_index) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;

          while (k--) {
            arr.push(undefined);
          }
        }

        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr;
      }
    }, {
      key: "extractNumber",
      value: function extractNumber(s) {
        return parseFloat(s.replace(/[^\d.]*/g, ''));
      }
    }, {
      key: "findAncestor",
      value: function findAncestor(el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls)) {
        }

        return el;
      }
    }, {
      key: "setELstyles",
      value: function setELstyles(el, styles) {
        for (var key in styles) {
          if (styles.hasOwnProperty(key)) {
            el.style.key = styles[key];
          }
        }
      }
    }, {
      key: "isNumber",
      value: function isNumber(value) {
        return !isNaN(value) && parseFloat(Number(value)) === value && !isNaN(parseInt(value, 10));
      }
    }, {
      key: "isFloat",
      value: function isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
      }
    }, {
      key: "isSafari",
      value: function isSafari() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      }
    }, {
      key: "isFirefox",
      value: function isFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      }
    }, {
      key: "isIE11",
      value: function isIE11() {
        if (window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.appVersion.indexOf('Trident/') > -1) {
          return true;
        }
      }
    }, {
      key: "isIE",
      value: function isIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');

        if (msie > 0) {
          // IE 10 or older => return version number
          return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');

        if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');

        if (edge > 0) {
          // Edge (IE 12+) => return version number
          return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        } // other browser


        return false;
      }
    }]);

    return Utils;
  }();

  /**
   * ApexCharts Filters Class for setting hover/active states on the paths.
   *
   * @module Formatters
   **/

  var Filters =
  /*#__PURE__*/
  function () {
    function Filters(ctx) {
      _classCallCheck(this, Filters);

      this.ctx = ctx;
      this.w = ctx.w;
    } // create a re-usable filter which can be appended other filter effects and applied to multiple elements


    _createClass(Filters, [{
      key: "getDefaultFilter",
      value: function getDefaultFilter(el, i) {
        var w = this.w;
        el.unfilter(true);
        var filter = new window.SVG.Filter();
        filter.size('120%', '180%', '-5%', '-40%');

        if (w.config.states.normal.filter !== 'none') {
          this.applyFilter(el, i, w.config.states.normal.filter.type, w.config.states.normal.filter.value);
        } else {
          if (w.config.chart.dropShadow.enabled) {
            this.dropShadow(el, w.config.chart.dropShadow, i);
          }
        }
      }
    }, {
      key: "addNormalFilter",
      value: function addNormalFilter(el, i) {
        var w = this.w; // revert shadow if it was there
        // but, ignore marker as marker don't have dropshadow yet

        if (w.config.chart.dropShadow.enabled && !el.node.classList.contains('apexcharts-marker')) {
          this.dropShadow(el, w.config.chart.dropShadow, i);
        }
      } // appends dropShadow to the filter object which can be chained with other filter effects

    }, {
      key: "addLightenFilter",
      value: function addLightenFilter(el, i, attrs) {
        var _this = this;

        var w = this.w;
        var intensity = attrs.intensity;

        if (Utils.isFirefox()) {
          return;
        }

        el.unfilter(true);
        var filter = new window.SVG.Filter();
        el.filter(function (add) {
          var shadowAttr = w.config.chart.dropShadow;

          if (shadowAttr.enabled) {
            filter = _this.addShadow(add, i, shadowAttr);
          } else {
            filter = add;
          }

          filter.componentTransfer({
            rgb: {
              type: 'linear',
              slope: 1.5,
              intercept: intensity
            }
          });
        });
        el.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse');

        this._scaleFilterSize(el.filterer.node);
      } // appends dropShadow to the filter object which can be chained with other filter effects

    }, {
      key: "addDarkenFilter",
      value: function addDarkenFilter(el, i, attrs) {
        var _this2 = this;

        var w = this.w;
        var intensity = attrs.intensity;

        if (Utils.isFirefox()) {
          return;
        }

        el.unfilter(true);
        var filter = new window.SVG.Filter();
        el.filter(function (add) {
          var shadowAttr = w.config.chart.dropShadow;

          if (shadowAttr.enabled) {
            filter = _this2.addShadow(add, i, shadowAttr);
          } else {
            filter = add;
          }

          filter.componentTransfer({
            rgb: {
              type: 'linear',
              slope: intensity
            }
          });
        });
        el.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse');

        this._scaleFilterSize(el.filterer.node);
      }
    }, {
      key: "applyFilter",
      value: function applyFilter(el, i, filter) {
        var intensity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;

        switch (filter) {
          case 'none':
            {
              this.addNormalFilter(el, i);
              break;
            }

          case 'lighten':
            {
              this.addLightenFilter(el, i, {
                intensity: intensity
              });
              break;
            }

          case 'darken':
            {
              this.addDarkenFilter(el, i, {
                intensity: intensity
              });
              break;
            }
        }
      } // appends dropShadow to the filter object which can be chained with other filter effects

    }, {
      key: "addShadow",
      value: function addShadow(add, i, attrs) {
        var blur = attrs.blur,
            top = attrs.top,
            left = attrs.left,
            color = attrs.color,
            opacity = attrs.opacity;
        var shadowBlur = add.flood(Array.isArray(color) ? color[i] : color, opacity).composite(add.sourceAlpha, 'in').offset(left, top).gaussianBlur(blur).merge(add.source);
        return add.blend(add.source, shadowBlur);
      } // directly adds dropShadow to the element and returns the same element.
      // the only way it is different from the addShadow() function is that addShadow is chainable to other filters, while this function discards all filters and add dropShadow

    }, {
      key: "dropShadow",
      value: function dropShadow(el, attrs) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var top = attrs.top,
            left = attrs.left,
            blur = attrs.blur,
            color = attrs.color,
            opacity = attrs.opacity,
            noUserSpaceOnUse = attrs.noUserSpaceOnUse;
        var w = this.w;
        el.unfilter(true);

        if (Utils.isIE() && w.config.chart.type === 'radialBar') {
          // in radialbar charts, dropshadow is clipping actual drawing in IE
          return el;
        }

        color = Array.isArray(color) ? color[i] : color;
        el.filter(function (add) {
          var shadowBlur = null;

          if (Utils.isSafari() || Utils.isFirefox() || Utils.isIE()) {
            // safari/firefox has some alternative way to use this filter
            shadowBlur = add.flood(color, opacity).composite(add.sourceAlpha, 'in').offset(left, top).gaussianBlur(blur);
          } else {
            shadowBlur = add.flood(color, opacity).composite(add.sourceAlpha, 'in').offset(left, top).gaussianBlur(blur).merge(add.source);
          }

          add.blend(add.source, shadowBlur);
        });

        if (!noUserSpaceOnUse) {
          el.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse');
        }

        this._scaleFilterSize(el.filterer.node);

        return el;
      }
    }, {
      key: "setSelectionFilter",
      value: function setSelectionFilter(el, realIndex, dataPointIndex) {
        var w = this.w;

        if (typeof w.globals.selectedDataPoints[realIndex] !== 'undefined') {
          if (w.globals.selectedDataPoints[realIndex].indexOf(dataPointIndex) > -1) {
            el.node.setAttribute('selected', true);
            var activeFilter = w.config.states.active.filter;

            if (activeFilter !== 'none') {
              this.applyFilter(el, realIndex, activeFilter.type, activeFilter.value);
            }
          }
        }
      }
    }, {
      key: "_scaleFilterSize",
      value: function _scaleFilterSize(el) {
        var setAttributes = function setAttributes(attrs) {
          for (var key in attrs) {
            if (attrs.hasOwnProperty(key)) {
              el.setAttribute(key, attrs[key]);
            }
          }
        };

        setAttributes({
          width: '200%',
          height: '200%',
          x: '-50%',
          y: '-50%'
        });
      }
    }]);

    return Filters;
  }();

  /**
   * ApexCharts Animation Class.
   *
   * @module Animations
   **/

  var Animations =
  /*#__PURE__*/
  function () {
    function Animations(ctx) {
      _classCallCheck(this, Animations);

      this.ctx = ctx;
      this.w = ctx.w;
      this.setEasingFunctions();
    }

    _createClass(Animations, [{
      key: "setEasingFunctions",
      value: function setEasingFunctions() {
        var easing;
        if (this.w.globals.easing) return;
        var userDefinedEasing = this.w.config.chart.animations.easing;

        switch (userDefinedEasing) {
          case 'linear':
            {
              easing = '-';
              break;
            }

          case 'easein':
            {
              easing = '<';
              break;
            }

          case 'easeout':
            {
              easing = '>';
              break;
            }

          case 'easeinout':
            {
              easing = '<>';
              break;
            }

          case 'swing':
            {
              easing = function easing(pos) {
                var s = 1.70158;
                var ret = (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
                return ret;
              };

              break;
            }

          case 'bounce':
            {
              easing = function easing(pos) {
                var ret = '';

                if (pos < 1 / 2.75) {
                  ret = 7.5625 * pos * pos;
                } else if (pos < 2 / 2.75) {
                  ret = 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
                } else if (pos < 2.5 / 2.75) {
                  ret = 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
                } else {
                  ret = 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
                }

                return ret;
              };

              break;
            }

          case 'elastic':
            {
              easing = function easing(pos) {
                if (pos === !!pos) return pos;
                return Math.pow(2, -10 * pos) * Math.sin((pos - 0.075) * (2 * Math.PI) / 0.3) + 1;
              };

              break;
            }

          default:
            {
              easing = '<>';
            }
        }

        this.w.globals.easing = easing;
      }
    }, {
      key: "animateLine",
      value: function animateLine(el, from, to, speed) {
        el.attr(from).animate(speed).attr(to);
      }
      /*
       ** Animate radius of a circle element
       */

    }, {
      key: "animateCircleRadius",
      value: function animateCircleRadius(el, from, to, speed, easing, cb) {
        if (!from) from = 0;
        el.attr({
          r: from
        }).animate(speed, easing).attr({
          r: to
        }).afterAll(function () {
          cb();
        });
      }
      /*
       ** Animate radius and position of a circle element
       */

    }, {
      key: "animateCircle",
      value: function animateCircle(el, from, to, speed, easing) {
        el.attr({
          r: from.r,
          cx: from.cx,
          cy: from.cy
        }).animate(speed, easing).attr({
          r: to.r,
          cx: to.cx,
          cy: to.cy
        });
      }
      /*
       ** Animate rect properties
       */

    }, {
      key: "animateRect",
      value: function animateRect(el, from, to, speed, fn) {
        el.attr(from).animate(speed).attr(to).afterAll(function () {
          return fn();
        });
      }
    }, {
      key: "animatePathsGradually",
      value: function animatePathsGradually(params) {
        var el = params.el,
            realIndex = params.realIndex,
            j = params.j,
            fill = params.fill,
            pathFrom = params.pathFrom,
            pathTo = params.pathTo,
            speed = params.speed,
            delay = params.delay;
        var me = this;
        var w = this.w;
        var delayFactor = 0;

        if (w.config.chart.animations.animateGradually.enabled) {
          delayFactor = w.config.chart.animations.animateGradually.delay;
        }

        if (w.config.chart.animations.dynamicAnimation.enabled && w.globals.dataChanged && w.config.chart.type !== 'bar') {
          // disabled due to this bug - https://github.com/apexcharts/vue-apexcharts/issues/75
          delayFactor = 0;
        }

        me.morphSVG(el, realIndex, j, w.config.chart.type === 'line' && !w.globals.comboCharts ? 'stroke' : fill, pathFrom, pathTo, speed, delay * delayFactor);
      }
    }, {
      key: "showDelayedElements",
      value: function showDelayedElements() {
        this.w.globals.delayedElements.forEach(function (d) {
          var ele = d.el;
          ele.classList.remove('apexcharts-element-hidden');
        });
      }
    }, {
      key: "animationCompleted",
      value: function animationCompleted(el) {
        var w = this.w;
        if (w.globals.animationEnded) return;
        w.globals.animationEnded = true;

        if (typeof w.config.chart.events.animationEnd === 'function') {
          w.config.chart.events.animationEnd(this.ctx, {
            el: el,
            w: w
          });
        }
      } // SVG.js animation for morphing one path to another

    }, {
      key: "morphSVG",
      value: function morphSVG(el, realIndex, j, fill, pathFrom, pathTo, speed, delay) {
        var _this = this;

        var w = this.w;

        if (!pathFrom) {
          pathFrom = el.attr('pathFrom');
        }

        if (!pathTo) {
          pathTo = el.attr('pathTo');
        }

        if (!pathFrom || pathFrom.indexOf('undefined') > -1 || pathFrom.indexOf('NaN') > -1) {
          pathFrom = "M 0 ".concat(w.globals.gridHeight);
        }

        if (pathTo.indexOf('undefined') > -1 || pathTo.indexOf('NaN') > -1) {
          pathTo = "M 0 ".concat(w.globals.gridHeight);
        }

        if (!w.globals.shouldAnimate) {
          speed = 1;
        }

        el.plot(pathFrom).animate(1, w.globals.easing, delay).plot(pathFrom).animate(speed, w.globals.easing, delay).plot(pathTo).afterAll(function () {
          // a flag to indicate that the original mount function can return true now as animation finished here
          if (Utils.isNumber(j)) {
            if (j === w.globals.series[w.globals.maxValsInArrayIndex].length - 2 && w.globals.shouldAnimate) {
              _this.animationCompleted(el);
            }
          } else if (fill !== 'none' && w.globals.shouldAnimate) {
            if (!w.globals.comboCharts && realIndex === w.globals.series.length - 1 || w.globals.comboCharts) {
              _this.animationCompleted(el);
            }
          }

          _this.showDelayedElements();
        });
      }
    }]);

    return Animations;
  }();

  /**
   * ApexCharts Graphics Class for all drawing operations.
   *
   * @module Graphics
   **/

  var Graphics =
  /*#__PURE__*/
  function () {
    function Graphics(ctx) {
      _classCallCheck(this, Graphics);

      this.ctx = ctx;
      this.w = ctx.w;
    }

    _createClass(Graphics, [{
      key: "drawLine",
      value: function drawLine(x1, y1, x2, y2) {
        var lineColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#a8a8a8';
        var dashArray = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var strokeWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        var w = this.w;
        var line = w.globals.dom.Paper.line().attr({
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          stroke: lineColor,
          'stroke-dasharray': dashArray,
          'stroke-width': strokeWidth
        });
        return line;
      }
    }, {
      key: "drawRect",
      value: function drawRect() {
        var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#fefefe';
        var opacity = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
        var strokeWidth = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
        var strokeColor = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
        var strokeDashArray = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
        var w = this.w;
        var rect = w.globals.dom.Paper.rect();
        rect.attr({
          x: x1,
          y: y1,
          width: x2 > 0 ? x2 : 0,
          height: y2 > 0 ? y2 : 0,
          rx: radius,
          ry: radius,
          fill: color,
          opacity: opacity,
          'stroke-width': strokeWidth !== null ? strokeWidth : 0,
          stroke: strokeColor !== null ? strokeColor : 'none',
          'stroke-dasharray': strokeDashArray
        });
        return rect;
      }
    }, {
      key: "drawPolygon",
      value: function drawPolygon(polygonString) {
        var stroke = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#e1e1e1';
        var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'none';
        var w = this.w;
        var polygon = w.globals.dom.Paper.polygon(polygonString).attr({
          fill: fill,
          stroke: stroke
        });
        return polygon;
      }
    }, {
      key: "drawCircle",
      value: function drawCircle(radius) {
        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var w = this.w;
        var c = w.globals.dom.Paper.circle(radius * 2);

        if (attrs !== null) {
          c.attr(attrs);
        }

        return c;
      }
    }, {
      key: "drawPath",
      value: function drawPath(_ref) {
        var _ref$d = _ref.d,
            d = _ref$d === void 0 ? '' : _ref$d,
            _ref$stroke = _ref.stroke,
            stroke = _ref$stroke === void 0 ? '#a8a8a8' : _ref$stroke,
            _ref$strokeWidth = _ref.strokeWidth,
            strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth,
            fill = _ref.fill,
            _ref$fillOpacity = _ref.fillOpacity,
            fillOpacity = _ref$fillOpacity === void 0 ? 1 : _ref$fillOpacity,
            _ref$strokeOpacity = _ref.strokeOpacity,
            strokeOpacity = _ref$strokeOpacity === void 0 ? 1 : _ref$strokeOpacity,
            classes = _ref.classes,
            _ref$strokeLinecap = _ref.strokeLinecap,
            strokeLinecap = _ref$strokeLinecap === void 0 ? null : _ref$strokeLinecap,
            _ref$strokeDashArray = _ref.strokeDashArray,
            strokeDashArray = _ref$strokeDashArray === void 0 ? 0 : _ref$strokeDashArray;
        var w = this.w;

        if (strokeLinecap === null) {
          strokeLinecap = w.config.stroke.lineCap;
        }

        if (d.indexOf('undefined') > -1 || d.indexOf('NaN') > -1) {
          d = "M 0 ".concat(w.globals.gridHeight);
        }

        var p = w.globals.dom.Paper.path(d).attr({
          fill: fill,
          'fill-opacity': fillOpacity,
          stroke: stroke,
          'stroke-opacity': strokeOpacity,
          'stroke-linecap': strokeLinecap,
          'stroke-width': strokeWidth,
          'stroke-dasharray': strokeDashArray,
          class: classes
        });
        return p;
      }
    }, {
      key: "group",
      value: function group() {
        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var w = this.w;
        var g = w.globals.dom.Paper.group();

        if (attrs !== null) {
          g.attr(attrs);
        }

        return g;
      }
    }, {
      key: "move",
      value: function move(x, y) {
        var move = ['M', x, y].join(' ');
        return move;
      }
    }, {
      key: "line",
      value: function line(x, y) {
        var hORv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var line = null;

        if (hORv === null) {
          line = ['L', x, y].join(' ');
        } else if (hORv === 'H') {
          line = ['H', x].join(' ');
        } else if (hORv === 'V') {
          line = ['V', y].join(' ');
        }

        return line;
      }
    }, {
      key: "curve",
      value: function curve(x1, y1, x2, y2, x, y) {
        var curve = ['C', x1, y1, x2, y2, x, y].join(' ');
        return curve;
      }
    }, {
      key: "quadraticCurve",
      value: function quadraticCurve(x1, y1, x, y) {
        var curve = ['Q', x1, y1, x, y].join(' ');
        return curve;
      }
    }, {
      key: "arc",
      value: function arc(rx, ry, axisRotation, largeArcFlag, sweepFlag, x, y) {
        var relative = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
        var coord = 'A';
        if (relative) coord = 'a';
        var arc = [coord, rx, ry, axisRotation, largeArcFlag, sweepFlag, x, y].join(' ');
        return arc;
      }
      /**
       * @memberof Graphics
       * @param {object}
       *  i = series's index
       *  realIndex = realIndex is series's actual index when it was drawn time. After several redraws, the iterating "i" may change in loops, but realIndex doesn't
       *  pathFrom = existing pathFrom to animateTo
       *  pathTo = new Path to which d attr will be animated from pathFrom to pathTo
       *  stroke = line Color
       *  strokeWidth = width of path Line
       *  fill = it can be gradient, single color, pattern or image
       *  animationDelay = how much to delay when starting animation (in milliseconds)
       *  dataChangeSpeed = for dynamic animations, when data changes
       *  className = class attribute to add
       * @return {object} svg.js path object
       **/

    }, {
      key: "renderPaths",
      value: function renderPaths(_ref2) {
        var j = _ref2.j,
            realIndex = _ref2.realIndex,
            pathFrom = _ref2.pathFrom,
            pathTo = _ref2.pathTo,
            stroke = _ref2.stroke,
            strokeWidth = _ref2.strokeWidth,
            strokeLinecap = _ref2.strokeLinecap,
            fill = _ref2.fill,
            animationDelay = _ref2.animationDelay,
            initialSpeed = _ref2.initialSpeed,
            dataChangeSpeed = _ref2.dataChangeSpeed,
            className = _ref2.className,
            _ref2$shouldClipToGri = _ref2.shouldClipToGrid,
            shouldClipToGrid = _ref2$shouldClipToGri === void 0 ? true : _ref2$shouldClipToGri,
            _ref2$bindEventsOnPat = _ref2.bindEventsOnPaths,
            bindEventsOnPaths = _ref2$bindEventsOnPat === void 0 ? true : _ref2$bindEventsOnPat,
            _ref2$drawShadow = _ref2.drawShadow,
            drawShadow = _ref2$drawShadow === void 0 ? true : _ref2$drawShadow;
        var w = this.w;
        var filters = new Filters(this.ctx);
        var anim = new Animations(this.ctx);
        var initialAnim = this.w.config.chart.animations.enabled;
        var dynamicAnim = initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled;
        var d;
        var shouldAnimate = !!(initialAnim && !w.globals.resized || dynamicAnim && w.globals.dataChanged && w.globals.shouldAnimate);

        if (shouldAnimate) {
          d = pathFrom;
        } else {
          d = pathTo;
          w.globals.animationEnded = true;
        }

        var strokeDashArrayOpt = w.config.stroke.dashArray;
        var strokeDashArray = 0;

        if (Array.isArray(strokeDashArrayOpt)) {
          strokeDashArray = strokeDashArrayOpt[realIndex];
        } else {
          strokeDashArray = w.config.stroke.dashArray;
        }

        var el = this.drawPath({
          d: d,
          stroke: stroke,
          strokeWidth: strokeWidth,
          fill: fill,
          fillOpacity: 1,
          classes: className,
          strokeLinecap: strokeLinecap,
          strokeDashArray: strokeDashArray
        });
        el.attr('index', realIndex);

        if (shouldClipToGrid) {
          el.attr({
            'clip-path': "url(#gridRectMask".concat(w.globals.cuid, ")")
          });
        } // const defaultFilter = el.filterer


        if (w.config.states.normal.filter.type !== 'none') {
          filters.getDefaultFilter(el, realIndex);
        } else {
          if (w.config.chart.dropShadow.enabled && drawShadow) {
            if (!w.config.chart.dropShadow.enabledOnSeries || w.config.chart.dropShadow.enabledOnSeries && w.config.chart.dropShadow.enabledOnSeries.indexOf(realIndex) !== -1) {
              var shadow = w.config.chart.dropShadow;
              filters.dropShadow(el, shadow, realIndex);
            }
          }
        }

        if (bindEventsOnPaths) {
          el.node.addEventListener('mouseenter', this.pathMouseEnter.bind(this, el));
          el.node.addEventListener('mouseleave', this.pathMouseLeave.bind(this, el));
          el.node.addEventListener('mousedown', this.pathMouseDown.bind(this, el));
        }

        el.attr({
          pathTo: pathTo,
          pathFrom: pathFrom
        });
        var defaultAnimateOpts = {
          el: el,
          j: j,
          realIndex: realIndex,
          pathFrom: pathFrom,
          pathTo: pathTo,
          fill: fill,
          strokeWidth: strokeWidth,
          delay: animationDelay
        };

        if (initialAnim && !w.globals.resized && !w.globals.dataChanged) {
          anim.animatePathsGradually(_objectSpread2({}, defaultAnimateOpts, {
            speed: initialSpeed
          }));
        } else {
          if (w.globals.resized || !w.globals.dataChanged) {
            anim.showDelayedElements();
          }
        }

        if (w.globals.dataChanged && dynamicAnim && shouldAnimate) {
          anim.animatePathsGradually(_objectSpread2({}, defaultAnimateOpts, {
            speed: dataChangeSpeed
          }));
        }

        return el;
      }
    }, {
      key: "drawPattern",
      value: function drawPattern(style, width, height) {
        var stroke = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#a8a8a8';
        var strokeWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var w = this.w;
        var p = w.globals.dom.Paper.pattern(width, height, function (add) {
          if (style === 'horizontalLines') {
            add.line(0, 0, height, 0).stroke({
              color: stroke,
              width: strokeWidth + 1
            });
          } else if (style === 'verticalLines') {
            add.line(0, 0, 0, width).stroke({
              color: stroke,
              width: strokeWidth + 1
            });
          } else if (style === 'slantedLines') {
            add.line(0, 0, width, height).stroke({
              color: stroke,
              width: strokeWidth
            });
          } else if (style === 'squares') {
            add.rect(width, height).fill('none').stroke({
              color: stroke,
              width: strokeWidth
            });
          } else if (style === 'circles') {
            add.circle(width).fill('none').stroke({
              color: stroke,
              width: strokeWidth
            });
          }
        });
        return p;
      }
    }, {
      key: "drawGradient",
      value: function drawGradient(style, gfrom, gto, opacityFrom, opacityTo) {
        var size = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        var stops = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        var colorStops = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
        var i = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
        var w = this.w;
        var g;
        gfrom = Utils.hexToRgba(gfrom, opacityFrom);
        gto = Utils.hexToRgba(gto, opacityTo);
        var stop1 = 0;
        var stop2 = 1;
        var stop3 = 1;
        var stop4 = null;

        if (stops !== null) {
          stop1 = typeof stops[0] !== 'undefined' ? stops[0] / 100 : 0;
          stop2 = typeof stops[1] !== 'undefined' ? stops[1] / 100 : 1;
          stop3 = typeof stops[2] !== 'undefined' ? stops[2] / 100 : 1;
          stop4 = typeof stops[3] !== 'undefined' ? stops[3] / 100 : null;
        }

        var radial = !!(w.config.chart.type === 'donut' || w.config.chart.type === 'pie' || w.config.chart.type === 'bubble');

        if (colorStops === null || colorStops.length === 0) {
          g = w.globals.dom.Paper.gradient(radial ? 'radial' : 'linear', function (stop) {
            stop.at(stop1, gfrom, opacityFrom);
            stop.at(stop2, gto, opacityTo);
            stop.at(stop3, gto, opacityTo);

            if (stop4 !== null) {
              stop.at(stop4, gfrom, opacityFrom);
            }
          });
        } else {
          g = w.globals.dom.Paper.gradient(radial ? 'radial' : 'linear', function (stop) {
            var gradientStops = Array.isArray(colorStops[i]) ? colorStops[i] : colorStops;
            gradientStops.forEach(function (s) {
              stop.at(s.offset / 100, s.color, s.opacity);
            });
          });
        }

        if (!radial) {
          if (style === 'vertical') {
            g.from(0, 0).to(0, 1);
          } else if (style === 'diagonal') {
            g.from(0, 0).to(1, 1);
          } else if (style === 'horizontal') {
            g.from(0, 1).to(1, 1);
          } else if (style === 'diagonal2') {
            g.from(1, 0).to(0, 1);
          }
        } else {
          var offx = w.globals.gridWidth / 2;
          var offy = w.globals.gridHeight / 2;

          if (w.config.chart.type !== 'bubble') {
            g.attr({
              gradientUnits: 'userSpaceOnUse',
              cx: offx,
              cy: offy,
              r: size
            });
          } else {
            g.attr({
              cx: 0.5,
              cy: 0.5,
              r: 0.8,
              fx: 0.2,
              fy: 0.2
            });
          }
        }

        return g;
      }
    }, {
      key: "drawText",
      value: function drawText(_ref3) {
        var x = _ref3.x,
            y = _ref3.y,
            text = _ref3.text,
            textAnchor = _ref3.textAnchor,
            fontSize = _ref3.fontSize,
            fontFamily = _ref3.fontFamily,
            fontWeight = _ref3.fontWeight,
            foreColor = _ref3.foreColor,
            opacity = _ref3.opacity,
            _ref3$cssClass = _ref3.cssClass,
            cssClass = _ref3$cssClass === void 0 ? '' : _ref3$cssClass,
            _ref3$isPlainText = _ref3.isPlainText,
            isPlainText = _ref3$isPlainText === void 0 ? true : _ref3$isPlainText;
        var w = this.w;
        if (typeof text === 'undefined') text = '';

        if (!textAnchor) {
          textAnchor = 'start';
        }

        if (!foreColor || !foreColor.length) {
          foreColor = w.config.chart.foreColor;
        }

        fontFamily = fontFamily || w.config.chart.fontFamily;
        fontWeight = fontWeight || 'regular';
        var elText;

        if (Array.isArray(text)) {
          elText = w.globals.dom.Paper.text(function (add) {
            for (var i = 0; i < text.length; i++) {
              i === 0 ? add.tspan(text[i]) : add.tspan(text[i]).newLine();
            }
          });
        } else {
          elText = isPlainText ? w.globals.dom.Paper.plain(text) : w.globals.dom.Paper.text(function (add) {
            return add.tspan(text);
          });
        }

        elText.attr({
          x: x,
          y: y,
          'text-anchor': textAnchor,
          'dominant-baseline': 'auto',
          'font-size': fontSize,
          'font-family': fontFamily,
          'font-weight': fontWeight,
          fill: foreColor,
          class: 'apexcharts-text ' + cssClass
        });
        elText.node.style.fontFamily = fontFamily;
        elText.node.style.opacity = opacity;
        return elText;
      }
    }, {
      key: "drawMarker",
      value: function drawMarker(x, y, opts) {
        x = x || 0;
        var size = opts.pSize || 0;
        var elPoint = null;

        if (opts.shape === 'square') {
          var radius = opts.pRadius === undefined ? size / 2 : opts.pRadius;

          if (y === null || !size) {
            size = 0;
            radius = 0;
          }

          var nSize = size * 1.2 + radius;
          var p = this.drawRect(nSize, nSize, nSize, nSize, radius);
          p.attr({
            x: x - nSize / 2,
            y: y - nSize / 2,
            cx: x,
            cy: y,
            class: opts.class ? opts.class : '',
            fill: opts.pointFillColor,
            'fill-opacity': opts.pointFillOpacity ? opts.pointFillOpacity : 1,
            stroke: opts.pointStrokeColor,
            'stroke-width': opts.pWidth ? opts.pWidth : 0,
            'stroke-opacity': opts.pointStrokeOpacity ? opts.pointStrokeOpacity : 1
          });
          elPoint = p;
        } else if (opts.shape === 'circle' || !opts.shape) {
          if (!Utils.isNumber(y)) {
            size = 0;
            y = 0;
          } // let nSize = size - opts.pRadius / 2 < 0 ? 0 : size - opts.pRadius / 2


          elPoint = this.drawCircle(size, {
            cx: x,
            cy: y,
            class: opts.class ? opts.class : '',
            stroke: opts.pointStrokeColor,
            fill: opts.pointFillColor,
            'fill-opacity': opts.pointFillOpacity ? opts.pointFillOpacity : 1,
            'stroke-width': opts.pWidth ? opts.pWidth : 0,
            'stroke-opacity': opts.pointStrokeOpacity ? opts.pointStrokeOpacity : 1
          });
        }

        return elPoint;
      }
    }, {
      key: "pathMouseEnter",
      value: function pathMouseEnter(path, e) {
        var w = this.w;
        var filters = new Filters(this.ctx);
        var i = parseInt(path.node.getAttribute('index'), 10);
        var j = parseInt(path.node.getAttribute('j'), 10);

        if (typeof w.config.chart.events.dataPointMouseEnter === 'function') {
          w.config.chart.events.dataPointMouseEnter(e, this.ctx, {
            seriesIndex: i,
            dataPointIndex: j,
            w: w
          });
        }

        this.ctx.events.fireEvent('dataPointMouseEnter', [e, this.ctx, {
          seriesIndex: i,
          dataPointIndex: j,
          w: w
        }]);

        if (w.config.states.active.filter.type !== 'none') {
          if (path.node.getAttribute('selected') === 'true') {
            return;
          }
        }

        if (w.config.states.hover.filter.type !== 'none') {
          if (w.config.states.active.filter.type !== 'none' && !w.globals.isTouchDevice) {
            var hoverFilter = w.config.states.hover.filter;
            filters.applyFilter(path, i, hoverFilter.type, hoverFilter.value);
          }
        }
      }
    }, {
      key: "pathMouseLeave",
      value: function pathMouseLeave(path, e) {
        var w = this.w;
        var filters = new Filters(this.ctx);
        var i = parseInt(path.node.getAttribute('index'), 10);
        var j = parseInt(path.node.getAttribute('j'), 10);

        if (typeof w.config.chart.events.dataPointMouseLeave === 'function') {
          w.config.chart.events.dataPointMouseLeave(e, this.ctx, {
            seriesIndex: i,
            dataPointIndex: j,
            w: w
          });
        }

        this.ctx.events.fireEvent('dataPointMouseLeave', [e, this.ctx, {
          seriesIndex: i,
          dataPointIndex: j,
          w: w
        }]);

        if (w.config.states.active.filter.type !== 'none') {
          if (path.node.getAttribute('selected') === 'true') {
            return;
          }
        }

        if (w.config.states.hover.filter.type !== 'none') {
          filters.getDefaultFilter(path, i);
        }
      }
    }, {
      key: "pathMouseDown",
      value: function pathMouseDown(path, e) {
        var w = this.w;
        var filters = new Filters(this.ctx);
        var i = parseInt(path.node.getAttribute('index'), 10);
        var j = parseInt(path.node.getAttribute('j'), 10);
        var selected = 'false';

        if (path.node.getAttribute('selected') === 'true') {
          path.node.setAttribute('selected', 'false');

          if (w.globals.selectedDataPoints[i].indexOf(j) > -1) {
            var index = w.globals.selectedDataPoints[i].indexOf(j);
            w.globals.selectedDataPoints[i].splice(index, 1);
          }
        } else {
          if (!w.config.states.active.allowMultipleDataPointsSelection && w.globals.selectedDataPoints.length > 0) {
            w.globals.selectedDataPoints = [];
            var elPaths = w.globals.dom.Paper.select('.apexcharts-series path').members;
            var elCircles = w.globals.dom.Paper.select('.apexcharts-series circle, .apexcharts-series rect').members;

            var deSelect = function deSelect(els) {
              Array.prototype.forEach.call(els, function (el) {
                el.node.setAttribute('selected', 'false');
                filters.getDefaultFilter(el, i);
              });
            };

            deSelect(elPaths);
            deSelect(elCircles);
          }

          path.node.setAttribute('selected', 'true');
          selected = 'true';

          if (typeof w.globals.selectedDataPoints[i] === 'undefined') {
            w.globals.selectedDataPoints[i] = [];
          }

          w.globals.selectedDataPoints[i].push(j);
        }

        if (selected === 'true') {
          var activeFilter = w.config.states.active.filter;

          if (activeFilter !== 'none') {
            filters.applyFilter(path, i, activeFilter.type, activeFilter.value);
          }
        } else {
          if (w.config.states.active.filter.type !== 'none') {
            filters.getDefaultFilter(path, i);
          }
        }

        if (typeof w.config.chart.events.dataPointSelection === 'function') {
          w.config.chart.events.dataPointSelection(e, this.ctx, {
            selectedDataPoints: w.globals.selectedDataPoints,
            seriesIndex: i,
            dataPointIndex: j,
            w: w
          });
        }

        if (e) {
          this.ctx.events.fireEvent('dataPointSelection', [e, this.ctx, {
            selectedDataPoints: w.globals.selectedDataPoints,
            seriesIndex: i,
            dataPointIndex: j,
            w: w
          }]);
        }
      }
    }, {
      key: "rotateAroundCenter",
      value: function rotateAroundCenter(el) {
        var coord = el.getBBox();
        var x = coord.x + coord.width / 2;
        var y = coord.y + coord.height / 2;
        return {
          x: x,
          y: y
        };
      }
    }, {
      key: "getTextRects",
      value: function getTextRects(text, fontSize, fontFamily, transform) {
        var useBBox = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var w = this.w;
        var virtualText = this.drawText({
          x: -200,
          y: -200,
          text: text,
          textAnchor: 'start',
          fontSize: fontSize,
          fontFamily: fontFamily,
          foreColor: '#fff',
          opacity: 0
        });

        if (transform) {
          virtualText.attr('transform', transform);
        }

        w.globals.dom.Paper.add(virtualText);
        var rect = virtualText.bbox();

        if (!useBBox) {
          rect = virtualText.node.getBoundingClientRect();
        }

        virtualText.remove();
        return {
          width: rect.width,
          height: rect.height
        };
      }
      /**
       * append ... to long text
       * http://stackoverflow.com/questions/9241315/trimming-text-to-a-given-pixel-width-in-svg
       * @memberof Graphics
       **/

    }, {
      key: "placeTextWithEllipsis",
      value: function placeTextWithEllipsis(textObj, textString, width) {
        if (typeof textObj.getComputedTextLength !== 'function') return;
        textObj.textContent = textString;

        if (textString.length > 0) {
          // ellipsis is needed
          if (textObj.getComputedTextLength() >= width / 0.8) {
            for (var x = textString.length - 3; x > 0; x -= 3) {
              if (textObj.getSubStringLength(0, x) <= width / 0.8) {
                textObj.textContent = textString.substring(0, x) + '...';
                return;
              }
            }

            textObj.textContent = '.'; // can't place at all
          }
        }
      }
    }], [{
      key: "setAttrs",
      value: function setAttrs(el, attrs) {
        for (var key in attrs) {
          if (attrs.hasOwnProperty(key)) {
            el.setAttribute(key, attrs[key]);
          }
        }
      }
    }]);

    return Graphics;
  }();

  var Helpers =
  /*#__PURE__*/
  function () {
    function Helpers(annoCtx) {
      _classCallCheck(this, Helpers);

      this.w = annoCtx.w;
      this.annoCtx = annoCtx;
    }

    _createClass(Helpers, [{
      key: "setOrientations",
      value: function setOrientations(anno) {
        var annoIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var w = this.w;

        if (anno.label.orientation === 'vertical') {
          var i = annoIndex !== null ? annoIndex : 0;
          var xAnno = w.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(i, "']"));

          if (xAnno !== null) {
            var xAnnoCoord = xAnno.getBoundingClientRect();
            xAnno.setAttribute('x', parseFloat(xAnno.getAttribute('x')) - xAnnoCoord.height + 4);

            if (anno.label.position === 'top') {
              xAnno.setAttribute('y', parseFloat(xAnno.getAttribute('y')) + xAnnoCoord.width);
            } else {
              xAnno.setAttribute('y', parseFloat(xAnno.getAttribute('y')) - xAnnoCoord.width);
            }

            var annoRotatingCenter = this.annoCtx.graphics.rotateAroundCenter(xAnno);
            var x = annoRotatingCenter.x;
            var y = annoRotatingCenter.y;
            xAnno.setAttribute('transform', "rotate(-90 ".concat(x, " ").concat(y, ")"));
          }
        }
      }
    }, {
      key: "addBackgroundToAnno",
      value: function addBackgroundToAnno(annoEl, anno) {
        var w = this.w;
        if (!anno.label.text || anno.label.text && !anno.label.text.trim()) return null;
        var elGridRect = w.globals.dom.baseEl.querySelector('.apexcharts-grid').getBoundingClientRect();
        var coords = annoEl.getBoundingClientRect();
        var pleft = anno.label.style.padding.left;
        var pright = anno.label.style.padding.right;
        var ptop = anno.label.style.padding.top;
        var pbottom = anno.label.style.padding.bottom;

        if (anno.label.orientation === 'vertical') {
          ptop = anno.label.style.padding.left;
          pbottom = anno.label.style.padding.right;
          pleft = anno.label.style.padding.top;
          pright = anno.label.style.padding.bottom;
        }

        var x1 = coords.left - elGridRect.left - pleft;
        var y1 = coords.top - elGridRect.top - ptop;
        var elRect = this.annoCtx.graphics.drawRect(x1, y1, coords.width + pleft + pright, coords.height + ptop + pbottom, 0, anno.label.style.background, 1, anno.label.borderWidth, anno.label.borderColor, 0);

        if (anno.id) {
          elRect.node.classList.add(anno.id);
        }

        return elRect;
      }
    }, {
      key: "annotationsBackground",
      value: function annotationsBackground() {
        var _this = this;

        var w = this.w;

        var add = function add(anno, i, type) {
          var annoLabel = w.globals.dom.baseEl.querySelector(".apexcharts-".concat(type, "-annotations .apexcharts-").concat(type, "-annotation-label[rel='").concat(i, "']"));

          if (annoLabel) {
            var parent = annoLabel.parentNode;

            var elRect = _this.addBackgroundToAnno(annoLabel, anno);

            if (elRect) {
              parent.insertBefore(elRect.node, annoLabel);
            }
          }
        };

        w.config.annotations.xaxis.map(function (anno, i) {
          add(anno, i, 'xaxis');
        });
        w.config.annotations.yaxis.map(function (anno, i) {
          add(anno, i, 'yaxis');
        });
        w.config.annotations.points.map(function (anno, i) {
          add(anno, i, 'point');
        });
      }
    }, {
      key: "getStringX",
      value: function getStringX(x) {
        var w = this.w;
        var rX = x;

        if (w.config.xaxis.convertedCatToNumeric && w.globals.categoryLabels.length) {
          x = w.globals.categoryLabels.indexOf(x) + 1;
        }

        var catIndex = w.globals.labels.indexOf(x);
        var xLabel = w.globals.dom.baseEl.querySelector('.apexcharts-xaxis-texts-g text:nth-child(' + (catIndex + 1) + ')');

        if (xLabel) {
          rX = parseFloat(xLabel.getAttribute('x'));
        }

        return rX;
      }
    }]);

    return Helpers;
  }();

  var XAnnotations =
  /*#__PURE__*/
  function () {
    function XAnnotations(annoCtx) {
      _classCallCheck(this, XAnnotations);

      this.w = annoCtx.w;
      this.annoCtx = annoCtx;
      this.invertAxis = this.annoCtx.invertAxis;
    }

    _createClass(XAnnotations, [{
      key: "addXaxisAnnotation",
      value: function addXaxisAnnotation(anno, parent, index) {
        var w = this.w;
        var min = this.invertAxis ? w.globals.minY : w.globals.minX;
        var max = this.invertAxis ? w.globals.maxY : w.globals.maxX;
        var range = this.invertAxis ? w.globals.yRange[0] : w.globals.xRange;
        var x1 = (anno.x - min) / (range / w.globals.gridWidth);

        if (this.annoCtx.inversedReversedAxis) {
          x1 = (max - anno.x) / (range / w.globals.gridWidth);
        }

        var text = anno.label.text;

        if ((w.config.xaxis.type === 'category' || w.config.xaxis.convertedCatToNumeric) && !this.invertAxis && !w.globals.dataFormatXNumeric) {
          x1 = this.annoCtx.helpers.getStringX(anno.x);
        }

        var strokeDashArray = anno.strokeDashArray;
        if (!Utils.isNumber(x1)) return;

        if (anno.x2 === null) {
          var line = this.annoCtx.graphics.drawLine(x1 + anno.offsetX, // x1
          0 + anno.offsetY, // y1
          x1 + anno.offsetX, // x2
          w.globals.gridHeight + anno.offsetY, // y2
          anno.borderColor, // lineColor
          strokeDashArray, //dashArray
          anno.borderWidth);
          parent.appendChild(line.node);

          if (anno.id) {
            line.node.classList.add(anno.id);
          }
        } else {
          var x2 = (anno.x2 - min) / (range / w.globals.gridWidth);

          if (this.annoCtx.inversedReversedAxis) {
            x2 = (max - anno.x2) / (range / w.globals.gridWidth);
          }

          if ((w.config.xaxis.type === 'category' || w.config.xaxis.convertedCatToNumeric) && !this.invertAxis && !w.globals.dataFormatXNumeric) {
            x2 = this.annoCtx.helpers.getStringX(anno.x2);
          }

          if (x2 < x1) {
            var temp = x1;
            x1 = x2;
            x2 = temp;
          }

          var rect = this.annoCtx.graphics.drawRect(x1 + anno.offsetX, // x1
          0 + anno.offsetY, // y1
          x2 - x1, // x2
          w.globals.gridHeight + anno.offsetY, // y2
          0, // radius
          anno.fillColor, // color
          anno.opacity, // opacity,
          1, // strokeWidth
          anno.borderColor, // strokeColor
          strokeDashArray // stokeDashArray
          );
          rect.node.classList.add('apexcharts-annotation-rect');
          rect.attr('clip-path', "url(#gridRectMask".concat(w.globals.cuid, ")"));
          parent.appendChild(rect.node);

          if (anno.id) {
            rect.node.classList.add(anno.id);
          }
        }

        var textY = anno.label.position === 'top' ? 4 : w.globals.gridHeight;
        var textRects = this.annoCtx.graphics.getTextRects(text, parseFloat(anno.label.style.fontSize));
        var elText = this.annoCtx.graphics.drawText({
          x: x1 + anno.label.offsetX,
          y: textY + anno.label.offsetY - (anno.label.orientation === 'vertical' ? anno.label.position === 'top' ? textRects.width / 2 - 12 : -textRects.width / 2 : 0),
          text: text,
          textAnchor: anno.label.textAnchor,
          fontSize: anno.label.style.fontSize,
          fontFamily: anno.label.style.fontFamily,
          fontWeight: anno.label.style.fontWeight,
          foreColor: anno.label.style.color,
          cssClass: "apexcharts-xaxis-annotation-label ".concat(anno.label.style.cssClass, " ").concat(anno.id ? anno.id : '')
        });
        elText.attr({
          rel: index
        });
        parent.appendChild(elText.node); // after placing the annotations on svg, set any vertically placed annotations

        this.annoCtx.helpers.setOrientations(anno, index);
      }
    }, {
      key: "drawXAxisAnnotations",
      value: function drawXAxisAnnotations() {
        var _this = this;

        var w = this.w;
        var elg = this.annoCtx.graphics.group({
          class: 'apexcharts-xaxis-annotations'
        });
        w.config.annotations.xaxis.map(function (anno, index) {
          _this.addXaxisAnnotation(anno, elg.node, index);
        });
        return elg;
      }
    }]);

    return XAnnotations;
  }();

  var YAnnotations =
  /*#__PURE__*/
  function () {
    function YAnnotations(annoCtx) {
      _classCallCheck(this, YAnnotations);

      this.w = annoCtx.w;
      this.annoCtx = annoCtx;
    }

    _createClass(YAnnotations, [{
      key: "addYaxisAnnotation",
      value: function addYaxisAnnotation(anno, parent, index) {
        var w = this.w;
        var strokeDashArray = anno.strokeDashArray;

        var y1 = this._getY1Y2('y1', anno);

        var y2;
        var text = anno.label.text;

        if (anno.y2 === null) {
          var line = this.annoCtx.graphics.drawLine(0 + anno.offsetX, // x1
          y1 + anno.offsetY, // y1
          w.globals.gridWidth + anno.offsetX, // x2
          y1 + anno.offsetY, // y2
          anno.borderColor, // lineColor
          strokeDashArray, // dashArray
          anno.borderWidth);
          parent.appendChild(line.node);

          if (anno.id) {
            line.node.classList.add(anno.id);
          }
        } else {
          y2 = this._getY1Y2('y2', anno);

          if (y2 > y1) {
            var temp = y1;
            y1 = y2;
            y2 = temp;
          }

          var rect = this.annoCtx.graphics.drawRect(0 + anno.offsetX, // x1
          y2 + anno.offsetY, // y1
          w.globals.gridWidth + anno.offsetX, // x2
          y1 - y2, // y2
          0, // radius
          anno.fillColor, // color
          anno.opacity, // opacity,
          1, // strokeWidth
          anno.borderColor, // strokeColor
          strokeDashArray // stokeDashArray
          );
          rect.node.classList.add('apexcharts-annotation-rect');
          rect.attr('clip-path', "url(#gridRectMask".concat(w.globals.cuid, ")"));
          parent.appendChild(rect.node);

          if (anno.id) {
            rect.node.classList.add(anno.id);
          }
        }

        var textX = anno.label.position === 'right' ? w.globals.gridWidth : 0;
        var elText = this.annoCtx.graphics.drawText({
          x: textX + anno.label.offsetX,
          y: (y2 || y1) + anno.label.offsetY - 3,
          text: text,
          textAnchor: anno.label.textAnchor,
          fontSize: anno.label.style.fontSize,
          fontFamily: anno.label.style.fontFamily,
          fontWeight: anno.label.style.fontWeight,
          foreColor: anno.label.style.color,
          cssClass: "apexcharts-yaxis-annotation-label ".concat(anno.label.style.cssClass, " ").concat(anno.id ? anno.id : '')
        });
        elText.attr({
          rel: index
        });
        parent.appendChild(elText.node);
      }
    }, {
      key: "_getY1Y2",
      value: function _getY1Y2(type, anno) {
        var y = type === 'y1' ? anno.y : anno.y2;
        var yP;
        var w = this.w;

        if (this.annoCtx.invertAxis) {
          var catIndex = w.globals.labels.indexOf(y);

          if (w.config.xaxis.convertedCatToNumeric) {
            catIndex = w.globals.categoryLabels.indexOf(y);
          }

          var xLabel = w.globals.dom.baseEl.querySelector('.apexcharts-yaxis-texts-g text:nth-child(' + (catIndex + 1) + ')');

          if (xLabel) {
            yP = parseFloat(xLabel.getAttribute('y'));
          }
        } else {
          yP = w.globals.gridHeight - (y - w.globals.minYArr[anno.yAxisIndex]) / (w.globals.yRange[anno.yAxisIndex] / w.globals.gridHeight);

          if (w.config.yaxis[anno.yAxisIndex] && w.config.yaxis[anno.yAxisIndex].reversed) {
            yP = (y - w.globals.minYArr[anno.yAxisIndex]) / (w.globals.yRange[anno.yAxisIndex] / w.globals.gridHeight);
          }
        }

        return yP;
      }
    }, {
      key: "drawYAxisAnnotations",
      value: function drawYAxisAnnotations() {
        var _this = this;

        var w = this.w;
        var elg = this.annoCtx.graphics.group({
          class: 'apexcharts-yaxis-annotations'
        });
        w.config.annotations.yaxis.map(function (anno, index) {
          _this.addYaxisAnnotation(anno, elg.node, index);
        });
        return elg;
      }
    }]);

    return YAnnotations;
  }();

  var PointAnnotations =
  /*#__PURE__*/
  function () {
    function PointAnnotations(annoCtx) {
      _classCallCheck(this, PointAnnotations);

      this.w = annoCtx.w;
      this.annoCtx = annoCtx;
    }

    _createClass(PointAnnotations, [{
      key: "addPointAnnotation",
      value: function addPointAnnotation(anno, parent, index) {
        var w = this.w;
        var x = 0;
        var y = 0;
        var pointY = 0;

        if (this.annoCtx.invertAxis) {
          console.warn('Point annotation is not supported in horizontal bar charts.');
        }

        if (typeof anno.x === 'string') {
          var catIndex = w.globals.labels.indexOf(anno.x);

          if (w.config.xaxis.convertedCatToNumeric) {
            catIndex = w.globals.categoryLabels.indexOf(anno.x);
          }

          x = this.annoCtx.helpers.getStringX(anno.x);
          var annoY = anno.y;

          if (anno.y === null) {
            annoY = w.globals.series[anno.seriesIndex][catIndex];
          }

          y = w.globals.gridHeight - (annoY - w.globals.minYArr[anno.yAxisIndex]) / (w.globals.yRange[anno.yAxisIndex] / w.globals.gridHeight) - parseFloat(anno.label.style.fontSize) - anno.marker.size;
          pointY = w.globals.gridHeight - (annoY - w.globals.minYArr[anno.yAxisIndex]) / (w.globals.yRange[anno.yAxisIndex] / w.globals.gridHeight);

          if (w.config.yaxis[anno.yAxisIndex] && w.config.yaxis[anno.yAxisIndex].reversed) {
            y = (annoY - w.globals.minYArr[anno.yAxisIndex]) / (w.globals.yRange[anno.yAxisIndex] / w.globals.gridHeight) + parseFloat(anno.label.style.fontSize) + anno.marker.size;
            pointY = (annoY - w.globals.minYArr[anno.yAxisIndex]) / (w.globals.yRange[anno.yAxisIndex] / w.globals.gridHeight);
          }
        } else {
          x = (anno.x - w.globals.minX) / (w.globals.xRange / w.globals.gridWidth);
          y = w.globals.gridHeight - (parseFloat(anno.y) - w.globals.minYArr[anno.yAxisIndex]) / (w.globals.yRange[anno.yAxisIndex] / w.globals.gridHeight) - parseFloat(anno.label.style.fontSize) - anno.marker.size;
          pointY = w.globals.gridHeight - (anno.y - w.globals.minYArr[anno.yAxisIndex]) / (w.globals.yRange[anno.yAxisIndex] / w.globals.gridHeight);

          if (w.config.yaxis[anno.yAxisIndex] && w.config.yaxis[anno.yAxisIndex].reversed) {
            y = (parseFloat(anno.y) - w.globals.minYArr[anno.yAxisIndex]) / (w.globals.yRange[anno.yAxisIndex] / w.globals.gridHeight) - parseFloat(anno.label.style.fontSize) - anno.marker.size;
            pointY = (anno.y - w.globals.minYArr[anno.yAxisIndex]) / (w.globals.yRange[anno.yAxisIndex] / w.globals.gridHeight);
          }
        }

        if (!Utils.isNumber(x)) return;
        var optsPoints = {
          pSize: anno.marker.size,
          pWidth: anno.marker.strokeWidth,
          pointFillColor: anno.marker.fillColor,
          pointStrokeColor: anno.marker.strokeColor,
          shape: anno.marker.shape,
          radius: anno.marker.radius,
          class: "apexcharts-point-annotation-marker ".concat(anno.marker.cssClass, " ").concat(anno.id ? anno.id : '')
        };
        var point = this.annoCtx.graphics.drawMarker(x + anno.marker.offsetX, pointY + anno.marker.offsetY, optsPoints);
        parent.appendChild(point.node);
        var text = anno.label.text ? anno.label.text : '';
        var elText = this.annoCtx.graphics.drawText({
          x: x + anno.label.offsetX,
          y: y + anno.label.offsetY,
          text: text,
          textAnchor: anno.label.textAnchor,
          fontSize: anno.label.style.fontSize,
          fontFamily: anno.label.style.fontFamily,
          fontWeight: anno.label.style.fontWeight,
          foreColor: anno.label.style.color,
          cssClass: "apexcharts-point-annotation-label ".concat(anno.label.style.cssClass, " ").concat(anno.id ? anno.id : '')
        });
        elText.attr({
          rel: index
        });
        parent.appendChild(elText.node); // TODO: deprecate this as we will use custom

        if (anno.customSVG.SVG) {
          var g = this.annoCtx.graphics.group({
            class: 'apexcharts-point-annotations-custom-svg ' + anno.customSVG.cssClass
          });
          g.attr({
            transform: "translate(".concat(x + anno.customSVG.offsetX, ", ").concat(y + anno.customSVG.offsetY, ")")
          });
          g.node.innerHTML = anno.customSVG.SVG;
          parent.appendChild(g.node);
        }

        if (anno.image.path) {
          var imgWidth = anno.image.width ? anno.image.width : 20;
          var imgHeight = anno.image.height ? anno.image.height : 20;
          this.annoCtx.addImage({
            x: x + anno.image.offsetX - imgWidth / 2,
            y: y + anno.image.offsetY - imgHeight / 2,
            width: imgWidth,
            height: imgHeight,
            path: anno.image.path,
            appendTo: parent
          }, false, this.annoCtx.ctx);
        }
      }
    }, {
      key: "drawPointAnnotations",
      value: function drawPointAnnotations() {
        var _this = this;

        var w = this.w;
        var elg = this.annoCtx.graphics.group({
          class: 'apexcharts-point-annotations'
        });
        w.config.annotations.points.map(function (anno, index) {
          _this.addPointAnnotation(anno, elg.node, index);
        });
        return elg;
      }
    }]);

    return PointAnnotations;
  }();

  const name = "en";
  const options = {
  	months: [
  		"January",
  		"February",
  		"March",
  		"April",
  		"May",
  		"June",
  		"July",
  		"August",
  		"September",
  		"October",
  		"November",
  		"December"
  	],
  	shortMonths: [
  		"Jan",
  		"Feb",
  		"Mar",
  		"Apr",
  		"May",
  		"Jun",
  		"Jul",
  		"Aug",
  		"Sep",
  		"Oct",
  		"Nov",
  		"Dec"
  	],
  	days: [
  		"Sunday",
  		"Monday",
  		"Tuesday",
  		"Wednesday",
  		"Thursday",
  		"Friday",
  		"Saturday"
  	],
  	shortDays: [
  		"Sun",
  		"Mon",
  		"Tue",
  		"Wed",
  		"Thu",
  		"Fri",
  		"Sat"
  	],
  	toolbar: {
  		exportToSVG: "Download SVG",
  		exportToPNG: "Download PNG",
  		exportToCSV: "Download CSV",
  		menu: "Menu",
  		selection: "Selection",
  		selectionZoom: "Selection Zoom",
  		zoomIn: "Zoom In",
  		zoomOut: "Zoom Out",
  		pan: "Panning",
  		reset: "Reset Zoom"
  	}
  };
  var en = {
  	name: name,
  	options: options
  };

  var Options =
  /*#__PURE__*/
  function () {
    function Options() {
      _classCallCheck(this, Options);

      this.yAxis = {
        show: true,
        showAlways: false,
        seriesName: undefined,
        opposite: false,
        reversed: false,
        logarithmic: false,
        tickAmount: undefined,
        forceNiceScale: false,
        max: undefined,
        min: undefined,
        floating: false,
        decimalsInFloat: undefined,
        labels: {
          show: true,
          minWidth: 0,
          maxWidth: 160,
          offsetX: 0,
          offsetY: 0,
          align: undefined,
          rotate: 0,
          padding: 20,
          style: {
            colors: [],
            fontSize: '11px',
            fontWeight: 400,
            fontFamily: undefined,
            cssClass: ''
          },
          formatter: undefined
        },
        axisBorder: {
          show: false,
          color: '#e0e0e0',
          width: 1,
          offsetX: 0,
          offsetY: 0
        },
        axisTicks: {
          show: false,
          color: '#e0e0e0',
          width: 6,
          offsetX: 0,
          offsetY: 0
        },
        title: {
          text: undefined,
          rotate: 90,
          offsetY: 0,
          offsetX: 0,
          style: {
            color: undefined,
            fontSize: '11px',
            fontWeight: 900,
            fontFamily: undefined,
            cssClass: ''
          }
        },
        tooltip: {
          enabled: false,
          offsetX: 0
        },
        crosshairs: {
          show: true,
          position: 'front',
          stroke: {
            color: '#b6b6b6',
            width: 1,
            dashArray: 0
          }
        }
      };
      this.pointAnnotation = {
        x: 0,
        y: null,
        yAxisIndex: 0,
        seriesIndex: 0,
        marker: {
          size: 4,
          fillColor: '#fff',
          strokeWidth: 2,
          strokeColor: '#333',
          shape: 'circle',
          offsetX: 0,
          offsetY: 0,
          radius: 2,
          cssClass: ''
        },
        label: {
          borderColor: '#c2c2c2',
          borderWidth: 1,
          text: undefined,
          textAnchor: 'middle',
          offsetX: 0,
          offsetY: -15,
          style: {
            background: '#fff',
            color: undefined,
            fontSize: '11px',
            fontFamily: undefined,
            fontWeight: 400,
            cssClass: '',
            padding: {
              left: 5,
              right: 5,
              top: 2,
              bottom: 2
            }
          }
        },
        customSVG: {
          // this will be deprecated in the next major version as it is going to be replaced with a better alternative below
          SVG: undefined,
          cssClass: undefined,
          offsetX: 0,
          offsetY: 0
        },
        image: {
          path: undefined,
          width: 20,
          height: 20,
          offsetX: 0,
          offsetY: 0
        }
      };
      this.yAxisAnnotation = {
        y: 0,
        y2: null,
        strokeDashArray: 1,
        fillColor: '#c2c2c2',
        borderColor: '#c2c2c2',
        borderWidth: 1,
        opacity: 0.3,
        offsetX: 0,
        offsetY: 0,
        yAxisIndex: 0,
        label: {
          borderColor: '#c2c2c2',
          borderWidth: 1,
          text: undefined,
          textAnchor: 'end',
          position: 'right',
          offsetX: 0,
          offsetY: -3,
          style: {
            background: '#fff',
            color: undefined,
            fontSize: '11px',
            fontFamily: undefined,
            fontWeight: 400,
            cssClass: '',
            padding: {
              left: 5,
              right: 5,
              top: 2,
              bottom: 2
            }
          }
        }
      };
      this.xAxisAnnotation = {
        x: 0,
        x2: null,
        strokeDashArray: 1,
        fillColor: '#c2c2c2',
        borderColor: '#c2c2c2',
        borderWidth: 1,
        opacity: 0.3,
        offsetX: 0,
        offsetY: 0,
        label: {
          borderColor: '#c2c2c2',
          borderWidth: 1,
          text: undefined,
          textAnchor: 'middle',
          orientation: 'vertical',
          position: 'top',
          offsetX: 0,
          offsetY: 0,
          style: {
            background: '#fff',
            color: undefined,
            fontSize: '11px',
            fontFamily: undefined,
            fontWeight: 400,
            cssClass: '',
            padding: {
              left: 5,
              right: 5,
              top: 2,
              bottom: 2
            }
          }
        }
      };
      this.text = {
        x: 0,
        y: 0,
        text: '',
        textAnchor: 'start',
        foreColor: undefined,
        fontSize: '13px',
        fontFamily: undefined,
        fontWeight: 400,
        backgroundColor: 'transparent',
        borderColor: '#c2c2c2',
        borderRadius: 0,
        borderWidth: 0,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2
      };
      this.rect = {
        x: 0,
        y: 0,
        rotate: 0,
        width: '100%',
        // accepts percentage as well as fixed numbers
        height: 50,
        backgroundColor: '#fff',
        opacity: 1,
        borderWidth: 0,
        borderRadius: 4,
        borderColor: '#c2c2c2'
      };
    }

    _createClass(Options, [{
      key: "init",
      value: function init() {
        return {
          annotations: {
            position: 'front',
            rectsPosition: 'back',
            yaxis: [this.yAxisAnnotation],
            xaxis: [this.xAxisAnnotation],
            points: [this.pointAnnotation],
            texts: [],
            rects: []
          },
          chart: {
            animations: {
              enabled: true,
              easing: 'easeinout',
              // linear, easeout, easein, easeinout, swing, bounce, elastic
              speed: 800,
              animateGradually: {
                delay: 150,
                enabled: true
              },
              dynamicAnimation: {
                enabled: true,
                speed: 350
              }
            },
            background: 'transparent',
            locales: [en],
            defaultLocale: 'en',
            dropShadow: {
              enabled: false,
              enabledOnSeries: undefined,
              top: 2,
              left: 2,
              blur: 4,
              color: '#000',
              opacity: 0.35
            },
            events: {
              animationEnd: undefined,
              beforeMount: undefined,
              mounted: undefined,
              updated: undefined,
              click: undefined,
              mouseMove: undefined,
              legendClick: undefined,
              markerClick: undefined,
              selection: undefined,
              dataPointSelection: undefined,
              dataPointMouseEnter: undefined,
              dataPointMouseLeave: undefined,
              beforeZoom: undefined,
              zoomed: undefined,
              scrolled: undefined
            },
            foreColor: '#373d3f',
            fontFamily: 'Helvetica, Arial, sans-serif',
            height: 'auto',
            parentHeightOffset: 15,
            redrawOnParentResize: true,
            id: undefined,
            group: undefined,
            offsetX: 0,
            offsetY: 0,
            selection: {
              enabled: false,
              type: 'x',
              // selectedPoints: undefined, // default datapoints that should be selected automatically
              fill: {
                color: '#24292e',
                opacity: 0.1
              },
              stroke: {
                width: 1,
                color: '#24292e',
                opacity: 0.4,
                dashArray: 3
              },
              xaxis: {
                min: undefined,
                max: undefined
              },
              yaxis: {
                min: undefined,
                max: undefined
              }
            },
            sparkline: {
              enabled: false
            },
            brush: {
              enabled: false,
              autoScaleYaxis: true,
              target: undefined
            },
            stacked: false,
            stackType: 'normal',
            toolbar: {
              show: true,
              offsetX: 0,
              offsetY: 0,
              tools: {
                download: true,
                selection: true,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true,
                customIcons: []
              },
              autoSelected: 'zoom' // accepts -> zoom, pan, selection

            },
            type: 'line',
            width: '100%',
            zoom: {
              enabled: true,
              type: 'x',
              autoScaleYaxis: false,
              zoomedArea: {
                fill: {
                  color: '#90CAF9',
                  opacity: 0.4
                },
                stroke: {
                  color: '#0D47A1',
                  opacity: 0.4,
                  width: 1
                }
              }
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '70%',
              // should be in percent 0 - 100
              barHeight: '70%',
              // should be in percent 0 - 100
              distributed: false,
              endingShape: 'flat',
              colors: {
                ranges: [],
                backgroundBarColors: [],
                backgroundBarOpacity: 1
              },
              dataLabels: {
                position: 'top',
                // top, center, bottom
                maxItems: 100,
                hideOverflowingLabels: true,
                orientation: 'horizontal' // TODO: provide stackedLabels for stacked charts which gives additions of values

              }
            },
            bubble: {
              minBubbleRadius: undefined,
              maxBubbleRadius: undefined
            },
            candlestick: {
              colors: {
                upward: '#00B746',
                downward: '#EF403C'
              },
              wick: {
                useFillColor: true
              }
            },
            heatmap: {
              radius: 2,
              enableShades: true,
              shadeIntensity: 0.5,
              reverseNegativeShade: false,
              distributed: false,
              colorScale: {
                inverse: false,
                ranges: [],
                min: undefined,
                max: undefined
              }
            },
            radialBar: {
              inverseOrder: false,
              startAngle: 0,
              endAngle: 360,
              offsetX: 0,
              offsetY: 0,
              hollow: {
                margin: 5,
                size: '50%',
                background: 'transparent',
                image: undefined,
                imageWidth: 150,
                imageHeight: 150,
                imageOffsetX: 0,
                imageOffsetY: 0,
                imageClipped: true,
                position: 'front',
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  color: '#000',
                  opacity: 0.5
                }
              },
              track: {
                show: true,
                startAngle: undefined,
                endAngle: undefined,
                background: '#f2f2f2',
                strokeWidth: '97%',
                opacity: 1,
                margin: 5,
                // margin is in pixels
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  color: '#000',
                  opacity: 0.5
                }
              },
              dataLabels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '16px',
                  fontFamily: undefined,
                  fontWeight: 600,
                  color: undefined,
                  offsetY: 0,
                  formatter: function formatter(val) {
                    return val;
                  }
                },
                value: {
                  show: true,
                  fontSize: '14px',
                  fontFamily: undefined,
                  fontWeight: 400,
                  color: undefined,
                  offsetY: 16,
                  formatter: function formatter(val) {
                    return val + '%';
                  }
                },
                total: {
                  show: false,
                  label: 'Total',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: undefined,
                  color: undefined,
                  formatter: function formatter(w) {
                    return w.globals.seriesTotals.reduce(function (a, b) {
                      return a + b;
                    }, 0) / w.globals.series.length + '%';
                  }
                }
              }
            },
            pie: {
              customScale: 1,
              offsetX: 0,
              offsetY: 0,
              expandOnClick: true,
              dataLabels: {
                // These are the percentage values which are displayed on slice
                offset: 0,
                // offset by which labels will move outside
                minAngleToShowLabel: 10
              },
              donut: {
                size: '65%',
                background: 'transparent',
                labels: {
                  // These are the inner labels appearing inside donut
                  show: false,
                  name: {
                    show: true,
                    fontSize: '16px',
                    fontFamily: undefined,
                    fontWeight: 600,
                    color: undefined,
                    offsetY: -10,
                    formatter: function formatter(val) {
                      return val;
                    }
                  },
                  value: {
                    show: true,
                    fontSize: '20px',
                    fontFamily: undefined,
                    fontWeight: 400,
                    color: undefined,
                    offsetY: 10,
                    formatter: function formatter(val) {
                      return val;
                    }
                  },
                  total: {
                    show: false,
                    showAlways: false,
                    label: 'Total',
                    fontSize: '16px',
                    fontWeight: 400,
                    fontFamily: undefined,
                    color: undefined,
                    formatter: function formatter(w) {
                      return w.globals.seriesTotals.reduce(function (a, b) {
                        return a + b;
                      }, 0);
                    }
                  }
                }
              }
            },
            radar: {
              size: undefined,
              offsetX: 0,
              offsetY: 0,
              polygons: {
                // strokeColor: '#e8e8e8', // should be deprecated in the minor version i.e 3.2
                strokeColors: '#e8e8e8',
                connectorColors: '#e8e8e8',
                fill: {
                  colors: undefined
                }
              }
            }
          },
          colors: undefined,
          dataLabels: {
            enabled: true,
            enabledOnSeries: undefined,
            formatter: function formatter(val) {
              return val !== null ? val : '';
            },
            textAnchor: 'middle',
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: '12px',
              fontFamily: undefined,
              fontWeight: 600,
              colors: undefined
            },
            background: {
              enabled: true,
              foreColor: '#fff',
              borderRadius: 2,
              padding: 4,
              opacity: 0.9,
              borderWidth: 1,
              borderColor: '#fff',
              dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: '#000',
                opacity: 0.45
              }
            },
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: '#000',
              opacity: 0.45
            }
          },
          fill: {
            type: 'solid',
            colors: undefined,
            // array of colors
            opacity: 0.85,
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: []
            },
            image: {
              src: [],
              width: undefined,
              // optional
              height: undefined // optional

            },
            pattern: {
              style: 'squares',
              // String | Array of Strings
              width: 6,
              height: 6,
              strokeWidth: 2
            }
          },
          grid: {
            show: true,
            borderColor: '#e0e0e0',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            },
            row: {
              colors: undefined,
              // takes as array which will be repeated on rows
              opacity: 0.5
            },
            column: {
              colors: undefined,
              // takes an array which will be repeated on columns
              opacity: 0.5
            },
            padding: {
              top: 0,
              right: 10,
              bottom: 0,
              left: 12
            }
          },
          labels: [],
          legend: {
            show: true,
            showForSingleSeries: false,
            showForNullSeries: true,
            showForZeroSeries: true,
            floating: false,
            position: 'bottom',
            // whether to position legends in 1 of 4
            // direction - top, bottom, left, right
            horizontalAlign: 'center',
            // when position top/bottom, you can specify whether to align legends left, right or center
            inverseOrder: false,
            fontSize: '12px',
            fontFamily: undefined,
            fontWeight: 400,
            width: undefined,
            height: undefined,
            formatter: undefined,
            tooltipHoverFormatter: undefined,
            offsetX: -20,
            offsetY: 0,
            labels: {
              colors: undefined,
              useSeriesColors: false
            },
            markers: {
              width: 12,
              height: 12,
              strokeWidth: 0,
              fillColors: undefined,
              strokeColor: '#fff',
              radius: 12,
              customHTML: undefined,
              offsetX: 0,
              offsetY: 0,
              onClick: undefined
            },
            itemMargin: {
              horizontal: 5,
              vertical: 0
            },
            onItemClick: {
              toggleDataSeries: true
            },
            onItemHover: {
              highlightDataSeries: true
            }
          },
          markers: {
            discrete: [],
            size: 0,
            colors: undefined,
            //strokeColor: '#fff', // TODO: deprecate in major version 4.0
            strokeColors: '#fff',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            shape: 'circle',
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
              size: undefined,
              sizeOffset: 3
            }
          },
          noData: {
            text: undefined,
            align: 'center',
            verticalAlign: 'middle',
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: '14px',
              fontFamily: undefined
            }
          },
          responsive: [],
          // breakpoints should follow ascending order 400, then 700, then 1000
          series: undefined,
          states: {
            normal: {
              filter: {
                type: 'none',
                value: 0
              }
            },
            hover: {
              filter: {
                type: 'lighten',
                value: 0.15
              }
            },
            active: {
              allowMultipleDataPointsSelection: false,
              filter: {
                type: 'darken',
                value: 0.65
              }
            }
          },
          title: {
            text: undefined,
            align: 'left',
            margin: 5,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: '14px',
              fontWeight: 900,
              fontFamily: undefined,
              color: undefined
            }
          },
          subtitle: {
            text: undefined,
            align: 'left',
            margin: 5,
            offsetX: 0,
            offsetY: 30,
            floating: false,
            style: {
              fontSize: '12px',
              fontWeight: 400,
              fontFamily: undefined,
              color: undefined
            }
          },
          stroke: {
            show: true,
            curve: 'smooth',
            // "smooth" / "straight" / "stepline"
            lineCap: 'butt',
            // round, butt , square
            width: 2,
            colors: undefined,
            // array of colors
            dashArray: 0 // single value or array of values

          },
          tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            // when disabled, the tooltip will show on top of the series instead of mouse position
            intersect: false,
            // when enabled, tooltip will only show when user directly hovers over point
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: 'light',
            style: {
              fontSize: '12px',
              fontFamily: undefined
            },
            onDatasetHover: {
              highlightDataSeries: false
            },
            x: {
              // x value
              show: true,
              format: 'dd MMM',
              // dd/MM, dd MMM yy, dd MMM yyyy
              formatter: undefined // a custom user supplied formatter function

            },
            y: {
              formatter: undefined,
              title: {
                formatter: function formatter(seriesName) {
                  return seriesName;
                }
              }
            },
            z: {
              formatter: undefined,
              title: 'Size: '
            },
            marker: {
              show: true,
              fillColors: undefined
            },
            items: {
              display: 'flex'
            },
            fixed: {
              enabled: false,
              position: 'topRight',
              // topRight, topLeft, bottomRight, bottomLeft
              offsetX: 0,
              offsetY: 0
            }
          },
          xaxis: {
            type: 'category',
            categories: [],
            convertedCatToNumeric: false,
            // internal property which should not be altered outside
            offsetX: 0,
            offsetY: 0,
            labels: {
              show: true,
              rotate: -45,
              rotateAlways: false,
              hideOverlappingLabels: true,
              trim: false,
              minHeight: undefined,
              maxHeight: 120,
              showDuplicates: true,
              style: {
                colors: [],
                fontSize: '12px',
                fontWeight: 400,
                fontFamily: undefined,
                cssClass: ''
              },
              offsetX: 0,
              offsetY: 0,
              format: undefined,
              formatter: undefined,
              // custom formatter function which will override format
              datetimeUTC: true,
              datetimeFormatter: {
                year: 'yyyy',
                month: "MMM 'yy",
                day: 'dd MMM',
                hour: 'HH:mm',
                minute: 'HH:mm:ss'
              }
            },
            axisBorder: {
              show: true,
              color: '#e0e0e0',
              width: '100%',
              height: 1,
              offsetX: 0,
              offsetY: 0
            },
            axisTicks: {
              show: true,
              color: '#e0e0e0',
              height: 6,
              offsetX: 0,
              offsetY: 0
            },
            tickAmount: undefined,
            tickPlacement: 'on',
            min: undefined,
            max: undefined,
            range: undefined,
            floating: false,
            position: 'bottom',
            title: {
              text: undefined,
              offsetX: 0,
              offsetY: 0,
              style: {
                color: undefined,
                fontSize: '12px',
                fontWeight: 900,
                fontFamily: undefined,
                cssClass: ''
              }
            },
            crosshairs: {
              show: true,
              width: 1,
              // tickWidth/barWidth or an integer
              position: 'back',
              opacity: 0.9,
              stroke: {
                color: '#b6b6b6',
                width: 1,
                dashArray: 3
              },
              fill: {
                type: 'solid',
                // solid, gradient
                color: '#B1B9C4',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5
                }
              },
              dropShadow: {
                enabled: false,
                left: 0,
                top: 0,
                blur: 1,
                opacity: 0.4
              }
            },
            tooltip: {
              enabled: true,
              offsetY: 0,
              formatter: undefined,
              style: {
                fontSize: '12px',
                fontFamily: undefined
              }
            }
          },
          yaxis: this.yAxis,
          theme: {
            mode: 'light',
            palette: 'palette1',
            // If defined, it will overwrite globals.colors variable
            monochrome: {
              // monochrome allows you to select just 1 color and fill out the rest with light/dark shade (intensity can be selected)
              enabled: false,
              color: '#008FFB',
              shadeTo: 'light',
              shadeIntensity: 0.65
            }
          }
        };
      }
    }]);

    return Options;
  }();

  /**
   * ApexCharts Annotations Class for drawing lines/rects on both xaxis and yaxis.
   *
   * @module Annotations
   **/

  var Annotations =
  /*#__PURE__*/
  function () {
    function Annotations(ctx) {
      _classCallCheck(this, Annotations);

      this.ctx = ctx;
      this.w = ctx.w;
      this.graphics = new Graphics(this.ctx);

      if (this.w.globals.isBarHorizontal) {
        this.invertAxis = true;
      }

      this.helpers = new Helpers(this);
      this.xAxisAnnotations = new XAnnotations(this);
      this.yAxisAnnotations = new YAnnotations(this);
      this.pointsAnnotations = new PointAnnotations(this);

      if (this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed) {
        this.inversedReversedAxis = true;
      }

      this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
    }

    _createClass(Annotations, [{
      key: "drawAnnotations",
      value: function drawAnnotations() {
        var w = this.w;

        if (w.globals.axisCharts) {
          var yAnnotations = this.yAxisAnnotations.drawYAxisAnnotations();
          var xAnnotations = this.xAxisAnnotations.drawXAxisAnnotations();
          var pointAnnotations = this.pointsAnnotations.drawPointAnnotations();
          var initialAnim = w.config.chart.animations.enabled;
          var annoArray = [yAnnotations, xAnnotations, pointAnnotations];
          var annoElArray = [xAnnotations.node, yAnnotations.node, pointAnnotations.node];

          for (var i = 0; i < 3; i++) {
            w.globals.dom.elGraphical.add(annoArray[i]);

            if (initialAnim && !w.globals.resized && !w.globals.dataChanged) {
              // fixes apexcharts/apexcharts.js#685
              if (w.config.chart.type !== 'scatter' && w.config.chart.type !== 'bubble' && w.globals.dataPoints > 1) {
                annoElArray[i].classList.add('apexcharts-element-hidden');
              }
            }

            w.globals.delayedElements.push({
              el: annoElArray[i],
              index: 0
            });
          } // background sizes needs to be calculated after text is drawn, so calling them last


          this.helpers.annotationsBackground();
        }
      }
    }, {
      key: "drawRects",
      value: function drawRects() {
        var _this = this;

        var w = this.w;
        w.config.annotations.rects.map(function (r) {
          _this.addRect(r, false);
        });
      }
    }, {
      key: "drawTexts",
      value: function drawTexts() {
        var _this2 = this;

        var w = this.w;
        w.config.annotations.texts.map(function (t) {
          _this2.addText(t);
        });
      }
    }, {
      key: "addXaxisAnnotation",
      value: function addXaxisAnnotation(anno, parent, index) {
        this.xAxisAnnotations.addXaxisAnnotation(anno, parent, index);
      }
    }, {
      key: "addYaxisAnnotation",
      value: function addYaxisAnnotation(anno, parent, index) {
        this.yAxisAnnotations.addYaxisAnnotation(anno, parent, index);
      }
    }, {
      key: "addPointAnnotation",
      value: function addPointAnnotation(anno, parent, index) {
        this.pointsAnnotations.addPointAnnotation(anno, parent, index);
      }
    }, {
      key: "clearAnnotations",
      value: function clearAnnotations(ctx) {
        var w = ctx.w;
        var annos = w.globals.dom.baseEl.querySelectorAll('.apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations'); // annotations added externally should be cleared out too

        w.globals.memory.methodsToExec.map(function (m, i) {
          if (m.label === 'addText' || m.label === 'addAnnotation') {
            w.globals.memory.methodsToExec.splice(i, 1);
          }
        });
        annos = Utils.listToArray(annos); // delete the DOM elements

        Array.prototype.forEach.call(annos, function (a) {
          while (a.firstChild) {
            a.removeChild(a.firstChild);
          }
        });
      }
    }, {
      key: "removeAnnotation",
      value: function removeAnnotation(ctx, id) {
        var w = ctx.w;
        var annos = w.globals.dom.baseEl.querySelectorAll(".".concat(id));

        if (annos) {
          w.globals.memory.methodsToExec.map(function (m, i) {
            if (m.id === id) {
              w.globals.memory.methodsToExec.splice(i, 1);
            }
          });
          Array.prototype.forEach.call(annos, function (a) {
            a.parentElement.removeChild(a);
          });
        }
      }
    }, {
      key: "addText",
      value: function addText(params, pushToMemory, context) {
        var x = params.x,
            y = params.y,
            text = params.text,
            textAnchor = params.textAnchor,
            _params$appendTo = params.appendTo,
            appendTo = _params$appendTo === void 0 ? '.apexcharts-svg' : _params$appendTo,
            foreColor = params.foreColor,
            fontSize = params.fontSize,
            fontFamily = params.fontFamily,
            fontWeight = params.fontWeight,
            cssClass = params.cssClass,
            backgroundColor = params.backgroundColor,
            borderWidth = params.borderWidth,
            strokeDashArray = params.strokeDashArray,
            borderRadius = params.borderRadius,
            borderColor = params.borderColor,
            _params$paddingLeft = params.paddingLeft,
            paddingLeft = _params$paddingLeft === void 0 ? 4 : _params$paddingLeft,
            _params$paddingRight = params.paddingRight,
            paddingRight = _params$paddingRight === void 0 ? 4 : _params$paddingRight,
            _params$paddingBottom = params.paddingBottom,
            paddingBottom = _params$paddingBottom === void 0 ? 2 : _params$paddingBottom,
            _params$paddingTop = params.paddingTop,
            paddingTop = _params$paddingTop === void 0 ? 2 : _params$paddingTop;
        var me = this;

        if (context) {
          me = context;
        }

        var w = me.w;
        var parentNode = w.globals.dom.baseEl.querySelector(appendTo);
        var elText = this.graphics.drawText({
          x: x,
          y: y,
          text: text,
          textAnchor: textAnchor || 'start',
          fontSize: fontSize || '12px',
          fontWeight: fontWeight || 'regular',
          fontFamily: fontFamily || w.config.chart.fontFamily,
          foreColor: foreColor || w.config.chart.foreColor,
          cssClass: 'apexcharts-text ' + cssClass ? cssClass : ''
        });
        parentNode.appendChild(elText.node);
        var textRect = elText.bbox();

        if (text) {
          var elRect = this.graphics.drawRect(textRect.x - paddingLeft, textRect.y - paddingTop, textRect.width + paddingLeft + paddingRight, textRect.height + paddingBottom + paddingTop, borderRadius, backgroundColor ? backgroundColor : 'transparent', 1, borderWidth, borderColor, strokeDashArray);
          parentNode.insertBefore(elRect.node, elText.node);
        }

        if (pushToMemory) {
          w.globals.memory.methodsToExec.push({
            context: me,
            method: me.addText,
            label: 'addText',
            params: params
          });
        }

        return context;
      }
    }, {
      key: "addRect",
      value: function addRect(params) {
        var pushToMemory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        var opts = {
          x: params.x || 0,
          y: params.y || 0,
          width: params.width || '100%',
          height: params.height || 50,
          rotate: params.rotate || 0,
          backgroundColor: params.backgroundColor || '#fff',
          opacity: params.opacity || 1,
          borderWidth: params.borderWidth || 0,
          borderRadius: params.borderRadius || 4,
          borderColor: params.borderColor || '#c2c2c2'
        };
        var me = this;

        if (context) {
          me = context;
        }

        var w = me.w;

        if (String(opts.width).indexOf('%') > -1) {
          opts.width = parseInt(opts.width, 10) * parseInt(w.globals.svgWidth, 10) / 100;
        }

        var elRect = me.graphics.drawRect(opts.x, opts.y, opts.width, opts.height, opts.borderRadius, opts.backgroundColor, opts.opacity, opts.borderWidth, opts.borderColor);
        w.globals.dom.elRects.add(elRect);

        if (opts.rotate) {
          var rotateXY = me.graphics.rotateAroundCenter(elRect.node);
          elRect.attr({
            transform: "translate(".concat(rotateXY.x, " ").concat(rotateXY.y, ") rotate(").concat(opts.rotate, ")")
          });
        }

        if (pushToMemory) {
          w.globals.memory.methodsToExec.push({
            context: me,
            method: me.addRect,
            label: 'addRect',
            params: params
          });
        }

        return context;
      }
    }, {
      key: "addImage",
      value: function addImage(params, pushToMemory, context) {
        var path = params.path,
            _params$x = params.x,
            x = _params$x === void 0 ? 0 : _params$x,
            _params$y = params.y,
            y = _params$y === void 0 ? 0 : _params$y,
            _params$width = params.width,
            width = _params$width === void 0 ? 20 : _params$width,
            _params$height = params.height,
            height = _params$height === void 0 ? 20 : _params$height,
            _params$appendTo2 = params.appendTo,
            appendTo = _params$appendTo2 === void 0 ? context.w.globals.dom.Paper.node : _params$appendTo2;
        var me = context;
        var w = me.w;
        var img = context.w.globals.dom.Paper.image(path);
        img.size(width, height).move(x, y);
        appendTo.appendChild(img.node);

        if (pushToMemory) {
          w.globals.memory.methodsToExec.push({
            context: me,
            method: me.addImage,
            label: 'addImage',
            params: params
          });
        }

        return context;
      } // The addXaxisAnnotation method requires a parent class, and user calling this method externally on the chart instance may not specify parent, hence a different method

    }, {
      key: "addXaxisAnnotationExternal",
      value: function addXaxisAnnotationExternal(params, pushToMemory, context) {
        this.addAnnotationExternal({
          params: params,
          pushToMemory: pushToMemory,
          context: context,
          type: 'xaxis',
          contextMethod: context.addXaxisAnnotation
        });
        return context;
      }
    }, {
      key: "addYaxisAnnotationExternal",
      value: function addYaxisAnnotationExternal(params, pushToMemory, context) {
        this.addAnnotationExternal({
          params: params,
          pushToMemory: pushToMemory,
          context: context,
          type: 'yaxis',
          contextMethod: context.addYaxisAnnotation
        });
        return context;
      }
    }, {
      key: "addPointAnnotationExternal",
      value: function addPointAnnotationExternal(params, pushToMemory, context) {
        if (typeof this.invertAxis === 'undefined') {
          this.invertAxis = context.w.globals.isBarHorizontal;
        }

        this.addAnnotationExternal({
          params: params,
          pushToMemory: pushToMemory,
          context: context,
          type: 'point',
          contextMethod: context.addPointAnnotation
        });
        return context;
      }
    }, {
      key: "addAnnotationExternal",
      value: function addAnnotationExternal(_ref) {
        var params = _ref.params,
            pushToMemory = _ref.pushToMemory,
            context = _ref.context,
            type = _ref.type,
            contextMethod = _ref.contextMethod;
        var me = context;
        var w = me.w;
        var parent = w.globals.dom.baseEl.querySelector(".apexcharts-".concat(type, "-annotations"));
        var index = parent.childNodes.length + 1;
        var options = new Options();
        var axesAnno = Object.assign({}, type === 'xaxis' ? options.xAxisAnnotation : type === 'yaxis' ? options.yAxisAnnotation : options.pointAnnotation);
        var anno = Utils.extend(axesAnno, params);

        switch (type) {
          case 'xaxis':
            this.addXaxisAnnotation(anno, parent, index);
            break;

          case 'yaxis':
            this.addYaxisAnnotation(anno, parent, index);
            break;

          case 'point':
            this.addPointAnnotation(anno, parent, index);
            break;
        } // add background


        var axesAnnoLabel = w.globals.dom.baseEl.querySelector(".apexcharts-".concat(type, "-annotations .apexcharts-").concat(type, "-annotation-label[rel='").concat(index, "']"));
        var elRect = this.helpers.addBackgroundToAnno(axesAnnoLabel, anno);

        if (elRect) {
          parent.insertBefore(elRect.node, axesAnnoLabel);
        }

        if (pushToMemory) {
          w.globals.memory.methodsToExec.push({
            context: me,
            id: anno.id ? anno.id : Utils.randomId(),
            method: contextMethod,
            label: 'addAnnotation',
            params: params
          });
        }

        return context;
      }
    }]);

    return Annotations;
  }();

  /**
   * DateTime Class to manipulate datetime values.
   *
   * @module DateTime
   **/

  var DateTime =
  /*#__PURE__*/
  function () {
    function DateTime(ctx) {
      _classCallCheck(this, DateTime);

      this.ctx = ctx;
      this.w = ctx.w;
      this.months31 = [1, 3, 5, 7, 8, 10, 12];
      this.months30 = [2, 4, 6, 9, 11];
      this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    }

    _createClass(DateTime, [{
      key: "isValidDate",
      value: function isValidDate(date) {
        return !isNaN(this.parseDate(date));
      }
    }, {
      key: "getTimeStamp",
      value: function getTimeStamp(dateStr) {
        if (!Date.parse(dateStr)) {
          return dateStr;
        }

        var utc = this.w.config.xaxis.labels.datetimeUTC;
        return !utc ? new Date(dateStr).getTime() : new Date(new Date(dateStr).toISOString().substr(0, 25)).getTime();
      }
    }, {
      key: "getDate",
      value: function getDate(timestamp) {
        var utc = this.w.config.xaxis.labels.datetimeUTC;
        return utc ? new Date(new Date(timestamp).toUTCString()) : new Date(timestamp);
      }
    }, {
      key: "parseDate",
      value: function parseDate(dateStr) {
        var parsed = Date.parse(dateStr);

        if (!isNaN(parsed)) {
          return this.getTimeStamp(dateStr);
        }

        var output = Date.parse(dateStr.replace(/-/g, '/').replace(/[a-z]+/gi, ' '));
        output = this.getTimeStamp(output);
        return output;
      } // http://stackoverflow.com/questions/14638018/current-time-formatting-with-javascript#answer-14638191

    }, {
      key: "formatDate",
      value: function formatDate(date, format) {
        var locale = this.w.globals.locale;
        var utc = this.w.config.xaxis.labels.datetimeUTC;
        var MMMM = ['\x00'].concat(_toConsumableArray(locale.months));
        var MMM = ['\x01'].concat(_toConsumableArray(locale.shortMonths));
        var dddd = ['\x02'].concat(_toConsumableArray(locale.days));
        var ddd = ['\x03'].concat(_toConsumableArray(locale.shortDays));

        function ii(i, len) {
          var s = i + '';
          len = len || 2;

          while (s.length < len) {
            s = '0' + s;
          }

          return s;
        }

        var y = utc ? date.getUTCFullYear() : date.getFullYear();
        format = format.replace(/(^|[^\\])yyyy+/g, '$1' + y);
        format = format.replace(/(^|[^\\])yy/g, '$1' + y.toString().substr(2, 2));
        format = format.replace(/(^|[^\\])y/g, '$1' + y);
        var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
        format = format.replace(/(^|[^\\])MMMM+/g, '$1' + MMMM[0]);
        format = format.replace(/(^|[^\\])MMM/g, '$1' + MMM[0]);
        format = format.replace(/(^|[^\\])MM/g, '$1' + ii(M));
        format = format.replace(/(^|[^\\])M/g, '$1' + M);
        var d = utc ? date.getUTCDate() : date.getDate();
        format = format.replace(/(^|[^\\])dddd+/g, '$1' + dddd[0]);
        format = format.replace(/(^|[^\\])ddd/g, '$1' + ddd[0]);
        format = format.replace(/(^|[^\\])dd/g, '$1' + ii(d));
        format = format.replace(/(^|[^\\])d/g, '$1' + d);
        var H = utc ? date.getUTCHours() : date.getHours();
        format = format.replace(/(^|[^\\])HH+/g, '$1' + ii(H));
        format = format.replace(/(^|[^\\])H/g, '$1' + H);
        var h = H > 12 ? H - 12 : H === 0 ? 12 : H;
        format = format.replace(/(^|[^\\])hh+/g, '$1' + ii(h));
        format = format.replace(/(^|[^\\])h/g, '$1' + h);
        var m = utc ? date.getUTCMinutes() : date.getMinutes();
        format = format.replace(/(^|[^\\])mm+/g, '$1' + ii(m));
        format = format.replace(/(^|[^\\])m/g, '$1' + m);
        var s = utc ? date.getUTCSeconds() : date.getSeconds();
        format = format.replace(/(^|[^\\])ss+/g, '$1' + ii(s));
        format = format.replace(/(^|[^\\])s/g, '$1' + s);
        var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
        format = format.replace(/(^|[^\\])fff+/g, '$1' + ii(f, 3));
        f = Math.round(f / 10);
        format = format.replace(/(^|[^\\])ff/g, '$1' + ii(f));
        f = Math.round(f / 10);
        format = format.replace(/(^|[^\\])f/g, '$1' + f);
        var T = H < 12 ? 'AM' : 'PM';
        format = format.replace(/(^|[^\\])TT+/g, '$1' + T);
        format = format.replace(/(^|[^\\])T/g, '$1' + T.charAt(0));
        var t = T.toLowerCase();
        format = format.replace(/(^|[^\\])tt+/g, '$1' + t);
        format = format.replace(/(^|[^\\])t/g, '$1' + t.charAt(0));
        var tz = -date.getTimezoneOffset();
        var K = utc || !tz ? 'Z' : tz > 0 ? '+' : '-';

        if (!utc) {
          tz = Math.abs(tz);
          var tzHrs = Math.floor(tz / 60);
          var tzMin = tz % 60;
          K += ii(tzHrs) + ':' + ii(tzMin);
        }

        format = format.replace(/(^|[^\\])K/g, '$1' + K);
        var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
        format = format.replace(new RegExp(dddd[0], 'g'), dddd[day]);
        format = format.replace(new RegExp(ddd[0], 'g'), ddd[day]);
        format = format.replace(new RegExp(MMMM[0], 'g'), MMMM[M]);
        format = format.replace(new RegExp(MMM[0], 'g'), MMM[M]);
        format = format.replace(/\\(.)/g, '$1');
        return format;
      }
    }, {
      key: "getTimeUnitsfromTimestamp",
      value: function getTimeUnitsfromTimestamp(minX, maxX, utc) {
        var w = this.w;

        if (w.config.xaxis.min !== undefined) {
          minX = w.config.xaxis.min;
        }

        if (w.config.xaxis.max !== undefined) {
          maxX = w.config.xaxis.max;
        }

        var tsMin = this.getDate(minX);
        var tsMax = this.getDate(maxX);
        var minD = this.formatDate(tsMin, 'yyyy MM dd HH mm').split(' ');
        var maxD = this.formatDate(tsMax, 'yyyy MM dd HH mm').split(' ');
        return {
          minMinute: parseInt(minD[4], 10),
          maxMinute: parseInt(maxD[4], 10),
          minHour: parseInt(minD[3], 10),
          maxHour: parseInt(maxD[3], 10),
          minDate: parseInt(minD[2], 10),
          maxDate: parseInt(maxD[2], 10),
          minMonth: parseInt(minD[1], 10) - 1,
          maxMonth: parseInt(maxD[1], 10) - 1,
          minYear: parseInt(minD[0], 10),
          maxYear: parseInt(maxD[0], 10)
        };
      }
    }, {
      key: "isLeapYear",
      value: function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
    }, {
      key: "calculcateLastDaysOfMonth",
      value: function calculcateLastDaysOfMonth(month, year, subtract) {
        var days = this.determineDaysOfMonths(month, year); // whatever days we get, subtract the number of days asked

        return days - subtract;
      }
    }, {
      key: "determineDaysOfYear",
      value: function determineDaysOfYear(year) {
        var days = 365;

        if (this.isLeapYear(year)) {
          days = 366;
        }

        return days;
      }
    }, {
      key: "determineRemainingDaysOfYear",
      value: function determineRemainingDaysOfYear(year, month, date) {
        var dayOfYear = this.daysCntOfYear[month] + date;
        if (month > 1 && this.isLeapYear()) dayOfYear++;
        return dayOfYear;
      }
    }, {
      key: "determineDaysOfMonths",
      value: function determineDaysOfMonths(month, year) {
        var days = 30;
        month = Utils.monthMod(month);

        switch (true) {
          case this.months30.indexOf(month) > -1:
            if (month === 2) {
              if (this.isLeapYear(year)) {
                days = 29;
              } else {
                days = 28;
              }
            }

            break;

          case this.months31.indexOf(month) > -1:
            days = 31;
            break;

          default:
            days = 31;
            break;
        }

        return days;
      }
    }]);

    return DateTime;
  }();

  /**
   * ApexCharts Default Class for setting default options for all chart types.
   *
   * @module Defaults
   **/

  var Defaults =
  /*#__PURE__*/
  function () {
    function Defaults(opts) {
      _classCallCheck(this, Defaults);

      this.opts = opts;
    }

    _createClass(Defaults, [{
      key: "line",
      value: function line() {
        return {
          chart: {
            animations: {
              easing: 'swing'
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 5,
            curve: 'straight'
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            crosshairs: {
              width: 1
            }
          }
        };
      }
    }, {
      key: "sparkline",
      value: function sparkline(defaults) {
        this.opts.yaxis[0].show = false;
        this.opts.yaxis[0].title.text = '';
        this.opts.yaxis[0].axisBorder.show = false;
        this.opts.yaxis[0].axisTicks.show = false;
        this.opts.yaxis[0].floating = true;
        var ret = {
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          legend: {
            show: false
          },
          xaxis: {
            labels: {
              show: false
            },
            tooltip: {
              enabled: false
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          chart: {
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          }
        };
        return Utils.extend(defaults, ret);
      }
    }, {
      key: "bar",
      value: function bar() {
        return {
          chart: {
            stacked: false,
            animations: {
              easing: 'swing'
            }
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'center'
              }
            }
          },
          dataLabels: {
            style: {
              colors: ['#fff']
            },
            background: {
              enabled: false
            }
          },
          stroke: {
            width: 0
          },
          fill: {
            opacity: 0.85
          },
          legend: {
            markers: {
              shape: 'square',
              radius: 2,
              size: 8
            }
          },
          tooltip: {
            shared: false
          },
          xaxis: {
            tooltip: {
              enabled: false
            },
            tickPlacement: 'between',
            crosshairs: {
              width: 'barWidth',
              position: 'back',
              fill: {
                type: 'gradient'
              },
              dropShadow: {
                enabled: false
              },
              stroke: {
                width: 0
              }
            }
          }
        };
      }
    }, {
      key: "candlestick",
      value: function candlestick() {
        return {
          stroke: {
            width: 1,
            colors: ['#333']
          },
          dataLabels: {
            enabled: false
          },
          tooltip: {
            shared: true,
            custom: function custom(_ref) {
              var seriesIndex = _ref.seriesIndex,
                  dataPointIndex = _ref.dataPointIndex,
                  w = _ref.w;
              var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
              var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
              var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
              var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
              return '<div class="apexcharts-tooltip-candlestick">' + '<div>Open: <span class="value">' + o + '</span></div>' + '<div>High: <span class="value">' + h + '</span></div>' + '<div>Low: <span class="value">' + l + '</span></div>' + '<div>Close: <span class="value">' + c + '</span></div>' + '</div>';
            }
          },
          states: {
            active: {
              filter: {
                type: 'none'
              }
            }
          },
          xaxis: {
            crosshairs: {
              width: 1
            }
          }
        };
      }
    }, {
      key: "rangeBar",
      value: function rangeBar() {
        return {
          stroke: {
            width: 0
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'center'
              }
            }
          },
          dataLabels: {
            enabled: false,
            formatter: function formatter(val, _ref2) {
              var ctx = _ref2.ctx,
                  seriesIndex = _ref2.seriesIndex,
                  dataPointIndex = _ref2.dataPointIndex,
                  w = _ref2.w;
              var start = w.globals.seriesRangeStart[seriesIndex][dataPointIndex];
              var end = w.globals.seriesRangeEnd[seriesIndex][dataPointIndex];
              return end - start;
            },
            background: {
              enabled: false
            },
            style: {
              colors: ['#fff']
            }
          },
          tooltip: {
            shared: false,
            followCursor: true,
            custom: function custom(_ref3) {
              var ctx = _ref3.ctx,
                  seriesIndex = _ref3.seriesIndex,
                  dataPointIndex = _ref3.dataPointIndex,
                  y1 = _ref3.y1,
                  y2 = _ref3.y2,
                  w = _ref3.w;
              var start = w.globals.seriesRangeStart[seriesIndex][dataPointIndex];
              var end = w.globals.seriesRangeEnd[seriesIndex][dataPointIndex];
              var ylabel = w.globals.labels[dataPointIndex];
              var seriesName = w.config.series[seriesIndex].name;
              var yLbFormatter = w.config.tooltip.y.formatter;
              var yLbTitleFormatter = w.config.tooltip.y.title.formatter;

              if (typeof yLbTitleFormatter === 'function') {
                seriesName = yLbTitleFormatter(seriesName);
              }

              if (y1 && y2) {
                start = y1;
                end = y2;

                if (w.config.series[seriesIndex].data[dataPointIndex].x) {
                  ylabel = w.config.series[seriesIndex].data[dataPointIndex].x + ':';
                }

                if (typeof yLbFormatter === 'function') {
                  ylabel = yLbFormatter(ylabel);
                }
              }

              var startVal = '';
              var endVal = '';
              var color = w.globals.colors[seriesIndex];

              if (w.config.tooltip.x.formatter === undefined) {
                if (w.config.xaxis.type === 'datetime') {
                  var datetimeObj = new DateTime(ctx);
                  startVal = datetimeObj.formatDate(datetimeObj.getDate(start), w.config.tooltip.x.format);
                  endVal = datetimeObj.formatDate(datetimeObj.getDate(end), w.config.tooltip.x.format);
                } else {
                  startVal = start;
                  endVal = end;
                }
              } else {
                startVal = w.config.tooltip.x.formatter(start);
                endVal = w.config.tooltip.x.formatter(end);
              }

              return '<div class="apexcharts-tooltip-rangebar">' + '<div> <span class="series-name" style="color: ' + color + '">' + (seriesName ? seriesName : '') + '</span></div>' + '<div> <span class="category">' + ylabel + ' </span> <span class="value start-value">' + startVal + '</span> <span class="separator">-</span> <span class="value end-value">' + endVal + '</span></div>' + '</div>';
            }
          },
          xaxis: {
            tickPlacement: 'between',
            tooltip: {
              enabled: false
            },
            crosshairs: {
              stroke: {
                width: 0
              }
            }
          }
        };
      }
    }, {
      key: "area",
      value: function area() {
        return {
          stroke: {
            width: 4
          },
          fill: {
            type: 'gradient',
            gradient: {
              inverseColors: false,
              shade: 'light',
              type: 'vertical',
              opacityFrom: 0.65,
              opacityTo: 0.5,
              stops: [0, 100, 100]
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          tooltip: {
            followCursor: false
          }
        };
      }
    }, {
      key: "brush",
      value: function brush(defaults) {
        var ret = {
          chart: {
            toolbar: {
              autoSelected: 'selection',
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1
          },
          tooltip: {
            enabled: false
          },
          xaxis: {
            tooltip: {
              enabled: false
            }
          }
        };
        return Utils.extend(defaults, ret);
      }
    }, {
      key: "stacked100",
      value: function stacked100(opts) {
        opts.dataLabels = opts.dataLabels || {};
        opts.dataLabels.formatter = opts.dataLabels.formatter || undefined;
        var existingDataLabelFormatter = opts.dataLabels.formatter;
        opts.yaxis.forEach(function (yaxe, index) {
          opts.yaxis[index].min = 0;
          opts.yaxis[index].max = 100;
        });
        var isBar = opts.chart.type === 'bar';

        if (isBar) {
          opts.dataLabels.formatter = existingDataLabelFormatter || function (val) {
            if (typeof val === 'number') {
              return val ? val.toFixed(0) + '%' : val;
            }

            return val;
          };
        }

        return opts;
      } // This function removes the left and right spacing in chart for line/area/scatter if xaxis type = category for those charts by converting xaxis = numeric. Numeric/Datetime xaxis prevents the unnecessary spacing in the left/right of the chart area

    }, {
      key: "convertCatToNumeric",
      value: function convertCatToNumeric(opts) {
        opts.xaxis.convertedCatToNumeric = true;
        return opts;
      }
    }, {
      key: "convertCatToNumericXaxis",
      value: function convertCatToNumericXaxis(opts, ctx, cats) {
        opts.xaxis.type = 'numeric';
        opts.xaxis.labels = opts.xaxis.labels || {};

        opts.xaxis.labels.formatter = opts.xaxis.labels.formatter || function (val) {
          return Utils.isNumber(val) ? Math.floor(val) : val;
        };

        var defaultFormatter = opts.xaxis.labels.formatter;
        var labels = opts.xaxis.categories && opts.xaxis.categories.length ? opts.xaxis.categories : opts.labels;

        if (cats && cats.length) {
          labels = cats.map(function (c) {
            return c.toString();
          });
        }

        if (labels && labels.length) {
          opts.xaxis.labels.formatter = function (val) {
            return Utils.isNumber(val) ? defaultFormatter(labels[Math.floor(val) - 1]) : defaultFormatter(val);
          };
        }

        opts.xaxis.categories = [];
        opts.labels = [];
        opts.xaxis.tickAmount = opts.xaxis.tickAmount || 'dataPoints';
        return opts;
      }
    }, {
      key: "bubble",
      value: function bubble() {
        return {
          dataLabels: {
            style: {
              colors: ['#fff']
            }
          },
          tooltip: {
            shared: false,
            intersect: true
          },
          xaxis: {
            crosshairs: {
              width: 0
            }
          },
          fill: {
            type: 'solid',
            gradient: {
              shade: 'light',
              inverse: true,
              shadeIntensity: 0.55,
              opacityFrom: 0.4,
              opacityTo: 0.8
            }
          }
        };
      }
    }, {
      key: "scatter",
      value: function scatter() {
        return {
          dataLabels: {
            enabled: false
          },
          tooltip: {
            shared: false,
            intersect: true
          },
          markers: {
            size: 6,
            strokeWidth: 1,
            hover: {
              sizeOffset: 2
            }
          }
        };
      }
    }, {
      key: "heatmap",
      value: function heatmap() {
        return {
          chart: {
            stacked: false
          },
          fill: {
            opacity: 1
          },
          dataLabels: {
            style: {
              colors: ['#fff']
            }
          },
          stroke: {
            colors: ['#fff']
          },
          tooltip: {
            followCursor: true,
            marker: {
              show: false
            },
            x: {
              show: false
            }
          },
          legend: {
            position: 'top',
            markers: {
              shape: 'square',
              size: 10,
              offsetY: 2
            }
          },
          grid: {
            padding: {
              right: 20
            }
          }
        };
      }
    }, {
      key: "pie",
      value: function pie() {
        return {
          chart: {
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: false
                }
              }
            }
          },
          dataLabels: {
            formatter: function formatter(val) {
              return val.toFixed(1) + '%';
            },
            style: {
              colors: ['#fff']
            },
            dropShadow: {
              enabled: true
            }
          },
          stroke: {
            colors: ['#fff']
          },
          fill: {
            opacity: 1,
            gradient: {
              shade: 'dark',
              shadeIntensity: 0.35,
              inverseColors: false,
              stops: [0, 100, 100]
            }
          },
          tooltip: {
            theme: 'dark',
            fillSeriesColor: true
          },
          legend: {
            position: 'right'
          }
        };
      }
    }, {
      key: "donut",
      value: function donut() {
        return {
          chart: {
            toolbar: {
              show: false
            }
          },
          dataLabels: {
            formatter: function formatter(val) {
              return val.toFixed(1) + '%';
            },
            style: {
              colors: ['#fff']
            },
            dropShadow: {
              enabled: true
            }
          },
          stroke: {
            colors: ['#fff']
          },
          fill: {
            opacity: 1,
            gradient: {
              shade: 'dark',
              shadeIntensity: 0.4,
              inverseColors: false,
              type: 'vertical',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [70, 98, 100]
            }
          },
          tooltip: {
            theme: 'dark',
            fillSeriesColor: true
          },
          legend: {
            position: 'right'
          }
        };
      }
    }, {
      key: "radar",
      value: function radar() {
        this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6;
        return {
          dataLabels: {
            enabled: false,
            style: {
              fontSize: '11px'
            }
          },
          stroke: {
            width: 2
          },
          markers: {
            size: 3,
            strokeWidth: 1,
            strokeOpacity: 1
          },
          fill: {
            opacity: 0.2
          },
          tooltip: {
            shared: false,
            intersect: true,
            followCursor: true
          },
          grid: {
            show: false
          },
          xaxis: {
            labels: {
              formatter: function formatter(val) {
                return val;
              },
              style: {
                colors: ['#a8a8a8'],
                fontSize: '11px'
              }
            },
            tooltip: {
              enabled: false
            },
            crosshairs: {
              show: false
            }
          }
        };
      }
    }, {
      key: "radialBar",
      value: function radialBar() {
        return {
          chart: {
            animations: {
              dynamicAnimation: {
                enabled: true,
                speed: 800
              }
            },
            toolbar: {
              show: false
            }
          },
          fill: {
            gradient: {
              shade: 'dark',
              shadeIntensity: 0.4,
              inverseColors: false,
              type: 'diagonal2',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [70, 98, 100]
            }
          },
          legend: {
            show: false,
            position: 'right'
          },
          tooltip: {
            enabled: false,
            fillSeriesColor: true
          }
        };
      }
    }]);

    return Defaults;
  }();

  /**
   * ApexCharts Config Class for extending user options with pre-defined ApexCharts config.
   *
   * @module Config
   **/

  var Config =
  /*#__PURE__*/
  function () {
    function Config(opts) {
      _classCallCheck(this, Config);

      this.opts = opts;
    }

    _createClass(Config, [{
      key: "init",
      value: function init(_ref) {
        var responsiveOverride = _ref.responsiveOverride;
        var opts = this.opts;
        var options = new Options();
        var defaults = new Defaults(opts);
        this.chartType = opts.chart.type;

        if (this.chartType === 'histogram') {
          // technically, a histogram can be drawn by a column chart with no spaces in between
          opts.chart.type = 'bar';
          opts = Utils.extend({
            plotOptions: {
              bar: {
                columnWidth: '99.99%'
              }
            }
          }, opts);
        }

        opts = this.extendYAxis(opts);
        opts = this.extendAnnotations(opts);
        var config = options.init();
        var newDefaults = {};

        if (opts && _typeof(opts) === 'object') {
          var chartDefaults = {};
          var chartTypes = ['line', 'area', 'bar', 'candlestick', 'rangeBar', 'histogram', 'bubble', 'scatter', 'heatmap', 'pie', 'donut', 'radar', 'radialBar'];

          if (chartTypes.indexOf(opts.chart.type) !== -1) {
            chartDefaults = defaults[opts.chart.type]();
          } else {
            chartDefaults = defaults.line();
          }

          if (opts.chart.brush && opts.chart.brush.enabled) {
            chartDefaults = defaults.brush(chartDefaults);
          }

          if (opts.chart.stacked && opts.chart.stackType === '100%') {
            opts = defaults.stacked100(opts);
          } // If user has specified a dark theme, make the tooltip dark too


          this.checkForDarkTheme(window.Apex); // check global window Apex options

          this.checkForDarkTheme(opts); // check locally passed options

          opts.xaxis = opts.xaxis || window.Apex.xaxis || {}; // an important boolean needs to be set here
          // otherwise all the charts will have this flag set to true window.Apex.xaxis is set globally

          if (!responsiveOverride) {
            opts.xaxis.convertedCatToNumeric = false;
          }

          opts = this.checkForCatToNumericXAxis(this.chartType, chartDefaults, opts);

          if (opts.chart.sparkline && opts.chart.sparkline.enabled || window.Apex.chart && window.Apex.chart.sparkline && window.Apex.chart.sparkline.enabled) {
            chartDefaults = defaults.sparkline(chartDefaults);
          }

          newDefaults = Utils.extend(config, chartDefaults);
        } // config should cascade in this fashion
        // default-config < global-apex-variable-config < user-defined-config
        // get GLOBALLY defined options and merge with the default config


        var mergedWithDefaultConfig = Utils.extend(newDefaults, window.Apex); // get the merged config and extend with user defined config

        config = Utils.extend(mergedWithDefaultConfig, opts); // some features are not supported. those mismatches should be handled

        config = this.handleUserInputErrors(config);
        return config;
      }
    }, {
      key: "checkForCatToNumericXAxis",
      value: function checkForCatToNumericXAxis(chartType, chartDefaults, opts) {
        var defaults = new Defaults(opts);
        var isBarHorizontal = chartType === 'bar' && opts.plotOptions && opts.plotOptions.bar && opts.plotOptions.bar.horizontal;
        var unsupportedZoom = chartType === 'pie' || chartType === 'donut' || chartType === 'radar' || chartType === 'radialBar' || chartType === 'heatmap';
        var notNumericXAxis = opts.xaxis.type !== 'datetime' && opts.xaxis.type !== 'numeric';
        var tickPlacement = opts.xaxis.tickPlacement ? opts.xaxis.tickPlacement : chartDefaults.xaxis && chartDefaults.xaxis.tickPlacement;

        if (!isBarHorizontal && !unsupportedZoom && notNumericXAxis && tickPlacement !== 'between') {
          opts = defaults.convertCatToNumeric(opts);
        }

        return opts;
      }
    }, {
      key: "extendYAxis",
      value: function extendYAxis(opts) {
        var options = new Options();

        if (typeof opts.yaxis === 'undefined' || !opts.yaxis || Array.isArray(opts.yaxis) && opts.yaxis.length === 0) {
          opts.yaxis = {};
        } // extend global yaxis config (only if object is provided / not an array)


        if (opts.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array) {
          opts.yaxis = Utils.extend(opts.yaxis, window.Apex.yaxis);
        } // as we can't extend nested object's array with extend, we need to do it first
        // user can provide either an array or object in yaxis config


        if (opts.yaxis.constructor !== Array) {
          // convert the yaxis to array if user supplied object
          opts.yaxis = [Utils.extend(options.yAxis, opts.yaxis)];
        } else {
          opts.yaxis = Utils.extendArray(opts.yaxis, options.yAxis);
        }

        var isLogY = false;
        opts.yaxis.forEach(function (y) {
          if (y.logarithmic) {
            isLogY = true;
          }
        }); // A logarithmic chart works correctly when each series has a corresponding y-axis
        // If this is not the case, we manually create yaxis for multi-series log chart

        if (isLogY && opts.series.length !== opts.yaxis.length && opts.series.length) {
          opts.yaxis = opts.series.map(function (s, i) {
            if (!s.name) {
              opts.series[i].name = "series-".concat(i + 1);
            }

            if (opts.yaxis[i]) {
              opts.yaxis[i].seriesName = opts.series[i].name;
              return opts.yaxis[i];
            } else {
              var newYaxis = Utils.extend(options.yAxis, opts.yaxis[0]);
              newYaxis.show = false;
              return newYaxis;
            }
          });
        }

        if (isLogY && opts.series.length > 1 && opts.series.length !== opts.yaxis.length) {
          console.warn('A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both.');
        }

        return opts;
      } // annotations also accepts array, so we need to extend them manually

    }, {
      key: "extendAnnotations",
      value: function extendAnnotations(opts) {
        if (typeof opts.annotations === 'undefined') {
          opts.annotations = {};
          opts.annotations.yaxis = [];
          opts.annotations.xaxis = [];
          opts.annotations.points = [];
        }

        opts = this.extendYAxisAnnotations(opts);
        opts = this.extendXAxisAnnotations(opts);
        opts = this.extendPointAnnotations(opts);
        return opts;
      }
    }, {
      key: "extendYAxisAnnotations",
      value: function extendYAxisAnnotations(opts) {
        var options = new Options();
        opts.annotations.yaxis = Utils.extendArray(typeof opts.annotations.yaxis !== 'undefined' ? opts.annotations.yaxis : [], options.yAxisAnnotation);
        return opts;
      }
    }, {
      key: "extendXAxisAnnotations",
      value: function extendXAxisAnnotations(opts) {
        var options = new Options();
        opts.annotations.xaxis = Utils.extendArray(typeof opts.annotations.xaxis !== 'undefined' ? opts.annotations.xaxis : [], options.xAxisAnnotation);
        return opts;
      }
    }, {
      key: "extendPointAnnotations",
      value: function extendPointAnnotations(opts) {
        var options = new Options();
        opts.annotations.points = Utils.extendArray(typeof opts.annotations.points !== 'undefined' ? opts.annotations.points : [], options.pointAnnotation);
        return opts;
      }
    }, {
      key: "checkForDarkTheme",
      value: function checkForDarkTheme(opts) {
        if (opts.theme && opts.theme.mode === 'dark') {
          if (!opts.tooltip) {
            opts.tooltip = {};
          }

          if (opts.tooltip.theme !== 'light') {
            opts.tooltip.theme = 'dark';
          }

          if (!opts.chart.foreColor) {
            opts.chart.foreColor = '#f6f7f8';
          }

          if (!opts.theme.palette) {
            opts.theme.palette = 'palette4';
          }
        }
      }
    }, {
      key: "handleUserInputErrors",
      value: function handleUserInputErrors(opts) {
        var config = opts; // conflicting tooltip option. intersect makes sure to focus on 1 point at a time. Shared cannot be used along with it

        if (config.tooltip.shared && config.tooltip.intersect) {
          throw new Error('tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.');
        }

        if ((config.chart.type === 'bar' || config.chart.type === 'rangeBar') && config.plotOptions.bar.horizontal) {
          // No multiple yaxis for bars
          if (config.yaxis.length > 1) {
            throw new Error('Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false');
          } // if yaxis is reversed in horizontal bar chart, you should draw the y-axis on right side


          if (config.yaxis[0].reversed) {
            config.yaxis[0].opposite = true;
          }

          config.xaxis.tooltip.enabled = false; // no xaxis tooltip for horizontal bar

          config.yaxis[0].tooltip.enabled = false; // no xaxis tooltip for horizontal bar

          config.chart.zoom.enabled = false; // no zooming for horz bars
        }

        if (config.chart.type === 'bar' || config.chart.type === 'rangeBar') {
          if (config.tooltip.shared) {
            if (config.xaxis.crosshairs.width === 'barWidth' && config.series.length > 1) {
              console.warn('crosshairs.width = "barWidth" is only supported in single series, not in a multi-series barChart.');
              config.xaxis.crosshairs.width = 'tickWidth';
            }

            if (config.plotOptions.bar.horizontal) {
              config.states.hover.type = 'none';
              config.tooltip.shared = false;
            }

            if (!config.tooltip.followCursor) {
              console.warn('followCursor option in shared columns cannot be turned off. Please set %ctooltip.followCursor: true', 'color: blue;');
              config.tooltip.followCursor = true;
            }
          }
        }

        if (config.chart.type === 'candlestick') {
          if (config.yaxis[0].reversed) {
            console.warn('Reversed y-axis in candlestick chart is not supported.');
            config.yaxis[0].reversed = false;
          }
        }

        if (config.chart.group && config.yaxis[0].labels.minWidth === 0) {
          console.warn('It looks like you have multiple charts in synchronization. You must provide yaxis.labels.minWidth which must be EQUAL for all grouped charts to prevent incorrect behaviour.');
        } // if user supplied array for stroke width, it will only be applicable to line/area charts, for any other charts, revert back to Number


        if (Array.isArray(config.stroke.width)) {
          if (config.chart.type !== 'line' && config.chart.type !== 'area') {
            console.warn('stroke.width option accepts array only for line and area charts. Reverted back to Number');
            config.stroke.width = config.stroke.width[0];
          }
        }

        return config;
      }
    }]);

    return Config;
  }();

  var Globals =
  /*#__PURE__*/
  function () {
    function Globals() {
      _classCallCheck(this, Globals);
    }

    _createClass(Globals, [{
      key: "initGlobalVars",
      value: function initGlobalVars(gl) {
        gl.series = []; // the MAIN series array (y values)

        gl.seriesCandleO = [];
        gl.seriesCandleH = [];
        gl.seriesCandleL = [];
        gl.seriesCandleC = [];
        gl.seriesRangeStart = [];
        gl.seriesRangeEnd = [];
        gl.seriesRangeBarTimeline = [];
        gl.seriesPercent = [];
        gl.seriesX = [];
        gl.seriesZ = [];
        gl.seriesNames = [];
        gl.seriesTotals = [];
        gl.seriesLog = [];
        gl.stackedSeriesTotals = [];
        gl.seriesXvalues = []; // we will need this in tooltip (it's x position)
        // when we will have unequal x values, we will need
        // some way to get x value depending on mouse pointer

        gl.seriesYvalues = []; // we will need this when deciding which series
        // user hovered on

        gl.labels = [];
        gl.categoryLabels = [];
        gl.timescaleLabels = [];
        gl.noLabelsProvided = false;
        gl.resizeTimer = null;
        gl.selectionResizeTimer = null;
        gl.delayedElements = [];
        gl.pointsArray = [];
        gl.dataLabelsRects = [];
        gl.isXNumeric = false;
        gl.xaxisLabelsCount = 0;
        gl.skipLastTimelinelabel = false;
        gl.skipFirstTimelinelabel = false;
        gl.x2SpaceAvailable = 0;
        gl.isDataXYZ = false;
        gl.isMultiLineX = false;
        gl.isMultipleYAxis = false;
        gl.maxY = -Number.MAX_VALUE;
        gl.minY = Number.MIN_VALUE;
        gl.minYArr = [];
        gl.maxYArr = [];
        gl.maxX = -Number.MAX_VALUE;
        gl.minX = Number.MAX_VALUE;
        gl.initialMaxX = -Number.MAX_VALUE;
        gl.initialMinX = Number.MAX_VALUE;
        gl.maxDate = 0;
        gl.minDate = Number.MAX_VALUE;
        gl.minZ = Number.MAX_VALUE;
        gl.maxZ = -Number.MAX_VALUE;
        gl.minXDiff = Number.MAX_VALUE;
        gl.yAxisScale = [];
        gl.xAxisScale = null;
        gl.xAxisTicksPositions = [];
        gl.yLabelsCoords = [];
        gl.yTitleCoords = [];
        gl.barPadForNumericAxis = 0;
        gl.padHorizontal = 0;
        gl.xRange = 0;
        gl.yRange = [];
        gl.zRange = 0;
        gl.dataPoints = 0;
        gl.xTickAmount = 0;
      }
    }, {
      key: "globalVars",
      value: function globalVars(config) {
        return {
          chartID: null,
          // chart ID - apexcharts-cuid
          cuid: null,
          // chart ID - random numbers excluding "apexcharts" part
          events: {
            beforeMount: [],
            mounted: [],
            updated: [],
            clicked: [],
            selection: [],
            dataPointSelection: [],
            zoomed: [],
            scrolled: []
          },
          colors: [],
          clientX: null,
          clientY: null,
          fill: {
            colors: []
          },
          stroke: {
            colors: []
          },
          dataLabels: {
            style: {
              colors: []
            }
          },
          radarPolygons: {
            fill: {
              colors: []
            }
          },
          markers: {
            colors: [],
            size: config.markers.size,
            largestSize: 0
          },
          animationEnded: false,
          isTouchDevice: 'ontouchstart' in window || navigator.msMaxTouchPoints,
          isDirty: false,
          // chart has been updated after the initial render. This is different than dataChanged property. isDirty means user manually called some method to update
          isExecCalled: false,
          // whether user updated the chart through the exec method
          initialConfig: null,
          // we will store the first config user has set to go back when user finishes interactions like zooming and come out of it
          lastXAxis: [],
          lastYAxis: [],
          columnSeries: null,
          labels: [],
          // store the text to draw on x axis
          // Don't mutate the labels, many things including tooltips depends on it!
          timescaleLabels: [],
          // store the timescaleLabels Labels in another variable
          noLabelsProvided: false,
          // if user didn't provide any categories/labels or x values, fallback to 1,2,3,4...
          allSeriesCollapsed: false,
          collapsedSeries: [],
          // when user collapses a series, it goes into this array
          collapsedSeriesIndices: [],
          // this stores the index of the collapsedSeries instead of whole object for quick access
          ancillaryCollapsedSeries: [],
          // when user collapses an "alwaysVisible" series, it goes into this array
          ancillaryCollapsedSeriesIndices: [],
          // this stores the index of the ancillaryCollapsedSeries whose y-axis is always visible
          risingSeries: [],
          // when user re-opens a collapsed series, it goes here
          dataFormatXNumeric: false,
          // boolean value to indicate user has passed numeric x values
          capturedSeriesIndex: -1,
          capturedDataPointIndex: -1,
          selectedDataPoints: [],
          goldenPadding: 35,
          // this value is used at a lot of places for spacing purpose
          invalidLogScale: false,
          // if a user enabled log scale but the data provided is not valid to generate a log scale, turn on this flag
          ignoreYAxisIndexes: [],
          // when series are being collapsed in multiple y axes, ignore certain index
          yAxisSameScaleIndices: [],
          maxValsInArrayIndex: 0,
          radialSize: 0,
          zoomEnabled: config.chart.toolbar.autoSelected === 'zoom' && config.chart.toolbar.tools.zoom && config.chart.zoom.enabled,
          panEnabled: config.chart.toolbar.autoSelected === 'pan' && config.chart.toolbar.tools.pan,
          selectionEnabled: config.chart.toolbar.autoSelected === 'selection' && config.chart.toolbar.tools.selection,
          yaxis: null,
          mousedown: false,
          lastClientPosition: {},
          // don't reset this variable this the chart is destroyed. It is used to detect right or left mousemove in panning
          visibleXRange: undefined,
          yValueDecimal: 0,
          // are there floating numbers in the series. If yes, this represent the len of the decimals
          total: 0,
          SVGNS: 'http://www.w3.org/2000/svg',
          // svg namespace
          svgWidth: 0,
          // the whole svg width
          svgHeight: 0,
          // the whole svg height
          noData: false,
          // whether there is any data to display or not
          locale: {},
          // the current locale values will be preserved here for global access
          dom: {},
          // for storing all dom nodes in this particular property
          memory: {
            methodsToExec: []
          },
          shouldAnimate: true,
          skipLastTimelinelabel: false,
          // when last label is cropped, skip drawing it
          skipFirstTimelinelabel: false,
          // when first label is cropped, skip drawing it
          delayedElements: [],
          // element which appear after animation has finished
          axisCharts: true,
          // chart type = line or area or bar
          // (refer them also as plot charts in the code)
          isDataXYZ: false,
          // bool: data was provided in a {[x,y,z]} pattern
          resized: false,
          // bool: user has resized
          resizeTimer: null,
          // timeout function to make a small delay before
          // drawing when user resized
          comboCharts: false,
          // bool: whether it's a combination of line/column
          dataChanged: false,
          // bool: has data changed dynamically
          previousPaths: [],
          // array: when data is changed, it will animate from
          // previous paths
          allSeriesHasEqualX: true,
          pointsArray: [],
          // store the points positions here to draw later on hover
          // format is - [[x,y],[x,y]... [x,y]]
          dataLabelsRects: [],
          // store the positions of datalabels to prevent collision
          lastDrawnDataLabelsIndexes: [],
          x2SpaceAvailable: 0,
          // space available on the right side after grid area
          hasNullValues: false,
          // bool: whether series contains null values
          easing: null,
          // function: animation effect to apply
          zoomed: false,
          // whether user has zoomed or not
          gridWidth: 0,
          // drawable width of actual graphs (series paths)
          gridHeight: 0,
          // drawable height of actual graphs (series paths)
          rotateXLabels: false,
          defaultLabels: false,
          xLabelFormatter: undefined,
          // formatter for x axis labels
          yLabelFormatters: [],
          xaxisTooltipFormatter: undefined,
          // formatter for x axis tooltip
          ttKeyFormatter: undefined,
          ttVal: undefined,
          ttZFormatter: undefined,
          LINE_HEIGHT_RATIO: 1.618,
          xAxisLabelsHeight: 0,
          yAxisLabelsWidth: 0,
          scaleX: 1,
          scaleY: 1,
          translateX: 0,
          translateY: 0,
          translateYAxisX: [],
          yAxisWidths: [],
          translateXAxisY: 0,
          translateXAxisX: 0,
          tooltip: null
        };
      }
    }, {
      key: "init",
      value: function init(config) {
        var globals = this.globalVars(config);
        this.initGlobalVars(globals);
        globals.initialConfig = Utils.extend({}, config);
        globals.initialSeries = JSON.parse(JSON.stringify(globals.initialConfig.series));
        globals.lastXAxis = JSON.parse(JSON.stringify(globals.initialConfig.xaxis));
        globals.lastYAxis = JSON.parse(JSON.stringify(globals.initialConfig.yaxis));
        return globals;
      }
    }]);

    return Globals;
  }();

  /**
   * ApexCharts Base Class for extending user options with pre-defined ApexCharts config.
   *
   * @module Base
   **/

  var Base =
  /*#__PURE__*/
  function () {
    function Base(opts) {
      _classCallCheck(this, Base);

      this.opts = opts;
    }

    _createClass(Base, [{
      key: "init",
      value: function init() {
        var config = new Config(this.opts).init({
          responsiveOverride: false
        });
        var globals = new Globals().init(config);
        var w = {
          config: config,
          globals: globals
        };
        return w;
      }
    }]);

    return Base;
  }();

  /*
   ** Util functions which are dependent on ApexCharts instance
   */
  var CoreUtils =
  /*#__PURE__*/
  function () {
    function CoreUtils(ctx) {
      _classCallCheck(this, CoreUtils);

      this.ctx = ctx;
      this.w = ctx.w;
    }

    _createClass(CoreUtils, [{
      key: "getStackedSeriesTotals",

      /**
       * @memberof CoreUtils
       * returns the sum of all individual values in a multiple stacked series
       * Eg. w.globals.series = [[32,33,43,12], [2,3,5,1]]
       *  @return [34,36,48,13]
       **/
      value: function getStackedSeriesTotals() {
        var w = this.w;
        var total = [];
        if (w.globals.series.length === 0) return total;

        for (var i = 0; i < w.globals.series[w.globals.maxValsInArrayIndex].length; i++) {
          var t = 0;

          for (var j = 0; j < w.globals.series.length; j++) {
            if (typeof w.globals.series[j][i] !== 'undefined') {
              t += w.globals.series[j][i];
            }
          }

          total.push(t);
        }

        w.globals.stackedSeriesTotals = total;
        return total;
      } // get total of the all values inside all series

    }, {
      key: "getSeriesTotalByIndex",
      value: function getSeriesTotalByIndex() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (index === null) {
          // non-plot chart types - pie / donut / circle
          return this.w.config.series.reduce(function (acc, cur) {
            return acc + cur;
          }, 0);
        } else {
          // axis charts - supporting multiple series
          return this.w.globals.series[index].reduce(function (acc, cur) {
            return acc + cur;
          }, 0);
        }
      }
    }, {
      key: "isSeriesNull",
      value: function isSeriesNull() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var r = [];

        if (index === null) {
          // non-plot chart types - pie / donut / circle
          r = this.w.config.series.filter(function (d) {
            return d !== null;
          });
        } else {
          // axis charts - supporting multiple series
          r = this.w.globals.series[index].filter(function (d) {
            return d !== null;
          });
        }

        return r.length === 0;
      }
    }, {
      key: "seriesHaveSameValues",
      value: function seriesHaveSameValues(index) {
        return this.w.globals.series[index].every(function (val, i, arr) {
          return val === arr[0];
        });
      }
    }, {
      key: "getCategoryLabels",
      value: function getCategoryLabels(labels) {
        var w = this.w;
        var catLabels = labels.slice();

        if (w.config.xaxis.convertedCatToNumeric) {
          catLabels = labels.map(function (i) {
            return w.config.xaxis.labels.formatter(i - w.globals.minX + 1);
          });
        }

        return catLabels;
      } // maxValsInArrayIndex is the index of series[] which has the largest number of items

    }, {
      key: "getLargestSeries",
      value: function getLargestSeries() {
        var w = this.w;
        w.globals.maxValsInArrayIndex = w.globals.series.map(function (a) {
          return a.length;
        }).indexOf(Math.max.apply(Math, w.globals.series.map(function (a) {
          return a.length;
        })));
      }
    }, {
      key: "getLargestMarkerSize",
      value: function getLargestMarkerSize() {
        var w = this.w;
        var size = 0;
        w.globals.markers.size.forEach(function (m) {
          size = Math.max(size, m);
        });
        w.globals.markers.largestSize = size;
        return size;
      }
      /**
       * @memberof Core
       * returns the sum of all values in a series
       * Eg. w.globals.series = [[32,33,43,12], [2,3,5,1]]
       *  @return [120, 11]
       **/

    }, {
      key: "getSeriesTotals",
      value: function getSeriesTotals() {
        var w = this.w;
        w.globals.seriesTotals = w.globals.series.map(function (ser, index) {
          var total = 0;

          if (Array.isArray(ser)) {
            for (var j = 0; j < ser.length; j++) {
              total += ser[j];
            }
          } else {
            // for pie/donuts/gauges
            total += ser;
          }

          return total;
        });
      }
    }, {
      key: "getSeriesTotalsXRange",
      value: function getSeriesTotalsXRange(minX, maxX) {
        var w = this.w;
        var seriesTotalsXRange = w.globals.series.map(function (ser, index) {
          var total = 0;

          for (var j = 0; j < ser.length; j++) {
            if (w.globals.seriesX[index][j] > minX && w.globals.seriesX[index][j] < maxX) {
              total += ser[j];
            }
          }

          return total;
        });
        return seriesTotalsXRange;
      }
      /**
       * @memberof CoreUtils
       * returns the percentage value of all individual values which can be used in a 100% stacked series
       * Eg. w.globals.series = [[32, 33, 43, 12], [2, 3, 5, 1]]
       *  @return [[94.11, 91.66, 89.58, 92.30], [5.88, 8.33, 10.41, 7.7]]
       **/

    }, {
      key: "getPercentSeries",
      value: function getPercentSeries() {
        var w = this.w;
        w.globals.seriesPercent = w.globals.series.map(function (ser, index) {
          var seriesPercent = [];

          if (Array.isArray(ser)) {
            for (var j = 0; j < ser.length; j++) {
              var total = w.globals.stackedSeriesTotals[j];
              var percent = 0;

              if (total) {
                percent = 100 * ser[j] / total;
              }

              seriesPercent.push(percent);
            }
          } else {
            var _total = w.globals.seriesTotals.reduce(function (acc, val) {
              return acc + val;
            }, 0);

            var _percent = 100 * ser / _total;

            seriesPercent.push(_percent);
          }

          return seriesPercent;
        });
      }
    }, {
      key: "getCalculatedRatios",
      value: function getCalculatedRatios() {
        var gl = this.w.globals;
        var yRatio = [];
        var invertedYRatio = 0;
        var xRatio = 0;
        var initialXRatio = 0;
        var invertedXRatio = 0;
        var zRatio = 0;
        var baseLineY = [];
        var baseLineInvertedY = 0.1;
        var baseLineX = 0;
        gl.yRange = [];

        if (gl.isMultipleYAxis) {
          for (var i = 0; i < gl.minYArr.length; i++) {
            gl.yRange.push(Math.abs(gl.minYArr[i] - gl.maxYArr[i]));
            baseLineY.push(0);
          }
        } else {
          gl.yRange.push(Math.abs(gl.minY - gl.maxY));
        }

        gl.xRange = Math.abs(gl.maxX - gl.minX);
        gl.zRange = Math.abs(gl.maxZ - gl.minZ); // multiple y axis

        for (var _i = 0; _i < gl.yRange.length; _i++) {
          yRatio.push(gl.yRange[_i] / gl.gridHeight);
        }

        xRatio = gl.xRange / gl.gridWidth;
        initialXRatio = Math.abs(gl.initialMaxX - gl.initialMinX) / gl.gridWidth;
        invertedYRatio = gl.yRange / gl.gridWidth;
        invertedXRatio = gl.xRange / gl.gridHeight;
        zRatio = gl.zRange / gl.gridHeight * 16;

        if (!zRatio) {
          zRatio = 1;
        }

        if (gl.minY !== Number.MIN_VALUE && Math.abs(gl.minY) !== 0) {
          // Negative numbers present in series
          gl.hasNegs = true;
        }

        if (gl.isMultipleYAxis) {
          baseLineY = []; // baseline variables is the 0 of the yaxis which will be needed when there are negatives

          for (var _i2 = 0; _i2 < yRatio.length; _i2++) {
            baseLineY.push(-gl.minYArr[_i2] / yRatio[_i2]);
          }
        } else {
          baseLineY.push(-gl.minY / yRatio[0]);

          if (gl.minY !== Number.MIN_VALUE && Math.abs(gl.minY) !== 0) {
            baseLineInvertedY = -gl.minY / invertedYRatio; // this is for bar chart

            baseLineX = gl.minX / xRatio;
          }
        }

        return {
          yRatio: yRatio,
          invertedYRatio: invertedYRatio,
          zRatio: zRatio,
          xRatio: xRatio,
          initialXRatio: initialXRatio,
          invertedXRatio: invertedXRatio,
          baseLineInvertedY: baseLineInvertedY,
          baseLineY: baseLineY,
          baseLineX: baseLineX
        };
      }
    }, {
      key: "getLogSeries",
      value: function getLogSeries(series) {
        var w = this.w;
        w.globals.seriesLog = series.map(function (s, i) {
          if (w.config.yaxis[i] && w.config.yaxis[i].logarithmic) {
            return s.map(function (d) {
              if (d === null) return null;
              var logVal = (Math.log(d) - Math.log(w.globals.minYArr[i])) / (Math.log(w.globals.maxYArr[i]) - Math.log(w.globals.minYArr[i]));
              return logVal;
            });
          } else {
            return s;
          }
        });
        return w.globals.invalidLogScale ? series : w.globals.seriesLog;
      }
    }, {
      key: "getLogYRatios",
      value: function getLogYRatios(yRatio) {
        var _this = this;

        var w = this.w;
        var gl = this.w.globals;
        gl.yLogRatio = yRatio.slice();
        gl.logYRange = gl.yRange.map(function (yRange, i) {
          if (w.config.yaxis[i] && _this.w.config.yaxis[i].logarithmic) {
            var maxY = -Number.MAX_VALUE;
            var minY = Number.MIN_VALUE;
            var range = 1;
            gl.seriesLog.forEach(function (s, si) {
              s.forEach(function (v) {
                if (w.config.yaxis[si] && w.config.yaxis[si].logarithmic) {
                  maxY = Math.max(v, maxY);
                  minY = Math.min(v, minY);
                }
              });
            });
            range = Math.pow(gl.yRange[i], Math.abs(minY - maxY) / gl.yRange[i]);
            gl.yLogRatio[i] = range / gl.gridHeight;
            return range;
          }
        });
        return gl.invalidLogScale ? yRatio.slice() : gl.yLogRatio;
      } // Some config objects can be array - and we need to extend them correctly

    }], [{
      key: "checkComboSeries",
      value: function checkComboSeries(series) {
        var comboCharts = false;
        var comboBarCount = 0; // if user specified a type in series too, turn on comboCharts flag

        if (series.length && typeof series[0].type !== 'undefined') {
          comboCharts = true;
          series.forEach(function (s) {
            if (s.type === 'bar' || s.type === 'column' || s.type === 'candlestick') {
              comboBarCount++;
            }
          });
        }

        return {
          comboBarCount: comboBarCount,
          comboCharts: comboCharts
        };
      }
    }, {
      key: "extendArrayProps",
      value: function extendArrayProps(configInstance, options) {
        if (options.yaxis) {
          options = configInstance.extendYAxis(options);
        }

        if (options.annotations) {
          if (options.annotations.yaxis) {
            options = configInstance.extendYAxisAnnotations(options);
          }

          if (options.annotations.xaxis) {
            options = configInstance.extendXAxisAnnotations(options);
          }

          if (options.annotations.points) {
            options = configInstance.extendPointAnnotations(options);
          }
        }

        return options;
      }
    }]);

    return CoreUtils;
  }();

  /**
   * ApexCharts Fill Class for setting fill options of the paths.
   *
   * @module Fill
   **/

  var Fill =
  /*#__PURE__*/
  function () {
    function Fill(ctx) {
      _classCallCheck(this, Fill);

      this.ctx = ctx;
      this.w = ctx.w;
      this.opts = null;
      this.seriesIndex = 0;
    }

    _createClass(Fill, [{
      key: "clippedImgArea",
      value: function clippedImgArea(params) {
        var w = this.w;
        var cnf = w.config;
        var svgW = parseInt(w.globals.gridWidth, 10);
        var svgH = parseInt(w.globals.gridHeight, 10);
        var size = svgW > svgH ? svgW : svgH;
        var fillImg = params.image;
        var imgWidth = 0;
        var imgHeight = 0;

        if (typeof params.width === 'undefined' && typeof params.height === 'undefined') {
          if (cnf.fill.image.width !== undefined && cnf.fill.image.height !== undefined) {
            imgWidth = cnf.fill.image.width + 1;
            imgHeight = cnf.fill.image.height;
          } else {
            imgWidth = size + 1;
            imgHeight = size;
          }
        } else {
          imgWidth = params.width;
          imgHeight = params.height;
        }

        var elPattern = document.createElementNS(w.globals.SVGNS, 'pattern');
        Graphics.setAttrs(elPattern, {
          id: params.patternID,
          patternUnits: params.patternUnits ? params.patternUnits : 'userSpaceOnUse',
          width: imgWidth + 'px',
          height: imgHeight + 'px'
        });
        var elImage = document.createElementNS(w.globals.SVGNS, 'image');
        elPattern.appendChild(elImage);
        elImage.setAttributeNS(window.SVG.xlink, 'href', fillImg);
        Graphics.setAttrs(elImage, {
          x: 0,
          y: 0,
          preserveAspectRatio: 'none',
          width: imgWidth + 'px',
          height: imgHeight + 'px'
        });
        elImage.style.opacity = params.opacity;
        w.globals.dom.elDefs.node.appendChild(elPattern);
      }
    }, {
      key: "getSeriesIndex",
      value: function getSeriesIndex(opts) {
        var w = this.w;

        if ((w.config.chart.type === 'bar' || w.config.chart.type === 'rangeBar') && w.config.plotOptions.bar.distributed || w.config.chart.type === 'heatmap') {
          this.seriesIndex = opts.seriesNumber;
        } else {
          this.seriesIndex = opts.seriesNumber % w.globals.series.length;
        }

        return this.seriesIndex;
      }
    }, {
      key: "fillPath",
      value: function fillPath(opts) {
        var w = this.w;
        this.opts = opts;
        var cnf = this.w.config;
        var pathFill;
        var patternFill, gradientFill;
        this.seriesIndex = this.getSeriesIndex(opts);
        var fillColors = this.getFillColors();
        var fillColor = fillColors[this.seriesIndex];

        if (typeof fillColor === 'function') {
          fillColor = fillColor({
            seriesIndex: this.seriesIndex,
            dataPointIndex: opts.dataPointIndex,
            value: opts.value,
            w: w
          });
        }

        var fillType = this.getFillType(this.seriesIndex);
        var fillOpacity = Array.isArray(cnf.fill.opacity) ? cnf.fill.opacity[this.seriesIndex] : cnf.fill.opacity;
        var defaultColor = fillColor;

        if (opts.color) {
          fillColor = opts.color;
        }

        if (fillColor.indexOf('rgb') === -1) {
          defaultColor = Utils.hexToRgba(fillColor, fillOpacity);
        } else {
          if (fillColor.indexOf('rgba') > -1) {
            fillOpacity = 0 + '.' + Utils.getOpacityFromRGBA(fillColor);
          }
        }

        if (opts.opacity) fillOpacity = opts.opacity;

        if (fillType === 'pattern') {
          patternFill = this.handlePatternFill(patternFill, fillColor, fillOpacity, defaultColor);
        }

        if (fillType === 'gradient') {
          gradientFill = this.handleGradientFill(gradientFill, fillColor, fillOpacity, this.seriesIndex);
        }

        if (fillType === 'image') {
          var imgSrc = cnf.fill.image.src;
          var patternID = opts.patternID ? opts.patternID : '';
          this.clippedImgArea({
            opacity: fillOpacity,
            image: Array.isArray(imgSrc) ? opts.seriesNumber < imgSrc.length ? imgSrc[opts.seriesNumber] : imgSrc[0] : imgSrc,
            width: opts.width ? opts.width : undefined,
            height: opts.height ? opts.height : undefined,
            patternUnits: opts.patternUnits,
            patternID: "pattern".concat(w.globals.cuid).concat(opts.seriesNumber + 1).concat(patternID)
          });
          pathFill = "url(#pattern".concat(w.globals.cuid).concat(opts.seriesNumber + 1).concat(patternID, ")");
        } else if (fillType === 'gradient') {
          pathFill = gradientFill;
        } else if (fillType === 'pattern') {
          pathFill = patternFill;
        } else {
          pathFill = defaultColor;
        } // override pattern/gradient if opts.solid is true


        if (opts.solid) {
          pathFill = defaultColor;
        }

        return pathFill;
      }
    }, {
      key: "getFillType",
      value: function getFillType(seriesIndex) {
        var w = this.w;

        if (Array.isArray(w.config.fill.type)) {
          return w.config.fill.type[seriesIndex];
        } else {
          return w.config.fill.type;
        }
      }
    }, {
      key: "getFillColors",
      value: function getFillColors() {
        var w = this.w;
        var cnf = w.config;
        var opts = this.opts;
        var fillColors = [];

        if (w.globals.comboCharts) {
          if (w.config.series[this.seriesIndex].type === 'line') {
            if (w.globals.stroke.colors instanceof Array) {
              fillColors = w.globals.stroke.colors;
            } else {
              fillColors.push(w.globals.stroke.colors);
            }
          } else {
            if (w.globals.fill.colors instanceof Array) {
              fillColors = w.globals.fill.colors;
            } else {
              fillColors.push(w.globals.fill.colors);
            }
          }
        } else {
          if (cnf.chart.type === 'line') {
            if (w.globals.stroke.colors instanceof Array) {
              fillColors = w.globals.stroke.colors;
            } else {
              fillColors.push(w.globals.stroke.colors);
            }
          } else {
            if (w.globals.fill.colors instanceof Array) {
              fillColors = w.globals.fill.colors;
            } else {
              fillColors.push(w.globals.fill.colors);
            }
          }
        } // colors passed in arguments


        if (typeof opts.fillColors !== 'undefined') {
          fillColors = [];

          if (opts.fillColors instanceof Array) {
            fillColors = opts.fillColors.slice();
          } else {
            fillColors.push(opts.fillColors);
          }
        }

        return fillColors;
      }
    }, {
      key: "handlePatternFill",
      value: function handlePatternFill(patternFill, fillColor, fillOpacity, defaultColor) {
        var cnf = this.w.config;
        var opts = this.opts;
        var graphics = new Graphics(this.ctx);
        var patternStrokeWidth = cnf.fill.pattern.strokeWidth === undefined ? Array.isArray(cnf.stroke.width) ? cnf.stroke.width[this.seriesIndex] : cnf.stroke.width : Array.isArray(cnf.fill.pattern.strokeWidth) ? cnf.fill.pattern.strokeWidth[this.seriesIndex] : cnf.fill.pattern.strokeWidth;
        var patternLineColor = fillColor;

        if (cnf.fill.pattern.style instanceof Array) {
          if (typeof cnf.fill.pattern.style[opts.seriesNumber] !== 'undefined') {
            var pf = graphics.drawPattern(cnf.fill.pattern.style[opts.seriesNumber], cnf.fill.pattern.width, cnf.fill.pattern.height, patternLineColor, patternStrokeWidth, fillOpacity);
            patternFill = pf;
          } else {
            patternFill = defaultColor;
          }
        } else {
          patternFill = graphics.drawPattern(cnf.fill.pattern.style, cnf.fill.pattern.width, cnf.fill.pattern.height, patternLineColor, patternStrokeWidth, fillOpacity);
        }

        return patternFill;
      }
    }, {
      key: "handleGradientFill",
      value: function handleGradientFill(gradientFill, fillColor, fillOpacity, i) {
        var cnf = this.w.config;
        var opts = this.opts;
        var graphics = new Graphics(this.ctx);
        var utils = new Utils();
        var type = cnf.fill.gradient.type;
        var gradientFrom, gradientTo;
        var opacityFrom = cnf.fill.gradient.opacityFrom === undefined ? fillOpacity : Array.isArray(cnf.fill.gradient.opacityFrom) ? cnf.fill.gradient.opacityFrom[i] : cnf.fill.gradient.opacityFrom;
        var opacityTo = cnf.fill.gradient.opacityTo === undefined ? fillOpacity : Array.isArray(cnf.fill.gradient.opacityTo) ? cnf.fill.gradient.opacityTo[i] : cnf.fill.gradient.opacityTo;
        gradientFrom = fillColor;

        if (cnf.fill.gradient.gradientToColors === undefined || cnf.fill.gradient.gradientToColors.length === 0) {
          if (cnf.fill.gradient.shade === 'dark') {
            gradientTo = utils.shadeColor(parseFloat(cnf.fill.gradient.shadeIntensity) * -1, fillColor);
          } else {
            gradientTo = utils.shadeColor(parseFloat(cnf.fill.gradient.shadeIntensity), fillColor);
          }
        } else {
          gradientTo = cnf.fill.gradient.gradientToColors[opts.seriesNumber];
        }

        if (cnf.fill.gradient.inverseColors) {
          var t = gradientFrom;
          gradientFrom = gradientTo;
          gradientTo = t;
        }

        gradientFill = graphics.drawGradient(type, gradientFrom, gradientTo, opacityFrom, opacityTo, opts.size, cnf.fill.gradient.stops, cnf.fill.gradient.colorStops, i);
        return gradientFill;
      }
    }]);

    return Fill;
  }();

  /**
   * ApexCharts Markers Class for drawing points on y values in axes charts.
   *
   * @module Markers
   **/

  var Markers =
  /*#__PURE__*/
  function () {
    function Markers(ctx, opts) {
      _classCallCheck(this, Markers);

      this.ctx = ctx;
      this.w = ctx.w;
    }

    _createClass(Markers, [{
      key: "setGlobalMarkerSize",
      value: function setGlobalMarkerSize() {
        var w = this.w;
        w.globals.markers.size = Array.isArray(w.config.markers.size) ? w.config.markers.size : [w.config.markers.size];

        if (w.globals.markers.size.length > 0) {
          if (w.globals.markers.size.length < w.globals.series.length + 1) {
            for (var i = 0; i <= w.globals.series.length; i++) {
              if (typeof w.globals.markers.size[i] === 'undefined') {
                w.globals.markers.size.push(w.globals.markers.size[0]);
              }
            }
          }
        } else {
          w.globals.markers.size = w.config.series.map(function (s) {
            return w.config.markers.size;
          });
        }
      }
    }, {
      key: "plotChartMarkers",
      value: function plotChartMarkers(pointsPos, seriesIndex, j, pSize) {
        var alwaysDrawMarker = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        var w = this.w;
        var i = seriesIndex;
        var p = pointsPos;
        var elPointsWrap = null;
        var graphics = new Graphics(this.ctx);
        var point;

        if (w.globals.markers.size[seriesIndex] > 0 || alwaysDrawMarker) {
          elPointsWrap = graphics.group({
            class: alwaysDrawMarker ? '' : 'apexcharts-series-markers'
          });
          elPointsWrap.attr('clip-path', "url(#gridRectMarkerMask".concat(w.globals.cuid, ")"));
        }

        if (p.x instanceof Array) {
          for (var q = 0; q < p.x.length; q++) {
            var dataPointIndex = j; // a small hack as we have 2 points for the first val to connect it

            if (j === 1 && q === 0) dataPointIndex = 0;
            if (j === 1 && q === 1) dataPointIndex = 1;
            var PointClasses = 'apexcharts-marker';

            if ((w.config.chart.type === 'line' || w.config.chart.type === 'area') && !w.globals.comboCharts && !w.config.tooltip.intersect) {
              PointClasses += ' no-pointer-events';
            }

            var shouldMarkerDraw = Array.isArray(w.config.markers.size) ? w.globals.markers.size[seriesIndex] > 0 : w.config.markers.size > 0;

            if (shouldMarkerDraw || alwaysDrawMarker) {
              if (Utils.isNumber(p.y[q])) {
                PointClasses += " w".concat(Utils.randomId());
              } else {
                PointClasses = 'apexcharts-nullpoint';
              }

              var opts = this.getMarkerConfig(PointClasses, seriesIndex, dataPointIndex);

              if (w.config.series[i].data[j]) {
                if (w.config.series[i].data[j].fillColor) {
                  opts.pointFillColor = w.config.series[i].data[j].fillColor;
                }

                if (w.config.series[i].data[j].strokeColor) {
                  opts.pointStrokeColor = w.config.series[i].data[j].strokeColor;
                }
              }

              if (pSize) {
                opts.pSize = pSize;
              }

              point = graphics.drawMarker(p.x[q], p.y[q], opts);
              point.attr('rel', dataPointIndex);
              point.attr('j', dataPointIndex);
              point.attr('index', seriesIndex);
              point.node.setAttribute('default-marker-size', opts.pSize);
              var filters = new Filters(this.ctx);
              filters.setSelectionFilter(point, seriesIndex, dataPointIndex);
              this.addEvents(point);

              if (elPointsWrap) {
                elPointsWrap.add(point);
              }
            } else {
              // dynamic array creation - multidimensional
              if (typeof w.globals.pointsArray[seriesIndex] === 'undefined') w.globals.pointsArray[seriesIndex] = [];
              w.globals.pointsArray[seriesIndex].push([p.x[q], p.y[q]]);
            }
          }
        }

        return elPointsWrap;
      }
    }, {
      key: "getMarkerConfig",
      value: function getMarkerConfig(cssClass, seriesIndex) {
        var dataPointIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var w = this.w;
        var pStyle = this.getMarkerStyle(seriesIndex);
        var pSize = w.globals.markers.size[seriesIndex];
        var m = w.config.markers; // discrete markers is an option where user can specify a particular marker with different size and color

        if (dataPointIndex !== null && m.discrete.length) {
          m.discrete.map(function (marker) {
            if (marker.seriesIndex === seriesIndex && marker.dataPointIndex === dataPointIndex) {
              pStyle.pointStrokeColor = marker.strokeColor;
              pStyle.pointFillColor = marker.fillColor;
              pSize = marker.size;
            }
          });
        }

        return {
          pSize: pSize,
          pRadius: m.radius,
          pWidth: m.strokeWidth instanceof Array ? m.strokeWidth[seriesIndex] : m.strokeWidth,
          pointStrokeColor: pStyle.pointStrokeColor,
          pointFillColor: pStyle.pointFillColor,
          shape: m.shape instanceof Array ? m.shape[seriesIndex] : m.shape,
          class: cssClass,
          pointStrokeOpacity: m.strokeOpacity instanceof Array ? m.strokeOpacity[seriesIndex] : m.strokeOpacity,
          pointStrokeDashArray: m.strokeDashArray instanceof Array ? m.strokeDashArray[seriesIndex] : m.strokeDashArray,
          pointFillOpacity: m.fillOpacity instanceof Array ? m.fillOpacity[seriesIndex] : m.fillOpacity,
          seriesIndex: seriesIndex
        };
      }
    }, {
      key: "addEvents",
      value: function addEvents(circle) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        circle.node.addEventListener('mouseenter', graphics.pathMouseEnter.bind(this.ctx, circle));
        circle.node.addEventListener('mouseleave', graphics.pathMouseLeave.bind(this.ctx, circle));
        circle.node.addEventListener('mousedown', graphics.pathMouseDown.bind(this.ctx, circle));
        circle.node.addEventListener('click', w.config.markers.onClick);
        circle.node.addEventListener('dblclick', w.config.markers.onDblClick);
        circle.node.addEventListener('touchstart', graphics.pathMouseDown.bind(this.ctx, circle), {
          passive: true
        });
      }
    }, {
      key: "getMarkerStyle",
      value: function getMarkerStyle(seriesIndex) {
        var w = this.w;
        var colors = w.globals.markers.colors;
        var strokeColors = w.config.markers.strokeColor || w.config.markers.strokeColors;
        var pointStrokeColor = strokeColors instanceof Array ? strokeColors[seriesIndex] : strokeColors;
        var pointFillColor = colors instanceof Array ? colors[seriesIndex] : colors;
        return {
          pointStrokeColor: pointStrokeColor,
          pointFillColor: pointFillColor
        };
      }
    }]);

    return Markers;
  }();

  /**
   * ApexCharts Scatter Class.
   * This Class also handles bubbles chart as currently there is no major difference in drawing them,
   * @module Scatter
   **/

  var Scatter =
  /*#__PURE__*/
  function () {
    function Scatter(ctx) {
      _classCallCheck(this, Scatter);

      this.ctx = ctx;
      this.w = ctx.w;
      this.initialAnim = this.w.config.chart.animations.enabled;
      this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled;
    }

    _createClass(Scatter, [{
      key: "draw",
      value: function draw(elSeries, j, opts) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var realIndex = opts.realIndex;
        var pointsPos = opts.pointsPos;
        var zRatio = opts.zRatio;
        var elPointsMain = opts.elParent;
        var elPointsWrap = graphics.group({
          class: "apexcharts-series-markers apexcharts-series-".concat(w.config.chart.type)
        });
        elPointsWrap.attr('clip-path', "url(#gridRectMarkerMask".concat(w.globals.cuid, ")"));

        if (pointsPos.x instanceof Array) {
          for (var q = 0; q < pointsPos.x.length; q++) {
            var dataPointIndex = j + 1;
            var shouldDraw = true; // a small hack as we have 2 points for the first val to connect it

            if (j === 0 && q === 0) dataPointIndex = 0;
            if (j === 0 && q === 1) dataPointIndex = 1;
            var radius = 0;
            var finishRadius = w.globals.markers.size[realIndex];

            if (zRatio !== Infinity) {
              // means we have a bubble
              finishRadius = w.globals.seriesZ[realIndex][dataPointIndex] / zRatio;
              var bubble = w.config.plotOptions.bubble;

              if (bubble.minBubbleRadius && finishRadius < bubble.minBubbleRadius) {
                finishRadius = bubble.minBubbleRadius;
              }

              if (bubble.maxBubbleRadius && finishRadius > bubble.maxBubbleRadius) {
                finishRadius = bubble.maxBubbleRadius;
              }
            }

            if (!w.config.chart.animations.enabled) {
              radius = finishRadius;
            }

            var x = pointsPos.x[q];
            var y = pointsPos.y[q];
            radius = radius || 0;

            if (y === null || typeof w.globals.series[realIndex][dataPointIndex] === 'undefined') {
              shouldDraw = false;
            }

            if (shouldDraw) {
              var circle = this.drawPoint(x, y, radius, finishRadius, realIndex, dataPointIndex, j);
              elPointsWrap.add(circle);
            }

            elPointsMain.add(elPointsWrap);
          }
        }
      }
    }, {
      key: "drawPoint",
      value: function drawPoint(x, y, radius, finishRadius, realIndex, dataPointIndex, j) {
        var w = this.w;
        var i = realIndex;
        var anim = new Animations(this.ctx);
        var filters = new Filters(this.ctx);
        var fill = new Fill(this.ctx);
        var markers = new Markers(this.ctx);
        var graphics = new Graphics(this.ctx);
        var markerConfig = markers.getMarkerConfig('apexcharts-marker', i);
        var pathFillCircle = fill.fillPath({
          seriesNumber: realIndex,
          dataPointIndex: dataPointIndex,
          patternUnits: 'objectBoundingBox',
          value: w.globals.series[realIndex][j]
        });
        var circle = graphics.drawCircle(radius);

        if (w.config.series[i].data[dataPointIndex]) {
          if (w.config.series[i].data[dataPointIndex].fillColor) {
            pathFillCircle = w.config.series[i].data[dataPointIndex].fillColor;
          }
        }

        circle.attr({
          cx: x,
          cy: y,
          fill: pathFillCircle,
          stroke: markerConfig.pointStrokeColor,
          'stroke-width': markerConfig.pWidth,
          'stroke-dasharray': markerConfig.pointStrokeDashArray,
          'stroke-opacity': markerConfig.pointStrokeOpacity
        });

        if (w.config.chart.dropShadow.enabled) {
          var dropShadow = w.config.chart.dropShadow;
          filters.dropShadow(circle, dropShadow, realIndex);
        }

        if (this.initialAnim && !w.globals.dataChanged) {
          var speed = 1;

          if (!w.globals.resized) {
            speed = w.config.chart.animations.speed;
          }

          anim.animateCircleRadius(circle, 0, finishRadius, speed, w.globals.easing, function () {
            window.setTimeout(function () {
              anim.animationCompleted(circle);
            }, 100);
          });
        }

        if (w.globals.dataChanged) {
          if (this.dynamicAnim) {
            var _speed = w.config.chart.animations.dynamicAnimation.speed;
            var prevX, prevY, prevR;
            var prevPathJ = null;
            prevPathJ = w.globals.previousPaths[realIndex] && w.globals.previousPaths[realIndex][j];

            if (typeof prevPathJ !== 'undefined' && prevPathJ !== null) {
              // series containing less elements will ignore these values and revert to 0
              prevX = prevPathJ.x;
              prevY = prevPathJ.y;
              prevR = typeof prevPathJ.r !== 'undefined' ? prevPathJ.r : finishRadius;
            }

            for (var cs = 0; cs < w.globals.collapsedSeries.length; cs++) {
              if (w.globals.collapsedSeries[cs].index === realIndex) {
                _speed = 1;
                finishRadius = 0;
              }
            }

            if (x === 0 && y === 0) finishRadius = 0;
            anim.animateCircle(circle, {
              cx: prevX,
              cy: prevY,
              r: prevR
            }, {
              cx: x,
              cy: y,
              r: finishRadius
            }, _speed, w.globals.easing);
          } else {
            circle.attr({
              r: finishRadius
            });
          }
        }

        circle.attr({
          rel: dataPointIndex,
          j: dataPointIndex,
          index: realIndex,
          'default-marker-size': finishRadius
        });
        filters.setSelectionFilter(circle, realIndex, dataPointIndex);
        markers.addEvents(circle);
        circle.node.classList.add('apexcharts-marker');
        return circle;
      }
    }, {
      key: "centerTextInBubble",
      value: function centerTextInBubble(y) {
        var w = this.w;
        y = y + parseInt(w.config.dataLabels.style.fontSize, 10) / 4;
        return {
          y: y
        };
      }
    }]);

    return Scatter;
  }();

  /**
   * ApexCharts DataLabels Class for drawing dataLabels on Axes based Charts.
   *
   * @module DataLabels
   **/

  var DataLabels =
  /*#__PURE__*/
  function () {
    function DataLabels(ctx) {
      _classCallCheck(this, DataLabels);

      this.ctx = ctx;
      this.w = ctx.w;
    } // When there are many datalabels to be printed, and some of them overlaps each other in the same series, this method will take care of that
    // Also, when datalabels exceeds the drawable area and get clipped off, we need to adjust and move some pixels to make them visible again


    _createClass(DataLabels, [{
      key: "dataLabelsCorrection",
      value: function dataLabelsCorrection(x, y, val, i, dataPointIndex, alwaysDrawDataLabel, fontSize) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var drawnextLabel = false; //

        var textRects = graphics.getTextRects(val, fontSize);
        var width = textRects.width;
        var height = textRects.height; // first value in series, so push an empty array

        if (typeof w.globals.dataLabelsRects[i] === 'undefined') w.globals.dataLabelsRects[i] = []; // then start pushing actual rects in that sub-array

        w.globals.dataLabelsRects[i].push({
          x: x,
          y: y,
          width: width,
          height: height
        });
        var len = w.globals.dataLabelsRects[i].length - 2;
        var lastDrawnIndex = typeof w.globals.lastDrawnDataLabelsIndexes[i] !== 'undefined' ? w.globals.lastDrawnDataLabelsIndexes[i][w.globals.lastDrawnDataLabelsIndexes[i].length - 1] : 0;

        if (typeof w.globals.dataLabelsRects[i][len] !== 'undefined') {
          var lastDataLabelRect = w.globals.dataLabelsRects[i][lastDrawnIndex];

          if ( // next label forward and x not intersecting
          x > lastDataLabelRect.x + lastDataLabelRect.width + 2 || y > lastDataLabelRect.y + lastDataLabelRect.height + 2 || x + width < lastDataLabelRect.x // next label is going to be drawn backwards
          ) {
              // the 2 indexes don't override, so OK to draw next label
              drawnextLabel = true;
            }
        }

        if (dataPointIndex === 0 || alwaysDrawDataLabel) {
          drawnextLabel = true;
        }

        return {
          x: x,
          y: y,
          textRects: textRects,
          drawnextLabel: drawnextLabel
        };
      }
    }, {
      key: "drawDataLabel",
      value: function drawDataLabel(pos, i, j) {
        var _this = this;
        var strokeWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
        // this method handles line, area, bubble, scatter charts as those charts contains markers/points which have pre-defined x/y positions
        // all other charts like radar / bars / heatmaps will define their own drawDataLabel routine
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var dataLabelsConfig = w.config.dataLabels;
        var x = 0;
        var y = 0;
        var dataPointIndex = j;
        var elDataLabelsWrap = null;

        if (!dataLabelsConfig.enabled || pos.x instanceof Array !== true) {
          return elDataLabelsWrap;
        }

        elDataLabelsWrap = graphics.group({
          class: 'apexcharts-data-labels'
        });

        for (var q = 0; q < pos.x.length; q++) {
          x = pos.x[q] + dataLabelsConfig.offsetX;
          y = pos.y[q] + dataLabelsConfig.offsetY + strokeWidth;

          if (!isNaN(x)) {
            // a small hack as we have 2 points for the first val to connect it
            if (j === 1 && q === 0) dataPointIndex = 0;
            if (j === 1 && q === 1) dataPointIndex = 1;
            var val = w.globals.series[i][dataPointIndex];
            var text = '';

            var getText = function getText(v) {
              return w.config.dataLabels.formatter(v, {
                ctx: _this.ctx,
                seriesIndex: i,
                dataPointIndex: dataPointIndex,
                w: w
              });
            };

            if (w.config.chart.type === 'bubble') {
              val = w.globals.seriesZ[i][dataPointIndex];
              text = getText(val);
              y = pos.y[q];
              var scatter = new Scatter(this.ctx);
              var centerTextInBubbleCoords = scatter.centerTextInBubble(y, i, dataPointIndex);
              y = centerTextInBubbleCoords.y;
            } else {
              if (typeof val !== 'undefined') {
                text = getText(val);
              }
            }

            this.plotDataLabelsText({
              x: x,
              y: y,
              text: text,
              i: i,
              j: dataPointIndex,
              parent: elDataLabelsWrap,
              offsetCorrection: true,
              dataLabelsConfig: w.config.dataLabels
            });
          }
        }

        return elDataLabelsWrap;
      }
    }, {
      key: "plotDataLabelsText",
      value: function plotDataLabelsText(opts) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var x = opts.x,
            y = opts.y,
            i = opts.i,
            j = opts.j,
            text = opts.text,
            textAnchor = opts.textAnchor,
            parent = opts.parent,
            dataLabelsConfig = opts.dataLabelsConfig,
            color = opts.color,
            alwaysDrawDataLabel = opts.alwaysDrawDataLabel,
            offsetCorrection = opts.offsetCorrection;

        if (Array.isArray(w.config.dataLabels.enabledOnSeries)) {
          if (w.config.dataLabels.enabledOnSeries.indexOf(i) < 0) {
            return;
          }
        }

        var correctedLabels = {
          x: x,
          y: y,
          drawnextLabel: true
        };

        if (offsetCorrection) {
          correctedLabels = this.dataLabelsCorrection(x, y, text, i, j, alwaysDrawDataLabel, parseInt(dataLabelsConfig.style.fontSize, 10));
        } // when zoomed, we don't need to correct labels offsets,
        // but if normally, labels get cropped, correct them


        if (!w.globals.zoomed) {
          x = correctedLabels.x;
          y = correctedLabels.y;
        }

        if (correctedLabels.textRects) {
          if (x + correctedLabels.textRects.width < -20 || x > w.globals.gridWidth + 20) {
            // datalabels fall outside drawing area, so draw a blank label
            text = '';
          }
        }

        var dataLabelColor = w.globals.dataLabels.style.colors[i];

        if ((w.config.chart.type === 'bar' || w.config.chart.type === 'rangeBar') && w.config.plotOptions.bar.distributed) {
          dataLabelColor = w.globals.dataLabels.style.colors[j];
        }

        if (color) {
          dataLabelColor = color;
        }

        if (correctedLabels.drawnextLabel) {
          var dataLabelText = graphics.drawText({
            width: 100,
            height: parseInt(dataLabelsConfig.style.fontSize, 10),
            x: x + dataLabelsConfig.offsetX,
            y: y + dataLabelsConfig.offsetY,
            foreColor: dataLabelColor,
            textAnchor: textAnchor || dataLabelsConfig.textAnchor,
            text: text,
            fontSize: dataLabelsConfig.style.fontSize,
            fontFamily: dataLabelsConfig.style.fontFamily,
            fontWeight: dataLabelsConfig.style.fontWeight || 'normal'
          });
          dataLabelText.attr({
            class: 'apexcharts-datalabel',
            cx: x,
            cy: y
          });

          if (dataLabelsConfig.dropShadow.enabled) {
            var textShadow = dataLabelsConfig.dropShadow;
            var filters = new Filters(this.ctx);
            filters.dropShadow(dataLabelText, textShadow);
          }

          parent.add(dataLabelText);

          if (typeof w.globals.lastDrawnDataLabelsIndexes[i] === 'undefined') {
            w.globals.lastDrawnDataLabelsIndexes[i] = [];
          }

          w.globals.lastDrawnDataLabelsIndexes[i].push(j);
        }
      }
    }, {
      key: "addBackgroundToDataLabel",
      value: function addBackgroundToDataLabel(el, coords) {
        var w = this.w;
        var bCnf = w.config.dataLabels.background;
        var paddingH = bCnf.padding;
        var paddingV = bCnf.padding / 2;
        var width = coords.width;
        var height = coords.height;
        var graphics = new Graphics(this.ctx);
        var elRect = graphics.drawRect(coords.x - paddingH, coords.y - paddingV / 2, width + paddingH * 2, height + paddingV, bCnf.borderRadius, w.config.chart.background === 'transparent' ? '#fff' : w.config.chart.background, bCnf.opacity, bCnf.borderWidth, bCnf.borderColor);

        if (bCnf.dropShadow.enabled) {
          var filters = new Filters(this.ctx);
          filters.dropShadow(elRect, bCnf.dropShadow);
        }

        return elRect;
      }
    }, {
      key: "dataLabelsBackground",
      value: function dataLabelsBackground() {
        var w = this.w;
        if (w.config.chart.type === 'bubble') return;
        var elDataLabels = w.globals.dom.baseEl.querySelectorAll('.apexcharts-datalabels text');

        for (var i = 0; i < elDataLabels.length; i++) {
          var el = elDataLabels[i];
          var coords = el.getBBox();
          var elRect = null;

          if (coords.width && coords.height) {
            elRect = this.addBackgroundToDataLabel(el, coords);
          }

          if (elRect) {
            el.parentNode.insertBefore(elRect.node, el);
            var background = el.getAttribute('fill');
            var shouldAnim = w.config.chart.animations.enabled && !w.globals.resized && !w.globals.dataChanged;

            if (shouldAnim) {
              elRect.animate().attr({
                fill: background
              });
            } else {
              elRect.attr({
                fill: background
              });
            }

            el.setAttribute('fill', w.config.dataLabels.background.foreColor);
          }
        }
      }
    }, {
      key: "bringForward",
      value: function bringForward() {
        var w = this.w;
        var elDataLabelsNodes = w.globals.dom.baseEl.querySelectorAll('.apexcharts-datalabels');
        var elSeries = w.globals.dom.baseEl.querySelector('.apexcharts-plot-series:last-child');

        for (var i = 0; i < elDataLabelsNodes.length; i++) {
          if (elSeries) {
            elSeries.insertBefore(elDataLabelsNodes[i], elSeries.nextSibling);
          }
        }
      }
    }]);

    return DataLabels;
  }();

  /**
   * ApexCharts Series Class for interation with the Series of the chart.
   *
   * @module Series
   **/

  var Series =
  /*#__PURE__*/
  function () {
    function Series(ctx) {
      _classCallCheck(this, Series);

      this.ctx = ctx;
      this.w = ctx.w;
      this.legendInactiveClass = 'legend-mouseover-inactive';
    }

    _createClass(Series, [{
      key: "getAllSeriesEls",
      value: function getAllSeriesEls() {
        return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
      }
    }, {
      key: "getSeriesByName",
      value: function getSeriesByName(seriesName) {
        return this.w.globals.dom.baseEl.querySelector("[seriesName='".concat(Utils.escapeString(seriesName), "']"));
      }
    }, {
      key: "isSeriesHidden",
      value: function isSeriesHidden(seriesName) {
        var targetElement = this.getSeriesByName(seriesName);
        var realIndex = parseInt(targetElement.getAttribute('data:realIndex'), 10);
        var isHidden = targetElement.classList.contains('apexcharts-series-collapsed');
        return {
          isHidden: isHidden,
          realIndex: realIndex
        };
      }
    }, {
      key: "addCollapsedClassToSeries",
      value: function addCollapsedClassToSeries(elSeries, index) {
        var w = this.w;

        function iterateOnAllCollapsedSeries(series) {
          for (var cs = 0; cs < series.length; cs++) {
            if (series[cs].index === index) {
              elSeries.node.classList.add('apexcharts-series-collapsed');
            }
          }
        }

        iterateOnAllCollapsedSeries(w.globals.collapsedSeries);
        iterateOnAllCollapsedSeries(w.globals.ancillaryCollapsedSeries);
      }
    }, {
      key: "toggleSeries",
      value: function toggleSeries(seriesName) {
        var isSeriesHidden = this.isSeriesHidden(seriesName);
        this.ctx.legend.legendHelpers.toggleDataSeries(isSeriesHidden.realIndex, isSeriesHidden.isHidden);
        return isSeriesHidden.isHidden;
      }
    }, {
      key: "showSeries",
      value: function showSeries(seriesName) {
        var isSeriesHidden = this.isSeriesHidden(seriesName);

        if (isSeriesHidden.isHidden) {
          this.ctx.legend.legendHelpers.toggleDataSeries(isSeriesHidden.realIndex, true);
        }
      }
    }, {
      key: "hideSeries",
      value: function hideSeries(seriesName) {
        var isSeriesHidden = this.isSeriesHidden(seriesName);

        if (!isSeriesHidden.isHidden) {
          this.ctx.legend.legendHelpers.toggleDataSeries(isSeriesHidden.realIndex, false);
        }
      }
    }, {
      key: "resetSeries",
      value: function resetSeries() {
        var shouldUpdateChart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var shouldResetZoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var shouldResetCollapsed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var w = this.w;
        var series = w.globals.initialSeries.slice();
        w.config.series = series;
        w.globals.previousPaths = [];

        if (shouldResetCollapsed) {
          w.globals.collapsedSeries = [];
          w.globals.ancillaryCollapsedSeries = [];
          w.globals.collapsedSeriesIndices = [];
          w.globals.ancillaryCollapsedSeriesIndices = [];
        }

        if (shouldUpdateChart) {
          if (shouldResetZoom) {
            w.globals.zoomed = false;
            this.ctx.updateHelpers.revertDefaultAxisMinMax();
          }

          this.ctx.updateHelpers._updateSeries(series, w.config.chart.animations.dynamicAnimation.enabled);
        }
      }
    }, {
      key: "toggleSeriesOnHover",
      value: function toggleSeriesOnHover(e, targetElement) {
        var w = this.w;
        var allSeriesEls = w.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");

        if (e.type === 'mousemove') {
          var seriesCnt = parseInt(targetElement.getAttribute('rel'), 10) - 1;
          var seriesEl = null;
          var dataLabelEl = null;

          if (w.globals.axisCharts || w.config.chart.type === 'radialBar') {
            if (w.globals.axisCharts) {
              seriesEl = w.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(seriesCnt, "']"));
              dataLabelEl = w.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(seriesCnt, "']"));
            } else {
              seriesEl = w.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(seriesCnt + 1, "']"));
            }
          } else {
            seriesEl = w.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(seriesCnt + 1, "'] path"));
          }

          for (var se = 0; se < allSeriesEls.length; se++) {
            allSeriesEls[se].classList.add(this.legendInactiveClass);
          }

          if (seriesEl !== null) {
            if (!w.globals.axisCharts) {
              seriesEl.parentNode.classList.remove(this.legendInactiveClass);
            }

            seriesEl.classList.remove(this.legendInactiveClass);

            if (dataLabelEl !== null) {
              dataLabelEl.classList.remove(this.legendInactiveClass);
            }
          }
        } else if (e.type === 'mouseout') {
          for (var _se = 0; _se < allSeriesEls.length; _se++) {
            allSeriesEls[_se].classList.remove(this.legendInactiveClass);
          }
        }
      }
    }, {
      key: "highlightRangeInSeries",
      value: function highlightRangeInSeries(e, targetElement) {
        var _this = this;

        var w = this.w;
        var allHeatMapElements = w.globals.dom.baseEl.querySelectorAll('.apexcharts-heatmap-rect');

        var activeInactive = function activeInactive(action) {
          for (var i = 0; i < allHeatMapElements.length; i++) {
            allHeatMapElements[i].classList[action](_this.legendInactiveClass);
          }
        };

        var removeInactiveClassFromHoveredRange = function removeInactiveClassFromHoveredRange(range) {
          for (var i = 0; i < allHeatMapElements.length; i++) {
            var val = parseInt(allHeatMapElements[i].getAttribute('val'), 10);

            if (val >= range.from && val <= range.to) {
              allHeatMapElements[i].classList.remove(_this.legendInactiveClass);
            }
          }
        };

        if (e.type === 'mousemove') {
          var seriesCnt = parseInt(targetElement.getAttribute('rel'), 10) - 1;
          activeInactive('add');
          var range = w.config.plotOptions.heatmap.colorScale.ranges[seriesCnt];
          removeInactiveClassFromHoveredRange(range);
        } else if (e.type === 'mouseout') {
          activeInactive('remove');
        }
      }
    }, {
      key: "getActiveConfigSeriesIndex",
      value: function getActiveConfigSeriesIndex() {
        var ignoreBars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var w = this.w;
        var activeIndex = 0;

        if (w.config.series.length > 1) {
          // active series flag is required to know if user has not deactivated via legend click
          var firstActiveSeriesIndex = w.config.series.map(function (series, index) {
            var hasBars = false;

            if (ignoreBars) {
              hasBars = w.config.series[index].type === 'bar' || w.config.series[index].type === 'column';
            }

            return series.data && series.data.length > 0 && !hasBars ? index : -1;
          });

          for (var a = 0; a < firstActiveSeriesIndex.length; a++) {
            if (firstActiveSeriesIndex[a] !== -1) {
              activeIndex = firstActiveSeriesIndex[a];
              break;
            }
          }
        }

        return activeIndex;
      }
    }, {
      key: "getPreviousPaths",
      value: function getPreviousPaths() {
        var w = this.w;
        w.globals.previousPaths = [];

        function pushPaths(seriesEls, i, type) {
          var paths = seriesEls[i].childNodes;
          var dArr = {
            type: type,
            paths: [],
            realIndex: seriesEls[i].getAttribute('data:realIndex')
          };

          for (var j = 0; j < paths.length; j++) {
            if (paths[j].hasAttribute('pathTo')) {
              var d = paths[j].getAttribute('pathTo');
              dArr.paths.push({
                d: d
              });
            }
          }

          w.globals.previousPaths.push(dArr);
        }

        var getPaths = function getPaths(chartType) {
          return w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(chartType, "-series .apexcharts-series"));
        };

        var chartTypes = ['line', 'area', 'bar', 'candlestick', 'radar'];
        chartTypes.forEach(function (type) {
          var paths = getPaths(type);

          for (var p = 0; p < paths.length; p++) {
            pushPaths(paths, p, type);
          }
        });
        this.handlePrevBubbleScatterPaths('bubble');
        this.handlePrevBubbleScatterPaths('scatter');
        var heatmapColors = w.globals.dom.baseEl.querySelectorAll('.apexcharts-heatmap .apexcharts-series');

        if (heatmapColors.length > 0) {
          for (var h = 0; h < heatmapColors.length; h++) {
            var seriesEls = w.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series[data\\:realIndex='".concat(h, "'] rect"));
            var dArr = [];

            for (var i = 0; i < seriesEls.length; i++) {
              dArr.push({
                color: seriesEls[i].getAttribute('color')
              });
            }

            w.globals.previousPaths.push(dArr);
          }
        }

        if (!w.globals.axisCharts) {
          // for non-axis charts (i.e., circular charts, pathFrom is not usable. We need whole series)
          w.globals.previousPaths = w.globals.series;
        }
      }
    }, {
      key: "handlePrevBubbleScatterPaths",
      value: function handlePrevBubbleScatterPaths(type) {
        var w = this.w;
        var paths = w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(type, "-series .apexcharts-series"));

        if (paths.length > 0) {
          for (var s = 0; s < paths.length; s++) {
            var seriesEls = w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(type, "-series .apexcharts-series[data\\:realIndex='").concat(s, "'] circle"));
            var dArr = [];

            for (var i = 0; i < seriesEls.length; i++) {
              dArr.push({
                x: seriesEls[i].getAttribute('cx'),
                y: seriesEls[i].getAttribute('cy'),
                r: seriesEls[i].getAttribute('r')
              });
            }

            w.globals.previousPaths.push(dArr);
          }
        }
      }
    }, {
      key: "clearPreviousPaths",
      value: function clearPreviousPaths() {
        var w = this.w;
        w.globals.previousPaths = [];
        w.globals.allSeriesCollapsed = false;
      }
    }, {
      key: "handleNoData",
      value: function handleNoData() {
        var w = this.w;
        var me = this;
        var noDataOpts = w.config.noData;
        var graphics = new Graphics(me.ctx);
        var x = w.globals.svgWidth / 2;
        var y = w.globals.svgHeight / 2;
        var textAnchor = 'middle';
        w.globals.noData = true;
        w.globals.animationEnded = true;

        if (noDataOpts.align === 'left') {
          x = 10;
          textAnchor = 'start';
        } else if (noDataOpts.align === 'right') {
          x = w.globals.svgWidth - 10;
          textAnchor = 'end';
        }

        if (noDataOpts.verticalAlign === 'top') {
          y = 50;
        } else if (noDataOpts.verticalAlign === 'bottom') {
          y = w.globals.svgHeight - 50;
        }

        x = x + noDataOpts.offsetX;
        y = y + parseInt(noDataOpts.style.fontSize, 10) + 2 + noDataOpts.offsetY;

        if (noDataOpts.text !== undefined && noDataOpts.text !== '') {
          var titleText = graphics.drawText({
            x: x,
            y: y,
            text: noDataOpts.text,
            textAnchor: textAnchor,
            fontSize: noDataOpts.style.fontSize,
            fontFamily: noDataOpts.style.fontFamily,
            foreColor: noDataOpts.style.color,
            opacity: 1,
            class: 'apexcharts-text-nodata'
          });
          w.globals.dom.Paper.add(titleText);
        }
      } // When user clicks on legends, the collapsed series is filled with [0,0,0,...,0]
      // This is because we don't want to alter the series' length as it is used at many places

    }, {
      key: "setNullSeriesToZeroValues",
      value: function setNullSeriesToZeroValues(series) {
        var w = this.w;

        for (var sl = 0; sl < series.length; sl++) {
          if (series[sl].length === 0) {
            for (var j = 0; j < series[w.globals.maxValsInArrayIndex].length; j++) {
              series[sl].push(0);
            }
          }
        }

        return series;
      }
    }, {
      key: "hasAllSeriesEqualX",
      value: function hasAllSeriesEqualX() {
        var equalLen = true;
        var w = this.w;
        var filteredSerX = this.filteredSeriesX();

        for (var i = 0; i < filteredSerX.length - 1; i++) {
          if (filteredSerX[i][0] !== filteredSerX[i + 1][0]) {
            equalLen = false;
            break;
          }
        }

        w.globals.allSeriesHasEqualX = equalLen;
        return equalLen;
      }
    }, {
      key: "filteredSeriesX",
      value: function filteredSeriesX() {
        var w = this.w;
        var filteredSeriesX = w.globals.seriesX.map(function (ser) {
          return ser.length > 0 ? ser : [];
        });
        return filteredSeriesX;
      }
    }]);

    return Series;
  }();

  var Data =
  /*#__PURE__*/
  function () {
    function Data(ctx) {
      _classCallCheck(this, Data);

      this.ctx = ctx;
      this.w = ctx.w;
      this.twoDSeries = [];
      this.threeDSeries = [];
      this.twoDSeriesX = [];
      this.coreUtils = new CoreUtils(this.ctx);
    }

    _createClass(Data, [{
      key: "isMultiFormat",
      value: function isMultiFormat() {
        return this.isFormatXY() || this.isFormat2DArray();
      } // given format is [{x, y}, {x, y}]

    }, {
      key: "isFormatXY",
      value: function isFormatXY() {
        var series = this.w.config.series.slice();
        var sr = new Series(this.ctx);
        this.activeSeriesIndex = sr.getActiveConfigSeriesIndex();

        if (typeof series[this.activeSeriesIndex].data !== 'undefined' && series[this.activeSeriesIndex].data.length > 0 && series[this.activeSeriesIndex].data[0] !== null && typeof series[this.activeSeriesIndex].data[0].x !== 'undefined' && series[this.activeSeriesIndex].data[0] !== null) {
          return true;
        }
      } // given format is [[x, y], [x, y]]

    }, {
      key: "isFormat2DArray",
      value: function isFormat2DArray() {
        var series = this.w.config.series.slice();
        var sr = new Series(this.ctx);
        this.activeSeriesIndex = sr.getActiveConfigSeriesIndex();

        if (typeof series[this.activeSeriesIndex].data !== 'undefined' && series[this.activeSeriesIndex].data.length > 0 && typeof series[this.activeSeriesIndex].data[0] !== 'undefined' && series[this.activeSeriesIndex].data[0] !== null && series[this.activeSeriesIndex].data[0].constructor === Array) {
          return true;
        }
      }
    }, {
      key: "handleFormat2DArray",
      value: function handleFormat2DArray(ser, i) {
        var cnf = this.w.config;
        var gl = this.w.globals;

        for (var j = 0; j < ser[i].data.length; j++) {
          if (typeof ser[i].data[j][1] !== 'undefined') {
            if (Array.isArray(ser[i].data[j][1]) && ser[i].data[j][1].length === 4) {
              // candlestick nested ohlc format
              this.twoDSeries.push(Utils.parseNumber(ser[i].data[j][1][3]));
            } else if (ser[i].data[j].length === 5) {
              // candlestick non-nested ohlc format
              this.twoDSeries.push(Utils.parseNumber(ser[i].data[j][4]));
            } else {
              this.twoDSeries.push(Utils.parseNumber(ser[i].data[j][1]));
            }

            gl.dataFormatXNumeric = true;
          }

          if (cnf.xaxis.type === 'datetime') {
            // if timestamps are provided and xaxis type is datettime,
            var ts = new Date(ser[i].data[j][0]);
            ts = new Date(ts).getTime();
            this.twoDSeriesX.push(ts);
          } else {
            this.twoDSeriesX.push(ser[i].data[j][0]);
          }
        }

        for (var _j = 0; _j < ser[i].data.length; _j++) {
          if (typeof ser[i].data[_j][2] !== 'undefined') {
            this.threeDSeries.push(ser[i].data[_j][2]);
            gl.isDataXYZ = true;
          }
        }
      }
    }, {
      key: "handleFormatXY",
      value: function handleFormatXY(ser, i) {
        var cnf = this.w.config;
        var gl = this.w.globals;
        var dt = new DateTime(this.ctx);
        var activeI = i;

        if (gl.collapsedSeriesIndices.indexOf(i) > -1) {
          // fix #368
          activeI = this.activeSeriesIndex;
        } // get series


        for (var j = 0; j < ser[i].data.length; j++) {
          if (typeof ser[i].data[j].y !== 'undefined') {
            if (Array.isArray(ser[i].data[j].y)) {
              this.twoDSeries.push(Utils.parseNumber(ser[i].data[j].y[ser[i].data[j].y.length - 1]));
            } else {
              this.twoDSeries.push(Utils.parseNumber(ser[i].data[j].y));
            }
          }
        } // get seriesX


        for (var _j2 = 0; _j2 < ser[activeI].data.length; _j2++) {
          var isXString = typeof ser[activeI].data[_j2].x === 'string';
          var isXArr = Array.isArray(ser[activeI].data[_j2].x);
          var isXDate = !isXArr && !!dt.isValidDate(ser[activeI].data[_j2].x.toString());

          if (isXString || isXDate) {
            // user supplied '01/01/2017' or a date string (a JS date object is not supported)
            if (isXString || cnf.xaxis.convertedCatToNumeric) {
              if (cnf.xaxis.type === 'datetime' && !gl.isRangeData) {
                this.twoDSeriesX.push(dt.parseDate(ser[activeI].data[_j2].x));
              } else {
                // a category and not a numeric x value
                this.fallbackToCategory = true;
                this.twoDSeriesX.push(ser[activeI].data[_j2].x);
              }
            } else {
              if (cnf.xaxis.type === 'datetime') {
                this.twoDSeriesX.push(dt.parseDate(ser[activeI].data[_j2].x.toString()));
              } else {
                gl.dataFormatXNumeric = true;
                gl.isXNumeric = true;
                this.twoDSeriesX.push(parseFloat(ser[activeI].data[_j2].x));
              }
            }
          } else if (isXArr) {
            // a multiline label described in array format
            this.fallbackToCategory = true;
            this.twoDSeriesX.push(ser[activeI].data[_j2].x);
          } else {
            // a numeric value in x property
            gl.isXNumeric = true;
            gl.dataFormatXNumeric = true;
            this.twoDSeriesX.push(ser[activeI].data[_j2].x);
          }
        }

        if (ser[i].data[0] && typeof ser[i].data[0].z !== 'undefined') {
          for (var t = 0; t < ser[i].data.length; t++) {
            this.threeDSeries.push(ser[i].data[t].z);
          }

          gl.isDataXYZ = true;
        }
      }
    }, {
      key: "handleRangeData",
      value: function handleRangeData(ser, i) {
        var cnf = this.w.config;
        var gl = this.w.globals;
        var range = {};

        if (this.isFormat2DArray()) {
          range = this.handleRangeDataFormat('array', ser, i);
        } else if (this.isFormatXY()) {
          range = this.handleRangeDataFormat('xy', ser, i);
        }

        gl.seriesRangeStart.push(range.start);
        gl.seriesRangeEnd.push(range.end);

        if (cnf.xaxis.type === 'datetime') {
          gl.seriesRangeBarTimeline.push(range.rangeUniques);
        } // check for overlaps to avoid clashes in a timeline chart


        gl.seriesRangeBarTimeline.forEach(function (sr, si) {
          if (sr) {
            sr.forEach(function (sarr, sarri) {
              sarr.y.forEach(function (arr, arri) {
                for (var sri = 0; sri < sarr.y.length; sri++) {
                  if (arri !== sri) {
                    var range1y1 = arr.y1;
                    var range1y2 = arr.y2;
                    var range2y1 = sarr.y[sri].y1;
                    var range2y2 = sarr.y[sri].y2;

                    if (range1y1 <= range2y2 && range2y1 <= range1y2) {
                      if (sarr.overlaps.indexOf(arr.rangeName) < 0) {
                        sarr.overlaps.push(arr.rangeName);
                      }

                      if (sarr.overlaps.indexOf(sarr.y[sri].rangeName) < 0) {
                        sarr.overlaps.push(sarr.y[sri].rangeName);
                      }
                    }
                  }
                }
              });
            });
          }
        });
        return range;
      }
    }, {
      key: "handleCandleStickData",
      value: function handleCandleStickData(ser, i) {
        var gl = this.w.globals;
        var ohlc = {};

        if (this.isFormat2DArray()) {
          ohlc = this.handleCandleStickDataFormat('array', ser, i);
        } else if (this.isFormatXY()) {
          ohlc = this.handleCandleStickDataFormat('xy', ser, i);
        }

        gl.seriesCandleO[i] = ohlc.o;
        gl.seriesCandleH[i] = ohlc.h;
        gl.seriesCandleL[i] = ohlc.l;
        gl.seriesCandleC[i] = ohlc.c;
        return ohlc;
      }
    }, {
      key: "handleRangeDataFormat",
      value: function handleRangeDataFormat(format, ser, i) {
        var rangeStart = [];
        var rangeEnd = [];
        var uniqueKeys = ser[i].data.filter(function (thing, index, self) {
          return index === self.findIndex(function (t) {
            return t.x === thing.x;
          });
        }).map(function (r, index) {
          return {
            x: r.x,
            overlaps: [],
            y: []
          };
        });
        var err = 'Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts';
        var serObj = new Series(this.ctx);
        var activeIndex = serObj.getActiveConfigSeriesIndex();

        if (format === 'array') {
          if (ser[activeIndex].data[0][1].length !== 2) {
            throw new Error(err);
          }

          for (var j = 0; j < ser[i].data.length; j++) {
            rangeStart.push(ser[i].data[j][1][0]);
            rangeEnd.push(ser[i].data[j][1][1]);
          }
        } else if (format === 'xy') {
          if (ser[activeIndex].data[0].y.length !== 2) {
            throw new Error(err);
          }

          var _loop = function _loop(_j3) {
            var id = Utils.randomId();
            var x = ser[i].data[_j3].x;
            var y = {
              y1: ser[i].data[_j3].y[0],
              y2: ser[i].data[_j3].y[1],
              rangeName: id
            }; // mutating config object by adding a new property
            // TODO: As this is specifically for timeline rangebar charts, update the docs mentioning the series only supports xy format

            ser[i].data[_j3].rangeName = id;
            var uI = uniqueKeys.findIndex(function (t) {
              return t.x === x;
            });
            uniqueKeys[uI].y.push(y);
            rangeStart.push(y.y1);
            rangeEnd.push(y.y2);
          };

          for (var _j3 = 0; _j3 < ser[i].data.length; _j3++) {
            _loop(_j3);
          }
        }

        return {
          start: rangeStart,
          end: rangeEnd,
          rangeUniques: uniqueKeys
        };
      }
    }, {
      key: "handleCandleStickDataFormat",
      value: function handleCandleStickDataFormat(format, ser, i) {
        var serO = [];
        var serH = [];
        var serL = [];
        var serC = [];
        var err = 'Please provide [Open, High, Low and Close] values in valid format. Read more https://apexcharts.com/docs/series/#candlestick';

        if (format === 'array') {
          if (!Array.isArray(ser[i].data[0][1]) && ser[i].data[0].length !== 5 || Array.isArray(ser[i].data[0][1]) && ser[i].data[0][1].length !== 4) {
            throw new Error(err);
          }

          if (ser[i].data[0].length === 5) {
            for (var j = 0; j < ser[i].data.length; j++) {
              serO.push(ser[i].data[j][1]);
              serH.push(ser[i].data[j][2]);
              serL.push(ser[i].data[j][3]);
              serC.push(ser[i].data[j][4]);
            }
          } else {
            for (var _j4 = 0; _j4 < ser[i].data.length; _j4++) {
              serO.push(ser[i].data[_j4][1][0]);
              serH.push(ser[i].data[_j4][1][1]);
              serL.push(ser[i].data[_j4][1][2]);
              serC.push(ser[i].data[_j4][1][3]);
            }
          }
        } else if (format === 'xy') {
          if (ser[i].data[0].y.length !== 4) {
            throw new Error(err);
          }

          for (var _j5 = 0; _j5 < ser[i].data.length; _j5++) {
            serO.push(ser[i].data[_j5].y[0]);
            serH.push(ser[i].data[_j5].y[1]);
            serL.push(ser[i].data[_j5].y[2]);
            serC.push(ser[i].data[_j5].y[3]);
          }
        }

        return {
          o: serO,
          h: serH,
          l: serL,
          c: serC
        };
      }
    }, {
      key: "parseDataAxisCharts",
      value: function parseDataAxisCharts(ser) {
        var _this = this;

        var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.ctx;
        var cnf = this.w.config;
        var gl = this.w.globals;
        var dt = new DateTime(ctx);
        var xlabels = cnf.labels.length > 0 ? cnf.labels.slice() : cnf.xaxis.categories.slice();

        var handleDates = function handleDates() {
          for (var j = 0; j < xlabels.length; j++) {
            if (typeof xlabels[j] === 'string') {
              // user provided date strings
              var isDate = dt.isValidDate(xlabels[j]);

              if (isDate) {
                _this.twoDSeriesX.push(dt.parseDate(xlabels[j]));
              } else {
                throw new Error('You have provided invalid Date format. Please provide a valid JavaScript Date');
              }
            } else {
              // user provided timestamps
              if (String(xlabels[j]).length !== 13) {
                throw new Error('Please provide a valid JavaScript timestamp');
              } else {
                _this.twoDSeriesX.push(xlabels[j]);
              }
            }
          }
        };

        for (var i = 0; i < ser.length; i++) {
          this.twoDSeries = [];
          this.twoDSeriesX = [];
          this.threeDSeries = [];

          if (typeof ser[i].data === 'undefined') {
            console.error("It is a possibility that you may have not included 'data' property in series.");
            return;
          }

          if (cnf.chart.type === 'rangeBar' || cnf.chart.type === 'rangeArea' || ser[i].type === 'rangeBar' || ser[i].type === 'rangeArea') {
            gl.isRangeData = true;
            this.handleRangeData(ser, i);
          }

          if (this.isMultiFormat()) {
            if (this.isFormat2DArray()) {
              this.handleFormat2DArray(ser, i);
            } else if (this.isFormatXY()) {
              this.handleFormatXY(ser, i);
            }

            if (cnf.chart.type === 'candlestick' || ser[i].type === 'candlestick') {
              this.handleCandleStickData(ser, i);
            }

            gl.series.push(this.twoDSeries);
            gl.labels.push(this.twoDSeriesX);
            gl.seriesX.push(this.twoDSeriesX);

            if (i === this.activeSeriesIndex && !this.fallbackToCategory) {
              gl.isXNumeric = true;
            }
          } else {
            if (cnf.xaxis.type === 'datetime') {
              // user didn't supplied [{x,y}] or [[x,y]], but single array in data.
              // Also labels/categories were supplied differently
              gl.isXNumeric = true;
              handleDates();
              gl.seriesX.push(this.twoDSeriesX);
            } else if (cnf.xaxis.type === 'numeric') {
              gl.isXNumeric = true;

              if (xlabels.length > 0) {
                this.twoDSeriesX = xlabels;
                gl.seriesX.push(this.twoDSeriesX);
              }
            }

            gl.labels.push(this.twoDSeriesX);
            var singleArray = ser[i].data.map(function (d) {
              return Utils.parseNumber(d);
            });
            gl.series.push(singleArray);
          }

          gl.seriesZ.push(this.threeDSeries);

          if (ser[i].name !== undefined) {
            gl.seriesNames.push(ser[i].name);
          } else {
            gl.seriesNames.push('series-' + parseInt(i + 1, 10));
          }
        }

        return this.w;
      }
    }, {
      key: "parseDataNonAxisCharts",
      value: function parseDataNonAxisCharts(ser) {
        var gl = this.w.globals;
        var cnf = this.w.config;
        gl.series = ser.slice();
        gl.seriesNames = cnf.labels.slice();

        for (var i = 0; i < gl.series.length; i++) {
          if (gl.seriesNames[i] === undefined) {
            gl.seriesNames.push('series-' + (i + 1));
          }
        }

        return this.w;
      }
      /** User possibly set string categories in xaxis.categories or labels prop
       * Or didn't set xaxis labels at all - in which case we manually do it.
       * If user passed series data as [[3, 2], [4, 5]] or [{ x: 3, y: 55 }],
       * this shouldn't be called
       * @param {array} ser - the series which user passed to the config
       */

    }, {
      key: "handleExternalLabelsData",
      value: function handleExternalLabelsData(ser) {
        var cnf = this.w.config;
        var gl = this.w.globals;

        if (cnf.xaxis.categories.length > 0) {
          // user provided labels in xaxis.category prop
          gl.labels = cnf.xaxis.categories;
        } else if (cnf.labels.length > 0) {
          // user provided labels in labels props
          gl.labels = cnf.labels.slice();
        } else if (this.fallbackToCategory) {
          // user provided labels in x prop in [{ x: 3, y: 55 }] data, and those labels are already stored in gl.labels[0], so just re-arrange the gl.labels array
          gl.labels = gl.labels[0];

          if (gl.seriesRangeBarTimeline.length) {
            gl.seriesRangeBarTimeline.map(function (srt) {
              srt.forEach(function (sr) {
                if (gl.labels.indexOf(sr.x) < 0 && sr.x) {
                  gl.labels.push(sr.x);
                }
              });
            });
            gl.labels = gl.labels.filter(function (elem, pos, arr) {
              return arr.indexOf(elem) === pos;
            });
          }

          if (cnf.xaxis.convertedCatToNumeric) {
            var defaults = new Defaults(cnf);
            defaults.convertCatToNumericXaxis(cnf, this.ctx, gl.seriesX[0]);

            this._generateExternalLabels(ser);
          }
        } else {
          this._generateExternalLabels(ser);
        }
      }
    }, {
      key: "_generateExternalLabels",
      value: function _generateExternalLabels(ser) {
        var gl = this.w.globals;
        var cnf = this.w.config; // user didn't provided any labels, fallback to 1-2-3-4-5

        var labelArr = [];

        if (gl.axisCharts) {
          if (gl.series.length > 0) {
            for (var i = 0; i < gl.series[gl.maxValsInArrayIndex].length; i++) {
              labelArr.push(i + 1);
            }
          }

          gl.seriesX = []; // create gl.seriesX as it will be used in calculations of x positions

          for (var _i = 0; _i < ser.length; _i++) {
            gl.seriesX.push(labelArr);
          } // turn on the isXNumeric flag to allow minX and maxX to function properly


          gl.isXNumeric = true;
        } // no series to pull labels from, put a 0-10 series
        // possibly, user collapsed all series. Hence we can't work with above calc


        if (labelArr.length === 0) {
          labelArr = gl.axisCharts ? [0, 10] : gl.series.map(function (gls, glsi) {
            return glsi + 1;
          });

          for (var _i2 = 0; _i2 < ser.length; _i2++) {
            gl.seriesX.push(labelArr);
          }
        } // Finally, pass the labelArr in gl.labels which will be printed on x-axis


        gl.labels = labelArr;

        if (cnf.xaxis.convertedCatToNumeric) {
          gl.categoryLabels = labelArr.map(function (l) {
            return cnf.xaxis.labels.formatter(l);
          });
        } // Turn on this global flag to indicate no labels were provided by user


        gl.noLabelsProvided = true;
      } // Segregate user provided data into appropriate vars

    }, {
      key: "parseData",
      value: function parseData(ser) {
        var w = this.w;
        var cnf = w.config;
        var gl = w.globals;
        this.excludeCollapsedSeriesInYAxis(); // If we detected string in X prop of series, we fallback to category x-axis

        this.fallbackToCategory = false;
        this.ctx.core.resetGlobals();
        this.ctx.core.isMultipleY();

        if (gl.axisCharts) {
          // axisCharts includes line / area / column / scatter
          this.parseDataAxisCharts(ser);
        } else {
          // non-axis charts are pie / donut
          this.parseDataNonAxisCharts(ser);
        }

        this.coreUtils.getLargestSeries(); // set Null values to 0 in all series when user hides/shows some series

        if (cnf.chart.type === 'bar' && cnf.chart.stacked) {
          var series = new Series(this.ctx);
          gl.series = series.setNullSeriesToZeroValues(gl.series);
        }

        this.coreUtils.getSeriesTotals();

        if (gl.axisCharts) {
          this.coreUtils.getStackedSeriesTotals();
        }

        this.coreUtils.getPercentSeries();

        if (!gl.dataFormatXNumeric && (!gl.isXNumeric || cnf.xaxis.type === 'numeric' && cnf.labels.length === 0 && cnf.xaxis.categories.length === 0)) {
          // x-axis labels couldn't be detected; hence try searching every option in config
          this.handleExternalLabelsData(ser);
        } // check for multiline xaxis


        var catLabels = this.coreUtils.getCategoryLabels(gl.labels);

        for (var l = 0; l < catLabels.length; l++) {
          if (Array.isArray(catLabels[l])) {
            gl.isMultiLineX = true;
            break;
          }
        }
      }
    }, {
      key: "excludeCollapsedSeriesInYAxis",
      value: function excludeCollapsedSeriesInYAxis() {
        var _this2 = this;

        var w = this.w;
        w.globals.ignoreYAxisIndexes = w.globals.collapsedSeries.map(function (collapsed, i) {
          // fix issue #1215
          // if stacked, not returning collapsed.index to preserve yaxis
          if (_this2.w.globals.isMultipleYAxis && !w.config.chart.stacked) {
            return collapsed.index;
          }
        });
      }
    }]);

    return Data;
  }();

  /**
   * ApexCharts Formatter Class for setting value formatters for axes as well as tooltips.
   *
   * @module Formatters
   **/

  var Formatters =
  /*#__PURE__*/
  function () {
    function Formatters(ctx) {
      _classCallCheck(this, Formatters);

      this.ctx = ctx;
      this.w = ctx.w;
      this.tooltipKeyFormat = 'dd MMM';
    }

    _createClass(Formatters, [{
      key: "xLabelFormat",
      value: function xLabelFormat(fn, val, timestamp) {
        var w = this.w;

        if (w.config.xaxis.type === 'datetime') {
          if (w.config.xaxis.labels.formatter === undefined) {
            // if user has not specified a custom formatter, use the default tooltip.x.format
            if (w.config.tooltip.x.formatter === undefined) {
              var datetimeObj = new DateTime(this.ctx);
              return datetimeObj.formatDate(datetimeObj.getDate(val), w.config.tooltip.x.format);
            }
          }
        }

        return fn(val, timestamp);
      }
    }, {
      key: "defaultGeneralFormatter",
      value: function defaultGeneralFormatter(val) {
        if (Array.isArray(val)) {
          return val.map(function (v) {
            return v;
          });
        } else {
          return val;
        }
      }
    }, {
      key: "defaultYFormatter",
      value: function defaultYFormatter(v, yaxe, i) {
        var w = this.w;

        if (Utils.isNumber(v)) {
          if (w.globals.yValueDecimal !== 0) {
            v = v.toFixed(yaxe.decimalsInFloat !== undefined ? yaxe.decimalsInFloat : w.globals.yValueDecimal);
          } else if (w.globals.maxYArr[i] - w.globals.minYArr[i] < 10) {
            v = v.toFixed(1);
          } else {
            v = v.toFixed(0);
          }
        }

        return v;
      }
    }, {
      key: "setLabelFormatters",
      value: function setLabelFormatters() {
        var _this = this;

        var w = this.w;

        w.globals.xLabelFormatter = function (val) {
          return _this.defaultGeneralFormatter(val);
        };

        w.globals.xaxisTooltipFormatter = function (val) {
          return _this.defaultGeneralFormatter(val);
        };

        w.globals.ttKeyFormatter = function (val) {
          return _this.defaultGeneralFormatter(val);
        };

        w.globals.ttZFormatter = function (val) {
          return val;
        };

        w.globals.legendFormatter = function (val) {
          return _this.defaultGeneralFormatter(val);
        }; // formatter function will always overwrite format property


        if (w.config.xaxis.labels.formatter !== undefined) {
          w.globals.xLabelFormatter = w.config.xaxis.labels.formatter;
        } else {
          w.globals.xLabelFormatter = function (val) {
            if (Utils.isNumber(val)) {
              // numeric xaxis may have smaller range, so defaulting to 1 decimal
              if (!w.config.xaxis.convertedCatToNumeric && w.config.xaxis.type === 'numeric' && w.globals.dataPoints < 50) {
                return val.toFixed(1);
              }

              if (w.globals.isBarHorizontal) {
                var range = w.globals.maxY - w.globals.minYArr;

                if (range < 4) {
                  return val.toFixed(1);
                }
              }

              return val.toFixed(0);
            }

            return val;
          };
        }

        if (typeof w.config.tooltip.x.formatter === 'function') {
          w.globals.ttKeyFormatter = w.config.tooltip.x.formatter;
        } else {
          w.globals.ttKeyFormatter = w.globals.xLabelFormatter;
        }

        if (typeof w.config.xaxis.tooltip.formatter === 'function') {
          w.globals.xaxisTooltipFormatter = w.config.xaxis.tooltip.formatter;
        }

        if (Array.isArray(w.config.tooltip.y)) {
          w.globals.ttVal = w.config.tooltip.y;
        } else {
          if (w.config.tooltip.y.formatter !== undefined) {
            w.globals.ttVal = w.config.tooltip.y;
          }
        }

        if (w.config.tooltip.z.formatter !== undefined) {
          w.globals.ttZFormatter = w.config.tooltip.z.formatter;
        } // legend formatter - if user wants to append any global values of series to legend text


        if (w.config.legend.formatter !== undefined) {
          w.globals.legendFormatter = w.config.legend.formatter;
        } // formatter function will always overwrite format property


        w.config.yaxis.forEach(function (yaxe, i) {
          if (yaxe.labels.formatter !== undefined) {
            w.globals.yLabelFormatters[i] = yaxe.labels.formatter;
          } else {
            w.globals.yLabelFormatters[i] = function (val) {
              if (!w.globals.xyCharts) return val;

              if (Array.isArray(val)) {
                return val.map(function (v) {
                  return _this.defaultYFormatter(v, yaxe, i);
                });
              } else {
                return _this.defaultYFormatter(val, yaxe, i);
              }
            };
          }
        });
        return w.globals;
      }
    }, {
      key: "heatmapLabelFormatters",
      value: function heatmapLabelFormatters() {
        var w = this.w;

        if (w.config.chart.type === 'heatmap') {
          w.globals.yAxisScale[0].result = w.globals.seriesNames.slice(); //  get the longest string from the labels array and also apply label formatter to it

          var longest = w.globals.seriesNames.reduce(function (a, b) {
            return a.length > b.length ? a : b;
          }, 0);
          w.globals.yAxisScale[0].niceMax = longest;
          w.globals.yAxisScale[0].niceMin = longest;
        }
      }
    }]);

    return Formatters;
  }();

  var AxesUtils =
  /*#__PURE__*/
  function () {
    function AxesUtils(ctx) {
      _classCallCheck(this, AxesUtils);

      this.ctx = ctx;
      this.w = ctx.w;
    } // Based on the formatter function, get the label text and position


    _createClass(AxesUtils, [{
      key: "getLabel",
      value: function getLabel(labels, timescaleLabels, x, i) {
        var drawnLabels = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
        var fontSize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '12px';
        var w = this.w;
        var rawLabel = typeof labels[i] === 'undefined' ? '' : labels[i];
        var label = rawLabel;
        var xlbFormatter = w.globals.xLabelFormatter;
        var customFormatter = w.config.xaxis.labels.formatter;
        var isBold = false;
        var xFormat = new Formatters(this.ctx);
        var timestamp = rawLabel;
        label = xFormat.xLabelFormat(xlbFormatter, rawLabel, timestamp);

        if (customFormatter !== undefined) {
          label = customFormatter(rawLabel, labels[i], i);
        }

        var determineHighestUnit = function determineHighestUnit(unit) {
          var highestUnit = null;
          timescaleLabels.forEach(function (t) {
            if (t.unit === 'month') {
              highestUnit = 'year';
            } else if (t.unit === 'day') {
              highestUnit = 'month';
            } else if (t.unit === 'hour') {
              highestUnit = 'day';
            } else if (t.unit === 'minute') {
              highestUnit = 'hour';
            }
          });
          return highestUnit === unit;
        };

        if (timescaleLabels.length > 0) {
          isBold = determineHighestUnit(timescaleLabels[i].unit);
          x = timescaleLabels[i].position;
          label = timescaleLabels[i].value;
        } else {
          if (w.config.xaxis.type === 'datetime' && customFormatter === undefined) {
            label = '';
          }
        }

        if (typeof label === 'undefined') label = '';
        label = Array.isArray(label) ? label : label.toString();
        var graphics = new Graphics(this.ctx);
        var textRect = {};

        if (w.globals.rotateXLabels) {
          textRect = graphics.getTextRects(label, parseInt(fontSize, 10), null, "rotate(".concat(w.config.xaxis.labels.rotate, " 0 0)"), false);
        } else {
          textRect = graphics.getTextRects(label, parseInt(fontSize, 10));
        }

        if (!Array.isArray(label) && (label.indexOf('NaN') === 0 || label.toLowerCase().indexOf('invalid') === 0 || label.toLowerCase().indexOf('infinity') >= 0 || drawnLabels.indexOf(label) >= 0 && !w.config.xaxis.labels.showDuplicates)) {
          label = '';
        }

        return {
          x: x,
          text: label,
          textRect: textRect,
          isBold: isBold
        };
      }
    }, {
      key: "checkForOverflowingLabels",
      value: function checkForOverflowingLabels(i, label, labelsLen, drawnLabels, drawnLabelsRects) {
        var w = this.w;

        if (i === 0) {
          // check if first label is being truncated
          if (w.globals.skipFirstTimelinelabel) {
            label.text = '';
          }
        }

        if (i === labelsLen - 1) {
          // check if last label is being truncated
          if (w.globals.skipLastTimelinelabel) {
            label.text = '';
          }
        }

        if (w.config.xaxis.labels.hideOverlappingLabels && drawnLabels.length > 0) {
          var prev = drawnLabelsRects[drawnLabelsRects.length - 1];

          if (label.x < prev.textRect.width / (w.globals.rotateXLabels ? Math.abs(w.config.xaxis.labels.rotate) / 20 : 1.01) + prev.x) {
            label.text = '';
          }
        }

        return label;
      }
    }, {
      key: "checkForReversedLabels",
      value: function checkForReversedLabels(i, labels) {
        var w = this.w;

        if (w.config.yaxis[i] && w.config.yaxis[i].reversed) {
          labels.reverse();
        }

        return labels;
      }
    }, {
      key: "drawYAxisTicks",
      value: function drawYAxisTicks(x, tickAmount, axisBorder, axisTicks, realIndex, labelsDivider, elYaxis) {
        var w = this.w;
        var graphics = new Graphics(this.ctx); // initial label position = 0;

        var t = w.globals.translateY;

        if (axisTicks.show && tickAmount > 0) {
          if (w.config.yaxis[realIndex].opposite === true) x = x + axisTicks.width;

          for (var i = tickAmount; i >= 0; i--) {
            var tY = t + tickAmount / 10 + w.config.yaxis[realIndex].labels.offsetY - 1;

            if (w.globals.isBarHorizontal) {
              tY = labelsDivider * i;
            }

            if (w.config.chart.type === 'heatmap') {
              tY = tY + labelsDivider / 2;
            }

            var elTick = graphics.drawLine(x + axisBorder.offsetX - axisTicks.width + axisTicks.offsetX, tY + axisTicks.offsetY, x + axisBorder.offsetX + axisTicks.offsetX, tY + axisTicks.offsetY, axisTicks.color);
            elYaxis.add(elTick);
            t = t + labelsDivider;
          }
        }
      }
    }]);

    return AxesUtils;
  }();

  var Exports =
  /*#__PURE__*/
  function () {
    function Exports(ctx) {
      _classCallCheck(this, Exports);

      this.ctx = ctx;
      this.w = ctx.w;
    }

    _createClass(Exports, [{
      key: "fixSvgStringForIe11",
      value: function fixSvgStringForIe11(svgData) {
        // IE11 generates broken SVG that we have to fix by using regex
        if (!Utils.isIE11()) {
          // not IE11 - noop
          return svgData;
        } // replace second occurence of "xmlns" attribute with "xmlns:xlink" with correct url + add xmlns:svgjs


        var nXmlnsSeen = 0;
        var result = svgData.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, function (match) {
          nXmlnsSeen++;
          return nXmlnsSeen === 2 ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"' : match;
        }); // remove the invalid empty namespace declarations

        result = result.replace(/xmlns:NS\d+=""/g, ''); // remove these broken namespaces from attributes

        result = result.replace(/NS\d+:(\w+:\w+=")/g, '$1');
        return result;
      }
    }, {
      key: "getSvgString",
      value: function getSvgString() {
        var svgString = this.w.globals.dom.Paper.svg();
        return this.fixSvgStringForIe11(svgString);
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        var w = this.w; // hide some elements to avoid printing them on exported svg

        var xcrosshairs = w.globals.dom.baseEl.querySelector('.apexcharts-xcrosshairs');
        var ycrosshairs = w.globals.dom.baseEl.querySelector('.apexcharts-ycrosshairs');
        var zoomSelectionRects = w.globals.dom.baseEl.querySelectorAll('.apexcharts-zoom-rect, .apexcharts-selection-rect');
        Array.prototype.forEach.call(zoomSelectionRects, function (z) {
          z.setAttribute('width', 0);
        });

        if (xcrosshairs) {
          xcrosshairs.setAttribute('x', -500);
          xcrosshairs.setAttribute('x1', -500);
          xcrosshairs.setAttribute('x2', -500);
        }

        if (ycrosshairs) {
          ycrosshairs.setAttribute('y', -100);
          ycrosshairs.setAttribute('y1', -100);
          ycrosshairs.setAttribute('y2', -100);
        }
      }
    }, {
      key: "svgUrl",
      value: function svgUrl() {
        this.cleanup();
        var svgData = this.getSvgString();
        var svgBlob = new Blob([svgData], {
          type: 'image/svg+xml;charset=utf-8'
        });
        return URL.createObjectURL(svgBlob);
      }
    }, {
      key: "dataURI",
      value: function dataURI() {
        var _this = this;

        return new Promise(function (resolve) {
          var w = _this.w;

          _this.cleanup();

          var canvas = document.createElement('canvas');
          canvas.width = w.globals.svgWidth;
          canvas.height = parseInt(w.globals.dom.elWrap.style.height, 10); // because of resizeNonAxisCharts

          var canvasBg = w.config.chart.background === 'transparent' ? '#fff' : w.config.chart.background;
          var ctx = canvas.getContext('2d');
          ctx.fillStyle = canvasBg;
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          var svgData = _this.getSvgString();

          if (window.canvg && Utils.isIE11()) {
            // use canvg as a polyfill to workaround ie11 considering a canvas with loaded svg 'unsafe'
            // without ignoreClear we lose our background color; without ignoreDimensions some grid lines become invisible
            var v = window.canvg.Canvg.fromString(ctx, svgData, {
              ignoreClear: true,
              ignoreDimensions: true
            }); // render the svg to canvas

            v.start();
            var blob = canvas.msToBlob(); // dispose - missing this will cause a memory leak

            v.stop();
            resolve({
              blob: blob
            });
          } else {
            var svgUrl = 'data:image/svg+xml,' + encodeURIComponent(svgData);
            var img = new Image();
            img.crossOrigin = 'anonymous';

            img.onload = function () {
              ctx.drawImage(img, 0, 0);

              if (canvas.msToBlob) {
                // IE and Edge can't navigate to data urls, so we return the blob instead
                var _blob = canvas.msToBlob();

                resolve({
                  blob: _blob
                });
              } else {
                var imgURI = canvas.toDataURL('image/png');
                resolve({
                  imgURI: imgURI
                });
              }
            };

            img.src = svgUrl;
          }
        });
      }
    }, {
      key: "exportToSVG",
      value: function exportToSVG() {
        this.triggerDownload(this.svgUrl(), '.svg');
      }
    }, {
      key: "exportToPng",
      value: function exportToPng() {
        var _this2 = this;

        this.dataURI().then(function (_ref) {
          var imgURI = _ref.imgURI,
              blob = _ref.blob;

          if (blob) {
            navigator.msSaveOrOpenBlob(blob, _this2.w.globals.chartID + '.png');
          } else {
            _this2.triggerDownload(imgURI, '.png');
          }
        });
      }
    }, {
      key: "exportToCSV",
      value: function exportToCSV(_ref2) {
        var _this3 = this;

        var series = _ref2.series,
            _ref2$columnDelimiter = _ref2.columnDelimiter,
            columnDelimiter = _ref2$columnDelimiter === void 0 ? ',' : _ref2$columnDelimiter,
            _ref2$lineDelimiter = _ref2.lineDelimiter,
            lineDelimiter = _ref2$lineDelimiter === void 0 ? '\n' : _ref2$lineDelimiter;
        var w = this.w;
        var columns = [];
        var rows = [];
        var result = 'data:text/csv;charset=utf-8,';
        var dataFormat = new Data(this.ctx);
        var axesUtils = new AxesUtils(this.ctx);

        var getCat = function getCat(i) {
          var cat = ''; // pie / donut/ radial

          if (!w.globals.axisCharts) {
            cat = w.config.labels[i];
          } else {
            // xy charts
            // non datetime
            if (w.config.xaxis.type === 'category' || w.config.xaxis.convertedCatToNumeric) {
              if (w.globals.isBarHorizontal) {
                var lbFormatter = w.globals.yLabelFormatters[0];
                var sr = new Series(_this3.ctx);
                var activeSeries = sr.getActiveConfigSeriesIndex();
                cat = lbFormatter(w.globals.labels[i], {
                  seriesIndex: activeSeries,
                  dataPointIndex: i,
                  w: w
                });
              } else {
                cat = axesUtils.getLabel(w.globals.labels, w.globals.timescaleLabels, 0, i).text;
              }
            } // datetime, but labels specified in categories or labels


            if (w.config.xaxis.type === 'datetime') {
              if (w.config.xaxis.categories.length) {
                cat = w.config.xaxis.categories[i];
              } else if (w.config.labels.length) {
                cat = w.config.labels[i];
              }
            }
          }

          return cat;
        };

        var handleAxisRowsColumns = function handleAxisRowsColumns(s, sI) {
          if (columns.length) {
            rows.push(columns.join(columnDelimiter));
          }

          if (s.data && s.data.length) {
            for (var i = 0; i < s.data.length; i++) {
              columns = [];
              var cat = getCat(i);

              if (!cat) {
                if (dataFormat.isFormatXY()) {
                  cat = series[sI].data[i].x;
                } else if (dataFormat.isFormat2DArray()) {
                  cat = series[sI].data[i] ? series[sI].data[i][0] : '';
                }
              }

              if (sI === 0) {
                columns.push(cat);

                for (var ci = 0; ci < w.globals.series.length; ci++) {
                  columns.push(w.globals.series[ci][i]);
                }
              }

              if (w.config.chart.type === 'candlestick' || s.type && s.type === 'candlestick') {
                columns.pop();
                columns.push(w.globals.seriesCandleO[sI][i]);
                columns.push(w.globals.seriesCandleH[sI][i]);
                columns.push(w.globals.seriesCandleL[sI][i]);
                columns.push(w.globals.seriesCandleC[sI][i]);
              }

              if (w.config.chart.type === 'rangeBar') {
                columns.pop();
                columns.push(w.globals.seriesRangeStart[sI][i]);
                columns.push(w.globals.seriesRangeEnd[sI][i]);
              }

              if (columns.length) {
                rows.push(columns.join(columnDelimiter));
              }
            }
          }
        };

        columns.push('category');
        series.map(function (s, sI) {
          if (w.globals.axisCharts) {
            columns.push(s.name ? s.name : "series-".concat(sI));
          }
        });

        if (!w.globals.axisCharts) {
          columns.push('value');
          rows.push(columns.join(columnDelimiter));
        }

        series.map(function (s, sI) {
          if (w.globals.axisCharts) {
            handleAxisRowsColumns(s, sI);
          } else {
            columns = [];
            columns.push(w.globals.labels[sI]);
            columns.push(w.globals.series[sI]);
            rows.push(columns.join(columnDelimiter));
          }
        });
        result += rows.join(lineDelimiter);
        this.triggerDownload(encodeURI(result), '.csv');
      }
    }, {
      key: "triggerDownload",
      value: function triggerDownload(href, ext) {
        var downloadLink = document.createElement('a');
        downloadLink.href = href;
        downloadLink.download = this.w.globals.chartID + ext;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    }]);

    return Exports;
  }();

  /**
   * ApexCharts XAxis Class for drawing X-Axis.
   *
   * @module XAxis
   **/

  var XAxis =
  /*#__PURE__*/
  function () {
    function XAxis(ctx) {
      _classCallCheck(this, XAxis);

      this.ctx = ctx;
      this.w = ctx.w;
      var w = this.w;
      this.axesUtils = new AxesUtils(ctx);
      this.xaxisLabels = w.globals.labels.slice();

      if (w.globals.timescaleLabels.length > 0 && !w.globals.isBarHorizontal) {
        //  timeline labels are there and chart is not rangeabr timeline
        this.xaxisLabels = w.globals.timescaleLabels.slice();
      }

      this.drawnLabels = [];
      this.drawnLabelsRects = [];

      if (w.config.xaxis.position === 'top') {
        this.offY = 0;
      } else {
        this.offY = w.globals.gridHeight + 1;
      }

      this.offY = this.offY + w.config.xaxis.axisBorder.offsetY;
      this.isCategoryBarHorizontal = w.config.chart.type === 'bar' && w.config.plotOptions.bar.horizontal;
      this.xaxisFontSize = w.config.xaxis.labels.style.fontSize;
      this.xaxisFontFamily = w.config.xaxis.labels.style.fontFamily;
      this.xaxisForeColors = w.config.xaxis.labels.style.colors;
      this.xaxisBorderWidth = w.config.xaxis.axisBorder.width;

      if (this.isCategoryBarHorizontal) {
        this.xaxisBorderWidth = w.config.yaxis[0].axisBorder.width.toString();
      }

      if (this.xaxisBorderWidth.indexOf('%') > -1) {
        this.xaxisBorderWidth = w.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100;
      } else {
        this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10);
      }

      this.xaxisBorderHeight = w.config.xaxis.axisBorder.height; // For bars, we will only consider single y xais,
      // as we are not providing multiple yaxis for bar charts

      this.yaxis = w.config.yaxis[0];
    }

    _createClass(XAxis, [{
      key: "drawXaxis",
      value: function drawXaxis() {
        var _this = this;

        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var elXaxis = graphics.group({
          class: 'apexcharts-xaxis',
          transform: "translate(".concat(w.config.xaxis.offsetX, ", ").concat(w.config.xaxis.offsetY, ")")
        });
        var elXaxisTexts = graphics.group({
          class: 'apexcharts-xaxis-texts-g',
          transform: "translate(".concat(w.globals.translateXAxisX, ", ").concat(w.globals.translateXAxisY, ")")
        });
        elXaxis.add(elXaxisTexts);
        var colWidth; // initial x Position (keep adding column width in the loop)

        var xPos = w.globals.padHorizontal;
        var labels = [];

        for (var i = 0; i < this.xaxisLabels.length; i++) {
          labels.push(this.xaxisLabels[i]);
        }

        if (w.globals.isXNumeric) {
          var len = labels.length > 1 ? labels.length - 1 : labels.length;
          colWidth = w.globals.gridWidth / len;
          xPos = xPos + colWidth / 2 + w.config.xaxis.labels.offsetX;
        } else {
          colWidth = w.globals.gridWidth / labels.length;
          xPos = xPos + colWidth + w.config.xaxis.labels.offsetX;
        }

        var labelsLen = labels.length;

        if (w.config.xaxis.labels.show) {
          var _loop = function _loop(_i) {
            var x = xPos - colWidth / 2 + w.config.xaxis.labels.offsetX;

            if (_i === 0 && labelsLen === 1 && colWidth / 2 === xPos && w.globals.dataPoints === 1) {
              // single datapoint
              x = w.globals.gridWidth / 2;
            }

            var label = _this.axesUtils.getLabel(labels, w.globals.timescaleLabels, x, _i, _this.drawnLabels, _this.xaxisFontSize);

            var offsetYCorrection = 28;

            if (w.globals.rotateXLabels) {
              offsetYCorrection = 22;
            }

            label = _this.axesUtils.checkForOverflowingLabels(_i, label, labelsLen, _this.drawnLabels, _this.drawnLabelsRects);

            var getCatForeColor = function getCatForeColor() {
              return w.config.xaxis.convertedCatToNumeric ? _this.xaxisForeColors[w.globals.minX + _i - 1] : _this.xaxisForeColors[_i];
            };

            if (label.text) {
              w.globals.xaxisLabelsCount++;
            }

            var elText = graphics.drawText({
              x: label.x,
              y: _this.offY + w.config.xaxis.labels.offsetY + offsetYCorrection,
              text: label.text,
              textAnchor: 'middle',
              fontWeight: label.isBold ? 600 : 400,
              fontSize: _this.xaxisFontSize,
              fontFamily: _this.xaxisFontFamily,
              foreColor: Array.isArray(_this.xaxisForeColors) ? getCatForeColor() : _this.xaxisForeColors,
              isPlainText: false,
              cssClass: 'apexcharts-xaxis-label ' + w.config.xaxis.labels.style.cssClass
            });
            elXaxisTexts.add(elText);
            var elTooltipTitle = document.createElementNS(w.globals.SVGNS, 'title');
            elTooltipTitle.textContent = label.text;
            elText.node.appendChild(elTooltipTitle);

            if (label.text !== '') {
              _this.drawnLabels.push(label.text);

              _this.drawnLabelsRects.push(label);
            }

            xPos = xPos + colWidth;
          };

          for (var _i = 0; _i <= labelsLen - 1; _i++) {
            _loop(_i);
          }
        }

        if (w.config.xaxis.title.text !== undefined) {
          var elXaxisTitle = graphics.group({
            class: 'apexcharts-xaxis-title'
          });
          var elXAxisTitleText = graphics.drawText({
            x: w.globals.gridWidth / 2 + w.config.xaxis.title.offsetX,
            y: this.offY - parseFloat(this.xaxisFontSize) + w.globals.xAxisLabelsHeight + w.config.xaxis.title.offsetY,
            text: w.config.xaxis.title.text,
            textAnchor: 'middle',
            fontSize: w.config.xaxis.title.style.fontSize,
            fontFamily: w.config.xaxis.title.style.fontFamily,
            fontWeight: w.config.xaxis.title.style.fontWeight,
            foreColor: w.config.xaxis.title.style.color,
            cssClass: 'apexcharts-xaxis-title-text ' + w.config.xaxis.title.style.cssClass
          });
          elXaxisTitle.add(elXAxisTitleText);
          elXaxis.add(elXaxisTitle);
        }

        if (w.config.xaxis.axisBorder.show) {
          var lineCorrection = 0;

          if (w.config.chart.type === 'bar' && w.globals.isXNumeric) {
            lineCorrection = lineCorrection - 15;
          }

          var elHorzLine = graphics.drawLine(w.globals.padHorizontal + lineCorrection + w.config.xaxis.axisBorder.offsetX, this.offY, this.xaxisBorderWidth, this.offY, w.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
          elXaxis.add(elHorzLine);
        }

        return elXaxis;
      } // this actually becomes the vertical axis (for bar charts)

    }, {
      key: "drawXaxisInversed",
      value: function drawXaxisInversed(realIndex) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var translateYAxisX = w.config.yaxis[0].opposite ? w.globals.translateYAxisX[realIndex] : 0;
        var elYaxis = graphics.group({
          class: 'apexcharts-yaxis apexcharts-xaxis-inversed',
          rel: realIndex
        });
        var elYaxisTexts = graphics.group({
          class: 'apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g',
          transform: 'translate(' + translateYAxisX + ', 0)'
        });
        elYaxis.add(elYaxisTexts);
        var colHeight; // initial x Position (keep adding column width in the loop)

        var yPos;
        var labels = [];

        if (w.config.yaxis[realIndex].show) {
          for (var i = 0; i < this.xaxisLabels.length; i++) {
            labels.push(this.xaxisLabels[i]);
          }
        }

        colHeight = w.globals.gridHeight / labels.length;
        yPos = -(colHeight / 2.2);
        var lbFormatter = w.globals.yLabelFormatters[0];
        var ylabels = w.config.yaxis[0].labels;

        if (ylabels.show) {
          for (var _i2 = 0; _i2 <= labels.length - 1; _i2++) {
            var label = typeof labels[_i2] === 'undefined' ? '' : labels[_i2];
            label = lbFormatter(label, {
              seriesIndex: realIndex,
              dataPointIndex: _i2,
              w: w
            });
            var multiY = 0;

            if (Array.isArray(label)) {
              multiY = label.length / 2 * parseInt(ylabels.style.fontSize, 10);
            }

            var elLabel = graphics.drawText({
              x: ylabels.offsetX - 15,
              y: yPos + colHeight + ylabels.offsetY - multiY,
              text: label,
              textAnchor: this.yaxis.opposite ? 'start' : 'end',
              foreColor: Array.isArray(ylabels.style.colors) ? ylabels.style.colors[_i2] : ylabels.style.colors,
              fontSize: ylabels.style.fontSize,
              fontFamily: ylabels.style.fontFamily,
              fontWeight: ylabels.style.fontWeight,
              isPlainText: false,
              cssClass: 'apexcharts-yaxis-label ' + ylabels.style.cssClass
            });
            elYaxisTexts.add(elLabel);
            var elTooltipTitle = document.createElementNS(w.globals.SVGNS, 'title');
            elTooltipTitle.textContent = label.text;
            elLabel.node.appendChild(elTooltipTitle);

            if (w.config.yaxis[realIndex].labels.rotate !== 0) {
              var labelRotatingCenter = graphics.rotateAroundCenter(elLabel.node);
              elLabel.node.setAttribute('transform', "rotate(".concat(w.config.yaxis[realIndex].labels.rotate, " 0 ").concat(labelRotatingCenter.y, ")"));
            }

            yPos = yPos + colHeight;
          }
        }

        if (w.config.yaxis[0].title.text !== undefined) {
          var elXaxisTitle = graphics.group({
            class: 'apexcharts-yaxis-title apexcharts-xaxis-title-inversed',
            transform: 'translate(' + translateYAxisX + ', 0)'
          });
          var elXAxisTitleText = graphics.drawText({
            x: 0,
            y: w.globals.gridHeight / 2,
            text: w.config.yaxis[0].title.text,
            textAnchor: 'middle',
            foreColor: w.config.yaxis[0].title.style.color,
            fontSize: w.config.yaxis[0].title.style.fontSize,
            fontWeight: w.config.yaxis[0].title.style.fontWeight,
            fontFamily: w.config.yaxis[0].title.style.fontFamily,
            cssClass: 'apexcharts-yaxis-title-text ' + w.config.yaxis[0].title.style.cssClass
          });
          elXaxisTitle.add(elXAxisTitleText);
          elYaxis.add(elXaxisTitle);
        }

        var offX = 0;

        if (this.isCategoryBarHorizontal && w.config.yaxis[0].opposite) {
          offX = w.globals.gridWidth;
        }

        var axisBorder = w.config.xaxis.axisBorder;

        if (axisBorder.show) {
          var elVerticalLine = graphics.drawLine(w.globals.padHorizontal + axisBorder.offsetX + offX, 1 + axisBorder.offsetY, w.globals.padHorizontal + axisBorder.offsetX + offX, w.globals.gridHeight + axisBorder.offsetY, axisBorder.color, 0);
          elYaxis.add(elVerticalLine);
        }

        if (w.config.yaxis[0].axisTicks.show) {
          this.axesUtils.drawYAxisTicks(offX, labels.length, w.config.yaxis[0].axisBorder, w.config.yaxis[0].axisTicks, 0, colHeight, elYaxis);
        }

        return elYaxis;
      }
    }, {
      key: "drawXaxisTicks",
      value: function drawXaxisTicks(x1, appendToElement) {
        var w = this.w;
        var x2 = x1;
        if (x1 < 0 || x1 - 2 > w.globals.gridWidth) return;
        var y1 = this.offY + w.config.xaxis.axisTicks.offsetY;
        var y2 = y1 + w.config.xaxis.axisTicks.height;

        if (w.config.xaxis.axisTicks.show) {
          var graphics = new Graphics(this.ctx);
          var line = graphics.drawLine(x1 + w.config.xaxis.axisTicks.offsetX, y1 + w.config.xaxis.offsetY, x2 + w.config.xaxis.axisTicks.offsetX, y2 + w.config.xaxis.offsetY, w.config.xaxis.axisTicks.color); // we are not returning anything, but appending directly to the element pased in param

          appendToElement.add(line);
          line.node.classList.add('apexcharts-xaxis-tick');
        }
      }
    }, {
      key: "getXAxisTicksPositions",
      value: function getXAxisTicksPositions() {
        var w = this.w;
        var xAxisTicksPositions = [];
        var xCount = this.xaxisLabels.length;
        var x1 = w.globals.padHorizontal;

        if (w.globals.timescaleLabels.length > 0) {
          for (var i = 0; i < xCount; i++) {
            x1 = this.xaxisLabels[i].position;
            xAxisTicksPositions.push(x1);
          }
        } else {
          var xCountForCategoryCharts = xCount;

          for (var _i3 = 0; _i3 < xCountForCategoryCharts; _i3++) {
            var x1Count = xCountForCategoryCharts;

            if (w.globals.isXNumeric && w.config.chart.type !== 'bar') {
              x1Count -= 1;
            }

            x1 = x1 + w.globals.gridWidth / x1Count;
            xAxisTicksPositions.push(x1);
          }
        }

        return xAxisTicksPositions;
      } // to rotate x-axis labels or to put ... for longer text in xaxis

    }, {
      key: "xAxisLabelCorrections",
      value: function xAxisLabelCorrections() {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var xAxis = w.globals.dom.baseEl.querySelector('.apexcharts-xaxis-texts-g');
        var xAxisTexts = w.globals.dom.baseEl.querySelectorAll('.apexcharts-xaxis-texts-g text');
        var yAxisTextsInversed = w.globals.dom.baseEl.querySelectorAll('.apexcharts-yaxis-inversed text');
        var xAxisTextsInversed = w.globals.dom.baseEl.querySelectorAll('.apexcharts-xaxis-inversed-texts-g text tspan');

        if (w.globals.rotateXLabels || w.config.xaxis.labels.rotateAlways) {
          for (var xat = 0; xat < xAxisTexts.length; xat++) {
            var textRotatingCenter = graphics.rotateAroundCenter(xAxisTexts[xat]);
            textRotatingCenter.y = textRotatingCenter.y - 1; // + tickWidth/4;

            textRotatingCenter.x = textRotatingCenter.x + 1;
            xAxisTexts[xat].setAttribute('transform', "rotate(".concat(w.config.xaxis.labels.rotate, " ").concat(textRotatingCenter.x, " ").concat(textRotatingCenter.y, ")"));
            xAxisTexts[xat].setAttribute('text-anchor', "end");
            var offsetHeight = 10;
            xAxis.setAttribute('transform', "translate(0, ".concat(-offsetHeight, ")"));
            var tSpan = xAxisTexts[xat].childNodes;

            if (w.config.xaxis.labels.trim) {
              Array.prototype.forEach.call(tSpan, function (ts) {
                graphics.placeTextWithEllipsis(ts, ts.textContent, w.config.xaxis.labels.maxHeight - (w.config.legend.position === 'bottom' ? 20 : 10));
              });
            }
          }
        } else {
          (function () {
            var width = w.globals.gridWidth / (w.globals.labels.length + 1);

            for (var _xat = 0; _xat < xAxisTexts.length; _xat++) {
              var _tSpan = xAxisTexts[_xat].childNodes;

              if (w.config.xaxis.labels.trim && w.config.xaxis.type !== 'datetime') {
                Array.prototype.forEach.call(_tSpan, function (ts) {
                  graphics.placeTextWithEllipsis(ts, ts.textContent, width);
                });
              }
            }
          })();
        }

        if (yAxisTextsInversed.length > 0) {
          // truncate rotated y axis in bar chart (x axis)
          var firstLabelPosX = yAxisTextsInversed[yAxisTextsInversed.length - 1].getBBox();
          var lastLabelPosX = yAxisTextsInversed[0].getBBox();

          if (firstLabelPosX.x < -20) {
            yAxisTextsInversed[yAxisTextsInversed.length - 1].parentNode.removeChild(yAxisTextsInversed[yAxisTextsInversed.length - 1]);
          }

          if (lastLabelPosX.x + lastLabelPosX.width > w.globals.gridWidth && !w.globals.isBarHorizontal) {
            yAxisTextsInversed[0].parentNode.removeChild(yAxisTextsInversed[0]);
          } // truncate rotated x axis in bar chart (y axis)


          for (var _xat2 = 0; _xat2 < xAxisTextsInversed.length; _xat2++) {
            graphics.placeTextWithEllipsis(xAxisTextsInversed[_xat2], xAxisTextsInversed[_xat2].textContent, w.config.yaxis[0].labels.maxWidth - parseFloat(w.config.yaxis[0].title.style.fontSize) * 2 - 20);
          }
        }
      } // renderXAxisBands() {
      //   let w = this.w;
      //   let plotBand = document.createElementNS(w.globals.SVGNS, 'rect')
      //   w.globals.dom.elGraphical.add(plotBand)
      // }

    }]);

    return XAxis;
  }();

  /**
   * ApexCharts Grid Class for drawing Cartesian Grid.
   *
   * @module Grid
   **/

  var Grid =
  /*#__PURE__*/
  function () {
    function Grid(ctx) {
      _classCallCheck(this, Grid);

      this.ctx = ctx;
      this.w = ctx.w;
      var w = this.w;
      this.xaxisLabels = w.globals.labels.slice();
      this.axesUtils = new AxesUtils(ctx);
      this.isTimelineBar = w.config.xaxis.type === 'datetime' && w.globals.seriesRangeBarTimeline.length;

      if (w.globals.timescaleLabels.length > 0) {
        //  timescaleLabels labels are there
        this.xaxisLabels = w.globals.timescaleLabels.slice();
      }
    } // when using sparklines or when showing no grid, we need to have a grid area which is reused at many places for other calculations as well


    _createClass(Grid, [{
      key: "drawGridArea",
      value: function drawGridArea() {
        var elGrid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var w = this.w;
        var graphics = new Graphics(this.ctx);

        if (elGrid === null) {
          elGrid = graphics.group({
            class: 'apexcharts-grid'
          });
        }

        var elVerticalLine = graphics.drawLine(w.globals.padHorizontal, 1, w.globals.padHorizontal, w.globals.gridHeight, 'transparent');
        var elHorzLine = graphics.drawLine(w.globals.padHorizontal, w.globals.gridHeight, w.globals.gridWidth, w.globals.gridHeight, 'transparent');
        elGrid.add(elHorzLine);
        elGrid.add(elVerticalLine);
        return elGrid;
      }
    }, {
      key: "drawGrid",
      value: function drawGrid() {
        var gl = this.w.globals;
        var elgrid = null;

        if (gl.axisCharts) {
          // grid is drawn after xaxis and yaxis are drawn
          elgrid = this.renderGrid();
          this.drawGridArea(elgrid.el);
        }

        return elgrid;
      } // This mask will clip off overflowing graphics from the drawable area

    }, {
      key: "createGridMask",
      value: function createGridMask() {
        var w = this.w;
        var gl = w.globals;
        var graphics = new Graphics(this.ctx);
        var strokeSize = Array.isArray(w.config.stroke.width) ? 0 : w.config.stroke.width;

        if (Array.isArray(w.config.stroke.width)) {
          var strokeMaxSize = 0;
          w.config.stroke.width.forEach(function (m) {
            strokeMaxSize = Math.max(strokeMaxSize, m);
          });
          strokeSize = strokeMaxSize;
        }

        gl.dom.elGridRectMask = document.createElementNS(gl.SVGNS, 'clipPath');
        gl.dom.elGridRectMask.setAttribute('id', "gridRectMask".concat(gl.cuid));
        gl.dom.elGridRectMarkerMask = document.createElementNS(gl.SVGNS, 'clipPath');
        gl.dom.elGridRectMarkerMask.setAttribute('id', "gridRectMarkerMask".concat(gl.cuid)); // let barHalfWidth = 0

        var type = w.config.chart.type;
        var hasBar = type === 'bar' || type === 'rangeBar' || w.globals.comboBarCount > 0;
        var barWidthLeft = 0;
        var barWidthRight = 0;

        if (hasBar && w.globals.isXNumeric && !w.globals.isBarHorizontal) {
          barWidthLeft = w.config.grid.padding.left;
          barWidthRight = w.config.grid.padding.right;

          if (gl.barPadForNumericAxis > barWidthLeft) {
            barWidthLeft = gl.barPadForNumericAxis;
            barWidthRight = gl.barPadForNumericAxis;
          }
        }

        gl.dom.elGridRect = graphics.drawRect(-strokeSize / 2 - barWidthLeft - 2, -strokeSize / 2, gl.gridWidth + strokeSize + barWidthRight + barWidthLeft + 4, gl.gridHeight + strokeSize, 0, '#fff');
        var coreUtils = new CoreUtils(this);
        coreUtils.getLargestMarkerSize();
        var markerSize = w.globals.markers.largestSize + 1;
        gl.dom.elGridRectMarker = graphics.drawRect(-markerSize * 2, -markerSize * 2, gl.gridWidth + markerSize * 4, gl.gridHeight + markerSize * 4, 0, '#fff');
        gl.dom.elGridRectMask.appendChild(gl.dom.elGridRect.node);
        gl.dom.elGridRectMarkerMask.appendChild(gl.dom.elGridRectMarker.node);
        var defs = gl.dom.baseEl.querySelector('defs');
        defs.appendChild(gl.dom.elGridRectMask);
        defs.appendChild(gl.dom.elGridRectMarkerMask);
      }
    }, {
      key: "_drawGridLines",
      value: function _drawGridLines(_ref) {
        var i = _ref.i,
            x1 = _ref.x1,
            y1 = _ref.y1,
            x2 = _ref.x2,
            y2 = _ref.y2,
            xCount = _ref.xCount,
            parent = _ref.parent;
        var w = this.w;

        var shouldDraw = function shouldDraw() {
          if (i === 0 && w.globals.skipFirstTimelinelabel) {
            return false;
          }

          if (i === xCount - 1 && w.globals.skipLastTimelinelabel) {
            return false;
          }

          if (w.config.chart.type === 'radar') {
            return false;
          }

          return true;
        };

        if (shouldDraw()) {
          if (w.config.grid.xaxis.lines.show) {
            this._drawGridLine({
              x1: x1,
              y1: y1,
              x2: x2,
              y2: y2,
              parent: parent
            });
          }

          var xAxis = new XAxis(this.ctx);
          xAxis.drawXaxisTicks(x1, this.elg);
        }
      }
    }, {
      key: "_drawGridLine",
      value: function _drawGridLine(_ref2) {
        var x1 = _ref2.x1,
            y1 = _ref2.y1,
            x2 = _ref2.x2,
            y2 = _ref2.y2,
            parent = _ref2.parent;
        var w = this.w;
        var strokeDashArray = w.config.grid.strokeDashArray;
        var graphics = new Graphics(this);
        var line = graphics.drawLine(x1, y1, x2, y2, w.config.grid.borderColor, strokeDashArray);
        line.node.classList.add('apexcharts-gridline');
        parent.add(line);
      }
    }, {
      key: "_drawGridBandRect",
      value: function _drawGridBandRect(_ref3) {
        var c = _ref3.c,
            x1 = _ref3.x1,
            y1 = _ref3.y1,
            x2 = _ref3.x2,
            y2 = _ref3.y2,
            type = _ref3.type;
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        if (type === 'column' && w.config.xaxis.type === 'datetime') return;
        var color = w.config.grid[type].colors[c];
        var rect = graphics.drawRect(x1, y1, x2, y2, 0, color, w.config.grid[type].opacity);
        this.elg.add(rect);
        rect.node.classList.add("apexcharts-grid-".concat(type));
      }
    }, {
      key: "_drawXYLines",
      value: function _drawXYLines(_ref4) {
        var _this = this;

        var xCount = _ref4.xCount,
            tickAmount = _ref4.tickAmount;
        var w = this.w;

        var datetimeLines = function datetimeLines(_ref5) {
          var xC = _ref5.xC,
              x1 = _ref5.x1,
              y1 = _ref5.y1,
              x2 = _ref5.x2,
              y2 = _ref5.y2;

          for (var i = 0; i < xC; i++) {
            x1 = _this.xaxisLabels[i].position;
            x2 = _this.xaxisLabels[i].position;

            _this._drawGridLines({
              i: i,
              x1: x1,
              y1: y1,
              x2: x2,
              y2: y2,
              xCount: xCount,
              parent: _this.elgridLinesV
            });
          }
        };

        var categoryLines = function categoryLines(_ref6) {
          var xC = _ref6.xC,
              x1 = _ref6.x1,
              y1 = _ref6.y1,
              x2 = _ref6.x2,
              y2 = _ref6.y2;

          for (var i = 0; i < xC + (w.globals.isXNumeric ? 0 : 1); i++) {
            if (i === 0 && xC === 1 && w.globals.dataPoints === 1) {
              // single datapoint
              x1 = w.globals.gridWidth / 2;
            }

            _this._drawGridLines({
              i: i,
              x1: x1,
              y1: y1,
              x2: x2,
              y2: y2,
              xCount: xCount,
              parent: _this.elgridLinesV
            });

            x1 = x1 + w.globals.gridWidth / (w.globals.isXNumeric ? xC - 1 : xC);
            x2 = x1;
          }
        }; // draw vertical lines


        if (w.config.grid.xaxis.lines.show || w.config.xaxis.axisTicks.show) {
          var x1 = w.globals.padHorizontal;
          var y1 = 0;
          var x2;
          var y2 = w.globals.gridHeight;

          if (w.globals.timescaleLabels.length) {
            datetimeLines({
              xC: xCount,
              x1: x1,
              y1: y1,
              x2: x2,
              y2: y2
            });
          } else {
            if (w.globals.isXNumeric) {
              xCount = w.globals.xAxisScale.result.length;
            }

            if (w.config.xaxis.convertedCatToNumeric) {
              // in case of a convertedCatToNumeric, some labels might be skipped due to hideOverLapping labels, hence use this var to get the visible ticks
              xCount = w.globals.xaxisLabelsCount;
            }

            categoryLines({
              xC: xCount,
              x1: x1,
              y1: y1,
              x2: x2,
              y2: y2
            });
          }
        } // draw horizontal lines


        if (w.config.grid.yaxis.lines.show) {
          var _x = 0;
          var _y = 0;
          var _y2 = 0;
          var _x2 = w.globals.gridWidth;
          var tA = tickAmount + 1;

          if (this.isTimelineBar) {
            tA = w.globals.labels.length;
          }

          for (var i = 0; i < tA + (this.isTimelineBar ? 1 : 0); i++) {
            this._drawGridLine({
              x1: _x,
              y1: _y,
              x2: _x2,
              y2: _y2,
              parent: this.elgridLinesH
            });

            _y = _y + w.globals.gridHeight / (this.isTimelineBar ? tA : tickAmount);
            _y2 = _y;
          }
        }
      }
    }, {
      key: "_drawInvertedXYLines",
      value: function _drawInvertedXYLines(_ref7) {
        var xCount = _ref7.xCount;
        var w = this.w; // draw vertical lines

        if (w.config.grid.xaxis.lines.show || w.config.xaxis.axisTicks.show) {
          var x1 = w.globals.padHorizontal;
          var y1 = 0;
          var x2;
          var y2 = w.globals.gridHeight;

          for (var i = 0; i < xCount + 1; i++) {
            if (w.config.grid.xaxis.lines.show) {
              this._drawGridLine({
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2,
                parent: this.elgridLinesV
              });
            }

            var xAxis = new XAxis(this.ctx);
            xAxis.drawXaxisTicks(x1, this.elg);
            x1 = x1 + w.globals.gridWidth / xCount + 0.3;
            x2 = x1;
          }
        } // draw horizontal lines


        if (w.config.grid.yaxis.lines.show) {
          var _x3 = 0;
          var _y3 = 0;
          var _y4 = 0;
          var _x4 = w.globals.gridWidth;

          for (var _i = 0; _i < w.globals.dataPoints + 1; _i++) {
            this._drawGridLine({
              x1: _x3,
              y1: _y3,
              x2: _x4,
              y2: _y4,
              parent: this.elgridLinesH
            });

            _y3 = _y3 + w.globals.gridHeight / w.globals.dataPoints;
            _y4 = _y3;
          }
        }
      } // actual grid rendering

    }, {
      key: "renderGrid",
      value: function renderGrid() {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        this.elg = graphics.group({
          class: 'apexcharts-grid'
        });
        this.elgridLinesH = graphics.group({
          class: 'apexcharts-gridlines-horizontal'
        });
        this.elgridLinesV = graphics.group({
          class: 'apexcharts-gridlines-vertical'
        });
        this.elg.add(this.elgridLinesH);
        this.elg.add(this.elgridLinesV);

        if (!w.config.grid.show) {
          this.elgridLinesV.hide();
          this.elgridLinesH.hide();
        }

        var tickAmount = w.globals.yAxisScale.length ? w.globals.yAxisScale[0].result.length - 1 : 5;

        for (var i = 0; i < w.globals.series.length; i++) {
          if (typeof w.globals.yAxisScale[i] !== 'undefined') {
            tickAmount = w.globals.yAxisScale[i].result.length - 1;
          }

          if (tickAmount > 2) break;
        }

        var xCount;

        if (!w.globals.isBarHorizontal || this.isTimelineBar) {
          xCount = this.xaxisLabels.length;

          if (this.isTimelineBar) {
            tickAmount = w.globals.labels.length;
          }

          this._drawXYLines({
            xCount: xCount,
            tickAmount: tickAmount
          });
        } else {
          xCount = tickAmount;

          this._drawInvertedXYLines({
            xCount: xCount,
            tickAmount: tickAmount
          });
        }

        this.drawGridBands(xCount, tickAmount);
        return {
          el: this.elg,
          xAxisTickWidth: w.globals.gridWidth / xCount
        };
      }
    }, {
      key: "drawGridBands",
      value: function drawGridBands(xCount, tickAmount) {
        var w = this.w; // rows background bands

        if (w.config.grid.row.colors !== undefined && w.config.grid.row.colors.length > 0) {
          var x1 = 0;
          var y1 = 0;
          var y2 = w.globals.gridHeight / tickAmount;
          var x2 = w.globals.gridWidth;

          for (var i = 0, c = 0; i < tickAmount; i++, c++) {
            if (c >= w.config.grid.row.colors.length) {
              c = 0;
            }

            this._drawGridBandRect({
              c: c,
              x1: x1,
              y1: y1,
              x2: x2,
              y2: y2,
              type: 'row'
            });

            y1 = y1 + w.globals.gridHeight / tickAmount;
          }
        } // columns background bands


        if (w.config.grid.column.colors !== undefined && w.config.grid.column.colors.length > 0) {
          var xc = w.config.xaxis.type === 'category' || w.config.xaxis.convertedCatToNumeric ? xCount - 1 : xCount;
          var _x5 = w.globals.padHorizontal;
          var _y5 = 0;

          var _x6 = w.globals.padHorizontal + w.globals.gridWidth / xc;

          var _y6 = w.globals.gridHeight;

          for (var _i2 = 0, _c = 0; _i2 < xCount; _i2++, _c++) {
            if (_c >= w.config.grid.column.colors.length) {
              _c = 0;
            }

            this._drawGridBandRect({
              c: _c,
              x1: _x5,
              y1: _y5,
              x2: _x6,
              y2: _y6,
              type: 'column'
            });

            _x5 = _x5 + w.globals.gridWidth / xc;
          }
        }
      }
    }]);

    return Grid;
  }();

  var Range =
  /*#__PURE__*/
  function () {
    function Range(ctx) {
      _classCallCheck(this, Range);

      this.ctx = ctx;
      this.w = ctx.w;
    } // http://stackoverflow.com/questions/326679/choosing-an-attractive-linear-scale-for-a-graphs-y-axiss
    // This routine creates the Y axis values for a graph.


    _createClass(Range, [{
      key: "niceScale",
      value: function niceScale(yMin, yMax, diff) {
        var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var ticks = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
        var NO_MIN_MAX_PROVIDED = arguments.length > 5 ? arguments[5] : undefined;
        var w = this.w;

        if (ticks === 'dataPoints') {
          ticks = w.globals.dataPoints - 1;
        }

        if (yMin === Number.MIN_VALUE && yMax === 0 || !Utils.isNumber(yMin) && !Utils.isNumber(yMax) || yMin === Number.MIN_VALUE && yMax === -Number.MAX_VALUE) {
          // when all values are 0
          yMin = 0;
          yMax = ticks;
          var linearScale = this.linearScale(yMin, yMax, ticks);
          return linearScale;
        }

        if (yMin > yMax) {
          // if somehow due to some wrong config, user sent max less than min,
          // adjust the min/max again
          console.warn('axis.min cannot be greater than axis.max');
          yMax = yMin + 0.1;
        } else if (yMin === yMax) {
          // If yMin and yMax are identical, then
          // adjust the yMin and yMax values to actually
          // make a graph. Also avoids division by zero errors.
          yMin = yMin === 0 ? 0 : yMin - 0.5; // some small value

          yMax = yMax === 0 ? 2 : yMax + 0.5; // some small value
        } // Calculate Min amd Max graphical labels and graph
        // increments.  The number of ticks defaults to
        // 10 which is the SUGGESTED value.  Any tick value
        // entered is used as a suggested value which is
        // adjusted to be a 'pretty' value.
        //
        // Output will be an array of the Y axis values that
        // encompass the Y values.


        var result = []; // Determine Range

        var range = Math.abs(yMax - yMin);

        if (range < 1 && NO_MIN_MAX_PROVIDED && (w.config.chart.type === 'candlestick' || w.config.series[index].type === 'candlestick' || w.globals.isRangeData)) {
          /* fix https://github.com/apexcharts/apexcharts.js/issues/430 */
          yMax = yMax * 1.01;
        }

        var tiks = ticks + 1; // Adjust ticks if needed

        if (tiks < 2) {
          tiks = 2;
        } else if (tiks > 2) {
          tiks -= 2;
        } // Get raw step value


        var tempStep = range / tiks; // Calculate pretty step value

        var mag = Math.floor(Utils.log10(tempStep));
        var magPow = Math.pow(10, mag);
        var magMsd = Math.round(tempStep / magPow);

        if (magMsd < 1) {
          magMsd = 1;
        }

        var stepSize = magMsd * magPow; // build Y label array.
        // Lower and upper bounds calculations

        var lb = stepSize * Math.floor(yMin / stepSize);
        var ub = stepSize * Math.ceil(yMax / stepSize); // Build array

        var val = lb;

        if (NO_MIN_MAX_PROVIDED && range > 2) {
          while (1) {
            result.push(val);
            val += stepSize;

            if (val > ub) {
              break;
            }
          }

          return {
            result: result,
            niceMin: result[0],
            niceMax: result[result.length - 1]
          };
        } else {
          result = [];
          var v = yMin;
          result.push(v);
          var valuesDivider = Math.abs(yMax - yMin) / ticks;

          for (var i = 0; i <= ticks; i++) {
            v = v + valuesDivider;
            result.push(v);
          }

          if (result[result.length - 2] >= yMax) {
            result.pop();
          }

          return {
            result: result,
            niceMin: result[0],
            niceMax: result[result.length - 1]
          };
        }
      }
    }, {
      key: "linearScale",
      value: function linearScale(yMin, yMax) {
        var ticks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
        var range = Math.abs(yMax - yMin);
        var step = range / ticks;

        if (ticks === Number.MAX_VALUE) {
          ticks = 10;
          step = 1;
        }

        var result = [];
        var v = yMin;

        while (ticks >= 0) {
          result.push(v);
          v = v + step;
          ticks -= 1;
        }

        return {
          result: result,
          niceMin: result[0],
          niceMax: result[result.length - 1]
        };
      }
    }, {
      key: "logarithmicScale",
      value: function logarithmicScale(index, yMin, yMax, ticks) {
        if (yMin < 0 || yMin === Number.MIN_VALUE) yMin = 0.01;
        var base = 10;
        var min = Math.log(yMin) / Math.log(base);
        var max = Math.log(yMax) / Math.log(base);
        var range = Math.abs(yMax - yMin);
        var step = range / ticks;
        var result = [];
        var v = yMin;

        while (ticks >= 0) {
          result.push(v);
          v = v + step;
          ticks -= 1;
        }

        var logs = result.map(function (niceNumber, i) {
          if (niceNumber <= 0) {
            niceNumber = 0.01;
          } // calculate adjustment factor


          var scale = (max - min) / (yMax - yMin);
          var logVal = Math.pow(base, min + scale * (niceNumber - min));
          return Math.round(logVal / Utils.roundToBase(logVal, base)) * Utils.roundToBase(logVal, base);
        }); // Math.floor may have rounded the value to 0, revert back to 1

        if (logs[0] === 0) logs[0] = 1;
        return {
          result: logs,
          niceMin: logs[0],
          niceMax: logs[logs.length - 1]
        };
      }
    }, {
      key: "setYScaleForIndex",
      value: function setYScaleForIndex(index, minY, maxY) {
        var gl = this.w.globals;
        var cnf = this.w.config;
        var y = gl.isBarHorizontal ? cnf.xaxis : cnf.yaxis[index];

        if (typeof gl.yAxisScale[index] === 'undefined') {
          gl.yAxisScale[index] = [];
        }

        var diff = Math.abs(maxY - minY);

        if (y.logarithmic && diff <= 5) {
          gl.invalidLogScale = true;
        }

        if (y.logarithmic && diff > 5) {
          gl.allSeriesCollapsed = false;
          gl.yAxisScale[index] = this.logarithmicScale(index, minY, maxY, y.tickAmount ? y.tickAmount : Math.floor(Math.log10(maxY)));
        } else {
          if (maxY === -Number.MAX_VALUE || !Utils.isNumber(maxY)) {
            // no data in the chart. Either all series collapsed or user passed a blank array
            gl.yAxisScale[index] = this.linearScale(0, 5, 5);
          } else {
            // there is some data. Turn off the allSeriesCollapsed flag
            gl.allSeriesCollapsed = false;

            if ((y.min !== undefined || y.max !== undefined) && !y.forceNiceScale) {
              // fix https://github.com/apexcharts/apexcharts.js/issues/492
              gl.yAxisScale[index] = this.linearScale(minY, maxY, y.tickAmount);
            } else {
              var noMinMaxProvided = cnf.yaxis[index].max === undefined && cnf.yaxis[index].min === undefined || cnf.yaxis[index].forceNiceScale;
              gl.yAxisScale[index] = this.niceScale(minY, maxY, diff, index, // fix https://github.com/apexcharts/apexcharts.js/issues/397
              y.tickAmount ? y.tickAmount : diff < 5 && diff > 1 ? diff + 1 : 5, noMinMaxProvided);
            }
          }
        }
      }
    }, {
      key: "setXScale",
      value: function setXScale(minX, maxX) {
        var w = this.w;
        var gl = w.globals;
        var x = w.config.xaxis;
        var diff = Math.abs(maxX - minX);

        if (maxX === -Number.MAX_VALUE || !Utils.isNumber(maxX)) {
          // no data in the chart. Either all series collapsed or user passed a blank array
          gl.xAxisScale = this.linearScale(0, 5, 5);
        } else {
          gl.xAxisScale = this.niceScale(minX, maxX, diff, 0, x.tickAmount ? x.tickAmount : diff < 5 && diff > 1 ? diff + 1 : 5);
        }

        return gl.xAxisScale;
      }
    }, {
      key: "setMultipleYScales",
      value: function setMultipleYScales() {
        var _this = this;

        var gl = this.w.globals;
        var cnf = this.w.config;
        var minYArr = gl.minYArr.concat([]);
        var maxYArr = gl.maxYArr.concat([]);
        var scalesIndices = []; // here, we loop through the yaxis array and find the item which has "seriesName" property

        cnf.yaxis.forEach(function (yaxe, i) {
          var index = i;
          cnf.series.forEach(function (s, si) {
            // if seriesName matches and that series is not collapsed, we use that scale
            // fix issue #1215
            // proceed even if si is in gl.collapsedSeriesIndices
            if (s.name === yaxe.seriesName) {
              index = si;

              if (i !== si) {
                scalesIndices.push({
                  index: si,
                  similarIndex: i,
                  alreadyExists: true
                });
              } else {
                scalesIndices.push({
                  index: si
                });
              }
            }
          });
          var minY = minYArr[index];
          var maxY = maxYArr[index];

          _this.setYScaleForIndex(i, minY, maxY);
        });
        this.sameScaleInMultipleAxes(minYArr, maxYArr, scalesIndices);
      }
    }, {
      key: "sameScaleInMultipleAxes",
      value: function sameScaleInMultipleAxes(minYArr, maxYArr, scalesIndices) {
        var _this2 = this;

        var cnf = this.w.config;
        var gl = this.w.globals; // we got the scalesIndices array in the above code, but we need to filter out the items which doesn't have same scales

        var similarIndices = [];
        scalesIndices.forEach(function (scale) {
          if (scale.alreadyExists) {
            if (typeof similarIndices[scale.index] === 'undefined') {
              similarIndices[scale.index] = [];
            }

            similarIndices[scale.index].push(scale.index);
            similarIndices[scale.index].push(scale.similarIndex);
          }
        });

        function intersect(a, b) {
          return a.filter(function (value) {
            return b.indexOf(value) !== -1;
          });
        }

        gl.yAxisSameScaleIndices = similarIndices;
        similarIndices.forEach(function (si, i) {
          similarIndices.forEach(function (sj, j) {
            if (i !== j) {
              if (intersect(si, sj).length > 0) {
                similarIndices[i] = similarIndices[i].concat(similarIndices[j]);
              }
            }
          });
        }); // then, we remove duplicates from the similarScale array

        var uniqueSimilarIndices = similarIndices.map(function (item) {
          return item.filter(function (i, pos) {
            return item.indexOf(i) === pos;
          });
        }); // sort further to remove whole duplicate arrays later

        var sortedIndices = uniqueSimilarIndices.map(function (s) {
          return s.sort();
        }); // remove undefined items

        similarIndices = similarIndices.filter(function (s) {
          return !!s;
        });
        var indices = sortedIndices.slice();
        var stringIndices = indices.map(function (ind) {
          return JSON.stringify(ind);
        });
        indices = indices.filter(function (ind, p) {
          return stringIndices.indexOf(JSON.stringify(ind)) === p;
        });
        var sameScaleMinYArr = [];
        var sameScaleMaxYArr = [];
        minYArr.forEach(function (minYValue, yi) {
          indices.forEach(function (scale, i) {
            // we compare only the yIndex which exists in the indices array
            if (scale.indexOf(yi) > -1) {
              if (typeof sameScaleMinYArr[i] === 'undefined') {
                sameScaleMinYArr[i] = [];
                sameScaleMaxYArr[i] = [];
              }

              sameScaleMinYArr[i].push({
                key: yi,
                value: minYValue
              });
              sameScaleMaxYArr[i].push({
                key: yi,
                value: maxYArr[yi]
              });
            }
          });
        });
        var sameScaleMin = Array.apply(null, Array(indices.length)).map(Number.prototype.valueOf, Number.MIN_VALUE);
        var sameScaleMax = Array.apply(null, Array(indices.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
        sameScaleMinYArr.forEach(function (s, i) {
          s.forEach(function (sc, j) {
            sameScaleMin[i] = Math.min(sc.value, sameScaleMin[i]);
          });
        });
        sameScaleMaxYArr.forEach(function (s, i) {
          s.forEach(function (sc, j) {
            sameScaleMax[i] = Math.max(sc.value, sameScaleMax[i]);
          });
        });
        minYArr.forEach(function (min, i) {
          sameScaleMaxYArr.forEach(function (s, si) {
            var minY = sameScaleMin[si];
            var maxY = sameScaleMax[si];

            if (cnf.chart.stacked) {
              // for stacked charts, we need to add the values
              maxY = 0;
              s.forEach(function (ind, k) {
                // fix incorrectly adjust y scale issue #1215
                if (ind.value !== -Number.MAX_VALUE) {
                  maxY += ind.value;
                }

                if (minY !== Number.MIN_VALUE) {
                  minY += sameScaleMinYArr[si][k].value;
                }
              });
            }

            s.forEach(function (ind, k) {
              if (s[k].key === i) {
                if (cnf.yaxis[i].min !== undefined) {
                  if (typeof cnf.yaxis[i].min === 'function') {
                    minY = cnf.yaxis[i].min(gl.minY);
                  } else {
                    minY = cnf.yaxis[i].min;
                  }
                }

                if (cnf.yaxis[i].max !== undefined) {
                  if (typeof cnf.yaxis[i].max === 'function') {
                    maxY = cnf.yaxis[i].max(gl.maxY);
                  } else {
                    maxY = cnf.yaxis[i].max;
                  }
                }

                _this2.setYScaleForIndex(i, minY, maxY);
              }
            });
          });
        });
      }
    }, {
      key: "autoScaleY",
      value: function autoScaleY(ctx, yaxis, e) {
        if (!ctx) {
          ctx = this;
        }

        var w = ctx.w;

        if (w.globals.isMultipleYAxis || w.globals.collapsedSeries.length) {
          // The autoScale option for multiple y-axis is turned off as it leads to buggy behavior.
          // Also, when a series is collapsed, it results in incorrect behavior. Hence turned it off for that too - fixes apexcharts.js#795
          console.warn('autoScaleYaxis is not supported in a multi-yaxis chart.');
          return yaxis;
        }

        var seriesX = w.globals.seriesX[0];
        var isStacked = w.config.chart.stacked;
        yaxis.forEach(function (yaxe, yi) {
          var firstXIndex = 0;

          for (var xi = 0; xi < seriesX.length; xi++) {
            if (seriesX[xi] >= e.xaxis.min) {
              firstXIndex = xi;
              break;
            }
          }

          var initialMin = w.globals.minYArr[yi];
          var initialMax = w.globals.maxYArr[yi];
          var min, max;
          var stackedSer = w.globals.stackedSeriesTotals;
          w.globals.series.forEach(function (serie, sI) {
            var firstValue = serie[firstXIndex];

            if (isStacked) {
              firstValue = stackedSer[firstXIndex];
              min = max = firstValue;
              stackedSer.forEach(function (y, yI) {
                if (seriesX[yI] <= e.xaxis.max && seriesX[yI] >= e.xaxis.min) {
                  if (y > max && y !== null) max = y;
                  if (serie[yI] < min && serie[yI] !== null) min = serie[yI];
                }
              });
            } else {
              min = max = firstValue;
              serie.forEach(function (y, yI) {
                if (seriesX[yI] <= e.xaxis.max && seriesX[yI] >= e.xaxis.min) {
                  var valMin = y;
                  var valMax = y;
                  w.globals.series.forEach(function (wS, wSI) {
                    if (y !== null) {
                      valMin = Math.min(wS[yI], valMin);
                      valMax = Math.max(wS[yI], valMax);
                    }
                  });
                  if (valMax > max && valMax !== null) max = valMax;
                  if (valMin < min && valMin !== null) min = valMin;
                }
              });
            }

            if (min === undefined && max === undefined) {
              min = initialMin;
              max = initialMax;
            }

            min *= min < 0 ? 1.1 : 0.9;
            max *= max < 0 ? 0.9 : 1.1;

            if (max < 0 && max < initialMax) {
              max = initialMax;
            }

            if (min < 0 && min > initialMin) {
              min = initialMin;
            }

            if (yaxis.length > 1) {
              yaxis[sI].min = yaxe.min === undefined ? min : yaxe.min;
              yaxis[sI].max = yaxe.max === undefined ? max : yaxe.max;
            } else {
              yaxis[0].min = yaxe.min === undefined ? min : yaxe.min;
              yaxis[0].max = yaxe.max === undefined ? max : yaxe.max;
            }
          });
        });
        return yaxis;
      }
    }]);

    return Range;
  }();

  /**
   * Range is used to generates values between min and max.
   *
   * @module Range
   **/

  var Range$1 =
  /*#__PURE__*/
  function () {
    function Range$1(ctx) {
      _classCallCheck(this, Range$1);

      this.ctx = ctx;
      this.w = ctx.w;
      this.scales = new Range(ctx);
    }

    _createClass(Range$1, [{
      key: "init",
      value: function init() {
        this.setYRange();
        this.setXRange();
        this.setZRange();
      }
    }, {
      key: "getMinYMaxY",
      value: function getMinYMaxY(startingIndex) {
        var lowestY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;
        var highestY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -Number.MAX_VALUE;
        var len = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var cnf = this.w.config;
        var gl = this.w.globals;
        var maxY = -Number.MAX_VALUE;
        var minY = Number.MIN_VALUE;

        if (len === null) {
          len = startingIndex + 1;
        }

        var series = gl.series;
        var seriesMin = series;
        var seriesMax = series;

        if (cnf.chart.type === 'candlestick') {
          seriesMin = gl.seriesCandleL;
          seriesMax = gl.seriesCandleH;
        } else if (gl.isRangeData) {
          seriesMin = gl.seriesRangeStart;
          seriesMax = gl.seriesRangeEnd;
        }

        for (var i = startingIndex; i < len; i++) {
          gl.dataPoints = Math.max(gl.dataPoints, series[i].length);

          for (var j = 0; j < gl.series[i].length; j++) {
            var val = series[i][j];

            if (val !== null && Utils.isNumber(val)) {
              maxY = Math.max(maxY, seriesMax[i][j]);
              lowestY = Math.min(lowestY, seriesMin[i][j]);
              highestY = Math.max(highestY, seriesMin[i][j]);

              if (this.w.config.chart.type === 'candlestick') {
                maxY = Math.max(maxY, gl.seriesCandleO[i][j]);
                maxY = Math.max(maxY, gl.seriesCandleH[i][j]);
                maxY = Math.max(maxY, gl.seriesCandleL[i][j]);
                maxY = Math.max(maxY, gl.seriesCandleC[i][j]);
                highestY = maxY;
              }

              if (Utils.isFloat(val)) {
                val = Utils.noExponents(val);
                gl.yValueDecimal = Math.max(gl.yValueDecimal, val.toString().split('.')[1].length);
              }

              if (minY > seriesMin[i][j] && seriesMin[i][j] < 0) {
                minY = seriesMin[i][j];
              }
            } else {
              gl.hasNullValues = true;
            }
          }
        }

        if (cnf.chart.type === 'rangeBar' && gl.seriesRangeStart.length && cnf.xaxis.type === 'datetime') {
          minY = lowestY;
        }

        if (cnf.chart.type === 'bar') {
          if (minY < 0 && maxY < 0) {
            // all negative values in a bar chart, hence make the max to 0
            maxY = 0;
          }

          if (minY === Number.MIN_VALUE) {
            minY = 0;
          }
        }

        return {
          minY: minY,
          maxY: maxY,
          lowestY: lowestY,
          highestY: highestY
        };
      }
    }, {
      key: "setYRange",
      value: function setYRange() {
        var gl = this.w.globals;
        var cnf = this.w.config;
        gl.maxY = -Number.MAX_VALUE;
        gl.minY = Number.MIN_VALUE;
        var lowestYInAllSeries = Number.MAX_VALUE;

        if (gl.isMultipleYAxis) {
          // we need to get minY and maxY for multiple y axis
          for (var i = 0; i < gl.series.length; i++) {
            var minYMaxYArr = this.getMinYMaxY(i, lowestYInAllSeries, null, i + 1);
            gl.minYArr.push(minYMaxYArr.minY);
            gl.maxYArr.push(minYMaxYArr.maxY);
            lowestYInAllSeries = minYMaxYArr.lowestY;
          }
        } // and then, get the minY and maxY from all series


        var minYMaxY = this.getMinYMaxY(0, lowestYInAllSeries, null, gl.series.length);
        gl.minY = minYMaxY.minY;
        gl.maxY = minYMaxY.maxY;
        lowestYInAllSeries = minYMaxY.lowestY;

        if (cnf.chart.stacked) {
          this._setStackedMinMax();
        } // if the numbers are too big, reduce the range
        // for eg, if number is between 100000-110000, putting 0 as the lowest value is not so good idea. So change the gl.minY for line/area/candlesticks


        if (cnf.chart.type === 'line' || cnf.chart.type === 'area' || cnf.chart.type === 'candlestick') {
          if (gl.minY === Number.MIN_VALUE && lowestYInAllSeries !== -Number.MAX_VALUE && lowestYInAllSeries !== gl.maxY // single value possibility
          ) {
              var diff = gl.maxY - lowestYInAllSeries;

              if (lowestYInAllSeries >= 0 && lowestYInAllSeries <= 10) {
                // if minY is already 0/low value, we don't want to go negatives here - so this check is essential.
                diff = 0;
              }

              gl.minY = lowestYInAllSeries - diff * 5 / 100;
              /* fix https://github.com/apexcharts/apexcharts.js/issues/614 */

              /* fix https://github.com/apexcharts/apexcharts.js/issues/968 */

              if (lowestYInAllSeries > 0 && gl.minY < 0) {
                gl.minY = 0;
              }
              /* fix https://github.com/apexcharts/apexcharts.js/issues/426 */


              gl.maxY = gl.maxY + diff * 5 / 100;
            }
        }

        cnf.yaxis.forEach(function (yaxe, index) {
          // override all min/max values by user defined values (y axis)
          if (yaxe.max !== undefined) {
            if (typeof yaxe.max === 'number') {
              gl.maxYArr[index] = yaxe.max;
            } else if (typeof yaxe.max === 'function') {
              gl.maxYArr[index] = yaxe.max(gl.maxY);
            } // gl.maxY is for single y-axis chart, it will be ignored in multi-yaxis


            gl.maxY = gl.maxYArr[index];
          }

          if (yaxe.min !== undefined) {
            if (typeof yaxe.min === 'number') {
              gl.minYArr[index] = yaxe.min;
            } else if (typeof yaxe.min === 'function') {
              gl.minYArr[index] = yaxe.min(gl.minY);
            } // gl.minY is for single y-axis chart, it will be ignored in multi-yaxis


            gl.minY = gl.minYArr[index];
          }
        }); // for horizontal bar charts, we need to check xaxis min/max as user may have specified there

        if (gl.isBarHorizontal) {
          var minmax = ['min', 'max'];
          minmax.forEach(function (m) {
            if (cnf.xaxis[m] !== undefined && typeof cnf.xaxis[m] === 'number') {
              m === 'min' ? gl.minY = cnf.xaxis[m] : gl.maxY = cnf.xaxis[m];
            }
          });
        } // for multi y-axis we need different scales for each


        if (gl.isMultipleYAxis) {
          this.scales.setMultipleYScales();
          gl.minY = lowestYInAllSeries;
          gl.yAxisScale.forEach(function (scale, i) {
            gl.minYArr[i] = scale.niceMin;
            gl.maxYArr[i] = scale.niceMax;
          });
        } else {
          this.scales.setYScaleForIndex(0, gl.minY, gl.maxY);
          gl.minY = gl.yAxisScale[0].niceMin;
          gl.maxY = gl.yAxisScale[0].niceMax;
          gl.minYArr[0] = gl.yAxisScale[0].niceMin;
          gl.maxYArr[0] = gl.yAxisScale[0].niceMax;
        }

        return {
          minY: gl.minY,
          maxY: gl.maxY,
          minYArr: gl.minYArr,
          maxYArr: gl.maxYArr
        };
      }
    }, {
      key: "setXRange",
      value: function setXRange() {
        var gl = this.w.globals;
        var cnf = this.w.config;
        var isXNumeric = cnf.xaxis.type === 'numeric' || cnf.xaxis.type === 'datetime' || cnf.xaxis.type === 'category' && !gl.noLabelsProvided || gl.noLabelsProvided || gl.isXNumeric;

        var getInitialMinXMaxX = function getInitialMinXMaxX() {
          for (var i = 0; i < gl.series.length; i++) {
            if (gl.labels[i]) {
              for (var j = 0; j < gl.labels[i].length; j++) {
                if (gl.labels[i][j] !== null && Utils.isNumber(gl.labels[i][j])) {
                  gl.maxX = Math.max(gl.maxX, gl.labels[i][j]);
                  gl.initialMaxX = Math.max(gl.maxX, gl.labels[i][j]);
                  gl.minX = Math.min(gl.minX, gl.labels[i][j]);
                  gl.initialMinX = Math.min(gl.minX, gl.labels[i][j]);
                }
              }
            }
          }
        }; // minX maxX starts here


        if (gl.isXNumeric) {
          getInitialMinXMaxX();
        }

        if (gl.noLabelsProvided) {
          if (cnf.xaxis.categories.length === 0) {
            gl.maxX = gl.labels[gl.labels.length - 1];
            gl.initialMaxX = gl.labels[gl.labels.length - 1];
            gl.minX = 1;
            gl.initialMinX = 1;
          }
        }

        if (gl.isXNumeric || gl.noLabelsProvided || gl.dataFormatXNumeric) {
          var ticks;

          if (cnf.xaxis.tickAmount === undefined) {
            ticks = Math.round(gl.svgWidth / 150); // no labels provided and total number of dataPoints is less than 30

            if (cnf.xaxis.type === 'numeric' && gl.dataPoints < 30) {
              ticks = gl.dataPoints - 1;
            } // this check is for when ticks exceeds total datapoints and that would result in duplicate labels


            if (ticks > gl.dataPoints && gl.dataPoints !== 0) {
              ticks = gl.dataPoints - 1;
            }
          } else if (cnf.xaxis.tickAmount === 'dataPoints') {
            if (gl.series.length > 1) {
              ticks = gl.series[gl.maxValsInArrayIndex].length - 1;
            }

            if (gl.isXNumeric) {
              ticks = gl.maxX - gl.minX - 1;
            }
          } else {
            ticks = cnf.xaxis.tickAmount;
          }

          gl.xTickAmount = ticks; // override all min/max values by user defined values (x axis)

          if (cnf.xaxis.max !== undefined && typeof cnf.xaxis.max === 'number') {
            gl.maxX = cnf.xaxis.max;
          }

          if (cnf.xaxis.min !== undefined && typeof cnf.xaxis.min === 'number') {
            gl.minX = cnf.xaxis.min;
          } // if range is provided, adjust the new minX


          if (cnf.xaxis.range !== undefined) {
            gl.minX = gl.maxX - cnf.xaxis.range;
          }

          if (gl.minX !== Number.MAX_VALUE && gl.maxX !== -Number.MAX_VALUE) {
            if (cnf.xaxis.convertedCatToNumeric && !gl.dataFormatXNumeric) {
              var catScale = [];

              for (var i = gl.minX - 1; i < gl.maxX; i++) {
                catScale.push(i + 1);
              }

              gl.xAxisScale = {
                result: catScale,
                niceMin: catScale[0],
                niceMax: catScale[catScale.length - 1]
              };
            } else {
              gl.xAxisScale = this.scales.setXScale(gl.minX, gl.maxX);
            }
          } else {
            gl.xAxisScale = this.scales.linearScale(1, ticks, ticks);

            if (gl.noLabelsProvided && gl.labels.length > 0) {
              gl.xAxisScale = this.scales.linearScale(1, gl.labels.length, ticks - 1); // this is the only place seriesX is again mutated

              gl.seriesX = gl.labels.slice();
            }
          } // we will still store these labels as the count for this will be different (to draw grid and labels placement)


          if (isXNumeric) {
            gl.labels = gl.xAxisScale.result.slice();
          }
        } // single dataPoint


        this._handleSingleDataPoint(); // minimum x difference to calculate bar width in numeric bars


        this._getMinXDiff();

        return {
          minX: gl.minX,
          maxX: gl.maxX
        };
      }
    }, {
      key: "setZRange",
      value: function setZRange() {
        // minZ, maxZ starts here
        var gl = this.w.globals;
        if (!gl.isDataXYZ) return;

        for (var i = 0; i < gl.series.length; i++) {
          if (typeof gl.seriesZ[i] !== 'undefined') {
            for (var j = 0; j < gl.seriesZ[i].length; j++) {
              if (gl.seriesZ[i][j] !== null && Utils.isNumber(gl.seriesZ[i][j])) {
                gl.maxZ = Math.max(gl.maxZ, gl.seriesZ[i][j]);
                gl.minZ = Math.min(gl.minZ, gl.seriesZ[i][j]);
              }
            }
          }
        }
      }
    }, {
      key: "_handleSingleDataPoint",
      value: function _handleSingleDataPoint() {
        var gl = this.w.globals;
        var cnf = this.w.config;

        if (gl.minX === gl.maxX) {
          var datetimeObj = new DateTime(this.ctx);

          if (cnf.xaxis.type === 'datetime') {
            var newMinX = datetimeObj.getDate(gl.minX);
            newMinX.setUTCDate(newMinX.getDate() - 2);
            gl.minX = new Date(newMinX).getTime();
            var newMaxX = datetimeObj.getDate(gl.maxX);
            newMaxX.setUTCDate(newMaxX.getDate() + 2);
            gl.maxX = new Date(newMaxX).getTime();
          } else if (cnf.xaxis.type === 'numeric' || cnf.xaxis.type === 'category' && !gl.noLabelsProvided) {
            gl.minX = gl.minX - 2;
            gl.initialMinX = gl.minX;
            gl.maxX = gl.maxX + 2;
            gl.initialMaxX = gl.maxX;
          }
        }
      }
    }, {
      key: "_getMinXDiff",
      value: function _getMinXDiff() {
        var gl = this.w.globals;

        if (gl.isXNumeric) {
          // get the least x diff if numeric x axis is present
          gl.seriesX.forEach(function (sX, i) {
            if (sX.length === 1) {
              // a small hack to prevent overlapping multiple bars when there is just 1 datapoint in bar series.
              // fix #811
              sX.push(gl.seriesX[gl.maxValsInArrayIndex][gl.seriesX[gl.maxValsInArrayIndex].length - 1]);
            } // fix #983 (clone the array to avoid side effects)


            var seriesX = sX.slice();
            seriesX.sort(function (a, b) {
              return a - b;
            });
            seriesX.forEach(function (s, j) {
              if (j > 0) {
                var xDiff = s - gl.seriesX[i][j - 1];

                if (xDiff > 0) {
                  gl.minXDiff = Math.min(xDiff, gl.minXDiff);
                }
              }
            });

            if (gl.dataPoints === 1 && gl.minXDiff === Number.MAX_VALUE) {
              gl.minXDiff = 0.5;
            }
          });
        }
      }
    }, {
      key: "_setStackedMinMax",
      value: function _setStackedMinMax() {
        var gl = this.w.globals; // for stacked charts, we calculate each series's parallel values. i.e, series[0][j] + series[1][j] .... [series[i.length][j]] and get the max out of it

        var stackedPoss = [];
        var stackedNegs = [];

        if (gl.series.length) {
          for (var j = 0; j < gl.series[gl.maxValsInArrayIndex].length; j++) {
            var poss = 0;
            var negs = 0;

            for (var i = 0; i < gl.series.length; i++) {
              if (gl.series[i][j] !== null && Utils.isNumber(gl.series[i][j])) {
                // 0.0001 fixes #185 when values are very small
                gl.series[i][j] > 0 ? poss = poss + parseFloat(gl.series[i][j]) + 0.0001 : negs = negs + parseFloat(gl.series[i][j]);
              }

              if (i === gl.series.length - 1) {
                // push all the totals to the array for future use
                stackedPoss.push(poss);
                stackedNegs.push(negs);
              }
            }
          }
        } // get the max/min out of the added parallel values


        for (var z = 0; z < stackedPoss.length; z++) {
          gl.maxY = Math.max(gl.maxY, stackedPoss[z]);
          gl.minY = Math.min(gl.minY, stackedNegs[z]);
        }
      }
    }]);

    return Range$1;
  }();

  /**
   * ApexCharts YAxis Class for drawing Y-Axis.
   *
   * @module YAxis
   **/

  var YAxis =
  /*#__PURE__*/
  function () {
    function YAxis(ctx) {
      _classCallCheck(this, YAxis);

      this.ctx = ctx;
      this.w = ctx.w;
      var w = this.w;
      this.xaxisFontSize = w.config.xaxis.labels.style.fontSize;
      this.axisFontFamily = w.config.xaxis.labels.style.fontFamily;
      this.xaxisForeColors = w.config.xaxis.labels.style.colors;
      this.isCategoryBarHorizontal = w.config.chart.type === 'bar' && w.config.plotOptions.bar.horizontal;
      this.xAxisoffX = 0;

      if (w.config.xaxis.position === 'bottom') {
        this.xAxisoffX = w.globals.gridHeight;
      }

      this.drawnLabels = [];
      this.axesUtils = new AxesUtils(ctx);
    }

    _createClass(YAxis, [{
      key: "drawYaxis",
      value: function drawYaxis(realIndex) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var yaxisStyle = w.config.yaxis[realIndex].labels.style;
        var yaxisFontSize = yaxisStyle.fontSize;
        var yaxisFontFamily = yaxisStyle.fontFamily;
        var yaxisFontWeight = yaxisStyle.fontWeight;
        var elYaxis = graphics.group({
          class: 'apexcharts-yaxis',
          rel: realIndex,
          transform: 'translate(' + w.globals.translateYAxisX[realIndex] + ', 0)'
        });

        if (!w.config.yaxis[realIndex].show) {
          return elYaxis;
        }

        var elYaxisTexts = graphics.group({
          class: 'apexcharts-yaxis-texts-g'
        });
        elYaxis.add(elYaxisTexts);
        var tickAmount = w.globals.yAxisScale[realIndex].result.length - 1; // labelsDivider is simply svg height/number of ticks

        var labelsDivider = w.globals.gridHeight / tickAmount; // initial label position = 0;

        var l = w.globals.translateY;
        var lbFormatter = w.globals.yLabelFormatters[realIndex];
        var labels = w.globals.yAxisScale[realIndex].result.slice();
        labels = this.axesUtils.checkForReversedLabels(realIndex, labels);
        var firstLabel = '';

        if (w.config.yaxis[realIndex].labels.show) {
          var _loop = function _loop(i) {
            var val = labels[i];
            val = lbFormatter(val, i);
            var xPad = w.config.yaxis[realIndex].labels.padding;

            if (w.config.yaxis[realIndex].opposite && w.config.yaxis.length !== 0) {
              xPad = xPad * -1;
            }

            var getForeColor = function getForeColor() {
              return Array.isArray(yaxisStyle.colors) ? yaxisStyle.colors[i] : yaxisStyle.colors;
            };

            var label = graphics.drawText({
              x: xPad,
              y: l + tickAmount / 10 + w.config.yaxis[realIndex].labels.offsetY + 1,
              text: val,
              textAnchor: w.config.yaxis[realIndex].opposite ? 'start' : 'end',
              fontSize: yaxisFontSize,
              fontFamily: yaxisFontFamily,
              fontWeight: yaxisFontWeight,
              foreColor: getForeColor(),
              isPlainText: false,
              cssClass: 'apexcharts-yaxis-label ' + yaxisStyle.cssClass
            });

            if (i === tickAmount) {
              firstLabel = label;
            }

            elYaxisTexts.add(label);

            if (w.config.yaxis[realIndex].labels.rotate !== 0) {
              var firstabelRotatingCenter = graphics.rotateAroundCenter(firstLabel.node);
              var labelRotatingCenter = graphics.rotateAroundCenter(label.node);
              label.node.setAttribute('transform', "rotate(".concat(w.config.yaxis[realIndex].labels.rotate, " ").concat(firstabelRotatingCenter.x, " ").concat(labelRotatingCenter.y, ")"));
            }

            l = l + labelsDivider;
          };

          for (var i = tickAmount; i >= 0; i--) {
            _loop(i);
          }
        }

        if (w.config.yaxis[realIndex].title.text !== undefined) {
          var elYaxisTitle = graphics.group({
            class: 'apexcharts-yaxis-title'
          });
          var _x = 0;

          if (w.config.yaxis[realIndex].opposite) {
            _x = w.globals.translateYAxisX[realIndex];
          }

          var elYAxisTitleText = graphics.drawText({
            x: _x,
            y: w.globals.gridHeight / 2 + w.globals.translateY + w.config.yaxis[realIndex].title.offsetY,
            text: w.config.yaxis[realIndex].title.text,
            textAnchor: 'end',
            foreColor: w.config.yaxis[realIndex].title.style.color,
            fontSize: w.config.yaxis[realIndex].title.style.fontSize,
            fontWeight: w.config.yaxis[realIndex].title.style.fontWeight,
            fontFamily: w.config.yaxis[realIndex].title.style.fontFamily,
            cssClass: 'apexcharts-yaxis-title-text ' + w.config.yaxis[realIndex].title.style.cssClass
          });
          elYaxisTitle.add(elYAxisTitleText);
          elYaxis.add(elYaxisTitle);
        }

        var axisBorder = w.config.yaxis[realIndex].axisBorder;
        var x = 31 + axisBorder.offsetX;

        if (w.config.yaxis[realIndex].opposite) {
          x = -31 - axisBorder.offsetX;
        }

        if (axisBorder.show) {
          var elVerticalLine = graphics.drawLine(x, w.globals.translateY + axisBorder.offsetY - 2, x, w.globals.gridHeight + w.globals.translateY + axisBorder.offsetY + 2, axisBorder.color, 0, axisBorder.width);
          elYaxis.add(elVerticalLine);
        }

        if (w.config.yaxis[realIndex].axisTicks.show) {
          this.axesUtils.drawYAxisTicks(x, tickAmount, axisBorder, w.config.yaxis[realIndex].axisTicks, realIndex, labelsDivider, elYaxis);
        }

        return elYaxis;
      } // This actually becomes horizonal axis (for bar charts)

    }, {
      key: "drawYaxisInversed",
      value: function drawYaxisInversed(realIndex) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var elXaxis = graphics.group({
          class: 'apexcharts-xaxis apexcharts-yaxis-inversed'
        });
        var elXaxisTexts = graphics.group({
          class: 'apexcharts-xaxis-texts-g',
          transform: "translate(".concat(w.globals.translateXAxisX, ", ").concat(w.globals.translateXAxisY, ")")
        });
        elXaxis.add(elXaxisTexts);
        var tickAmount = w.globals.yAxisScale[realIndex].result.length - 1; // labelsDivider is simply svg width/number of ticks

        var labelsDivider = w.globals.gridWidth / tickAmount + 0.1; // initial label position;

        var l = labelsDivider + w.config.xaxis.labels.offsetX;
        var lbFormatter = w.globals.xLabelFormatter;
        var labels = w.globals.yAxisScale[realIndex].result.slice();
        var timescaleLabels = w.globals.timescaleLabels;

        if (timescaleLabels.length > 0) {
          this.xaxisLabels = timescaleLabels.slice();
          labels = timescaleLabels.slice();
          tickAmount = labels.length;
        }

        labels = this.axesUtils.checkForReversedLabels(realIndex, labels);
        var tl = timescaleLabels.length;

        if (w.config.xaxis.labels.show) {
          for (var i = tl ? 0 : tickAmount; tl ? i < tl : i >= 0; tl ? i++ : i--) {
            var val = labels[i];
            val = lbFormatter(val, i);
            var x = w.globals.gridWidth + w.globals.padHorizontal - (l - labelsDivider + w.config.xaxis.labels.offsetX);

            if (timescaleLabels.length) {
              var label = this.axesUtils.getLabel(labels, timescaleLabels, x, i, this.drawnLabels, this.xaxisFontSize);
              x = label.x;
              val = label.text;
              this.drawnLabels.push(label.text);

              if (i === 0 && w.globals.skipFirstTimelinelabel) {
                val = '';
              }

              if (i === labels.length - 1 && w.globals.skipLastTimelinelabel) {
                val = '';
              }
            }

            var elTick = graphics.drawText({
              x: x,
              y: this.xAxisoffX + w.config.xaxis.labels.offsetY + 30,
              text: val,
              textAnchor: 'middle',
              foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[realIndex] : this.xaxisForeColors,
              fontSize: this.xaxisFontSize,
              fontFamily: this.xaxisFontFamily,
              fontWeight: w.config.xaxis.labels.style.fontWeight,
              isPlainText: false,
              cssClass: 'apexcharts-xaxis-label ' + w.config.xaxis.labels.style.cssClass
            });
            elXaxisTexts.add(elTick);
            elTick.tspan(val);
            var elTooltipTitle = document.createElementNS(w.globals.SVGNS, 'title');
            elTooltipTitle.textContent = val;
            elTick.node.appendChild(elTooltipTitle);
            l = l + labelsDivider;
          }
        }

        this.inversedYAxisTitleText(elXaxis);
        this.inversedYAxisBorder(elXaxis);
        return elXaxis;
      }
    }, {
      key: "inversedYAxisBorder",
      value: function inversedYAxisBorder(parent) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var axisBorder = w.config.xaxis.axisBorder;

        if (axisBorder.show) {
          var lineCorrection = 0;

          if (w.config.chart.type === 'bar' && w.globals.isXNumeric) {
            lineCorrection = lineCorrection - 15;
          }

          var elHorzLine = graphics.drawLine(w.globals.padHorizontal + lineCorrection + axisBorder.offsetX, this.xAxisoffX, w.globals.gridWidth, this.xAxisoffX, axisBorder.color, 0, axisBorder.height);
          parent.add(elHorzLine);
        }
      }
    }, {
      key: "inversedYAxisTitleText",
      value: function inversedYAxisTitleText(parent) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);

        if (w.config.xaxis.title.text !== undefined) {
          var elYaxisTitle = graphics.group({
            class: 'apexcharts-xaxis-title apexcharts-yaxis-title-inversed'
          });
          var elYAxisTitleText = graphics.drawText({
            x: w.globals.gridWidth / 2,
            y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(w.config.xaxis.title.style.fontSize) + 20,
            text: w.config.xaxis.title.text,
            textAnchor: 'middle',
            fontSize: w.config.xaxis.title.style.fontSize,
            fontFamily: w.config.xaxis.title.style.fontFamily,
            fontWeight: w.config.xaxis.title.style.fontWeight,
            cssClass: 'apexcharts-xaxis-title-text ' + w.config.xaxis.title.style.cssClass
          });
          elYaxisTitle.add(elYAxisTitleText);
          parent.add(elYaxisTitle);
        }
      }
    }, {
      key: "yAxisTitleRotate",
      value: function yAxisTitleRotate(realIndex, yAxisOpposite) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var yAxisLabelsCoord = {
          width: 0,
          height: 0
        };
        var yAxisTitleCoord = {
          width: 0,
          height: 0
        };
        var elYAxisLabelsWrap = w.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(realIndex, "'] .apexcharts-yaxis-texts-g"));

        if (elYAxisLabelsWrap !== null) {
          yAxisLabelsCoord = elYAxisLabelsWrap.getBoundingClientRect();
        }

        var yAxisTitle = w.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(realIndex, "'] .apexcharts-yaxis-title text"));

        if (yAxisTitle !== null) {
          yAxisTitleCoord = yAxisTitle.getBoundingClientRect();
        }

        if (yAxisTitle !== null) {
          var x = this.xPaddingForYAxisTitle(realIndex, yAxisLabelsCoord, yAxisTitleCoord, yAxisOpposite);
          yAxisTitle.setAttribute('x', x.xPos - (yAxisOpposite ? 10 : 0));
        }

        if (yAxisTitle !== null) {
          var titleRotatingCenter = graphics.rotateAroundCenter(yAxisTitle);
          yAxisTitle.setAttribute('transform', "rotate(".concat(yAxisOpposite ? '' : '-').concat(w.config.yaxis[realIndex].title.rotate, " ").concat(titleRotatingCenter.x, " ").concat(titleRotatingCenter.y, ")"));
        }
      }
    }, {
      key: "xPaddingForYAxisTitle",
      value: function xPaddingForYAxisTitle(realIndex, yAxisLabelsCoord, yAxisTitleCoord, yAxisOpposite) {
        var w = this.w;
        var oppositeAxisCount = 0;
        var x = 0;
        var padd = 10;

        if (w.config.yaxis[realIndex].title.text === undefined || realIndex < 0) {
          return {
            xPos: x,
            padd: 0
          };
        }

        if (yAxisOpposite) {
          x = yAxisLabelsCoord.width + w.config.yaxis[realIndex].title.offsetX + yAxisTitleCoord.width / 2 + padd / 2;
          oppositeAxisCount += 1;

          if (oppositeAxisCount === 0) {
            x = x - padd / 2;
          }
        } else {
          x = yAxisLabelsCoord.width * -1 + w.config.yaxis[realIndex].title.offsetX + padd / 2 + yAxisTitleCoord.width / 2;

          if (w.globals.isBarHorizontal) {
            padd = 25;
            x = yAxisLabelsCoord.width * -1 - w.config.yaxis[realIndex].title.offsetX - padd;
          }
        }

        return {
          xPos: x,
          padd: padd
        };
      } // sets the x position of the y-axis by counting the labels width, title width and any offset

    }, {
      key: "setYAxisXPosition",
      value: function setYAxisXPosition(yaxisLabelCoords, yTitleCoords) {
        var w = this.w;
        var xLeft = 0;
        var xRight = 0;
        var leftOffsetX = 18;
        var rightOffsetX = 1;

        if (w.config.yaxis.length > 1) {
          this.multipleYs = true;
        }

        w.config.yaxis.map(function (yaxe, index) {
          var shouldNotDrawAxis = w.globals.ignoreYAxisIndexes.indexOf(index) > -1 || !yaxe.show || yaxe.floating || yaxisLabelCoords[index].width === 0;
          var axisWidth = yaxisLabelCoords[index].width + yTitleCoords[index].width;

          if (!yaxe.opposite) {
            xLeft = w.globals.translateX - leftOffsetX;

            if (!shouldNotDrawAxis) {
              leftOffsetX = leftOffsetX + axisWidth + 20;
            }

            w.globals.translateYAxisX[index] = xLeft + yaxe.labels.offsetX;
          } else {
            if (w.globals.isBarHorizontal) {
              xRight = w.globals.gridWidth + w.globals.translateX - 1;
              w.globals.translateYAxisX[index] = xRight - yaxe.labels.offsetX;
            } else {
              xRight = w.globals.gridWidth + w.globals.translateX + rightOffsetX;

              if (!shouldNotDrawAxis) {
                rightOffsetX = rightOffsetX + axisWidth + 20;
              }

              w.globals.translateYAxisX[index] = xRight - yaxe.labels.offsetX + 20;
            }
          }
        });
      }
    }, {
      key: "setYAxisTextAlignments",
      value: function setYAxisTextAlignments() {
        var w = this.w;
        var yaxis = w.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis");
        yaxis = Utils.listToArray(yaxis);
        yaxis.forEach(function (y, index) {
          var yaxe = w.config.yaxis[index]; // proceed only if user has specified alignment

          if (yaxe.labels.align !== undefined) {
            var yAxisInner = w.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(index, "'] .apexcharts-yaxis-texts-g"));
            var yAxisTexts = w.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(index, "'] .apexcharts-yaxis-label"));
            yAxisTexts = Utils.listToArray(yAxisTexts);
            var rect = yAxisInner.getBoundingClientRect();

            if (yaxe.labels.align === 'left') {
              yAxisTexts.forEach(function (label, lI) {
                label.setAttribute('text-anchor', 'start');
              });

              if (!yaxe.opposite) {
                yAxisInner.setAttribute('transform', "translate(-".concat(rect.width, ", 0)"));
              }
            } else if (yaxe.labels.align === 'center') {
              yAxisTexts.forEach(function (label, lI) {
                label.setAttribute('text-anchor', 'middle');
              });
              yAxisInner.setAttribute('transform', "translate(".concat(rect.width / 2 * (!yaxe.opposite ? -1 : 1), ", 0)"));
            } else if (yaxe.labels.align === 'right') {
              yAxisTexts.forEach(function (label, lI) {
                label.setAttribute('text-anchor', 'end');
              });

              if (yaxe.opposite) {
                yAxisInner.setAttribute('transform', "translate(".concat(rect.width, ", 0)"));
              }
            }
          }
        });
      }
    }]);

    return YAxis;
  }();

  var Events =
  /*#__PURE__*/
  function () {
    function Events(ctx) {
      _classCallCheck(this, Events);

      this.ctx = ctx;
      this.w = ctx.w;
      this.documentEvent = Utils.bind(this.documentEvent, this);
    }

    _createClass(Events, [{
      key: "addEventListener",
      value: function addEventListener(name, handler) {
        var w = this.w;

        if (w.globals.events.hasOwnProperty(name)) {
          w.globals.events[name].push(handler);
        } else {
          w.globals.events[name] = [handler];
        }
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(name, handler) {
        var w = this.w;

        if (!w.globals.events.hasOwnProperty(name)) {
          return;
        }

        var index = w.globals.events[name].indexOf(handler);

        if (index !== -1) {
          w.globals.events[name].splice(index, 1);
        }
      }
    }, {
      key: "fireEvent",
      value: function fireEvent(name, args) {
        var w = this.w;

        if (!w.globals.events.hasOwnProperty(name)) {
          return;
        }

        if (!args || !args.length) {
          args = [];
        }

        var evs = w.globals.events[name];
        var l = evs.length;

        for (var i = 0; i < l; i++) {
          evs[i].apply(null, args);
        }
      }
    }, {
      key: "setupEventHandlers",
      value: function setupEventHandlers() {
        var _this = this;

        var w = this.w;
        var me = this.ctx;
        var clickableArea = w.globals.dom.baseEl.querySelector(w.globals.chartClass);
        this.ctx.eventList.forEach(function (event) {
          clickableArea.addEventListener(event, function (e) {
            var opts = Object.assign({}, w, {
              seriesIndex: w.globals.capturedSeriesIndex,
              dataPointIndex: w.globals.capturedDataPointIndex
            });

            if (e.type === 'mousemove' || e.type === 'touchmove') {
              if (typeof w.config.chart.events.mouseMove === 'function') {
                w.config.chart.events.mouseMove(e, me, opts);
              }
            } else if (e.type === 'mouseup' && e.which === 1 || e.type === 'touchend') {
              if (typeof w.config.chart.events.click === 'function') {
                w.config.chart.events.click(e, me, opts);
              }

              me.ctx.events.fireEvent('click', [e, me, opts]);
            }
          }, {
            capture: false,
            passive: true
          });
        });
        this.ctx.eventList.forEach(function (event) {
          document.addEventListener(event, _this.documentEvent);
        });
        this.ctx.core.setupBrushHandler();
      }
    }, {
      key: "documentEvent",
      value: function documentEvent(e) {
        var w = this.w;

        if (e.type === 'click') {
          var target = e.target.className;
          var elMenu = w.globals.dom.baseEl.querySelector('.apexcharts-menu');

          if (elMenu && elMenu.classList.contains('apexcharts-menu-open') && target !== 'apexcharts-menu-icon') {
            elMenu.classList.remove('apexcharts-menu-open');
          }
        }

        w.globals.clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        w.globals.clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
      }
    }]);

    return Events;
  }();

  var Localization =
  /*#__PURE__*/
  function () {
    function Localization(ctx) {
      _classCallCheck(this, Localization);

      this.ctx = ctx;
      this.w = ctx.w;
    }

    _createClass(Localization, [{
      key: "setCurrentLocaleValues",
      value: function setCurrentLocaleValues(localeName) {
        var locales = this.w.config.chart.locales; // check if user has specified locales in global Apex variable
        // if yes - then extend those with local chart's locale

        if (window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0) {
          locales = this.w.config.chart.locales.concat(window.Apex.chart.locales);
        } // find the locale from the array of locales which user has set (either by chart.defaultLocale or by calling setLocale() method.)


        var selectedLocale = locales.filter(function (c) {
          return c.name === localeName;
        })[0];

        if (selectedLocale) {
          // create a complete locale object by extending defaults so you don't get undefined errors.
          var ret = Utils.extend(en, selectedLocale); // store these locale options in global var for ease access

          this.w.globals.locale = ret.options;
        } else {
          throw new Error('Wrong locale name provided. Please make sure you set the correct locale name in options');
        }
      }
    }]);

    return Localization;
  }();

  var Axes =
  /*#__PURE__*/
  function () {
    function Axes(ctx) {
      _classCallCheck(this, Axes);

      this.ctx = ctx;
      this.w = ctx.w;
    }

    _createClass(Axes, [{
      key: "drawAxis",
      value: function drawAxis(type, xyRatios) {
        var gl = this.w.globals;
        var cnf = this.w.config;
        var xAxis = new XAxis(this.ctx);
        var yAxis = new YAxis(this.ctx);

        if (gl.axisCharts && type !== 'radar') {
          var elXaxis, elYaxis;

          if (gl.isBarHorizontal) {
            elYaxis = yAxis.drawYaxisInversed(0);
            elXaxis = xAxis.drawXaxisInversed(0);
            gl.dom.elGraphical.add(elXaxis);
            gl.dom.elGraphical.add(elYaxis);
          } else {
            elXaxis = xAxis.drawXaxis();
            gl.dom.elGraphical.add(elXaxis);
            cnf.yaxis.map(function (yaxe, index) {
              if (gl.ignoreYAxisIndexes.indexOf(index) === -1) {
                elYaxis = yAxis.drawYaxis(index);
                gl.dom.Paper.add(elYaxis);
              }
            });
          }
        }

        cnf.yaxis.map(function (yaxe, index) {
          if (gl.ignoreYAxisIndexes.indexOf(index) === -1) {
            yAxis.yAxisTitleRotate(index, yaxe.opposite);
          }
        });
      }
    }]);

    return Axes;
  }();

  var Crosshairs =
  /*#__PURE__*/
  function () {
    function Crosshairs(ctx) {
      _classCallCheck(this, Crosshairs);

      this.ctx = ctx;
      this.w = ctx.w;
    }

    _createClass(Crosshairs, [{
      key: "drawXCrosshairs",
      value: function drawXCrosshairs() {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var filters = new Filters(this.ctx);
        var crosshairGradient = w.config.xaxis.crosshairs.fill.gradient;
        var crosshairShadow = w.config.xaxis.crosshairs.dropShadow;
        var fillType = w.config.xaxis.crosshairs.fill.type;
        var gradientFrom = crosshairGradient.colorFrom;
        var gradientTo = crosshairGradient.colorTo;
        var opacityFrom = crosshairGradient.opacityFrom;
        var opacityTo = crosshairGradient.opacityTo;
        var stops = crosshairGradient.stops;
        var shadow = 'none';
        var dropShadow = crosshairShadow.enabled;
        var shadowLeft = crosshairShadow.left;
        var shadowTop = crosshairShadow.top;
        var shadowBlur = crosshairShadow.blur;
        var shadowColor = crosshairShadow.color;
        var shadowOpacity = crosshairShadow.opacity;
        var xcrosshairsFill = w.config.xaxis.crosshairs.fill.color;

        if (w.config.xaxis.crosshairs.show) {
          if (fillType === 'gradient') {
            xcrosshairsFill = graphics.drawGradient('vertical', gradientFrom, gradientTo, opacityFrom, opacityTo, null, stops, null);
          }

          var xcrosshairs = graphics.drawRect();

          if (w.config.xaxis.crosshairs.width === 1) {
            // to prevent drawing 2 lines, convert rect to line
            xcrosshairs = graphics.drawLine();
          }

          xcrosshairs.attr({
            class: 'apexcharts-xcrosshairs',
            x: 0,
            y: 0,
            y2: w.globals.gridHeight,
            width: Utils.isNumber(w.config.xaxis.crosshairs.width) ? w.config.xaxis.crosshairs.width : 0,
            height: w.globals.gridHeight,
            fill: xcrosshairsFill,
            filter: shadow,
            'fill-opacity': w.config.xaxis.crosshairs.opacity,
            stroke: w.config.xaxis.crosshairs.stroke.color,
            'stroke-width': w.config.xaxis.crosshairs.stroke.width,
            'stroke-dasharray': w.config.xaxis.crosshairs.stroke.dashArray
          });

          if (dropShadow) {
            xcrosshairs = filters.dropShadow(xcrosshairs, {
              left: shadowLeft,
              top: shadowTop,
              blur: shadowBlur,
              color: shadowColor,
              opacity: shadowOpacity
            });
          }

          w.globals.dom.elGraphical.add(xcrosshairs);
        }
      }
    }, {
      key: "drawYCrosshairs",
      value: function drawYCrosshairs() {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var crosshair = w.config.yaxis[0].crosshairs;

        if (w.config.yaxis[0].crosshairs.show) {
          var ycrosshairs = graphics.drawLine(0, 0, w.globals.gridWidth, 0, crosshair.stroke.color, crosshair.stroke.dashArray, crosshair.stroke.width);
          ycrosshairs.attr({
            class: 'apexcharts-ycrosshairs'
          });
          w.globals.dom.elGraphical.add(ycrosshairs);
        } // draw an invisible crosshair to help in positioning the yaxis tooltip


        var ycrosshairsHidden = graphics.drawLine(0, 0, w.globals.gridWidth, 0, crosshair.stroke.color, 0, 0);
        ycrosshairsHidden.attr({
          class: 'apexcharts-ycrosshairs-hidden'
        });
        w.globals.dom.elGraphical.add(ycrosshairsHidden);
      }
    }]);

    return Crosshairs;
  }();

  /**
   * ApexCharts Responsive Class to override options for different screen sizes.
   *
   * @module Responsive
   **/

  var Responsive =
  /*#__PURE__*/
  function () {
    function Responsive(ctx) {
      _classCallCheck(this, Responsive);

      this.ctx = ctx;
      this.w = ctx.w;
    } // the opts parameter if not null has to be set overriding everything
    // as the opts is set by user externally


    _createClass(Responsive, [{
      key: "checkResponsiveConfig",
      value: function checkResponsiveConfig(opts) {
        var _this = this;

        var w = this.w;
        var cnf = w.config; // check if responsive config exists

        if (cnf.responsive.length === 0) return;
        var res = cnf.responsive.slice();
        res.sort(function (a, b) {
          return a.breakpoint > b.breakpoint ? 1 : b.breakpoint > a.breakpoint ? -1 : 0;
        }).reverse();
        var config = new Config({});

        var iterateResponsiveOptions = function iterateResponsiveOptions() {
          var newOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var largestBreakpoint = res[0].breakpoint;
          var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

          if (width > largestBreakpoint) {
            var options = CoreUtils.extendArrayProps(config, w.globals.initialConfig);
            newOptions = Utils.extend(options, newOptions);
            newOptions = Utils.extend(w.config, newOptions);

            _this.overrideResponsiveOptions(newOptions);
          } else {
            for (var i = 0; i < res.length; i++) {
              if (width < res[i].breakpoint) {
                newOptions = CoreUtils.extendArrayProps(config, res[i].options);
                newOptions = Utils.extend(w.config, newOptions);

                _this.overrideResponsiveOptions(newOptions);
              }
            }
          }
        };

        if (opts) {
          var options = CoreUtils.extendArrayProps(config, opts);
          options = Utils.extend(w.config, options);
          options = Utils.extend(options, opts);
          iterateResponsiveOptions(options);
        } else {
          iterateResponsiveOptions({});
        }
      }
    }, {
      key: "overrideResponsiveOptions",
      value: function overrideResponsiveOptions(newOptions) {
        var newConfig = new Config(newOptions).init({
          responsiveOverride: true
        });
        this.w.config = newConfig;
      }
    }]);

    return Responsive;
  }();

  /**
   * ApexCharts Theme Class for setting the colors and palettes.
   *
   * @module Theme
   **/

  var Theme =
  /*#__PURE__*/
  function () {
    function Theme(ctx) {
      _classCallCheck(this, Theme);

      this.ctx = ctx;
      this.colors = [];
      this.w = ctx.w;
      var w = this.w;
      this.isColorFn = false;
      this.isBarDistributed = w.config.plotOptions.bar.distributed && (w.config.chart.type === 'bar' || w.config.chart.type === 'rangeBar');
    }

    _createClass(Theme, [{
      key: "init",
      value: function init() {
        this.setDefaultColors();
      }
    }, {
      key: "setDefaultColors",
      value: function setDefaultColors() {
        var _this = this;

        var w = this.w;
        var utils = new Utils();
        w.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(w.config.theme.mode));

        if (w.config.colors === undefined) {
          w.globals.colors = this.predefined();
        } else {
          w.globals.colors = w.config.colors; // if user provided a function in colors, we need to eval here

          if (w.globals.axisCharts && w.config.chart.type !== 'bar' && Array.isArray(w.config.colors) && w.config.colors.length > 0 && w.config.colors.length === w.config.series.length // colors & series length needs same
          ) {
              w.globals.colors = w.config.colors.map(function (c, i) {
                if (typeof c === 'function') {
                  _this.isColorFn = true;
                  return c({
                    value: w.globals.axisCharts ? w.globals.series[i][0] ? w.globals.series[i][0] : 0 : w.globals.series[i],
                    seriesIndex: i,
                    dataPointIndex: i,
                    w: w
                  });
                }

                return c;
              });
            }
        }

        if (w.config.theme.monochrome.enabled) {
          var monoArr = [];
          var glsCnt = w.globals.series.length;

          if (this.isBarDistributed) {
            glsCnt = w.globals.series[0].length * w.globals.series.length;
          }

          var mainColor = w.config.theme.monochrome.color;
          var part = 1 / (glsCnt / w.config.theme.monochrome.shadeIntensity);
          var shade = w.config.theme.monochrome.shadeTo;
          var percent = 0;

          for (var gsl = 0; gsl < glsCnt; gsl++) {
            var newColor = void 0;

            if (shade === 'dark') {
              newColor = utils.shadeColor(percent * -1, mainColor);
              percent = percent + part;
            } else {
              newColor = utils.shadeColor(percent, mainColor);
              percent = percent + part;
            }

            monoArr.push(newColor);
          }

          w.globals.colors = monoArr.slice();
        }

        var defaultColors = w.globals.colors.slice(); // if user specfied less colors than no. of series, push the same colors again

        this.pushExtraColors(w.globals.colors);
        var colorTypes = ['fill', 'stroke'];
        colorTypes.forEach(function (c) {
          if (w.config[c].colors === undefined) {
            w.globals[c].colors = _this.isColorFn ? w.config.colors : defaultColors;
          } else {
            w.globals[c].colors = w.config[c].colors.slice();
          }

          _this.pushExtraColors(w.globals[c].colors);
        });

        if (w.config.dataLabels.style.colors === undefined) {
          w.globals.dataLabels.style.colors = defaultColors;
        } else {
          w.globals.dataLabels.style.colors = w.config.dataLabels.style.colors.slice();
        }

        this.pushExtraColors(w.globals.dataLabels.style.colors, 50);

        if (w.config.plotOptions.radar.polygons.fill.colors === undefined) {
          w.globals.radarPolygons.fill.colors = [w.config.theme.mode === 'dark' ? '#202D48' : '#fff'];
        } else {
          w.globals.radarPolygons.fill.colors = w.config.plotOptions.radar.polygons.fill.colors.slice();
        }

        this.pushExtraColors(w.globals.radarPolygons.fill.colors, 20); // The point colors

        if (w.config.markers.colors === undefined) {
          w.globals.markers.colors = defaultColors;
        } else {
          w.globals.markers.colors = w.config.markers.colors.slice();
        }

        this.pushExtraColors(w.globals.markers.colors);
      } // When the number of colors provided is less than the number of series, this method
      // will push same colors to the list
      // params:
      // distributed is only valid for distributed column/bar charts

    }, {
      key: "pushExtraColors",
      value: function pushExtraColors(colorSeries, length) {
        var distributed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var w = this.w;
        var len = length || w.globals.series.length;

        if (distributed === null) {
          distributed = this.isBarDistributed || w.config.chart.type === 'heatmap' && w.config.plotOptions.heatmap.colorScale.inverse;
        }

        if (distributed) {
          len = w.globals.series[0].length * w.globals.series.length;
        }

        if (colorSeries.length < len) {
          var diff = len - colorSeries.length;

          for (var i = 0; i < diff; i++) {
            colorSeries.push(colorSeries[i]);
          }
        }
      }
    }, {
      key: "updateThemeOptions",
      value: function updateThemeOptions(options) {
        options.chart = options.chart || {};
        options.tooltip = options.tooltip || {};
        var mode = options.theme.mode || 'light';
        var palette = options.theme.palette ? options.theme.palette : mode === 'dark' ? 'palette4' : 'palette1';
        var foreColor = options.chart.foreColor ? options.chart.foreColor : mode === 'dark' ? '#f6f7f8' : '#373d3f';
        options.tooltip.theme = mode;
        options.chart.foreColor = foreColor;
        options.theme.palette = palette;
        return options;
      }
    }, {
      key: "predefined",
      value: function predefined() {
        var palette = this.w.config.theme.palette; // D6E3F8, FCEFEF, DCE0D9, A5978B, EDDDD4, D6E3F8, FEF5EF

        switch (palette) {
          case 'palette1':
            this.colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];
            break;

          case 'palette2':
            this.colors = ['#3f51b5', '#03a9f4', '#4caf50', '#f9ce1d', '#FF9800'];
            break;

          case 'palette3':
            this.colors = ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B'];
            break;

          case 'palette4':
            this.colors = ['#4ecdc4', '#c7f464', '#81D4FA', '#fd6a6a', '#546E7A'];
            break;

          case 'palette5':
            this.colors = ['#2b908f', '#f9a3a4', '#90ee7e', '#fa4443', '#69d2e7'];
            break;

          case 'palette6':
            this.colors = ['#449DD1', '#F86624', '#EA3546', '#662E9B', '#C5D86D'];
            break;

          case 'palette7':
            this.colors = ['#D7263D', '#1B998B', '#2E294E', '#F46036', '#E2C044'];
            break;

          case 'palette8':
            this.colors = ['#662E9B', '#F86624', '#F9C80E', '#EA3546', '#43BCCD'];
            break;

          case 'palette9':
            this.colors = ['#5C4742', '#A5978B', '#8D5B4C', '#5A2A27', '#C4BBAF'];
            break;

          case 'palette10':
            this.colors = ['#A300D6', '#7D02EB', '#5653FE', '#2983FF', '#00B1F2'];
            break;

          default:
            this.colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];
            break;
        }

        return this.colors;
      }
    }]);

    return Theme;
  }();

  var TitleSubtitle =
  /*#__PURE__*/
  function () {
    function TitleSubtitle(ctx) {
      _classCallCheck(this, TitleSubtitle);

      this.ctx = ctx;
      this.w = ctx.w;
    }

    _createClass(TitleSubtitle, [{
      key: "draw",
      value: function draw() {
        this.drawTitleSubtitle('title');
        this.drawTitleSubtitle('subtitle');
      }
    }, {
      key: "drawTitleSubtitle",
      value: function drawTitleSubtitle(type) {
        var w = this.w;
        var tsConfig = type === 'title' ? w.config.title : w.config.subtitle;
        var x = w.globals.svgWidth / 2;
        var y = tsConfig.offsetY;
        var textAnchor = 'middle';

        if (tsConfig.align === 'left') {
          x = 10;
          textAnchor = 'start';
        } else if (tsConfig.align === 'right') {
          x = w.globals.svgWidth - 10;
          textAnchor = 'end';
        }

        x = x + tsConfig.offsetX;
        y = y + parseInt(tsConfig.style.fontSize, 10) + tsConfig.margin / 2;

        if (tsConfig.text !== undefined) {
          var graphics = new Graphics(this.ctx);
          var titleT