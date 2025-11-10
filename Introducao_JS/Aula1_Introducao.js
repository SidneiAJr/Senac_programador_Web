function pedeTudo(){
    let nome = String(prompt("Insira seu Nome: "));
    let idade = Number(prompt("Insira Sua Idade: "));
    let nota1 = Number(prompt("Insira nota: "))
    let nota2 = Number(prompt("Insira nota: "))
    let nota3 = Number(prompt("Insira nota: "))
    let soma = (nota1+nota2+nota3)/3;
    let numero = Number(prompt("Insira um Numero: "))

    if(soma>=7){
        console.log(`Aprovado ${soma.toFixed(2)}`)
    }else if(soma>=5){
        console.log(`Em Recuperacao ${soma.toFixed(2)}`)
    }else{
        console.log(`Reprovado ${soma.toFixed(2)}`)
    }

    let verificaNumero = numero%2

    if(verificaNumero===0){
     console.log(`E par`);
    }else{
        console.log(`E impar`);
    }

    const frutas = ["Maça","Banana","uva"];
    for(const fruta of frutas){
        console.log(frutas)
    }

    for(let i=0; i<=10; i++){
        console.log(`soma é: ${i+numero}`)
    }

    const s = (a,b)=> a+b
    console.log(`Resultado da soma de 3 + 5: ${s(3, 5)}`);

    console.log(`Ola ${nome} Tudo certo? Soma: ${soma.toFixed(2)} o Numero que escolheu ${verificaNumero}`);


}

pedeTudo()
