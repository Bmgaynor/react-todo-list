import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import FlipBook from './FlipBook';

import { bindActionCreators } from 'redux';
import actions from '../redux/actions/actions';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <UserInfo actions={this.props.actions}
              user={this.props.user}/>
        <TodoInput addTodo={ this.props.actions.addTodo } />
        <TodoList todos={this.props.todos} actions={this.props.actions}  />
        <br/>
        <FlipBook flipBook={this.props.flipBook} actions={this.props.actions}/>
      </div>
    )
  }

}
function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(App);
