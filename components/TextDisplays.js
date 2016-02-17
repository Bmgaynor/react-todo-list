import React, { Component } from 'react';
import TextInput from './TextInput';


class TextDisplays extends Component{
  constructor(props, context) {
    super(props, context);
    this.state={
        displays:[]
    };
  }
  render(){
    return(
      <div>
          <TextInput/>
          <TextInput/>


          //todo add

      </div>
    )
  }
}
export default TextDisplays;
