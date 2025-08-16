import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

  const navigation = useNavigation() as any; //para conseguir navegar entre as telas

  return (
    <View style={styles.containerLogin}>
      <View style={styles.headerLogin}>
        <Text style={styles.tituloLogin}>Login</Text>
        <Text style={styles.subTituloLogin}>Insira seus dados para acessar sua conta</Text>
      </View>
      <View style={styles.formularioLogin}>
        <Text style={styles.labelFormularioLogin}>Email</Text>
        <TextInput 
          style={styles.inputFormularioLogin}
          placeholder="Email"
        />
        <Text style={styles.labelFormularioLogin}>Senha</Text>
        <TextInput 
          style={styles.inputFormularioLogin}
          placeholder="Senha"
        />
        <TouchableOpacity style={styles.buttonFormularioLogin} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textButtonFormularioLogin}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.textoRegistrese}>
          Não possui uma conta? <Text style={styles.linkRegistrese} onPress={() => navigation.navigate('Parear')}>Registre-se</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  headerLogin: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  tituloLogin: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subTituloLogin: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },

  formularioLogin: {
    width: '100%',
    gap: 10,
  },
  inputFormularioLogin: {
    fontSize: 16,
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#dbdbdbff',
  },
  labelFormularioLogin: {
    fontSize: 16,
    color: '#333',
    fontWeight: 600,
  },
  buttonFormularioLogin: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textButtonFormularioLogin: {
    color: '#f2f2f2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoRegistrese: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
  },
  linkRegistrese: {
    marginTop: 20,
    textAlign: 'center',
    color: '#1b1b1bff',
    textDecorationLine: 'underline'
  },
});