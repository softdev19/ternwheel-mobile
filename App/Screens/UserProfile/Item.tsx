import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SvgIcon } from '../../Components';
import Themes from '../../Themes';

interface IItem {
  title: string;
  icon: string;
}

const Item: React.FC<IItem> = ({ title, icon }) => {
  return (
    <Pressable>
      <View
        style={[
          //   Themes.components.wrapperSpace,
          Themes.utils.borderBottom1,
          Themes.colors.bgWhite,
          {
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 88,
            paddingHorizontal: 32,
            borderBottomColor: 'rgba(1, 1, 1, 0.04)',
          },
        ]}
      >
        <View
          style={[
            {
              // flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            },
          ]}
        >
          <SvgIcon type={icon} />
          <Text style={[Themes.typography.label, Themes.colors.text, Themes.utils.pl18, Themes.utils.mt5]}>
            {title}
          </Text>
        </View>
        <View style={Themes.utils.mt3}>
          <SvgIcon type="arrowRightIcon" />
        </View>
      </View>
    </Pressable>
  );
};

export default Item;
