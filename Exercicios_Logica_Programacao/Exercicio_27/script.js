function Palindromos(){  
    var InputValido = false;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç/?,.~]/ 

    var PalavraInput = document.getElementById('Palindromo').value.toLowerCase();
    let Reverso = PalavraInput.split('').reverse().join('');
    document.getElementById('Resposta').style.visibility='visible';

    if (PalavraInput.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (InputValido == false || PalavraInput.length == 0){
        document.getElementById('Resultado').innerHTML = "Informe corretamente.";

    }
    else{
        var Palind;

        if (PalavraInput == Reverso){
            Palind = "É palíndroma.";
        }
        else{
            Palind = "Não é palíndroma.";
        }

        document.getElementById('Resultado').innerHTML = Palind;
    }
    

}