import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import FormInput from '../../component/input/FormInput';
import Header from '../../component/header/Header';
import { useNavigation } from '@react-navigation/native';
import FormButton from '../../component/button/FormButton';
import { registerUser } from '../../api/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

export default function CreateAccount() {
  const navigation = useNavigation();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (firstname == '' || lastname == '' || email == '' || password == '') {
      alert('Please enter all required fields');
    } else {
      setLoading(true);
      const body = { firstname, lastname, email, password };
      const { status, data } = await registerUser(body);
      console.log('response from registerUser Api', data, status);
      const value = await data.userId;
      setLoading(false);
      try {
        await AsyncStorage.setItem('SavedId', value);
        console.log('this is the value to be passed ' + value);
        handleNext();
      } catch (error) {
        console.log(error);
      }

      // handleSaveData();
    }
  };

  // const handleSaveData = async () => {
  //   try {
  //     await AsyncStorage.setItem('SavedUser', value);
  //     console.log('this is the value to be passed' + value);
  //     handleNext();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleNext = () => {
    navigation.navigate('Verify');
  };

  // const storeData = async (value) => {
  //   try {
  //     await AsyncStorage.setItem('my-key', value);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const storeData = async (body) => {
  //   try {
  //     const jsonValue = JSON.stringify(body);
  //     await AsyncStorage.setItem('SavedData', jsonValue);
  //     console.log('This is the saved value', jsonValue);
  //     console.log('This is the saved value', jsonValue.userId);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      {<Spinner visible={loading} height="80" width="80" color="#4fa94d" />}
      <Header headTitle="Register" />
      <FormInput
        title="First Name"
        placeholder="Enter Your Fristname"
        value={firstname}
        setValue={setFirstname}
      />
      <FormInput
        title="Last Name"
        placeholder="Enter Your Lastname"
        value={lastname}
        setValue={setLastname}
      />
      <FormInput
        title="Email"
        placeholder="Enter Your E-mail"
        value={email}
        setValue={setEmail}
      />
      <FormInput
        title="Password"
        placeholder="Enter Your Password"
        value={password}
        setValue={setPassword}
      />
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
        <FormButton text={'Sign Up'} click={handleSubmit} />

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
    paddingVertical: 20,
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
    paddingVertical: 4,
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
