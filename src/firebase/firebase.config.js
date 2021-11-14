// const firebaseConfig = {
//   apiKey: "AIzaSyB0K3l7JRS5xHlA9K83Mfx1XhpkibpxtHM",
//   authDomain: "urban-woody.firebaseapp.com",
//   projectId: "urban-woody",
//   storageBucket: "urban-woody.appspot.com",
//   messagingSenderId: "132706886923",
//   appId: "1:132706886923:web:e8bb97e85a0e10af922e0e",
//   // measurementId: "G-Y736YSKHKW"
// };

// export default firebaseConfig;

// firebase configuration from .env

console.log("chandan",process.env.REACT_APP_FIREBASE_API_KEY)
console.log("chandan",process.env.REACT_APP_FIREBASE_AUTH_DOMAIN)


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


export default firebaseConfig

