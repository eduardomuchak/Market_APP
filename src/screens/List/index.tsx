import { Image, ScrollView, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { MarketButton } from '../../components/ui/MarketButton';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../../components/BottomBar';

const selectionImage = require('../../assets/illustrations/undraw_selection.png');

export function List() {
  const { navigate } = useNavigation();

  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Selecione a lista" backArrow />
      <ScrollView
        className="flex flex-col bg-white rounded-xl px-6 py-8 flex-1 mb-4 w-full"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex items-center justify-center">
          <Image source={selectionImage} />
        </View>
        <View className="flex flex-col w-[85%] mx-auto">
          <Text className="font-poppinsMedium text-base leading-6 mx-auto mt-10">
            Selecione uma opção de lista para visualizar
          </Text>
        </View>
        <View className="gap-4 mt-6 flex flex-col">
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
      <BottomBar />
    </View>
  );
}
