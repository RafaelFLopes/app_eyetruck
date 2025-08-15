import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {

  const navigation = useNavigation(); //para conseguir navegar entre as telas

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EditarPerfil')}>
                  <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}