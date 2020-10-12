/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/app */ \"./src/app.js\");\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/store */ \"./src/store/index.js\");\n/* harmony import */ var _src_routes_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/routes/index */ \"./src/routes/index.js\");\n/* harmony import */ var _loadData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadData */ \"./server/loadData.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./render */ \"./server/render.js\");\n\n\n\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3006;\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.get('/', function (req, res) {\n  try {\n    var store = Object(_src_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    Promise.all(Object(_loadData__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n      path: req === null || req === void 0 ? void 0 : req.path,\n      store: store,\n      routes: _src_routes_index__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    })).then(function () {\n      var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ServerStyleSheet\"]();\n      var context = {};\n      var title = 'server side rendered sapient project';\n      var appStream = sheet.interleaveWithNodeStream(react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToNodeStream(sheet.collectStyles( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        store: store,\n        routes: _src_routes_index__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        location: req === null || req === void 0 ? void 0 : req.url,\n        context: context\n      })))); // const styleTags = sheet.getStyleTags()\n\n      var preloadedState = store.getState();\n      res.writeHead(200, {\n        'Content-Type': 'text/html',\n        'Transfer-Encoding': 'chunked'\n      });\n      res.write('<!doctype html>');\n      Object(_render__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n        appStream: appStream,\n        title: title,\n        preloadedState: preloadedState,\n        res: res\n      });\n    })[\"catch\"](function (err) {\n      console.log(err);\n      throw new Error(err);\n    });\n  } catch (error) {\n    console.error('Something went wrong:', error);\n    return res.status(500).send('Oops, better luck next time!');\n  }\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"]('./dist'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/loadData.js":
/*!****************************!*\
  !*** ./server/loadData.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var path = _ref.path,\n      store = _ref.store,\n      routes = _ref.routes;\n  var dispatch = store.dispatch;\n  var matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_0__[\"matchRoutes\"])(routes, path);\n  var promises = matchedRoutes.map(function (_ref2) {\n    var route = _ref2.route;\n    return route.loadData ? route.loadData(dispatch) : null;\n  });\n  return promises;\n});\n\n//# sourceURL=webpack:///./server/loadData.js?");

/***/ }),

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var appStream = _ref.appStream,\n      title = _ref.title,\n      preloadedState = _ref.preloadedState,\n      res = _ref.res;\n  res.write(\"<html lang=\\\"en\\\">\\n        <head>\\n        <meta charset=\\\"utf-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n        <meta name=\\\"description\\\" content=\\\"This is an example of a meta description. This will often show up in search results.\\\">\\n        <title>\".concat(title, \"</title>\\n        </head>\\n        <body>\\n        <div id=\\\"root\\\">\"));\n  appStream.pipe(res, {\n    end: false\n  });\n  appStream.on('end', function () {\n    res.write(\"</div>\\n            <script>window.__PRELOADED_STATE__ = \".concat(JSON.stringify(preloadedState).replace(/</g, \"\\\\u003c\"), \"</script>\\n            <script src=\\\"bundle.js\\\"></script></body>\\n            </html>\"));\n    res.end();\n  });\n});\n\n//# sourceURL=webpack:///./server/render.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/globalStyles */ \"./src/styles/globalStyles.js\");\n\n\n\n\n\n\nvar App = function App(_ref) {\n  var store = _ref.store,\n      routes = _ref.routes,\n      location = _ref.location,\n      _ref$context = _ref.context,\n      context = _ref$context === void 0 ? {} : _ref$context;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: location,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(routes))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/SpaceXLaunches/Filter/index.js":
/*!*******************************************************!*\
  !*** ./src/components/SpaceXLaunches/Filter/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/components/SpaceXLaunches/constants.js\");\n/* harmony import */ var _UIComponents_FilterPill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UIComponents/FilterPill */ \"./src/components/UIComponents/FilterPill/index.js\");\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    flex-direction: row;\\n    padding: 5px 0;\\n    justify-content: space-between;\\n\\n    span {\\n        display: inline-block;\\n        vertical-align: top;\\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    font-size: 14px;\\n    text-align: center;\\n    border-bottom: 1px solid #4C4C4C;\\n    padding: 10px 0;\\n    margin-bottom: 10px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    font-size: 16px;\\n    font-weight: bold;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    flex-direction: column;\\n    background-color: #fff;\\n    padding: 10px;\\n    margin: 0 20px;\\n    margin-bottom: 25px;\\n    height: fit-content;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());\nvar Heading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());\nvar Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());\nvar ValueRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());\n\nvar Filter = function Filter(_ref) {\n  var onFilterPillClick = _ref.onFilterPillClick,\n      selectedFilters = _ref.selectedFilters;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Heading, null, \"Filters\"), _constants__WEBPACK_IMPORTED_MODULE_2__[\"FILTERS\"].map(function (filter, idx) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: idx\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, null, filter.label), filter.values.reduce(function (valueRows, key, index) {\n      return (index % 2 == 0 ? valueRows.push([key]) : valueRows[valueRows.length - 1].push(key)) && valueRows;\n    }, []).map(function (valueRow, index) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValueRow, {\n        key: index\n      }, valueRow.map(function (value, id) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UIComponents_FilterPill__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          key: id,\n          selected: selectedFilters[filter.id] ? selectedFilters[filter.id] === value : false,\n          label: value,\n          onClick: function onClick() {\n            return onFilterPillClick(filter.id, value);\n          }\n        });\n      }));\n    }));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Filter);\n\n//# sourceURL=webpack:///./src/components/SpaceXLaunches/Filter/index.js?");

