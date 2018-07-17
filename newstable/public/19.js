webpackJsonp([19],{

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(95)
}
var normalizeComponent = __webpack_require__(73)
/* script */
var __vue_script__ = __webpack_require__(97)
/* template */
var __vue_template__ = __webpack_require__(98)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3cf7f910"
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
Component.options.__file = "resources\\assets\\js\\components\\ProductCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cf7f910", Component.options)
  } else {
    hotAPI.reload("data-v-3cf7f910", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(74)("3a9851a3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3cf7f910\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProductCard.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3cf7f910\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProductCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.padding[data-v-3cf7f910] {\n  padding: 10%;\n}\nform[data-v-3cf7f910] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n.btntest[data-v-3cf7f910] {\n  background: linear-gradient(45deg, #00aeff 50%, #3369e6 100%);\n}\n.btntest[data-v-3cf7f910]:disabled {\n  background: rgba(238, 238, 238, 0);\n}\n.card-action a[data-v-3cf7f910] {\n  cursor: pointer;\n}\n.file[data-v-3cf7f910] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  z-index: 4;\n  opacity: 0;\n}\n.horizontal[data-v-3cf7f910] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  max-width: 48% !important;\n}\n.card-image[data-v-3cf7f910] {\n  width: 50%;\n  height: 100%;\n  -webkit-transition: 0.2s linear;\n  transition: 0.2s linear;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.card-image img[data-v-3cf7f910] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 24vw;\n  max-height: 455px;\n}\n.card-image[data-v-3cf7f910]:hover {\n  background-color: rgb(238, 238, 238);\n}\n.card[data-v-3cf7f910] {\n  margin: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 97:
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
  props: ["cat", "prod", "index"],
  data: function data() {
    return {
      item: {
        image: "/img/plus.svg"
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
    };
  },
  mounted: function mounted() {
    if (this.prod !== undefined) {
      this.item = this.prod;
      this.item.image = "/uploads/" + this.item.image;
    }
  },

  methods: {
    destroy: function destroy() {
      var init = this;
      axios.delete("/api/product/" + this.item.id).then(function (resp) {
        console.log(resp);
        init.cat.products.splice(init.index, 1);
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
        product.append("description", this.item.description);
        product.append("oldprice", this.item.oldprice);
        product.append("currentprice", this.item.currentprice);
        product.append("catalog_id", this.cat.id);
        product.append("id", this.item.id);
        var init = this;
        axios.post("/api/product", product).then(function (resp) {
          console.log(resp);
          init.cat.products.push(resp.data);
          init.$refs.form.reset();
          init.item.image = "/img/plus.svg";
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
        product.append("name", this.item.name);
        product.append("description", this.item.description);
        product.append("oldprice", this.item.oldprice);
        product.append("currentprice", this.item.currentprice);
        product.append("catalog_id", this.cat.id);
        product.append("id", this.item.id);
        var init = this;
        console.log(product.getAll("name"));
        axios.post("/api/product/" + this.item.id, product).then(function (resp) {
          init.item = resp.data;
          init.item.image = "/uploads/" + resp.data.image;
        }).catch(function (resp) {
          console.log(resp);
        });
      }
    }
  }
});

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card horizontal" },
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
            _c("img", {
              class: { padding: _vm.isActive },
              attrs: { src: _vm.item.image }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-stacked" }, [
            _c(
              "div",
              { staticClass: "card-content" },
              [
                _c("v-text-field", {
                  attrs: {
                    id: "name",
                    name: "input-1",
                    label: "Наименование",
                    rules: _vm.nameRules,
                    required: ""
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
                  attrs: { id: "desc", name: "input-2", label: "Описание" },
                  model: {
                    value: _vm.item.description,
                    callback: function($$v) {
                      _vm.$set(_vm.item, "description", $$v)
                    },
                    expression: "item.description"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    id: "oldprice",
                    name: "input-3",
                    label: "Старая цена",
                    prefix: " руб.",
                    type: "number"
                  },
                  model: {
                    value: _vm.item.oldprice,
                    callback: function($$v) {
                      _vm.$set(_vm.item, "oldprice", $$v)
                    },
                    expression: "item.oldprice"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    id: "currentprice",
                    name: "input-4",
                    prefix: " руб.",
                    label: "Текущая цена",
                    type: "number",
                    rules: _vm.priceRules,
                    required: ""
                  },
                  model: {
                    value: _vm.item.currentprice,
                    callback: function($$v) {
                      _vm.$set(_vm.item, "currentprice", $$v)
                    },
                    expression: "item.currentprice"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-action" },
              [
                _vm.prod === undefined
                  ? _c(
                      "v-btn",
                      {
                        staticClass: "btntest",
                        attrs: { disabled: !_vm.valid, flat: "", large: "" },
                        on: { click: _vm.submit }
                      },
                      [
                        _vm._v(
                          "\n                  Сохранить\n                "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.prod
                  ? _c(
                      "v-btn",
                      {
                        staticClass: "btntest",
                        attrs: { disabled: !_vm.valid, flat: "", large: "" },
                        on: { click: _vm.update }
                      },
                      [_vm._v("\n                  Обновить\n                ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.prod
                  ? _c(
                      "v-btn",
                      {
                        staticClass: "btntest",
                        attrs: { disabled: !_vm.valid, flat: "", large: "" },
                        on: { click: _vm.destroy }
                      },
                      [_vm._v("\n                  Удалить\n                ")]
                    )
                  : _vm._e()
              ],
              1
            )
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-3cf7f910", module.exports)
  }
}

/***/ })

});