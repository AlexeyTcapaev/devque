webpackJsonp([26],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
}
var normalizeComponent = __webpack_require__(76)
/* script */
var __vue_script__ = __webpack_require__(111)
/* template */
var __vue_template__ = __webpack_require__(112)
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

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(110);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(77)("3659c1aa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3cf7f910\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProductCard.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3cf7f910\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProductCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.v-chip__content h3 {\n  margin: 0 10px 0 0;\n}\n.v-chip .v-text-field__details {\n  display: none !important;\n}\n.v-chip {\n  height: 115px;\n}\n.params li {\n  padding: 5px 0;\n}\n.card {\n  display: block;\n  width: 500px;\n  border-radius: 2px;\n  min-width: 0;\n  position: relative;\n  text-decoration: none;\n  -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\nul {\n  padding: 0;\n}\n.padding {\n  padding: 10%;\n}\nform {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  padding: 10px;\n}\n.btntest {\n  background: linear-gradient(45deg, #00aeff 50%, #3369e6 100%);\n}\n.btntest:disabled {\n  background: rgba(238, 238, 238, 0);\n}\n.card-action a {\n  cursor: pointer;\n}\nbutton {\n  width: 100%;\n  margin: 0 !important;\n}\n.file {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  z-index: 4;\n  opacity: 0;\n}\n.horizontal {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  max-width: 48% !important;\n}\n.card-image {\n  width: 50%;\n  padding: 10px;\n  height: 100%;\n  -webkit-transition: 0.2s linear;\n  transition: 0.2s linear;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.card-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n}\n.params li span {\n  width: 100%;\n}\n.v-chip {\n  margin: 0;\n}\n.v-chip .v-chip__content {\n  width: 100% !important;\n}\n.card {\n  margin: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 111:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["cat", "prod", "index"],
  data: function data() {
    return {
      item: {
        image: "/storage/img/plus.svg",
        options: []
      },
      name: "",
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
      this.prod.options = this.prod.options;
      this.item = this.prod;
      if (this.item.image !== null) this.item.image = "/storage/uploads/" + this.item.image;else this.item.image = "/storage/img/plus.svg";
    }
  },

  methods: {
    AddParam: function AddParam() {
      var a = {
        option: this.name
      };
      this.item.options.push(a);
    },
    deleteParams: function deleteParams(index, event) {
      if (event === false) this.item.options.splice(index, 1);
    },
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
        product.append("options", JSON.stringify(this.item.options));
        var init = this;
        axios.post("/api/product", product).then(function (resp) {
          console.log(resp);
          resp.data.options = resp.data.options;
          init.cat.products.push(resp.data);
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
        product.append("name", this.item.name);
        product.append("description", this.item.description);
        product.append("oldprice", this.item.oldprice);
        product.append("currentprice", this.item.currentprice);
        product.append("catalog_id", this.cat.id);
        product.append("id", this.item.id);
        product.append("options", JSON.stringify(this.item.options));
        var init = this;
        console.log(product.getAll("name"));
        axios.post("/api/product/" + this.item.id, product).then(function (resp) {
          resp.data.options = JSON.parse(resp.data.options);
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

/***/ 112:
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
                attrs: { label: "Описание", outline: "" },
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
                attrs: { suffix: "₽", label: "Старая цена", outline: "" },
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
                attrs: { suffix: "₽", label: "Текущая цена", outline: "" },
                model: {
                  value: _vm.item.currentprice,
                  callback: function($$v) {
                    _vm.$set(_vm.item, "currentprice", $$v)
                  },
                  expression: "item.currentprice"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  suffix: "см",
                  label: "Добавить длину",
                  outline: "",
                  "append-icon": "add"
                },
                on: { "click:append": _vm.AddParam },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "params" },
                _vm._l(_vm.item.options, function(opt, index) {
                  return _c(
                    "li",
                    { key: index },
                    [
                      _c(
                        "v-chip",
                        {
                          attrs: { close: "" },
                          on: {
                            input: function($event) {
                              _vm.deleteParams(index, $event)
                            }
                          }
                        },
                        [
                          _c("h3", [_vm._v(_vm._s(opt.option) + " см. ")]),
                          _c("v-text-field", {
                            attrs: { label: "Цена", outline: "", suffix: "₽" },
                            model: {
                              value: opt.price,
                              callback: function($$v) {
                                _vm.$set(opt, "price", $$v)
                              },
                              expression: "opt.price"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                })
              ),
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
              _vm.prod
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
              _vm.prod
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
    require("vue-hot-reload-api")      .rerender("data-v-3cf7f910", module.exports)
  }
}

/***/ })

});