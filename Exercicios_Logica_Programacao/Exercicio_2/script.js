function Retangulo(){
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[`!@#$%^&*()_+\=\[\]{};,':"\\|<>\ç/?~]/ 

    var Base = document.getElementById('Base').value;
    var Altura = document.getElementById('Altura').value;

    if (Base.match(Letras) || Base.match(Especial) || Altura.match(Letras) || Altura.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if(InputValido == false || Base.length == 0 || Altura.length == 0){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Preencha corretamente";    
    }
    else{
        var Area = (parseFloat(Base) * parseFloat(Altura)).toFixed(4);
        var Perimetro = (parseFloat(Base)*2 + parseFloat(Altura)*2).toFixed(4);
        var Diagonal = Math.sqrt((Math.pow(parseFloat(Base), 2)) + (Math.pow(parseFloat(Altura), 2))).toFixed(4);

        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "ÁREA = " + Area + "<br/>" + "PERÍMETRO = " + Perimetro + "<br/>" + "DIAGONAL = " + Diagonal;
    }
}