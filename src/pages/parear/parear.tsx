import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useDevice } from "../../contexts/DeviceContext";
import BotaoPreenchido from '../../components/botaoPreenchido/botaoPreenchido';
import CorpoFormulario from '../../components/corpoFormulario/corpoFormulario';
import InputPadrao from '../../components/inputPadrao/inputPadrao';
import HeaderTitulo from '../../components/headerTitulo/headerTitulo';
import TituloPadraoMenor from '../../components/tituloPadraoMenor/tituloPadraoMenor';
import SubTituloPadrao from '../../components/subTituloPadrao/subTituloPadrao';

import React, { useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";

import { styles } from './styleParear';
import MensagemAlerta from "../../components/mensagemAlerta/mensagemAlerta";

const ImagemEncontarDispositivo = require('../../../assets/images/imagemEncontrarDispositivo.png');

export default function Parear() {
  const navigation = useNavigation<any>();
  const { setCodigo } = useDevice();

  const [inputCodigo, setInputCodigo] = useState("");

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

  const verificarDispositivo = async () => {
    if (!inputCodigo.trim()) {
      mostrarAlerta("info", "Digite o código do dispositivo!", "Atenção");
      return;
    }

    try {
      const ref = doc(db, "tbl_dispositivos", inputCodigo);
      const snapshot = await getDoc(ref);

      if (!snapshot.exists()) {
        mostrarAlerta("erro", "Dispositivo não encontrado!", "Atenção");
        return;
      }

      await setCodigo(inputCodigo);

      const dados = snapshot.data();

      if (!dados?.cadastrado) {
        navigation.navigate("Cadastro");
      } else {
        navigation.navigate("Login");
      }

    } catch (error) {
      console.error("Erro ao verificar dispositivo:", error);
      mostrarAlerta("erro", "Erro ao verificar dispositivo.", "Erro");
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
          <Image
            source={ImagemEncontarDispositivo}
            style={styles.imagemParear}
            resizeMode="contain"
          />
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
