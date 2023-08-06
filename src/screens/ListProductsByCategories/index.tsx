import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AccordionList } from '../../components/Accordion/AccordionList';
import { Header } from '../../components/Header';
import Loading from '../../components/Loading';
import { RequestError } from '../../components/RequestError';

import { fetchCategories, fetchProducts } from '../../database/database';
import { FetchCategory } from '../../interfaces/Category';
import { FetchProduct } from '../../interfaces/Product';

export function ListProductsByCategories() {
  const [allProducts, setAllProducts] = useState<FetchProduct[]>([]);
  const [allCategories, setAllCategories] = useState<FetchCategory[]>([]);
  const [productsByCategories, setProductsByCategories] = useState<any[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isErrorProducts, setIsErrorProducts] = useState(false);
  const [isErrorCategories, setIsErrorCategories] = useState(false);

  async function getAllProductsFromDB() {
    try {
      const result = await fetchProducts();
      setAllProducts(result);
    } catch (error) {
      console.log(error);
      setIsErrorProducts(true);
    } finally {
      setIsLoadingProducts(false);
    }
  }

  async function getAllCategoriesFromDB() {
    try {
      const result = await fetchCategories();
      setAllCategories(result);
    } catch (error) {
      console.log(error);
      setIsErrorCategories(true);
    } finally {
      setIsLoadingCategories(false);
    }
  }

  useEffect(() => {
    getAllProductsFromDB();
    getAllCategoriesFromDB();
    // dropTable('products');
  }, []);

  useEffect(() => {
    if (allProducts && allCategories) {
      const productsByCategories = allCategories
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((category) => {
          return {
            categoryId: category.id,
            categoryName: category.name,
            products: allProducts
              .filter((product) => {
                return JSON.parse(product.categoriesIds).some(
                  (categoryId: number) => {
                    return Number(categoryId) === Number(category.id);
                  },
                );
              })
              .map((product) => {
                return {
                  id: product.id,
                  name: product.name,
                  checked: product.checked,
                  categoriesIds: product.categoriesIds,
                };
              }),
          };
        });
      setProductsByCategories(productsByCategories);
    }
  }, [allProducts, allCategories]);

  if (
    isLoadingProducts ||
    isLoadingCategories ||
    !productsByCategories.length
  ) {
    return <Loading />;
  }

  if (isErrorProducts || isErrorCategories) {
    return <RequestError />;
  }
  return (
    <View className="flex-1">
      <Header title="Por Categoria" backArrow={true} />
      <AccordionList productsByCategories={productsByCategories} />
    </View>
  );
}
