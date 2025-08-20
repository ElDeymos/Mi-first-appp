import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [value, setValue] = useState(0);   
  const [clicks, setClicks] = useState(0);

  const increment = () => {
    setValue(value + 1);      
    setClicks(clicks + 1);    
  };

  const decrement = () => {
    setValue(value - 1);      
    setClicks(clicks + 1);    
  };

  const handleChange = (text) => {
    const number = parseInt(text) || 0; 
    setValue(number);   
    setClicks(0);     
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Mi primer contador en React Native </Text>

      <TextInput
        placeholder="Ingrese un número"
        keyboardType="numeric"
        value={String(value)}
        onChangeText={handleChange}
        style={styles.input}
      />

      <Text style={styles.counterText}>Contador de clics: <Text style={styles.highlight}>{clicks}</Text></Text>
      <Text style={styles.valueText}>Valor actual: <Text style={styles.highlight}>{value}</Text></Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.increment]} onPress={increment}>
          <Text style={styles.buttonText}>➕ Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.decrement]} onPress={decrement}>
          <Text style={styles.buttonText}>➖ Decrementar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#3b82f6',
    borderRadius: 10,
    padding: 12,
    marginVertical: 15,
    width: 220,
    textAlign: 'center',
    backgroundColor: '#fff',
    fontSize: 16,
    elevation: 3, // sombra en Android
    shadowColor: '#000', // sombra en iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  counterText: {
    fontSize: 18,
    marginTop: 10,
    color: '#475569',
  },
  valueText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#475569',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 3,
  },
  increment: {
    backgroundColor: '#22c55e',
  },
  decrement: {
    backgroundColor: '#ef4444',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
