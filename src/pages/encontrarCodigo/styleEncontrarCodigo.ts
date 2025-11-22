import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerEncontrarCodigo: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    paddingTop: 90,
    padding: 25,
  },

  imagemEncontrarCodigo: {
    alignItems: "center",
    paddingTop: 25,
  },
  imagemCodigo: {
    width: "100%", // ocupa a largura disponível sem estourar
    height: undefined, // mantém proporção automaticamente
    aspectRatio: 1,
    borderWidth: 4, // borda
    borderColor: "#123c52", // cor da borda
    borderRadius: 20, // arredondamento
    resizeMode: "contain", // garante que não estoura o tamanho
  },
  tituloEncontrarCodigo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#123c52",
    marginBottom: 10,
  },
  textoEncontrarCodigo: {
    fontSize: 18,
    color: "#666",
    textAlign: "justify",
  },

  botaoVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
    padding: 8,
  },

  textoBotaoVoltar: {
    color: "#123c52",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export { styles };
