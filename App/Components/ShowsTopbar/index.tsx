import React from 'react';
import Themes from '../../Themes';
import { View, Text, Pressable, TextInput } from 'react-native';
import { SvgIcon } from '..';

const TopbarContent = () => {
  return (
    <View
      style={[
        Themes.colors.bgWhite,
        Themes.utils.pt32,
        {
          flex: 1,
        },
      ]}
    >
      <View
        style={[
          Themes.utils.pl14,
          Themes.utils.pr16,
          Themes.utils.pb22,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          },
        ]}
      >
        <Text style={[Themes.colors.text, Themes.typography.h1]}>Shows</Text>
        <Pressable>
          <SvgIcon type="plusIcon" />
        </Pressable>
      </View>
      <View
        style={[
          Themes.colors.bgDarken,
          Themes.utils.px16,
          Themes.utils.mb16,
          Themes.utils.height56,
          {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 8,
          },
        ]}
      >
        <SvgIcon type="searchIcon" />
        <TextInput
          placeholderTextColor={Themes.colors.color.darkenLight}
          style={[
            Themes.utils.pl14,
            Themes.typography.textLarge,
            Themes.colors.text,
            {
              width: '95%',
            },
          ]}
          placeholder="Find a show"
        />
      </View>
      <Pressable
        style={[
          Themes.colors.bgBody,
          Themes.utils.borderBottom1,
          Themes.utils.borderTop1,
          Themes.utils.py16,
          Themes.utils.px32,
          {
            marginLeft: -16,
            marginRight: -16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}
      >
        <View>
          <Text style={[Themes.typography.textLarge, Themes.colors.textPrimary]}>Summer 2022 Tour</Text>
          <Text style={[Themes.typography.text, Themes.colors.textPrimary, Themes.utils.opacity64]}>Current tour</Text>
        </View>
        <SvgIcon type="filterIcon" />
      </Pressable>
    </View>
  );
};

export default { TopbarContent };
