import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB9mXv9tLPvJsl40Gdm48G_DlTxf-TTrXI",
  authDomain: "burguer-queen-pottes.firebaseapp.com",
  databaseURL: "https://burguer-queen-pottes.firebaseio.com",
  projectId: "burguer-queen-pottes",
  storageBucket: "burguer-queen-pottes.appspot.com",
  messagingSenderId: "846388188964",
  appId: "1:846388188964:web:2a750719880e50a0"
};

firebase.initializeApp(config);

export default firebase;