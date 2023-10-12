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

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="ihola "+ user_name + "!"

  function addRoom(){
    
    room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"// falta esta lenea de codigo

      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("remove.room_name");
    window.location="index.html";
}
function getData(){
    firebase.database().ref("/").on('value', function(snapshot){
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot){
                childKey = childSnapshot.key;
                Room_names = childKey;  //la cambiamos a Room_names
                console.log("Room Name - " + Room_names);
                 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
          });
    });

}
getData();


















