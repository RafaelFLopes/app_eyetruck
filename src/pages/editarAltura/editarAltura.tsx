import { useNavigation } from '@react-navigation/native';
import { useDevice } from "../../contexts/DeviceContext"

import { StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";

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
            <View style={styles.headerEditarAltura}>
                <Text style={styles.tituloEditarAltura}>Altura do Caminhão</Text>
                <Text style={styles.subTituloEditarAltura}>Atualize caso necessário a altura do seu caminhão</Text>
            </View>
            <View style={styles.formularioEditarAltura}>
                <Text style={styles.labelFormularioEditarAltura}>Altura do Caminhão</Text>
                <TextInput
                    style={styles.inputFormularioEditarAltura}
                    placeholder="Altura em metros"
                    keyboardType="numeric"
                    value={alturaCaminhao}
                    onChangeText={setAlturaCaminhao}
                />
                <TouchableOpacity style={styles.buttonFormularioEditarAltura} onPress={updateAlturaCaminhao}>
                    <Text style={styles.textButtonFormularioEditarAltura}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerEditarAltura: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    headerEditarAltura: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 30,
    },
    tituloEditarAltura: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
    },
    subTituloEditarAltura: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
    },
    formularioEditarAltura: {
        width: '100%',
        gap: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 15,
    },
    inputFormularioEditarAltura: {
        fontSize: 16,
        height: 50,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#dbdbdbff',
    },
    labelFormularioEditarAltura: {
        fontSize: 16,
        color: '#333',
        fontWeight: 600,
    },
    buttonFormularioEditarAltura: {
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    textButtonFormularioEditarAltura: {
        color: '#f2f2f2',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
