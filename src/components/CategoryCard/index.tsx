import {
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  categoryName: string;
}

export function CategoryCard({ categoryName, ...rest }: Props) {
  return (
    <TouchableOpacity
      className="bg-white rounded-md flex flex-col items-center justify-center w-[120px] h-[120px] mx-1 mb-2"
      activeOpacity={0.7}
      {...rest}
    >
      <View className="bg-category1 rounded-full w-[66px] h-[66px]" />
      <Text className="font-poppinsMedium text-xs text-labelText mt-3">
        {categoryName}
      </Text>
    </TouchableOpacity>
  );
}
