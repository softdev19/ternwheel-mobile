
import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Keyboard, Alert } from 'react-native';
import { PageContainer } from '../../Containers';
import Themes from '../../Themes';
import { AuthSplitter, Images, TextInput } from '../../Components';
import AuthOption from './AuthOption';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../../Components/Loader';

const LoginScreen: React.FC<any> = ({ navigation }) => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('')
  // const passwordInputRef = React.createRef();
  const onGoogleLogin = () => { };
  const onAppleLogin = () => { };
  const onPressLogin = () => {
    // navigation.navigate('Home', { screen: 'Today' });
    console.log('performLogin');
    performLogin();
  };
  const onPressSignUp = () => {
    // navigation.navigate('SignUp');

    navigation.navigate('Home', { screen: 'Today' });
  };

  const handleEmailChange = (email: string) => {
    // console.log("ChangeFunction", email);
    setUserEmail(email);
  };
  const performLogin = () => {
    setErrortext('');
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!userEmail || reg.test(userEmail) === false) {
      Alert.alert('Please enter valid Email');
      console.log(userEmail.length);
      console.log('Please fill Email');
      return;
    }
    if (!userPassword || userPassword.length < 3) {
      Alert.alert('Please enter valid Password');
      console.log('Please fill Password');
      return;
    }
    setLoading(true);
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
          AsyncStorage.setItem("token", responseJson.token);
          AsyncStorage.setItem("user_id", responseJson.user._id);
          AsyncStorage.setItem("firstName", responseJson.user.firstName);
          AsyncStorage.setItem("lastName", responseJson.user.lastName);
          AsyncStorage.setItem("email", responseJson.user.email);
          AsyncStorage.setItem("passwordHash", responseJson.user.passwordHash);
          AsyncStorage.setItem("status", responseJson.user.status);
          AsyncStorage.setItem("role_id", responseJson.user.roleId._id);
          AsyncStorage.setItem("role_name", responseJson.user.roleId.name);
          console.log(responseJson.user.email);
          console.log(responseJson.user.passwordHash);
          navigation.navigate('Home', { screen: 'Today' });

        } else {
          setErrortext('Please check your email id or password');
          console.log('Please check your email id or password');
          Alert.alert(responseJson.message);
        }
      })
      .catch((error) => {
        //Hide Loader
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
      <View style={[Themes.components.wrapperSpace, Themes.colors.bgBody]}>
        <Pressable style={{ flex: 1 }}>
          <AuthOption onPress={onGoogleLogin} icon="googleIcon" title="Sign in with Google" />
          <AuthOption onPress={onAppleLogin} icon="appleIcon" title="Sign in with Apple" />
          <AuthSplitter text="or" style={{ marginTop: 8, marginBottom: 24 }} />

          <TextInput autoCapitalize="none" autoComplete="email" keyboardType="email-address" placeholder="Email address"
            onChangeText={handleEmailChange}

            // onSubmitEditing={passwordInputRef.focus()}
            defaultValue={userEmail} />
          <TextInput autoCapitalize="none" autoComplete="password" placeholder="Password" secureTextEntry
            onChangeText={(password: string) => setUserPassword(password)}
            // ref={passwordInputRef}
            // returnKeyType="next"
            onSubmitEditing={Keyboard.dismiss}
          />
          <Pressable onPress={onPressLogin}>

            <View
              style={[
                Themes.utils.shadow,
                Themes.colors.bgPrimary,
                Themes.utils.height56,
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}
            >
              <Text style={[Themes.colors.textWhite, Themes.typography.label]}>Hit the road</Text>
            </View>
          </Pressable>
          <View style={styles.row}>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity onPress={onPressSignUp}>
              <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
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
export default LoginScreen;
