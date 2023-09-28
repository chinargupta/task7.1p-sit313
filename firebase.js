// Import necessary functions from Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object containing your project's credentials
const firebaseConfig = {
  apiKey: "AIzaSyDqoeGeQ6BBsirWcTRW6wKZyAx6VSMfVzI",
  authDomain: "task7-b82d4.firebaseapp.com",
  projectId: "task7-b82d4",
  storageBucket: "task7-b82d4.appspot.com",
  messagingSenderId: "45308032764",
  appId: "1:45308032764:web:3175cafcf9731c89700979",
  measurementId: "G-Y3J34HE5XN"
};

// Initialize Firebase by passing the configuration object
const app = initializeApp(firebaseConfig);

// Export the Firestore instance initialized with your Firebase app
export default getFirestore(app);
