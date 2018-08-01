import React from 'react';
import { Provider } from 'react-redux'; 

import configureStore from './src/redux/createStore'; 
import Counter from './src/components/counter'; 

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}


