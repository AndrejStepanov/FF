(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/Register"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/after/index.js":
/*!*************************************!*\
  !*** ./node_modules/after/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}


/***/ }),

/***/ "./node_modules/arraybuffer.slice/index.js":
/*!*************************************************!*\
  !*** ./node_modules/arraybuffer.slice/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/apps/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/apps/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_c_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/c-app */ "./resources/assets/js/components/c-app.vue");
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
      valid: false,
      name: '',
      login: '',
      password: '',
      passwordConfirmation: '',
      fieldRules: {
        req: function req(v) {
          return !!v || 'Поле обязательное';
        },
        min: function min(v) {
          return v.length >= 4 || 'Минимум 4 знаков!';
        },
        passMatch: function passMatch() {
          return password.value == passwordConfirmation.value || 'Не совпадает с паролем!';
        }
      }
    };
  },
  components: {
    CApp: _components_c_app__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    submit: function submit() {
      var vm = this;
      if (!vm.$refs.form.validate()) return;
      var href_back = window.location.search.match(new RegExp('href_back=([^&=]+)'));
      sendRequest({
        href: '/register',
        type: 'register',
        needSucess: 'Y',
        hrefBack: href_back != null ? href_back[1] : '/',
        def: {
          title: 'Ошибка регистрации',
          text: 'Указаны не корректные данные!'
        },
        data: {
          name: vm.name,
          login: vm.login,
          password: vm.password,
          password_confirmation: vm.passwordConfirmation
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-app.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-app.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_x_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/x-auth */ "./resources/assets/js/mixins/x-auth.vue");
/* harmony import */ var _mixins_x_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/x-store */ "./resources/assets/js/mixins/x-store.vue");
/* harmony import */ var _mixins_x_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/x-dialog */ "./resources/assets/js/mixins/x-dialog.vue");
/* harmony import */ var _components_c_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/c-head */ "./resources/assets/js/components/c-head.vue");
/* harmony import */ var _components_c_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/c-footer */ "./resources/assets/js/components/c-footer.vue");
/* harmony import */ var _components_c_msg_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/c-msg-list */ "./resources/assets/js/components/c-msg-list.vue");
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
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'c-app',
  data: function data() {
    return {
      panelLeftShowen: false,
      panelRightShowen: false,
      needLabel: true
    };
  },
  props: {
    curentSystem: {
      type: String,
      "default": ''
    },
    layoutName: {
      type: String,
      "default": 'main'
    },
    needFooter: {
      type: Boolean,
      "default": true
    },
    needHeader: {
      type: Boolean,
      "default": true
    },
    headFixed: {
      type: Boolean,
      "default": true
    },
    needBgIm: {
      type: Boolean,
      "default": true
    },
    dark: {
      type: Boolean,
      "default": false
    },
    light: {
      type: Boolean,
      "default": false
    },
    headHideOnScroll: {
      type: Boolean,
      "default": false
    },
    headElevateOnScroll: {
      type: Boolean,
      "default": false
    },
    panelLeft: {
      type: Object,
      "default": function _default() {
        return {
          drawer: true,
          show: false,
          "class": '',
          width: 270,
          filter: false
        };
      }
    },
    panelRight: {
      type: Object,
      "default": function _default() {
        return {
          drawer: false,
          show: false,
          "class": '',
          width: 300,
          filter: false
        };
      }
    }
  },
  computed: {
    isPerefThemeDark: function isPerefThemeDark() {
      return this.dark && !this.light ? true : this.$vuetify.theme.dark ? true : false;
    },
    isPerefThemeLight: function isPerefThemeLight() {
      return this.light && !this.dark ? true : this.$vuetify.theme.light ? true : false;
    },
    mainLayoutConfig: function mainLayoutConfig() {
      return this.layoutByName(this.layoutName);
    },
    slotNames: function slotNames() {
      var vm = this;
      if (vm.mainLayoutConfig == null) return [];
      return Object.keys(vm.layoutDescByHead(this.layoutName));
    },
    currentAvatar: function currentAvatar() {
      var vm = this;
      return nvl(vm.profileAvatar(), "https://randomuser.me/api/portraits/men/85.jpg");
    },
    getContentStyles: function getContentStyles() {
      var vm = this; //финт ушами, что бы основная область не прокручивалась

      return {
        height: vm.oneScreen ? '100px' : null,
        //background:vm.needBgIm?"url('storage/bg.jpg')":null , 
        backgroundAttachment: 'fixed'
      };
    },
    panelLeftDrawer: function panelLeftDrawer() {
      return this.panelLeft.drawer || this.panelLeft.show || this.panelLeft.filter;
    },
    panelRightDrawer: function panelRightDrawer() {
      return this.panelRight.drawer || this.panelRight.show || this.panelLeft.filter;
    },
    panelLeftWidth: function panelLeftWidth() {
      return this.panelLeft.filter ? 358 : nvl(this.panelLeft.width, 270);
    },
    panelRightWidth: function panelRightWidth() {
      return this.panelRight.filter ? 358 : nvl(this.panelRight.width, 300);
    },
    mainPanelReq: function mainPanelReq() {
      return this.mainLayoutConfig != null;
    },
    authAva: function authAva() {
      return this.profileUserName() == '' ? 'account_circle' : 'launch';
    },
    authItems: function authItems() {
      return this.profileUserName() == '' ? null : [{
        link: '$vuetify.texts.main.links.mainPage',
        icon: 'home',
        href: "\\user"
      }, {
        link: '$vuetify.texts.main.links.prodList',
        icon: 'library_books',
        href: '\\prodList'
      }];
    }
  },
  components: {
    CHead: _components_c_head__WEBPACK_IMPORTED_MODULE_3__["default"],
    CFooter: _components_c_footer__WEBPACK_IMPORTED_MODULE_4__["default"],
    CMsgList: _components_c_msg_list__WEBPACK_IMPORTED_MODULE_5__["default"],
    MInputFields: function MInputFields(resolve) {
      return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../modules/m-input-fields.vue */ "./resources/assets/js/modules/m-input-fields.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
    },
    CLayouts: function CLayouts(resolve) {
      return __webpack_require__.e(/*! AMD require */ 2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./c-layouts.vue */ "./resources/assets/js/components/c-layouts.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
    }
  },
  mixins: [_mixins_x_store__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_x_dialog__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_x_auth__WEBPACK_IMPORTED_MODULE_0__["default"]],
  methods: {
    authChange: function authChange() {
      var vm = this;
      if (vm.profileUserName() == '') vm.$root.$emit('systemLogin');else vm.$root.$emit('systemLogout');
    }
  },
  created: function created() {
    var vm = this;
    vm.panelLeftShowen = ['xs', 'sm'].indexOf(vm.$vuetify.breakpoint.name) != -1 ? false : nvl(vm.panelLeft.show, false);
    vm.panelRightShowen = ['xs', 'sm'].indexOf(vm.$vuetify.breakpoint.name) != -1 ? false : nvl(vm.panelRight.show, false);
    vm.$root.$on('headDrawerLeftClick', function (obj) {
      vm.panelLeftShowen = !vm.panelLeftShowen;
    });
    vm.$root.$on('headDrawerRightClick', function (obj) {
      vm.panelRightShowen = !vm.panelRightShowen;
    });
    vm.$root.$on('openAuthDialog', function (obj) {
      vm.dialogSelect(vm.dialogsConfig.authLogin.id);
      vm.dialogShowChange({
        name: "authLogin",
        isShow: true
      });
    });
  },
  mounted: function mounted() {
    var vm = this;
    vm.observer = new IntersectionObserver(function (entries) {
      return vm.needLabel = entries[0].intersectionRatio > 0;
    });
    vm.observer.observe(vm.$refs.scrollArea);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  },
  props: {
    fixed: {
      type: Boolean,
      "default": false
    },
    dark: {
      type: Boolean,
      "default": false
    },
    light: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-head.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-head.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _c_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c-profile */ "./resources/assets/js/components/c-profile.vue");
/* harmony import */ var _mixins_x_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/x-store */ "./resources/assets/js/mixins/x-store.vue");
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
    curentSystem: {
      type: String,
      "default": ''
    },
    showLeft: {
      type: Boolean,
      "default": false
    },
    showRight: {
      type: Boolean,
      "default": false
    },
    needLabel: {
      type: Boolean,
      "default": true
    },
    neeedSearch: {
      type: Boolean,
      "default": false
    },
    headHideOnScroll: {
      type: Boolean,
      "default": false
    },
    headElevateOnScroll: {
      type: Boolean,
      "default": false
    },
    fixed: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    withSearch: function withSearch() {
      return this.neeedSearch && top.location.pathname != '/search';
    }
  },
  components: {
    CProfile: _c_profile__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_mixins_x_store__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: {
    toolbarClicked: function toolbarClicked(side) {
      this.$root.$emit('headDrawer' + side + 'Click');
    },
    searchClick: function searchClick() {
      var vm = this;
      window.location.href = "\\search";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-msg-list.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-msg-list.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_x_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/x-store */ "./resources/assets/js/mixins/x-store.vue");
/* harmony import */ var _mixins_x_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/x-dialog */ "./resources/assets/js/mixins/x-dialog.vue");
/* harmony import */ var _components_c_msg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/c-msg */ "./resources/assets/js/components/c-msg.vue");
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "c-msg-list",
  data: function data() {
    return {
      dialogsConfig: {
        errorTrace: {
          id: getNewId(),
          title: "$vuetify.texts.modals.traceShow.title",
          module: 'm-error-desc',
          width: 1024,
          height: 600,
          buttons: []
        }
      }
    };
  },
  computed: {
    sizeTotal: function sizeTotal() {
      return {
        //height:this.msgAllMsg.length*25+"px",
        width: (this.$vuetify.breakpoint.width > 450 ? 450 : this.$vuetify.breakpoint.width) + 'px'
      };
    }
  },
  components: {
    CMsg: _components_c_msg__WEBPACK_IMPORTED_MODULE_2__["default"],
    MErrorDesc: function MErrorDesc(resolve) {
      return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../modules/m-error-desc.vue */ "./resources/assets/js/modules/m-error-desc.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
    }
  },
  mixins: [_mixins_x_store__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_x_dialog__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: {
    traceDialogShow: function traceDialogShow(id) {
      var vm = this;
      var tmp = vm.msgAllMsg.find(function (msg) {
        return msg.id == id;
      });
      if (!tmp) showMsg(getErrDesc('traceNotFound'));
      vm.dialogSetAllParams({
        name: "errorTrace",
        params: {
          id: id,
          msg: tmp
        }
      });
      vm.dialogShow(vm.dialogsConfig.errorTrace.id);
    }
  },
  created: function created() {
    var vm = this;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-msg.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-msg.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_x_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/x-store */ "./resources/assets/js/mixins/x-store.vue");
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
      timeoutCur: 5,
      visibility: false,
      timerVal: 0,
      timerId: 0
    };
  },
  props: {
    msg: {
      type: Object,
      "default": function _default() {
        return {
          id: 0,
          'timeout': 0,
          y: 'bottom',
          x: 'right',
          modeLine: 'multi-line',
          type: 'error',
          title: '',
          text: '',
          line: 0,
          trace: ''
        };
      }
    },
    icons: {
      type: Object,
      "default": function _default() {
        return {
          success: 'done_outline',
          error: 'error',
          info: 'info',
          warning: 'alarm'
        };
      }
    }
  },
  computed: {
    traceAble: function traceAble() {
      return this.msg.trace != '';
    },
    maxTimerVal: function maxTimerVal() {
      return (this.msg.timeout || this.timeoutCur) * 2;
    }
  },
  watch: {
    // эта функция запускается при любом изменении вопроса
    snackbar: function snackbar(newsnackbar) {
      if (newsnackbar != false) return;
      var vm = this;
      vm.visibility = false;
      setTimeout(function () {
        vm.msgDelete(vm.msg.id);
      }, 1000);
    }
  },
  components: {},
  mixins: [_mixins_x_store__WEBPACK_IMPORTED_MODULE_0__["default"]],
  methods: {
    alertClcik: function alertClcik() {
      this.removeTimer();
    },
    removeTimer: function removeTimer() {
      var vm = this;
      if (vm.timerId == 0) return;
      clearTimeout(vm.timerId);
      vm.timerId = 0;
    }
  },
  created: function created() {
    var _this = this;

    var vm = this;
    vm.timerVal = vm.maxTimerVal;
    vm.timerId = setInterval(function () {
      vm.timerVal -= 1;

      if (vm.timerVal < 0) {
        _this.removeTimer();

        vm.snackbar = false;
      }
    }, 500); //отрисовка движения ползунка идет в течении секунды
  },
  beforeDestroy: function beforeDestroy() {
    this.removeTimer();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_x_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/x-store */ "./resources/assets/js/mixins/x-store.vue");
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
      fab: true,
      hover: false //открывать при наведении

    };
  },
  mixins: [_mixins_x_store__WEBPACK_IMPORTED_MODULE_0__["default"]],
  methods: {},
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/mixins/x-auth.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/mixins/x-auth.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_x_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/x-store */ "./resources/assets/js/mixins/x-store.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userTicket: '',
      dialogsConfig: {
        authLogin: {
          id: getNewId(),
          title: "$vuetify.texts.modals.auth.title",
          module: 'm-input-fields',
          width: 300,
          params: {
            socetHref: "/login",
            socetEvent: "auth.login",
            saveButtonProp: {
              title: '$vuetify.texts.simple.actions.logIn',
              icon: 'input'
            }
          }
        }
      }
    };
  },
  mixins: [_mixins_x_store__WEBPACK_IMPORTED_MODULE_0__["default"]],
  methods: {
    login: function login() {
      var vm = this,
          _hrefBack = getLocationParam('auth_href_back');

      if (vm.profileUserName() != '') return;
      _hrefBack = _hrefBack != null ? _hrefBack : window.location.origin + "\\user";
      window.location.href = "\\auth?auth_href_back=" + _hrefBack;
    },
    logout: function logout() {
      sendRequest({
        href: '/logout',
        type: 'logout',
        needSucess: 'Y',
        hrefBack: '/',
        "default": getErrDesc('noLogOut')
      });
    },
    subscribeTicket: function subscribeTicket(newTicket) {
      var vm = this,
          _hrefBack = getLocationParam('auth_href_back');

      if (vm.userTicket != '') window.echo.connector.channels['channel.AuthChange.' + vm.userTicket].unsubscribe();
      vm.userTicket = newTicket;
      window.echo.channel('channel.AuthChange.' + vm.userTicket).listen('.session.open', function (e) {
        vm.profileLog({
          userName: e.data.name,
          userId: e.data.userId,
          isRoot: e.data.isRoot,
          avatar: e.data.avatar
        });
        vm.subscribeTicket(e.data.newTicket);
        showMsg(_objectSpread({}, getMsgDesc('loginSucsess'), {
          msgParams: [e.data.name]
        }));
        if (_hrefBack != null) window.location.href = decodeURIComponent(_hrefBack);
      }).listen('.session.close', function (e) {
        if (vm.profileUserId() != '' && vm.profileUserId() == e.data.userId) vm.profileLogout();
        vm.subscribeTicket(e.data.newTicket);
        showMsg(getMsgDesc('logoutSucsess'));
      });
    }
  },
  created: function created() {
    var vm = this;
    vm.$root.$on('systemLogin', function () {
      vm.login();
    });
    vm.$root.$on('systemLogout', function () {
      vm.logout();
    });
  },
  mounted: function mounted() {
    var vm = this;
    var userInfo = window.userInfo || {};
    if (nvl(userInfo.name) != '') vm.profileLog({
      userName: userInfo.name,
      userId: userInfo.userId,
      isRoot: userInfo.isRoot,
      avatar: userInfo.avatar
    });else vm.profileLogout();
    vm.subscribeTicket(window.laravel.ticket);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/mixins/x-dialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/mixins/x-dialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialogIdOpened: 0,
      dialogModule: '',
      dialogsConfig: {
        /* оставил для примера, в результирующей компоненте должна быть описана эта структура
        authLogin:{
        	id: getNewId(),  
        	module:'m-input-fields',  
        	title:"$vuetify.texts.modals.auth.title", 
        	buttons:[{id:1, title:'$vuetify.texts.simple.actions.logIn', icon:'input', allig:'right', click:'dialogSave' , needCheck:true}],
        	params:{ socetHref:"/login", socetEvent:"auth.login"}, 
        },
        */
      }
    };
  },
  methods: {
    dialogIsShowen: function dialogIsShowen(dialogId) {
      return this.dialogIsShow(dialogId);
    },
    dialogShow: function dialogShow(dialogId) {
      var vm = this;
      vm.dialogSelect(dialogId);
      vm.dialogShowChange({
        id: dialogId,
        isShow: true
      });
    },
    dialogSelect: function dialogSelect(dialogId) {
      //что бы инициализировать компоненту шблонного окна
      var vm = this,
          res = 0;
      vm.dialogIdOpened = dialogId;

      for (name in vm.dialogsConfig) {
        if (vm.dialogsConfig[name].id == dialogId) {
          res = 1;
          vm.dialogModule = vm.dialogsConfig[name].module || 'm-input-fields';
          break;
        }
      }

      if (res == 0) showMsg(getErrDesc('noDialogOpen'));
    }
  },
  created: function created() {
    var vm = this;

    for (var dialog in vm.dialogsConfig) {
      vm.dialogInit({
        config: {
          id: vm.dialogsConfig[dialog].id,
          name: dialog,
          title: vm.dialogsConfig[dialog].title,
          width: vm.dialogsConfig[dialog].width,
          height: vm.dialogsConfig[dialog].height,
          buttons: vm.dialogsConfig[dialog].buttons
        },
        params: vm.dialogsConfig[dialog].params
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/mixins/x-store.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/mixins/x-store.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    stateParams: 'param/params'
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    //перечень функций из стандартных vuex
    dialogById: "dialog/getById",
    dialogByName: "dialog/getByName",
    dialogConfig: "dialog/getConfig",
    dialogDilog: "dialog/getDilog",
    dialogParams: "dialog/getParams",
    dialogIsShow: "dialog/getIsShow",
    msgAllMsg: "msg/getAllMsg",
    msgMsg: "msg/getMsg",
    msgMsgIndex: "msg/getMsgIndex",
    paramByCode: "param/getByCode",
    paramGroup: "param/getGroup",
    paramTodo: "param/getTodo",
    paramTodoChecked: "param/getTodoChecked",
    profileIsRoot: "profile/getIsRoot",
    profileAvatar: "profile/getAvatar",
    profileUserId: "profile/getUserId",
    profileUserName: "profile/getUserName",
    profileLanguage: "profile/getLanguage",
    layoutByName: "layout/getByName",
    layoutDescByHead: "layout/getDescByHead",
    layoutDescByName: "layout/getDescByName",
    layoutSizePxByHead: "layout/getSizePxByHead",
    layoutSizePxByName: "layout/getSizePxByName"
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    dialogInit: "dialog/doInit",
    dialogSetAllParams: "dialog/doSetAllParams",
    dialogSetAllParamsAndShow: "dialog/doSetAllParamsAndShow",
    dialogSetParamByName: "dialog/doSetParamByName",
    dialogSetParamByNameAndShow: "dialog/doSetParamByNameAndShow",
    dialogShowChange: "dialog/doShowChange",
    msgAdd: "msg/doAdd",
    msgDelete: "msg/doDelete",
    paramInit: "param/doInit",
    paramSetData: "param/doSetData",
    paramSet: "param/doSet",
    paramSetAll: "param/doSetAll",
    paramSetSeveral: "param/doSetSeveral",
    profileLog: "profile/doLog",
    profileLogout: "profile/doLogout",
    layoutInit: "layout/doInit",
    layoutSizeSet: "layout/doSizeSet",
    layoutSizePxRecalc: "layout/doSizePxRecalc",
    layoutSizePxChange: "layout/doSizePxChange"
  }))
});

/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/blob/index.js":
/*!************************************!*\
  !*** ./node_modules/blob/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
  typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder :
  typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
  typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : 
  false;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function(chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function(part) {
    bb.append(part);
  });

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
};

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/component-bind/index.js":
/*!**********************************************!*\
  !*** ./node_modules/component-bind/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};


/***/ }),

