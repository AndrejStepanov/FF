webpackJsonp([2],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(192)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(194)
/* template */
var __vue_template__ = __webpack_require__(195)
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
Component.options.__file = "resources/assets/js/components/c-table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-269fc7c6", Component.options)
  } else {
    hotAPI.reload("data-v-269fc7c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("38f07aa2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-269fc7c6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./c-table.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-269fc7c6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./c-table.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* https://tallent.us/vue-scrolling-table/ */\n.c-table.tabFullHeight>div {height: 100%; width: 100%; overflow: auto;\n}\n.c-table.tabWithPagination>div.v-table__overflow {height: calc(100% - 59px); width: 100%; overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'c-table',
	data: function data() {
		return {
			checkBoxColor: 'white', //переопределяется в created
			firstNum: 1,
			isMounted: false,
			selectedValues: [],
			selecttableTypes: ['one', 'multy'],
			search: ''
		};
	},
	props: {
		typeSelect: { type: String, default: '' },
		manHead: false,
		manBody: false,
		searchNeed: false,
		tableTitle: '',
		noRowNum: false,
		height: { type: Number },
		//взято из v-data-table
		headers: { type: Array, default: function _default() {
				return [];
			} },
		items: { type: Array, default: function _default() {
				return [];
			} },
		headersLength: { type: Number },
		headerText: { type: String, default: 'text' },
		headerKey: { type: String, default: null },
		hideHeaders: { type: Boolean, default: false },
		rowsPerPageText: { type: String, default: '$vuetify.dataTable.rowsPerPageText' },
		expand: Boolean,
		hideActions: { type: Boolean, default: false },
		noResultsText: { type: String, default: '$vuetify.dataIterator.noResultsText' },
		nextIcon: { type: String, default: '$vuetify.icons.next' },
		prevIcon: { type: String, default: '$vuetify.icons.prev' },
		rowsPerPageItems: { type: Array, default: function _default() {
				return [500, 250, 100, 50, 25, 2, { text: '$vuetify.dataIterator.rowsPerPageAll', value: -1 }];
			} },
		selectAll: [Boolean, String],
		value: { type: Array, default: function _default() {
				return [];
			} },
		itemKey: { type: String, default: '_id' }
	},
	computed: {
		tabHeads: function tabHeads() {
			var vm = this;
			return vm.headers.map(function (head, i) {
				var _isNumeric = !(head.type.match(/^numeric/i) == null),
				    _isDate = !(head.type.match(/^date/i) == null),
				    _isInt = !(head.type.match(/^int/i) == null);
				return _extends({}, head, { visible: head.visible === false ? false : true, sortable: head.sortable === true ? true : false,
					_isNumeric: _isNumeric || _isInt, _isDate: _isDate, mask: nvl(head.mask, _isNumeric ? '0,0.000' : _isInt ? '0,0' : undefined),
					clsssCell: nvl(head.clsssCell, '') + ' ' + (_isNumeric || _isDate ? ' text-nobr ' : '') + ' ' + (_isNumeric ? ' text-right ' : '')
				});
			});
		},
		tabRows: function tabRows() {
			var vm = this,
			    isNumeric = [],
			    isDate = [];
			if (vm.manBody) return vm.items;
			var e = vm.items.map(function (element, i) {
				var tmp = {};
				vm.tabHeads.forEach(function (head, j) {
					if (!head.visible) return;
					tmp[head.code] = vm.valFormat(element[head.code], head.type, head.replace, head._isNumeric, head.mask, head._isDate);
				});
				return _extends({}, tmp, { _id: i });
			});
			return e;
		},
		getMainTableStyle: function getMainTableStyle() {
			var vm = this;
			return {
				height: vm.isMounted && vm.height > 0 ? vm.height - vm.$refs.title.clientHeight + 'px' : -1,
				overflowY: 'auto'
			};
		},
		getMainTableClass: function getMainTableClass() {
			var vm = this;
			return {
				"c-table": true,
				"tabFullHeight": vm.hideActions,
				"tabWithPagination": !vm.hideActions
			};
		}
	},
	mixins: [],
	methods: {
		searchInTable: function searchInTable(items, search, filter, headers) {
			search = search.toString().toLowerCase();
			if (search.trim() === '') return items;
			var props = headers.map(function (h) {
				return h.code;
			});
			return items.filter(function (item) {
				return props.some(function (prop) {
					return filter(item[prop], search);
				});
			});
		},
		valFormat: function valFormat(val, type, replace) {
			var isNumeric = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
			var mask = arguments[4];
			var isDate = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
			//вполне себе может быть использована и извне
			var vm = this;
			if (val == undefined || val == '' || isNumeric && val == 0) val = replace;
			if (isDate) val = dateFormat(val);
			if (isNumeric) val = numberFormat(val, mask);
			return val;
		},
		updateTabFirstNum: function updateTabFirstNum(obj) {
			var vm = this;
			vm.tabFirstNum = (!vm.isMounted || vm.$refs.table == undefined || obj.page == 1 ? 0 : (obj.page - 1) * obj.rowsPerPage) + 1;
		},
		selectRow: function selectRow(props) {
			var vm = this,
			    lastSel = !!props.selected;
			if (vm.selecttableTypes.indexOf(vm.typeSelect) == -1) return;
			if (vm.typeSelect == 'one') vm.selectedValues = [];
			if (!lastSel) vm.selectedValues.push(props.item);else if (vm.typeSelect != 'one') vm.selectedValues = vm.selectedValues.filter(function (row) {
				return row._id != props.item._id;
			});
			vm.selectedValuesChanged();
		},
		toggleAll: function toggleAll() {
			var vm = this;
			if (vm.selectedValues.length) vm.selectedValues = [];else if (vm.typeSelect == 'multy') vm.selectedValues = vm.items.slice();
			vm.selectedValuesChanged();
		},
		selectedValuesChanged: function selectedValuesChanged() {
			var vm = this;
			vm.$emit('input', vm.selectedValues.map(function (row) {
				return vm.items[row._id];
			}));
		}
	},
	created: function created() {
		var vm = this;
		vm.checkBoxColor = appTheme.checkBox || vm.checkBoxColor;
		if (vm.value.length > 0) vm.value.forEach(function (element, i) {
			vm.selectedValues.push(element);
		});
	},
	//
	mounted: function mounted() {
		var vm = this;
		vm.isMounted = true;
	}
});

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _vm.tableTitle != "" || _vm.searchNeed
        ? _c(
            "v-card-title",
            { ref: "title" },
            [
              _c("h3", { staticClass: "headline mb-0" }, [
                _vm._v(_vm._s(_vm.tableTitle))
              ]),
              _vm._v(" "),
              _vm.searchNeed
                ? [
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c("v-text-field", {
                      attrs: {
                        "append-icon": "search",
                        label: _vm.$vuetify.t(
                          "$vuetify.texts.simple.labels.searchInFields"
                        ),
                        "single-line": "",
                        "hide-details": "",
                        clearable: ""
                      },
                      model: {
                        value: _vm.search,
                        callback: function($$v) {
                          _vm.search = $$v
                        },
                        expression: "search"
                      }
                    })
                  ]
                : _vm._e()
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("v-data-table", {
        ref: "table",
        class: _vm.getMainTableClass,
        style: _vm.getMainTableStyle,
        attrs: {
          value: _vm.selectedValues,
          headers: _vm.tabHeads,
          items: _vm.tabRows,
          headersLength: _vm.headersLength,
          headerText: _vm.headerText,
          headerKey: _vm.headerKey,
          hideHeaders: _vm.hideHeaders,
          rowsPerPageText: _vm.rowsPerPageText,
          expand: _vm.expand,
          hideActions: _vm.hideActions,
          noResultsText: _vm.noResultsText,
          nextIcon: _vm.nextIcon,
          prevIcon: _vm.prevIcon,
          rowsPerPageItems: _vm.rowsPerPageItems,
          selectAll: _vm.selectAll,
          search: _vm.search,
          itemKey: _vm.itemKey,
          customFilter: _vm.searchInTable
        },
        on: { "update:pagination": _vm.updateTabFirstNum },
        scopedSlots: _vm._u([
          {
            key: "headers",
            fn: function(props) {
              return [
                _vm.manHead
                  ? [
                      _vm._t("headers", null, {
                        headers: props.headers,
                        indeterminate: props.indeterminate,
                        all: props.all
                      })
                    ]
                  : [
                      _c(
                        "tr",
                        [
                          !_vm.noRowNum
                            ? _c(
                                "th",
                                {
                                  staticClass: "column active width-one-percent"
                                },
                                [
                                  _vm.selecttableTypes.indexOf(
                                    _vm.typeSelect
                                  ) != -1 && _vm.selectAll
                                    ? _c("v-checkbox", {
                                        attrs: {
                                          "input-value":
                                            _vm.typeSelect == "one"
                                              ? _vm.selectedValues.length
                                              : props.all,
                                          indeterminate:
                                            _vm.typeSelect == "one"
                                              ? false
                                              : props.indeterminate,
                                          color: _vm.checkBoxColor,
                                          "hide-details": ""
                                        },
                                        nativeOn: {
                                          click: function($event) {
                                            return _vm.toggleAll($event)
                                          }
                                        }
                                      })
                                    : [
                                        _vm._v("\n\t\t\t\t\t\t\t№"),
                                        _c("br"),
                                        _vm._v("п/п\n\t\t\t\t\t\t")
                                      ]
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.tabHeads, function(header) {
                            return header.visible
                              ? _c(
                                  "th",
                                  {
                                    key: header.code,
                                    staticClass: "column active"
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t" +
                                        _vm._s(header.text) +
                                        "\n\t\t\t\t\t"
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      )
                    ]
              ]
            }
          },
          {
            key: "items",
            fn: function(props) {
              return [
                _vm.manBody
                  ? [
                      _vm._t("items", null, {
                        item: props.item,
                        index: props.index,
                        selected: props.selected,
                        expanded: props.expanded
                      })
                    ]
                  : [
                      _c(
                        "tr",
                        {
                          attrs: { active: props.selected },
                          on: {
                            click: function($event) {
                              _vm.selectRow(props)
                            }
                          }
                        },
                        [
                          !_vm.noRowNum
                            ? _c("td", { staticClass: "width-one-percent" }, [
                                _vm._v(
                                  "\t" + _vm._s(props.item._id + 1) + "\t\t\t\t"
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.tabHeads, function(header) {
                            return header.visible
                              ? _c(
                                  "td",
                                  { key: header.code, class: header.clsssCell },
                                  [
                                    _vm._v(
                                      "\t" +
                                        _vm._s(props.item[header.code]) +
                                        "\t\t\t"
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      )
                    ]
              ]
            }
          }
        ])
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-269fc7c6", module.exports)
  }
}

/***/ })

});