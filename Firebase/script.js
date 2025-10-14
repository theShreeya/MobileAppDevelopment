// Import the functions you need from the SDKs you need
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
function writeUserData(userId, firstname, lastname, email, phone, age ){
  //Get the database instance
  //const db= getDatabase(app);
  //create a reference/point to 'users/ {userId}' and set the data (name, email)
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    age: age
  });
}
writeUserData(1, "Shreeya", "Shrestha", "shreeya@example.com", "1234567890", 25);
writeUserData(2, "Smriti", "Shrestha", "smriti@example.com", "1234567890", 25);
writeUserData(3, "Dikshya", "Shrestha", "dikshya@example.com", "1234567890", 25);
writeUserData(4, "Siza", "Shrestha", "siza@example.com", "1234567890", 25);
writeUserData(5, "Shraddha", "Prajapati", "shraddha@example.com", "1234567890", 25);
writeUserData(6, "Sujina", "Shrestha", "sujina@example.com", "1234567890", 25);
writeUserData(7, "Arati", "Shrestha", "arati@example.com", "1234567890", 25);
writeUserData(8, "Roman", "Shrestha", "roman@example.com", "1234567890", 25);
writeUserData(9, "Deshant", "Shrestha", "deshant@example.com", "1234567890", 25);
writeUserData(10, "Rivana", "Shrestha", "rivana@example.com", "1234567890", 25);



// Function to read user data from Firebase Realtime Database
function readUserData(){
  const userRef = ref(db, 'users');

  get(userRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
        console.log(childSnapshot.val());
      });
    });
  }
readUserData();


function updateUserData(userId, updatedData) {
  const userRef = ref(db, 'users/' + userId);
  update(userRef, updatedData)
    .then(() => {
      console.log('User data updated successfully');
    })
    .catch((error) => {
      console.error('Error updating user data:', error);
    });
  }
  //Example usage;
  updateUserData(1, { firstname: "shreeya", lastname: "Shrestha", email: "shreeya@gmail.com", age: 22 });
  updateUserData(2, { firstname: "Smriti", lastname: " Shrestha", email: "smriti@gmail.com", age: 23 });
  updateUserData(3, { firstname: "Dikshya", lastname: " Shrestha", email: "dikshya@gmail.com", age: 24 });
  updateUserData(4, { firstname: "Siza", lastname: " Shrestha", email: "siza@gmail.com", age: 25});
  updateUserData(5, { firstname: "Shraddha", lastname: " Prajapati", email: "shraddha@gmail.com", age: 26});
  updateUserData(6, { firstname: "Sujina", lastname: " Shrestha", email: "sujina@gmail.com", age: 27 });
  updateUserData(7, { firstname: "Arati", lastname: " Shrestha", email: "arati@gmail.com", age: 28});
  updateUserData(8, { firstname: "Roman", lastname: " Shrestha", email: "roman@gmail.com", age: 22 });
  updateUserData(9, { firstname: "Deshant", lastname: " Shrestha", email: "deshant@gmail.com", age: 30 });
  updateUserData(10, { firstname: "Rivana", lastname: " Shrestha", email: "riva@gmail.com", age: 7});




  // function deleteUserData(userId) {
  //   const userRef = ref(db, 'users/' + userId);
  //   remove(userRef)
  //     .then(() => {
  //       console.log('User data deleted successfully');
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting user data:', error);
  //     });
  // }
  // deleteUserData(3); // Example usage to delete user with ID 1