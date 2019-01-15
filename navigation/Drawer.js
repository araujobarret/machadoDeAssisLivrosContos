import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { DrawerItems, SafeAreaView, NavigationActions } from 'react-navigation';

function translateItem (label) {
  switch (label) {
    case 'Home': return 'LIVROS';
    case 'Search': return 'BUSCAR';
    case 'About': return 'SOBRE';
  }
}

function _renderDrawerItem (navigation) {
  const items = [];
  const keys = Object.keys(navigation.router.childRouters.Main.childRouters);
  for (let i = 0; i < keys.length; i++) {
    // BookNavigator don't need to be in the menu
    if (keys[i] == 'BookChapters') { continue; }
    if(keys[i] !== 'BookNavigator') {
      if (navigation.state.routes[0].routes[navigation.state.routes[0].index].routeName === keys[i]) {
        items.push(
          <TouchableOpacity key={'menuItem_' + i}
            style={styles.menuItem}
            onPress={() => navigation.dispatch(navigation.actions.closeDrawer())}
          >
            <Text style={[styles.label, styles.activeLabel]}>{ translateItem(keys[i]) }</Text>
          </TouchableOpacity>
        );
      } else {
        items.push(
          <TouchableOpacity key={'menuItem_' + i}
            style={styles.menuItem}
            onPress={() => navigation.dispatch(NavigationActions.navigate({ routeName: keys[i] }))}
          >
            <Text style={styles.label}>{ translateItem(keys[i]) }</Text>
          </TouchableOpacity>
        );
      }
    }
  }
  return items;
}

export const Drawer = (props) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
        <Text style={styles.title}>MENU</Text>
        { _renderDrawerItem (props.navigation) }
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 24,
  },
  menuItem: {
    marginLeft: 24,
    height: 60,
    justifyContent: 'center'
  },
  label: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  activeLabel: {
    color: '#e91e63'
  }
});
