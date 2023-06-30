import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Card, SvgIcon, TourBudgetCard } from '../../Components';
import IconText from '../../Components/TourBudgetCard/IconText';
import { PageContainer } from '../../Containers';
import Themes from '../../Themes';

const Budget: React.FC<any> = ({ navigation }) => {
  return (
    <PageContainer>
      <TourBudgetCard navigation={navigation} />
      <Text
        style={[
          Themes.colors.bgBody,
          Themes.components.wrapperSpace,
          Themes.utils.pb16,
          Themes.typography.button,
          Themes.colors.text,
          Themes.utils.opacity64,
          Themes.utils.borderBottom1,
        ]}
      >
        Goals
      </Text>
      <View
        style={[
          Themes.components.wrapperSpace,
          Themes.utils.borderBottom1,
          Themes.colors.bgWhite,
          { flexDirection: 'row' },
        ]}
      >
        <IconText icon="coinsIcon" title="$8,421.03" text="Net Profit" style={[Themes.typography.label]} />
        <IconText icon="progressIcon" title="70%" text="Profit margin" style={[Themes.typography.label]} />
      </View>
      <Pressable>
        <View
          style={[
            Themes.colors.bgWhite,
            Themes.utils.px32,
            Themes.utils.py16,
            Themes.utils.borderBottom1,
            {
              flexDirection: 'row',
              alignItems: 'center',
            },
          ]}
        >
          <SvgIcon type="editIcon" />
          <Text style={[Themes.typography.textLarge, Themes.colors.textPrimary, Themes.utils.pl16]}>Adjust goals</Text>
        </View>
      </Pressable>
      <Text
        style={[
          Themes.colors.bgBody,
          Themes.components.wrapperSpace,
          Themes.utils.pb16,
          Themes.typography.button,
          Themes.colors.text,
          Themes.utils.opacity64,
          Themes.utils.borderBottom1,
        ]}
      >
        Fees and buyouts
      </Text>
      <View style={[Themes.colors.bgWhite]}>
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
              <SvgIcon type="coinIcon" />
            </View>
            <View style={[Themes.utils.pl16, Themes.utils.pr16]}>
              <Text style={[Themes.typography.label, Themes.colors.text]}>Agent Fee</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={[Themes.typography.label, Themes.colors.text, Themes.utils.pr16]}>$1,200.00</Text>
            <SvgIcon type="arrowRightIcon" />
          </View>
        </Pressable>
        <Pressable
          style={[
            Themes.colors.bgWhite,
            Themes.utils.px32,
            Themes.utils.py16,
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
              <SvgIcon type="plusPIcon" />
            </View>
            <View style={[Themes.utils.pl16, Themes.utils.pr16]}>
              <Text style={[Themes.typography.label, Themes.colors.textPrimary]}>Add fee or buyout</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </PageContainer>
  );
};

export default Budget;
