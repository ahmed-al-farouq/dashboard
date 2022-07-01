import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBQwir-YAaLHfWiYMnuTIhuV4JTAvaE678',
	authDomain: 'alfcdashboard.firebaseapp.com',
	projectId: 'alfcdashboard',
	storageBucket: 'alfcdashboard.appspot.com',
	messagingSenderId: '796568236586',
	appId: '1:796568236586:web:16f16b427aaba46a758953'
};

const app = initializeApp(firebaseConfig);

export default app;