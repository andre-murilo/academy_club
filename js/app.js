

firebase.initializeApp({
    apiKey: "AIzaSyC-gmxXyEg9q10C-HeYaGFQnhBrWt3QF74",
    databaseURL: "https://academyclub-fae14.firebaseio.com",
    projectId: "academyclub-fae14",
    storageBucket: "academyclub-fae14.appspot.com",
     messagingSenderId: "1065301796384"

    
  });


  var firestore = firebase.firestore();
  var storage = firebase.storage();
  

  
      firebase.auth().onAuthStateChanged(function(user) {  //verifica se o usuario esta logado
                if(user)
                {
                    var isAnonymous = user.isAnonymous;
                    var uid = user.uid;
                    console.log("[Database] Autenticado com sucesso: " + uid);
                }
                else
                {
                    alert('acesso nao permitido!!!!')
                    window.location.replace('index.html')
                    console.log("[Database] Desconectado!");
                }
    
            });

            //logout do usuario

            function logout(){


                firebase.auth().signOut().then(function() {
                    // Sign-out successful.

                    console.log('desconectado')
                  }).catch(function(error) {
                    // An error happened.

                    alert("erroooooooooooooooooo")
                  })

            }


         var docRef =  firestore.collection('usuarios').doc('user1')

         docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        var storageRef = firebase.storage().ref();

        console.log(storageRef);



       



















// class DatabaseManager
// {
//     constructor()
//     {
//         this.event = new Event("OnConnected");


//         this.config = {
//             apiKey: "AIzaSyC-gmxXyEg9q10C-HeYaGFQnhBrWt3QF74",
//             authDomain: "academyclub-fae14.firebaseapp.com",
//             databaseURL: "https://academyclub-fae14.firebaseio.com",
//             projectId: "academyclub-fae14",
//             storageBucket: "academyclub-fae14.appspot.com",
//             messagingSenderId: "1065301796384"
//         }
//     }








//     Initialize()
//     {
//         this.defaultApp = firebase.initializeApp(this.config);
//         this.defaultDB = this.defaultApp.database();
//     }


//     DoAuth()
//     {
        

//         firebase.auth().onAuthStateChanged(function(user) {
//             if(user)
//             {
//                 var isAnonymous = user.isAnonymous;
//                 var uid = user.uid;
//                 console.log("[Database] Autenticado com sucesso: " + uid);
//             }
//             else
//             {
//                 console.log("[Database] Desconectado!");
//             }

//         });
//     }

//     AddListernerUsers(func)
//     {
//         this.defaultDB.ref("usuarios").on("value", func);
//     }
// }