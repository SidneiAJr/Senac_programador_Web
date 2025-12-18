function calcular(){
    const valorsalariobruto = document.getElementById('salario').value
    const descontosvt = valorsalariobruto*0.06
    const salarioliquido = valorsalariobruto-descontosvt
    /* Tabela de IR
    | Faixa de Salário Bruto (R$) | Alíquota | Parcela a Deduzir (R$) |
| --------------------------- | -------- | ---------------------- |
| Até 2.112,00                | Isento   | 0                      |
| De 2.112,01 a 2.826,65      | 7,5%     | 158,40                 |
| De 2.826,66 a 3.751,05      | 15%      | 370,40                 |
| De 3.751,06 a 4.664,68      | 22,5%    | 651,73                 |
| Acima de 4.664,68           | 27,5%    | 884,96                 |

    */

    const ir = valorsalariobruto

    if(valorsalariobruto<=4000){
        document.getElementById('res').innerHTML=`
        Salario R$ ${valorsalariobruto} Não há Imposto
        Salario Liquido R$ ${salarioliquido.toFixed(2)}
        `
    }

}
