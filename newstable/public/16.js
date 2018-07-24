webpackJsonp([16],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(113)
}
var normalizeComponent = __webpack_require__(71)
/* script */
var __vue_script__ = __webpack_require__(115)
/* template */
var __vue_template__ = __webpack_require__(126)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d4230bf"
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
Component.options.__file = "resources\\assets\\js\\components\\header\\mynav.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d4230bf", Component.options)
  } else {
    hotAPI.reload("data-v-1d4230bf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(72)("2610688c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d4230bf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./mynav.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d4230bf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./mynav.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.application .theme--light.v-icon[data-v-1d4230bf],\n.theme--light .v-icon[data-v-1d4230bf] {\n  color: rgba(0, 0, 0, 0.54) !important;\n}\n.container[data-v-1d4230bf] {\n  padding: 0;\n}\n.hide-on-med-and-down[data-v-1d4230bf] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 20px 0 0 0;\n  padding-left: 0;\n  list-style-type: none !important;\n}\n.hide-on-med-and-down li a[data-v-1d4230bf]:hover {\n  color: white;\n  background-color: black;\n}\n.hide-on-med-and-down li a[data-v-1d4230bf] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: black;\n  -webkit-transition: 0.2s linear;\n  transition: 0.2s linear;\n  font-weight: bold;\n  text-transform: uppercase;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  white-space: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n@media only screen and (max-width: 992px) {\n.hide-on-med-and-down[data-v-1d4230bf] {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 993px) {\n.sidenav-trigger[data-v-1d4230bf] {\n    display: none;\n}\n}\n@media only screen and (max-width: 1569px) {\n.sidenav-trigger[data-v-1d4230bf] {\n    display: block !important;\n}\n.hide-on-med-and-down[data-v-1d4230bf] {\n    display: none;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
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



var navlink = function navlink() {
  return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 116));
};
var mobilenavlink = function mobilenavlink() {
  return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, 121));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      drawer: false
    };
  },
  components: {
    navlink: navlink,
    mobilenavlink: mobilenavlink
  },
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapGetters */])({
    Categories: "catalog/Catalog"
  }))
});

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container nav-cont" },
    [
      _c("nav", [
        _c(
          "div",
          { staticClass: "nav-wrapper" },
          [
            _c(
              "v-toolbar-title",
              {
                staticClass: "ml-0 pl-3 sidenav-trigger",
                staticStyle: { width: "330px" }
              },
              [
                _c("v-toolbar-side-icon", {
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.drawer = !_vm.drawer
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "hide-on-med-and-down" },
              _vm._l(_vm.Categories, function(category) {
                return _c("navlink", {
                  key: category.id,
                  attrs: { category: category }
                })
              })
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("v-navigation-drawer", {
        attrs: {
          "mobile-break-point": "1569",
          fixed: "",
          app: "",
          absolute: "",
          floating: "",
          "disable-resize-watcher": ""
        },
        model: {
          value: _vm.drawer,
          callback: function($$v) {
            _vm.drawer = $$v
          },
          expression: "drawer"
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-1d4230bf", module.exports)
  }
}

/***/ })

});