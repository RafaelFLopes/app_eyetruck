import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styleBotaoPreenchido';

export default function botaoPreenchido(
    { onPress, title }: 
    { onPress: () => void; title: string }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}
