import { useNavigation } from '@react-navigation/native';
import { useDevice } from "../../contexts/DeviceContext"
import BotaoPreenchido from '../../components/botaoPreenchido/botaoPreenchido';
import CorpoFormulario from '../../components/corpoFormulario/corpoFormulario';
import InputPadrao from '../../components/inputPadrao/inputPadrao';
import HeaderTitulo from '../../components/headerTitulo/headerTitulo';
import TituloPadrao from '../../components/tituloPadrao/tituloPadrao';
import SubTituloPadrao from '../../components/subTituloPadrao/subTituloPadrao';

const FundoTela = require('../../../assets/images/fundoTela.png');

import { ImageBackground } from "react-native";

import { styles } from './styleCadastro';

import React, { useState } from 'react';

import { db, auth } from '../../../FirebaseConfig';
import { updateDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import MensagemAlerta from "../../components/mensagemAlerta/mensagemAlerta";

export default function Cadastro() {

  const navigation = useNavigation() as any;
  const { codigo } = useDevice();


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');
  const [alturaCaminhao, setAlturaCaminhao] = useState('');


  // ---- ALERTA ----
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTipo, setAlertTipo] = useState<"sucesso" | "erro" | "info">("info");
  const [alertTitulo, setAlertTitulo] = useState<string | undefined>();
  const [alertMensagem, setAlertMensagem] = useState("");

  const mostrarAlerta = (tipo: "sucesso" | "erro" | "info", mensagem: string, titulo?: string) => {
    setAlertTipo(tipo);
    setAlertMensagem(mensagem);
    setAlertTitulo(titulo);
    setAlertVisible(true);
  };
  // -----------------


  const cadastro = async () => {

    if (!codigo) {
      mostrarAlerta("erro", "Código do dispositivo não encontrado!", "Erro");
      return;
    }

    if (!user.trim()) {
      mostrarAlerta("info", "Digite seu nome.", "Atenção");
      return;
    }

    if (!alturaCaminhao.trim()) {
      mostrarAlerta("info", "Digite a altura do veículo.", "Atenção");
      return;
    }

    if (!email.trim()) {
      mostrarAlerta("info", "Digite um email válido.", "Atenção");
      return;
    }

    if (!senha.trim()) {
      mostrarAlerta("info", "Digite uma senha válida.", "Atenção");
      return;
    }

    try {
      // Criar usuário do Firebase Auth
      const cred = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = cred.user.uid;

      // Atualizar documento do dispositivo
      const dispositivoRef = doc(db, "tbl_dispositivos", codigo);
      await updateDoc(dispositivoRef, {
        uid,
        nome: user,
        alturaCaminhao: parseFloat(alturaCaminhao),
        cadastrado: true,
      });

      mostrarAlerta("sucesso", "Cadastro concluído com sucesso!", "Cadastrado");

      setTimeout(() => {
        navigation.navigate("Login");
      }, 800);

    } catch (error: any) {
      console.log(error);
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        mostrarAlerta("info", "Este e-mail já está em uso.", "Atenção");
        return;
      } else if (error.message === "Firebase: Error (auth/invalid-email).") {
        mostrarAlerta("info", "E-mail inválido. Verifique o e-mail digitado.", "Atenção");
        return;
      } else if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
        mostrarAlerta("info", "Senha muito fraca. Use no mínimo 6 caracteres.", "Atenção");
        return;
     }
      else {
        mostrarAlerta("erro", "Erro ao cadastrar: " + error.message, "Erro");
      }
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
          placeholder="Ex: João Silva"
          maxLength={50}
        />

        <InputPadrao
          label="Altura do veículo"
          value={alturaCaminhao}
          onChangeText={(text) => {
            const onlyNumbers = text.replace(/\D/g, '');
            const limited = onlyNumbers.slice(0, 3);
            let formatted = limited;
            if (limited.length >= 2) {
              formatted = `${limited[0]}.${limited.slice(1)}`;
            }
            setAlturaCaminhao(formatted);
          }}
          placeholder="Ex: 3.75"
          keyboardType="decimal-pad"
          maxLength={4}
        />

        <InputPadrao
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Ex: seuemail@gmail.com"
          keyboardType="email-address"
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

      {/* ALERTA */}
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
