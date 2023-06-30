import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Shows, Expenses, Contacts, Budget } from '../../Screens';
import Pages from '../constant';
import Themes from '../../Themes';

const Tab = createMaterialTopTabNavigator();

const TourDetailsTabPages = () => {
  return (
    <Tab.Navigator
      initialRouteName={Pages.Budget}
      screenOptions={{
        tabBarActiveTintColor: Themes.colors.color.primary,
        tabBarStyle: {
          shadowOpacity: 0,
          shadowColor: '#fff',
          borderBottomColor: Themes.colors.color.darken,
          borderBottomWidth: 1,
        },
        tabBarAndroidRipple: {
          borderless: false,
          color: null,
          radius: 0,
        },

        tabBarIndicatorStyle: {
          backgroundColor: Themes.colors.color.primary,
          backfaceVisibility: 'hidden',
        },
        tabBarLabel: ({ color, focused, children }) => {
          return (
            <Text
              style={[
                Themes.typography.label,
                {
                  color: focused ? Themes.colors.color.primary : Themes.colors.color.darken64,
                  opacity: 1,
                  fontSize: 14,
                },
              ]}
            >
              {children}
            </Text>
          );
        },
      }}
    >
      <Tab.Screen name={Pages.Budget} component={Budget} />
      <Tab.Screen name={Pages.Shows} component={Shows} />
      <Tab.Screen name={Pages.Expenses} component={Expenses} />
      <Tab.Screen name={Pages.Contacts} component={Contacts} />
    </Tab.Navigator>
  );
};

export default TourDetailsTabPages;
