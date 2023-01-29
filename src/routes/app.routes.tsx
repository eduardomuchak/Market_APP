import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';

const BottomTab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
    </BottomTab.Navigator>
  );
}