/***/ }),

/***/ "./src/components/SpaceXLaunches/LaunchCard/index.js":
/*!***********************************************************!*\
  !*** ./src/components/SpaceXLaunches/LaunchCard/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    flex-direction: row;\\n    align-items: flex-end;\\n    padding: 5px 0;\\n\\n    span {\\n        display: inline-block;\\n        vertical-align: top;\\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    .pri-text {\\n        font-size: 16px;\\n        font-weight: bold;\\n        margin-right: 5px;\\n    }\\n    .sec-text {\\n        font-size: 14px;\\n        color: #4BB7FE;\\n    }\\n    .title {\\n        font-size: 16px;\\n        color: #4BB7FE;\\n        margin-bottom: 5px;\\n    }\\n    .mission-id-block {\\n        margin-top: 15px;\\n    }\\n    ul {\\n        margin: 10px 0; \\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    justify-content: center;\\n    background-color: #e8e8e8;\\n    height: 150px;\\n    margin-bottom: 20px;\\n    img {\\n        object-fit: cover;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    background-color: #fff;\\n    flex-direction: column;\\n    padding: 10px;\\n    width: calc(100% - 20px);\\n    margin-bottom: 20px;\\n    margin-right: 20px;\\n\\n    @media(min-width: 700px) {\\n        width: calc(50% - 20px);\\n    }\\n\\n    @media(min-width: 1024px) {\\n        width: calc(25% - 20px);\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar Card = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());\nvar CardImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());\nvar CardDetails = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());\nvar DetailRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());\n\nvar LaunchCard = function LaunchCard(_ref) {\n  var _launch$links, _launch$mission_id;\n\n  var launch = _ref.launch;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardImage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    loading: \"lazy\",\n    height: \"150px\",\n    src: launch === null || launch === void 0 ? void 0 : (_launch$links = launch.links) === null || _launch$links === void 0 ? void 0 : _launch$links.mission_patch_small,\n    alt: \"space shuttle with mission name \".concat(launch.mission_name)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardDetails, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"title\"\n  }, \"\".concat(launch.mission_name, \" #\").concat(launch.flight_number)), (launch === null || launch === void 0 ? void 0 : (_launch$mission_id = launch.mission_id) === null || _launch$mission_id === void 0 ? void 0 : _launch$mission_id.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pri-text mission-id-block\"\n  }, \"Mission Ids:\"), launch === null || launch === void 0 ? void 0 : launch.mission_id.map(function (id) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, id)));\n  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"pri-text margin-r-5\"\n  }, \"Launch Year:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"sec-text\"\n  }, launch === null || launch === void 0 ? void 0 : launch.launch_year)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"pri-text margin-r-5\"\n  }, \"Successful Launch:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"sec-text\"\n  }, (launch === null || launch === void 0 ? void 0 : launch.launch_success) ? 'true' : 'false')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"pri-text margin-r-5\"\n  }, \"Successful Landing:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"sec-text\"\n  }, (launch === null || launch === void 0 ? void 0 : launch.launch_landing) ? 'true' : 'false'))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LaunchCard);\n\n//# sourceURL=webpack:///./src/components/SpaceXLaunches/LaunchCard/index.js?");

/***/ }),

