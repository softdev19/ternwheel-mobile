import * as React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import type { Route } from '@react-navigation/routers';
import { enableScreens } from 'react-native-screens';
import Pages from '../constant';
import { ExpenseDetails, Home, UserProfile } from '../../Screens';
import ShowDetailsTabPages from '../ShowDetailsTabPages';
import TourDetailsTabPages from '../TourDetailsTabPages';
import { ExpensesDetailsTopbar, TourDetailsTopbar } from '../../Components';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = ({ navigation, route }: { navigation: unknown; route: Partial<Route<string>> }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={Pages.Today} component={Home} options={{ headerShown: false }} />
      <HomeStack.Screen name={Pages.ShowDetails} component={ShowDetailsTabPages} options={{ headerShown: false }} />
      <HomeStack.Screen
        name={Pages.TourDetails}
        component={TourDetailsTabPages}
        options={({ navigation, route }) => ({
          header: () => {
            return (
              <View>
                <TourDetailsTopbar.TopbarContent navigation={navigation} />
              </View>
            );
          },
        })}
        // options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={Pages.ExpenseDetails}
        component={ExpenseDetails}
        options={({ navigation, route }) => ({
          header: () => {
            return (
              <View style={{ flex: 0 }}>
                <ExpensesDetailsTopbar.TopbarContent navigation={navigation} />
              </View>
            );
          },
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
