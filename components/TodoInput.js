import React, { Component } from 'react';
class TodoInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      inputText: ''
    };
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addTodo(this.state.inputText);
    this.state.inputText = "";
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Enter Todo"
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
          />
          <input type="submit" text="Submit" />
        </form>
      </div>
    )
  }

}

export default TodoInput