/***/ "./src/components/SpaceXLaunches/action.js":
/*!*************************************************!*\
  !*** ./src/components/SpaceXLaunches/action.js ***!
  \*************************************************/
/*! exports provided: getLaunches, onClickSelectFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLaunches\", function() { return getLaunches; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onClickSelectFilter\", function() { return onClickSelectFilter; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/components/SpaceXLaunches/constants.js\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ \"history\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nvar getLaunches = function getLaunches(_ref) {\n  var _ref$limit = _ref.limit,\n      limit = _ref$limit === void 0 ? 100 : _ref$limit,\n      _ref$isServer = _ref.isServer,\n      isServer = _ref$isServer === void 0 ? true : _ref$isServer,\n      rest = _objectWithoutProperties(_ref, [\"limit\", \"isServer\"]);\n\n  return function (dispatch) {\n    var apiParams = _objectSpread({\n      limit: limit\n    }, rest);\n\n    if (rest[_constants__WEBPACK_IMPORTED_MODULE_0__[\"filterType\"].SUCCESSFUL_LANDING]) apiParams[_constants__WEBPACK_IMPORTED_MODULE_0__[\"filterType\"].SUCCESSFUL_LANDING] = rest[_constants__WEBPACK_IMPORTED_MODULE_0__[\"filterType\"].SUCCESSFUL_LANDING] === 'True' ? true : false;\n    if (rest[_constants__WEBPACK_IMPORTED_MODULE_0__[\"filterType\"].SUCCESSFUL_LAUNCH]) apiParams[_constants__WEBPACK_IMPORTED_MODULE_0__[\"filterType\"].SUCCESSFUL_LAUNCH] = rest[_constants__WEBPACK_IMPORTED_MODULE_0__[\"filterType\"].SUCCESSFUL_LAUNCH] === 'True' ? true : false;\n\n    if (!isServer) {\n      var history = Object(history__WEBPACK_IMPORTED_MODULE_1__[\"createBrowserHistory\"])();\n      var queryParams = new URLSearchParams(apiParams).toString();\n      history.push(\"\".concat(window.location.pathname, \"?\").concat(queryParams));\n    }\n\n    dispatch({\n      type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"actionType\"].GET_LAUNCHES_REQUESTING\n    });\n    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"], {\n      params: apiParams\n    }).then(function (res) {\n      dispatch({\n        type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"actionType\"].GET_LAUNCHES_SUCCESS,\n        payload: res.data\n      });\n    })[\"catch\"](function (err) {\n      dispatch({\n        type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"actionType\"].GET_LAUNCHES_FAIL,\n        payload: err\n      });\n    });\n  };\n};\nvar onClickSelectFilter = function onClickSelectFilter(id, value) {\n  return function (dispatch, getState) {\n    dispatch({\n      type: 'SET_SELECTED_FILTERS',\n      payload: {\n        id: id,\n        value: value\n      }\n    });\n    var selectedFilters = getState().spaceXLaunches.selectedFilters;\n    dispatch(getLaunches(_objectSpread(_objectSpread({\n      isServer: false\n    }, selectedFilters), {}, _defineProperty({}, id, value))));\n  };\n};\n\n//# sourceURL=webpack:///./src/components/SpaceXLaunches/action.js?");

/***/ }),

