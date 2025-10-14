import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardAzul: {
  width: '48%', // metade da tela menos margem
  backgroundColor: "#123c5227",
  borderRadius: 10,
  padding: 20,
  alignItems: "center",
  justifyContent: "center",
  boxShadow: '1px 3px 4px #00000028',
},
  textCardAzul: {
    fontSize: 14,
    color: "#5d5d5d",
    textAlign: "center",
    marginTop: 8, // espaço entre a imagem e o texto
  },
  imageCardAzul: {
    width: 55,
    height: 55,
  },
});