import React, { Component, useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default function screenTwo({ route, navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ScreenTwo</Text>
      <Button 
        title="Go to Screen Three"
        color = "lightskyblue"
        onPress={() => navigation.navigate('Three')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33373d',
    alignItems: 'center',
  },
});