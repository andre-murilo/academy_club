var config = {
    apiKey: "AIzaSyC-gmxXyEg9q10C-HeYaGFQnhBrWt3QF74",
    authDomain: "academyclub-fae14.firebaseapp.com",
    databaseURL: "https://academyclub-fae14.firebaseio.com",
    projectId: "academyclub-fae14",
    storageBucket: "academyclub-fae14.appspot.com",
    messagingSenderId: "1065301796384"
};

var defaultDatabase;

function InitializeDB()
{
    var defaultApp = firebase.initializeApp(config);
    defaultDatabase = defaultApp.database();


    firebase.auth().signInAnonymously().catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });



      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            console.log("Logado com sucesso: " + uid);
        } else {

        }
      });


      defaultDatabase.ref("usuarios").on("value", function(snap) {
        var usuarios = snap.val();

        for(var i = 0; i < usuarios.length; i++)
        {
            console.log(usuarios[i].nome);
        }

      });



    console.log(defaultApp.name); 


}
