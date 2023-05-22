import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main';
import Login from './pages/login';
import User from './pages/character';
import SignUp from './pages/signup';
import { Name } from './pages/styles';
import Character from './pages/character';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{
          title:'LOGIN',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#272B33'
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold'
          }
        }}/>
        <Stack.Screen name="main" component={Main} options={{
          title: 'LISTA DE PERSONAGENS',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#272B33',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }}/>

        <Stack.Screen name="signup" component={SignUp} options={{
          title: 'SIGN UP',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#272B33',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }}/>
        <Stack.Screen name='character' component={Character} options={{
          title: 'DADOS DO PERSONAGEM',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#272B33'
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}