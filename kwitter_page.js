const firebaseConfig = {
      apiKey: "AIzaSyBNbFoZrBZwL3o6Jhgov0yCtWUJYeBmopc",
      authDomain: "kwitter-cf38b.firebaseapp.com",
      databaseURL: "https://kwitter-cf38b-default-rtdb.firebaseio.com",
      projectId: "kwitter-cf38b",
      storageBucket: "kwitter-cf38b.appspot.com",
      messagingSenderId: "798183722689",
      appId: "1:798183722689:web:752199a3c461846ef7ce40",
      measurementId: "G-VSHQXF9VKW"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
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
