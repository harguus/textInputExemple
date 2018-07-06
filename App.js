import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

export default class App extends Component<Props> {

  constructor(props){
    super(props);

    this.state = {
      texto: "",
      textoDigitado: "",
    }
  }


  apertou(){
      this.setState({textoDigitado : this.state.texto});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Aqui aparece o que você está digitando: {this.state.texto}</Text>
        <Text style={styles.welcome}>Aqui aparece o que você digitou: {this.state.textoDigitado}</Text>
        <TextInput
          style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
          onChangeText = {(digitado) => this.setState({texto : digitado})}
        />
        <Button
          title="aperte aqui"
          onPress={ () => {this.apertou()}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
