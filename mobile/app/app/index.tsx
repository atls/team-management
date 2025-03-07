import type { FC }   from 'react'

import { Button }    from 'react-native'
import { useRouter } from 'expo-router'
import React         from 'react'

const App: FC = () => {
  const { push } = useRouter()
  return (
    <>
      <Button
        title='go to sign-in'
        onPress={() => {
          push('/sign-in')
        }}
      />
      <Button
        title='go to dashboard'
        onPress={() => {
          push('/dashboard')
        }}
      />
    </>
  )
}

export default App
