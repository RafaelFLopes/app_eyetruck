import { View} from 'react-native';
import { styles } from './styleCorpoFormulario';

export default function CorpoFormulario({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.corpoFormulario}>
        {children}
    </View>
  );
}
