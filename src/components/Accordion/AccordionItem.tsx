import { CaretDown } from 'phosphor-react-native';
import { useEffect, useRef, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Animated,
  LayoutAnimation,
} from 'react-native';
import { toggleAnimations } from '../../animations/ToggleAnimations';

export function AccordionItem({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
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

  return (
    <View className="bg-blue-500">
      <TouchableOpacity onPress={() => toggleListItem()}>
        <View>
          <Text>{title}</Text>
          <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
            <CaretDown size={30} color="black" />
          </Animated.View>
        </View>
      </TouchableOpacity>
      {showContent ? (
        <View>
          <Text>{content}</Text>
        </View>
      ) : null}
    </View>
  );
}
