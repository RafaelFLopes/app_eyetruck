import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './pages/cadastro/cadastro';
import Index from './pages/login/index';
import Parear from './pages/parear/parear';
import Home from './pages/home/home';
import EditarPerfil from './pages/editarPefil/editarPerfil';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Index} options={{ title: 'Login' }}/> 
            <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/> 
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }}/> 
            <Stack.Screen name="Parear" component={Parear} options={{ title: 'Parear' }}/> 
            <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ title: 'Editar Perfil' }}/> 
        </Stack.Navigator>
    </NavigationContainer>
  );
}