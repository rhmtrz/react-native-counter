import React from 'react';
import { Provider } from 'react-redux'; 
import { createStackNavigator } from 'react-navigation'; 

import configureStore from './src/redux/createStore'; 
import Counter from './src/components/counter'; 
import ChatRoom from './src/components/chat-room'; 


const store = configureStore()

const StackNavigator = createStackNavigator(
  {
    Counter: Counter, 
    ChatRoom: ChatRoom, 
  }, 
  {
    initialRouteName: 'ChatRoom', 
  }
); 

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    );
  }
}


