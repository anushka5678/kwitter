
/*const firebaseConfig = {
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
    const app = initializeApp(firebaseConfig);*/

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