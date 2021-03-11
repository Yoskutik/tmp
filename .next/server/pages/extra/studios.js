module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "0lfv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ createKeywordGenerator; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ debounce; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ copyToClipboard; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ $; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ $$; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ isElementVisible; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ useEventListener; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ useBooleanState; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ FetchRequest; });

// UNUSED EXPORTS: sleep, createDate

// CONCATENATED MODULE: ./src/utils/utils.ts
const keywords = ['Фотограф Санкт-Петербург', 'Мельникова Татьяна', 'Фотограф СПб', 'Фотосессия СПб', 'Портрет', 'Love story', 'Съёмка в Санкт-Петербурге'];
const createKeywordGenerator = function* () {
  let previousKeyword = '';

  while (true) {
    let keyword;

    while (!keyword || keyword === previousKeyword) {
      keyword = keywords[Math.floor(Math.random() * keywords.length)];
    }

    previousKeyword = keyword;
    yield keyword;
  }
};
const debounce = function (cb, ms = 100) {
  let isCoolDown = false;
  return function (...args) {
    if (isCoolDown) return;
    cb.apply(this, args);
    isCoolDown = true;
    setTimeout(() => {
      isCoolDown = false;
    }, ms);
  };
};
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
const sleep = ms => new Promise(res => setTimeout(res, ms));
const createDate = (day, month, year) => {
  const date = new Date();
  date.setDate(day);
  date.setMonth(month - 1);
  date.setFullYear(year);
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);
  return date;
};
const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));
const isElementVisible = (node, gap = 150) => {
  const rect = node.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < gap || rect.top - viewHeight >= -gap);
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/utils/hooks.ts

const useEventListener = (target, event, listener, trigger = true) => {
  Object(external_react_["useEffect"])(() => {
    target.addEventListener(event, listener);
    trigger && target.dispatchEvent(new Event(event));
    return () => target.removeEventListener(event, listener);
  });
};
const useBooleanState = value => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(value);
  const enable = Object(external_react_["useCallback"])(() => setState(true), []);
  const disable = Object(external_react_["useCallback"])(() => setState(false), []);
  return [state, enable, disable];
};
// CONCATENATED MODULE: ./src/utils/FetchRequest.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class FetchRequest {
  constructor({
    url,
    method = 'POST',
    params = {}
  }) {
    _defineProperty(this, "url", void 0);

    _defineProperty(this, "method", void 0);

    _defineProperty(this, "body", void 0);

    _defineProperty(this, "request", () => fetch(`http://localhost:3000${this.url}`, {
      method: this.method,
      body: this.body
    }).then(it => it.json()));

    this.url = `/api${url}`;
    this.method = method;
    this.body = JSON.stringify(params);
  }

}
// CONCATENATED MODULE: ./src/utils/index.ts




/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("39Zj");


/***/ }),

/***/ "2XLG":
/***/ (function(module, exports) {

module.exports = require("glob");

/***/ }),

/***/ "39Zj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/sass/pages/extra/studios/Filters.module.scss
var Filters_module = __webpack_require__("lxin");
var Filters_module_default = /*#__PURE__*/__webpack_require__.n(Filters_module);

// CONCATENATED MODULE: ./src/views/extra/studios/Filters.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const FilterButton = ({
  onClick,
  text,
  active
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
  className: active ? Filters_module_default.a.active : '',
  onClick: onClick,
  children: text
});

const FilterCostButton = ({
  onClick,
  by,
  active
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
  className: `${Filters_module_default.a.filters__cost} ${Filters_module_default.a[by]} ${active ? Filters_module_default.a.active : ''}`,
  onClick: onClick,
  title: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
});

const Filters = ({
  onChange,
  filters
}) => {
  const updateFilters = Object(external_react_["useCallback"])(newFilters => onChange(_objectSpread(_objectSpread({}, filters), newFilters)), [filters]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Filters_module_default.a.filters,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Filters_module_default.a.filters__block,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FilterCostButton, {
        onClick: () => updateFilters({
          by: filters.by === 'asc' ? 'desc' : 'asc'
        }),
        by: filters.by || 'asc',
        active: !!filters.by
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Filters_module_default.a.filters__block,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FilterButton, {
        onClick: () => updateFilters({
          darkness: null
        }),
        text: "\u0412\u0441\u0435",
        active: filters.darkness === null
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FilterButton, {
        onClick: () => updateFilters({
          darkness: true
        }),
        text: "\u0422\u0451\u043C\u043D\u044B\u0435",
        active: filters.darkness === true
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FilterButton, {
        onClick: () => updateFilters({
          darkness: false
        }),
        text: "\u0421\u0432\u0435\u0442\u043B\u044B\u0435",
        active: filters.darkness === false
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Filters_module_default.a.filters__block,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FilterButton, {
        onClick: () => updateFilters({
          furniture: null
        }),
        text: "\u0412\u0441\u0435",
        active: filters.furniture === null
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FilterButton, {
        onClick: () => updateFilters({
          furniture: true
        }),
        text: "\u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u043D\u044B\u0435",
        active: filters.furniture === true
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FilterButton, {
        onClick: () => updateFilters({
          furniture: false
        }),
        text: "\u041D\u0435\u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u043D\u044B\u0435",
        active: filters.furniture === false
      })]
    })]
  });
};
// EXTERNAL MODULE: ./src/components/index.ts + 11 modules
var components = __webpack_require__("Nhdc");

// EXTERNAL MODULE: ./src/sass/pages/extra/studios/Hall.module.scss
var Hall_module = __webpack_require__("8D7d");
var Hall_module_default = /*#__PURE__*/__webpack_require__.n(Hall_module);

// CONCATENATED MODULE: ./src/views/extra/studios/Hall.tsx







const Preview = ({
  photos
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = Object(external_react_["useState"])(0);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Hall_module_default.a.hall__preview,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components["f" /* Picture */], {
      alt: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0437\u0430\u043B\u0430",
      src: `/photos/extra/studios/${photos[activeIndex]}.jpg`,
      imgCls: `${Hall_module_default.a['hall__preview_main-image']} ${photos.length > 1 ? '' : Hall_module_default.a.single}`
    }), photos.length > 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Hall_module_default.a.hall__preview_images,
      children: photos.map((photo, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components["f" /* Picture */], {
        alt: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0437\u0430\u043B\u0430",
        onClick: () => setActiveIndex(i),
        src: `/photos/extra/studios/${photo}.jpg`,
        imgCls: `${Hall_module_default.a['hall__preview_small-image']} ${i === activeIndex ? 'active' : ''}`
      }, photo))
    })]
  });
};

