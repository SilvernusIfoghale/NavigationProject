import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import FormInput from '../../component/input/FormInput';
import Header from '../../component/header/Header';
import { useNavigation } from '@react-navigation/native';
import FormButton from '../../component/button/FormButton';
import { registerUser } from '../../api/Auth';

export default function CreateAccount() {
  const navigation = useNavigation();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (firstname == '' || lastname == '' || email == '' || password == '') {
      alert('Please enter all required fields');
    } else {
      const body = { firstname, lastname, email, password };
      const { status, data } = await registerUser(body);
      console.log('response from registerUser Api', data, status);
      navigation.navigate('Login');
    }
  };

  //     fetch('https://lauhub.onrender.com/api/v1/user/create-user', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         firstname: firstname,
  //         lastname: lastname,
  //         email: email,
  //         password: password,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((json) => console.log(json));
  //     navigation.navigate('Success');
  //   }
  // };

  return (
    <View style={styles.container}>
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
