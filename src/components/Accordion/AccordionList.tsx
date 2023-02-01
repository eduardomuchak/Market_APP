import { FlatList, View } from 'react-native';
import { AccordionItem } from './AccordionItem';

export function AccordionList() {
  const data = [{ id: 1, title: 'Item 1', content: 'Content 1' }];

  return (
    <View className="">
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <AccordionItem title={item.title} content={item.content} />
        )}
      />
    </View>
  );
}
