import { Alert, View } from 'react-native';
import { Header } from '../../components/Header';
import { AccordionList } from '../../components/Accordion/AccordionList';
import BottomBar from '../../components/BottomBar';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { RequestError } from '../../components/RequestError';
import { useQuery } from '@tanstack/react-query';

import { getAllProducts } from '../../services/Products';
import { getAllCategories } from '../../services/Category';

export function ListProductsByCategories() {
  const [productsByCategories, setProductsByCategories] = useState<any[]>([]);

  const {
    isLoading: isLoadingProducts,
    error: errorProducts,
    data: products,
  } = useQuery({ queryKey: ['products'], queryFn: getAllProducts });

  const {
    isLoading: isLoadingCategories,
    error: errorCategories,
    data: categories,
  } = useQuery({ queryKey: ['categories'], queryFn: getAllCategories });

  useEffect(() => {
    if (products && categories) {
      const productsByCategories = categories.categories.map((category) => {
        return {
          categoryId: category.id,
          categoryName: category.name,
          products: products.products.filter((product) => {
            return product.categoriesIds.some((categoryId) => {
              return categoryId === category.id;
            });
          }),
        };
      });
      setProductsByCategories(productsByCategories);
    }
  }, [products, categories]);

  if (
    isLoadingProducts ||
    isLoadingCategories ||
    !productsByCategories.length
  ) {
    return <Loading />;
  }

  if (errorProducts || errorCategories) {
    return <RequestError />;
  }
  return (
    <View className="flex-1">
      <Header title="Por Categoria" backArrow={true} />

      <AccordionList productsByCategories={productsByCategories} />
      <BottomBar />
    </View>
  );
}
