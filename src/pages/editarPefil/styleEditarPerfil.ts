import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerEditarPerfil: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  imagemEditarPerfilFormulario: {
    alignItems: "center",
  },
  imagemEditarPerfil: {
    height: 80,
  },
  grupoBotoes: {
    display: "flex",
    flexDirection: "row",
    gap: 9,
  },
  botao: {
    flex: 1,
  },
  botaoSalvar: {
    flex: 2, // botão "Salvar" ocupa o dobro do espaço
  },
  botaoSair: {
    flex: 0.5, // botão "Sair" fica menor
    backgroundColor: "#a02828ff", // cor de fundo vermelha para o botão "Sair"
  },
});

export { styles };