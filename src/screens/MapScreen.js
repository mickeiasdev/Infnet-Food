import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { mockRestaurants } from '../data/mockData';
import { baseStyles } from '../constants/styles';

const MapScreen = ({ navigation }) => {
  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('RestaurantDetails', { restaurant });
  };

  return (
    <View style={baseStyles.container}>
      <Text style={baseStyles.title}>Mapa dos Restaurantes</Text>
      <Text style={styles.subtitle}>
        Clique em um restaurante para ver mais detalhes
      </Text>
      <Image
        source={{
          uri: 'https://placehold.co/400x400/png?text=Mapa+do+Centro+do+RJ',
        }}
        style={styles.mapImage}
      />
      <View style={styles.restaurantListContainer}>
        <Text style={styles.sectionTitle}>Restaurantes (Simulados)</Text>
        <FlatList
          data={mockRestaurants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.restaurantCard}
              onPress={() => handleRestaurantPress(item)}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <Text style={styles.restaurantAddress}>{item.address}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#888',
  },
  mapImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  restaurantListContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  restaurantCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantAddress: {
    fontSize: 14,
    color: '#888',
  },
});

export default MapScreen;