const priceFormatter = new Intl.NumberFormat('ru-RU');

const Info = props => {
  var _props$contacts;

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Hall_module_default.a.hall__info,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      className: Hall_module_default.a.hall__info_name,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: props.href,
        target: "_blank",
        rel: "noreferrer",
        children: `Зал ${props.title}`
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: Hall_module_default.a.hall__info_price,
      children: props.prices.map(price => priceFormatter.format(+price)).reduce((prev, curr) => `${prev} / ${curr}`)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: Hall_module_default.a.hall__info_description,
      dangerouslySetInnerHTML: {
        __html: props.description
      }
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Hall_module_default.a.hall__info_contacts,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
        children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B:"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["\u0410\u0434\u0440\u0435\u0441:", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: `https://www.google.com/maps/${props.address.href}`,
          target: "_blank",
          rel: "noreferrer",
          children: props.address.location
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), ((_props$contacts = props.contacts) === null || _props$contacts === void 0 ? void 0 : _props$contacts.phone) && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: ["\u0422\u0435\u043B\u0435\u0444\u043E\u043D:", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: `tel:${props.contacts.phone}`,
            children: props.contacts.phone
          })]
        })]
      })]
    })]
  });
};

const Hall = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  className: Hall_module_default.a.hall,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
    className: Hall_module_default.a.hall__title,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: props.studioInfo.href,
      target: "_blank",
      rel: "noreferrer",
      children: props.studio
    })
  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Hall_module_default.a.hall__body,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Preview, {
      photos: props.photos
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Info, {
      title: props.title,
      prices: props.prices,
      address: props.studioInfo.address || props.address,
      contacts: props.studioInfo.contacts || props.contacts,
      description: props.description,
      href: props.href
    })]
  })]
});
// CONCATENATED MODULE: ./src/views/extra/studios/index.ts


// EXTERNAL MODULE: ./src/data/studios.json
var studios = __webpack_require__("eLNt");

// EXTERNAL MODULE: ./src/data/halls.json
var halls = __webpack_require__("Bax2");

// EXTERNAL MODULE: ./src/utils/server.tsx
var server = __webpack_require__("aorh");

// CONCATENATED MODULE: ./pages/extra/studios.tsx




function studios_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function studios_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { studios_ownKeys(Object(source), true).forEach(function (key) { studios_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { studios_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function studios_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ExtraStudiosPage = ({
  images
}) => {
  const {
    0: filters,
    1: setFilters
  } = Object(external_react_["useState"])({
    furniture: null,
    darkness: null,
    by: null
  });
  const filteredHalls = halls.filter(hall => filters.darkness === null || hall.darkness === filters.darkness).filter(hall => filters.furniture === null || hall.furniture === filters.furniture);
  filteredHalls.sort((a, b) => {
    if (filters.by === null) return 0;
    return filters.by === 'asc' ? a.prices[0] - b.prices[0] : b.prices[0] - a.prices[0];
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(components["d" /* MainLayout */], {
    title: "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u0441\u0442\u0443\u0434\u0438\u0438",
    robots: false,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components["a" /* Breadcrumbs */], {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(components["c" /* Container */], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Filters, {
        filters: filters,
        onChange: setFilters
      }), filteredHalls.map(hall => /*#__PURE__*/Object(external_react_["createElement"])(Hall, studios_objectSpread(studios_objectSpread({}, hall), {}, {
        studioInfo: studios[hall.studio],
        key: hall.title,
        photos: images.filter(it => it.includes(hall.photos_dir))
      })))]
    })]
  });
};

/* harmony default export */ var extra_studios = __webpack_exports__["default"] = (ExtraStudiosPage);
const getServerSideProps = async () => ({
  props: {
    images: Object(server["b" /* getPhotos */])('/extra/studios/')
  }
});

/***/ }),

/***/ "3DC5":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"close-button": "CloseButton_close-button__2J7XI"
};


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6NQV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ SpinnerIcon; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ ArrowIcon; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ InstagramIcon; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ VKIcon; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ WhatsAppIcon; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ PinterestIcon; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ CopyIcon; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ SearchIcon; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ DeleteIcon; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ FullScreenOpenIcon; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ FullScreenCloseIcon; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/components/icons/SpinnerIcon.tsx



const SpinnerIcon = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
  width: props.size,
  height: props.size,
  viewBox: "0 0 100 100",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("circle", {
    cx: "50",
    cy: "50",
    r: "0",
    fill: "none",
    stroke: "#2626CC",
    strokeWidth: "2",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("animate", {
      attributeName: "r",
      repeatCount: "indefinite",
      dur: "1s",
      values: "0;40",
      keyTimes: "0;1",
      keySplines: "0 0.2 0.8 1",
      calcMode: "spline",
      begin: "-0.5s"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("animate", {
      attributeName: "opacity",
      repeatCount: "indefinite",
      dur: "1s",
      values: "1;0",
      keyTimes: "0;1",
      keySplines: "0.2 0 0.8 1",
      calcMode: "spline",
      begin: "-0.5s"
    })]
  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("circle", {
    cx: "50",
    cy: "50",
    r: "0",
    fill: "none",
    stroke: "#E0E0E0",
    strokeWidth: "2",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("animate", {
      attributeName: "r",
      repeatCount: "indefinite",
      dur: "1s",
      values: "0;40",
      keyTimes: "0;1",
      keySplines: "0 0.2 0.8 1",
      calcMode: "spline"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("animate", {
      attributeName: "opacity",
      repeatCount: "indefinite",
      dur: "1s",
      values: "1;0",
      keyTimes: "0;1",
      keySplines: "0.2 0 0.8 1",
      calcMode: "spline"
    })]
  })]
});
// CONCATENATED MODULE: ./src/components/icons/ArrowIcon.tsx



const ArrowIcon = ({
  size,
  height,
  width,
  cls,
  fill
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
  viewBox: "0 0 256 256",
  className: cls,
  width: size !== null && size !== void 0 ? size : width,
  fill: fill,
  height: size !== null && size !== void 0 ? size : height,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("filter", {
      id: "f1",
      x: "0",
      y: "0",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("feGaussianBlur", {
        in: "SourceGraphic",
        stdDeviation: "15"
      })
    })
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("polygon", {
    fill: "#000",
    filter: "url(#f1)",
    points: "226,47 128,147 30,49 0,79 128,207 256,79"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("polygon", {
    points: "226,49 128,147 30,49 0,79 128,207 256,79"
  })]
});
// CONCATENATED MODULE: ./src/components/icons/InstagramIcon.tsx



/* eslint-disable max-len */

const InstagramIcon = ({
  size,
  width,
  height,
  cls
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
  viewBox: "0 0 24 24",
  enableBackground: "0 0 24 24",
  width: size !== null && size !== void 0 ? size : width,
  height: size !== null && size !== void 0 ? size : height,
  className: cls,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("linearGradient", {
    id: "instagram__gradient",
    gradientTransform: "matrix(0 -1.982 -1.844 0 -132.522 -51.077)",
    gradientUnits: "userSpaceOnUse",
    x1: "-37.106",
    x2: "-26.555",
    y1: "-72.705",
    y2: "-84.047",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
      offset: "0%",
      stopColor: "#fd5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
      offset: "50%",
      stopColor: "#ff543e"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
      offset: "100%",
      stopColor: "#c837ab"
    })]
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z",
    fill: "url(#instagram__gradient)"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z",
    fill: "#fff"
  })]
});
// CONCATENATED MODULE: ./src/components/icons/VKIcon.tsx



