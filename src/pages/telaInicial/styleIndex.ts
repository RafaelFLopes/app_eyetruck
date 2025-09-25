import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
logoContainer: {
  alignItems: 'center',
},
logo: {      // Diminui o tamanho da logo
  height: 250,
},
grupoBotoes: {
  width: '100%',
  gap: 10,
  marginTop: 0,     // Remove espaçamento extra
},
containerIndex: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center', // Alinha tudo no topo
  padding: 25,
},

});

export { styles };