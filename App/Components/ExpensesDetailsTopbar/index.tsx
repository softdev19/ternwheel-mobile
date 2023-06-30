import React from 'react';
import Themes from '../../Themes';
import { View, Text, Pressable, TextInput, Platform } from 'react-native';
import { SvgIcon } from '..';

const TopbarContent: React.FC<any> = ({ navigation }) => {
  return (
    <View
      style={[
        Themes.colors.bgWhite,
        // Themes.utils.pt32,
        {
          flex: 0,
          paddingTop: Platform.OS === 'android' ? 20 : 70,
        },
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 27,
          paddingRight: 38,
          paddingBottom: 33,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <SvgIcon type="arrowBackIcon" />
        </Pressable>
        <Pressable>
          <SvgIcon type="optionsIcon" />
        </Pressable>
      </View>
      <View style={[Themes.utils.pl27, Themes.utils.pr16, Themes.utils.pb22]}>
        <Text style={[Themes.colors.text, Themes.typography.h1, { marginBottom: 4 }]}>$10.00</Text>
        <Text style={[Themes.colors.text, Themes.typography.text, Themes.utils.opacity64]}>
          At Starbucks on June 7, 2022
        </Text>
      </View>
    </View>
  );
};

export default { TopbarContent };
