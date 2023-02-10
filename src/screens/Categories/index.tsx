import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { Header } from '../../components/Header';
import { CategoryCard } from '../../components/CategoryCard';
import { RegisterCategoryCard } from '../../components/RegisterCategoryCard';
import { Category } from '../../services/Category/interfaces';
import { RequestError } from '../../components/RequestError';
import BottomBar from '../../components/BottomBar';
import Loading from '../../components/Loading';

import { getAllCategories } from '../../services/Category';

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
    return <RequestError />;
  }

  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Selecione a categoria" backArrow />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-1 flex-row flex-wrap justify-center">
          {allCategories.length ? (
            allCategories.map((category) => (
              <CategoryCard
                key={`${category.id}-${category.name}`}
                categoryName={category.name}
                categoryIcon={category.icon}
              />
            ))
          ) : (
            <View className="flex flex-1 flex-col items-center justify-center">
              <Text className="text-xl font-poppinsSemibold text-marketBlackText">
                Nenhuma categoria cadastrada
              </Text>
            </View>
          )}
          <RegisterCategoryCard />
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
}
