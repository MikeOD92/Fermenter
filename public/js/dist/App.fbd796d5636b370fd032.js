/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nconst NavBar = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"NavBar\"\n  }, props.routes.filter(item => !item.path.includes(':')).map((_ref) => {\n    let {\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      key: key,\n      to: path\n    }, key);\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (NavBar);\n\n//# sourceURL=webpack:///./src/components/NavBar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction About(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"AboutPage\"\n  }, \"This is the \", props.page, \" page\");\n}\n\n//# sourceURL=webpack:///./src/pages/About.js?");

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction App(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"AppPage\"\n  }, \"This is the \", props.page, \" page\");\n}\n\n//# sourceURL=webpack:///./src/pages/App.js?");

/***/ }),

/***/ "./src/pages/BeerRecipe.js":
/*!*********************************!*\
  !*** ./src/pages/BeerRecipe.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BeerRecipe; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction BeerRecipe(props) {\n  const [beer, setBeer] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/beers/\".concat(props.match.params.id));\n        const data = yield response.json();\n        console.log(data.ingredients.malt);\n        setBeer(data);\n        console.log(beer);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"recipe-head\"\n  }, beer.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, beer.name) : '', beer.style ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, beer.style) : '', beer.description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, beer.description) : '', beer.abv ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \" abv: \", beer.abv) : '', beer.ibu ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \" ibu: \", beer.ibu) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \" ingredients\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \" Grain Bill/ Malts\"), beer.ingredients ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, beer.ingredients.malt.map(item => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      key: item.name\n    }, ' ', item.name, \" :: \", item.amount.value, \" \", item.amount.unit);\n  })) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Hops\"), beer.ingredients ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, beer.ingredients.hops.map((item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: \"\".concat(item.name).concat(item.index)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, item.name), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: \"\".concat(item.amount.unit).concat(index)\n    }, item.amount.value, \" \", item.amount.unit), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: item.add\n    }, \"add: \", item.add), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: item.attribute\n    }, \" attribute: \", item.attribute)));\n  })) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \" Yeast\"), beer.ingredients ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" \", beer.ingredients.yeast) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"instructions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \" Yeild\"), beer.volume ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, ' ', \"Makes : \", beer.volume.value, \" \", beer.volume.unit)) : '', beer.boil ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, ' ', \"Boil : \", beer.boil.value, \" \", beer.boil.unit, ' ')) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Mash\"), beer.method ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, ' ', \"steep gains at \", beer.method.mash.temp, \"C for\", ' ', beer.method.mash.duration, \" mins\", ' ')) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Ferment\"), beer.method ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, ' ', \"ferment at \", beer.method.ferment.temp, \"C for\", ' ', beer.method.ferment.time, ' ')) : ''));\n}\n\n//# sourceURL=webpack:///./src/pages/BeerRecipe.js?");

/***/ }),

/***/ "./src/pages/BeerRecipeEdit.js":
/*!*************************************!*\
  !*** ./src/pages/BeerRecipeEdit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/pages/BeerRecipeEdit.js?");

/***/ }),

