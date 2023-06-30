import React from 'react';
import { View, Pressable, Text } from 'react-native';
import Themes from '../../Themes';
import { Pages } from '../../Routes';
import Svg, { Rect } from 'react-native-svg';
import IconText from './IconText';
import { SvgIcon } from '..';

const data = [30, 45, 58, 50, 55, 45, 60];
const barWidth = 40;
const barSpacing = 2;

const TourBudgetCard = ({ navigation, isDetails = false }: any) => {
  const onPressDetails = () => navigation.push(Pages.TourDetails);
  const chartHeight = Math.max(...data) + 20;

  return (
    <View style={[isDetails && Themes.utils.shadow, Themes.colors.bgWhite, { flex: 1 }]}>
      <View style={[Themes.components.wrapperSpace]}>
        <IconText
          icon="checkCircleIcon"
          title="You’re under buget"
          text="You’re averaging $133.40 in expenses per show."
        />
      </View>
      <View style={[Themes.components.wrapperSpace]}>
        <Svg height={chartHeight}>
          {data.map((value, index) => (
            <Rect
              key={index}
              x={index * (barWidth + barSpacing)}
              y={chartHeight - value}
              width={barWidth}
              height={value}
              fill="rgba(48, 47, 222, 0.64)"
            />
          ))}
        </Svg>
      </View>
      <View style={[Themes.components.wrapperSpace, { paddingBottom: 0 }]}>
        <IconText icon="coinsIcon" title="$8,421.03" text="Projected net profit" />
      </View>
      <View style={[Themes.components.wrapperSpace, Themes.utils.borderBottom1, { flexDirection: 'row' }]}>
        <IconText icon="progressIcon" title="70.18%" text="Projected profit margin" style={[Themes.typography.label]} />
        <IconText icon="coinsHandIcon" title="$12,000.00" text="Gross fees" style={[Themes.typography.label]} />
      </View>
      {isDetails && (
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
            <Text style={[Themes.typography.label, Themes.colors.textPrimary]}>Tour details</Text>
            <SvgIcon type="arrowLeftIcon" style={{ top: 3 }} />
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default TourBudgetCard;
