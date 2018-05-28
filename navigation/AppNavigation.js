import React, { Component } from "react";
import { BackHandler, Platform } from "react-native";
import { Navigator } from "./Navigator";

// Component to control the initialization of the stack navigator
class AppNavigation extends Component {

  componentWillMount(){
      // Method to handle android back button
      BackHandler.addEventListener('hardwareBackPress', function(){
        let {dispatch, navigation, nav} = this.props;
        if(nav.routes.length === 1 && nav.routes[0].routeName === "Root"){
          return false;
        }
        dispatch({ type: "Navigation/BACK"});
        return true;
      }.bind(this));
  }

  componentWillUnmount(){
    BackHandler.removeEventListener("hardwareBackPress");
  }

  render() {
    return (
      <Navigator />
    );
  }
}


export default AppNavigation;
