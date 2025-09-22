import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import { AuthContext } from '../contexts/AuthContext';
import { baseStyles } from '../constants/styles';

const ProfileScreen = () => {
  const { user, signOut } = useContext(AuthContext);
  return (
    <View style={baseStyles.container}>
      <Text style={baseStyles.title}>Perfil</Text>
      <View style={styles.profileCard}>
        <Text style={styles.profileLabel}>Nome:</Text>
        <Text style={styles.profileText}>{user?.name || 'Mickeias'}</Text>
        <Text style={styles.profileLabel}>E-mail:</Text>
        <Text style={styles.profileText}>
          {user?.email || 'mickeiascoelho@gmail.com'}
        </Text>
      </View>
      <CustomButton
        title="Sair"
        onPress={signOut}
        style={{ backgroundColor: '#4a90e2' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  profileLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  profileText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;
