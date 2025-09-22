import { View, Text, FlatList, StyleSheet } from 'react-native';
import { mockOrders } from '../data/mockData';
import { baseStyles } from '../constants/styles';

const OrdersScreen = () => {
  return (
    <View style={baseStyles.container}>
      <Text style={baseStyles.title}>Meus Pedidos</Text>
      <FlatList
        data={mockOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text style={styles.orderDate}>Data: {item.date}</Text>
            <Text style={styles.orderStatus}>Status: {item.status}</Text>
            <Text style={styles.orderItems}>
              Itens: {item.items.join(', ')}
            </Text>
            <Text style={styles.orderTotal}>
              Total: R$ {item.total.toFixed(2)}
            </Text>
          </View>
        )}
        contentContainerStyle={baseStyles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Você ainda não fez nenhum pedido.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  orderDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderStatus: {
    fontSize: 14,
    color: '#555',
  },
  orderItems: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});

export default OrdersScreen;
