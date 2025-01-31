import React from 'react';
import { View, Text } from 'react-native';

interface SignInProps {
  navigation: any;
}

export const SignInScreen: React.FC<SignInProps> = () => {
  return (
    <View>
      <Text>Sign In</Text>
    </View>
  );
};

