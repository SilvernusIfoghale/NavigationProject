import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Title({ title, back }) {
  return (
    <View style={styles.title}>
      <TouchableOpacity onPress={back}>
        <Image
          source={require('../../../assets/images/left-arrow.png')}
          style={styles.imgIcon}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 90,
  },
  imgIcon: {
    height: 30,
    width: 30,
  },
  titleContainer: {
    width: '83%',
    // alignItems: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});
