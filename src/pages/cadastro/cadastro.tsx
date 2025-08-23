import { useNavigation, useRoute } from '@react-navigation/native';
import { useDevice } from "../../contexts/DeviceContext"

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import React, { useState } from 'react';

import { db, auth } from '../../../FirebaseConfig';

import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Cadastro() {

  const navigation = useNavigation() as any; //para conseguir navegar entre as telas
  const { codigo } = useDevice();


  //Estados para o Authentication
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Estados para os campos do usuário
  const [user, setUser] = useState('');
  const [alturaCaminhao, setAlturaCaminhao] = useState('');


  const cadastro = async () => {
    if (!codigo) {
      alert("Código do dispositivo não encontrado!");
      return;
    }

    try {
      // Cria o usuário no Auth
      const cred = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = cred.user.uid;

      // Atualiza o documento do dispositivo com os dados do usuário
      const dispositivoRef = doc(db, "tbl_dispositivos", codigo);
      await updateDoc(dispositivoRef, {
        uid,
        nome: user,
        alturaCaminhao: parseFloat(alturaCaminhao), // garante que seja float
        cadastrado: true,
      });

      alert("Cadastro concluído!");
      navigation.navigate("Login");
    } catch (error: any) {
      console.log(error);
      alert("Falha no Cadastro: " + error.message);
    }
  };




  return (
    <View style={styles.containerCadastro}>
      <View style={styles.headerCadastro}>
        <Text style={styles.tituloCadastro}>Cadastro</Text>
        <Text style={styles.subTituloCadastro}>Cadastre as suas informações</Text>
      </View>
      <View style={styles.formularioCadastro}>
        <Text style={styles.labelFormularioCadastro}>Nome</Text>
        <TextInput
          style={styles.inputFormularioCadastro}
          placeholder="Nome"
          value={user}
          onChangeText={setUser}
        />
        <Text style={styles.labelFormularioCadastro}>Altura do veículo</Text>
        <TextInput
          style={styles.inputFormularioCadastro}
          placeholder="Altura do veículo"
          value={alturaCaminhao}
          onChangeText={setAlturaCaminhao}
        />
        <Text style={styles.labelFormularioCadastro}>Email</Text>
        <TextInput
          style={styles.inputFormularioCadastro}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.labelFormularioCadastro}>Senha</Text>
        <TextInput
          style={styles.inputFormularioCadastro}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.buttonFormularioCadastro} onPress={cadastro}>
          <Text style={styles.textButtonFormularioCadastro}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
    </View >
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