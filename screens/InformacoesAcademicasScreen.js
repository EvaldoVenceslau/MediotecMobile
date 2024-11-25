import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importe o LinearGradient

export default function InformacoesAcademicasScreen() {
  const downloadPDF = (fileType) => {
    // Função para simular o download do PDF
    alert(`Download do PDF: ${fileType}`);
  };

  return (
    <LinearGradient colors={['#DF2F80', '#4467B0']} style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Informações Acadêmicas</Text>

          {/* Card 1: Dados do Aluno */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Dados do Aluno</Text>
            <Text style={styles.item}><Text style={styles.label}>Nome Completo:</Text> João da Silva</Text>
            <Text style={styles.item}><Text style={styles.label}>Turma:</Text> ADS030</Text>
            <Text style={styles.item}><Text style={styles.label}>Turno:</Text> Noite</Text>
            <Text style={styles.item}><Text style={styles.label}>Número de Matrícula:</Text> 12345678</Text>
            <Text style={styles.item}><Text style={styles.label}>Disciplinas Cursando:</Text> Mobile, Backend, Frontend</Text>
          </View>

          {/* Card 2: Horários das Disciplinas */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Horários das Disciplinas</Text>
            <Text style={styles.item}><Text style={styles.label}>Mobile:</Text> Segunda a Sexta, das 18h às 20h</Text>
            <Text style={styles.item}><Text style={styles.label}>Backend:</Text> Terça e Quinta, das 19h às 21h</Text>
            <Text style={styles.item}><Text style={styles.label}>Frontend:</Text> Quarta e Sexta, das 17h às 19h</Text>
            
            {/* Botão para download do PDF de Horários */}
            <TouchableOpacity style={styles.button} onPress={() => downloadPDF('Horários das Disciplinas')}>
              <Text style={styles.buttonText}>Horário</Text>
            </TouchableOpacity>
          </View>

          {/* Card 3: Histórico do Aluno */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Histórico do Aluno</Text>
            <Text style={styles.item}><Text style={styles.label}>Nota em Mobile:</Text> Excelente</Text>
            <Text style={styles.item}><Text style={styles.label}>Nota em Backend:</Text> Bom</Text>
            <Text style={styles.item}><Text style={styles.label}>Nota em Frontend:</Text> Ótimo</Text>
            
            {/* Botão para download do PDF de Histórico */}
            <TouchableOpacity style={styles.button} onPress={() => downloadPDF('Histórico do Aluno')}>
              <Text style={styles.buttonText}>Histórico</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
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
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
  },
  container: {
    width: '100%',
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 25,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4467B0',
    marginBottom: 10,
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
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  
  button: {
    backgroundColor: '#DF2F80',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center', // Centraliza o botão horizontalmente no card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
