import { TextInput, View, Text } from 'react-native';
import { styles } from './styleInputPadrao';

interface InputPadraoProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export default function InputPadrao({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}: InputPadraoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#696969ff"
      />
    </View>
  );
}