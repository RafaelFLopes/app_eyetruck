import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styleBotaoVazado';

export default function botaoVazado(
    { onPress, title, style }: 
    { onPress: () => void; title: string; style?: any }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text
        style={[
          styles.textButton, style?.color ? { color: style.color } : null
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}