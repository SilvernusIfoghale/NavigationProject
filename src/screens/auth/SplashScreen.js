import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('CreateAccount');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/logo.jpg')}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60,
    alignItems: 'center',
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
});
