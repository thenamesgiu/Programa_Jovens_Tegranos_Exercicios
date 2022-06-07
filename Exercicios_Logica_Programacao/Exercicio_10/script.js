function MenorInt(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç/?,.~]/ 

    var NumPrimeiro = document.getElementById('Primeiro').value;
    var NumSegundo = document.getElementById('Segundo').value;
    var NumTerceiro = document.getElementById('Terceiro').value;
    document.getElementById('Resposta').style.visibility='visible';

    if (NumPrimeiro.match(Letras) || NumPrimeiro.match(Especial) || NumSegundo.match(Letras) || NumSegundo.match(Especial) || NumTerceiro.match(Letras) || NumTerceiro.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (NumPrimeiro.length == 0 || NumSegundo.length == 0 || NumTerceiro.length == 0 || InputValido ==false){
        document.getElementById('Resultado').innerHTML = "Informe os números corretamente, insira apenas valores inteiros";

    }
    else{
        let ArrayNum = [parseInt(NumPrimeiro), parseInt(NumSegundo), parseInt(NumTerceiro)];

        document.getElementById('Resultado').innerHTML = Math.min(...ArrayNum) + " é o menor número.";
    }
}