const VKIcon = ({
  size,
  height,
  width,
  cls
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
  viewBox: "0 0 112 112",
  width: size !== null && size !== void 0 ? size : width,
  height: size !== null && size !== void 0 ? size : height,
  className: cls,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
    fill: "#4D76A1",
    cx: "56",
    cy: "56",
    r: "56"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "#FFFFFF",
    d: "M53.979,80.702h4.403c0,0,1.33-0.146,2.009-0.878 c0.625-0.672,0.605-1.934,0.605-1.934s-0.086-5.908,2.656-6.778c2.703-0.857,6.174,5.71,9.853,8.235 c2.782,1.911,4.896,1.492,4.896,1.492l9.837-0.137c0,0,5.146-0.317,2.706-4.363c-0.2-0.331-1.421-2.993-7.314-8.463 c-6.168-5.725-5.342-4.799,2.088-14.702c4.525-6.031,6.334-9.713,5.769-11.29c-0.539-1.502-3.867-1.105-3.867-1.105l-11.076,0.069 c0,0-0.821-0.112-1.43,0.252c-0.595,0.357-0.978,1.189-0.978,1.189s-1.753,4.667-4.091,8.636c-4.932,8.375-6.904,8.817-7.71,8.297 c-1.875-1.212-1.407-4.869-1.407-7.467c0-8.116,1.231-11.5-2.397-12.376c-1.204-0.291-2.09-0.483-5.169-0.514  c-3.952-0.041-7.297,0.012-9.191,0.94c-1.26,0.617-2.232,1.992-1.64,2.071c0.732,0.098,2.39,0.447,3.269,1.644 c1.135,1.544,1.095,5.012,1.095,5.012s0.652,9.554-1.523,10.741c-1.493,0.814-3.541-0.848-7.938-8.446 c-2.253-3.892-3.954-8.194-3.954-8.194s-0.328-0.804-0.913-1.234c-0.71-0.521-1.702-0.687-1.702-0.687l-10.525,0.069 c0,0-1.58,0.044-2.16,0.731c-0.516,0.611-0.041,1.875-0.041,1.875s8.24,19.278,17.57,28.993 C44.264,81.287,53.979,80.702,53.979,80.702L53.979,80.702z"
  })]
});
// CONCATENATED MODULE: ./src/components/icons/WhatsAppIcon.tsx



/* eslint-disable max-len */

