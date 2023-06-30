import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Card, MapboxSmall, SvgIcon } from '../../Components';
import { PageContainer } from '../../Containers';
import Themes from '../../Themes';
const ExpenseDetails = () => {
  return (
    <PageContainer>
      <Text
        style={[
          Themes.colors.bgBody,
          // Themes.components.wrapperSpace,
          Themes.utils.pb16,
          Themes.typography.button,
          Themes.colors.text,
          Themes.utils.opacity64,
          Themes.utils.borderBottom1,
          {
            paddingLeft: 32,
          },
        ]}
      >
        Payment details
      </Text>
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
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
          >
            <SvgIcon type="creditCardIcon" />
          </View>
          <View style={[Themes.utils.pl16, Themes.utils.pr16]}>
            <Text style={[Themes.typography.label, Themes.colors.text]}>Ternwheel Visa</Text>

            <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>Ending in 1234</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SvgIcon type="arrowRightIcon" />
        </View>
      </Pressable>
      <Card
        sctionHeader="Merchant information"
        icon="buildingIcon2"
        iconRight="cornerUpIcon"
        title="Starbucks"
        text1="335 Powell St"
        text2="San Francisco, CA 94102"
      >
        <MapboxSmall />
      </Card>
      <View style={[Themes.components.wrapperSpace]}>
        <Pressable>
          <View
            style={[
              Themes.utils.height56,
              Themes.colors.bgSecondary,
              Themes.utils.mt16,
              {
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              },
            ]}
          >
            <Text style={[Themes.typography.label, Themes.colors.textPrimary]}>Dispute charge</Text>
          </View>
        </Pressable>
      </View>
    </PageContainer>
  );
};

export default ExpenseDetails;
