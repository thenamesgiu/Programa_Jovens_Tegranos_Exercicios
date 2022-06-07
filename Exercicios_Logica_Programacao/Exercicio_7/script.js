function Consumo(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç/,?~]/ 

    var DistanciaP = document.getElementById('Distancia').value;
    var CombustivelG = document.getElementById('Combustivel').value;

    if (CombustivelG.match(Letras) || CombustivelG.match(Especial) || DistanciaP.match(Letras) ||DistanciaP.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (CombustivelG.length == 0 || InputValido == false || DistanciaP.length ==0 ){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Preencha corretamente";
    }
    else{
        var ConsumoMedio = (parseFloat(DistanciaP) / parseFloat(CombustivelG)).toFixed(3);
        document.getElementById('Resposta').style.visibility='visible';
    
        document.getElementById('Resultado').innerHTML = "Consumo médio = " + ConsumoMedio;
    }
}