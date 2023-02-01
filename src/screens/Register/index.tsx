import { Image, ScrollView, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import BottomBar from '../../components/BottomBar';
import { MarketButton } from '../../components/ui/MarketButton';
import { useNavigation } from '@react-navigation/native';

const choiceImage = require('../../assets/illustrations/undraw_choice.png');

export function Register() {
  const { navigate } = useNavigation();

  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Selecione" backArrow />
      <ScrollView
        className="flex flex-col bg-white rounded-xl px-6 py-8 flex-1 mb-4 w-full"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex items-center justify-center">
          <Image source={choiceImage} />
        </View>
        <View className="flex flex-col w-[85%] mx-auto">
          <Text className="font-poppinsMedium text-base leading-6 mx-auto mt-10">
            Selecione uma opção de tipo de cadastro
          </Text>
        </View>
        <View className="gap-4 mt-6 flex flex-col">
          <MarketButton
            title="Categoria"
            variant="primary"
            onPress={() => navigate('registerCategory')}
          />
          <MarketButton
            title="Produto"
            variant="primary"
            onPress={() => navigate('registerProduct')}
          />
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
}
