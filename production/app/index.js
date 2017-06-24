'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _index = require('./src/reducers/index');

var _index2 = _interopRequireDefault(_index);

var _routes = require('./src/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Here we are getting the initial state injected by the server. See routes/index.js for more details
 */
var initialState = window.__INITIAL_STATE__;

/*
While creating a store, we will inject the initial state we received from the server to our app.
 */
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: (0, _redux.createStore)(_index2.default, initialState) },
  _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default })
), document.getElementById("reactbody"));