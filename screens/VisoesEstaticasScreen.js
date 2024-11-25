import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importe o LinearGradient

export default function FinanceiroScreen() {
  const [isBoletoModalVisible, setIsBoletoModalVisible] = useState(false);

  const handleGenerateBoleto = () => {
    // Lógica para simular o boleto em PDF
    alert('Simulação de boleto gerada!');
    setIsBoletoModalVisible(false);
  };

  return (
    <LinearGradient colors={['#DF2F80', '#4467B0']} style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Financeiro</Text>
        
        

        {/* Mensalidades */}
        <Text style={styles.item}>
          <Text style={styles.label}>Mensalidade:</Text> Fechadas
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Mensalidade:</Text> Abertas
        </Text>

        {/* Opção para gerar boleto */}
        {isBoletoModalVisible && (
          <View style={styles.boletoModal}>
            <Text style={styles.modalText}>Gerar boleto para pagamento?</Text>
            <TouchableOpacity onPress={handleGenerateBoleto} style={styles.button}>
              <Text style={styles.buttonText}>Gerar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsBoletoModalVisible(false)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        )}
        
        <TouchableOpacity
          onPress={() => setIsBoletoModalVisible(true)}
          style={styles.generateBoletoButton}
        >
          <Text style={styles.generateBoletoText}>Gerar boleto
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  boletoModal: {
    marginTop: 20,
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#4467B0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  generateBoletoButton: {
    marginTop: 20,
    backgroundColor: '#DF2F80',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  generateBoletoText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
