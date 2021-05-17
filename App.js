import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import createPost from './screens/CreatePost';
import PostList from './screens/PostList';
import Map from './screens/Map';
import listOfCharities from './screens/SearchCharities';
import charities from './screens/charities';
import configureStore from './screens/store';
import { Provider } from 'react-redux';

const store = configureStore();
const Stack = createStackNavigator();

function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='HomeScreen'
					screenOptions={{
						headerStyle: {
							backgroundColor: '#33373d',
						},
						headerTitleStyle: {
							fontWeight: 'bold',
							fontSize: 30,
							color: 'white',
						},
					}}
				>
					<Stack.Screen
						name='HomeScreen'
						component={HomeScreen}
						options={{ title: 'Home' }}
					/>
					<Stack.Screen
						name='PostForm'
						component={createPost}
						options={{ title: 'Create a Post' }}
					/>
					<Stack.Screen
						name='PostList'
						component={PostList}
						options={{ title: 'Posts List' }}
					/>
					<Stack.Screen name='Map' component={Map} />
					<Stack.Screen
						name='listOfCharities'
						component={listOfCharities}
						options={{ title: 'List of Charities' }}
					/>
					<Stack.Screen
						name='charities'
						component={charities}
						options={{ title: 'Charities Map' }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App;
