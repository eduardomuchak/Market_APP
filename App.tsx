import 'expo-dev-client';
import * as SystemUI from 'expo-system-ui';
import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';

import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
  useFonts,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import Loading from './src/components/Loading';
import { FirebaseAuthProvider } from './src/contexts/useFirebaseAuth';
import { init } from './src/database/database';
import Routes from './src/routes';

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  const queryClient = new QueryClient();

  async function initializeDatabase() {
    try {
      await init();
    } catch (error) {
      setDbInitialized(false);
      console.log(error);
    } finally {
      setDbInitialized(true);
    }
  }

  async function SetBackgroundColor() {
    await SystemUI.setBackgroundColorAsync('#F50057');
  }

  useEffect(() => {
    initializeDatabase();
    SetBackgroundColor();
  }, []);

  if (!fontsLoaded || !dbInitialized) {
    return <Loading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <FirebaseAuthProvider>
          <StatusBar style="dark" />
          <Routes />
        </FirebaseAuthProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
