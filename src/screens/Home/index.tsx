import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import homeImage from '../../assets/illustrations/undraw_fall.png';
import { MarketButton } from '../../components/ui/MarketButton';
import { useFirebaseAuth } from '../../contexts/useFirebaseAuth';

export function Home() {
  const { navigate } = useNavigation();
  const { signOut } = useFirebaseAuth();
  return (
    <View className="flex flex-1">
      <ScrollView
        className="flex flex-col rounded-xl bg-white px-6 pt-8"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex items-end">
          <MarketButton title="Sair" onPress={signOut} variant="ghost" />
        </View>

        <View className="mx-auto flex w-[85%] flex-col">
          <View className="flex flex-col items-stretch gap-3">
            <Text className="font-poppinsMedium text-base text-marketBlackText">
              Bem vindo(a) ao
            </Text>
            <View className="flex items-end">
              <Text className="font-poppinsBold text-5xl text-marketColor">
                market
              </Text>
            </View>
          </View>
        </View>

        <View className="flex items-center justify-center">
          <Image source={homeImage} />
        </View>

        <Text className="mx-auto mt-10 font-poppinsMedium text-base leading-6">
          O que você deseja fazer?
        </Text>

        <View className="mt-6 flex flex-col gap-4">
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
    </View>
  );
}
