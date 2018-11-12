import React from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Books } from '../../lib/index';
import { getBooks } from '../../actions/books';

class List extends React.Component {
  constructor () {
    super();
    this.state = {
      books: null,
      booksData: null,
      isLoading: true
    };
  }

  // should check updates on books list
  static getDerivedStateFromProps (props, state) {
    if (props.books) {
      if (props.books.books) {
        if (!state.books) {
          return {
            books: props.books,
            booksData: Array.from(props.books.books),
            isLoading: false
          }
        }
        if (props.books.books.size !== state.books.books.size) {
          return {
            books: props.books,
            booksData: Array.from(props.books.books),
            isLoading: false
          }
        }
      }
    }
  }

  componentDidMount () {
    this.props.dispatch(getBooks(Books));
  }

  _renderItem = ({ item, index }) => (
    <TouchableOpacity style={style.item}>
      <Text style={style.text}>{ `${item[1].title}` }</Text>
    </TouchableOpacity>
  )

  _keyExtractor = (item, index) => item.key;

  render() {
    console.log('re-rendered', this.state)
    return (
      <FlatList
        styles={ style.list }
        data={ this.state.booksData }
        keyExtractor={ this._keyExtractor }
        renderItem={ this._renderItem }
      />
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  },
  item: {
    height: 70,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    elevation: 2,
    marginBottom: 5
  },
  text: {
    fontFamily: 'Times New Roman',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12
  }
})

const mapStateToProps = (store) => ({
  ...store
});

export default connect(mapStateToProps)(List);
