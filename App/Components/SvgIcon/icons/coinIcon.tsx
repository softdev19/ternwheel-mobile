import React from 'react';
import { Path } from 'react-native-svg';

export default {
  Content: () => (
    <>
      <Path
        opacity="0.4"
        d="M10.1011 4C11.3636 2.76281 13.0928 2 15.0001 2C18.8661 2 22.0001 5.13401 22.0001 9C22.0001 10.9073 21.2372 12.6365 20 13.899"
        stroke="#302FDE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
        stroke="#302FDE"
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
