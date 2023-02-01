import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/Header';
import BottomBar from '../../components/BottomBar';
import { Input } from '../../components/ui/Input';

export function RegisterCategory() {
  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Cadastro de Categoria" backArrow />
      <ScrollView
        className="gap-4 w-full bg-white rounded-lg px-6 my-2 flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-col pt-4 pb-7">
          <View className="mb-3">
            <Input placeholder="Digite" label="NOME" />
          </View>
          <Input placeholder="Opção 1" label="ÍCONE" />
        </View>
        <Text className="font-poppinsBold text-md leading-4 text-marketBlackText">
          PREVIEW:
        </Text>
        <TouchableOpacity
          className="bg-white rounded-md flex flex-col items-center justify-center border-2 border-category1 py-10"
          activeOpacity={0.7}
        >
          <View className="bg-category1 rounded-full w-52 h-52" />
          <Text className="font-poppinsSemibold text-2xl text-labelText mt-3">
            BEBIDAS
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomBar />
    </View>
  );
}
