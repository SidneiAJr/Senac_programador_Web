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
arrays()

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
    frutas.splice(1,2,"")
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
let valores = [15, 23, 8, 42, 4, 16];
let soma = valores[0]+valores[1]+valores[2]+valores[3]+valores[4]+valores[5]

for(let i=0; i<valores.length; i++){
    console.log(`Soma total: ${soma}`)
}


}
arrays2()
