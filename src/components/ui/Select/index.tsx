import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';

export function Select({
  label,
  selected,
  setSelected,
  options,
}: {
  label: string;
  selected: string;
  setSelected: (value: string) => void;
  options: string[];
}) {
  return (
    <>
      <Text className="font-poppinsBold text-sm leading-4 text-labelText">
        {label}
      </Text>
      <View className="bg-inputBackground border-2 border-inputBorder px-5 py-2 rounded-lg h-14 relative">
        <Picker
          selectedValue={selected}
          onValueChange={(itemValue) => setSelected(itemValue)}
          style={{
            position: 'absolute',
            left: 10,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        >
          {options.length ? (
            options.map((option) => (
              <Picker.Item
                label={option}
                value={option}
                style={{
                  fontFamily: 'Poppins_600SemiBold',
                  fontSize: 14,
                  lineHeight: 24,
                  color: '#333333',
                }}
              />
            ))
          ) : (
            <Picker.Item label="Nenhuma opção" value="Nenhuma opção" />
          )}
        </Picker>
      </View>
    </>
  );
}
