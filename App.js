import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import One from './screens/screenOne';
import Two from './screens/screenTwo';
import Three from './screens/screenThree';
import createPost from './screens/createPost';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='createPost'
        screenOptions={{
          headerStyle:{
            backgroundColor:'#33373d'
          },
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 30,
            color: 'white'
          }
        }}>
        <Stack.Screen name='One' component={One} />
        <Stack.Screen name='Two' component={Two} />
        <Stack.Screen name='Three' component={Three} />
        <Stack.Screen name='createPost' component={createPost} options={{title: 'Create a Post'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;