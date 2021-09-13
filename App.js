import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

// https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557
const GTDTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f1faee',
    background: '#457b9d',
    card: '#457b9d',
    text: '#f1faee',
  },
};

const App = () => {
  return (
    <>
      <NavigationContainer theme={GTDTheme}>
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={{ title: 'Getting Things Done!' }}
          />
          <Stack.Screen name={'Details'} component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style={'light'} />
    </>
  );
};

export default App;
