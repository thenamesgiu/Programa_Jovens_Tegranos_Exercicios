function Glicose(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç/,?~]/ 

    var GlicQtd = document.getElementById('Numero').value;
    var Classificando = "";
    document.getElementById('Resposta').style.visibility='visible';

    if (GlicQtd.match(Letras) || GlicQtd.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (GlicQtd.length == 0 || InputValido == false){
        document.getElementById('Resultado').innerHTML = "Informe o valor corretamente.";
    }
    else{
        if (parseFloat(GlicQtd) <= 100){
            Classificando = "Normal";
        }
        else if (parseFloat(GlicQtd) <= 140){
            Classificando = "Elevado";
        }
        else{
            Classificando = "Diabetes";
        }
        document.getElementById('Resultado').innerHTML = "Classificação: " + Classificando;
    }
}