import React, { Component, useEffect, useState } from 'react';
import {
	ScrollView,
	Text,
	StyleSheet,
	TextInput,
	SafeAreaView,
	KeyboardAvoidingView,
	TouchableHighlight,
	Alert,
	Keyboard,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addPost } from '../action/post';

const createPost = ({ navigation }) => {
	const [type, setType] = useState('request');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [email, setEmail] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();
	const [timeStamp, setTimeStamp] = useState(Date().toLocaleString());
	const [formValidity, setformValidity] = useState(false);

	useEffect(() => {
		if (
			firstName.length < 2 ||
			lastName.length < 2 ||
			!email.includes('@') ||
			city.length < 2 ||
			state.length < 1 ||
			description.length < 10
		) {
			setformValidity(false);
		} else {
			setformValidity(true);
		}
	});

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
		if (description.length < 10) {
			invalidFormAlert('Post');
		}
	};

	// Checks fields to make sure that inputs are valid.
	const invalidFormAlert = (errorField) => {
		Alert.alert(
			'Invalid entry',
			errorField === 'email'
				? 'Double check ' +
						errorField +
						' for length , cannot create post.'
				: 'Make sure email is valid, cannot create post.',
			[
				{
					text: 'Dismiss',
					style: 'cancel',
				},
			]
		);
	};

	const submitPost = (
		type,
		firstName,
		lastName,
		city,
		state,
		email,
		description,
		timeStamp
	) =>
		dispatch(
			addPost(
				type,
				firstName,
				lastName,
				city,
				state,
				email,
				description,
				timeStamp
			)
		);

	//LIST FORM
	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView behavior='position'>
				<ScrollView>
					<Text style={styles.text}>Post Type: </Text>
					<TouchableHighlight
						style={styles.touchable}
						onPress={() => {
							setType('request');
						}}
					>
						<Text
							style={
								type === 'request'
									? styles.postTypeOn
									: styles.text
							}
						>
							Request
						</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.touchable}
						onPress={() => {
							setType('donation');
						}}
					>
						<Text
							style={
								type === 'donation'
									? styles.postTypeOn
									: styles.text
							}
						>
							Donation
						</Text>
					</TouchableHighlight>

					<TextInput
						style={styles.text}
						autoCompleteType='name'
						placeholder='First Name...'
						returnKeyType='done'
						onChangeText={(firstName) => setFirstName(firstName)}
					/>
					<TextInput
						style={styles.text}
						autoCompleteType='name'
						placeholder='Last Name...'
						returnKeyType='done'
						onChangeText={(lastName) => setLastName(lastName)}
					/>
					<TextInput
						style={styles.text}
						autoCompleteType='name'
						placeholder='City'
						returnKeyType='done'
						onChangeText={(city) => setCity(city)}
					/>
					<TextInput
						style={styles.text}
						returnKeyType='done'
						placeholder='State'
						onChangeText={(state) => setState(state)}
					/>
					<TextInput
						style={styles.text}
						returnKeyType='done'
						placeholder='Email'
						onChangeText={(email) => setEmail(email)}
					/>
					<TextInput
						style={styles.textBox}
						multiline
						numberOfLines={5}
						returnKeyType='done'
						onSubmitEditing={() => {
							Keyboard.dismiss();
						}}
						placeholder={
							type === 'request'
								? 'Enter request here'
								: 'Enter donation here'
						}
						onChangeText={(description) =>
							setDescription(description)
						}
					/>
					<TouchableHighlight
						onPress={() => {
							switch (formValidity) {
								case true:
									submitPost(
										type,
										firstName,
										lastName,
										city,
										state,
										email,
										description,
										timeStamp
									);
									setTimeStamp(Date().toLocaleString());
									navigation.navigate('PostList');
								case false:
									getIncorrectField();
							}
						}}
					>
						<Text
							style={
								formValidity
									? styles.postButton
									: styles.postButtonNotValid
							}
						>
							POST
						</Text>
					</TouchableHighlight>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#33373d',
		// alignItems: 'center',
		alignItems: 'stretch',
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
		backgroundColor: 'white',
	},
	checkboxContainer: {
		flexDirection: 'row',
	},
	label: {
		color: 'white',
	},
	button: {
		padding: 10,
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
export default createPost;
