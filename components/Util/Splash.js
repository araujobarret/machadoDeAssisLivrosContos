import React from 'react';
import { Dimensions, View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';


class Splash extends React.Component {
  startLoading() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1000);
  }

  // The main question about the logo is the image size
  // The image needs to fit a flex ratio provided, so the image needs to be nested in two
  // containers to be not too large or too tiny
  render() {
    return (
      <View style={SplashStyles.container}>
        <Image
          style={SplashStyles.imageLoading}
          resizeMode="cover"
          onLoad={() => this.startLoading()}
          source={require('../../assets/imgs/loading.jpg')}
        />
      </View>
    );
  }
}


const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const SplashStyles = {
  container: {
    flex: 1,
  },
  imageLoading: {
    width: deviceWidth,
    height: deviceHeight,
  },
};


export default connect()(Splash);
