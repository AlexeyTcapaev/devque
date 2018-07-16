webpackJsonp([6],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-expansion-panel",
    { attrs: { focusable: "" } },
    _vm._l(5, function(item, i) {
      return _c(
        "v-expansion-panel-content",
        { key: i },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _vm._v("Item")
          ]),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c("v-card-text", { staticClass: "grey lighten-3" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                )
              ])
            ],
            1
          )
        ],
        1
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-78e5ca92", module.exports)
  }
}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(73)
/* script */
var __vue_script__ = __webpack_require__(91)
/* template */
var __vue_template__ = __webpack_require__(143)
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
Component.options.__file = "resources\\assets\\js\\components\\catalog.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78e5ca92", Component.options)
  } else {
    hotAPI.reload("data-v-78e5ca92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 73:
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

/***/ 91:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Вход" // set a title
  },
  data: function data() {
    return {
      NewCategory: {
        name: ""
      },
      NewSubCategory: {
        name: "",
        parent: null
      },
      Categories: [{
        childrens: []
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    var init = this;
    axios.get("/api/catalog").then(function (resp) {
      init.Categories = resp.data;
    });
  },

  methods: {
    DeleteCategory: function DeleteCategory(id, index) {
      var init = this;
      axios.delete("/api/catalog/" + id).then(function (resp) {
        init.Categories.splice(index, 1);
      }).catch(function (resp) {
        console.log(resp);
      });
    },
    DeleteSubCategory: function DeleteSubCategory(category, id, index) {
      var init = this;
      axios.delete("/api/catalog/" + id).then(function (resp) {
        category.childrens.splice(index, 1);
      }).catch(function (resp) {
        console.log(resp);
      });
    },
    NewCategorySend: function NewCategorySend() {
      if (this.NewCategory.name !== "") {
        var init = this;
        axios.post("/api/catalog", init.NewCategory).then(function (resp) {
          init.Categories.push(resp.data);
          this.NewCategory.name = "";
        }).catch(function (resp) {
          console.log(resp);
        });
      }
    },
    UpdateCategory: function UpdateCategory(category) {
      axios.patch("/api/catalog/" + category.id, category).then(function (resp) {
        category = resp.data;
      }).catch(function (resp) {
        console.log(resp);
      });
    },
    NewSubCategorySend: function NewSubCategorySend(parent) {
      if (this.NewSubCategory.name !== "") {
        this.NewSubCategory.catalog_id = parent.id;
        var init = this;
        axios.post("/api/catalog", init.NewSubCategory).then(function (resp) {
          parent.childrens.push(resp.data);
          this.NewSubCategory.name = "";
        }).catch(function (resp) {
          console.log(resp);
        });
      }
    }
  }
});

/***/ })

});