/***/ "./src/pages/Beers.js":
/*!****************************!*\
  !*** ./src/pages/Beers.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Beers; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction Beers(props) {\n  const [beers, setBeers] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch('/api/beers');\n        const data = yield response.json();\n        setBeers(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Beer-Recipes\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" Beer Recipes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, beers.map(item => {\n    //how do i make it to ths show page\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      to: \"/beers/\".concat(item._id),\n      key: \"\".concat(item._id).concat(item.name),\n      props: props\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", item.name, \" \"), ' ');\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/Beers.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"HomePage\"\n  }, \"This is the \", props.page, \" page\");\n}\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/LactoRecipe.js":
/*!**********************************!*\
  !*** ./src/pages/LactoRecipe.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return LactoRecipe; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction LactoRecipe(props) {\n  const [currentFerment, setFerment] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/lactoferments/\".concat(props.match.params.id));\n        const data = yield response.json();\n        setFerment(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"recipe-head\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" \", currentFerment.name ? currentFerment.name : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \" \", currentFerment.description ? currentFerment.description : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"recipe-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \" ingredients \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, currentFerment.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: \"firstIngredent\".concat(currentFerment._id)\n  }, ' ', currentFerment.ingredients.main[0].name, \" ::\", ' ', currentFerment.ingredients.main[0].amount.value, ' ', currentFerment.ingredients.main[0].amount.unit) : '', currentFerment.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: \"Salt\".concat(currentFerment._id)\n  }, \"Salt:: \", currentFerment.ingredients.salt.amount.value, ' ', currentFerment.ingredients.salt.amount.unit) : '', currentFerment.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Aromatics:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, currentFerment.ingredients.other.map(item => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: \"\".concat(item._id).concat(item.name)\n    }, item.name, \" :: \", item.amount.value, \" \", item.amount.unit);\n  }))) : ''), currentFerment.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, currentFerment.volume ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \" Volume \"), currentFerment.volume.val, \" - \", currentFerment.volume.unit) : '') : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \" Method\"), currentFerment.method ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, ' ', \"Ferment at \", currentFerment.method.ferment.temp, \"C for\", ' ', currentFerment.method.ferment.duration)) : ''));\n}\n\n//# sourceURL=webpack:///./src/pages/LactoRecipe.js?");

/***/ }),

/***/ "./src/pages/LactoRecipeEdit.js":
/*!**************************************!*\
  !*** ./src/pages/LactoRecipeEdit.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/pages/LactoRecipeEdit.js?");

/***/ }),

/***/ "./src/pages/Lactoferments.js":
/*!************************************!*\
  !*** ./src/pages/Lactoferments.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Lactoferments; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction Lactoferments(props) {\n  const [ferments, setFerments] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch('/api/lactoferments');\n        const data = yield response.json();\n        setFerments(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"LactoFerments\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" Lacto Fermentaion Recipes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, ferments.map(item => {\n    //how do i make it to ths show page\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      to: \"/lactoferments/\".concat(item._id),\n      key: \"\".concat(item._id).concat(item.name)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", item.name, \" \"), ' ');\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/Lactoferments.js?");

/***/ }),

