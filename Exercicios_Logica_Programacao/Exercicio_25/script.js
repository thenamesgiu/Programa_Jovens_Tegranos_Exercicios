function Signo(){
    let DataInp = document.getElementById('Numero').value;
    let DataNasc = new Date(DataInp);

    let GetMes = DataNasc.getMonth()+1;
    let GetDia = DataNasc.getDate()+1;

    var Mes = parseInt(GetMes);
    var Dia = parseInt(GetDia);

    let ZodiacoSigno;

    if (DataInp.length == 0){
        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Informe a data corretamente.";

    }
    else{

        if ((Mes == 3 && Dia >= 21 ) || (Mes == 4 && Dia <= 20)){
            ZodiacoSigno = "Áries";
        }
        else if ((Mes == 4 && Dia >= 21 ) || (Mes == 5 && Dia <= 20)){
            ZodiacoSigno = "Touro";
        }
        else if ((Mes == 5 && Dia >= 21 ) || (Mes == 6 && Dia <= 20)){
            ZodiacoSigno = "Gêmeos";
        }
        else if ((Mes == 6 && Dia >= 21 ) || (Mes == 7 && Dia <= 22)){
            ZodiacoSigno = "Câncer";
        }
        else if ((Mes == 7 && Dia >= 23 ) || (Mes == 8 && Dia <= 22)){
            ZodiacoSigno = "Leão";
        }
        else if ((Mes == 8 && Dia >= 23 ) || (Mes == 9 && Dia <= 22)){
            ZodiacoSigno = "Virgem";
        }
        else if ((Mes == 9 && Dia >= 23 ) || (Mes == 10 && Dia <= 22)){
            ZodiacoSigno = "Libra";
        }
        else if ((Mes == 10 && Dia >= 23 ) || (Mes == 11 && Dia <= 21)){
            ZodiacoSigno = "Escorpião";
        }
        else if ((Mes == 11 && Dia >= 22 ) || (Mes == 12 && Dia <= 21)){
            ZodiacoSigno = "Sagitário";
        }
        else if ((Mes == 12 && Dia >= 22 ) || (Mes == 1 && Dia <= 20)){
            ZodiacoSigno = "Capricórnio";
        }
        else if ((Mes == 1 && Dia >= 21 ) || (Mes == 2 && Dia <= 18)){
            ZodiacoSigno = "Aquário";
        }
        else if ((Mes == 2 && Dia >= 19 ) || (Mes == 3 && Dia <= 20)){
            ZodiacoSigno = "Peixes";
        }
        

        document.getElementById('Resposta').style.visibility='visible';
        document.getElementById('Resultado').innerHTML = "Seu signo do zodíaco é " + "<b>" + ZodiacoSigno + "</b>";
    }
}



