//1
function imc(altura, peso) {
    return peso / (altura * altura);
}
let resultadoImc = imc(80, 70);
console.log(resultadoImc)

//2
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }

//3
function converterDolar(dolar) {
    return dolar * 4.80;
}
let resultado = converterDolar(4);
console.log(`${resultado} reais`)

//4 
function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(area)
    console.log(perimetro)
}
    calcularAreaPerimetroSalaRetangular(8,9)

//5
function calcularAreaPerimetro(raio) {
    let area = (raio * raio) * 3.14;
    let perimetro = (2 * 3.14) * raio;   
    console.log(area)
    console.log(perimetro)
}
    calcularAreaPerimetro(8);

//6
function tabuada(num) {
    for (let i = 1; i <= 10; i++) {
      let resultado = num * i;
      console.log(`${num} x ${i} = ${resultado}`);
    }
}
tabuada(9);



