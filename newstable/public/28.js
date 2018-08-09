webpackJsonp([28],{

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(88)
}
var normalizeComponent = __webpack_require__(76)
/* script */
var __vue_script__ = __webpack_require__(90)
/* template */
var __vue_template__ = __webpack_require__(91)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-35b57ba3"
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
Component.options.__file = "resources\\assets\\js\\components\\mycarousel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35b57ba3", Component.options)
  } else {
    hotAPI.reload("data-v-35b57ba3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(77)("a8c6ffdc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-35b57ba3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./mycarousel.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-35b57ba3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./mycarousel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.v-jumbotron[data-v-35b57ba3] .v-jumbotron__image {\r\n  height: 100%;\r\n  width: 100vw;\n}\n.v-jumbotron[data-v-35b57ba3] .v-jumbotron__wrapper {\r\n  overflow: inherit !important;\n}\n.v-carousel[data-v-35b57ba3] {\r\n  overflow: inherit !important;\r\n  -webkit-box-shadow: none !important;\r\n          box-shadow: none !important;\r\n  margin-bottom: 5%;\n}\n.carc[data-v-35b57ba3] {\r\n  height: 100%;\r\n  position: relative;\n}\n.buy[data-v-35b57ba3] {\r\n  margin: 0;\r\n  background-color: #ffaf60;\r\n  border-radius: 0;\r\n  color: #ffffff;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-transition: 0.2s linear;\r\n  transition: 0.2s linear;\n}\n.iimg[data-v-35b57ba3] {\r\n  width: 30%;\r\n  bottom: -20%;\r\n  right: 0;\r\n  position: absolute;\n}\n.car-cont[data-v-35b57ba3] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  width: 50%;\r\n  z-index: 999;\r\n  height: 100%;\n}\n.car-cont h2[data-v-35b57ba3] {\r\n  font-weight: 500;\r\n  line-height: 32px;\r\n  color: white;\r\n  text-align: left;\r\n  margin: 1.78rem 0 1.424rem 0;\r\n  font-size: 3rem !important;\r\n  text-transform: uppercase;\n}\n.info-block[data-v-35b57ba3] {\r\n  color: white;\r\n  text-align: left;\r\n  font-size: 1.5rem;\n}\n.prices[data-v-35b57ba3] {\r\n  margin: 20px 0 20px 0;\n}\n.prices .old-price[data-v-35b57ba3] {\r\n  color: #ababab !important;\r\n  text-transform: uppercase;\r\n  text-decoration: line-through !important;\r\n  font-weight: bold;\r\n  font-size: 1.9rem;\n}\n.prices .new-price[data-v-35b57ba3] {\r\n  color: #ffaf60 !important;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  font-size: 2.8rem;\n}\n.prices span[data-v-35b57ba3] {\r\n  margin: 0 15px 0 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 90:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      slides: [{
        product: {
          name: ""
        }
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    var init = this;
    axios.get("/api/carousel").then(function (resp) {
      init.slides = resp.data;
    });
  }
});

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.slides.length > 0
    ? _c(
        "v-carousel",
        { attrs: { "hide-delimiters": "", cycle: "" } },
        _vm._l(_vm.slides, function(item, i) {
          return _c(
            "v-carousel-item",
            { key: i, attrs: { src: "/storage/uploads/" + item.image } },
            [
              _c("div", { staticClass: "container carc" }, [
                _c(
                  "div",
                  { staticClass: "car-cont" },
                  [
                    _c("h2", [_vm._v(_vm._s(item.product.name))]),
                    _vm._v(" "),
                    item.product.description !== "undefined"
                      ? _c("span", { staticClass: "info-block" }, [
                          _vm._v(_vm._s(item.product.description))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "prices" }, [
                      _c("span", { staticClass: "old-price" }, [
                        _vm._v(_vm._s(item.product.oldprice) + " ₽")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "new-price" }, [
                        _vm._v(_vm._s(item.product.currentprice) + " ₽")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "btn-large waves-effect buy" }),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      { staticClass: "buy btn-flat", attrs: { flat: "" } },
                      [_vm._v("Купить")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("img", {
                  staticClass: "iimg",
                  attrs: { src: "/storage/uploads/" + item.product.image }
                })
              ])
            ]
          )
        })
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-35b57ba3", module.exports)
  }
}

/***/ })

});