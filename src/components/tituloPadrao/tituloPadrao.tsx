import { Text } from 'react-native';
import { styles } from './styleTituloPadrao';

export default function TituloPadrao({ title }: { title: string }) {
  return (
    <Text style={styles.tituloPadrao}>{title}</Text>
  );
}
