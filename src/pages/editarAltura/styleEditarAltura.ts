import { StyleSheet } from "react-native";

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

export { styles };