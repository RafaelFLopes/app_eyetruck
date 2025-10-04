import { View, ViewStyle } from 'react-native';
import { styles } from './styleCorpoFormulario';

interface CorpoFormularioProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

export default function CorpoFormulario({ children, style }: CorpoFormularioProps) {
  return (
    <View style={[styles.corpoFormulario, style]}>
      {children}
    </View>
  );
}