import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function EditarPerfil() {

  const navigation = useNavigation(); //para conseguir navegar entre as telas
  
    return (
      <View style={styles.containerEditar}>
        <View style={styles.headerCadastro}>
          <Text style={styles.tituloCadastro}>Editar Perfil</Text>
          <Text style={styles.subTituloCadastro}>Atualize os seus dados pessoais</Text>
        </View>
        <View style={styles.formularioCadastro}>
            <Text style={styles.tituloFormularioEditarPerfil}>Editar</Text>
          <Text style={styles.labelFormularioCadastro}>Nome</Text>
          <TextInput 
            style={styles.inputFormularioCadastro}
            placeholder="Nome"
          />
          <Text style={styles.labelFormularioCadastro}>Email</Text>
          <TextInput 
            style={styles.inputFormularioCadastro}
            placeholder="Email"
          />
          <Text style={styles.labelFormularioCadastro}>Senha</Text>
          <TextInput 
            style={styles.inputFormularioCadastro}
            placeholder="Senha"
          />
          <TouchableOpacity style={styles.buttonFormularioCadastro} >
            <Text style={styles.textButtonFormularioCadastro}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonSairConta} >
            <Text style={styles.textButtonSairConta}>Sair</Text>
          </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    containerEditar: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
    },
  
    headerCadastro: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 30,
    },
    tituloCadastro: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#333',
    },
    subTituloCadastro: {
      fontSize: 18,
      color: '#666',
      textAlign: 'center',
    },
  
    formularioCadastro: {
      width: '100%',
      gap: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      padding: 15,
    },
    inputFormularioCadastro: {
      fontSize: 16,
      height: 50,
      borderRadius: 10,
      padding: 10,
      backgroundColor: '#dbdbdbff',
    },
    labelFormularioCadastro: {
      fontSize: 16,
      color: '#333',
      fontWeight: 600,
    },
    buttonFormularioCadastro: {
      backgroundColor: '#333',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 10,
    },
    textButtonFormularioCadastro: {
      color: '#f2f2f2',
      fontSize: 16,
      fontWeight: 'bold',
    },
    tituloFormularioEditarPerfil: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#333',
      marginBottom: 15,
    },
    buttonSairConta:{
      width: '100%',  
      backgroundColor: '#333',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    textButtonSairConta: {
      color: '#f2f2f2',
      fontSize: 16,
      fontWeight: 'bold',
    },
});