/***/ "./src/components/SpaceXLaunches/constants.js":
/*!****************************************************!*\
  !*** ./src/components/SpaceXLaunches/constants.js ***!
  \****************************************************/
/*! exports provided: actionType, FILTERS, filterType, API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionType\", function() { return actionType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FILTERS\", function() { return FILTERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterType\", function() { return filterType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\nvar actionType = {\n  GET_LAUNCHES_SUCCESS: 'GET_LAUNCHES_SUCCESS',\n  GET_LAUNCHES_FAIL: 'GET_LAUNCHES_FAIL',\n  GET_LAUNCHES_REQUESTING: 'GET_LAUNCHES_REQUESTING',\n  SET_SELECTED_FILTERS: 'SET_SELECTED_FILTERS'\n};\nvar FILTERS = [{\n  id: 'launch_year',\n  label: 'Launch Year',\n  values: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]\n}, {\n  id: 'successful_launch',\n  label: 'Successful Launch',\n  values: ['True', 'False']\n}, {\n  id: 'successful_landing',\n  label: 'Successful Landing',\n  values: ['True', 'False']\n}];\nvar filterType = {\n  LAUNCH_YEAR: 'launch_year',\n  SUCCESSFUL_LAUNCH: 'successful_launch',\n  SUCCESSFUL_LANDING: 'successful_landing'\n};\nvar API_URL = 'https://api.spacexdata.com/v3/launches';\n\n//# sourceURL=webpack:///./src/components/SpaceXLaunches/constants.js?");

/***/ }),

/***/ "./src/components/SpaceXLaunches/index.js":
/*!************************************************!*\
  !*** ./src/components/SpaceXLaunches/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ \"./src/components/SpaceXLaunches/action.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _LaunchCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LaunchCard */ \"./src/components/SpaceXLaunches/LaunchCard/index.js\");\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Filter */ \"./src/components/SpaceXLaunches/Filter/index.js\");\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    margin: 20px auto;\\n    padding-left: 20px;\\n    max-width: 1440px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    flex-wrap: wrap;\\n    flex: 1;\\n    margin-left: 20px;\\n\\n    @media(min-width: 700px) {\\n        margin-left: 0;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    display: flex;\\n    flex-direction: column;\\n    margin: 0 auto;\\n    max-width: 1440px;\\n\\n    @media(min-width: 700px) {\\n        flex-direction: row;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());\nvar CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());\nvar Heading = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1(_templateObject3());\n\nvar SpaceXLaunches = function SpaceXLaunches(_ref) {\n  var launches = _ref.launches,\n      alertMsg = _ref.alertMsg,\n      _onFilterPillClick = _ref.onFilterPillClick,\n      selectedFilters = _ref.selectedFilters;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Heading, null, \"SpaceX Launch Programs\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onFilterPillClick: function onFilterPillClick(filterId, filterValue) {\n      return _onFilterPillClick(filterId, filterValue);\n    },\n    selectedFilters: selectedFilters\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardContainer, null, (launches === null || launches === void 0 ? void 0 : launches.length) ? launches.map(function (launch) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LaunchCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      launch: launch,\n      key: launch.flight_number\n    });\n  }) : 'No Data', alertMsg && alert(alertMsg))));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    alertMsg: state.spaceXLaunches.alertMsg,\n    launches: state.spaceXLaunches.launches,\n    selectedFilters: state.spaceXLaunches.selectedFilters\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onFilterPillClick: function onFilterPillClick(id, value) {\n      return dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__[\"onClickSelectFilter\"])(id, value));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(SpaceXLaunches));\n\n//# sourceURL=webpack:///./src/components/SpaceXLaunches/index.js?");

