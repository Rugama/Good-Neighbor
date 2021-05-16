import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

export default function createPost({ route, navigation }) {
  // Post type: Donation or Request. set to request by default.
  const [postType, setpostType] = useState('request');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postBody, setPostBody] = useState('');
  // binary variable to check if form fields are valid.
  const [formValidity, setformValidity] = useState(false);

  // Checks fields to make sure that inputs are valid.
  const invalidFormAlert = (errorField) => {
    Alert.alert(
      'Invalid entry',
      errorField === 'email'
        ? 'Double check ' + errorField + ' for length , cannot create post.'
        : 'Make sure email is valid, cannot create post.',
      [
        {
          text: 'Dismiss',
          style: 'cancel',
        },
      ]
    );
  };

  // Monitors fields to see if the inputs are valid. If they're all valid, it sets fromValidity to true.
  useEffect(() => {
    if (
      firstName.length < 2 ||
      lastName.length < 2 ||
      !email.includes('@') ||
      city.length < 2 ||
      state.length < 1 ||
      postBody.length < 10
    ) {
      setformValidity(false);
    } else {
      setformValidity(true);
    }
  });

  // Method to check which field is incorrect in the form. It then sends the name of the field to create an alert for the user to know which field to fix.
  const getIncorrectField = () => {
    if (firstName.length < 2) {
      invalidFormAlert('First Name');
    }
    if (lastName.length < 2) {
      invalidFormAlert('Last Name');
    }

    if (!email.includes('@')) {
      invalidFormAlert('Email');
    }
    if (city.length < 2) {
      invalidFormAlert('City');
    }
    if (state.length < 1) {
      invalidFormAlert('State');
    }
    if (postBody.length < 10) {
      invalidFormAlert('Post');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.form} behavior='position'>
        <ScrollView>
          <Text style={styles.text}>Post Type: </Text>
          {/* By default, Request is highlighted but, upon pushing Donation, it unhighlights request and vice versa. */}
          <TouchableHighlight
            style={styles.touchable}
            onPress={() => {
              setpostType('request');
            }}
          >
            <Text
              style={postType === 'request' ? styles.postTypeOn : styles.text}
            >
              Request
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.touchable}
            onPress={() => {
              setpostType('donation');
            }}
          >
            <Text
              style={postType === 'donation' ? styles.postTypeOn : styles.text}
            >
              Donation
            </Text>
          </TouchableHighlight>

          <TextInput
            style={styles.text}
            autoCompleteType='name'
            placeholder='First Name...'
            returnKeyType='done'
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            style={styles.text}
            autoCompleteType='name'
            placeholder='Last Name...'
            returnKeyType='done'
            onChangeText={(text) => setLastName(text)}
          />
          <TextInput
            style={styles.text}
            autoCompleteType='email'
            placeholder='email address...'
            keyboardType='email-address'
            returnKeyType='done'
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.text}
            placeholder='City...'
            returnKeyType='done'
            onChangeText={(text) => setCity(text)}
          />
          <TextInput
            style={styles.text}
            placeholder='State...'
            returnKeyType='done'
            onChangeText={(text) => setState(text)}
          />

          <TextInput
            style={styles.textBox}
            multiline
            numberOfLines={5}
            returnKeytype='done'
            placeholder={
              postType === 'request'
                ? 'Enter request here'
                : 'Enter donation here'
            }
            onChangeText={(text) => setPostBody(text)}
          />
          {/*Post button is red by default, meaning something in the form is invalid. Upon pushing 'POST' in red, it checks which field is invalid, and alerts the user. 
        If the form is valid, it turns blue, and the user may post.  */}
          <TouchableHighlight
            onPress={() =>
              formValidity
              // TODO: Change 'Three' to postLists page and append the new post to the list of previously made posts. 
                ? navigation.navigate('Three', {
                    Type: postType,
                    firstName: firstName,
                    lastName: lastName,
                    Email: email,
                    City: city,
                    State: state,
                    ItemDescription: postBody,
                  })
                : getIncorrectField()
            }
          >
            <Text
              style={
                formValidity ? styles.postButton : styles.postButtonNotValid
              }
            >
              POST
            </Text>
          </TouchableHighlight>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33373d',
    alignItems: 'stretch',
  },
  text: {
    backgroundColor: '#48d1cc',
    color: 'white',
    fontSize: 30,
    padding: 10,
    margin: 4,
  },
  touchable: {
    color: 'white',
    backgroundColor: '#48d1cc',
    margin: 4,
  },
  postTypeOn: {
    color: 'white',
    backgroundColor: '#0D6360',
    fontSize: 30,
    padding: 5,
    margin: 4,
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#33373d',
    margin: 5,
  },
  textBox: {
    padding: 5,
    height: 300,
    backgroundColor: '#48d1cc',
    fontSize: 30,
    margin: 4,
    color: 'white',
  },
  postButton: {
    color: '#48d1cc',
    fontSize: 30,
    margin: 4,
    padding: 5,
  },
  postButtonNotValid: {
    color: 'red',
    fontSize: 30,
    margin: 4,
    padding: 5,
  },
});
