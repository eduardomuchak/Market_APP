import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { CategoryCard } from '../../components/CategoryCard';
import { RegisterCategoryCard } from '../../components/RegisterCategoryCard';
import { Category } from '../../services/Category/interfaces';

import BottomBar from '../../components/BottomBar';
import { getAllCategories } from '../../services/Category';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading';

export function Categories() {
  const [allCategories, setAllCategories] = useState<Category[]>([]);

  const {
    isLoading,
    error,
    data: categories,
  } = useQuery({ queryKey: ['categories'], queryFn: getAllCategories });

  useEffect(() => {
    if (categories) {
      setAllCategories(categories.categories);
    }
  }, [categories]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Text>Erro ao carregar as categorias</Text>;
  }

  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Selecione a categoria" backArrow />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-1 flex-row flex-wrap justify-center">
          {allCategories.map((category) => (
            <CategoryCard
              key={`${category.id}-${category.name}`}
              categoryName={category.name}
            />
          ))}
          <RegisterCategoryCard />
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
}
