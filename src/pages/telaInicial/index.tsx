import { useNavigation } from '@react-navigation/native';
import { View, ImageBackground, Image } from "react-native";
import BotaoPreenchido from '../../components/botaoPreenchido/botaoPreenchido';
import BotaoVazado from '../../components/botaoVazado/botaoVazado';

const LogoBranca = require('../../../assets/images/logoBranca.png');
const FundoTela = require('../../../assets/images/fundoTela.png');

import { styles } from './styleIndex';

export default function Index() {
  const navigation = useNavigation() as any;

  const login = () => { navigation.navigate('Login') }
  const parear = () => { navigation.navigate('Parear') }

  return (
    <ImageBackground
      source={FundoTela}
      style={styles.containerIndex}
      resizeMode="cover"
    >
      {/* Adiciona a logo no topo */}
      <View style={styles.logoContainer}>
        <Image source={LogoBranca} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.grupoBotoes}>
        <BotaoPreenchido title="Entrar" onPress={login} />
        <BotaoVazado title="Cadastrar" onPress={parear} />
      </View>
    </ImageBackground>
  );
}