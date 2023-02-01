import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

export function Header({
  title,
  backArrow,
}: {
  title: string;
  backArrow?: boolean;
}) {
  const { goBack } = useNavigation();
  return (
    <View className="bg-white w-screen h-24 flex items-center justify-end pb-2 mb-4 relative">
      {backArrow ? (
        <TouchableOpacity
          className="absolute left-4 bottom-2"
          activeOpacity={0.7}
          onPress={() => goBack()}
        >
          <ArrowLeft size={24} color="#f50057" />
        </TouchableOpacity>
      ) : null}
      <Text className="font-poppinsMedium text-base leading-6">{title}</Text>
    </View>
  );
}
