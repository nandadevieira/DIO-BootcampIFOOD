/* Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12 */

const numeros = [5, 1, 3, 9, 10, 12];
       
    for (let i = 0; i < numeros.length; i++) {
        const numerosPares = numeros[i];
        if (numerosPares % 2 === 0) {
            console.log(numerosPares);
        }
            
    }