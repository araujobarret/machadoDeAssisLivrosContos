import React from 'react';
import { Animated, FlatList, View, Text, TouchableOpacity, ScrollView, StyleSheet, LayoutAnimation, UIManager } from 'react-native';

import BookDescription from '../Book/BookDescription'
import { Books } from '../../lib/index';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const AnimationTypeEnum = {
  spring: true,
  linear: true,
  ease: true,
  keyboard: true,
  fade: true,
  scaleLinear: true,
  scaleSpring: true
}
const AnimationType = keyMirror(AnimationTypeEnum)

const animationConfigs = new Map([
  [AnimationType.spring, {
    duration: 2000,
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 0.5
    },
  }],
  [AnimationType.linear, {
    duration: 2000,
    create: {
      initialVelocity: 1000,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.linear
    },
    update: {
      type: LayoutAnimation.Types.linear
    }
  }],
  [AnimationType.ease, {
    duration: 800,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut
    }
  }],
  [AnimationType.keyboard, {
    duration: 10000, // Doesn't matter
    update: {
      type: LayoutAnimation.Types.keyboard
    }
  }],
  [AnimationType.scaleLinear, {
    duration: 600,
    update: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.scaleXY
    }
  }],
  [AnimationType.scaleSpring, {
    duration: 1200,
    update: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.2
    }
  }],
  [AnimationType.fade, {
    duration: 600,
    update: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity
    }
  }]
]);

function keyMirror(obj) {
  var ret = {};
  var key;
  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};


class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      animation: AnimationType.fade,
      books: Books,
      booksData: Array.from(Books.books),
      isLoading: true
    };
  }

  componentDidUpdate () {
    if (!this.state.isLoading) {
      LayoutAnimation.configureNext(animationConfigs.get(this.state.animation))
    }
  }

  _renderItemRomance = ({ item, index }) => {
    if (item[1].type === 'romance') {
      return (
        <View>
          <BookDescription info={item[1]} navigation={this.props.navigation} book={this.state.books.books.get(item[1].key)}/>
        </View>
      );
    }
  }

  _renderItemConto = ({ item, index }) => {
    if (item[1].type === 'conto') {
      return (
        <View>
          <BookDescription info={item[1]} navigation={this.props.navigation} book={this.state.books.books.get(item[1].key)}/>
        </View>
      );
    }
  }

  _keyExtractor = (item, index) => item[1].key;

  render() {
    return (
      <ScrollView>
        <FlatList
          ListHeaderComponent={<Text style={style.title}>Romances</Text>}
          data={ this.state.booksData }
          keyExtractor={ this._keyExtractor }
          renderItem={ this._renderItemRomance }
        />
        <FlatList
          ListHeaderComponent={<Text style={style.title}>Contos</Text>}
          data={ this.state.booksData }
          keyExtractor={ this._keyExtractor }
          renderItem={ this._renderItemConto }
        />
        <View style={style.footer}/>
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  title: {
    color: '#ffffff',
    backgroundColor: '#F9812A',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
    paddingVertical: 8
  },
  footer: {
    height: 48,
  }
})

export default List;
