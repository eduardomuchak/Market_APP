import { Text, View } from 'react-native';

export function Header({ title }: { title: string }) {
  return (
    <View className="bg-white w-screen h-24 flex items-center justify-end pb-4 mb-4">
      <Text className="font-poppinsMedium text-base leading-6">{title}</Text>
    </View>
  );
}
