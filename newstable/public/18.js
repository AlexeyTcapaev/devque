webpackJsonp([18],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(129)
}
var normalizeComponent = __webpack_require__(71)
/* script */
var __vue_script__ = __webpack_require__(131)
/* template */
var __vue_template__ = __webpack_require__(132)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-90eba132"
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
Component.options.__file = "resources\\assets\\js\\components\\footer\\vfooter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90eba132", Component.options)
  } else {
    hotAPI.reload("data-v-90eba132", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(130);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(72)("8b856b46", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90eba132\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vfooter.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90eba132\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vfooter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.page-footer[data-v-90eba132] {\n  background-color: rgba(255, 255, 255, 0) !important;\n  padding-top: 20px;\n  margin: 20px 0 0 0;\n  color: #fff;\n  background-image: url(\"/storage/img/footer.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\nfooter .container[data-v-90eba132] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\nfooter .container h2[data-v-90eba132] {\n  font-weight: bolder;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-transform: uppercase;\n}\nfooter .container h2[data-v-90eba132]::before,\nfooter .container h2[data-v-90eba132]::after {\n  display: block;\n  content: \" \";\n  background-image: url(\"/storage/img/tulip.svg\");\n  margin: 0 15px;\n  background-size: 3rem 3rem;\n  color: #ffaf60;\n  height: 3rem;\n  width: 3rem;\n}\n.topay[data-v-90eba132] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));\n  justify-items: center;\n  width: 100%;\n}\n.block[data-v-90eba132] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 330px;\n}\n.block h3[data-v-90eba132] {\n  font-size: 2rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 5% 0 5% 0;\n}\n.cash[data-v-90eba132]::before {\n  display: block;\n  position: absolute;\n  content: \" \";\n  background-image: url(\"/storage/img/funds.svg\");\n  background-size: 3rem 3rem;\n  margin: 0 15px;\n  color: #ffaf60;\n  height: 3rem;\n  width: 3rem;\n  top: 0;\n  width: 3rem;\n  left: -5rem;\n}\n.cards[data-v-90eba132]::before {\n  display: block;\n  position: absolute;\n  content: \" \";\n  background-image: url(\"/storage/img/credit-card.svg\");\n  background-size: 3rem 3rem;\n  margin: 0 15px;\n  color: #ffaf60;\n  height: 3rem;\n  width: 3rem;\n  top: 0;\n  width: 3rem;\n  left: -5rem;\n}\n.call[data-v-90eba132]::before {\n  display: block;\n  position: absolute;\n  content: \" \";\n  background-image: url(\"/storage/img/phone-call.svg\");\n  background-size: 3rem 3rem;\n  margin: 0 15px;\n  color: #ffaf60;\n  height: 3rem;\n  width: 3rem;\n  top: 0;\n  width: 3rem;\n  left: -5rem;\n}\na[data-v-90eba132] {\n  color: #fff !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 131:
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
  mounted: function mounted() {
    console.log("Component mounted.");
  }
});

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "page-footer" }, [
      _c("div", { staticClass: "container" }, [
        _c("h2", [_vm._v("Доставка и оплата")]),
        _vm._v(" "),
        _c("div", { staticClass: "topay" }, [
          _c("div", { staticClass: "block" }, [
            _c("h3", { staticClass: "cash" }, [_vm._v("Наличными")]),
            _vm._v(" "),
            _c("p", [_vm._v("Оплата наличными курьеру после 30% предоплаты")]),
            _vm._v(" "),
            _c("p", [
              _vm._v("Выезд менеджера для приема оплаты\n                    "),
              _c("br"),
              _vm._v("(необходимо согласовать с оператором)")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "block" }, [
            _c("h3", { staticClass: "cards" }, [_vm._v("Банковские карты")]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [_vm._v("Visa")]),
              _vm._v(" "),
              _c("li", [_vm._v("Mastercard")]),
              _vm._v(" "),
              _c("li", [_vm._v("На расчётный счет(через банковские системы)")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "block" }, [
            _c("h3", { staticClass: "cards" }, [_vm._v("Электронные деньги")]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [_vm._v("Оплата со счёта WebMoney")]),
              _vm._v(" "),
              _c("li", [_vm._v("Оплата через Яндекс.Деньги")]),
              _vm._v(" "),
              _c("li", [_vm._v("Оплата Qiwi")]),
              _vm._v(" "),
              _c("li", [_vm._v("Оплата через PayPal")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "block" }, [
            _c("h3", { staticClass: "call" }, [
              _c("a", { attrs: { href: "tel:88122344455" } }, [
                _vm._v("8(812) 234-44-55")
              ])
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("Работаем с 8:00 до 23:00")]),
            _vm._v(" "),
            _c("ul", { staticClass: "social" }, [
              _c("li", [_c("a", { staticClass: "img-link vk" })]),
              _vm._v(" "),
              _c("li", [_c("a", { staticClass: "img-link inst" })])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "footer-copyright" }, [
        _c("div", { staticClass: "container" }, [
          _vm._v("\n            © 2014 Copyright Text\n            "),
          _c(
            "a",
            {
              staticClass: "grey-text text-lighten-4 right",
              attrs: { href: "#!" }
            },
            [_vm._v("More Links")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-90eba132", module.exports)
  }
}

/***/ })

});