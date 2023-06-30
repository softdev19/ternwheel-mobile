import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Card, SvgIcon, MapboxSmall } from '../../Components';
import { PageContainer } from '../../Containers';
import Themes from '../../Themes';

const Venue = () => {
  return (
    <PageContainer style={[Themes.colors.bgWhite]} safeareaEdges={['left', 'right', 'bottom']}>
      <Card
        icon="markerIcon"
        iconRight="cornerUpIcon"
        title="The Independent"
        text1="628 Divisadero St"
        text2="San Francisco, CA 94117"
      >
        <MapboxSmall />
      </Card>
      <Card icon="userSqureIcon" title="Jon Gunton" text1="gunton@theindependentsf.com" text2="(415) 771-1420">
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Pressable>
            <View
              style={[
                Themes.utils.width48,
                Themes.utils.height48,
                Themes.colors.bgDarken,
                ,
                {
                  borderRadius: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 32,
                },
              ]}
            >
              <SvgIcon type={'phoneIcon'} />
            </View>
          </Pressable>
          <Pressable>
            <View
              style={[
                Themes.utils.width48,
                Themes.utils.height48,
                Themes.colors.bgDarken,
                ,
                {
                  borderRadius: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 32,
                },
              ]}
            >
              <SvgIcon type={'messageSquareIcon'} />
            </View>
          </Pressable>
          <Pressable>
            <View
              style={[
                Themes.utils.width48,
                Themes.utils.height48,
                Themes.colors.bgDarken,
                ,
                {
                  borderRadius: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}
            >
              <SvgIcon type={'mailIcon'} />
            </View>
          </Pressable>
        </View>
      </Card>
      <Card icon="usersIcon" title="Club" text1="550 person capacity" />
    </PageContainer>
  );
};

export default Venue;
