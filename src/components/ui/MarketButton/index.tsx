import { TouchableOpacityProps, TouchableOpacity, Text } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function MarketButton({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      className="bg-marketColor rounded-lg h-14 flex items-center justify-center"
      {...rest}
    >
      <Text className="text-white font-bold text-base leading-5 text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
