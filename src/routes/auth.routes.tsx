import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { UserRegister } from '../screens/UserRegister';
import { PasswordRecovery } from '../screens/PasswordRecovery';

const AuthStack = createStackNavigator();

export const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="login" component={Login} />
    <AuthStack.Screen name="userRegister" component={UserRegister} />
    <AuthStack.Screen name="passwordRecovery" component={PasswordRecovery} />
  </AuthStack.Navigator>
);
