import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import Themes from '../../Themes';
import { SvgIcon } from '../';

const Tabbar = ({ state, descriptors, navigation }: any) => {
  return (
    <View
      style={[
        Themes.colors.bgWhite,
        Themes.utils.borderTop1,
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 18,
        },
      ]}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const title = label === 'Home' ? 'Today' : label;
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SvgIcon type={label} fillColor={isFocused ? Themes.colors.color.primary : Themes.colors.color.text} />
              <Text
                style={[
                  Themes.typography.label,
                  Themes.utils.mt10,
                  {
                    color: isFocused ? Themes.colors.color.primary : Themes.colors.color.text,
                    opacity: isFocused ? 1 : 0.64,
                  },
                ]}
              >
                {title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabbar;
