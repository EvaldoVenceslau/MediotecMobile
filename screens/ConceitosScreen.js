import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ConceitosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conceitos</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Disciplina: Mobile</Text>
        <Text style={styles.cardContent}>Nota: Excelente</Text>
        <Text style={styles.cardContent}>Situação Acadêmica: Aprovado</Text>
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
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
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
});
