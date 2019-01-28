import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
        apiKey: "AIzaSyDqvtFqlZtKHD5PWZEOvF5AoBa8r3n3u1s",
        authDomain: "seafood-react.firebaseapp.com",
        databaseURL: "https://seafood-react.firebaseio.com",
        // projectId: "seafood-react",
        // storageBucket: "seafood-react.appspot.com",
        // messagingSenderId: "982557840289"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;