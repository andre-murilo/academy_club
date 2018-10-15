$("#pesquisar").click(function (){
    $("#results").css("display", "block" );
  });

  

  $("#pesquisar").keyup(function(e) {
      var q = $("#pesquisar").val();
              $("#results").empty();
      $.getJSON("js/dados.js", function(db){
            
          $.each(db, function(_i, item) {
          aux = item.Tag.trim().toLowerCase().split(",")
          console.log($("#pesquisar").val().trim().toLowerCase(),aux,aux.indexOf($("#pesquisar").val().trim().toLowerCase()))
          if( aux.indexOf($("#pesquisar").val().trim().toLowerCase()) >= 0 )
          {
              console.log("Encontrou")
              $("#results").append("<div>" + item.dados.nome + "<br><br></div>");
          }
              
      });
   });

});