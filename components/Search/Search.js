import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Search extends React.Component {
  static navigationOptions = {
    title: 'BUSCAR',
  }

  render() {
    return (
      <View>
        <Text>Type something to search</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
});


export default Search;
