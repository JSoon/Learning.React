/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _redux = __webpack_require__(2);

	// action
	function increment() {
	    return {
	        type: 'INCREMENT'
	    };
	}

	function decrement() {
	    return {
	        type: 'DECREMENT'
	    };
	}

	// reducer
	function counter() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'INCREMENT':
	            return state + 1;
	        case 'DECREMENT':
	            return state - 1;
	        default:
	            return state;
	    }
	}

	// store machine
	var store = (0, _redux.createStore)(counter);

	// subscribe
	store.subscribe(function () {
	    return console.log(store.getState());
	});

	// dispatch
	store.dispatch(increment());

	store.dispatch(decrement());

	store.dispatch(increment());

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ }
/******/ ]);