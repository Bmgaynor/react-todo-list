import React, { Component } from 'react';

class UserInfo extends Component{
  handleNewId(){
    this.props.actions.createNewUserId();
  }
  handleNewIdIfOdd(){
    this.props.actions.createNewUserIdIfOdd();
  }
  handleNewIdAsync(){
    this.props.actions.createNewUserIdAsync();
  }
  render(){
    return (
      <h1>
        <div>username:{this.props.user.username}</div>
        <div>id : {this.props.user.id}</div>
        <button onClick={this.handleNewId.bind(this)}>update With new iD</button>
        <button onClick={this.handleNewIdIfOdd.bind(this)}>update With new iD If odd</button>
        <button onClick={this.handleNewIdAsync.bind(this)}>update Async</button>

      </h1>
    )
  }
}

export default UserInfo;
