import React, { Component, useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function listOfCharities({ route, navigation }) {

  const [listOfCharities, setListOfCharities] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    
    const getCharities = async () => {
      if(search === '') {
        const responseCharities = await fetch('http://data.orghunter.com/v1/charitysearch?user_key=a87147671a06ef99ef0441fe79c64a0c')
        const charities = await responseCharities.json()
        setListOfCharities(charities.data)
      } else {
        const responseCharities = await fetch('http://data.orghunter.com/v1/charitysearch?user_key=a87147671a06ef99ef0441fe79c64a0c&searchTerm=' + search)
        const charities = await responseCharities.json()

        setListOfCharities(charities.data)
      }
    }
    getCharities()
    
  }, [listOfCharities, search])

  const makeItem = obj => 
    <TouchableOpacity onPress={() => navigation.navigate('charities', {ein: obj.item.ein})}>
      <Text style={styles.item}>{obj.item.charityName}</Text>
    </TouchableOpacity>

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={(text) => {
          setSearch(text)
          // getCharities()
          // console.log(listOfCharities)
        }}
        style={styles.search}
      />
      <FlatList
        renderItem={makeItem}
        data={listOfCharities}
        keyExtractor={item => item.ein}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33373d',
    padding: 10,
  },
  search: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 5,
  },
  item: {
    borderTopColor: 'white',
    borderTopWidth: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 15,
    color: '#ffffff'
  },
  list: {
    paddingTop: 15,
  }
});

export default listOfCharities