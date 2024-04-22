import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../component/header/Header';
import FormInput from '../../component/input/FormInput';
import FormButton from '../../component/button/FormButton';
import { loginUser } from '../../api/Auth';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    setLoading(true);
    if (email == '' || password == '') {
      alert('Please enter all required fields');
    } else {
      const body = { email, password };
      const { status, data } = await loginUser(body);
      setLoading(false);
      console.log('response from registerUser Api', data, status);
      navigation.navigate('Success');
    }
  };

  return (
    //   {
    //     "email": "jewoolafavour2020@gmail.com",
    //      "password":"123456"
    //  }
    <View style={styles.container}>
      {<Spinner visible={loading} height="80" width="80" color="#4fa94d" />}
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
