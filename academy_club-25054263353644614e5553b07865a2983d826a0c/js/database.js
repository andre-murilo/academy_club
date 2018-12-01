class DatabaseManager
{
    constructor()
    {
        this.event = new Event("OnConnected");


        this.config = {
            apiKey: "AIzaSyC-gmxXyEg9q10C-HeYaGFQnhBrWt3QF74",
            authDomain: "academyclub-fae14.firebaseapp.com",
            databaseURL: "https://academyclub-fae14.firebaseio.com",
            projectId: "academyclub-fae14",
            storageBucket: "academyclub-fae14.appspot.com",
            messagingSenderId: "1065301796384"
        }
    }



    Initialize()
    {
        this.defaultApp = firebase.initializeApp(this.config);
        this.defaultDB = this.defaultApp.database();
    }


    DoAuth()
    {
        firebase.auth().signInAnonymously().catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });

        firebase.auth().onAuthStateChanged(function(user) {
            if(user)
            {
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                console.log("[Database] Autenticado com sucesso: " + uid);
            }
            else
            {
                console.log("[Database] Desconectado!");
            }

        });
    }

    AddListernerUsers(func)
    {
        this.defaultDB.ref("usuarios").on("value", func);
    }
}


