function Temperatura(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>,\ç/?~]/ 

    var Escala = document.getElementById('EscalaTemp').value;
    var Temp = document.getElementById('TempInformada').value;
    var Resultados;

    if (Temp.match(Letras) || Temp.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (Temp.length == 0 || InputValido == false){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Preencha corretamente, utilize ponto para decimais."; 

    }
    else{
        if (Escala == "F"){
            Resultados = "Temperatura equivalente em Celsius: " + ((parseFloat(Temp) - 32 )/1.8).toFixed(2); 
        }
        else{
            Resultados = "Temperatura equivalente em Fahrenheit: " + ((parseFloat(Temp) *9/5 )+32).toFixed(2); 
    
    
        }

        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = Resultados; 
    
    }

}