webpackJsonp([17],{

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(262)
}
var normalizeComponent = __webpack_require__(76)
/* script */
var __vue_script__ = __webpack_require__(264)
/* template */
var __vue_template__ = __webpack_require__(265)
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
Component.options.__file = "resources\\assets\\js\\components\\InstSlideCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d5e5154", Component.options)
  } else {
    hotAPI.reload("data-v-1d5e5154", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(263);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(77)("3edaf296", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d5e5154\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InstSlideCard.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d5e5154\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InstSlideCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.v-chip__content h3 {\r\n  margin: 0 10px 0 0;\n}\n.v-chip .v-text-field__details {\r\n  display: none !important;\n}\n.v-chip {\r\n  height: 115px;\n}\n.params li {\r\n  padding: 5px 0;\n}\n.card {\r\n  display: block;\r\n  width: 500px;\r\n  border-radius: 2px;\r\n  min-width: 0;\r\n  position: relative;\r\n  text-decoration: none;\r\n  -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\r\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\r\n          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\r\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\nul {\r\n  padding: 0;\n}\n.padding {\r\n  padding: 10%;\n}\nform {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n  padding: 10px;\n}\n.btntest {\r\n  background: linear-gradient(45deg, #00aeff 50%, #3369e6 100%);\n}\n.btntest:disabled {\r\n  background: rgba(238, 238, 238, 0);\n}\n.card-action a {\r\n  cursor: pointer;\n}\nbutton {\r\n  width: 100%;\r\n  margin: 0 !important;\n}\n.file {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  cursor: pointer;\r\n  z-index: 4;\r\n  opacity: 0;\n}\n.horizontal {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  position: relative;\r\n  max-width: 48% !important;\n}\n.card-image {\r\n  width: 50%;\r\n  padding: 10px;\r\n  height: 100%;\r\n  -webkit-transition: 0.2s linear;\r\n  transition: 0.2s linear;\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\n}\n.card-image img {\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  max-width: 100%;\n}\n.params li span {\r\n  width: 100%;\n}\n.v-chip {\r\n  margin: 0;\n}\n.v-chip .v-chip__content {\r\n  width: 100% !important;\n}\n.card {\r\n  margin: 10px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 264:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["slide", "slides", "index"],
  data: function data() {
    return {
      item: {
        image: "/storage/img/plus.svg"
      },
      isActive: true
    };
  },
  mounted: function mounted() {
    if (this.slide !== undefined) {
      this.item = this.slide;
      if (this.item.image !== null) this.item.image = "/storage/uploads/" + this.item.image;else this.item.image = "/storage/img/plus.svg";
    }
  },

  methods: {
    destroy: function destroy() {
      var init = this;
      axios.delete("/api/instcarousel/" + this.item.id).then(function (resp) {
        console.log(resp);
        init.slides.splice(init.index, 1);
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
        product.append("link", this.item.link);
        product.append("title", this.item.title);
        product.append("id", this.item.id);
        var init = this;
        axios.post("/api/instcarousel", product).then(function (resp) {
          console.log(resp);
          init.slides.push(resp.data);
          init.$refs.form.reset();
          init.item.image = "/storage/img/plus.svg";
        }).catch(function (resp) {
          console.log(resp);
        });
      }
    },
    update: function update() {
      if (this.$refs.form.validate()) {
        var product = new FormData();
        product.append("_method", "PATCH");
        product.append("image", this.$refs.file.files[0]);
        product.append("link", this.item.link);
        product.append("title", this.item.title);
        product.append("id", this.item.id);
        var init = this;
        axios.post("/api/instcarousel/" + this.item.id, product).then(function (resp) {
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

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card" },
    [
      _c("v-form", { ref: "form" }, [
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
              attrs: { label: "Ссылка", outline: "" },
              model: {
                value: _vm.item.link,
                callback: function($$v) {
                  _vm.$set(_vm.item, "link", $$v)
                },
                expression: "item.link"
              }
            }),
            _vm._v(" "),
            _c("v-text-field", {
              attrs: { suffix: "@", label: "Название", outline: "" },
              model: {
                value: _vm.item.title,
                callback: function($$v) {
                  _vm.$set(_vm.item, "title", $$v)
                },
                expression: "item.title"
              }
            }),
            _vm._v(" "),
            _c("v-btn", { attrs: { flat: "" }, on: { click: _vm.submit } }, [
              _vm._v("Создать")
            ]),
            _vm._v(" "),
            _vm.slide
              ? _c(
                  "v-btn",
                  { attrs: { flat: "" }, on: { click: _vm.update } },
                  [_vm._v("Обновить")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.slide
              ? _c(
                  "v-btn",
                  { attrs: { flat: "" }, on: { click: _vm.destroy } },
                  [_vm._v("Удалить")]
                )
              : _vm._e()
          ],
          1
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-1d5e5154", module.exports)
  }
}

/***/ })

});