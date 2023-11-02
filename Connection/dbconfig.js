
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAD9fs9PQttCrnGKy6CV113z1hHil_vSk0",
  authDomain: "resturantapp-5e740.firebaseapp.com",
  projectId: "resturantapp-5e740",
  storageBucket: "resturantapp-5e740.appspot.com",
  messagingSenderId: "220619941708",
  appId: "1:220619941708:web:0e446fb9bc3ab2c35d11e9",
  measurementId: "G-G5B8WHTH7E"
};
const app= initializeApp(firebaseConfig);
  initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

export const auth =getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);