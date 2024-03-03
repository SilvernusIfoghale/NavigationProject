import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function FormButton({ text, click }) {
  return (
    <TouchableOpacity style={styles.signUP} onPress={click}>
      <View>
        <Text style={styles.textSignup}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signUP: {
    alignItems: 'center',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  textSignup: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
