/* Faça uma função para saber se é maior de idade */

function verificarIdade(idade) {
    if (idade < 18) {
        console.log('Menor de idade');
    } else {
        console.log('Maior de idade');
    }
}

verificarIdade(15);