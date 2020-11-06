import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
      headerText="Sign In To Your Account"
      errorMessage=""
      onSubmit={() => {}}
      submitButtonText="Sign In"
      />
      
      <NavLink
      text="Don't have an account? Sign up"
      routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SigninScreen;