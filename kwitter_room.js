// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBJyoONqyF6wkBq-knJCEp2h6u0_S0bpvY",
      authDomain: "kwitter-d0fc5.firebaseapp.com",
      databaseURL: "https://kwitter-d0fc5-default-rtdb.firebaseio.com",
      projectId: "kwitter-d0fc5",
      storageBucket: "kwitter-d0fc5.appspot.com",
      messagingSenderId: "584294102982",
      appId: "1:584294102982:web:614a6efe041d33c1c624c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.open("kwitter_page.html");
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.open("kwitter_page.html");
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.open("kwitter.html");
}