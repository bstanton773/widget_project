/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Widget/Canvas.ts":
/*!******************************!*\
  !*** ./src/Widget/Canvas.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas {\n    constructor(parent, _state = {}) {\n        this.parent = parent;\n        this._state = _state;\n        this._widgets = [];\n        this.parent.innerHTML = '';\n        this.parent.id = 'canvas';\n        const newStyle = {\n            display: \"grid\",\n            gridTemplateColumns: \"repeat(12, 1fr)\",\n            gridTemplateRows: \"repeat(12, 1fr)\",\n            height: \"100vh\",\n            columnGap: \"5px\",\n            rowGap: \"5px\",\n            aspectRatio: \"1 / 1\"\n        };\n        Object.assign(this.parent.style, newStyle);\n    }\n    get state() {\n        return this._state;\n    }\n    set state(value) {\n        this._state = Object.assign(Object.assign({}, this._state), value);\n        this.rerender();\n    }\n    get widgets() {\n        return this._widgets;\n    }\n    set widgets(value) {\n        this._widgets = value;\n    }\n    addWidget(widget) {\n        this.widgets.push(widget);\n        widget.canvas = this;\n        this.render();\n    }\n    render() {\n        this.parent.innerHTML = \"\";\n        for (const widget of this.widgets) {\n            this.buildWidget(widget);\n        }\n    }\n    rerender() {\n        for (const widget of this.widgets) {\n            let div = document.getElementById(widget.id);\n            if (this.injectVars(widget, div)) {\n                this.buildWidget(widget);\n            }\n        }\n    }\n    removeWidget(widget) {\n        this.widgets = this.widgets.filter((w) => w.id !== widget.id);\n    }\n    injectVars(widget, div) {\n        let changeState = false;\n        let key;\n        div.innerHTML = widget.content;\n        for (key in this.state) {\n            if (div.innerHTML.includes(`{{ ${key} }}`)) {\n                div.innerHTML = div.innerHTML.split(`{{ ${key} }}`).join(this.state[key]);\n                changeState = true;\n            }\n        }\n        return changeState;\n    }\n    buildWidget(widget) {\n        var _a;\n        let div = this.initializeDiv(widget);\n        this.buildShape(widget, div);\n        this.injectVars(widget, div);\n        this.placeShape(widget, div);\n        this.parent.append(div);\n        (_a = widget.click) === null || _a === void 0 ? void 0 : _a.setClick();\n    }\n    initializeDiv(widget) {\n        let div = document.createElement('div');\n        div.id = widget.id;\n        const newStyle = {\n            margin: \"auto\",\n            width: \"100%\",\n            height: \"100%\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            alignContent: \"center\",\n            padding: \"3%\",\n            aspectRatio: \"1 / 1\"\n        };\n        Object.assign(div.style, newStyle);\n        return div;\n    }\n    buildShape(widget, div) {\n        Object.assign(div.style, widget.shape.attributes);\n    }\n    placeShape(widget, div) {\n        const newStyle = {\n            gridArea: widget.locationTop.toString(),\n            gridColumnStart: widget.locationLeft.toString(),\n            gridColumnEnd: \"span \" + widget.width,\n            gridRowStart: widget.locationTop.toString(),\n            gridRowEnd: \"span \" + widget.height,\n        };\n        Object.assign(div.style, newStyle);\n    }\n}\n\n\n//# sourceURL=webpack://widget-project/./src/Widget/Canvas.ts?");

/***/ }),

/***/ "./src/Widget/Click.ts":
/*!*****************************!*\
  !*** ./src/Widget/Click.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Click)\n/* harmony export */ });\nclass Click {\n    constructor(_widget) {\n        this._widget = _widget;\n        this._widget.click = this;\n    }\n    get widget() {\n        return this._widget;\n    }\n    setClick() {\n        throw new Error(\"Method not implemented\");\n    }\n}\n\n\n//# sourceURL=webpack://widget-project/./src/Widget/Click.ts?");

/***/ }),