const WhatsAppIcon = ({
  size,
  height,
  width,
  cls
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
  viewBox: "-1 0 512 512",
  width: size !== null && size !== void 0 ? size : width,
  height: size !== null && size !== void 0 ? size : height,
  className: cls,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "m10.894531 512c-2.875 0-5.671875-1.136719-7.746093-3.234375-2.734376-2.765625-3.789063-6.78125-2.761719-10.535156l33.285156-121.546875c-20.722656-37.472656-31.648437-79.863282-31.632813-122.894532.058594-139.941406 113.941407-253.789062 253.871094-253.789062 67.871094.0273438 131.644532 26.464844 179.578125 74.433594 47.925781 47.972656 74.308594 111.742187 74.289063 179.558594-.0625 139.945312-113.945313 253.800781-253.867188 253.800781 0 0-.105468 0-.109375 0-40.871093-.015625-81.390625-9.976563-117.46875-28.84375l-124.675781 32.695312c-.914062.238281-1.84375.355469-2.761719.355469zm0 0",
    fill: "#e5e5e5"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "m10.894531 501.105469 34.46875-125.871094c-21.261719-36.839844-32.445312-78.628906-32.429687-121.441406.054687-133.933594 109.046875-242.898438 242.976562-242.898438 64.992188.027344 125.996094 25.324219 171.871094 71.238281 45.871094 45.914063 71.125 106.945313 71.101562 171.855469-.058593 133.929688-109.066406 242.910157-242.972656 242.910157-.007812 0 .003906 0 0 0h-.105468c-40.664063-.015626-80.617188-10.214844-116.105469-29.570313zm134.769531-77.75 7.378907 4.371093c31 18.398438 66.542969 28.128907 102.789062 28.148438h.078125c111.304688 0 201.898438-90.578125 201.945313-201.902344.019531-53.949218-20.964844-104.679687-59.09375-142.839844-38.132813-38.160156-88.832031-59.1875-142.777344-59.210937-111.394531 0-201.984375 90.566406-202.027344 201.886719-.015625 38.148437 10.65625 75.296875 30.875 107.445312l4.804688 7.640625-20.40625 74.5zm0 0",
    fill: "#fff"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "m19.34375 492.625 33.277344-121.519531c-20.53125-35.5625-31.324219-75.910157-31.3125-117.234375.050781-129.296875 105.273437-234.488282 234.558594-234.488282 62.75.027344 121.644531 24.449219 165.921874 68.773438 44.289063 44.324219 68.664063 103.242188 68.640626 165.898438-.054688 129.300781-105.28125 234.503906-234.550782 234.503906-.011718 0 .003906 0 0 0h-.105468c-39.253907-.015625-77.828126-9.867188-112.085938-28.539063zm0 0",
    fill: "#64b161"
  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
    fill: "#fff",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "m10.894531 501.105469 34.46875-125.871094c-21.261719-36.839844-32.445312-78.628906-32.429687-121.441406.054687-133.933594 109.046875-242.898438 242.976562-242.898438 64.992188.027344 125.996094 25.324219 171.871094 71.238281 45.871094 45.914063 71.125 106.945313 71.101562 171.855469-.058593 133.929688-109.066406 242.910157-242.972656 242.910157-.007812 0 .003906 0 0 0h-.105468c-40.664063-.015626-80.617188-10.214844-116.105469-29.570313zm134.769531-77.75 7.378907 4.371093c31 18.398438 66.542969 28.128907 102.789062 28.148438h.078125c111.304688 0 201.898438-90.578125 201.945313-201.902344.019531-53.949218-20.964844-104.679687-59.09375-142.839844-38.132813-38.160156-88.832031-59.1875-142.777344-59.210937-111.394531 0-201.984375 90.566406-202.027344 201.886719-.015625 38.148437 10.65625 75.296875 30.875 107.445312l4.804688 7.640625-20.40625 74.5zm0 0"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "m195.183594 152.246094c-4.546875-10.109375-9.335938-10.3125-13.664063-10.488282-3.539062-.152343-7.589843-.144531-11.632812-.144531-4.046875 0-10.625 1.523438-16.1875 7.597657-5.566407 6.074218-21.253907 20.761718-21.253907 50.632812 0 29.875 21.757813 58.738281 24.792969 62.792969 3.035157 4.050781 42 67.308593 103.707031 91.644531 51.285157 20.226562 61.71875 16.203125 72.851563 15.191406 11.132813-1.011718 35.917969-14.6875 40.976563-28.863281 5.0625-14.175781 5.0625-26.324219 3.542968-28.867187-1.519531-2.527344-5.566406-4.046876-11.636718-7.082032-6.070313-3.035156-35.917969-17.726562-41.484376-19.75-5.566406-2.027344-9.613281-3.035156-13.660156 3.042969-4.050781 6.070313-15.675781 19.742187-19.21875 23.789063-3.542968 4.058593-7.085937 4.566406-13.15625 1.527343-6.070312-3.042969-25.625-9.449219-48.820312-30.132812-18.046875-16.089844-30.234375-35.964844-33.777344-42.042969-3.539062-6.070312-.058594-9.070312 2.667969-12.386719 4.910156-5.972656 13.148437-16.710937 15.171875-20.757812 2.023437-4.054688 1.011718-7.597657-.503906-10.636719-1.519532-3.035156-13.320313-33.058594-18.714844-45.066406zm0 0",
      fillRule: "evenodd"
    })]
  })]
});
// CONCATENATED MODULE: ./src/components/icons/PinterestIcon.tsx



const PinterestIcon = ({
  size,
  height,
  width,
  cls
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
  viewBox: "0 0 112 112",
  width: size !== null && size !== void 0 ? size : width,
  height: size !== null && size !== void 0 ? size : height,
  className: cls,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
    fill: "#CB2027",
    cx: "56",
    cy: "56",
    r: "56"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "#F1F2F2",
    d: "M61,75c-4-0-6-2-9-4-2,10-4,19-11,24 c-2-14,3-25,5-37c-4-7,0-20,9-19c10,4-9,25,4,28 c14,3,19-24,11-32c-12-12-35-0-32,17c1,4,5,6,2,12 c-8-2-10-8-10-16c0-13,12-23,24-24c15-2,28,5,30,19 C85,60,76,76,61,75L61,75z"
  })]
});
// CONCATENATED MODULE: ./src/components/icons/CopyIcon.tsx


const CopyIcon = ({
  size,
  height,
  width,
  cls
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  viewBox: "-40 0 512 512",
  width: size !== null && size !== void 0 ? size : width,
  height: size !== null && size !== void 0 ? size : height,
  className: cls,
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "m271 512h-191c-44 0-80-36-80-80v-271c0-44 36-80 80-80h191c44 0 80 36 80 80v271c0 44-36 80-80 80zm-191-391c-22 0-40 18-40 40v271c0 22 18 40 40 40h191c22 0 40-18 40-40v-271c0-22-18-40-40-40zm351 261v-302c0-44-36-80-80-80h-222c-11 0-20 9-20 20s9 20 20 20h222c22 0 40 18 40 40v302c0 11 9 20 20 20s20-9 20-20zm0 0"
  })
});
// CONCATENATED MODULE: ./src/components/icons/SearchIcon.tsx


const SearchIcon = ({
  size = 16,
  height,
  width,
  cls,
  fill = '#C8C8C8'
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  viewBox: "0 0 57 57",
  width: size !== null && size !== void 0 ? size : width,
  height: size !== null && size !== void 0 ? size : height,
  className: cls,
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: fill,
    d: "M55,52L42,38c3-4,5-9,5-15c0-13-10-23-23-23s-23,10-23,23 s10,23,23,23c5,0,9-1,13-4l14,14c1,1,1,1,2,1 c1,0,2-0,2-1C56,55,56,53,55,52z M24,6c9,0,17,8,17,17s-8,17-17,17 s-17-8-17-17S14,6,24,6z"
  })
});
// CONCATENATED MODULE: ./src/components/icons/DeleteIcon.tsx



const DeleteIcon = ({
  size = 16,
  height,
  width,
  cls = '',
  fill = '#C8C8C8'
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
  height: size !== null && size !== void 0 ? size : height,
  width: size !== null && size !== void 0 ? size : width,
  viewBox: "-40 0 427 427",
  className: cls,
  fill: fill,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "m232 155c-6 0-10 4-10 10v189c0 6 4 10 10 10 6 0 10-4 10-10v-189c0-6-4-10-10-10zm0 0"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "m114 155c-6 0-10 4-10 10v189c0 6 4 10 10 10 6 0 10-4 10-10v-189c0-6-4-10-10-10zm0 0"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "m28 127v246c0 15 5 28 15 38 9 10 22 15 36 15h189c14-0 26-6 36-15 9-9 15-23 15-38v-246c19-5 31-23 28-42-2-19-19-33-38-33h-51v-13c0-11-4-21-12-28-7-7-18-12-28-11h-89c-11-0-21 4-28 11-7 7-12 18-12 28v13h-52c-19.1875.003906-35 14-38 33-2 19 10 37 28 42zm240 280h-189c-17 0-30-15-30-34v-246h250v246c0 19-13 34-30 34zm-159-368c-0-5 2-10 6-14 4-4 9-6 14-6h89c5-0 10 2 14 6 4 4 6 9 6 14v13h-128zm-71 33h270c10 0 18 8 18 18s-8 18-18 18h-270c-10 0-18-8-18-18s8-18 18-18zm0 0"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "m173 155c-6 0-10 4-10 10v189c0 6 4 10 10 10 6 0 10-4 10-10v-189c0-6-5-10-10-10zm0 0"
  })]
});
// CONCATENATED MODULE: ./src/components/icons/FullScreenOpenIcon.tsx


