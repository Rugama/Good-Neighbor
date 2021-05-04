import React, { Component, useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default function screenFour({ route, navigation }) {

    return (
        <View style={styles.container}>
         <Text>screenFour</Text>
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