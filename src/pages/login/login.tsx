import { useNavigation } from '@react-navigation/native';
import { Text, View, ImageBackground } from "react-native";
import BotaoPreenchido from '../../components/botaoPreenchido/botaoPreenchido';
import BotaoVazado from '../../components/botaoVazado/botaoVazado';
import CorpoFormulario from '../../components/corpoFormulario/corpoFormulario';
import InputPadrao from '../../components/inputPadrao/inputPadrao';
import HeaderTitulo from '../../components/headerTitulo/headerTitulo';
import TituloPadrao from '../../components/tituloPadrao/tituloPadrao';
import SubTituloPadrao from '../../components/subTituloPadrao/subTituloPadrao';

const FundoTela = require('../../../assets/images/fundoTela.png');

import { styles } from './styleLogin';

import React, { useState } from 'react';

import { auth, db } from '../../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';

// IMPORTA O CONTEXTO ⬇️
import { useDevice } from '../../contexts/DeviceContext';

export default function Login() {

  const navigation = useNavigation() as any;

  const { setCodigo } = useDevice(); // pega função do contexto

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const esqueciSenha = () => { navigation.navigate('EsqueciSenha') }

  const login = async () => {
    try {
      // login normal
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      // busca dispositivo no Firestore pelo UID
      const q = query(
        collection(db, "tbl_dispositivos"),
        where("uid", "==", uid)
      );

      const result = await getDocs(q);

      if (result.empty) {
        alert("Nenhum dispositivo vinculado a essa conta.");
        return;
      }

      // Primeiro dispositivo encontrado
      const docSnap = result.docs[0];
      const codigoDispositivo = docSnap.id;

      // SALVA NO CONTEXTO
      setCodigo(codigoDispositivo);

      // Agora pode ir pra Home
      navigation.navigate("Home");

    } catch (error: any) {
      console.log(error);
      alert("Login falhou: " + error.message);
    }
  };

  return (
    <ImageBackground
      source={FundoTela}
      style={styles.containerLogin}
      resizeMode="cover"
    >
      <CorpoFormulario>
        <HeaderTitulo>
          <TituloPadrao title="Login" />
          <SubTituloPadrao title="Insira seus dados para acessar sua conta" />
        </HeaderTitulo>

        <InputPadrao
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Ex: seuemail@gmail.com"
        />

        <InputPadrao
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          secureTextEntry
        />

        <BotaoPreenchido title="Entrar" onPress={login} />
        <BotaoVazado title="Esqueceu sua senha?" style={styles.botaoVazado} onPress={esqueciSenha} />

        <Text style={styles.textoLink}>
          Não possui uma conta? <Text style={styles.link} onPress={() => navigation.navigate('Parear')}>Registre-se</Text>
        </Text>

      </CorpoFormulario>
    </ImageBackground>
  );
}
