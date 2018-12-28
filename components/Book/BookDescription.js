import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const BookDescription = ({ navigation, book, info }) => {
  return (
    <TouchableOpacity
      style={style.item}
      onPress={() => navigation.navigate('BookChapters', { book })}
    >
      <Text style={style.text}>{ `${info.title}` }</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  item: {
    height: 70,
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    elevation: 3,
    margin: 4
  },
  text: {
    fontFamily: 'Times New Roman',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12
  }
});

BookDescription.propTypes = {
  navigation: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired
}

export default BookDescription;
