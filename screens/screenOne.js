import React, { Component, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default function screenOne({navigation}) {


    return (
      <View style={styles.container}>
        <Text style = {styles.header}>screenOne</Text>
        <Button 
        title="Go to Screen Two"
        color = "lightskyblue"
        onPress={() => navigation.navigate('Two')}/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#33373d',
      alignItems: 'center',
    },
  });