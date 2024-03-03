import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Star() {
  return (
    <Image
      source={require('../../../assets/images/star-red.png')}
      style={styles.starIcon}
    />
  );
}

const styles = StyleSheet.create({
  starIcon: {
    width: 27,
    height: 27,
    marginRight: 3,
  },
});
