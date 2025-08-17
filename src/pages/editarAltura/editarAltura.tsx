import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function EditarAltura() {

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
                    placeholder="Altura"
                />
                <TouchableOpacity style={styles.buttonFormularioEditarAltura} >
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
    tituloFormularioEditarAltura: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 15,
    },
    buttonSairConta: {
        width: '100%',
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    textButtonSairConta: {
        color: '#f2f2f2',
        fontSize: 16,
        fontWeight: 'bold',
    },
});