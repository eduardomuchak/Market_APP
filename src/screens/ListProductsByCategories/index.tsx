import { View } from 'react-native';
import { Header } from '../../components/Header';
import { AccordionList } from '../../components/Accordion/AccordionList';
import BottomBar from '../../components/BottomBar';

export function ListProductsByCategories() {
  return (
    <View className="flex-1">
      <Header title="Por Categoria" backArrow={true} />
      <AccordionList />
      <BottomBar />
    </View>
  );
}
