import React from 'react';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import sources from './sources';

interface ISvgIcon {}

function SvgIcon({
  type,
  style = {},
  fillColor = undefined,
  opacity,
  strokeColor = undefined,
  avatarUri,
  scale,
  flip = true,
  roundabout_angle = 180,
}: any): JSX.Element {
  const { Content, viewBox, width, height, fill } = sources[type] || {};
  if (!Content) {
    return <View />;
  }

  const defSizeAdjusted = {
    width,
    height,
  };

  return (
    <Svg viewBox={viewBox} style={[defSizeAdjusted, style]} fill={fill}>
      <Content
        fillColor={fillColor}
        opacity={opacity}
        strokeColor={strokeColor}
        avatarUri={avatarUri}
        scale={scale}
        flip={flip}
        roundabout_angle={roundabout_angle}
      />
    </Svg>
  );
}

export default SvgIcon;
