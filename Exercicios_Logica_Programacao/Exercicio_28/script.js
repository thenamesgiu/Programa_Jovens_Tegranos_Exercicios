function MenorMaior(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç/?~]/ 
    document.getElementById('Dica').style.display='none';

    var Num = document.getElementById('Numero').value;
    let SplitNum = Num.split(' ', 4).map((numeros) => parseFloat(numeros));

    if (Num.match(Letras) || Num.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (Num.length == 0 || InputValido ==false){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Informe os números corretamente, insira espaço entre eles.";

    }
    else{
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "O menor valor numérico é " + Math.min(...SplitNum) + " e o maior valor numérico é " + Math.max(...SplitNum) + ".";

    }
}