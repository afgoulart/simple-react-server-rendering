'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _list_actions = require('../actions/list_actions');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowListItem = function (_Component) {
	_inherits(ShowListItem, _Component);

	function ShowListItem() {
		_classCallCheck(this, ShowListItem);

		return _possibleConstructorReturn(this, (ShowListItem.__proto__ || Object.getPrototypeOf(ShowListItem)).apply(this, arguments));
	}

	_createClass(ShowListItem, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.getListItem(this.props.params.name);
		}
	}, {
		key: 'render',
		value: function render() {
			var item = this.props.item;

			if (!item) {
				return _react2.default.createElement(
					'div',
					null,
					'Loading...'
				);
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: "/" },
					_react2.default.createElement(
						'button',
						{ type: 'button', className: 'btn btn-primary', style: { marginTop: 10, marginBottom: 10 } },
						'Go Back'
					)
				),
				_react2.default.createElement(
					'h1',
					null,
					item.name
				),
				_react2.default.createElement(
					'p',
					null,
					item.description
				)
			);
		}
	}]);

	return ShowListItem;
}(_react.Component);

/*
 This is a redux specific function.
 What is does is: It gets the state specified in here from the global redux state.
 For example, here we are retrieving the list of items from the redux store.
 Whenever this list changes, any component that is using this list of item will re-render.
 */


function mapStateToProps(state) {
	return {
		item: state.lists.item
	};
}

/*
 Here we are creating a Higher order component
 https://facebook.github.io/react/docs/higher-order-components.html
 */
exports.default = (0, _reactRedux.connect)(mapStateToProps, { getListItem: _list_actions.getListItem })(ShowListItem);