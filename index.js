document.getElementById('login').addEventListener('click', GoogleLogin);
document.getElementById('logout').addEventListener('click', LogoutUser);

var provider = new firebase.auth.GoogleAuthProvider()


function GoogleLogin() {
    console.log('Login Btn Call')
    firebase.auth().signInWithPopup(provider)
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
