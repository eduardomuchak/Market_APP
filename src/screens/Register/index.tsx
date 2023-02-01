import { View } from 'react-native';
import { Header } from '../../components/Header';
import BottomBar from '../../components/BottomBar';

export function Register() {
  return (
    <View className="">
      <Header title="Selecione" backArrow />
      <BottomBar />
    </View>
  );
}
