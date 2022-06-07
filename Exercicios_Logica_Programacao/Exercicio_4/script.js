function Troco(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var EspecialFloat = /[`!@#$%^&*()_+\=\[\]{},;':"\\|<>\/?ç.~]/ 
    var Especial = /[`!@#$%^&*()_+\=\[\]{},;':"\\|<>\/?ç~]/ 

    var PrecoUnit = document.getElementById('Unitario').value;
    var Compra = document.getElementById('QtdComprada').value;
    var Dinheiro = document.getElementById('ValorDado').value;

    if (PrecoUnit.match(Especial) || PrecoUnit.match(Letras) || Dinheiro.match(Letras) || Dinheiro.match(Especial) || Compra.match(Letras) || Compra.match(EspecialFloat)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (PrecoUnit.length == 0 || Compra.length == 0 || Dinheiro.length == 0 || InputValido == false){
        document.getElementById('Resposta').style.visibility='visible';

        document.getElementById('Resultado').innerHTML="Preencha corretamente.";
    }
    else{
        document.getElementById('Resposta').style.visibility='visible';
        var Total = (parseInt(Compra) * parseFloat(PrecoUnit)).toFixed(2);
        var ValorRecebido = (parseFloat(Dinheiro)).toFixed(2);

        if (ValorRecebido < Total){
            document.getElementById('Resultado').innerHTML="O dinheiro recebido não é suficiente para o pagamento";

        }
        else{
            var Troco = (ValorRecebido - Total).toFixed(2);
            document.getElementById('Resultado').innerHTML="TROCO = R$" + Troco;
        }
    
        
    }
}