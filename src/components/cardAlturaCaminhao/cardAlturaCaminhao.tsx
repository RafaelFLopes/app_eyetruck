import { ImageBackground, TouchableOpacity } from 'react-native';

const ImagemCardAlturaCaminhao = require('../../../assets/images/cardAlturaCaminhao.png');
import { styles } from './styleCardAlturaCaminhao';

export default function CardAlturaCaminhao({ onPress, children }: { onPress: () => void; children: React.ReactNode }
  ) {
  return (
    <TouchableOpacity style={styles.formularioContainer} onPress={onPress}>
      <ImageBackground
        source={ImagemCardAlturaCaminhao}
        style={styles.cardAlturaCaminhao}
        imageStyle={{ borderRadius: 10 }}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    </TouchableOpacity>
  );
}