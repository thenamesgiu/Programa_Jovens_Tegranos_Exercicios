function AreaCirculo(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[ `!@#$%^&*()_+\=\[\]{};,':"\\|<>\/ç?~]/ 

    var raio = document.getElementById('Raio').value;


    if (raio.match(Letras) || raio.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }
    if(raio.length==0 || InputValido == false){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Preencha a informação corretamente.";
    }
    else{
        document.getElementById('Resposta').style.visibility='visible';
        var Area = ((3.14159) * Math.pow(parseFloat(raio), 2)).toFixed(3);
        document.getElementById("Resultado").innerHTML = "ÁREA = " + Area;
    }
}