/***/ "./node_modules/component-inherit/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-inherit/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/material-design-icons-iconfont/dist/material-design-icons.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/material-design-icons-iconfont/dist/material-design-icons.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\r\n@font-face {\r\n  font-family: 'Material Icons';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-display: block;\r\n  src: url(" + escape(__webpack_require__(/*! ./fonts/MaterialIcons-Regular.eot */ "./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.eot")) + ");\r\n  /* For IE6-8 */\r\n  src: local(\"\\263A\"), url(" + escape(__webpack_require__(/*! ./fonts/MaterialIcons-Regular.woff2 */ "./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff2")) + ") format(\"woff2\"), url(" + escape(__webpack_require__(/*! ./fonts/MaterialIcons-Regular.woff */ "./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff")) + ") format(\"woff\"), url(" + escape(__webpack_require__(/*! ./fonts/MaterialIcons-Regular.ttf */ "./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.ttf")) + ") format(\"truetype\"); }\r\n\r\n.material-icons {\r\n  font-family: 'Material Icons';\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;\r\n  /* Preferred icon size */\r\n  display: inline-block;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-wrap: normal;\r\n  white-space: nowrap;\r\n  direction: ltr;\r\n  /* Support for all WebKit browsers. */\r\n  -webkit-font-smoothing: antialiased;\r\n  /* Support for Safari and Chrome. */\r\n  text-rendering: optimizeLegibility;\r\n  /* Support for Firefox. */\r\n  -moz-osx-font-smoothing: grayscale;\r\n  /* Support for IE. */\r\n  font-feature-settings: 'liga'; }\r\n  .material-icons._10k:before {\r\n    content: \"\\E951\"; }\r\n  .material-icons._10mp:before {\r\n    content: \"\\E952\"; }\r\n  .material-icons._11mp:before {\r\n    content: \"\\E953\"; }\r\n  .material-icons._12mp:before {\r\n    content: \"\\E954\"; }\r\n  .material-icons._13mp:before {\r\n    content: \"\\E955\"; }\r\n  .material-icons._14mp:before {\r\n    content: \"\\E956\"; }\r\n  .material-icons._15mp:before {\r\n    content: \"\\E957\"; }\r\n  .material-icons._16mp:before {\r\n    content: \"\\E958\"; }\r\n  .material-icons._17mp:before {\r\n    content: \"\\E959\"; }\r\n  .material-icons._18mp:before {\r\n    content: \"\\E95A\"; }\r\n  .material-icons._19mp:before {\r\n    content: \"\\E95B\"; }\r\n  .material-icons._1k:before {\r\n    content: \"\\E95C\"; }\r\n  .material-icons._1k_plus:before {\r\n    content: \"\\E95D\"; }\r\n  .material-icons._20mp:before {\r\n    content: \"\\E95E\"; }\r\n  .material-icons._21mp:before {\r\n    content: \"\\E95F\"; }\r\n  .material-icons._22mp:before {\r\n    content: \"\\E960\"; }\r\n  .material-icons._23mp:before {\r\n    content: \"\\E961\"; }\r\n  .material-icons._24mp:before {\r\n    content: \"\\E962\"; }\r\n  .material-icons._2k:before {\r\n    content: \"\\E963\"; }\r\n  .material-icons._2k_plus:before {\r\n    content: \"\\E964\"; }\r\n  .material-icons._2mp:before {\r\n    content: \"\\E965\"; }\r\n  .material-icons._360:before {\r\n    content: \"\\E577\"; }\r\n  .material-icons._3d_rotation:before {\r\n    content: \"\\E84D\"; }\r\n  .material-icons._3k:before {\r\n    content: \"\\E966\"; }\r\n  .material-icons._3k_plus:before {\r\n    content: \"\\E967\"; }\r\n  .material-icons._3mp:before {\r\n    content: \"\\E968\"; }\r\n  .material-icons._4k:before {\r\n    content: \"\\E072\"; }\r\n  .material-icons._4k_plus:before {\r\n    content: \"\\E969\"; }\r\n  .material-icons._4mp:before {\r\n    content: \"\\E96A\"; }\r\n  .material-icons._5k:before {\r\n    content: \"\\E96B\"; }\r\n  .material-icons._5k_plus:before {\r\n    content: \"\\E96C\"; }\r\n  .material-icons._5mp:before {\r\n    content: \"\\E96D\"; }\r\n  .material-icons._6k:before {\r\n    content: \"\\E96E\"; }\r\n  .material-icons._6k_plus:before {\r\n    content: \"\\E96F\"; }\r\n  .material-icons._6mp:before {\r\n    content: \"\\E970\"; }\r\n  .material-icons._7k:before {\r\n    content: \"\\E971\"; }\r\n  .material-icons._7k_plus:before {\r\n    content: \"\\E972\"; }\r\n  .material-icons._7mp:before {\r\n    content: \"\\E973\"; }\r\n  .material-icons._8k:before {\r\n    content: \"\\E974\"; }\r\n  .material-icons._8k_plus:before {\r\n    content: \"\\E975\"; }\r\n  .material-icons._8mp:before {\r\n    content: \"\\E976\"; }\r\n  .material-icons._9k:before {\r\n    content: \"\\E977\"; }\r\n  .material-icons._9k_plus:before {\r\n    content: \"\\E978\"; }\r\n  .material-icons._9mp:before {\r\n    content: \"\\E979\"; }\r\n  .material-icons.ac_unit:before {\r\n    content: \"\\EB3B\"; }\r\n  .material-icons.access_alarm:before {\r\n    content: \"\\E190\"; }\r\n  .material-icons.access_alarms:before {\r\n    content: \"\\E191\"; }\r\n  .material-icons.access_time:before {\r\n    content: \"\\E192\"; }\r\n  .material-icons.accessibility:before {\r\n    content: \"\\E84E\"; }\r\n  .material-icons.accessibility_new:before {\r\n    content: \"\\E92C\"; }\r\n  .material-icons.accessible:before {\r\n    content: \"\\E914\"; }\r\n  .material-icons.accessible_forward:before {\r\n    content: \"\\E934\"; }\r\n  .material-icons.account_balance:before {\r\n    content: \"\\E84F\"; }\r\n  .material-icons.account_balance_wallet:before {\r\n    content: \"\\E850\"; }\r\n  .material-icons.account_box:before {\r\n    content: \"\\E851\"; }\r\n  .material-icons.account_circle:before {\r\n    content: \"\\E853\"; }\r\n  .material-icons.account_tree:before {\r\n    content: \"\\E97A\"; }\r\n  .material-icons.adb:before {\r\n    content: \"\\E60E\"; }\r\n  .material-icons.add:before {\r\n    content: \"\\E145\"; }\r\n  .material-icons.add_a_photo:before {\r\n    content: \"\\E439\"; }\r\n  .material-icons.add_alarm:before {\r\n    content: \"\\E193\"; }\r\n  .material-icons.add_alert:before {\r\n    content: \"\\E003\"; }\r\n  .material-icons.add_box:before {\r\n    content: \"\\E146\"; }\r\n  .material-icons.add_call:before {\r\n    content: \"\\E0E8\"; }\r\n  .material-icons.add_chart:before {\r\n    content: \"\\E97B\"; }\r\n  .material-icons.add_circle:before {\r\n    content: \"\\E147\"; }\r\n  .material-icons.add_circle_outline:before {\r\n    content: \"\\E148\"; }\r\n  .material-icons.add_comment:before {\r\n    content: \"\\E266\"; }\r\n  .material-icons.add_ic_call:before {\r\n    content: \"\\E97C\"; }\r\n  .material-icons.add_link:before {\r\n    content: \"\\E178\"; }\r\n  .material-icons.add_location:before {\r\n    content: \"\\E567\"; }\r\n  .material-icons.add_moderator:before {\r\n    content: \"\\E97D\"; }\r\n  .material-icons.add_photo_alternate:before {\r\n    content: \"\\E43E\"; }\r\n  .material-icons.add_shopping_cart:before {\r\n    content: \"\\E854\"; }\r\n  .material-icons.add_to_home_screen:before {\r\n    content: \"\\E1FE\"; }\r\n  .material-icons.add_to_photos:before {\r\n    content: \"\\E39D\"; }\r\n  .material-icons.add_to_queue:before {\r\n    content: \"\\E05C\"; }\r\n  .material-icons.adjust:before {\r\n    content: \"\\E39E\"; }\r\n  .material-icons.airline_seat_flat:before {\r\n    content: \"\\E630\"; }\r\n  .material-icons.airline_seat_flat_angled:before {\r\n    content: \"\\E631\"; }\r\n  .material-icons.airline_seat_individual_suite:before {\r\n    content: \"\\E632\"; }\r\n  .material-icons.airline_seat_legroom_extra:before {\r\n    content: \"\\E633\"; }\r\n  .material-icons.airline_seat_legroom_normal:before {\r\n    content: \"\\E634\"; }\r\n  .material-icons.airline_seat_legroom_reduced:before {\r\n    content: \"\\E635\"; }\r\n  .material-icons.airline_seat_recline_extra:before {\r\n    content: \"\\E636\"; }\r\n  .material-icons.airline_seat_recline_normal:before {\r\n    content: \"\\E637\"; }\r\n  .material-icons.airplanemode_active:before {\r\n    content: \"\\E195\"; }\r\n  .material-icons.airplanemode_inactive:before {\r\n    content: \"\\E194\"; }\r\n  .material-icons.airplanemode_off:before {\r\n    content: \"\\E194\"; }\r\n  .material-icons.airplanemode_on:before {\r\n    content: \"\\E195\"; }\r\n  .material-icons.airplay:before {\r\n    content: \"\\E055\"; }\r\n  .material-icons.airport_shuttle:before {\r\n    content: \"\\EB3C\"; }\r\n  .material-icons.alarm:before {\r\n    content: \"\\E855\"; }\r\n  .material-icons.alarm_add:before {\r\n    content: \"\\E856\"; }\r\n  .material-icons.alarm_off:before {\r\n    content: \"\\E857\"; }\r\n  .material-icons.alarm_on:before {\r\n    content: \"\\E858\"; }\r\n  .material-icons.album:before {\r\n    content: \"\\E019\"; }\r\n  .material-icons.all_inbox:before {\r\n    content: \"\\E97F\"; }\r\n  .material-icons.all_inclusive:before {\r\n    content: \"\\EB3D\"; }\r\n  .material-icons.all_out:before {\r\n    content: \"\\E90B\"; }\r\n  .material-icons.alternate_email:before {\r\n    content: \"\\E0E6\"; }\r\n  .material-icons.amp_stories:before {\r\n    content: \"\\EA13\"; }\r\n  .material-icons.android:before {\r\n    content: \"\\E859\"; }\r\n  .material-icons.announcement:before {\r\n    content: \"\\E85A\"; }\r\n  .material-icons.apartment:before {\r\n    content: \"\\EA40\"; }\r\n  .material-icons.approval:before {\r\n    content: \"\\E982\"; }\r\n  .material-icons.apps:before {\r\n    content: \"\\E5C3\"; }\r\n  .material-icons.archive:before {\r\n    content: \"\\E149\"; }\r\n  .material-icons.arrow_back:before {\r\n    content: \"\\E5C4\"; }\r\n  .material-icons.arrow_back_ios:before {\r\n    content: \"\\E5E0\"; }\r\n  .material-icons.arrow_downward:before {\r\n    content: \"\\E5DB\"; }\r\n  .material-icons.arrow_drop_down:before {\r\n    content: \"\\E5C5\"; }\r\n  .material-icons.arrow_drop_down_circle:before {\r\n    content: \"\\E5C6\"; }\r\n  .material-icons.arrow_drop_up:before {\r\n    content: \"\\E5C7\"; }\r\n  .material-icons.arrow_forward:before {\r\n    content: \"\\E5C8\"; }\r\n  .material-icons.arrow_forward_ios:before {\r\n    content: \"\\E5E1\"; }\r\n  .material-icons.arrow_left:before {\r\n    content: \"\\E5DE\"; }\r\n  .material-icons.arrow_right:before {\r\n    content: \"\\E5DF\"; }\r\n  .material-icons.arrow_right_alt:before {\r\n    content: \"\\E941\"; }\r\n  .material-icons.arrow_upward:before {\r\n    content: \"\\E5D8\"; }\r\n  .material-icons.art_track:before {\r\n    content: \"\\E060\"; }\r\n  .material-icons.aspect_ratio:before {\r\n    content: \"\\E85B\"; }\r\n  .material-icons.assessment:before {\r\n    content: \"\\E85C\"; }\r\n  .material-icons.assignment:before {\r\n    content: \"\\E85D\"; }\r\n  .material-icons.assignment_ind:before {\r\n    content: \"\\E85E\"; }\r\n  .material-icons.assignment_late:before {\r\n    content: \"\\E85F\"; }\r\n  .material-icons.assignment_return:before {\r\n    content: \"\\E860\"; }\r\n  .material-icons.assignment_returned:before {\r\n    content: \"\\E861\"; }\r\n  .material-icons.assignment_turned_in:before {\r\n    content: \"\\E862\"; }\r\n  .material-icons.assistant:before {\r\n    content: \"\\E39F\"; }\r\n  .material-icons.assistant_direction:before {\r\n    content: \"\\E988\"; }\r\n  .material-icons.assistant_navigation:before {\r\n    content: \"\\E989\"; }\r\n  .material-icons.assistant_photo:before {\r\n    content: \"\\E3A0\"; }\r\n  .material-icons.atm:before {\r\n    content: \"\\E573\"; }\r\n  .material-icons.attach_file:before {\r\n    content: \"\\E226\"; }\r\n  .material-icons.attach_money:before {\r\n    content: \"\\E227\"; }\r\n  .material-icons.attachment:before {\r\n    content: \"\\E2BC\"; }\r\n  .material-icons.attractions:before {\r\n    content: \"\\EA52\"; }\r\n  .material-icons.audiotrack:before {\r\n    content: \"\\E3A1\"; }\r\n  .material-icons.autorenew:before {\r\n    content: \"\\E863\"; }\r\n  .material-icons.av_timer:before {\r\n    content: \"\\E01B\"; }\r\n  .material-icons.backspace:before {\r\n    content: \"\\E14A\"; }\r\n  .material-icons.backup:before {\r\n    content: \"\\E864\"; }\r\n  .material-icons.badge:before {\r\n    content: \"\\EA67\"; }\r\n  .material-icons.bakery_dining:before {\r\n    content: \"\\EA53\"; }\r\n  .material-icons.ballot:before {\r\n    content: \"\\E172\"; }\r\n  .material-icons.bar_chart:before {\r\n    content: \"\\E26B\"; }\r\n  .material-icons.bathtub:before {\r\n    content: \"\\EA41\"; }\r\n  .material-icons.battery_alert:before {\r\n    content: \"\\E19C\"; }\r\n  .material-icons.battery_charging_full:before {\r\n    content: \"\\E1A3\"; }\r\n  .material-icons.battery_full:before {\r\n    content: \"\\E1A4\"; }\r\n  .material-icons.battery_std:before {\r\n    content: \"\\E1A5\"; }\r\n  .material-icons.battery_unknown:before {\r\n    content: \"\\E1A6\"; }\r\n  .material-icons.beach_access:before {\r\n    content: \"\\EB3E\"; }\r\n  .material-icons.beenhere:before {\r\n    content: \"\\E52D\"; }\r\n  .material-icons.block:before {\r\n    content: \"\\E14B\"; }\r\n  .material-icons.bluetooth:before {\r\n    content: \"\\E1A7\"; }\r\n  .material-icons.bluetooth_audio:before {\r\n    content: \"\\E60F\"; }\r\n  .material-icons.bluetooth_connected:before {\r\n    content: \"\\E1A8\"; }\r\n  .material-icons.bluetooth_disabled:before {\r\n    content: \"\\E1A9\"; }\r\n  .material-icons.bluetooth_searching:before {\r\n    content: \"\\E1AA\"; }\r\n  .material-icons.blur_circular:before {\r\n    content: \"\\E3A2\"; }\r\n  .material-icons.blur_linear:before {\r\n    content: \"\\E3A3\"; }\r\n  .material-icons.blur_off:before {\r\n    content: \"\\E3A4\"; }\r\n  .material-icons.blur_on:before {\r\n    content: \"\\E3A5\"; }\r\n  .material-icons.bolt:before {\r\n    content: \"\\EA0B\"; }\r\n  .material-icons.book:before {\r\n    content: \"\\E865\"; }\r\n  .material-icons.bookmark:before {\r\n    content: \"\\E866\"; }\r\n  .material-icons.bookmark_border:before {\r\n    content: \"\\E867\"; }\r\n  .material-icons.bookmark_outline:before {\r\n    content: \"\\E867\"; }\r\n  .material-icons.bookmarks:before {\r\n    content: \"\\E98B\"; }\r\n  .material-icons.border_all:before {\r\n    content: \"\\E228\"; }\r\n  .material-icons.border_bottom:before {\r\n    content: \"\\E229\"; }\r\n  .material-icons.border_clear:before {\r\n    content: \"\\E22A\"; }\r\n  .material-icons.border_color:before {\r\n    content: \"\\E22B\"; }\r\n  .material-icons.border_horizontal:before {\r\n    content: \"\\E22C\"; }\r\n  .material-icons.border_inner:before {\r\n    content: \"\\E22D\"; }\r\n  .material-icons.border_left:before {\r\n    content: \"\\E22E\"; }\r\n  .material-icons.border_outer:before {\r\n    content: \"\\E22F\"; }\r\n  .material-icons.border_right:before {\r\n    content: \"\\E230\"; }\r\n  .material-icons.border_style:before {\r\n    content: \"\\E231\"; }\r\n  .material-icons.border_top:before {\r\n    content: \"\\E232\"; }\r\n  .material-icons.border_vertical:before {\r\n    content: \"\\E233\"; }\r\n  .material-icons.branding_watermark:before {\r\n    content: \"\\E06B\"; }\r\n  .material-icons.breakfast_dining:before {\r\n    content: \"\\EA54\"; }\r\n  .material-icons.brightness_1:before {\r\n    content: \"\\E3A6\"; }\r\n  .material-icons.brightness_2:before {\r\n    content: \"\\E3A7\"; }\r\n  .material-icons.brightness_3:before {\r\n    content: \"\\E3A8\"; }\r\n  .material-icons.brightness_4:before {\r\n    content: \"\\E3A9\"; }\r\n  .material-icons.brightness_5:before {\r\n    content: \"\\E3AA\"; }\r\n  .material-icons.brightness_6:before {\r\n    content: \"\\E3AB\"; }\r\n  .material-icons.brightness_7:before {\r\n    content: \"\\E3AC\"; }\r\n  .material-icons.brightness_auto:before {\r\n    content: \"\\E1AB\"; }\r\n  .material-icons.brightness_high:before {\r\n    content: \"\\E1AC\"; }\r\n  .material-icons.brightness_low:before {\r\n    content: \"\\E1AD\"; }\r\n  .material-icons.brightness_medium:before {\r\n    content: \"\\E1AE\"; }\r\n  .material-icons.broken_image:before {\r\n    content: \"\\E3AD\"; }\r\n  .material-icons.brunch_dining:before {\r\n    content: \"\\EA73\"; }\r\n  .material-icons.brush:before {\r\n    content: \"\\E3AE\"; }\r\n  .material-icons.bubble_chart:before {\r\n    content: \"\\E6DD\"; }\r\n  .material-icons.bug_report:before {\r\n    content: \"\\E868\"; }\r\n  .material-icons.build:before {\r\n    content: \"\\E869\"; }\r\n  .material-icons.burst_mode:before {\r\n    content: \"\\E43C\"; }\r\n  .material-icons.bus_alert:before {\r\n    content: \"\\E98F\"; }\r\n  .material-icons.business:before {\r\n    content: \"\\E0AF\"; }\r\n  .material-icons.business_center:before {\r\n    content: \"\\EB3F\"; }\r\n  .material-icons.cached:before {\r\n    content: \"\\E86A\"; }\r\n  .material-icons.cake:before {\r\n    content: \"\\E7E9\"; }\r\n  .material-icons.calendar_today:before {\r\n    content: \"\\E935\"; }\r\n  .material-icons.calendar_view_day:before {\r\n    content: \"\\E936\"; }\r\n  .material-icons.call:before {\r\n    content: \"\\E0B0\"; }\r\n  .material-icons.call_end:before {\r\n    content: \"\\E0B1\"; }\r\n  .material-icons.call_made:before {\r\n    content: \"\\E0B2\"; }\r\n  .material-icons.call_merge:before {\r\n    content: \"\\E0B3\"; }\r\n  .material-icons.call_missed:before {\r\n    content: \"\\E0B4\"; }\r\n  .material-icons.call_missed_outgoing:before {\r\n    content: \"\\E0E4\"; }\r\n  .material-icons.call_received:before {\r\n    content: \"\\E0B5\"; }\r\n  .material-icons.call_split:before {\r\n    content: \"\\E0B6\"; }\r\n  .material-icons.call_to_action:before {\r\n    content: \"\\E06C\"; }\r\n  .material-icons.camera:before {\r\n    content: \"\\E3AF\"; }\r\n  .material-icons.camera_alt:before {\r\n    content: \"\\E3B0\"; }\r\n  .material-icons.camera_enhance:before {\r\n    content: \"\\E8FC\"; }\r\n  .material-icons.camera_front:before {\r\n    content: \"\\E3B1\"; }\r\n  .material-icons.camera_rear:before {\r\n    content: \"\\E3B2\"; }\r\n  .material-icons.camera_roll:before {\r\n    content: \"\\E3B3\"; }\r\n  .material-icons.cancel:before {\r\n    content: \"\\E5C9\"; }\r\n  .material-icons.cancel_presentation:before {\r\n    content: \"\\E0E9\"; }\r\n  .material-icons.cancel_schedule_send:before {\r\n    content: \"\\EA39\"; }\r\n  .material-icons.car_rental:before {\r\n    content: \"\\EA55\"; }\r\n  .material-icons.car_repair:before {\r\n    content: \"\\EA56\"; }\r\n  .material-icons.card_giftcard:before {\r\n    content: \"\\E8F6\"; }\r\n  .material-icons.card_membership:before {\r\n    content: \"\\E8F7\"; }\r\n  .material-icons.card_travel:before {\r\n    content: \"\\E8F8\"; }\r\n  .material-icons.cases:before {\r\n    content: \"\\E992\"; }\r\n  .material-icons.casino:before {\r\n    content: \"\\EB40\"; }\r\n  .material-icons.cast:before {\r\n    content: \"\\E307\"; }\r\n  .material-icons.cast_connected:before {\r\n    content: \"\\E308\"; }\r\n  .material-icons.category:before {\r\n    content: \"\\E574\"; }\r\n  .material-icons.celebration:before {\r\n    content: \"\\EA65\"; }\r\n  .material-icons.cell_wifi:before {\r\n    content: \"\\E0EC\"; }\r\n  .material-icons.center_focus_strong:before {\r\n    content: \"\\E3B4\"; }\r\n  .material-icons.center_focus_weak:before {\r\n    content: \"\\E3B5\"; }\r\n  .material-icons.change_history:before {\r\n    content: \"\\E86B\"; }\r\n  .material-icons.chat:before {\r\n    content: \"\\E0B7\"; }\r\n  .material-icons.chat_bubble:before {\r\n    content: \"\\E0CA\"; }\r\n  .material-icons.chat_bubble_outline:before {\r\n    content: \"\\E0CB\"; }\r\n  .material-icons.check:before {\r\n    content: \"\\E5CA\"; }\r\n  .material-icons.check_box:before {\r\n    content: \"\\E834\"; }\r\n  .material-icons.check_box_outline_blank:before {\r\n    content: \"\\E835\"; }\r\n  .material-icons.check_circle:before {\r\n    content: \"\\E86C\"; }\r\n  .material-icons.check_circle_outline:before {\r\n    content: \"\\E92D\"; }\r\n  .material-icons.chevron_left:before {\r\n    content: \"\\E5CB\"; }\r\n  .material-icons.chevron_right:before {\r\n    content: \"\\E5CC\"; }\r\n  .material-icons.child_care:before {\r\n    content: \"\\EB41\"; }\r\n  .material-icons.child_friendly:before {\r\n    content: \"\\EB42\"; }\r\n  .material-icons.chrome_reader_mode:before {\r\n    content: \"\\E86D\"; }\r\n  .material-icons.circle_notifications:before {\r\n    content: \"\\E994\"; }\r\n  .material-icons.class:before {\r\n    content: \"\\E86E\"; }\r\n  .material-icons.clear:before {\r\n    content: \"\\E14C\"; }\r\n  .material-icons.clear_all:before {\r\n    content: \"\\E0B8\"; }\r\n  .material-icons.close:before {\r\n    content: \"\\E5CD\"; }\r\n  .material-icons.closed_caption:before {\r\n    content: \"\\E01C\"; }\r\n  .material-icons.closed_caption_off:before {\r\n    content: \"\\E996\"; }\r\n  .material-icons.cloud:before {\r\n    content: \"\\E2BD\"; }\r\n  .material-icons.cloud_circle:before {\r\n    content: \"\\E2BE\"; }\r\n  .material-icons.cloud_done:before {\r\n    content: \"\\E2BF\"; }\r\n  .material-icons.cloud_download:before {\r\n    content: \"\\E2C0\"; }\r\n  .material-icons.cloud_off:before {\r\n    content: \"\\E2C1\"; }\r\n  .material-icons.cloud_queue:before {\r\n    content: \"\\E2C2\"; }\r\n  .material-icons.cloud_upload:before {\r\n    content: \"\\E2C3\"; }\r\n  .material-icons.code:before {\r\n    content: \"\\E86F\"; }\r\n  .material-icons.collections:before {\r\n    content: \"\\E3B6\"; }\r\n  .material-icons.collections_bookmark:before {\r\n    content: \"\\E431\"; }\r\n  .material-icons.color_lens:before {\r\n    content: \"\\E3B7\"; }\r\n  .material-icons.colorize:before {\r\n    content: \"\\E3B8\"; }\r\n  .material-icons.comment:before {\r\n    content: \"\\E0B9\"; }\r\n  .material-icons.commute:before {\r\n    content: \"\\E940\"; }\r\n  .material-icons.compare:before {\r\n    content: \"\\E3B9\"; }\r\n  .material-icons.compare_arrows:before {\r\n    content: \"\\E915\"; }\r\n  .material-icons.compass_calibration:before {\r\n    content: \"\\E57C\"; }\r\n  .material-icons.compress:before {\r\n    content: \"\\E94D\"; }\r\n  .material-icons.computer:before {\r\n    content: \"\\E30A\"; }\r\n  .material-icons.confirmation_num:before {\r\n    content: \"\\E638\"; }\r\n  .material-icons.confirmation_number:before {\r\n    content: \"\\E638\"; }\r\n  .material-icons.connected_tv:before {\r\n    content: \"\\E998\"; }\r\n  .material-icons.contact_mail:before {\r\n    content: \"\\E0D0\"; }\r\n  .material-icons.contact_phone:before {\r\n    content: \"\\E0CF\"; }\r\n  .material-icons.contact_support:before {\r\n    content: \"\\E94C\"; }\r\n  .material-icons.contactless:before {\r\n    content: \"\\EA71\"; }\r\n  .material-icons.contacts:before {\r\n    content: \"\\E0BA\"; }\r\n  .material-icons.content_copy:before {\r\n    content: \"\\E14D\"; }\r\n  .material-icons.content_cut:before {\r\n    content: \"\\E14E\"; }\r\n  .material-icons.content_paste:before {\r\n    content: \"\\E14F\"; }\r\n  .material-icons.control_camera:before {\r\n    content: \"\\E074\"; }\r\n  .material-icons.control_point:before {\r\n    content: \"\\E3BA\"; }\r\n  .material-icons.control_point_duplicate:before {\r\n    content: \"\\E3BB\"; }\r\n  .material-icons.copyright:before {\r\n    content: \"\\E90C\"; }\r\n  .material-icons.create:before {\r\n    content: \"\\E150\"; }\r\n  .material-icons.create_new_folder:before {\r\n    content: \"\\E2CC\"; }\r\n  .material-icons.credit_card:before {\r\n    content: \"\\E870\"; }\r\n  .material-icons.crop:before {\r\n    content: \"\\E3BE\"; }\r\n  .material-icons.crop_16_9:before {\r\n    content: \"\\E3BC\"; }\r\n  .material-icons.crop_3_2:before {\r\n    content: \"\\E3BD\"; }\r\n  .material-icons.crop_5_4:before {\r\n    content: \"\\E3BF\"; }\r\n  .material-icons.crop_7_5:before {\r\n    content: \"\\E3C0\"; }\r\n  .material-icons.crop_din:before {\r\n    content: \"\\E3C1\"; }\r\n  .material-icons.crop_free:before {\r\n    content: \"\\E3C2\"; }\r\n  .material-icons.crop_landscape:before {\r\n    content: \"\\E3C3\"; }\r\n  .material-icons.crop_original:before {\r\n    content: \"\\E3C4\"; }\r\n  .material-icons.crop_portrait:before {\r\n    content: \"\\E3C5\"; }\r\n  .material-icons.crop_rotate:before {\r\n    content: \"\\E437\"; }\r\n  .material-icons.crop_square:before {\r\n    content: \"\\E3C6\"; }\r\n  .material-icons.dangerous:before {\r\n    content: \"\\E99A\"; }\r\n  .material-icons.dashboard:before {\r\n    content: \"\\E871\"; }\r\n  .material-icons.dashboard_customize:before {\r\n    content: \"\\E99B\"; }\r\n  .material-icons.data_usage:before {\r\n    content: \"\\E1AF\"; }\r\n  .material-icons.date_range:before {\r\n    content: \"\\E916\"; }\r\n  .material-icons.deck:before {\r\n    content: \"\\EA42\"; }\r\n  .material-icons.dehaze:before {\r\n    content: \"\\E3C7\"; }\r\n  .material-icons.delete:before {\r\n    content: \"\\E872\"; }\r\n  .material-icons.delete_forever:before {\r\n    content: \"\\E92B\"; }\r\n  .material-icons.delete_outline:before {\r\n    content: \"\\E92E\"; }\r\n  .material-icons.delete_sweep:before {\r\n    content: \"\\E16C\"; }\r\n  .material-icons.delivery_dining:before {\r\n    content: \"\\EA72\"; }\r\n  .material-icons.departure_board:before {\r\n    content: \"\\E576\"; }\r\n  .material-icons.description:before {\r\n    content: \"\\E873\"; }\r\n  .material-icons.desktop_access_disabled:before {\r\n    content: \"\\E99D\"; }\r\n  .material-icons.desktop_mac:before {\r\n    content: \"\\E30B\"; }\r\n  .material-icons.desktop_windows:before {\r\n    content: \"\\E30C\"; }\r\n  .material-icons.details:before {\r\n    content: \"\\E3C8\"; }\r\n  .material-icons.developer_board:before {\r\n    content: \"\\E30D\"; }\r\n  .material-icons.developer_mode:before {\r\n    content: \"\\E1B0\"; }\r\n  .material-icons.device_hub:before {\r\n    content: \"\\E335\"; }\r\n  .material-icons.device_thermostat:before {\r\n    content: \"\\E1FF\"; }\r\n  .material-icons.device_unknown:before {\r\n    content: \"\\E339\"; }\r\n  .material-icons.devices:before {\r\n    content: \"\\E1B1\"; }\r\n  .material-icons.devices_other:before {\r\n    content: \"\\E337\"; }\r\n  .material-icons.dialer_sip:before {\r\n    content: \"\\E0BB\"; }\r\n  .material-icons.dialpad:before {\r\n    content: \"\\E0BC\"; }\r\n  .material-icons.dinner_dining:before {\r\n    content: \"\\EA57\"; }\r\n  .material-icons.directions:before {\r\n    content: \"\\E52E\"; }\r\n  .material-icons.directions_bike:before {\r\n    content: \"\\E52F\"; }\r\n  .material-icons.directions_boat:before {\r\n    content: \"\\E532\"; }\r\n  .material-icons.directions_bus:before {\r\n    content: \"\\E530\"; }\r\n  .material-icons.directions_car:before {\r\n    content: \"\\E531\"; }\r\n  .material-icons.directions_ferry:before {\r\n    content: \"\\E532\"; }\r\n  .material-icons.directions_railway:before {\r\n    content: \"\\E534\"; }\r\n  .material-icons.directions_run:before {\r\n    content: \"\\E566\"; }\r\n  .material-icons.directions_subway:before {\r\n    content: \"\\E533\"; }\r\n  .material-icons.directions_train:before {\r\n    content: \"\\E534\"; }\r\n  .material-icons.directions_transit:before {\r\n    content: \"\\E535\"; }\r\n  .material-icons.directions_walk:before {\r\n    content: \"\\E536\"; }\r\n  .material-icons.disc_full:before {\r\n    content: \"\\E610\"; }\r\n  .material-icons.dnd_forwardslash:before {\r\n    content: \"\\E611\"; }\r\n  .material-icons.dns:before {\r\n    content: \"\\E875\"; }\r\n  .material-icons.do_not_disturb:before {\r\n    content: \"\\E612\"; }\r\n  .material-icons.do_not_disturb_alt:before {\r\n    content: \"\\E611\"; }\r\n  .material-icons.do_not_disturb_off:before {\r\n    content: \"\\E643\"; }\r\n  .material-icons.do_not_disturb_on:before {\r\n    content: \"\\E644\"; }\r\n  .material-icons.dock:before {\r\n    content: \"\\E30E\"; }\r\n  .material-icons.domain:before {\r\n    content: \"\\E7EE\"; }\r\n  .material-icons.domain_disabled:before {\r\n    content: \"\\E0EF\"; }\r\n  .material-icons.done:before {\r\n    content: \"\\E876\"; }\r\n  .material-icons.done_all:before {\r\n    content: \"\\E877\"; }\r\n  .material-icons.done_outline:before {\r\n    content: \"\\E92F\"; }\r\n  .material-icons.donut_large:before {\r\n    content: \"\\E917\"; }\r\n  .material-icons.donut_small:before {\r\n    content: \"\\E918\"; }\r\n  .material-icons.double_arrow:before {\r\n    content: \"\\EA50\"; }\r\n  .material-icons.drafts:before {\r\n    content: \"\\E151\"; }\r\n  .material-icons.drag_handle:before {\r\n    content: \"\\E25D\"; }\r\n  .material-icons.drag_indicator:before {\r\n    content: \"\\E945\"; }\r\n  .material-icons.drive_eta:before {\r\n    content: \"\\E613\"; }\r\n  .material-icons.drive_file_move_outline:before {\r\n    content: \"\\E9A1\"; }\r\n  .material-icons.drive_file_rename_outline:before {\r\n    content: \"\\E9A2\"; }\r\n  .material-icons.drive_folder_upload:before {\r\n    content: \"\\E9A3\"; }\r\n  .material-icons.dry_cleaning:before {\r\n    content: \"\\EA58\"; }\r\n  .material-icons.duo:before {\r\n    content: \"\\E9A5\"; }\r\n  .material-icons.dvr:before {\r\n    content: \"\\E1B2\"; }\r\n  .material-icons.dynamic_feed:before {\r\n    content: \"\\EA14\"; }\r\n  .material-icons.eco:before {\r\n    content: \"\\EA35\"; }\r\n  .material-icons.edit:before {\r\n    content: \"\\E3C9\"; }\r\n  .material-icons.edit_attributes:before {\r\n    content: \"\\E578\"; }\r\n  .material-icons.edit_location:before {\r\n    content: \"\\E568\"; }\r\n  .material-icons.edit_off:before {\r\n    content: \"\\E950\"; }\r\n  .material-icons.eject:before {\r\n    content: \"\\E8FB\"; }\r\n  .material-icons.email:before {\r\n    content: \"\\E0BE\"; }\r\n  .material-icons.emoji_emotions:before {\r\n    content: \"\\EA22\"; }\r\n  .material-icons.emoji_events:before {\r\n    content: \"\\EA23\"; }\r\n  .material-icons.emoji_flags:before {\r\n    content: \"\\EA1A\"; }\r\n  .material-icons.emoji_food_beverage:before {\r\n    content: \"\\EA1B\"; }\r\n  .material-icons.emoji_nature:before {\r\n    content: \"\\EA1C\"; }\r\n  .material-icons.emoji_objects:before {\r\n    content: \"\\EA24\"; }\r\n  .material-icons.emoji_people:before {\r\n    content: \"\\EA1D\"; }\r\n  .material-icons.emoji_symbols:before {\r\n    content: \"\\EA1E\"; }\r\n  .material-icons.emoji_transportation:before {\r\n    content: \"\\EA1F\"; }\r\n  .material-icons.enhance_photo_translate:before {\r\n    content: \"\\E8FC\"; }\r\n  .material-icons.enhanced_encryption:before {\r\n    content: \"\\E63F\"; }\r\n  .material-icons.equalizer:before {\r\n    content: \"\\E01D\"; }\r\n  .material-icons.error:before {\r\n    content: \"\\E000\"; }\r\n  .material-icons.error_outline:before {\r\n    content: \"\\E001\"; }\r\n  .material-icons.euro:before {\r\n    content: \"\\EA15\"; }\r\n  .material-icons.euro_symbol:before {\r\n    content: \"\\E926\"; }\r\n  .material-icons.ev_station:before {\r\n    content: \"\\E56D\"; }\r\n  .material-icons.event:before {\r\n    content: \"\\E878\"; }\r\n  .material-icons.event_available:before {\r\n    content: \"\\E614\"; }\r\n  .material-icons.event_busy:before {\r\n    content: \"\\E615\"; }\r\n  .material-icons.event_note:before {\r\n    content: \"\\E616\"; }\r\n  .material-icons.event_seat:before {\r\n    content: \"\\E903\"; }\r\n  .material-icons.exit_to_app:before {\r\n    content: \"\\E879\"; }\r\n  .material-icons.expand:before {\r\n    content: \"\\E94F\"; }\r\n  .material-icons.expand_less:before {\r\n    content: \"\\E5CE\"; }\r\n  .material-icons.expand_more:before {\r\n    content: \"\\E5CF\"; }\r\n  .material-icons.explicit:before {\r\n    content: \"\\E01E\"; }\r\n  .material-icons.explore:before {\r\n    content: \"\\E87A\"; }\r\n  .material-icons.explore_off:before {\r\n    content: \"\\E9A8\"; }\r\n  .material-icons.exposure:before {\r\n    content: \"\\E3CA\"; }\r\n  .material-icons.exposure_minus_1:before {\r\n    content: \"\\E3CB\"; }\r\n  .material-icons.exposure_minus_2:before {\r\n    content: \"\\E3CC\"; }\r\n  .material-icons.exposure_neg_1:before {\r\n    content: \"\\E3CB\"; }\r\n  .material-icons.exposure_neg_2:before {\r\n    content: \"\\E3CC\"; }\r\n  .material-icons.exposure_plus_1:before {\r\n    content: \"\\E3CD\"; }\r\n  .material-icons.exposure_plus_2:before {\r\n    content: \"\\E3CE\"; }\r\n  .material-icons.exposure_zero:before {\r\n    content: \"\\E3CF\"; }\r\n  .material-icons.extension:before {\r\n    content: \"\\E87B\"; }\r\n  .material-icons.face:before {\r\n    content: \"\\E87C\"; }\r\n  .material-icons.fast_forward:before {\r\n    content: \"\\E01F\"; }\r\n  .material-icons.fast_rewind:before {\r\n    content: \"\\E020\"; }\r\n  .material-icons.fastfood:before {\r\n    content: \"\\E57A\"; }\r\n  .material-icons.favorite:before {\r\n    content: \"\\E87D\"; }\r\n  .material-icons.favorite_border:before {\r\n    content: \"\\E87E\"; }\r\n  .material-icons.favorite_outline:before {\r\n    content: \"\\E87E\"; }\r\n  .material-icons.featured_play_list:before {\r\n    content: \"\\E06D\"; }\r\n  .material-icons.featured_video:before {\r\n    content: \"\\E06E\"; }\r\n  .material-icons.feedback:before {\r\n    content: \"\\E87F\"; }\r\n  .material-icons.festival:before {\r\n    content: \"\\EA68\"; }\r\n  .material-icons.fiber_dvr:before {\r\n    content: \"\\E05D\"; }\r\n  .material-icons.fiber_manual_record:before {\r\n    content: \"\\E061\"; }\r\n  .material-icons.fiber_new:before {\r\n    content: \"\\E05E\"; }\r\n  .material-icons.fiber_pin:before {\r\n    content: \"\\E06A\"; }\r\n  .material-icons.fiber_smart_record:before {\r\n    content: \"\\E062\"; }\r\n  .material-icons.file_copy:before {\r\n    content: \"\\E173\"; }\r\n  .material-icons.file_download:before {\r\n    content: \"\\E2C4\"; }\r\n  .material-icons.file_download_done:before {\r\n    content: \"\\E9AA\"; }\r\n  .material-icons.file_present:before {\r\n    content: \"\\EA0E\"; }\r\n  .material-icons.file_upload:before {\r\n    content: \"\\E2C6\"; }\r\n  .material-icons.filter:before {\r\n    content: \"\\E3D3\"; }\r\n  .material-icons.filter_1:before {\r\n    content: \"\\E3D0\"; }\r\n  .material-icons.filter_2:before {\r\n    content: \"\\E3D1\"; }\r\n  .material-icons.filter_3:before {\r\n    content: \"\\E3D2\"; }\r\n  .material-icons.filter_4:before {\r\n    content: \"\\E3D4\"; }\r\n  .material-icons.filter_5:before {\r\n    content: \"\\E3D5\"; }\r\n  .material-icons.filter_6:before {\r\n    content: \"\\E3D6\"; }\r\n  .material-icons.filter_7:before {\r\n    content: \"\\E3D7\"; }\r\n  .material-icons.filter_8:before {\r\n    content: \"\\E3D8\"; }\r\n  .material-icons.filter_9:before {\r\n    content: \"\\E3D9\"; }\r\n  .material-icons.filter_9_plus:before {\r\n    content: \"\\E3DA\"; }\r\n  .material-icons.filter_b_and_w:before {\r\n    content: \"\\E3DB\"; }\r\n  .material-icons.filter_center_focus:before {\r\n    content: \"\\E3DC\"; }\r\n  .material-icons.filter_drama:before {\r\n    content: \"\\E3DD\"; }\r\n  .material-icons.filter_frames:before {\r\n    content: \"\\E3DE\"; }\r\n  .material-icons.filter_hdr:before {\r\n    content: \"\\E3DF\"; }\r\n  .material-icons.filter_list:before {\r\n    content: \"\\E152\"; }\r\n  .material-icons.filter_list_alt:before {\r\n    content: \"\\E94E\"; }\r\n  .material-icons.filter_none:before {\r\n    content: \"\\E3E0\"; }\r\n  .material-icons.filter_tilt_shift:before {\r\n    content: \"\\E3E2\"; }\r\n  .material-icons.filter_vintage:before {\r\n    content: \"\\E3E3\"; }\r\n  .material-icons.find_in_page:before {\r\n    content: \"\\E880\"; }\r\n  .material-icons.find_replace:before {\r\n    content: \"\\E881\"; }\r\n  .material-icons.fingerprint:before {\r\n    content: \"\\E90D\"; }\r\n  .material-icons.fireplace:before {\r\n    content: \"\\EA43\"; }\r\n  .material-icons.first_page:before {\r\n    content: \"\\E5DC\"; }\r\n  .material-icons.fit_screen:before {\r\n    content: \"\\EA10\"; }\r\n  .material-icons.fitness_center:before {\r\n    content: \"\\EB43\"; }\r\n  .material-icons.flag:before {\r\n    content: \"\\E153\"; }\r\n  .material-icons.flare:before {\r\n    content: \"\\E3E4\"; }\r\n  .material-icons.flash_auto:before {\r\n    content: \"\\E3E5\"; }\r\n  .material-icons.flash_off:before {\r\n    content: \"\\E3E6\"; }\r\n  .material-icons.flash_on:before {\r\n    content: \"\\E3E7\"; }\r\n  .material-icons.flight:before {\r\n    content: \"\\E539\"; }\r\n  .material-icons.flight_land:before {\r\n    content: \"\\E904\"; }\r\n  .material-icons.flight_takeoff:before {\r\n    content: \"\\E905\"; }\r\n  .material-icons.flip:before {\r\n    content: \"\\E3E8\"; }\r\n  .material-icons.flip_camera_android:before {\r\n    content: \"\\EA37\"; }\r\n  .material-icons.flip_camera_ios:before {\r\n    content: \"\\EA38\"; }\r\n  .material-icons.flip_to_back:before {\r\n    content: \"\\E882\"; }\r\n  .material-icons.flip_to_front:before {\r\n    content: \"\\E883\"; }\r\n  .material-icons.folder:before {\r\n    content: \"\\E2C7\"; }\r\n  .material-icons.folder_open:before {\r\n    content: \"\\E2C8\"; }\r\n  .material-icons.folder_shared:before {\r\n    content: \"\\E2C9\"; }\r\n  .material-icons.folder_special:before {\r\n    content: \"\\E617\"; }\r\n  .material-icons.font_download:before {\r\n    content: \"\\E167\"; }\r\n  .material-icons.format_align_center:before {\r\n    content: \"\\E234\"; }\r\n  .material-icons.format_align_justify:before {\r\n    content: \"\\E235\"; }\r\n  .material-icons.format_align_left:before {\r\n    content: \"\\E236\"; }\r\n  .material-icons.format_align_right:before {\r\n    content: \"\\E237\"; }\r\n  .material-icons.format_bold:before {\r\n    content: \"\\E238\"; }\r\n  .material-icons.format_clear:before {\r\n    content: \"\\E239\"; }\r\n  .material-icons.format_color_fill:before {\r\n    content: \"\\E23A\"; }\r\n  .material-icons.format_color_reset:before {\r\n    content: \"\\E23B\"; }\r\n  .material-icons.format_color_text:before {\r\n    content: \"\\E23C\"; }\r\n  .material-icons.format_indent_decrease:before {\r\n    content: \"\\E23D\"; }\r\n  .material-icons.format_indent_increase:before {\r\n    content: \"\\E23E\"; }\r\n  .material-icons.format_italic:before {\r\n    content: \"\\E23F\"; }\r\n  .material-icons.format_line_spacing:before {\r\n    content: \"\\E240\"; }\r\n  .material-icons.format_list_bulleted:before {\r\n    content: \"\\E241\"; }\r\n  .material-icons.format_list_numbered:before {\r\n    content: \"\\E242\"; }\r\n  .material-icons.format_list_numbered_rtl:before {\r\n    content: \"\\E267\"; }\r\n  .material-icons.format_paint:before {\r\n    content: \"\\E243\"; }\r\n  .material-icons.format_quote:before {\r\n    content: \"\\E244\"; }\r\n  .material-icons.format_shapes:before {\r\n    content: \"\\E25E\"; }\r\n  .material-icons.format_size:before {\r\n    content: \"\\E245\"; }\r\n  .material-icons.format_strikethrough:before {\r\n    content: \"\\E246\"; }\r\n  .material-icons.format_textdirection_l_to_r:before {\r\n    content: \"\\E247\"; }\r\n  .material-icons.format_textdirection_r_to_l:before {\r\n    content: \"\\E248\"; }\r\n  .material-icons.format_underline:before {\r\n    content: \"\\E249\"; }\r\n  .material-icons.format_underlined:before {\r\n    content: \"\\E249\"; }\r\n  .material-icons.forum:before {\r\n    content: \"\\E0BF\"; }\r\n  .material-icons.forward:before {\r\n    content: \"\\E154\"; }\r\n  .material-icons.forward_10:before {\r\n    content: \"\\E056\"; }\r\n  .material-icons.forward_30:before {\r\n    content: \"\\E057\"; }\r\n  .material-icons.forward_5:before {\r\n    content: \"\\E058\"; }\r\n  .material-icons.free_breakfast:before {\r\n    content: \"\\EB44\"; }\r\n  .material-icons.fullscreen:before {\r\n    content: \"\\E5D0\"; }\r\n  .material-icons.fullscreen_exit:before {\r\n    content: \"\\E5D1\"; }\r\n  .material-icons.functions:before {\r\n    content: \"\\E24A\"; }\r\n  .material-icons.g_translate:before {\r\n    content: \"\\E927\"; }\r\n  .material-icons.gamepad:before {\r\n    content: \"\\E30F\"; }\r\n  .material-icons.games:before {\r\n    content: \"\\E021\"; }\r\n  .material-icons.gavel:before {\r\n    content: \"\\E90E\"; }\r\n  .material-icons.gesture:before {\r\n    content: \"\\E155\"; }\r\n  .material-icons.get_app:before {\r\n    content: \"\\E884\"; }\r\n  .material-icons.gif:before {\r\n    content: \"\\E908\"; }\r\n  .material-icons.goat:before {\r\n    content: \"\\DBFF\"; }\r\n  .material-icons.golf_course:before {\r\n    content: \"\\EB45\"; }\r\n  .material-icons.gps_fixed:before {\r\n    content: \"\\E1B3\"; }\r\n  .material-icons.gps_not_fixed:before {\r\n    content: \"\\E1B4\"; }\r\n  .material-icons.gps_off:before {\r\n    content: \"\\E1B5\"; }\r\n  .material-icons.grade:before {\r\n    content: \"\\E885\"; }\r\n  .material-icons.gradient:before {\r\n    content: \"\\E3E9\"; }\r\n  .material-icons.grain:before {\r\n    content: \"\\E3EA\"; }\r\n  .material-icons.graphic_eq:before {\r\n    content: \"\\E1B8\"; }\r\n  .material-icons.grid_off:before {\r\n    content: \"\\E3EB\"; }\r\n  .material-icons.grid_on:before {\r\n    content: \"\\E3EC\"; }\r\n  .material-icons.grid_view:before {\r\n    content: \"\\E9B0\"; }\r\n  .material-icons.group:before {\r\n    content: \"\\E7EF\"; }\r\n  .material-icons.group_add:before {\r\n    content: \"\\E7F0\"; }\r\n  .material-icons.group_work:before {\r\n    content: \"\\E886\"; }\r\n  .material-icons.hail:before {\r\n    content: \"\\E9B1\"; }\r\n  .material-icons.hardware:before {\r\n    content: \"\\EA59\"; }\r\n  .material-icons.hd:before {\r\n    content: \"\\E052\"; }\r\n  .material-icons.hdr_off:before {\r\n    content: \"\\E3ED\"; }\r\n  .material-icons.hdr_on:before {\r\n    content: \"\\E3EE\"; }\r\n  .material-icons.hdr_strong:before {\r\n    content: \"\\E3F1\"; }\r\n  .material-icons.hdr_weak:before {\r\n    content: \"\\E3F2\"; }\r\n  .material-icons.headset:before {\r\n    content: \"\\E310\"; }\r\n  .material-icons.headset_mic:before {\r\n    content: \"\\E311\"; }\r\n  .material-icons.headset_off:before {\r\n    content: \"\\E33A\"; }\r\n  .material-icons.healing:before {\r\n    content: \"\\E3F3\"; }\r\n  .material-icons.hearing:before {\r\n    content: \"\\E023\"; }\r\n  .material-icons.height:before {\r\n    content: \"\\EA16\"; }\r\n  .material-icons.help:before {\r\n    content: \"\\E887\"; }\r\n  .material-icons.help_outline:before {\r\n    content: \"\\E8FD\"; }\r\n  .material-icons.high_quality:before {\r\n    content: \"\\E024\"; }\r\n  .material-icons.highlight:before {\r\n    content: \"\\E25F\"; }\r\n  .material-icons.highlight_off:before {\r\n    content: \"\\E888\"; }\r\n  .material-icons.highlight_remove:before {\r\n    content: \"\\E888\"; }\r\n  .material-icons.history:before {\r\n    content: \"\\E889\"; }\r\n  .material-icons.home:before {\r\n    content: \"\\E88A\"; }\r\n  .material-icons.home_filled:before {\r\n    content: \"\\E9B2\"; }\r\n  .material-icons.home_work:before {\r\n    content: \"\\EA09\"; }\r\n  .material-icons.horizontal_split:before {\r\n    content: \"\\E947\"; }\r\n  .material-icons.hot_tub:before {\r\n    content: \"\\EB46\"; }\r\n  .material-icons.hotel:before {\r\n    content: \"\\E53A\"; }\r\n  .material-icons.hourglass_empty:before {\r\n    content: \"\\E88B\"; }\r\n  .material-icons.hourglass_full:before {\r\n    content: \"\\E88C\"; }\r\n  .material-icons.house:before {\r\n    content: \"\\EA44\"; }\r\n  .material-icons.how_to_reg:before {\r\n    content: \"\\E174\"; }\r\n  .material-icons.how_to_vote:before {\r\n    content: \"\\E175\"; }\r\n  .material-icons.http:before {\r\n    content: \"\\E902\"; }\r\n  .material-icons.https:before {\r\n    content: \"\\E88D\"; }\r\n  .material-icons.icecream:before {\r\n    content: \"\\EA69\"; }\r\n  .material-icons.image:before {\r\n    content: \"\\E3F4\"; }\r\n  .material-icons.image_aspect_ratio:before {\r\n    content: \"\\E3F5\"; }\r\n  .material-icons.image_search:before {\r\n    content: \"\\E43F\"; }\r\n  .material-icons.imagesearch_roller:before {\r\n    content: \"\\E9B4\"; }\r\n  .material-icons.import_contacts:before {\r\n    content: \"\\E0E0\"; }\r\n  .material-icons.import_export:before {\r\n    content: \"\\E0C3\"; }\r\n  .material-icons.important_devices:before {\r\n    content: \"\\E912\"; }\r\n  .material-icons.inbox:before {\r\n    content: \"\\E156\"; }\r\n  .material-icons.indeterminate_check_box:before {\r\n    content: \"\\E909\"; }\r\n  .material-icons.info:before {\r\n    content: \"\\E88E\"; }\r\n  .material-icons.info_outline:before {\r\n    content: \"\\E88F\"; }\r\n  .material-icons.input:before {\r\n    content: \"\\E890\"; }\r\n  .material-icons.insert_chart:before {\r\n    content: \"\\E24B\"; }\r\n  .material-icons.insert_chart_outlined:before {\r\n    content: \"\\E26A\"; }\r\n  .material-icons.insert_comment:before {\r\n    content: \"\\E24C\"; }\r\n  .material-icons.insert_drive_file:before {\r\n    content: \"\\E24D\"; }\r\n  .material-icons.insert_emoticon:before {\r\n    content: \"\\E24E\"; }\r\n  .material-icons.insert_invitation:before {\r\n    content: \"\\E24F\"; }\r\n  .material-icons.insert_link:before {\r\n    content: \"\\E250\"; }\r\n  .material-icons.insert_photo:before {\r\n    content: \"\\E251\"; }\r\n  .material-icons.inventory:before {\r\n    content: \"\\E179\"; }\r\n  .material-icons.invert_colors:before {\r\n    content: \"\\E891\"; }\r\n  .material-icons.invert_colors_off:before {\r\n    content: \"\\E0C4\"; }\r\n  .material-icons.invert_colors_on:before {\r\n    content: \"\\E891\"; }\r\n  .material-icons.iso:before {\r\n    content: \"\\E3F6\"; }\r\n  .material-icons.keyboard:before {\r\n    content: \"\\E312\"; }\r\n  .material-icons.keyboard_arrow_down:before {\r\n    content: \"\\E313\"; }\r\n  .material-icons.keyboard_arrow_left:before {\r\n    content: \"\\E314\"; }\r\n  .material-icons.keyboard_arrow_right:before {\r\n    content: \"\\E315\"; }\r\n  .material-icons.keyboard_arrow_up:before {\r\n    content: \"\\E316\"; }\r\n  .material-icons.keyboard_backspace:before {\r\n    content: \"\\E317\"; }\r\n  .material-icons.keyboard_capslock:before {\r\n    content: \"\\E318\"; }\r\n  .material-icons.keyboard_control:before {\r\n    content: \"\\E5D3\"; }\r\n  .material-icons.keyboard_hide:before {\r\n    content: \"\\E31A\"; }\r\n  .material-icons.keyboard_return:before {\r\n    content: \"\\E31B\"; }\r\n  .material-icons.keyboard_tab:before {\r\n    content: \"\\E31C\"; }\r\n  .material-icons.keyboard_voice:before {\r\n    content: \"\\E31D\"; }\r\n  .material-icons.king_bed:before {\r\n    content: \"\\EA45\"; }\r\n  .material-icons.kitchen:before {\r\n    content: \"\\EB47\"; }\r\n  .material-icons.label:before {\r\n    content: \"\\E892\"; }\r\n  .material-icons.label_important:before {\r\n    content: \"\\E937\"; }\r\n  .material-icons.label_important_outline:before {\r\n    content: \"\\E948\"; }\r\n  .material-icons.label_off:before {\r\n    content: \"\\E9B6\"; }\r\n  .material-icons.label_outline:before {\r\n    content: \"\\E893\"; }\r\n  .material-icons.landscape:before {\r\n    content: \"\\E3F7\"; }\r\n  .material-icons.language:before {\r\n    content: \"\\E894\"; }\r\n  .material-icons.laptop:before {\r\n    content: \"\\E31E\"; }\r\n  .material-icons.laptop_chromebook:before {\r\n    content: \"\\E31F\"; }\r\n  .material-icons.laptop_mac:before {\r\n    content: \"\\E320\"; }\r\n  .material-icons.laptop_windows:before {\r\n    content: \"\\E321\"; }\r\n  .material-icons.last_page:before {\r\n    content: \"\\E5DD\"; }\r\n  .material-icons.launch:before {\r\n    content: \"\\E895\"; }\r\n  .material-icons.layers:before {\r\n    content: \"\\E53B\"; }\r\n  .material-icons.layers_clear:before {\r\n    content: \"\\E53C\"; }\r\n  .material-icons.leak_add:before {\r\n    content: \"\\E3F8\"; }\r\n  .material-icons.leak_remove:before {\r\n    content: \"\\E3F9\"; }\r\n  .material-icons.lens:before {\r\n    content: \"\\E3FA\"; }\r\n  .material-icons.library_add:before {\r\n    content: \"\\E02E\"; }\r\n  .material-icons.library_add_check:before {\r\n    content: \"\\E9B7\"; }\r\n  .material-icons.library_books:before {\r\n    content: \"\\E02F\"; }\r\n  .material-icons.library_music:before {\r\n    content: \"\\E030\"; }\r\n  .material-icons.lightbulb:before {\r\n    content: \"\\E0F0\"; }\r\n  .material-icons.lightbulb_outline:before {\r\n    content: \"\\E90F\"; }\r\n  .material-icons.line_style:before {\r\n    content: \"\\E919\"; }\r\n  .material-icons.line_weight:before {\r\n    content: \"\\E91A\"; }\r\n  .material-icons.linear_scale:before {\r\n    content: \"\\E260\"; }\r\n  .material-icons.link:before {\r\n    content: \"\\E157\"; }\r\n  .material-icons.link_off:before {\r\n    content: \"\\E16F\"; }\r\n  .material-icons.linked_camera:before {\r\n    content: \"\\E438\"; }\r\n  .material-icons.liquor:before {\r\n    content: \"\\EA60\"; }\r\n  .material-icons.list:before {\r\n    content: \"\\E896\"; }\r\n  .material-icons.list_alt:before {\r\n    content: \"\\E0EE\"; }\r\n  .material-icons.live_help:before {\r\n    content: \"\\E0C6\"; }\r\n  .material-icons.live_tv:before {\r\n    content: \"\\E639\"; }\r\n  .material-icons.local_activity:before {\r\n    content: \"\\E53F\"; }\r\n  .material-icons.local_airport:before {\r\n    content: \"\\E53D\"; }\r\n  .material-icons.local_atm:before {\r\n    content: \"\\E53E\"; }\r\n  .material-icons.local_attraction:before {\r\n    content: \"\\E53F\"; }\r\n  .material-icons.local_bar:before {\r\n    content: \"\\E540\"; }\r\n  .material-icons.local_cafe:before {\r\n    content: \"\\E541\"; }\r\n  .material-icons.local_car_wash:before {\r\n    content: \"\\E542\"; }\r\n  .material-icons.local_convenience_store:before {\r\n    content: \"\\E543\"; }\r\n  .material-icons.local_dining:before {\r\n    content: \"\\E556\"; }\r\n  .material-icons.local_drink:before {\r\n    content: \"\\E544\"; }\r\n  .material-icons.local_florist:before {\r\n    content: \"\\E545\"; }\r\n  .material-icons.local_gas_station:before {\r\n    content: \"\\E546\"; }\r\n  .material-icons.local_grocery_store:before {\r\n    content: \"\\E547\"; }\r\n  .material-icons.local_hospital:before {\r\n    content: \"\\E548\"; }\r\n  .material-icons.local_hotel:before {\r\n    content: \"\\E549\"; }\r\n  .material-icons.local_laundry_service:before {\r\n    content: \"\\E54A\"; }\r\n  .material-icons.local_library:before {\r\n    content: \"\\E54B\"; }\r\n  .material-icons.local_mall:before {\r\n    content: \"\\E54C\"; }\r\n  .material-icons.local_movies:before {\r\n    content: \"\\E54D\"; }\r\n  .material-icons.local_offer:before {\r\n    content: \"\\E54E\"; }\r\n  .material-icons.local_parking:before {\r\n    content: \"\\E54F\"; }\r\n  .material-icons.local_pharmacy:before {\r\n    content: \"\\E550\"; }\r\n  .material-icons.local_phone:before {\r\n    content: \"\\E551\"; }\r\n  .material-icons.local_pizza:before {\r\n    content: \"\\E552\"; }\r\n  .material-icons.local_play:before {\r\n    content: \"\\E553\"; }\r\n  .material-icons.local_post_office:before {\r\n    content: \"\\E554\"; }\r\n  .material-icons.local_print_shop:before {\r\n    content: \"\\E555\"; }\r\n  .material-icons.local_printshop:before {\r\n    content: \"\\E555\"; }\r\n  .material-icons.local_restaurant:before {\r\n    content: \"\\E556\"; }\r\n  .material-icons.local_see:before {\r\n    content: \"\\E557\"; }\r\n  .material-icons.local_shipping:before {\r\n    content: \"\\E558\"; }\r\n  .material-icons.local_taxi:before {\r\n    content: \"\\E559\"; }\r\n  .material-icons.location_city:before {\r\n    content: \"\\E7F1\"; }\r\n  .material-icons.location_disabled:before {\r\n    content: \"\\E1B6\"; }\r\n  .material-icons.location_history:before {\r\n    content: \"\\E55A\"; }\r\n  .material-icons.location_off:before {\r\n    content: \"\\E0C7\"; }\r\n  .material-icons.location_on:before {\r\n    content: \"\\E0C8\"; }\r\n  .material-icons.location_searching:before {\r\n    content: \"\\E1B7\"; }\r\n  .material-icons.lock:before {\r\n    content: \"\\E897\"; }\r\n  .material-icons.lock_open:before {\r\n    content: \"\\E898\"; }\r\n  .material-icons.lock_outline:before {\r\n    content: \"\\E899\"; }\r\n  .material-icons.logout:before {\r\n    content: \"\\E9BA\"; }\r\n  .material-icons.looks:before {\r\n    content: \"\\E3FC\"; }\r\n  .material-icons.looks_3:before {\r\n    content: \"\\E3FB\"; }\r\n  .material-icons.looks_4:before {\r\n    content: \"\\E3FD\"; }\r\n  .material-icons.looks_5:before {\r\n    content: \"\\E3FE\"; }\r\n  .material-icons.looks_6:before {\r\n    content: \"\\E3FF\"; }\r\n  .material-icons.looks_one:before {\r\n    content: \"\\E400\"; }\r\n  .material-icons.looks_two:before {\r\n    content: \"\\E401\"; }\r\n  .material-icons.loop:before {\r\n    content: \"\\E028\"; }\r\n  .material-icons.loupe:before {\r\n    content: \"\\E402\"; }\r\n  .material-icons.low_priority:before {\r\n    content: \"\\E16D\"; }\r\n  .material-icons.loyalty:before {\r\n    content: \"\\E89A\"; }\r\n  .material-icons.lunch_dining:before {\r\n    content: \"\\EA61\"; }\r\n  .material-icons.mail:before {\r\n    content: \"\\E158\"; }\r\n  .material-icons.mail_outline:before {\r\n    content: \"\\E0E1\"; }\r\n  .material-icons.map:before {\r\n    content: \"\\E55B\"; }\r\n  .material-icons.margin:before {\r\n    content: \"\\E9BB\"; }\r\n  .material-icons.mark_as_unread:before {\r\n    content: \"\\E9BC\"; }\r\n  .material-icons.markunread:before {\r\n    content: \"\\E159\"; }\r\n  .material-icons.markunread_mailbox:before {\r\n    content: \"\\E89B\"; }\r\n  .material-icons.maximize:before {\r\n    content: \"\\E930\"; }\r\n  .material-icons.meeting_room:before {\r\n    content: \"\\EB4F\"; }\r\n  .material-icons.memory:before {\r\n    content: \"\\E322\"; }\r\n  .material-icons.menu:before {\r\n    content: \"\\E5D2\"; }\r\n  .material-icons.menu_book:before {\r\n    content: \"\\EA19\"; }\r\n  .material-icons.menu_open:before {\r\n    content: \"\\E9BD\"; }\r\n  .material-icons.merge_type:before {\r\n    content: \"\\E252\"; }\r\n  .material-icons.message:before {\r\n    content: \"\\E0C9\"; }\r\n  .material-icons.messenger:before {\r\n    content: \"\\E0CA\"; }\r\n  .material-icons.messenger_outline:before {\r\n    content: \"\\E0CB\"; }\r\n  .material-icons.mic:before {\r\n    content: \"\\E029\"; }\r\n  .material-icons.mic_none:before {\r\n    content: \"\\E02A\"; }\r\n  .material-icons.mic_off:before {\r\n    content: \"\\E02B\"; }\r\n  .material-icons.minimize:before {\r\n    content: \"\\E931\"; }\r\n  .material-icons.missed_video_call:before {\r\n    content: \"\\E073\"; }\r\n  .material-icons.mms:before {\r\n    content: \"\\E618\"; }\r\n  .material-icons.mobile_friendly:before {\r\n    content: \"\\E200\"; }\r\n  .material-icons.mobile_off:before {\r\n    content: \"\\E201\"; }\r\n  .material-icons.mobile_screen_share:before {\r\n    content: \"\\E0E7\"; }\r\n  .material-icons.mode_comment:before {\r\n    content: \"\\E253\"; }\r\n  .material-icons.mode_edit:before {\r\n    content: \"\\E254\"; }\r\n  .material-icons.monetization_on:before {\r\n    content: \"\\E263\"; }\r\n  .material-icons.money:before {\r\n    content: \"\\E57D\"; }\r\n  .material-icons.money_off:before {\r\n    content: \"\\E25C\"; }\r\n  .material-icons.monochrome_photos:before {\r\n    content: \"\\E403\"; }\r\n  .material-icons.mood:before {\r\n    content: \"\\E7F2\"; }\r\n  .material-icons.mood_bad:before {\r\n    content: \"\\E7F3\"; }\r\n  .material-icons.more:before {\r\n    content: \"\\E619\"; }\r\n  .material-icons.more_horiz:before {\r\n    content: \"\\E5D3\"; }\r\n  .material-icons.more_vert:before {\r\n    content: \"\\E5D4\"; }\r\n  .material-icons.motorcycle:before {\r\n    content: \"\\E91B\"; }\r\n  .material-icons.mouse:before {\r\n    content: \"\\E323\"; }\r\n  .material-icons.move_to_inbox:before {\r\n    content: \"\\E168\"; }\r\n  .material-icons.movie:before {\r\n    content: \"\\E02C\"; }\r\n  .material-icons.movie_creation:before {\r\n    content: \"\\E404\"; }\r\n  .material-icons.movie_filter:before {\r\n    content: \"\\E43A\"; }\r\n  .material-icons.mp:before {\r\n    content: \"\\E9C3\"; }\r\n  .material-icons.multiline_chart:before {\r\n    content: \"\\E6DF\"; }\r\n  .material-icons.multitrack_audio:before {\r\n    content: \"\\E1B8\"; }\r\n  .material-icons.museum:before {\r\n    content: \"\\EA36\"; }\r\n  .material-icons.music_note:before {\r\n    content: \"\\E405\"; }\r\n  .material-icons.music_off:before {\r\n    content: \"\\E440\"; }\r\n  .material-icons.music_video:before {\r\n    content: \"\\E063\"; }\r\n  .material-icons.my_library_add:before {\r\n    content: \"\\E02E\"; }\r\n  .material-icons.my_library_books:before {\r\n    content: \"\\E02F\"; }\r\n  .material-icons.my_library_music:before {\r\n    content: \"\\E030\"; }\r\n  .material-icons.my_location:before {\r\n    content: \"\\E55C\"; }\r\n  .material-icons.nature:before {\r\n    content: \"\\E406\"; }\r\n  .material-icons.nature_people:before {\r\n    content: \"\\E407\"; }\r\n  .material-icons.navigate_before:before {\r\n    content: \"\\E408\"; }\r\n  .material-icons.navigate_next:before {\r\n    content: \"\\E409\"; }\r\n  .material-icons.navigation:before {\r\n    content: \"\\E55D\"; }\r\n  .material-icons.near_me:before {\r\n    content: \"\\E569\"; }\r\n  .material-icons.network_cell:before {\r\n    content: \"\\E1B9\"; }\r\n  .material-icons.network_check:before {\r\n    content: \"\\E640\"; }\r\n  .material-icons.network_locked:before {\r\n    content: \"\\E61A\"; }\r\n  .material-icons.network_wifi:before {\r\n    content: \"\\E1BA\"; }\r\n  .material-icons.new_releases:before {\r\n    content: \"\\E031\"; }\r\n  .material-icons.next_week:before {\r\n    content: \"\\E16A\"; }\r\n  .material-icons.nfc:before {\r\n    content: \"\\E1BB\"; }\r\n  .material-icons.nightlife:before {\r\n    content: \"\\EA62\"; }\r\n  .material-icons.nights_stay:before {\r\n    content: \"\\EA46\"; }\r\n  .material-icons.no_encryption:before {\r\n    content: \"\\E641\"; }\r\n  .material-icons.no_meeting_room:before {\r\n    content: \"\\EB4E\"; }\r\n  .material-icons.no_sim:before {\r\n    content: \"\\E0CC\"; }\r\n  .material-icons.not_interested:before {\r\n    content: \"\\E033\"; }\r\n  .material-icons.not_listed_location:before {\r\n    content: \"\\E575\"; }\r\n  .material-icons.note:before {\r\n    content: \"\\E06F\"; }\r\n  .material-icons.note_add:before {\r\n    content: \"\\E89C\"; }\r\n  .material-icons.notes:before {\r\n    content: \"\\E26C\"; }\r\n  .material-icons.notification_important:before {\r\n    content: \"\\E004\"; }\r\n  .material-icons.notifications:before {\r\n    content: \"\\E7F4\"; }\r\n  .material-icons.notifications_active:before {\r\n    content: \"\\E7F7\"; }\r\n  .material-icons.notifications_none:before {\r\n    content: \"\\E7F5\"; }\r\n  .material-icons.notifications_off:before {\r\n    content: \"\\E7F6\"; }\r\n  .material-icons.notifications_on:before {\r\n    content: \"\\E7F7\"; }\r\n  .material-icons.notifications_paused:before {\r\n    content: \"\\E7F8\"; }\r\n  .material-icons.now_wallpaper:before {\r\n    content: \"\\E1BC\"; }\r\n  .material-icons.now_widgets:before {\r\n    content: \"\\E1BD\"; }\r\n  .material-icons.offline_bolt:before {\r\n    content: \"\\E932\"; }\r\n  .material-icons.offline_pin:before {\r\n    content: \"\\E90A\"; }\r\n  .material-icons.offline_share:before {\r\n    content: \"\\E9C5\"; }\r\n  .material-icons.ondemand_video:before {\r\n    content: \"\\E63A\"; }\r\n  .material-icons.opacity:before {\r\n    content: \"\\E91C\"; }\r\n  .material-icons.open_in_browser:before {\r\n    content: \"\\E89D\"; }\r\n  .material-icons.open_in_new:before {\r\n    content: \"\\E89E\"; }\r\n  .material-icons.open_with:before {\r\n    content: \"\\E89F\"; }\r\n  .material-icons.outdoor_grill:before {\r\n    content: \"\\EA47\"; }\r\n  .material-icons.outlined_flag:before {\r\n    content: \"\\E16E\"; }\r\n  .material-icons.padding:before {\r\n    content: \"\\E9C8\"; }\r\n  .material-icons.pages:before {\r\n    content: \"\\E7F9\"; }\r\n  .material-icons.pageview:before {\r\n    content: \"\\E8A0\"; }\r\n  .material-icons.palette:before {\r\n    content: \"\\E40A\"; }\r\n  .material-icons.pan_tool:before {\r\n    content: \"\\E925\"; }\r\n  .material-icons.panorama:before {\r\n    content: \"\\E40B\"; }\r\n  .material-icons.panorama_fish_eye:before {\r\n    content: \"\\E40C\"; }\r\n  .material-icons.panorama_fisheye:before {\r\n    content: \"\\E40C\"; }\r\n  .material-icons.panorama_horizontal:before {\r\n    content: \"\\E40D\"; }\r\n  .material-icons.panorama_photosphere:before {\r\n    content: \"\\E9C9\"; }\r\n  .material-icons.panorama_photosphere_select:before {\r\n    content: \"\\E9CA\"; }\r\n  .material-icons.panorama_vertical:before {\r\n    content: \"\\E40E\"; }\r\n  .material-icons.panorama_wide_angle:before {\r\n    content: \"\\E40F\"; }\r\n  .material-icons.park:before {\r\n    content: \"\\EA63\"; }\r\n  .material-icons.party_mode:before {\r\n    content: \"\\E7FA\"; }\r\n  .material-icons.pause:before {\r\n    content: \"\\E034\"; }\r\n  .material-icons.pause_circle_filled:before {\r\n    content: \"\\E035\"; }\r\n  .material-icons.pause_circle_outline:before {\r\n    content: \"\\E036\"; }\r\n  .material-icons.pause_presentation:before {\r\n    content: \"\\E0EA\"; }\r\n  .material-icons.payment:before {\r\n    content: \"\\E8A1\"; }\r\n  .material-icons.people:before {\r\n    content: \"\\E7FB\"; }\r\n  .material-icons.people_alt:before {\r\n    content: \"\\EA21\"; }\r\n  .material-icons.people_outline:before {\r\n    content: \"\\E7FC\"; }\r\n  .material-icons.perm_camera_mic:before {\r\n    content: \"\\E8A2\"; }\r\n  .material-icons.perm_contact_cal:before {\r\n    content: \"\\E8A3\"; }\r\n  .material-icons.perm_contact_calendar:before {\r\n    content: \"\\E8A3\"; }\r\n  .material-icons.perm_data_setting:before {\r\n    content: \"\\E8A4\"; }\r\n  .material-icons.perm_device_info:before {\r\n    content: \"\\E8A5\"; }\r\n  .material-icons.perm_device_information:before {\r\n    content: \"\\E8A5\"; }\r\n  .material-icons.perm_identity:before {\r\n    content: \"\\E8A6\"; }\r\n  .material-icons.perm_media:before {\r\n    content: \"\\E8A7\"; }\r\n  .material-icons.perm_phone_msg:before {\r\n    content: \"\\E8A8\"; }\r\n  .material-icons.perm_scan_wifi:before {\r\n    content: \"\\E8A9\"; }\r\n  .material-icons.person:before {\r\n    content: \"\\E7FD\"; }\r\n  .material-icons.person_add:before {\r\n    content: \"\\E7FE\"; }\r\n  .material-icons.person_add_disabled:before {\r\n    content: \"\\E9CB\"; }\r\n  .material-icons.person_outline:before {\r\n    content: \"\\E7FF\"; }\r\n  .material-icons.person_pin:before {\r\n    content: \"\\E55A\"; }\r\n  .material-icons.person_pin_circle:before {\r\n    content: \"\\E56A\"; }\r\n  .material-icons.personal_video:before {\r\n    content: \"\\E63B\"; }\r\n  .material-icons.pets:before {\r\n    content: \"\\E91D\"; }\r\n  .material-icons.phone:before {\r\n    content: \"\\E0CD\"; }\r\n  .material-icons.phone_android:before {\r\n    content: \"\\E324\"; }\r\n  .material-icons.phone_bluetooth_speaker:before {\r\n    content: \"\\E61B\"; }\r\n  .material-icons.phone_callback:before {\r\n    content: \"\\E649\"; }\r\n  .material-icons.phone_disabled:before {\r\n    content: \"\\E9CC\"; }\r\n  .material-icons.phone_enabled:before {\r\n    content: \"\\E9CD\"; }\r\n  .material-icons.phone_forwarded:before {\r\n    content: \"\\E61C\"; }\r\n  .material-icons.phone_in_talk:before {\r\n    content: \"\\E61D\"; }\r\n  .material-icons.phone_iphone:before {\r\n    content: \"\\E325\"; }\r\n  .material-icons.phone_locked:before {\r\n    content: \"\\E61E\"; }\r\n  .material-icons.phone_missed:before {\r\n    content: \"\\E61F\"; }\r\n  .material-icons.phone_paused:before {\r\n    content: \"\\E620\"; }\r\n  .material-icons.phonelink:before {\r\n    content: \"\\E326\"; }\r\n  .material-icons.phonelink_erase:before {\r\n    content: \"\\E0DB\"; }\r\n  .material-icons.phonelink_lock:before {\r\n    content: \"\\E0DC\"; }\r\n  .material-icons.phonelink_off:before {\r\n    content: \"\\E327\"; }\r\n  .material-icons.phonelink_ring:before {\r\n    content: \"\\E0DD\"; }\r\n  .material-icons.phonelink_setup:before {\r\n    content: \"\\E0DE\"; }\r\n  .material-icons.photo:before {\r\n    content: \"\\E410\"; }\r\n  .material-icons.photo_album:before {\r\n    content: \"\\E411\"; }\r\n  .material-icons.photo_camera:before {\r\n    content: \"\\E412\"; }\r\n  .material-icons.photo_filter:before {\r\n    content: \"\\E43B\"; }\r\n  .material-icons.photo_library:before {\r\n    content: \"\\E413\"; }\r\n  .material-icons.photo_size_select_actual:before {\r\n    content: \"\\E432\"; }\r\n  .material-icons.photo_size_select_large:before {\r\n    content: \"\\E433\"; }\r\n  .material-icons.photo_size_select_small:before {\r\n    content: \"\\E434\"; }\r\n  .material-icons.picture_as_pdf:before {\r\n    content: \"\\E415\"; }\r\n  .material-icons.picture_in_picture:before {\r\n    content: \"\\E8AA\"; }\r\n  .material-icons.picture_in_picture_alt:before {\r\n    content: \"\\E911\"; }\r\n  .material-icons.pie_chart:before {\r\n    content: \"\\E6C4\"; }\r\n  .material-icons.pie_chart_outlined:before {\r\n    content: \"\\E6C5\"; }\r\n  .material-icons.pin_drop:before {\r\n    content: \"\\E55E\"; }\r\n  .material-icons.pivot_table_chart:before {\r\n    content: \"\\E9CE\"; }\r\n  .material-icons.place:before {\r\n    content: \"\\E55F\"; }\r\n  .material-icons.play_arrow:before {\r\n    content: \"\\E037\"; }\r\n  .material-icons.play_circle_fill:before {\r\n    content: \"\\E038\"; }\r\n  .material-icons.play_circle_filled:before {\r\n    content: \"\\E038\"; }\r\n  .material-icons.play_circle_outline:before {\r\n    content: \"\\E039\"; }\r\n  .material-icons.play_for_work:before {\r\n    content: \"\\E906\"; }\r\n  .material-icons.playlist_add:before {\r\n    content: \"\\E03B\"; }\r\n  .material-icons.playlist_add_check:before {\r\n    content: \"\\E065\"; }\r\n  .material-icons.playlist_play:before {\r\n    content: \"\\E05F\"; }\r\n  .material-icons.plus_one:before {\r\n    content: \"\\E800\"; }\r\n  .material-icons.policy:before {\r\n    content: \"\\EA17\"; }\r\n  .material-icons.poll:before {\r\n    content: \"\\E801\"; }\r\n  .material-icons.polymer:before {\r\n    content: \"\\E8AB\"; }\r\n  .material-icons.pool:before {\r\n    content: \"\\EB48\"; }\r\n  .material-icons.portable_wifi_off:before {\r\n    content: \"\\E0CE\"; }\r\n  .material-icons.portrait:before {\r\n    content: \"\\E416\"; }\r\n  .material-icons.post_add:before {\r\n    content: \"\\EA20\"; }\r\n  .material-icons.power:before {\r\n    content: \"\\E63C\"; }\r\n  .material-icons.power_input:before {\r\n    content: \"\\E336\"; }\r\n  .material-icons.power_off:before {\r\n    content: \"\\E646\"; }\r\n  .material-icons.power_settings_new:before {\r\n    content: \"\\E8AC\"; }\r\n  .material-icons.pregnant_woman:before {\r\n    content: \"\\E91E\"; }\r\n  .material-icons.present_to_all:before {\r\n    content: \"\\E0DF\"; }\r\n  .material-icons.print:before {\r\n    content: \"\\E8AD\"; }\r\n  .material-icons.print_disabled:before {\r\n    content: \"\\E9CF\"; }\r\n  .material-icons.priority_high:before {\r\n    content: \"\\E645\"; }\r\n  .material-icons.public:before {\r\n    content: \"\\E80B\"; }\r\n  .material-icons.publish:before {\r\n    content: \"\\E255\"; }\r\n  .material-icons.query_builder:before {\r\n    content: \"\\E8AE\"; }\r\n  .material-icons.question_answer:before {\r\n    content: \"\\E8AF\"; }\r\n  .material-icons.queue:before {\r\n    content: \"\\E03C\"; }\r\n  .material-icons.queue_music:before {\r\n    content: \"\\E03D\"; }\r\n  .material-icons.queue_play_next:before {\r\n    content: \"\\E066\"; }\r\n  .material-icons.quick_contacts_dialer:before {\r\n    content: \"\\E0CF\"; }\r\n  .material-icons.quick_contacts_mail:before {\r\n    content: \"\\E0D0\"; }\r\n  .material-icons.radio:before {\r\n    content: \"\\E03E\"; }\r\n  .material-icons.radio_button_checked:before {\r\n    content: \"\\E837\"; }\r\n  .material-icons.radio_button_off:before {\r\n    content: \"\\E836\"; }\r\n  .material-icons.radio_button_on:before {\r\n    content: \"\\E837\"; }\r\n  .material-icons.radio_button_unchecked:before {\r\n    content: \"\\E836\"; }\r\n  .material-icons.railway_alert:before {\r\n    content: \"\\E9D1\"; }\r\n  .material-icons.ramen_dining:before {\r\n    content: \"\\EA64\"; }\r\n  .material-icons.rate_review:before {\r\n    content: \"\\E560\"; }\r\n  .material-icons.receipt:before {\r\n    content: \"\\E8B0\"; }\r\n  .material-icons.recent_actors:before {\r\n    content: \"\\E03F\"; }\r\n  .material-icons.recommend:before {\r\n    content: \"\\E9D2\"; }\r\n  .material-icons.record_voice_over:before {\r\n    content: \"\\E91F\"; }\r\n  .material-icons.redeem:before {\r\n    content: \"\\E8B1\"; }\r\n  .material-icons.redo:before {\r\n    content: \"\\E15A\"; }\r\n  .material-icons.refresh:before {\r\n    content: \"\\E5D5\"; }\r\n  .material-icons.remove:before {\r\n    content: \"\\E15B\"; }\r\n  .material-icons.remove_circle:before {\r\n    content: \"\\E15C\"; }\r\n  .material-icons.remove_circle_outline:before {\r\n    content: \"\\E15D\"; }\r\n  .material-icons.remove_done:before {\r\n    content: \"\\E9D3\"; }\r\n  .material-icons.remove_from_queue:before {\r\n    content: \"\\E067\"; }\r\n  .material-icons.remove_moderator:before {\r\n    content: \"\\E9D4\"; }\r\n  .material-icons.remove_red_eye:before {\r\n    content: \"\\E417\"; }\r\n  .material-icons.remove_shopping_cart:before {\r\n    content: \"\\E928\"; }\r\n  .material-icons.reorder:before {\r\n    content: \"\\E8FE\"; }\r\n  .material-icons.repeat:before {\r\n    content: \"\\E040\"; }\r\n  .material-icons.repeat_on:before {\r\n    content: \"\\E9D6\"; }\r\n  .material-icons.repeat_one:before {\r\n    content: \"\\E041\"; }\r\n  .material-icons.repeat_one_on:before {\r\n    content: \"\\E9D7\"; }\r\n  .material-icons.replay:before {\r\n    content: \"\\E042\"; }\r\n  .material-icons.replay_10:before {\r\n    content: \"\\E059\"; }\r\n  .material-icons.replay_30:before {\r\n    content: \"\\E05A\"; }\r\n  .material-icons.replay_5:before {\r\n    content: \"\\E05B\"; }\r\n  .material-icons.replay_circle_filled:before {\r\n    content: \"\\E9D8\"; }\r\n  .material-icons.reply:before {\r\n    content: \"\\E15E\"; }\r\n  .material-icons.reply_all:before {\r\n    content: \"\\E15F\"; }\r\n  .material-icons.report:before {\r\n    content: \"\\E160\"; }\r\n  .material-icons.report_off:before {\r\n    content: \"\\E170\"; }\r\n  .material-icons.report_problem:before {\r\n    content: \"\\E8B2\"; }\r\n  .material-icons.reset_tv:before {\r\n    content: \"\\E9D9\"; }\r\n  .material-icons.restaurant:before {\r\n    content: \"\\E56C\"; }\r\n  .material-icons.restaurant_menu:before {\r\n    content: \"\\E561\"; }\r\n  .material-icons.restore:before {\r\n    content: \"\\E8B3\"; }\r\n  .material-icons.restore_from_trash:before {\r\n    content: \"\\E938\"; }\r\n  .material-icons.restore_page:before {\r\n    content: \"\\E929\"; }\r\n  .material-icons.ring_volume:before {\r\n    content: \"\\E0D1\"; }\r\n  .material-icons.room:before {\r\n    content: \"\\E8B4\"; }\r\n  .material-icons.room_service:before {\r\n    content: \"\\EB49\"; }\r\n  .material-icons.rotate_90_degrees_ccw:before {\r\n    content: \"\\E418\"; }\r\n  .material-icons.rotate_left:before {\r\n    content: \"\\E419\"; }\r\n  .material-icons.rotate_right:before {\r\n    content: \"\\E41A\"; }\r\n  .material-icons.rounded_corner:before {\r\n    content: \"\\E920\"; }\r\n  .material-icons.router:before {\r\n    content: \"\\E328\"; }\r\n  .material-icons.rowing:before {\r\n    content: \"\\E921\"; }\r\n  .material-icons.rss_feed:before {\r\n    content: \"\\E0E5\"; }\r\n  .material-icons.rtt:before {\r\n    content: \"\\E9AD\"; }\r\n  .material-icons.rv_hookup:before {\r\n    content: \"\\E642\"; }\r\n  .material-icons.satellite:before {\r\n    content: \"\\E562\"; }\r\n  .material-icons.save:before {\r\n    content: \"\\E161\"; }\r\n  .material-icons.save_alt:before {\r\n    content: \"\\E171\"; }\r\n  .material-icons.saved_search:before {\r\n    content: \"\\EA11\"; }\r\n  .material-icons.scanner:before {\r\n    content: \"\\E329\"; }\r\n  .material-icons.scatter_plot:before {\r\n    content: \"\\E268\"; }\r\n  .material-icons.schedule:before {\r\n    content: \"\\E8B5\"; }\r\n  .material-icons.schedule_send:before {\r\n    content: \"\\EA0A\"; }\r\n  .material-icons.school:before {\r\n    content: \"\\E80C\"; }\r\n  .material-icons.score:before {\r\n    content: \"\\E269\"; }\r\n  .material-icons.screen_lock_landscape:before {\r\n    content: \"\\E1BE\"; }\r\n  .material-icons.screen_lock_portrait:before {\r\n    content: \"\\E1BF\"; }\r\n  .material-icons.screen_lock_rotation:before {\r\n    content: \"\\E1C0\"; }\r\n  .material-icons.screen_rotation:before {\r\n    content: \"\\E1C1\"; }\r\n  .material-icons.screen_share:before {\r\n    content: \"\\E0E2\"; }\r\n  .material-icons.sd:before {\r\n    content: \"\\E9DD\"; }\r\n  .material-icons.sd_card:before {\r\n    content: \"\\E623\"; }\r\n  .material-icons.sd_storage:before {\r\n    content: \"\\E1C2\"; }\r\n  .material-icons.search:before {\r\n    content: \"\\E8B6\"; }\r\n  .material-icons.security:before {\r\n    content: \"\\E32A\"; }\r\n  .material-icons.segment:before {\r\n    content: \"\\E94B\"; }\r\n  .material-icons.select_all:before {\r\n    content: \"\\E162\"; }\r\n  .material-icons.send:before {\r\n    content: \"\\E163\"; }\r\n  .material-icons.send_and_archive:before {\r\n    content: \"\\EA0C\"; }\r\n  .material-icons.sentiment_dissatisfied:before {\r\n    content: \"\\E811\"; }\r\n  .material-icons.sentiment_neutral:before {\r\n    content: \"\\E812\"; }\r\n  .material-icons.sentiment_satisfied:before {\r\n    content: \"\\E813\"; }\r\n  .material-icons.sentiment_satisfied_alt:before {\r\n    content: \"\\E0ED\"; }\r\n  .material-icons.sentiment_very_dissatisfied:before {\r\n    content: \"\\E814\"; }\r\n  .material-icons.sentiment_very_satisfied:before {\r\n    content: \"\\E815\"; }\r\n  .material-icons.settings:before {\r\n    content: \"\\E8B8\"; }\r\n  .material-icons.settings_applications:before {\r\n    content: \"\\E8B9\"; }\r\n  .material-icons.settings_backup_restore:before {\r\n    content: \"\\E8BA\"; }\r\n  .material-icons.settings_bluetooth:before {\r\n    content: \"\\E8BB\"; }\r\n  .material-icons.settings_brightness:before {\r\n    content: \"\\E8BD\"; }\r\n  .material-icons.settings_cell:before {\r\n    content: \"\\E8BC\"; }\r\n  .material-icons.settings_display:before {\r\n    content: \"\\E8BD\"; }\r\n  .material-icons.settings_ethernet:before {\r\n    content: \"\\E8BE\"; }\r\n  .material-icons.settings_input_antenna:before {\r\n    content: \"\\E8BF\"; }\r\n  .material-icons.settings_input_component:before {\r\n    content: \"\\E8C0\"; }\r\n  .material-icons.settings_input_composite:before {\r\n    content: \"\\E8C1\"; }\r\n  .material-icons.settings_input_hdmi:before {\r\n    content: \"\\E8C2\"; }\r\n  .material-icons.settings_input_svideo:before {\r\n    content: \"\\E8C3\"; }\r\n  .material-icons.settings_overscan:before {\r\n    content: \"\\E8C4\"; }\r\n  .material-icons.settings_phone:before {\r\n    content: \"\\E8C5\"; }\r\n  .material-icons.settings_power:before {\r\n    content: \"\\E8C6\"; }\r\n  .material-icons.settings_remote:before {\r\n    content: \"\\E8C7\"; }\r\n  .material-icons.settings_system_daydream:before {\r\n    content: \"\\E1C3\"; }\r\n  .material-icons.settings_voice:before {\r\n    content: \"\\E8C8\"; }\r\n  .material-icons.share:before {\r\n    content: \"\\E80D\"; }\r\n  .material-icons.shield:before {\r\n    content: \"\\E9E0\"; }\r\n  .material-icons.shop:before {\r\n    content: \"\\E8C9\"; }\r\n  .material-icons.shop_two:before {\r\n    content: \"\\E8CA\"; }\r\n  .material-icons.shopping_basket:before {\r\n    content: \"\\E8CB\"; }\r\n  .material-icons.shopping_cart:before {\r\n    content: \"\\E8CC\"; }\r\n  .material-icons.short_text:before {\r\n    content: \"\\E261\"; }\r\n  .material-icons.show_chart:before {\r\n    content: \"\\E6E1\"; }\r\n  .material-icons.shuffle:before {\r\n    content: \"\\E043\"; }\r\n  .material-icons.shuffle_on:before {\r\n    content: \"\\E9E1\"; }\r\n  .material-icons.shutter_speed:before {\r\n    content: \"\\E43D\"; }\r\n  .material-icons.signal_cellular_4_bar:before {\r\n    content: \"\\E1C8\"; }\r\n  .material-icons.signal_cellular_alt:before {\r\n    content: \"\\E202\"; }\r\n  .material-icons.signal_cellular_connected_no_internet_4_bar:before {\r\n    content: \"\\E1CD\"; }\r\n  .material-icons.signal_cellular_no_sim:before {\r\n    content: \"\\E1CE\"; }\r\n  .material-icons.signal_cellular_null:before {\r\n    content: \"\\E1CF\"; }\r\n  .material-icons.signal_cellular_off:before {\r\n    content: \"\\E1D0\"; }\r\n  .material-icons.signal_wifi_4_bar:before {\r\n    content: \"\\E1D8\"; }\r\n  .material-icons.signal_wifi_4_bar_lock:before {\r\n    content: \"\\E1D9\"; }\r\n  .material-icons.signal_wifi_off:before {\r\n    content: \"\\E1DA\"; }\r\n  .material-icons.sim_card:before {\r\n    content: \"\\E32B\"; }\r\n  .material-icons.sim_card_alert:before {\r\n    content: \"\\E624\"; }\r\n  .material-icons.single_bed:before {\r\n    content: \"\\EA48\"; }\r\n  .material-icons.skip_next:before {\r\n    content: \"\\E044\"; }\r\n  .material-icons.skip_previous:before {\r\n    content: \"\\E045\"; }\r\n  .material-icons.slideshow:before {\r\n    content: \"\\E41B\"; }\r\n  .material-icons.slow_motion_video:before {\r\n    content: \"\\E068\"; }\r\n  .material-icons.smartphone:before {\r\n    content: \"\\E32C\"; }\r\n  .material-icons.smoke_free:before {\r\n    content: \"\\EB4A\"; }\r\n  .material-icons.smoking_rooms:before {\r\n    content: \"\\EB4B\"; }\r\n  .material-icons.sms:before {\r\n    content: \"\\E625\"; }\r\n  .material-icons.sms_failed:before {\r\n    content: \"\\E626\"; }\r\n  .material-icons.snooze:before {\r\n    content: \"\\E046\"; }\r\n  .material-icons.sort:before {\r\n    content: \"\\E164\"; }\r\n  .material-icons.sort_by_alpha:before {\r\n    content: \"\\E053\"; }\r\n  .material-icons.spa:before {\r\n    content: \"\\EB4C\"; }\r\n  .material-icons.space_bar:before {\r\n    content: \"\\E256\"; }\r\n  .material-icons.speaker:before {\r\n    content: \"\\E32D\"; }\r\n  .material-icons.speaker_group:before {\r\n    content: \"\\E32E\"; }\r\n  .material-icons.speaker_notes:before {\r\n    content: \"\\E8CD\"; }\r\n  .material-icons.speaker_notes_off:before {\r\n    content: \"\\E92A\"; }\r\n  .material-icons.speaker_phone:before {\r\n    content: \"\\E0D2\"; }\r\n  .material-icons.speed:before {\r\n    content: \"\\E9E4\"; }\r\n  .material-icons.spellcheck:before {\r\n    content: \"\\E8CE\"; }\r\n  .material-icons.sports:before {\r\n    content: \"\\EA30\"; }\r\n  .material-icons.sports_baseball:before {\r\n    content: \"\\EA51\"; }\r\n  .material-icons.sports_basketball:before {\r\n    content: \"\\EA26\"; }\r\n  .material-icons.sports_cricket:before {\r\n    content: \"\\EA27\"; }\r\n  .material-icons.sports_esports:before {\r\n    content: \"\\EA28\"; }\r\n  .material-icons.sports_football:before {\r\n    content: \"\\EA29\"; }\r\n  .material-icons.sports_golf:before {\r\n    content: \"\\EA2A\"; }\r\n  .material-icons.sports_handball:before {\r\n    content: \"\\EA33\"; }\r\n  .material-icons.sports_hockey:before {\r\n    content: \"\\EA2B\"; }\r\n  .material-icons.sports_kabaddi:before {\r\n    content: \"\\EA34\"; }\r\n  .material-icons.sports_mma:before {\r\n    content: \"\\EA2C\"; }\r\n  .material-icons.sports_motorsports:before {\r\n    content: \"\\EA2D\"; }\r\n  .material-icons.sports_rugby:before {\r\n    content: \"\\EA2E\"; }\r\n  .material-icons.sports_soccer:before {\r\n    content: \"\\EA2F\"; }\r\n  .material-icons.sports_tennis:before {\r\n    content: \"\\EA32\"; }\r\n  .material-icons.sports_volleyball:before {\r\n    content: \"\\EA31\"; }\r\n  .material-icons.square_foot:before {\r\n    content: \"\\EA49\"; }\r\n  .material-icons.stacked_bar_chart:before {\r\n    content: \"\\E9E6\"; }\r\n  .material-icons.star:before {\r\n    content: \"\\E838\"; }\r\n  .material-icons.star_border:before {\r\n    content: \"\\E83A\"; }\r\n  .material-icons.star_half:before {\r\n    content: \"\\E839\"; }\r\n  .material-icons.star_outline:before {\r\n    content: \"\\E83A\"; }\r\n  .material-icons.stars:before {\r\n    content: \"\\E8D0\"; }\r\n  .material-icons.stay_current_landscape:before {\r\n    content: \"\\E0D3\"; }\r\n  .material-icons.stay_current_portrait:before {\r\n    content: \"\\E0D4\"; }\r\n  .material-icons.stay_primary_landscape:before {\r\n    content: \"\\E0D5\"; }\r\n  .material-icons.stay_primary_portrait:before {\r\n    content: \"\\E0D6\"; }\r\n  .material-icons.stop:before {\r\n    content: \"\\E047\"; }\r\n  .material-icons.stop_screen_share:before {\r\n    content: \"\\E0E3\"; }\r\n  .material-icons.storage:before {\r\n    content: \"\\E1DB\"; }\r\n  .material-icons.store:before {\r\n    content: \"\\E8D1\"; }\r\n  .material-icons.store_mall_directory:before {\r\n    content: \"\\E563\"; }\r\n  .material-icons.storefront:before {\r\n    content: \"\\EA12\"; }\r\n  .material-icons.straighten:before {\r\n    content: \"\\E41C\"; }\r\n  .material-icons.stream:before {\r\n    content: \"\\E9E9\"; }\r\n  .material-icons.streetview:before {\r\n    content: \"\\E56E\"; }\r\n  .material-icons.strikethrough_s:before {\r\n    content: \"\\E257\"; }\r\n  .material-icons.style:before {\r\n    content: \"\\E41D\"; }\r\n  .material-icons.subdirectory_arrow_left:before {\r\n    content: \"\\E5D9\"; }\r\n  .material-icons.subdirectory_arrow_right:before {\r\n    content: \"\\E5DA\"; }\r\n  .material-icons.subject:before {\r\n    content: \"\\E8D2\"; }\r\n  .material-icons.subscriptions:before {\r\n    content: \"\\E064\"; }\r\n  .material-icons.subtitles:before {\r\n    content: \"\\E048\"; }\r\n  .material-icons.subway:before {\r\n    content: \"\\E56F\"; }\r\n  .material-icons.supervised_user_circle:before {\r\n    content: \"\\E939\"; }\r\n  .material-icons.supervisor_account:before {\r\n    content: \"\\E8D3\"; }\r\n  .material-icons.surround_sound:before {\r\n    content: \"\\E049\"; }\r\n  .material-icons.swap_calls:before {\r\n    content: \"\\E0D7\"; }\r\n  .material-icons.swap_horiz:before {\r\n    content: \"\\E8D4\"; }\r\n  .material-icons.swap_horizontal_circle:before {\r\n    content: \"\\E933\"; }\r\n  .material-icons.swap_vert:before {\r\n    content: \"\\E8D5\"; }\r\n  .material-icons.swap_vert_circle:before {\r\n    content: \"\\E8D6\"; }\r\n  .material-icons.swap_vertical_circle:before {\r\n    content: \"\\E8D6\"; }\r\n  .material-icons.swipe:before {\r\n    content: \"\\E9EC\"; }\r\n  .material-icons.switch_account:before {\r\n    content: \"\\E9ED\"; }\r\n  .material-icons.switch_camera:before {\r\n    content: \"\\E41E\"; }\r\n  .material-icons.switch_video:before {\r\n    content: \"\\E41F\"; }\r\n  .material-icons.sync:before {\r\n    content: \"\\E627\"; }\r\n  .material-icons.sync_alt:before {\r\n    content: \"\\EA18\"; }\r\n  .material-icons.sync_disabled:before {\r\n    content: \"\\E628\"; }\r\n  .material-icons.sync_problem:before {\r\n    content: \"\\E629\"; }\r\n  .material-icons.system_update:before {\r\n    content: \"\\E62A\"; }\r\n  .material-icons.system_update_alt:before {\r\n    content: \"\\E8D7\"; }\r\n  .material-icons.system_update_tv:before {\r\n    content: \"\\E8D7\"; }\r\n  .material-icons.tab:before {\r\n    content: \"\\E8D8\"; }\r\n  .material-icons.tab_unselected:before {\r\n    content: \"\\E8D9\"; }\r\n  .material-icons.table_chart:before {\r\n    content: \"\\E265\"; }\r\n  .material-icons.tablet:before {\r\n    content: \"\\E32F\"; }\r\n  .material-icons.tablet_android:before {\r\n    content: \"\\E330\"; }\r\n  .material-icons.tablet_mac:before {\r\n    content: \"\\E331\"; }\r\n  .material-icons.tag:before {\r\n    content: \"\\E9EF\"; }\r\n  .material-icons.tag_faces:before {\r\n    content: \"\\E420\"; }\r\n  .material-icons.takeout_dining:before {\r\n    content: \"\\EA74\"; }\r\n  .material-icons.tap_and_play:before {\r\n    content: \"\\E62B\"; }\r\n  .material-icons.terrain:before {\r\n    content: \"\\E564\"; }\r\n  .material-icons.text_fields:before {\r\n    content: \"\\E262\"; }\r\n  .material-icons.text_format:before {\r\n    content: \"\\E165\"; }\r\n  .material-icons.text_rotate_up:before {\r\n    content: \"\\E93A\"; }\r\n  .material-icons.text_rotate_vertical:before {\r\n    content: \"\\E93B\"; }\r\n  .material-icons.text_rotation_angledown:before {\r\n    content: \"\\E93C\"; }\r\n  .material-icons.text_rotation_angleup:before {\r\n    content: \"\\E93D\"; }\r\n  .material-icons.text_rotation_down:before {\r\n    content: \"\\E93E\"; }\r\n  .material-icons.text_rotation_none:before {\r\n    content: \"\\E93F\"; }\r\n  .material-icons.textsms:before {\r\n    content: \"\\E0D8\"; }\r\n  .material-icons.texture:before {\r\n    content: \"\\E421\"; }\r\n  .material-icons.theater_comedy:before {\r\n    content: \"\\EA66\"; }\r\n  .material-icons.theaters:before {\r\n    content: \"\\E8DA\"; }\r\n  .material-icons.thumb_down:before {\r\n    content: \"\\E8DB\"; }\r\n  .material-icons.thumb_down_alt:before {\r\n    content: \"\\E816\"; }\r\n  .material-icons.thumb_down_off_alt:before {\r\n    content: \"\\E9F2\"; }\r\n  .material-icons.thumb_up:before {\r\n    content: \"\\E8DC\"; }\r\n  .material-icons.thumb_up_alt:before {\r\n    content: \"\\E817\"; }\r\n  .material-icons.thumb_up_off_alt:before {\r\n    content: \"\\E9F3\"; }\r\n  .material-icons.thumbs_up_down:before {\r\n    content: \"\\E8DD\"; }\r\n  .material-icons.time_to_leave:before {\r\n    content: \"\\E62C\"; }\r\n  .material-icons.timelapse:before {\r\n    content: \"\\E422\"; }\r\n  .material-icons.timeline:before {\r\n    content: \"\\E922\"; }\r\n  .material-icons.timer:before {\r\n    content: \"\\E425\"; }\r\n  .material-icons.timer_10:before {\r\n    content: \"\\E423\"; }\r\n  .material-icons.timer_3:before {\r\n    content: \"\\E424\"; }\r\n  .material-icons.timer_off:before {\r\n    content: \"\\E426\"; }\r\n  .material-icons.title:before {\r\n    content: \"\\E264\"; }\r\n  .material-icons.toc:before {\r\n    content: \"\\E8DE\"; }\r\n  .material-icons.today:before {\r\n    content: \"\\E8DF\"; }\r\n  .material-icons.toggle_off:before {\r\n    content: \"\\E9F5\"; }\r\n  .material-icons.toggle_on:before {\r\n    content: \"\\E9F6\"; }\r\n  .material-icons.toll:before {\r\n    content: \"\\E8E0\"; }\r\n  .material-icons.tonality:before {\r\n    content: \"\\E427\"; }\r\n  .material-icons.touch_app:before {\r\n    content: \"\\E913\"; }\r\n  .material-icons.toys:before {\r\n    content: \"\\E332\"; }\r\n  .material-icons.track_changes:before {\r\n    content: \"\\E8E1\"; }\r\n  .material-icons.traffic:before {\r\n    content: \"\\E565\"; }\r\n  .material-icons.train:before {\r\n    content: \"\\E570\"; }\r\n  .material-icons.tram:before {\r\n    content: \"\\E571\"; }\r\n  .material-icons.transfer_within_a_station:before {\r\n    content: \"\\E572\"; }\r\n  .material-icons.transform:before {\r\n    content: \"\\E428\"; }\r\n  .material-icons.transit_enterexit:before {\r\n    content: \"\\E579\"; }\r\n  .material-icons.translate:before {\r\n    content: \"\\E8E2\"; }\r\n  .material-icons.trending_down:before {\r\n    content: \"\\E8E3\"; }\r\n  .material-icons.trending_flat:before {\r\n    content: \"\\E8E4\"; }\r\n  .material-icons.trending_neutral:before {\r\n    content: \"\\E8E4\"; }\r\n  .material-icons.trending_up:before {\r\n    content: \"\\E8E5\"; }\r\n  .material-icons.trip_origin:before {\r\n    content: \"\\E57B\"; }\r\n  .material-icons.tune:before {\r\n    content: \"\\E429\"; }\r\n  .material-icons.turned_in:before {\r\n    content: \"\\E8E6\"; }\r\n  .material-icons.turned_in_not:before {\r\n    content: \"\\E8E7\"; }\r\n  .material-icons.tv:before {\r\n    content: \"\\E333\"; }\r\n  .material-icons.tv_off:before {\r\n    content: \"\\E647\"; }\r\n  .material-icons.two_wheeler:before {\r\n    content: \"\\E9F9\"; }\r\n  .material-icons.unarchive:before {\r\n    content: \"\\E169\"; }\r\n  .material-icons.undo:before {\r\n    content: \"\\E166\"; }\r\n  .material-icons.unfold_less:before {\r\n    content: \"\\E5D6\"; }\r\n  .material-icons.unfold_more:before {\r\n    content: \"\\E5D7\"; }\r\n  .material-icons.unsubscribe:before {\r\n    content: \"\\E0EB\"; }\r\n  .material-icons.update:before {\r\n    content: \"\\E923\"; }\r\n  .material-icons.upload_file:before {\r\n    content: \"\\E9FC\"; }\r\n  .material-icons.usb:before {\r\n    content: \"\\E1E0\"; }\r\n  .material-icons.verified_user:before {\r\n    content: \"\\E8E8\"; }\r\n  .material-icons.vertical_align_bottom:before {\r\n    content: \"\\E258\"; }\r\n  .material-icons.vertical_align_center:before {\r\n    content: \"\\E259\"; }\r\n  .material-icons.vertical_align_top:before {\r\n    content: \"\\E25A\"; }\r\n  .material-icons.vertical_split:before {\r\n    content: \"\\E949\"; }\r\n  .material-icons.vibration:before {\r\n    content: \"\\E62D\"; }\r\n  .material-icons.video_call:before {\r\n    content: \"\\E070\"; }\r\n  .material-icons.video_collection:before {\r\n    content: \"\\E04A\"; }\r\n  .material-icons.video_label:before {\r\n    content: \"\\E071\"; }\r\n  .material-icons.video_library:before {\r\n    content: \"\\E04A\"; }\r\n  .material-icons.videocam:before {\r\n    content: \"\\E04B\"; }\r\n  .material-icons.videocam_off:before {\r\n    content: \"\\E04C\"; }\r\n  .material-icons.videogame_asset:before {\r\n    content: \"\\E338\"; }\r\n  .material-icons.view_agenda:before {\r\n    content: \"\\E8E9\"; }\r\n  .material-icons.view_array:before {\r\n    content: \"\\E8EA\"; }\r\n  .material-icons.view_carousel:before {\r\n    content: \"\\E8EB\"; }\r\n  .material-icons.view_column:before {\r\n    content: \"\\E8EC\"; }\r\n  .material-icons.view_comfortable:before {\r\n    content: \"\\E42A\"; }\r\n  .material-icons.view_comfy:before {\r\n    content: \"\\E42A\"; }\r\n  .material-icons.view_compact:before {\r\n    content: \"\\E42B\"; }\r\n  .material-icons.view_day:before {\r\n    content: \"\\E8ED\"; }\r\n  .material-icons.view_headline:before {\r\n    content: \"\\E8EE\"; }\r\n  .material-icons.view_in_ar:before {\r\n    content: \"\\E9FE\"; }\r\n  .material-icons.view_list:before {\r\n    content: \"\\E8EF\"; }\r\n  .material-icons.view_module:before {\r\n    content: \"\\E8F0\"; }\r\n  .material-icons.view_quilt:before {\r\n    content: \"\\E8F1\"; }\r\n  .material-icons.view_stream:before {\r\n    content: \"\\E8F2\"; }\r\n  .material-icons.view_week:before {\r\n    content: \"\\E8F3\"; }\r\n  .material-icons.vignette:before {\r\n    content: \"\\E435\"; }\r\n  .material-icons.visibility:before {\r\n    content: \"\\E8F4\"; }\r\n  .material-icons.visibility_off:before {\r\n    content: \"\\E8F5\"; }\r\n  .material-icons.voice_chat:before {\r\n    content: \"\\E62E\"; }\r\n  .material-icons.voice_over_off:before {\r\n    content: \"\\E94A\"; }\r\n  .material-icons.voicemail:before {\r\n    content: \"\\E0D9\"; }\r\n  .material-icons.volume_down:before {\r\n    content: \"\\E04D\"; }\r\n  .material-icons.volume_mute:before {\r\n    content: \"\\E04E\"; }\r\n  .material-icons.volume_off:before {\r\n    content: \"\\E04F\"; }\r\n  .material-icons.volume_up:before {\r\n    content: \"\\E050\"; }\r\n  .material-icons.volunteer_activism:before {\r\n    content: \"\\EA70\"; }\r\n  .material-icons.vpn_key:before {\r\n    content: \"\\E0DA\"; }\r\n  .material-icons.vpn_lock:before {\r\n    content: \"\\E62F\"; }\r\n  .material-icons.wallet_giftcard:before {\r\n    content: \"\\E8F6\"; }\r\n  .material-icons.wallet_membership:before {\r\n    content: \"\\E8F7\"; }\r\n  .material-icons.wallet_travel:before {\r\n    content: \"\\E8F8\"; }\r\n  .material-icons.wallpaper:before {\r\n    content: \"\\E1BC\"; }\r\n  .material-icons.warning:before {\r\n    content: \"\\E002\"; }\r\n  .material-icons.watch:before {\r\n    content: \"\\E334\"; }\r\n  .material-icons.watch_later:before {\r\n    content: \"\\E924\"; }\r\n  .material-icons.waterfall_chart:before {\r\n    content: \"\\EA00\"; }\r\n  .material-icons.waves:before {\r\n    content: \"\\E176\"; }\r\n  .material-icons.wb_auto:before {\r\n    content: \"\\E42C\"; }\r\n  .material-icons.wb_cloudy:before {\r\n    content: \"\\E42D\"; }\r\n  .material-icons.wb_incandescent:before {\r\n    content: \"\\E42E\"; }\r\n  .material-icons.wb_iridescent:before {\r\n    content: \"\\E436\"; }\r\n  .material-icons.wb_shade:before {\r\n    content: \"\\EA01\"; }\r\n  .material-icons.wb_sunny:before {\r\n    content: \"\\E430\"; }\r\n  .material-icons.wb_twighlight:before {\r\n    content: \"\\EA02\"; }\r\n  .material-icons.wc:before {\r\n    content: \"\\E63D\"; }\r\n  .material-icons.web:before {\r\n    content: \"\\E051\"; }\r\n  .material-icons.web_asset:before {\r\n    content: \"\\E069\"; }\r\n  .material-icons.weekend:before {\r\n    content: \"\\E16B\"; }\r\n  .material-icons.whatshot:before {\r\n    content: \"\\E80E\"; }\r\n  .material-icons.where_to_vote:before {\r\n    content: \"\\E177\"; }\r\n  .material-icons.widgets:before {\r\n    content: \"\\E1BD\"; }\r\n  .material-icons.wifi:before {\r\n    content: \"\\E63E\"; }\r\n  .material-icons.wifi_lock:before {\r\n    content: \"\\E1E1\"; }\r\n  .material-icons.wifi_off:before {\r\n    content: \"\\E648\"; }\r\n  .material-icons.wifi_tethering:before {\r\n    content: \"\\E1E2\"; }\r\n  .material-icons.work:before {\r\n    content: \"\\E8F9\"; }\r\n  .material-icons.work_off:before {\r\n    content: \"\\E942\"; }\r\n  .material-icons.work_outline:before {\r\n    content: \"\\E943\"; }\r\n  .material-icons.workspaces_filled:before {\r\n    content: \"\\EA0D\"; }\r\n  .material-icons.workspaces_outline:before {\r\n    content: \"\\EA0F\"; }\r\n  .material-icons.wrap_text:before {\r\n    content: \"\\E25B\"; }\r\n  .material-icons.youtube_searched_for:before {\r\n    content: \"\\E8FA\"; }\r\n  .material-icons.zoom_in:before {\r\n    content: \"\\E8FF\"; }\r\n  .material-icons.zoom_out:before {\r\n    content: \"\\E900\"; }\r\n  .material-icons.zoom_out_map:before {\r\n    content: \"\\E56B\"; }\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-head.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-head.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.no-clcik       {pointer-events: none;}\n.get-clcik      {pointer-events: auto;}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-msg-list.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-msg-list.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nDIV#block_message\t\t\t\t\t\t\t{position: fixed;z-index: 800;right: 0px;bottom: 15px;padding: 10px;/*overflow: auto;*/ /*vertical-align: middle;text-valign: middle;*/}\nDIV#block_message>Div,\nDIV#block_message>Div>Div\t\t\t\t\t{display: block;position: relative;height: auto;margin-bottom: 5px;  background-color: transparent;}\nDIV#block_message>Div>Div>Div\t\t\t\t{border-radius: 20px;}\nDIV#block_message>Div>Div>Div>Div\t\t\t{padding: 0px; height: auto;}\nDIV#block_message button.noMarginLeft\t\t{margin-left: 7px;} \n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/debug.js":
/*!*****************************************!*\
  !*** ./node_modules/debug/src/debug.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");


/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/engine.io-client/node_modules/component-emitter/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:socket');
var index = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (typeof location !== 'undefined' && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (typeof location !== 'undefined' ? location.hostname : 'localhost');
  this.port = opts.port || (typeof location !== 'undefined' && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.withCredentials = false !== opts.withCredentials;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // detect ReactNative environment
  this.isReactNative = (typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative');

  // other options for Node.js or ReactNative client
  if (typeof self === 'undefined' || this.isReactNative) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
Socket.transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
Socket.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    withCredentials: options.withCredentials || this.withCredentials,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0),
    isReactNative: this.isReactNative
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/engine.io-client/node_modules/component-emitter/index.js");

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;
  this.withCredentials = opts.withCredentials;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // results of ReactNative environment detection
  this.isReactNative = opts.isReactNative;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
var XHR = __webpack_require__(/*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js");
var JSONP = __webpack_require__(/*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js");
var websocket = __webpack_require__(/*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module requirements.
 */

