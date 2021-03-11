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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1muL":
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Hizf");


/***/ }),

/***/ "Hizf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ sendMail; });

// EXTERNAL MODULE: external "nodemailer"
var external_nodemailer_ = __webpack_require__("1muL");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__("mw/K");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__("KNus");
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// EXTERNAL MODULE: external "node-telegram-bot-api"
var external_node_telegram_bot_api_ = __webpack_require__("vlCk");
var external_node_telegram_bot_api_default = /*#__PURE__*/__webpack_require__.n(external_node_telegram_bot_api_);

// CONCATENATED MODULE: ./src/utils/NotificationBot.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  serverRuntimeConfig
} = config_default()();
class NotificationBot_NotificationBot extends external_node_telegram_bot_api_default.a {
  constructor(token) {
    super(token, {
      polling: true
    });

    _defineProperty(this, "userIds", void 0);

    _defineProperty(this, "sendToAll", async message => {
      const userIds = [...this.userIds];

      for (let i = 0; i < userIds.length; i++) {
        this.sendMessage(userIds[i], message); // eslint-disable-next-line no-await-in-loop

        await new Promise(resolve => setTimeout(resolve, 35));
      }
    });

    try {
      this.userIds = new Set(JSON.parse(external_fs_default.a.readFileSync(serverRuntimeConfig.telegram.usersFile, 'utf-8')));
    } catch {
      this.userIds = new Set();
    }

    this.on('message', message => {
      if (!this.userIds.has(message.chat.id)) {
        this.userIds.add(message.chat.id);
        external_fs_default.a.writeFileSync(serverRuntimeConfig.telegram.usersFile, JSON.stringify([...this.userIds]));
      }
    });
  }

}
// CONCATENATED MODULE: ./pages/api/sendMail.ts


const transporter = external_nodemailer_default.a.createTransport({
  host: 'smtp.timeweb.ru',
  port: 25,
  secure: false,
  auth: {
    user: '',
    pass: ''
  }
});
const bot = new NotificationBot_NotificationBot('459375635:AAFUh43EyzLXpQX5IqwPqcp57KNFAmIVEK8');
function sendMail(req, res) {
  transporter.sendMail({
    from: '"Татьяна 👻" <tatiana@myinspire-ph.ru>',
    to: 'yoskutik@gmail.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>'
  }).then(() => {
    res.status(200).json({});
    bot.sendToAll('message');
  }).catch(() => res.status(401).json({}));
}

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "vlCk":
/***/ (function(module, exports) {

module.exports = require("node-telegram-bot-api");

/***/ })

/******/ });