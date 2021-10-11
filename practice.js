// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC4XD0Koq-b3PhDQJhq-EpMTSfROSqbV4I",
    authDomain: "kwitter-262e9.firebaseapp.com",
    databaseURL: "https://kwitter-262e9-default-rtdb.firebaseio.com",
    projectId: "kwitter-262e9",
    storageBucket: "kwitter-262e9.appspot.com",
    messagingSenderId: "205036812837",
    appId: "1:205036812837:web:aab44b041cce7bd3915dcc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}