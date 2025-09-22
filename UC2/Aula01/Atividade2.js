// Basico de JS(DeNovo)
let n1 = 5;
let n2 = 5;
let soma = n1+n2;
console.log(soma);

// Basico de JS(If) 
if(n1<=n2){
    console.log(`Nota ${n1}`)
}else{
    console.log(`Nota ${n2}`)
}

//Basico de Loop
let i = 0;
while (i<=10){
    i++
    console.log(`Incrementando ${i}`)
}

//Basico de Loop For
for(let i=0; i<=10; i++){
     console.log(`Incrementando ${i}`)
}

//Basico de Array 
let array = [1,2,3,4,5]
let ar2 = array.push(6)
for(let i=0; i<array.length; i++){
    console.log(`Array Contado ${array}`)
}

//Basico de Função
function teste(){
    let n1 = 5;
    let n2 = 5;
    let soma = n1+n2;
    console.log(soma);
}
teste();

//Basico de POO 1
class teste2{
   constructor(n1,n2){
    this.n1 = n1;
    this.n2 = n2;
   }
    somar(){
        let n6 = this.n1+this.n2
        console.log(`Soma ${n6}`);
    }
   }

const n3 = new teste2(5,5);
n3.somar();

//Basico de POO 2
class teste3{
    constructor(n7,n8){
        this.n7 = n7;
        this.n8 = n8;
    }
    somar(){
        let somar2 = this.n7+this.n8
        console.log(`Soma ${somar2}`)
    }
    dividr(){
        let divir = this.n7/this.n8
        console.log(`Dividir ${divir}`)
    }
    multiplicar(){
        let multiplicar = this.n7*this.n8
        console.log(`Multiplicar ${multiplicar}`)
    }
}

const teste4 = new teste3(10,5);
teste4.somar();
teste4.dividr();
teste4.multiplicar();


