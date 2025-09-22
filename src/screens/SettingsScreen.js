import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { baseStyles } from '../constants/styles';

const SettingsScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[baseStyles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[baseStyles.title, { color: theme.colors.text }]}>Configurações</Text>

      <View style={styles.optionContainer}>
        <Text style={[baseStyles, { color: theme.colors.text }]}>
          Mudar para Tema {theme.dark ? 'Claro' : 'Escuro'}
        </Text>
        <Switch
          value={theme.dark}
          onValueChange={toggleTheme}
          thumbColor={theme.dark ? '#fff' : '#000'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default SettingsScreen;
