import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import BottomBar from '../../components/BottomBar';
import { Checkbox } from '../../components/Checkbox';
import { Header } from '../../components/Header';
import Loading from '../../components/Loading';
import { RequestError } from '../../components/RequestError';
import {
  fetchProducts,
  updateToggleProductCheck,
} from '../../database/database';
import { FetchProduct } from '../../interfaces/Product';

export function ListOnlyMissing() {
  const [onlyMissingProducts, setOnlyMissingProducts] = useState<
    FetchProduct[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleToggleProduct = (id: string) => {
    updateToggleProductCheck(Number(id));
    setOnlyMissingProducts((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked: item.checked === 0 ? 1 : 0,
          };
        }
        return item;
      }),
    );
  };

  async function getAllProductsFromDB() {
    try {
      const result = await fetchProducts();
      const onlyMissing = result.filter((product) => product.checked === 0);
      setOnlyMissingProducts(onlyMissing);
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

  useEffect(() => {
    getAllProductsFromDB();
  }, [onlyMissingProducts]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <RequestError />;
  }
  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Apenas itens faltantes" backArrow />
      <ScrollView
        className="flex flex-col bg-white rounded-xl px-6 py-8 flex-1 mb-4 w-full"
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-sm font-bold text-labelText leading-4">
          ITENS
        </Text>
        <View className="mt-3">
          {onlyMissingProducts.length > 0 ? (
            onlyMissingProducts
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item, index) => (
                <Checkbox
                  key={`${index}-${item}`}
                  title={item.name}
                  checked={item.checked}
                  onPress={() => handleToggleProduct(item.id)}
                />
              ))
          ) : (
            <View className="h-40 flex items-center justify-center">
              <Text className="text-xl font-poppinsBold text-marketBlackText">
                Nenhum item faltante
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
}
