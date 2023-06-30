import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { PageContainer } from '../../Containers';
import Themes from '../../Themes';
import { Images } from '../../Components';
import Item from './Item';

const UserProfileScreen = () => {
  return (
    <PageContainer>
      <View
        style={[
          Themes.colors.bgWhite,
          Themes.utils.borderBottom1,
          Themes.utils.pb32,
          Themes.utils.pt60,
          {
            alignItems: 'center',
            flex: 1,
          },
        ]}
      >
        <Image
          source={Images.avatar}
          style={[
            Themes.utils.mb16,
            {
              borderRadius: 48,
              height: 96,
              width: 96,
            },
          ]}
        />
        <Text style={[Themes.typography.h1, Themes.colors.text]}>Pusha T</Text>
        <Text style={[Themes.typography.text, Themes.colors.text]}>pusha.t@good-music.com</Text>
        <Text style={[Themes.typography.text, Themes.colors.text, Themes.utils.opacity64]}>Artist</Text>
      </View>
      <Item title="Account" icon="userIcon" />
      <Item title="Settings" icon="settingIcon" />
      <Pressable>
        <View
          style={[
            Themes.utils.height56,
            Themes.colors.bgSecondary,
            {
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              margin: 32,
            },
          ]}
        >
          <Text style={[Themes.typography.label, Themes.colors.textPrimary]}>Sign out of Ternwheel</Text>
        </View>
      </Pressable>
    </PageContainer>
  );
};

export default UserProfileScreen;
