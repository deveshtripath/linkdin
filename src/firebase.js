import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnW40ysmfEyK3x8kDMthxDNEDSAw3Pkww",
  authDomain: "linkedin-clone-ce69a.firebaseapp.com",
  projectId: "linkedin-clone-ce69a",
  storageBucket: "linkedin-clone-ce69a.appspot.com",
  messagingSenderId: "525562414982",
  appId: "1:525562414982:web:6deabdb50dbc83fd268e07",
  measurementId: "G-BHMXW22G4Q"
};



  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  // const provider =new firebase.auth.GoogleAuthProvider();
  // const storage= firebase.storage();


  export {auth,db};