// QUERY MANAGER

var params = ["profile", "group", "account"];

function VerifyQuery()
{
    let urlParams = new URLSearchParams(window.location.search);

    for(var i = 0; i < params.length; i++)
    {
        if(urlParams.has(params[i]))
        {
            console.log(urlParams.get(params[i]));
        }
    }
}