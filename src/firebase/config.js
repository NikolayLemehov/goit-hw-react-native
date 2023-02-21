// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA6gtTKpwo_Da8_YHxKpur3v8zjHI56mqA',
  authDomain: 'goit-react-native-hw-ca639.firebaseapp.com',
  projectId: 'goit-react-native-hw-ca639',
  storageBucket: 'goit-react-native-hw-ca639.appspot.com',
  messagingSenderId: '149999016537',
  appId: '1:149999016537:web:a86ffb1bce233ad649ef48',
  measurementId: 'G-8F3J5YJX0D'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
