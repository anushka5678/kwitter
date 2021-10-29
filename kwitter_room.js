
var firebaseConfig = {
      apiKey: "AIzaSyCYwZiRXmQ_qaU_PLLxlP-DmgRqCA1qhMQ",
      authDomain: "kwitter-fbb38.firebaseapp.com",
      databaseURL: "https://kwitter-fbb38-default-rtdb.firebaseio.com",
      projectId: "kwitter-fbb38",
      storageBucket: "kwitter-fbb38.appspot.com",
      messagingSenderId: "812902654998",
      appId: "1:812902654998:web:8851baf71271cb297b8137",
      measurementId: "G-1YD9MBYB77"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   console.log("Room name -" + Room_names);
   row = "<div class='room_name' id=" + Room_names + "onclick= 'redirectToRoomNames(this.id)'>#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomNames(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}