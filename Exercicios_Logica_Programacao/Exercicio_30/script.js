function Extenso(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç/.,?~]/ 
    document.getElementById('Dica').style.display='none';

    var Num = document.getElementById('Numero').value;
    var Algarismo = parseInt(Num);
    var Unidade = ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez", "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"];
    var Dezena = ["", "", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
  
    if (Num.match(Letras) || Num.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (Num.length == 0 || InputValido == false || Num.length > 2 ){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Preencha corretamente, utilize apenas números inteiros." + "<br/>" + "A inserção de números com mais de dois algarismos confere erro.";
    }
    else{
        document.getElementById('Resposta').style.visibility='visible';

        if (Algarismo<20){
            document.getElementById('Resultado').innerHTML = Unidade[Algarismo];
        }
        else{
            if(Algarismo%10==0){
                document.getElementById('Resultado').innerHTML = Dezena[Num[0]];
            }
            else{
                document.getElementById('Resultado').innerHTML = Dezena[Num[0]] + " e " + Unidade[Num[1]];
            }
        }
    }
}