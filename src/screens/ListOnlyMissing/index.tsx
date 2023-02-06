import { Alert, ScrollView, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Checkbox } from '../../components/Checkbox';
import BottomBar from '../../components/BottomBar';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Product } from '../../services/Products/interfaces';
import {
  getAllProducts,
  updateToggleCheckedProduct,
} from '../../services/Products';
import Loading from '../../components/Loading';
import { RequestError } from '../../components/RequestError';

export function ListOnlyMissing() {
  const queryClient = useQueryClient();
  const [onlyMissingProducts, setOnlyMissingProducts] = useState<Product[]>([]);

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ['products'], queryFn: getAllProducts });

  const toggleCheckedProduct = useMutation({
    mutationFn: updateToggleCheckedProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const handleToggleProduct = (id: string) => {
    toggleCheckedProduct.mutate(id);
  };

  useEffect(() => {
    if (products) {
      const onlyMissing = products.products.filter(
        (product) => product.checked === false,
      );
      setOnlyMissingProducts(onlyMissing);
    }
  }, [products]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
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