const FullScreenOpenIcon = ({
  size = 16,
  height,
  width,
  cls = '',
  fill
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  height: size !== null && size !== void 0 ? size : height,
  width: size !== null && size !== void 0 ? size : width,
  viewBox: "0 0 357 357",
  className: cls,
  fill: fill,
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "M51,230H0V357h128v-51H51V230z M0,128h51V51h77V0H0V128z M306,306h-77v51H357V230h-51V306z M230,0v51 H306v77h51V0H230z"
  })
});
// CONCATENATED MODULE: ./src/components/icons/FullScreenCloseIcon.tsx


const FullScreenCloseIcon = ({
  size = 16,
  height,
  width,
  cls = '',
  fill
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  height: size !== null && size !== void 0 ? size : height,
  width: size !== null && size !== void 0 ? size : width,
  viewBox: "0 0 357 357",
  className: cls,
  fill: fill,
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "M0,281h77V357h51V230H0V281z M77,77H0v51h128V0h-51V77z M230,357h51v-77H357v-51H230V357z M281,77V0h-51v128H357v-51H281z"
  })
});
// CONCATENATED MODULE: ./src/components/icons/index.ts












/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8D7d":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hall": "Hall_hall__3pFCx",
	"hall__title": "Hall_hall__title__1hcfu",
	"hall__body": "Hall_hall__body__265uZ",
	"hall__preview": "Hall_hall__preview__2BAIO",
	"hall__preview_main-image": "Hall_hall__preview_main-image__144V2",
	"single": "Hall_single__37dPj",
	"hall__preview_images": "Hall_hall__preview_images__2OOEN",
	"hall__preview_small-image": "Hall_hall__preview_small-image__2L_95",
	"active": "Hall_active__35mhv",
	"hall__info_name": "Hall_hall__info_name__2Ll1_",
	"hall__info_price": "Hall_hall__info_price__9FpWW",
	"hall__info_description": "Hall_hall__info_description__20tvQ",
	"hall__info_contacts": "Hall_hall__info_contacts__1-Sec"
};


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Bax2":
/***/ (function(module) {

module.exports = JSON.parse("[{\"studio\":\"BEDFORD STUDIO\",\"title\":\"Studio B\",\"href\":\"https://vk.com/market-80652199?section=album_2&w=product-80652199_2068613%2Fquery\",\"prices\":[1200],\"description\":\"Красивый и лаконичный зал 30 м<sup>2</sup> с эркером и выходом на балкон! Легкий и непринужденный интерьер с лепниной и паркетом ХХ века!<br> Окна зала выходят на солнечную сторону!\",\"furniture\":true,\"darkness\":false,\"photos_dir\":\"Bedford/B\"},{\"studio\":\"BEDFORD STUDIO\",\"title\":\"Studio C\",\"href\":\"https://vk.com/market-80652199?section=album_2&w=product-80652199_1704192%2Fquery\",\"prices\":[1500],\"description\":\"Большой и очень светлый зал 85 м<sup>2</sup> с белой 7-метровой циклорамой! <br> Невероятная лепнина с позолотой, роскошные и высокие потолки, и огромное количество естественного света!\",\"furniture\":true,\"darkness\":false,\"photos_dir\":\"Bedford/C\"},{\"studio\":\"Grace studio\",\"title\":\"Большой\",\"href\":\"https://vk.com/market-156958510?w=product-156958510_2389260_8170a5a4424577fd92\",\"prices\":[1100],\"description\":\"Зал с белой циклорамой в ширину и глубину 5 метров. <br> В этом зале импульсный и постоянный свет, бумажные цветные фоны и фильтры.<br> Прямые лучи с 9 до 16 часов.\",\"furniture\":false,\"darkness\":false,\"photos_dir\":\"Grace/Big\"},{\"studio\":\"Grace studio\",\"title\":\"Маленький\",\"href\":\"https://vk.com/market-156958510?w=product-156958510_2389254_1c698c3efb2db05850\",\"prices\":[900],\"description\":\"Это небольшой зал 5.2х6.3 метра с деревянным полом и белыми стенами. Прямые лучи как и всегда с 9 до 16 часов.<br>Черный и серый фон.\",\"furniture\":false,\"darkness\":false,\"photos_dir\":\"Grace/Small\"},{\"studio\":\"Pavilion\",\"title\":\"Industry Hall\",\"href\":\"https://vk.com/market-55344392?w=product-55344392_1873943\",\"prices\":[1300,1400],\"description\":\"100 м<sup>2</sup><br> Три больших окна. Солнечная сторона. Подиум.\",\"furniture\":true,\"darkness\":true,\"photos_dir\":\"Pavilion\"},{\"studio\":\"Skypoint\",\"title\":\"Balcony Room\",\"href\":\"http://skypointstudio.ru/balconyroom\",\"prices\":[1400],\"description\":\"Балкон с видом на Неву и мосты. Деревянный пол, лестница и кровать. Зал 50 м<sup>2</sup>.\",\"furniture\":true,\"darkness\":false,\"photos_dir\":\"Skypoint/Balcony\",\"address\":{\"location\":\"м. Чернышевская, наб. р. Фонтанки, д. 2\",\"href\":\"place/набережная+реки+Фонтанки,+2,+Санкт-Петербург,+191187/@59.9472435,30.3347822,16.25z\"},\"contacts\":{\"phone\":\"+7(981)688-90-88\"}},{\"studio\":\"Skypoint\",\"title\":\"Первый этаж\",\"href\":\"http://skypointstudio.ru/1etazh\",\"prices\":[1600],\"description\":\"Просторный светлый зал с большим количеством окон и естественным освещением. Окна выходят на питерские виды.\",\"furniture\":true,\"darkness\":false,\"photos_dir\":\"Skypoint/First\",\"address\":{\"location\":\"м. Адмиралтейская, наб. р. Мойки, д. 30, кв. 82\",\"href\":\"place/наб.+реки+Мойки,+30,+Санкт-Петербург,+191186/@59.9394256,30.3130716,15.25z\"},\"contacts\":{\"phone\":\"+7(931)593-30-82\"}},{\"studio\":\"Skypoint\",\"title\":\"Большая гостинная\",\"href\":\"http://skypointstudio.ru/big\",\"prices\":[1800],\"description\":\"Белоснежная лепнина и натуральный дубовый паркет.<br>Площадь 110 м<sup>2</sup>\",\"furniture\":true,\"darkness\":false,\"photos_dir\":\"Skypoint/Big\",\"address\":{\"location\":\"м. Чкаловская, Большой пр. П.С., д. 22-24\",\"href\":\"place/Большой+проспект+П.С.,+22-24,+Санкт-Петербург,+197198/@59.9548915,30.2967425,15.5z/\"}},{\"studio\":\"Две комнаты\",\"title\":\"1 комната\",\"href\":\"https://www.instagram.com/stories/highlights/17966048467301643/\",\"prices\":[1500,1600],\"description\":\"Панорамные окна. Площадь 150 м<sup>2</sup>.\",\"furniture\":true,\"darkness\":false,\"photos_dir\":\"2rooms\"}]");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "EAku":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Header_header__1hE6G",
	"header__container": "Header_header__container__3H2AN",
	"header__title": "Header_header__title__3QHQ8",
	"header__nav": "Header_header__nav__sS7c6"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Nhdc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ Container; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ MenuButton; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ Spinner; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Breadcrumbs; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Picture; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Button; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ MainLayout; });

