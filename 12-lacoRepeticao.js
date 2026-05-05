// Laço de repeteção . FOR (PARA)
// O professor te colocou de castigo e pediu para voce escrever mil vezes a frase
// "Eu vou prestar atenção às aulas e anotar tudo!"

//, i++ == i = 1+1
// let 1 = 0 => primeiro utilizo uma variavel de controle
//i++ => aumenta a variavel de controle para não trazer e somar
for (let i = 0; i < 1000; i++) {
console.log("Eu vou prestar atenção às aulas e anotar tudo ");
}
console.log("---------------------------------")


// Escreva todos os números de 1 a 20
for (let i = 1; i <= 20; i++) {
    console.log (i);
}

// Escreva todos os números pares entre 1 e 20
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
console.log("---------------------------------");

// Outra solução de números pares
for (let i = 1; i < 20; i++) {
    if (i % 2 == 0)console.log(i);
// % => resto da Divisão
// 1 % 2 == 0 => O resto da divisão de 1 por 2 for 0, ele mostra 1
}

// Dado um vetor, calcule e exiba o somatório de seus elementos
var numeros = [ 5,6,8,14,0,6,9,7,2 ];
let soma = 0;

console.log(numeros.length)
    // numeros.length => Mostra a quantidade do itens do array
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    console.log(soma);

// Laço de repetição - While / Do While
//-------------------------------------
//While testa a condição antes de entrar no laço de repetição 
// Se a condição for inicialmente falsa, o laço não é executado nenhuma vez
var x = 10;

while (x > 10) {
console.log("Entrei no laço While...");
    x = 0
    
}
console.log("Terminei!");

// Somar enquanto (While) menor que 10
var somar = 0; // variáel para armazenar a soma dos números 
var num = 0; //variável para aumentar de 1 em 1 
    hile (soma < 10){
    somar += num; // Somo o número atual com o que já existe na variável
    num++;     // Variável de controle para o While funcionar 
    console.log('Somando...', somar);
      console.log('Numero...', num);
}
    for ( let i = 0; i < 10; i++) {
        
    }

var i = 0
while (i < 10) {
    i++
}
