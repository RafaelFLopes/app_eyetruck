import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  containerParear: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

    imagemParearFormulario: {
    alignItems: 'center',
    },
    imagemParear: {      // Diminui o tamanho da logo
    height: 100,
    },
  botaoVoltar: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    padding: 8,
  },
  textoBotaoVoltar: {
    color: '#123c52',
    fontSize: 18,
    fontWeight: 'bold',
  },

  botaoInfo: {
  position: 'absolute',
  top: 45,
  right: 25,
  zIndex: 10,
  width: 30,
  height: 30,
  borderRadius: 20,
  backgroundColor: '#123c52',
  alignItems: 'center',
  justifyContent: 'center',
},

textoBotaoInfo: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
},

});

export { styles };