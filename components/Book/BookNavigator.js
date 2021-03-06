import React from 'react';
import { ActivityIndicator, FlatList, Image, View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import PropTypes from 'prop-types';

import { Books } from '../../lib/index';
import { getNextHeader } from '../../lib/util/util-text';

class BookNavigator extends React.Component {
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
    let book = props.navigation.state.params.book;
    Books.addBook(book);
    const currentBlock = props.navigation.state.params.blockIndex ? props.navigation.state.params.blockIndex : 0;
    const navigationRes = Books.navigate(book.key, currentBlock);
    const { blocks, nextBlock, previousBlock } = navigationRes
    this.state = {
      isLoading: true,
      bookKey: book.key,
      previousBlock,
      currentBlock: navigationRes.initialBlock,
      nextBlock,
      blocks,
      conto: navigationRes.conto
    };
  }

  componentDidMount () {
    this.setState({ isLoading: false });
  }

  // Book navigation back and forward methods

  _next () {
    this.setState({ isLoading: true}, () => {
      let currentBlock = this.state.nextBlock;
      const navigationRes = Books.navigate(this.state.bookKey, currentBlock, this.state.nextBlock);
      const { previousBlock, nextBlock } = navigationRes
      this.setState({
        isLoading: false,
        currentBlock,
        previousBlock,
        nextBlock,
        blocks: navigationRes.blocks,
        conto: navigationRes.conto
      });
    });
  }

  _back () {
    this.setState({ isLoading: true}, () => {
      let currentBlock = this.state.previousBlock - 1;
      const navigationRes = Books.navigate(this.state.bookKey, currentBlock);
      const { previousBlock, nextBlock } = navigationRes
      this.setState({
        isLoading: false,
        currentBlock,
        previousBlock,
        nextBlock,
        blocks: navigationRes.blocks,
        conto: navigationRes.conto
      });
    });
  }

  _renderText (item) {
    let blockStyle
    switch (item.type) {
      case 'Header':
        blockStyle = { fontWeight: 'bold',  textAlign: 'center', fontSize: 22, backgroundColor: '#FEFEFE' };
        break;
      case 'HeaderRightEmph':
        blockStyle = { fontStyle: 'italic', textAlign: 'right' };
        break;
      case 'Right':
        blockStyle = { fontWeight: 'bold',  textAlign: 'right' };
        break;
      case 'RightEmph':
        blockStyle = { textAlign: 'right', fontStyle: 'italic' };
        break;
      case 'BlockQuote':
        blockStyle = { textAlign: 'center' };
        break;
      case 'BlockQuoteEmph':
        blockStyle = { textAlign: 'center', fontStyle: 'italic' };
        break;
      case 'BlockQuoteUnderline':
        blockStyle = { textAlign: 'center', fontStyle: 'underline', fontWeight: 'bold' };
        break;
      case 'Space':
        blockStyle = { marginLeft: 30 };
        break;
      case 'SpaceEmph':
        blockStyle = { marginLeft: 30, fontStyle: 'italic' };
        break;
      case 'SpaceCenter':
        blockStyle = { marginLeft: 30, textAlign: 'center' };
        break;
      case 'JustifyLongSpaceRight':
        blockStyle = { textAlign: 'justify', marginLeft: 40 };
        break;
      case 'JustifySpaceRight':
        blockStyle = { textAlign: 'justify', marginLeft: 20 };
        item.sentences = '  ' + item.sentences;
        break;
      case 'Emph':
        blockStyle = { textAlign: 'center', fontStyle: 'italic' };
        break;
      case 'ParaEmph':
        blockStyle = { fontStyle: 'italic' };
        break;
      default:
        item.sentences = '' + item.sentences;
    }
    const fontFamily =  Platform.OS === 'android' ? 'sans-serif' : 'Times New Roman';
    if (!this.props.navigation.state.params.search) {
      return <Text selectable={true} style={[style.text, blockStyle, { fontFamily }]}>{item.sentences}</Text>
    } else {
      if (item.sentences.toLowerCase().indexOf(this.props.navigation.state.params.search) !== -1) {
        const sentence = item.sentences;
        const search = this.props.navigation.state.params.search;
        const index = sentence.toLowerCase().indexOf(search);
        let startIndex = 0;
        const endIndex = sentence.length;
        let blocks = [];
        if (startIndex === index) {
          blocks.push(<Text key={'r0'} style={style.highlight}>{ sentence.slice(startIndex, index + search.length) }</Text>);
          blocks.push(<Text key={'r_n0'}>{ sentence.slice(index + 1, endIndex) }</Text>);
        } else {
          if (endIndex === index + search.length) {
            blocks.push(<Text key={'r_n0'}>{ sentence.slice(startIndex, index) }</Text>);
            blocks.push(<Text key={'r_0'} style={style.highlight}>{ sentence.slice(index, endIndex) }</Text>);
          } else {
            blocks.push(<Text key={'r_n0'}>{ sentence.slice(startIndex, index) }</Text>);
            blocks.push(<Text key={'r0'} style={style.highlight}>{ sentence.slice(index, index + search.length) }</Text>);
            blocks.push(<Text key={'r_n1'}>{ sentence.slice(index + search.length, endIndex) }</Text>);
          }
        }

        return <Text selectable={true} style={[style.text, blockStyle, { fontFamily }]}>{ blocks }</Text>
      } else {
        return <Text selectable={true} style={[style.text, blockStyle, { fontFamily }]}>{ item.sentences }</Text>
      }
    }
  }

  _renderNavigatorButtons () {
    const buttons = []
    if (this.state.previousBlock) {
      buttons.push(
        <TouchableOpacity key='backBtn' onPress={() => this._back()} style={[style.button, style.buttonLeft]}>
          <Text style={style.buttonLabel}>{'<'}</Text>
        </TouchableOpacity>
      )
    }
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

  _renderHeaderConto = () => {
    if (this.state.conto) {
      return (
        <Text style={{ fontWeight: 'bold',  textAlign: 'center', fontSize: 24, backgroundColor: '#FEFEFE' }}>
          {this.state.conto}
        </Text>
      )
    } else {
      return null;
    }
  }

  _renderItem = ({ item, index }) => (
    <View style={style.item}>
      { this._renderText(item) }
    </View>
  )

  _keyExtractor = (item, index) => 'block_' + index;

  _renderList () {
    if (!this.state.isLoading) {
      return (
        <View>
          <FlatList
            ListHeaderComponent={ this._renderHeaderConto }
            style={ style.list }
            data={ this.state.blocks }
            keyExtractor={ this._keyExtractor }
            renderItem={ this._renderItem }
          />
          { this._renderNavigatorButtons() }
        </View>
      )
    }
  }

  _renderLoading () {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="#00ff00" style={{ flex: 1, marginTop: 30 }} />
    }
  }

  render() {
    return (
      <View style={style.container}>
        { this._renderList() }
        { this._renderLoading() }
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  list: {
    marginBottom: 50
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
  },
  highlight: {
    backgroundColor: '#ffff66'
  }
})

BookNavigator.propTypes = {
  navigation: PropTypes.object.isRequired,
  block: PropTypes.number
};

export default BookNavigator;
