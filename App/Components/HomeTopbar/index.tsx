import React from 'react';
import Themes from '../../Themes';
import { View, Text, Pressable, Image } from 'react-native';
import { Images } from '..';
import { Pages } from '../../Routes';

const TopbarContent = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date();
  const dayName = days[d.getDay()];

  return (
    <View style={[Themes.colors.bgWhite]}>
      <Text style={[Themes.colors.text, Themes.typography.h1]}>Happy {dayName},</Text>
      <Text style={[Themes.colors.text, Themes.typography.h1]}>Pusha T</Text>
    </View>
  );
};

const TopbarRightButton = ({ navigation }: any) => {
  return (
    <Pressable
      onPress={() => {
        navigation.push(Pages.Profile);
      }}
    >
      <View style={[Themes.utils.pr32]}>
        <Image source={Images.avatar} style={[Themes.utils.height48]} />
      </View>
    </Pressable>
  );
};

export default { TopbarContent, TopbarRightButton };
