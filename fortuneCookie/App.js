import React, { Component } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text, Image } from 'react-native';

class Botao extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.styles = StyleSheet.create({
			botao:{
				width:250,
				height:50,
				borderWidth:2,
				borderColor:props.color,
				backgroundColor:'transparent',
				borderRadius:25
			},
			botaoArea:{
				flex:1,
				flexDirection:'row',
				justifyContent:'center',
				alignItems:'center'
			},
			botaoText:{
				color:props.color,
				fontSize:14,
				fontWeight:'bold'
			}
		});
	}

	render() {
		return (
			<TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
				<View style={this.styles.botaoArea}>
					<Text style={this.styles.botaoText}>{this.props.text}</Text>
				</View>
			</TouchableOpacity>
		);
	}

}

export default class PrimeiroProjeto extends Component {

	constructor(props) {
		super(props);
		this.state = {texto:''};

		this.frases = [
			'Levanta, sacode a poeira, dá a volta por cima.',
			'Nem todos os dias são bons, mas há algo bom em cada dia.',
			'Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada, apenas dê o primeiro passo.',
			'Toda manhã você tem duas escolhas: continuar dormindo com seus sonhos ou acordar e persegui-los!			',
			'A cada novo dia, a cada momento, temos a nossa disposição a maravilhosa possibilidade do encontro, que traz em si infinitas oportunidades. Precisamos apenas estar atentos.			',
			'O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.',
			'A sua irritação não solucionará problema algum. O seu mau humor não modifica a vida. Não estrague o seu dia.',
		];


		this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
	}

	quebrarBiscoito() {
		let s = this.state;

		let r = Math.floor(Math.random() * this.frases.length);

		s.texto = this.frases[r];
		this.setState(s);
	}

	render() {
		return (
			<View style={styles.body}>
				<Image source={require('./images/cookie.png')} />

				<Text style={styles.texto}>"{this.state.texto}"</Text>

				<Botao color="#B59619" text="Quebrar Biscoito" onPress={this.quebrarBiscoito} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body:{
		paddingTop:20,
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	texto:{
		fontSize:17,
		color:'#B59619',
		margin:30,
		fontStyle:'italic',
		textAlign:'center'
	}
});



