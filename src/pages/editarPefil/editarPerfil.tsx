import { useNavigation } from '@react-navigation/native';
import { useDevice } from "../../contexts/DeviceContext";

import { Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { styles } from './styleEditarPerfil';

import React, { useState, useEffect } from 'react';

import { db, auth } from '../../../FirebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut, getAuth } from 'firebase/auth';

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
      navigation.navigate('Index');
    } catch (error: any) {
      console.log(error);
      alert('Erro ao sair: ' + error.message);
    }
  };

  return (
    <View style={styles.containerEditarPerfil}>
      <View style={styles.headerEditarPerfil}>
        <Text style={styles.tituloEditarPerfil}>Editar Perfil</Text>
        <Text style={styles.subTituloEditarPerfil}>Atualize os seus dados pessoais</Text>
      </View>

      <View style={styles.formularioEditarPerfil}>
        <Text style={styles.tituloFormularioEditarPerfil}>Editar</Text>

        <Text style={styles.labelFormularioEditarPerfil}>Nome</Text>
        <TextInput
          style={styles.inputFormularioEditarPerfil}
          placeholder="Seu Nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.labelFormularioEditarPerfil}>Email</Text>
        <TextInput
          style={styles.inputFormularioEditarPerfil}
          value={email}
          editable={false} // não editável
        />

        <TouchableOpacity
          style={styles.buttonFormularioEditarPerfil}
          onPress={updatePerfil}
        >
          <Text style={styles.textButtonFormularioEditarPerfil}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonSairConta} onPress={handleLogout}>
        <Text style={styles.textButtonSairConta}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}