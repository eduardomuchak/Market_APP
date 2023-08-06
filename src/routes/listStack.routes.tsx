import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { List } from '../screens/List';
import { ListComplete } from '../screens/ListComplete';
import { ListOnlyMissing } from '../screens/ListOnlyMissing';
import { ListProductsByCategories } from '../screens/ListProductsByCategories';

const Stack = createNativeStackNavigator();

export default function ListStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="list" component={List} />
      <Stack.Screen
        name="listByCategories"
        component={ListProductsByCategories}
      />
      <Stack.Screen name="listComplete" component={ListComplete} />
      <Stack.Screen name="listOnlyMissing" component={ListOnlyMissing} />
    </Stack.Navigator>
  );
}
