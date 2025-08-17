import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EditarPerfil from './pages/editarPefil/editarPerfil';
import Home from './pages/home/home';
import EditarAltura from './pages/editarAltura/editarAltura';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#333',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 0,
          height: 80,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName: string = '';
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'EditarPerfil') {
            iconName = focused ? 'person' : 'person-outline';
          }
           else if (route.name === 'EditarAltura') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName as any} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Início' }}
      />
      <Tab.Screen
        name="EditarAltura"
        component={EditarAltura}
        options={{ tabBarLabel: 'Altura' }}
      />
      <Tab.Screen
        name="EditarPerfil"
        component={EditarPerfil}
        options={{ tabBarLabel: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}