import React, { Component } from 'react';

class TodoItem extends Component{
  onEdit(event){
    this.setState({
      text: event.target.value  //todo figure out how to scrap fothe inputText 
    });
  }
  handleComplete(event){
    event.preventDefault();
    this.props.actions.completeTodo(this.props.todo.id);
  }
  handleDelte(event){
    event.preventDefault();
    this.props.actions.deleteTodo(this.props.todo.id);
  }
  handleEdit(event){
    event.preventDefault();
    this.props.actions.editTodo(this.props.todo.id);
  }
  handleEditSubmition(event){
    event.preventDefault();
    console.log(event.target);
    this.props.actions.handleEditSubmition(this.props.todo.id, this.props.todo.text); //event.target.value);
  }

  render(){

    var styleComplete = this.renderComplete();
    var edit = this.renderEdit();

    if(this.props.todo.edit){
      return (
        <div>
          {edit}
        </div>
      );
    }else{
        return (
          <li>
            <div
              style={styleComplete}>
                {this.props.todo.text}</div>
            <button onClick={this.handleComplete.bind(this)}>Mark Complete</button>
            <button onClick={this.handleDelte.bind(this)}>Delete</button>
            <button onClick={this.handleEdit.bind(this)}>Edit</button>

          </li>
        )
      }
  }

  renderComplete(){
    return {
      color : this.props.todo.completed ? 'blue' : 'black',
      textDecoration: this.props.todo.completed ? 'line-through': 'none'
    }
  }
  renderEdit(){
    return (
      <li>
        <form onSubmit={this.handleEditSubmition.bind(this)}>
          <input
            type='text'
            placeholder={this.props.todo.text}
            value={this.props.todo.text}
            onChange={this.onEdit.bind(this)}
            />
        </form>
      </li>

    )
  }
}

export default TodoItem;
