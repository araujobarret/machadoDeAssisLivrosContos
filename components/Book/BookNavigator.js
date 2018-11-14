import React from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

export default class BookNavigator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    console.log
  }

  // Book navigation back and forward methods

  _next () {

  }

  _back () {

  }

  // Blocks FlatList methods

  _renderItem = ({ item, index }) => (
    <TouchableOpacity style={style.item}>
      <Text style={style.text}>{ `${item[1].title}` }</Text>
    </TouchableOpacity>
  )

  _keyExtractor = (item, index) => item[1].key;

  render() {
    console.log('re-rendered')
    return (
      <FlatList
        styles={ style.list }
        data={ this.state.blocks }
        keyExtractor={ this._keyExtractor }
        renderItem={ this._renderItem }
      />
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  }
})
