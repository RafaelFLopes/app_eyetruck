import { useNavigation } from "@react-navigation/native";
import { useDevice } from "../../contexts/DeviceContext";

import BotaoPreenchido from "../../components/botaoPreenchido/botaoPreenchido";
import CorpoFormulario from "../../components/corpoFormulario/corpoFormulario";
import InputPadrao from "../../components/inputPadrao/inputPadrao";
import HeaderTitulo from "../../components/headerTitulo/headerTitulo";
import TituloPadraoMenor from "../../components/tituloPadraoMenor/tituloPadraoMenor";
import SubTituloPadrao from "../../components/subTituloPadrao/subTituloPadrao";


import { styles } from "./styleSobreProjeto";
import { View, Text } from "react-native";

export default function SobreProjeto() {
  return (
    <View>
      <Text>Sobre o Projeto</Text>
    </View>
  );
}
