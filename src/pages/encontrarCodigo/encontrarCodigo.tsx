import { useNavigation } from '@react-navigation/native';
import { Text,  TouchableOpacity, View, Image } from "react-native";
import CorpoFormulario from '../../components/corpoFormulario/corpoFormulario';
import HeaderTitulo from '../../components/headerTitulo/headerTitulo';
import TituloPadraoMenor from '../../components/tituloPadraoMenor/tituloPadraoMenor';
import SubTituloPadrao from '../../components/subTituloPadrao/subTituloPadrao';

import React, { useState } from "react"; // importar useState


import { styles } from './styleEncontrarCodigo';

//const ImagemParear = require('../../../assets/images/imagemParear.png');
const ImagemEncontarCodigo = require('../../../assets/images/imagemEncontrarCodigo.png');


export default function Parear() {
  const navigation = useNavigation<any>();


  return (
    <View style={styles.containerEncontrarCodigo}>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotaoVoltar}>{"< Voltar"}</Text>
      </TouchableOpacity>
        <Text style={styles.tituloEncontrarCodigo}>
            Encontrar Código
        </Text>
        <Text style={styles.textoEncontrarCodigo} >O dispositivo EyeTruck possui um código de 8 dígitos localizado abaixo das entradas, conforme indicado na imagem a seguir:</Text>
        <View style={styles.imagemEncontrarCodigo}>
        <Image source={ImagemEncontarCodigo} style={styles.imagemCodigo} resizeMode="contain" />
        </View>
    </View>
  );
}

