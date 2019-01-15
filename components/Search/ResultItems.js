import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import { getShortenedSentence } from '../../lib/util/util-text';

const ResultItems = ({ navigation, result, search, book, title }) => {
  const sentence = getShortenedSentence(search, result.text, null, result.isMultiple);
  const index = sentence.toLowerCase().indexOf(search);
  let startIndex = 0;
  const endIndex = sentence.length;
  let blocks = [];
  if (startIndex === index) {
    blocks.push(<Text key={'r0'} style={styles.highlight}>{ sentence.slice(startIndex, index + search.length) }</Text>);
    blocks.push(<Text key={'r_n0'}>{ sentence.slice(index + 1, endIndex) }</Text>);
  } else {
    if (endIndex === index + search.length) {
      blocks.push(<Text key={'r_n0'}>{ sentence.slice(startIndex, index) }</Text>);
      blocks.push(<Text key={'r_0'} style={styles.highlight}>{ sentence.slice(index, endIndex) }</Text>);
    } else {
      blocks.push(<Text key={'r_n0'}>{ sentence.slice(startIndex, index) }</Text>);
      blocks.push(<Text key={'r0'} style={styles.highlight}>{ sentence.slice(index, index + search.length) }</Text>);
      blocks.push(<Text key={'r_n1'}>{ sentence.slice(index + search.length, endIndex) }</Text>);
    }
  }
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.dispatch(NavigationActions.navigate({
          routeName: 'BookNavigator',
          params: { book, blockIndex: result.blockIndex, search }
        }));
      }}
    >
      <Text style={styles.text}>{ blocks }</Text>
      <Text style={styles.subText}>{ title }</Text>
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
  },
  highlight: {
    backgroundColor: '#ffff66'
  }
});

ResultItems.propTypes = {
  navigation: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired
}

export default ResultItems;
