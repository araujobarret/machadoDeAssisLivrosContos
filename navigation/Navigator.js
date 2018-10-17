import React from 'react';
import { Button, Image, Platform, ScrollView, View, TouchableHighlight } from 'react-native';
import { createStackNavigator, createDrawerNavigator, SafeAreaView, DrawerItems, Text } from 'react-navigation';

import { DrawerActions, NavigationActions } from 'react-navigation';
import Splash from '../components/Util/Splash';
import Home from '../components/Home/Home';
import DrawerOptions from './DrawerOptions';

const menu = createDrawerNavigator(
  {
    Home: {
      screen: Home
    }
  }
);

export const Navigator = createStackNavigator(
  {
    Home: {
      screen: menu
    }
  },
  {
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Livros',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
      },
      headerLeft: (
        <TouchableHighlight
          underlayColor="#FFFFFF"
          style={{ marginLeft: 10, paddingVertical: 10 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Image source={require('../assets/imgs/menu.png')} resizeMode="contain" style={{ width: 24 }}/>
        </TouchableHighlight>
      ),
      headerRight: (
        <View style={{ marginRight: 10 }} />
      ),
    }),
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);