var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * Until https://github.com/tc39/proposal-global is shipped.
 */
function glob () {
  return typeof self !== 'undefined' ? self
      : typeof window !== 'undefined' ? window
      : typeof global !== 'undefined' ? global : {};
}

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    var global = glob();
    callbacks = global.___eio = (global.___eio || []);
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (typeof addEventListener === 'function') {
    addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global attachEvent */

/**
 * Module requirements.
 */

var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/engine.io-client/node_modules/component-emitter/index.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = (typeof location !== 'undefined' && opts.hostname !== location.hostname) ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;
  opts.withCredentials = this.withCredentials;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.withCredentials = opts.withCredentials;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = this.withCredentials;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');
            if (self.supportsBinary && contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(typeof xhr.status === 'number' ? xhr.status : 0);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (typeof document !== 'undefined') {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (typeof document !== 'undefined') {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== 'undefined') {
  if (typeof attachEvent === 'function') {
    attachEvent('onunload', unloadHandler);
  } else if (typeof addEventListener === 'function') {
    var terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Module dependencies.
 */

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:websocket');

var BrowserWebSocket, NodeWebSocket;

if (typeof WebSocket !== 'undefined') {
  BrowserWebSocket = WebSocket;
} else if (typeof self !== 'undefined') {
  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
}

if (typeof window === 'undefined') {
  try {
    NodeWebSocket = __webpack_require__(/*! ws */ 1);
  } catch (e) { }
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocketImpl = BrowserWebSocket || NodeWebSocket;

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocketImpl = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws =
      this.usingBrowserWebSocket && !this.isReactNative
        ? protocols
          ? new WebSocketImpl(uri, protocols)
          : new WebSocketImpl(uri)
        : new WebSocketImpl(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocketImpl && !('__initialize' in WebSocketImpl && this.name === WS.prototype.name);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/xmlhttprequest.js":
/*!*************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// browser shim for xmlhttprequest module

var hasCORS = __webpack_require__(/*! has-cors */ "./node_modules/has-cors/index.js");

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new self[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/component-emitter/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/component-emitter/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/engine.io-client/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/common.js":
/*!************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/common.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/engine.io-client/node_modules/ms/index.js");

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/ms/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/ms/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/browser.js":
/*!******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var keys = __webpack_require__(/*! ./keys */ "./node_modules/engine.io-parser/lib/keys.js");
var hasBinary = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");
var sliceBuffer = __webpack_require__(/*! arraybuffer.slice */ "./node_modules/arraybuffer.slice/index.js");
var after = __webpack_require__(/*! after */ "./node_modules/after/index.js");
var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/engine.io-parser/lib/utf8.js");

var base64encoder;
if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(/*! blob */ "./node_modules/blob/index.js");

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    exports.encodePacket({ type: packet.type, data: fr.result }, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/keys.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/utf8.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/utf8.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! https://mths.be/utf8js v2.1.2 by @mathias */

var stringFromCharCode = String.fromCharCode;

// Taken from https://mths.be/punycode
function ucs2decode(string) {
	var output = [];
	var counter = 0;
	var length = string.length;
	var value;
	var extra;
	while (counter < length) {
		value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// high surrogate, and there is a next character
			extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) { // low surrogate
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// unmatched surrogate; only append this code unit, in case the next
				// code unit is the high surrogate of a surrogate pair
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

// Taken from https://mths.be/punycode
function ucs2encode(array) {
	var length = array.length;
	var index = -1;
	var value;
	var output = '';
	while (++index < length) {
		value = array[index];
		if (value > 0xFFFF) {
			value -= 0x10000;
			output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
			value = 0xDC00 | value & 0x3FF;
		}
		output += stringFromCharCode(value);
	}
	return output;
}

function checkScalarValue(codePoint, strict) {
	if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
		if (strict) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
		return false;
	}
	return true;
}
/*--------------------------------------------------------------------------*/

function createByte(codePoint, shift) {
	return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
}

function encodeCodePoint(codePoint, strict) {
	if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
		return stringFromCharCode(codePoint);
	}
	var symbol = '';
	if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
		symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
	}
	else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
		if (!checkScalarValue(codePoint, strict)) {
			codePoint = 0xFFFD;
		}
		symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
		symbol += createByte(codePoint, 6);
	}
	else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
		symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
		symbol += createByte(codePoint, 12);
		symbol += createByte(codePoint, 6);
	}
	symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
	return symbol;
}

function utf8encode(string, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	var codePoints = ucs2decode(string);
	var length = codePoints.length;
	var index = -1;
	var codePoint;
	var byteString = '';
	while (++index < length) {
		codePoint = codePoints[index];
		byteString += encodeCodePoint(codePoint, strict);
	}
	return byteString;
}

/*--------------------------------------------------------------------------*/

function readContinuationByte() {
	if (byteIndex >= byteCount) {
		throw Error('Invalid byte index');
	}

	var continuationByte = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	if ((continuationByte & 0xC0) == 0x80) {
		return continuationByte & 0x3F;
	}

	// If we end up here, it’s not a continuation byte
	throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
	var byte1;
	var byte2;
	var byte3;
	var byte4;
	var codePoint;

	if (byteIndex > byteCount) {
		throw Error('Invalid byte index');
	}

	if (byteIndex == byteCount) {
		return false;
	}

	// Read first byte
	byte1 = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	// 1-byte sequence (no continuation bytes)
	if ((byte1 & 0x80) == 0) {
		return byte1;
	}

	// 2-byte sequence
	if ((byte1 & 0xE0) == 0xC0) {
		byte2 = readContinuationByte();
		codePoint = ((byte1 & 0x1F) << 6) | byte2;
		if (codePoint >= 0x80) {
			return codePoint;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 3-byte sequence (may include unpaired surrogates)
	if ((byte1 & 0xF0) == 0xE0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
		if (codePoint >= 0x0800) {
			return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 4-byte sequence
	if ((byte1 & 0xF8) == 0xF0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		byte4 = readContinuationByte();
		codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
			(byte3 << 0x06) | byte4;
		if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
			return codePoint;
		}
	}

	throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;
function utf8decode(byteString, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	byteArray = ucs2decode(byteString);
	byteCount = byteArray.length;
	byteIndex = 0;
	var codePoints = [];
	var tmp;
	while ((tmp = decodeSymbol(strict)) !== false) {
		codePoints.push(tmp);
	}
	return ucs2encode(codePoints);
}

module.exports = {
	version: '2.1.2',
	encode: utf8encode,
	decode: utf8decode
};


/***/ }),

/***/ "./node_modules/has-binary2/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-binary2/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __webpack_require__(/*! isarray */ "./node_modules/has-binary2/node_modules/isarray/index.js");

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' ||
                        typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' ||
                        typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj)) ||
    (typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
    (withNativeBlob && obj instanceof Blob) ||
    (withNativeFile && obj instanceof File)
  ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/has-binary2/node_modules/isarray/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/has-binary2/node_modules/isarray/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.eot":
/*!******************************************************************************************!*\
  !*** ./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.eot ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/material-design-icons-icondist/MaterialIcons-Regular.eot?96c476804d7a788cc1c05351b287ee41";

/***/ }),

/***/ "./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.ttf":
/*!******************************************************************************************!*\
  !*** ./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.ttf ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/material-design-icons-icondist/MaterialIcons-Regular.ttf?da4ea5cdfca6b3baab285741f5ccb59f";

/***/ }),

/***/ "./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff":
/*!*******************************************************************************************!*\
  !*** ./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/material-design-icons-icondist/MaterialIcons-Regular.woff?29b882f018fa6fe75fd338aaae6235b8";

/***/ }),

