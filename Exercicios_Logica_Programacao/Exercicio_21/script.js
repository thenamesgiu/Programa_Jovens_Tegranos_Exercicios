function Pares(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç/.,?~]/ 

    var Num = document.getElementById('Numero').value;
    var Resp = "";
    if (Num.match(Letras) || Num.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (Num.length == 0 || InputValido == false || Num <= 1 ){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Preencha corretamente, utilize apenas números inteiros." + "<br/>" + "A inserção do número 1 ou valores menores não apresenta resultado.";
    }
    else{
    
        for (var i = 1; i <= parseInt(Num); i++){
            if (i%2==0){
                Resp += i + "<br/>";
            }
        }
        document.getElementById('Resposta').style.visibility='visible';

        document.getElementById('Resultado').innerHTML = Resp;
    }
}