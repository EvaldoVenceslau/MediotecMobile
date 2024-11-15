import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function VisoesEstaticasScreen() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Visões Estáticas</Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Horários:</Text> Segunda à Sexta, 
          das 6h às 22h
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Contatos:</Text> contato@senac.com.br
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Financeiro:</Text> Mensalidade em dia
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4467B0',
    padding: 20,
  },
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4467B0',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
    lineHeight: 22,
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
  },
});
