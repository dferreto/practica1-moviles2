import React from 'react';
		import { Image, ScrollView,  Text, View} from 'react-native';
		import {style_01} from '../styles/style_01';

		const data = [
			{
				nombre : 'Aries',
				dia  : '21 de marzo al 19 de abril',
				creditos : 6},
			{
				nombre : 'Tauro',
				dia  : '20 de abril al 20 de mayo',
				creditos : 2},
			{
				nombre : 'Géminis',
				dia  : '21 de mayo al 20 de junio',
				creditos : 3},
			{
				nombre : 'Cáncer',
				dia  : '21 de junio al 22 de julio',
				creditos : 6},
			{
				nombre : 'Leo',
				dia  : '23 de julio al 22 de agosto',
				creditos : 0},
			{
				nombre : 'Virgo',
				dia  : 2,
				creditos : 6},
			{
				nombre : 'Libra',
				dia  : 2,
				creditos : 3},
			{
				nombre : 'Escorpio',
				dia  : 2,
				creditos : 3},
			{
				nombre : 'Sagitario',
				dia  : 2,
				creditos : 3},
			{
				nombre : 'Capricornio',
				dia  : 2,
				creditos : 0},
            {
                nombre : 'Acuario',
                dia  : 2,
                creditos : 3},
            {
                nombre : 'Piscis',
                dia  : 2,
                creditos : 3}

				
		];

		const Index = () => {
			return(
				<View>
					<View style={style_01.divHeader}>
						<Image source={require('../imgs/logos/logo_universidad.png')} />
					</View>

					<View style={style_01.divMain}>
						<Text style={style_01.h1}>Signos Zodiacales</Text>

						<ScrollView style={{marginTop:8}}>
							{data.map(item => <View style={style_01.tarjeta} key={item.nombre} >
								<Text>Nombre: {item.nombre}</Text>
								<Text>Días: {item.dia}</Text>
								<Text>Créditos: {item.creditos}</Text>
							</View>)}
						</ScrollView>
					</View>

					<View style={style_01.divFooter}>
						<Text style={style_01.textFooter}>Carrera de Tecnologías de Información</Text>
						<Text style={style_01.textFooter}>Sede del Pacífico</Text>
					</View>
				</View>
			);
		}

		export default Index;