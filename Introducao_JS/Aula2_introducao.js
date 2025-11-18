let opcao = Number(prompt("Selecione uma Opção \n 1- Array \n 2- array2 \n 3-Ferias"))
let Lista = []
let opcao2 = Number(prompt("Selecione uma Opção \n 1- Listar tarefas \n 2- Remover Tarefas \n 3-Marca Concluidos \n 4- Adicionar"))

function arrays() {
    let array = ["Maça", "Motor", 20, 30]
    array.push("Pedro")
    console.log(array)
    array.splice(1, 2, "Jaguara")
    console.log(array)
    array.unshift("Pedro mesa")
    console.log(array)
    array.shift(1)
    console.log(array)
    array.pop("pedro jr")
    console.log(array)
    
}

function arrays2(){
    let cores = ["Vermelho","Azul","preto","preto2","preto3"]
    console.log(cores[0])
    console.log(cores[2])
    let numeros = [10, 20, 30, 40, 50]
    numeros.push(60);
    console.log(numeros)
    numeros.splice(0,1,"Ciano")
    console.log(numeros)
    numeros.splice(0,1)
    console.log(numeros)
    numeros.slice(3,4)
    console.log(numeros)
    let frutas = ["maça", "banana", "laranja", "uva", "manga"];
    frutas.splice(0,1,"")
    console.log(numeros)
    frutas.splice(1,2,"")
    console.log(numeros)
    frutas.splice(2,3,"")
    console.log(numeros)
    let produtos = ["notebook", "mouse", "teclado", "monitor", "webcam"];
    for(let i=0; i<produtos.length; i++){
        console.log(`Indice ${i} produtos ${produtos[i]}`)

    }
    for (const item of produtos) {
  console.log(item);

  produtos.forEach((item, index) => {
  console.log(`Índice ${index}: ${item}`);
});
}



let soma = 0;
let diminuir = 0;
let maior = 0;
let menor = 0;
let valores = [15, 23, 8, 42, 4, 16];
for(let i=0; i<valores.length; i++){

    soma = soma + valores[i];
    diminuir = diminuir - valores[i]

    let par = valores[i] % 2;

    if(par===0){
        console.log("E par")
    }else{
        console.log("E impar")
    }

    if(maior>valores[i]){
        maior = valores[i]
        console.log(`E Maior ${maior}`)
    }

    if(menor<valores[i]){
        menor = valores[i]
        console.log(`E Maior ${menor}`)
    }

    console.log(`Soma total: ${soma}`)
    console.log(`Diminuir: ${diminuir}`)
}
}

function ferias(){
    let temperaturas = [22, 25, 19, 30, 28, 23, 27];
    let soma = 0;
    let media = 0;
    let dias = 0;

    for(let i=0; i<temperaturas.length; i++){
       soma = soma + temperaturas[i]
       console.log(`Soma ${soma}`)
    }
    media = soma/7

    for(let i=0; i<temperaturas.length; i++){
      if(temperaturas[i]>media){
        console.log(`Tempertaura acima da media no dia ${i} Temp ${media.toFixed(2)}`)
      }else{
         console.log(`Tempertura abaixo da media ${i}Temp ${media.toFixed(2)}`)
      }
      if(temperaturas[i]>media){
          console.log(`Tempertaura acima da media de 25Cº no dia ${i} Temp ${media.toFixed(2)}`)
      }else{
          console.log(`Tempertura abaixo da media 25Cº ${i}Temp ${media.toFixed(2)}`)
      }
    }
}


function tarefas(){
      switch(opcao2){
        case 1:
        listarTarefas()
        break;
        case 2:
        removerTarefa()
        break
        case 3:
        marcarConcluida();
        break;
        case 4:
        listarTarefas();
        break
        default:
        console.log("Erro")
        break;
      }
}

// Funções para implementar:
function adicionarTarefa(tarefa) {
  
}

function removerTarefa(indice) {
  
}

function listarTarefas() {
  
}

function marcarConcluida(indice) {
  
}


function menu(){
      switch(opcao){
          
        case 1:
        arrays()
        break;
        case 2:
        arrays2()
        break;
        case 3:
        ferias()
        break;
        case 4:
        break;
        default:
        console.log("Erro")
        break;
      }
}


