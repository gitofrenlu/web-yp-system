webpackJsonp([1],{

/***/ "0UpZ":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login_class"
  }, [_c('div', {
    staticClass: "login_content"
  }, [_c('h1', [_vm._v("欢迎登陆")]), _vm._v(" "), _c('el-input', {
    staticClass: "account_class",
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  }, [_c('template', {
    slot: "prepend"
  }, [_vm._v("账号")])], 2), _vm._v(" "), _c('el-input', {
    attrs: {
      "type": "password"
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  }, [_c('template', {
    slot: "prepend"
  }, [_vm._v("密码")])], 2), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "warning"
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登陆")])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ "0eyQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5y2l":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9Lqe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__("P9l9");
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
    created: function () {
        this.loadData(1);
    },
    mounted: function () {},
    data: function () {
        return {
            tableData: [],
            current: 1,
            customerName: "",
            mobile: "",
            status: 4,
            formData: {
                id: null,
                price: null,
                status: 0
            },
            dialogFormVisible: false,
            type: 1,
            formLabelWidth: "60px"
        };
    },
    methods: {
        loadData(current) {

            let param = {
                current: current,
                customerName: this.customerName,
                mobile: this.mobile,
                status: this.status
            };

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["h" /* getOrders */])(param).then(d => {
                if (d.code == this.$responsestatus.success) {
                    this.tableData = d.result;
                } else {
                    this.$message.error(d.message);
                }
            });
        },
        openDialog(type, id, price, status, index1, index2) {
            this.type = type;

            this.formData = {
                id: id,
                price: price,
                status: Number(status)
            };
            if (type == 2) {
                $(`.detail_p_${index1}_${index2}`).hide();
                $(`.detail_input_${index1}_${index2}`).show();
            }
            if (type == 1) {
                this.dialogFormVisible = true;
            }
        },
        addGoods(id, index1, index2) {

            if (this.type == 2) {
                this.formData.id = id;
                this.formData.price = this.tableData.list[index1].details[index2].price;
                this.formData.status = this.tableData.list[index1].details[index2].status;
            }

            if (isNaN(this.formData.price)) {
                this.$message.error("价格格式输入错误");
                return;
            }

            let param = $.extend(this.formData, {
                type: this.type
            });

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["i" /* updateOrderStatus */])(param).then(d => {
                this.dialogFormVisible = false;
                if (d.code == this.$responsestatus.success) {
                    this.$message.success(d.message);
                    if (this.type == 1) {
                        this.loadData(1);
                    }
                    if (this.type == 2) {
                        $(`.detail_p_${index1}_${index2}`).show();
                        $(`.detail_input_${index1}_${index2}`).hide();
                    }
                } else {
                    this.$message.error(d.message);
                }
            });
        },
        removeOrder: function (id) {

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["j" /* removeOrder */])(id).then(d => {
                if (d.code == this.$responsestatus.success) {
                    this.$message.success(d.message);
                    this.loadData(1);
                } else {
                    this.$message.error("删除失败");
                }
            });
        }
    },
    watch: {},
    components: {},
    filters: {
        getStatus(status) {
            status = Number(status);
            switch (status) {
                case 0:
                    return "正常";break;
                case 1:
                    return "停止售卖";break;
                default:
                    return "---";

            }
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "CBUV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FGQs":
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
	name: 'home',
	components: {},
	data() {
		return {};
	},
	methods: {
		routerTo(path) {
			this.$router.push(path);
		}
	},
	created: function () {}
});

/***/ }),

/***/ "I4t6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__("P9l9");
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
    created: function () {},
    mounted: function () {},
    data: function () {
        return {
            account: "",
            password: ""
        };
    },
    methods: {
        login: function () {
            let param = {
                account: this.account,
                password: this.password
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* login */])(param).then(d => {
                if (d.code == this.$responsestatus.success) {
                    this.$localStorage.set('X-key', d.result);
                    this.$router.push("/order");
                } else {
                    this.$message.error(d.message);
                }
            });
        }
    },
    watch: {},
    components: {}
});

/***/ }),

