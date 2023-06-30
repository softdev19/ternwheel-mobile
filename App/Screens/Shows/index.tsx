import React from 'react';
import { View } from 'react-native';
import { PageContainer } from '../../Containers';
import { ShowItem } from '../../Components';

const ShowsScreen: React.FC = () => {
  return (
    <PageContainer>
      <View>
        <ShowItem date="2023-2-7T03:24:00" address="San Francisco, CA" venue="The Independent" />
        <ShowItem date="2023-2-8T03:24:00" address="San Francisco, CA" venue="The Independent" />
        <ShowItem date="2023-2-9T03:24:00" address="San Francisco, CA" venue="The Independent" />
        <ShowItem date="2023-2-10T03:24:00" address="San Francisco, CA" venue="The Independent" />
        <ShowItem date="2023-2-11T03:24:00" address="San Francisco, CA" venue="The Independent" />
        <ShowItem date="2023-2-12T03:24:00" address="San Francisco, CA" venue="The Independent" />
        <ShowItem date="2023-2-13T03:24:00" address="San Francisco, CA" venue="The Independent" />
        <ShowItem date="2023-2-14T03:24:00" address="San Francisco, CA" venue="The Independent" />
        <ShowItem date="2023-2-15T03:24:00" address="San Francisco, CA" venue="The Independent" />
      </View>
    </PageContainer>
  );
};

export default ShowsScreen;