/***/ "./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff2":
/*!********************************************************************************************!*\
  !*** ./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff2 ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/material-design-icons-icondist/MaterialIcons-Regular.woff2?0509ab09c1b0d2200a4135803c91d6ce";

/***/ }),

/***/ "./node_modules/material-design-icons-iconfont/dist/material-design-icons.css":
/*!************************************************************************************!*\
  !*** ./node_modules/material-design-icons-iconfont/dist/material-design-icons.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./material-design-icons.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/material-design-icons-iconfont/dist/material-design-icons.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};


/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/socket.io-parser/binary.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-parser/binary.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = __webpack_require__(/*! isarray */ "./node_modules/socket.io-parser/node_modules/isarray/index.js");
var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || (typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]');
var withNativeFile = typeof File === 'function' || (typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};


/***/ }),

/***/ "./node_modules/socket.io-parser/index.js":
/*!************************************************!*\
  !*** ./node_modules/socket.io-parser/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-parser');
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/socket.io-parser/node_modules/component-emitter/index.js");
var binary = __webpack_require__(/*! ./binary */ "./node_modules/socket.io-parser/binary.js");
var isArray = __webpack_require__(/*! isarray */ "./node_modules/socket.io-parser/node_modules/isarray/index.js");
var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    var payload = tryStringify(obj.data);
    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch(e){
    return false;
  }
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an encoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  }

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));
    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch(e){
    return false;
  }
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}


