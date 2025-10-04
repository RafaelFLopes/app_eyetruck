import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from "react-native";
import CardAlturaCaminhao from "../../components/cardAlturaCaminhao/cardAlturaCaminhao";
const LogoBranca = require('../../../assets/images/logoBranca.png');

export default function Home() {
  const navigation = useNavigation() as any;
  const EditarAltura = () => { navigation.navigate('EditarAltura') }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 20 }}>
      <CardAlturaCaminhao onPress={EditarAltura} >
        <View>
          <Image source={LogoBranca} style={styles.logo} resizeMode="contain" />
        </View>
        <View>
          <Text>
            Altura
          </Text>
          <Text>
            3.75m
          </Text>
        </View>
      </CardAlturaCaminhao>
    </View>
  );
}

const styles = {
  logo: {
    height: 120,
  },

};