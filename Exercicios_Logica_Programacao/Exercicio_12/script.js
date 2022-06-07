function Equacao(){
    let InputValido = false;
    let Letras =/[a-zA-Z]/;
    let Especial = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\ç/,?~]/ 

    var a = document.getElementById('CoefA').value;
    var b = document.getElementById('CoefB').value;
    var c = document.getElementById('CoefC').value;

   
    if (a.match(Letras) || a.match(Especial) || b.match(Letras) || b.match(Especial) || c.match(Letras) || c.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (a.length == 0 || b.length == 0 || c.length == 0 || InputValido == false){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Preencha corretamente";

    }
    else{
        var Delta = (Math.pow(parseFloat(b), 2)) - ( 4 * (parseFloat(a)) * (parseFloat(c)));
        var xI = 0, xII = 0;

        document.getElementById('Resposta').style.visibility='visible';

        if (Delta > 0){
            xI = (((-(parseFloat(b))) + (Math.sqrt(Delta)))/(2*(parseFloat(a)))).toFixed(4);
            xII = (((-(parseFloat(b))) - (Math.sqrt(Delta)))/(2*(parseFloat(a)))).toFixed(4);
        
            document.getElementById('Resultado').innerHTML = "As raízes reais da equação são: " + "<br/>" + "X1 = " + xI + "<br/>" + "X2 = " + xII;

        
        }
        else if (Delta == 0){
            xI = (((-(parseFloat(b))) + (Math.sqrt(Delta)))/(2*(parseFloat(a)))).toFixed(4);
            document.getElementById('Resultado').innerHTML = "Para a equação, há apenas uma raiz real: " + "<br/>" + "X = " + xI ;
        }
        else{
            document.getElementById('Resultado').innerHTML = "A equação não possui raízes reais." ;
        
        }
    }
}