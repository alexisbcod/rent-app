import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD5pony1Plbs22d7cnLMm0L78FqTiDksLA",
    authDomain: "rent-app-9ed9d.firebaseapp.com",
    databaseURL: "https://rent-app-9ed9d.firebaseio.com",
    projectId: "rent-app-9ed9d",
    storageBucket: "rent-app-9ed9d.appspot.com",
    messagingSenderId: "959040701794",
    appId: "1:959040701794:web:90d8b40f3590630130183b"
};



firebase.initializeApp(firebaseConfig)
export default firebase;

export const auth = firebase.auth()