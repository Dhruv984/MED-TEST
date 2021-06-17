import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCCHYLhQ5VAF5ctUpvumYUTQxZ6Jb3vnKc",
    authDomain: "medtest-550b3.firebaseapp.com",
    projectId: "medtest-550b3",
    storageBucket: "medtest-550b3.appspot.com",
    messagingSenderId: "315490931205",
    appId: "1:315490931205:web:ccf2176cf0994ff7c3026c"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()

export {auth}
export default db