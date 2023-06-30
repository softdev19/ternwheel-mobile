import React from 'react';
import { Path } from 'react-native-svg';

export default {
  Content: () => (
    <>
      <Path
        opacity="0.4"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#302FDE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M7.5 12L10.5 15L16.5 9" stroke="#302FDE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
};
