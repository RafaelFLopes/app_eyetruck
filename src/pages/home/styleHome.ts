import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logoLetrasCinza: {
    width: 170,
    height: 21,
  },
  headerHome: {
    width: '100%',
  },
  logoAzulClaro: {
    height: 70,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    gap: 15,
  },
  tituloCard: {
    justifyContent: 'flex-start',
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 17,
  },
  altura: {
    color: "#91b5c9",
    fontSize: 55,
    fontWeight: 800,
    marginTop: -15,
    marginBottom: -5,
    fontStyle: "italic", // deixa o texto em itálico
  },
  cardItem: {
    flex: 1, // Faz cada item ocupar metade do card
    alignItems: "center",
    justifyContent: "center",
  },
  grupoCardsAzuis: {
    flexDirection: 'row', // coloca lado a lado
    justifyContent: 'space-between', // espaçamento entre os cards
    width: '100%',
    gap: 10, // funciona em RN 0.71+ para espaçamento entre itens
  },

});

export { styles };
