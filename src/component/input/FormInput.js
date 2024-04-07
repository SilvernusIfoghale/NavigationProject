import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

export default function FormInput({ title, placeholder, value, setValue }) {
  return (
    <View style={styles.formContainer}>
      <View>
        <Text style={styles.formText}>{title}</Text>
        <TextInput
          placeholder={placeholder}
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingBottom: 20,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 10,
  },
  textInput: {
    backgroundColor: 'lightgray',
    height: 50,
    padding: 13,
    borderRadius: 8,
    fontSize: 17,
  },
});