// UNUSED EXPORTS: CloseButton, Alert

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/sass/components/Container.module.scss
var Container_module = __webpack_require__("wSyM");
var Container_module_default = /*#__PURE__*/__webpack_require__.n(Container_module);

// CONCATENATED MODULE: ./src/components/Container.tsx



const Container = ({
  cls = '',
  children,
  style
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  className: `${Container_module_default.a.container} ${cls}`,
  style: style,
  children: children
});
// EXTERNAL MODULE: ./src/sass/components/MenuButton.module.scss
var MenuButton_module = __webpack_require__("xVnH");
var MenuButton_module_default = /*#__PURE__*/__webpack_require__.n(MenuButton_module);

// CONCATENATED MODULE: ./src/components/MenuButton.tsx




const MenuButton = ({
  onClick
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
  type: "button",
  className: MenuButton_module_default.a['dropdown-button'],
  onClick: onClick,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
});
// EXTERNAL MODULE: ./src/components/icons/index.ts + 11 modules
var icons = __webpack_require__("6NQV");

// EXTERNAL MODULE: ./src/sass/components/Spinner.module.scss
var Spinner_module = __webpack_require__("XJdk");
var Spinner_module_default = /*#__PURE__*/__webpack_require__.n(Spinner_module);

// CONCATENATED MODULE: ./src/components/Spinner.tsx




const Spinner = ({
  className,
  size,
  style
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  className: `${Spinner_module_default.a.spinner} ${className || ''}`,
  style: style,
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons["i" /* SpinnerIcon */], {
    size: size || 16
  })
});
// EXTERNAL MODULE: ./src/sass/components/CloseButton.module.scss
var CloseButton_module = __webpack_require__("3DC5");
var CloseButton_module_default = /*#__PURE__*/__webpack_require__.n(CloseButton_module);

// CONCATENATED MODULE: ./src/components/CloseButton.tsx



const CloseButton = ({
  cls,
  onClick
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
  className: `${CloseButton_module_default.a.closeButton} ${cls || ''}`,
  onClick: onClick,
  children: "\xD7"
});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/sass/components/Breadcrumbs.module.scss
var Breadcrumbs_module = __webpack_require__("mTlS");
var Breadcrumbs_module_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_module);

// CONCATENATED MODULE: ./src/components/Breadcrumbs.tsx








const hrefToName = {
  portfolio: {
    title: 'Портфолио',
    path: '/'
  },
  prices: {
    title: 'Цены',
    path: '/prices/'
  },
  contacts: {
    title: 'Контакты',
    path: '/contacts/'
  },
  extra: {
    title: 'Дополнительно',
    path: '/extra/'
  },
  poses: {
    title: 'Шпаргалка по позированию',
    path: '/extra/poses/'
  },
  locations: {
    title: 'Локации',
    path: '/extra/locations/'
  },
  studios: {
    title: 'Студии',
    path: '/extra/studios/'
  },
  stylists: {
    title: 'Стилисты',
    path: '/extra/stylists/'
  },
  blog: {
    title: 'Блог',
    path: '/blog/'
  }
};
const Breadcrumbs = () => {
  const router = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: Breadcrumbs_module_default.a.container,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
      cls: Breadcrumbs_module_default.a.breadcrumbs,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
        })
      }), router.pathname.split('/').map(name => {
        if (!hrefToName[name]) return null;
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
          children: [' / ', /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: hrefToName[name].path,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: hrefToName[name].title
            })
          })]
        }, hrefToName[name].path);
      }), router.pathname.includes('/blog/') && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [' / ', /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: router.pathname,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: router.query.title.replace(/-/g, ' ')
          })
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: ./src/sass/components/Alert.module.scss
var Alert_module = __webpack_require__("YBoQ");
var Alert_module_default = /*#__PURE__*/__webpack_require__.n(Alert_module);

// CONCATENATED MODULE: ./src/components/Alert.tsx







const Alert = ({
  type,
  expiredAt,
  children,
  cls = '',
  style,
  onInfoClick
}) => {
  const {
    0: closed,
    1: setClosed
  } = Object(external_react_["useState"])(false);
  const cantShow = closed || expiredAt && expiredAt < new Date();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: !cantShow && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
      cls: `${Alert_module_default.a.alert} ${Alert_module_default.a[`alert--${type}`]} ${cls}`,
      children: [children, /*#__PURE__*/Object(jsx_runtime_["jsx"])(CloseButton, {
        cls: Alert_module_default.a.close,
        onClick: () => setClosed(true)
      }), onInfoClick && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: Alert_module_default.a.info,
        onClick: onInfoClick,
        children: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
      })]
    })
  });
};
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__("KNus");
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// EXTERNAL MODULE: ./src/utils/index.ts + 3 modules
var utils = __webpack_require__("0lfv");

