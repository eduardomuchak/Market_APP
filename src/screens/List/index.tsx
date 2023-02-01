import { View } from 'react-native';
import { Header } from '../../components/Header';
import { AccordionList } from '../../components/Accordion/AccordionList';

export function List() {
  return (
    <View>
      <Header title="Lista de Compras" />
      <AccordionList />
    </View>
  );
}
