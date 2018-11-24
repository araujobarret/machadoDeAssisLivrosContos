import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

export const Drawer = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
      <Text style={styles.title}>MENU</Text>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16
  }
});
