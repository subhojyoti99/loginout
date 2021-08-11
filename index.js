document.getElementById('login').addEventListener('click', GoogleLogin);
document.getElementById('logout').addEventListener('click', LogoutUser);

var provider = new firebase.auth.GoogleAuthProvider()


function GoogleLogin() {
    console.log('Login Btn Call')
    firebase.auth().signInWithPopup(provider)// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBHfe2Gp6lrM36QetuhG3aOYGFH1Iw7ac8",
    authDomain: "loginout-6b774.firebaseapp.com",
    projectId: "loginout-6b774",
    storageBucket: "loginout-6b774.appspot.com",
    messagingSenderId: "389278556156",
    appId: "1:389278556156:web:70c31428a4e96c872fdc79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


document.getElementById('Dashboard').style.display="none";

document.getElementById('login').addEventListener('click', GoogleLogin);
document.getElementById('logout').addEventListener('click', LogoutUser);

let provider = new firebase.auth.GoogleAuthProvider()


function GoogleLogin() {
    console.log('Login Btn Call')
    firebase.auth().signInWithPopup(provider)
        .then(res=>{
            console.log(res.user)

            window.location.href = 'welcome.html';

            document.getElementById('LoginScreen').style.display="none";
            document.getElementById('Dashboard').style.display="block";
            showUserDetails(res.user)
        })
        .catch(e=>{
            console.log(e)
        })
    }

function showUserDetails(user) {
    document.getElementById('userDetails').innerHTML = `
        <img src="${user.photoURL}" style="width:5%;cursor: pointer; border-radius: 50px;">
        <p>Name: ${user.displayName}</p>
        <p>Email: ${user.email}</p>
`
}

function checkAuthState(){
    firebase.auth().onAuthStateChanged(user=>{
        if(user){
            document.getElementById('LoginScreen').style.display="none";
            document.getElementById('Dashboard').style.display="block";
            showUserDetails(user)
        }else{
            
        }
    })
}

function LogoutUser() {
    console.log('Logout Btn Call')
    firebase.auth().signOut().then(()=>{

        window.location.href = 'index.html';
        
    }).catch(e=>{
        console.log(e)
    })
}

checkAuthState()
        .then(function (user) {
        console.log(res.user)
        showUserDetails(res.user)
           window.location.href = '/dashboard'; 
        })
        .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code)
        window.alert("Error : " + errorMessage);
    })
}

function showUserDetails(user) {
    document.getElementById('userDetails').innerHTML = `
        <img src="${user.photoURL}" style="width:10%">
        <p>Name: ${user.displayName}</p>
        <p>Email: ${user.email}</p>
`
}

function LogoutUser() {
    console.log('Logout Btn Call')
}
