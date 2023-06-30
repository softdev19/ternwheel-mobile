import React, { FC } from 'react';
import { BottomSheet } from 'react-native-btr';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { SvgIcon } from '../../../../Components';
import Themes from '../../../../Themes';

interface Props {
  toggle?: () => void;
  value?: string;
  visible?: boolean;
  setBtnValue?: (value: React.SetStateAction<string>) => void;
}

const MapBottomSheet: FC<Props> = ({ toggle, value, visible, setBtnValue }) => {
  return (
    <BottomSheet visible={visible} onBackButtonPress={toggle} onBackdropPress={toggle}>
      <View style={styles.mainStyle}>
        <View style={styles.subSection}>
          <View style={styles.mainStyle2}>
            <Text style={styles.text}>Blue Bottle</Text>
            <View style={styles.iconStyle}>
              <Pressable onPress={toggle}>
                <View
                  style={[
                    Themes.utils.width48,
                    Themes.utils.height48,
                    Themes.colors.bgDarken,
                    {
                      borderRadius: 24,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 32,
                    },
                  ]}
                >
                  <SvgIcon type={'closeIcon'} />
                </View>
              </Pressable>
            </View>
          </View>
          <Text style={styles.text2}>Coffee Shop</Text>
        </View>
        <View style={styles.subSection2}>
          <View style={styles.iconBuilding}>
            <SvgIcon type="buildingIcon2" />
          </View>
          <Text style={styles.addressText}>{'335 Powell St\nSan Francisco, CA 94102\n(415) 532-1234'}</Text>
        </View>
        <View style={styles.iconsLine}>
          <Pressable>
            <View
              style={[
                Themes.utils.width48,
                Themes.utils.height48,
                Themes.colors.bgDarken,
                {
                  borderRadius: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 32,
                },
              ]}
            >
              <SvgIcon type={'phoneIcon'} />
            </View>
          </Pressable>
          <Pressable>
            <View
              style={[
                Themes.utils.width48,
                Themes.utils.height48,
                Themes.colors.bgDarken,
                {
                  borderRadius: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 32,
                },
              ]}
            >
              <SvgIcon type={'messageSquareIcon'} />
            </View>
          </Pressable>
          <Pressable>
            <View
              style={[
                Themes.utils.width48,
                Themes.utils.height48,
                Themes.colors.bgDarken,
                {
                  borderRadius: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 32,
                },
              ]}
            >
              <SvgIcon type={'mailIcon'} />
            </View>
          </Pressable>
          <Pressable>
            <View
              style={[
                Themes.utils.width48,
                Themes.utils.height48,
                Themes.colors.bgDarken,
                {
                  borderRadius: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 32,
                },
              ]}
            >
              <SvgIcon type={'cornerUpIcon'} />
            </View>
          </Pressable>
        </View>
      </View>
    </BottomSheet>
  );
};

export default MapBottomSheet;

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: '#FFFFFF',
    height: '45%',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  subSection: {
    paddingBottom: 32,
    borderBottomWidth: 0.3,
  },
  mainStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'sfProText-Regular',
    marginLeft: 32,
    marginTop: 32,
    fontWeight: 700,
  },
  text2: {
    marginLeft: 32,
    lineHeight: 24,
  },
  addressText: {
    paddingTop: 8,
    flexDirection: 'row',
    marginLeft: 19,
    lineHeight: 24,
  },
  iconBuilding: {
    marginLeft: 32,
    marginTop: 8,
  },
  subSection2: {
    flexDirection: 'row',
    margin: 'auto',
    marginTop: 16,
  },
  iconsLine: {
    flexDirection: 'row',
    marginLeft: 62,
    marginTop: 32,
    marginRight: 62,
    justifyContent: 'space-between',
  },
  iconStyle: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
});
