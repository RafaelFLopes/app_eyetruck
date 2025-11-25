import { useNavigation } from '@react-navigation/native';
import { Text, View, ImageBackground } from "react-native";
import BotaoPreenchido from '../../components/botaoPreenchido/botaoPreenchido';
import BotaoVazado from '../../components/botaoVazado/botaoVazado';
import CorpoFormulario from '../../components/corpoFormulario/corpoFormulario';
import InputPadrao from '../../components/inputPadrao/inputPadrao';
import HeaderTitulo from '../../components/headerTitulo/headerTitulo';
import TituloPadrao from '../../components/tituloPadrao/tituloPadrao';
import SubTituloPadrao from '../../components/subTituloPadrao/subTituloPadrao';

import MensagemAlerta from '../../components/mensagemAlerta/mensagemAlerta';

const FundoTela = require('../../../assets/images/fundoTela.png');

import { styles } from './styleLogin';

import React, { useState } from 'react';

import { auth, db } from '../../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';

// CONTEXTO
import { useDevice } from '../../contexts/DeviceContext';

export default function Login() {

  const navigation = useNavigation() as any;

  const { setCodigo } = useDevice();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // --- ESTADOS PARA ALERTA ---
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTipo, setAlertTipo] = useState<"sucesso" | "erro" | "info">("info");
  const [alertTitulo, setAlertTitulo] = useState<string | undefined>();
  const [alertMensagem, setAlertMensagem] = useState("");

  // Função rápida para abrir alerta
  const mostrarAlerta = (tipo: "sucesso" | "erro" | "info", mensagem: string, titulo?: string) => {
    setAlertTipo(tipo);
    setAlertMensagem(mensagem);
    setAlertTitulo(titulo);
    setAlertVisible(true);
  };

  const esqueciSenha = () => { navigation.navigate('EsqueciSenha') }

  const login = async () => {

    if (!email.trim()) {
      mostrarAlerta("info", "Digite o e-mail.", "Atenção");
      return;
    }

    if (!senha.trim()) {
      mostrarAlerta("info", "Digite a senha.", "Atenção");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      const q = query(
        collection(db, "tbl_dispositivos"),
        where("uid", "==", uid)
      );

      const result = await getDocs(q);

      if (result.empty) {
        mostrarAlerta("erro", "Nenhum dispositivo vinculado a essa conta.", "Atenção");
        return;
      }

      const docSnap = result.docs[0];
      const codigoDispositivo = docSnap.id;

      setCodigo(codigoDispositivo);

      navigation.navigate("Home");

    } catch (error: any) {
      console.log(error);
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        mostrarAlerta("erro", "Dados Inválidos. E-mail ou senha incorretos.", "Atenção");
        return;
      } else if (error.message === "Firebase: Error (auth/invalid-email).") {
        mostrarAlerta("erro", "E-mail inválido. Verifique o e-mail digitado.", "Atenção");
        return;
      }
      mostrarAlerta("erro", "Login falhou: " + error.message, "Atenção");
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


      <MensagemAlerta
        visible={alertVisible}
        tipo={alertTipo}
        titulo={alertTitulo}
        mensagem={alertMensagem}
        onClose={() => setAlertVisible(false)}
      />

    </ImageBackground>
  );
}
