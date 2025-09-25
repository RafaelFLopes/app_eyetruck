import { Text } from 'react-native';
import { styles } from './styleTituloPadraoMenor';

export default function TituloPadraoMenor({ title }: { title: string }) {
  return (
    <Text style={styles.tituloPadraoMenor}>{title}</Text>
  );
}
