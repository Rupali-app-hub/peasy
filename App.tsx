import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/StartScreen';
import UserListScreen from './screens/UserListScreen';
import UserDetailScreen from './screens/UserDetailScreen';

const Stack = createStackNavigator();
const linking = {
  prefixes: ['randomuserapp://'],
  config: {
    screens: {
      UserList: 'user-list',
    },
  },
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="UserList" component={UserListScreen} />
        <Stack.Screen name="UserDetail" component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
