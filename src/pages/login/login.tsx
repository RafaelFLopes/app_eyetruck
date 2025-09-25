import { useNavigation } from '@react-navigation/native';
import { Text, View, ImageBackground } from "react-native";
import BotaoPreenchido from '../../components/botaoPreenchido/botaoPreenchido';
import CorpoFormulario from '../../components/corpoFormulario/corpoFormulario';
import InputPadrao from '../../components/inputPadrao/inputPadrao';
import TituloPadrao from '../../components/tituloPadrao/tituloPadrao';
import SubTituloPadrao from '../../components/subTituloPadrao/subTituloPadrao';

const FundoTela = require('../../../assets/images/fundoTela.png');

import { styles } from './styleLogin';

import React, { useState } from 'react';

import { auth } from '../../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {

  const navigation = useNavigation() as any; //para conseguir navegar entre as telas

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, senha)
      navigation.navigate('Home')
    } catch (error: any) {
      console.log(error)
      alert('Login falhou: ' + error.message);
    }
  }

  return (
    
    <ImageBackground
      source={FundoTela}
      style={styles.containerLogin}
      resizeMode="cover"
    >
    <CorpoFormulario>
      <View style={styles.headerLogin}>
        <TituloPadrao title="Login" />
        <SubTituloPadrao title="Insira seus dados para acessar sua conta" />
      </View>
      

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

        <BotaoPreenchido title="Entrar" onPress={login} />

        <Text style={styles.textoRegistrese}>
          Não possui uma conta? <Text style={styles.linkRegistrese} onPress={() => navigation.navigate('Parear')}>Registre-se</Text>
        </Text>

      </CorpoFormulario>
    </ImageBackground>
  );
}