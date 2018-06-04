import React from 'react';
import { Button, Platform, ScrollView, View } from 'react-native';
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
      headerTitle: 'Dashboard',
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
        <View style={{ marginLeft: 10 }}>
          <Button
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            title="Info"
            color="#ccc"
          />
        </View>
      ),
      headerRight: (
        <View style={{ marginRight: 10 }}>
          <Button
            onPress={() => null}
            title="Info"
            color="#ccc"
          />
        </View>
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
