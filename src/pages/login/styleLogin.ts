import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerLogin: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  tituloLogin: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  subTituloLogin: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  textoRegistrese: {
    marginTop: 10,
    textAlign: 'center',
    color: '#666',
  },
  linkRegistrese: {
    marginTop: 10,
    textAlign: 'center',
    color: '#123c52ff',
    textDecorationLine: 'underline'
  },
});

export { styles };