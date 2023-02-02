import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from '../../components/Header';
import { Input } from '../../components/ui/Input';
import { PreviewCard } from '../../components/PreviewCard';
import { MarketButton } from '../../components/ui/MarketButton';
import BottomBar from '../../components/BottomBar';

export function RegisterCategory() {
  const [name, setName] = useState('');

  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Cadastro de Categoria" backArrow />
      <ScrollView
        className="w-full bg-white rounded-lg p-6 my-2 flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-col pt-4 pb-7">
          <View className="mb-3">
            <Input
              placeholder="Digite"
              label="NOME"
              onChangeText={(text) => setName(text)}
              maxLength={20}
            />
          </View>
          <Input placeholder="Opção 1" label="ÍCONE" />
        </View>
        <PreviewCard name={name} />
        <MarketButton title="Cadastrar" variant="primary" onPress={() => {}} />
      </ScrollView>
      <BottomBar />
    </View>
  );
}
