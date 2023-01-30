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
      <BottomTab.Screen name="home" component={Home} />
      <BottomTab.Screen name="categories" component={Categories} />
      <BottomTab.Screen name="list" component={List} />
      <BottomTab.Screen name="register" component={Register} />
    </BottomTab.Navigator>
  );
}
