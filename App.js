/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input}/>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>30</Text>
        <Text style={[styles.resultado, {fontSize: 35}]}>Obesidade 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entradas: {
    flexDirection: "row",
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
  },
  button: {
    backgroundColor: "#ccc",
    marginTop: 24,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 50,
    marginTop: 5,
    marginBottom: 5,
  },
  resultado: {
    textAlign: "center",
    padding: 15,
    fontSize: 50,
    color: "#AAA"
  }
});
