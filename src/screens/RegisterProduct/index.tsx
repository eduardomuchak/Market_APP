import { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { Header } from '../../components/Header';
import { Input } from '../../components/ui/Input';
import { MarketButton } from '../../components/ui/MarketButton';
import { Checkbox } from '../../components/Checkbox';
import { RequestError } from '../../components/RequestError';
import BottomBar from '../../components/BottomBar';
import Loading from '../../components/Loading';

import { getAllCategories } from '../../services/Category';
import { createProduct } from '../../services/Products';
import { Category } from '../../services/Category/interfaces';
import { useNavigation } from '@react-navigation/native';

interface CheckedCategory extends Category {
  checked?: boolean;
}

export function RegisterProduct() {
  const queryClient = useQueryClient();
  const { navigate } = useNavigation();

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
    try {
      registerProduct.mutate(payload);
    } catch (error) {
      Alert.alert('Opa!, algo deu errado', 'Tente novamente');
    } finally {
      Alert.alert('Produto cadastrado com sucesso!');
      setName('');
      setCheckedCategories([]);
      navigate('register');
    }
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
    return <RequestError />;
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
            {allCategories
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((category) => {
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
