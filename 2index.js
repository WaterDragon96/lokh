
//AÑADE TUS ENLACES DE FIREBASE

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDGAjRjdi535-yOdsGTeJ0S-kpX66K_uaE",
  authDomain: "leonardotc94-fceb0.firebaseapp.com",
  databaseURL: "https://leonardotc94-fceb0-default-rtdb.firebaseio.com/",
  projectId: "leonardotc94-fceb0",
  storageBucket: "leonardotc94-fceb0.appspot.com",
  messagingSenderId: "292756010920",
  appId: "1:292756010920:web:ec5df5c0f3ace4ef81cf9d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
