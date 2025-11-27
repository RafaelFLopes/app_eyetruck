import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerSobreProjeto: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  botaoVoltar: {
    top: 10,
    padding: 8,
    zIndex: 20,
  },
  textoBotaoVoltar: {
    color: '#123c52',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollArea: {
    width: '100%',
    marginTop: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#123c52',
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
  },
  cardTitulo: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  cardTexto: {
    color: '#c9d9e2',
    fontSize: 15,
    lineHeight: 20,
  },

  tituloSecao: {
    fontSize: 20,
    fontWeight: '700',
    color: '#123c52',
    marginBottom: 6,
    
  },

  textoSecao: {
    fontSize: 16,
    color: '#3f5059',
    marginBottom: 18,
    lineHeight: 22,
    textAlign: "justify",
  },
});

export { styles };
