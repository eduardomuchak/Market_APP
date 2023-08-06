import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Input } from '../../components/ui/Input';
import { MarketButton } from '../../components/ui/MarketButton';

import Logo from '../../assets/brand/logo.svg';
import Circles from '../../assets/style/circles.svg';
import { useFirebaseAuth } from '../../contexts/useFirebaseAuth';

export function UserRegister() {
  const { navigate } = useNavigation();
  const { signUpWithEmail, isLoading } = useFirebaseAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex flex-1 bg-white">
      <Circles className="top-0 left-0" />
      <View className="flex flex-1 items-center px-6">
        <View className="mt-16 mb-14">
          <Logo />
        </View>
        <Text className="font-poppinsBold text-base">
          Cadastre sua conta para continuar
        </Text>
        <View className="mt-10 w-full">
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
          </View>
          <View className="mt-8">
            <MarketButton
              onPress={() => signUpWithEmail({ email, password })}
              title={isLoading ? 'Carregando...' : 'Cadastrar'}
              variant="primary"
            />
          </View>
          <View className="flex mx-auto mt-10">
            <Text className="font-poppinsMedium text-sm text-marketBlackText">
              Já possui uma conta?{' '}
              <Text
                className="font-poppinsMedium text-sm text-marketColor"
                onPress={() => navigate('login')}
              >
                Então faça login
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
