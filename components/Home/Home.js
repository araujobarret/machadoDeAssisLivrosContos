import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import List from '../List/List'

class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <List navigation={navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});


export default Home;