// CONCATENATED MODULE: ./src/components/Picture.tsx





const generator = Object(utils["e" /* createKeywordGenerator */])();
const Picture = ({
  src,
  imgCls,
  picCls,
  lazy,
  alt: initialAlt,
  onLoad,
  onClick,
  style
}) => {
  const alt = Object(external_react_["useMemo"])(() => initialAlt || generator.next().value, [src, initialAlt]);
  const {
    publicRuntimeConfig
  } = config_default()();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("picture", {
    style: style,
    className: picCls,
    children: [!publicRuntimeConfig.dev && /*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
      srcSet: `${src}.webp`,
      type: "image/webp"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: imgCls,
      alt: alt,
      src: src,
      loading: lazy ? 'lazy' : 'eager',
      onLoad: onLoad,
      onClick: onClick
    })]
  });
};
// EXTERNAL MODULE: ./src/sass/components/Button.module.scss
var Button_module = __webpack_require__("Y+3t");
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);

// CONCATENATED MODULE: ./src/components/Button.tsx




const Button = ({
  onClick,
  icon: Icon,
  text,
  cls = '',
  style,
  iconSize
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
  className: `${Button_module_default.a.button} ${text ? Button_module_default.a['button--text'] : ''} ${cls}`.trim(),
  onClick: onClick,
  style: style,
  children: [text && text, Icon && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon, {
    size: iconSize
  })]
});
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/sass/mainLayout/Header.module.scss
var Header_module = __webpack_require__("EAku");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// CONCATENATED MODULE: ./src/components/MainLayout/Header.tsx









const NavLink = ({
  href,
  title,
  active
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
  href: href,
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    children: active ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      children: title
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: title
    })
  })
});

const Nav = ({
  visible,
  path
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  className: Header_module_default.a.header__nav,
  itemScope: true,
  itemType: "http://schema.org/SiteNavigationElement",
  style: {
    display: visible ? 'flex' : ''
  },
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
    href: "/",
    title: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
    active: path === '/'
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
    href: "/portfolio/",
    title: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
    active: path === '/portfolio'
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
    href: "/prices/",
    title: "\u0426\u0435\u043D\u044B",
    active: path === '/prices'
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
    href: "/contacts/",
    title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
    active: path === '/contacts'
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavLink, {
    href: "/blog/",
    title: "\u0411\u043B\u043E\u0433",
    active: path === '/blog'
  })]
});

const Header = () => {
  const {
    0: navIsVisible,
    1: setNavIsVisible
  } = Object(external_react_["useState"])(false);
  const router = Object(router_["useRouter"])();
  Object(utils["i" /* useEventListener */])(globalThis, 'click', evt => {
    const el = evt.target;
    if (!el) return;
    if (navIsVisible && !el.closest(`.${Header_module_default.a.header__nav}`)) setNavIsVisible(false);
  }, false);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
    className: Header_module_default.a.header,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
      cls: Header_module_default.a.header__container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuButton, {
        onClick: () => setNavIsVisible(!navIsVisible)
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Nav, {
        visible: navIsVisible,
        path: router.pathname
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        className: Header_module_default.a.header__title,
        title: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444 \u0432 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435",
        children: "MyInspire photographer"
      })]
    })
  });
};
// EXTERNAL MODULE: ./src/sass/mainLayout/Footer.module.scss
var Footer_module = __webpack_require__("eA3U");
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);

// CONCATENATED MODULE: ./src/components/MainLayout/Footer.tsx





const footerBlockContacts = [{
  title: 'Instagram',
  href: 'https://www.instagram.com/myinspire_ph/'
}, {
  title: 'VK',
  href: 'https://vk.com/inspiredbyspb'
}, {
  title: 'Telegram',
  href: 'https://t.me/MyInspire_ph'
}, {
  title: 'WhatsApp',
  href: 'https://wa.me/79995154217'
}, {
  title: 'Pinterest',
  href: 'https://www.pinterest.ru/tatianamix1910/'
}, {
  title: 'Facebook',
  href: 'https://www.facebook.com/profile.php?id=100029685607190'
}, {
  title: 'E-mail',
  href: 'mailto:tatiana.mix.1910@gmail.com'
}];
const footerBlockDeveloper = [{
  title: 'GitHub',
  href: 'https://www.github.com/yoskutik'
}, {
  title: 'StackOverflow',
  href: 'https://stackoverflow.com/users/11589183/yoskutik'
}, {
  title: 'Habr',
  href: 'https://habr.com/ru/users/yoskutik/'
}];
const footerBlockIcons = [{
  title: 'By Freepik',
  href: 'https://www.freepik.com/'
}, {
  title: 'From www.flaticon.com',
  href: 'https://www.flaticon.com/'
}, {
  title: 'Licensed by CC 3.0 BY',
  href: 'http://creativecommons.org/licenses/by/3.0/'
}];
const Block = ({
  title,
  links
}) => {
  const {
    0: opened,
    1: setOpened
  } = Object(external_react_["useState"])(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${Footer_module_default.a.footer__block} ${opened ? Footer_module_default.a['footer__block--opened'] : ''}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
      className: Footer_module_default.a.footer__block_title,
      onClick: () => setOpened(!opened),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: Footer_module_default.a.footer__block_triangle
      }), title]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Footer_module_default.a.footer__block_body,
      children: links.map((it, i) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          target: "_blank",
          href: it.href,
          rel: "noreferrer",
          children: it.title
        }), i < links.length - 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {})]
      }, `${it.title}-${i}`))
    })]
  });
};

const Copyright = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
  className: Footer_module_default.a.footer__copyright,
  title: "\u041C\u0435\u043B\u044C\u043D\u0438\u043A\u043E\u0432\u0430 \u0422\u0430\u0442\u044C\u044F\u043D\u0430. \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    itemProp: "copyrightYear",
    content: "2019"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    itemProp: "copyrightHolder",
    content: "\u041C\u0435\u043B\u044C\u043D\u0438\u043A\u043E\u0432\u0430 \u0422\u0430\u0442\u044C\u044F\u043D\u0430"
  }), "\xA9 2019-", new Date().getFullYear(), ' ', "MyInspire-ph.ru"]
});

