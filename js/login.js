firebase.auth().onAuthStateChanged(function(user) {
    if(user)
    {
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        console.log('conectado')
        window.location.replace("perfil.html")
    }
    else
    {
        console.log("[Database] Desconectado!");
    }
})

var user = firebase.auth().currentUser;

if (user != null) {
    
   window.location.replace("perfil.html")

    
    
  }



function login(){

    var email = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

      //verifica se o usuario se conectou

var user = firebase.auth().currentUser;

if (user != null) {
    
   window.location.replace("perfil.html")

    
    
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if(user)
    {
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        console.log('conectado')
    }
    else
    {
        console.log("[Database] Desconectado!");
    }

});
}