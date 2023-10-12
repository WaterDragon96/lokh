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
    room_name=localStorage.getItem("room_name");
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
    } 
//TUS ANLACES DE FIREBASE

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código

console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_width_tag="<h4>"+name+"<img class='user_tick' src=index (3).png> </h4>";
message_width_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn-warning' id=+firebase_message_id+ value="+like+" onclick='update_Like(this.id)'>";
span_width_tag="<span class='glythicon glythicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_width_tag+message_width_tag + like_button+span_width_tag;
document.getElementById("output").innerHTML +=row;


//Termina código
      } });  }); }


getData();

function update_Like(message_id)
{
  console.log("botón Me gusta pulsado - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes  
   });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}