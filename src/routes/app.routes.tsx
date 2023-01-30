import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Categories } from '../screens/Categories';
import { List } from '../screens/List';
import { Register } from '../screens/Register';
import { TouchableOpacity, View, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { House, Package, ListChecks, Plus } from 'phosphor-react-native';

const BottomTab = createBottomTabNavigator();

export function AppRoutes() {
  const { navigate } = useNavigation();
  const { width } = Dimensions.get('window');

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={() => {
        return (
          <View className="flex flex-row justify-between items-center bg-white w-full h-20 px-2">
            <TouchableOpacity
              className={`width-${
                width / 4
              } px-7 flex items-center justify-center flex-col gap-1`}
              onPress={() => navigate('home')}
            >
              <House size={24} color="#f50057" weight="fill" />
              <Text className="font-poppinsMedium text-xs text-marketColor">
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`width-${
                width / 4
              }  px-7 flex items-center justify-center flex-col gap-1`}
              onPress={() => navigate('categories')}
            >
              <Package size={24} color="#f50057" weight="fill" />
              <Text className="font-poppinsMedium text-xs text-marketColor">
                Categorias
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`width-${
                width / 4
              }  px-7 flex items-center justify-center flex-col gap-1`}
              onPress={() => navigate('list')}
            >
              <ListChecks size={24} color="#f50057" weight="fill" />
              <Text className="font-poppinsMedium text-xs text-marketColor">
                Lista
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`width-${
                width / 4
              }  px-7 flex items-center justify-center flex-col gap-1`}
              onPress={() => navigate('register')}
            >
              <Plus size={24} color="#f50057" weight="fill" />
              <Text className="font-poppinsMedium text-xs text-marketColor">
                Cadastro
              </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    >
      <BottomTab.Screen name="home" component={Home} />
      <BottomTab.Screen name="categories" component={Categories} />
      <BottomTab.Screen name="list" component={List} />
      <BottomTab.Screen name="register" component={Register} />
    </BottomTab.Navigator>
  );
}
