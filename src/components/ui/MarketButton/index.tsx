import { TouchableOpacityProps, TouchableOpacity, Text } from 'react-native';
import clsx from 'clsx';

interface Props extends TouchableOpacityProps {
  title: string;
  variant: 'primary' | 'outline' | 'ghost';
}

export function MarketButton({ title, variant, ...rest }: Props) {
  return (
    <TouchableOpacity
      className={clsx('rounded-lg h-14 flex items-center justify-center', {
        ['bg-marketColor']: variant === 'primary',
        ['border-2 border-marketColor']: variant === 'outline',
        ['bg-transparent']: variant === 'ghost',
      })}
      {...rest}
      activeOpacity={0.7}
    >
      <Text
        className={clsx('font-poppinsBold text-base leading-5 text-center', {
          ['text-white ']: variant === 'primary',
          ['text-marketColor']: variant === 'outline' || variant === 'ghost',
        })}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
