// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, set, get, ref, update, remove, push } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvZkChwTkFQ6r6Uq3-Ol8k2GC9XiUnbBY",
  authDomain: "nutrilife-webapp.firebaseapp.com",
  databaseURL: "https://nutrilife-webapp-default-rtdb.firebaseio.com",
  projectId: "nutrilife-webapp",
  storageBucket: "nutrilife-webapp.firebasestorage.app",
  messagingSenderId: "235521590893",
  appId: "1:235521590893:web:4102cd33b94474d2a1e164",
  measurementId: "G-ZH2XHEG2HN"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)
  
// Function to write user data to Firebase Realtime Database
// Function to write user data with unique ID
function writeUserData(firstname, lastname, email, dob, gender, phonenumber, subject, message) {
  // Create a reference to 'users' collection
  const usersRef = ref(db, 'user');

  // push() generates a unique key for the new child
  const newUserRef = push(usersRef);

  // set() stores the data at that unique location
  set(newUserRef, {
    firstname: firstname,
    lastname: lastname,
    email: email,
    dob: dob,
    gender: gender,
    phonenumber: phonenumber,
    subject: subject,
    message: message
  })
  .then(() => {
    console.log("User added successfully with ID:", newUserRef.key);
  })
  .catch((error) => {
    console.error("Error adding user:", error);
  });
}
window.writeUserData = writeUserData; // Example usage to add a user

// Function to read user data from Firebase Realtime Database
function readUserData(){
  const userRef = ref(db, 'user');

  get(userRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
        console.log(childSnapshot.val());
      });
    });
  }
window.readUserData = readUserData;


function updateUserData(userId, updatedData) {
  const userRef = ref(db, 'user/' + userId);
  update(userRef, updatedData)
    .then(() => {
      console.log('User data updated successfully');
    })
    .catch((error) => {
      console.error('Error updating user data:', error);
    });
  }
  //Example usage;
  window.updateUserData = updateUserData;




  function deleteUserData(userId) {
    const userRef = ref(db, 'user/' + userId);
    remove(userRef)
      .then(() => {
        console.log('User data deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting user data:', error);
      });
  }
  window.deleteUserData = deleteUserData; // Example usage to delete user with ID 1