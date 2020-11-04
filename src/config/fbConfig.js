import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyDlGsLz8rGMZWjb2voOhW51U9557s7tsxM",
    authDomain: "todo-123e5.firebaseapp.com",
    databaseURL: "https://todo-123e5.firebaseio.com",
    projectId: "todo-123e5",
    storageBucket: "todo-123e5.appspot.com",
    messagingSenderId: "765910339424",
    appId: "1:765910339424:web:982ee8ff651f3492635805"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampInSnapshots: true });
export default firebase;