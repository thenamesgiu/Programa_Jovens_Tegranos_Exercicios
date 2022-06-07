function Segundos(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç/?~]/ 

    var Seg = document.getElementById('Numero').value;

   
    if (Seg.match(Letras) || Seg.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (Seg.length == 0 || InputValido ==false){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Informe a duração corretamente.";

    }
    else{

        var Segundo = Math.floor(parseInt(Seg) % 3600 % 60);
        var Minuto = Math.floor(parseInt(Seg) % 3600 / 60);
        var Hora = Math.floor(parseInt(Seg) / 3600);

        document.getElementById('Resposta').style.visibility='visible';

        document.getElementById('Resultado').innerHTML = Hora + ":" + Minuto + ":" + Segundo
    }

  
}