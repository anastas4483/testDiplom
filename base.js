// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import subjectsBD from './subjectsBD'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGIFs9pjMP3wcF0lShxbnGZ2Ypzv9wvew",
  authDomain: "diploma2022-22578.firebaseapp.com",
  databaseURL: "https://diploma2022-22578-default-rtdb.firebaseio.com",
  projectId: "diploma2022-22578",
  storageBucket: "diploma2022-22578.appspot.com",
  messagingSenderId: "931293933697",
  appId: "1:931293933697:web:41912e80e71a32ef211d80"
};

// Initialize Firebase
let app;
if (firebase.apps.length===0){
  app=firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app()
  // subjectsBD.forEach((item,index)=>   firebase.database().ref(`/subjects/${index+1}`).set(item))
}
const auth=firebase.auth()
export {auth}