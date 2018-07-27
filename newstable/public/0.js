webpackJsonp([0],{

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(238)
}
var normalizeComponent = __webpack_require__(72)
/* script */
var __vue_script__ = __webpack_require__(240)
/* template */
var __vue_template__ = __webpack_require__(237)
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
Component.options.__file = "resources\\assets\\js\\components\\PackCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-316636c0", Component.options)
  } else {
    hotAPI.reload("data-v-316636c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card" },
    [
      _c(
        "v-form",
        {
          ref: "form",
          attrs: { "lazy-validation": "" },
          model: {
            value: _vm.valid,
            callback: function($$v) {
              _vm.valid = $$v
            },
            expression: "valid"
          }
        },
        [
          _c("div", { staticClass: "card-image" }, [
            _c("input", {
              ref: "file",
              staticClass: "file",
              attrs: { type: "file", multiple: "", accept: "image/*" },
              on: { change: _vm.onFileChange }
            }),
            _vm._v(" "),
            _vm.item.image
              ? _c("img", { attrs: { src: _vm.item.image } })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-content" },
            [
              _c("v-text-field", {
                attrs: {
                  label: "Наименование",
                  outline: "",
                  rules: _vm.nameRules
                },
                model: {
                  value: _vm.item.name,
                  callback: function($$v) {
                    _vm.$set(_vm.item, "name", $$v)
                  },
                  expression: "item.name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { suffix: "₽", label: "Цена", outline: "" },
                model: {
                  value: _vm.item.price,
                  callback: function($$v) {
                    _vm.$set(_vm.item, "price", $$v)
                  },
                  expression: "item.price"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { disabled: !_vm.valid, flat: "" },
                  on: { click: _vm.submit }
                },
                [_vm._v("Создать")]
              ),
              _vm._v(" "),
              _vm.pack
                ? _c(
                    "v-btn",
                    {
                      attrs: { disabled: !_vm.valid, flat: "" },
                      on: { click: _vm.update }
                    },
                    [_vm._v("Обновить")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.pack
                ? _c(
                    "v-btn",
                    {
                      attrs: { disabled: !_vm.valid, flat: "" },
                      on: { click: _vm.destroy }
                    },
                    [_vm._v("Удалить")]
                  )
                : _vm._e()
            ],
            1
          )
        ]
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-316636c0", module.exports)
  }
}

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(239);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
<<<<<<< HEAD
var update = __webpack_require__(73)("125cab6d", content, false, {});
=======
var update = __webpack_require__(72)("d53d4e08", content, false, {});
>>>>>>> e8dc8d8e05cb1f3c19e54cc9f035b29c4e5c5efd
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
<<<<<<< HEAD
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-316636c0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PackCard.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-316636c0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PackCard.vue");
=======
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-142d72b7\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./subcategory.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-142d72b7\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./subcategory.vue");
>>>>>>> e8dc8d8e05cb1f3c19e54cc9f035b29c4e5c5efd
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.v-chip__content h3 {\r\n  margin: 0 10px 0 0;\n}\n.v-chip .v-text-field__details {\r\n  display: none !important;\n}\n.v-chip {\r\n  height: 115px;\n}\n.params li {\r\n  padding: 5px 0;\n}\n.card {\r\n  display: block;\r\n  width: 500px;\r\n  border-radius: 2px;\r\n  min-width: 0;\r\n  position: relative;\r\n  text-decoration: none;\r\n  -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\r\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\r\n          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\r\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\nul {\r\n  padding: 0;\n}\n.padding {\r\n  padding: 10%;\n}\nform {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n  padding: 10px;\n}\n.btntest {\r\n  background: linear-gradient(45deg, #00aeff 50%, #3369e6 100%);\n}\n.btntest:disabled {\r\n  background: rgba(238, 238, 238, 0);\n}\n.card-action a {\r\n  cursor: pointer;\n}\nbutton {\r\n  width: 100%;\r\n  margin: 0 !important;\n}\n.file {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  cursor: pointer;\r\n  z-index: 4;\r\n  opacity: 0;\n}\n.horizontal {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  position: relative;\r\n  max-width: 48% !important;\n}\n.card-image {\r\n  width: 50%;\r\n  padding: 10px;\r\n  height: 100%;\r\n  -webkit-transition: 0.2s linear;\r\n  transition: 0.2s linear;\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\n}\n.card-image img {\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  max-width: 100%;\n}\n.params li span {\r\n  width: 100%;\n}\n.v-chip {\r\n  margin: 0;\n}\n.v-chip .v-chip__content {\r\n  width: 100% !important;\n}\n.card {\r\n  margin: 10px;\n}\r\n", ""]);
=======
exports.push([module.i, "\nh2 {\n  font-size: 3.56rem;\n  line-height: 110%;\n  margin: 1.78rem 0 1.424rem 0;\n}\nh6 {\n  font-size: 1rem;\n  line-height: 110%;\n  margin: 0.5rem 0 0.4rem 0;\n}\n.breadcrumbs {\n  width: 100%;\n  background-color: #ffaf60;\n}\n.container {\n  padding: 0;\n}\n.bread {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 64px;\n}\n.breadcrumb {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.breadcrumb:not:last-child:before {\n  content: \"\\E5CC\";\n  color: rgba(255, 255, 255, 0.7);\n  vertical-align: top;\n  display: inline-block;\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 25px;\n  margin: 0 10px 0 8px;\n  -webkit-font-smoothing: antialiased;\n}\n.breadcrumb:last-child {\n  color: #fff;\n}\n.breadcrumbs .container {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important;\n  height: 64px !important;\n}\n.breadcrumb {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.breadcrumb:not(:first-child):before {\n  content: \"\\E5CC\";\n  color: rgba(255, 255, 255, 0.7);\n  vertical-align: top;\n  display: inline-block;\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 25px;\n  margin: 0 10px 0 8px;\n  -webkit-font-smoothing: antialiased;\n}\n.container {\n  display: block;\n}\n.container h2 {\n  text-align: center;\n}\n.sales-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 45px;\n  width: 100%;\n  justify-items: center;\n}\n.buy {\n  background-color: #ffaf60 !important;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n", ""]);
>>>>>>> e8dc8d8e05cb1f3c19e54cc9f035b29c4e5c5efd

// exports


/***/ }),

/***/ 240:
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

<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["pack", "packs", "index"],
  data: function data() {
    return {
      item: {
        image: "/storage/img/plus.svg"
      },
      nameRules: [function (v) {
        return !!v || "Name is required";
      }, function (v) {
        return v && v.length <= 50 || "> 10";
      }],
      priceRules: [function (v) {
        return !!v || "Price is required";
      }, function (v) {
        return v && v.length > 1 || "> 1";
      }],
      isActive: true,
      valid: false
=======

var ShowableCard = function ShowableCard() {
  return __webpack_require__.e/* import() */(12/* duplicate */).then(__webpack_require__.bind(null, 74));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: function metaInfo() {
    return {
      title: this.subcategory ? this.subcategory.name + " " + this.subcategory.parentobj.name : ""
>>>>>>> e8dc8d8e05cb1f3c19e54cc9f035b29c4e5c5efd
    };
  },
  mounted: function mounted() {
    if (this.pack !== undefined) {
      this.item = this.pack;
      if (this.item.image !== null) this.item.image = "/storage/uploads/" + this.item.image;else this.item.image = "/storage/img/plus.svg";
    }
  },
<<<<<<< HEAD

  methods: {
    destroy: function destroy() {
      var init = this;
      axios.delete("/api/packs/" + this.item.id).then(function (resp) {
        console.log(resp);
        init.packs.splice(init.index, 1);
      }).catch(function (resp) {
        console.log(resp);
      });
    },
    onFileChange: function onFileChange(e) {
      this.item.fileOnserver = this.$refs.file.files[0];
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(this.item, files[0]);
      this.isActive = false;
    },
    createImage: function createImage(item, file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = function (e) {
        item.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage: function removeImage(item) {
      item.image = false;
    },
    submit: function submit() {
      if (this.$refs.form.validate()) {
        var product = new FormData();
        product.append("image", this.$refs.file.files[0]);
        product.append("name", this.item.name);
        product.append("price", this.item.price);
        product.append("id", this.item.id);
        var init = this;
        axios.post("/api/packs", product).then(function (resp) {
          console.log(resp);
          init.packs.push(resp.data);
          init.$refs.form.reset();
          init.item.image = "/storage/img/plus.svg";
        }).catch(function (resp) {
          console.log(resp);
        });
=======
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapGetters */])({
    cat: "catalog/Subcategory"
  }), {
    subcategory: function subcategory() {
      return this.cat(this.$route.params);
    }
  })
});

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.subcategory
    ? _c("div", [
        _c("div", { staticClass: "breadcrumbs" }, [
          _c(
            "div",
            { staticClass: "container" },
            [
              _c(
                "router-link",
                { staticClass: "breadcrumb", attrs: { to: "/" } },
                [_vm._v("Главная")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "breadcrumb",
                  attrs: {
                    to: {
                      name: "category",
                      params: { slug: _vm.subcategory.parentobj.slug }
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.subcategory.parentobj.name))]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "breadcrumb",
                  attrs: {
                    to: {
                      name: "category",
                      params: { slug: _vm.subcategory.slug }
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.subcategory.name))]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c("h2", [_vm._v(_vm._s(_vm.subcategory.name))]),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "sales-list" },
            _vm._l(_vm.subcategory.products, function(product) {
              return _c(
                "li",
                { key: product.id },
                [_c("showable-card", { attrs: { prod: product } })],
                1
              )
            })
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-142d72b7", module.exports)
  }
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(138)
}
var normalizeComponent = __webpack_require__(71)
/* script */
var __vue_script__ = __webpack_require__(140)
/* template */
var __vue_template__ = __webpack_require__(145)
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
Component.options.__file = "resources\\assets\\js\\components\\subcategory.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-142d72b7", Component.options)
  } else {
    hotAPI.reload("data-v-142d72b7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 71:
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
>>>>>>> e8dc8d8e05cb1f3c19e54cc9f035b29c4e5c5efd
      }
    },
    update: function update() {
      if (this.$refs.form.validate()) {
        var product = new FormData();
        product.append("_method", "PATCH");
        product.append("image", this.$refs.file.files[0]);
        product.append("name", this.item.name);
        product.append("price", this.item.price);
        product.append("id", this.item.id);
        var init = this;
        console.log(product.getAll("name"));
        axios.post("/api/packs/" + this.item.id, product).then(function (resp) {
          init.item = resp.data;
          init.item.image = "/storage/uploads/" + resp.data.image;
        }).catch(function (resp) {
          console.log(resp);
        });
      }
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ 73:
=======
/***/ 72:
>>>>>>> e8dc8d8e05cb1f3c19e54cc9f035b29c4e5c5efd
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

<<<<<<< HEAD
var listToStyles = __webpack_require__(74)
=======
var listToStyles = __webpack_require__(73)
>>>>>>> e8dc8d8e05cb1f3c19e54cc9f035b29c4e5c5efd

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

<<<<<<< HEAD
/***/ 74:
=======
/***/ 73:
>>>>>>> e8dc8d8e05cb1f3c19e54cc9f035b29c4e5c5efd
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

});