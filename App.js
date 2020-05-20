/* eslint-disable quote-props */
/* eslint-disable global-require */
/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import { AppNavigator } from './app/navigators/app-navigator';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <StatusBar hidden />
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
