import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Two from './screens/screenTwo';
import createPost from './screens/CreatePost';
import PostList from './screens/PostList';
import Map from './screens/Map';
import listOfCharities from './screens/SearchCharities'
import charities from './screens/charities'
import configureStore from './screens/store';
import { Provider } from 'react-redux';

const store = configureStore();
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Two" component={Two} />
        <Stack.Screen name="PostForm" component={createPost} />
        <Stack.Screen name="PostList" component={PostList} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="listOfCharities" component={listOfCharities} />
        <Stack.Screen name="charities" component={charities} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;