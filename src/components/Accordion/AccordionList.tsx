import { FlatList } from 'react-native';
import { AccordionItem } from './AccordionItem';

interface Props {
  productsByCategories: {
    categoryId: string;
    categoryName: string;
    products: {
      id: string;
      name: string;
      checked: boolean;
      categoriesIds: string[];
    }[];
  }[];
}

export function AccordionList({ productsByCategories }: Props) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      className="px-2"
      data={productsByCategories}
      keyExtractor={(item) => String(item.categoryId)}
      renderItem={({ item }) => (
        <AccordionItem title={item.categoryName} content={item.products} />
      )}
    />
  );
}
