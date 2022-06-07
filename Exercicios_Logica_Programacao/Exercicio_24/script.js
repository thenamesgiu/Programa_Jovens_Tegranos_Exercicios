function Crescente(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç,./?~]/ 
    document.getElementById('Dica').style.display='none';
    document.getElementById('Resposta').style.visibility='visible';

    var Num = document.getElementById('Numero').value;
    let SplitNum = Num.split(' ', 5).map((numeros) => parseFloat(numeros));

    if (Num.match(Letras) || Num.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (Num.length == 0 || InputValido ==false){
        document.getElementById('Resultado').innerHTML = "Informe os números corretamente, insira espaço entre eles.";
    }
    else{
        let Answer = (SplitNum.sort((a, b) => a-b)).join(', ');
        document.getElementById('Resultado').innerHTML = "Ordenados: " + Answer;
    }



}