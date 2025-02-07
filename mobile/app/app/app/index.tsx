import {Button} from 'react-native'
import { useRouter } from 'expo-router';

export default function App() {
  const {push} = useRouter();
  return (
    <>
      <Button title='go to sign-in' onPress={()=>push('/sign-in')}/>
      <Button title='go to dashboard' onPress={()=>push('/dashboard')}/>
    </>
  );
}

