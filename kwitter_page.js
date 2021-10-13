const firebaseConfig = {
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
function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
