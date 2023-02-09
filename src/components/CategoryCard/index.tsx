import {
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  Image,
} from 'react-native';
import { iconSwitch } from '../../utils/iconSwitch';

interface Props extends TouchableOpacityProps {
  categoryName: string;
  categoryIcon: string;
}

export function CategoryCard({ categoryName, categoryIcon, ...rest }: Props) {
  console.log('categoryIcon', categoryIcon);
  return (
    <TouchableOpacity
      className="bg-white rounded-md flex flex-col items-center justify-center w-[120px] h-[120px] mx-1 mb-2"
      activeOpacity={0.7}
      {...rest}
    >
      <View className="bg-category1 rounded-full w-[66px] h-[66px] flex items-center justify-center">
        <Image source={iconSwitch(categoryIcon)} className="w-8 h-8" />
      </View>
      <Text className="font-poppinsMedium text-xs text-labelText mt-3">
        {categoryName}
      </Text>
    </TouchableOpacity>
  );
}
