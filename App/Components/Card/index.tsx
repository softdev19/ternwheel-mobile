import React from 'react';
import { View, Text, ViewStyle, Pressable } from 'react-native';
import { SvgIcon } from '..';
import Themes from '../../Themes';

interface ICard {
  icon: string;
  title: string;
  text1?: string;
  text2?: string;
  text3?: string;
  iconRight?: string;
  children?: React.ReactNode | React.ReactNode[];
  style?: ViewStyle | ViewStyle[];
  sctionHeader?: string;
}

const Card: React.FC<ICard> = ({ icon, title, text1, text2, text3, children, iconRight, style, sctionHeader }) => {
  return (
    <View>
      {sctionHeader && (
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
          {sctionHeader}
        </Text>
      )}
      <View
        style={[
          Themes.components.wrapperSpace,
          Themes.colors.bgWhite,
          Themes.utils.borderBottom1,
          ,
          {
            flexDirection: 'row',
          },
        ]}
      >
        <View style={[Themes.utils.mr20]}>
          <SvgIcon type={icon} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
            <View>
              <Text style={[Themes.typography.label, Themes.colors.text]}>{title}</Text>
              {text1 && (
                <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>{text1}</Text>
              )}
              {text2 && (
                <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>{text2}</Text>
              )}
              {text3 && (
                <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>{text3}</Text>
              )}
            </View>
            {iconRight && (
              <Pressable>
                <View
                  style={[
                    Themes.utils.width48,
                    Themes.utils.height48,
                    Themes.colors.bgDarken,
                    ,
                    {
                      borderRadius: 24,
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  ]}
                >
                  <SvgIcon type={iconRight} />
                </View>
              </Pressable>
            )}
          </View>
          {children && <View style={[{ marginTop: 20 }, style && style]}>{children}</View>}
        </View>
      </View>
    </View>
  );
};

export default Card;
