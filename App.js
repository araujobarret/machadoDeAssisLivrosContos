import React from 'react';
import { Platform, View } from 'react-native';
import { Provider } from 'react-redux';
import RNFS from "react-native-fs";
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

  componentWillMount () {
    try {
      RNFS.unlink(RNFS.DocumentDirectoryPath + "/default.realm");
      RNFS.unlink(RNFS.DocumentDirectoryPath + "/default.realm.lock");
    } catch (e) {
      console.log('unable to locate realm files to unlink');
    }
    if (Platform.OS == "android") {
      try {
        RNFS.copyFileAssets("default.realm", RNFS.DocumentDirectoryPath + "/default.realm");
        RNFS.copyFileAssets("default.realm.lock", RNFS.DocumentDirectoryPath + "/default.realm.lock");
      } catch (e) {
        console.log("Realm file already exists");
      }
    } else {
      try {
        RNFS.copyFile(RNFS.MainBundlePath + "/default.realm", RNFS.DocumentDirectoryPath + "/default.realm");
        RNFS.copyFile(RNFS.MainBundlePath + "/default.realm.lock", RNFS.DocumentDirectoryPath + "/default.realm.lock");
      } catch (e) {
        console.log("Realm file already exists");
      }
    }
  }

  render() {
    return (
      <Provider store={store}>
        { this.state.isLoading ? <Splash loadingStop={() => this.setState({ isLoading: false })}/> : <Navigator /> }
      </Provider>
    );
  }
}
