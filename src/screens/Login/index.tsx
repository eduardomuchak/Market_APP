import { Button, View } from 'react-native';
import { useAuth } from '../../contexts/auth';

export function Login() {
  const { signIn } = useAuth();

  const handleSign = () => {
    signIn();
  };

  return (
    <View className="flex flex-1 items-center justify-center">
      <Button title="Entrar" onPress={handleSign} />
    </View>
  );
}
