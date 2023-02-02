import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Input } from '../../components/ui/Input';
import { MarketButton } from '../../components/ui/MarketButton';
import BottomBar from '../../components/BottomBar';
import { Checkbox } from '../../components/Checkbox';

export function RegisterProduct() {
  const [name, setName] = useState('');

  const mock = [
    {
      id: 1,
      category: 'Frutas',
    },
    {
      id: 2,
      category: 'Verduras',
    },
    {
      id: 3,
      category: 'Legumes',
    },
    {
      id: 4,
      category: 'Carnes',
    },
    {
      id: 5,
      category: 'Bebidas',
    },
    {
      id: 6,
      category: 'Laticínios',
    },
    {
      id: 7,
      category: 'Padaria',
    },
  ];

  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Cadastro de Produto" backArrow />
      <View className="w-full bg-white rounded-lg p-6 my-2 flex-1">
        <View className="flex flex-col pt-4">
          <View className="mb-3">
            <Input
              placeholder="Digite"
              label="NOME"
              onChangeText={(text) => setName(text)}
              maxLength={20}
            />
          </View>
        </View>
        <View className="mb-5 flex flex-1">
          <Text className="text-labelText font-semibold mb-4">
            SELECIONE AS CATEGORIAS:
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {mock.map((category) => {
              return (
                <Checkbox
                  key={`${category.id}-${category.category}`}
                  title={category.category}
                  checked
                />
              );
            })}
          </ScrollView>
        </View>

        <MarketButton title="Cadastrar" variant="primary" onPress={() => {}} />
      </View>
      <BottomBar />
    </View>
  );
}
