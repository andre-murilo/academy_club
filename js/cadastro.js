


//verifica se um usuario ja logado esta tentando acessa a pagina 
firebase.auth().onAuthStateChanged(function(user) {
    if(user)
    {
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        window.location.replace("index.html")
    }
    else
    {
        
    }

});

var user = firebase.auth().currentUser;

console.log(user.uid)


function cadastro(){

var Username = document.getElementById("user").value
var datUser = document.getElementById("date").value
var UserEmail = document.getElementById("email").value
var UserPassword = document.getElementById("pass").value


// cria o email e a senha para autenticar 
firebase.auth().createUserWithEmailAndPassword(UserEmail, UserPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("erro: ", errorMessage)
    window.alert("erro: ", errorCode)
    // ...
  });

  
  
  addtodb(Username,datUser,UserEmail,UserPassword);

}

function addtodb(Username,datUser,UserEmail,UserPassword){


    firebase.auth().onAuthStateChanged(function(user) {
        if(user)
        {
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;

            
          
          
            
          
            firestore.collection("usuarios").doc(`${uid}`).set({
              Nome: `${Username}`,
              Nascimento: `${datUser}`,
              Email:`${UserEmail}`,
              senha:`${UserPassword}`,

          })
          .then(function() {
              console.log("Document successfully written!");
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
           
        }
        else
        {
            
        }
    
    });

      //verifica se o usuario se conectou

if (uid != null) {
    
    window.location.replace("perfil.html")
 
     
     
   }
   
}



