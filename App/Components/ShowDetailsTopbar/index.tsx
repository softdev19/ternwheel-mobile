import React from 'react';
import Themes from '../../Themes';
import { View, Text, Pressable, TextInput, Platform } from 'react-native';
import { SvgIcon } from '..';

const TopbarContent: React.FC<any> = ({ navigation }) => {
  return (
    <View style={[Themes.colors.bgWhite, Themes.utils.pt32]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: Platform.OS === 'android' ? 10 : 33,
          paddingLeft: 27,
          paddingRight: 16,
          paddingBottom: 16,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <SvgIcon type="arrowBackIcon" />
        </Pressable>
        <Pressable style={{ paddingTop: 14 }}>
          <SvgIcon type="optionsIcon" />
        </Pressable>
      </View>
      <View style={[Themes.utils.pl27, Themes.utils.pr16, Themes.utils.pb22]}>
        <Text style={[Themes.colors.text, Themes.typography.h1, { marginBottom: 4 }]}>Tuesday, June 7, 2022</Text>
        <Text style={[Themes.colors.text, Themes.typography.text, Themes.utils.opacity64]}>
          San Francisco • The Independent
        </Text>
      </View>
    </View>
  );
};

export default { TopbarContent };
