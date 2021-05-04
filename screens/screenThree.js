import React, { Component, useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default function screenThree({ route, navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ScreenThree</Text>
      <Button 
        title="Go to Screen Four"
        color = "lightskyblue"
        onPress={() => navigation.navigate('Four')}/>
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