//Parte 1
// 1.
var nome;
var idade;
var cidade;

console.log("Meu nome é", nome, "tenho", idade, "anos e moro em", cidade);

//2.
let n1 = 7;
let n2 = 8;
let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;
let restoDivisao = n1 % n2;

console.log("A soma de n1 + n2 é:", soma);
console.log("A subtração de n1 + n2 é:", subtracao);
console.log("A multiplicação de n1 + n2 é:", multiplicacao);
console.log("A divisão de n1 + n2 é:", divisao);
console.log("O resto da divisão de n1 + n2 é:", restoDivisao);

console.log("--------------------------------------------------");
function calcularArea(lArgura, aLtura) {
  return lArgura * aLtura;
}

let lArgura = 15;
let aLtura = 7;

let area = calcularArea(lArgura, aLtura);
console.log("A Aréa de um retangulo é", area);

console.log("-------------------------------------------");
function calcularVolume(Comprimento, largura, altura) {
  return Comprimento * largura * altura;
}
let Comprimento = 6;
let Largura = 5;
let Altura = 4;

let volume = calcularVolume(Comprimento, Largura, Altura);
console.log("Volume do paralelepípedo:", volume);

