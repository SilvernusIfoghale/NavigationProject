import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FormInput from '../../component/input/FormInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';
import { VerifyUser } from '../../api/Auth';
export default function Verify() {
  const navigation = useNavigation();

  const [otp, setOtp] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('SavedId');
      if (value !== null) {
        setDetails(value);
        console.log(details);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  //   const getData = async () => {
  //     try {
  //       const body = await AsyncStorage.getItem('SavedId');
  //       console.log('This is the gotten Value', body);
  //       setDetails(body);
  //       console.log('This is the gotten Value', details);
  //       return body != null ? JSON.parse(body) : null;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   useEffect(() => {
  //     getUser();
  //   }, []);

  const handleVerify = async () => {
    setLoading(true);
    console.log('This is the details message', details);
    const { status, data } = await VerifyUser(details);
    setLoading(false);
    if (status < 300) {
      Toast.show({
        type: 'success',
        text1: data?.message || 'Verified Successfully, Thank you!',
      });
      navigation.navigate('Success');
    } else {
      //   alert('Invalid OTP');
      Toast.show({
        type: 'error',
        text1: data?.message || 'Invalid Verification Id!',
      });
      console.log(otp);
    }
  };

  return (
    <View style={styles.container}>
      {<Spinner visible={loading} height="80" width="80" color="#4fa94d" />}
      <Text style={styles.textAccount}>
        Thanks for creating an account with us! Please enter your OTP and click
        on Verify to continue.
      </Text>
      <FormInput
        title="Enter Verification Code"
        placeholder="Enter your OTP"
        value={otp}
        setValue={setOtp}
      />

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 70,
    paddingHorizontal: 25,
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    borderRadius: 7,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 15,
  },
  textAccount: {
    fontSize: 17,
    paddingVertical: 20,
  },
});
