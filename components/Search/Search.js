import React from 'react';
import { ActivityIndicator, Image, FlatList, Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import SearchInput from '../Util/SearchInput';
import ResultItems from './ResultItems';
import { Books } from '../../lib/index';
import { getShortenedSentence } from '../../lib/util/util-text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Search extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#fff',
      elevation: 0,
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
        onPress={() => navigation.dispatch(NavigationActions.back())}
      >
        <Image source={require('../../assets/imgs/cancel.png')} resizeMode="contain" style={{ width: 36 }}/>
      </TouchableOpacity>
    ),
    headerRight: (
      <View style={{ marginRight: 10 }} />
    )
  })

  constructor (props) {
    super(props);
    this.state = {
      isLoading: false,
      results: null,
      text: ''
    };
    this.searchWord.bind(this);
  }

  lostFocus () {
    Keyboard.dismiss();
  }

  clear () {
    this.searchInput.clear();
    this.searchInput.focus();
  }

  async searchWord () {
    this.lostFocus();
    setTimeout(() => {
      this.now = Date.now();
      Books.search(this.state.text)
        .then((data) => {
          this.after = Date.now();
          console.log(`elapsed ${(this.after - this.now) / 1000}s on search`);
          this.setState({ isLoading: false, results: data });
        });
    }, 0);
  }

  _keyExtractor = (item, index) => '_keyResult' + index;

  _renderItem ({ item, index }) {
    const book = Books.books.get(item[1].bookIndex);
    return (
      <ResultItems navigation={this.props.navigation} result={item[1]} search={this.state.text} book={book} />
    );
  }

  _renderList () {
    if (!this.state.isLoading) {
      if (this.state.results === null) { return null; }
      if (this.state.results.size > 0) {
        return (
          <FlatList
            styles={ styles.list }
            data={ Array.from(this.state.results) }
            keyExtractor={ this._keyExtractor }
            renderItem={ this._renderItem.bind(this) }
          />
        );
      }
      return (
        <Text style={styles.noResultText}>Nenhum resultado encontrado</Text>
      )
    }
  }

  _renderSummary () {
    const msg = this.state.results.size > 1 ? ' resultados encontrados' : ' resultado encontrado';
    return (
      <Text style={styles.summaryText}>{ this.state.results.size + msg }</Text>
    );
  }

  _renderOverlay () {
    if (this.state.isLoading) {
      console.log('overlay rendered');
      return (
        <TouchableOpacity
          activeOpacity={1}
          style={{backgroundColor: "#EFEFEF", opacity: 0.85, left: 0, right: 0, top: 0, bottom: 0, zIndex: 10, position: "absolute"}}
        >
          <ActivityIndicator size="large" color="#00ff00" style={{ flex: 1, marginTop: 30 }} />
        </TouchableOpacity>
      );
    }
  }

  render () {
    console.log('rendered');
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={() => this.lostFocus()}
      >
        <View style={styles.container}>
          <SearchInput
            value={this.state.text}
            ref={component => this.searchInput = component}
            onEndEditing={ () => this.setState({ isLoading: true}, () => this.searchWord()) }
            onChangeText={ (text) => this.setState({ text }) }
            returnKeyType={'search'}
            label={'Buscar'}
            iconClass={MaterialIcons}
            iconName={'search'}
            iconColor={'#c3c3c3'}
            autoCapitalize={'none'}
            autoCorrect={false}
            labelStyle={{ color: '#f4511e' }}
            inputStyle={{ color: '#333333' }}
            style={{ borderColor: '#c3c3c3', borderBottomWidth: 1, marginHorizontal: 16 }}
          />
          <TouchableOpacity style={styles.clearButton} onPress={this.clear.bind(this)}>
            <Text style={styles.clearText}>limpar</Text>
          </TouchableOpacity>
          { this.state.results ? this.state.results.size > 0 ? this._renderSummary() : null : null }
          { this._renderList() }
          { this._renderOverlay() }
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  clearButton: {
    backgroundColor: '#f4511e',
    borderRadius: 12,
    alignSelf: 'flex-end',
    marginTop: 8,
    padding: 4,
    width: 80,
    marginHorizontal: 16
  },
  clearText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  noResultText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
  },
  summaryText: {
    textAlign: 'center',
  }
});


export default Search;
