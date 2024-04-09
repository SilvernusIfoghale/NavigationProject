import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../component/header/Header';
import FormInput from '../../component/input/FormInput';
import FormButton from '../../component/button/FormButton';
import { loginUser } from '../../api/Auth';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (email == '' || password == '') {
      alert('Please enter all required fields');
    } else {
      const body = { email, password };
      const { status, data } = await loginUser(body);
      console.log('response from registerUser Api', data, status);
      navigation.navigate('Success');
    }
  };

  //getting username from local storage
  // const getUser = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('SavedUser');
  //     if (value !== null) {
  //       setUserName(value);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    //   {
    //     "email": "jewoolafavour2020@gmail.com",
    //      "password":"123456"
    //  }
    <View style={styles.container}>
      <Header headTitle={'Log In'} />
      <FormInput
        title={'E-mail'}
        placeholder={'Enter Your E-mail'}
        value={email}
        setValue={setEmail}
      />
      <FormInput
        title={'Password'}
        placeholder={'Enter Your Password'}
        value={password}
        setValue={setPassword}
      />
      <View style={styles.btn}>
        <FormButton text={'Log In'} click={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 25,
  },
  btn: {
    paddingTop: 30,
  },
});
