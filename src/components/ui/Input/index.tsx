import { Text, TextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  label?: string;
}

export function Input({ label, ...rest }: Props) {
  return (
    <>
      <Text className="font-bold text-sm leading-4 text-labelText">
        {label}
      </Text>
      <TextInput
        className="bg-inputBackground border-2 border-inputBorder px-5 py-2 rounded-lg h-14"
        {...rest}
      />
    </>
  );
}
