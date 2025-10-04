import { useNavigation } from "@react-navigation/native";
import { useDevice } from "../../contexts/DeviceContext";

import BotaoPreenchido from "../../components/botaoPreenchido/botaoPreenchido";
import CorpoFormulario from "../../components/corpoFormulario/corpoFormulario";
import InputPadrao from "../../components/inputPadrao/inputPadrao";
import HeaderTitulo from "../../components/headerTitulo/headerTitulo";
import TituloPadraoMenor from "../../components/tituloPadraoMenor/tituloPadraoMenor";
import SubTituloPadrao from "../../components/subTituloPadrao/subTituloPadrao";

const ImagemEditarPerfil = require("../../../assets/images/imagemEditarPerfil.png");

import { Text, Image, View, ActivityIndicator } from "react-native";
import { styles } from "./styleEditarPerfil";

import React, { useState, useEffect } from "react";

import { db, auth } from "../../../FirebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";

export default function EditarPerfil() {
  const navigation = useNavigation<any>();
  const { codigo } = useDevice(); // Pegando o código do dispositivo (mesma lógica)

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!codigo) return;

    async function fetchData() {
      try {
        // Pega o usuário logado do Authentication
        const user = auth.currentUser;
        if (user) {
          setEmail(user.email || ""); // email do auth
        }

        // Busca o nome no Firestore
        const docRef = doc(db, "tbl_dispositivos", codigo);
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          const data = snapshot.data();
          setNome(data.nome || "");
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false); // libera a tela mesmo com erro
      }
    }

    fetchData();
  }, [codigo]);

  const updatePerfil = async () => {
    if (!nome.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const ref = doc(db, "tbl_dispositivos", codigo);
      await updateDoc(ref, { nome });
      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Erro ao atualizar perfil");
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

  // Função para sair da conta
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Index");
    } catch (error: any) {
      console.log(error);
      alert("Erro ao sair: " + error.message);
    }
  };

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
        <InputPadrao
          label="Email"
          value={email}
          editable={false} // não editável
          placeholder="Altura em metros"
          onChangeText={() => {}}
        />
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
    </View>
  );
}
