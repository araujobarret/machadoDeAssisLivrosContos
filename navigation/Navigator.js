import React from 'react';
import { Button, Image, Platform, ScrollView, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator, SafeAreaView, DrawerItems, createAppContainer } from 'react-navigation';

import { DrawerActions, StackActions, NavigationActions } from 'react-navigation';
import { Drawer } from './Drawer';
import Splash from '../components/Util/Splash';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import BookChapters from '../components/Book/BookChapters';
import BookNavigator from '../components/Book/BookNavigator';
import Search from '../components/Search/Search';

const MainStackNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    BookChapters: { screen: BookChapters },
    BookNavigator: { screen: BookNavigator },
    Search: { screen: Search },
    About: { screen: About }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fefefe',
      },
      headerTintColor: '#666666',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
      },
      headerLeft: (
        <TouchableOpacity
          style={{ marginLeft: 10, paddingVertical: 10 }}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Image source={require('../assets/imgs/menu.png')} resizeMode="contain" style={{ width: 24 }}/>
        </TouchableOpacity>
      ),
      headerRight: (
        <View style={{ marginRight: 10 }} />
      )
    })
  }
);

const MainDrawerNavigator = createDrawerNavigator(
  {
    Main: { path: '/', screen: MainStackNavigator }
  },
  {
    contentComponent: (props) => <Drawer {...props} />,
    contentOptions: {
      activeTintColor: '#e91e63',
      itemsContainerStyle: {
        paddingTop: 24
      },
      itemStyle: {
        justifyContent: 'center',
      },
      labelStyle: {
        fontSize: 20
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

export const Navigator = createAppContainer(MainDrawerNavigator);
