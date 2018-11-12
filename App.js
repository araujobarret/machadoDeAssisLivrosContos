import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import "unorm";

import { Navigator } from './navigation/Navigator';
import Splash from './components/Util/Splash';
import configureStore from './store/store';

const store = configureStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  render() {
    return (
      <Provider store={store}>
        { this.state.isLoading ? <Splash loadingStop={() => this.setState({ isLoading: false })}/> : <Navigator /> }
      </Provider>
    );
  }
}
