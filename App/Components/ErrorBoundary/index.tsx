import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// INFO: https://medium.com/wix-engineering/white-screen-of-death-how-to-handle-errors-in-react-native-4d57ac82b6d8

const FallbackUI = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>fatal error</Text>
      </View>
    </SafeAreaView>
  );
};

class MyErrorBoundary extends React.Component<any> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    // A custom error logging function
    console.log('FATAL_CUSTOM_ERROR_CAUGHT:', error, errorInfo);
  }
  render() {
    return this.state.hasError ? <FallbackUI /> : this.props.children;
  }
}

export default MyErrorBoundary;
