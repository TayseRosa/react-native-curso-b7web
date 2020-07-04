import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';

export default class ReactNative extends Component{
  apertouBotao(){
    Alert.alert("Você apertou no botão!");
  }

  render(){
    return(
      <View style={{paddingTop:30}}>
        <Button title="Aperte" onPress={this.apertouBotao} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{
    height:40,
    borderWidth:1,
    borderColor:'#000000',
    margin:10,
    padding:10
  },
  texto:{
    fontSize:20,
    textAlign:'center'
  }
});