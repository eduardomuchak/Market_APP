import { Text, View } from 'react-native';
import { useAuth } from '../../contexts/auth';
import { Input } from '../../components/ui/Input';
import { MarketButton } from '../../components/ui/MarketButton';

import Logo from '../../assets/brand/logo.svg';
import Circles from '../../assets/style/circles.svg';

export function Login() {
  const { signIn } = useAuth();

  const handleSign = () => {
    signIn();
  };

  return (
    <View className="flex flex-1 bg-white">
      <Circles className="top-0 left-0" />
      <View className="flex flex-1 items-center px-6">
        <View className="mt-16 mb-7">
          <Logo />
        </View>
        <Text className="font-bold text-base">Entre com seu email e senha</Text>
        <View className="mt-16 w-full">
          <View className="flex flex-col gap-3">
            <View className="items-stretch">
              <Input placeholder="Email" label="EMAIL" />
            </View>
            <View className="items-stretch">
              <Input placeholder="Senha" label="SENHA" />
            </View>
          </View>
          <View className="mt-8">
            <MarketButton
              onPress={handleSign}
              title="Entrar"
              variant="primary"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
