import { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import { CartContext } from '../contexts/CartContext';
import { baseStyles } from '../constants/styles';

const CartScreen = ({ navigation }) => {
  const { cart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={baseStyles.container}>
      <Text style={baseStyles.title}>Meu Carrinho</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemText}>
              {item.name} (x{item.quantity})
            </Text>
            <Text style={styles.cartItemPrice}>
              R$ {(item.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        )}
        contentContainerStyle={baseStyles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
        }
      />
      {cart.length > 0 && (
        <View style={styles.cartSummary}>
          <Text style={styles.totalText}>
            Total: R$ {calculateTotal().toFixed(2)}
          </Text>
          <CustomButton
            title="Finalizar Pedido"
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  cartItemText: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartSummary: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});

export default CartScreen;
