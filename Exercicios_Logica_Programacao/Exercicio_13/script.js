function TempoTelefone(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>,.\ç/?~]/ 

    var Minutos = document.getElementById('Numero').value;
    var Total = 0;
    document.getElementById('Resposta').style.visibility='visible';

    if (Minutos.match(Letras) || Minutos.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (Minutos.length == 0 || InputValido == false){
        document.getElementById('Resultado').innerHTML = "Preencha corretamente, utilize números inteiros."
   
    }
    else{
        if (parseInt(Minutos) > 100){
        Total = (50 + (Minutos - 100)* 2 ).toFixed(2);
        document.getElementById('Resultado').innerHTML = "Valor a pagar: R$" + Total;

        }
        else if (parseInt(Minutos) <= 0){
            document.getElementById('Resultado').innerHTML = "O telefone não foi utilizado"
        }
        else{
            document.getElementById('Resultado').innerHTML = "Valor a pagar: R$50.00"
        }
    }   
}