/***/ "JMKc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "K31e":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("z+af")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("I4t6"),
  /* template */
  __webpack_require__("0UpZ"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "KNQf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__("P9l9");
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
    created: function () {
        this.loadData();
    },
    mounted: function () {},
    data: function () {
        return {
            tableData: [],
            dialogFormVisible: false,
            form: {},
            formLabelWidth: '100px',
            title: ["添加类别", "编辑类别"],
            index: 0
        };
    },
    methods: {
        addCategory: function () {

            let param = {
                cateId: this.form.id,
                name: this.form.name,
                status: this.form.status,
                code: this.form.code
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["f" /* updateCategory */])(param).then(d => {
                this.dialogFormVisible = false;
                if (d.code == this.$responsestatus.success) {
                    this.$message.success(d.message);
                    this.loadData();
                } else {
                    this.$message.error(d.message);
                }
            });
        },
        openDialog(idx, row) {
            this.index = idx;
            this.dialogFormVisible = true;

            if (idx == 0) {
                this.form = {
                    id: null,
                    name: "",
                    code: "",
                    status: 0
                };
            }

            if (idx == 1) {
                this.form = {
                    id: row.id,
                    name: row.name,
                    code: row.code,
                    status: Number(row.status)
                };
            }
        },
        loadData() {

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["d" /* getCateList */])().then(d => {
                if (d.code == this.$responsestatus.success) {
                    this.tableData = d.result;
                } else {
                    this.$message.error(d.message);
                }
                this.data = d;
            });
        },
        remove(id) {

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["g" /* removeCate */])(id).then(d => {
                if (d.code == this.$responsestatus.success) {
                    this.$message.success(d.message);
                    this.loadData();
                } else {
                    this.$message.error(d.message);
                }
                this.data = d;
            });
        }

    },
    watch: {},
    components: {},
    filters: {
        getStatus(status) {
            switch (status) {
                case 0:
                    return "正常";break;
                case 1:
                    return "停止售卖";break;
                default:
                    return "---";
            }
        }
    }
});

/***/ }),

/***/ "M93x":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("5y2l")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("xJD8"),
  /* template */
  __webpack_require__("nTcq"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "MiD0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__("P9l9");
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	created: function () {},
	mounted: function () {},
	data: function () {
		return {};
	},
	methods: {},
	watch: {},
	components: {}
});

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_index__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_localstorage__ = __webpack_require__("UnSZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mock_mock__ = __webpack_require__("telf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mock_mock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mock_mock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_js_global_js__ = __webpack_require__("vLzD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_element_ui__ = __webpack_require__("zL8q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_element_ui_lib_theme_chalk_index_css__ = __webpack_require__("tvR6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_element_ui_lib_theme_chalk_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_base_scss__ = __webpack_require__("nzb2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_base_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__style_base_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_common_scss__ = __webpack_require__("WWTk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__style_common_scss__);
















__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6__common_js_global_js__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vue_localstorage___default.a);

$(document).ready(function () {
  //设定标准rem
  // document.documentElement.style.fontSize = window.innerWidth/3.75 + 'px'

});

const router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_3__router_index__["a" /* default */]
});

router.beforeEach((to, from, next) => {

  next();
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  router,
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__App___default.a)
}).$mount('#app');
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "P9l9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* unused harmony export fetch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


let backBase = "/businessBack";

let base = '' + backBase;
// let base = backBase;

let instance = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    timeout: 30000 // request timeout
});

instance.interceptors.request.use(config => {
    config.headers = $.extend({
        'X-key': localStorage.getItem('X-key')
    }, config.headers);
    return config;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {

    let code = response.data.code;
    let msg = response.data.message;

    if (code != 0 && msg == "") {
        response.data.message = "操作失败，请重试";
    }
    if (code == 2) {
        location.href = `#/login`;
        location.reload();
    }

    return response;
}, error => {
    return Promise.reject(error);
});

// 封装axios的post请求
function fetch(url, param, type = "post", data) {

    return new Promise((resolve, reject) => {
        if (type == "post") {
            instance.post(url, param, {
                headers: data
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) {
                    this.$dialog.toast({ mes: "网络连接超时，请稍后重试" });
                }
                reject(error);
            });
        }
        if (type == "get") {
            let params = {
                params: param
            };
            instance.get(url, params, data).then(response => {
                resolve(response.data);
            }).catch(error => {
                if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) {
                    this.$dialog.toast({ mes: "网络连接超时，请稍后重试" });
                }
                reject(error);
            });
        }
    });
}
//utils
const getOrders = param => {
    return fetch(`${base}/getOrders`, param, 'post');
};
/* harmony export (immutable) */ __webpack_exports__["h"] = getOrders;

