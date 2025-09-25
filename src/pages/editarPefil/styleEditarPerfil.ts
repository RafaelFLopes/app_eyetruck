import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerEditarPerfil: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  headerEditarPerfil: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  tituloEditarPerfil: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subTituloEditarPerfil: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  formularioEditarPerfil: {
    width: '100%',
    gap: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
  },
  inputFormularioEditarPerfil: {
    fontSize: 16,
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#dbdbdbff',
  },
  labelFormularioEditarPerfil: {
    fontSize: 16,
    color: '#333',
    fontWeight: "600",
  },
  buttonFormularioEditarPerfil: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textButtonFormularioEditarPerfil: {
    color: '#f2f2f2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tituloFormularioEditarPerfil: {
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

export { styles };