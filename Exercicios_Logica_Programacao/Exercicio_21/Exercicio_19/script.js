function Salario(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\,ç/?~]/ 

    var Num = document.getElementById('Numero').value;
    let Atual = parseFloat(Num);
    let Novo, Percentual;

    if (Num.match(Letras) || Num.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (Num.length == 0 || InputValido ==false){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Informe o salário corretamente.";

    }
    else{
        if (Atual <= 999){
            Percentual = 20;
            Novo = Atual * 0.2 + Atual;
        }
        else if (Atual <= 2999){
            Percentual = 15;
            Novo = Atual * 0.15  + Atual;
        }
        else if (Atual <= 7999){
            Percentual = 10;
            Novo = Atual * 0.1  + Atual;
        }
        else{
            Percentual = 5;
            Novo = Atual* 0.05 + Atual
        }
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Novo Salário = " + Novo.toFixed(2) + "<br/>" + "Aumento = " + (Novo-Atual).toFixed(2) + "<br/>" + "Porcentagem = " + Percentual + "%";
    }
}