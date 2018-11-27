import React from 'react';
import { View } from 'react-native';

import List from '../List/List'

class Home extends React.Component {
  static navigationOptions = {
    title: 'LIVROS',
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


export default Home;
