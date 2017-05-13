var config = {
    apiKey: "AIzaSyDYh1ke2ZCr2qXE3pm2HwwI3_B3fX-cnKA",
    authDomain: "dev-project-63d6c.firebaseapp.com",
    databaseURL: "https://dev-project-63d6c.firebaseio.com",
    projectId: "dev-project-63d6c",
    storageBucket: "dev-project-63d6c.appspot.com",
    messagingSenderId: "719625594655"
};
firebase.initializeApp(config);

//Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', e => {
// Get email and password
const email = txtEmail.value;
const pass = txtPassword.value;
const auth = firebase.auth();
//Sign in
const promise = auth.signInWithEmailAndPassword(email,pass);
promise.catch(e => console.log(e.message));
promise.then{window.open("http://aeriumsolution.com/projects/","_self");}
});
//Add a realtime auth listener

firebase.auth().onAuthStateChanged(firebaseuser => {
  if (firebaseuser){
    console.log(firebaseuser);
    console.log("Logged In");
} else {
    console.log("Not Logged In");
  }
});
