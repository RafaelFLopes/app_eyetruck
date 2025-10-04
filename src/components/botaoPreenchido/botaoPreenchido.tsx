import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styleBotaoPreenchido';

export default function BotaoPreenchido({ onPress, title, style }: { onPress: () => void; title: string; style?: any }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}
