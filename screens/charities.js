import React, { Component, useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//DETAILS
export default function charities({ route, navigation }) {

    const [charity, setCharity] = useState({})

    useEffect(() => {
        const getCharity = async () => {
          const responseCharity = await fetch('http://data.orghunter.com/v1/charitysearch?user_key=a87147671a06ef99ef0441fe79c64a0c&ein=' + route.params.ein)
          const char = await responseCharity.json()
          setCharity(char.data[0])
        }
        getCharity()

    }, [charity])

    return (
        <View style={styles.container}>
         <Text style={styles.header}>{charity.charityName}</Text>
         <Text style={styles.text}>Category: {charity.category ? charity.category : 'Not Provided'}</Text>
         <Text style={styles.text}>website: {charity.website ? charity.website : 'Not Provided'}</Text>
         <Text style={styles.text}>Mission Statement: {charity.missionStatement ? charity.missionStatement : 'Not Provided'}</Text>
         <Text style={styles.text}>City: {charity.city ? charity.city : 'Not Provided'}</Text>
         <Text style={styles.text}>State: {charity.state ? charity.state : 'Not Provided'}</Text>
         <Text style={styles.text}>zipCode: {charity.zipCode ? charity.zipCode : 'Not Provided'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#33373d',
        padding: 10,
        // alignItems: 'center',
    },
    header: {
      color: '#ffffff',
      fontSize: 30,
      borderBottomColor: 'white',
      borderBottomWidth: 1,
    },
    text: {
      paddingTop: 15,
      color: '#ffffff',
    },
});