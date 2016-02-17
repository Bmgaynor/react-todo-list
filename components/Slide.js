import React, { Component } from 'react';

class Slide extends Component{
  render(){
    let shown = this.handleHidden(this.props.slide.hidden);
    return (
      <div style={shown}>
        {this.props.slide.text }
      </div>
    )
  }
  handleHidden(hidden){
    return {
      color : hidden ? 'white' : 'black',
    }
  }
}

export default Slide;