/***/ }),

/***/ "./node_modules/socket.io-parser/is-buffer.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-parser/is-buffer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {
module.exports = isBuf;

var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function (obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : (obj.buffer instanceof ArrayBuffer);
};

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (withNativeBuffer && Buffer.isBuffer(obj)) ||
          (withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)));
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/socket.io-parser/node_modules/component-emitter/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/socket.io-parser/node_modules/component-emitter/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/socket.io-parser/node_modules/isarray/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/socket.io-parser/node_modules/isarray/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-head.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-head.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-head.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-head.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-msg-list.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-msg-list.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-msg-list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-msg-list.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/to-array/index.js":
/*!****************************************!*\
  !*** ./node_modules/to-array/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}


/***/ }),

/***/ "./node_modules/vue-i18n/dist/vue-i18n.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-i18n/dist/vue-i18n.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * vue-i18n v8.15.3 
 * (c) 2019 kazuya kawaguchi
 * Released under the MIT License.
 */
/*  */

/**
 * constants
 */

var numberFormatKeys = [
  'style',
  'currency',
  'currencyDisplay',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'localeMatcher',
  'formatMatcher',
  'unit'
];

/**
 * utilities
 */

function warn (msg, err) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}

function error (msg, err) {
  if (typeof console !== 'undefined') {
    console.error('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.error(err.stack);
    }
  }
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

function isNull (val) {
  return val === null || val === undefined
}

function parseArgs () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (isObject(args[0]) || Array.isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */
    if (isObject(args[1]) || Array.isArray(args[1])) {
      params = args[1];
    }
  }

  return { locale: locale, params: params }
}

function looseClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

function merge (target) {
  var arguments$1 = arguments;

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    if (source !== undefined && source !== null) {
      var key = (void 0);
      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output
}

function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/*  */

function extend (Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$i18n', {
      get: function get () { return this._i18n }
    });
  }

  Vue.prototype.$t = function (key) {
    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this ].concat( values ))
  };

  Vue.prototype.$tc = function (key, choice) {
    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];

    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this, choice ].concat( values ))
  };

  Vue.prototype.$te = function (key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale)
  };

  Vue.prototype.$d = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).d.apply(ref, [ value ].concat( args ))
  };

  Vue.prototype.$n = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).n.apply(ref, [ value ].concat( args ))
  };
}

/*  */

var mixin = {
  beforeCreate: function beforeCreate () {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages = {};
            options.__i18n.forEach(function (resource) {
              localeMessages = merge(localeMessages, JSON.parse(resource));
            });
            Object.keys(localeMessages).forEach(function (locale) {
              options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
            });
          } catch (e) {
            if (true) {
              error("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }
        this._i18n = options.i18n;
        this._i18nWatcher = this._i18n.watchI18nData();
      } else if (isPlainObject(options.i18n)) {
        // component local i18n
        if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
          options.i18n.root = this.$root;
          options.i18n.formatter = this.$root.$i18n.formatter;
          options.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale;
          options.i18n.formatFallbackMessages = this.$root.$i18n.formatFallbackMessages;
          options.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn;
          options.i18n.silentFallbackWarn = this.$root.$i18n.silentFallbackWarn;
          options.i18n.pluralizationRules = this.$root.$i18n.pluralizationRules;
          options.i18n.preserveDirectiveContent = this.$root.$i18n.preserveDirectiveContent;
        }

        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages$1 = {};
            options.__i18n.forEach(function (resource) {
              localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
            });
            options.i18n.messages = localeMessages$1;
          } catch (e) {
            if (true) {
              warn("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }

        var ref = options.i18n;
        var sharedMessages = ref.sharedMessages;
        if (sharedMessages && isPlainObject(sharedMessages)) {
          options.i18n.messages = merge(options.i18n.messages, sharedMessages);
        }

        this._i18n = new VueI18n(options.i18n);
        this._i18nWatcher = this._i18n.watchI18nData();

        if (options.i18n.sync === undefined || !!options.i18n.sync) {
          this._localeWatcher = this.$i18n.watchLocale();
        }
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      // root i18n
      this._i18n = this.$root.$i18n;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      // parent i18n
      this._i18n = options.parent.$i18n;
    }
  },

  beforeMount: function beforeMount () {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (isPlainObject(options.i18n)) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    }
  },

  beforeDestroy: function beforeDestroy () {
    if (!this._i18n) { return }

    var self = this;
    this.$nextTick(function () {
      if (self._subscribing) {
        self._i18n.unsubscribeDataChanging(self);
        delete self._subscribing;
      }

      if (self._i18nWatcher) {
        self._i18nWatcher();
        self._i18n.destroyVM();
        delete self._i18nWatcher;
      }

      if (self._localeWatcher) {
        self._localeWatcher();
        delete self._localeWatcher;
      }

      self._i18n = null;
    });
  }
};

/*  */

var interpolationComponent = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: String
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var parent = ref.parent;
    var props = ref.props;
    var slots = ref.slots;

    var $i18n = parent.$i18n;
    if (!$i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return
    }

    var path = props.path;
    var locale = props.locale;
    var places = props.places;
    var params = slots();
    var children = $i18n.i(
      path,
      locale,
      onlyHasDefaultPlace(params) || places
        ? useLegacyPlaces(params.default, places)
        : params
    );

    var tag = props.tag || 'span';
    return tag ? h(tag, data, children) : children
  }
};

function onlyHasDefaultPlace (params) {
  var prop;
  for (prop in params) {
    if (prop !== 'default') { return false }
  }
  return Boolean(prop)
}

function useLegacyPlaces (children, places) {
  var params = places ? createParamsFromPlaces(places) : {};

  if (!children) { return params }

  // Filter empty text nodes
  children = children.filter(function (child) {
    return child.tag || child.text.trim() !== ''
  });

  var everyPlace = children.every(vnodeHasPlaceAttribute);
  if ( true && everyPlace) {
    warn('`place` attribute is deprecated in next major version. Please switch to Vue slots.');
  }

  return children.reduce(
    everyPlace ? assignChildPlace : assignChildIndex,
    params
  )
}

function createParamsFromPlaces (places) {
  if (true) {
    warn('`places` prop is deprecated in next major version. Please switch to Vue slots.');
  }

  return Array.isArray(places)
    ? places.reduce(assignChildIndex, {})
    : Object.assign({}, places)
}

function assignChildPlace (params, child) {
  if (child.data && child.data.attrs && child.data.attrs.place) {
    params[child.data.attrs.place] = child;
  }
  return params
}

function assignChildIndex (params, child, index) {
  params[index] = child;
  return params
}

function vnodeHasPlaceAttribute (vnode) {
  return Boolean(vnode.data && vnode.data.attrs && vnode.data.attrs.place)
}

/*  */

var numberComponent = {
  name: 'i18n-n',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    },
    locale: {
      type: String
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var parent = ref.parent;
    var data = ref.data;

    var i18n = parent.$i18n;

    if (!i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return null
    }

    var key = null;
    var options = null;

    if (typeof props.format === 'string') {
      key = props.format;
    } else if (isObject(props.format)) {
      if (props.format.key) {
        key = props.format.key;
      }

      // Filter out number format options only
      options = Object.keys(props.format).reduce(function (acc, prop) {
        var obj;

        if (numberFormatKeys.includes(prop)) {
          return Object.assign({}, acc, ( obj = {}, obj[prop] = props.format[prop], obj ))
        }
        return acc
      }, null);
    }

    var locale = props.locale || i18n.locale;
    var parts = i18n._ntp(props.value, locale, key, options);

    var values = parts.map(function (part, index) {
      var obj;

      var slot = data.scopedSlots && data.scopedSlots[part.type];
      return slot ? slot(( obj = {}, obj[part.type] = part.value, obj.index = index, obj.parts = parts, obj )) : part.value
    });

    return h(props.tag, {
      attrs: data.attrs,
      'class': data['class'],
      staticClass: data.staticClass
    }, values)
  }
};

/*  */

function bind (el, binding, vnode) {
  if (!assert(el, vnode)) { return }

  t(el, binding, vnode);
}

function update (el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) { return }

  var i18n = vnode.context.$i18n;
  if (localeEqual(el, vnode) &&
    (looseEqual(binding.value, binding.oldValue) &&
     looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale)))) { return }

  t(el, binding, vnode);
}

function unbind (el, binding, vnode, oldVNode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return
  }

  var i18n = vnode.context.$i18n || {};
  if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
    el.textContent = '';
  }
  el._vt = undefined;
  delete el['_vt'];
  el._locale = undefined;
  delete el['_locale'];
  el._localeMessage = undefined;
  delete el['_localeMessage'];
}

function assert (el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return false
  }

  if (!vm.$i18n) {
    warn('VueI18n instance does not exists in Vue instance');
    return false
  }

  return true
}

function localeEqual (el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale
}

function t (el, binding, vnode) {
  var ref$1, ref$2;

  var value = binding.value;

  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;
  if (!path && !locale && !args) {
    warn('value type not supported');
    return
  }

  if (!path) {
    warn('`path` is required in v-t directive');
    return
  }

  var vm = vnode.context;
  if (choice) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [ path, choice ].concat( makeParams(locale, args) ));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [ path ].concat( makeParams(locale, args) ));
  }
  el._locale = vm.$i18n.locale;
  el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
}

function parseValue (value) {
  var path;
  var locale;
  var args;
  var choice;

  if (typeof value === 'string') {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }

  return { path: path, locale: locale, args: args, choice: choice }
}

function makeParams (locale, args) {
  var params = [];

  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params
}

var Vue;

function install (_Vue) {
  /* istanbul ignore if */
  if ( true && install.installed && _Vue === Vue) {
    warn('already installed.');
    return
  }
  install.installed = true;

  Vue = _Vue;

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;
  /* istanbul ignore if */
  if ( true && version < 2) {
    warn(("vue-i18n (" + (install.version) + ") need to use Vue 2.0 or later (Vue: " + (Vue.version) + ")."));
    return
  }

  extend(Vue);
  Vue.mixin(mixin);
  Vue.directive('t', { bind: bind, update: update, unbind: unbind });
  Vue.component(interpolationComponent.name, interpolationComponent);
  Vue.component(numberComponent.name, numberComponent);

  // use simple mergeStrategies to prevent i18n instance lose '__proto__'
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };
}

/*  */

var BaseFormatter = function BaseFormatter () {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate (message, values) {
  if (!values) {
    return [message]
  }
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values)
};



var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;

function parse (format) {
  var tokens = [];
  var position = 0;

  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }

      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== '}') {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === '}';

      var type = RE_TOKEN_LIST_VALUE.test(sub)
        ? 'list'
        : isClosed && RE_TOKEN_NAMED_VALUE.test(sub)
          ? 'named'
          : 'unknown';
      tokens.push({ value: sub, type: type });
    } else if (char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[(position)] !== '{') {
        text += char;
      }
    } else {
      text += char;
    }
  }

  text && tokens.push({ type: 'text', value: text });

  return tokens
}

function compile (tokens, values) {
  var compiled = [];
  var index = 0;

  var mode = Array.isArray(values)
    ? 'list'
    : isObject(values)
      ? 'named'
      : 'unknown';
  if (mode === 'unknown') { return compiled }

  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break
      case 'named':
        if (mode === 'named') {
          compiled.push((values)[token.value]);
        } else {
          if (true) {
            warn(("Type of token '" + (token.type) + "' and format of value '" + mode + "' don't match!"));
          }
        }
        break
      case 'unknown':
        if (true) {
          warn("Detect 'unknown' type of token!");
        }
        break
    }
    index++;
  }

  return compiled
}

/*  */

/**
 *  Path parser
 *  - Inspired:
 *    Vue.js Path parser
 */

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 */

var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 */

function getPathCharType (ch) {
  if (ch === undefined || ch === null) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  return 'ident'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 */

function parse$1 (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      if (key === undefined) { return false }
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      return keys
    }
  }
}





var I18nPath = function I18nPath () {
  this._cache = Object.create(null);
};

/**
 * External parse that check for a cache hit first
 */
I18nPath.prototype.parsePath = function parsePath (path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || []
};

/**
 * Get path value from path string
 */
I18nPath.prototype.getPathValue = function getPathValue (obj, path) {
  if (!isObject(obj)) { return null }

  var paths = this.parsePath(path);
  if (paths.length === 0) {
    return null
  } else {
    var length = paths.length;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined) {
        return null
      }
      last = value;
      i++;
    }

    return last
  }
};

/*  */



var htmlTagMatcher = /<\/?[\w\s="/.':;#-\/]+>/;
var linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g;
var linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/;
var bracketsMatcher = /[()]/g;
var defaultModifiers = {
  'upper': function (str) { return str.toLocaleUpperCase(); },
  'lower': function (str) { return str.toLocaleLowerCase(); }
};

var defaultFormatter = new BaseFormatter();

var VueI18n = function VueI18n (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #290
  /* istanbul ignore if */
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || {};
  var numberFormats = options.numberFormats || {};

  this._vm = null;
  this._formatter = options.formatter || defaultFormatter;
  this._modifiers = options.modifiers || {};
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined
    ? true
    : !!options.fallbackRoot;
  this._formatFallbackMessages = options.formatFallbackMessages === undefined
    ? false
    : !!options.formatFallbackMessages;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined
    ? false
    : options.silentTranslationWarn;
  this._silentFallbackWarn = options.silentFallbackWarn === undefined
    ? false
    : !!options.silentFallbackWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = [];
  this._preserveDirectiveContent = options.preserveDirectiveContent === undefined
    ? false
    : !!options.preserveDirectiveContent;
  this.pluralizationRules = options.pluralizationRules || {};
  this._warnHtmlInMessage = options.warnHtmlInMessage || 'off';

  this._exist = function (message, key) {
    if (!message || !key) { return false }
    if (!isNull(this$1._path.getPathValue(message, key))) { return true }
    // fallback for flat key
    if (message[key]) { return true }
    return false
  };

  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats
  });
};

var prototypeAccessors = { vm: { configurable: true },messages: { configurable: true },dateTimeFormats: { configurable: true },numberFormats: { configurable: true },availableLocales: { configurable: true },locale: { configurable: true },fallbackLocale: { configurable: true },formatFallbackMessages: { configurable: true },missing: { configurable: true },formatter: { configurable: true },silentTranslationWarn: { configurable: true },silentFallbackWarn: { configurable: true },preserveDirectiveContent: { configurable: true },warnHtmlInMessage: { configurable: true } };

VueI18n.prototype._checkLocaleMessage = function _checkLocaleMessage (locale, level, message) {
  var paths = [];

  var fn = function (level, locale, message, paths) {
    if (isPlainObject(message)) {
      Object.keys(message).forEach(function (key) {
        var val = message[key];
        if (isPlainObject(val)) {
          paths.push(key);
          paths.push('.');
          fn(level, locale, val, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(key);
          fn(level, locale, val, paths);
          paths.pop();
        }
      });
    } else if (Array.isArray(message)) {
      message.forEach(function (item, index) {
        if (isPlainObject(item)) {
          paths.push(("[" + index + "]"));
          paths.push('.');
          fn(level, locale, item, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(("[" + index + "]"));
          fn(level, locale, item, paths);
          paths.pop();
        }
      });
    } else if (typeof message === 'string') {
      var ret = htmlTagMatcher.test(message);
      if (ret) {
        var msg = "Detected HTML in message '" + message + "' of keypath '" + (paths.join('')) + "' at '" + locale + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
        if (level === 'warn') {
          warn(msg);
        } else if (level === 'error') {
          error(msg);
        }
      }
    }
  };

  fn(level, locale, message, paths);
};

VueI18n.prototype._initVM = function _initVM (data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data });
  Vue.config.silent = silent;
};

VueI18n.prototype.destroyVM = function destroyVM () {
  this._vm.$destroy();
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging (vm) {
  this._dataListeners.push(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging (vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData () {
  var self = this;
  return this._vm.$watch('$data', function () {
    var i = self._dataListeners.length;
    while (i--) {
      Vue.nextTick(function () {
        self._dataListeners[i] && self._dataListeners[i].$forceUpdate();
      });
    }
  }, { deep: true })
};

VueI18n.prototype.watchLocale = function watchLocale () {
  /* istanbul ignore if */
  if (!this._sync || !this._root) { return null }
  var target = this._vm;
  return this._root.$i18n.vm.$watch('locale', function (val) {
    target.$set(target, 'locale', val);
    target.$forceUpdate();
  }, { immediate: true })
};

prototypeAccessors.vm.get = function () { return this._vm };

prototypeAccessors.messages.get = function () { return looseClone(this._getMessages()) };
prototypeAccessors.dateTimeFormats.get = function () { return looseClone(this._getDateTimeFormats()) };
prototypeAccessors.numberFormats.get = function () { return looseClone(this._getNumberFormats()) };
prototypeAccessors.availableLocales.get = function () { return Object.keys(this.messages).sort() };

prototypeAccessors.locale.get = function () { return this._vm.locale };
prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () { return this._vm.fallbackLocale };
prototypeAccessors.fallbackLocale.set = function (locale) {
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.formatFallbackMessages.get = function () { return this._formatFallbackMessages };
prototypeAccessors.formatFallbackMessages.set = function (fallback) { this._formatFallbackMessages = fallback; };

prototypeAccessors.missing.get = function () { return this._missing };
prototypeAccessors.missing.set = function (handler) { this._missing = handler; };

prototypeAccessors.formatter.get = function () { return this._formatter };
prototypeAccessors.formatter.set = function (formatter) { this._formatter = formatter; };

prototypeAccessors.silentTranslationWarn.get = function () { return this._silentTranslationWarn };
prototypeAccessors.silentTranslationWarn.set = function (silent) { this._silentTranslationWarn = silent; };

prototypeAccessors.silentFallbackWarn.get = function () { return this._silentFallbackWarn };
prototypeAccessors.silentFallbackWarn.set = function (silent) { this._silentFallbackWarn = silent; };

prototypeAccessors.preserveDirectiveContent.get = function () { return this._preserveDirectiveContent };
prototypeAccessors.preserveDirectiveContent.set = function (preserve) { this._preserveDirectiveContent = preserve; };

prototypeAccessors.warnHtmlInMessage.get = function () { return this._warnHtmlInMessage };
prototypeAccessors.warnHtmlInMessage.set = function (level) {
    var this$1 = this;

  var orgLevel = this._warnHtmlInMessage;
  this._warnHtmlInMessage = level;
  if (orgLevel !== level && (level === 'warn' || level === 'error')) {
    var messages = this._getMessages();
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }
};

VueI18n.prototype._getMessages = function _getMessages () { return this._vm.messages };
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats () { return this._vm.dateTimeFormats };
VueI18n.prototype._getNumberFormats = function _getNumberFormats () { return this._vm.numberFormats };

VueI18n.prototype._warnDefault = function _warnDefault (locale, key, result, vm, values) {
  if (!isNull(result)) { return result }
  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);
    if (typeof missingRet === 'string') {
      return missingRet
    }
  } else {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(
        "Cannot translate the value of keypath '" + key + "'. " +
        'Use the value of keypath as default.'
      );
    }
  }

  if (this._formatFallbackMessages) {
    var parsedArgs = parseArgs.apply(void 0, values);
    return this._render(key, 'string', parsedArgs.params, key)
  } else {
    return key
  }
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot (val) {
  return !val && !isNull(this._root) && this._fallbackRoot
};

VueI18n.prototype._isSilentFallbackWarn = function _isSilentFallbackWarn (key) {
  return this._silentFallbackWarn instanceof RegExp
    ? this._silentFallbackWarn.test(key)
    : this._silentFallbackWarn
};

VueI18n.prototype._isSilentFallback = function _isSilentFallback (locale, key) {
  return this._isSilentFallbackWarn(key) && (this._isFallbackRoot() || locale !== this.fallbackLocale)
};

VueI18n.prototype._isSilentTranslationWarn = function _isSilentTranslationWarn (key) {
  return this._silentTranslationWarn instanceof RegExp
    ? this._silentTranslationWarn.test(key)
    : this._silentTranslationWarn
};

VueI18n.prototype._interpolate = function _interpolate (
  locale,
  message,
  key,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  if (!message) { return null }

  var pathRet = this._path.getPathValue(message, key);
  if (Array.isArray(pathRet) || isPlainObject(pathRet)) { return pathRet }

  var ret;
  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];
      if (typeof ret !== 'string') {
        if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
          warn(("Value of key '" + key + "' is not a string!"));
        }
        return null
      }
    } else {
      return null
    }
  } else {
    /* istanbul ignore else */
    if (typeof pathRet === 'string') {
      ret = pathRet;
    } else {
      if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
        warn(("Value of key '" + key + "' is not a string!"));
      }
      return null
    }
  }

  // Check for the existence of links within the translated string
  if (ret.indexOf('@:') >= 0 || ret.indexOf('@.') >= 0) {
    ret = this._link(locale, message, ret, host, 'raw', values, visitedLinkStack);
  }

  return this._render(ret, interpolateMode, values, key)
};

VueI18n.prototype._link = function _link (
  locale,
  message,
  str,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  var ret = str;

  // Match all the links within the local
  // We are going to replace each of
  // them with its translation
  var matches = ret.match(linkKeyMatcher);
  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue
    }
    var link = matches[idx];
    var linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
    var linkPrefix = linkKeyPrefixMatches[0];
      var formatterName = linkKeyPrefixMatches[1];

    // Remove the leading @:, @.case: and the brackets
    var linkPlaceholder = link.replace(linkPrefix, '').replace(bracketsMatcher, '');

    if (visitedLinkStack.includes(linkPlaceholder)) {
      if (true) {
        warn(("Circular reference found. \"" + link + "\" is already visited in the chain of " + (visitedLinkStack.reverse().join(' <- '))));
      }
      return ret
    }
    visitedLinkStack.push(linkPlaceholder);

    // Translate the link
    var translated = this._interpolate(
      locale, message, linkPlaceholder, host,
      interpolateMode === 'raw' ? 'string' : interpolateMode,
      interpolateMode === 'raw' ? undefined : values,
      visitedLinkStack
    );

    if (this._isFallbackRoot(translated)) {
      if ( true && !this._isSilentTranslationWarn(linkPlaceholder)) {
        warn(("Fall back to translate the link placeholder '" + linkPlaceholder + "' with root locale."));
      }
      /* istanbul ignore if */
      if (!this._root) { throw Error('unexpected error') }
      var root = this._root.$i18n;
      translated = root._translate(
        root._getMessages(), root.locale, root.fallbackLocale,
        linkPlaceholder, host, interpolateMode, values
      );
    }
    translated = this._warnDefault(
      locale, linkPlaceholder, translated, host,
      Array.isArray(values) ? values : [values]
    );

    if (this._modifiers.hasOwnProperty(formatterName)) {
      translated = this._modifiers[formatterName](translated);
    } else if (defaultModifiers.hasOwnProperty(formatterName)) {
      translated = defaultModifiers[formatterName](translated);
    }

    visitedLinkStack.pop();

    // Replace the link with the translated
    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret
};

VueI18n.prototype._render = function _render (message, interpolateMode, values, path) {
  var ret = this._formatter.interpolate(message, values, path);

  // If the custom formatter refuses to work - apply the default one
  if (!ret) {
    ret = defaultFormatter.interpolate(message, values, path);
  }

  // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
  return interpolateMode === 'string' ? ret.join('') : ret
};

VueI18n.prototype._translate = function _translate (
  messages,
  locale,
  fallback,
  key,
  host,
  interpolateMode,
  args
) {
  var res =
    this._interpolate(locale, messages[locale], key, host, interpolateMode, args, [key]);
  if (!isNull(res)) { return res }

  res = this._interpolate(fallback, messages[fallback], key, host, interpolateMode, args, [key]);
  if (!isNull(res)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to translate the keypath '" + key + "' with '" + fallback + "' locale."));
    }
    return res
  } else {
    return null
  }
};

VueI18n.prototype._t = function _t (key, _locale, messages, host) {
    var ref;

    var values = [], len = arguments.length - 4;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 4 ];
  if (!key) { return '' }

  var parsedArgs = parseArgs.apply(void 0, values);
  var locale = parsedArgs.locale || _locale;

  var ret = this._translate(
    messages, locale, this.fallbackLocale, key,
    host, 'string', parsedArgs.params
  );
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to translate the keypath '" + key + "' with root locale."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return (ref = this._root).$t.apply(ref, [ key ].concat( values ))
  } else {
    return this._warnDefault(locale, key, ret, host, values)
  }
};

VueI18n.prototype.t = function t (key) {
    var ref;

    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];
  return (ref = this)._t.apply(ref, [ key, this.locale, this._getMessages(), null ].concat( values ))
};

VueI18n.prototype._i = function _i (key, locale, messages, host, values) {
  var ret =
    this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(("Fall back to interpolate the keypath '" + key + "' with root locale."));
    }
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.i(key, locale, values)
  } else {
    return this._warnDefault(locale, key, ret, host, [values])
  }
};

VueI18n.prototype.i = function i (key, locale, values) {
  /* istanbul ignore if */
  if (!key) { return '' }

  if (typeof locale !== 'string') {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values)
};

VueI18n.prototype._tc = function _tc (
  key,
  _locale,
  messages,
  host,
  choice
) {
    var ref;

    var values = [], len = arguments.length - 5;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 5 ];
  if (!key) { return '' }
  if (choice === undefined) {
    choice = 1;
  }

  var predefined = { 'count': choice, 'n': choice };
  var parsedArgs = parseArgs.apply(void 0, values);
  parsedArgs.params = Object.assign(predefined, parsedArgs.params);
  values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
  return this.fetchChoice((ref = this)._t.apply(ref, [ key, _locale, messages, host ].concat( values )), choice)
};

VueI18n.prototype.fetchChoice = function fetchChoice (message, choice) {
  /* istanbul ignore if */
  if (!message && typeof message !== 'string') { return null }
  var choices = message.split('|');

  choice = this.getChoiceIndex(choice, choices.length);
  if (!choices[choice]) { return message }
  return choices[choice].trim()
};

/**
 * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
 * @param choicesLength {number} an overall amount of available choices
 * @returns a final choice index
*/
VueI18n.prototype.getChoiceIndex = function getChoiceIndex (choice, choicesLength) {
  // Default (old) getChoiceIndex implementation - english-compatible
  var defaultImpl = function (_choice, _choicesLength) {
    _choice = Math.abs(_choice);

    if (_choicesLength === 2) {
      return _choice
        ? _choice > 1
          ? 1
          : 0
        : 1
    }

    return _choice ? Math.min(_choice, 2) : 0
  };

  if (this.locale in this.pluralizationRules) {
    return this.pluralizationRules[this.locale].apply(this, [choice, choicesLength])
  } else {
    return defaultImpl(choice, choicesLength)
  }
};

VueI18n.prototype.tc = function tc (key, choice) {
    var ref;

    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];
  return (ref = this)._tc.apply(ref, [ key, this.locale, this._getMessages(), null, choice ].concat( values ))
};

VueI18n.prototype._te = function _te (key, locale, messages) {
    var args = [], len = arguments.length - 3;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 3 ];

  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key)
};

VueI18n.prototype.te = function te (key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale)
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage (locale) {
  return looseClone(this._vm.messages[locale] || {})
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
    if (this._warnHtmlInMessage === 'error') { return }
  }
  this._vm.$set(this._vm.messages, locale, message);
};

VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
    if (this._warnHtmlInMessage === 'error') { return }
  }
  this._vm.$set(this._vm.messages, locale, merge({}, this._vm.messages[locale] || {}, message));
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat (locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {})
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime (
  value,
  locale,
  fallback,
  dateTimeFormats,
  key
) {
  var _locale = locale;
  var formats = dateTimeFormats[_locale];

  // fallback locale
  if (isNull(formats) || isNull(formats[key])) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to '" + fallback + "' datetime formats from '" + locale + "' datetime formats."));
    }
    _locale = fallback;
    formats = dateTimeFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._dateTimeFormatters[id];
    if (!formatter) {
      formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
    }
    return formatter.format(value)
  }
};

VueI18n.prototype._d = function _d (value, locale, key) {
  /* istanbul ignore if */
  if ( true && !VueI18n.availabilities.dateTimeFormat) {
    warn('Cannot format a Date value due to not supported Intl.DateTimeFormat.');
    return ''
  }

  if (!key) {
    return new Intl.DateTimeFormat(locale).format(value)
  }

  var ret =
    this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to datetime localization of root: key '" + key + "'."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.d(value, key, locale)
  } else {
    return ret || ''
  }
};

VueI18n.prototype.d = function d (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }
    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._d(value, locale, key)
};

VueI18n.prototype.getNumberFormat = function getNumberFormat (locale) {
  return looseClone(this._vm.numberFormats[locale] || {})
};

VueI18n.prototype.setNumberFormat = function setNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));
};

