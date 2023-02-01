import { FlatList } from 'react-native';
import { AccordionItem } from './AccordionItem';

export function AccordionList() {
  const data = [
    {
      id: 1,
      title: 'Bebidas',
      content: [
        'Content 1',
        'Content 2',
        'Content 1',
        'Content 2',
        'Content 1',
        'Content 2',
      ],
    },
    { id: 2, title: 'Comidas', content: ['Content 1', 'Content 2'] },
    { id: 3, title: 'Lanchoes', content: ['Content 1', 'Content 2'] },
    { id: 4, title: 'Limpeza', content: ['Content 1', 'Content 2'] },
  ];

  return (
    <FlatList
      className="px-2"
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <AccordionItem title={item.title} content={item.content} />
      )}
    />
  );
}
