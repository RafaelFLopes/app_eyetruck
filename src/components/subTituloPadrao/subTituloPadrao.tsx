import { Text } from 'react-native';
import { styles } from './styleSubTituloPadrao';

export default function subTituloPadrao({ title }: { title: string }) {
  return (
    <Text style={styles.subTituloPadrao}>{title}</Text>
  );
}
