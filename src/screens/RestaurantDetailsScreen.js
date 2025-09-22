import { View, Text, StyleSheet } from 'react-native';
import { baseStyles } from '../constants/styles';

const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <View style={baseStyles.container}>
      <Text style={baseStyles.title}>{restaurant.name}</Text>
      <View style={styles.detailsCard}>
        <Text style={styles.detailLabel}>Endereço:</Text>
        <Text style={styles.detailText}>{restaurant.address}</Text>
        <Text style={styles.detailLabel}>Destaque do cardápio:</Text>
        <Text style={styles.detailText}>{restaurant.item}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default RestaurantDetailsScreen;