const updateOrderStatus = param => {
    return fetch(`${base}/updateOrderStatus`, param, 'post');
};
/* harmony export (immutable) */ __webpack_exports__["i"] = updateOrderStatus;

const getCateList = () => {
    return fetch(`${base}/getCateList`, {}, 'get');
};
/* harmony export (immutable) */ __webpack_exports__["d"] = getCateList;

const updateCategory = param => {
    return fetch(`${base}/updateCategory`, param, 'post');
};
/* harmony export (immutable) */ __webpack_exports__["f"] = updateCategory;

const removeCate = param => {
    return fetch(`${base}/removeCate/${param}`, {}, 'get');
};
/* harmony export (immutable) */ __webpack_exports__["g"] = removeCate;

const getGoodList = param => {
    return fetch(`${base}/getGoodList`, param, 'post');
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getGoodList;


const updateGoods = param => {
    return fetch(`${base}/updateGoods`, param, 'post', { 'Content-Type': 'multipart/form-data' });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = updateGoods;

const removeGood = param => {
    return fetch(`${base}/removeGood/${param}`, {}, 'get');
};
/* harmony export (immutable) */ __webpack_exports__["e"] = removeGood;


const removeOrder = param => {
    return fetch(`${base}/removeOrder/${param}`, {}, 'get');
};
/* harmony export (immutable) */ __webpack_exports__["j"] = removeOrder;


const login = param => {
    return fetch(`${base}/login`, param, 'post');
};
/* harmony export (immutable) */ __webpack_exports__["a"] = login;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "R7Pr":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("RtXe")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("9Lqe"),
  /* template */
  __webpack_require__("iKvU"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "RtXe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TQhc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__("P9l9");
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
    created: function () {
        this.loadData();
        this.getCates();
    },
    mounted: function () {},
    data: function () {
        return {
            tableData: [],
            dialogFormVisible: false,
            form: {
                name: "",
                imgUrl: "",
                cateId: "",
                size: "",
                unit: "",
                status: 0,
                file: null
            },
            formLabelWidth: '60px',
            title: ["添加商品", "编辑商品"],
            index: 0,
            formInline: {
                name: "",
                status: 2
            },
            cateList: []
        };
    },
    methods: {
        beforeAvatarUpload(file) {
            const isJPG = file.raw.type === 'image/jpeg' || file.raw.type === 'image/png';

            if (!isJPG) {
                this.$message.error('上传图片只能是 jpg/png 格式!');
                return;
            }
            this.form.imageUrl = file.url;
            this.form.file = file.raw;
        },
        addGoods: function () {

            let formData = new FormData();

            for (let key in this.form) {
                formData.append(key, this.form[key]);
            }

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["b" /* updateGoods */])(formData).then(d => {
                this.dialogFormVisible = false;
                if (d.code == this.$responsestatus.success) {
                    this.$message.success(d.message);
                    this.loadData();
                } else {
                    this.$message.error(d.message);
                }
            });
        },
        openDialog(idx, row) {
            this.index = idx;
            this.dialogFormVisible = true;

            if (idx == 0) {
                this.form = {
                    id: 0,
                    name: "",
                    imgUrl: "",
                    cateId: "",
                    size: "",
                    unit: "",
                    status: 0,
                    file: null
                };
            }

            if (idx == 1) {
                this.form = {
                    id: row.id,
                    name: row.name,
                    imgUrl: this.$baseimgurl + row.imgUrl,
                    cateId: Number(row.cateId),
                    size: row.size,
                    unit: row.unit,
                    status: 0,
                    file: null
                };
            }
        },
        loadData() {

            let param = {
                status: this.formInline.status,
                name: this.formInline.name
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["c" /* getGoodList */])(param).then(d => {
                if (d.code == this.$responsestatus.success) {
                    this.tableData = d.result;
                } else {
                    this.$message.error(d.message);
                }
            });
        },
        getCates() {

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["d" /* getCateList */])().then(d => {
                if (d.code == this.$responsestatus.success) {
                    this.cateList = d.result;
                } else {
                    this.$message.error(d.message);
                }
            });
        },
        remove(id) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["e" /* removeGood */])(id).then(d => {
                if (d.code == this.$responsestatus.success) {
                    this.$message.success(d.message);
                    this.loadData();
                } else {
                    this.$message.error(d.message);
                }
            });
        }
    },
    watch: {},
    components: {},
    filters: {
        getStatus(status) {
            switch (status) {
                case 0:
                    return "正常";break;
                case 1:
                    return "停止售卖";break;
                default:
                    return "---";
            }
        }
    }
});

