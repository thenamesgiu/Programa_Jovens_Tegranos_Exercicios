function SomaP(){
    var Palavras = document.getElementById('Palavra').value;

    //Regex com pattern de vogal e consoante
    var Vogais = /[aeiouóéíúáìòàùôûêâãõ]/gi;
    var Consoante = /[b-df-hj-np-tv-z]/gi

    document.getElementById('Resposta').style.visibility='visible';
  
    //Verificando se a pattern do regex é encontrada no input
    var SomaV =Palavras.match(Vogais);
    var SomaC = Palavras.match(Consoante);
 

    if (SomaC == null && SomaV != null){
        document.getElementById('Resultado').innerHTML = "Vogais: " + SomaV.length + "<br/>" + "Consoantes: 0 ";
    }
    else if (SomaC != null && SomaV == null){
        document.getElementById('Resultado').innerHTML = "Vogais: 0" + "<br/>" + "Consoantes: " + SomaC.length;
    }
    else if(SomaC == null && SomaV == null){
        document.getElementById('Resultado').innerHTML = "Não é uma palavra, insira algo válido.";
    }
    else{
    document.getElementById('Resultado').innerHTML = "Vogais: " + SomaV.length + "<br/>" + "Consoantes: " + SomaC.length;
    }
}