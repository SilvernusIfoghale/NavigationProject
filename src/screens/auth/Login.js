import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../component/header/Header';
import FormInput from '../../component/input/FormInput';
import FormButton from '../../component/button/FormButton';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Header headTitle={'Log In'} />
      <FormInput title={'E-mail'} placeholder={'Enter Your E-mail'} />
      <FormInput title={'Password'} placeholder={'Enter Your Password'} />
      <View style={styles.btn}>
        <FormButton
          text={'Log In'}
          click={() => navigation.navigate('Success')}
        />
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
