import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styleBotaoVazado';

export default function botaoVazado(
    { onPress, title }: 
    { onPress: () => void; title: string }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}