/* Elabore um algoritmo que calcule o que deve ser pago por um produto,
considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Condição de pagamento:
1 - A vista débito: recebe 10% de desconto;
2 - A vista dinheiro/pix: recebe 15% de desconto;
3 - Parcelado em 2x: preço normal sem juros;
4 - Acima de 2x: preço normal + juros de 10%. */

const precoEtiqueta = 100;
const pagamento = 4;

if (pagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (pagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (pagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log((precoEtiqueta) + (precoEtiqueta * 0.1));
} 