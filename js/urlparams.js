// QUERY MANAGER

var params = ["profile", "group", "account"];

 function VerifyQuery()
{
    let urlParams = new URLSearchParams(window.location.search);

    for(var i = 0; i < params.length; i++)
    {
        if(urlParams.has(params[i]))
        {
            url = urlParams.get(params[i])
        }
    }

    return url;
}

if (VerifyQuery() == "Leonina") {
$(document).ready(function(){

    $("img.im-p").attr("src", "img/02.jpg");
    $(".user-photo h3").html('Sabrina');
    $(".user-photo p").html('estudante de direito - PucMG');
});

} else {

    if (VerifyQuery() == "Marcos") {

        $(document).ready(function(){

            $("img.im-p").attr("src", "img/01.jpg");
            $(".user-photo h3").html('Marcos');
            $(".user-photo p").html('estudante de enfermagem - PucMG');
        });
        
    } else {

        if (VerifyQuery() == "Giulia"){
            
            $(document).ready(function(){

                $("img.im-p").attr("src", "img/03.jpg");
                $(".user-photo h3").html('Giulia');
                $(".user-photo p").html('estudante de letras - PucMG');
            });
            
        }
    }
}