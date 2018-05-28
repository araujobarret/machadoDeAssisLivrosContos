import React from 'react';
import { Platform, ScrollView} from 'react-native';
import { createStackNavigator, createDrawerNavigator, SafeAreaView, DrawerItems, Text } from 'react-navigation';

import Splash from '../components/Util/Splash';
import Home from '../components/Home/Home';
import DrawerOptions from './DrawerOptions';

export const Navigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: 'Dashboard',
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: (props) => <CustomDrawerContentComponent {...props} />,
    contentOptions: {
      activeTintColor: '#e91e63',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1
      }
    },
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

// export const Navigator = createStackNavigator(
//   {
//     Splash: {
//       screen: Splash
//     },
//     Drawer: {
//       screen: Drawer
//     },
//   },
// );
