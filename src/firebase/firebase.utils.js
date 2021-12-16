import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB_QDXQJu__6tuwVaybx1LFZw8XTxBAF-g',
  authDomain: 'crwn-db-f3536.firebaseapp.com',
  projectId: 'crwn-db-f3536',
  storageBucket: 'crwn-db-f3536.appspot.com',
  messagingSenderId: '876606029353',
  appId: '1:876606029353:web:aa673bf0ff8add59876638',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
