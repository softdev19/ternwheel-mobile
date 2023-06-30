/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable, View, Text, ViewStyle } from 'react-native';

import { SvgIcon } from '../../Components';
import Themes from '../../Themes';

interface IAuthOption {
  icon: string;
  title: string;
  customStyles?: ViewStyle;
  titleStyles?: ViewStyle;
  onPress(params: any): void;
}

const AuthOption: React.FC<IAuthOption> = ({ icon, title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        Themes.utils.shadow,
        {
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        },
      ]}
    >
      <View
        style={[
          Themes.utils.shadow3,
          Themes.colors.bgWhite,
          Themes.utils.height56,
          {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          },
        ]}
      >
        <SvgIcon type={icon} />
        <Text
          style={[
            Themes.typography.label,
            Themes.utils.ml13,
            Themes.colors.text,
            ,
            {
              lineHeight: 20,
            },
          ]}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default AuthOption;
