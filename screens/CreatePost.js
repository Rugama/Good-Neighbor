import React, { Component, useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, CheckBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useDispatch } from 'react-redux';
import { addPost } from '../action/post';

const createPost = ({ navigation }) => {

  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const [timeStamp, setTimeStamp] = useState(Date().toLocaleString());


  const submitPost = (type, name, city, state, email, description, timeStamp) => dispatch(addPost(type, name, city, state, email, description, timeStamp))

  //LIST FORM
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Post a Donation or Request</Text>
      <TextInput style={styles.input} value={type} placeholder='Donation or Request?' onChangeText={type => setType(type)} />
      <TextInput style={styles.input} value={name} placeholder='First and Last Name OR Username' onChangeText={name => setName(name)} />
      <TextInput style={styles.input} value={city} placeholder='City' onChangeText={city => setCity(city)} />
      <TextInput style={styles.input} value={state} placeholder='State' onChangeText={state => setState(state)} />
      <TextInput style={styles.input} value={email} placeholder='Email' onChangeText={email => setEmail(email)} />
      <TextInput style={styles.input} value={description} placeholder='Description of Item' onChangeText={description => setDescription(description)} />
      <View style={styles.button}>
      <Button
        title="Post"
        color="mediumturquoise"
        onPress={() => {
          submitPost(type, name, city, state, email, description, timeStamp)
          setType(type)
          setName(name)
          setCity(city)
          setState(state)
          setEmail(email)
          setDescription(description)
          setTimeStamp(Date().toLocaleString())
        }} />
        </View>
        <View style={styles.button}>
      <Button
        title="Go to Listing"
        color="mediumturquoise"
        onPress={() => navigation.navigate('PostList')} />

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33373d',
    alignItems: 'center',

  },
  header: {
    color: 'white',
    fontSize: 30,
    padding: 20,
  },
  input: {
    padding: 20,
    width: 300,
    margin: 10,
    backgroundColor: 'white'
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  label: {
    color: 'white',
  },
  button: {
    padding: 10,
  }
});
export default createPost;