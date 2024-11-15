import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InformacoesAcademicasScreen() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Informações Acadêmicas</Text>
        <Text style={styles.item}><Text style={styles.label}>Turma:</Text> ADS030</Text>
        <Text style={styles.item}><Text style={styles.label}>Turno:</Text> Noite</Text>
        <Text style={styles.item}><Text style={styles.label}>Disciplina:</Text> Mobile</Text>
        <Text style={styles.item}><Text style={styles.label}>Professor:</Text> Geraldo Gomes</Text>
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
    fontSize: 22,
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
    color: '#4467B0',
  },
});
