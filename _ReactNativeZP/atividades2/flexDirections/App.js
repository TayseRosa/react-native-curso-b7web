import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class ReactNative extends Component{
  render(){
    return(

      <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'stretch'}}> 
        
        <View style={{width:50, backgroundColor:'blue'}}></View>


      </View>
      
    );
  }
}

/*

      <View>
        <Text>justifyContent:'flex-start'</Text>
        <Text>justifyContent:'flex-end'</Text>
        <Text>justifyContent:'center'</Text>
        <Text>justifyContent:'space-between'</Text>
        <Text>justifyContent:'space-around' </Text>
      </View>

      alignItems:'flex-start'
      alignItems:'flex-end'
      alignItems:'center'
      alignItems:'stretch'
*/