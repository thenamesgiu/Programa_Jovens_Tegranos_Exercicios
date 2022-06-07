function Pagamento(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{},;':"\\|<>\/?ç~]/ 

    var Funcionario = document.getElementById('NomeFunc').value;
    var Horas = document.getElementById('HoraValor').value;
    var Trabalhada = document.getElementById('HorasTrab').value;

    if (Horas.match(Especial) || Horas.match(Letras) || Trabalhada.match(Letras) || Trabalhada.match(Especial)){
        InputValido = false;
    } 
    else{
        InputValido = true;
    }

    if(Funcionario.length == 0 || Horas.length==0 || Trabalhada.length==0 || InputValido == false){
        document.getElementById('Resposta').style.visibility='visible';

        document.getElementById('Resultado').innerHTML = "Preencha corretamente. ";
       
    }
    else{
        var Total = (parseFloat(Horas) * parseFloat(Trabalhada)).toFixed(2);
        document.getElementById('Resposta').style.visibility='visible';

        document.getElementById('Resultado').innerHTML = "O pagamento para " + Funcionario + " deve ser de R$" + Total;
    }
}