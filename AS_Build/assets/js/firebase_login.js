
//Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');
const bntBack = document.getElementbyID('btnBack');

btnLogin.addEventListener('click', e => {
// Get email and password
const email = txtEmail.value;
const pass = txtPassword.value;
const auth = firebase.auth();
//Sign in
const promise = auth.signInWithEmailAndPassword(email,pass);
promise.catch(e => console.log(e.message));
firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser){
        window.location.href = "http://aeriumsolutions.com/dates";
        /*window.open("/dates","_self");*/
    } else {
     // alert("Wrong username or password!");
    }
  });
});

btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
  window.location.href = "http://aeriumsolutions.com/";
  /*window.open("http://aeriumsolution.com/","_self");*/
});

btnBack.addEventListener('click', e => {
   window.location.href = "http://aeriumsolutions.com/dates/";
});
