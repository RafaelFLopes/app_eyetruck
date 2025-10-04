import { useNavigation } from '@react-navigation/native';
import { useDevice } from "../../contexts/DeviceContext"
import BotaoPreenchido from '../../components/botaoPreenchido/botaoPreenchido';
import CorpoFormulario from '../../components/corpoFormulario/corpoFormulario';
import InputPadrao from '../../components/inputPadrao/inputPadrao';
import HeaderTitulo from '../../components/headerTitulo/headerTitulo';
import TituloPadraoMenor from '../../components/tituloPadraoMenor/tituloPadraoMenor';
import SubTituloPadrao from '../../components/subTituloPadrao/subTituloPadrao';

import { Text, View, Image, ActivityIndicator } from "react-native";
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

        <View style={styles.containerEditarAltura}>

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
            onChangeText={setAlturaCaminhao}
            placeholder="Altura em metros"
        />
        
          <BotaoPreenchido title="Salvar" onPress={updateAlturaCaminhao} />
      </CorpoFormulario>
    </View>
    );
}