import { TextInput, View, Text, KeyboardTypeOptions } from 'react-native';
import { styles } from './styleInputPadrao';

interface InputPadraoProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number; // máximo de caracteres permitidos
}

export default function InputPadrao({
  label,
  value,
  onChangeText,
  placeholder,
  editable,
  secureTextEntry = false,
  keyboardType = 'default',
  maxLength, // recebe o máximo de caracteres
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
        editable={editable}
        keyboardType={keyboardType}
        maxLength={maxLength} // aplica o máximo de caracteres
        placeholderTextColor="#696969ff"
      />
    </View>
  );
}