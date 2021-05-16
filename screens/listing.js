import React, { Component, useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

let id = 0
export default class addListing extends React.Component {

    state = {
        name: 'initname',
        city: 'initcity',
        state: 'initstate',
        email: 'initemail',
    }

    handleNameChange = name => {
        setState({ name })
    }
    handleNameChange = city => {
        setState({ city })
    }
    handleNameChange = state => {
        setState({ state })
    }
    handleNameChange = email => {
        setState({ email })
    }
    render() {
        <View>
            <Text>ohhhh</Text>
        </View>
    }

}