import React from 'react';
import { View, Pressable } from 'react-native';
import { Card, SvgIcon } from '../../Components';
import { PageContainer } from '../../Containers';
import Themes from '../../Themes';

const Contacts = () => {
  return (
    <PageContainer>
      <Card
        icon="userSqureIcon"
        title="Tour Manager"
        text1="Ashant Abdullah"
        text2="ashanti@rhymesayers.com"
        text3="(612) 244-3353"
      >
        <View
          style={{
            flexDirection: 'row',
          }}
        >
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
                ,
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
                ,
                {
                  borderRadius: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}
            >
              <SvgIcon type={'mailIcon'} />
            </View>
          </Pressable>
        </View>
      </Card>
      <Card
        icon="userSqureIcon"
        title="RSE Production"
        text1="Randy Hawkins"
        text2="randy@rhymesayers.com"
        text3="(612) 244-3353"
      >
        <View
          style={{
            flexDirection: 'row',
          }}
        >
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
                ,
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
                ,
                {
                  borderRadius: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}
            >
              <SvgIcon type={'mailIcon'} />
            </View>
          </Pressable>
        </View>
      </Card>
    </PageContainer>
  );
};

export default Contacts;