VueI18n.prototype._getNumberFormatter = function _getNumberFormatter (
  value,
  locale,
  fallback,
  numberFormats,
  key,
  options
) {
  var _locale = locale;
  var formats = numberFormats[_locale];

  // fallback locale
  if (isNull(formats) || isNull(formats[key])) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to '" + fallback + "' number formats from '" + locale + "' number formats."));
    }
    _locale = fallback;
    formats = numberFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      // If options specified - create one time number formatter
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];
      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }
    return formatter
  }
};

VueI18n.prototype._n = function _n (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format a Number value due to not supported Intl.NumberFormat.');
    }
    return ''
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.format(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.format(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to number localization of root: key '" + key + "'."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.n(value, Object.assign({}, { key: key, locale: locale }, options))
  } else {
    return ret || ''
  }
};

VueI18n.prototype.n = function n (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }

      // Filter out number format options only
      options = Object.keys(args[0]).reduce(function (acc, key) {
          var obj;

        if (numberFormatKeys.includes(key)) {
          return Object.assign({}, acc, ( obj = {}, obj[key] = args[0][key], obj ))
        }
        return acc
      }, null);
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }
    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._n(value, locale, key, options)
};

VueI18n.prototype._ntp = function _ntp (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format to parts a Number value due to not supported Intl.NumberFormat.');
    }
    return []
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.formatToParts(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.formatToParts(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(("Fall back to format number to parts of root: key '" + key + "' ."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n._ntp(value, locale, key, options)
  } else {
    return ret || []
  }
};

Object.defineProperties( VueI18n.prototype, prototypeAccessors );

var availabilities;
// $FlowFixMe
Object.defineProperty(VueI18n, 'availabilities', {
  get: function get () {
    if (!availabilities) {
      var intlDefined = typeof Intl !== 'undefined';
      availabilities = {
        dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
        numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
      };
    }

    return availabilities
  }
});

VueI18n.install = install;
VueI18n.version = '8.15.3';

/* harmony default export */ __webpack_exports__["default"] = (VueI18n);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/apps/Register.vue?vue&type=template&id=3e41c0fe&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/apps/Register.vue?vue&type=template&id=3e41c0fe& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-app",
    { attrs: { curentSystem: "Регистрация", dark: "" } },
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "fill-height": "" } },
        [
          _c(
            "v-layout",
            { attrs: { "align-center": "", "justify-center": "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "", sm8: "", md4: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "elevation-12" },
                    [
                      _c(
                        "v-toolbar",
                        { staticClass: "primary" },
                        [
                          _c("v-toolbar-title", [
                            _vm._v("Регистрация нового пользователя")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-form",
                            {
                              ref: "form",
                              model: {
                                value: _vm.valid,
                                callback: function($$v) {
                                  _vm.valid = $$v
                                },
                                expression: "valid"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  name: "Name",
                                  "prepend-icon": "star_border",
                                  label: "Имя",
                                  rules: [
                                    _vm.fieldRules.req,
                                    _vm.fieldRules.min
                                  ],
                                  type: "text"
                                },
                                on: {
                                  keyup: function($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.submit($event)
                                  }
                                },
                                model: {
                                  value: _vm.name,
                                  callback: function($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  name: "Login",
                                  "prepend-icon": "person",
                                  label: "Логин",
                                  rules: [
                                    _vm.fieldRules.req,
                                    _vm.fieldRules.min
                                  ],
                                  type: "text"
                                },
                                on: {
                                  keyup: function($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.submit($event)
                                  }
                                },
                                model: {
                                  value: _vm.login,
                                  callback: function($$v) {
                                    _vm.login = $$v
                                  },
                                  expression: "login"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  name: "Password",
                                  "prepend-icon": "lock",
                                  label: "Пароль",
                                  rules: [
                                    _vm.fieldRules.req,
                                    _vm.fieldRules.min
                                  ],
                                  id: "password",
                                  type: "password"
                                },
                                on: {
                                  keyup: function($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.submit($event)
                                  }
                                },
                                model: {
                                  value: _vm.password,
                                  callback: function($$v) {
                                    _vm.password = $$v
                                  },
                                  expression: "password"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  name: "passwordConfirmation",
                                  "prepend-icon": "lock",
                                  label: "Подтверждение",
                                  rules: [
                                    _vm.fieldRules.req,
                                    _vm.fieldRules.passMatch
                                  ],
                                  id: "passwordConfirmation",
                                  type: "password"
                                },
                                on: {
                                  keyup: function($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.submit($event)
                                  }
                                },
                                model: {
                                  value: _vm.passwordConfirmation,
                                  callback: function($$v) {
                                    _vm.passwordConfirmation = $$v
                                  },
                                  expression: "passwordConfirmation"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        {
                          attrs: {
                            row: "",
                            "justify-center": "",
                            color: "primary"
                          }
                        },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs12: "" } },
                            [
                              _c("v-toolbar", {
                                attrs: { dense: "", color: "primary" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "header",
                                    fn: function() {
                                      return [
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "accent",
                                            attrs: { disabled: !_vm.valid },
                                            on: { click: _vm.submit }
                                          },
                                          [
                                            _c("v-icon", [_vm._v("input")]),
                                            _vm._v(" Зарегистрироваться")
                                          ],
                                          1
                                        )
                                      ]
                                    },
                                    proxy: true
                                  }
                                ])
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-app.vue?vue&type=template&id=39abbab0&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-app.vue?vue&type=template&id=39abbab0& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _vm.needHeader
        ? _c("c-head", {
            ref: "head",
            attrs: {
              app: "",
              curentSystem: _vm.curentSystem,
              dark: _vm.isPerefThemeDark,
              light: _vm.isPerefThemeLight,
              showLeft: _vm.panelLeftDrawer,
              showRight: _vm.panelRightDrawer,
              needLabel: _vm.needLabel,
              fixed: _vm.headFixed,
              headHideOnScroll: _vm.headHideOnScroll,
              headElevateOnScroll: _vm.headElevateOnScroll
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.panelLeftDrawer
        ? _c(
            "v-navigation-drawer",
            {
              class: _vm.panelLeft.class,
              attrs: {
                app: "",
                dark: _vm.isPerefThemeDark,
                light: _vm.isPerefThemeLight,
                left: "",
                touchless: "",
                width: _vm.panelLeftWidth
              },
              model: {
                value: _vm.panelLeftShowen,
                callback: function($$v) {
                  _vm.panelLeftShowen = $$v
                },
                expression: "panelLeftShowen"
              }
            },
            [_vm._t("panelLeft")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.panelRightDrawer
        ? _c(
            "v-navigation-drawer",
            {
              class: _vm.panelRight.class,
              attrs: {
                app: "",
                dark: _vm.isPerefThemeDark,
                light: _vm.isPerefThemeLight,
                right: "",
                touchless: "",
                width: _vm.panelRightWidth
              },
              model: {
                value: _vm.panelRightShowen,
                callback: function($$v) {
                  _vm.panelRightShowen = $$v
                },
                expression: "panelRightShowen"
              }
            },
            [_vm._t("panelRight")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-content",
        { ref: "content", style: _vm.getContentStyles },
        [
          _c("div", { ref: "scrollArea" }),
          _vm._v(" "),
          !_vm.mainLayoutConfig
            ? _vm._t("default")
            : _c("c-layouts", {
                attrs: { name: _vm.layoutName, size: _vm.$vuetify.breakpoint },
                scopedSlots: _vm._u(
                  [
                    _vm._l(_vm.slotNames, function(slotName, index) {
                      return {
                        key: slotName,
                        fn: function() {
                          return [
                            _c("div", { key: index }, [_vm._t(slotName)], 2)
                          ]
                        },
                        proxy: true
                      }
                    })
                  ],
                  null,
                  true
                )
              })
        ],
        2
      ),
      _vm._v(" "),
      _vm.needFooter
        ? _c("c-footer", {
            attrs: { dark: _vm.isPerefThemeDark, light: _vm.isPerefThemeLight }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("c-msg-list"),
      _vm._v(" "),
      _vm._t("dialogs"),
      _vm._v(" "),
      _vm.dialogIsShowen(_vm.dialogIdOpened)
        ? _c(_vm.dialogModule, {
            tag: "component",
            attrs: { dialogId: _vm.dialogIdOpened }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-footer.vue?vue&type=template&id=5a4bf4dc&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-footer.vue?vue&type=template&id=5a4bf4dc& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-footer",
    {
      attrs: {
        padless: "",
        fixed: _vm.fixed,
        app: _vm.fixed,
        dark: _vm.dark,
        light: _vm.light
      }
    },
    [
      _c("span", [
        _vm._v(
          "   " +
            _vm._s(_vm.$vuetify.lang.t("$vuetify.texts.simple.labels.os.name"))
        )
      ]),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c("span", [
        _vm._v(
          "©  " +
            _vm._s(
              _vm.$vuetify.lang.t("$vuetify.texts.simple.labels.os.year")
            ) +
            "   "
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-head.vue?vue&type=template&id=764ed8e1&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-head.vue?vue&type=template&id=764ed8e1& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app-bar",
    {
      staticClass: " transparent  elevation-0 mt-0 no-clcik",
      attrs: {
        app: _vm.fixed,
        fixed: _vm.fixed,
        absolute: !_vm.fixed,
        dense: "",
        hideOnScroll: _vm.headHideOnScroll,
        elevateOnScroll: _vm.headElevateOnScroll
      }
    },
    [
      _vm.showLeft
        ? _c("v-app-bar-nav-icon", {
            staticClass: "get-clcik",
            attrs: { color: "accent" },
            on: {
              click: function($event) {
                return _vm.toolbarClicked("Left")
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.$vuetify.breakpoint.name != "xs" && _vm.needLabel
        ? _c("v-toolbar-title", [_vm._v(_vm._s(_vm.curentSystem))])
        : _vm._e(),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _vm.profileUserName() != "" && _vm.withSearch
        ? _c(
            "v-icon",
            {
              staticClass: "get-clcik",
              attrs: { color: "accent" },
              on: { click: _vm.searchClick }
            },
            [_vm._v("search")]
          )
        : _vm._e(),
      _vm._v("\n\t       \n\t"),
      _c("c-profile", { staticClass: "get-clcik" }),
      _vm._v(" "),
      _vm.showRight
        ? _c("v-app-bar-nav-icon", {
            staticClass: "get-clcik",
            attrs: { color: "accent" },
            on: {
              click: function($event) {
                return _vm.toolbarClicked("Right")
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-msg-list.vue?vue&type=template&id=2fdc8ceb&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-msg-list.vue?vue&type=template&id=2fdc8ceb& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { style: _vm.sizeTotal, attrs: { id: "block_message" } },
    [
      _vm._l(_vm.msgAllMsg, function(msg) {
        return _c("c-msg", {
          key: msg.id,
          attrs: { msg: msg },
          on: { traceDialogShow: _vm.traceDialogShow }
        })
      }),
      _vm._v(" "),
      _vm.dialogIsShowen(_vm.dialogIdOpened)
        ? _c(_vm.dialogModule, {
            tag: "component",
            attrs: { dialogId: _vm.dialogIdOpened }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-msg.vue?vue&type=template&id=8dd38fe0&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-msg.vue?vue&type=template&id=8dd38fe0& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-slide-x-transition", [
    _c(
      "div",
      { on: { click: _vm.alertClcik } },
      [
        _c(
          "v-alert",
          {
            attrs: { border: "left", type: _vm.msg.type },
            scopedSlots: _vm._u([
              {
                key: "prepend",
                fn: function() {
                  return [_vm._v("   ")]
                },
                proxy: true
              }
            ]),
            model: {
              value: _vm.snackbar,
              callback: function($$v) {
                _vm.snackbar = $$v
              },
              expression: "snackbar"
            }
          },
          [
            _vm._v(" "),
            _c(
              "v-card",
              { attrs: { light: "" } },
              [
                _c(
                  "v-card-title",
                  { attrs: { dense: "" } },
                  [
                    _c("v-icon", [_vm._v(_vm._s(_vm.icons[_vm.msg.type]))]),
                    _vm._v(
                      " " +
                        _vm._s(_vm.msg.title) +
                        "     \t\t\t\t\t\t \n       \t\t\t\t"
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-card-subtitle", { attrs: { dense: "" } }, [
                  _vm._v("   " + _vm._s(_vm.msg.text) + "    ")
                ]),
                _vm._v(" "),
                _c("v-divider"),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  [
                    _vm.traceAble
                      ? _c(
                          "v-btn",
                          {
                            staticClass: "accent noMarginLeft",
                            attrs: { small: "" },
                            nativeOn: {
                              click: function($event) {
                                return _vm.$emit("traceDialogShow", _vm.msg.id)
                              }
                            }
                          },
                          [
                            _c("v-icon", [_vm._v("description")]),
                            _vm._v(
                              "  " +
                                _vm._s(
                                  _vm.$vuetify.lang.t(
                                    "$vuetify.texts.simple.labels.detail"
                                  )
                                ) +
                                " \n\t\t\t\t\t\t"
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "accent noMarginLeft",
                        attrs: { small: "" },
                        nativeOn: {
                          click: function($event) {
                            _vm.snackbar = false
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t " +
                            _vm._s(
                              _vm.$vuetify.lang.t(
                                "$vuetify.texts.simple.actions.close"
                              )
                            ) +
                            "  \n\t\t\t\t\t\t\t"
                        ),
                        _vm.timerId > 0
                          ? _c(
                              "v-progress-circular",
                              {
                                attrs: {
                                  rotate: -90,
                                  size: 23,
                                  width: 3,
                                  value:
                                    100 -
                                    (_vm.timerVal / _vm.maxTimerVal) * 100,
                                  dark: ""
                                }
                              },
                              [
                                _vm._v(
                                  " " + _vm._s((_vm.timerVal / 2) | 0) + "   "
                                )
                              ]
                            )
                          : _c("v-icon", [_vm._v("close")])
                      ],
                      1
                    )
                  ],
                  1
                )
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-profile.vue?vue&type=template&id=8a209a90&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/c-profile.vue?vue&type=template&id=8a209a90& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.profileUserName() == ""
    ? _c(
        "v-btn",
        {
          staticClass: "accent",
          on: {
            click: function($event) {
              return _vm.$root.$emit("openAuthDialog")
            }
          }
        },
        [
          _vm._v(
            " \t " +
              _vm._s(_vm.$vuetify.lang.t("$vuetify.texts.simple.labels.auth")) +
              " \t\t"
          ),
          _c("v-icon", [_vm._v("account_circle")])
        ],
        1
      )
    : _c(
        "v-btn",
        {
          staticClass: "accent",
          on: {
            click: function($event) {
              return _vm.$root.$emit("systemLogout")
            }
          }
        },
        [
          _vm._v(
            " \t " + _vm._s(_vm.profileUserName()) + " \t\t\t\t\t\t\t\t\t\t\t"
          ),
          _c("v-icon", [_vm._v("close")])
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-the-mask/dist/vue-the-mask.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-the-mask/dist/vue-the-mask.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t():undefined})(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=10)}([function(e,t){e.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}}},function(e,t,n){"use strict";function r(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var a=n(2),o=n(0),i=n.n(o);t.a=function(e,t){var o=t.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==e.tagName.toLocaleUpperCase()){var u=e.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);e=u[0]}e.oninput=function(t){if(t.isTrusted){var i=e.selectionEnd,u=e.value[i-1];for(e.value=n.i(a.a)(e.value,o.mask,!0,o.tokens);i<e.value.length&&e.value.charAt(i-1)!==u;)i++;e===document.activeElement&&(e.setSelectionRange(i,i),setTimeout(function(){e.setSelectionRange(i,i)},0)),e.dispatchEvent(r("input"))}};var s=n.i(a.a)(e.value,o.mask,!0,o.tokens);s!==e.value&&(e.value=s,e.dispatchEvent(r("input")))}},function(e,t,n){"use strict";var r=n(6),a=n(5);t.a=function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(t)?n.i(a.a)(r.a,t,i)(e,t,o,i):n.i(r.a)(e,t,o,i)}},function(e,t,n){"use strict";function r(e){e.component(s.a.name,s.a),e.directive("mask",i.a)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(1),u=n(7),s=n.n(u);n.d(t,"TheMask",function(){return s.a}),n.d(t,"mask",function(){return i.a}),n.d(t,"tokens",function(){return o.a}),n.d(t,"version",function(){return c});var c="0.11.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),i=n(2);t.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e;var e=n.i(i.a)(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}}},function(e,t,n){"use strict";function r(e,t,n){return t=t.sort(function(e,t){return e.length-t.length}),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<t.length;){var u=t[i];i++;var s=t[i];if(!(s&&e(r,s,!0,n).length>u.length))return e(r,u,o,n)}return""}}t.a=r},function(e,t,n){"use strict";function r(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];e=e||"",t=t||"";for(var a=0,o=0,i="";a<t.length&&o<e.length;){var u=t[a],s=r[u],c=e[o];s&&!s.escape?(s.pattern.test(c)&&(i+=s.transform?s.transform(c):c,a++),o++):(s&&s.escape&&(a++,u=t[a]),n&&(i+=u),c===u&&o++,a++)}for(var f="";a<t.length&&n;){var u=t[a];if(r[u]){f="";break}f+=u,a++}return i+f}t.a=r},function(e,t,n){var r=n(8)(n(4),n(9),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var a,o=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(a=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t}})}return{esModule:a,exports:o,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])});

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/runtime/installComponents.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/runtime/installComponents.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function installComponents (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;


/***/ }),

/***/ "./resources/assets/js/apps/Register.vue":
/*!***********************************************!*\
  !*** ./resources/assets/js/apps/Register.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_3e41c0fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=3e41c0fe& */ "./resources/assets/js/apps/Register.vue?vue&type=template&id=3e41c0fe&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/assets/js/apps/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_3e41c0fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_3e41c0fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VFlex"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VLayout"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_10__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_10__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/apps/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/apps/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/assets/js/apps/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/apps/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/apps/Register.vue?vue&type=template&id=3e41c0fe&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/apps/Register.vue?vue&type=template&id=3e41c0fe& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3e41c0fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=3e41c0fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/apps/Register.vue?vue&type=template&id=3e41c0fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3e41c0fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3e41c0fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/c-app.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/components/c-app.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _c_app_vue_vue_type_template_id_39abbab0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c-app.vue?vue&type=template&id=39abbab0& */ "./resources/assets/js/components/c-app.vue?vue&type=template&id=39abbab0&");
/* harmony import */ var _c_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c-app.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/c-app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VContent */ "./node_modules/vuetify/lib/components/VContent/index.js");
/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ "./node_modules/vuetify/lib/components/VNavigationDrawer/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _c_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _c_app_vue_vue_type_template_id_39abbab0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _c_app_vue_vue_type_template_id_39abbab0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VContent: vuetify_lib_components_VContent__WEBPACK_IMPORTED_MODULE_5__["VContent"],VNavigationDrawer: vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_6__["VNavigationDrawer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/c-app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/c-app.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/c-app.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/c-app.vue?vue&type=template&id=39abbab0&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/c-app.vue?vue&type=template&id=39abbab0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_app_vue_vue_type_template_id_39abbab0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-app.vue?vue&type=template&id=39abbab0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-app.vue?vue&type=template&id=39abbab0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_app_vue_vue_type_template_id_39abbab0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_app_vue_vue_type_template_id_39abbab0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/c-footer.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/components/c-footer.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _c_footer_vue_vue_type_template_id_5a4bf4dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c-footer.vue?vue&type=template&id=5a4bf4dc& */ "./resources/assets/js/components/c-footer.vue?vue&type=template&id=5a4bf4dc&");
/* harmony import */ var _c_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c-footer.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/c-footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VFooter */ "./node_modules/vuetify/lib/components/VFooter/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _c_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _c_footer_vue_vue_type_template_id_5a4bf4dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _c_footer_vue_vue_type_template_id_5a4bf4dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VFooter: vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_4__["VFooter"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/c-footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/c-footer.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/c-footer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/c-footer.vue?vue&type=template&id=5a4bf4dc&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/c-footer.vue?vue&type=template&id=5a4bf4dc& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_footer_vue_vue_type_template_id_5a4bf4dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-footer.vue?vue&type=template&id=5a4bf4dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-footer.vue?vue&type=template&id=5a4bf4dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_footer_vue_vue_type_template_id_5a4bf4dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_footer_vue_vue_type_template_id_5a4bf4dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/c-head.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/components/c-head.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _c_head_vue_vue_type_template_id_764ed8e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c-head.vue?vue&type=template&id=764ed8e1& */ "./resources/assets/js/components/c-head.vue?vue&type=template&id=764ed8e1&");
/* harmony import */ var _c_head_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c-head.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/c-head.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _c_head_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c-head.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/c-head.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ "./node_modules/vuetify/lib/components/VAppBar/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _c_head_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _c_head_vue_vue_type_template_id_764ed8e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _c_head_vue_vue_type_template_id_764ed8e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VAppBar: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__["VAppBar"],VAppBarNavIcon: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__["VAppBarNavIcon"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_8__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/c-head.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/c-head.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/c-head.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_head_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-head.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-head.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_head_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/c-head.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/c-head.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_head_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-head.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-head.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_head_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_head_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_head_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_head_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_head_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/c-head.vue?vue&type=template&id=764ed8e1&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/c-head.vue?vue&type=template&id=764ed8e1& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_head_vue_vue_type_template_id_764ed8e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-head.vue?vue&type=template&id=764ed8e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-head.vue?vue&type=template&id=764ed8e1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_head_vue_vue_type_template_id_764ed8e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_head_vue_vue_type_template_id_764ed8e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/c-msg-list.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/c-msg-list.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _c_msg_list_vue_vue_type_template_id_2fdc8ceb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c-msg-list.vue?vue&type=template&id=2fdc8ceb& */ "./resources/assets/js/components/c-msg-list.vue?vue&type=template&id=2fdc8ceb&");
/* harmony import */ var _c_msg_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c-msg-list.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/c-msg-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _c_msg_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c-msg-list.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/c-msg-list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _c_msg_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _c_msg_list_vue_vue_type_template_id_2fdc8ceb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _c_msg_list_vue_vue_type_template_id_2fdc8ceb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/c-msg-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/c-msg-list.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/c-msg-list.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-msg-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-msg-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/c-msg-list.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/c-msg-list.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-msg-list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-msg-list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/c-msg-list.vue?vue&type=template&id=2fdc8ceb&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/c-msg-list.vue?vue&type=template&id=2fdc8ceb& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_list_vue_vue_type_template_id_2fdc8ceb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-msg-list.vue?vue&type=template&id=2fdc8ceb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-msg-list.vue?vue&type=template&id=2fdc8ceb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_list_vue_vue_type_template_id_2fdc8ceb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_list_vue_vue_type_template_id_2fdc8ceb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/c-msg.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/components/c-msg.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _c_msg_vue_vue_type_template_id_8dd38fe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c-msg.vue?vue&type=template&id=8dd38fe0& */ "./resources/assets/js/components/c-msg.vue?vue&type=template&id=8dd38fe0&");
/* harmony import */ var _c_msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c-msg.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/c-msg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _c_msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _c_msg_vue_vue_type_template_id_8dd38fe0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _c_msg_vue_vue_type_template_id_8dd38fe0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardSubtitle"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_9__["VProgressCircular"],VSlideXTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_10__["VSlideXTransition"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/c-msg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/c-msg.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/c-msg.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-msg.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-msg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/c-msg.vue?vue&type=template&id=8dd38fe0&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/c-msg.vue?vue&type=template&id=8dd38fe0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_vue_vue_type_template_id_8dd38fe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-msg.vue?vue&type=template&id=8dd38fe0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-msg.vue?vue&type=template&id=8dd38fe0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_vue_vue_type_template_id_8dd38fe0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_msg_vue_vue_type_template_id_8dd38fe0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/c-profile.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/c-profile.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _c_profile_vue_vue_type_template_id_8a209a90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c-profile.vue?vue&type=template&id=8a209a90& */ "./resources/assets/js/components/c-profile.vue?vue&type=template&id=8a209a90&");
/* harmony import */ var _c_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c-profile.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/c-profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _c_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _c_profile_vue_vue_type_template_id_8a209a90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _c_profile_vue_vue_type_template_id_8a209a90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["VIcon"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/c-profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/c-profile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/c-profile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/c-profile.vue?vue&type=template&id=8a209a90&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/c-profile.vue?vue&type=template&id=8a209a90& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_profile_vue_vue_type_template_id_8a209a90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./c-profile.vue?vue&type=template&id=8a209a90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/c-profile.vue?vue&type=template&id=8a209a90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_profile_vue_vue_type_template_id_8a209a90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_profile_vue_vue_type_template_id_8a209a90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/helpers/bootstrap.js":
/*!**************************************************!*\
  !*** ./resources/assets/js/helpers/bootstrap.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.min.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");

window.Vue.use(vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]);


window.Vue.use(vue_axios__WEBPACK_IMPORTED_MODULE_1___default.a, axios__WEBPACK_IMPORTED_MODULE_2___default.a);
window._bus = {
  axios: axios__WEBPACK_IMPORTED_MODULE_2___default.a,
  bus: new window.Vue()
};

window.Vue.use(vue_the_mask__WEBPACK_IMPORTED_MODULE_3___default.a);
window.io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");

window.echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_4__["default"]({
  broadcaster: 'socket.io',
  host: window.location.hostname + ':6001'
});

/***/ }),

/***/ "./resources/assets/js/helpers/vuetify.js":
/*!************************************************!*\
  !*** ./resources/assets/js/helpers/vuetify.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js");
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_design_icons_iconfont_dist_material_design_icons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-design-icons-iconfont/dist/material-design-icons.css */ "./node_modules/material-design-icons-iconfont/dist/material-design-icons.css");
/* harmony import */ var material_design_icons_iconfont_dist_material_design_icons_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_iconfont_dist_material_design_icons_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n_russian_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n/russian.js */ "./resources/assets/js/i18n/russian.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //вьютифи птается влезть во вью при  импорте. если она это сделает, то она будет создана с дефолтными настройками.




vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_i18n__WEBPACK_IMPORTED_MODULE_2__["default"]);

window.i18nDic = window.i18nDic || {
  ru: {},
  en: {}
};
var i18n = new vue_i18n__WEBPACK_IMPORTED_MODULE_2__["default"]({
  locale: window.systemLanguage,
  messages: {
    ru: _objectSpread({}, _i18n_russian_js__WEBPACK_IMPORTED_MODULE_5__["default"], {}, window.i18nDic.ru)
  }
});
/* harmony default export */ __webpack_exports__["default"] = (new vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["default"]({
  theme: appTheme,
  icons: {
    iconfont: 'md'
  },
  lang: {
    t: function t(key) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return i18n.t(key, params);
    }
  }
}));

/***/ }),

/***/ "./resources/assets/js/i18n/russian.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/i18n/russian.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  $vuetify: {
    close: 'Закрыть',
    dataIterator: {
      pageText: '{0}-{1} из {2}',
      noResultsText: 'Совпадений не найдено',
      loadingText: 'Загрузка объектов...'
    },
    dataTable: {
      itemsPerPageText: 'Строк на страницу:',
      ariaLabel: {
        sortDescending: ': Сортировка по убыванию. Клик для сброса сортировки.',
        sortAscending: ': Сортировка по возрастанию. Клик для сортировки по убыванию.',
        sortNone: ': Не отсортировано. Клик для сортировки по возрастанию.'
      },
      sortBy: 'Сортировать по'
    },
    dataFooter: {
      pageText: '{0}-{1} из {2}',
      itemsPerPageText: 'Строк на страницу:',
      itemsPerPageAll: 'Все',
      nextPage: 'Следующая страница',
      prevPage: 'Предыдущая страница',
      firstPage: 'Перая страница',
      lastPage: 'Последняя страница'
    },
    datePicker: {
      itemsSelected: '{0} выбрано'
    },
    noDataText: 'Нет данных',
    carousel: {
      prev: 'Предыдущее отображение',
      next: 'Следующее отображение'
    },
    calendar: {
      moreEvents: '{0} еще'
    },
    dataLoadingText: 'Идет загрузка данных',
    texts: {
      //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      main: {
        systems: {
          objects: {
            name: 'Объекты',
            title: 'АРМы работы с объектами системы'
          }
        },
        links: {
          types: {
            ARM: 'АРМ'
          },
          objWork: {
            name: 'Работа с объектами',
            title: 'Работы с деревом объектов!'
          },
          obgView: {
            name: 'Просмотр объектов',
            title: 'Просмотр созданных в системе объектов!'
          }
        }
      },
      //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      modals: {
        auth: {
          title: 'Авторизация'
        },
        treeAdd: {
          title: 'Параметры объекта'
        },
        valSelect: {
          title: 'Выбор значения'
        },
        traceShow: {
          title: 'Трассировка'
        }
      },
      //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      simple: {
        actions: {
          add: 'Добавить',
          search: 'Поиск',
          close: 'Закрыть',
          save: 'Сохранить',
          cancel: 'Отмена',
          accept: 'Принять',
          auth: 'Авторизоваться',
          authEnd: 'Завершить сеанс',
          registration: 'Зарегистрироваться',
          chacngePass: 'Изменить пароль',
          logOut: 'Выйти',
          logIn: 'Войти'
        },
        labels: {
          filter: 'Фильтр',
          filters: 'Фильтры',
          loading: 'Загрузка...',
          guest: 'Гость',
          auth: 'Авторизация',
          detail: 'Описание',
          registration: 'Регистрация',
          os: {
            name: 'FF - Конструктор форм',
            year: '2018'
          },
          searchInFields: 'Искать по полям',
          personalAccount: 'Личный кабинет',
          numInOrder: '№ п/п',
          dateRangeSeparator: ' до '
        },
        msgs: {
          valMoreOrEq: 'Значение должно быть не меньше {0}!',
          valLessOrEq: 'Количество символов не должно превышать {0}!',
          fieldIsNecessary: 'Поле обязательное!',
          fieldMustUsed: 'Поле должно быть использовано!',
          authNeed: 'Необходимо авторизоваться!',
          defTextMes: 'Текст сообщения'
        }
      },
      //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      errors: {
        withOpenDialog: {
          title: 'Ошибка при открытии окна',
          text: 'Запрашиваемое окно не найдено!'
        },
        withAddNestElem: {
          title: 'Ошибка при добавлении элемента',
          text: 'Для добавления вложенного элемента, необходимо выбрать родительский элемент!'
        },
        incorrectValue: {
          title: 'Некорректное значение',
          text: 'Указано некорректное значение!'
        },
        notFullValue: {
          title: 'Ошибка при указании данных',
          text: 'Перед сохранением, укажите данные полностью!'
        },
        saveNoDate: {
          title: 'Ошибка при указании данных',
          text: 'Перед сохранением, укажите дату!'
        },
        traceNotFound: {
          title: 'Ошибка отображения трассировки',
          text: 'Трассировка не найдена!'
        },
        noLogOut: {
          title: 'Ошибка при завершении сеанса',
          text: 'Завершить сеанс не удалось!'
        },
        noSendAddress: {
          title: 'Ошибка отправки данных',
          text: 'Неуказанн адрес для отправки!'
        },
        requestRefused: {
          title: 'Ошибка отправки данных',
          text: 'Отправленные данные были отвергнуты!'
        },
        requestFaild: {
          title: 'Ошибка отправки данных',
          text: 'Отправить данные не удалось!'
        },
        noDialogOpen: {
          title: 'Ошибка при открытии окна',
          text: 'Идентификатор запрашиваемого окна не найден!'
        },
        noDialogInitId: {
          title: 'Ошибка инициализации окна',
          text: 'Не указан идентификатор окна'
        },
        withLogIn: {
          title: 'Ошибка авторизации',
          text: 'Указаны не корректные данные!'
        },
        withRegistration: {
          title: 'Ошибка регистрации',
          text: 'Указаны не корректные данные!'
        },
        withMailFormat: {
          title: 'Ошибка в электронном адресе',
          text: 'Некорректный формат адреса!'
        },
        withPasswordLen: {
          title: 'Ошибка в длине пароля',
          text: 'Длина пароля минимум 6 символов!'
        },
        withPasswordConf: {
          title: 'Ошибка в подтверждении пароля',
          text: 'Введенные пароли должны совпадать!'
        },
        onlyLetters: {
          title: 'Допускаются только буквы',
          text: 'Допускаются только буквы!'
        }
      },
      msgs: {
        loginSucsess: {
          title: 'Авторизация',
          text: 'Выполнен вход под пользователем {0}!'
        },
        logoutSucsess: {
          title: 'Авторизация',
          text: 'Пользователь завершил свой сеанс!'
        },
        saveDoing: {
          title: 'Сохранение данных',
          text: 'Данные успешно сохранены!'
        }
      } //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    }
  }
});

/***/ }),

/***/ "./resources/assets/js/main/Register.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/main/Register.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apps_Register_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apps/Register.vue */ "./resources/assets/js/apps/Register.vue");
/* harmony import */ var _helpers_vuetify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/vuetify */ "./resources/assets/js/helpers/vuetify.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _stores_s_msg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/s-msg */ "./resources/assets/js/stores/s-msg.js");
/* harmony import */ var _stores_s_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stores/s-profile */ "./resources/assets/js/stores/s-profile.js");
/* harmony import */ var _stores_s_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stores/s-dialog */ "./resources/assets/js/stores/s-dialog.js");
/* harmony import */ var _stores_s_param__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/s-param */ "./resources/assets/js/stores/s-param.js");
/* harmony import */ var _stores_s_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/s-layout */ "./resources/assets/js/stores/s-layout.js");


window.Vue = vue__WEBPACK_IMPORTED_MODULE_0___default.a;

__webpack_require__(/*! ../helpers/bootstrap */ "./resources/assets/js/helpers/bootstrap.js");








window.Vue.use(vuex__WEBPACK_IMPORTED_MODULE_3__["default"]);
var store = new vuex__WEBPACK_IMPORTED_MODULE_3__["default"].Store({
  modules: {
    msg: _stores_s_msg__WEBPACK_IMPORTED_MODULE_4__["default"],
    dialog: _stores_s_dialog__WEBPACK_IMPORTED_MODULE_6__["default"],
    profile: _stores_s_profile__WEBPACK_IMPORTED_MODULE_5__["default"],
    param: _stores_s_param__WEBPACK_IMPORTED_MODULE_7__["default"],
    layout: _stores_s_layout__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});
window._vue = new window.Vue({
  el: '#app',
  vuetify: _helpers_vuetify__WEBPACK_IMPORTED_MODULE_2__["default"],
  store: store,
  render: function render(h) {
    return h(_apps_Register_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
});
appThemeInit();

/***/ }),

/***/ "./resources/assets/js/mixins/x-auth.vue":
/*!***********************************************!*\
  !*** ./resources/assets/js/mixins/x-auth.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _x_auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x-auth.vue?vue&type=script&lang=js& */ "./resources/assets/js/mixins/x-auth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _x_auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/mixins/x-auth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/mixins/x-auth.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/assets/js/mixins/x-auth.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_x_auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./x-auth.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/mixins/x-auth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_x_auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/mixins/x-dialog.vue":
/*!*************************************************!*\
  !*** ./resources/assets/js/mixins/x-dialog.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _x_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x-dialog.vue?vue&type=script&lang=js& */ "./resources/assets/js/mixins/x-dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _x_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/mixins/x-dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/mixins/x-dialog.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/mixins/x-dialog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_x_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./x-dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/mixins/x-dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_x_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/mixins/x-store.vue":
/*!************************************************!*\
  !*** ./resources/assets/js/mixins/x-store.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _x_store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x-store.vue?vue&type=script&lang=js& */ "./resources/assets/js/mixins/x-store.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _x_store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/mixins/x-store.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/mixins/x-store.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/mixins/x-store.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_x_store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./x-store.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/mixins/x-store.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_x_store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/stores/s-dialog.js":
/*!************************************************!*\
  !*** ./resources/assets/js/stores/s-dialog.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    //= data
    dialogs: []
  },
  getters: {
    // computed properties
    getById: function getById(state) {
      return function (id) {
        return nvl(state.dialogs.find(function (dialog) {
          return dialog.config.id === id;
        }), 0);
      };
    },
    getByName: function getByName(state) {
      return function (name) {
        return nvl(state.dialogs.find(function (dialog) {
          return dialog.config.name === name;
        }), 0);
      };
    },
    getDilog: function getDilog(state, getters) {
      return function (_ref) {
        var id = _ref.id,
            name = _ref.name;
        return id > 0 ? getters.getById(id) : nvl(name) != '' ? getters.getByName(name) : null;
      };
    },
    getConfig: function getConfig(state, getters) {
      return function (id) {
        return nvl(getters.getById(id).config);
      };
    },
    getIsShow: function getIsShow(state, getters) {
      return function (id) {
        return nvl(getters.getById(id).isShow);
      };
    },
    getParams: function getParams(state, getters) {
      return function (id) {
        return nvl(getters.getById(id).params);
      };
    }
  },
  actions: {
    doInit: function () {
      var _doInit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2, _ref3) {
        var commit, getters, state, config, params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref2.commit, getters = _ref2.getters, state = _ref2.state;
                config = _ref3.config, params = _ref3.params;
                if (config == undefined || config.id == undefined) showError(getErrDesc('noDialogInitId'));

                if (!(getters.getById(config.id) != 0)) {
                  _context.next = 6;
                  break;
                }

                console.log('Диалог №' + config.id + ' уже зарегестрирован!');
                return _context.abrupt("return");

              case 6:
                config.persistent = config.persistent || true;
                commit('adding', {
                  config: config,
                  params: params
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function doInit(_x, _x2) {
        return _doInit.apply(this, arguments);
      }

      return doInit;
    }(),
    doShowChange: function () {
      var _doShowChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref4, _ref5) {
        var commit, getters, state, id, name, isShow, dialog;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref4.commit, getters = _ref4.getters, state = _ref4.state;
                id = _ref5.id, name = _ref5.name, isShow = _ref5.isShow;
                dialog = getters.getDilog({
                  id: id,
                  name: name
                });

                if (!(dialog == 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                commit('showSetting', {
                  dialog: dialog,
                  isShow: isShow
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function doShowChange(_x3, _x4) {
        return _doShowChange.apply(this, arguments);
      }

      return doShowChange;
    }(),
    doSetAllParams: function () {
      var _doSetAllParams = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref6, _ref7) {
        var commit, getters, state, id, name, params, dialog;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref6.commit, getters = _ref6.getters, state = _ref6.state;
                id = _ref7.id, name = _ref7.name, params = _ref7.params;
                dialog = getters.getDilog({
                  id: id,
                  name: name
                });

                if (!(dialog == 0)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                commit('allParamSetting', {
                  dialog: dialog,
                  params: params
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function doSetAllParams(_x5, _x6) {
        return _doSetAllParams.apply(this, arguments);
      }

      return doSetAllParams;
    }(),
    doSetAllParamsAndShow: function () {
      var _doSetAllParamsAndShow = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(_ref8, _ref9) {
        var dispatch, commit, getters, state, id, name, params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dispatch = _ref8.dispatch, commit = _ref8.commit, getters = _ref8.getters, state = _ref8.state;
                id = _ref9.id, name = _ref9.name, params = _ref9.params;
                _context4.next = 4;
                return dispatch('doSetAllParams', {
                  id: id,
                  name: name,
                  params: params
                });

              case 4:
                _context4.next = 6;
                return dispatch('doShowChange', {
                  id: id,
                  name: name,
                  isShow: true
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function doSetAllParamsAndShow(_x7, _x8) {
        return _doSetAllParamsAndShow.apply(this, arguments);
      }

      return doSetAllParamsAndShow;
    }(),
    doSetParamByName: function () {
      var _doSetParamByName = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(_ref10, _ref11) {
        var commit, getters, state, id, name, params, dialog, paramsName;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref10.commit, getters = _ref10.getters, state = _ref10.state;
                id = _ref11.id, name = _ref11.name, params = _ref11.params;
                dialog = getters.getDilog({
                  id: id,
                  name: name
                });

                if (!(dialog == 0)) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return");

              case 5:
                for (paramsName in params) {
                  commit('paramSetting', {
                    dialog: dialog,
                    paramsName: paramsName,
                    paramsVal: params[paramsName]
                  });
                }

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function doSetParamByName(_x9, _x10) {
        return _doSetParamByName.apply(this, arguments);
      }

      return doSetParamByName;
    }(),
    doSetParamByNameAndShow: function () {
      var _doSetParamByNameAndShow = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(_ref12, _ref13) {
        var dispatch, commit, getters, state, id, name, params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                dispatch = _ref12.dispatch, commit = _ref12.commit, getters = _ref12.getters, state = _ref12.state;
                id = _ref13.id, name = _ref13.name, params = _ref13.params;
                _context6.next = 4;
                return dispatch('doSetParamByName', {
                  id: id,
                  name: name,
                  params: params
                });

              case 4:
                _context6.next = 6;
                return dispatch('doShowChange', {
                  id: id,
                  name: name,
                  isShow: true
                });

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function doSetParamByNameAndShow(_x11, _x12) {
        return _doSetParamByNameAndShow.apply(this, arguments);
      }

      return doSetParamByNameAndShow;
    }()
  },
  mutations: {
    adding: function adding(state, _ref14) {
      var config = _ref14.config,
          params = _ref14.params;
      state.dialogs.push({
        config: config,
        params: params,
        isShow: false
      });
    },
    showSetting: function showSetting(state, _ref15) {
      var dialog = _ref15.dialog,
          isShow = _ref15.isShow;
      dialog.isShow = isShow;
    },
    allParamSetting: function allParamSetting(state, _ref16) {
      var dialog = _ref16.dialog,
          params = _ref16.params;
      dialog.params = params;
    },
    paramSetting: function paramSetting(state, _ref17) {
      var dialog = _ref17.dialog,
          paramsName = _ref17.paramsName,
          paramsVal = _ref17.paramsVal;
      Vue.set(dialog.params, paramsName, paramsVal);
    }
  },
  strict: "development" !== 'production'
});

/***/ }),

/***/ "./resources/assets/js/stores/s-layout.js":
/*!************************************************!*\
  !*** ./resources/assets/js/stores/s-layout.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    //= data
    struct: {},
    structDesc: {},
    structSizePx: {}
  },
  getters: {
    // computed properties
    getByName: function getByName(state) {
      return function (name) {
        return nvl(state.struct[name]);
      };
    },
    getDescByHead: function getDescByHead(state) {
      return function (name) {
        return nvl(state.structDesc[name]);
      };
    },
    getDescByName: function getDescByName(state) {
      return function (head, name) {
        return nvl(state.structDesc[head][name]);
      };
    },
    getSizePxByHead: function getSizePxByHead(state) {
      return function (name) {
        return nvl(state.structSizePx[name]);
      };
    },
    getSizePxByName: function getSizePxByName(state) {
      return function (head, name) {
        return nvl(state.structSizePx[head][name]);
      };
    }
  },
  actions: {
    doInit: function () {
      var _doInit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref, structs) {
        var dispatch, commit, getters, state, structParse, struct;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch = _ref.dispatch, commit = _ref.commit, getters = _ref.getters, state = _ref.state;
                commit("structSetting", {
                  structs: structs
                });

                structParse = function structParse(_ref2) {
                  var config = _ref2.config,
                      _ref2$parent = _ref2.parent,
                      parent = _ref2$parent === void 0 ? '' : _ref2$parent,
                      _ref2$last = _ref2.last,
                      last = _ref2$last === void 0 ? '' : _ref2$last,
                      _ref2$num = _ref2.num,
                      num = _ref2$num === void 0 ? 0 : _ref2$num;
                  var tmp = {};
                  last = last || config.name;

                  if (config.data != undefined && config.data.length) {
                    config.data.forEach(function (element, idx) {
                      tmp = _objectSpread({}, tmp, {}, structParse({
                        config: element,
                        parent: config.name,
                        last: config.data[config.data.length - 1].name,
                        num: idx
                      }));
                    });
                  }

                  return _objectSpread(_defineProperty({}, config.name, _objectSpread({}, config, {
                    parent: parent,
                    last: last,
                    isLast: last == config.name,
                    num: num
                  })), tmp);
                };

                for (struct in structs) {
                  commit("structDescSetting", {
                    struct: _defineProperty({}, struct, structParse({
                      config: structs[struct]
                    }))
                  });
                  commit("structSizePxInitting", {
                    head: struct
                  });
                  dispatch("doSizePxRecalc", {
                    head: struct,
                    parentSizePx: structs[struct].sizePx
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function doInit(_x, _x2) {
        return _doInit.apply(this, arguments);
      }

      return doInit;
    }(),
    doSizeSet: function () {
      var _doSizeSet = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3, _ref4) {
        var _res;

        var dispatch, commit, getters, state, head, name, size, lastName, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch = _ref3.dispatch, commit = _ref3.commit, getters = _ref3.getters, state = _ref3.state;
                head = _ref4.head, name = _ref4.name, size = _ref4.size;
                lastName = state.structDesc[head][name].last;
                res = (_res = {}, _defineProperty(_res, name, {}), _defineProperty(_res, lastName, {}), _res);
                ['height', 'width'].forEach(function (curAttr) {
                  var sizeOrig = parseFloat(state.structDesc[head][name][curAttr]);
                  var sizeCur = Math.max(Math.min(size[curAttr] || sizeOrig, 100), 0);
                  var changeSize = sizeCur - sizeOrig,
                      sizeLast = parseFloat(state.structDesc[head][lastName][curAttr]);

                  if (sizeLast - changeSize - 5 <= 0) {
                    changeSize = sizeLast - 5;
                    sizeCur = sizeOrig + changeSize;
                    sizeLast = 5;
                  } else if (sizeCur - 5 <= 0) {
                    changeSize = sizeOrig - 5;
                    sizeLast = sizeLast + changeSize;
                    sizeCur = 5;
                  } else sizeLast -= changeSize;

                  res[name][curAttr] = sizeCur + '%';
                  res[lastName][curAttr] = sizeLast + '%';
                });
                commit("structSizeSetting", {
                  head: head,
                  name: name,
                  size: res[name]
                });
                commit("structSizeSetting", {
                  head: head,
                  name: lastName,
                  size: res[lastName]
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function doSizeSet(_x3, _x4) {
        return _doSizeSet.apply(this, arguments);
      }

      return doSizeSet;
    }(),
    doSizePxRecalc: function () {
      var _doSizePxRecalc = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref5, _ref6) {
        var commit, getters, state, head, name, parentSizePx, structSizer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref5.commit, getters = _ref5.getters, state = _ref5.state;
                head = _ref6.head, name = _ref6.name, parentSizePx = _ref6.parentSizePx;

                structSizer = function structSizer(_ref7) {
                  var cur = _ref7.cur,
                      parentSize = _ref7.parentSize;
                  var tmp = {
                    width: parseFloat(cur.width) / 100 * parentSize.width - 5 * (cur.parent != '' && state.structDesc[head][cur.parent].layout == 'vertical' ? cur.num : 0) - Math.random(),
                    height: parseFloat(cur.height) / 100 * parentSize.height - 5 * (cur.parent != '' && state.structDesc[head][cur.parent].layout == 'horizontal' ? cur.num : 0) - Math.random()
                  }; // Math.random() - некоторая хитрость, что бы сделать значения в дочерних компонентах отличными, от значений после перерасчета

                  commit("structSizePxSetting", {
                    head: head,
                    name: cur.name,
                    size: tmp
                  });
                  if (cur.data != undefined && cur.data.length) cur.data.forEach(function (element, idx) {
                    structSizer({
                      cur: state.structDesc[head][element.name],
                      parentSize: tmp,
                      num: idx
                    });
                  });
                };

                name = name || state.struct[head].name;
                parentSizePx = parentSizePx || (name == state.struct[head].name ? state.structSizePx[head][name] : state.structSizePx[head][state.structDesc[head][name].parent]);
                structSizer({
                  cur: state.structDesc[head][name],
                  parentSize: parentSizePx
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function doSizePxRecalc(_x5, _x6) {
        return _doSizePxRecalc.apply(this, arguments);
      }

      return doSizePxRecalc;
    }(),
    doSizePxChange: function () {
      var _doSizePxChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(_ref8, _ref9) {
        var commit, getters, state, head, _ref9$names, names, attr;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref8.commit, getters = _ref8.getters, state = _ref8.state;
                head = _ref9.head, _ref9$names = _ref9.names, names = _ref9$names === void 0 ? [] : _ref9$names, attr = _ref9.attr;
                names.forEach(function (name) {
                  return commit("structSizePxSetting", {
                    head: head,
                    name: name,
                    size: _defineProperty({}, attr, state.structSizePx[head][name][attr] + 1)
                  });
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function doSizePxChange(_x7, _x8) {
        return _doSizePxChange.apply(this, arguments);
      }

      return doSizePxChange;
    }()
  },
  mutations: {
    structSetting: function structSetting(state, _ref10) {
      var structs = _ref10.structs;
      state.struct = _objectSpread({}, state.struct, {}, structs);
    },
    structDescSetting: function structDescSetting(state, _ref11) {
      var struct = _ref11.struct;
      state.structDesc = _objectSpread({}, state.struct, {}, struct);
    },
    structSizeSetting: function structSizeSetting(state, _ref12) {
      var head = _ref12.head,
          name = _ref12.name,
          size = _ref12.size;
      state.structDesc[head][name] = _objectSpread({}, state.structDesc[head][name], {}, size);
    },
    structSizePxInitting: function structSizePxInitting(state, _ref13) {
      var head = _ref13.head;
      Vue.set(state.structSizePx, head, {});
    },
    structSizePxSetting: function structSizePxSetting(state, _ref14) {
      var head = _ref14.head,
          name = _ref14.name,
          size = _ref14.size;
      if (!state.structSizePx[head][name]) Vue.set(state.structSizePx[head], name, {});
      state.structSizePx[head][name] = _objectSpread({}, state.structSizePx[head][name], {}, size);
    }
  },
  strict: "development" !== 'production'
});

/***/ }),

/***/ "./resources/assets/js/stores/s-msg.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/stores/s-msg.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    //= data
    msgs: []
  },
  getters: {
    // computed properties
    getMsg: function getMsg(state) {
      return function (id) {
        return nvl(state.msgs.find(function (msg) {
          return msg.id === id;
        }));
      };
    },
    getMsgIndex: function getMsgIndex(state) {
      return function (id) {
        return state.msgs.findIndex(function (msg) {
          return msg.id === id;
        });
      };
    },
    getAllMsg: function getAllMsg(state) {
      return state.msgs;
    }
  },
  actions: {
    doAdd: function doAdd(_ref, _ref2) {
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
      timeout = timeout || 5;
      y = y || 'top';
      x = x || 'right';
      modeLine = modeLine || 'multi-line';
      type = type || 'error';
      title = title || 'Титул';
      text = text = (status == 401 ? window._vue.$vuetify.lang.t('$vuetify.texts.simple.msgs.authNeed') : text) || window._vue.$vuetify.lang.t('$vuetify.texts.simple.msgs.defTextMes');
      status = status || '';
      trace = trace || '';
      file = file || '';
      line = line || '';
      commit('adding', {
        id: id,
        timeout: timeout,
        y: y,
        x: x,
        modeLine: modeLine,
        type: type,
        title: title,
        text: text,
        status: status,
        trace: trace,
        file: file,
        line: line
      });
    },
    doDelete: function doDelete(_ref3, id) {
      var commit = _ref3.commit,
          getters = _ref3.getters,
          state = _ref3.state;
      var index = getters.getMsgIndex(id);
      if (index < 0) return;
      commit('deleting', index);
    }
  },
  mutations: {
    adding: function adding(state, _ref4) {
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
      state.msgs.push({
        id: id,
        timeout: timeout,
        y: y,
        x: x,
        modeLine: modeLine,
        type: type,
        title: title,
        text: text,
        status: status,
        trace: trace,
        file: file,
        line: line
      });
    },
    deleting: function deleting(state, id) {
      state.msgs.splice(id, 1);
    }
  },
  strict: "development" !== 'production'
});

/***/ }),

/***/ "./resources/assets/js/stores/s-param.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/stores/s-param.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    //= data
    params: {} //массив массивов - {номер группы параметров:{'код параметра':{value:'значение параметра, если undefined - не указан', view:'отображаемое пользователю значение'}}

  },
  getters: {
    // computed properties
    getGroup: function getGroup(state) {
      return function (num) {
        return nvl(state.params[num], {});
      };
    },
    getByCode: function getByCode(state, getters) {
      return function (num, code) {
        return getters.getGroup(num)[code];
      };
    },
    getTodo: function getTodo(state, getters) {
      return function (num) {
        return getters.getGroup(num);
      };
    },
    getTodoChecked: function getTodoChecked(state, getters) {
      return function (num) {
        var data = getters.getGroup(num),
            tmp = {};

        for (var name in data) {
          if (nvl(data[name].checked, false)) tmp[name] = data[name];
        }

        return tmp;
      };
    }
  },
  actions: {
    doInit: function () {
      var _doInit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref, _ref2) {
        var dispatch, commit, getters, state, num, _ref2$params, params;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch = _ref.dispatch, commit = _ref.commit, getters = _ref.getters, state = _ref.state;
                num = _ref2.num, _ref2$params = _ref2.params, params = _ref2$params === void 0 ? {} : _ref2$params;
                //commit("allParamsClearing",{ num, })		
                commit("allParamsSet", {
                  num: num,
                  params: params.reduce(function (res, row) {
                    return _objectSpread({}, res, _defineProperty({}, row.code, _objectSpread({
                      sign: '='
                    }, row)));
                  }, {})
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function doInit(_x, _x2) {
        return _doInit.apply(this, arguments);
      }

      return doInit;
    }(),
    doSetData: function () {
      var _doSetData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3, _ref4) {
        var commit, getters, state, num, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref3.commit, getters = _ref3.getters, state = _ref3.state;
                num = _ref4.num, data = _ref4.data;
                commit("paramSettingData", {
                  num: num,
                  code: data.code,
                  data: data
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function doSetData(_x3, _x4) {
        return _doSetData.apply(this, arguments);
      }

      return doSetData;
    }(),
    doSet: function () {
      var _doSet = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref5, _ref6) {
        var commit, getters, state, num, code, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref5.commit, getters = _ref5.getters, state = _ref5.state;
                num = _ref6.num, code = _ref6.code, data = _ref6.data;
                commit("paramSetting", {
                  num: num,
                  code: code,
                  data: data
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function doSet(_x5, _x6) {
        return _doSet.apply(this, arguments);
      }

      return doSet;
    }(),
    doSetSeveral: function () {
      var _doSetSeveral = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(_ref7, _ref8) {
        var dispatch, commit, getters, state, num, _ref8$params, params;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dispatch = _ref7.dispatch, commit = _ref7.commit, getters = _ref7.getters, state = _ref7.state;
                num = _ref8.num, _ref8$params = _ref8.params, params = _ref8$params === void 0 ? {} : _ref8$params;
                // params:{code:{value:'значение параметра, если undefined - не указан', view:'отображаемое пользователю значение'}}
                Object.keys(params).forEach(function (code) {
                  dispatch("doSet", {
                    num: num,
                    code: code,
                    value: params[code].value,
                    value2: params[code].value2,
                    checked: params[code].checked,
                    sign: params[code].sign
                  });
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function doSetSeveral(_x7, _x8) {
        return _doSetSeveral.apply(this, arguments);
      }

      return doSetSeveral;
    }()
  },
  mutations: {
    allParamsClearing: function allParamsClearing(state, _ref9) {
      var num = _ref9.num;
      Vue.set(state.params, num, {});
    },
    allParamsSet: function allParamsSet(state, _ref10) {
      var num = _ref10.num,
          params = _ref10.params;
      Vue.set(state.params, num, params);
    },
    paramSettingData: function paramSettingData(state, _ref11) {
      var num = _ref11.num,
          code = _ref11.code,
          data = _ref11.data;
      Vue.set(state.params[num], code, data);
    },
    paramSetting: function paramSetting(state, _ref12) {
      var num = _ref12.num,
          code = _ref12.code,
          data = _ref12.data;
      state.params[num][code] = _objectSpread({}, state.params[num][code], {}, data);
    }
  },
  strict: "development" !== 'production'
});

/***/ }),

/***/ "./resources/assets/js/stores/s-profile.js":
/*!*************************************************!*\
  !*** ./resources/assets/js/stores/s-profile.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    userName: '',
    userId: '',
    isRoot: '',
    avatar: '',
    language: 'ru'
  },
  getters: {
    // computed properties
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
    getIsRoot: function getIsRoot(state) {
      return function () {
        return state.isRoot;
      };
    },
    getAvatar: function getAvatar(state) {
      return function () {
        return state.avatar;
      };
    },
    getLanguage: function getLanguage(state) {
      return function () {
        return state.language;
      };
    }
  },
  actions: {
    doLog: function doLog(_ref, _ref2) {
      var commit = _ref.commit;
      var userName = _ref2.userName,
          userId = _ref2.userId,
          isRoot = _ref2.isRoot,
          avatar = _ref2.avatar;
      commit('infoSetting', {
        userName: userName,
        userId: userId,
        isRoot: isRoot,
        avatar: avatar
      });
    },
    doSetLanguage: function doSetLanguage(_ref3, _ref4) {
      var commit = _ref3.commit;
      var language = _ref4.language;
      commit('languageSetting', {
        language: language
      });
    },
    doLogout: function doLogout(_ref5) {
      var commit = _ref5.commit;
      commit('infoClearing');
    }
  },
  mutations: {
    infoSetting: function infoSetting(state, _ref6) {
      var userName = _ref6.userName,
          userId = _ref6.userId,
          isRoot = _ref6.isRoot,
          avatar = _ref6.avatar;
      state.userName = userName;
      state.userId = userId;
      state.isRoot = isRoot;
      state.avatar = avatar;
    },
    languageSetting: function languageSetting(state, _ref7) {
      var language = _ref7.language;
      state.language = language;
    },
    infoClearing: function infoClearing(state) {
      state.userName = '';
      state.userId = '';
      state.isRoot = '';
      state.avatar = '';
      state.language = 'ru';
    }
  },
  strict: "development" !== 'production'
});

/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!****************************************************!*\
  !*** multi ./resources/assets/js/main/Register.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp\www\FF\resources\assets\js\main\Register.js */"./resources/assets/js/main/Register.js");


/***/ })

},[[5,"/js/manifest","/js/vendor"]]]);