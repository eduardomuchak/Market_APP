import { Text, TouchableOpacity, View } from 'react-native';

export function CategoryCard({ categoryName }: { categoryName: string }) {
  return (
    <TouchableOpacity
      className="bg-white rounded-md flex flex-col items-center justify-center w-[120px] h-[120px] mx-1 mb-2"
      activeOpacity={0.7}
    >
      <View className="bg-category1 rounded-full w-[66px] h-[66px]" />
      <Text className="font-poppinsMedium text-xs text-labelText mt-3">
        {categoryName}
      </Text>
    </TouchableOpacity>
  );
}
