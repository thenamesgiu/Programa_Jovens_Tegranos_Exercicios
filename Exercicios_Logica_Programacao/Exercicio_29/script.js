
function Validando(){
    let cnpj = document.getElementById('Numero').value;
    document.getElementById('Resposta').style.visibility='visible';

    var Numero = cnpj.split('-')[0].replace(/[.|\/]/g, ""); 
    var Digito = cnpj.split('-')[1]; 


    let Resultados = document.getElementById('Resultado');
    Resultados.textContent = `${PrimeiroDV(Numero) != Digito[0] || SegundoDV(Numero+""+Digito[0]) != Digito[1] ? 'CNPJ inválido' : 'CNPJ válido'} `

}

function PrimeiroDV(Numero){
    var Peso = 2;
    var Result = 0;
    for (let i = Numero.length - 1; i >=0; i--){       
        Result += Numero[i] * Peso;
        Peso = (Peso == 9 ? 2: Peso +1)
    }
    modulo = Result %11 ;
    Result = (modulo < 2 ? 0: 11 - modulo);

    return Result;
}

function SegundoDV(Numero){
    var Peso = 2;
    var Result = 0;
    for (let i = Numero.length - 1; i >=0; i--){
        Result += Numero[i] * Peso;
        Peso = (Peso == 9 ? 2: Peso +1)
    }
    modulo = Result %11 ;
    Result = (modulo < 2 ? 0: 11 - modulo);
    return Result;
}
