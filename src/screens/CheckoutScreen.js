import { useState, useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import { CartContext } from '../contexts/CartContext';
import { baseStyles } from '../constants/styles';

const CheckoutScreen = ({ navigation }) => {
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const { cart, setCart } = useContext(CartContext);

  const handleCheckout = () => {
    if (address.trim() === '' || payment.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    Alert.alert(
      'Pedido Confirmado!',
      'Seu pedido foi processado com sucesso. Obrigado!'
    );
    setCart([]);
    navigation.navigate('Home');
  };

  return (
    <View style={baseStyles.container}>
      <Text style={baseStyles.title}>Finalizar Pedido</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>
              {item.name} (x{item.quantity})
            </Text>
            <Text>R$ {(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        )}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>Resumo do Pedido</Text>
        }
      />
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Detalhes da Entrega</Text>
        <TextInput
          style={baseStyles.input}
          placeholder="Endereço de Entrega"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={baseStyles.input}
          placeholder="Método de Pagamento"
          value={payment}
          onChangeText={setPayment}
        />
      </View>
      <CustomButton title="Confirmar Pedido" onPress={handleCheckout} />
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
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
});

export default CheckoutScreen;
