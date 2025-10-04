import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from "react-native";
import CardAlturaCaminhao from "../../components/cardAlturaCaminhao/cardAlturaCaminhao";

import { styles } from './styleHome';

const LogoAzulClaro = require('../../../assets/images/logoAzulClaro.png');
const LogoLetrasCinza = require('../../../assets/images/logoLetrasCinza.png');


export default function Home() {
  const navigation = useNavigation() as any;
  const EditarAltura = () => { navigation.navigate('EditarAltura') }

  return (
    <View style={styles.container}>
      <View style={styles.headerHome}>
        <Image source={LogoLetrasCinza} style={styles.logoLetrasCinza} resizeMode="contain" />
      </View>
      <CardAlturaCaminhao onPress={EditarAltura} >
        <View style={styles.cardItem}>
          <Image source={LogoAzulClaro} style={styles.logoAzulClaro} resizeMode="contain" />
        </View>
        <View style={styles.cardItem}>
          <View style={styles.tituloCard}>
            <Text style={styles.titulo}>Altura</Text>
            <Text style={styles.altura}>3.75</Text>
          </View>
        </View>
      </CardAlturaCaminhao>
    </View>
  );
}