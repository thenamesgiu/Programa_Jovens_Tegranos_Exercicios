function IdadeMedia(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[ `!@#$%^&*()_+\=\[\]{};.':"\\|<>ç\/?~]/ 

    
    var Nome1 = document.getElementById('nome1').value;
    var Idade1 = document.getElementById('idade1').value;
    var Nome2 = document.getElementById('nome2').value;
    var Idade2 =  document.getElementById('idade2').value;

   

    if (Idade1.match(Letras) || Idade1.match(Especial) || Idade2.match(Letras) || Idade2.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }



    if(Nome1.length==0 || Nome2.length == 0 || Idade1.length==0 || Idade2.length==0 || InputValido == false){
        document.getElementById('Resposta').style.visibility='visible';

        document.getElementById('resultado').innerHTML = "Preencha as informações corretamente.";
    }
    else{
        document.getElementById('Resposta').style.visibility='visible';
        var MediaIdade = ((parseInt(Idade1) + parseInt(Idade2))/2).toFixed(1);
        document.getElementById('resultado').innerHTML = "A idade média de " + Nome1 + " e " + Nome2 + " é de " + MediaIdade + " ano(s).";
    }
    
}