import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Categories } from '../screens/Categories';
import { List } from '../screens/List';
import { Register } from '../screens/Register';
import { ListProductsByCategories } from '../screens/ListProductsByCategories';
import { ListComplete } from '../screens/ListComplete';
import { ListOnlyMissing } from '../screens/ListOnlyMissing';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen name="list" component={List} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen
        name="listByCategories"
        component={ListProductsByCategories}
      />
      <Stack.Screen name="listComplete" component={ListComplete} />
      <Stack.Screen name="listOnlyMissing" component={ListOnlyMissing} />
    </Stack.Navigator>
  );
}
