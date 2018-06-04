import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  }

  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>Home</Text>
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
