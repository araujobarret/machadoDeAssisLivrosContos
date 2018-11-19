import React from 'react';
import { Animated, FlatList, View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';

import BookDescription from '../Book/BookDescription'
import { Books } from '../../lib/index';
import { getBooks } from '../../actions/books';

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
    return null
  }

  componentDidMount () {
    this.props.dispatch(getBooks(Books));
  }

  componentDidUpdate () {
    console.log('updated')
    if (!this.state.isLoading) {
      console.log('not loading')
      LayoutAnimation.configureNext(animationConfigs.get(this.state.animation))
    }
  }

  _renderItem = ({ item, index }) => (
    <Animated.View>
      <BookDescription info={item[1]} navigation={this.props.navigation} book={this.state.books.books.get(item[1].key)}/>
    </Animated.View>
  )

  _keyExtractor = (item, index) => item[1].key;

  render() {
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
