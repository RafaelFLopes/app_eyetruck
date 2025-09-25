import { useNavigation } from '@react-navigation/native';
import { Text, View } from "react-native";
import BotaoPreenchido from '../../components/botaoPreenchido/botaoPreenchido';
import InputPadrao from '../../components/inputPadrao/inputPadrao';


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
    
    <View style={styles.containerLogin}>
      <View style={styles.headerLogin}>
        <Text style={styles.tituloLogin}>Login</Text>
        <Text style={styles.subTituloLogin}>Insira seus dados para acessar sua conta</Text>
      </View>
      <View style={styles.formularioLogin}>

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

      </View>
    </View>
  );
}