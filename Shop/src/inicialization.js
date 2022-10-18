//firebase inicialization
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyBPsqyW19SPNQUycBc103vgxe-UhrMSr5g",
    authDomain: "shoppingcart-5393f.firebaseapp.com",
    projectId: "shoppingcart-5393f",
    storageBucket: "shoppingcart-5393f.appspot.com",
    messagingSenderId: "601798470901",
    appId: "1:601798470901:web:87cbb68c5ae918ed5529bc",
    measurementId: "G-T3LND2PZN9"
});
// Variables for registration and saving data
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();