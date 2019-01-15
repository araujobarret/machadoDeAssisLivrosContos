import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import { getShortenedSentence } from '../../lib/util/util-text';

const ResultItems = ({ navigation, result, search, book, title }) => {
  const sentence = getShortenedSentence(search, result.text, null, result.isMultiple);
  const occurrences = sentence.split(search);
  let blocks = [];
  for (let i = 0; i < occurrences.length; i++) {
    blocks.push(<Text key={ 'res_normal' + i }>{ occurrences[i] }</Text>);
    if (i !== occurrences.length - 1) {
      blocks.push(<Text key={ 'res' + i } style={styles.highlight}>{ search }</Text>);
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
