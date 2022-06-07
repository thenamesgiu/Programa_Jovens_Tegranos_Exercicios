function Multiplo(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç/.,?~]/ 
    document.getElementById('Dica').style.display='none';

    var Numeros = document.getElementById('Numero').value;
    var SplitNum = Numeros.split(' ', 2).map((numeros) => parseInt(numeros));
    var Multip = "";

    if (Numeros.match(Letras) || Numeros.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (Numeros.length == 0 || InputValido == false){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Preencha corretamente, não se esqueça de utilizar espaço entre os números.";
    }
    else{
        if(SplitNum[0] % SplitNum[1] == 0 || SplitNum[1] % SplitNum[0] == 0){
            Multip = "São múltiplos";
        }
        else{
            Multip = "Não são múltiplos";
        }

        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = Multip;
    }
}