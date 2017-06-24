'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _list_actions = require('../actions/list_actions');

var ActionsList = _interopRequireWildcard(_list_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListView = function (_Component) {
  _inherits(ListView, _Component);

  function ListView(props) {
    _classCallCheck(this, ListView);

    return _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, props));
  }

  _createClass(ListView, [{
    key: 'onClick',
    value: function onClick(listItem, evt) {
      this.props.selectItem(listItem);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          lists = _props.lists,
          selectItem = _props.selectItem;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'list-group col-sm-4' },
          lists.map(function (listItem) {
            return _react2.default.createElement(
              'li',
              { key: listItem.name, onClick: _this2.onClick.bind(_this2, listItem), className: 'list-group-item' },
              listItem.name
            );
          })
        )
      );
    }
  }]);

  return ListView;
}(_react.Component);

var setSelectItem = function setSelectItem(dispatch) {
  return function (listItem) {
    dispatch(ActionsList.selectItem(listItem));
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    lists: state.lists.all
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, stateProps, {
    selectItem: setSelectItem(dispatchProps.dispatch)
  });
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(ListView);