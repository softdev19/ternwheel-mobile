import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

function TextInputComponent({
  style,
  autoComplete = 'name',
  keyboardType = 'default',
  autoCapitalize = "none",
  onChangeText,
  placeholder,
  defaultValue = '',
  secureTextEntry = false,
}: any): JSX.Element {
  return (
    <View
      style={{
        marginBottom: 16,
      }}
    >
      <TextInput
        style={StyleSheet.flatten([
          {
            backgroundColor: ' rgba(1, 1, 1, 0.04)',
            borderRadius: 8,
            height: 56,
            paddingHorizontal: 16,
            // fontFamily: "sf-500",
            fontSize: 16,
            // lineHeight: 24,
            color: '#010101',
          },
          style && style,
        ])}
        placeholder={placeholder}
        placeholderTextColor="#01010152"
        // keyboardType={keyboardType}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        // textContentType="password"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export default TextInputComponent;
