import { ScrollView, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Checkbox } from '../../components/Checkbox';
import BottomBar from '../../components/BottomBar';

export function ListOnlyMissing() {
  const data = [
    {
      id: 1,
      content: 'Água com Gás',
    },
    {
      id: 2,
      content: 'Coca Zero',
    },
  ];
  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Completa" backArrow />
      <ScrollView className="flex flex-col bg-white rounded-xl px-6 py-8 flex-1 mb-4 w-full">
        <Text className="text-sm font-bold text-labelText leading-4">
          ITENS
        </Text>
        <View className="mt-3">
          {data
            .sort((a, b) => a.content.localeCompare(b.content))
            .map((item, index) => (
              <Checkbox
                key={`${index}-${item}`}
                title={item.content}
                checked={false}
                onPress={() => {}}
              />
            ))}
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
}
