import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: 'AIzaSyBGNh7iBLMEdKml64QxCImtVmq_9aCNUlQ',
    authDomain: 'my-subscriptions-94ef0.firebaseapp.com!',
    projectId: 'my-subscriptions-94ef0',
    storageBucket: 'my-subscriptions-94ef0.appspot.com',
    messagingSenderId: '9343926955',
    appId: '1:9343926955:web:9f27e6062a10f82cc02dee'
}

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
