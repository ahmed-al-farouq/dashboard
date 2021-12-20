import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDrsSkrs6fLZTWmU36A8096_bi5bTaAcS8',
  authDomain: 'alfarouq-dashboard.firebaseapp.com',
  projectId: 'alfarouq-dashboard',
  storageBucket: 'alfarouq-dashboard.appspot.com',
  messagingSenderId: '101479555230',
  appId: '1:101479555230:web:402d4e84ac9c4e76d2db8f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
