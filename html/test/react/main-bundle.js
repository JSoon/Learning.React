/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./html/test/react/like.jsx */1);
	module.exports = __webpack_require__(/*! ./html/test/react/list.jsx */4);


/***/ },
/* 1 */
/*!**********************************!*\
  !*** ./html/test/react/like.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //
	// ECMAScript 2015 (ES6) syntax
	//==================================================================
	
	var LikeButton = function (_Component) {
		_inherits(LikeButton, _Component);
	
		// 初始化 this.state 的值，只在组件装载之前调用一次
	
		function LikeButton(props) {
			_classCallCheck(this, LikeButton);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LikeButton).call(this, props));
	
			_this.state = {
				liked: _this.props.liked
			};
			return _this;
		}
	
		// 点击事件，注意这里的 event 是一个 SyntheticMouseEvent，不是原生的 onclick 事件
	
	
		_createClass(LikeButton, [{
			key: 'handleClick',
			value: function handleClick(param, event) {
				// console.log(param);
				// console.log(event);
				this.setState({
					liked: !this.state.liked
				});
			}
	
			// Virtual DOM，它返回一个 LikeButton 组件的实例，并不是一个真正的 DOM 结构
			// 这样可以避免直接输出 HTML 串可能遭受的 XXS 攻击
	
		}, {
			key: 'render',
			value: function render() {
				var text = this.state.liked ? 'liked' : 'haven\'t liked';
				return _react2.default.createElement(
					'p',
					{ onClick: this.handleClick.bind(this, 'hehe') },
					'You ',
					text,
					' this. Click to toggle.'
				);
			}
	
			//
			// 生命周期函数
			//==================================================================
	
			// 只会在装载之前调用一次，在 render 之前调用
			// 你可以在这个方法里面调用 setState 改变状态，并且不会导致额外调用一次 render
	
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				var that = this;
				// setTimeout(function() {
				// 	that.setState({
				// 		liked: true
				// 	});
				// }, 2000);
			}
	
			// 只会在装载完成之后调用一次，在 render 之后调用
			// 从这里开始可以通过 react-dom 的 findDOMNode(this) 获取到组件的 DOM 节点
	
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log((0, _reactDom.findDOMNode)(this));
				// console.log(findDOMNode(this).innerText);
			}
		}]);
	
		return LikeButton;
	}(_react.Component);
	
	// 组件默认属性
	
	
	LikeButton.defaultProps = {
		liked: false
	};
	
	// 渲染实例化后的组件，将其注入到相应的 DOM 节点中去（第二个参数）
	// 该方法只能在组件定义后被调用一次
	(0, _reactDom.render)(_react2.default.createElement(LikeButton, null), document.getElementById('example'));

/***/ },
/* 2 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/*!**********************************!*\
  !*** ./html/test/react/list.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 列表项
	var BlackListItem = function BlackListItem(props) {
		return _react2.default.createElement(
			'li',
			null,
			props.name
		);
	};
	
	// 列表
	var BlackList = function BlackList(props) {
		return _react2.default.createElement(
			'ul',
			null,
			props.list.map(function (item) {
				return _react2.default.createElement(BlackListItem, { name: item, key: item });
			})
		);
	};
	
	var LIST = ['Kitty', 'Polly', 'Beast', 'Ducky'];
	
	// 渲染至 DOM
	(0, _reactDom.render)(_react2.default.createElement(BlackList, { list: LIST }), document.getElementById('list'));

/***/ }
/******/ ]);
//# sourceMappingURL=main-bundle.js.map