function Distancia(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç/,?~]/ 
    document.getElementById('Dica').style.display='none';

    var Num = document.getElementById('Numero').value;
    let SplitNum = Num.split(' ', 3).map((numeros) => parseFloat(numeros));

    if (Num.match(Letras) || Num.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (Num.length == 0 || SplitNum[0]< 0 || SplitNum[1] < 0 || SplitNum[2] < 0 || InputValido ==false){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Informe os números corretamente, insira espaço entre eles e utilize apenas números positivos.";

    }
    else{
        document.getElementById('Resposta').style.visibility='visible';
    document.getElementById('Resultado').innerHTML = "MAIOR DISTÂNCIA = " + Math.max(...SplitNum);

    }

   
}
