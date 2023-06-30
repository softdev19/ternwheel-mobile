import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { PageContainer } from '../../Containers';
import Themes from '../../Themes';
import { HomeTopbar, ShowDetailsCard, TourBudgetCard } from '../../Components';
// import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen: React.FC<any> = ({ navigation }) => {
  return (
    <PageContainer plain safeareaEdges={['top']}>
      <View
        style={[
          Themes.utils.py32,
          Themes.utils.pl32,
          Themes.utils.borderBottom1,
          {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}
      >
        <HomeTopbar.TopbarContent />
        <HomeTopbar.TopbarRightButton navigation={navigation} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={[Themes.components.wrapperSpace]}>
          <Text style={[Themes.typography.label, Themes.colors.text, Themes.utils.opacity64, Themes.utils.mb16]}>
            Next show
          </Text>
          <ShowDetailsCard navigation={navigation} />
          <Text
            style={[
              Themes.typography.label,
              Themes.colors.text,
              Themes.utils.opacity64,
              Themes.utils.mb16,
              Themes.utils.mt30,
            ]}
          >
            Tour budget
          </Text>
          <TourBudgetCard navigation={navigation} isDetails />
          <Pressable>
            <View
              style={[
                Themes.utils.height56,
                Themes.colors.bgSecondary,
                Themes.utils.mt16,
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                },
              ]}
            >
              <Text style={[Themes.typography.label, Themes.colors.textPrimary]}>See older tours</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </PageContainer>
  );
};

export default HomeScreen;
