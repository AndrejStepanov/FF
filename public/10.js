webpackJsonp([10],{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(212)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(214)
/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/c-layouts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-294a2398", Component.options)
  } else {
    hotAPI.reload("data-v-294a2398", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(213);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("26137df6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-294a2398\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./c-layouts.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-294a2398\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./c-layouts.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.custom-resizer {\n  width: 100%;\n  height: 100%;\n}\n.custom-resizer > .pane {\n  text-align: center;\n  margin: 10px;\n  overflow: auto;\n}\n.custom-resizer.layout-v > .multipane-resizer {\n  margin: 0;\n  left: 0;\n  position: relative;\n  border-style: solid;\n  border-width: 0 thin 0 0;\n  -o-border-image: repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 2px, transparent 0, transparent 4px) 1 repeat;\n     border-image: repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 2px, transparent 0, transparent 4px) 1 repeat;\n}\n.custom-resizer.layout-h > .multipane-resizer {\n  margin: 0;\n  left: 0;\n  position: relative;\n  border-style: solid;\n  border-width: thin 0 0;\n  -o-border-image: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 2px, transparent 0, transparent 4px) 1 repeat;\n     border-image: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 2px, transparent 0, transparent 4px) 1 repeat;\n}\n", ""]);

// exports


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c_layout__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__c_layout__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'c-layouts',
	data: function data() {
		return {
			rendersObjects: {},
			configPars: {},
			isResizing: false
		};
	},
	props: {
		config: { type: Object, default: function _default() {
				return { name: 'first', width: '50%', height: '100%', layout: 'horizontal', data: [] };
			} }
	},
	computed: {
		resizable: function resizable() {
			return nvl(this.config.resizable, false);
		}
	},
	components: {
		CLayout: __WEBPACK_IMPORTED_MODULE_0__c_layout___default.a
	},
	methods: {
		recurPars: function recurPars(_ref) {
			var config = _ref.config,
			    _ref$parent = _ref.parent,
			    parent = _ref$parent === undefined ? '' : _ref$parent,
			    _ref$isLast = _ref.isLast,
			    isLast = _ref$isLast === undefined ? false : _ref$isLast;

			var vm = this;
			vm.$set(vm.configPars, config.name, _extends({}, config, { parent: parent, isLast: isLast }));
			if (config.data != undefined && config.data.length) {
				config.data.forEach(function (element, idx) {
					vm.recurPars({ config: element, parent: config.name, isLast: idx < config.data.length - 1 ? false : true });
				});
				config.data.forEach(function (row) {
					vm.configPars[row.name].last = config.data[config.data.length - 1].name;
				});
			}
		},
		recurRend: function recurRend(_ref2) {
			var _this = this;

			var config = _ref2.config;

			var vm = this,
			    tmp = [];
			if (config.data != undefined && config.data.length) {
				config.data.forEach(function (element, idx) {
					vm.recurRend({ config: element });
				});
				config.data.forEach(function (row, idx) {
					tmp.push(vm.rendersObjects[row.name]);
					if (idx < config.data.length - 1) tmp.push(vm.$createElement('div', { class: { 'multipane-resizer': true }, attrs: { block: row.name }, on: { mousedown: _this.onMouseDown } }));
				});
				vm.rendersObjects[config.name] = vm.$createElement('c-layout', { props: { config: vm.configPars[config.name] } }, tmp);
			} else vm.rendersObjects[config.name] = vm.$createElement('c-layout', { props: { config: vm.configPars[config.name] } }, [vm.$slots[config.name]]);
		},
		onMouseDown: function onMouseDown(_ref3) {
			var resizer = _ref3.target,
			    initialPageX = _ref3.pageX,
			    initialPageY = _ref3.pageY;

			var vm = this,
			    blockName = resizer.getAttribute('block');
			if (!vm.resizable || !resizer.className || !resizer.className.match('multipane-resizer')) return;
			var parentName = vm.configPars[blockName].parent,
			    lastName = vm.configPars[blockName].last,
			    container = vm.$el,
			    pane = resizer.previousElementSibling,
			    initialPaneWidth = parseFloat(vm.configPars[blockName].width.replace("%", "").replace("px", "")),
			    initialPaneHeight = parseFloat(vm.configPars[blockName].height.replace("%", "").replace("px", ""));

			var curLayout = vm.configPars[parentName].layout;
			//let { offsetWidth: initialPaneWidth,    offsetHeight: initialPaneHeight,   } = pane
			var usePercentage = !!(pane.style.width + '').match('%');
			var _window = window,
			    addEventListener = _window.addEventListener,
			    removeEventListener = _window.removeEventListener;


			var resize = function resize(initialSize) {
				var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

				if (initialSize == undefined) return;
				if (curLayout == 'vertical') return pane.style.width = usePercentage ? initialSize + offset / container.clientWidth * 100 + '%' : initialSize + offset + 'px';
				if (curLayout == 'horizontal') return pane.style.height = usePercentage ? initialSize + offset / container.clientHeight * 100 + '%' : initialSize + offset + 'px';
			};
			// This adds is-resizing class to container
			vm.isResizing = true;
			// Resize once to get current computed size
			var size = resize();
			// Trigger paneResizeStart event
			vm.$emit('paneResizeStart', pane, resizer, size);
			var onMouseMove = function onMouseMove(_ref4) {
				var pageX = _ref4.pageX,
				    pageY = _ref4.pageY;

				size = curLayout == 'vertical' ? resize(initialPaneWidth, pageX - initialPageX) : resize(initialPaneHeight, pageY - initialPageY);
				vm.$emit('paneResize', pane, resizer, size);
			};

			var onMouseUp = function onMouseUp(_ref5) {
				var pageX = _ref5.pageX,
				    pageY = _ref5.pageY;

				// Run resize one more time to set computed width/height.
				var changeSize = 0,
				    sizeLast = 0,
				    size = parseFloat(resize(curLayout == 'vertical' ? initialPaneWidth : initialPaneHeight, curLayout == 'vertical' ? pageX - initialPageX : pageY - initialPageY).replace("%", "").replace("px", ""));
				size = size > 100 ? 100 : size;
				changeSize = (curLayout == 'vertical' ? initialPaneWidth : initialPaneHeight) - size;
				sizeLast = parseFloat((curLayout == 'vertical' ? vm.configPars[lastName].width : vm.configPars[lastName].height).replace("%", "").replace("px", ""));
				if (sizeLast + changeSize - (usePercentage ? 5 : 100) <= 0) {
					changeSize = (usePercentage ? 5 : 100) - sizeLast;
					size = (curLayout == 'vertical' ? initialPaneWidth : initialPaneHeight) - changeSize;
					sizeLast = usePercentage ? 5 : 100;
				} else sizeLast += changeSize;
				if (vm.configPars[parentName].layout == 'vertical') {
					vm.configPars[blockName].width = size + (usePercentage ? '%' : 'px');
					vm.configPars[lastName].width = sizeLast + (usePercentage ? '%' : 'px');
				} else {
					vm.configPars[blockName].height = size + (usePercentage ? '%' : 'px');
					vm.configPars[lastName].height = sizeLast + (usePercentage ? '%' : 'px');
				}
				// This removes is-resizing class to container
				vm.isResizing = false;
				removeEventListener('mousemove', onMouseMove);
				removeEventListener('mouseup', onMouseUp);
				vm.$emit('paneResizeStop', pane, resizer, size);
			};
			addEventListener('mousemove', onMouseMove);
			addEventListener('mouseup', onMouseUp);
		}
	},
	created: function created() {
		var vm = this;
		vm.recurPars({ config: vm.config });
	},
	render: function render(h) {
		var vm = this;
		if (vm.config.data == undefined || !vm.config.data.length) return null;
		vm.recurRend({ config: vm.config });
		return vm.rendersObjects[vm.config.name];
	}
});

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(216)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(218)
/* template */
var __vue_template__ = __webpack_require__(219)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/c-layout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19fcdaeb", Component.options)
  } else {
    hotAPI.reload("data-v-19fcdaeb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("476d69a9", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19fcdaeb\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./c-layout.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19fcdaeb\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./c-layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.multipane {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  overflow: hidden;\n}\n.multipane.layout-h {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.multipane.layout-v {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n/*.multipane > div {  position: relative;  z-index: 1;}*/\n.multipane.scroll {\n  overflow: auto;\n  padding: 5px;\n  margin: 5px 5px 5px 0px;\n}\n.multipane.auto-size {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.multipane-resizer {\n  display: block;\n  position: relative;\n  z-index: 2;\n}\n.layout-h > .multipane-resizer {\n  width: 100%;\n  height: 3px;\n  margin-top: -10px;\n  top: 5px;\n  cursor: row-resize;\n}\n.layout-v > .multipane-resizer {\n  width: 3px;\n  height: 100%;\n  margin-left: -10px;\n  left: 5px;\n  cursor: col-resize;\n}\n", ""]);

// exports


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'c-layout',
  data: function data() {
    return {};
  },

  props: {
    config: { type: Object, default: function _default() {
        return { name: 'first', width: '50%', height: '100%', layout: 'horizontal', isLast: false, data: [] };
      } },
    noMultiPane: { type: Boolean, default: false }
  },
  computed: {
    classnames: function classnames() {
      return ['multipane', 'layout-' + this.config.layout.slice(0, 1), this.config.data != undefined && this.config.data.length > 0 ? 'custom-resizer ' : 'scroll', this.config.isLast ? 'auto-size' : ''];
    }
  },
  methods: {}
});

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.classnames,
      style: { width: _vm.config.width, height: _vm.config.height },
      attrs: { name: _vm.config.name }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-19fcdaeb", module.exports)
  }
}

/***/ })

});