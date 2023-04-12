/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirtScreen from './screen/firstscreen';
import InitialScreen from './screen/initial';
import SecondScreen from './screen/secondscreen';
import { StyleSheet } from 'react-native/types';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"initial"}>



        <Stack.Screen options={{ headerShown: false }}
          name={"initial"}
          component={InitialScreen}
        />
        <Stack.Screen
          name={"firstscreen"}
          component={FirtScreen} />

        <Stack.Screen
          name={"secondscreen"}
          component={SecondScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default RootNavigator;

