import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyBEj1oQCSBuyJDHAJEKe6E4__Q9cGzNmi8",
  authDomain: "redditauth-73060.firebaseapp.com",
  databaseURL: "https://redditauth-73060.firebaseio.com",
  projectId: "redditauth-73060",
  storageBucket: "redditauth-73060.appspot.com",
  messagingSenderId: "281425140515"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };
