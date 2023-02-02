import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';
import { Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../../components/ui/Input';
import { MarketButton } from '../../components/ui/MarketButton';

import * as AuthSession from 'expo-auth-session';
import Logo from '../../assets/brand/logo.svg';
import Circles from '../../assets/style/circles.svg';
import { GoogleLogo } from 'phosphor-react-native';
import { supabase, supabaseConfig } from '../../lib/supabase';

export function Login() {
  const { navigate } = useNavigation();
  const { signIn, signInWithGoogle } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleGoogleLogin() {
    const proxyRedirectUri = AuthSession.makeRedirectUri({ useProxy: true });
    const redirectUri = AuthSession.makeRedirectUri({ useProxy: false });
    const provider = 'google';

    const response = await AuthSession.startAsync({
      authUrl: `${supabaseConfig.url}/auth/v1/authorize?provider=${provider}&redirect_to=${proxyRedirectUri}`,
      returnUrl: redirectUri,
    });

    if (response.type !== 'success') return;

    const { data } = await supabase.auth.signInWithOAuth({
      provider: provider,
    });
    console.log('data', data);
  }

  return (
    <View className="flex flex-1 bg-white">
      <Circles className="top-0 left-0" />
      <View className="flex flex-1 items-center px-6">
        <View className="mb-9">
          <Logo />
        </View>
        <Text className="font-poppinsBold text-base">
          Entre com seu email e senha
        </Text>
        <View className="mt-6 w-full">
          <View className="flex flex-col gap-3">
            <View className="items-stretch">
              <Input
                placeholder="Email"
                label="EMAIL"
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize={'none'}
                inlineImageLeft="email"
              />
            </View>
            <View className="items-stretch">
              <Input
                placeholder="Senha"
                label="SENHA"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                autoCapitalize={'none'}
                inlineImageLeft="password"
              />
            </View>
            <Text className="font-poppinsMedium text-xs text-marketBlackText">
              Esqueceu a senha?{' '}
              <Text
                className="font-poppinsMedium text-xs text-marketColor"
                onPress={() => navigate('passwordRecovery')}
              >
                Recupere aqui
              </Text>
            </Text>
          </View>
          <View className="mt-6">
            <MarketButton
              onPress={() => signIn({ email, password })}
              title="Entrar"
              variant="primary"
            />
          </View>
          <View className="flex mx-auto mt-8">
            <Text className="font-poppinsMedium text-sm text-marketBlackText">
              Não tem uma conta?{' '}
              <Text
                className="font-poppinsMedium text-sm text-marketColor"
                onPress={() => navigate('userRegister')}
              >
                Cadastre-se
              </Text>
            </Text>
          </View>
          <View className="flex flex-row mt-12 items-center justify-center px-10">
            <View className="border-2 rounded-full border-marketColor w-1/4 mr-2" />
            <Text className="font-poppinsBold text-sm text-marketBlackText">
              Ou entre com sua conta do Google:
            </Text>
            <View className="border-2 rounded-full border-marketColor w-1/4 ml-2" />
          </View>
          <TouchableOpacity
            className="flex flex-row mx-auto mt-8 items-center justify-center border-2 rounded-full p-4 border-marketColor"
            activeOpacity={0.7}
            onPress={() => handleGoogleLogin()}
          >
            <GoogleLogo size={24} color="#f50057" weight="bold" />
            <Text className="font-poppinsSemibold text-sm text-marketBlackText ml-2">
              Entre com Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