/***/ "./src/pages/NewBeer.js":
/*!******************************!*\
  !*** ./src/pages/NewBeer.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return NewBeerForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction NewBeerForm(props) {\n  const [beers, setBeers] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const volumeVal = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const volumeUnit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const boilValue = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const boilUnit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const mashTemp = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const mashDuration = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const fermentTemp = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const fermentDuration = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const maltValue = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const maltunit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const maltName = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const hopValue = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const hopUnit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const hopName = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const hopAdd = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const hopAttr = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const yeast = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const name = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const style = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const description = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const abv = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const ibu = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  const handleSubmit = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (e) {\n      e.preventDefault;\n      const volumeValVal = volumeVal.current.value;\n      const volumeUnitVal = volumeUnit.current.value;\n      const boilValueVal = boilValue.current.value;\n      const boilUnitVal = boilUnit.current.value;\n      const mashTempVal = mashTemp.current.value;\n      const mashDurationVal = mashDuration.current.value;\n      const fermentTempVal = fermentTemp.current.value;\n      const fermentDurationVal = fermentDuration.current.value;\n      const maltValueVal = maltValue.current.value;\n      const maltunitVal = maltunit.current.value;\n      const maltNameVal = maltName.current.value;\n      const hopValueVal = hopValue.current.value;\n      const hopUnitVal = hopUnit.current.value;\n      const hopNameVal = hopName.current.value;\n      const hopAddVal = hopAdd.current.value;\n      const hopAttrVal = hopAttr.current.value;\n      const yeastVal = yeast.current.value;\n      const nameVal = name.current.value;\n      const styleVal = style.current.value;\n      const descriptionVal = description.current.value;\n      const abvVal = abv.current.value;\n      const ibuVal = ibu.current.value;\n\n      try {\n        const response = yield fetch('/api/beers', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify({\n            name: nameVal,\n            style: styleVal,\n            description: descriptionVal,\n            abv: abvVal,\n            ibu: ibuVal,\n            Volume: {\n              val: volumeValVal,\n              unit: volumeUnitVal\n            },\n            boil: {\n              value: boilValueVal,\n              unit: boilUnitVal\n            },\n            method: {\n              mash: {\n                temp: mashTempVal,\n                duration: mashDurationVal\n              },\n              ferment: {\n                temp: fermentTempVal,\n                time: fermentDurationVal\n              }\n            },\n            ingredients: {\n              malt: [{\n                amount: {\n                  value: maltValueVal,\n                  unit: maltunitVal\n                },\n                name: maltNameVal\n              }],\n              hops: [{\n                amount: {\n                  value: hopValueVal,\n                  unit: hopUnitVal\n                },\n                name: hopNameVal,\n                add: hopAddVal,\n                attribute: hopAttrVal\n              }],\n              yeast: yeastVal\n            }\n          })\n        });\n        const data = yield response.json();\n        setBeers([...beers, data]);\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"newbeerForm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Brew Name\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: name\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Style\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: style\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Description\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: description\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"abv\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    ref: abv\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"ibu\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    ref: ibu\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Volume amount\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    ref: volumeVal\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Volume unit\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: volumeUnit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Boil amount\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    ref: boilValue\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Boil unit\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: boilUnit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Mash tempature\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    ref: mashTemp\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Mash duration \", '(mins)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    ref: mashDuration\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Fermentaion temp \", \"(C)\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: fermentTemp\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Fermentation duration\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: fermentDuration\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Malt name\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: maltName\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Malt amount\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    ref: maltValue\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Malt unit\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: maltunit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Hop Name\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: hopName\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Hop amount\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    ref: hopValue\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Hop unit\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: hopUnit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Hop add\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: hopAdd\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Hop attribute\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: hopAttr\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"yeast\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: yeast\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Create beer recipe\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\"\n  }))));\n}\n\n//# sourceURL=webpack:///./src/pages/NewBeer.js?");

/***/ }),

