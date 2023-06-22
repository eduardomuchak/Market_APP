import 'react-native-gesture-handler';

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
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/contexts/auth';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Loading from './src/components/Loading';
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

  useEffect(() => {
    initializeDatabase();
  }, []);

  if (!fontsLoaded || !dbInitialized) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
