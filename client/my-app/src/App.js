import {
  Button, ChakraProvider, theme, Text
} from '@chakra-ui/react';
import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc38gz9cW9arpQDqzvvXUeDeqyfJePBaQ",
  authDomain: "dubhacks2022.firebaseapp.com",
  projectId: "dubhacks2022",
  storageBucket: "dubhacks2022.appspot.com",
  messagingSenderId: "166369939912",
  appId: "1:166369939912:web:8a06ed08971ffd4ebbf0fd",
  measurementId: "G-KR9LGWRDLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

function App() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    console.log(user)
  }, [user]);

  return (
    <ChakraProvider theme={theme}>
      <Button onClick={() => signInWithRedirect(auth, provider)}>
        Google Sign In
      </Button>
    </ChakraProvider>
  );
}

export default App;
