import React from 'react';
import { Button, Image, Platform, ScrollView, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator, SafeAreaView, DrawerItems, createAppContainer } from 'react-navigation';

import { DrawerActions, StackActions, NavigationActions } from 'react-navigation';
import { Drawer } from './Drawer';
import Splash from '../components/Util/Splash';
import Home from '../components/Home/Home';
import BookNavigator from '../components/Book/BookNavigator';
import Search from '../components/Search/Search';

const MainStackNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    BookNavigator: { screen: BookNavigator },
    Search: { screen: Search }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
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

const SearchStackNavigator = createStackNavigator(
  {
    Search: { screen: Search }
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: ({ navigation }) => ({
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
          onPress={() => {
            // Reset the Search component and then go back to home screen
            navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [ NavigationActions.navigate({ routeName: 'Search' })]
              })
            );
            navigation.dispatch(NavigationActions.back());
          }}
        >
          <Image source={require('../assets/imgs/cancel.png')} resizeMode="contain" style={{ width: 36 }}/>
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
    Livros: { path: '/', screen: MainStackNavigator },
    Buscar: { path: '/search', screen: SearchStackNavigator}
  },
  {
    initialRouteName: 'Livros',
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

// const defaultGetStateForActions = MainDrawerNavigator.router.getStateForAction;
//
// MainDrawerNavigator.router.getStateForAction = (action, state) => {
//   console.log('action', action);
//   console.log('state', state);
//   return defaultGetStateForActions(action, state);
// };

export const Navigator = createAppContainer(MainDrawerNavigator);
