import React, { useState } from 'react';
import Themes from '../../Themes';
import { View, Text, Pressable, TextInput, Platform } from 'react-native';
import { SvgIcon } from '..';
import styles from './near-by-map-topbar.styles';
import { ScrollView } from 'react-native-gesture-handler';

const TopbarContent: React.FC<any> = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState('');
  const [showMap, setShowMap] = useState(true);
  const [showList, setShowList] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <SvgIcon type="arrowBackIcon" />
        </Pressable>
        <Text
          style={[
            Themes.typography.label,
            Themes.colors.text,
            {
              fontSize: 18,
              lineHeight: 20,
            },
          ]}
        >
          Near Westin St. Francis
        </Text>
        <Pressable style={{ paddingTop: 16 }}>
          <SvgIcon type="optionsIcon" />
        </Pressable>
      </View>
      <View
        style={[
          Themes.colors.bgDarken,
          Themes.utils.px16,
          Themes.utils.mb16,
          Themes.utils.height56,
          {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 8,

            // width: Platform.OS === 'ios' && '90%',
          },
        ]}
      >
        <SvgIcon type="searchIcon" />
        <TextInput
          placeholderTextColor={Themes.colors.color.darkenLight}
          style={[
            Themes.utils.pl14,
            Themes.typography.textLarge,
            Themes.colors.text,
            // Themes.utils.height56,
            {
              // width: '95%',
              // backgroundColor: "red",
              // height: 500,
              // top:40,
              // paddingTop:40
            },
          ]}
          placeholder="What are you looking for?"
          onChangeText={(e) => setSearchValue(e)}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginBottom: Platform.OS === 'android' && 16,
        }}
      >
        {searchValue.length === 0 ? (
          <>
            <ScrollView horizontal>
              <Pressable
                style={{
                  marginHorizontal: 4,
                  borderRadius: 22,
                  overflow: 'hidden',
                }}
              >
                <Text
                  style={[
                    Themes.colors.bgLightPurple,
                    Themes.utils.px16,
                    Themes.utils.py12,
                    Themes.colors.textPrimary,
                    Themes.typography.textLarge,
                  ]}
                >
                  Restaurants
                </Text>
              </Pressable>
              <Pressable
                style={{
                  marginHorizontal: 4,
                  borderRadius: 22,
                  overflow: 'hidden',
                }}
              >
                <Text
                  style={[
                    Themes.colors.bgLightPurple,
                    Themes.utils.px16,
                    Themes.utils.py12,
                    Themes.colors.textPrimary,
                    Themes.typography.textLarge,
                  ]}
                >
                  Coffee shops
                </Text>
              </Pressable>
              <Pressable
                style={{
                  marginHorizontal: 4,
                  borderRadius: 22,
                  overflow: 'hidden',
                }}
              >
                <Text
                  style={[
                    Themes.colors.bgLightPurple,
                    Themes.utils.px16,
                    Themes.utils.py12,
                    Themes.colors.textPrimary,
                    Themes.typography.textLarge,
                  ]}
                >
                  Bars
                </Text>
              </Pressable>
              <Pressable
                style={{
                  marginHorizontal: 4,
                  borderRadius: 22,
                  overflow: 'hidden',
                }}
              >
                <Text
                  style={[
                    Themes.colors.bgLightPurple,
                    Themes.utils.px16,
                    Themes.utils.py12,
                    Themes.colors.textPrimary,
                    Themes.typography.textLarge,
                  ]}
                >
                  Dispensaries
                </Text>
              </Pressable>
            </ScrollView>
          </>
        ) : (
          <>
            <View style={styles.toggleBtnContainer}>
              <Pressable
                style={[styles.toggleBtn, { backgroundColor: showMap ? 'white' : 'rgba(0,0,0,0.08)' }]}
                onPress={() => {
                  setShowMap(true);
                  setShowList(false);
                }}
              >
                <SvgIcon type="mapIcon" />
                <Text
                  style={[
                    Themes.typography.textLarge,
                    {
                      color: showMap ? 'black' : 'rgba(1, 1, 1, 0.64)',
                      marginLeft: 11,
                    },
                  ]}
                >
                  Map
                </Text>
              </Pressable>
              <Pressable
                style={[styles.toggleBtn, { backgroundColor: showList ? 'white' : 'rgba(0,0,0,0.08)' }]}
                onPress={() => {
                  setShowMap(false);
                  setShowList(true);
                }}
              >
                <SvgIcon type="listIcon" />
                <Text
                  style={[
                    Themes.typography.textLarge,
                    {
                      color: showList ? 'black' : 'rgba(1, 1, 1, 0.64)',
                      marginLeft: 11,
                    },
                  ]}
                >
                  List
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default { TopbarContent };
