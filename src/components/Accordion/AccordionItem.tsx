import { CaretDown } from 'phosphor-react-native';
import { useRef, useState } from 'react';
import {
  Animated,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { toggleAnimations } from '../../animations/ToggleAnimations';
import {
  fetchProducts,
  updateToggleProductCheck,
} from '../../database/database';
import { Checkbox } from '../Checkbox';

interface ContentProps {
  id: string;
  name: string;
  checked: boolean | number;
  categoriesIds: string[];
}

export function AccordionItem({
  title,
  content: contentProps,
}: {
  title: string;
  content: ContentProps[];
}) {
  const [content, setContent] = useState(contentProps);
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

  const handleToggleProduct = async (id: string) => {
    await updateToggleProductCheck(Number(id));
    const result = await fetchProducts();

    const newContent = result.map((item) => {
      if (Number(item.id) === Number(id)) {
        return {
          categoriesIds: item.categoriesIds,
          checked: item.checked === 0 ? false : true,
          id: item.id,
          name: item.name,
        };
      }
      return item;
    });

    setContent(newContent);
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
            content
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item, index) => (
                <Checkbox
                  key={`${index}-${item.name}`}
                  title={item.name}
                  checked={item.checked}
                  onPress={() => handleToggleProduct(item.id)}
                />
              ))
          ) : (
            <Text className="text-sm font-poppinsSemibold text-marketBlackText leading-4 my-4">
              Nenhum item encontrado para esta categoria
            </Text>
          )}
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
