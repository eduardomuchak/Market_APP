import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { MarketButton } from '../../components/ui/MarketButton';

const selectionImage = require('../../assets/illustrations/undraw_selection.png');

export function List() {
  const { navigate } = useNavigation();

  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Selecione a lista" backArrow />
      <ScrollView
        className="mb-4 flex w-full flex-1 flex-col rounded-xl bg-white px-6 py-8"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex items-center justify-center">
          <Image source={selectionImage} />
        </View>
        <View className="mx-auto flex w-[85%] flex-col">
          <Text className="mx-auto mt-10 font-poppinsMedium text-base leading-6">
            Selecione uma opção de lista para visualizar
          </Text>
        </View>
        <View className="mt-6 flex flex-col gap-4">
          <MarketButton
            title="Apenas itens faltantes"
            variant="primary"
            onPress={() => navigate('listOnlyMissing')}
          />
          <MarketButton
            title="Completa"
            variant="primary"
            onPress={() => navigate('listComplete')}
          />
          <MarketButton
            title="Por categorias"
            variant="primary"
            onPress={() => navigate('listByCategories')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
