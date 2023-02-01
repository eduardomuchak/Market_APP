import { ScrollView, View } from 'react-native';
import { Header } from '../../components/Header';
import { CategoryCard } from '../../components/CategoryCard';
import { RegisterCategoryCard } from '../../components/RegisterCategoryCard';

export function Categories() {
  const categories = [
    { id: 1, name: 'Bebidas' },
    { id: 2, name: 'Beleza' },
    { id: 3, name: 'Bolachas' },
    { id: 4, name: 'Congelados' },
    { id: 5, name: 'Doces' },
    { id: 6, name: 'Enlatados' },
    { id: 7, name: 'Frios e Laticínios' },
    { id: 8, name: 'Grãos e Cereais' },
    { id: 9, name: 'Higiene Pessoal' },
    { id: 10, name: 'Hortifruti' },
    { id: 10, name: 'Limpeza' },
    { id: 10, name: 'Massas' },
    { id: 10, name: 'Molhos' },
    { id: 10, name: 'Padaria' },
    { id: 10, name: 'Produtos Pet' },
  ];
  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Selecione a categoria" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-1 flex-row flex-wrap justify-center">
          {categories.map((category) => (
            <CategoryCard
              key={`${category.id}-${category.name}`}
              categoryName={category.name}
            />
          ))}
          <RegisterCategoryCard />
        </View>
      </ScrollView>
    </View>
  );
}
