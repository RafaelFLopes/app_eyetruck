import { View} from 'react-native';
import { styles } from './styleHeaderTitulo';

export default function HeaderTitulo({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.headerTitulo}>
        {children}
    </View>
  );
}
