import React from 'react';
import { ActivityIndicator, FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Books } from '../../lib/index';
import { getBooks } from '../../actions/books';
import { getNextHeader } from '../../lib/util/util-text';

class BookNavigator extends React.Component {
  constructor (props) {
    super(props);
    let book = props.navigation.state.params.book;
    Books.addBook(book);
    const currentBlock = props.navigation.state.params.block ? props.navigation.state.params.block : 0;
    const navigationRes = Books.navigate(book.key, currentBlock);
    console.log('navigate', navigationRes);

    this.state = {
      isLoading: true,
      book,
      previousBlock: navigationRes.initialBlock === 0 ? null : getNextHeader(book, currentBlock, true),
      currentBlock,
      nextBlock: navigationRes.finalBlock === book.src.blocks.length - 1 ? null : getNextHeader(book, currentBlock) + 1,
      blocks: navigationRes.blocks
    };
  }

  componentDidMount () {
    this.setState({ isLoading: false });
  }

  // Book navigation back and forward methods

  _next () {
    this.setState({ isLoading: true}, () => {
      let { currentBlock, previousBlock, nextBlock } = this.state;
      currentBlock = nextBlock;
      previousBlock = getNextHeader(this.state.book, currentBlock, true);
      const navigationRes = Books.navigate(this.state.book.key, currentBlock);
      nextBlock: navigationRes.finalBlock === this.state.book.src.blocks.length - 1 ? null : getNextHeader(this.state.book, currentBlock) + 1;
      this.setState({ isLoading: false, currentBlock, previousBlock, nextBlock, blocks: navigationRes.blocks }, () => {
        const copy = this.state;
        delete copy.book;
        console.log('copy', copy);
        delete copy.blocks;        
        console.log('copy', copy);
      });
    });
  }

  _back () {
    console.log('BACK');
  }

  _renderText (item) {
    let blockStyle
    switch (item.type) {
      case 'Header':
        blockStyle = { fontWeight: 'bold',  textAlign: 'center', fontSize: 24, backgroundColor: '#FEFEFE' };
        break;
      case 'Right':
        blockStyle = { fontWeight: 'bold',  textAlign: 'right' };
        break;
      case 'BlockQuote':
        blockStyle = { textAlign: 'center' };
        break;
      case 'Emph':
        blockStyle = { textAlign: 'center', fontStyle: 'italic' };
        break;
    }
    return (
      <Text selectable={true} style={[style.text, blockStyle]}>{item.sentences}</Text>
    )
  }

  _renderNavigatorButtons () {
    const buttons = []
    console.log('previous', this.state.previousBlock)
    if (this.state.previousBlock) {
      buttons.push(
        <TouchableOpacity key='backBtn' onPress={() => this._back()} style={[style.button, style.buttonLeft]}>
          <Text style={style.buttonLabel}>{'<'}</Text>
        </TouchableOpacity>
      )
    }
    console.log('nextBlock', this.state.nextBlock)
    if (this.state.nextBlock) {
      buttons.push(
        <TouchableOpacity key='nextBtn' onPress={() => this._next()} style={[style.button, style.buttonRight]}>
          <Text style={style.buttonLabel}>{'>'}</Text>
        </TouchableOpacity>
      )
    }
    return buttons
  }

  // Blocks FlatList methods

  _renderItem = ({ item, index }) => (
    <View style={style.item}>
      { this._renderText(item) }
    </View>
  )

  _keyExtractor = (item, index) => 'block_' + index;

  render() {
    console.log('re-rendered')
    return (
      <View style={style.container}>
        { !this.state.isLoading ? (
            <View>
              <FlatList
                styles={ style.list }
                data={ this.state.blocks }
                keyExtractor={ this._keyExtractor }
                renderItem={ this._renderItem }
              />
              { this._renderNavigatorButtons() }
            </View>
          ) : (
            <ActivityIndicator size="large" color="#00ff00" style={{ flex: 1, marginTop: 30 }} />
          )
        }
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    color: 'black',
    lineHeight: 40,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'orange',
    borderRadius: 25,
    alignItems: 'center',
    zIndex: 1,
    height: 42,
    width: 42,
    bottom: 16
  },
  buttonLeft: {
    left: 16
  },
  buttonRight: {
    right: 16
  },
  buttonLabel: {
    fontSize: 26,
    fontWeight: 'bold'
  }
})

BookNavigator.propTypes = {
  navigation: PropTypes.object.isRequired,
  block: PropTypes.number
};

export default BookNavigator;
