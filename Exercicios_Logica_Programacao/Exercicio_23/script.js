function SomaImpar(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç/.,?~]/ 
    document.getElementById('Dica').style.display='none';

    var Numeros = document.getElementById('Numero').value;
    var SplitNum = Numeros.split(' ', 2).map((numeros) => parseInt(numeros));
    var SomaImpares = 0;

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
        for (var i = SplitNum[0]; i < SplitNum[1]; i++){
            if (i%2 != 0){
                SomaImpares += i;
            }
        }
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "SOMA DOS ÍMPARES = " + SomaImpares;
    }
}