/***/ "./src/pages/NewLactoferment.js":
/*!**************************************!*\
  !*** ./src/pages/NewLactoferment.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return NewLactoFerment; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction NewLactoFerment(props) {\n  const [lactoferments, setlactoFerments] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const volumeVal = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const volumeUnit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const fermentTemp = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const fermentDuration = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const saltAmount = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const saltUnit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const mainName = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const mainUnit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const mainValue = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const otherName = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const otherValue = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const otherUnit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const name = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const description = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  const handleSubmit = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (e) {\n      e.preventDefault;\n      const volumeValVal = volumeVal.current.value;\n      const volumeUnitVal = volumeUnit.current.value;\n      const fermentTempVal = fermentTemp.current.value;\n      const fermentDurationVal = fermentDuration.current.value;\n      const saltValueVal = saltAmount.current.value;\n      const saltUnitVal = saltUnit.current.value;\n      const mainNameVal = mainName.current.value;\n      const mainUnitVal = mainUnit.current.value;\n      const mainValueVal = mainValue.current.value;\n      const otherNameVal = otherName.current.value;\n      const otherValueVal = otherValue.current.value;\n      const otherUnitVal = otherUnit.current.value;\n      const nameVal = name.current.value;\n      const descriptionVal = description.current.value;\n\n      try {\n        const response = yield fetch('/api/lactoferments', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify({\n            name: nameVal,\n            description: descriptionVal,\n            volume: {\n              val: volumeValVal,\n              unit: volumeUnitVal\n            },\n            method: {\n              ferment: {\n                temp: fermentTempVal,\n                duration: fermentDurationVal\n              }\n            },\n            ingredients: {\n              salt: {\n                amount: {\n                  value: saltValueVal,\n                  unit: saltUnitVal\n                }\n              },\n              main: [{\n                amount: {\n                  value: mainValueVal,\n                  unit: mainUnitVal\n                },\n                name: mainNameVal\n              }],\n              other: [{\n                amount: {\n                  value: otherValueVal,\n                  unit: otherUnitVal\n                },\n                name: otherNameVal\n              }]\n            }\n          })\n        });\n        const data = yield response.json();\n        setlactoFerments([...lactoferments, data]);\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"newLactofermentForm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Recipe Name\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: name\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Description\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: description\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Volume amount\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    ref: volumeVal\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Volume unit\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: volumeUnit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Fermentaion temp \", \"(C)\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: fermentTemp\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Fermentation duration\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: fermentDuration\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Main ingredient\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: mainName\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Main amount\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: mainValue\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Main unit\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: mainUnit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"salt amount\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    ref: saltAmount\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"salt unit\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: saltUnit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Other name\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: otherName\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"other amount\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    ref: otherValue\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"other unit\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    ref: otherUnit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Create Fermentaion recipe\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\"\n  }))));\n}\n\n//# sourceURL=webpack:///./src/pages/NewLactoferment.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst AppRouter = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    routes: _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].map((_ref) => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      component: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({\n        page: key\n      }, props))\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/About */ \"./src/pages/About.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_Lactoferments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Lactoferments */ \"./src/pages/Lactoferments.js\");\n/* harmony import */ var _pages_Beers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Beers */ \"./src/pages/Beers.js\");\n/* harmony import */ var _pages_LactoRecipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/LactoRecipe */ \"./src/pages/LactoRecipe.js\");\n/* harmony import */ var _pages_BeerRecipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/BeerRecipe */ \"./src/pages/BeerRecipe.js\");\n/* harmony import */ var _pages_BeerRecipeEdit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/BeerRecipeEdit */ \"./src/pages/BeerRecipeEdit.js\");\n/* harmony import */ var _pages_BeerRecipeEdit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_pages_BeerRecipeEdit__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _pages_LactoRecipeEdit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/LactoRecipeEdit */ \"./src/pages/LactoRecipeEdit.js\");\n/* harmony import */ var _pages_LactoRecipeEdit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_pages_LactoRecipeEdit__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _pages_NewBeer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/NewBeer */ \"./src/pages/NewBeer.js\");\n/* harmony import */ var _pages_NewLactoferment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/NewLactoferment */ \"./src/pages/NewLactoferment.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst routes = [// {\n// \tComponent: LactoRecipeEdit,\n// \tkey: 'LactoRecipeEdit',\n// \tpath: '/lactoferments/:id/edit'\n// },\n// {\n// \tComponent: BeerRecipeEdit,\n// \tkey: 'BeerRecipeEdit',\n// \tpath: '/beers/:id/edit'\n// },\n{\n  Component: _pages_NewBeer__WEBPACK_IMPORTED_MODULE_10__[/* default */ \"a\"],\n  key: 'NewBeer',\n  path: '/beers/new'\n}, {\n  Component: _pages_NewLactoferment__WEBPACK_IMPORTED_MODULE_11__[/* default */ \"a\"],\n  key: 'NewLactoFerment',\n  path: '/lactoferments/new'\n}, {\n  Component: _pages_LactoRecipe__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"],\n  key: 'LactoRecipe',\n  path: '/lactoferments/:id'\n}, {\n  Component: _pages_BeerRecipe__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"],\n  key: 'BeerRecipe',\n  path: '/beers/:id'\n}, {\n  Component: _pages_Lactoferments__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"],\n  key: 'LactoFerments',\n  path: '/lactoferments'\n}, {\n  Component: _pages_Beers__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"],\n  key: 'Beers',\n  path: '/beers'\n}, {\n  Component: _pages_Home__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"],\n  key: 'Home',\n  path: '/home'\n}, {\n  Component: _pages_About__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'About',\n  path: '/about'\n}, {\n  Component: _pages_App__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'App',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });