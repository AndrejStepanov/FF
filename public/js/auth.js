webpackJsonp([7],{

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c_profile__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c_profile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__c_profile__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'c-head',

    data: function data() {
        return {};
    },
    props: {
        curentSystem: { type: String, default: '' },
        showLeft: { type: Boolean, default: false },
        showRight: { type: Boolean, default: false }
    },
    components: {
        CProfile: __WEBPACK_IMPORTED_MODULE_0__c_profile___default.a
    },
    methods: {
        toolbarClicked: function toolbarClicked(side) {
            this.$root.$emit('headDrawer' + side + 'Click');
        }
    }
});

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(12)
/* template */
var __vue_template__ = __webpack_require__(13)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\c-profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1441ad78", Component.options)
  } else {
    hotAPI.reload("data-v-1441ad78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'c-profile',
	data: function data() {
		return {
			fab: false,
			hover: false,
			userTicket: ''
		};
	},
	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
		userName: 'getUserName',
		userId: 'getUserId',
		sysId: 'getSysId'
	})),
	methods: {
		login: function login() {
			this.$root.$emit('authNeedDialog');
			//window.location.href = "\\Авторизация?href_back="+window.location.href;
		},
		registration: function registration() {
			window.location.href = "\\Регистрация?href_back=" + window.location.href;
		},
		logout: function logout() {
			sendRequest({ href: '/logout', type: 'logout', needSucess: 'Y', hrefBack: '/', def: { title: 'Ошибка при завершении сеанса', text: 'Завершить сеанс не удалось!' } });
		},
		subscribeTicket: function subscribeTicket(newTicket) {
			var _this = this;

			var vm = this;
			if (vm.userTicket != '') window.Echo.connector.channels['channel.AuthChange.' + vm.userTicket].unsubscribe();
			vm.userTicket = newTicket;
			window.Echo.channel('channel.AuthChange.' + vm.userTicket).listen('.session.open', function (e) {
				_this.$store.dispatch('userLogin', { userName: e.data.name, userId: e.data.userId, sysId: e.data.sysId, isRoot: e.data.isRoot });
				vm.subscribeTicket(e.data.newTicket);
				vm.$store.dispatch('msgAdding', { title: 'Авторизация', text: 'Выполнен вход под пользователем ' + e.data.name + '!', type: 'success' });
			}).listen('.session.close', function (e) {
				if (_this.userId() != '' && _this.userId() == e.data.userId || _this.sysId() != '' && _this.sysId() == e.data.sysId) _this.$store.dispatch('userLogout');
				vm.subscribeTicket(e.data.newTicket);
				vm.$store.dispatch('msgAdding', { title: 'Авторизация', text: 'Пользователь завершил свой сеанс!', type: 'success' });
			});
		}
	},
	mounted: function mounted() {
		var vm = this;
		var User_info = window.User_info || {};
		if (nvl(User_info.name) != '') vm.$store.dispatch('userLogin', { userName: User_info.name, userId: User_info.userId, sysId: User_info.sysId, isRoot: User_info.isRoot });
		vm.subscribeTicket(window.Laravel.ticket);
	}
});

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-speed-dial",
    {
      attrs: {
        direction: "bottom",
        "open-on-hover": _vm.hover,
        transition: "scale-transition"
      },
      model: {
        value: _vm.fab,
        callback: function($$v) {
          _vm.fab = $$v
        },
        expression: "fab"
      }
    },
    [
      _c(
        "v-btn",
        {
          staticClass: "accent",
          attrs: { slot: "activator", hover: "" },
          slot: "activator",
          model: {
            value: _vm.fab,
            callback: function($$v) {
              _vm.fab = $$v
            },
            expression: "fab"
          }
        },
        [
          _c("v-icon", [_vm._v("account_circle")]),
          _vm._v("  " + _vm._s(_vm.userName()) + "\t\t\t")
        ],
        1
      ),
      _vm._v(" "),
      _vm.userName() == "Гость"
        ? _c(
            "v-btn",
            {
              staticClass: "secondary",
              attrs: { small: "" },
              on: { click: _vm.login }
            },
            [
              _c("v-icon", [_vm._v("edit")]),
              _vm._v("\t\t\t Авторизоваться\t\t")
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.userName() == "Гость"
        ? _c(
            "v-btn",
            {
              staticClass: "secondary",
              attrs: { small: "" },
              on: { click: _vm.registration }
            },
            [
              _c("v-icon", [_vm._v("person_add")]),
              _vm._v("\t\t Зарегистрироваться\t")
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.userName() != "Гость"
        ? _c(
            "v-btn",
            {
              staticClass: "secondary",
              attrs: { small: "", href: "\\register" }
            },
            [
              _c("v-icon", [_vm._v("add")]),
              _vm._v("\t\t\t Изменить пароль\t\t")
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.userName() != "Гость"
        ? _c(
            "v-btn",
            {
              staticClass: "secondary",
              attrs: { small: "" },
              on: { click: _vm.logout }
            },
            [_c("v-icon", [_vm._v("delete")]), _vm._v("\t\t\t  Выйти\t\t\t\t")],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1441ad78", module.exports)
  }
}

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_s_Msg__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_s_profile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_s_dialog__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_axios__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuetify__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_laravel_echo__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_laravel_echo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_laravel_echo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__apps_Auth_vue__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__apps_Auth_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__apps_Auth_vue__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuex__["default"]);
var store = new __WEBPACK_IMPORTED_MODULE_2_vuex__["default"].Store({ modules: { msg: __WEBPACK_IMPORTED_MODULE_3__stores_s_Msg__["a" /* default */], dialog: __WEBPACK_IMPORTED_MODULE_5__stores_s_dialog__["a" /* default */], profile: __WEBPACK_IMPORTED_MODULE_4__stores_s_profile__["a" /* default */] } });



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_7_axios___default.a);
window._Bus = { axios: __WEBPACK_IMPORTED_MODULE_7_axios___default.a, bus: new __WEBPACK_IMPORTED_MODULE_0_vue___default.a() };


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_8_vuetify___default.a, { theme: appTheme });

window.io = __webpack_require__(33);

window.Echo = new __WEBPACK_IMPORTED_MODULE_9_laravel_echo___default.a({
	broadcaster: 'socket.io',
	host: window.location.hostname + ':6001'
});



window._Vue = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({ el: '#app', store: store, render: function render(h) {
		return h(__WEBPACK_IMPORTED_MODULE_10__apps_Auth_vue___default.a);
	} });
appThemeInit();

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(140)
/* template */
var __vue_template__ = __webpack_require__(141)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\apps\\Auth.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79a59683", Component.options)
  } else {
    hotAPI.reload("data-v-79a59683", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-toolbar",
    {
      staticClass: "primary",
      attrs: {
        dense: "",
        app: "",
        "clipped-left": "",
        "clipped-right": "",
        fixed: ""
      }
    },
    [
      _vm.showLeft
        ? _c("v-toolbar-side-icon", {
            on: {
              click: function($event) {
                _vm.toolbarClicked("Left")
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-btn",
        { attrs: { flat: "", icon: "", href: "\\" } },
        [_c("v-icon", { attrs: { large: "" } }, [_vm._v("stars")])],
        1
      ),
      _vm._v(" "),
      _c("v-toolbar-title", [_vm._v(_vm._s(_vm.curentSystem))]),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c("c-profile"),
      _vm._v(" "),
      _vm.showRight
        ? _c("v-toolbar-side-icon", {
            on: {
              click: function($event) {
                _vm.toolbarClicked("Right")
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74fcd621", module.exports)
  }
}

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_c_app__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_c_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_c_app__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			hrefBack: '/'
		};
	},
	components: {
		CApp: __WEBPACK_IMPORTED_MODULE_0__components_c_app___default.a
	},
	created: function created() {
		var vm = this;
		var _hrefBack = window.location.search.match(new RegExp('href_back=([^&=]+)'));
		vm.hrefBack = _hrefBack != null ? _hrefBack[1] : '/';
	},
	mounted: function mounted() {
		var vm = this;
		setTimeout(function () {
			return vm.$root.$emit('authNeedDialog');
		}, 500);
	}
});

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("c-app", {
    attrs: { curentSystem: "Авторизация", authHrefBack: _vm.hrefBack }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-79a59683", module.exports)
  }
}

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(16)
/* template */
var __vue_template__ = __webpack_require__(17)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\c-footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-656fa21c", Component.options)
  } else {
    hotAPI.reload("data-v-656fa21c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'c-footer',
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-footer",
    { staticClass: "primary bold", attrs: { height: 24, fixed: "", app: "" } },
    [
      _c("span", [_vm._v("FF - Конструктор форм")]),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c("span", [_vm._v("©  2018")])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-656fa21c", module.exports)
  }
}

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(19)
/* template */
var __vue_template__ = __webpack_require__(23)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\c-msg-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00c9ea2b", Component.options)
  } else {
    hotAPI.reload("data-v-00c9ea2b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_c_msg__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_c_msg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_c_msg__);
var _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//

//:msg="msgCur"
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'c-msg-list',
    data: function data() {
        return {
            traceDialogWidth: 1024,
            traceDialogHeight: 600,
            traceDialogId: Math.floor(Math.random() * MAX_ID),
            msgCur: { 'id': 0, 'title': '', 'text': '', 'trace': '', 'status': 0, 'file': '', 'line': 0 }
        };
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        msgCurrent: 'msgCurrent', dialogIsShow: 'dialogIsShow'
    }), {
        sizeTotal: function sizeTotal() {
            return "height:" + _this.msgCurrent.length * 25 + "px";
        },
        traceDialogIsShow: function traceDialogIsShow() {
            return this.dialogIsShow(this.traceDialogId);
        }
    }),
    components: {
        CMsg: __WEBPACK_IMPORTED_MODULE_1__components_c_msg___default.a, MErrorDesc: function MErrorDesc(resolve) {
            return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(40)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])({
        dialogShowChange: 'dialogShowChange', dialogInit: 'dialogInit'
    }), {
        traceDialogShow: function traceDialogShow(id) {
            var vm = this;
            var tmp = vm.msgCurrent.find(function (msg) {
                return msg.id == id;
            });
            if (!tmp) window._Vue.$store.dispatch('msgAdding', { title: 'Ошибка отображения трассировки', text: 'Трассировка не найдена' });
            vm.msgCur = _extends({ id: id }, tmp);
            if (!vm.traceDialogIsShow) vm.dialogShowChange({ daiologId_: vm.traceDialogId, isShow: true });
        }
    }),
    created: function created() {
        var vm = this;
        vm.dialogInit({ daiologId: vm.traceDialogId, daiologTitle: "Трассировка", dialogName: 'trace_' + vm.traceDialogId });
    }
});

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(21)
/* template */
var __vue_template__ = __webpack_require__(22)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\c-msg.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4bd8da60", Component.options)
  } else {
    hotAPI.reload("data-v-4bd8da60", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'c-msg',
    data: function data() {
        return {
            snackbar: true,
            timeoutCur: 0,
            visibility: false
        };
    },
    props: {
        msg: {
            type: Object, default: function _default() {
                return { id: 0, 'timeout': 0, 'y': 'bottom', 'x': 'right', 'modeLine': 'multi-line', 'type': 'error', 'title': '', 'text': '', 'line': 0, 'trace': '' };
            }
        }
    },
    computed: {
        traceAble: function traceAble() {
            return this.msg.trace != '';
        }
    },
    watch: {
        // эта функция запускается при любом изменении вопроса
        snackbar: function snackbar(newsnackbar) {
            if (newsnackbar != false) return;
            var vm = this;
            vm.visibility = false;
            setTimeout(function () {
                vm.$store.dispatch('msgDeleting', vm.msg.id);
            }, 1000);
        }
    },
    components: {},
    methods: {
        snackClcik: function snackClcik() {
            var vm = this;
            vm.timeoutCur = 999999;
        }
    },
    created: function created() {
        var vm = this;
        vm.timeoutCur = vm.msg.timeout;
        setTimeout(function () {
            vm.visibility = true;
        }, 10);
    }
});

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-slide-x-transition", [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visibility,
            expression: "visibility"
          }
        ]
      },
      [
        _c(
          "v-snackbar",
          {
            class: _vm.msg.type + "--content",
            attrs: {
              transition: "scale-transition",
              dense: "",
              timeout: _vm.timeoutCur,
              top: _vm.msg.y === "top",
              bottom: _vm.msg.y === "bottom",
              right: _vm.msg.x === "right",
              left: _vm.msg.x === "left",
              "multi-line": _vm.msg.modeLine === "multi-line",
              vertical: _vm.msg.modeLine === "vertical"
            },
            on: { click: _vm.snackClcik },
            model: {
              value: _vm.snackbar,
              callback: function($$v) {
                _vm.snackbar = $$v
              },
              expression: "snackbar"
            }
          },
          [
            _c("span", [
              _c("span", { staticClass: "bold" }, [
                _vm._v(_vm._s(_vm.msg.title))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.msg.text))])
            ]),
            _vm._v(" "),
            _c(
              "v-flex",
              { attrs: { xs12: "", sm3: "" } },
              [
                _c(
                  "v-btn",
                  {
                    staticClass: "accent",
                    attrs: { flat: "", icon: "" },
                    nativeOn: {
                      click: function($event) {
                        _vm.snackbar = false
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("close")])],
                  1
                ),
                _vm._v(" "),
                _vm.traceAble
                  ? _c(
                      "v-btn",
                      {
                        staticClass: "accent",
                        attrs: { icon: "" },
                        nativeOn: {
                          click: function($event) {
                            _vm.$emit("traceDialogShow", _vm.msg.id)
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("description")])],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4bd8da60", module.exports)
  }
}

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: {}, attrs: { id: "block_message" } },
    [
      _vm._l(_vm.msgCurrent, function(msg) {
        return _c("c-msg", {
          key: msg.id,
          attrs: { msg: msg },
          on: { traceDialogShow: _vm.traceDialogShow }
        })
      }),
      _vm._v(" "),
      _vm.traceDialogIsShow
        ? _c("m-error-desc", {
            attrs: {
              dialogId: _vm.traceDialogId,
              dialogWidth: _vm.traceDialogWidth,
              dialogHeight: _vm.traceDialogHeight,
              msg: _vm.msgCur
            }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00c9ea2b", module.exports)
  }
}

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { dark: "" } },
    [
      _c("v-content", [_vm._t("default")], 2),
      _vm._v(" "),
      _c("c-head", {
        attrs: {
          curentSystem: _vm.curentSystem,
          showLeft: _vm.showLeft,
          showRight: _vm.showRight
        }
      }),
      _vm._v(" "),
      _c("c-footer"),
      _vm._v(" "),
      _c("c-msg-list"),
      _vm._v(" "),
      _vm.showLoginDialog(_vm.loginDialogId)
        ? _c("m-input-fields", {
            attrs: {
              dialogId: _vm.loginDialogId,
              hrefBack: _vm.authHrefBack,
              socetHref: "/login",
              socetEvent: "auth.login"
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5aa91570", module.exports)
  }
}

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	state: { //= data
		msgs: []
	},
	getters: { // computed properties
		msgFind: function msgFind(state) {
			return function (msgId) {
				return state.msgs.find(function (msg) {
					return msg.id === msgId;
				});
			};
		},
		msgFindIndex: function msgFindIndex(state) {
			return function (msgId) {
				return state.msgs.findIndex(function (msg) {
					return msg.id === msgId;
				});
			};
		},
		msgCurrent: function msgCurrent(state) {
			return state.msgs;
		}
	},
	actions: {
		msgAdding: function msgAdding(_ref, _ref2) {
			var commit = _ref.commit,
			    getters = _ref.getters,
			    state = _ref.state;
			var timeout = _ref2.timeout,
			    y = _ref2.y,
			    x = _ref2.x,
			    modeLine = _ref2.modeLine,
			    type = _ref2.type,
			    title = _ref2.title,
			    text = _ref2.text,
			    status = _ref2.status,
			    trace = _ref2.trace,
			    file = _ref2.file,
			    line = _ref2.line;

			var id = Math.floor(Math.random() * MAX_ID);
			timeout = timeout || 600000;
			y = y || 'top';
			x = x || 'right';
			modeLine = modeLine || 'multi-line';
			type = type || 'error';
			title = title || 'Титул';
			text = text = (status == 401 ? 'Необходимо авторизоваться!' : text) || 'Текст сообщения';
			status = status || '';
			trace = trace || '';
			file = file || '';
			line = line || '';
			commit('msgAdd', { id: id, timeout: timeout, y: y, x: x, modeLine: modeLine, type: type, title: title, text: text, status: status, trace: trace, file: file, line: line });
		},
		msgDeleting: function msgDeleting(_ref3, msgId) {
			var commit = _ref3.commit,
			    getters = _ref3.getters,
			    state = _ref3.state;

			var idx = getters.msgFindIndex(msgId);
			if (idx < 0) return;
			commit('msgDelete', idx);
		}
	},
	mutations: {
		msgAdd: function msgAdd(state, _ref4) {
			var id = _ref4.id,
			    timeout = _ref4.timeout,
			    y = _ref4.y,
			    x = _ref4.x,
			    modeLine = _ref4.modeLine,
			    type = _ref4.type,
			    title = _ref4.title,
			    text = _ref4.text,
			    status = _ref4.status,
			    trace = _ref4.trace,
			    file = _ref4.file,
			    line = _ref4.line;

			state.msgs.push({ id: id, timeout: timeout, y: y, x: x, modeLine: modeLine, type: type, title: title, text: text, status: status, trace: trace, file: file, line: line });
		},
		msgDelete: function msgDelete(state, idx) {
			state.msgs.splice(idx, 1);
		}
	}

});

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	state: {
		userName: 'Гость',
		userId: '',
		sysId: '',
		isRoot: ''
	},
	getters: { // computed properties
		getUserName: function getUserName(state) {
			return function () {
				return state.userName;
			};
		},
		getUserId: function getUserId(state) {
			return function () {
				return state.userId;
			};
		},
		getSysId: function getSysId(state) {
			return function () {
				return state.sysId;
			};
		},
		getIsRoot: function getIsRoot(state) {
			return function () {
				return state.isRoot;
			};
		}
	},
	actions: {
		userLogin: function userLogin(_ref, _ref2) {
			var commit = _ref.commit;
			var userName = _ref2.userName,
			    userId = _ref2.userId,
			    sysId = _ref2.sysId,
			    isRoot = _ref2.isRoot;

			commit('setUserInfo', { userName: userName, userId: userId, sysId: sysId, isRoot: isRoot });
		},
		userLogout: function userLogout(_ref3) {
			var commit = _ref3.commit;

			commit('clearUserInfo');
		}
	},
	mutations: {
		setUserInfo: function setUserInfo(state, _ref4) {
			var userName = _ref4.userName,
			    userId = _ref4.userId,
			    sysId = _ref4.sysId,
			    isRoot = _ref4.isRoot;

			state.userName = userName;
			state.userId = userId;
			state.sysId = sysId;
			state.isRoot = isRoot;
		},
		clearUserInfo: function clearUserInfo(state) {
			state.userName = 'Гость';
			state.userId = '';
			state.sysId = '';
			state.isRoot = '';
		}
	}
});

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	state: { //= data
		dialogs: []
	},
	getters: { // computed properties
		dialogFindById: function dialogFindById(state) {
			return function (daiologId) {
				return state.dialogs.find(function (dialog) {
					return dialog.id === daiologId;
				});
			};
		},
		dialogFindByName: function dialogFindByName(state) {
			return function (daiologName) {
				return state.dialogs.find(function (dialog) {
					return dialog.name === daiologName;
				});
			};
		},
		dialogIsShow: function dialogIsShow(state, getters) {
			return function (daiologId) {
				var dialog = getters.dialogFindById(daiologId);
				return !dialog ? false : dialog.isShow;
			};
		},
		dialogPersistent: function dialogPersistent(state, getters) {
			return function (daiologId) {
				var dialog = getters.dialogFindById(daiologId);
				return !dialog ? false : dialog.persistent;
			};
		},
		dialogTitle: function dialogTitle(state, getters) {
			return function (daiologId) {
				var dialog = getters.dialogFindById(daiologId);
				return !dialog ? 'Заголовок диалога!' : dialog.title;
			};
		},
		dialogName: function dialogName(state, getters) {
			return function (daiologId) {
				var dialog = getters.dialogFindById(daiologId);
				return !dialog ? 'Название диалога!' : dialog.name;
			};
		}
	},
	actions: {
		dialogInit: function dialogInit(_ref, _ref2) {
			var commit = _ref.commit,
			    getters = _ref.getters,
			    state = _ref.state;
			var daiologId = _ref2.daiologId,
			    daiologTitle = _ref2.daiologTitle,
			    daiologPersistent = _ref2.daiologPersistent,
			    dialogName = _ref2.dialogName;

			if (getters.dialogFindById(daiologId)) return;
			daiologPersistent = daiologPersistent || true;
			commit('dialogAdd', { daiologId: daiologId, daiologTitle: daiologTitle, daiologPersistent: daiologPersistent, dialogName: dialogName });
		},
		dialogShowChange: function dialogShowChange(_ref3, _ref4) {
			var commit = _ref3.commit,
			    getters = _ref3.getters,
			    state = _ref3.state;
			var daiologId_ = _ref4.daiologId_,
			    daiologName = _ref4.daiologName,
			    isShow = _ref4.isShow;

			var dialog = false;
			if (daiologId_ > 0) dialog = getters.dialogFindById(daiologId_);else if (nvl(daiologName) != '') dialog = getters.dialogFindByName(daiologName);
			if (!dialog) return;
			if (!isShow) window._Vue.$root.$emit('dialogClose' + daiologId_);else window._Vue.$root.$emit('dialogOpen' + daiologId_);
			commit('dialogShowSet', { dialog: dialog, isShow: isShow });
		}
	},
	mutations: {
		dialogAdd: function dialogAdd(state, _ref5) {
			var daiologId = _ref5.daiologId,
			    daiologTitle = _ref5.daiologTitle,
			    daiologPersistent = _ref5.daiologPersistent,
			    dialogName = _ref5.dialogName;

			state.dialogs.push({ id: daiologId, isShow: false, title: daiologTitle, persistent: daiologPersistent, name: dialogName });
		},
		dialogShowSet: function dialogShowSet(state, _ref6) {
			var dialog = _ref6.dialog,
			    isShow = _ref6.isShow;

			dialog.isShow = isShow;
		}
	}

});

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(8)
/* template */
var __vue_template__ = __webpack_require__(24)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\c-app.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5aa91570", Component.options)
  } else {
    hotAPI.reload("data-v-5aa91570", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_c_head__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_c_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_c_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_c_footer__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_c_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_c_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_c_msg_list__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_c_msg_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_c_msg_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			loginDialogId: Math.floor(Math.random() * MAX_ID)
		};
	},
	props: {
		curentSystem: { type: String, required: true },
		authHrefBack: { type: String },
		showLeft: { type: Boolean, default: false },
		showRight: { type: Boolean, default: false }
	},
	computed: {
		showLoginDialog: function showLoginDialog(loginDialogId) {
			return this.dialogIsShow(loginDialogId);
		}
	},
	components: {
		CHead: __WEBPACK_IMPORTED_MODULE_0__components_c_head___default.a, CFooter: __WEBPACK_IMPORTED_MODULE_1__components_c_footer___default.a, CMsgList: __WEBPACK_IMPORTED_MODULE_2__components_c_msg_list___default.a,
		MInputFields: function MInputFields(resolve) {
			return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(35)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	},
	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["mapActions"])({
		dialogShow: 'dialogShowChange', dialogInit: 'dialogInit'
	}), Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["mapGetters"])({
		dialogIsShow: 'dialogIsShow'
	})),
	created: function created() {
		var vm = this;
		vm.dialogInit({ daiologId: vm.loginDialogId, daiologTitle: "Авторизация", dialogName: "auth-login" });
		vm.$root.$on('authNeedDialog', function (obj) {
			vm.dialogShow({ daiologId_: vm.loginDialogId, isShow: true });
		});
	}
});

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(10)
/* template */
var __vue_template__ = __webpack_require__(14)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\c-head.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74fcd621", Component.options)
  } else {
    hotAPI.reload("data-v-74fcd621", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

},[137]);