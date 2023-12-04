import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPXI26TRD-3etjCW_rqungfTGULI8ga_4",
    authDomain: "meteohexa.firebaseapp.com",
    projectId: "meteohexa",
    storageBucket: "meteohexa.appspot.com",
    messagingSenderId: "76922934266",
    appId: "1:76922934266:web:aa33f7118919fbf24bca43"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore()
console.log('Firebase Initialisé:', firebase.apps.length);

export default db
