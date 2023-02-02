import { Alert, Text, View } from 'react-native';
import { Input } from '../../components/ui/Input';
import { MarketButton } from '../../components/ui/MarketButton';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

import Logo from '../../assets/brand/logo.svg';
import Circles from '../../assets/style/circles.svg';

export function PasswordRecovery() {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      Alert.alert('Erro', error.message);
    } else {
      console.log(data);
      Alert.alert('Sucesso', 'Verifique seu email para redefinir sua senha');
    }
  };

  return (
    <View className="flex flex-1 bg-white">
      <Circles className="top-0 left-0" />
      <View className="flex flex-1 items-center px-6">
        <View className="mt-16 mb-14">
          <Logo />
        </View>
        <Text className="font-poppinsBold text-base">
          Digite o email cadastrado para recuperar sua senha
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
          </View>
          <View className="mt-8">
            <MarketButton
              onPress={handlePasswordRecovery}
              title="Recuperar senha"
              variant="primary"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
