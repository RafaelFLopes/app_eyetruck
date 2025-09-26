import { ImageBackground, Text, View } from 'react-native';

const ImagemCardAlturaCaminhao = require('../../../assets/images/cardAlturaCaminhao.png');
import { styles } from './styleCardAlturaCaminhao';

export default function CardAlturaCaminhao() {
  return (
    <ImageBackground
      source={ImagemCardAlturaCaminhao}
      //style={styles.cardAlturaCaminhao}
      imageStyle={{ borderRadius: 20 }}
    >
    </ImageBackground>
  );
}