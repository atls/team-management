import type { FC } from 'react'

import { Text }    from 'react-native'
import { View }    from 'react-native'
import React       from 'react'

import { Box }     from '@ui-mobile/layout'

export const SignInScreen: FC = () => (
  <View>
    <Box height={400} alignItems='center' justifyContent='center'>
      <Text>Sign In</Text>
    </Box>
  </View>
)
