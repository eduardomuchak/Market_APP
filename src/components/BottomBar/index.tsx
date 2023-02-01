import { useNavigation, useRoute } from '@react-navigation/native';
import clsx from 'clsx';
import { House, ListChecks, Package, Plus } from 'phosphor-react-native';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

function BottomBar() {
  const { navigate } = useNavigation();
  const routeName = useRoute().name;

  return (
    <View
      className={clsx('bg-white flex flex-row w-screen h-20', {
        // 'h-24': Platform.OS === 'ios',
        // 'h-20': Platform.OS === 'android',
      })}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        className={clsx(
          `w-full px-2 flex items-center justify-center flex-col gap-1 flex-1`,
          {
            'border-t-2 border-marketColor': routeName === 'home',
          },
        )}
        onPress={() => navigate('home')}
      >
        {routeName === 'home' ? (
          <House size={24} color="#f50057" weight="fill" />
        ) : (
          <House size={24} color="#f50057" weight="light" />
        )}
        <Text className="font-poppinsMedium text-xs text-marketColor">
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        className={clsx(
          `w-full px-2 flex items-center justify-center flex-col gap-1 flex-1`,
          {
            'border-t-2 border-marketColor': routeName === 'categories',
          },
        )}
        onPress={() => navigate('categories')}
      >
        {routeName === 'categories' ? (
          <Package size={24} color="#f50057" weight="fill" />
        ) : (
          <Package size={24} color="#f50057" weight="light" />
        )}
        <Text className="font-poppinsMedium text-xs text-marketColor">
          Categorias
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        className={clsx(
          `w-full px-2 flex items-center justify-center flex-col gap-1 flex-1`,
          {
            'border-t-2 border-marketColor': routeName.includes('list'),
          },
        )}
        onPress={() => navigate('list')}
      >
        {routeName.includes('list') ? (
          <ListChecks size={24} color="#f50057" weight="fill" />
        ) : (
          <ListChecks size={24} color="#f50057" weight="light" />
        )}
        <Text className="font-poppinsMedium text-xs text-marketColor">
          Listas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        className={clsx(
          `w-full px-2 flex items-center justify-center flex-col gap-1 flex-1`,
          {
            'border-t-2 border-marketColor': routeName.includes('register'),
          },
        )}
        onPress={() => navigate('register')}
      >
        {routeName.includes('register') ? (
          <Plus size={24} color="#f50057" weight="fill" />
        ) : (
          <Plus size={24} color="#f50057" weight="light" />
        )}
        <Text className="font-poppinsMedium text-xs text-marketColor">
          Cadastro
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomBar;
