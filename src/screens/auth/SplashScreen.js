import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CreateAccount');
        }}
      >
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
