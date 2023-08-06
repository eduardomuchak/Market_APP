import { ScrollView, View } from 'react-native';
import { Header } from '../../components/Header';
import { Input } from '../../components/ui/Input';
import { MarketButton } from '../../components/ui/MarketButton';

export function Profile() {
  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Perfil" />
      <View className="my-2 w-full flex-1 rounded-lg bg-white p-6">
        <ScrollView
          className="mb-3 flex flex-col pt-4"
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
    </View>
  );
}