/***/ "./src/Widget/Component.ts":
/*!*********************************!*\
  !*** ./src/Widget/Component.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ \"./src/Widget/containers.ts\");\n\n\nclass Component {\n    constructor(_id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), _shape = new _containers__WEBPACK_IMPORTED_MODULE_0__.LeftLeaningContainer(), _width = 2, _height = 2, _locationTop = 1, _locationLeft = 1, _click, _content = '<div></div>', _canvas) {\n        this._id = _id;\n        this._shape = _shape;\n        this._width = _width;\n        this._height = _height;\n        this._locationTop = _locationTop;\n        this._locationLeft = _locationLeft;\n        this._click = _click;\n        this._content = _content;\n        this._canvas = _canvas;\n    }\n    get canvas() {\n        return this._canvas;\n    }\n    set canvas(value) {\n        this._canvas = value;\n    }\n    get click() {\n        return this._click;\n    }\n    set click(value) {\n        this._click = value;\n    }\n    get content() {\n        return this._content;\n    }\n    set content(value) {\n        this._content = value;\n    }\n    get locationLeft() {\n        return this._locationLeft;\n    }\n    set locationLeft(value) {\n        this._locationLeft = value;\n    }\n    get locationTop() {\n        return this._locationTop;\n    }\n    set locationTop(value) {\n        this._locationTop = value;\n    }\n    get height() {\n        return this._height;\n    }\n    set height(value) {\n        this._height = value;\n    }\n    get width() {\n        return this._width;\n    }\n    set width(value) {\n        this._width = value;\n    }\n    get shape() {\n        return this._shape;\n    }\n    set shape(value) {\n        this._shape = value;\n    }\n    get id() {\n        return this._id;\n    }\n    set id(value) {\n        this._id = value;\n    }\n}\n\n\n//# sourceURL=webpack://widget-project/./src/Widget/Component.ts?");

/***/ }),

/***/ "./src/Widget/Container.ts":
/*!*********************************!*\
  !*** ./src/Widget/Container.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Container)\n/* harmony export */ });\nclass Container {\n    constructor(_backgroundColor = \"white\", _borderColor = \"black\", _borderRadius = \"0px\", _borderWidth = \"1px\", _borderStyle = \"solid\", _zIndex = 0) {\n        this._backgroundColor = _backgroundColor;\n        this._borderColor = _borderColor;\n        this._borderRadius = _borderRadius;\n        this._borderWidth = _borderWidth;\n        this._borderStyle = _borderStyle;\n        this._zIndex = _zIndex;\n    }\n    get attributes() {\n        return {\n            backgroundColor: this.backgroundColor,\n            borderColor: this.borderColor,\n            borderRadius: this.borderRadius,\n            borderWidth: this.borderWidth,\n            borderStyle: this.borderStyle,\n            zIndex: this.zIndex\n        };\n    }\n    get zIndex() {\n        return this._zIndex;\n    }\n    set zIndex(value) {\n        this._zIndex = value;\n    }\n    get borderWidth() {\n        return this._borderWidth;\n    }\n    set borderWidth(value) {\n        this._borderWidth = value;\n    }\n    get borderStyle() {\n        return this._borderStyle;\n    }\n    set borderStyle(value) {\n        this._borderStyle = value;\n    }\n    get borderRadius() {\n        return this._borderRadius;\n    }\n    set borderRadius(value) {\n        this._borderRadius = value;\n    }\n    get borderColor() {\n        return this._borderColor;\n    }\n    set borderColor(value) {\n        this._borderColor = value;\n    }\n    get backgroundColor() {\n        return this._backgroundColor;\n    }\n    set backgroundColor(value) {\n        this._backgroundColor = value;\n    }\n}\n\n\n//# sourceURL=webpack://widget-project/./src/Widget/Container.ts?");

/***/ }),

/***/ "./src/Widget/clicks.ts":
/*!******************************!*\
  !*** ./src/Widget/clicks.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RemoveWidgetClick: () => (/* binding */ RemoveWidgetClick),\n/* harmony export */   WidgetClick: () => (/* binding */ WidgetClick)\n/* harmony export */ });\n/* harmony import */ var _Click__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Click */ \"./src/Widget/Click.ts\");\n\nclass WidgetClick extends _Click__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(widget, _callback) {\n        super(widget);\n        this._callback = _callback;\n    }\n    setClick() {\n        const div = document.getElementById(this.widget.id);\n        if (div !== null) {\n            div.addEventListener('click', (e) => { this._callback(e, this.widget); });\n        }\n    }\n}\nclass RemoveWidgetClick extends WidgetClick {\n    constructor(widget, _callback) {\n        super(widget, _callback);\n    }\n    setClick() {\n        var _a;\n        (_a = this.widget.canvas) === null || _a === void 0 ? void 0 : _a.removeWidget(this.widget);\n        super.setClick();\n    }\n}\n\n\n\n//# sourceURL=webpack://widget-project/./src/Widget/clicks.ts?");

/***/ }),

/***/ "./src/Widget/containers.ts":
/*!**********************************!*\
  !*** ./src/Widget/containers.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CircleContainer: () => (/* binding */ CircleContainer),\n/* harmony export */   LeftLeaningContainer: () => (/* binding */ LeftLeaningContainer),\n/* harmony export */   RightLeaningContainer: () => (/* binding */ RightLeaningContainer)\n/* harmony export */ });\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./src/Widget/Container.ts\");\n\nclass LeftLeaningContainer extends _Container__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        this.borderRadius = '10% 25%';\n    }\n}\nclass RightLeaningContainer extends _Container__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        this.borderRadius = '25% 10%';\n    }\n}\nclass CircleContainer extends _Container__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        this.borderRadius = '50%';\n    }\n}\n\n\n\n//# sourceURL=webpack://widget-project/./src/Widget/containers.ts?");

