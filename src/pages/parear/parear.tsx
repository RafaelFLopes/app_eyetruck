import { useNavigation } from '@react-navigation/native';
import { Text,  TouchableOpacity, View, Image } from "react-native";
import { useDevice } from "../../contexts/DeviceContext";
import BotaoPreenchido from '../../components/botaoPreenchido/botaoPreenchido';
import CorpoFormulario from '../../components/corpoFormulario/corpoFormulario';
import InputPadrao from '../../components/inputPadrao/inputPadrao';
import HeaderTitulo from '../../components/headerTitulo/headerTitulo';
import TituloPadraoMenor from '../../components/tituloPadraoMenor/tituloPadraoMenor';
import SubTituloPadrao from '../../components/subTituloPadrao/subTituloPadrao';

import React, { useState } from "react"; // importar useState

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../FirebaseConfig"; // seu config

import { styles } from './styleParear';

//const ImagemParear = require('../../../assets/images/imagemParear.png');
const ImagemEncontarDispositivo = require('../../../assets/images/imagemEncontrarDispositivo.png');


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

      <TouchableOpacity
        style={styles.botaoInfo}
        onPress={() => navigation.navigate("EncontrarCodigo")}
      >
        <Text style={styles.textoBotaoInfo}>i</Text>
      </TouchableOpacity>

      <CorpoFormulario>

        <View style={styles.imagemParearFormulario}>
        <Image source={ImagemEncontarDispositivo} style={styles.imagemParear} resizeMode="contain" />
      </View>

        <HeaderTitulo>
        <TituloPadraoMenor title="Encontrar Dispositivo" />
        <SubTituloPadrao title="Digite o código presente no seu dispositivo" />
        </HeaderTitulo>
        <InputPadrao
                  label="Código do dispositivo"
                  value={inputCodigo}
                  onChangeText={setInputCodigo}
        placeholder="Ex: 52200147"
        keyboardType="numeric"
        maxLength={8}
        />
        
          <BotaoPreenchido title="Verificar" onPress={verificarDispositivo} />
      </CorpoFormulario>
    </View>
  );
}

