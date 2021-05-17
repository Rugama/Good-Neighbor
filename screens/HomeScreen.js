import React, { Component, useState } from 'react';
import {
	Button,
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	FlatList,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default function HomeScreen({ navigation }) {
	

	const post2 = [
		'request',
		'Doug',
		'Mathis',
		'Los Angeles',
		'CA',
		'mathis@gmail.com',
		'Need clothes to take for foster childen.',
		Date().toLocaleString(),
	];

	const post3 = [
		'donation',
		'Eric',
		'Foster',
		'Los Angeles',
		'CA',
		'foster@gmail.com',
		'I have a lot of canned food I am willing to donate.',
		Date().toLocaleString(),
	];

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Welcome to Good Neighbor</Text>
			<View style={styles.listFeature}>
				<Button
					title='View Listings'
					color='mediumturquoise'
					onPress={() => navigation.navigate('PostList')}
				/>
			</View>
			<View style={styles.listFeature}>
				<Button
					title='Post a Donation/Request'
					color='mediumturquoise'
					onPress={() => navigation.navigate('PostForm')}
				/>
			</View>
			<View style={styles.listFeature}>
				<Button
					title='Search for Charity Location'
					color='mediumturquoise'
					onPress={() => navigation.navigate('listOfCharities')}
				/>
			</View>
			<View style={styles.listFeature}>
				<Button
					title='Charities near Cal State LA'
					color='mediumturquoise'
					onPress={() => navigation.navigate('Map')}
				/>
			</View>
		</View>
	);
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
