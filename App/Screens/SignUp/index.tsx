import React from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import { PageContainer } from '../../Containers';
import Themes from '../../Themes';
import { AuthSplitter, Images, TextInput } from '../../Components';
import AuthOption from './AuthOption';
import Loader from '../../Components/Loader';

const SignUpScreen: React.FC<any> = ({ navigation }) => {
  const [userEmail, setUserEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [errortext, setErrortext] = React.useState('')
  const onPressSignUp = () => {
    // navigation.navigate('Home', { screen: 'Today' });
    performSignUp();
  };
  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  const performSignUp = async () => {
    setErrortext('');
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!userEmail || reg.test(userEmail) === false) {
      Alert.alert('Please enter valid Email');
      console.log(userEmail.length);
      console.log('Please enter valid Email');
      return;
    }
    if (!firstName) {
      Alert.alert('Please enter valid First Name');
      console.log('Please enter valid First Name');
      return;
    }
    if (!lastName) {
      Alert.alert('Please enter valid Last Name');
      console.log('Please enter valid Last Name');
      return;
    }
    if (!userPassword || userPassword.length < 3) {
      Alert.alert('Please enter valid Password');
      console.log('Please enter valid Password');
      return;
    }
    setLoading(true);
    fetch('https://gdcknbxas6.execute-api.us-east-1.amazonaws.com/staging/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        firstName: firstName,
        lastName: lastName,
        role: "ARTIST"

      }),
      headers: {
        //Header Defination
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(JSON.stringify(responseJson));
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.token != null && responseJson.token != '') {
          // AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
          // console.log(responseJson.data[0].user_id);
          // navigation.navigate('Home', { screen: 'Today' });
        } else {
          setErrortext('Please check your email id or password');
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        console.log(error)
        setLoading(false);
        console.error(error);
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
          <TextInput autoCapitalize="none" autoComplete="email" keyboardType="email-address" placeholder="Email address" onChangeText={(txt: string) => { setUserEmail(txt) }} />
          <TextInput autoCapitalize="words" autoComplete="name" keyboardType="text" placeholder="Firsst Name" onChangeText={(txt: string) => { setFirstName(txt) }} />
          <TextInput autoCapitalize="words" autoComplete="name" keyboardType="text" placeholder="Last Name" onChangeText={(txt: string) => { setLastName(txt) }} />
          <TextInput autoCapitalize="none" autoComplete="password" placeholder="Password" secureTextEntry onChangeText={(txt: string) => { setUserPassword(txt) }} />
          <Pressable onPress={onPressSignUp}>
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
              <Text style={[Themes.colors.textWhite, Themes.typography.label]}>Sign Up</Text>
            </View>
          </Pressable>
          <AuthSplitter text="Already have an account" style={{ marginTop: 8, marginBottom: 24 }} />
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
              <Text style={[Themes.colors.textWhite, Themes.typography.label]}>Login</Text>
            </View>
          </Pressable>
        </Pressable>
      </View>
    </PageContainer>
  );
};

export default SignUpScreen;