/***/ }),

/***/ "WWTk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Y36g":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "goods_class"
  }, [_c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "产品名称"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "输入产品名称"
    },
    model: {
      value: (_vm.formInline.name),
      callback: function($$v) {
        _vm.$set(_vm.formInline, "name", $$v)
      },
      expression: "formInline.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "状态"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "状态"
    },
    model: {
      value: (_vm.formInline.status),
      callback: function($$v) {
        _vm.$set(_vm.formInline, "status", $$v)
      },
      expression: "formInline.status"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "全部",
      "value": Number(2)
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "正常",
      "value": Number(0)
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "停止售卖",
      "value": Number(1)
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.loadData
    }
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.openDialog(0)
      }
    }
  }, [_vm._v("添加")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "id"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "category",
      "label": "类别名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "图片"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticClass: "img",
          attrs: {
            "src": _vm.$baseimgurl + scope.row.imgUrl
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "商品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "unit",
      "label": "单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "size",
      "label": "规格"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "status",
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('p', [_vm._v(_vm._s(_vm._f("getStatus")(scope.row.status)))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "创建时间"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('p', [_vm._v(_vm._s(_vm._f("formatDate")(scope.row.createTime)))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "warning",
            "round": "",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.openDialog(1, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "round": "",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.remove(scope.row.id)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.title[_vm.index],
      "visible": _vm.dialogFormVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogFormVisible = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "model": _vm.form
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "名称",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.form.name),
      callback: function($$v) {
        _vm.$set(_vm.form, "name", $$v)
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "类别",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-select', {
    model: {
      value: (_vm.form.cateId),
      callback: function($$v) {
        _vm.$set(_vm.form, "cateId", $$v)
      },
      expression: "form.cateId"
    }
  }, _vm._l((_vm.cateList), function(cate) {
    return _c('el-option', {
      key: cate.id,
      attrs: {
        "label": cate.name,
        "value": cate.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单位",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off",
      "placeholder": "袋"
    },
    model: {
      value: (_vm.form.unit),
      callback: function($$v) {
        _vm.$set(_vm.form, "unit", $$v)
      },
      expression: "form.unit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "规格",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off",
      "placeholder": "1kg"
    },
    model: {
      value: (_vm.form.size),
      callback: function($$v) {
        _vm.$set(_vm.form, "size", $$v)
      },
      expression: "form.size"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "状态",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择状态"
    },
    model: {
      value: (_vm.form.status),
      callback: function($$v) {
        _vm.$set(_vm.form, "status", $$v)
      },
      expression: "form.status"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "正常",
      "value": Number(0)
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "停止售卖",
      "value": Number(1)
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "图片",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-upload', {
    staticClass: "avatar-uploader",
    attrs: {
      "action": "",
      "show-file-list": false,
      "auto-upload": false,
      "on-change": _vm.beforeAvatarUpload
    },
    model: {
      value: (_vm.form.file),
      callback: function($$v) {
        _vm.$set(_vm.form, "file", $$v)
      },
      expression: "form.file"
    }
  }, [(_vm.form.imageUrl) ? _c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.form.imageUrl
    }
  }) : _c('i', {
    staticClass: "el-icon-plus avatar-uploader-icon"
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogFormVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.addGoods()
      }
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index__ = __webpack_require__("dAjm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_category__ = __webpack_require__("ZLiS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_category___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_category__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_goods__ = __webpack_require__("jIjH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_goods___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_goods__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_order__ = __webpack_require__("R7Pr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_order___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_order__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login__ = __webpack_require__("K31e");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home__ = __webpack_require__("wUZA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_home__);










const title = "远鹏粮油";
let routes = [{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_5__components_home___default.a,
    children: [{
        path: '/',
        component: __WEBPACK_IMPORTED_MODULE_3__components_order___default.a,
        meta: { title: title }
    }, {
        path: '/index',
        component: __WEBPACK_IMPORTED_MODULE_3__components_order___default.a,
        meta: { title: title }
    }, {
        path: '/category',
        component: __WEBPACK_IMPORTED_MODULE_1__components_category___default.a,
        meta: { title: title }
    }, {
        path: '/goods',
        component: __WEBPACK_IMPORTED_MODULE_2__components_goods___default.a,
        meta: { title: title }
    }, {
        path: '/order',
        component: __WEBPACK_IMPORTED_MODULE_3__components_order___default.a,
        meta: { title: title }
    }]
}, {
    path: '/login',
    component: __WEBPACK_IMPORTED_MODULE_4__components_login___default.a,
    meta: { title: title }
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "ZLiS":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("0eyQ")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("KNQf"),
  /* template */
  __webpack_require__("esAi"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "dAjm":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("mDSg")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("MiD0"),
  /* template */
  __webpack_require__("xipX"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "esAi":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "category_class"
  }, [_c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.openDialog(0)
      }
    }
  }, [_vm._v("添加")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "id"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "类别名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "code",
      "label": "CODE"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "status",
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('p', [_vm._v(_vm._s(_vm._f("getStatus")(scope.row.status)))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "创建时间"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('p', [_vm._v(_vm._s(_vm._f("formatDate")(scope.row.createTime)))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "warning",
            "round": "",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.openDialog(1, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "round": "",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.remove(scope.row.id)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.title[_vm.index],
      "visible": _vm.dialogFormVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogFormVisible = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "model": _vm.form
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "类别名称",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.form.name),
      callback: function($$v) {
        _vm.$set(_vm.form, "name", $$v)
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "CODE",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.form.code),
      callback: function($$v) {
        _vm.$set(_vm.form, "code", $$v)
      },
      expression: "form.code"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "状态",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择状态"
    },
    model: {
      value: (_vm.form.status),
      callback: function($$v) {
        _vm.$set(_vm.form, "status", $$v)
      },
      expression: "form.status"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "正常",
      "value": Number(0)
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "停止售卖",
      "value": Number(1)
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogFormVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.addCategory()
      }
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ "iKvU":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "order_class"
  }, [_c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "客户昵称"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "输入昵称"
    },
    model: {
      value: (_vm.customerName),
      callback: function($$v) {
        _vm.customerName = $$v
      },
      expression: "customerName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "客户手机号"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "输入手机号"
    },
    model: {
      value: (_vm.mobile),
      callback: function($$v) {
        _vm.mobile = $$v
      },
      expression: "mobile"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "状态"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "状态"
    },
    model: {
      value: (_vm.status),
      callback: function($$v) {
        _vm.status = $$v
      },
      expression: "status"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "全部",
      "value": Number(4)
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "待处理",
      "value": Number(0)
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "处理中",
      "value": Number(1)
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已完成",
      "value": Number(2)
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已取消",
      "value": Number(3)
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.loadData(1)
      }
    }
  }, [_vm._v("搜索")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData.list
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "expand"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('el-table', {
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "data": props.row.details,
            "size": "mini"
          }
        }, [_c('el-table-column', {
          attrs: {
            "prop": "id",
            "label": "ID",
            "width": "90"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "prop": "goodName",
            "label": "商品名称",
            "width": "90"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "prop": "standard",
            "label": "数量",
            "width": "90"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "label": "状态",
            "width": "90"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function(scope) {
              return [_c('p', {
                class: 'detail_p_' + props.$index + '_' + scope.$index
              }, [_vm._v(_vm._s(_vm._f("getStatus")(scope.row.status)))]), _vm._v(" "), _c('el-select', {
                class: ['detail_input', 'detail_input_' + props.$index + '_' + scope.$index],
                attrs: {
                  "placeholder": "请选择状态",
                  "size": "mini"
                },
                model: {
                  value: (scope.row.status),
                  callback: function($$v) {
                    _vm.$set(scope.row, "status", $$v)
                  },
                  expression: "scope.row.status"
                }
              }, [_c('el-option', {
                attrs: {
                  "label": "正常",
                  "value": "0"
                }
              }), _vm._v(" "), _c('el-option', {
                attrs: {
                  "label": "停止售卖",
                  "value": "1"
                }
              })], 1)]
            }
          }])
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "label": "价格",
            "width": "90"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function(scope) {
              return [_c('p', {
                class: 'detail_p_' + props.$index + '_' + scope.$index
              }, [_vm._v(_vm._s(scope.row.price))]), _vm._v(" "), _c('el-input', {
                class: ['detail_input', 'detail_input_' + props.$index + '_' + scope.$index],
                attrs: {
                  "type": "number",
                  "auto-complete": "off",
                  "min": Number(0),
                  "size": "mini"
                },
                model: {
                  value: (scope.row.price),
                  callback: function($$v) {
                    _vm.$set(scope.row, "price", $$v)
                  },
                  expression: "scope.row.price"
                }
              })]
            }
          }])
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "label": "操作"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function(scope) {
              return [_c('el-button', {
                class: 'detail_p_' + props.$index + '_' + scope.$index,
                attrs: {
                  "type": "primary",
                  "icon": "el-icon-edit",
                  "circle": "",
                  "size": "mini"
                },
                on: {
                  "click": function($event) {
                    _vm.openDialog(2, 0, 0, 0, props.$index, scope.$index)
                  }
                }
              }), _vm._v(" "), _c('el-button', {
                class: ['detail_input', 'detail_input_' + props.$index + '_' + scope.$index],
                attrs: {
                  "type": "success",
                  "icon": "el-icon-check",
                  "circle": "",
                  "size": "mini"
                },
                on: {
                  "click": function($event) {
                    _vm.addGoods(scope.row.id, props.$index, scope.$index)
                  }
                }
              })]
            }
          }])
        })], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "ID",
      "prop": "id"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "状态",
      "prop": "statusString"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "创建时间",
      "prop": "createTime"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "客户昵称",
      "prop": "customerName"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "客户手机号",
      "prop": "customerMobile"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "客户地址",
      "prop": "customerAddress"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "总价",
      "prop": "totalPrice"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "icon": "el-icon-edit",
            "circle": "",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.openDialog(1, scope.row.id, scope.row.totalPrice, scope.row.status)
            }
          }
        }), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "icon": "el-icon-delete",
            "circle": "",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.removeOrder(scope.row.id)
            }
          }
        })]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    attrs: {
      "background": "",
      "layout": "prev, pager, next",
      "total": _vm.tableData.total,
      "page-size": 20
    },
    on: {
      "current-change": _vm.loadData
    }
  }), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "修改",
      "visible": _vm.dialogFormVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogFormVisible = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "model": _vm.formData
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "价格",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "auto-complete": "off",
      "min": Number(0)
    },
    model: {
      value: (_vm.formData.price),
      callback: function($$v) {
        _vm.$set(_vm.formData, "price", $$v)
      },
      expression: "formData.price"
    }
  })], 1), _vm._v(" "), (_vm.type == 2) ? _c('el-form-item', {
    attrs: {
      "label": "状态",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择状态"
    },
    model: {
      value: (_vm.formData.status),
      callback: function($$v) {
        _vm.$set(_vm.formData, "status", $$v)
      },
      expression: "formData.status"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "正常",
      "value": Number(0)
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "取消商品",
      "value": Number(1)
    }
  })], 1)], 1) : _c('el-form-item', {
    attrs: {
      "label": "状态",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择状态"
    },
    model: {
      value: (_vm.formData.status),
      callback: function($$v) {
        _vm.$set(_vm.formData, "status", $$v)
      },
      expression: "formData.status"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "待处理",
      "value": Number(0)
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "处理中",
      "value": Number(1)
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已完成",
      "value": Number(2)
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已取消",
      "value": Number(3)
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogFormVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.addGoods()
      }
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ "jIjH":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("CBUV")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("TQhc"),
  /* template */
  __webpack_require__("Y36g"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "mDSg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nTcq":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view', {
    staticClass: "container"
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ "nzb2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "r4lJ":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-container', {
    attrs: {
      "id": "home"
    }
  }, [_c('el-header', [_vm._v("远鹏粮油")]), _vm._v(" "), _c('el-container', [_c('el-aside', {
    attrs: {
      "width": "200px"
    }
  }, [_c('el-menu', {
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": "1"
    }
  }, [_c('el-submenu', {
    attrs: {
      "index": "1"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('p', [_vm._v("数据管理")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-1"
    },
    on: {
      "click": function($event) {
        _vm.routerTo('/category')
      }
    }
  }, [_vm._v("类别管理")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-2"
    },
    on: {
      "click": function($event) {
        _vm.routerTo('/goods')
      }
    }
  }, [_vm._v("商品管理")])], 2), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "2"
    },
    on: {
      "click": function($event) {
        _vm.routerTo('/order')
      }
    }
  }, [_vm._v("订单管理")])], 1)], 1), _vm._v(" "), _c('el-main', [_c('router-view', {
    staticClass: "container"
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ "telf":
/***/ (function(module, exports, __webpack_require__) {

// 引入mockjs
const Mock = __webpack_require__("zNUS");
// 获取 mock.Random 对象
const Random = Mock.Random;
let backBase = "/businessBack";

const base = "/mock" + backBase;
Mock.setup({
    timeout: '500-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
});

const getOrderList = function (status) {
    let data = {
        "result": [],
        code: 0,
        message: "success"
    };

    return data;
};
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(`${base}/getOrderList`, 'post', getOrderList());

/***/ }),

/***/ "tvR6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vLzD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatDate */
/* unused harmony export parseDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");


const responsestatus = {
    success: 0
};
const baseImgUri = "http://ypapi.hikememo.com/static/";
const SIGN_REGEXP = /([yMdhsm])(\1*)/g;
const DEFAULT_PATTERN = 'yyyy-MM-dd';

function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) {
        s = '0' + s;
    }
    return s;
};

function formatDate(date, pattern) {
    if (!date) {
        return "";
    }
    date = new Date(date);
    pattern = pattern || DEFAULT_PATTERN;
    return pattern.replace(SIGN_REGEXP, function ($0) {
        switch ($0.charAt(0)) {
            case 'y':
                return padding(date.getFullYear(), $0.length);
            case 'M':
                return padding(date.getMonth() + 1, $0.length);
            case 'd':
                return padding(date.getDate(), $0.length);
            case 'w':
                return date.getDay() + 1;
            case 'h':
                return padding(date.getHours(), $0.length);
            case 'm':
                return padding(date.getMinutes(), $0.length);
            case 's':
                return padding(date.getSeconds(), $0.length);
        }
    });
}
function parseDate(dateString, pattern) {
    if (!dateString) {
        return "";
    }
    var matchs1 = pattern.match(SIGN_REGEXP);
    var matchs2 = dateString.match(/(\d)+/g);
    if (matchs1.length == matchs2.length) {
        var _date = new Date(1970, 0, 1);
        for (var i = 0; i < matchs1.length; i++) {
            var _int = parseInt(matchs2[i]);
            var sign = matchs1[i];
            switch (sign.charAt(0)) {
                case 'y':
                    _date.setFullYear(_int);break;
                case 'M':
                    _date.setMonth(_int - 1);break;
                case 'd':
                    _date.setDate(_int);break;
                case 'h':
                    _date.setHours(_int);break;
                case 'm':
                    _date.setMinutes(_int);break;
                case 's':
                    _date.setSeconds(_int);break;
            }
        }
        return _date;
    }
    return null;
}

/* harmony default export */ __webpack_exports__["a"] = ({
    install() {

        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$responsestatus = responsestatus;
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$baseimgurl = baseImgUri;
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].filter("formatDate", formatDate);
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].filter("parseDate", parseDate);
    }
});

/***/ }),

/***/ "wUZA":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("JMKc")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("FGQs"),
  /* template */
  __webpack_require__("r4lJ"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'app',
	components: {},
	data() {
		return {};
	},
	methods: {},
	created: function () {}
});

/***/ }),

/***/ "xipX":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page_index"
  }, [_c('p', [_vm._v("index")])])
}]}

/***/ }),

/***/ "z+af":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.059466992c5887507636.js.map