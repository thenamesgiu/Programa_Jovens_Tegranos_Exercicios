function Areas(){

   
    var InputValido = false;
    var Letras =/[a-zA-Z]/;
    var Especial = /[ `!@#$%^&*()_+\=\[\]{};,':"\\|<>\/?~]/ 

    var A = document.getElementById('MedA').value;
    var B = document.getElementById('MedB').value;
    var C = document.getElementById('MedC').value;

    if (A.match(Letras) || B.match(Letras) || C.match(Letras) || C.match(Especial) || B.match(Especial) || A.match(Especial)){
        InputValido = false;
    }
    else{
        InputValido = true;
    }

    if (A.length == 0 || B.length == 0 || C.length == 0 || InputValido == false){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('QuadradoResultado').innerHTML = "Preencha as informações corretamente.";
        document.getElementById('TrianguloResultado').innerHTML = "Utilize apenas valores numéricos.";
        document.getElementById('TrapezioResultado').innerHTML = "Para decimais, utilize apenas ponto.";
    }
    else{
        document.getElementById('Resposta').style.visibility='visible';
        var Quadrado = (Math.pow(parseFloat(A), 2)).toFixed(4);
        var Triangulo = (parseFloat(A) * parseFloat(B) / 2).toFixed(4);
        var Trapezio = ((parseFloat(A) + parseFloat(B))*parseFloat(C)/2).toFixed(4);

        document.getElementById('QuadradoResultado').innerHTML = "ÁREA DO QUADRADO = " + Quadrado;
        document.getElementById('TrianguloResultado').innerHTML = "ÁREA DO TRIÂNGULO = " + Triangulo;
        document.getElementById('TrapezioResultado').innerHTML = "ÁREA DO TRAPÉZIO = " + Trapezio;
    }
}