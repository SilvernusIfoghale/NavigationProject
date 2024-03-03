import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Header({ headTitle }) {
  return (
    <View style={styles.topContainer}>
      <View style={styles.topImageSection}>
        <Image
          source={require('../../../assets/images/left-arrow.png')}
          style={styles.img}
        />
      </View>
      <Text style={styles.text}>{headTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    gap: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  topImageSection: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    backgroundColor: 'silver',
  },
  img: {
    height: 20,
    width: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
