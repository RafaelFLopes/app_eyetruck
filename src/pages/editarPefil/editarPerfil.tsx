import { useNavigation } from "@react-navigation/native";
import { useDevice } from "../../contexts/DeviceContext";

import BotaoPreenchido from "../../components/botaoPreenchido/botaoPreenchido";
import CorpoFormulario from "../../components/corpoFormulario/corpoFormulario";
import InputPadrao from "../../components/inputPadrao/inputPadrao";
import HeaderTitulo from "../../components/headerTitulo/headerTitulo";
import TituloPadraoMenor from "../../components/tituloPadraoMenor/tituloPadraoMenor";
import SubTituloPadrao from "../../components/subTituloPadrao/subTituloPadrao";

import MensagemAlerta from "../../components/mensagemAlerta/mensagemAlerta";

const ImagemEditarPerfil = require("../../../assets/images/imagemEditarPerfil.png");

import { Text, Image, View, ActivityIndicator } from "react-native";
import { styles } from "./styleEditarPerfil";

import React, { useState, useEffect } from "react";

import { db, auth } from "../../../FirebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";

export default function EditarPerfil() {
  const navigation = useNavigation<any>();
  const { codigo, limparCodigo } = useDevice();

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(true);

  // ---- ALERTA GLOBAL DO EDITAR PERFIL ----
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
  // ----------------------------------------

  useEffect(() => {
    if (!codigo) return;

    async function fetchData() {
      try {
        const user = auth.currentUser;
        if (user) {
          setEmail(user.email || "");
        }

        const docRef = doc(db, "tbl_dispositivos", codigo);
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          const data = snapshot.data();
          setNome(data.nome || "");
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        mostrarAlerta("erro", "Erro ao carregar seus dados.", "Erro");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [codigo]);

  const updatePerfil = async () => {
    if (!nome.trim()) {
      mostrarAlerta("info", "Preencha todos os campos!", "Atenção");
      return;
    }

    try {
      const ref = doc(db, "tbl_dispositivos", codigo);
      await updateDoc(ref, { nome });

      mostrarAlerta("sucesso", "Perfil atualizado com sucesso!", "Atualizado");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      mostrarAlerta("erro", "Não foi possível atualizar seu perfil.", "Erro");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await limparCodigo();
      navigation.navigate("Index");
    } catch (error: any) {
      console.log(error);
      mostrarAlerta("erro", "Erro ao sair: " + error.message, "Erro");
    }
  };

  if (!codigo || loading) {
    return (
      <View style={styles.containerEditarPerfil}>
        <ActivityIndicator size="large" color="#333" />
        <Text style={{ marginTop: 10 }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.containerEditarPerfil}>
      <CorpoFormulario>
        <View style={styles.imagemEditarPerfilFormulario}>
          <Image
            source={ImagemEditarPerfil}
            style={styles.imagemEditarPerfil}
            resizeMode="contain"
          />
        </View>

        <HeaderTitulo>
          <TituloPadraoMenor title="Editar Perfil" />
          <SubTituloPadrao title="Atualize caso necessário as suas informações pessoais" />
        </HeaderTitulo>

        <InputPadrao
          label="Nome"
          value={nome}
          onChangeText={setNome}
          placeholder="Seu nome"
        />

        <InputPadrao label="Email" 
        value={email} 
        editable={false} // não editável 
        placeholder="Email" 
        onChangeText={() => {}} />

        <View style={styles.grupoBotoes}>
          <BotaoPreenchido
            title="Salvar"
            onPress={updatePerfil}
            style={[styles.botao, styles.botaoSalvar]}
          />
          <BotaoPreenchido
            title="Sair"
            onPress={handleLogout}
            style={[styles.botao, styles.botaoSair]}
          />
        </View>
      </CorpoFormulario>

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
