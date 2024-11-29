import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ConceitosScreen() {
  return (
    <LinearGradient colors={['#DF2F80', '#4467B0']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Conceitos</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Mobile</Text>
          <Text style={styles.cardContent}>Nota: Excelente</Text>
          <Text style={styles.cardContent}>Situação Acadêmica: Aprovado</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Frontend</Text>
          <Text style={styles.cardContent}>Nota: Excelente</Text>
          <Text style={styles.cardContent}>Situação Acadêmica: Aprovado</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Backend</Text>
          <Text style={styles.cardContent}>Nota: Ótimo</Text>
          <Text style={styles.cardContent}>Situação Acadêmica: Aprovado</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Banco de Dados</Text>
          <Text style={styles.cardContent}>Nota: Bom</Text>
          <Text style={styles.cardContent}>Situação Acadêmica: Aprovado</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Design de Interface</Text>
          <Text style={styles.cardContent}>Nota: Excelente</Text>
          <Text style={styles.cardContent}>Situação Acadêmica: Aprovado</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
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
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
});
