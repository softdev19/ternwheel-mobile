import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Shows, Expenses } from '../../Screens';
import { HomeTopbar, Tabbar, ShowsTopbar, ExpensesTopbar } from '../../Components';

import Pages from '../constant';
import HomeStackNavigator from '../HomeStack';

const Tab = createBottomTabNavigator();

const BottomTabsScreen = ({ navigation }: any) => {
  const isIos = Platform.OS === 'ios';
  return (
    <Tab.Navigator tabBar={(prop: any) => <Tabbar {...prop} />}>
      <Tab.Screen
        name={Pages.Today}
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          headerTitle: '',
        }}
      />
      <Tab.Screen
        name={Pages.Shows}
        component={Shows}
        options={{
          headerTitle: (prop: any) => <ShowsTopbar.TopbarContent {...prop} />,
          headerStyle: {
            height: 240,
          },
        }}
      />
      <Tab.Screen
        name={Pages.Expenses}
        component={Expenses}
        options={{
          headerTitle: (prop: any) => <ExpensesTopbar.TopbarContent {...prop} />,
          headerStyle: {
            height: 240,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsScreen;
