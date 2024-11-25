import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone
import { LinearGradient } from 'expo-linear-gradient'; // Importe o LinearGradient

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient colors={['#DF2F80', '#4467B0']} style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="user-circle" size={70} color="#FFF" />
      </View>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Informações Acadêmicas')}
      >
        <Text style={styles.buttonText}>Informações Acadêmicas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Conceitos')}
      >
        <Text style={styles.buttonText}>Conceitos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Comunicações')}
      >
        <Text style={styles.buttonText}>Comunicados</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Visões Estáticas')}
      >
        <Text style={styles.buttonText}>Financeiro</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 20, // Espaçamento entre o ícone e o título
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#4467B0',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
