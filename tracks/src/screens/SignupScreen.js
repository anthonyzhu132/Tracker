import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button title="Sign in" onPress={() => navigation.navigate('Signin')} />
      <Button title="Main flow" onPress={() => navigation.navigate('mainFlow')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;