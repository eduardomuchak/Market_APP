import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from 'tailwindcss/colors';

import { House, ListChecks, Package, Plus } from 'phosphor-react-native';

import { View } from 'react-native';
import { useFirebaseAuth } from '../contexts/useFirebaseAuth';
import CategoriesStackRoutes from './categoriesStack.routes';
import HomeStackRoutes from './homeStack.routes';
import ListStackRoutes from './listStack.routes';
import RegisterStackRoutes from './registerStack.routes';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const { user } = useFirebaseAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FEFEFE',
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: '100%',
                height: '100%',
                borderTopColor: '#F50057',
                borderTopWidth: focused ? 4 : 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <House
                size={focused ? 26 : 24}
                color={focused ? '#F50057' : colors.zinc[500]}
                weight={focused ? 'fill' : 'bold'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CategoriesStack"
        component={CategoriesStackRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: '100%',
                height: '100%',
                borderTopColor: '#F50057',
                borderTopWidth: focused ? 4 : 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Package
                size={focused ? 26 : 24}
                color={focused ? '#F50057' : colors.zinc[500]}
                weight={focused ? 'fill' : 'bold'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ListsStack"
        component={ListStackRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: '100%',
                height: '100%',
                borderTopColor: '#F50057',
                borderTopWidth: focused ? 4 : 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ListChecks
                size={focused ? 26 : 24}
                color={focused ? '#F50057' : colors.zinc[500]}
                weight={focused ? 'fill' : 'bold'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="RegisterStack"
        component={RegisterStackRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: '100%',
                height: '100%',
                borderTopColor: '#F50057',
                borderTopWidth: focused ? 4 : 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Plus
                size={focused ? 26 : 24}
                color={focused ? '#F50057' : colors.zinc[500]}
                weight={focused ? 'fill' : 'bold'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
