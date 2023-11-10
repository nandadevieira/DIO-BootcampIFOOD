/* Faça um programa para calcular o valor de uuma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar essa viagem. */

const precoEtanol = 3.65;
const precoGasolina = 5.38;
const gastoCombustivelKm = 8.4;
const distanciaKm = 470; /* bsb - cn */
const tipoCombustivel = 'Gasolina';

const lConsumidos = distanciaKm / gastoCombustivelKm;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = lConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = lConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

