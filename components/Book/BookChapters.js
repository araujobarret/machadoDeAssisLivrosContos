import React from 'react';
import { FlatList, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

class BookChapters extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const book = navigation.getParam('book');
    return {
      title: book.title,
      headerStyle: {
        backgroundColor: '#fefefe',
        marginBottom: 5,
        elevation: 2,
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
      },
      headerLeft: (
        <TouchableOpacity
          style={{ marginLeft: 10, paddingVertical: 10 }}
          onPress={() => {
            navigation.dispatch(NavigationActions.back());
          }}
        >
          <Image source={require('../../assets/imgs/cancel.png')} resizeMode="contain" style={{ width: 36 }}/>
        </TouchableOpacity>
      ),
      headerRight: (
        <View style={{ marginRight: 10 }} />
      )
    }
  }

  constructor (props) {
    super(props);
    let indexes = []
    for (let i of Object.keys(props.navigation.state.params.book.indexes)) {
      if (isNaN(Number(i))) { continue; }
      indexes.push({
        blockIndex: Number(i),
        summary: props.navigation.state.params.book.indexes[i].summary,
        subtitle: props.navigation.state.params.book.indexes[i].subtitle,
      })
    }
    this.state = {
      indexes
    }
  }

  _renderItem ({ item, index }) {
    const listItem = [];
    if (item.subtitle) {
      if (item.subtitle !== 9999) {
        listItem.push(<Text key={index + 'subtitle'}style={style.subtitle}>{ item.subtitle }</Text>);
      }
    }
    listItem.push(
      <TouchableOpacity
        key={index + 'button'}
        onPress={() => {
          this.props.navigation.dispatch(NavigationActions.navigate({
            routeName: 'BookNavigator',
            params: {
              book: this.props.navigation.state.params.book,
              blockIndex: item.blockIndex
            }
          }));
        }}
        style={style.item}
      >
        <Text>{ item.summary }</Text>
      </TouchableOpacity>
    )
    return listItem;
  }

  _keyExtractor = (item, index) => 'block_' + index;

  render () {
    return (
      <View>
        <FlatList
          data={this.state.indexes}
          keyExtractor={ this._keyExtractor }
          renderItem={ this._renderItem.bind(this) }
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  item: {
    height: 30,
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    elevation: 3,
    margin: 4,
    paddingLeft: 12,
    shadowOffset: { width: 1, height: 2},
    shadowColor: "#000000",
    shadowRadius: 3,
    shadowOpacity: 0.5
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 8,
    fontWeight: 'bold'
  }
});

BookChapters.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default BookChapters;
