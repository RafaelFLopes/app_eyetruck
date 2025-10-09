import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  containerEsqueciSenha: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

    imagemEsqueciSenhaFormulario: {
    alignItems: 'center',
    },
    imagemEsqueciSenha: {      // Diminui o tamanho da logo
    height: 130,
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
});

export { styles };