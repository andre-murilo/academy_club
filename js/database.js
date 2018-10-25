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


    console.log(defaultApp.name); 


}

function login()
{
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().languageCode = 'pt';

    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log("token: " + token + " | user: " + user);
    });
}

function loadUsers() {
    firebase.auth().signInWithEmailAndPassword("academy_teste@gmail.com", "123456").catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }