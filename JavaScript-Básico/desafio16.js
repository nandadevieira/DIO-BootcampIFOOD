/* Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 4 */


var max = Math.max(4, 100, 150, 90, 200);
var mim = Math.min(4, 100, 150, 90, 200);

console.log(`Maior é ${max} e o menor é ${mim}`);