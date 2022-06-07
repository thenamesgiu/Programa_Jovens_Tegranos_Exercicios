function Terreno(){
    let InputValido = false;
    let Letras =/[a-zA-Z]/;
    let Especial = /[ `!@#$%^&*()_+\=\[\]{};':"\\|<>ç\/?~]/ 

    let Larg = document.getElementById('Largura').value;
    let Comp = document.getElementById('Comprimento').value;
    let ValMetro = document.getElementById('ValorMetro').value;

    if (Larg.match(Letras) || Comp.match(Letras) || ValMetro.match(Letras) || Larg.match(Especial) || Comp.match(Especial) || ValMetro.match(Especial)){
       InputValido = false;
    }
    else{
        InputValido=true;
    }



    if (Larg.length == 0 || Comp.length == 0 || ValMetro.length == 0 || InputValido == false){
        document.getElementById('Resposta').style.visibility='visible';

        document.getElementById('AreaTerreno').innerHTML = "Preencha as informações corretamente.";
    }
    else{
        document.getElementById('Resposta').style.visibility='visible';

        var La = parseFloat(Larg).toFixed(1);
        var Co = parseFloat(Comp).toFixed(1);
        var Va = parseFloat(ValMetro).toFixed(2);

        var Area = (La*Co).toFixed(2);
        var Total = (Area*Va).toFixed(2);
        document.getElementById('AreaTerreno').innerHTML = "Área do terreno = " + Area + "m²";
        document.getElementById('ValorTotal').innerHTML = "Preço do terreno = R$" + Total;
    }
}