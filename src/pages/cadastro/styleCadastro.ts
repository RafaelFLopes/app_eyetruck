import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  containerCadastro: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  headerCadastro: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  tituloCadastro: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subTituloCadastro: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },

  formularioCadastro: {
    width: '100%',
    gap: 10,
  },
  inputFormularioCadastro: {
    fontSize: 16,
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#dbdbdbff',
  },
  labelFormularioCadastro: {
    fontSize: 16,
    color: '#333',
    fontWeight: 600,
  },
  buttonFormularioCadastro: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textButtonFormularioCadastro: {
    color: '#f2f2f2',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export { styles };