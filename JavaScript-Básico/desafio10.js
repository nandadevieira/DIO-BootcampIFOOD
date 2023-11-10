/* Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carro {
    marca;
    cor;
    gastoCombustivel;

    constructor(marca, cor, gastoCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivel = gastoCombustivel;
    }
    
    calcularGastoPercurso(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoCombustivel * precoCombustivel;
    }
}

const ka = new Carro('Ford', 'Preto', 1/12);
ka.calcularGastoPercurso(70, 5.39);
console.log(ka.calcularGastoPercurso(70, 5.39));

const palio = new Carro('Fiat','Prata', 1/15);
console.log(palio.calcularGastoPercurso(420, 5.39));