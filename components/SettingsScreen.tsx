import React from 'react';
import {View, Button, Text} from 'react-native';
import {useTheme} from '../context/ThemeContext';

const SettingsScreen = () => {
  const {isDarkMode, toggleTheme} = useTheme();

  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 24, marginBottom: 20}}>Ustawienia motywu</Text>
      <Button
        title={`Przełącz na ${isDarkMode ? 'jasny' : 'ciemny'} motyw`}
        onPress={toggleTheme}
      />
    </View>
  );
};

export default SettingsScreen;
