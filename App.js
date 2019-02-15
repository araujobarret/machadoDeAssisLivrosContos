import React from 'react';
import { Platform, View } from 'react-native';
import { Provider } from 'react-redux';
import Realm from 'realm';
import RNFS from "react-native-fs";
import "unorm";

import { Navigator } from './navigation/Navigator';
import Splash from './components/Util/Splash';
import configureStore from './store/store';

const store = configureStore();

const BookSchema = {
  name: 'book',
  properties: {
    key: 'string',
    blockIndex: { type: 'int' },
    title: 'string',
    textType: 'string',
    text: 'string',
    type: 'string'
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Realm.copyBundledRealmFiles();
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
