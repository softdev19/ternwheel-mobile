import React from 'react';
import { View, Text } from 'react-native';

const AuthSplitter = ({ text, style }: any) => (
  <View
    style={[
      {
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: 1,
        marginHorizontal: 10,
      },
      style,
    ]}
  >
    <View
      style={{
        backgroundColor: 'rgba(1, 1, 1, 0.08);',
        flex: 1,
        flexDirection: 'row',
        height: 1,
      }}
    />
    <Text
      style={{
        backgroundColor: '#FAFCFE',
        borderRadius: 12,
        color: '#010101A3',
        flex: 0,
        flexDirection: 'row',
        flexGrow: 0,
        // fontFamily: "sf-700",
        height: 22,
        overflow: 'hidden',
        paddingHorizontal: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        textTransform: 'uppercase',
      }}
    >
      {text}
    </Text>
    <View
      style={{
        backgroundColor: 'rgba(1, 1, 1, 0.08);',
        flex: 1,
        flexDirection: 'row',
        height: 1,
      }}
    />
  </View>
);

export default AuthSplitter;
