import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../FirebaseConfig"; // usa seu arquivo de configuração

import BotaoPreenchido from "../../components/botaoPreenchido/botaoPreenchido";
import CorpoFormulario from "../../components/corpoFormulario/corpoFormulario";
import InputPadrao from "../../components/inputPadrao/inputPadrao";
import HeaderTitulo from "../../components/headerTitulo/headerTitulo";
import TituloPadraoMenor from "../../components/tituloPadraoMenor/tituloPadraoMenor";
import SubTituloPadrao from "../../components/subTituloPadrao/subTituloPadrao";

const ImagemEsqueciSenha = require("../../../assets/images/imagemEsqueciSenha.png");

import { styles } from "./styleEsqueciSenha";

export default function EsqueciSenha() {
  const [email, setEmail] = useState<string>("");
  const navigation = useNavigation();

  const handlePassword = async () => {
    await sendPasswordResetEmail(auth, email)
      .then(() => alert("E-mail de redefinição de senha enviado"))
      .catch((error: any) => alert("Erro: " + error.message));
  };
  return (
    <View style={styles.containerEsqueciSenha}>
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotaoVoltar}>{"< Voltar"}</Text>
      </TouchableOpacity>

      <CorpoFormulario>
        <View style={styles.imagemEsqueciSenhaFormulario}>
          <Image
            source={ImagemEsqueciSenha}
            style={styles.imagemEsqueciSenha}
            resizeMode="contain"
          />
        </View>

        <HeaderTitulo>
          <TituloPadraoMenor title="Redefinir Senha" />
          <SubTituloPadrao title="Digite seu email para redefinir sua senha" />
        </HeaderTitulo>
        <InputPadrao
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Ex: seuemail@gmail.com"
          keyboardType="email-address"
          maxLength={60}
        />

        <BotaoPreenchido title="Enviar email" onPress={handlePassword} />
      </CorpoFormulario>
    </View>
  );
}
