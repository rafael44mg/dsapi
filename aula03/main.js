// Hello World!
console.log("Hello World!");

// Constante (valor fixo) x Variável (pode mudar)
const PI = 3.14;
let x = 10 + PI;
a = 11;
console.log (a);


//Tipos do JavaScript:
// string, number, boolean
// object, array, function

let minhaFuncao = function(a,b) {
    return(a+b);
}

console.log(typeof(minhaFuncao));

//JavaScript -> fracamente tipado 
//posso mudar o tipo de uma variável atribuindo
//novo valor com diferente tipo.
minhaFuncao = 5;
console.log(typeof(minhaFuncao));
minhaFuncao = "5";
console.log(typeof(minhaFuncao));
minhaFuncao = true;
console.log(typeof(minhaFuncao));

//Objetos são protótipos
//Posso criar dinamicamente os atributos
//a partir da notação JSON (JavaScript Object Notation)
let meuObjeto = {};
meuObjeto.nome = "Fulano";
meuObjeto.idade = 20;
console.log(meuObjeto);
console.log(typeof(meuObjeto));

let meuObjeto2 = {
    nome: "Sicrano",
    idade: 30
};
meuObjeto2.endereco="Rua Coronel Genuino, 112";
console.log(meuObjeto2);
console.log(typeof(meuObjeto2));

//Ou posso criar um objeto a partir de uma classe
class Pessoa{
    nome;
    idade;  
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }  
}

let pessoa = new Pessoa("Beltrano", 40);
console.log(pessoa);
//Mas por ser prototype, posso alterar a estrutura
//dinamicamente.
pessoa.endereco = "Rua X, 220";
console.log(pessoa);

//if-else
let maior = 0;
const numero1 = 20, numero2=30;
if(numero1 >= numero2) {
    maior = numero1;
}
else {
    maior = numero2;
}
console.log("Maior", maior)
maior = (numero1 <= numero2) ?numero1 :numero2;






for( let i=0; i<=10; i++){
    console.log("I:", i);
}

const arrayFrutas = ['limao', 'laranja','bergamota'];

for (let i in arrayFrutas){
    console.log('Fruta [${i}]: ${arrayFrutas[i]}');
}

for (let fruta of arrayFrutas){
    console.log('Fruta: ${fruta}');
}

function maior (a, b){
    let maior = (numero1 >= numero2) ?numero1 :numero2;
    console.log("Maior: ", maior);
}