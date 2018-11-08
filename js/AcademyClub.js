var usuarios;

function OnReceiveUsers(event)
{
    usuarios = event.val();

   
    for(var i = 0; i < usuarios.length; i++)
    {
        console.log(usuarios[i].nome);
    }
}


var database = new DatabaseManager();






database.Initialize();
database.GetUsers(OnReceiveUsers);
database.DoAuth();


