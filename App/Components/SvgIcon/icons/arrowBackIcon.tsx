import React from 'react';
import { Path } from 'react-native-svg';

export default {
  Content: () => (
    <>
      <Path
        d="M15 8H1M1 8L8 15M1 8L8 1"
        stroke="#010101"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
};
