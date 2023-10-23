import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword,signOut  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0pfpXbQTxaux8o0d1_cVOp4jq0QM1gII",
  authDomain: "loginform-ff1a9.firebaseapp.com",
  databaseURL: "https://loginform-ff1a9-default-rtdb.firebaseio.com",
  projectId: "loginform-ff1a9",
  storageBucket: "loginform-ff1a9.appspot.com",
  messagingSenderId: "473662049344",
  appId: "1:473662049344:web:7ccb7c781c17143dc023a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




document.getElementById('register-btn').addEventListener('click', function(){
    document.getElementById('register-div').style.display="inline";
    document.getElementById('login-div').style.display="none";

})

document.getElementById('login-btn').addEventListener('click', function(){
    document.getElementById('register-div').style.display="none";
    document.getElementById('login-div').style.display="inline";

})

document.getElementById('login-btn').addEventListener('click', function(){
    const loginEmail=document.getElementById('login-email').value;
    const loginPassword=document.getElementById('login-password').value;


    createUserWithEmailAndPassword (auth, registerEmail, registerPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById('result').innerHTML="Welcome again<br>" +registerEmail+ ' Registered successfully!';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById('result').innerHTML="Sorry ! <br>"+errorMessage;
  });
})

document.getElementById('register-btn').addEventListener('click', function(){
    const auth = getAuth();
    signOut(auth).then(() => {
        document.getElementById('result-box').style.display="none";
        document.getElementById('login-div').style.display="inline";
        
    }).catch((error) => {
        document.getElementById('result').innerHTML="Sorry ! <br>"+errorMessage;
    });

})