import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useAuth } from '../../contexts/auth';
import { MarketButton } from '../../components/ui/MarketButton';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeSVG from '../../assets/illustrations/undraw_fall.svg';

export function Home() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <SafeAreaView className="flex flex-1">
      <ScrollView className="flex flex-col px-6 bg-white rounded-xl">
        <View className="flex items-end">
          <MarketButton title="Sair" onPress={handleSignOut} variant="ghost" />
        </View>

        <View className="flex flex-col w-[85%] mx-auto">
          <View className="flex flex-col items-stretch gap-3">
            <Text className="text-base font-medium text-marketBlackText">
              Bem vindo(a) ao
            </Text>
            <View className="flex items-end">
              <Text className="text-5xl font-bold text-marketColor">
                market
              </Text>
            </View>
          </View>
        </View>

        <HomeSVG width={'100%'} height={'48%'} />

        <Text className="font-medium text-base leading-6 mx-auto mt-10">
          O que você deseja fazer?
        </Text>

        <View className="gap-4 mt-6 flex flex-col">
          <MarketButton title="Ver listas" variant="primary" />
          <MarketButton title="Ver todas as categorias" variant="primary" />
          <MarketButton title="Cadastrar item ou categoria" variant="primary" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
