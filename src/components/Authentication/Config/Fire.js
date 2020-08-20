import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDQx-evRp3Dr-s1rLikjhbd-kbeUUSvF7k",
    authDomain: "twitter-18b8d.firebaseapp.com",
    databaseURL: "https://twitter-18b8d.firebaseio.com",
    projectId: "twitter-18b8d",
    storageBucket: "twitter-18b8d.appspot.com",
    messagingSenderId: "4301696340",
    appId: "1:4301696340:web:b3eeeab17a1c0e75b96cc1",
    measurementId: "G-D7T2NPYPGW"
};


const fire = firebase.initializeApp(config);
export default fire;