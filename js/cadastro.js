


//verifica se um usuario ja logado esta tentando acessa a pagina 
firebase.auth().onAuthStateChanged(function(user) {
    if(user)
    {
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        // window.location.replace("index.html")
        console.log('logado')
    }
    else
    {
        
    }

});




var user = firebase.auth().currentUser;

console.log(user.uid)


//---------------------------------------------------------------------------------------------------
//cadstro do usuario



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

  
  //chama a funçao para cria informaçoes no banco de dados
  addtodb(Username,datUser,UserEmail,UserPassword);

}



//-----------------------------------------------------------------------------------------------------
//funçao para cria info no banco de dados




function addtodb(Username,datUser,UserEmail,UserPassword){


    firebase.auth().onAuthStateChanged(function(user) {
        if(user)
        {
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;

            
          
          console.log(uid)
            
          
            firestore.collection("usuarios").doc(`${uid}`).set({
              nome: `${Username}`,
              nascimento: `${datUser}`,
              email:`${UserEmail}`,
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
    
    // window.location.replace("perfil.html")
    alert('cadastrado')
 
     
     
   }
   
}



