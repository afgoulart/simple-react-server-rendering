'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _show_list_item = require('./containers/show_list_item');

var _show_list_item2 = _interopRequireDefault(_show_list_item);

var _header = require('./components/header');

var _header2 = _interopRequireDefault(_header);

var _main = require('./components/main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _header2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _main2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'view/:name', component: _show_list_item2.default })
    )
);