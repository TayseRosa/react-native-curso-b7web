import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native';

export default class PrimeiroProjeto extends Component {

	constructor(props) {
		super(props);
		this.state = {consumido:0, status:'Ruim', pct:0};

		this.addCopo = this.addCopo.bind(this);
		this.atualizar = this.atualizar.bind(this);
		this.reset = this.reset.bind(this);
	}

	atualizar() {
		let s = this.state;
		s.pct = Math.floor((s.consumido/2000)*100);

		if(s.pct >= 200){
			s.status = <Text style={styles.areaDadoOtimo}>PARABÉNS! </Text>;
		}else if (s.pct >= 100){
			s.status = <Text style={styles.areaDadoBom}> Continue assim..</Text>;
		}else{
			s.status = <Text style={styles.areaDadoRuim}> Ruim</Text>;
		}


		this.setState(s);
	}

	addCopo() {
		let s = this.state;
		s.consumido += 200;
		this.setState(s);

		this.atualizar();
	}

	reset(){
		let r = this.state;
		r.consumido = 0;
		r.pct = 0;
		this.setState(r);


	}

	render() {
		return (
			<View style={styles.body}>
				<ImageBackground source={require('./images/waterbg.jpg')} style={styles.bgimage}>
					<View>

						<View style={styles.infoArea}>
							<View style={styles.area}>
								<Text style={styles.areaTitulo}>Meta</Text>
								<Text style={styles.areaDado}>2000ml</Text>
							</View>
							<View style={styles.area}>
								<Text style={styles.areaTitulo}>Consumido</Text>
								<Text style={styles.areaDado}>{this.state.consumido}ml</Text>
							</View>
							<View style={styles.area}>
								<Text style={styles.areaTitulo}>Status</Text>
								<Text style={styles.areaDado}> {this.state.status}</Text>
								
							</View>
						</View>

						<View style={styles.pctArea}>
							<Text style={styles.pctText}>{this.state.pct}%</Text>
						</View>

						<View style={styles.btnArea}>
							<Button title="Beber 200ml" onPress={this.addCopo} />
						</View>

						<View style={styles.btnAreaReset}>
							<Button title="Resetar"  onPress={this.reset} />
						</View>

						<View>
							<Text style={styles.devFooter}>Desenvolvido por Tayse Rosa</Text>
						</View>

					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body:{
		flex:1,
		paddingTop:0
	},
	bgimage:{
		flex:1,
		width:null
	},
	infoArea:{
		flex:1,
		flexDirection:'row',
		marginTop:70
	},
	area:{
		flex:1,
		alignItems:'center'
	},
	areaTitulo:{
		color:'#000',
		fontWeight:'bold',
		fontSize:20

	},
	areaDado:{
		color:'#2b4274',
		fontSize:15,
		fontWeight:'bold'
	},


	areaDadoRuim:{
		color:'red',
		fontSize:15,
		fontWeight:'bold'
	},
	areaDadoBom:{
		color:'blue',
		fontSize:15,
		fontWeight:'bold'
	},
	areaDadoOtimo:{
		color:'green',
		fontSize:18,
		fontWeight:'bold'
	},
	pctArea:{
		marginTop:170,
		alignItems:'center'
	},
	pctText:{
		fontSize:70,
		color:'#FFFFFF',
		backgroundColor:'transparent'
	},
	btnArea:{
		marginTop:30,
		alignItems:'center'
	},
	btnAreaReset:{
		marginTop:20,
		alignItems:'center',
		color:'#fff'
	},
	devFooter:{
		color:'black',
		fontSize:16,
		textAlign:'center',
		paddingTop:250
	}
});