import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Checkbox } from '../../components/Checkbox';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../services/Products';

import BottomBar from '../../components/BottomBar';
import Loading from '../../components/Loading';
import { Product } from '../../services/Products/interfaces';

export function ListComplete() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ['allProducts'], queryFn: getAllProducts });

  useEffect(() => {
    if (products) {
      setAllProducts(products.products);
    }
  }, [products]);

  console.log(allProducts);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Text>Erro ao carregar os produtos</Text>;
  }

  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Completa" backArrow />
      <ScrollView
        className="flex flex-col bg-white rounded-xl px-6 py-8 flex-1 mb-4 w-full"
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-sm font-bold text-labelText leading-4">
          ITENS
        </Text>
        <View className="mt-3">
          {allProducts
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item, index) => (
              <Checkbox
                key={`${index}-${item}`}
                title={item.name}
                checked={item.checked}
                onPress={() => {}}
              />
            ))}
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
}
