function calcular(){
    const valorsalariobruto = document.getElementById('salario').value
    const descontosvt = valorsalariobruto*0.06
    const salarioliquido = valorsalariobruto-descontosvt
    const ir1 = 0.10;
    const ir2 = 0.15;
    const ir3 = 0.20;
    const ir4 = 0.25;


    if(valorsalariobruto<=4000){
        document.getElementById('res').innerHTML=`
        Salario R$ ${valorsalariobruto} Não há Imposto
        Salario Liquido R$ ${salarioliquido.toFixed(2)}
        `
    }else if(valorsalariobruto<2826.66 && valorsalariobruto>=2826.66){
        const desc = valorsalariobruto*ir1
        const desctotal = salarioliquido- desc
        document.getElementById('res').innerHTML=`
        Salario R$ ${valorsalariobruto} Não há Imposto
        Salario Liquido R$ ${desctotal.toFixed(2)}
        `
    }


}
