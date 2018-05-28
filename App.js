import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigation from './navigation/AppNavigation';
import configureStore from './store/store';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
