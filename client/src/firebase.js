import { initializeApp } from 'firebase/app';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'madam-estate.firebaseapp.com',
  projectId: 'madam-estate',
  storageBucket: 'madam-estate.appspot.com',
  messagingSenderId: '1019193843730',
  appId: '1:1019193843730:web:aa174a2f213377c153b8cb',
};

export const app = initializeApp(firebaseConfig);
