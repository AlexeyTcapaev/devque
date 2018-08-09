webpackJsonp([25],{

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(188)
}
var normalizeComponent = __webpack_require__(76)
/* script */
var __vue_script__ = __webpack_require__(190)
/* template */
var __vue_template__ = __webpack_require__(191)
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
Component.options.__file = "resources\\assets\\js\\components\\SlideCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-070b8e7a", Component.options)
  } else {
    hotAPI.reload("data-v-070b8e7a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(77)("448dc072", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-070b8e7a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SlideCard.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-070b8e7a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SlideCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.v-chip__content h3 {\r\n  margin: 0 10px 0 0;\n}\n.v-chip .v-text-field__details {\r\n  display: none !important;\n}\n.v-chip {\r\n  height: 115px;\n}\n.params li {\r\n  padding: 5px 0;\n}\n.card {\r\n  display: block;\r\n  width: 490px;\r\n  border-radius: 2px;\r\n  min-width: 0;\r\n  position: relative;\r\n  text-decoration: none;\r\n  -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\r\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\r\n          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\r\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\nul {\r\n  padding: 0;\n}\n.padding {\r\n  padding: 10%;\n}\nform {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n  padding: 10px;\n}\n.btntest {\r\n  background: linear-gradient(45deg, #00aeff 50%, #3369e6 100%);\n}\n.btntest:disabled {\r\n  background: rgba(238, 238, 238, 0);\n}\n.card-action a {\r\n  cursor: pointer;\n}\nbutton {\r\n  width: 100%;\r\n  margin: 0 !important;\n}\n.file {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  cursor: pointer;\r\n  z-index: 4;\r\n  opacity: 0;\n}\n.horizontal {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  position: relative;\r\n  max-width: 48% !important;\n}\n.card-image {\r\n  width: 50%;\r\n  padding: 10px;\r\n  height: 100%;\r\n  -webkit-transition: 0.2s linear;\r\n  transition: 0.2s linear;\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\n}\n.card-image img {\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  max-width: 100%;\n}\n.params li span {\r\n  width: 100%;\n}\n.v-chip {\r\n  margin: 0;\n}\n.v-chip .v-chip__content {\r\n  width: 100% !important;\n}\n.card {\r\n  margin: 10px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 190:
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
  props: ["carousel", "products", "index", "slide"],
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
      valid: false,
      targetproduct: ""
    };
  },
  mounted: function mounted() {
    console.log(this.slide);
    if (this.slide !== undefined) {
      this.item = this.slide;
      this.targetproduct = this.slide.product;
      if (this.item.image !== null) this.item.image = "/storage/uploads/" + this.item.image;else this.item.image = "/storage/img/plus.svg";
    }
  },

  methods: {
    destroy: function destroy() {
      var init = this;
      axios.delete("/api/carousel/" + this.item.id).then(function (resp) {
        console.log(resp);
        init.carousel.splice(init.index, 1);
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
        product.append("product_id", this.targetproduct.id);
        product.append("id", this.item.id);
        var init = this;
        axios.post("/api/carousel", product).then(function (resp) {
          console.log(resp);
          init.carousel.push(resp.data);
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
        product.append("product_id", this.targetproduct.id);
        product.append("id", this.item.id);
        var init = this;
        console.log(product.getAll("name"));
        axios.post("/api/carousel/" + this.item.id, product).then(function (resp) {
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

/***/ 191:
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
              _c("v-select", {
                attrs: {
                  items: _vm.products,
                  "item-value": "item",
                  "return-object": "",
                  label: "Выберите продукт",
                  outline: "",
                  "item-text": "name",
                  suffix: "см"
                },
                model: {
                  value: _vm.targetproduct,
                  callback: function($$v) {
                    _vm.targetproduct = $$v
                  },
                  expression: "targetproduct"
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
              _vm.slide
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
              _vm.slide
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
    require("vue-hot-reload-api")      .rerender("data-v-070b8e7a", module.exports)
  }
}

/***/ })

});