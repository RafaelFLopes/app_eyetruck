import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDevice } from "../../contexts/DeviceContext";

import React, { useState } from "react"; // importar useState

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../FirebaseConfig"; // seu config


export default function Parear() {
  const navigation = useNavigation<any>();
  const { setCodigo } = useDevice();
  const [inputCodigo, setInputCodigo] = useState("");

  const verificarDispositivo = async () => {
    if (!inputCodigo.trim()) {
      alert("Digite o código do dispositivo!");
      return;
    }

    try {
      const ref = doc(db, "tbl_dispositivos", inputCodigo);
      const snapshot = await getDoc(ref);

      if (!snapshot.exists()) {
        alert("Dispositivo não encontrado!");
        return;
      }

      await setCodigo(inputCodigo); // salva no Context e AsyncStorage

      const dados = snapshot.data();

      if (!dados?.cadastrado) {
        navigation.navigate("Cadastro");
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Erro ao verificar dispositivo:", error);
      alert("Erro ao verificar dispositivo");
    }
  };


  return (
    <View style={styles.containerParear}>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotaoVoltar}>{"< Voltar"}</Text>
      </TouchableOpacity>

      <View style={styles.headerParear}>
        <Text style={styles.tituloParear}>Parear Dispositivo</Text>
        <Text style={styles.subTituloParear}>Digite o código de seu dispositivo </Text>
      </View>

      <View style={styles.formularioParear}>
        <Text style={styles.labelFormularioParear}>Código do dispositivo</Text>
        <TextInput
          style={styles.inputFormularioParear}
          placeholder="Código"
          value={inputCodigo}
          onChangeText={setInputCodigo}
        />


        <TouchableOpacity style={styles.buttonFormularioParear} onPress={verificarDispositivo}>
          <Text style={styles.textButtonFormularioParear}>Verificar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerParear: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  headerParear: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  tituloParear: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#333',
  },
  subTituloParear: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },

  formularioParear: {
    width: '100%',
    gap: 10,
  },
  inputFormularioParear: {
    fontSize: 16,
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#dbdbdbff',
  },
  labelFormularioParear: {
    fontSize: 16,
    color: '#333',
    fontWeight: "600",
  },
  buttonFormularioParear: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textButtonFormularioParear: {
    color: '#f2f2f2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    padding: 8,
  },
  textoBotaoVoltar: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
