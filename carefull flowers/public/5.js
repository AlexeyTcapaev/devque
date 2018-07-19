webpackJsonp([5],{

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(89)
}
var normalizeComponent = __webpack_require__(73)
/* script */
var __vue_script__ = __webpack_require__(91)
/* template */
var __vue_template__ = __webpack_require__(92)
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

/***/ 74:
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

var listToStyles = __webpack_require__(75)

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

/***/ 75:
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


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(74)("6ffcda5f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78e5ca92\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./catalog.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78e5ca92\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./catalog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.sub {\n  margin: 0 0 0 20px;\n}\n.application\n  .theme--light.v-expansion-panel--focusable\n  .v-expansion-panel__container:focus,\n.theme--light\n  .v-expansion-panel--focusable\n  .v-expansion-panel__container:focus {\n  background-color: #fff;\n}\n.v-expansion-panel__header {\n  height: inherit !important;\n}\n.collapsible-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.collapsible-header a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 15px 0;\n}\n.collapsible-header div {\n  min-width: 25%;\n}\n.expansion-panel {\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  border-top: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  margin: 0.5rem 0 1rem 0;\n}\n.collapsible-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  line-height: 1.5;\n  padding: 1rem;\n  background-color: #fff;\n}\n.expansion-panel__header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  line-height: 1.5;\n  padding: 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n.collapsible-body {\n  display: block !important;\n}\n", ""]);

// exports


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

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    [
      _c(
        "v-expansion-panel",
        { staticClass: "collapsible", attrs: { expand: "", focusable: "" } },
        [
          _c(
            "v-expansion-panel-content",
            { attrs: { "hide-actions": "", inset: "" } },
            [
              _c(
                "div",
                {
                  staticClass: "collapsible-header",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c(
                    "div",
                    [
                      _c("a", { on: { click: _vm.NewCategorySend } }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("add")
                        ]),
                        _vm._v("Добавить категорию")
                      ]),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: { label: "Название", outline: "" },
                        model: {
                          value: _vm.NewCategory.name,
                          callback: function($$v) {
                            _vm.$set(_vm.NewCategory, "name", $$v)
                          },
                          expression: "NewCategory.name"
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _vm._l(_vm.Categories, function(category, index) {
            return _c(
              "v-expansion-panel-content",
              { key: category.id, attrs: { "hide-actions": "", inset: "" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "collapsible-header",
                    attrs: { slot: "header" },
                    slot: "header"
                  },
                  [
                    _c(
                      "div",
                      [
                        _c("v-text-field", {
                          attrs: { label: "Название", outline: "" },
                          on: {
                            change: function($event) {
                              _vm.UpdateCategory(category)
                            }
                          },
                          model: {
                            value: category.name,
                            callback: function($$v) {
                              _vm.$set(category, "name", $$v)
                            },
                            expression: "category.name"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            "Подкатегорий: " + _vm._s(category.childrens.length)
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        on: {
                          click: function($event) {
                            _vm.DeleteCategory(category.id, index)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("close")
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "collapsible-body" },
                  [
                    _c(
                      "v-expansion-panel",
                      {
                        staticClass: "collapsible",
                        attrs: { expand: "", focusable: "" }
                      },
                      [
                        _c(
                          "v-expansion-panel-content",
                          { attrs: { "hide-actions": "", inset: "" } },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "collapsible-header sub",
                                attrs: { slot: "header" },
                                slot: "header"
                              },
                              [
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "a",
                                      {
                                        on: {
                                          click: function($event) {
                                            _vm.NewSubCategorySend(category)
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "i",
                                          { staticClass: "material-icons" },
                                          [_vm._v("add")]
                                        ),
                                        _vm._v("Добавить подкатегорию")
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("v-text-field", {
                                      attrs: { label: "Название", outline: "" },
                                      model: {
                                        value: _vm.NewSubCategory.name,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.NewSubCategory,
                                            "name",
                                            $$v
                                          )
                                        },
                                        expression: "NewSubCategory.name"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm._l(category.childrens, function(children, index) {
                          return _c(
                            "v-expansion-panel-content",
                            {
                              key: children.id,
                              attrs: { "hide-actions": "", inset: "" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "collapsible-header sub",
                                  attrs: { slot: "header" },
                                  slot: "header"
                                },
                                [
                                  _c(
                                    "div",
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Название",
                                          outline: ""
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.UpdateCategory(children)
                                          }
                                        },
                                        model: {
                                          value: children.name,
                                          callback: function($$v) {
                                            _vm.$set(children, "name", $$v)
                                          },
                                          expression: "children.name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.DeleteSubCategory(
                                            category,
                                            children.id,
                                            index
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "i",
                                        { staticClass: "material-icons" },
                                        [_vm._v("close")]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ],
                  1
                )
              ]
            )
          })
        ],
        2
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
    require("vue-hot-reload-api")      .rerender("data-v-78e5ca92", module.exports)
  }
}

/***/ })

});