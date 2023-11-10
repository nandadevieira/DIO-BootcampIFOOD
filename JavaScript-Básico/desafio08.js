/* Invocando uma função dentro de outra função */

function escrevaMeuNome(nome) {
    return('Meu nome é ' + nome);
}

escrevaMeuNome('Fernanda');

function verificarIdade(idade) {
    if (idade > 18) {
        console.log(escrevaMeuNome('Fernanda') + ' é maior de idade');
    } else {
        console.log(escrevaMeuNome('Fernanda') + ' é menor de idade');
    }
}

verificarIdade(32);