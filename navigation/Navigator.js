import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Splash from '../components/Util/Splash';
import Home from '../components/Home/Home';
import DrawerOptions from './DrawerOptions';

export const Drawer = DrawerNavigator(
  {
    Home: {
      screen: Home
    },
  },
  {
    contentComponent: (props) => <Drawer {...props} />,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);

export const Navigator = StackNavigator(
  {
    Splash: {
      screen: Splash
    },
    Drawer: {
      screen: Drawer
    },
  },
  {
    headerMode: 'none',
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : 0
    }
  }
);
