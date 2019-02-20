import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Realm from 'realm';
import "unorm";

import { Navigator } from './navigation/Navigator';
import Splash from './components/Util/Splash';

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
    if (this.state.isLoading) {
      return <Splash loadingStop={() => this.setState({ isLoading: false })}/>
    }
    return <Navigator />
  }
}
