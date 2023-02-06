import { Text, View } from 'react-native';

export function RequestError() {
  return (
    <View className="flex flex-1 w-screen items-center justify-center px-8">
      <Text className="font-poppinsBold text-xl mb-8">404</Text>
      <Text className="font-poppinsBold text-xl">
        Parece que houve algum erro ao buscar os dados. Tente novamente
      </Text>
    </View>
  );
}
