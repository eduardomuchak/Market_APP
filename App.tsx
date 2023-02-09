import 'react-native-gesture-handler';

import { StatusBar } from 'react-native';
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';

import Loading from './src/components/Loading';
import Routes from './src/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  const queryClient = new QueryClient();

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
