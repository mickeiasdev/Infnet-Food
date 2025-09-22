import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext'; // Importe o ThemeContext
import { mockCategories } from '../data/mockData';
import { baseStyles, darkTheme } from '../constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext); // Use o tema do contexto

  const handlePressButton = (screen) => {
    navigation.navigate(screen);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryListItem}
      onPress={() => navigation.navigate('Products', { categoryId: item.id, categoryName: item.name })}
    >
      <Text style={[styles.categoryItemText, theme === 'dark' && darkTheme.text]}>{item.name}</Text>
      <Ionicons name="chevron-forward-outline" size={24} color={theme === 'dark' ? '#eee' : '#555'} />
    </TouchableOpacity>
  );

  const containerStyle = theme === 'dark' ? darkTheme.container : baseStyles.container;
  const textStyle = theme === 'dark' ? darkTheme.text : {};
  const footerBgColor = theme === 'dark' ? darkTheme.footerBg : '#4a90e2';

  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <View style={styles.contentContainer}>
        <Text style={[baseStyles.title, { marginBottom: 20 }, textStyle]}>Olá, {user?.name || 'Mickeias'}!</Text>
        <Text style={[styles.sectionTitle, textStyle]}>Categorias</Text>
        <FlatList
          data={mockCategories}
          keyExtractor={item => item.id}
          renderItem={renderCategoryItem}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <View style={[styles.footer, { backgroundColor: footerBgColor }]}>
        <TouchableOpacity style={styles.footerButton} onPress={() => handlePressButton('Orders')}>
          <Ionicons name="cube-outline" size={28} color="#fff" />
          <Text style={styles.footerButtonText}>Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => handlePressButton('Cart')}>
          <Ionicons name="cart-outline" size={28} color="#fff" />
          <Text style={styles.footerButtonText}>Carrinho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => handlePressButton('Map')}>
          <Ionicons name="map-outline" size={28} color="#fff" />
          <Text style={styles.footerButtonText}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => handlePressButton('Profile')}>
          <Ionicons name="person-outline" size={28} color="#fff" />
          <Text style={styles.footerButtonText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => handlePressButton('Settings')}>
          <Ionicons name="settings-outline" size={28} color="#fff" />
          <Text style={styles.footerButtonText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContainer: {
    paddingVertical: 10,
  },
  categoryListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryItemText: {
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomeScreen;
