import { StyleSheet } from 'react-native';

export const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10
  },
  listContainer: {
    paddingVertical: 10,
  },
  logoutButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  logoutButtonText: {
    fontSize: 14,
    color: '#fff',
  }
});

export const darkTheme = {
  name: 'dark',
  colors: {
    background: '#121212',
    text: '#ffffff',
    primary: '#bb86fc',
    secondary: '#03dac6',
    cardBackground: '#1f1f1f',
  }
};

export const lightTheme = {
  name: 'light',
  colors: {
    background: '#f0f0f0',
    text: '#000000',
    primary: '#6200ee',
    secondary: '#03dac6',
    cardBackground: '#ffffff',
  }
};
