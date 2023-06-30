import React from 'react';
import { Platform, Pressable, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabPages from './BottomTabPages';
import Pages from './constant';
import { Login, UserProfile, NearbyMap, SignUp, Splash } from '../Screens';
import Themes from '../Themes';
import { SvgIcon, NearbyMapTopbar } from '../Components';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const View1 = (navigation: any) => {
  return {
    header: () => {
      return (
        <View
          style={{
            flex: 1,
            height: 56,
            backgroundColor: Colors.white,
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <View style={[Themes.utils.pl20, { paddingTop: Platform.OS === 'ios' ? 80 : 20 }]}>
              <SvgIcon type="closeIcon" />
            </View>
          </Pressable>
        </View>
      );
    },
  };
};

const View2 = (navigation: any) => ({
  header: () => (
    <View>
      <NearbyMapTopbar.TopbarContent navigation={navigation} />
    </View>
  ),
});

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name={Pages.Splash} component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name={Pages.Login} component={Login} options={{ headerShown: false }} />
          <Stack.Screen name={Pages.SignUp} component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name={Pages.Home} component={BottomTabPages} options={{ headerShown: false }} />
          <Stack.Screen name={Pages.Profile} component={UserProfile} options={({ navigation }) => View1(navigation)} />

          <Stack.Screen name={Pages.NearbyMap} component={NearbyMap} options={({ navigation }) => View2(navigation)} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Pages };

export default Routes;