/***/ }),

/***/ "./src/components/SpaceXLaunches/reducer.js":
/*!**************************************************!*\
  !*** ./src/components/SpaceXLaunches/reducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/components/SpaceXLaunches/constants.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  alertMsg: null,\n  launches: null,\n  selectedFilters: {}\n};\n\nvar spaceXLaunches = function spaceXLaunches() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"actionType\"].GET_LAUNCHES_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        launches: action.payload,\n        alertMsg: null\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"actionType\"].GET_LAUNCHES_FAIL:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        alertMsg: action.payload\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"actionType\"].GET_LAUNCHES_REQUESTING:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        alertMsg: null\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"actionType\"].SET_SELECTED_FILTERS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        selectedFilters: _objectSpread(_objectSpread({}, state.selectedFilters), {}, _defineProperty({}, action.payload.id, action.payload.value))\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (spaceXLaunches);\n\n//# sourceURL=webpack:///./src/components/SpaceXLaunches/reducer.js?");

/***/ }),

/***/ "./src/components/UIComponents/FilterPill/index.js":
/*!*********************************************************!*\
  !*** ./src/components/UIComponents/FilterPill/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    width: calc(50% - 5px);\\n    background-color: \", \";\\n    color: #000;\\n    padding: 5px 20px;\\n    border-radius: 4px;\\n    cursor: pointer;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar Pill = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (props) {\n  return props.selected ? '#95C821' : '#C8FE4B';\n});\n\nvar FilterPill = function FilterPill(_ref) {\n  var label = _ref.label,\n      onClick = _ref.onClick,\n      selected = _ref.selected;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pill, {\n    onClick: onClick,\n    selected: selected\n  }, label);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterPill);\n\n//# sourceURL=webpack:///./src/components/UIComponents/FilterPill/index.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SpaceXLaunches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SpaceXLaunches */ \"./src/components/SpaceXLaunches/index.js\");\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure undefined\"); }\n\n\n\n\nvar Home = function Home(_ref) {\n  _objectDestructuringEmpty(_ref);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SpaceXLaunches__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _containers_Home_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/Home/index */ \"./src/containers/Home/index.js\");\n/* harmony import */ var _components_SpaceXLaunches_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SpaceXLaunches/action */ \"./src/components/SpaceXLaunches/action.js\");\n\n\nvar Routes = [{\n  path: '/',\n  exact: true,\n  component: _containers_Home_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  loadData: function loadData(dispatch) {\n    return dispatch(Object(_components_SpaceXLaunches_action__WEBPACK_IMPORTED_MODULE_1__[\"getLaunches\"])({}));\n  }\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/rootReducer */ \"./src/store/utils/rootReducer.js\");\n\n\n\n\nvar createReduxStore = function createReduxStore() {\n  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(_utils_rootReducer__WEBPACK_IMPORTED_MODULE_2__[\"rootReducer\"]), preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createReduxStore);\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/utils/rootReducer.js":
/*!****************************************!*\
  !*** ./src/store/utils/rootReducer.js ***!
  \****************************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootReducer\", function() { return rootReducer; });\n/* harmony import */ var _components_SpaceXLaunches_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/SpaceXLaunches/reducer */ \"./src/components/SpaceXLaunches/reducer.js\");\n\nvar rootReducer = {\n  spaceXLaunches: _components_SpaceXLaunches_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n\n//# sourceURL=webpack:///./src/store/utils/rootReducer.js?");

/***/ }),

/***/ "./src/styles/globalStyles.js":
/*!************************************!*\
  !*** ./src/styles/globalStyles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    * {\\n        box-sizing: border-box;\\n    }\\n    body {\\n        margin: 0;\\n        padding: 0;\\n        background: #e8e8e8;\\n        font-family: Open-Sans, Helvetica, Sans-Serif;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"])(_templateObject());\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);\n\n//# sourceURL=webpack:///./src/styles/globalStyles.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });