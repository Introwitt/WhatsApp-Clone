import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBzcjXS0lCLlKxowM8S5wIo_2UNza8ic4Y",
    authDomain: "whatsapp-clone-27a86.firebaseapp.com",
    projectId: "whatsapp-clone-27a86",
    storageBucket: "whatsapp-clone-27a86.appspot.com",
    messagingSenderId: "271187519696",
    appId: "1:271187519696:web:5c917d64e01a804ffa56d5",
    measurementId: "G-EE1PLDESTE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db
