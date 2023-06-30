import React from 'react';
import { View, Text } from 'react-native';
import Themes from '../../Themes';
import SvgIcon from '../SvgIcon';

interface IShowItem {
  icon: string;
  time: string;
  text: string;
}

function ShowSchedule({ icon, time, text }: IShowItem): JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 16,
        paddingHorizontal: 32,
      }}
    >
      <View style={{ width: 40 }}>
        <View
          style={{
            position: 'absolute',
            width: 2,
            backgroundColor: 'rgba(1, 1, 1, 0.04)',
            top: -16,
            bottom: -16,
            left: 11,
          }}
        />
        <SvgIcon type={icon} />
        <View
          style={{
            position: 'absolute',
            width: 2,
            backgroundColor: '#FFFFFF',
            top: -8,
            bottom: 16,
            left: 11,
          }}
        />
      </View>
      <View style={{ padding: 0 }}>
        <Text style={[Themes.typography.label, Themes.colors.text]}>{time}</Text>
        <Text style={[Themes.typography.text, Themes.utils.opacity64, Themes.colors.text]}>{text}</Text>
      </View>
    </View>
  );
}

export default ShowSchedule;
