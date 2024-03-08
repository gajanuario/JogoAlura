//1
function mensagem() {
    console.log('Olá mundo')
}
mensagem();


//2
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}
  exibirOlaNome("Alice");


//3
function numeroDobro(numero) {
    console.log(numero * 2 );  
}

numeroDobro(2);
//para ficar melhor:
function calcularDobro(numero) {
    return numero * 2;
}
let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);


//4
function calcularMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}
let resultadoMedia = calcularMedia(5,1,5);
console.log(resultadoMedia);


//5
function encontrarMaior(a, b) {
    return a > b ? a : b; //Se condition é true, o operador retornará o valor de a; se não, ele retorna o valor de b.
}
let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);


//6
function quadrado(num1) {
    return num1 * num1;
}
let resultadoquadrado = quadrado(7);
console.log(resultadoquadrado)
