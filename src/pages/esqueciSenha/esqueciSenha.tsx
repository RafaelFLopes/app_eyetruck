import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";

import BotaoPreenchido from "../../components/botaoPreenchido/botaoPreenchido";
import CorpoFormulario from "../../components/corpoFormulario/corpoFormulario";
import InputPadrao from "../../components/inputPadrao/inputPadrao";
import HeaderTitulo from "../../components/headerTitulo/headerTitulo";
import TituloPadraoMenor from "../../components/tituloPadraoMenor/tituloPadraoMenor";
import SubTituloPadrao from "../../components/subTituloPadrao/subTituloPadrao";

import MensagemAlerta from "../../components/mensagemAlerta/mensagemAlerta";

const ImagemEsqueciSenha = require("../../../assets/images/imagemEsqueciSenha.png");

import { styles } from "./styleEsqueciSenha";

export default function EsqueciSenha() {
  const [email, setEmail] = useState<string>("");

  const navigation = useNavigation();

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

  const handlePassword = async () => {
    if (!email.trim()) {
      mostrarAlerta("info", "Digite seu e-mail para continuar.", "Atenção");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      mostrarAlerta("sucesso", "E-mail de redefinição enviado!", "Sucesso");
    } catch (error: any) {
      mostrarAlerta("erro", error.message, "Erro");
    }
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

      {/* ALERTA */}
      <MensagemAlerta
        visible={alertVisible}
        tipo={alertTipo}
        titulo={alertTitulo}
        mensagem={alertMensagem}
        onClose={() => setAlertVisible(false)}
      />

    </View>
  );
}
