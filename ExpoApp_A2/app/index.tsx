import { Redirect } from 'expo-router';

export default function Index() {      //Immediately redirect to the sign-in screen
  return <Redirect href="/signin" />;
}
