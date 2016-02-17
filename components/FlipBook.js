import React, { Component } from 'react';
import Slide from './Slide';

class FlipBook extends Component{

  handleLeft(event){
    //change the hidden status of the current slide and the next slide
  }
  handleRight(event){

  }
  render(){
    return (
      <div>
        <button onClick={this.handleLeft.bind(this)}>Back</button>

        <ul>
          {
            this.props.flipBook.slides.map((slide)=> { ///todo set the number by the index of the mapping function
              return <Slide key={slide.id} slide={slide} />
            })
          }
        </ul>
        <button onClick={this.handleRight.bind(this)}>next</button>

      </div>
    )
  }
}

export default FlipBook;
