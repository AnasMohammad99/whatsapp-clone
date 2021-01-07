import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPEqAEWKRHB1aQRDBVRvFSLTTHLN8mhh0",
  authDomain: "whatsapp-clone-175e0.firebaseapp.com",
  projectId: "whatsapp-clone-175e0",
  storageBucket: "whatsapp-clone-175e0.appspot.com",
  messagingSenderId: "1042698875636",
  appId: "1:1042698875636:web:bd41e51719857694dbe4a1",
  measurementId: "G-MX51SQH8GX"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;