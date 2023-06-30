import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import Themes from '../../Themes';
import { SvgIcon } from '../';

interface IIconText {
  icon: string;
  title?: string;
  text?: string;
  style?: any;
}

const IconText: React.FC<IIconText> = ({ icon, title, text, style }) => {
  return (
    <View
      style={StyleSheet.flatten([
        {
          flex: 1,
        },
        style && style,
      ])}
    >
      <View style={{ padding: 2, marginBottom: 18 }}>
        <SvgIcon type={icon} />
      </View>
      <Text style={[Themes.typography.h2, Themes.colors.text, style && style]}>{title}</Text>
      <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>{text}</Text>
    </View>
  );
};

export default IconText;
