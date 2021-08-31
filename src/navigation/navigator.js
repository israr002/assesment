import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/homescreen';
import AddTitle from '../screens/addtitlescreen';
import SignIn from '../screens/signinscreen';

const Stack = createNativeStackNavigator();
export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Addtitle" component={AddTitle} />
    </Stack.Navigator>
  );
};

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};
