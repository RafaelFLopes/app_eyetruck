import { useNavigation, useRoute } from '@react-navigation/native';
import { useDevice } from "../../contexts/DeviceContext"
import BotaoPreenchido from '../../components/botaoPreenchido/botaoPreenchido';
import CorpoFormulario from '../../components/corpoFormulario/corpoFormulario';
import InputPadrao from '../../components/inputPadrao/inputPadrao';
import HeaderTitulo from '../../components/headerTitulo/headerTitulo';
import TituloPadraoMenor from '../../components/tituloPadraoMenor/tituloPadraoMenor';
import TituloPadrao from '../../components/tituloPadrao/tituloPadrao';
import SubTituloPadrao from '../../components/subTituloPadrao/subTituloPadrao';

const FundoTela = require('../../../assets/images/fundoTela.png');

import { Text, TextInput, TouchableOpacity, View, ImageBackground } from "react-native";

import { styles } from './styleCadastro';

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
    <ImageBackground
      source={FundoTela}
      style={styles.containerCadastro}
      resizeMode="cover"
    >
      <CorpoFormulario>
        <HeaderTitulo>
          <TituloPadrao title="Cadastro" />
          <SubTituloPadrao title="Cadastre as informações necessárias" />
        </HeaderTitulo>

        <InputPadrao
          label="Nome"
          value={user}
          onChangeText={setUser}
          placeholder="Nome"
        />

        <InputPadrao
          label="Altura do veículo"
          value={alturaCaminhao}
          onChangeText={setAlturaCaminhao}
          placeholder="Altura do veículo"
        />

        <InputPadrao
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />

        <InputPadrao
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          secureTextEntry
        />
        
        <BotaoPreenchido title="Cadastrar" onPress={cadastro} />

    </CorpoFormulario>
    </ImageBackground >
  );
}