import { useState, useContext } from 'react';
import {
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import { CartContext } from '../contexts/CartContext';
import { mockProducts } from '../data/mockData';
import { baseStyles } from '../constants/styles';

const ProductsScreen = ({ route }) => {
  const { categoryId, categoryName } = route.params;
  const products = mockProducts[categoryId] || [];
  const { cart, setCart } = useContext(CartContext);
  const scaleAnim = new Animated.Value(1);

  const handleAddToCart = (product) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={baseStyles.title}>{categoryName}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Animated.View
            style={[styles.productCard, { transform: [{ scale: scaleAnim }] }]}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
            <CustomButton
              title="Adicionar ao Carrinho"
              onPress={() => handleAddToCart(item)}
            />
          </Animated.View>
        )}
        contentContainerStyle={baseStyles.listContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
});

export default ProductsScreen;
