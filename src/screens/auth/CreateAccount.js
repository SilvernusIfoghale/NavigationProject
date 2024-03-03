import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import FormInput from '../../component/input/FormInput';
import Header from '../../component/header/Header';
import FormButton from '../../component/button/FormButton';

export default function CreateAccount({ navigation }) {
  return (
    <View style={styles.container}>
      <Header headTitle={'Register'} />
      <FormInput title={'Full Name'} placeholder={'Enter Your Name'} />
      <FormInput title={'Email'} placeholder={'Enter Your E-mail'} />
      <FormInput title={'Password'} placeholder={'Enter Your Password'} />
      <View style={styles.middleLine}>
        <View style={styles.line}></View>
        <Text style={styles.textOr}>OR</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.socialContainer}>
        <View style={styles.socialIcon}>
          <Image
            source={require('../../../assets/images/google.png')}
            style={styles.socialImg}
          />
        </View>
        <View style={styles.socialIcon}>
          <Image
            source={require('../../../assets/images/facebook.png')}
            style={styles.socialImg}
          />
        </View>
      </View>
      <View style={styles.bottomSection}>
        <FormButton
          text={'Sign Up'}
          click={() => {
            navigation.navigate('Success');
          }}
        />

        <View style={styles.bottomContainer}>
          <Text style={styles.textAccount}>Already have an account?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text style={styles.buttonText}> Sign In</Text>
          </TouchableOpacity>
        </View>
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

  middleLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    paddingVertical: 40,
  },
  textOr: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  line: {
    borderBottomColor: 'silver',
    borderBottomWidth: 2,
    width: 140,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 35,
    paddingVertical: 10,
  },
  socialIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 8,
    height: 45,
    width: 70,
  },
  socialImg: {
    height: 28,
    width: 28,
  },
  bottomSection: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    left: 26,
    alignItems: 'center',
  },

  bottomContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'red',
  },
  textAccount: {
    fontSize: 17,
  },
});
