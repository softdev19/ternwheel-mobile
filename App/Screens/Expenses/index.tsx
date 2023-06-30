import React from 'react';
import { View, Text } from 'react-native';
import { PageContainer } from '../../Containers';
import Themes from '../../Themes';
import { Images, ExpensesItem } from '../../Components';

const ExpensesScreen: React.FC<any> = ({ navigation }) => {
  return (
    <PageContainer>
      <View>
        <ExpensesItem navigation={navigation} title="Starbucks" date="08/01/2023" price={25} />
        <ExpensesItem navigation={navigation} title="Panera Bread" date="08/01/2023" price={35} />
        <ExpensesItem navigation={navigation} title="Cheesecake Factory" date="08/01/2023" price={74} />
        <ExpensesItem navigation={navigation} title="Guitar Center" date="08/01/2023" price={15} />
        <ExpensesItem navigation={navigation} title="Blue Bottle" date="08/01/2023" price={25} />
        <ExpensesItem navigation={navigation} title="Starbucks" date="08/01/2023" price={28} />
      </View>
    </PageContainer>
  );
};

export default ExpensesScreen;
