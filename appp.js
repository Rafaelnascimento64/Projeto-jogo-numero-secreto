
function oi(){
    console.log("Olá, mundo!");
}

let nome = ("Rafael");
function oix(tag){
    console.log("Olá, "+tag+"!!");
}

let number = 4;
let number1 = 2;
let number2 = 3;

function strat(number){
 let dobro = (number * 2);
    console.log(dobro);
}

function starr(number,number1,number2){
  let  media = (number + number1 + number2);
  media = media / 3;
  console.log(media); 
}

function stratta(number,number1){
if(number > number1){
console.log(number);
}else{
console.log(number1);
}
}

function quadrado(number2){
let result = (number2 * number2);
console.log(result);
}

oi();
oix(nome);
strat(number);
starr(number,number1,number2);
stratta(40, 300);
quadrado(4);


let altura, peso;
function imc(altura, peso){
let imc = peso/(altura * altura);
console.log(imc);
}

let fator;
function fatorial(fator){
    let indice = fator - 1;
    while(indice > 0){
        fator = fator * indice;
        indice--;
        console.log(fator);
        console.log(indice);
    }
    console.log(fator);
    console.log(indice);
}

let dolar;
function converter(dolar){
    let reais = (dolar / 5.67);
    console.log(reais);
}

let comprimento, largura;
function casa(comprimento, largura){
    let area = (comprimento * largura);
    let perimetro = (comprimento * 2) + (largura * 2);
    console.log("perimetro= "+perimetro+ " area = "+area);
}

let raio, pi = 3.14;
function medida(raio){
let medida = (pi *(raio * raio));
console.log(medida);
}

let escolhido, indice2 = 1 ;
function tabuada(escolhido){
    while(indice2 < 11){
        let igual = (escolhido * indice2);
        indice2++;
        console.log(escolhido+ " x "+indice2+" = " + igual);
    }
}

imc(1.75, 83);
fatorial(4);
converter(100);
casa(15,15);
medida(3);
tabuada(10);

