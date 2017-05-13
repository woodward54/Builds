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
const pass = txtPass.value;
const auth = firebase.auth();
//Sign in
const promise = auth.signInWithEmailAndPassword(email,pass);
promise.catch(e => consle.log(e.message));
});
//Add a realtime auth listener

firebase.auth().onAuthStateChanged(firebaseuser => {
  if (firebaseuser){
    consle.log(firebaseuser);
    consle.log("Logged In");
    window.open("{{ site.url }}/projects/","_self");
} else {
    consle.log("Not Logged In");
  }
});