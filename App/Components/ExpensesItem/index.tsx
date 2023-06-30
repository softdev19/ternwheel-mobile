import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Themes from '../../Themes';
import { Pages } from '../../Routes';
import { SvgIcon } from '..';

interface IShowItem {
  date: string;
  price: number;
  title: string;
  navigation: any;
}

const ShowItem: React.FC<IShowItem> = ({ date = '2023-2-28T03:24:00', title, price, navigation }) => {
  const onPressDetails = () => navigation.push(Pages.ExpenseDetails);

  return (
    <Pressable
      onPress={onPressDetails}
      style={[
        Themes.colors.bgWhite,
        Themes.components.wrapperSpace,
        Themes.utils.pr16,
        Themes.utils.borderBottom1,
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View
          style={[
            Themes.utils.height64,
            Themes.utils.width64,
            Themes.colors.bgLightPurple,
            {
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
        >
          <SvgIcon type="receiptCheckIcon" />
        </View>
        <View style={[Themes.utils.pl16, Themes.utils.pr16]}>
          <Text style={[Themes.typography.label, Themes.colors.text]}>{title}</Text>

          <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>{date}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={[Themes.typography.label, Themes.colors.text, Themes.utils.pr16]}>${price}</Text>
        <SvgIcon type="arrowRightIcon" />
      </View>
    </Pressable>
  );
};

export default ShowItem;
