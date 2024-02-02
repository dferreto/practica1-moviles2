import React from 'react';
		import { Image, ScrollView,  Text, View} from 'react-native';
		import {style_01} from '../styles/style_01';

		const data = [
			{
				logo: require('../imgs/signos/Aries.png'),
				nombre : 'Aries',
				dia  : '21 de marzo al 19 de abril',
				elementos : 'Fuego',
				astro : 'Marte',
				piedra : 'Jaspe rojo y rubí'},
			{
				logo: require('../imgs/signos/Tauro.png'),
				nombre : 'Tauro',
				dia  : '20 de abril al 20 de mayo',
				elementos : 'Tauro',
				astro : 'Venus',
				piedra : 'Amatista y cuarzo rosa'},
			{
				logo: require('../imgs/signos/Geminis.png'),
				nombre : 'Géminis',
				dia  : '21 de mayo al 20 de junio',
				elementos : 'Aire',
				astro : 'Mercurio',
				piedra : 'Berilo y ámbar'},
			{
				logo: require('../imgs/signos/Cancer.png'),
				nombre : 'Cáncer',
				dia  : '21 de junio al 22 de julio',
				elementos : 'Agua',
				astro : 'Luna',
				piedra : 'Cristal de roca, perla y plata'},
			{
				logo: require('../imgs/signos/Leo.png'),
				nombre : 'Leo',
				dia  : '23 de julio al 22 de agosto',
				elementos : 'Fuego',
				astro : 'Sol',
				piedra : 'Topacio, crisoberilo, ámbar amarillo y ojo de tigre'},
			{
				logo: require('../imgs/signos/Virgo.png'),
				nombre : 'Virgo',
				dia  : ' 23 de agosto al 22 de septiembre',
				elementos : 'Tierra',
				astro : 'Mercurio',
				piedra : 'Aventurina y topacio'},
			{
				logo: require('../imgs/signos/Libra.png'),
				nombre : 'Libra',
				dia  : '23 de septiembre al 22 de octubre',
				elementos : 'Aire',
				astro : 'Venus',
				piedra : 'Ágata y jade'},
			{
				logo: require('../imgs/signos/Scorpio.png'),
				nombre : 'Escorpio',
				dia  : '23 de octubre al 21 de noviembre',
				elementos : 'Agua',
				astro : 'Plutón',
				piedra : 'Coral y jaspe sardo'},
			{
				logo: require('../imgs/signos/Sagitario.png'),
				nombre : 'Sagitario',
				dia  : '22 de noviembre al 21 de diciembre',
				elementos : 'Fuego',
				astro : 'Júpiter',
				piedra : 'Calcedonia, esmeralda y turquesa'},
			{
				logo: require('../imgs/signos/Capricornio.png'),
				nombre : 'Capricornio',
				dia  : '22 de diciembre al 19 de enero',
				elementos : 'Tierra',
				astro : 'Saturno',
				piedra : 'Diamante y obsidiana'},
            {
				logo: require('../imgs/signos/Acuario.png'),
                nombre : 'Acuario',
                dia  : '20 de enero al 18 de febrero',
                elementos : 'Aire',
				astro : 'Urano',
				piedra : 'Zafiro'},
            {
				logo: require('../imgs/signos/Piscis.png'),
                nombre : 'Piscis',
                dia  : '19 de febrero al 20 de marzo',
                elementos : 'Agua',
				astro : 'Neptuno',
				piedra : 'Aguamarina y amatista'}
		];

		const Index = () => {
			return(
				<View>
					<View style={style_01.divHeader}>
						<Image source={require('../imgs/logos/logo_universidad.png')} />
					</View>
					
					
					<View style={style_01.divMain}>
						<Text style={style_01.h1}>Signos Zodiacales</Text>
						<View>
					</View>
						<ScrollView style={{ marginTop: 8}}>
    {data.map(item => (<View style={style_01.tarjeta} key={item.nombre}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={item.logo}
                    style={{ width: 70, height: 70, marginRight: 10 }}
                /> 
                <View>
                    <Text>Nombre: {item.nombre}</Text>
                    <Text>Días: {item.dia}</Text>
                    <Text>Elemento: {item.elementos}</Text>
                    <Text>Astro celeste: {item.astro}</Text>
                    <Text>Piedra preciosa: {item.piedra}</Text>
                </View>
            </View>
        </View>
    ))}
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