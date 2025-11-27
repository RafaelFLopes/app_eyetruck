import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import HeaderTitulo from "../../components/headerTitulo/headerTitulo";
import TituloPadraoMenor from "../../components/tituloPadraoMenor/tituloPadraoMenor";
import SubTituloPadrao from "../../components/subTituloPadrao/subTituloPadrao";

import { styles } from "./styleSobreProjeto";

export default function SobreProjeto() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.containerSobreProjeto}>
 
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotaoVoltar}>{"< Voltar"}</Text>
      </TouchableOpacity>

      <ScrollView 
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >

      <HeaderTitulo>
        <TituloPadraoMenor title="Sobre o Eyetruck" />
        <SubTituloPadrao title="Um Sistema de Prevenção de Colisão" />
      </HeaderTitulo>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>O que é o EyeTruck?</Text>
          <Text style={styles.cardTexto}>
            O EyeTruck é um sistema embarcado de prevenção de colisões para 
            caminhões que combina visão computacional, IoT e um aplicativo móvel.
            Ele reconhece placas R-15, extrai o valor de altura máxima permitida 
            e compara automaticamente com a altura cadastrada do caminhão.
          </Text>
        </View>

        <Text style={styles.tituloSecao}>Problema</Text>
        <Text style={styles.textoSecao}>
          Caminhões frequentemente ficam presos em viadutos e pontes devido à 
          desatenção, falta de familiaridade com o trajeto e ausência de controle 
          ativo em tempo real. Isso causa bloqueios, prejuízos e risco à vida.
        </Text>

        <Text style={styles.tituloSecao}>Solução Proposta</Text>
        <Text style={styles.textoSecao}>
          O sistema detecta a placa de altura, identifica o limite e alerta o 
          motorista antes que a colisão aconteça, servindo como uma camada extra 
          de segurança viária.
        </Text>

        <Text style={styles.tituloSecao}>Tecnologias Utilizadas</Text>
        <Text style={styles.textoSecao}>
          • React Native + Expo para o aplicativo móvel{"\n"}
          • Firebase para autenticação e banco de dados{"\n"}
          • Raspberry Pi para o hardware embarcado{"\n"}
          • YOLO + Ultralytics para detecção das placas{"\n"}
          • EasyOCR para extração do valor numérico{"\n"}
        </Text>

        <Text style={styles.tituloSecao}>Funcionamento Resumido</Text>
        <Text style={styles.textoSecao}>
          O dispositivo detecta a placa, extrai o valor, consulta a altura do 
          caminhão salva no app e emite um alerta caso ultrapasse o limite.
        </Text>

      </ScrollView>
    </View>
  );
}
