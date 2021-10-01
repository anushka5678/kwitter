
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
