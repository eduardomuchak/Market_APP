import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Input } from '../../components/ui/Input';
import { MarketButton } from '../../components/ui/MarketButton';
import BottomBar from '../../components/BottomBar';
import { Checkbox } from '../../components/Checkbox';
import { getAllCategories } from '../../services/Category';
import { createProduct } from '../../services/Products';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Category } from '../../services/Category/interfaces';
import Loading from '../../components/Loading';

interface CheckedCategory extends Category {
  checked?: boolean;
}

export function RegisterProduct() {
  const queryClient = useQueryClient();

  const [name, setName] = useState('');
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [checkedCategories, setCheckedCategories] = useState<CheckedCategory[]>(
    [],
  );

  const {
    isLoading,
    error,
    data: categories,
  } = useQuery({ queryKey: ['categories'], queryFn: getAllCategories });

  const registerProduct = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      console.log('Produto Cadastrado');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const handleRegisterProduct = () => {
    const categoriesIds = checkedCategories.map((category) => category.id);
    const payload = { name, categoriesIds };

    registerProduct.mutate(payload);
  };

  const handleCheckCategory = (category: CheckedCategory) => {
    const checkedCategory = checkedCategories.find(
      (checkedCategory) => checkedCategory.id === category.id,
    );

    if (checkedCategory) {
      const newCheckedCategories = checkedCategories.filter(
        (checkedCategory) => checkedCategory.id !== category.id,
      );

      setCheckedCategories(newCheckedCategories);
    } else {
      setCheckedCategories([...checkedCategories, category]);
    }
  };

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
      <Header title="Cadastro de Produto" backArrow />
      <View className="w-full bg-white rounded-lg p-6 my-2 flex-1">
        <View className="flex flex-col pt-4">
          <View className="mb-3">
            <Input
              placeholder="Digite"
              label="NOME"
              onChangeText={(text) => setName(text)}
              maxLength={20}
            />
          </View>
        </View>
        <View className="mb-5 mt-3 flex flex-1">
          <Text className="text-labelText font-poppinsBold mb-4">
            SELECIONE AS CATEGORIAS:
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {allCategories.map((category) => {
              return (
                <Checkbox
                  key={`${category.id}-${category.name}`}
                  title={category.name}
                  checked={
                    checkedCategories.find(
                      (checkedCategory) => checkedCategory.id === category.id,
                    )
                      ? true
                      : false
                  }
                  onPress={() => handleCheckCategory(category)}
                />
              );
            })}
          </ScrollView>
        </View>

        <MarketButton
          title="Cadastrar"
          variant="primary"
          onPress={() => handleRegisterProduct()}
        />
      </View>
      <BottomBar />
    </View>
  );
}
