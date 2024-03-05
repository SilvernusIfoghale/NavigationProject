import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import FormButton from '../../component/button/FormButton';

export default function Success({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../../assets/images/red-check-icon.png')}
          style={styles.img}
        />
      </View>
      <Text style={styles.success}>Successfully Registered</Text>
      <Text style={styles.congrat}>
        Congratulations Your account registered in this application
      </Text>
      <View style={styles.btn}>
        <FormButton
          text={'Thank u'}
          click={() => {
            navigation.navigate('AppStackNavigator');
          }}
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
  success: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  congrat: {
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 28,
    paddingHorizontal: 10,
  },
  btn: { paddingTop: 100 },
  img: {
    width: 290,
    height: 290,
  },
  imgContainer: {
    paddingTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
