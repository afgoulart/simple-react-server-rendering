'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _routes = require('../../routes');

var _routes2 = _interopRequireDefault(_routes);

var _index = require('../../reducers/index');

var _index2 = _interopRequireDefault(_index);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _list_actions = require('../../actions/list_actions');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
	/*
 Here we are first matching if the current url exists in the react router routes
  */
	(0, _reactRouter.match)({ routes: _routes2.default, location: req.originalUrl }, function (error, redirectLocation, renderProps) {
		if (error) {
			res.status(500).send(error.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {

			/*
          http://redux.js.org/docs/recipes/ServerRendering.html
    */
			var store = (0, _redux.createStore)(_index2.default);

			var html = _server2.default.renderToString(_react2.default.createElement(
				_reactRedux.Provider,
				{ store: store },
				_react2.default.createElement(_reactRouter.RouterContext, renderProps)
			));

			/*
   We can dispatch actions from server side as well. This can be very useful if you want
   to inject some initial data into the app. For example, if you have some articles that
   you have fetched from database and you want to load immediately after the user has loaded
   the webpage, you can do so in here.
   		Here we are inject an list item into our app. Normally once the user has loaded the webpage
   we would make a request to the server and get the latest item list. But in the server we have
   instant connection to a database (for example, if you have a mongoDB or MySQL database installed
   in the server which contains all you items). So you can quickly fetch and inject it into the webpage.
   		This will help SEO as well. If you load the webpage and make a request to the server to get all the
   latest items/articles, by the time Google Search Engine may not see all the updated items/articles.
   		But if you inject the latest items/articles before it reaches the user, the Search Engine will see the
   item/article immediately.
    */
			store.dispatch({
				type: _list_actions.ADD_ITEM,
				payload: {
					name: 'Components',
					description: 'Description for components'
				}
			});

			var finalState = store.getState();

			res.status(200).send((0, _utils.renderFullPage)(html, finalState));
		} else {
			res.status(404).send('Not found');
		}
	});
});

exports.default = router;