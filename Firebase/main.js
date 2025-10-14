import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getDatabase, set, get, ref, update, remove } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD6e20_f6JdrKW93ZIO5S6yB0m_4I6G0AI",
    authDomain: "testproject-23fc1.firebaseapp.com",
    projectId: "testproject-23fc1",
    storageBucket: "testproject-23fc1.firebasestorage.app",
    messagingSenderId: "810111901438",
    appId: "1:810111901438:web:03278358818ddeed4dcfaf",
    measurementId: "G-SW2ZESJMP4"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)
  
console.log(db)

// Function to write user data to Firebase Realtime Database
function writeUserData(userId, name, email){
  //Get the database instance
  //const db= getDatabase(app);
  //create a reference/point to 'user/ {userId}' and set the data (name, email)
  const db = getDatabase();
  set(ref(db, 'user/' + userId), {
    name: name,
    email: email
  });
}
window.writeUserData = writeUserData;



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