const Footer = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
  className: Footer_module_default.a.footer,
  itemScope: true,
  itemType: "http://schema.org/WPFooter",
  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
    cls: Footer_module_default.a.footer__container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Block, {
      title: "Contacts",
      links: footerBlockContacts
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Block, {
      title: "Developer",
      links: footerBlockDeveloper
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Block, {
      title: "Icons",
      links: footerBlockIcons
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Copyright, {})]
  })
});
// CONCATENATED MODULE: ./src/components/MainLayout/MainLayout.tsx










const styleFlex = {
  flex: 1
};
const MainLayout = ({
  title,
  description,
  keywords,
  children,
  robots = true,
  canonical
}) => {
  const [isSpinnerVisible, showSpinner, hideSpinner] = Object(utils["h" /* useBooleanState */])();
  Object(external_react_["useEffect"])(() => {
    router_default.a.events.on('routeChangeStart', showSpinner);
    router_default.a.events.on('routeChangeComplete', hideSpinner);
    return () => {
      router_default.a.events.off('routeChangeStart', showSpinner);
      router_default.a.events.off('routeChangeComplete', hideSpinner);
    };
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "robots",
        content: robots ? 'all' : 'none'
      }), description && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: description
      }), keywords && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "keywords",
        content: keywords
      }), canonical && /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "canonical",
        href: `https://MyInspire-ph.ru${canonical}`
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), isSpinnerVisible ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Spinner, {
      className: "page__loading-spinner",
      size: 96
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      className: "page",
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: styleFlex
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
};
// CONCATENATED MODULE: ./src/components/index.ts










/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XJdk":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"spinner": "Spinner_spinner__1iMlN"
};


/***/ }),

/***/ "Y+3t":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "Button_button__HMXtP",
	"button--text": "Button_button--text__31pqE"
};


/***/ }),

/***/ "YBoQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"alert": "Alert_alert__26eCe",
	"alert--info": "Alert_alert--info__1J1W4",
	"alert--success": "Alert_alert--success__p9lWC",
	"alert--error": "Alert_alert--error__1pGco",
	"close": "Alert_close__1yILO",
	"info": "Alert_info__3bWuc"
};


/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "aorh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addPostVisitor; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KNus");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2XLG");
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glob__WEBPACK_IMPORTED_MODULE_2__);



const {
  serverRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
const {
  rootDir
} = serverRuntimeConfig;
const pathsMap = {};
const getPhotos = path => {
  if (path in pathsMap) return pathsMap[path];
  const newPaths = glob__WEBPACK_IMPORTED_MODULE_2___default.a.sync(`${rootDir}/public/photos${path}**/*.jpg`).map(it => it.replace(`${rootDir}/public/photos${path}`, '').replace(/\.jpg$/i, ''));
  pathsMap[path] = newPaths;
  return newPaths;
};

if (!fs__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(`${rootDir}/statistics`)) {
  fs__WEBPACK_IMPORTED_MODULE_0___default.a.mkdirSync(`${rootDir}/statistics`);
}

const postVisitorsPath = `${rootDir}/statistics/postVisitors.json`;
let postVisitors;

try {
  postVisitors = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(postVisitorsPath, 'utf-8').join(''));
} catch {
  postVisitors = {};
}

setInterval(() => {
  try {
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(postVisitorsPath, JSON.stringify(postVisitors), {
      encoding: 'utf-8'
    });
  } catch {
    /* */
  }
}, 5 * 60 * 1000);
const addPostVisitor = title => {
  if (title in postVisitors) {
    postVisitors[title]++;
  } else {
    postVisitors[title] = 1;
  }
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eA3U":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__1t9_h",
	"footer__container": "Footer_footer__container__2e1_a",
	"footer__block": "Footer_footer__block__3jhF2",
	"footer__block_title": "Footer_footer__block_title__2gHpq",
	"footer__block_triangle": "Footer_footer__block_triangle__MHd2x",
	"footer__block_body": "Footer_footer__block_body__2631f",
	"footer__block--opened": "Footer_footer__block--opened__1gofx",
	"footer__copyright": "Footer_footer__copyright__rVcnn"
};


/***/ }),

/***/ "eLNt":
/***/ (function(module) {

module.exports = JSON.parse("{\"BEDFORD STUDIO\":{\"href\":\"https://www.bedford.studio/\",\"address\":{\"location\":\"м. Чернышевская, ул. Кирочная, д. 24\",\"href\":\"place/Кирочная+ул.,+24,+Санкт-Петербург,+191123/@59.944155,30.3556314,17z\"},\"phone\":\"+7 (812) 905-29-56\"},\"Grace studio\":{\"href\":\"https://vk.com/gracestudiospb\",\"address\":{\"location\":\"м. Петроградская, ул. Чапаева, д. 25\",\"href\":\"place/ул.+Чапаева,+25,+Санкт-Петербург,+197101/@59.9644573,30.3284216,17z\"},\"contacts\":{\"phone\":\"+7 (911) 905-45-70\"}},\"Pavilion\":{\"href\":\"http://pavilion-studio.ru/\",\"address\":{\"location\":\"м. Чкаловская, ул. Гатчинская, д. 28, вход №4\",\"href\":\"place/Гатчинская+ул.,+28,+Санкт-Петербург,+196110/@59.9632987,30.2936699,17z\"},\"contacts\":{\"phone\":\"+7 (921) 449-59-38\"}},\"Skypoint\":{\"href\":\"http://www.skypointstudio.ru/\"},\"Две комнаты\":{\"href\":\"https://www.instagram.com/two_rooms_studio/\",\"address\":{\"location\":\"м. Василеостровская, Кожевенная линия, д. 34Ж\",\"href\":\"place/Кожевенная+линия,+34,+Санкт-Петербург,+199106/@59.9237202,30.2422902,17z/\"},\"contacts\":{\"phone\":\"+7 (905) 256-11-12\"}}}");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "lxin":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filters": "Filters_filters__35HNB",
	"filters__block": "Filters_filters__block__3dF1_",
	"active": "Filters_active__3O-pZ",
	"filters__cost": "Filters_filters__cost__qbCB8",
	"asc": "Filters_asc__30VRd",
	"desc": "Filters_desc__3j6Jx"
};


/***/ }),

/***/ "mTlS":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Breadcrumbs_container__3Qx7m",
	"breadcrumbs": "Breadcrumbs_breadcrumbs__3cmnR"
};


/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wSyM":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Container_container__VIDev"
};


/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xVnH":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dropdown-button": "MenuButton_dropdown-button__1zMEb"
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });