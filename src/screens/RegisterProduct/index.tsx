import { Text, View } from 'react-native';
import { Header } from '../../components/Header';
import BottomBar from '../../components/BottomBar';

export function RegisterProduct() {
  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Cadastro de Produto" backArrow />
      <Text>Teste</Text>
      <BottomBar />
    </View>
  );
}
