
import React, { useState, Component, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Keyboard, Alert } from 'react-native';
import { PageContainer } from '../../Containers';
import Themes from '../../Themes';
import { AuthSplitter, Images, TextInput } from '../../Components';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../../Components/Loader';

const SplashScreen: React.FC<any> = ({ navigation }) => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // write your code here, it's like componentWillMount
    setLoading(true);
    setTimeout(function () {
      console.log("performLogin");
      performLogin();
    }, 1000);
  }, [])
  // componentDidMount(){
  //   var that = this;
  // setLoading(true);
  // setTimeout(function () {
  //   performLogin
  // }, 1000);
  // };
  const performLogin = () => {
    let userEmail = AsyncStorage.getItem("email");
    console.log(userEmail);
    let userPassword = AsyncStorage.getItem("passwordHash");
    console.log(userPassword);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!userEmail || reg.test(userEmail) === false) {
      // Alert.alert('Please enter valid Email');
      console.log('Please fill Email');
      navigation.navigate('Login');
      return;
    }
    if (!userPassword || userPassword.length < 3) {
      // Alert.alert('Please enter valid Password');
      console.log('Please fill Password');
      navigation.navigate('Login');
      return;
    }
    fetch('https://gdcknbxas6.execute-api.us-east-1.amazonaws.com/staging/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.token != null && responseJson.token != '') {
          // AsyncStorage.setItem('token', responseJson.token);
          // AsyncStorage.setItem('user_id', responseJson.user._id);
          // AsyncStorage.setItem('firstName', responseJson.user.firstName);
          // AsyncStorage.setItem('lastName', responseJson.user.lastName);
          // AsyncStorage.setItem('email', responseJson.user.email);
          // AsyncStorage.setItem('passwordHash', responseJson.user.passwordHash);
          // AsyncStorage.setItem('status', responseJson.user.status);
          // AsyncStorage.setItem('role_id', responseJson.user.roleId._id);
          // AsyncStorage.setItem('role_name', responseJson.user.roleId.name);
          navigation.navigate('Home', { screen: 'Today' });

        } else {
          navigation.navigate('Login');
        }
      })
      .catch((error) => {
        //Hide Loader
        navigation.navigate('Login');
        console.log(error)
        setLoading(false);
        Alert.alert(error);
      });
  };

  return (
    <PageContainer>
      <View style={[Themes.components.wrapperSpace, Themes.utils.borderBottom1, Themes.colors.bgWhite]}>

        <Loader loading={loading} />
        <Image source={Images.logo} style={Themes.utils.mb16} />
        <Text style={[Themes.typography.h1, Themes.utils.mb8, Themes.colors.textPrimary]}>Ternwheel</Text>
        <Text style={[Themes.typography.h1, Themes.utils.mb8, Themes.colors.textPrimary, Themes.utils.opacity64]}>
          Pocket manager for the stage, road, and wallet.
        </Text>
      </View>
      <View style={[Themes.components.wrapperSpace, Themes.colors.bgWhite]}>

      </View>
    </PageContainer>
  );
};
const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: Themes.colors.textPrimary.color,
  },
  link: {
    fontWeight: 'bold',
    color: Themes.colors.textPrimary.color,
  },
})
export default SplashScreen;
// function componentDidMount() {
//   throw new Error('Function not implemented.');
// }

