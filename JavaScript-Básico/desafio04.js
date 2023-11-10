/* IMC = peso / (altura * altura)

Elabora um algoritmo que dado o peso e a altura de um adulto
mostre sua condição de acordo com a tabela.

IMC em adultos:
Abaixo do peso = Abaixo de 18.5;
Peso normal = Entre 18.5 e 25;
Acima do peso = Entre 25 e 30;
Obeso = Entre 30 e 40;
Obesidade grave = Acima de 40. */

const pesoKg = 71.00;
const alturaCm = 1.75;
const imc = pesoKg / (alturaCm * alturaCm);

console.log(imc);

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc > 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc > 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc > 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave');
}