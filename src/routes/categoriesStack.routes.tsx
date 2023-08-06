import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories } from '../screens/Categories';

const Stack = createNativeStackNavigator();

export default function CategoriesStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="categories" component={Categories} />
    </Stack.Navigator>
  );
}
