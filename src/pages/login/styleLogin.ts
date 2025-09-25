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
  textoRegistrese: {
    marginTop: 10,
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