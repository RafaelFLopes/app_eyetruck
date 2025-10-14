import { useNavigation } from '@react-navigation/native';
import { useDevice } from "../../contexts/DeviceContext"
import BotaoPreenchido from '../../components/botaoPreenchido/botaoPreenchido';
import CorpoFormulario from '../../components/corpoFormulario/corpoFormulario';
import InputPadrao from '../../components/inputPadrao/inputPadrao';
import HeaderTitulo from '../../components/headerTitulo/headerTitulo';
import TituloPadraoMenor from '../../components/tituloPadraoMenor/tituloPadraoMenor';
import SubTituloPadrao from '../../components/subTituloPadrao/subTituloPadrao';

const FundoTela = require('../../../assets/images/imagemFundoEditarAltura.png');

import { Text, View, Image, ActivityIndicator, ImageBackground } from "react-native";
import { styles } from './styleEditarAltura';

const ImagemAltura = require('../../../assets/images/imagemAltura.png');

import React, { useState, useEffect } from 'react';

import { db } from '../../../FirebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export default function EditarAltura() {
    const navigation = useNavigation<any>();
    const { codigo } = useDevice();

    const [alturaCaminhao, setAlturaCaminhao] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!codigo) return; // espera código estar disponível

        const fetchData = async () => {
            try {
                const ref = doc(db, "tbl_dispositivos", codigo);
                const snapshot = await getDoc(ref);

                if (snapshot.exists()) {
                    const data = snapshot.data();
                    setAlturaCaminhao(data.alturaCaminhao?.toString() || "");
                } else {
                    alert("Dispositivo não encontrado!");
                    navigation.goBack();
                }
            } catch (error) {
                console.error("Erro ao buscar altura:", error);
                alert("Erro ao buscar altura");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [codigo]);

    const updateAlturaCaminhao = async () => {
        if (!alturaCaminhao.trim()) {
            alert("Digite uma altura válida!");
            return;
        }

        try {
            const ref = doc(db, "tbl_dispositivos", codigo);
            await updateDoc(ref, { alturaCaminhao: parseFloat(alturaCaminhao) });
            alert("Altura atualizada com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar altura:", error);
            alert("Erro ao atualizar altura");
        }
    };

    if (!codigo || loading) {
        return (
            <View style={styles.containerEditarAltura}>
                <ActivityIndicator size="large" color="#333" />
                <Text style={{ marginTop: 10 }}>Carregando...</Text>
            </View>
        );
    }

    return (

      <ImageBackground
      source={FundoTela}
      style={styles.containerEditarAltura}
      resizeMode="cover"
      >

      <CorpoFormulario>

        <View style={styles.imagemEditarAlturaFormulario}>
        <Image source={ImagemAltura} style={styles.imagemEditarAltura} resizeMode="contain" />
      </View>

        <HeaderTitulo>
        <TituloPadraoMenor title="Altura do Caminhão" />
        <SubTituloPadrao title="Atualize caso necessário a altura do seu caminhão" />
        </HeaderTitulo>
        <InputPadrao
            label="Altura do caminhão"
            value={alturaCaminhao}
            onChangeText={(text) => {
                // Remove tudo que não for número
                const onlyNumbers = text.replace(/\D/g, '');
                // Limita a 3 dígitos
                const limited = onlyNumbers.slice(0, 3);
                // Formata para X.XX
                let formatted = limited;
                if (limited.length >= 2) {
                formatted = `${limited[0]}.${limited.slice(1)}`;
                }
                setAlturaCaminhao(formatted);
            }}
            placeholder="Altura em metros"
            keyboardType="decimal-pad"
            maxLength={4}
        />
        
          <BotaoPreenchido title="Salvar" onPress={updateAlturaCaminhao} />
      </CorpoFormulario>
    </ImageBackground>
    );
}