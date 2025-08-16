import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Cadastro() {

  const navigation = useNavigation() as any; //para conseguir navegar entre as telas
  
    return (
      <View style={styles.containerCadastro}>
        <View style={styles.headerCadastro}>
          <Text style={styles.tituloCadastro}>Cadastre</Text>
          <Text style={styles.subTituloCadastro}>Cadastre as suas informações</Text>
        </View>
        <View style={styles.formularioCadastro}>
          <Text style={styles.labelFormularioCadastro}>Nome</Text>
          <TextInput 
            style={styles.inputFormularioCadastro}
            placeholder="Nome"
          />
          <Text style={styles.labelFormularioCadastro}>Altura do veículo</Text>
          <TextInput 
            style={styles.inputFormularioCadastro}
            placeholder="Altura do veículo"
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
          <TouchableOpacity style={styles.buttonFormularioCadastro} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textButtonFormularioCadastro}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    containerCadastro: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 25,
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
  });