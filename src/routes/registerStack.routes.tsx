import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from '../screens/Register';
import { RegisterCategory } from '../screens/RegisterCategory';
import { RegisterProduct } from '../screens/RegisterProduct';

const Stack = createNativeStackNavigator();

export default function RegisterStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="registerProduct" component={RegisterProduct} />
      <Stack.Screen name="registerCategory" component={RegisterCategory} />
    </Stack.Navigator>
  );
}
