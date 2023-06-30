import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Themes from '../../Themes';
import { Pages } from '../../Routes';
import { SvgIcon } from '..';

interface IShowItem {
  date: string;
  venue: string;
  address: string;
}

const ShowItem: React.FC<IShowItem> = ({ date = '2023-2-28T03:24:00', address, venue }) => {
  const dates = new Date(date);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthshort = ['Jan ', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sepr', 'Oct', 'Nov', 'Dec'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const dateNumber = dates.getDate();
  const day = days[dates.getDay()];
  const month = months[dates.getMonth()];
  const monthShort = monthshort[dates.getMonth()];

  return (
    <Pressable
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
              //   flexDirection: "column",
              //   justifyContent: "center",
              //   alignItems: "center",
              borderRadius: 8,
              overflow: 'hidden',
            },
          ]}
        >
          <Text
            style={[
              Themes.colors.bgPurple64,
              Themes.colors.textWhite,
              Themes.typography.textSmall,
              {
                width: '100%',
                textAlign: 'center',
                textTransform: 'uppercase',
                paddingTop: 3,
              },
            ]}
          >
            {monthShort}
          </Text>
          <Text
            style={[
              Themes.typography.label,
              Themes.colors.textPurple64,
              { textAlign: 'center', paddingVertical: 10, fontSize: 18 },
            ]}
          >
            {dateNumber}
          </Text>
        </View>
        <View style={[Themes.utils.pl16]}>
          <Text style={[Themes.typography.label, Themes.colors.text]}>
            {day}, {month} {dateNumber}, 2022
          </Text>
          {venue && <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>{venue}</Text>}
          {address && (
            <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>{address}</Text>
          )}
        </View>
      </View>
      <View>
        <SvgIcon type="arrowRightIcon" />
      </View>
    </Pressable>
  );
};

export default ShowItem;
