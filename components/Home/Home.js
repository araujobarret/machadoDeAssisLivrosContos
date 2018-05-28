import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}


export default Home;
