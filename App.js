/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {peso:0, altura:0, resultado:0, resultadoText:""}

    this.calcular = this.calcular.bind(this)
  }

  calcular() {
    let s = this.state;

    if (this.state.peso != "" && this.state.altura != "") {
      let imc = this.state.peso / (this.state.altura * this.state.altura);
      s.resultado = imc;

      if (imc < 16) {
        s.resultadoText = "Magreza grave";
      } else if (imc < 17) {
        s.resultadoText = "Magreza moderada";
      } else if (imc < 18.5) {
        s.resultadoText = "Magreza leve";
      } else if (imc < 25) {
        s.resultadoText = "Saudável";
      } else if (imc < 30) {
        s.resultadoText = "Sobrepreso";
      } else if (imc < 35) {
        s.resultadoText = "Obesidade Grau 1";
      } else if (imc < 40) {
        s.resultadoText = "Obesidade Grau 2 (severa)";
      } else {
        s.resultadoText = "Obesidade Grau 3 (mórbida)";
      }
    } else {
      s.resultado = 0;
      s.resultadoText = "";
    }

    this.setState(s);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} onChangeText={(peso) => {this.setState({peso})}}/>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => {this.setState({altura})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize: 35}]}>{this.state.resultadoText}</Text>
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
