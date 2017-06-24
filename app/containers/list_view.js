import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsList from '../actions/list_actions';

class ListView extends Component {
  constructor(props){
    super(props);
  }
  
  onClick(listItem, evt) {
    this.props.selectItem(listItem);
  }

  render() {
    const {lists, selectItem} = this.props;
    return <div>
      <ul className="list-group col-sm-4" >
        { lists.map(listItem => <li key={listItem.name} onClick={this.onClick.bind(this, listItem)} className="list-group-item">
          { listItem.name }
        </li>)}
      </ul>
    </div>;
  }
}

const setSelectItem = (dispatch) => (listItem) => {
  dispatch(ActionsList.selectItem(listItem));
};

const mapStateToProps = state => ({
  lists: state.lists.all
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  selectItem: setSelectItem(dispatchProps.dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ListView);
