import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { iconSwitch } from '../../utils/iconSwitch';

export function PreviewCard({ name, icon }: { name: string; icon: string }) {
  const [selectedIcon, setSelectedIcon] = useState('');

  return (
    <View className="flex items-center justify-center flex-col flex-1 mb-5">
      <Text className="font-poppinsBold text-md leading-4 text-marketBlackText self-start mb-5">
        PREVIEW:
      </Text>
      <TouchableOpacity
        className="bg-white rounded-md flex flex-col items-center justify-center border-2 border-category1 py-10 w-full"
        activeOpacity={0.7}
      >
        <View className="bg-category1 rounded-full w-40 h-40 flex items-center justify-center">
          <Image source={iconSwitch(icon)} className="w-24 h-24" />
        </View>
        <Text className="font-poppinsSemibold text-2xl text-labelText mt-3">
          {name || 'NOME DA CATEGORIA'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
