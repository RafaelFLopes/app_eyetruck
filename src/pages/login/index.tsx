import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.containerLogin}>
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
        <TouchableOpacity style={styles.buttonFormularioLogin}>
          <Text style={styles.textButtonFormularioLogin}>Entrar</Text>
        </TouchableOpacity>
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
});