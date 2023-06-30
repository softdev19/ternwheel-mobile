import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Schedule, Venue, TravelAndHotel } from '../../Screens';
import Pages from '../constant';
import Themes from '../../Themes';
import { ShowDetailsTopbar } from '../../Components';

const Tab = createMaterialTopTabNavigator();

const ShowDetailsTabPages = (props: any) => {
  const { navigation } = props;
  return (
    <>
      <ShowDetailsTopbar.TopbarContent navigation={navigation} />
      <Tab.Navigator
        initialRouteName={Pages.Schedule}
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
                    width: children === 'Travel and Hotel' ? 120 : 'auto',
                  },
                ]}
              >
                {children}
              </Text>
            );
          },
        }}
      >
        <Tab.Screen name={Pages.Schedule} component={Schedule} />
        <Tab.Screen name={Pages.Venue} component={Venue} />
        <Tab.Screen name={Pages.TravelAndHotel} component={TravelAndHotel} options={{ title: 'Travel and Hotel' }} />
      </Tab.Navigator>
    </>
  );
};

export default ShowDetailsTabPages;
