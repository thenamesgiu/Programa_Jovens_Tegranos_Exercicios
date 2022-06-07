function Tabuada(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};,':"\\|<>\/?ç.~]/ 

    var ValorFornecido = document.getElementById('Numero').value;
    var Calculo = '';

    if (ValorFornecido.match(Especial) || ValorFornecido.match(Letras)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (ValorFornecido.length == 0 || InputValido == false){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Preencha corretamente.";
    }
    else{
        for(var NumeroTabuada=1; NumeroTabuada<=10; NumeroTabuada++){
            Calculo += ValorFornecido + " x " + NumeroTabuada + " = " + ValorFornecido*NumeroTabuada + "<br/>";
        }

        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = Calculo;
    }
}