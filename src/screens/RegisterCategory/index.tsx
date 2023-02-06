import { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Header } from '../../components/Header';
import { Input } from '../../components/ui/Input';
import { PreviewCard } from '../../components/PreviewCard';
import { MarketButton } from '../../components/ui/MarketButton';
import BottomBar from '../../components/BottomBar';

import { createCategory } from '../../services/Category';
import { useNavigation } from '@react-navigation/native';

export function RegisterCategory() {
  const queryClient = useQueryClient();
  const { navigate } = useNavigation();

  const [name, setName] = useState('');

  const registerCategory = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      console.log('Categoria Cadastrada');
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const handleRegisterCategory = () => {
    const payload = { name };
    try {
      registerCategory.mutate(payload);
    } catch (error) {
      Alert.alert('Opa!, algo deu errado', 'Tente novamente');
    } finally {
      Alert.alert('Categoria cadastrada com sucesso!');
      setName('');
      navigate('register');
    }
  };

  return (
    <View className="flex flex-1 flex-col items-center">
      <Header title="Cadastro de Categoria" backArrow />
      <ScrollView
        className="w-full bg-white rounded-lg p-6 my-2 flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-col pt-4 pb-7">
          <View className="mb-3">
            <Input
              placeholder="Digite"
              label="NOME"
              onChangeText={(text) => setName(text)}
              maxLength={20}
            />
          </View>

          <Input placeholder="Opção 1" label="ÍCONE" />
        </View>
        <PreviewCard name={name} />
        <MarketButton
          title="Cadastrar"
          variant="primary"
          onPress={() => handleRegisterCategory()}
        />
      </ScrollView>
      <BottomBar />
    </View>
  );
}
