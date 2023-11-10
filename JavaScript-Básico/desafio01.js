/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem; */

const combustivel = 5.38;
const gastoCombustivelKm = 8.4;
const distanciaKm = 470;

const lConsumidos = distanciaKm / gastoCombustivelKm;
const valorGasto = lConsumidos * combustivel;
console.log(valorGasto.toFixed(2));
