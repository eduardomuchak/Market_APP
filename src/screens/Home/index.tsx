import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useAuth } from '../../contexts/auth';
import { MarketButton } from '../../components/ui/MarketButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../../components/BottomBar';

// import HomeSVG from '../../assets/illustrations/undraw_fall.svg';
const homeImage = require('../../assets/illustrations/undraw_fall.png');

export function Home() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  const { navigate } = useNavigation();

  return (
    <View className="flex flex-1">
      <ScrollView className="flex flex-col bg-white rounded-xl pt-8 px-6">
        <View className="flex items-end">
          <MarketButton title="Sair" onPress={handleSignOut} variant="ghost" />
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

        {/* <HomeSVG width={'100%'} height={'33%'} /> */}
        <View className="flex items-center justify-center">
          <Image source={homeImage} />
        </View>

        <Text className="font-poppinsMedium text-base leading-6 mx-auto mt-10">
          O que você deseja fazer?
        </Text>

        <View className="gap-4 mt-6 flex flex-col">
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
          <MarketButton
            title="Cadastrar item ou categoria"
            variant="primary"
            onPress={() => navigate('register')}
          />
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
}
