import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { PageContainer } from '../../Containers';
import Themes from '../../Themes';
import { Card, MapboxSmall, SvgIcon } from '../../Components';
import { Pages } from '../../Routes';

const TravelAndHotel = ({ navigation }: any) => {
  const onPressNearByDetails = () => navigation.push(Pages.NearbyMap);
  return (
    <PageContainer safeareaEdges={['left', 'right', 'bottom']}>
      <Card
        icon="planeIcon"
        iconRight="ticketIcon"
        title="Flight from SFO to LAX"
        text1="Alaska #5678"
        text2="June 8, 2022"
        sctionHeader="Flights"
      >
        <View
          style={[
            Themes.utils.shadow2,
            Themes.colors.bgWhite,
            Themes.utils.px16,
            Themes.utils.py16,
            {
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#FFFFFF',
            },
          ]}
        >
          <View
            style={[
              Themes.colors.bgPrimary,
              {
                position: 'absolute',
                height: 36,
                top: -18,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 18,
              },
            ]}
          >
            <Text style={[Themes.colors.textWhite, { padding: 8 }]}>On time</Text>
          </View>
          <View style={{ width: '100%' }}>
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}
            >
              <View>
                <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>Departs</Text>
                <Text style={[Themes.typography.label, Themes.colors.text]}>10:30am</Text>
              </View>
              <View style={[Themes.colors.bgLightPurple, { height: 2, width: 90 }]} />
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>Arrives</Text>
                <Text style={[Themes.typography.label, Themes.colors.text]}>2:30pm</Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
      <Card
        icon="planeLandIcon"
        iconRight="ticketIcon"
        title="Flight from PDX to SFO"
        text1="Alaska #5678"
        text2="June 8, 2022"
      >
        <View
          style={[
            Themes.utils.shadow2,
            Themes.colors.bgWhite,
            Themes.utils.px16,
            Themes.utils.py16,
            {
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#FFFFFF',
            },
          ]}
        >
          <View
            style={[
              Themes.colors.bgSecondary,
              {
                position: 'absolute',
                height: 36,
                top: -18,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 18,
              },
            ]}
          >
            <Text style={[Themes.colors.textPrimary, { padding: 8 }]}>Arrived</Text>
          </View>
          <View style={{ width: '100%' }}>
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}
            >
              <View>
                <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>Departed</Text>
                <Text style={[Themes.typography.label, Themes.colors.text]}>10:30am</Text>
              </View>
              <View style={[Themes.colors.bgLightPurple, { height: 2, width: 90 }]} />
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>Arrived</Text>
                <Text style={[Themes.typography.label, Themes.colors.text]}>2:30pm</Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
      <Card
        sctionHeader="Hotel"
        icon="buildingIcon"
        iconRight="ticketIcon"
        title="Stay at Westin St. Francis"
        text1="Alaska #5678"
        text2="June 8, 2022"
      >
        <MapboxSmall />
      </Card>
      <Pressable onPress={onPressNearByDetails}>
        <View
          style={[
            Themes.colors.bgWhite,
            Themes.utils.borderBottom1,
            {
              padding: 32,
              paddingVertical: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 60,
            },
          ]}
        >
          <Text style={[Themes.typography.label, Themes.colors.textPrimary]}>Find spots nearby</Text>
          <SvgIcon type="arrowLeftIcon" style={{ top: 3 }} />
        </View>
      </Pressable>
    </PageContainer>
  );
};

export default TravelAndHotel;
