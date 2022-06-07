function MediaAnual(){

    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[ `!@#$%^&*()_+\=\[\]{};,':"\\|<>\/?~]/ 


    var nota1 = document.getElementById('Primeira').value;
    var nota2 = document.getElementById('Segunda').value;

    var media = (parseFloat(nota1) + parseFloat(nota2)).toFixed(1);


    if (nota1.match(Letras) || nota1.match(Especial) || nota2.match(Letras) || nota2.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (nota1.length == 0 || nota2.length == 0 || InputValido == false){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Nota').innerHTML = "Algo deu errado.";
        document.getElementById('Aprovacao').innerHTML = "Preencha as informações corretamente.";

    }
    else{
        var aprovacao = "";

        if (media >= 60){
            aprovacao = "APROVADO";
        }
        else {
            aprovacao = "REPROVADO";
        }

        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Nota').innerHTML = "NOTA FINAL = " + media;
        document.getElementById('Aprovacao').innerHTML = aprovacao
    }
}