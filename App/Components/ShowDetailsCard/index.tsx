import React from 'react';
import { View, Pressable, ImageBackground, Text } from 'react-native';
import Themes from '../../Themes';
import { Pages } from '../../Routes';

import { Images, SvgIcon, ShowSchedule } from '..';

const ShowDetailsCard = ({ navigation }: any) => {
  const onPressDetails = () => navigation.push(Pages.ShowDetails);

  return (
    <View
      style={[
        Themes.utils.shadow,
        Themes.colors.bgWhite,
        // { flex: 1, overflow: "hidden" },
      ]}
    >
      <ImageBackground
        source={Images.showCardHeader}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: 'center', padding: 24 }}
      >
        <Text style={[Themes.typography.h2, Themes.colors.textWhite]}>Tonight at 8:00pm</Text>
        <Text style={[Themes.typography.textSmall, Themes.colors.textWhite, Themes.utils.opacity72]}>
          Tonight at 8:00pm
        </Text>
      </ImageBackground>
      <View style={[Themes.utils.pt16, Themes.utils.borderBottom1]}>
        <ShowSchedule icon="truckIcon" text="Load in" time="3:30pm - 4:30pm" />
        <ShowSchedule icon="volumeIcon" text="Sound check" time="4:30pm - 5:30pm" />
      </View>
      <Pressable onPress={onPressDetails}>
        <View
          style={{
            padding: 32,
            paddingVertical: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={[Themes.typography.label, Themes.colors.textPrimary]}>Show details</Text>
          <SvgIcon type="arrowLeftIcon" style={{ top: 3 }} />
        </View>
      </Pressable>
    </View>
  );
};

export default ShowDetailsCard;
