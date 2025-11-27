import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DeviceProvider } from "./contexts/DeviceContext";

import Cadastro from './pages/cadastro/cadastro';
import EditarPerfil from './pages/editarPefil/editarPerfil';
import Index from './pages/telaInicial/index';
import Login from './pages/login/login';
import Parear from './pages/parear/parear';
import EditarAltura from './pages/editarAltura/editarAltura';
import EsqueciSenha from './pages/esqueciSenha/esqueciSenha';
import EncontrarCodigo from './pages/encontrarCodigo/encontrarCodigo';
import SobreProjeto from './pages/sobreProjeto/sobreProjeto';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <DeviceProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Index" component={Index} options={{ title: 'Index' }} />
          <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{ title: 'EsqueciSenha' }} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
          <Stack.Screen name="Home" component={Tabs} options={{ title: 'Home' }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
          <Stack.Screen name="EncontrarCodigo" component={EncontrarCodigo} options={{ title: 'EncontrarCodigo' }} />
          <Stack.Screen name="Parear" component={Parear} options={{ title: 'Parear' }} />
          <Stack.Screen name="SobreProjeto" component={SobreProjeto} options={{ title: 'Sobre Projeto' }} />
          <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ title: 'Editar Perfil' }} />
          <Stack.Screen name="EditarAltura" component={EditarAltura} options={{ title: 'Editar Altura' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DeviceProvider>
  );
}