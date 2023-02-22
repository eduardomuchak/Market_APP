import { FlatList } from 'react-native';
import { AccordionItem } from './AccordionItem';
import { Product } from '../../services/Products/interfaces';

interface Props {
  productsByCategories: {
    categoryId: string;
    categoryName: string;
    products: Product[];
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
