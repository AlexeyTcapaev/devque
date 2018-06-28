webpackJsonp([3],{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(67)
}
var normalizeComponent = __webpack_require__(60)
/* script */
var __vue_script__ = __webpack_require__(69)
/* template */
var __vue_template__ = __webpack_require__(70)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eb1453bc"
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
Component.options.__file = "resources\\assets\\js\\components\\login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eb1453bc", Component.options)
  } else {
    hotAPI.reload("data-v-eb1453bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 60:
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

/***/ 61:
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

var listToStyles = __webpack_require__(62)

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

/***/ 62:
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

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(61)("25f29e17", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb1453bc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb1453bc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.breadcrumbs[data-v-eb1453bc] {\r\n  width: 100%;\r\n  background-color: #ffaf60;\n}\n.container[data-v-eb1453bc] {\n}\n.bread[data-v-eb1453bc] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  min-height: 64px;\n}\n.breadcrumb[data-v-eb1453bc] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  font-size: 18px;\r\n  color: rgba(255, 255, 255, 0.7);\n}\n.breadcrumb[data-v-eb1453bc]:not:last-child:before {\r\n  content: \"\\E5CC\";\r\n  color: rgba(255, 255, 255, 0.7);\r\n  vertical-align: top;\r\n  display: inline-block;\r\n  font-family: \"Material Icons\";\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 25px;\r\n  margin: 0 10px 0 8px;\r\n  -webkit-font-smoothing: antialiased;\n}\n.breadcrumb[data-v-eb1453bc]:last-child {\r\n  color: #fff;\n}\n*[data-v-eb1453bc] {\r\n  outline: none !important;\n}\n[type=\"radio\"]:not(:checked) + label[data-v-eb1453bc]:before,\r\n[type=\"radio\"]:not(:checked) + label[data-v-eb1453bc]:after {\r\n  border: 2px solid black;\n}\n[type=\"radio\"]:not(:checked) + label[data-v-eb1453bc]:before,\r\n[type=\"radio\"]:not(:checked) + label[data-v-eb1453bc]:after {\r\n  border-radius: 0;\n}\n[type=\"radio\"]:not(:checked) + label[data-v-eb1453bc] {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  position: relative;\r\n  cursor: pointer;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 107px;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 135px;\r\n  text-align: center;\r\n  padding: 3px;\r\n  line-height: 25px;\r\n  font-size: 1rem;\r\n  -webkit-transition: 0.28s ease;\r\n  transition: 0.28s ease;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\n}\n.form[data-v-eb1453bc] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\n}\n.my-input[data-v-eb1453bc] {\r\n  -webkit-box-shadow: none !important;\r\n          box-shadow: none !important;\r\n  border: 1px solid #ffaf60 !important;\r\n  margin: 0 !important;\r\n  padding: 0 0 0 10px !important;\r\n  height: 47px !important;\r\n  -webkit-box-sizing: border-box !important;\r\n          box-sizing: border-box !important;\n}\n.input-field.s3[data-v-eb1453bc] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-width: 300px;\n}\n.s3[data-v-eb1453bc] {\r\n  margin-left: 0 !important;\n}\n.my-input[data-v-eb1453bc]:focus {\r\n  border-bottom: none;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\n}\n[type=\"checkbox\"]:checked + label[data-v-eb1453bc]:before {\r\n  top: -4px;\r\n  left: -5px;\r\n  width: 12px;\r\n  height: 22px;\r\n  border-top: 2px solid transparent;\r\n  border-left: 2px solid transparent;\r\n  border-right: 2px solid #ffaf60;\r\n  border-bottom: 2px solid #ffaf60;\n}\n.form .input-field a.btn-flat[data-v-eb1453bc] {\r\n  z-index: -1;\r\n  background-color: #ffaf60;\r\n  color: white;\r\n  border-radius: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 47px;\r\n  min-width: 47px;\r\n  height: 47px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\n}\ninput[data-v-eb1453bc] {\r\n  -webkit-appearance: none !important;\n}\n.flower-height [type=\"radio\"]:not(:checked) + label[data-v-eb1453bc]:before,\r\n.flower-height [type=\"radio\"]:not(:checked) + label[data-v-eb1453bc]:after {\r\n  border-radius: 0;\n}\n.flower-height [type=\"radio\"]:not(:checked) + label[data-v-eb1453bc]:before,\r\n.flower-height [type=\"radio\"]:not(:checked) + label[data-v-eb1453bc]:after {\r\n  border: 2px solid black;\n}\n.flower-height [type=\"radio\"]:not(:checked) + label[data-v-eb1453bc] {\r\n  position: relative;\r\n  cursor: pointer;\r\n  width: 55px;\r\n  padding: 0;\r\n  height: 24px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  margin: 4px;\r\n  height: 25px;\r\n  line-height: 25px;\r\n  font-size: 1rem;\r\n  -webkit-transition: 0.28s ease;\r\n  transition: 0.28s ease;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\n}\n.auth[data-v-eb1453bc] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\n}\n.buy[data-v-eb1453bc] {\r\n  background-color: #ffaf60;\r\n  border-radius: 0;\r\n  color: #ffffff;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  -webkit-transition: 0.2s linear;\r\n  transition: 0.2s linear;\n}\n.buy[data-v-eb1453bc]:hover {\r\n  background-color: rgba(255, 173, 96, 0.6);\n}\n.row[data-v-eb1453bc]:after {\r\n  content: \"\";\r\n  display: none;\r\n  clear: both;\n}\n@media only screen and (max-width: 320px) {\n.row[data-v-eb1453bc] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 8px;\n}\n}\n@media only screen and (max-width: 375px) {\n[type=\"radio\"]:not(:checked) + label[data-v-eb1453bc] {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    position: relative;\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 107px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 116px;\r\n    text-align: center;\r\n    padding: 0;\r\n    line-height: 25px;\r\n    font-size: 0.9rem;\r\n    -webkit-transition: 0.28s ease;\r\n    transition: 0.28s ease;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\n}\n}\n@media only screen and (max-width: 412px) {\n.btn-large[data-v-eb1453bc] {\r\n    height: 36px;\r\n    line-height: 36px;\n}\n}\n@media only screen and (max-width: 414px) {\n.row[data-v-eb1453bc]:after {\r\n    content: \"\";\r\n    display: none;\r\n    clear: both;\n}\n.btn-large[data-v-eb1453bc] {\r\n    height: 36px;\r\n    line-height: 36px;\n}\n}\n@media only screen and (max-width: 320px) {\n[type=\"radio\"]:not(:checked) + label[data-v-eb1453bc] {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    position: relative;\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 97px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 97px;\r\n    text-align: center;\r\n    padding: 0;\r\n    font-size: 0.8rem;\r\n    line-height: 15px;\r\n    -webkit-transition: 0.28s ease;\r\n    transition: 0.28s ease;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 69:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Вход" // set a title
  }
});

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", [
    _c("div", { staticClass: "breadcrumbs" }, [
      _c(
        "div",
        { staticClass: "container bread" },
        [
          _c("router-link", { staticClass: "breadcrumb", attrs: { to: "/" } }, [
            _vm._v("Главная")
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            { staticClass: "breadcrumb", attrs: { to: { name: "login" } } },
            [_vm._v("Авторизация")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c("h5", [_vm._v("Пожалуйста,авторизуйтесь")]),
      _vm._v(" "),
      _c("div", { staticClass: "row form" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "input-field col s3 auth" },
          [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Забыли пароль?")]),
            _vm._v(" "),
            _c("router-link", { attrs: { to: { name: "registration" } } }, [
              _vm._v("Зарегестрироваться")
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-field col s3" }, [
      _c("a", { staticClass: "waves-effect waves-light btn-flat" }, [
        _c("i", { staticClass: "material-icons" }, [_vm._v("account_circle")])
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "my-input",
        attrs: {
          id: "username",
          type: "text",
          required: "",
          placeholder: "ЛОГИН"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-field col s3" }, [
      _c("a", { staticClass: "waves-effect waves-light btn-flat" }, [
        _c("i", { staticClass: "material-icons" }, [_vm._v("vpn_key")])
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "my-input",
        attrs: {
          id: "password",
          type: "password",
          required: "",
          placeholder: "ПАРОЛЬ"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "col s3", attrs: { action: "#" } }, [
      _c("p", [
        _c("input", { attrs: { id: "test5", type: "checkbox" } }),
        _vm._v(" "),
        _c("label", { attrs: { for: "test5" } }, [_vm._v("Запомнить меня")])
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "btn-large waves-effect buy" }, [_vm._v("Войти")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-eb1453bc", module.exports)
  }
}

/***/ })

});