import { CaretDown } from 'phosphor-react-native';
import { useRef, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Animated,
  LayoutAnimation,
  Alert,
} from 'react-native';
import { toggleAnimations } from '../../animations/ToggleAnimations';
import { Checkbox } from '../Checkbox';
import { Product } from '../../services/Products/interfaces';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateToggleCheckedProduct } from '../../services/Products';

export function AccordionItem({
  title,
  content,
}: {
  title: string;
  content: Product[];
}) {
  const queryClient = useQueryClient();

  const [showContent, setShowContent] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimations);
    setShowContent(!showContent);
  };

  const arrowRotation = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const toggleCheckedProduct = useMutation({
    mutationFn: updateToggleCheckedProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const handleToggleProduct = (id: string) => {
    toggleCheckedProduct.mutate(id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-white rounded-lg flex flex-col p-6 mb-4 overflow-hidden"
      onPress={() => toggleListItem()}
    >
      <View className="flex flex-row justify-between">
        <Text className="text-sm font-bold text-labelText leading-4">
          {title.toUpperCase()}
        </Text>
        <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
          <CaretDown size={20} color="black" />
        </Animated.View>
      </View>

      {showContent ? (
        <View className="mt-3">
          {content.length > 0 ? (
            content.map((item, index) => (
              <Checkbox
                key={`${index}-${item.name}`}
                title={item.name}
                checked={item.checked}
                onPress={() => handleToggleProduct(item.id)}
              />
            ))
          ) : (
            <Text className="text-sm font-poppinsBold text-marketBlackText leading-4">
              Nenhum item encontrado para esta categoria
            </Text>
          )}
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
