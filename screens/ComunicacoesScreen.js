import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ComunicacoesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comunicados</Text>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Comunicado 1</Text>
        <Text style={styles.cardContent}>Aula suspensa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Comunicado 2</Text>
        <Text style={styles.cardContent}>Apresentação adiada</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#4467B0',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4467B0',
    marginBottom: 5,
  },
  cardContent: {
    fontSize: 16,
    color: '#000',
  },
});
