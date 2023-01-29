import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../contexts/auth';

export function Home() {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-2xl">{user?.name}</Text>
      <Button title="Sair" onPress={handleSignOut} />
    </View>
  );
}
