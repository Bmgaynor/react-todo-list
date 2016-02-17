import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import ConfigureStore from '../redux/store/configureStore';
import { Provider } from 'react-redux';
let initialState = {
  todos: [
    {
      id: 0,
      completed: false,
      text: 'this is the first todo',
      edit:false
    }],
    user:{
      username: 'Brad',
      id: 44
    },
    flipBook:{
      currentSlide:1,
      slides:[
        {
          id:0,
          hidden:false,
          text: 'Sad box ',
          number: 1
        },
        {
          id:1,
          hidden: 'hidden',
          text: 'snad shrew',
          number: 2
        }
      ]
    }
};

let store = ConfigureStore(initialState);
render(
  <Provider store={store}>
    <App/>
  </Provider>  ,
  document.getElementById('app')
)
