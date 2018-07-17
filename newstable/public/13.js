webpackJsonp([13],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(104)
}
var normalizeComponent = __webpack_require__(73)
/* script */
var __vue_script__ = __webpack_require__(106)
/* template */
var __vue_template__ = __webpack_require__(127)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-478ce54b"
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
Component.options.__file = "resources\\assets\\js\\components\\header\\vheader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-478ce54b", Component.options)
  } else {
    hotAPI.reload("data-v-478ce54b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(74)("2c86b80a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-478ce54b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vheader.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-478ce54b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vheader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.head[data-v-478ce54b] {\n  padding: 40px 0 0 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\na.logo[data-v-478ce54b] {\n  color: black !important;\n  background-color: #fff !important;\n}\n.router-link-exact-active[data-v-478ce54b] {\n  background-color: #ffaf60 !important;\n  color: #fff !important;\n}\n.logo[data-v-478ce54b] {\n  color: black;\n  font-size: 4rem;\n  font-weight: bold;\n}\n.phone[data-v-478ce54b] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-size: 2rem;\n  font-weight: bold;\n  color: black;\n}\n.phone span[data-v-478ce54b] {\n  font-size: 1rem;\n  color: #ababab;\n}\n.search-bar span[data-v-478ce54b] {\n  font-size: 1rem;\n  color: #ababab;\n  font-weight: bold;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.search-bar span i[data-v-478ce54b] {\n  color: #ffaf60;\n}\n.magazine-buttons[data-v-478ce54b] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.magazine-buttons a[data-v-478ce54b] {\n  width: inherit !important;\n  margin: 0 10px 0 10px !important;\n  padding: 15px !important;\n  height: 47px !important;\n}\n.magazine-buttons a.btn-flat[data-v-478ce54b] {\n  color: #ffaf60;\n  border-radius: 0;\n  border: 1px solid #ffaf60;\n  padding: 0;\n  margin: 0 10px 0 10px;\n  width: 47px;\n  height: 47px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-transition: 0.2s linear;\n  transition: 0.2s linear;\n}\n.user[data-v-478ce54b] {\n  margin: 0 5px 0 0;\n}\na.cart[data-v-478ce54b] {\n  position: relative;\n  overflow: visible !important;\n}\na.cart span[data-v-478ce54b] {\n  position: absolute;\n  right: -10px;\n  color: white;\n  top: -10px;\n  width: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 20px;\n  border-radius: 10px;\n  background-color: #ffaf60;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 106:
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


var search = function search() {
  return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 107));
};
var mynav = function mynav() {
  return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, 112));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  components: { search: search, mynav: mynav },
  methods: {
    test: function test() {}
  },
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])(["cartCount"]))
});

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    [
      _c(
        "div",
        { staticClass: "container head" },
        [
          _c("router-link", { staticClass: "logo", attrs: { to: "/" } }, [
            _vm._v("La Flowers")
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "search-bar" },
            [_c("search"), _vm._v(" "), _vm._m(1)],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "magazine-buttons" },
            [
              _c(
                "router-link",
                { staticClass: "btn-flat", attrs: { to: "/login" } },
                [
                  _c(
                    "i",
                    {
                      staticClass: "material-icons",
                      class: { user: _vm.islogging }
                    },
                    [_vm._v("account_box")]
                  ),
                  _vm._v(_vm._s(_vm.$store.state.user.name))
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn-flat cart",
                  attrs: { to: "/cart" },
                  on: { click: _vm.test }
                },
                [
                  _c("i", { staticClass: "material-icons" }, [
                    _vm._v("shopping_cart")
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.cartCount))])
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("mynav")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "phone", attrs: { href: "tel:88122344455" } },
      [
        _vm._v("8(812) 234-44-55\n        "),
        _c("span", [_vm._v("Работаем с 8:00 до 23:00")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v("ДОСТАВКА\n            "),
      _c("i", { staticClass: "material-icons" }, [_vm._v("remove")]),
      _vm._v("\n            ОПЛАТА\n            "),
      _c("i", { staticClass: "material-icons" }, [_vm._v("remove")]),
      _vm._v("\n            КОНТАКТЫ\n          ")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-478ce54b", module.exports)
  }
}

/***/ })

});