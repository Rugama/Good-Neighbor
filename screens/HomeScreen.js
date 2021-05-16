import React, { Component, useState } from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default function HomeScreen({ navigation }) {

  return (

    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Good Neighbor</Text>
      <View style={styles.listFeature}>  
        <Button
          title="View Listings"
          color="mediumturquoise"
          onPress={() => navigation.navigate('PostList')} />
      </View>
      <View style={styles.listFeature}>  
        <Button
          title="Post a Donation/Request"
          color="mediumturquoise"
          onPress={() => navigation.navigate('PostForm')} />
      </View>
      <View style={styles.listFeature}>  
        <Button
          title="Search for Charity Location"
          color="mediumturquoise"
          onPress={() => navigation.navigate('listOfCharities')} />
      </View>
      <View style={styles.listFeature}>  
        <Button
          title="Charities near Cal State LA"
          color="mediumturquoise"
          onPress={() => navigation.navigate('Map')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33373d',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    fontSize: 30,
    color: 'white',
  },
  listFeature: {
    width: '70%',
    margin: 10,
  },

});