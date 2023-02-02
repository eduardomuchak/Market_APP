import { Text } from 'react-native';

export function Select({ label }: { label: string }) {
  return (
    <>
      <Text className="font-poppinsBold text-sm leading-4 text-labelText">
        {label}
      </Text>
    </>
  );
}
