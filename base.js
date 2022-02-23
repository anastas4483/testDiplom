import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBGIFs9pjMP3wcF0lShxbnGZ2Ypzv9wvew",
  authDomain: "diploma2022-22578.firebaseapp.com",
  databaseURL: "https://diploma2022-22578-default-rtdb.firebaseio.com",
 
})

const base = Rebase.createClass(firebaseApp.database())
export  {firebaseApp}
export default base