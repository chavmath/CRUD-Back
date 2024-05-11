const firebase = require('firebase/compat/app');
require('firebase/compat/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDURNOMbI3NFZTzrZGtwYVEWdGpGWarzaw",
    authDomain: "crud-66122.firebaseapp.com",
    projectId: "crud-66122",
    storageBucket: "crud-66122.appspot.com",
    messagingSenderId: "482134930384",
    appId: "1:482134930384:web:ae8154f5d6e728f72e7fd5",
    measurementId: "G-5SZ5F6TXNP"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

module.exports = { db };
