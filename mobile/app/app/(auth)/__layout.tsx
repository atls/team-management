import React from 'react';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          title: 'Sign In',
        }}
      />
    </Stack>
  );
};

export default AuthLayout;