/***/ }),

/***/ "./src/Widget/index.ts":
/*!*****************************!*\
  !*** ./src/Widget/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Canvas: () => (/* reexport safe */ _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   CircleContainer: () => (/* reexport safe */ _containers__WEBPACK_IMPORTED_MODULE_2__.CircleContainer),\n/* harmony export */   Click: () => (/* reexport safe */ _Click__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   Component: () => (/* reexport safe */ _Component__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   Container: () => (/* reexport safe */ _Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   LeftLeaningContainer: () => (/* reexport safe */ _containers__WEBPACK_IMPORTED_MODULE_2__.LeftLeaningContainer),\n/* harmony export */   RemoveWidgetClick: () => (/* reexport safe */ _clicks__WEBPACK_IMPORTED_MODULE_5__.RemoveWidgetClick),\n/* harmony export */   RightLeaningContainer: () => (/* reexport safe */ _containers__WEBPACK_IMPORTED_MODULE_2__.RightLeaningContainer),\n/* harmony export */   WidgetClick: () => (/* reexport safe */ _clicks__WEBPACK_IMPORTED_MODULE_5__.WidgetClick)\n/* harmony export */ });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/Widget/Canvas.ts\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ \"./src/Widget/Container.ts\");\n/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ \"./src/Widget/containers.ts\");\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ \"./src/Widget/Component.ts\");\n/* harmony import */ var _Click__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Click */ \"./src/Widget/Click.ts\");\n/* harmony import */ var _clicks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clicks */ \"./src/Widget/clicks.ts\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://widget-project/./src/Widget/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget */ \"./src/Widget/index.ts\");\n\nconst canvas = new _Widget__WEBPACK_IMPORTED_MODULE_0__.Canvas(document.body);\ncanvas.state = { test: 'Brian', city: 'Chicago' };\nlet rlwidget = new _Widget__WEBPACK_IMPORTED_MODULE_0__.Component();\nrlwidget.shape = new _Widget__WEBPACK_IMPORTED_MODULE_0__.RightLeaningContainer();\n;\nrlwidget.content = `<h1>{{ test }} from {{ city }}!</h1>`;\nrlwidget.height = 4;\nrlwidget.width = 4;\ncanvas.addWidget(rlwidget);\nlet llwidget = new _Widget__WEBPACK_IMPORTED_MODULE_0__.Component();\nllwidget.shape = new _Widget__WEBPACK_IMPORTED_MODULE_0__.LeftLeaningContainer();\n;\nllwidget.locationLeft = 3;\nllwidget.locationTop = 4;\nllwidget.shape.borderColor = 'red';\nllwidget.shape.zIndex = 99;\nllwidget.content = '<h3>Another Widget</h3>';\ncanvas.addWidget(llwidget);\nconst circleWidget = new _Widget__WEBPACK_IMPORTED_MODULE_0__.Component();\ncircleWidget.shape = new _Widget__WEBPACK_IMPORTED_MODULE_0__.CircleContainer();\ncircleWidget.locationLeft = 5;\ncircleWidget.locationTop = 8;\ncircleWidget.content = '<h4>Enlarge!</h4>';\nnew _Widget__WEBPACK_IMPORTED_MODULE_0__.WidgetClick(circleWidget, (_, widget) => {\n    var _a, _b;\n    let widgets = (_a = widget.canvas) === null || _a === void 0 ? void 0 : _a.widgets;\n    for (const w of widgets) {\n        w.width += 2;\n        w.height += 2;\n        (_b = widget.canvas) === null || _b === void 0 ? void 0 : _b.render();\n    }\n});\ncanvas.addWidget(circleWidget);\nconst circleWidget2 = new _Widget__WEBPACK_IMPORTED_MODULE_0__.Component();\ncircleWidget2.shape = new _Widget__WEBPACK_IMPORTED_MODULE_0__.CircleContainer();\ncircleWidget2.locationLeft = 8;\ncircleWidget2.locationTop = 5;\ncircleWidget2.content = '<h4>Decrease!</h4>';\nnew _Widget__WEBPACK_IMPORTED_MODULE_0__.WidgetClick(circleWidget2, (_, widget) => {\n    var _a, _b;\n    let widgets = (_a = widget.canvas) === null || _a === void 0 ? void 0 : _a.widgets;\n    for (const w of widgets) {\n        w.width -= 2;\n        w.height -= 2;\n        (_b = widget.canvas) === null || _b === void 0 ? void 0 : _b.render();\n    }\n});\ncanvas.addWidget(circleWidget2);\n\n\n//# sourceURL=webpack://widget-project/./src/index.ts?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://widget-project/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://widget-project/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://widget-project/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://widget-project/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://widget-project/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://widget-project/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;