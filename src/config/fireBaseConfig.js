import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCH241wmDgUESQeybukDPsra2vP6f0LEKc",
  authDomain: "fitness-app-78c77.firebaseapp.com",
  databaseURL: "https://fitness-app-78c77.firebaseio.com",
  projectId: "fitness-app-78c77",
  storageBucket: "fitness-app-78c77.appspot.com",
  messagingSenderId: "436611728124"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
