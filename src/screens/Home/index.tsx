import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import homeImage from '../../assets/illustrations/undraw_fall.png';
import BottomBar from '../../components/BottomBar';
import { MarketButton } from '../../components/ui/MarketButton';
import { useFirebaseAuth } from '../../contexts/useFirebaseAuth';

export function Home() {
  const { navigate } = useNavigation();
  const { signOut } = useFirebaseAuth();
  return (
    <View className="flex flex-1">
      <ScrollView
        className="flex flex-col bg-white rounded-xl pt-8 px-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex items-end">
          <MarketButton title="Sair" onPress={signOut} variant="ghost" />
        </View>

        <View className="flex flex-col w-[85%] mx-auto">
          <View className="flex flex-col items-stretch gap-3">
            <Text className="text-base font-poppinsMedium text-marketBlackText">
              Bem vindo(a) ao
            </Text>
            <View className="flex items-end">
              <Text className="text-5xl font-poppinsBold text-marketColor">
                market
              </Text>
            </View>
          </View>
        </View>

        <View className="flex items-center justify-center">
          <Image source={homeImage} />
        </View>

        <Text className="font-poppinsMedium text-base leading-6 mx-auto mt-10">
          O que você deseja fazer?
        </Text>

        <View className="gap-4 mt-6 flex flex-col">
          <MarketButton
            title="Cadastrar item ou categoria"
            variant="primary"
            onPress={() => navigate('register')}
          />
          <MarketButton
            title="Ver listas"
            variant="primary"
            onPress={() => navigate('list')}
          />
          <MarketButton
            title="Ver todas as categorias"
            variant="primary"
            onPress={() => navigate('categories')}
          />
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
}
