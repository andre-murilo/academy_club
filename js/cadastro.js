

firebase.auth().onAuthStateChanged(function(user) {
    if(user)
    {
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        alert('acesso negado')
    }
    else
    {
        console.log("[Database] Desconectado!");
    }

});






function cadastro(){

var UserEmail = document.getElementById("email").value
var UserPassword = document.getElementById("pass").value

console.log(UserEmail)
console.log(UserPassword)

firebase.auth().createUserWithEmailAndPassword(UserEmail, UserPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("erro: ", errorMessage)
    window.alert("erro: ", errorCode)
    // ...
  });

  //verifica se o usuario se conectou

var user = firebase.auth().currentUser;

if (user != null) {
    
   window.location.replace("/perfil.html")

    
    
  }
}



