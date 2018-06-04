import React from 'react';
import { Dimensions, View, Image, StyleSheet } from 'react-native';


class Splash extends React.Component {
  static navigationOptions = {
    headerStyle: { height: 0 }
  };

  startLoading() {
    setTimeout(() => {
      this.props.loadingStop();
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


export default Splash;
