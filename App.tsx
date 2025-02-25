import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider, useTheme} from './context/ThemeContext';
import MainScreen from './components/MainScreen';
import SettingsScreen from './components/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  const {isDarkMode} = useTheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
  };

  const textStyle = {
    color: isDarkMode ? '#fff' : '#000',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: 'Main Screen'}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{title: 'Settings'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default MainApp;
