import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { CategoryCard } from '../../components/CategoryCard';
import { Header } from '../../components/Header';
import Loading from '../../components/Loading';
import { RegisterCategoryCard } from '../../components/RegisterCategoryCard';
import { RequestError } from '../../components/RequestError';

import { fetchCategories } from '../../database/database';
import { FetchCategory } from '../../interfaces/Category';

export function Categories() {
  const [allCategories, setAllCategories] = useState<FetchCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function getAllCategoriesFromDB() {
    try {
      const result = await fetchCategories();
      setAllCategories(result);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllCategoriesFromDB();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <RequestError />;
  }

  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Selecione a categoria" backArrow />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-1 flex-row flex-wrap justify-center">
          {allCategories.length ? (
            allCategories
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((category) => (
                <CategoryCard
                  key={`${category.id}-${category.name}`}
                  categoryName={category.name}
                  categoryIcon={category.icon}
                />
              ))
          ) : (
            <View className="flex flex-1 flex-col items-center justify-center">
              <Text className="font-poppinsSemibold text-xl text-marketBlackText">
                Nenhuma categoria cadastrada
              </Text>
            </View>
          )}
          <RegisterCategoryCard />
        </View>
      </ScrollView>
    </View>
  );
}
