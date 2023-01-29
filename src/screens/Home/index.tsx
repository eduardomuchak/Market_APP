import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../contexts/auth';
import { MarketButton } from '../../components/ui/MarketButton';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Home() {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <SafeAreaView className="flex flex-1 bg-white px-6">
      <View className="flex items-end">
        <MarketButton title="Sair" onPress={handleSignOut} variant="ghost" />
      </View>
      <View className="flex items-center">
        <Text className="text-2xl">{user?.name}</Text>
      </View>
    </SafeAreaView>
  );
}
