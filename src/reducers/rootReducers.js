import userReducers from "./userReducers";
import authReducers from "./authReducers";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import trainersReducers from "./trainersReducer";

const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducers,
  trainers: trainersReducers,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
