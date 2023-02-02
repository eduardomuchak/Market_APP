import { ScrollView, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import BottomBar from '../../components/BottomBar';
import { Input } from '../../components/ui/Input';
import { MarketButton } from '../../components/ui/MarketButton';

export function Profile() {
  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Perfil" />
      <View className="w-full bg-white rounded-lg p-6 my-2 flex-1">
        <ScrollView
          className="flex flex-col pt-4 mb-3"
          showsVerticalScrollIndicator={false}
        >
          <View className="mb-5">
            <Input
              placeholder="Digite"
              label="NOME COMPLETO"
              // onChangeText={(text) => setName(text)}
              maxLength={20}
            />
          </View>
          <View className="mb-5">
            <Input
              placeholder="Digite"
              label="EMAIL"
              // onChangeText={(text) => setName(text)}
            />
          </View>
          <View className="mb-5">
            <Input
              placeholder="Digite"
              label="SENHA"
              // onChangeText={(text) => setName(text)}
              maxLength={20}
            />
          </View>
        </ScrollView>
        <MarketButton title="Concluir" variant="primary" onPress={() => {}} />
      </View>
      <BottomBar />
    </View>
  );
}
