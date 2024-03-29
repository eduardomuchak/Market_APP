import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Checkbox } from '../../components/Checkbox';
import { Header } from '../../components/Header';

import Loading from '../../components/Loading';
import { RequestError } from '../../components/RequestError';
import {
  fetchProducts,
  updateToggleProductCheck,
} from '../../database/database';
import { FetchProduct } from '../../interfaces/Product';

export function ListComplete() {
  const [allProducts, setAllProducts] = useState<FetchProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleToggleProduct = (id: string) => {
    setAllProducts((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      }),
    );
    updateToggleProductCheck(Number(id));
  };

  async function getAllProductsFromDB() {
    try {
      const result = await fetchProducts();
      setAllProducts(result);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllProductsFromDB();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <RequestError />;
  }

  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Completa" backArrow />
      <View className="mb-4 flex w-full flex-1 flex-col rounded-xl bg-white px-6 py-8">
        <Text className="text-sm font-bold leading-4 text-labelText">
          ITENS
        </Text>
        <ScrollView className="mt-3" showsVerticalScrollIndicator={false}>
          {allProducts
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item, index) => (
              <Checkbox
                key={`${index}-${item}`}
                title={item.name}
                checked={item.checked}
                onPress={() => handleToggleProduct(item.id)}
              />
            ))}
        </ScrollView>
      </View>
    </View>
  );
}
