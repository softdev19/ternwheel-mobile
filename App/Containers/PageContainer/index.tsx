import React from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import Themes from '../../Themes';

interface IPageContainer {
  children: React.ReactNode | React.ReactNode[];
  style?: ViewStyle | ViewStyle[];
  plain?: Boolean;
  safeareaEdges?: Edge[] | undefined;
}

const PageContainer: React.FC<IPageContainer> = ({ children, style, plain, safeareaEdges }) => {
  return (
    <SafeAreaView edges={safeareaEdges} style={[{ ...Themes.colors.bgBody, flex: 1 }, style && style]}>
      {plain ? children : <ScrollView>{children}</ScrollView>}
    </SafeAreaView>
  );
};

export default PageContainer;
