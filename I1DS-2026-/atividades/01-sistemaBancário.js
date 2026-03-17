/***************************************************** 
              Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/

//Criando variáveis com let
let nome = "Robson";
let banco = "RfBank";
let numag = 27;
let conta = 155676;
let saldo = 12345;
//Imprimindo o saldo e dados bancários da conta
console.log("------------------------------------------");
console.log("O nome do representante da conta é ", nome);
console.log("Banco", banco);
console.log("Agência", numag);
console.log("Conta de número", conta);
console.log("Saldo total $", saldo);

console.log("------------------------------------------");

//Efetuando e imprimindo movimentações
let pix1 = 27;
let pix2 = 67;
let pix3 = 90;
let fatura1 = 567;
let fatura2 = 450;

console.log("Esse é seu extrato recente da conta");
console.log("Saldo inicial: $", saldo);
console.log("Pix recebido de Claudinho no valor de $ ", pix1);
console.log("Novo saldo da conta: $", saldo + pix1);
saldo += pix1;
console.log("Pix enviado para Bar do Zé no valor de: $", pix2);
console.log("Novo saldo da conta: $", saldo - pix2);
saldo -= pix2;
console.log("Pix recebido de Claudia Clara no valor de: $", pix3);
console.log("Novo saldo da conta: $", saldo + pix3);
saldo += pix3;
console.log("Pagamento de fatura de cartão no valor de: $", fatura1);
console.log("Novo saldo da conta: $", saldo - fatura1);
saldo -= fatura1;
console.log("Pagamento de parcela de Carro no valor de: $", fatura2);
console.log("Novo saldo da conta: $", saldo - fatura2);
saldo -= fatura2;


console.log("------------------------------------------");
console.log("O nome do representante da conta é ", nome);
console.log("Banco", banco);
console.log("Agência", numag);
console.log("Conta de número", conta);
console.log("Saldo total $", saldo);
console.log("------------------------------------------");