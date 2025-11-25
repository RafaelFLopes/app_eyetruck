import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.53)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: '82%',
    backgroundColor: '#f2f2f2',
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 10,

    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  // Bordas coloridas (lado esquerdo)
  cardSucesso: {
    borderLeftWidth: 6,
    borderLeftColor: '#2ecc71',
  },

  cardErro: {
    borderLeftWidth: 6,
    borderLeftColor: '#e74c3c',
  },

  cardInfo: {
    borderLeftWidth: 6,
    borderLeftColor: '#123c52ff',
  },

  titulo: {
    fontSize: 22,
    color: '#123c52',
    fontWeight: 'bold',
    marginBottom: 6,
  },

  mensagem: {
    fontSize: 18,
    color: '#123c52',
    lineHeight: 22,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#123c52ff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#f2f2f2',
    fontWeight: 'bold',
    fontSize: 16,
  },

});
