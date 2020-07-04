import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class ReactNative extends Component{

  constructor(props){
    super(props);
    this.state = {texto: ''};

    this.mudarTexto = this.mudarTexto.bind(this);
  
  }

  mudarTexto(t){
    let s = this.state;

    if(t.length > 0){
      s.texto = 'Olá, '+ t;
    }else{
      s.texto = '';
    }
    this.setState(s);
  }


  render(){
    return(
      <View style={{paddingTop:30}}>
        <TextInput style={styles.input} placeholder="Qual seu nome" onChangeText={this.mudarTexto}/>

        <Text style={styles.texto}> 
          {this.state.texto}
        </Text>

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