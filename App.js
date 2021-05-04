import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import One from './screens/screenOne';
import Two from './screens/screenTwo';
import Three from './screens/screenThree';
import Four from './screens/screenFour';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="One">
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
        <Stack.Screen name="Three" component={Three} />
        <Stack.Screen name="Four" component={Four} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;