import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text>CartScreen</Text>
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
});
