import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  headerLogin: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  tituloLogin: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subTituloLogin: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },

  formularioLogin: {
    width: '100%',
    gap: 10,
  },
  inputFormularioLogin: {
    fontSize: 16,
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#dbdbdbff',
  },
  labelFormularioLogin: {
    fontSize: 16,
    color: '#333',
    fontWeight: 600,
  },
  buttonFormularioLogin: {
    backgroundColor: '#2e4e8aff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textButtonFormularioLogin: {
    color: '#f2f2f2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoRegistrese: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
  },
  linkRegistrese: {
    marginTop: 20,
    textAlign: 'center',
    color: '#1b1b1bff',
    textDecorationLine: 'underline'
  },
});

export { styles };