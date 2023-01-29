import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Categories } from '../screens/Categories';
import { List } from '../screens/List';
import { Register } from '../screens/Register';

const BottomTab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Categories" component={Categories} />
      <BottomTab.Screen name="List" component={List} />
      <BottomTab.Screen name="Register" component={Register} />
    </BottomTab.Navigator>
  );
}
