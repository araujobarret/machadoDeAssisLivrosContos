import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { getShortenedSentence } from '../../lib/util/util-text';

const ResultItems = ({ navigation, result, search }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.text}>{ getShortenedSentence(search, result.text, null, result.isMultiple) }</Text>
      <Text style={styles.subText}>{ result.title }</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fefefe',
    paddingVertical: 16,
    elevation: 5,
    margin: 10,
  },
  text: {
    fontFamily: 'Times New Roman',
    fontSize: 20,
    marginLeft: 12,
    lineHeight: 40,
    textAlign: 'justify'
  },
  subText: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 16,
  }
});

ResultItems.propTypes = {
  navigation: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired
}

export default ResultItems;
