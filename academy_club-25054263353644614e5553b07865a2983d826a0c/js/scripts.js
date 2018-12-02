
function cadastrafotos(e){
 
    e.preventDefault();
 
    var inputImagem = document.getElementById('imgPage').src;
 
    if(!inputImagem){
        alert("Por favor, preencha com uma foto!");
        return false;
    }
 
 
 
    foto = {
        Imagem: inputImagem
    }
 
    if( !localStorage.getItem('stream')){
        console.log(true);
        var fotos = [];
        fotos.push(foto);
        localStorage.setItem('stream', JSON.stringify(fotos));
    }else{
        console.log(false);
        var fotos = JSON.parse(localStorage.getItem('stream'));
        fotos.push(foto);
        localStorage.setItem('stream', JSON.stringify(fotos));
    }
 
    previewImagem();
    document.getElementById('form-fotos').reset();
}


function previewImagem() {
    let files = document.getElementById('inputImagem').files;
             
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            let imgElement = document.getElementById('imgPage');
                     
            imgElement.src = fr.result;
            imgElement.style.width = '200px';
            document.getElementById('tela').innerHTML = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }
}

function mostrafotos(){
 
    var fotos = JSON.parse(localStorage.getItem('stream'));
    console.log(fotos);
    var fotosResultado = document.getElementById('tableImagem');
    console.log(fotosResultado);
    fotosResultado.innerHTML = ' ';
 
 
    for(var i = 0; i < fotos.length; i++){
        var Imagem = fotos[i].Imagem;
        fotosResultado.innerHTML += '<tr><td>' + Imagem +
                               '</td><td><button class="btn btn-danger" onclick="apagarfilmes(\''+ Imagem + '\')">Excluir</button></td>'+
                               '</tr>'; 
    }
}

$(document).ready(function() {
  $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{enabled:true}
  // other options
});
});