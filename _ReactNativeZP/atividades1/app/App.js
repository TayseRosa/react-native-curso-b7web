import React, { Component } from 'react';
import { View,Text, StyleSheet, Button, Image } from 'react-native';


export default class App extends Component{

  somar(n1,n2){
    return n1+n2;
  }

  render(){
    let nome="Tayse"
    let imagem = {uri:'https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png'};

    return(
      <View>
        <Text style={{fontSize:25, color:'blue', margin:20}}>##Curso React Native:##</Text>
        <Image source={imagem} style={{width:300, height:300}}></Image>
        <Text style={styles.texto}>Meu nome é {nome}</Text>
        <Text style={styles.texto}>A soma de 2+2 é: {this.somar(2,2)}</Text>
        <Button title="Me aperte" onPress={()=>{
          alert("Me apertou!");
        }}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texto:{
    fontSize:30,
    color:'#999',
  }
  
})