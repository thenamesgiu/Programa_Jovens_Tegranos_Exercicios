function Intervalo(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>,.\ç/?~]/ 

    var Inicial = document.getElementById('Inicio').value;
    var Fim = document.getElementById('Final').value;
    var Soma = 0;

    if (Inicial.match(Letras) || Inicial.match(Especial) || Fim.match(Letras) || Fim.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (Inicial.length == 0 || Fim.length == 0 || InputValido == false){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Preencha corretamente, utilize apenas números inteiros.";

    }
    else{
        document.getElementById('Resposta').style.visibility='visible';

        if (parseInt(Fim) < parseInt(Inicial)){
            document.getElementById('Resultado').innerHTML = "O número final é maior que o número inicial.";
        }
        else{
            for (var i =  parseInt(Inicial); i <= parseInt(Fim); i++){
                Soma = Soma + i
            }
    
            document.getElementById('Resultado').innerHTML = "Resultado: " + Soma;
        }
    }

   
}