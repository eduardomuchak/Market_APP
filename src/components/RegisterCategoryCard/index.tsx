import { Plus } from 'phosphor-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

export function RegisterCategoryCard() {
  return (
    <TouchableOpacity
      className="bg-transparent border-2 border-marketColor border-dashed rounded-md flex flex-col items-center justify-center w-[120px] h-[120px] mx-1 mb-2"
      activeOpacity={0.4}
    >
      <View className="bg-transparent rounded-full w-[66px] h-[66px] flex items-center justify-center border-2 border-marketColor">
        <Plus size={40} color="#F50057" weight="fill" />
      </View>
      <Text className="font-poppinsMedium text-xs text-marketColor mt-3">
        Cadastrar
      </Text>
    </TouchableOpacity>
  );
}
